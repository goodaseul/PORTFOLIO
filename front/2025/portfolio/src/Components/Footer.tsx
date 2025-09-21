import { FooterContainer, FooterSection, InfoItem, InfoList, InfoTitle, InfoValue, TxtAfDesc, TxtDesc, TxtEffectWrap } from "../styles/FooterStyles";
import { useState } from "react";
import { MdArrowOutward } from "react-icons/md";
import { useRecoilState } from "recoil";
import { isDarkAtom } from "../recoil/atoms";
import { useLocation } from "react-router-dom";
const infoList = [
    { title: "NAME", value: "JEONG DASEUL" },
    { title: "깃허브", value: "바로가기", link: "https://github.com/goodaseul" },
    { title: "경력기술서", value: "바로가기", link: "https://brazen-preface-849.notion.site/1c5e95655242802285f3d7baeb09e0ef?pvs=74" },
    { title: "E-MAIL", value: "jds6408@naver.com", link: "mailto:jds6408@naver.com" },
    { title: "TEL", value: "+82 (0)10 8975 6408", link: "tel:+8201089756408" },
];

const Footer = () => {
    const [nowYear] = useState(new Date().getFullYear());

    const [isDark] = useRecoilState(isDarkAtom);
    const location = useLocation();

    return (
        <FooterSection className={!isDark && location.pathname === "/work" ? "workLight" : ""}>
            <FooterContainer>
                <InfoList>
                    {infoList.map(({ title, value, link }, index) => (
                        <InfoItem key={index}>
                            <InfoTitle>{title} ,</InfoTitle>
                            <dd>
                                <InfoValue as={link ? "a" : "span"} href={link} target="_blank" rel="noopener noreferrer">
                                    {value}
                                    {link && (
                                        <i>
                                            <MdArrowOutward />
                                        </i>
                                    )}
                                </InfoValue>
                            </dd>
                        </InfoItem>
                    ))}
                </InfoList>

                <TxtEffectWrap>
                    <TxtDesc>© {nowYear} JEONGDASEUL PORTFOLIO</TxtDesc>
                    <TxtAfDesc>© {nowYear} JEONGDASEUL PORTFOLIO</TxtAfDesc>
                </TxtEffectWrap>
            </FooterContainer>
        </FooterSection>
    );
};

export default Footer;
