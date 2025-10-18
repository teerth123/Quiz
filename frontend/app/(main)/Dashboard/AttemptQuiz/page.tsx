"use client"

import { useState } from "react"
import axios from "axios"
import { useRouter } from "next/navigation"
import { Geist } from "next/font/google"
import {
    Card,
    CardHeader,
    CardTitle,
    CardDescription,
    CardContent,
    CardFooter,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"
import { attemptQuiz, getQuizByCode } from "@/app/Endpoint"

const geistSans = Geist({
    variable: "--font-geist-sans",
    subsets: ["latin"],
})

interface Question {
    id: number
    title: string
    answers: string[]
    marks: number
}

interface QuizPayload {
    quiz: {
        id: number
        title: string
    }
    questions: Question[]
}

export default function AttemptQuiz() {
    const router = useRouter()
    const [quizCode, setQuizCode] = useState("")
    const [quizData, setQuizData] = useState<QuizPayload | null>(null)
    const [responses, setResponses] = useState<Record<number, number>>({})
    const [loadingQuiz, setLoadingQuiz] = useState(false)
    const [submitting, setSubmitting] = useState(false)
    const [error, setError] = useState<string | null>(null)
    const [message, setMessage] = useState<string | null>(null)

    const handleFetchQuiz = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault()
        setError(null)
        setMessage(null)
        const code = quizCode.trim()

        if (!code) {
            setError("Enter a quiz code to continue.")
            return
        }

        const token = localStorage.getItem("token")
        if (!token) {
            setError("Session expired. Please sign in again.")
            return
        }

        try {
            setLoadingQuiz(true)
            const res = await axios.get(`${getQuizByCode}/${code}`, {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            })
            setQuizData(res.data)
            setResponses({})
        } catch (err: unknown) {
            const axiosError = err as { response?: { data?: { msg?: string } } }
            const msg = axiosError?.response?.data?.msg ?? "Unable to load quiz."
            setQuizData(null)
            setError(msg)
        } finally {
            setLoadingQuiz(false)
        }
    }

    const handleOptionSelect = (questionId: number, answerIndex: number) => {
        setResponses((prev) => ({
            ...prev,
            [questionId]: answerIndex,
        }))
    }

    const handleSubmitQuiz = async () => {
        if (!quizData) {
            return
        }

        if (quizData.questions.some((question) => responses[question.id] === undefined)) {
            setError("Answer every question before submitting.")
            return
        }

        const token = localStorage.getItem("token")
        if (!token) {
            setError("Session expired. Please sign in again.")
            return
        }

        try {
            setSubmitting(true)
            setError(null)

            const payload = {
                quizId: quizData.quiz.id,
                studentResp: quizData.questions.map((question) => ({
                    questionId: question.id,
                    answeredIndex: responses[question.id],
                })),
            }

            const res = await axios.post(attemptQuiz, payload, {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            })

            setMessage(`Quiz submitted successfully! Score: ${res.data?.marks ?? 0}`)
            setQuizData(null)
            setResponses({})
            setQuizCode("")

            setTimeout(() => {
                router.push("/Dashboard/AttemptedQuizzes")
            }, 1500)
        } catch (err: unknown) {
            const axiosError = err as { response?: { data?: { msg?: string } } }
            const msg = axiosError?.response?.data?.msg ?? "Submission failed."
            setError(msg)
        } finally {
            setSubmitting(false)
        }
    }

    return (
        <div className={`${geistSans.variable} flex flex-col gap-6 px-4 pb-10`}> 
            {!quizData && (
                <Card className="max-w-xl mx-auto">
                    <CardHeader>
                        <CardTitle>Enter Quiz Code</CardTitle>
                        <CardDescription>Join a quiz shared by your teacher and submit your responses.</CardDescription>
                    </CardHeader>
                    <CardContent>
                        <form onSubmit={handleFetchQuiz} className="flex flex-col gap-4 sm:flex-row sm:items-end">
                            <div className="flex-1 space-y-2">
                                <Label htmlFor="quiz-code">Quiz Code</Label>
                                <Input
                                    id="quiz-code"
                                    placeholder="e.g. A1B2C3"
                                    value={quizCode}
                                    onChange={(event) => setQuizCode(event.target.value)}
                                />
                            </div>
                            <Button type="submit" disabled={loadingQuiz}>
                                {loadingQuiz ? "Finding..." : "Load Quiz"}
                            </Button>
                        </form>
                    </CardContent>
                    {(error || message) && (
                        <CardFooter>
                            {error && <p className="text-sm text-red-500">{error}</p>}
                            {message && <p className="text-sm text-green-600">{message}</p>}
                        </CardFooter>
                    )}
                </Card>
            )}

            {quizData && (
                <Card className="max-w-3xl mx-auto">
                    <CardHeader>
                        <CardTitle>{quizData.quiz.title}</CardTitle>
                        <CardDescription>Answer every question and submit when you are ready.</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-6">
                        {quizData.questions.map((question, questionIndex) => (
                            <div key={question.id} className="space-y-3">
                                <div>
                                    <p className="font-medium">
                                        {questionIndex + 1}. {question.title}
                                    </p>
                                    <p className="text-sm text-muted-foreground">Marks: {question.marks}</p>
                                </div>
                                <div className="grid gap-2 sm:grid-cols-2">
                                    {question.answers.map((answer, answerIndex) => {
                                        const isSelected = responses[question.id] === answerIndex
                                        return (
                                            <Button
                                                key={answerIndex}
                                                type="button"
                                                variant={isSelected ? "default" : "outline"}
                                                className="justify-start text-left"
                                                onClick={() => handleOptionSelect(question.id, answerIndex)}
                                            >
                                                <span className="font-semibold mr-2">{String.fromCharCode(65 + answerIndex)}.</span>
                                                {answer}
                                            </Button>
                                        )
                                    })}
                                </div>
                            </div>
                        ))}
                    </CardContent>
                    <CardFooter className="flex justify-end">
                        <Button onClick={handleSubmitQuiz} disabled={submitting}>
                            {submitting ? "Submitting..." : "Submit Quiz"}
                        </Button>
                    </CardFooter>
                </Card>
            )}

            {error && quizData && (
                <p className="text-sm text-red-500 text-center">{error}</p>
            )}
            {message && quizData && (
                <p className="text-sm text-green-600 text-center">{message}</p>
            )}
        </div>
    )
}
