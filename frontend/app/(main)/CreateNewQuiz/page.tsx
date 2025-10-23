"use client"

import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import QuestionCard, { QuesCardProps } from "@/components/QuestionCard"
import { useEffect, useMemo, useState } from "react"
import { Button } from "@/components/ui/button"
import axios from "axios"
import { createQuiz, addQuestions, quizResults } from "@/app/Endpoint"
import { useRouter, useSearchParams } from "next/navigation"

interface BackendQues {
  id: number
  title: string
  type: "MCQ" | "INPUT"
  answers: string[]
  correctAnswerIndex?: number
  correctAnswerText?: string
  marks: number
}

export default function CreateNewQuiz() {
  const Router = useRouter()
  const searcher = useSearchParams()
  const quizId = searcher.get("quizId")
  const isEditing = useMemo(() => Boolean(quizId), [quizId])

  const [quizTitle, setQuizTitle] = useState("")
  const [quizMode, setQuizMode] = useState("Standard")
  const [allQuestions, setAllQues] = useState<QuesCardProps[]>([
    {
      quesNo: 1,
      type: "MCQ",
      title: "Sample MCQ Question",
      answers: ["Option 1", "Option 2", "Option 3", "Option 4"],
      correctAnswerIndex: 0,
      marks: 1,
      id: 0,
    },
  ])

  // Load existing quiz when editing
  useEffect(() => {
    if (!isEditing) return
    const token = localStorage.getItem("token")
    const url = quizResults + quizId

    const fetchData = async () => {
      try {
        const res = await axios.get(url, {
          headers: { Authorization: `Bearer ${token}` },
        })

        if (res.data?.status === "+") {
          const fetched: BackendQues[] = res.data.questions?.[0]?.question ?? []
          const mapped: QuesCardProps[] = fetched.map((q, i) => ({
            quesNo: i + 1,
            type: q.type || "MCQ",
            title: q.title,
            answers: q.answers,
            correctAnswerIndex: q.correctAnswerIndex,
            correctAnswerText: q.correctAnswerText,
            marks: q.marks,
            id: q.id, // keep backend id to allow proper updates
          }))
          setAllQues(mapped)
          setQuizTitle(res.data.quizTitle.title ?? "")
        }
      } catch (e) {
        console.error("error fetching quiz - ", e)
      }
    }

    fetchData()
  }, [isEditing, quizId])

  // Helpers
  const nextLocalId = () =>
    (allQuestions.length ? Math.max(...allQuestions.map((q) => q.id)) : -1) + 1

  // Add, Update, Delete
  const AddQue = () => {
    const nextNo = allQuestions.length + 1
    setAllQues((prev) => [
      ...prev,
      {
        quesNo: nextNo,
        type: "MCQ",
        title: "New Question",
        answers: ["Option 1", "Option 2", "Option 3", "Option 4"],
        correctAnswerIndex: 0,
        marks: 1,
        id: nextLocalId(), // avoid clashing with backend ids
      },
    ])
  }

  const onUpdate = (id: number, data: Partial<QuesCardProps>) => {
    setAllQues((prev) =>
      prev.map((q) => (q.id === id ? { ...q, ...data } : q))
    )
  }

  const onDelete = (id: number) => {
    setAllQues((prev) => {
      const filtered = prev.filter((q) => q.id !== id)
      // re-number quesNo for display
      return filtered.map((q, i) => ({ ...q, quesNo: i + 1 }))
    })
  }

  // Save
  const SaveButton = async () => {
    try {
      const token = localStorage.getItem("token")
      const headers = { Authorization: `Bearer ${token}` }

      if (isEditing && quizId) {
        // If your backend expects an update endpoint, use it here.
        // If addQuestions upserts/replaces, this will work:
        const addRes = await axios.post(
          addQuestions,
          { quizId, questions: allQuestions },
          { headers }
        )
        if (addRes.data?.status === "+") Router.push("/Dashboard")
        return
      }

      // Create new quiz flow
      const createRes = await axios.post(
        createQuiz,
        { title: quizTitle, realTime: quizMode !== "Standard" },
        { headers }
      )
      if (createRes.data?.status === "+") {
        const newQuizId = createRes.data.quizId
        const addRes = await axios.post(
          addQuestions,
          { quizId: newQuizId, questions: allQuestions },
          { headers }
        )
        if (addRes.data?.status === "+") Router.push("/Dashboard")
      }
    } catch (e) {
      console.error("error saving quiz - ", e)
    }
  }

  return (
    <>
      <div className="flex flex-col items-center mx-auto w-full">
        <h1 className="text-4xl font-bold my-20 text-left w-full">
          {isEditing ? "Edit your quiz" : "Let's create something new"}
        </h1>

        <div className="border-2 rounded-2xl flex flex-col w-11/12 max-w-4xl px-8 py-5">
          <div className="grid w-full items-center gap-3 mt-5">
            <Label htmlFor="quizTitle" className="font-bold">
              Quiz Title
            </Label>
            <Textarea
              id="quizTitle"
              placeholder="Docker Quiz"
              value={quizTitle}
              onChange={(e) => setQuizTitle(e.target.value)}
            />
          </div>

          <div className="grid w-full items-center gap-3 mt-2">
            <Label className="font-bold">Mode</Label>
            <Select value={quizMode} onValueChange={setQuizMode}>
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Form Mode" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectLabel>Mode</SelectLabel>
                  <SelectItem value="Real Time">Real Time</SelectItem>
                  <SelectItem value="Standard">Standard</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
          </div>

          <div className="my-10">
            {allQuestions.map((q) => (
              <div className="my-2" key={q.id}>
                <QuestionCard
                  quesNo={q.quesNo}
                  type={q.type}
                  title={q.title}
                  answers={q.answers}
                  correctAnswerIndex={q.correctAnswerIndex}
                  correctAnswerText={q.correctAnswerText}
                  marks={q.marks}
                  id={q.id}
                  onDelete={onDelete}
                  onUpdate={onUpdate}
                />
              </div>
            ))}
          </div>

          <Button onClick={AddQue}>Add New Question</Button>
        </div>
      </div>

      <Button className="fixed bottom-5 right-5" onClick={SaveButton}>
        Save Quiz
      </Button>
    </>
  )
}
