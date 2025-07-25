import React from "react";
import Link from "next/link";
import ThemeBtn from "./ThemeBtn";
import { MdOutlineMenu, MdOutlineClose } from "react-icons/md";
import styles from "./Header.module.scss";

import { motion } from "framer-motion";
import { Estonia } from "next/font/google";

const estonia = Estonia({
    weight: "400",
    subsets: ["latin"],
    display: "swap",
});
interface IHeaderLayout {
    isOn: boolean;
    isVisible: boolean;
    setIsVisible: (value: boolean) => void;
}
const HeaderLayout = ({ isOn, isVisible, setIsVisible }: IHeaderLayout) => {
    return (
        <header
            id="header"
            className={`
            ${styles.header}
            ${isOn && !isVisible ? styles.on : ""}
        `}
        >
            <div className={"inner flex items-center justify-between transition-all"}>
                <h1 className={`logo ${isVisible ? "opacity-0 pointer-events-none" : "opacity-1 pointer-events-auto"}`}>
                    <Link
                        href={"/"}
                        className={`${estonia.className} ${styles.logoStyle}
                        tracking-wide text-point
                        transition-font-size duration-300 ease-in-out
                        ${isOn ? "text-4xl md:text-5xl" : "text-5xl md:text-6xl lg:text-7xl 2xl:text-8xl"}`}
                    >
                        JDaseul
                    </Link>
                </h1>

                <ul className={`flex items-center ${isVisible && "transition-all ml-auto"}`}>
                    <li>
                        <ThemeBtn />
                    </li>
                    <li>
                        <button>가/A</button>
                    </li>
                    <li>
                        <motion.button className="text-2xl" onClick={() => setIsVisible(!isVisible)} whileTap={{ y: 1 }}>
                            {isVisible ? <MdOutlineClose /> : <MdOutlineMenu />}
                        </motion.button>
                    </li>
                </ul>
            </div>
        </header>
    );
};

export default HeaderLayout;
