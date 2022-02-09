import Header from "./header";
import Footer from "./footer";
import { useState } from "react";
import { Transition } from "react-transition-group";

const duration = 300;

const defaultStyle = {
    transition: `opacity ${duration}ms ease-in-out`,
    opacity: 0,
};

const transitionStyles = {
    entering: { opacity: 1 },
    entered: { opacity: 1 },
    exiting: { opacity: 0 },
    exited: { opacity: 0 },
};

export default function Layout({ children, title }) {
    const [inProp, setInProp] = useState(false);
    const delay = () => {
        setTimeout(() => {
            !inProp && setInProp(!inProp);
        }, 500);
    };
    delay();
    return (
        <>
            <Header title={title} />
            <main>
                <Transition in={inProp} timeout={500}>
                    {(state) => (
                        <div
                            style={{
                                ...defaultStyle,
                                ...transitionStyles[state],
                            }}
                        >
                            {children}
                        </div>
                    )}
                </Transition>
            </main>
            <Footer />
        </>
    );
}
