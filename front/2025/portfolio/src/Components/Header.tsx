import { Link, useLocation } from "react-router-dom";
import { Container } from "../styles/commonStyles";
import { ToggleDark, HeaderSection, NavList, NavWrap, TxtAfDesc, TxtDesc, TxtEffectWrap } from "../styles/HeaderStyles";

import { useRecoilState } from "recoil";
import { isDarkAtom } from "../recoil/atoms";
import { IoMdSunny } from "react-icons/io";
import { MdDarkMode } from "react-icons/md";

const navLinks = [
    { path: "/", label: "About" },
    { path: "/work", label: "Work" },
];
interface HeaderProps {
    isSectionVisible: boolean;
}
const Header = ({ isSectionVisible }: HeaderProps) => {
    const [isDark, setIsDark] = useRecoilState(isDarkAtom);
    const location = useLocation();
    return (
        <>
            <HeaderSection className={!isDark && location.pathname === "/work" ? "workLight" : ""}>
                <ToggleDark onClick={() => setIsDark((prev) => !prev)}>{isDark ? <IoMdSunny /> : <MdDarkMode />}</ToggleDark>

                <Container>
                    <NavWrap>
                        {navLinks.map((navLink, index) => (
                            <NavList key={index} className={location.pathname === navLink.path ? "active" : ""}>
                                <Link to={navLink.path}>{navLink.label}</Link>
                            </NavList>
                        ))}
                    </NavWrap>

                    <TxtEffectWrap
                        id="topTxtEffect"
                        style={{
                            opacity: isSectionVisible ? 0 : 1,
                        }}
                    >
                        <TxtDesc>JeongDaseul</TxtDesc>
                        <TxtAfDesc>JeongDaseul</TxtAfDesc>
                    </TxtEffectWrap>
                </Container>
            </HeaderSection>
        </>
    );
};

export default Header;
