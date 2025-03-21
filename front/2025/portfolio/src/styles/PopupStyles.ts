import { rem } from "../utils/rem";
import { media } from "./../utils/media";
import styled from "styled-components";

export const Popup = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    z-index: 10000;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.8);
    > div {
        overflow: auto;
        width: 100%;
        height: 100%;
        padding: 10%;
        text-align: center;
        img {
            max-width: 80%;
        }
    }
    button {
        margin-left: auto;
        left: auto;
        right: 0;
        top: 0;
        z-index: 2;
        position: sticky;
        text-decoration: none;
        width: 45px;
        height: 45px;
        display: flex;
        align-items: center;
        justify-content: center;
        background: rgba(255, 208, 47, 1);
        font-size: 24px;
        color: #fff;
    }
    @media ${media.mobile} {
        > div {
            padding: 20% 5% 5%;
            img {
                max-width: 100%;
            }
        }
        button {
            font-size: 2rem;
            margin-bottom: 5%;
            width: ${rem(80)};
            height: ${rem(80)};
        }
    }
`;
