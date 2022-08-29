import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

import MacMiniProductIMG from "../../assets/images/products/apple-mac-studio-m1-1-572x572.webp";

import styles from "./Product.module.css";

const Product = ({ id, name, dollarPrice, rialPrice, image, mainPage }) => {
	const [t, i18n] = useTranslation();

	return (
		<>
			<Link className={styles.productLink} to={mainPage ? `mac-studio/${id}` : id} dir={t("dir")}>
				<article className={styles.product}>
					<img className={styles["product__img"]} src={image || MacMiniProductIMG} alt="id" />
					<h2 className={styles["product__title"]}>{t("dir") === "ltr" ? name[0] || "Apple Mac" : name[1] || "اپل مک"}</h2>
					<h3 className={styles["product__price"]}>{t("dir") === "ltr" ? `${dollarPrice}` || "No Price" : `تومان ${rialPrice}` || "بدون قیمت"}</h3>
				</article>
			</Link>
		</>
	);
};

export default Product;
