import { Icon } from "../styles/commonStyles";
import { BtnTop, Induction, QuickPart } from "../styles/QuickStyles";

const Quick = () => {
    const onTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    };
    return (
        <QuickPart className="quick">
            <Induction className="induction">
                <Icon className="icon">스크롤 유도 버튼</Icon>
            </Induction>
            <BtnTop className="btn_top" onClick={onTop}>
                <Icon className="icon">상단으로 올라가기</Icon>
            </BtnTop>
        </QuickPart>
    );
};

export default Quick;
