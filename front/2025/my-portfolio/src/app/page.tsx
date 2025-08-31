"use client";

import { useRef } from "react";
import styles from "@/app/page.module.scss";
import BioImg from "@/components/intro/BioImg";
import Bio from "@/components/intro/Bio";

export default function Home() {
    const containerRef = useRef<HTMLDivElement>(null);

    return (
        <div className="relative w-full min-h-screen bg-gray-100 dark:bg-black" ref={containerRef}>
            <Bio containerRef={containerRef} styles={styles} />
            <BioImg styles={styles} />
        </div>
    );
}
