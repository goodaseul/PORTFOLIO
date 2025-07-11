"use client";

import { useEffect, useState } from "react";
import HeaderLayout from "./HeaderLayout";
import HeaderFullMenu from "./HeaderFullMenu";
const HeaderMade: React.FC = () => {
    const [isOn, setIsOn] = useState(false);
    const [lastScrollY, setLastScrollY] = useState(0);
    const [isVisible, setIsVisible] = useState(false);
    useEffect(() => {
        if (isVisible) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "";
        }

        return () => {
            document.body.style.overflow = "";
        };
    }, [isVisible]);

    useEffect(() => {
        let ticking = false;

        const handleScroll = () => {
            if (isVisible) return;
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
        <>
            {/* 헤더 레이아웃 컴포넌트 */}
            <HeaderLayout isOn={isOn} isVisible={isVisible} setIsVisible={setIsVisible} />
            {/* 햄버거 메뉴 컴포넌트 */}
            <HeaderFullMenu isVisible={isVisible} />
        </>
    );
};
export default HeaderMade;
