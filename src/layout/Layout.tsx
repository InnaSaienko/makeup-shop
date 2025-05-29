import React, {FC, JSX} from 'react';
import HeaderTop from "../layout/HeaderTop/HeaderTop";
import Navigation from "./Navigation/Navigation";
import Footer from "./Footer/Footer";

interface ChildrenProps { children: React.ReactNode }

const Layout: FC<ChildrenProps> = ({children}) : JSX.Element => {
    return (
        <>
            <header className="layout">
                <HeaderTop/>
                <Navigation/>
            </header>
            <main>
                {children}
            </main>
            <footer className="layout">
                <Footer/>
            </footer>
        </>
    );
};

export default Layout;