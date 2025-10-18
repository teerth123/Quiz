"use client"

import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import {
    getAttemptedQuizDetails,
    getAttemptedQuizzes,
} from "@/app/Endpoint"
import axios from "axios"
import Link from "next/link"
import { useEffect, useState } from "react"

interface AttemptedQuiz {
    quizId: number
    score: number
    createdAt: string
    quiz: {
        title: string
        uniqueCode: string
    }
}

interface AttemptDetailResponse {
    quiz: {
        id: number
        title: string
    }
    attempt: {
        score: number
        attemptedAt: string
    }
    responses: Array<{
        questionId: number
        answeredIndex: number | null
        isCorrect: boolean
        question: {
            id: number
            title: string
            answers: string[]
            correctAnswerIndex: number | null
            marks: number
        }
    }>
}

export default function AttemptedQuizzes() {
    const [attempts, setAttempts] = useState<AttemptedQuiz[]>([])
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState<string | null>(null)
    const [detailOpen, setDetailOpen] = useState(false)
    const [detailLoading, setDetailLoading] = useState(false)
    const [detailError, setDetailError] = useState<string | null>(null)
    const [attemptDetail, setAttemptDetail] = useState<AttemptDetailResponse | null>(null)
    const [selectedQuizId, setSelectedQuizId] = useState<number | null>(null)

    useEffect(() => {
        const fetchAttempts = async () => {
            try {
                setLoading(true)
                setError(null)
                const token = localStorage.getItem("token")
                const res = await axios.get(getAttemptedQuizzes, {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                })
                const data = res.data?.result
                setAttempts(Array.isArray(data) ? data : [])
            } catch (e) {
                console.error("error found - " + e)
                setError("Unable to load attempted quizzes.")
            } finally {
                setLoading(false)
            }
        }

        fetchAttempts()
    }, [])

    const formatDate = (value: string) => {
        const date = new Date(value)
        if (Number.isNaN(date.getTime())) return "—"
        return date.toLocaleString()
    }

    const handleViewDetails = async (quizId: number) => {
        setSelectedQuizId(quizId)
        setDetailOpen(true)
        setDetailLoading(true)
        setDetailError(null)
        setAttemptDetail(null)

        const token = localStorage.getItem("token")
        if (!token) {
            setDetailError("Session expired. Please sign in again.")
            setDetailLoading(false)
            return
        }

        try {
            const res = await axios.get(`${getAttemptedQuizDetails}/${quizId}`, {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            })
            setAttemptDetail(res.data)
        } catch (err: unknown) {
            console.error("error fetching attempt details - ", err)
            const axiosError = err as { response?: { data?: { msg?: string } } }
            const msg = axiosError?.response?.data?.msg ?? "Unable to load attempt details."
            setDetailError(msg)
        } finally {
            setDetailLoading(false)
        }
    }

    return (
        <>
            <div className="flex justify-end max-w-[1250px] mx-auto mb-4 px-2">
                <Link href="/Dashboard/AttemptQuiz">
                    <Button>Attempt a Quiz</Button>
                </Link>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 max-w-[1250px] mx-auto">
                {loading ? (
                    <p>Loading attempts...</p>
                ) : attempts.length > 0 ? (
                    attempts.map((attempt) => (
                        <Card className="w-full max-w-sm h-fit p-3" key={attempt.quizId}>
                            <CardHeader>
                                <CardTitle>{attempt.quiz.title}</CardTitle>
                                <CardDescription>
                                    Attempted on: {formatDate(attempt.createdAt)}
                                </CardDescription>
                            </CardHeader>
                            <CardContent className="space-y-2">
                                <p>Score: {attempt.score}</p>
                                <p>Quiz Code: {attempt.quiz.uniqueCode}</p>
                            </CardContent>
                            <CardFooter className="flex justify-end">
                                <Dialog
                                    open={detailOpen && selectedQuizId === attempt.quizId}
                                    onOpenChange={(isOpen) => {
                                        if (!isOpen) {
                                            setDetailOpen(false)
                                            setSelectedQuizId(null)
                                            setAttemptDetail(null)
                                            setDetailError(null)
                                        }
                                    }}
                                >
                                    <DialogTrigger asChild>
                                        <Button variant="outline" onClick={() => handleViewDetails(attempt.quizId)}>
                                            View Answers
                                        </Button>
                                    </DialogTrigger>
                                    <DialogContent className="sm:max-w-2xl">
                                        <DialogHeader>
                                            <DialogTitle>{attemptDetail?.quiz.title ?? "Attempt Details"}</DialogTitle>
                                            <DialogDescription>
                                                {attemptDetail?.attempt && (
                                                    <span>
                                                        Score: {attemptDetail.attempt.score} • Attempted on {formatDate(attemptDetail.attempt.attemptedAt)}
                                                    </span>
                                                )}
                                            </DialogDescription>
                                        </DialogHeader>
                                        {detailLoading && <p>Loading responses...</p>}
                                        {detailError && <p className="text-sm text-red-500">{detailError}</p>}
                                        {!detailLoading && !detailError && attemptDetail && (
                                            <div className="space-y-4 max-h-[60vh] overflow-y-auto pr-2">
                                                {attemptDetail.responses.map((response, index) => {
                                                    const studentAnswer = response.answeredIndex ?? -1
                                                    const correctIndex = response.question.correctAnswerIndex ?? -1
                                                    const isCorrect = response.isCorrect
                                                    return (
                                                        <div
                                                            key={response.questionId}
                                                            className="rounded-md border p-4 bg-muted"
                                                        >
                                                            <div className="flex items-start justify-between gap-4">
                                                                <div>
                                                                    <p className="font-semibold">
                                                                        {index + 1}. {response.question.title}
                                                                    </p>
                                                                    <p className="text-sm text-muted-foreground">
                                                                        Marks: {response.question.marks}
                                                                    </p>
                                                                </div>
                                                                <span
                                                                    className={`text-sm font-medium ${isCorrect ? "text-primary" : "text-destructive"}`}
                                                                >
                                                                    {isCorrect ? "Correct" : "Incorrect"}
                                                                </span>
                                                            </div>
                                                            <div className="mt-3 space-y-1 text-sm text-muted-foreground">
                                                                <p>
                                                                    Your answer: {studentAnswer >= 0
                                                                        ? response.question.answers[studentAnswer]
                                                                        : "Not answered"}
                                                                </p>
                                                                <p>
                                                                    Correct answer: {correctIndex >= 0
                                                                        ? response.question.answers[correctIndex]
                                                                        : "Not available"}
                                                                </p>
                                                            </div>
                                                        </div>
                                                    )
                                                })}
                                            </div>
                                        )}
                                    </DialogContent>
                                </Dialog>
                            </CardFooter>
                        </Card>
                    ))
                ) : (
                    <p>You haven't attempted any quizzes yet.</p>
                )}
            </div>
            {error && <p className="text-sm text-red-500 text-center mt-4">{error}</p>}
        </>
    )
}