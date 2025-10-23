"use client"

import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Button } from "./ui/button"
import * as React from "react"
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { Textarea } from "./ui/textarea"
import { Trash } from "lucide-react"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

export interface QuesCardProps {
  quesNo: number
  title: string
  type: "MCQ" | "INPUT"
  answers: string[]
  correctAnswerIndex?: number
  correctAnswerText?: string
  marks: number
  id: number
}

export interface QuestionCardProps extends QuesCardProps {
  onUpdate: (id: number, data: Partial<QuesCardProps>) => void
  onDelete: (id: number) => void
}

export default function QuestionCard({
  quesNo,
  title,
  type = "MCQ",
  answers,
  correctAnswerIndex,
  correctAnswerText,
  marks,
  id,
  onDelete,
  onUpdate,
}: QuestionCardProps) {
  const [open, setOpen] = React.useState(false)
  const [selectedStatus, setSelectedStatus] = React.useState<string | null>(null)

  React.useEffect(() => {
    if (type === "MCQ" && correctAnswerIndex !== undefined) {
      setSelectedStatus(answers[correctAnswerIndex] ?? null)
    } else if (type === "INPUT") {
      setSelectedStatus(correctAnswerText ?? null)
    }
  }, [correctAnswerIndex, answers, type, correctAnswerText])

  const addOption = () => onUpdate(id, { answers: [...answers, ""] })

  const updateOption = (index: number, value: string) => {
    const next = [...answers]
    next[index] = value
    onUpdate(id, { answers: next })
  }

  const deleteOption = (index: number) => {
    const next = answers.filter((_, i) => i !== index)
    onUpdate(id, { answers: next })
    // also keep correctAnswerIndex in bounds
    if (correctAnswerIndex !== undefined && correctAnswerIndex >= next.length) {
      onUpdate(id, { correctAnswerIndex: Math.max(0, next.length - 1) })
    }
  }

  return (
    <div className="border rounded-2xl p-6">
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-lg font-bold">Question No {quesNo}</h1>
        <Button
          variant="destructive"
          className="cursor-pointer"
          onClick={() => onDelete(id)}
        >
          <Trash />
        </Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
        <div className="w-full items-center gap-3 flex flex-col">
          <Label htmlFor={`question-${quesNo}`} className="font-bold w-full">
            Question Text
          </Label>
          <Textarea
            id={`question-${quesNo}`}
            placeholder="Type your question"
            value={title}
            onChange={(e) => onUpdate(id, { title: e.target.value })}
            className="min-h-[100px]"
          />
        </div>

        <div className="w-full items-center gap-3 flex flex-col">
          <Label className="font-bold w-full">Question Type</Label>
          <Select value={type} onValueChange={(value) => onUpdate(id, { type: value as "MCQ" | "INPUT" })}>
            <SelectTrigger>
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="MCQ">Multiple Choice (MCQ)</SelectItem>
              <SelectItem value="INPUT">Long Form / Text Answer</SelectItem>
            </SelectContent>
          </Select>

          <Label className="font-bold w-full mt-4">Marks</Label>
          <Input
            id={`marks-${quesNo}`}
            type="number"
            placeholder="Marks"
            value={Number.isFinite(marks) ? marks : 0}
            onChange={(e) => onUpdate(id, { marks: Number(e.target.value || 0) })}
          />
        </div>
      </div>

      {type === "MCQ" ? (
        <>
          <h2 className="font-bold mt-6 mb-4">Options</h2>
          {answers.map((option, index) => (
            <div key={index} className="w-full items-center gap-3 flex my-2">
              <Input
                id={`option-${quesNo}-${index}`}
                type="text"
                placeholder={`Option ${index + 1}`}
                value={option}
                onChange={(e) => updateOption(index, e.target.value)}
              />
              <Button
                variant="destructive"
                className="cursor-pointer"
                onClick={() => deleteOption(index)}
              >
                <Trash />
              </Button>
            </div>
          ))}

          <Button className="font-semibold text-md mt-4" onClick={addOption}>
            + Add Option
          </Button>

          <div className="mt-6">
            <div className="flex items-center space-x-4 mt-2">
              <p className="text-muted-foreground text-sm">Correct Answer</p>

              <Popover open={open} onOpenChange={setOpen}>
                <PopoverTrigger asChild>
                  <Button variant="outline" className="w-[180px] justify-start">
                    {selectedStatus
                      ? selectedStatus.length > 15
                        ? selectedStatus.slice(0, 15) + "..."
                        : selectedStatus
                      : "+ Select Answer"}
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="p-0" side="right" align="start">
                  <Command>
                    <CommandInput placeholder="Search answer..." />
                    <CommandList>
                      <CommandEmpty>No results found.</CommandEmpty>
                      <CommandGroup>
                        {answers.map((option, index) => (
                          <CommandItem
                            key={index}
                            value={option}
                            onSelect={(value) => {
                              setSelectedStatus(value)
                              setOpen(false)
                              const newIndex = answers.indexOf(value)
                              onUpdate(id, { correctAnswerIndex: newIndex >= 0 ? newIndex : 0 })
                            }}
                          >
                            {option.length > 15 ? option.slice(0, 15) + "..." : option}
                          </CommandItem>
                        ))}
                      </CommandGroup>
                    </CommandList>
                  </Command>
                </PopoverContent>
              </Popover>
            </div>
          </div>
        </>
      ) : (
        <div className="mt-6 p-4 bg-muted rounded-lg">
          <Label className="font-bold mb-3 block">Answer Key / Reference Answer (Optional)</Label>
          <Textarea
            placeholder="Provide the ideal answer or key points for manual grading. If left empty, teachers will grade manually."
            value={correctAnswerText || ""}
            onChange={(e) => onUpdate(id, { correctAnswerText: e.target.value })}
            className="min-h-[120px]"
          />
          <p className="text-xs text-muted-foreground mt-2">
            💡 Tip: Leave empty for subjective grading by teachers, or provide expected answer for automatic matching.
          </p>
        </div>
      )}
    </div>
  )
}
