import { BrowserRouter } from "react-router-dom";
import GlobalStyle from "./styles/GlobalStyle";

import Router from "./Router";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import Quick from "./Components/Quick";
import { useEffect, useRef, useState } from "react";

function App() {
    const [isSectionVisible, setIsSectionVisible] = useState(false);
    const sectionRef = useRef<HTMLDivElement | null>(null);

    const checkVisibility = () => {
        if (sectionRef.current) {
            const section = sectionRef.current;
            const sectionTop = section.offsetTop;
            const sectionHeight = section.offsetHeight;

            if (window.scrollY + window.innerHeight >= sectionTop + sectionHeight) {
                setIsSectionVisible(true);
            } else {
                setIsSectionVisible(false);
            }
        }
    };

    useEffect(() => {
        window.addEventListener("scroll", checkVisibility);

        return () => {
            window.removeEventListener("scroll", checkVisibility);
        };
    }, []);

    return (
        <>
            <GlobalStyle />
            <BrowserRouter>
                <Header isSectionVisible={isSectionVisible} />
                <Router sectionRef={sectionRef} />
                <Quick isSectionVisible={isSectionVisible} sectionRef={sectionRef} />
                <Footer />
            </BrowserRouter>
        </>
    );
}

export default App;
