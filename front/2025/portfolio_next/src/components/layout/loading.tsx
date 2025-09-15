// LoadingWrapper.tsx (Client Component)
"use client";
import { useEffect, useState } from "react";

export default function LoadingWrapper({ children }: { children: React.ReactNode }) {
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => setIsLoading(false), 1000);
        return () => clearTimeout(timer);
    }, []);

    if (isLoading) {
        return <div className="flex items-center justify-center min-h-screen">로딩 중...</div>;
    }

    return <>{children}</>;
}
