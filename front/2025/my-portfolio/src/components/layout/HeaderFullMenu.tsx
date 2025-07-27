import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import styles from "./Header.module.scss";
import { AnimatePresence, motion } from "framer-motion";
import { MenuItem } from "@/types/menuType";

interface IHeaderFullMenu {
    isVisible: boolean;
    menus: MenuItem[];
}

const menuHoverImg: string[] = ["/images/home/me_1.jpg", "/images/home/me_2.jpg", "/images/home/me_3.jpg"];

const HeaderFullMenu = ({ isVisible, menus }: IHeaderFullMenu) => {
    const router = usePathname();

    const [mouse, setMouse] = useState({ x: 0, y: 0 });

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        const { clientX, clientY, currentTarget } = e;
        const rect = (currentTarget as HTMLDivElement).getBoundingClientRect();
        const x = clientX - rect.left - rect.width / 2;
        const y = clientY - rect.top - rect.height / 2;
        setMouse({ x, y });
    };

    return (
        <div
            onMouseMove={handleMouseMove}
            className={`${styles.fullHeader}   bg-light  dark:bg-dark `}
            style={{
                zIndex: isVisible ? 8 : "auto",
            }}
        >
            <AnimatePresence initial={false}>
                {isVisible && (
                    <motion.div key="box" initial={{ opacity: 0, scale: 0 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0 }} className="overflow-y-hidden inner flex flex-col items-center justify-center w-full max-w-full h-full min-h-[100vh]">
                        {menus.map((menu, index) => {
                            const name = menu.name;
                            const path = menu.path;
                            const imageSrc = menuHoverImg[menu.num - 1];

                            const isEven = index % 2 === 0;
                            const positionStyle = isEven ? { left: "90%", top: "50%", translateY: "-50%" } : { right: "90%", top: "50%", translateY: "-50%" };

                            return (
                                <motion.div key={path} className="relative my-8 group" whileHover="hover" initial="initial">
                                    {/* 링크 텍스트 */}
                                    <Link href={path} className={`text-5xl leading-normal lg:text-6xl lg:leading-normal 2xl:text-8xl 2xl:leading-normal relative z-10 ${router === path ? "font-extrabold active" : "font-medium"} fillText`} data-text={name}>
                                        {name}
                                    </Link>

                                    {/* hover 시 나올 이미지 */}
                                    <motion.img
                                        src={imageSrc}
                                        alt={name}
                                        className={`pointer-events-none absolute top-1/2  w-100 object-cover  shadow-2xl`}
                                        style={{
                                            ...positionStyle,
                                            x: mouse.x * 0.1,
                                            y: mouse.y * 0.1,
                                        }}
                                        variants={{
                                            initial: { opacity: 0, scale: 0.8 },
                                            hover: { opacity: 1, scale: 1 },
                                        }}
                                        transition={{ duration: 0.4, ease: "easeOut" }}
                                    />
                                </motion.div>
                            );
                        })}
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

export default HeaderFullMenu;
