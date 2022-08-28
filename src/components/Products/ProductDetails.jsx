import { useState, useEffect, useTransition } from "react";
import { doc, getDoc, onSnapshot, collection } from "firebase/firestore";
import db from "../../services/firebase";

import { useParams } from "react-router-dom";
import { useTranslation } from "react-i18next";

import styles from "./ProductDetails.module.css";
import Spinner from "../Spinner/Spinner";

const ProductDetails = () => {
	const params = useParams();
	const [productInfo, setProductInfo] = useState([]);
	const [t, i18n] = useTranslation();

	const docRef = doc(db, params.macId, params.macProductId);

	useEffect(
		() =>
			onSnapshot(collection(db, params.macId), (snapshot) => {
				snapshot.docs.filter((doc) => (doc.id == params.macProductId ? doc : false)).map((item) => setProductInfo(item.data()));
			}),
		[]
	);

	return (
		<div className={styles.ProductPage}>
			<div className="container">
				<section className={styles.ProductDetails}>
					<div className={styles["ProductDetails__left"]}>{!productInfo.image ? <Spinner /> : <img src={productInfo.image} alt={productInfo.id || "product"} />}</div>
					<div className={styles["ProductDetails__right"]} dir={t("dir")}>
						<div className={styles["ProductDetails__info"]}>
							<h2 className={styles["ProductDetails__title"]}>{t("dir") == "ltr" ? productInfo.EnglishName : productInfo.PersianName}</h2>
							<h4 className={styles["ProductDetails__subtitle"]}>{productInfo.EnglishName}</h4>
							<p className={styles["ProductDetails__price"]}>
								{t("dir") == "ltr" ? `$${productInfo.dollarPrice}` : productInfo.rialPrice + " تومان" || "000,000,000"}
							</p>
						</div>
						<button className={styles.AddToCardBtn}>{t("AddToCart")}</button>
					</div>
				</section>
			</div>
		</div>
	);
};

export default ProductDetails;
