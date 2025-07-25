import { rem } from "./../utils/rem";
import { media } from "../utils/media";

import styled, { css } from "styled-components";
import { lightTheme } from "./theme";

export const Main = styled.main`
    position: relative;
    z-index: 9;
    overflow: clip;
    border-bottom: 5px solid ${(props) => props.theme.accentColor};
`;

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
export const Section = styled.section`
    width: 100%;
    position: relative;
    z-index: 2;
`;
export const BigTit = styled.h2`
    font-size: 120px;
    line-height: 1;
    font-weight: 800;

    @media ${media.desktop} {
        font-size: 100px;
    }
    @media ${media.tablet} {
        font-size: ${rem(100)};
    }
    &.text {
        background-clip: text !important;
        display: inline-block;
        transition: background 0.3s ease-in;
        -webkit-text-fill-color: transparent;
        -webkit-background-clip: text;
        color: #fff;
        background: linear-gradient(-90deg, var(--c_w) 50%, #ffd02f 0) calc(100% - var(--_p_w)) / 200% 100%, linear-gradient(var(--c_w) 0 0) 0% 100% / var(--_p_w) var(--s_w) no-repeat;
    }
`;
export const Tit = styled.p`
    font-size: 32px;
    font-weight: bold;
    * {
        font: inherit;
    }
    @media ${media.desktop} {
        font-size: 28px;
    }
    @media ${media.tablet} {
        font-size: ${rem(64)};
    }
`;
export const MidTit = styled.p`
    font-size: 28px;
    font-weight: bold;
    @media ${media.desktop} {
        font-size: 24px;
    }
    @media ${media.tablet} {
        font-size: ${rem(56)};
    }
`;
export const SubTit = styled.p`
    font-size: 24px;
    margin-bottom: 10px;
    font-weight: bold;
    @media ${media.desktop} {
        font-size: 20px;
    }
    @media ${media.tablet} {
        font-size: ${rem(48)};
    }
`;

export const Icon = styled.i`
    margin-right: 10px;

    &.icon_notion {
        width: 36px;
        height: 36px;
        background-image: url(#{$url-images}logos/logo_notion.png);
    }
    @media ${media.tablet} {
        margin-right: ${rem(30)};
        &.icon_notion {
            width: ${rem(80)};
            height: ${rem(80)};
        }
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
    color: ${(props) => props.theme.textColor};
`;

export const WrapStyles = css`
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-between;
`;
export const TxtFill = css`
    color: transparent;
    -webkit-text-fill-color: transparent;
    -webkit-text-stroke-width: 1px;
    -webkit-text-stroke-color: ${(props) => (props.theme === lightTheme ? "#000" : "#fff")};
    font-weight: 600;

    --s: 0.1em;
    --c: ${(props) => (props.theme === lightTheme ? "#000" : "#fff")}; // hover 시 채울 색
    --b: transparent;

    padding-bottom: var(--s);
    background: linear-gradient(90deg, var(--c) 50%, var(--b) 0) calc(100% - var(--_p, 0%)) / 200% 100%, linear-gradient(var(--c) 0 0) 0% 100% / var(--_p, 0%) var(--s) no-repeat;

    -webkit-background-clip: text, padding-box;
    background-clip: text, padding-box;
    transition: 0.5s;
`;

export const TxtFillHover = css`
    --_p: 100%;
    -webkit-text-fill-color: var(--c);
    color: var(--c);
    padding-left: 10px;
`;
