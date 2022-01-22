import { getFileIds, getFileData } from "../../libs/posts-md";
import Layout from "../../components/layout";
import Head from "next/head";

export default function Article({ postData }) {
    // 解析Markdown
    const html = `
    <h1>${postData.title}</h1>
    <p class="time">日期：<time datetime="${postData.dateFriendly}">${postData.dateYMD}</time></p>
    <p class="words">${postData.wordcount}</p>
    ${postData.html}
  `;

    return (
        <Layout title="share.png">
            <Head>
                <title>{postData.title}</title>
                <meta name="description" content={postData.description} />
            </Head>

            <article dangerouslySetInnerHTML={{ __html: html }} />
        </Layout>
    );
}

// post configuration
const postsDir = "articles";

/**
 * 获取博客路径信息
 * @returns [ { params: { id: 'article-01' } } ]
 */
export async function getStaticPaths() {
    const paths = (await getFileIds(postsDir)).map((id) => {
        return { params: { id } };
    });
    return {
        paths,
        fallback: false,
    };
}

/**
 * 解析路由获取详细内容
 * @param {*} param0
 * @returns
 */
export async function getStaticProps({ params }) {
    return {
        props: {
            postData: await getFileData(postsDir, params.id),
        },
    };
}
