import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import classNames from "classnames/bind";

import styles from "./App.module.css";

const App = () => {
	const { t } = useTranslation();

	let cx = classNames.bind(styles);
	let language = t("dir") === "ltr" ? "EN" : "FA" || "EN";

	const IntroSupportTextClass =
		cx({
			IntroSupportText: t("dir") === "ltr",
			IntroSupportTextFA: t("dir") === "rtl",
		}) || "IntroSupportText";

	return (
		<div className={styles.App} dir={t("dir")}>
			<div className="container">
				<main className={styles.Main}>
					<div className={styles.Intro}>
						<p className={styles.IntroText} language={language}>
							<span className={styles.IntroTitle}>
								{t("Store")}. <span className={styles.IntroSubtitle}>{t("subtitle")}</span>
							</span>
						</p>

						<div className={styles.IntroSupport} language={language}>
							<img src={require("./assets/images/store-chat-specialist-icon.jpg")} alt="store-chat-specialist" />

							<div>
								<h4 className={IntroSupportTextClass}>{t("SupportText")}</h4>
								<Link to="/support">{t("callSupport")}</Link>
							</div>
						</div>
					</div>
				</main>
			</div>
		</div>
	);
};

export default App;
