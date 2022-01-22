import Layout from "../components/layout";
import Head from "next/head";

export default function Home() {
    return (
        <Layout title="share.png">
            <Head>
                <title>关于我们</title>
            </Head>

            <h1>关于我们</h1>
            <p>
                DevPoint 是 WEB
                开发的分享中心，用自己的热情来分享互联网的点滴，以此激励自己加强学习提升自我。
            </p>
            <p>
                <a href="https://www.devpoint.cn/index.shtml">DevPoint.cn</a>
                ，取<code>develope point</code>
                之意，是一个关注互联网、探索互联网技术及应用的个人博客，因个人兴趣，激励自己学习而建立的。曾经是
                <code>lav.so</code>、互次元，由于
                平时喜欢去网上欣赏好的网站和应用，关注新的技术，以此来开阔自己的思维，激励自己的不断去学习，将自己喜欢的资料和学习笔记收集起来，扩展自己的技能和思维，始终保持一个学习的态度。
            </p>
            <ul class="list list-icons list-icons-style-2 mt-2">
                <li>
                    <i class="fab fa-weibo top-6"></i>
                    <strong class="text-dark">微博：</strong>
                    <a href="https://weibo.com/idyer" target="_blank">
                        https://weibo.com/idyer
                    </a>
                </li>
                <li>
                    <i class="fas fa-info top-6"></i>
                    <strong class="text-dark">InfoQ：</strong>
                    <a href="https://www.infoq.cn/u/devpoint" target="_blank">
                        https://www.infoq.cn/u/devpoint
                    </a>
                </li>
                <li>
                    <i class="fas fa-blog top-6"></i>
                    <strong class="text-dark">OSCHINA：</strong>
                    <a href="https://my.oschina.net/lav" target="_blank">
                        https://my.oschina.net/lav
                    </a>
                </li>
                <li>
                    <i class="fab fa-github top-6"></i>
                    <strong class="text-dark">GitHub：</strong>
                    <a href="https://github.com/QuintionTang" target="_blank">
                        https://github.com/QuintionTang
                    </a>
                </li>
                <li>
                    <i class="fas fa-envelope top-6"></i>
                    <strong class="text-dark">邮箱：</strong>
                    <a href="mailto:QuintionTang@gmail.com" target="_blank">
                        QuintionTang@gmail.com
                    </a>
                </li>
            </ul>
        </Layout>
    );
}
