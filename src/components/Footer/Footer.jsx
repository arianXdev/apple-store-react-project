import { useTranslation } from "react-i18next";

import { Link } from "react-router-dom";

import { Breadcrumb } from "..";

import styles from "./Footer.module.css";

const Footer = () => {
	// eslint-disable-next-line
	const [t, i18n] = useTranslation();

	return (
		<footer className={styles.Footer} dir={t("dir")}>
			<div className="container">
				<div className={styles.FooterBreadcrumb}>
					<Breadcrumb />
				</div>

				<div className={styles.FooterNav}>
					<ul className={styles.FooterNavList}>
						<li className={`${styles.FooterNavListItem} ${styles.FooterNavTitle}`}>
							<Link to="/mac"> {t("footer.store")}</Link>
						</li>
						<li className={styles.FooterNavListItem}>
							<Link to="/mac"> {t("Mac")}</Link>
						</li>
						<li className={styles.FooterNavListItem}>
							<Link to="/mac"> {t("iPad")}</Link>
						</li>
						<li className={styles.FooterNavListItem}>
							<Link to="/mac"> {t("iPhone")}</Link>
						</li>
						<li className={styles.FooterNavListItem}>
							<Link to="/mac"> {t("Watch")}</Link>
						</li>
						<li className={styles.FooterNavListItem}>
							<Link to="/mac"> {t("TV & Home")}</Link>
						</li>
					</ul>

					<ul className={styles.FooterNavList}>
						<li className={`${styles.FooterNavListItem} ${styles.FooterNavTitle}`}>
							<Link to="/mac">{t("footer.appleAccessories")}</Link>
						</li>
						<li className={styles.FooterNavListItem}>
							<Link to="/mac"> {t("footer.homePad")}</Link>
						</li>
						<li className={styles.FooterNavListItem}>
							<Link to="/mac"> {t("footer.airPods")}</Link>
						</li>
						<li className={styles.FooterNavListItem}>
							<Link to="/mac"> {t("footer.games")}</Link>
						</li>
						<li className={styles.FooterNavListItem}>
							<Link to="/mac"> {t("Watch")}</Link>
						</li>
						<li className={styles.FooterNavListItem}>
							<Link to="/mac"> {t("TV & Home")}</Link>
						</li>
					</ul>

					<ul className={styles.FooterNavList}>
						<li className={`${styles.FooterNavListItem} ${styles.FooterNavTitle}`}>
							<Link to="/mac">{t("footer.new2022Products")}</Link>
						</li>
						<li className={styles.FooterNavListItem}>
							<Link to="/mac"> {t("Mac")}</Link>
						</li>
						<li className={styles.FooterNavListItem}>
							<Link to="/mac"> {t("iPad")}</Link>
						</li>
						<li className={styles.FooterNavListItem}>
							<Link to="/mac"> {t("iPhone")}</Link>
						</li>
						<li className={styles.FooterNavListItem}>
							<Link to="/mac"> {t("Watch")}</Link>
						</li>
						<li className={styles.FooterNavListItem}>
							<Link to="/mac"> {t("TV & Home")}</Link>
						</li>
					</ul>

					<ul className={styles.FooterNavList}>
						<li className={`${styles.FooterNavListItem} ${styles.FooterNavTitle}`}>
							<Link to="/mac"> {t("footer.contactUsTitle")}</Link>
						</li>
						<li className={styles.FooterNavListItem}>
							<Link to="/mac"> {t("footer.support")}</Link>
						</li>
						<li className={styles.FooterNavListItem}>
							<Link to="/mac"> {t("footer.siteRules")}</Link>
						</li>
						<li className={styles.FooterNavListItem}>
							<Link to="/mac"> {t("footer.siteMap")}</Link>
						</li>
						<li className={styles.FooterNavListItem}>
							<Link to="/mac"> {t("Watch")}</Link>
						</li>
						<li className={styles.FooterNavListItem}>
							<Link to="/mac"> {t("TV & Home")}</Link>
						</li>
					</ul>
				</div>

				<div className={styles.FooterDesc}>
					<p className={styles.FooterParagraph}>{t("footer.desc")}</p>
				</div>

				<div className={styles.FooterCopyRight}>
					<p>Copyright © 2022 Apple Inc. All rights reserved.</p>

					<div className={styles.FooterLinks}>
						<Link to="/mac">{t("footer.Terms of Use")}</Link>
						<Link to="/mac">{t("footer.Privacy Policy")}</Link>
						<Link to="/mac">{t("footer.Sales and Refunds")}</Link>
						<Link to="/mac">{t("footer.Legal")}</Link>
					</div>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
