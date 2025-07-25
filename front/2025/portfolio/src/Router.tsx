import { Routes, Route } from "react-router-dom";
import Home from "./Routes/Home";
import Work from "./Routes/Work";

interface RouterProps {
    sectionRef: React.RefObject<HTMLDivElement | null>;
}

const Router = ({ sectionRef }: RouterProps) => {
    return (
        <Routes>
            <Route path="/" element={<Home sectionRef={sectionRef} />}></Route>
            <Route path="/work" element={<Work sectionRef={sectionRef} />}></Route>
            <Route path="*" element={<Home sectionRef={sectionRef} />}></Route>
        </Routes>
    );
};

export default Router;
