import { Outlet, Link, NavLink } from "react-router-dom";
import { faApple } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { useTranslation } from "react-i18next";

import styles from "./Navbar.module.css";
import FAB from "../FAB/FAB";

const Navbar = () => {
	// eslint-disable-next-line
	const { t, i18n } = useTranslation();

	// handles if one of the nav items checked
	const activeNavItem = ({ isActive }) => (isActive ? { fontSize: "0.8em", color: "#fff" } : undefined);

	return (
		<>
			<nav className={styles.navbar} dir={t("dir")}>
				<div className="container">
					<div className={styles.nav}>
						<Link to="/" className={styles.logoLink}>
							<FontAwesomeIcon icon={faApple} color="#d7d7d7" className={styles.logo} />
						</Link>

						<NavLink className={styles.navItem} style={activeNavItem} to="/mac">
							{t("Mac")}
						</NavLink>
						<NavLink className={styles.navItem} style={activeNavItem} to="/ipad">
							{t("iPad")}
						</NavLink>
						<NavLink className={styles.navItem} style={activeNavItem} to="/iphone">
							{t("iPhone")}
						</NavLink>
						<NavLink className={styles.navItem} style={activeNavItem} to="/watch">
							{t("Watch")}
						</NavLink>
						<NavLink className={styles.navItem} style={activeNavItem} to="/airpods">
							{t("AirPods")}
						</NavLink>
						<NavLink className={styles.navItem} style={activeNavItem} to="/tv">
							{t("TV & Home")}
						</NavLink>
						<NavLink className={styles.navItem} style={activeNavItem} to="/accessories">
							{t("Accessories")}
						</NavLink>
						<NavLink className={styles.navItem} style={activeNavItem} to="/support">
							{t("Support")}
						</NavLink>

						<button className={styles.bagButton}>
							<ion-icon name="bag-outline"></ion-icon>
						</button>
					</div>
				</div>
			</nav>

			<Outlet />

			<FAB />
		</>
	);
};

export default Navbar;
