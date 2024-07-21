import styles from "./index.module.css";
import React from "react";
import Logo from "../../assets/images/logo.svg";
function Header() {
    return (
        <header>
            <a href="#">
                <img src={Logo} alt="bu yerda sahifa logotipi bor" />
            </a>
            <ul>
                <li>
                    <a href="#">Vakansiyalar</a>
                </li>
                <li>
                    <a href="#">Kandidatlar</a>
                </li>
                <li>
                    <a href="#">Kompaniyalar</a>
                </li>
                <li>
                    <a href="#">Xizmatlar</a>
                </li>
                <li>
                    <a href="#">Ta’lim</a>
                </li>
            </ul>
            <div className={styles.rightpart}>
                <select name="" id="til">
                    <option value="O'zb">O'zb</option>
                    <option value="rus">rus</option>
                    <option value="eng">eng</option>
                </select>
                <button className={styles.btn1}>Boshlash</button>
            </div>
        </header>
    );
}

export default Header;
