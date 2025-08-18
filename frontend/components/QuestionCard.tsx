"use client"

import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Checkbox } from "@/components/ui/checkbox"
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
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover"
import { Textarea } from "./ui/textarea"
import { Trash } from "lucide-react"

const statuses: string[] = ["Option 1", "Option 2", "Option 3", "Option 4"]

export interface QuesCardProps {
    quesNo: number
    title: string
    answers: string[]
    correctAnswerIndex: number
    marks: number
    id: number
    // onDelete : (id:number) => void
    // onUpdate : (id:number , data:Partial<QuesCardProps>) => void, 
}


export interface QuestionCardProps extends QuesCardProps {
    onUpdate: (id: number, data: Partial<QuesCardProps>) => void
    onDelete: (id: number) => void
}

export default function QuestionCard({
    quesNo,
    title,
    answers,
    correctAnswerIndex,
    marks,
    id,
    onDelete,
    onUpdate,
}: QuestionCardProps) {
    const [open, setOpen] = React.useState(false)
    const [selectedStatus, setSelectedStatus] = React.useState<string | null>(null)

    React.useEffect(() => {
        setSelectedStatus(answers[correctAnswerIndex] || null)
    }, [correctAnswerIndex, answers])

    const addOption = () => {
        onUpdate(id, { answers: [...answers, ""] })
    }

    const updateOption = (index: number, value: string) => {
        const newanswers = [...answers]
        newanswers[index] = value
        onUpdate(id, { answers: newanswers })
    }

    const deleteOption = (index: number) => {
        const newArray = answers.filter((_, i) => i !== index)
        onUpdate(id, { answers: newArray })
    }

    const updatetitle = (value: string) => {
        onUpdate(id, { title: value })
    }

    const updateMarks = (value: number) => {
        onUpdate(id, { marks: value })
    }

    return (
        <div className="border rounded-2xl p-4">
            <div className="flex justify-between">
                <h1 className="text-lg font-bold">Question No {quesNo}</h1>
                <Button variant="destructive" className="cursor-pointer" onClick={()=>onDelete}><Trash /></Button>
            </div>
            <div className="w-full max-w-sm items-center gap-3 flex mt-4">
                <Label htmlFor={`question-${quesNo}`} className="font-bold">
                    Question
                </Label>
                <Textarea
                    id={`question-${quesNo}`}
                    placeholder={title}
                    defaultValue={title}
                    onChange={(e) => updatetitle(e.target.value)}
                />
            </div>

            <h2 className="font-bold mt-6">answers</h2>
            {answers.map((option, index) => (
                <div
                    key={index}
                    className="w-full max-w-sm items-center gap-3 flex my-2"
                >
                    <Checkbox id={`option-${quesNo}-${index}`} />
                    <Input
                        id={`option-${quesNo}-${index}`}
                        type="text"
                        placeholder={`Option ${index + 1}`}
                        value={option}
                        onChange={(e) => updateOption(index, e.target.value)}
                    />
                    <Button variant="destructive" className="cursor-pointer" onClick={() => deleteOption(index)}><Trash /></Button>
                </div>
            ))}

            <Button className="font-semibold text-md mt-2" onClick={addOption}>
                Add Option
            </Button>

            <div className="mt-6">
                <div className="flex items-center space-x-4 mt-2">
                    <p className="text-muted-foreground text-sm">Answer</p>

                    <Popover open={open} onOpenChange={setOpen}>
                        <PopoverTrigger asChild>
                            <Button variant="outline" className="w-[150px] justify-start">
                                {selectedStatus ? selectedStatus : "+ Set status"}
                            </Button>
                        </PopoverTrigger>
                        <PopoverContent className="p-0" side="right" align="start">
                            <Command>
                                <CommandInput placeholder="Change status..." />
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
                                                    onUpdate(id, { correctAnswerIndex: answers.indexOf(value) })
                                                }}
                                            >
                                                {option}
                                            </CommandItem>
                                        ))}
                                    </CommandGroup>
                                </CommandList>
                            </Command>
                        </PopoverContent>
                    </Popover>

                    <div className="flex items-center gap-2">
                        <Label className="font-bold">
                            Marks
                        </Label>
                        <Input
                            id={`marks-${quesNo}`}
                            type="number"
                            placeholder={marks.toString()}
                            className="w-20"
                            onChange={(e) => updateMarks(Number(e.target.value))}
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}
