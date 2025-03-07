import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { ArrowIcon, FooterContainer, FooterSection, InfoItem, InfoList, InfoTitle, InfoValue, TxtAfDesc, TxtDesc, TxtEffectWrap } from "../styles/FooterStyles";

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

export default Footer;
