import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const texts = ["안녕하세요! 한 사람 몫은 꼭 해내는 웹 프론트엔드 정다슬입니다.", "프로젝트를 진행할 때 단순히 주어진 대로만 만드는 것이 아닌,", "더 좋은 사용성과 실용적인 코드를 고민하고 제안하며 개발합니다.", "동료들과의 커뮤니케이션과 협업을 중요하게 생각하며,", "의견을 제시하고 수용하면서 함께 성장하는 과정을 즐깁니다.", "새로운 것을 좋아하며, 꼼꼼하게 정리하며,", "대화를 통해 프로젝트를 수행합니다.", "긍정적인 마음, 시간 약속의 중요성, 끊임없는 성장을", "삶의 중요한 가치로 두고 있습니다."];

export default function Bio({ containerRef }: any) {
    const [globalProgress, setGlobalProgress] = useState(0);

    const smoothRatio = (ratio: number) => {
        if (ratio <= 0.1) return 0;
        return (ratio - 0.1) / 0.9;
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
    }, [containerRef]);

    return (
        <div className="intro inner sticky left-0 top-0 flex items-center text-center z-[2] min-h-[100vh]">
            <div className="w-full mx-auto 2xl:w-4/5">
                <div className="text-gray-900 dark:text-gray-300 text-1xl 2xl:text-2xl">
                    {texts.map((text, index) => {
                        const total = texts.length;
                        const start = index / total;
                        const end = (index + 1) / total;

                        let localProgress = (globalProgress - start) / (end - start);
                        localProgress = Math.min(Math.max(localProgress, 0), 1);

                        return (
                            <p key={index} className="relative inline-block mt-5 overflow-hidden leading-relaxed ">
                                <span className="font-bold">&nbsp;{text}&nbsp;</span>
                                <motion.span
                                    className="absolute left-0 bottom-0 h-[100%] bg-point block origin-left"
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
