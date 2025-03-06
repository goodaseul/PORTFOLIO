import { rem } from "./../utils/rem";
import { media } from "../utils/media";

import styled, { css } from "styled-components";

export const Container = styled.div`
    width: 1480px;
    padding: 0 20px;
    margin: 0 auto;

    @media ${media.desktop} {
        width: 100%;
        padding: 0 40px;
    }
    @media ${media.tablet} {
        padding: 0 ${rem(80)};
    }
`;

export const TxtEffect = css`
    position: relative;
    overflow: hidden;
`;

export const Txt = css`
    z-index: 1;
    text-transform: uppercase;
    position: relative;
    transform-style: preserve-3d;
    transition: all 0.5s;
    transform: translate3d(0, 0, 0) scale3d(1, 1, 1);
    color: ${(props) => props.theme.accentColor};
`;

export const TxtAf = css`
    ${Txt}
    transform: translate3d(300px, 0%, 0px);
    position: absolute;
    top: 0%;
    bottom: auto;
    left: 0%;
    right: 0%;
    color: #fff;
`;

export const WrapStyles = css`
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-between;
`;

export const TxtFill = css`
    -webkit-text-fill-color: rgba(255, 255, 255, 0);
    -webkit-text-stroke-width: 1px;
    -webkit-text-stroke-color: #fff;
    color: white;
    font-weight: 600;
    --s: 0.1em;
    --c: #fff;
    padding-bottom: var(--s);
    background: linear-gradient(90deg, var(--c) 50%, #000 0) calc(100% - var(--_p, 0%)) / 200% 100%, linear-gradient(var(--c) 0 0) 0% 100% / var(--_p, 0%) var(--s) no-repeat;
    -webkit-background-clip: text, padding-box;
    background-clip: text, padding-box;
    transition: 0.5s;
`;

export const TxtFillHover = css`
    --_p: 100%;
    padding-left: 10px;
`;

export const Arrow = css`
    overflow: hidden;
    position: relative;
    top: -0.8rem;
    right: -0.8rem;

    svg {
        transition: all 0.3s;
        transform-style: preserve-3d;
        transform: translate3d(-100%, 100%, 0px) scale3d(1, 1, 1) skew(-90deg);
    }
`;

export const ArrowHover = css`
    transform: translate3d(0, 0, 0);
`;
