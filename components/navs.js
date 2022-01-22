import { useRouter } from "next/router";
import Link from "next/link";

// menu name and link
const menu = [
    { text: "网站首页", link: "/" },
    { text: "关于我们", link: "/about" },
    { text: "博客列表", link: "/articles" },
];

export default function Navs() {
    const router = useRouter(),
        currentPage = router.pathname;

    return (
        <nav>
            <ul>
                {menu.map((item) => (
                    <NavItem
                        key={item.link}
                        text={item.text}
                        link={item.link}
                        currentpage={currentPage}
                    />
                ))}
            </ul>
        </nav>
    );
}

function NavItem({ text, link, currentpage }) {
    if (link === currentpage) {
        return (
            <li className="active">
                <strong>{text}</strong>
            </li>
        );
    } else {
        return (
            <li>
                <Link href={link}>
                    <a>{text}</a>
                </Link>
            </li>
        );
    }
}
