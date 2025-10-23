"use client"

import axios from "axios";
import Link from "next/link";
import { useParams } from "next/navigation"
import { useEffect, useState } from "react";
import { quizResults } from "@/app/Endpoint";
import { heading } from "@/app/Endpoint"
import Router, { useRouter } from "next/navigation";
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
import { Button } from "@/components/ui/button";
import { ChartBarDefault } from "./Charts";

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
    type: "MCQ" | "INPUT",
    answers: string[],
    correctAnswerIndex?: number,
    correctAnswerText?: string,
    marks: number
}


export default function QuizDetails() {
    const { Quiz } = useParams()
    const quizId = Number(Quiz?.toString().split("-").pop())
    const quizResults = `${heading}/api/v1/read/resultperQuiz/${quizId}`

    const [studentResponses, setStudentResponses] = useState<resp[] | null>(null)
    const [questions, setQues] = useState<Ques[] | null>(null)
    const [title, setTitle] = useState("")
    const [chartData, setChartData] = useState<Array<{ marks: number; students: number }>>([])

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
                setTitle(res.data.quizTitle.title);
                setQues(res.data.questions[0].question);

                if (res.data.result && res.data.result.length > 0) {
                    const scoreMap = new Map<number, number>();
                    res.data.result.forEach((student: resp) => {
                        const score = student.score;
                        scoreMap.set(score, (scoreMap.get(score) || 0) + 1);
                    });

                    const dynamicData = Array.from(scoreMap, ([marks, students]) => ({
                        marks,
                        students
                    })).sort((a, b) => a.marks - b.marks);

                    setChartData(dynamicData);
                }
            } catch (e) {
                console.error("error found - " + e)
                return
            }
        }
        if (quizId) fetchResp()
    }, [quizId])

    const Router = useRouter()

    const exportToCSV = () => {
        if (!studentResponses || studentResponses.length === 0) {
            alert("No responses to export");
            return;
        }

        const headers = ["Index", "Student Name", "Student Email", "Score"];
        const csvContent = [
            headers.join(","),
            ...studentResponses.map((student, index) => [
                index + 1,
                `"${student.student.username}"`, // Wrap in quotes to handle commas
                `"${student.student.email}"`,
                student.score
            ].join(","))
        ].join("\n");

        const blob = new Blob([csvContent], { type: "text/csv;charset=utf-8;" });
        const link = document.createElement("a");
        const url = URL.createObjectURL(blob);
        
        link.setAttribute("href", url);
        link.setAttribute("download", `${title || "quiz"}_responses_${new Date().toISOString().split('T')[0]}.csv`);
        link.style.visibility = "hidden";
        
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    }

    return (
        <>
            <div>
                {/* {!data ? (
                    <p>Loading</p>
                ) : ( */}
                <div className="px-4 sm:px-6 lg:px-8 py-6">
                    <h1 className="text-2xl font-bold mb-2">quiz name - {title}</h1>
                    <h1 className="text-xl font-semibold mb-6">Responses</h1>
                    <div className="flex justify-end mb-4">
                        <Button 
                            onClick={exportToCSV} 
                            disabled={!studentResponses || studentResponses.length === 0}
                            variant="outline"
                            className="gap-2"
                        >
                            📥 Export as CSV
                        </Button>
                    </div>
                    <div className="grid grid-cols-1 gap-6 lg:grid-cols-2 lg:gap-8">
                        <div className="flex justify-center lg:justify-start">
                            <ChartBarDefault 
                                ClassName="w-full" 
                                data={chartData}
                                title="Score Distribution"
                                description={`Marks di  stribution across ${studentResponses?.length || 0} students`}
                            />
                        </div>
                        {studentResponses && studentResponses.length ? (
                            <div className="overflow-x-auto lg:overflow-x-visible">
                                <div className="max-h-[50vh] overflow-y-auto rounded-lg border">
                                    <Table className="w-full">
                                        <TableCaption>Students Responses</TableCaption>
                                        <TableHeader className="sticky top-0 z-10 bg-background">
                                            <TableRow>
                                                <TableCell>Index</TableCell>
                                                <TableHead className="">Student Name</TableHead>
                                                <TableHead>Student Email</TableHead>
                                                <TableHead>Score</TableHead>
                                            </TableRow>
                                        </TableHeader>
                                        <TableBody>
                                            {studentResponses.map((index, i) => (
                                                <TableRow key={index.student.id}>
                                                    <TableCell>{i + 1}</TableCell>
                                                    <TableCell>{index.student.username}</TableCell>
                                                    <TableCell>{index.student.email}</TableCell>
                                                    <TableCell>{index.score}</TableCell>
                                                </TableRow>
                                            ))}
                                        </TableBody>
                                    </Table>
                                </div>
                            </div>
                        ) : (
                            <h1>No Responses so far</h1>
                        )}
                    </div>

                    <div className="mt-10">
                        <div className="flex justify-between items-center mb-6">
                            <h1 className="text-xl font-semibold">Questions</h1>
                            <Button onClick={() => Router.push(`/CreateNewQuiz?quizId=${quizId}`)}>Edit Questions</Button>
                        </div>
                        {questions && questions.length > 0 ? (
                            <div className="overflow-x-auto">
                                <Table className="w-full">
                                    <TableCaption>Quiz Questions</TableCaption>
                                    <TableHeader>
                                        <TableRow>
                                            <TableCell>Index</TableCell>
                                            <TableHead className="">Question</TableHead>
                                            <TableHead>Type</TableHead>
                                            <TableHead>Answer / Answer Key</TableHead>
                                            <TableHead>Marks</TableHead>
                                        </TableRow>
                                    </TableHeader>
                                    <TableBody>
                                        {questions.map((q, i) => (
                                            <TableRow key={i}>
                                                <TableCell>{i + 1}</TableCell>
                                                <TableCell>{q.title}</TableCell>
                                                <TableCell>
                                                    <span className={`px-2 py-1 rounded text-xs font-medium ${q.type === "MCQ" ? "bg-blue-100 text-blue-800" : "bg-purple-100 text-purple-800"}`}>
                                                        {q.type === "MCQ" ? "MCQ" : "Text"}
                                                    </span>
                                                </TableCell>
                                                <TableCell>
                                                    {q.type === "MCQ" ? (
                                                        <>
                                                            <div className="font-medium">{q.answers[q.correctAnswerIndex || 0]}</div>
                                                            <div className="text-xs text-muted-foreground">Option {(q.correctAnswerIndex || 0) + 1}</div>
                                                        </>
                                                    ) : (
                                                        <div className="text-sm">{q.correctAnswerText || "- (Subjective)"}</div>
                                                    )}
                                                </TableCell>
                                                <TableCell>{q.marks}</TableCell>
                                            </TableRow>
                                        ))}
                                    </TableBody>
                                </Table>
                            </div>
                        ) : (
                            <p className="text-muted-foreground">No questions added yet</p>
                        )}
                    </div>
                </div>

                {/* )
                } */}

            </div>
        </>
    )
}



