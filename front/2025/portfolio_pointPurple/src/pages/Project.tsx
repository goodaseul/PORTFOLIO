import React, { useRef, useEffect, useState } from "react";
import { RiArrowRightUpLine } from "react-icons/ri";

import "../styles/page/project.css";

const Project = () => {
    const items = [
        { id: 1, text: "Todo list", link: "https://goodaseul.github.io/todolist/" },
        { id: 2, text: "blog list", link: "https://goodaseul.github.io/blog/" },
        { id: 3, text: "blog list", link: "https://goodaseul.github.io/blog/" },
        { id: 4, text: "blog list", link: "https://goodaseul.github.io/blog/" },
        { id: 5, text: "blog list", link: "https://goodaseul.github.io/blog/" },
    ];

    const gradients = [
        {
            start: "#b99dc6",
            end: "#f4b6c2",
        },
        {
            start: "#b99dc6",
            end: "#a1c6ea",
        },
        {
            start: "#b99dc6",
            end: "#5e3a8c",
        },
        {
            start: "#b99dc6",
            end: "#f3e2d1",
        },
        {
            start: "#b99dc6",
            end: "#a8e0d3",
        },
    ];

    const listRefs = useRef<{ [key: number]: HTMLAnchorElement | null }>({});

    useEffect(() => {
        Object.keys(listRefs.current).forEach((key) => {
            const list = listRefs.current[parseInt(key)];
            if (list) {
                const offset = parseInt(key) * 15;
                list.style.marginTop = `${offset}px`; // 위아래 간격을 조정
            }
        });
    }, []);

    // 랜덤 색상 반환 함수
    const getRandomGradient = () => {
        const randomIndex = Math.floor(Math.random() * gradients.length);
        const { start, end } = gradients[randomIndex];
        return `linear-gradient(135deg, ${start} 0%, ${end} 100%)`;
    };

    // useState로 bgColors 상태 관리, items 배열에 맞춰 초기화
    const [bgColors, setBgColors] = useState(items.map(() => getRandomGradient()));

    // useRef로 원래의 bg 색상을 저장
    const originalBgColors = useRef<string[]>([]);

    // useEffect를 통해 처음 로딩 시 원래 bgColors 설정
    useEffect(() => {
        originalBgColors.current = items.map(() => getRandomGradient()); // 초기 색상 저장
        setBgColors(originalBgColors.current); // 초기 색상으로 bgColors 설정
    }, []);

    // Mouse Enter 시 색상 변경
    const onMouseEnter = (index: number) => {
        const updatedBgColors = [...bgColors];
        updatedBgColors[index] = getRandomGradient(); // 랜덤 색상으로 변경
        setBgColors(updatedBgColors);
    };

    // Mouse Leave 시 원래 색상 복원
    const onMouseLeave = (index: number) => {
        const updatedBgColors = [...bgColors];
        updatedBgColors[index] = originalBgColors.current[index]; // 원래 색상으로 복구
        setBgColors(updatedBgColors);
    };

    return (
        <div className="project">
            <div className="full_inner">
                <div className="list_grid">
                    {items.map((item, index) => (
                        <a href={item.link} className="list" key={item.id} ref={(el) => (listRefs.current[item.id] = el)} onMouseEnter={() => onMouseEnter(index)} onMouseLeave={() => onMouseLeave(index)}>
                            <div className="wrap_content" style={{ background: bgColors[index] }}>
                                <p>{item.text} project</p>
                                <span>
                                    <RiArrowRightUpLine />
                                </span>
                            </div>
                            <p>{item.text}</p>
                        </a>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Project;
