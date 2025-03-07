import styled from "styled-components";
import { Container, Section } from "../styles/commonStyles";

export const AboutSection = styled(Section)`
    padding: 140px 0;
    background: ${(props) => props.theme.bgColor};
`;
export const Marquee = styled.div`
    position: absolute;
    width: 100vw;
    display: flex;
    pointer-events: none;
    &.top {
        top: 46%;
        transform: translateY(-50%);
    }
    &.bottom {
        bottom: -5%;
        justify-content: flex-end;
    }
`;
export const MarqueeTxt = styled.p`
    display: flex;
    font-size: 12rem;
    font-weight: bold;
    -webkit-text-fill-color: rgba(255, 255, 255, 0);
    -webkit-text-stroke-width: 1px;
    -webkit-text-stroke-color: #fff;
    opacity: 0.5;
`;
export const ContainerPart = styled(Container)`
    height: 100%;
    color: #fff;
`;
