import styled from "styled-components";
import { media } from "../utils/media";
import { rem } from "../utils/rem";
import { Arrow, ArrowHover, Container, Txt, TxtAf, TxtEffect, TxtFill, TxtFillHover } from "../styles/commonStyles";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

const infoList = [
    { title: "NAME ,", value: "JEONG DASEUL" },
    { title: "깃허브 ,", value: "바로가기", link: "https://github.com/goodaseul" },
    { title: "경력기술서 ,", value: "바로가기", link: "https://www.notion.so/655ebd86a2e540a698d2595cb39e81d5" },
    { title: "E-MAIL ,", value: "gongdue3@gmail.com", link: "mailto:gongdue3@gmail.com" },
    { title: "TEL ,", value: "+82 (0)10 8975 6408", link: "tel:+8201089756408" },
];

const Footer = () => {
    return (
        <FooterSection>
            <Container>
                <div className="info">
                    <dl>
                        {infoList.map(({ title, value, link }, index) => (
                            <div key={index}>
                                <dt>{title}</dt>
                                <dd>
                                    {link ? (
                                        <a href={link} target="_blank" rel="noopener noreferrer">
                                            {value}
                                            <div className="wrap_arrow">
                                                <FontAwesomeIcon icon={faArrowRight} className="fa-solid" />
                                            </div>
                                        </a>
                                    ) : (
                                        value
                                    )}
                                </dd>
                            </div>
                        ))}
                    </dl>
                </div>
                <TxtEffectWrap>
                    <TxtDesc>© 2024 JEONGDASEUL PORTFOLIO</TxtDesc>
                    <TxtAfDesc className="txt_af">© 2024 JEONGDASEUL PORTFOLIO</TxtAfDesc>
                </TxtEffectWrap>
            </Container>
        </FooterSection>
    );
};

const FooterSection = styled.footer`
    position: sticky;
    z-index: 1;
    bottom: 0;
    left: 0;
    right: 0;
    background: ${(props) => props.theme.bgColor};
    padding: 100px 0;

    .info {
        dl {
            font-size: 32px;
            div {
                display: flex;
                align-items: baseline;
                width: fit-content;
                + div {
                    margin-top: 30px;
                }
                dt {
                    font-weight: bold;
                    color: #fff;
                }
                dd,
                a {
                    display: flex;
                    flex-wrap: wrap;
                    align-items: center;
                }
                dd {
                    --s: 0.1em;
                    --c: #fff;
                    ${TxtFill}
                    .wrap_arrow {
                        ${Arrow}
                        width: 30px;
                    }
                }
            }
        }
    }
    .copyrights {
        width: fit-content;
        margin-left: auto;
    }

    // PC hover
    @media ${media.desktop_hover} {
        .info {
            dl {
                div {
                    &:hover {
                        dd {
                            ${TxtFillHover}
                            .wrap_arrow {
                                svg {
                                    ${ArrowHover}
                                }
                            }
                        }
                    }
                }
            }
        }
    }

    @media ${media.tablet} {
        padding: ${rem(180)} 0;

        .info {
            dl {
                font-size: ${rem(60)};
                div {
                    + div {
                        margin-top: ${rem(50)};
                    }
                    dd {
                        ${TxtFillHover}
                        .wrap_arrow {
                            overflow: visible;
                            width: ${rem(30)};
                            svg {
                                ${ArrowHover}
                            }
                        }
                    }
                }
            }
            .copyrights {
                margin-top: ${rem(120)};
            }
        }
    }

    @media ${media.mobile} {
        padding: ${rem(250)} 0;
        .info {
            dl {
                font-size: ${rem(40)};
            }
        }
        .copyrights {
            margin-top: ${rem(150)};
        }
    }
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
                transform: translate3d(-300%, 0%, 0);
                &.txt_af {
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
