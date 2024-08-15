import { ReactNode } from "react";
import styles from "./styles.module.scss";
import NavItems from "../nav/NavItems";

const Layout = ({ children }: { children: ReactNode }) => {
    return (
        <section className={styles.container}>
            <NavItems />
            <div className={styles.page__wrapper}>
                {children}
            </div>

        </section>
    );
}

export default Layout;