
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
import { getAttemptedQuizzes } from "@/app/Endpoint"
import axios from "axios"
import { useEffect, useState } from "react"

interface StudentQuiz {
    id: number;
    studentId: number;
    quizId: number;
    score: number;
}

interface Quiz {
    title: string;
    createdAt?: string;
    studentQuizzes: StudentQuiz[];
    realTime: boolean;
    uniqueCode: string
}

export default function AttemptedQuizzes() {
    const [quizzes, setQuizzes] = useState<Quiz[]>([]);
    useEffect(() => {
        const fetchquestions = async () => {
            try {
                const token = localStorage.getItem("token")
                const res = await axios.get(getAttemptedQuizzes, {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    }
                })
                setQuizzes(res.data.quizes || [])
            }
            catch (e) {
                console.error("error found - " + e)
                return
            }
        }

        fetchquestions()
    }, [])


    return (
        <>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 max-w-[1250px] mx-auto">
                {quizzes.length > 0 ?(

                    
                        quizzes.map((quiz, index) => 
                             (
                                <Card className="w-full max-w-sm h-fit p-3 cursor-pointer"
                                    key={index}
                                >
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
                                </Card>
                            )
                        ))
                    
                :( 
                    <h1>You haven't attempted any quizes yet</h1>
                )
            }
            </div>

        </>
    )
}


