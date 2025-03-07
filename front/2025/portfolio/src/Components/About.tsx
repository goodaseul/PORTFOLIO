import styled from "styled-components";
import { Container, Section } from "../styles/commonStyles";

const About = () => {
    return (
        <AboutSection>
            <Marquee className="top">
                <MarqueeTxt></MarqueeTxt>
            </Marquee>
            <Marquee className="bottom">
                <MarqueeTxt></MarqueeTxt>
            </Marquee>
            <ContainerPart>
                <div className="wrap_introduce">
                    <h2 className="tit effect">
                        안녕하세요 <mark>!</mark>
                        한사람 몫은 꼭 해내는
                        <br />웹 퍼블리셔 <strong>정다슬</strong> 입니다.
                    </h2>
                    <p className="mid_tit effect">
                        프로젝트를 진행하면서 다른 팀원들과 원활한 소통이 가능하며, 주어진 대로만 만들어 내는 것이 아닌 주체적으로 의견을 제시하면서 더 좋은 사용성에 대해 끊임없이 고민하면서 퍼블리싱을 하는 것을 지향합니다.
                        <br />
                        <br />
                        앞으로도 끊임없이 고민하고, 발전을 하며 생각의 폭을 넓혀가겠습니다.
                        <br />
                        공부하고, 발전하며, 어제보다는 성장한 내가 될 수 있는 퍼블리셔가 되겠습니다.
                    </p>
                </div>

                <div className="wrap_about">
                    <ul className="tab effect">
                        <li className="active">
                            <a href="">일할 때</a>
                        </li>
                        <li>
                            <a href="">평상 시</a>
                        </li>
                    </ul>
                    <div className="effect">
                        <h2 className="tit">
                            <p>
                                <strong>
                                    저는,<span className="status"></span>
                                    이런 사람입니다.
                                </strong>
                            </p>
                        </h2>
                        <div className="wrap_tab_cont">
                            <div className="box active">
                                <ul>
                                    <li>긍정적인 방향으로 프로젝트를 완수합니다.</li>
                                    <li>맡은 몫은 최선을 다해 이뤄냅니다.</li>
                                    <li>꼼꼼하게 더 실용적인 코드를 만들 수 있게 생각합니다.</li>
                                    <li>커뮤니케이션을 중요하게 생각합니다.</li>
                                    <li>동료들과 의견을 제시하고 수용합니다.</li>
                                    <li>웹 표준, 웹 접근성을 지킵니다.</li>
                                    <li>깔끔하고, 실용적인 stylesheet 를 지향합니다.</li>
                                </ul>
                            </div>
                            <div className="box">
                                <ul>
                                    <li>긍정적인 생각을 좋아합니다.</li>
                                    <li>시간 약속을 중요시합니다.</li>
                                    <li>새롭게 배우는 것을 좋아합니다.</li>
                                    <li>활발하며 대화하는 걸 좋아해요.</li>
                                    <li>동료들과 화합과 융화를 합니다.</li>
                                    <li>꼼꼼하고, 정리를 좋아해요.</li>
                                    <li>웃음이 많아요.</li>
                                    <li>활동적인 것을 좋아해요.</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </ContainerPart>
        </AboutSection>
    );
};

const AboutSection = styled(Section)`
    padding: 140px 0;
    background: ${(props) => props.theme.bgColor};
`;
const Marquee = styled.div`
    position: absolute;
    width: 100vw;
    display: flex;
    pointer-events: none;
    &.top {
        top: 46%;
        transform: translateY(-50%);
    }
    &.bottom {
        bottom: -5%;
        justify-content: flex-end;
    }
`;
const MarqueeTxt = styled.p`
    display: flex;
    font-size: 12rem;
    font-weight: bold;
    -webkit-text-fill-color: rgba(255, 255, 255, 0);
    -webkit-text-stroke-width: 1px;
    -webkit-text-stroke-color: #fff;
    opacity: 0.5;
`;
const ContainerPart = styled(Container)`
    height: 100%;
    color: #fff;
`;
export default About;
