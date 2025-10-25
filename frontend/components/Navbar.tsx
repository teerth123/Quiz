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
import React, { useState, useEffect } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";


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
    const [username, setUsername] = useState("Username")

    useEffect(() => {
        // Try to get username from localStorage or API
        const storedUsername = localStorage.getItem("username")
        if (storedUsername) {
            setUsername(storedUsername)
        }
    }, [])

    return (
        <>

            <div className="p-2 sm:p-3 md:p-4 flex justify-between items-center">
                <Breadcrumb>
                    <BreadcrumbList>

                        {segments.map((segment, index) => {
                            const href = `/${segments.slice(0, index + 1).join('/')}`;
                            const isLast = index === segments.length - 1;

                            return (

                                <React.Fragment key={href}>
                                    <BreadcrumbItem className={`${geistSans.variable} text-xs sm:text-sm md:text-base lg:text-lg font-semibold`}>
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
                <div className="flex items-center gap-1 sm:gap-2 md:gap-3">
                    <Image 
                        src="/assets/user-avatar.svg" 
                        alt="User avatar"
                        width={24}
                        height={24}
                        className="rounded-full sm:w-[28px] sm:h-[28px] md:w-[32px] md:h-[32px] lg:w-[35px] lg:h-[35px]"
                    />
                    <span 
                        className={`${geistSans.variable} text-xs sm:text-sm md:text-base lg:text-lg font-semibold`}
                        style={{ color: '#717171' }}
                    >
                        {username}
                    </span>
                </div>
            </div>
            <div className={`grid grid-cols-2 ${geistSans.variable} ${geistMono.variable} font-semibold text-xs sm:text-sm md:text-base`}>
                <Link 
                    href={"/Dashboard"}
                    className={`text-center py-1 sm:py-1.5 md:py-2 transition-colors ${
                        pathname === "/Dashboard" 
                            ? "bg-white text-black" 
                            : "bg-black text-white hover:bg-gray-900"
                    }`}
                >
                    Created Quiz
                </Link>
                <Link 
                    href={"/Dashboard/AttemptedQuizzes"}
                    className={`text-center py-1 sm:py-1.5 md:py-2 transition-colors ${
                        pathname === "/Dashboard/AttemptedQuizzes" 
                            ? "bg-white text-black" 
                            : "bg-black text-white hover:bg-gray-900"
                    }`}
                >
                    Attempted Quiz
                </Link>
            </div>
        </>
    );
}