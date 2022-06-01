import Layout from "../components/layout";
import Head from "next/head";
import dynamic from "next/dynamic";
const VideoCall = dynamic(() => import("../components/videocall"), {
    ssr: false,
});
const Home = () => {
    return (
        <Layout>
            <Head>
                <title>Next.js网站</title>
                <meta
                    name="description"
                    content="这是一个由 Next.js 驱动的网站"
                />
            </Head>
            <VideoCall></VideoCall>
        </Layout>
    );
};
export default Home;
