"use client";

import { ThemeProvider as NextThemeProvider } from "next-themes";
import { useEffect } from "react";
import Cookies from "js-cookie";
import { useTheme } from "next-themes";

function ThemeSyncWithCookies() {
    const { theme } = useTheme();

    useEffect(() => {
        if (theme) {
            Cookies.set("theme", theme, { expires: 365 });
        }
    }, [theme]);

    return null;
}

export function ThemeProvider({ children, ...props }: { children: React.ReactNode }) {
    return (
        <NextThemeProvider attribute="class" defaultTheme="light" enableSystem {...props}>
            <ThemeSyncWithCookies />
            {children}
        </NextThemeProvider>
    );
}
