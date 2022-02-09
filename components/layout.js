import Header from "./header";
import Footer from "./footer";
import { useState } from "react";
import Fade from "react-reveal/Fade";

export default function Layout({ children, title }) {
    let [show, setShow] = useState(false);

    const delay = () => {
        setTimeout(() => {
            !show && setShow(!show);
        }, 500);
    };
    delay();
    return (
        <>
            <Header title={title} />
            <main>
                <Fade top when={show}>
                    {children}
                </Fade>
            </main>
            <Footer />
        </>
    );
}
