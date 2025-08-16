"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import { Geist, Geist_Mono } from "next/font/google";
import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList,
    BreadcrumbPage,
    BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import React, { useState } from "react";


const geistSans = Geist({
    variable: "--font-geist-sans",
    subsets: ["latin"],
    weight: ["400", "500", "600", "700"], // ← Add this
});


const geistMono = Geist_Mono({
    variable: "--font-geist-mono",
    subsets: ["latin"],
});



export default function Navbar() {

   
    const pathname = usePathname();
    
    const segments = pathname.split('/').filter(Boolean);

    const formatSegment = (segment: string) => {
        return segment
            .replace(/-/g, ' ')
            .replace(/([A-Z])/g, ' $1')
            .replace(/^./, (str) => str.toUpperCase());
    };

    const [selected, setSelected] = useState(0)

    return (
        <>

            <div className="p-4  flex justify-between items-center">
                <Breadcrumb>
                    <BreadcrumbList>

                        {segments.map((segment, index) => {
                            const href = `/${segments.slice(0, index + 1).join('/')}`;
                            const isLast = index === segments.length - 1;

                            return (

                                <React.Fragment key={href}>
                                    <BreadcrumbItem className={`${geistSans.variable} text-xl font-semibold`}>
                                        {isLast ? (

                                            <BreadcrumbPage>
                                                {formatSegment(segment)} 
                                            </BreadcrumbPage>
                                        ) : (

                                            <BreadcrumbLink asChild>
                                                <Link href={href}>
                                                    {formatSegment(segment)} /
                                                </Link>
                                            </BreadcrumbLink>
                                        )}
                                    </BreadcrumbItem>
                                </React.Fragment>
                            );
                        })}
                    </BreadcrumbList>
                </Breadcrumb>
                <div>
                    <h1>AVATAR</h1>
                </div>
            </div>
            <div className={`flex justify-around ${geistSans.variable} ${geistMono.variable} font-semibold`}>
                <Link href={"/Dashboard"}>Created Quiz</Link>
                <Link href={"/Dashboard/AttemptedQuizzes"}>Attempted Quiz</Link>
            </div>

            <hr className="my-2" />
        </>
    );
}