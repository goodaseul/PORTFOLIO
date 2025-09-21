"use client";

import { useRef, useState, useEffect } from "react";
import styles from "@/app/page.module.scss";
import Bio from "@/components/Intro/Bio";
import BioImg from "@/components/Intro/BioImg";
import Loader from "@/components/layout/Loader";

export default function Home() {
    const containerRef = useRef<HTMLDivElement>(null);
    const [loading, setLoading] = useState(true);

    // Bio와 BioImg가 마운트 되었는지 체크
    const [bioLoaded, setBioLoaded] = useState(false);
    const [imgLoaded, setImgLoaded] = useState(false);

    useEffect(() => {
        if (bioLoaded && imgLoaded) {
            const timer = setTimeout(() => setLoading(false), 200); // optional: 약간 지연
            return () => clearTimeout(timer);
        }
    }, [bioLoaded, imgLoaded]);

    return (
        <>
            {loading && <Loader />}
            <div className={`relative w-full min-h-screen ${loading ? "opacity-0" : "opacity-100"} transition-opacity duration-300`} ref={containerRef}>
                <Bio containerRef={containerRef} styles={styles} onLoad={() => setBioLoaded(true)} />
                <BioImg styles={styles} onLoad={() => setImgLoaded(true)} />
            </div>
        </>
    );
}
