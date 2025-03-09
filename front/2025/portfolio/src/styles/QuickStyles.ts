import { media } from "../utils/media";
import { rem } from "../utils/rem";
import styled, { keyframes } from "styled-components";

export const iconArrow = keyframes`
    0% { margin-top: 0; }
    50% { margin-top: 4%; }
    100% { margin-top: 0; }
`;

export const quickSize = `60px`;

const colors = {
    primary: "#000",
    secondary: "#fff",
    border: "#e1e1e1",
};

export const QuickPart = styled.div`
    position: fixed;
    left: 50%;
    transform: translateY(-50%);
    bottom: 30px;
    z-index: 12;
    width: ${quickSize};
    height: ${quickSize};
    transition: all 0.3s;

    > * {
        position: absolute;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        transform: none;
        border: 1px solid ${colors.border};
        opacity: 1;
        width: 100%;
        height: 100%;
        box-shadow: 5px 5px 20px rgba(0, 0, 0, 0.12);
        border-radius: 100%;
        background: ${colors.primary};
        border-color: ${colors.primary};
    }

    &.on {
        right: 30px;
        left: auto;
        transform: none;
        > * {
            background: #fff;
            border-color: #fff;
            .icon {
                transform: rotate(180deg);
                filter: brightness(0);
            }
        }
        button {
            z-index: 1;
            opacity: 1;
            pointer-events: all;
        }
        p {
            z-index: -1;
            opacity: 0;
        }
    }

    &.fix {
        position: absolute;
        bottom: auto;
        margin-top: calc(-${quickSize} / 2);
    }

    @media ${media.tablet} {
        width: ${rem(120)};
        height: ${rem(120)};

        &.on {
            right: ${rem(80)};
        }
        &.fix {
            margin-top: calc(-${rem(120)} / 2);
        }
    }
`;

export const Induction = styled.p`
    z-index: 1;
    opacity: 1;
    pointer-events: none;
`;

export const BtnTop = styled.button`
    z-index: -1;
    opacity: 0;
    pointer-events: none;
`;
export const QuickIcon = styled.i`
    display: block;
    width: 100%;
    height: 100%;
    background-image: url("./images/icon_scroll.png"); // 이미지 경로 수정
    animation: ${iconArrow} infinite 1s ease-in-out;
    filter: brightness(0) invert(1);
`;
