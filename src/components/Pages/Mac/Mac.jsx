import { Outlet, Link, useParams } from "react-router-dom";
import { useTranslation } from "react-i18next";

import styles from "./Mac.module.css";

import MacStudioIMG from "../../../assets/images/MacStudio.webp";
import MacBookPro16IMG from "../../../assets/images/MacBookPro16.webp";
import MacBookPro14IMG from "../../../assets/images/MacBookPro14.webp";
import MacBookPro13IMG from "../../../assets/images/MacBookPro13.webp";
import MacBookAirIMG from "../../../assets/images/MacBookAir.webp";
import MacMiniIMG from "../../../assets/images/MacMini.webp";
import ProDisplayXDRIMG from "../../../assets/images/ProDisplayXDR.webp";

const Mac = () => {
	const [t, i18n] = useTranslation();
	const params = useParams();

	return (
		<main className={styles.Mac}>
			{!params.macProductId ? (
				<section className={styles.topMain}>
					<div className="container">
						<div className={styles.products} dir={t("dir")}>
							<ul className={styles.productsList}>
								<li className={styles.productsItem}>
									<Link to="/mac/mac-studio">
										<img className={styles.productsImg} src={MacStudioIMG} alt="mac-studio" />
										{t("macStudio")}
									</Link>
								</li>
								<li className={styles.productsItem}>
									<Link to="/mac/mac-mini">
										<img className={styles.productsImg} src={MacMiniIMG} alt="mac-mini" />
										{t("macMini")}
									</Link>
								</li>
								<li className={styles.productsItem}>
									<Link to="/mac/macbook-air">
										<img className={styles.productsImg} src={MacBookAirIMG} alt="macbook-air" />
										{t("macBookAir")}
									</Link>
								</li>
								<li className={styles.productsItem}>
									<Link to="/mac/macbook-pro-13">
										<img className={styles.productsImg} src={MacBookPro13IMG} alt="macbook-pro-13" />
										{t("macBookPro13")}
									</Link>
								</li>
								<li className={styles.productsItem}>
									<Link to="/mac/macbook-pro-14">
										<img className={styles.productsImg} src={MacBookPro14IMG} alt="macbook-pro-14" />
										{t("macBookPro14")}
									</Link>
								</li>
								<li className={styles.productsItem}>
									<Link to="/mac/macbook-pro-16">
										<img className={styles.productsImg} src={MacBookPro16IMG} alt="macbook-pro-16" />
										{t("macBookPro16")}
									</Link>
								</li>
								<li className={styles.productsItem}>
									<Link to="/mac/pro-display-xdr">
										<img className={styles.productsImg} src={ProDisplayXDRIMG} alt="pro-display-xdr" />
										{t("proDisplayXDR")}
									</Link>
								</li>
							</ul>
						</div>
					</div>
				</section>
			) : null}

			{params.macId ? <Outlet /> : <h1>بهترین مک بوک های سال</h1>}
		</main>
	);
};

export default Mac;
