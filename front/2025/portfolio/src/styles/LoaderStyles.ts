import { motion } from "framer-motion";
import styled from "styled-components";

export const textVariants = {
    hidden: { y: -20, opacity: 0 },
    visible: (i: number) => ({
        y: [0, -10, 0], // 살짝 튕기는 효과 추가
        opacity: 1,
        transition: {
            delay: i * 0.15,
            duration: 0.6,
            ease: "easeOut",
        },
    }),
};

export const LoaderPart = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100vh;
    background-color: rgb(0, 0, 0, 0.8);
    position: fixed;
    z-index: 9999;
    left: 0;
    top: 0;
`;

export const LoadingText = styled(motion.span)`
    font-size: 2rem;
    font-weight: bold;
    color: #ffd02f;
    margin-right: 2px;
`;
