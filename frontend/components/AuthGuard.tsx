"use client"

import { useRouter } from "next/navigation"
import { ReactNode, useEffect, useState } from "react"

interface AuthGuardProps {
    children: ReactNode
}

export function AuthGuard({ children }: AuthGuardProps) {
    const router = useRouter()
    const [isReady, setIsReady] = useState(false)

    useEffect(() => {
        const token = localStorage.getItem("token")
        if (!token) {
            router.replace("/auth/login")
            return
        }
        setIsReady(true)
    }, [router])

    if (!isReady) {
        return null
    }

    return <>{children}</>
}
