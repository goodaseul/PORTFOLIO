"use client";
import React, { useState, useEffect, useRef } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import styles from "./Footer.module.scss";
import { motion, useAnimation } from "framer-motion";
import { MenuItem } from "@/types/menuType";

interface FooterProps {
    menus: MenuItem[];
}
const Footer: React.FC<FooterProps> = ({ menus }) => {
    const router = usePathname();
    const controls = useAnimation();
    const [repeatCount, setRepeatCount] = useState(10);
    const tickerRef = useRef<HTMLDivElement>(null);
    const sampleTextRef = useRef<HTMLSpanElement>(null);
    useEffect(() => {
        const handleResize = () => {
            if (!sampleTextRef.current) return;
            const screenWidth = window.innerWidth;
            const textWidth = sampleTextRef.current.offsetWidth;
            const count = Math.ceil(screenWidth / textWidth) + 4;
            setRepeatCount(count);
        };

        handleResize();
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    useEffect(() => {
        if (!tickerRef.current) return;

        const el = tickerRef.current;
        const fullWidth = el.scrollWidth;

        controls.start({
            x: [0, -fullWidth],
            transition: {
                x: {
                    repeat: Infinity,
                    repeatType: "loop",
                    duration: fullWidth / 100,
                    ease: "linear",
                },
            },
        });
    }, [controls, repeatCount]);

    return (
        <footer className="">
            <div className="inner">
                <div className={`${styles.menus}`}>
                    {menus.map((menu) => {
                        const name = menu.name;
                        const path = menu.path;

                        return (
                            <Link key={menu.id} href={path} className={`${styles.menu} text-2xl leading-normal md:text-3xl lg:text-6xl lg:leading-normal 2xl:text-8xl 2xl:leading-normal relative ${router === path ? "font-extrabold" : "font-medium"} fillText ${router === path ? "active" : ""}`} data-text={name}>
                                {name}
                            </Link>
                        );
                    })}
                </div>
            </div>

            <div className="py-2 overflow-hidden whitespace-nowrap dark:bg-gray-900">
                <span ref={sampleTextRef} className="text-base italic font-semibold sr-only">
                    ©2025 Daseul Jeong. All rights reserved.
                </span>

                <motion.div animate={controls} ref={tickerRef} className={`inline-flex select-none ${styles.ticker}`} style={{ whiteSpace: "nowrap", fontSize: "1.25rem", fontWeight: 600 }}>
                    {Array.from({ length: repeatCount }).map((_, i) => (
                        <span key={i} className="mx-8 italic transition-all text-point">
                            ©2025 Daseul Jeong. All rights reserved.
                        </span>
                    ))}
                </motion.div>
            </div>
        </footer>
    );
};

export default Footer;
