import { useState, useEffect } from "react";
import { doc, onSnapshot, collection } from "firebase/firestore";
import db from "../../services/firebase";

import { useParams } from "react-router-dom";
import { useTranslation } from "react-i18next";

import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import Typography from "@mui/material/Typography";

import styles from "./ProductDetails.module.css";
import Spinner from "../Spinner/Spinner";

const ProductDetails = () => {
	const params = useParams();
	const [productInfo, setProductInfo] = useState([]);
	const [productId, setProductId] = useState("");

	const [expanded, setExpanded] = useState(false);
	const [t, i18n] = useTranslation();

	// Accordion Event Handler
	const handleChange = (panel) => (event, isExpanded) => {
		setExpanded(isExpanded ? panel : false);
	};

	const docRef = doc(db, params.macId, params.macProductId);

	useEffect(
		() =>
			onSnapshot(collection(db, params.macId), (snapshot) => {
				snapshot.docs
					.filter((doc) => (doc.id === params.macProductId ? doc : false))
					.map((item) => {
						setProductId(item.id);
						setProductInfo(item.data());
					});
			}),
		[]
	);

	const handleAddToCart = (e) => {
		console.log(e.target);
	};

	return (
		<div className={styles.ProductPage}>
			<div className="container">
				<section className={styles.ProductDetails}>
					<div className={styles["ProductDetails__left"]}>{!productInfo.image ? <Spinner /> : <img src={productInfo.image} alt={productInfo.id || "product"} />}</div>
					<div className={styles["ProductDetails__right"]} dir={t("dir")}>
						<div className={styles["ProductDetails__info"]}>
							<h2 className={styles["ProductDetails__title"]}>
								{t("dir") === "ltr" ? productInfo.EnglishName || t("no-data") : productInfo.PersianName || t("no-data")}
							</h2>
							<h4 className={styles["ProductDetails__subtitle"]}>{productInfo.EnglishName}</h4>
							<p className={styles["ProductDetails__price"]}>
								{productInfo.dollarPrice && t("dir") === "ltr" ? "$" : ""}
								{t("dir") === "ltr" ? `${productInfo.dollarPrice || t("no-data")}` : `${productInfo.rialPrice || t("no-data")}`}
								{productInfo.rialPrice && t("dir") === "rtl" ? " تومان " : ""}
							</p>
						</div>
						<button onClick={(e) => handleAddToCart(e)} className={styles.AddToCardBtn}>
							{t("AddToCart")}
						</button>
					</div>
				</section>

				<section className={styles.productConfig}>
					<Accordion dir={t("dir")} expanded={expanded == "panel1"} className={styles.Accordion} onChange={handleChange("panel1")}>
						<AccordionSummary expandIcon={<ion-icon name="chevron-down-outline" size="large"></ion-icon>} aria-controls="panel1bh-content" id="panel1bh-header">
							<Typography className={styles.AccordionTitle} sx={{ width: "33%", flexShrink: 0, fontSize: "1.3em", fontWeight: 900 }}>
								{t("product-information")}
							</Typography>
						</AccordionSummary>
						<AccordionDetails className={styles.AccordionDetails}>
							<ul className={styles.AccordionDetailsList}>
								<li className={styles.AccordionListItem}>
									<h3 className={styles.AccordionItem}>{t("CPU")}</h3>
									<h3 className={styles.AccordionConfigItem}>{productInfo.CPU || t("no-data")}</h3>
								</li>
								<li className={styles.AccordionListItem}>
									<h3 className={styles.AccordionItem}>{t("GPU")}</h3>
									<h3 className={styles.AccordionConfigItem}>{productInfo.GPU || t("no-data")}</h3>
								</li>
								<li className={styles.AccordionListItem}>
									<h3 className={styles.AccordionItem}>{t("RAM")}</h3>
									<h3 className={styles.AccordionConfigItem} dir="ltr">
										{productInfo.RAM || t("no-data")}
									</h3>
								</li>
								<li className={styles.AccordionListItem}>
									<h3 className={styles.AccordionItem}>{t("Storage")}</h3>
									<h3 className={styles.AccordionConfigItem} dir="ltr">
										{productInfo.Storage || t("no-data")}
									</h3>
								</li>
								<li className={styles.AccordionListItem}>
									<h3 className={styles.AccordionItem}>{t("Year")}</h3>
									<h3 className={styles.AccordionConfigItem}>{productInfo.Year || t("no-data")}</h3>
								</li>
							</ul>
						</AccordionDetails>
					</Accordion>
				</section>
			</div>
		</div>
	);
};

export default ProductDetails;
