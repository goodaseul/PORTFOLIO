import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import styles from "./Header.module.scss";
import { AnimatePresence, motion } from "framer-motion";
import { MenuItem } from "@/types/menuType";

interface IHeaderFullMenu {
    isVisible: boolean;
    menus: MenuItem[];
}

const HeaderFullMenu = ({ isVisible, menus }: IHeaderFullMenu) => {
    const router = usePathname();
    return (
        <div
            className={`${styles.fullHeader}  bg-light  dark:bg-dark `}
            style={{
                zIndex: isVisible ? 8 : "auto",
            }}
        >
            <AnimatePresence initial={false}>
                {isVisible && (
                    <motion.div key="box" initial={{ opacity: 0, scale: 0 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0 }} className="inner flex flex-col items-center justify-center w-full max-w-full h-full min-h-[100vh]">
                        {menus.map((menu) => {
                            const name = menu.name;
                            const path = menu.path;

                            return (
                                <Link key={path} href={path} className={`text-5xl leading-normal lg:text-6xl lg:leading-normal 2xl:text-8xl 2xl:leading-normal relative ${router === path ? "font-extrabold active" : "font-medium"} fillText`} data-text={name}>
                                    {name}
                                </Link>
                            );
                        })}
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

export default HeaderFullMenu;
