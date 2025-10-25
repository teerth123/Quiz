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
import { Textarea } from "@/components/ui/textarea"
import { attemptQuiz, getQuizByCode } from "@/app/Endpoint"
import { toast } from "sonner"
import { Loader2 } from "lucide-react"
import { Skeleton } from "@/components/ui/skeleton"

const geistSans = Geist({
    variable: "--font-geist-sans",
    subsets: ["latin"],
})

interface Question {
    id: number
    title: string
    type: "MCQ" | "INPUT"
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
    const [responses, setResponses] = useState<Record<number, { answeredIndex?: number; answeredText?: string }>>({})
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
            toast.error("Enter a quiz code to continue.")
            return
        }

        const token = localStorage.getItem("token")
        if (!token) {
            setError("Session expired. Please sign in again.")
            toast.error("Session expired. Please sign in again.")
            return
        }

        try {
            setLoadingQuiz(true)
            const res = await axios.get(`${getQuizByCode}/${code}`, {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            })
            console.log("Full response data:", res.data)
            console.log("Questions array:", res.data.questions)
            console.log("First question:", res.data.questions[0])
            if (res.data.questions[0]) {
                console.log("First question type:", res.data.questions[0].type, "Type of type:", typeof res.data.questions[0].type)
            }
            setQuizData(res.data)
            setResponses({})
            toast.success(`Quiz "${res.data.quiz.title}" loaded successfully!`)
        } catch (err: unknown) {
            const axiosError = err as { response?: { data?: { msg?: string } } }
            const msg = axiosError?.response?.data?.msg ?? "Unable to load quiz."
            setQuizData(null)
            setError(msg)
            toast.error(msg)
        } finally {
            setLoadingQuiz(false)
        }
    }

    const handleOptionSelect = (questionId: number, answerIndex: number) => {
        setResponses((prev) => ({
            ...prev,
            [questionId]: { answeredIndex: answerIndex },
        }))
    }

    const handleTextAnswer = (questionId: number, text: string) => {
        setResponses((prev) => ({
            ...prev,
            [questionId]: { answeredText: text },
        }))
    }

    const handleSubmitQuiz = async () => {
        if (!quizData) {
            return
        }

        // Check that every question has a response
        if (quizData.questions.some((question) => !responses[question.id])) {
            setError("Answer every question before submitting.")
            toast.error("Answer every question before submitting.")
            return
        }

        const token = localStorage.getItem("token")
        if (!token) {
            setError("Session expired. Please sign in again.")
            toast.error("Session expired. Please sign in again.")
            return
        }

        try {
            setSubmitting(true)
            setError(null)

            const payload = {
                quizId: quizData.quiz.id,
                studentResp: quizData.questions.map((question) => {
                    const response = responses[question.id]
                    if (question.type === "MCQ") {
                        return {
                            questionId: question.id,
                            answeredIndex: response.answeredIndex,
                        }
                    } else {
                        return {
                            questionId: question.id,
                            answeredText: response.answeredText,
                        }
                    }
                }),
            }

            const res = await axios.post(attemptQuiz, payload, {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            })

            const score = res.data?.marks ?? 0
            setMessage(`Quiz submitted successfully! Score: ${score}`)
            toast.success(`Quiz submitted! You scored ${score} marks.`)
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
            toast.error(msg)
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
                                {loadingQuiz && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
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
                        {quizData.questions.map((question, questionIndex) => {
                            console.log(`Question ${questionIndex}:`, question, `Type is MCQ? ${question.type === "MCQ"}`)
                            return (
                            <div key={question.id} className="space-y-3">
                                <div>
                                    <p className="font-medium">
                                        {questionIndex + 1}. {question.title}
                                    </p>
                                    <p className="text-sm text-muted-foreground">Marks: {question.marks}</p>
                                </div>

                                {question.type === "MCQ" || !question.type ? (
                                    <div className="grid gap-2 sm:grid-cols-2">
                                        {question.answers.map((answer, answerIndex) => {
                                            const isSelected = responses[question.id]?.answeredIndex === answerIndex
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
                                ) : (
                                    <div className="space-y-2">
                                        <Label htmlFor={`answer-${question.id}`} className="text-sm">
                                            Your Answer
                                        </Label>
                                        <Textarea
                                            id={`answer-${question.id}`}
                                            placeholder="Enter your answer here..."
                                            value={responses[question.id]?.answeredText || ""}
                                            onChange={(e) => handleTextAnswer(question.id, e.target.value)}
                                            className="min-h-24"
                                        />
                                    </div>
                                )}
                            </div>
                            )
                        })}
                    </CardContent>
                    <CardFooter className="flex justify-end">
                        <Button onClick={handleSubmitQuiz} disabled={submitting}>
                            {submitting && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
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
