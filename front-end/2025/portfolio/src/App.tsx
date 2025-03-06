import { BrowserRouter } from "react-router-dom";
import GlobalStyle from "./styles/GlobalStyle";

import Router from "./Router";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import Quick from "./Components/Quick";

function App() {
    return (
        <>
            <GlobalStyle />
            <BrowserRouter>
                <Header />
                <Router />
                <Quick />
                <Footer />
            </BrowserRouter>
        </>
    );
}

export default App;
