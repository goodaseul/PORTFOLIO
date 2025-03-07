import { Routes, Route } from "react-router-dom";
import Home from "./Routes/Home";
import Work from "./Routes/Work";

const Router = () => {
    return (
        <Routes>
            <Route path="/work" element={<Work />}></Route>
            <Route path="/" element={<Home />}></Route>
        </Routes>
    );
};

export default Router;
