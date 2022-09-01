import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faApple } from "@fortawesome/free-brands-svg-icons";
import { useTranslation } from "react-i18next";
import styles from "./NotFound.module.css";

const NotFound = () => {
	const [t] = useTranslation();

	return (
		<section className={styles.NotFound}>
			<div className="container">
				<FontAwesomeIcon icon={faApple} size="9x" />
				<h2 className={styles["NotFound__title"]}>{t("PageNotFoundText")}</h2>
				<h4 className={styles["NotFound__subtitle"]}> * {t("404error")} * </h4>
			</div>
		</section>
	);
};

export default NotFound;
