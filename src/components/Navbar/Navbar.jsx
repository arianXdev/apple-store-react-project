import { Link, NavLink } from "react-router-dom";
import { faApple } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { useTranslation } from "react-i18next";

import styles from "./Navbar.module.css";

const Navbar = () => {
	const { t, i18n } = useTranslation();

	return (
		<nav className={styles.navbar}>
			<div className="container">
				<div className={styles.nav}>
					<Link to="/" className={styles.logoLink}>
						<FontAwesomeIcon icon={faApple} color="#d7d7d7" className={styles.logo} />
					</Link>

					<NavLink className={styles.navItem} to="/store">
						{t("Store")}
					</NavLink>
					<NavLink className={styles.navItem} to="/mac">
						{t("Mac")}
					</NavLink>
					<NavLink className={styles.navItem} to="/ipad">
						{t("iPad")}
					</NavLink>
					<NavLink className={styles.navItem} to="/iphone">
						{t("iPhone")}
					</NavLink>
					<NavLink className={styles.navItem} to="/watch">
						{t("Watch")}
					</NavLink>
					<NavLink className={styles.navItem} to="/airpods">
						{t("AirPods")}
					</NavLink>
					<NavLink className={styles.navItem} to="/tv">
						{t("TV & Home")}
					</NavLink>
					<NavLink className={styles.navItem} to="/accessories">
						{t("Accessories")}
					</NavLink>
					<NavLink className={styles.navItem} to="/support">
						{t("Support")}
					</NavLink>

					<button className={styles.bagButton}>
						<ion-icon name="bag-outline"></ion-icon>
					</button>
				</div>
			</div>
		</nav>
	);
};

export default Navbar;
