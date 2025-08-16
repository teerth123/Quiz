"use client"

import axios from "axios";
import { useParams } from "next/navigation"
import { useEffect, useState } from "react";
import { quizResults } from "@/app/Endpoint";
import { heading } from "@/app/Endpoint"
import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableFooter,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"


interface resp {
    score: number,
    student: {
        username: string,
        id: number,
        email: string
    }
}

interface Ques {
    title: string,
    answers: string[],
    correctAnswerIndex: number,
    marks: number
}


export default function QuizDetails() {
    const { Quiz } = useParams()
    // const decoded = decodeURIComponent(Quiz as string);
    const quizId = Number(Quiz?.toString().split("-").pop())
    const quizResults = `${heading}/api/v1/read/resultperQuiz/${quizId}`

    const [studentResponses, setStudentResponses] = useState<resp[] | null>(null)
    // const [data, setData] = useState<quizResult[] | null>(null)
    const [questions, setQues] = useState<Ques[] | null>(null)
    // console.log("quizId is - " + quizId);
    const [title, setTitle] = useState("")

    useEffect(() => {
        const fetchResp = async () => {
            try {
                const token = localStorage.getItem("token")
                const res = await axios.get(quizResults,
                    {
                        headers: {
                            Authorization: `Bearer ${token}`
                        }
                    },
                )
                setStudentResponses(res.data.result);
                console.log(res.data);
                setTitle(res.data.quizTitle.title);
                setQues(res.data.questions[0].question);

                console.log("questoins - ", questions);
                console.log("Students responses - ", studentResponses)

            } catch (e) {
                console.error("error found - " + e)
                return
            }
        }
        if (quizId) fetchResp()
        // if (data) {
        //     console.log(data[0])

        // } else {
        //     console.log("no data")
        // }
    }, [])
    return (
        <>
            <div>
                {/* {!data ? (
                    <p>Loading</p>
                ) : ( */}
                    <div>
                        <h1>quiz name - {title}</h1>
                        <h1>Responses</h1>
                        {studentResponses && studentResponses.length ? (
                            <Table>
                                <TableCaption>Students Responses</TableCaption>
                                <TableHeader>
                                    <TableRow>
                                        <TableCell>Index</TableCell>
                                        <TableHead className="">Student Name</TableHead>
                                        <TableHead>Student Email</TableHead>
                                        <TableHead>Score</TableHead>
                                        {/* <TableHead className="text-right">Amount</TableHead> */}
                                    </TableRow>
                                </TableHeader>
                                <TableBody>
                                    {studentResponses && studentResponses.map((index, i) => (
                                        <TableRow key={index.student.id}>
                                            <TableCell>{i+1}</TableCell>
                                            <TableCell>{index.student.username}</TableCell>
                                            <TableCell>{index.student.email}</TableCell>
                                            <TableCell>{index.score}</TableCell>
                                        </TableRow>
                                    ))}
                                </TableBody>
                            </Table>
                        ) : (
                            <h1>No Responses so far</h1>
                        )}

                        <h1>Questions</h1>
                        {questions && questions.length > 0 ? (
                            <Table>
                                <TableCaption>Quiz Questions</TableCaption>
                                <TableHeader>
                                    <TableRow>
                                        <TableCell>Index</TableCell>
                                        <TableHead className="">Question</TableHead>
                                        <TableHead  >Answer</TableHead>
                                        <TableHead >Correct Option Number</TableHead>
                                        <TableHead >Marks</TableHead>
                                    </TableRow>
                                </TableHeader>
                                <TableBody>
                                    {questions.map((q, i) => (
                                        <TableRow key={i}>
                                            <TableCell>{i+1}</TableCell>
                                            <TableCell>{q.title}</TableCell>
                                            <TableCell>{q.answers[q.correctAnswerIndex]}</TableCell>
                                            <TableCell>{q.correctAnswerIndex + 1}</TableCell>
                                            <TableCell>{q.marks}</TableCell>
                                        </TableRow>
                                    ))}
                                </TableBody>
                            </Table>
                         ) : (
                            <h1>No questions added yet</h1>
                        )}
                    </div>

                {/* )
                } */}

            </div>
        </>
    )
}



