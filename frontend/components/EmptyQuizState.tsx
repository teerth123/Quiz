"use client"

import { Button } from "@/components/ui/button"
import { useRouter } from "next/navigation"

export default function EmptyQuizState() {
    const router = useRouter()

    return (
        <div className="flex items-center justify-center min-h-[calc(100vh-200px)] px-2 sm:px-4">
            <div 
                className="relative w-full max-w-[1420px] min-h-[300px] sm:min-h-[400px] md:min-h-[500px] lg:min-h-[534px] flex flex-col items-center justify-center"
                style={{
                    border: '1px dashed #424242',
                }}
            >
                {/* Plus signs in corners */}
                <div className="absolute top-[-8px] left-[-8px] sm:top-[-12px] sm:left-[-12px] md:top-[-15px] md:left-[-15px] text-[20px] sm:text-[24px] md:text-[32px] font-bold text-[#424242] leading-none">
                    +
                </div>
                <div className="absolute top-[-8px] right-[-8px] sm:top-[-12px] sm:right-[-12px] md:top-[-15px] md:right-[-15px] text-[20px] sm:text-[24px] md:text-[32px] font-bold text-[#424242] leading-none">
                    +
                </div>
                <div className="absolute bottom-[-8px] left-[-8px] sm:bottom-[-12px] sm:left-[-12px] md:bottom-[-15px] md:left-[-15px] text-[20px] sm:text-[24px] md:text-[32px] font-bold text-[#424242] leading-none">
                    +
                </div>
                <div className="absolute bottom-[-8px] right-[-8px] sm:bottom-[-12px] sm:right-[-12px] md:bottom-[-15px] md:right-[-15px] text-[20px] sm:text-[24px] md:text-[32px] font-bold text-[#424242] leading-none">
                    +
                </div>

                {/* Content */}
                <div className="flex flex-col items-center gap-4 sm:gap-6 md:gap-8 px-4 sm:px-6 md:px-8 py-6 sm:py-8 md:py-12">
                    <h1 
                        className="text-center uppercase text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-semibold text-white leading-tight"
                        style={{
                            fontFamily: 'Inter, sans-serif',
                        }}
                    >
                        Let's Start With your first quiz
                    </h1>
                    
                    <p 
                        className="text-center max-w-[761px] text-sm sm:text-lg md:text-2xl lg:text-3xl font-semibold capitalize leading-tight px-2"
                        style={{
                            fontFamily: 'Inter, sans-serif',
                            color: '#717171',
                        }}
                    >
                        Build your first quiz, share your knowledge, and watch participation grow.
                    </p>

                    <Button
                        onClick={() => router.push("/CreateNewQuiz")}
                        className="mt-2 sm:mt-3 md:mt-4 text-base sm:text-lg md:text-xl lg:text-2xl font-bold px-6 sm:px-8 md:px-12 lg:px-16 py-3 sm:py-4 md:py-5 lg:py-6 h-auto rounded-full bg-primary hover:bg-primary/90 shadow-lg hover:shadow-xl transition-all duration-200 hover:scale-105"
                    >
                        Create a Quiz
                    </Button>
                </div>
            </div>
        </div>
    )
}