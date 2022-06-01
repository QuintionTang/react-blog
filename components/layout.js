import Header from "./header";
import Footer from "./footer";
import { useState } from "react";
import { useSpring, config, animated } from "react-spring";

export default function Layout({ children, title }) {
    const [show, setShow] = useState(true);
    const properties = {
        to: { opacity: 1 },
        from: { opacity: 0 },
        reset: true,
        delay: 200,
        config: config.molasses,
    };

    const toggleText = () => {
        setShow(!show);
        api.start({
            ...properties,
            to: { opacity: show ? 1 : 0 },
            from: { opacity: show ? 0 : 1 },
        });
    };
    const [props, api] = useSpring(() => properties);

    const delay = () => {
        setTimeout(() => {
            !show && toggleText();
        }, 500);
    };
    delay();

    return (
        <>
            <Header title={title} />
            <main>
                <animated.div class="container" style={props}>
                    {children}
                </animated.div>
            </main>
            <Footer />
        </>
    );
}
