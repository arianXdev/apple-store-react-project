import { useEffect, useState } from "react";
import { Outlet, Link, NavLink } from "react-router-dom";
import { faApple, faGithub } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCopy, faPaste } from "@fortawesome/free-regular-svg-icons";

import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";

import { Divider, Fab, ListItemText, Typography } from "@mui/material";

import { useTranslation } from "react-i18next";

import styles from "./Navbar.module.css";
import FAB from "../FAB/FAB";

const Navbar = () => {
	// eslint-disable-next-line
	const { t, i18n } = useTranslation();
	const [FABState, setFABState] = useState(false);

	// handles if one of the nav items checked
	const activeNavItem = ({ isActive }) => (isActive ? { fontSize: "0.8em", color: "#fff" } : undefined);

	const handleScrollToUp = () => window.scrollTo({ top: 0, left: 0, behavior: "smooth" });

	useEffect(() => {
		const handleScroll = (event) => {
			if (window.scrollY > 200) {
				setFABState(true);
			} else {
				setFABState(false);
			}
		};

		window.addEventListener("scroll", handleScroll);

		return () => {
			window.removeEventListener("scroll", handleScroll);
		};
	}, []);

	const [contextMenu, setContextMenu] = useState(null);

	const handleContextMenu = (event) => {
		event.preventDefault();
		setContextMenu(
			contextMenu === null
				? {
						mouseX: event.clientX + 2,
						mouseY: event.clientY - 6,
				  }
				: // repeated contextmenu when it is already open closes it with Chrome 84 on Ubuntu
				  // Other native context menus might behave different.
				  // With this behavior we prevent contextmenu from the backdrop to re-locale existing context menus.
				  null
		);
	};

	const handleClose = () => {
		setContextMenu(null);
	};

	return (
		<section onContextMenu={handleContextMenu} style={{ cursor: "context-menu" }}>
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

			{/* Change Language FAB */}
			<FAB />

			{/* SCrollToUp FAB */}
			<Fab
				onClick={handleScrollToUp}
				color="primary"
				aria-label="add"
				className={styles.ScrollButton}
				title="Scroll To Up"
				style={FABState ? { opacity: "1", pointerEvents: "auto", userSelect: "auto" } : {}}
			>
				<ion-icon name="chevron-up-outline" title="Scroll To Up"></ion-icon>
			</Fab>

			<Menu
				open={contextMenu !== null}
				onClose={handleClose}
				anchorReference="anchorPosition"
				anchorPosition={contextMenu !== null ? { top: contextMenu.mouseY, left: contextMenu.mouseX } : undefined}
			>
				<MenuItem onClick={handleClose}>
					<FontAwesomeIcon icon={faCopy} />
					<ListItemText sx={{ minWidth: 150, marginLeft: 1 }}>Copy</ListItemText>
					<Typography color="text.secondary">⌘C</Typography>
				</MenuItem>
				<MenuItem onClick={handleClose}>
					<FontAwesomeIcon icon={faPaste} />
					<ListItemText sx={{ minWidth: 150, marginLeft: 1 }}>Paste</ListItemText>
					<Typography color="text.secondary">⌘V</Typography>
				</MenuItem>
				<Divider />
				<MenuItem onClick={handleClose}>
					<FontAwesomeIcon icon={faGithub} />
					<ListItemText sx={{ minWidth: 150, marginLeft: 1 }}>
						<a className={styles.ContextMenuLink} href="https://github.com/aryanhosseini" target="_blank">
							Github Account
						</a>
					</ListItemText>
				</MenuItem>
			</Menu>
		</section>
	);
};

export default Navbar;
