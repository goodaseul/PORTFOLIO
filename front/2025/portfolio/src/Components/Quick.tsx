import { useEffect, useState } from "react";
import { BtnTop, Induction, QuickIcon, QuickPart } from "../styles/QuickStyles";

interface QuickProps {
    sectionRef: React.RefObject<HTMLDivElement | null>;
    isSectionVisible: boolean;
}

const Quick = ({ sectionRef, isSectionVisible }: QuickProps) => {
    const [isScrolled, setIsScrolled] = useState(false);
    const onTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 100) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    let quickClassName = "quick";
    if (sectionRef.current && isSectionVisible) {
        quickClassName = "quick fix on";
    } else if (isScrolled) {
        quickClassName = "quick on";
    }

    return (
        <>
            <QuickPart className={quickClassName}>
                <Induction className="induction">
                    <QuickIcon className="icon">스크롤 유도 버튼</QuickIcon>
                </Induction>
                <BtnTop className="btn_top" onClick={onTop}>
                    <QuickIcon className="icon">상단으로 올라가기</QuickIcon>
                </BtnTop>
            </QuickPart>
        </>
    );
};

export default Quick;
