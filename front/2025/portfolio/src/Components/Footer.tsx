import styled from "styled-components";
import { media } from "../utils/media";
import { rem } from "../utils/rem";
import { Arrow, ArrowHover, Container, Txt, TxtAf, TxtEffect, TxtFill, TxtFillHover } from "../styles/commonStyles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

const infoList = [
    { title: "NAME", value: "JEONG DASEUL" },
    { title: "깃허브", value: "바로가기", link: "https://github.com/goodaseul" },
    { title: "경력기술서", value: "바로가기", link: "https://www.notion.so/655ebd86a2e540a698d2595cb39e81d5" },
    { title: "E-MAIL", value: "gongdue3@gmail.com", link: "mailto:gongdue3@gmail.com" },
    { title: "TEL", value: "+82 (0)10 8975 6408", link: "tel:+8201089756408" },
];

const Footer = () => {
    return (
        <FooterSection>
            <FooterContainer>
                <InfoList>
                    {infoList.map(({ title, value, link }, index) => (
                        <InfoItem key={index}>
                            <InfoTitle>{title} ,</InfoTitle>
                            <InfoValue as={link ? "a" : "span"} href={link} target="_blank" rel="noopener noreferrer">
                                {value}
                                {link && (
                                    <ArrowIcon>
                                        <FontAwesomeIcon icon={faArrowRight} />
                                    </ArrowIcon>
                                )}
                            </InfoValue>
                        </InfoItem>
                    ))}
                </InfoList>

                <TxtEffectWrap>
                    <TxtDesc>© 2024 JEONGDASEUL PORTFOLIO</TxtDesc>
                    <TxtAfDesc>© 2024 JEONGDASEUL PORTFOLIO</TxtAfDesc>
                </TxtEffectWrap>
            </FooterContainer>
        </FooterSection>
    );
};

const FooterSection = styled.footer`
    position: sticky;
    z-index: 1;
    bottom: 0;
    width: 100%;
    background: ${({ theme }) => theme.bgColor};
    padding: 100px 0;

    @media ${media.tablet} {
        padding: ${rem(180)} 0;
    }
    @media ${media.mobile} {
        padding: ${rem(250)} 0;
    }
`;

const FooterContainer = styled(Container)`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const InfoList = styled.dl`
    width: 100%;
    font-size: 32px;
    @media ${media.tablet} {
        font-size: ${rem(60)};
    }
    @media ${media.mobile} {
        font-size: ${rem(40)};
    }
`;

const InfoItem = styled.div`
    display: flex;
    align-items: baseline;
    width: fit-content;
    margin-top: 30px;

    &:first-child {
        margin-top: 0;
    }

    @media ${media.tablet} {
        margin-top: ${rem(50)};
    }
`;

const InfoTitle = styled.dt`
    font-weight: bold;
    color: #fff;
`;

const InfoValue = styled.dd`
    display: flex;
    align-items: center;
    ${TxtFill}

    a {
        text-decoration: none;
        color: inherit;
        display: flex;
        align-items: center;
    }

    @media ${media.desktop_hover} {
        &:hover {
            ${TxtFillHover}
            svg {
                ${ArrowHover}
            }
        }
    }
`;

const ArrowIcon = styled.div`
    ${Arrow}
    width: 30px;
`;

const TxtDesc = styled.p`
    ${Txt}
`;

const TxtAfDesc = styled.p`
    ${TxtAf}
`;

const TxtEffectWrap = styled.div`
    ${TxtEffect}
    width: fit-content;
    margin-left: auto;

    @media ${media.desktop_hover} {
        &:hover {
            p {
                transform: translate3d(-300%, 0, 0);
                &:nth-child(2) {
                    transform: translate3d(0, 0, 0);
                }
            }
        }
    }

    @media ${media.tablet} {
        margin-top: ${rem(120)};
    }
`;

export default Footer;
