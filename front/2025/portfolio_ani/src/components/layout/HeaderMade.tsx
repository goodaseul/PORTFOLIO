"use client";

import Link from "next/link";
import ThemeBtn from "./ThemeBtn";
import { MdOutlineMenu } from "react-icons/md";
import styles from "./HeaderMade.module.scss";
import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
// import { usePathname } from "next/navigation";
// import { navList } from "@/store/store";

const HeaderMade: React.FC = () => {
    const { theme } = useTheme();
    // const router = usePathname();
    const [isOn, setIsOn] = useState(false);
    const [lastScrollY, setLastScrollY] = useState(0);

    useEffect(() => {
        let ticking = false;

        const handleScroll = () => {
            const currentScrollY = window.scrollY;

            if (!ticking) {
                window.requestAnimationFrame(() => {
                    if (currentScrollY === 0) {
                        setIsOn(false);
                    } else if (currentScrollY > lastScrollY) {
                        setIsOn(true);
                    } else {
                        setIsOn(false);
                    }
                    setLastScrollY(currentScrollY);
                    ticking = false;
                });

                ticking = true;
            }
        };

        window.addEventListener("scroll", handleScroll);

        return () => window.removeEventListener("scroll", handleScroll);
    }, [lastScrollY]);
    return (
        <header
            id="header"
            className={`
            ${styles.header}
            ${isOn ? styles.on : ""}
            ${isOn && theme === "dark" ? styles.bgDark : ""}
            ${isOn && theme === "light" ? styles.bgLight : ""}
        `}
        >
            <div className="inner flex items-center justify-between">
                <h1 className={`logo`}>
                    <Link href={"/"} className={`font-extrabold italic tracking-wide text-point transition-font-size duration-300 ease-in-out ${isOn ? "text-2xl" : "text-8xl"}`}>
                        AHRAM
                    </Link>
                </h1>
                <ul className="flex items-center">
                    <li>
                        <ThemeBtn />
                    </li>
                    <li>가/A</li>
                    <li>
                        <button className="text-2xl">
                            <MdOutlineMenu />
                        </button>
                    </li>
                </ul>
                {/* <div className="">
                    {Object.entries(navList).map(([path, { name }]) => {
                        return (
                            <Link
                                key={path}
                                href={path}
                                className={`
                            ${router === path ? "font-extrabold" : ""}
                                    transition-all flex align-middle relative py-1`}
                            >
                                {name}
                            </Link>
                        );
                    })}
                </div> */}
            </div>
        </header>
    );
};

export default HeaderMade;
