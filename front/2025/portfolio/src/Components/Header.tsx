import { Link, useLocation } from "react-router-dom";
import { Container } from "../styles/commonStyles";
import { HeaderSection, NavList, NavWrap, TxtAfDesc, TxtDesc, TxtEffectWrap } from "../styles/HeaderStyles";

const navLinks = [
    { path: "/", label: "About" },
    { path: "/work", label: "Work" },
];
interface HeaderProps {
    isSectionVisible: boolean;
}
const Header = ({ isSectionVisible }: HeaderProps) => {
    const location = useLocation();
    console.log(isSectionVisible);
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
