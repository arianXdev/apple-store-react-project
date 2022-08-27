import styles from "./Navbar.module.css";

const Navbar = () => {
	return (
		<nav className={styles.navbar}>
			<div className="container">
				<h1>Hello, It's Navbar</h1>
			</div>
		</nav>
	);
};

export default Navbar;
