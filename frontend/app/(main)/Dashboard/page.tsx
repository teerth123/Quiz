
"use client"
import {
    Card,
    CardAction,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { createdQuiz, deleteQuiz } from "@/app/Endpoint"
import axios from "axios"
import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { MoreVertical, Pencil, Trash2, Copy } from "lucide-react"
import { useRouter } from "next/navigation"
import { toast } from "sonner"
import { Skeleton } from "@/components/ui/skeleton"
import EmptyQuizState from "@/components/EmptyQuizState"

interface StudentQuiz {
    id: number;
    studentId: number;
    quizId: number;
    score: number;
}

interface Quiz {
    id: number,
    title: string;
    createdAt?: string;
    studentQuizzes: StudentQuiz[];
    realTime: boolean;
    uniqueCode: string
}

function slugify(text: string) {
    return text
        .toLowerCase()
        .trim()
        .replace(/\s+/g, "-")        // spaces → hyphens
        .replace(/[^\w-]+/g, "");    // remove special chars
}

export default function Dashboard() {
    const router = useRouter()
    const [quizzes, setQuizzes] = useState<Quiz[]>([])
    const [openMenuId, setOpenMenuId] = useState<number | null>(null)
    const [deletingQuizId, setDeletingQuizId] = useState<number | null>(null)
    const [copiedQuizId, setCopiedQuizId] = useState<number | null>(null)
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        const fetchquestions = async () => {
            try {
                setIsLoading(true)
                const token = localStorage.getItem("token")
                const res = await axios.get(createdQuiz, {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    }
                })
                setQuizzes(res.data.quizes)
            }
            catch (e: any) {
                console.error("error found - " + e)
                toast.error("Failed to load quizzes")
            } finally {
                setIsLoading(false)
            }
        }

        fetchquestions()
    }, [])

    useEffect(() => {
        if (!copiedQuizId) return
        const timeout = setTimeout(() => setCopiedQuizId(null), 1600)
        return () => clearTimeout(timeout)
    }, [copiedQuizId])

    const closeMenu = () => setOpenMenuId(null)

    const handleEdit = (quizId: number) => {
        closeMenu()
        router.push(`/CreateNewQuiz?quizId=${quizId}`)
    }

    const handleDelete = async (quizId: number) => {
        closeMenu()
        if (!window.confirm("Delete this quiz and all associated responses?")) return

        try {
            setDeletingQuizId(quizId)
            const token = localStorage.getItem("token")
            await axios.delete(deleteQuiz, {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
                data: {
                    quizId,
                }
            })
            setQuizzes((prev) => prev.filter((quiz) => quiz.id !== quizId))
            toast.success("Quiz deleted successfully")
        }
        catch (e: any) {
            console.error("error deleting quiz - ", e)
            toast.error("Failed to delete quiz")
        }
        finally {
            setDeletingQuizId(null)
        }
    }

    const handleCopy = async (quizId: number, code: string) => {
        try {
            await navigator.clipboard.writeText(code)
            setCopiedQuizId(quizId)
            toast.success("Quiz code copied to clipboard!")
        }
        catch (e) {
            console.error("error copying quiz code - ", e)
            toast.error("Failed to copy quiz code")
        }
    }

    const navigateToDetails = (quizSlug: string, quizId: number) => {
        router.push(`/Dashboard/${quizSlug}-${quizId}`)
    }

    return (
        <>
            {isLoading ? (
                <>
                    <div className="flex w-full max-w-[1250px] justify-end gap-2 px-4 md:px-0 mx-auto mb-5">
                        <Skeleton className="h-10 w-40" />
                    </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 max-w-[1250px] mx-auto">
                    {[1, 2, 3, 4, 5, 6].map((n) => (
                        <Card key={n} className="w-full max-w-sm h-fit p-3">
                            <CardHeader>
                                <Skeleton className="h-6 w-3/4 mb-2" />
                                <Skeleton className="h-4 w-1/2" />
                            </CardHeader>
                            <CardContent>
                                <Skeleton className="h-4 w-full" />
                            </CardContent>
                            <CardFooter>
                                <Skeleton className="h-4 w-2/3" />
                            </CardFooter>
                        </Card>
                    ))}
                </div>
                </>
            ) : quizzes.length === 0 ? (
                <EmptyQuizState />
            ) : (
                <>
                    <div className="flex w-full max-w-[1250px] justify-end gap-2 px-4 md:px-0 mx-auto mb-5">
                        <Button onClick={() => router.push("/CreateNewQuiz")}>
                            Create New Quiz
                        </Button>
                    </div>
                    
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 max-w-[1250px] mx-auto">
                    {quizzes.map((quiz) => {
                    const quizSlug = slugify(quiz.title)
                    const isMenuOpen = openMenuId === quiz.id
                    const isDeleting = deletingQuizId === quiz.id

                    return (
                        <Card
                            className="w-full max-w-sm h-fit p-3 cursor-pointer transition-all hover:border-primary"
                            key={quiz.id}
                            role="button"
                            tabIndex={0}
                            onClick={() => navigateToDetails(quizSlug, quiz.id)}
                            onKeyDown={(event) => {
                                if (event.key === "Enter" || event.key === " ") {
                                    event.preventDefault()
                                    navigateToDetails(quizSlug, quiz.id)
                                }
                            }}
                        >
                            <CardHeader>
                                <div>
                                    <CardTitle>{quiz.title}</CardTitle>
                                    <CardDescription>
                                        Created At : {quiz.createdAt?.toString().slice(0, 10)}
                                    </CardDescription>
                                </div>
                                <CardAction>
                                    <Popover
                                        open={isMenuOpen}
                                        onOpenChange={(open) => setOpenMenuId(open ? quiz.id : null)}
                                    >
                                        <PopoverTrigger asChild>
                                            <Button
                                                variant="ghost"
                                                size="icon"
                                                onClick={(event) => {
                                                    event.stopPropagation()
                                                }}
                                                aria-label="Quiz actions"
                                            >
                                                <MoreVertical className="size-4" />
                                            </Button>
                                        </PopoverTrigger>
                                        <PopoverContent
                                            align="end"
                                            className="w-48 p-2 flex flex-col gap-1"
                                            sideOffset={8}
                                            onClick={(event) => {
                                                event.stopPropagation()
                                            }}
                                        >
                                            <Button
                                                variant="ghost"
                                                className="justify-start"
                                                onClick={(event) => {
                                                    event.stopPropagation()
                                                    handleEdit(quiz.id)
                                                }}
                                            >
                                                <Pencil className="size-4" />
                                                Edit quiz
                                            </Button>
                                            <Button
                                                variant="ghost"
                                                className="justify-start"
                                                disabled={isDeleting}
                                                onClick={(event) => {
                                                    event.stopPropagation()
                                                    handleDelete(quiz.id)
                                                }}
                                            >
                                                <Trash2 className="size-4" />
                                                {isDeleting ? "Deleting..." : "Delete quiz"}
                                            </Button>
                                            <Button
                                                variant="ghost"
                                                className="justify-start"
                                                onClick={(event) => {
                                                    event.stopPropagation()
                                                    handleCopy(quiz.id, quiz.uniqueCode)
                                                }}
                                            >
                                                <Copy className="size-4" />
                                                {copiedQuizId === quiz.id ? "Code copied" : "Copy invite code"}
                                            </Button>
                                        </PopoverContent>
                                    </Popover>
                                </CardAction>
                            </CardHeader>
                            <CardContent>
                                <p>
                                    Responses : {quiz.studentQuizzes?.length || 0} | Mode : {quiz.realTime ? "Real-Time" : "Standard"}
                                </p>
                            </CardContent>
                            <CardFooter>
                                <p>Unique Code : {quiz.uniqueCode}</p>
                            </CardFooter>
                        </Card>
                    )
                })}
                    </div>
                </>
            )}
        </>
    )
}


