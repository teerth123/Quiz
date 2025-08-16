
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
import { createdQuiz } from "@/app/Endpoint"
import axios from "axios"
import { useEffect, useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
// import { useRouter } from "next/router"

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
    const [quizzes, setQuizzes] = useState<Quiz[]>([]);
    useEffect(() => {
        const fetchquestions = async () => {
            try {
                const token = localStorage.getItem("token")
                const res = await axios.get(createdQuiz, {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    }
                })
                setQuizzes(res.data.quizes)
            }
            catch (e) {
                console.error("error found - " + e)
                return
            }
        }

        fetchquestions()
    }, [])

    // const Router = useRouter()

    return (
        <>

            <div className="flex flex-wrap items-center gap-2 justify-end m-5 w-max-[1250px] md:flex-row ">
                <Button>Create New Button</Button>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 max-w-[1250px] mx-auto">
                {
                    quizzes.map((quiz, index) => {
                        const quizSlug = slugify(quiz.title)
                        return (
                                <Card className="w-full max-w-sm h-fit p-3 cursor-pointer"
                                    key={index}
                                >
                                    <Link href={`/Dashboard/${quizSlug}-${quiz.id}`} >
                                        <CardHeader>
                                            <CardTitle className="">{quiz.title}</CardTitle>
                                            <CardDescription>Created At : {quiz.createdAt?.toString().slice(0, 10)}</CardDescription>
                                            <CardAction>Card Action</CardAction>
                                        </CardHeader>
                                        <CardContent>
                                            <p>Responses : {quiz.studentQuizzes?.length || 0} | Mode : {quiz.realTime ? "Real-Time" : "Standard"} </p>
                                        </CardContent>
                                        <CardFooter>
                                            <p>Unique Code : {quiz.uniqueCode}</p>
                                        </CardFooter>
                                    </Link>
                                </Card>
                        )
                    })
                }
            </div>

        </>
    )
}


