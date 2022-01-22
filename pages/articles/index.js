import { getAllFiles } from "../../libs/posts-md";
import Layout from "../../components/layout";
import Pagelink from "../../components/pagelink";
import Head from "next/head";

const postsDir = "articles";

export default function ArticleIndex({ postData }) {
    return (
        <Layout title="share.png">
            <Head>
                <title>博客列表</title>
                <meta
                    name="description"
                    content="A list of articles published on this site."
                />
            </Head>

            <h1>博客列表</h1>

            <aside className="pagelist">
                {postData.map((post) => (
                    <Pagelink
                        key={post.id}
                        postsdir={postsDir}
                        id={post.id}
                        title={post.title}
                        description={post.description}
                        dateymd={post.dateYMD}
                        datefriendly={post.dateFriendly}
                    />
                ))}
            </aside>
        </Layout>
    );
}

/**
 * 获取所有文章文章的数组
 * @returns
 */
export async function getStaticProps() {
    return {
        props: {
            postData: await getAllFiles(postsDir),
        },
    };
}
