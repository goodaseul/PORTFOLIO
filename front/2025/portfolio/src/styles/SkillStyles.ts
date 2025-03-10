import styled from "styled-components";
import { AboutSection, Box, Tabs, TitShow } from "./Aboutstyles";
import { media } from "../utils/media";

export const SkillSection = styled(AboutSection)`
    z-index: 2;
`;
export const SkillPart = styled.div``;

export const TabsStart = styled(Tabs)`
    justify-content: flex-start;
`;
export const BoxBig = styled(Box)`
    @media ${media.desktop_hover} {
        ${TitShow} {
            transition: all 0.1s;
        }
        &:hover {
            ${TitShow} {
                font-size: 30px;
            }
        }
    }
`;
