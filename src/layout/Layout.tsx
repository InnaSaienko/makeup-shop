import React, {FC, JSX} from 'react';
// @ts-ignore
import HeaderTop from "./HeaderTop/HeaderTop.jsx";
// @ts-ignore
import Navigation from "./Navigation/Navigation.jsx";
// @ts-ignore
import Footer from "./Footer/Footer.jsx";

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