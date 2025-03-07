import { Link, useLocation } from "react-router-dom";
import { Container, Txt, TxtAf, TxtEffect, WrapStyles } from "../styles/commonStyles";
import styled from "styled-components";
import { media } from "../utils/media";
import { rem } from "../utils/rem";

const navLinks = [
    { path: "/", label: "About" },
    { path: "/work", label: "Work" },
];

const Header = () => {
    const location = useLocation();
    return (
        <>
            <HeaderSection>
                <Container>
                    <NavWrap>
                        {navLinks.map((navLink, index) => (
                            <NavList key={index} className={location.pathname === navLink.path ? "active" : ""}>
                                <Link to={navLink.path}>{navLink.label}</Link>
                            </NavList>
                        ))}
                    </NavWrap>

                    <TxtEffectWrap>
                        <TxtDesc>JeongDaseul</TxtDesc>
                        <TxtAfDesc>JeongDaseul</TxtAfDesc>
                    </TxtEffectWrap>
                </Container>
            </HeaderSection>
        </>
    );
};

const HeaderSection = styled.header`
    position: fixed;
    left: 0;
    top: 0;
    z-index: 9;
    width: 100%;
    padding: 30px 0;
    background: #000;
    @media ${media.tablet} {
        padding: ${rem(60)} 0;
    }
`;

const NavWrap = styled.ul`
    ${WrapStyles}
    flex-wrap: nowrap;
    height: 100%;
`;

const NavList = styled.li`
    width: 100%;
    transform: translateX(0);
    transition: all 0.3s;
    text-align: right;
    a {
        position: relative;
        display: inline-block;
        font-weight: 500;
        &::after {
            content: "";
            position: absolute;
            background: ${(props) => props.theme.accentColor};
            transition: all 0.3s;
            opacity: 0;
            width: 6px;
            height: 6px;
            border-radius: 100%;
            left: 30%;
            transform: translateX(-50%);
            bottom: -50%;
        }
    }
    &.active {
        transform: translateX(2%);
        a {
            &::after {
                opacity: 1;
                left: 50%;
            }
        }
    }
    @media ${media.desktop_hover} {
        &:hover {
            transform: translateX(2%);
            a {
                &::after {
                    opacity: 1;
                    left: 50%;
                }
            }
        }
    }
    @media ${media.tablet} {
        text-align: center;
    }

    @media ${media.mobile} {
        a {
            &::after {
                width: ${rem(12)};
                height: ${rem(12)};
            }
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
    position: fixed;
    left: 0;
    z-index: 9;
    bottom: 10%;
    color: ${(props) => props.theme.accentColor};
    transform: rotate(90deg);
    p {
        letter-spacing: 0.1em;
        font-weight: bold;
        padding: 0 5px;
    }
    @media ${media.desktop_hover} {
        &:hover {
            p {
                transform: translate3d(-300%, 0%, 0);
                &:nth-child(2) {
                    transform: translate3d(0, 0, 0);
                }
            }
        }
    }

    @media ${media.tablet} {
        left: ${rem(-130)};
        p {
            padding: 0 ${rem(40)};
        }
    }
`;
export default Header;
