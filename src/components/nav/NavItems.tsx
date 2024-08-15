/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from "react";
import Home from "../ui/icons/home/Home";
import Products from "../ui/icons/hits/Hits";
import Hits from "../ui/icons/hits/Hits";
import Promotion from "../ui/icons/promotion/Promotion";
import Categories from "../ui/icons/categorys/Categories";
import Logo from "../ui/icons/logo/Logo";
import { Link } from "react-router-dom";
import styles from "./styles.module.scss";


interface INavItem {
    id: number;
    title: string;
    link: string;
    Icon: any
}

const navItems: INavItem[] = [
    {
        id: 1,
        title: "Главная страница",
        link: "home",
        Icon: Home,
    },
    {
        id: 2,
        title: "Продукты",
        link: "products",
        Icon: Products,
    },
    {
        id: 3,
        title: "Хиты",
        link: "hits",
        Icon: Hits,
    },
    {
        id: 4,
        title: "Акции",
        link: "promotions",
        Icon: Promotion,
    },
    {
        id: 5,
        title: "Категории",
        link: "categories",
        Icon: Categories,
    },
];

const NavItems = () => {
    const [active, setActive] = useState(0);

    const setActiveNavItem = (index: number) => {
        setActive(index)
    }
    return (
        <section className={styles.nav}>
            <div >
                <Link to="/admin/home" className={styles.logo}>
                    <Logo />
                    <p>GameStore</p>
                </Link>
            </div>

            <ul className={styles.navItems}>
                {navItems.map(({ id, link, title, Icon }, index) => (
                    <li
                        key={id}
                        className={styles.navItem}
                        onClick={() => setActiveNavItem(index)}
                    >
                        <Link
                            to={`admin/${link}`}
                            key={id}
                            className={`${styles.link} ${index === active ? styles.active : ""}`}
                        >
                            {<Icon />}
                            <p>{title}</p>
                        </Link>
                    </li>
                ))}
            </ul>
        </section >
    );
}
export default NavItems;