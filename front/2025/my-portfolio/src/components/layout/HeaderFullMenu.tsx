import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
// import { navList } from "@/store/store";
import styles from "./Header.module.scss";
import { AnimatePresence, motion } from "framer-motion";

interface IHeaderFullMenu {
    isVisible: boolean;
}

const HeaderFullMenu = ({ isVisible }: IHeaderFullMenu) => {
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
                        {/* {Object.entries(navList).map(([path, { name }]) => (
                            <Link key={path} href={path} className={`text-5xl leading-normal lg:text-6xl lg:leading-normal 2xl:text-8xl 2xl:leading-normal relative ${router === path ? "font-extrabold active" : "font-medium"} fillText`} data-text={name}>
                                {name}
                            </Link>
                        ))} */}
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

export default HeaderFullMenu;
