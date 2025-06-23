"use client";
import React, { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { navList } from "@/store/store";
import styles from "./Footer.module.scss";
import { motion, useAnimation } from "framer-motion";

const Footer = () => {
    const router = usePathname();
    const controls = useAnimation();

    useEffect(() => {
        controls.start({
            x: ["0%", "-50%"],
            scale: 1,
            color: "#b99dcf",
            letterSpacing: "0.05em",
            transition: {
                x: {
                    repeat: Infinity,
                    repeatType: "loop",
                    duration: 30,
                    ease: "linear",
                },
                scale: { duration: 0.3 },
                color: { duration: 0.3 },
                letterSpacing: { duration: 0.3 },
            },
        });
    }, [controls]);

    return (
        <footer className="">
            <div className="inner">
                <div className={`${styles.menus}`}>
                    {Object.entries(navList).map(([path, { name }]) => (
                        <Link key={path} href={path} className={`${styles.menu} text-2xl leading-normal md:text-3xl lg:text-6xl lg:leading-normal 2xl:text-8xl 2xl:leading-normal relative ${router === path ? "font-extrabold" : "font-medium"} fillText ${router === path ? "active" : ""}`} data-text={name}>
                            {name}
                        </Link>
                    ))}
                </div>
            </div>

            <div className="overflow-hidden whitespace-nowrap dark:bg-gray-900 py-2">
                <motion.div animate={controls} className={`inline-flex select-none ${styles.ticker}`} style={{ whiteSpace: "nowrap", fontSize: "1.25rem", fontWeight: 600 }}>
                    {Array(6)
                        .fill(null)
                        .map((_, i) => (
                            <span key={i} className="mx-8 italic transition-all">
                                ©2025 Ahram Kim. All rights reserved.
                            </span>
                        ))}
                </motion.div>
            </div>
        </footer>
    );
};

export default Footer;
