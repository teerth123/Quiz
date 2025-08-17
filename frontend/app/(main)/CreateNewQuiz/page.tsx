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
import QuestionCard from "@/components/QuestionCard"
import { QuesCardProps } from "@/components/QuestionCard"
import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import axios from "axios"
import { createQuiz, addQuestions } from "@/app/Endpoint"
import { useRouter } from "next/navigation"

export default function CreateNewQuiz() {

    const Router = useRouter()

    const [quizTitle, setQuizTitle] = useState("")
    const [quizMode, setQuizMode] = useState("Standard")

    let demoQuestion: QuesCardProps = {
        quesNo: 1,
        queTitle: "who is Munni?",
        options: ["Munni is Aditi", "Munni is Sheetal", "Munni is Nisha", "All of the above"],
        correctAnsIndex: 1,
        marks: 1,
        id: 0
    };
    const [allQuestions, setAllQues] = useState<QuesCardProps[]>([demoQuestion])

    const AddQue = () => {
        const nextquesNo = allQuestions.length + 1;
        setAllQues((prev) => [
            ...prev,
            {
                quesNo: nextquesNo,
                queTitle: "New Question",
                options: ["Option 1", "Option 2", "Option 3", "Option 4"],
                correctAnsIndex: 0,
                marks: 1,
                id: allQuestions.length
            }
        ]);
    }

    const onUpdate = (id: number, data: Partial<QuesCardProps>) => {
        setAllQues(prev => prev.map((q, i) =>
            i === id ? { ...q, ...data } : q
        ))

    }

    const onDelete = (id: number) => {
        const newArray = allQuestions.filter((q) => q.id !== id);
        setAllQues(newArray)
    }

    useEffect(() => {
        console.log(allQuestions)
    }, [allQuestions])

    const SaveButton = async () => {
        try {
            const token = localStorage.getItem("token")


            const createQuizRes = await axios.post(createQuiz, {
                title: quizTitle,
                realTime: quizMode
            }, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            })
            if (createQuizRes.data.status === "+") {
                const quizId = createQuizRes.data.quizId;
                const addQueRes = await axios.post(addQuestions, {
                    quizId,
                    questions: allQuestions
                }, {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                })
                if (addQueRes.data.status === "+") {
                    Router.push("/Dashboard")
                }
            }
        }
        catch (e) {
            console.error("error found - ", e)
            return
        }
    }

    return (
        <>
            <div className=" flex  flex-col items-center mx-auto ">
                <h1 className="text-4xl font-bold my-20 text-left">Let's create something new</h1>
                <div className="border-2 rounded-2xl flex flex-col w-fit px-[20vw] py-5">
                    <div className="grid w-full max-w-sm items-center gap-3 mt-5">
                        <Label htmlFor="" className="font-bold" >Quiz Title</Label>
                        <Textarea id="email" placeholder="Docker Quiz" onChange={(e) => setQuizTitle(e.target.value)} />
                    </div>
                    <div className="grid w-full max-w-sm items-center gap-3 mt-2">
                        <Label htmlFor="" className="font-bold">Mode</Label>
                        <Select>
                            <SelectTrigger className="w-[180px]">
                                <SelectValue placeholder="Form Mode" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectGroup>
                                    <SelectLabel>Mode</SelectLabel>
                                    <SelectItem value="Real Time" onChange={() => setQuizMode("Real Time")}>Real Time</SelectItem>
                                    <SelectItem value="Standard" onChange={() => setQuizMode("Standard")}>Standard</SelectItem>
                                </SelectGroup>
                            </SelectContent>
                        </Select>
                    </div>
                    <div className="my-10">
                        {
                            allQuestions?.map((q, i) => {
                                return <div className="my-2"
                                    key={i}><QuestionCard
                                        quesNo={q.quesNo}
                                        queTitle={q.queTitle}
                                        options={q.options}
                                        correctAnsIndex={q.correctAnsIndex}
                                        marks={q.marks}
                                        id={q.id}
                                        onDelete={onDelete}
                                        onUpdate={onUpdate}
                                    />
                                </div>
                            })
                        }
                    </div>
                    <Button onClick={AddQue}>Add New Question</Button>
                </div>
            </div>
            <Button className="fixed bottom-5 right-5" onClick={SaveButton}>Save Quiz</Button>
        </>
    )
}


//create dummy question card
//user fills the question details
//parent sets the values
