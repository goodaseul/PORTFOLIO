import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import styles from "./Bio.module.scss";
import { IntroTexts } from "@/store/store";
export default function Bio({ containerRef, styles, onLoad }: any) {
    useEffect(() => {
        onLoad?.(); // 마운트 완료 시 호출
    }, []);

    const [globalProgress, setGlobalProgress] = useState(0);
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const checkMobile = () => {
            setIsMobile(window.matchMedia("(max-width: 768px)").matches);
        };
        checkMobile();
        window.addEventListener("resize", checkMobile);
        return () => window.removeEventListener("resize", checkMobile);
    }, []);

    const smoothRatio = (ratio: number) => {
        if (isMobile) {
            // 모바일 계산법
            if (ratio <= 0.2) return 0;
            return (ratio - 0.2) / 0.8;
        } else {
            // 데스크탑 계산법
            if (ratio <= 0.1) return 0;
            return (ratio - 0.1) / 0.9;
        }
    };

    useEffect(() => {
        const handleScroll = () => {
            if (!containerRef?.current) return;

            const rect = containerRef.current.getBoundingClientRect();
            const viewHeight = window.innerHeight;

            const visibleRaw = viewHeight - rect.top;
            const visibleClamped = Math.min(Math.max(visibleRaw, 0), rect.height);
            const rawRatio = visibleClamped / rect.height;

            const ratio = smoothRatio(rawRatio);

            setGlobalProgress(ratio);
        };

        handleScroll();
        window.addEventListener("scroll", handleScroll);
        window.addEventListener("resize", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
            window.removeEventListener("resize", handleScroll);
        };
    }, [containerRef, isMobile]);

    return (
        <div className={`${styles.intro} inner sticky left-0 top-0 flex items-center text-center z-[2] min-h-[100vh]`}>
            <div className="w-full mx-auto 2xl:w-4/5">
                <div className="flex flex-wrap justify-center text-xs text-gray-900 w-full lg:w-[80%] m-auto sm:text-sm dark:text-gray-300 lg:text-lg xl:text-xl 2xl:text-2xl">
                    {IntroTexts.map((text, index) => {
                        const total = IntroTexts.length;
                        const start = index / total;
                        const end = (index + 1) / total;

                        let localProgress = (globalProgress - start) / (end - start);
                        localProgress = Math.min(Math.max(localProgress, 0), 1);

                        return (
                            <p key={index} className="relative m-2 ml-0 mr-0 overflow-hidden leading-relaxed">
                                <span className={`${index === 0 && "pl-2"} font-bold`}>{text}&nbsp;</span>
                                <motion.span
                                    className="absolute left-0 bottom-0 h-[0.2rem] bg-point block origin-left"
                                    initial={false}
                                    style={{
                                        width: "100%",
                                        zIndex: -1,
                                        scaleX: localProgress,
                                    }}
                                />
                            </p>
                        );
                    })}
                </div>
            </div>
        </div>
    );
}
