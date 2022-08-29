import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

import PropTypes, { oneOfType } from "prop-types";

import styles from "./Product.module.css";

const Product = ({ id, name, dollarPrice, rialPrice, image, mainPage }) => {
	// eslint-disable-next-line
	const [t, i18n] = useTranslation();

	return (
		<>
			<Link className={styles.productLink} to={mainPage ? `mac-studio/${id}` : id} dir={t("dir")}>
				<article className={styles.product}>
					<img className={styles["product__img"]} src={image || "https://placehold.jp/256x256.png"} alt="id" />
					<h2 className={styles["product__title"]}>{t("dir") === "ltr" ? name[0] || "Apple Mac" : name[1] || "اپل مک"}</h2>
					<h3 dir={t("dir")} className={styles["product__price"]}>
						{t("dir") === "ltr" ? `$${dollarPrice}` || "No Price" : `${rialPrice} تومان` || "بدون قیمت"}
					</h3>
				</article>
			</Link>
		</>
	);
};

Product.propTypes = {
	id: oneOfType([PropTypes.string, PropTypes.number]),
	name: PropTypes.array,
	dollarPrice: oneOfType([PropTypes.string, PropTypes.number]),
	rialPrice: PropTypes.string,
	image: PropTypes.string,
	mainPage: PropTypes.bool,
};

export default Product;
