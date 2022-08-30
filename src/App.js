import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import classNames from "classnames/bind";

import styles from "./App.module.css";

const App = () => {
	const { t, i18n } = useTranslation();

	let cx = classNames.bind(styles);
	let language = t("dir") === "ltr" ? "EN" : "FA" || "EN";

	const IntroSupportTextClass =
		cx({
			IntroSupportText: t("dir") === "ltr",
			IntroSupportTextFA: t("dir") === "rtl",
		}) || "IntroSupportText";

	const handleScrollToUp = () => window.scrollTo({ top: 0, left: 0, behavior: "smooth" });

	return (
		<div className={styles.App} dir={t("dir")}>
			<div className="container">
				<main className={styles.Main}>
					{/* Start App Intro */}
					<div className={styles.Intro}>
						<p className={styles.IntroText} language={language}>
							<span className={styles.IntroTitle}>
								{t("Store")}. <span className={styles.IntroSubtitle}>{t("subtitle")}</span>
							</span>
						</p>

						<div className={styles.IntroSupport} language={language}>
							<img src={require("./assets/images/store-chat-specialist-icon.jpg")} alt="store-chat-specialist" />

							<div>
								<h4 className={styles.IntroSupportTextClass}>{t("SupportText")}</h4>
								<Link onClick={handleScrollToUp} to="/support">
									{t("callSupport")}
								</Link>
							</div>
						</div>
					</div>
					{/* End App Intro */}

					{/* Start Block */}
					<section className={`${styles.Block} ${styles.Mac}`}>
						<div className={styles.BlockHeader}>
							<picture>
								<source media="(max-width: 768px)" srcSet={require("./assets/images/BlockHeader-Mobile-Mac.webp")} />
								<source media="(min-width: 769px)" srcSet={require("./assets/images/BlockHeader-Mac.webp")} />
								<img src={require("./assets/images/BlockHeader-Mac.webp")} />
							</picture>
						</div>
						<div className={styles.BlockContent} dir={t("dir")}>
							<div className={styles.BlockContent} dir={t("dir")}>
								<div className={styles.Banner}>
									<div className={styles.BannerText}>
										<h2>{t("block.mac.title")}</h2>
										<p>{t("block.mac.desc")}</p>
										<Link onClick={handleScrollToUp} to="/mac" style={{ display: "inline-flex" }} title="مشاهده سایر مدل های مک">
											{t("block.mac.showMore")}{" "}
											{t("lang") == "en" ? <ion-icon name="chevron-forward-outline"></ion-icon> : <ion-icon name="chevron-back-outline"></ion-icon>}
										</Link>
									</div>
									<div className={styles.BannerImage}>
										<picture>
											<source srcSet={require("./assets/images/BlockContent-Mac.png.webp")} type="image/webp" />
											<img src={require("./assets/images/BlockContent-Mac.png.webp")} />
										</picture>
									</div>
								</div>

								<ul className={styles.ItemList}>
									<li>
										<Link onClick={handleScrollToUp} to="/mac/macbook-pro-16/" title={t("macBookPro16")}>
											<div className={styles.FeaturedSlide}>
												<div className={styles.FeaturedSlideWrp}>
													<picture>
														<source srcSet={require("./assets/images/BlockContent-MacBook-Pro16.png.webp")} type="image/webp" />
														<img src={require("./assets/images/BlockContent-MacBook-Pro16.png.webp")} />
													</picture>
													<div className={styles.FeaturedSlideText}>
														<strong>{t("macBookPro16")}</strong>
													</div>
												</div>
											</div>
										</Link>
									</li>
									<li>
										<Link onClick={handleScrollToUp} to="/mac/macbook-pro-14/" title={t("macBookPro14")}>
											<div className={styles.FeaturedSlide}>
												<div className={styles.FeaturedSlideWrp}>
													<picture>
														<source srcSet={require("./assets/images/BlockContent-MacBook-Pro14.png.webp")} type="image/webp" />
														<img src={require("./assets/images/BlockContent-MacBook-Pro14.png.webp")} />
													</picture>
													<div className={styles.FeaturedSlideText}>
														<strong>{t("macBookPro14")}</strong>
													</div>
												</div>
											</div>
										</Link>
									</li>
									<li>
										<Link onClick={handleScrollToUp} to="/mac/macbook-pro-13/" title={t("macBookPro13")}>
											<div className={styles.FeaturedSlide}>
												<div className={styles.FeaturedSldeWrp}>
													<picture>
														<source srcSet={require("./assets/images/BlockContent-MacBook13-N.png.webp")} type="image/webp" />
														<img src={require("./assets/images/BlockContent-MacBook13-N.png.webp")} />
													</picture>
													<div className={styles.FeaturedSlideText}>
														<strong>{t("macBookPro13")}</strong>
													</div>
												</div>
											</div>
										</Link>
									</li>
									<li>
										<Link onClick={handleScrollToUp} to="/mac/macbook-air/" title={t("macBookAir")}>
											<div className={styles.FeaturedSlide}>
												<div className={styles.FeaturedSlideWrp}>
													<picture>
														<source srcSet={require("./assets/images/BlockContent-MacBook-Air.png.webp")} type="image/webp" />
														<img src={require("./assets/images/BlockContent-MacBook-Air.png.webp")} />
													</picture>
													<div className={styles.FeaturedSlideText}>
														<strong>{t("macBookAir")}</strong>
													</div>
												</div>
											</div>
										</Link>
									</li>
									<li>
										<Link onClick={handleScrollToUp} to="/mac/imac-24/" title={t("iMac24")}>
											<div className={styles.FeaturedSlide}>
												<div className={styles.FeaturedSlideWrp}>
													<picture>
														<source srcSet={require("./assets/images/BlockContent-iMac-24.png.webp")} type="image/webp" />
														<img src={require("./assets/images/BlockContent-iMac-24.png.webp")} />
													</picture>
													<div className={styles.FeaturedSlideText}>
														<strong>{t("iMac24")}</strong>
													</div>
												</div>
											</div>
										</Link>
									</li>
									<li>
										<Link onClick={handleScrollToUp} to="/mac/mac-mini/" title={t("macMini")}>
											<div className={styles.FeaturedSlide}>
												<div className={styles.FeaturedSlideWrp}>
													<picture>
														<source srcSet={require("./assets/images/BlockContent-MacMini.png.webp")} type="image/webp" />
														<img src={require("./assets/images/BlockContent-MacMini.png.webp")} />
													</picture>
													<div className={styles.FeaturedSlideText}>
														<strong>{t("macMini")}</strong>
													</div>
												</div>
											</div>
										</Link>
									</li>
								</ul>
							</div>
						</div>
					</section>

					<section className={styles.Grid}>
						<div className={styles.GridList}>
							<div className={styles.GridItem} style={{ background: "#b37a73" }}>
								<div className={styles.GridImage}>
									<picture>
										<source srcSet={require("./assets/images/Grid-Mac-Accessory.jpg.webp")} type="image/webp" />
										<img src={require("./assets/images/Grid-Mac-Accessory.jpg.webp")} />
									</picture>
								</div>
								<div className={styles.GridText} style={{ color: "white" }}>
									<p>{t("block.mac.review")}</p>
									<Link to="/mac/accessories-mac/" title="خرید آنلاین لوازم جانبی مک">
										{t("buyOnline")}
									</Link>
								</div>
							</div>
							<div className={`${styles.GridItem} ${styles.Full}`} style={{ background: "#fdedde" }}>
								<div className={styles.GridImage}>
									<picture>
										<source srcSet={require("./assets/images/GridFull-Mac-Accessory.jpg.webp")} type="image/webp" />
										<img src={require("./assets/images/GridFull-Mac-Accessory.jpg.webp")} />
									</picture>
								</div>
							</div>
						</div>
					</section>

					<section className={`${styles.Block} ${styles.iPhone}`}>
						<div className={styles.BlockWrp}>
							<div className={styles.BlockHeader}>
								<picture>
									<source media="(max-width: 768px)" srcSet={require("./assets/images/BlockHeader-Mobile-iPhone.jpg.webp")} />
									<source media="(min-width: 769px)" srcSet={require("./assets/images/BlockHeader-iPhone.jpg.webp")} />
									<img src={require("./assets/images/BlockHeader-iPhone.jpg.webp")} />
								</picture>
							</div>
							<div className={styles.BlockContent} dir={t("dir")}>
								<div className={styles.Banner}>
									<div className={styles.BannerText}>
										<h2>{t("block.iPhone.title")}</h2>
										<p>{t("block.iPhone.desc")}</p>
										<Link to="/iphone/" style={{ display: "inline-flex" }} title={t("block.iPhone.showMore")}>
											{t("block.iPhone.showMore")}{" "}
											{t("lang") == "en" ? <ion-icon name="chevron-forward-outline"></ion-icon> : <ion-icon name="chevron-back-outline"></ion-icon>}
										</Link>
									</div>
									<div className={styles.BannerImage}>
										<picture>
											<source srcSet={require("./assets/images/BlockContent-iPhone.webp")} type="image/webp" />
											<img src={require("./assets/images/BlockContent-iPhone.webp")} />
										</picture>
									</div>
								</div>
								<ul className={styles.ItemList}>
									<li>
										<Link to="/iphone/iphone-13-pro-max/" title={t("block.iPhone.models.iPhone13ProMax")}>
											<div className={styles.FeaturedSlide}>
												<div className={styles.FeaturedSlideWrp}>
													<picture>
														<source srcSet={require("./assets/images/BlockContent-iPhone-13ProMax.webp")} type="image/webp" />
														<img src={require("./assets/images/BlockContent-iPhone-13ProMax.webp")} />
													</picture>
													<div className={styles.FeaturedSlideText}>
														<span>{t("new")}</span>
														<strong>{t("block.iPhone.models.iPhone13ProMax")}</strong>
													</div>
												</div>
											</div>
										</Link>
									</li>
									<li>
										<Link to="/iphone/iphone-13-pro/" title={t("block.iPhone.models.iPhone13Pro")}>
											<div className={styles.FeaturedSlide}>
												<div className={styles.FeaturedSlideWrp}>
													<picture>
														<source srcSet={require("./assets/images/BlockContent-iPhone-13Pro.webp")} type="image/webp" />
														<img src={require("./assets/images/BlockContent-iPhone-13Pro.webp")} />
													</picture>
													<div className={styles.FeaturedSlideText}>
														<span>{t("new")}</span>
														<strong>{t("block.iPhone.models.iPhone13Pro")}</strong>
													</div>
												</div>
											</div>
										</Link>
									</li>
									<li>
										<Link to="/iphone/iphone-13/" title={t("block.iPhone.models.iPhone13")}>
											<div className={styles.FeaturedSlide}>
												<div className={styles.FeaturedSlideWrp}>
													<picture>
														<source srcSet={require("./assets/images/BlockContent-iPhone-13.webp")} type="image/webp" />
														<img src={require("./assets/images/BlockContent-iPhone-13.webp")} />
													</picture>
													<div className={styles.FeaturedSlideText}>
														<span>{t("new")}</span>
														<strong>{t("block.iPhone.models.iPhone13ProMax")}</strong>
													</div>
												</div>
											</div>
										</Link>
									</li>
									<li>
										<Link to="/iphone/iphone-se/" title={t("block.iPhone.models.iPhoneSE")}>
											<div className={styles.FeaturedSlide}>
												<div className={styles.FeaturedSlideWrp}>
													<picture>
														<source srcSet={require("./assets/images/BlockContent-iPhone-SE.webp")} type="image/webp" />
														<img src={require("./assets/images/BlockContent-iPhone-SE.webp")} />
													</picture>
													<div className={styles.FeaturedSlideText}>
														<strong>{t("block.iPhone.models.iPhoneSE")}</strong>
													</div>
												</div>
											</div>
										</Link>
									</li>
									<li>
										<Link to="/iphone/iphone-12/" title={t("block.iPhone.models.iPhone12")}>
											<div className={styles.FeaturedSlide}>
												<div className={styles.FeaturedSlideWrp}>
													<picture>
														<source srcSet={require("./assets/images/BlockContent-iPhone-12.webp")} type="image/webp" />
														<img src={require("./assets/images/BlockContent-iPhone-12.webp")} />
													</picture>
													<div className={styles.FeaturedSlideText}>
														<strong>{t("block.iPhone.models.iPhone12")}</strong>
													</div>
												</div>
											</div>
										</Link>
									</li>
									<li>
										<Link to="/iphone/accessories-iphone/" title={t("block.iPhone.models.iPhoneAccessories")}>
											<div className={styles.FeaturedSlide}>
												<div className={styles.FeaturedSlideWrp}>
													<picture>
														<source srcSet={require("./assets/images/BlockContent-iPhone-Accessory.png.webp")} type="image/webp" />
														<img src={require("./assets/images/BlockContent-iPhone-Accessory.png.webp")} />
													</picture>
													<div className={styles.FeaturedSlideText}>
														<strong>{t("block.iPhone.models.iPhoneAccessories")}</strong>
													</div>
												</div>
											</div>
										</Link>
									</li>
								</ul>
							</div>
						</div>
					</section>

					<section className={styles.Grid}>
						<div className={styles.GridList}>
							<div className={`${styles.GridItem} ${styles.Full}`} style={{ background: "#eaf2fc" }}>
								<div className={styles.GridImage}>
									<picture>
										<source srcSet={require("./assets/images/GridFull-iPhone-Case.jpeg.webp")} type="image/webp" />
										<img src={require("./assets/images/GridFull-iPhone-Case.jpeg")} />
									</picture>
								</div>
							</div>
							<div className={styles.GridItem} style={{ background: "#7997aa" }}>
								<div className={styles.GridText} style={{ color: "white" }}>
									<p>{t("block.iPhone.review")}</p>
									<Link to="/iphone/accessories-iphone/cases-protection-iphone/" title="خرید آنلاین کیس آیفون">
										{t("buyOnline")}
									</Link>
								</div>
								<div className={styles.GridImage}>
									<picture>
										<source srcSet={require("./assets/images/Grid-iPhone-Case.jpeg.webp")} type="image/webp" />
										<img src={require("./assets/images/Grid-iPhone-Case.jpeg")} />
									</picture>
								</div>
							</div>
							<div className={styles.GridItem} style={{ background: "#8f8fad" }}>
								<div className={styles.GridImage}>
									<picture>
										<source srcSet={require("./assets/images/Grid-AirTag-Case.jpg.webp")} type="image/webp" />
										<img src={require("./assets/images/Grid-AirTag-Case.jpg.webp")} />
									</picture>
								</div>
								<div className={styles.GridText} style={{ color: "white" }}>
									<p>{t("block.airTag.review")}</p>
									<Link to="/accessories/airtag-accessories/" title=" خرید آنلاین کیس ایر تگ">
										{t("buyOnline")}
									</Link>
								</div>
							</div>
							<div className={`${styles.GridItem} ${styles.Full}`} style={{ background: "#eeeffe" }}>
								<div className={styles.GridImage}>
									<Link to="/accessories/airtag/" title="ایر تگ">
										<picture>
											<source srcSet={require("./assets/images/GridFull-AirTag-Case.jpg.webp")} type="image/webp" />
											<img src={require("./assets/images/GridFull-AirTag-Case.jpg.webp")} />
										</picture>
									</Link>
								</div>
							</div>
						</div>
					</section>

					<section className={`${styles.Block} ${styles.AirPods}`}>
						<div className={styles.BlockWrp}>
							<div className={styles.BlockHeader}>
								<Link to="/tv/" title="اپل تی وی">
									<picture>
										<source media="(max-width: 768px)" srcSet={require("./assets/images/BlockHeader-Mobile-AppleTV.webp")} />
										<source media="(min-width: 769px)" srcSet={require("./assets/images/BlockHeader-Apple-TV.jpg.webp")} />
										<img src={require("./assets/images/BlockHeader-Apple-TV.jpg.webp")} />
									</picture>
								</Link>
							</div>
							<div className={styles.BlockContent} dir={t("dir")}>
								<div className={styles.Banner}>
									<div className={styles.BannerText}>
										<h2>{t("block.airPods.title")}</h2>
										<p>{t("block.airPods.desc")}</p>
										<Link to="/iphone/airpods/" style={{ display: "inline-flex" }} title={t("block.airPods.showMore")}>
											{t("block.airPods.showMore")}{" "}
											{t("lang") == "en" ? <ion-icon name="chevron-forward-outline"></ion-icon> : <ion-icon name="chevron-back-outline"></ion-icon>}
										</Link>
									</div>
									<div className={styles.BannerImage}>
										<picture>
											<source srcSet={require("./assets/images/BlockContent-HomePod.png.webp")} type="image/webp" />
											<img src={require("./assets/images/BlockContent-HomePod.png.webp")} />
										</picture>
									</div>
								</div>
								<ul className={styles.ItemList}>
									<li>
										<Link to="/iphone/airpods/apple-airpods-pro-with-magsafe-charging-case/" title={t("block.airPods.models.airPodsPro")}>
											<div className={styles.FeaturedSlide}>
												<div className={styles.FeaturedSlideWrp}>
													<picture>
														<source srcSet={require("./assets/images/BlockContent-AirPods-Pro.png.webp")} type="image/webp" />
														<img src={require("./assets/images/BlockContent-AirPods-Pro.png.webp")} />
													</picture>
													<div className={styles.FeaturedSlideText}>
														<strong>{t("block.airPods.models.airPodsPro")}</strong>
													</div>
												</div>
											</div>
										</Link>
									</li>
									<li>
										<Link to="/iphone/airpods/apple-airpods-3rd-generation/" title={t("block.airPods.models.airPods3")}>
											<div className={styles.FeaturedSlide}>
												<div className={styles.FeaturedSlideWrp}>
													<picture>
														<source srcSet={require("./assets/images/BlockContent-AirPods-3.png.webp")} type="image/webp" />
														<img src={require("./assets/images/BlockContent-AirPods-3.png.webp")} />
													</picture>
													<div className={styles.FeaturedSlideText}>
														<span>{t("new")}</span>
														<strong>{t("block.airPods.models.airPods3")}</strong>
													</div>
												</div>
											</div>
										</Link>
									</li>
									<li>
										<Link to="/iphone/airpods/apple-airpods-2nd-generation/" title={t("block.airPods.models.airPods2")}>
											<div className={styles.FeaturedSlide}>
												<div className={styles.FeaturedSlideWrp}>
													<picture>
														<source srcSet={require("./assets/images/BlockContent-AirPods-2.png.webp")} type="image/webp" />
														<img src={require("./assets/images/BlockContent-AirPods-2.png.webp")} />
													</picture>
													<div className={styles.FeaturedSlideText}>
														<strong>{t("block.airPods.models.airPods2")}</strong>
													</div>
												</div>
											</div>
										</Link>
									</li>
									<li>
										<Link to="/iphone/airpods/apple-airpods-max/" title={t("block.airPods.models.airPodsMax")}>
											<div className={styles.FeaturedSlide}>
												<div className={styles.FeaturedSlideWrp}>
													<picture>
														<source srcSet={require("./assets/images/BlockContent-AirPods-Max.png.webp")} type="image/webp" />
														<img src={require("./assets/images/BlockContent-AirPods-Max.png.webp")} />
													</picture>
													<div className={styles.FeaturedSlideText}>
														<strong>{t("block.airPods.models.airPodsMax")}</strong>
													</div>
												</div>
											</div>
										</Link>
									</li>
									<li>
										<Link to="/accessories/headphones-speakers/apple-homepod-mini/" title={t("block.airPods.models.HomePodMini")}>
											<div className={styles.FeaturedSlide}>
												<div className={styles.FeaturedSlideWrp}>
													<picture>
														<source srcSet={require("./assets/images/BlockContent-HomePod-Mini.png.webp")} type="image/webp" />
														<img src={require("./assets/images/BlockContent-HomePod-Mini.png.webp")} />
													</picture>
													<div className={styles.FeaturedSlideText}>
														<strong>{t("block.airPods.models.HomePodMini")}</strong>
													</div>
												</div>
											</div>
										</Link>
									</li>
									<li>
										<Link to="/accessories/accessories-airpods/" title={t("block.airPods.models.airPodsAccessories")}>
											<div className={styles.FeaturedSlide}>
												<div className={styles.FeaturedSlideWrp}>
													<picture>
														<source srcSet={require("./assets/images/BlockContent-AirPods-Accessory.png.webp")} type="image/webp" />
														<img src={require("./assets/images/BlockContent-AirPods-Accessory.png.webp")} />
													</picture>
													<div className={styles.FeaturedSlideText}>
														<strong>{t("block.airPods.models.airPodsAccessories")}</strong>
													</div>
												</div>
											</div>
										</Link>
									</li>
								</ul>
							</div>
						</div>
					</section>

					<section className={`${styles.Block} ${styles.Watch}`}>
						<div className={styles.BlockWrp}>
							<div className={styles.BlockHeader}>
								<picture>
									<source media="(max-width: 768px)" srcSet={require("./assets/images/BlockHeader-Mobile-Watch.jpg.webp")} />
									<source media="(min-width: 769px)" srcSet={require("./assets/images/BlockHeader-Watch.jpg.webp")} />
									<img src={require("./assets/images/BlockHeader-Watch.jpg.webp")} />
								</picture>
							</div>
							<div className={styles.BlockContent} dir={t("dir")}>
								<div className={styles.Banner}>
									<div className={styles.BannerText}>
										<h2>{t("block.watch.title")}</h2>
										<p>{t("block.watch.desc")}</p>
										<Link to="/watch/" style={{ display: "inline-flex" }} title={t("block.watch.showMore")}>
											{t("block.watch.showMore")}{" "}
											{t("lang") == "en" ? <ion-icon name="chevron-forward-outline"></ion-icon> : <ion-icon name="chevron-back-outline"></ion-icon>}
										</Link>
									</div>
									<div className={styles.BannerImage}>
										<picture>
											<source srcSet={require("./assets/images/BlockContent-Watch.png.webp")} type="image/webp" />
											<img src={require("./assets/images/BlockContent-Watch.png.webp")} />
										</picture>
									</div>
								</div>
								<ul className={styles.ItemList}>
									<li>
										<Link to="/watch/apple-watch-series-7/" title={t("block.watch.models.watchSeries7")}>
											<div className={styles.FeaturedSlide}>
												<div className={styles.FeaturedSlideWrp}>
													<picture>
														<source srcSet={require("./assets/images/BlockContent-Watch-S7.png.webp")} type="image/webp" />
														<img src={require("./assets/images/BlockContent-Watch-S7.png.webp")} />
													</picture>
													<div className={styles.FeaturedSlideText}>
														<span>{t("new")}</span>
														<strong>{t("block.watch.models.watchSeries7")}</strong>
													</div>
												</div>
											</div>
										</Link>
									</li>
									<li>
										<Link to="/watch/apple-watch-se/" title={t("block.watch.models.watchSeriesSE")}>
											<div className={styles.FeaturedSlide}>
												<div className={styles.FeaturedSlideWrp}>
													<picture>
														<source srcSet={require("./assets/images/BlockContent-Watch-SE.png.webp")} type="image/webp" />
														<img src={require("./assets/images/BlockContent-Watch-SE.png.webp")} />
													</picture>
													<div className={styles.FeaturedSlideText}>
														<strong>{t("block.watch.models.watchSeriesSE")}</strong>
													</div>
												</div>
											</div>
										</Link>
									</li>
									<li>
										<Link to="/watch/apple-watch-series-3/" title={t("block.watch.models.watchSeries3")}>
											<div className={styles.FeaturedSlide}>
												<div className={styles.FeaturedSlideWrp}>
													<picture>
														<source srcSet={require("./assets/images/BlockContent-Watch-S3.png.webp")} type="image/webp" />
														<img src={require("./assets/images/BlockContent-Watch-S3.png.webp")} />
													</picture>
													<div className={styles.FeaturedSlideText}>
														<strong>{t("block.watch.models.watchSeries3")}</strong>
													</div>
												</div>
											</div>
										</Link>
									</li>
									<li>
										<Link to="/watch/apple-watch-nike/" title={t("block.watch.models.watchAccessories")}>
											<div className={styles.FeaturedSlide}>
												<div className={styles.FeaturedSlideWrp}>
													<picture>
														<source srcSet={require("./assets/images/BlockContent-Watch-Nike.png.webp")} type="image/webp" />
														<img src={require("./assets/images/BlockContent-Watch-Nike.png.webp")} />
													</picture>
													<div className={styles.FeaturedSlideText}>
														<strong>{t("block.watch.models.watchAccessories")}</strong>
													</div>
												</div>
											</div>
										</Link>
									</li>
									<li>
										<Link to="/watch/apple-watch-series-6/" title={t("block.watch.models.watchSeries6")}>
											<div className={styles.FeaturedSlide}>
												<div className={styles.FeaturedSlideWrp}>
													<picture>
														<source srcSet={require("./assets/images/BlockContent-Watch-S6.png.webp")} type="image/webp" />
														<img src={require("./assets/images/BlockContent-Watch-S6.png.webp")} />
													</picture>
													<div className={styles.FeaturedSlideText}>
														<strong>{t("block.watch.models.watchSeries6")}</strong>
													</div>
												</div>
											</div>
										</Link>
									</li>
									<li>
										<Link to="/watch/accessories-watch/" title={t("block.watch.models.watchAccessories")}>
											<div className={styles.FeaturedSlide}>
												<div className={styles.FeaturedSlideWrp}>
													<picture>
														<source srcSet={require("./assets/images/BlockContent-Watch-Accessory.png.webp")} type="image/webp" />
														<img src={require("./assets/images/BlockContent-Watch-Accessory.png.webp")} />
													</picture>
													<div className={styles.FeaturedSlideText}>
														<strong>{t("block.watch.models.watchAccessories")}</strong>
													</div>
												</div>
											</div>
										</Link>
									</li>
								</ul>
							</div>
						</div>
					</section>

					<section className={styles.Grid}>
						<div className={styles.GridList}>
							<div className={`${styles.GridItem} ${styles.Full}`} style={{ background: "#fbedf9" }}>
								<div className={styles.GridImage}>
									<picture>
										<source srcSet={require("./assets/images/GridFull-Watch-Band.jpg.webp")} type="image/webp" />
										<img src={require("./assets/images/GridFull-Watch-Band.jpg.webp")} />
									</picture>
								</div>
							</div>
							<div className={styles.GridItem} style={{ background: "#a8728e" }}>
								<div className={styles.GridText} style={{ color: "white" }}>
									<p>{t("block.watch.review")}</p>
									<Link to="/watch/accessories-watch/band-apple-watch/">{t("buyOnline")}</Link>
								</div>
								<div className={styles.GridImage}>
									<picture>
										<source srcSet={require("./assets/images/Grid-Watch-Band.jpg.webp")} type="image/webp" />
										<img src={require("./assets/images/Grid-Watch-Band.jpg.webp")} />
									</picture>
								</div>
							</div>
						</div>
					</section>

					<section className={`${styles.Block} ${styles.iPad}`}>
						<div className={styles.BlockWrp}>
							<div className={styles.BlockHeader}>
								<picture>
									<source media="(max-width: 768px)" srcSet={require("./assets/images/BlockHeader-Mobile-iPad.jpg.webp")} />
									<source media="(min-width: 769px)" srcSet={require("./assets/images/BlockHeader-iPad.jpg.webp")} />
									<img src={require("./assets/images/BlockHeader-iPad.jpg.webp")} />
								</picture>
							</div>
							<div className={styles.BlockContent} dir={t("dir")}>
								<div className={styles.Banner}>
									<div className={styles.BannerText}>
										<h2>{t("block.iPad.title")}</h2>
										<p>{t("block.iPad.desc")}</p>
										<Link to="/ipad/" style={{ display: "inline-flex" }} title={t("block.iPad.showMore")}>
											{t("block.iPad.showMore")}{" "}
											{t("lang") == "en" ? <ion-icon name="chevron-forward-outline"></ion-icon> : <ion-icon name="chevron-back-outline"></ion-icon>}
										</Link>
									</div>
									<div className={styles.BannerImage}>
										<picture>
											<source srcSet={require("./assets/images/BlockContent-iPad.png.webp")} type="image/webp" />
											<img src={require("./assets/images/BlockContent-iPad.png.webp")} />
										</picture>
									</div>
								</div>
								<ul className={styles.ItemList}>
									<li>
										<Link to="/ipad/ipad-pro/" title={t("block.iPad.models.iPadPro")}>
											<div className={styles.FeaturedSlide}>
												<div className={styles.FeaturedSlideWrp}>
													<picture>
														<source srcSet={require("./assets/images/BlockContent-iPad-Pro.png.webp")} type="image/webp" />
														<img src={require("./assets/images/BlockContent-iPad-Pro.png.webp")} />
													</picture>
													<div className={styles.FeaturedSlideText}>
														<strong>{t("block.iPad.models.iPadPro")}</strong>
													</div>
												</div>
											</div>
										</Link>
									</li>
									<li>
										<Link to="/ipad/ipad-air/" title={t("block.iPad.models.iPadAir")}>
											<div className={styles.FeaturedSlide}>
												<div className={styles.FeaturedSlideWrp}>
													<picture>
														<source srcSet={require("./assets/images/BlockContent-iPad-Air.png.webp")} type="image/webp" />
														<img src={require("./assets/images/BlockContent-iPad-Air.png.webp")} />
													</picture>
													<div className={styles.FeaturedSlideText}>
														<strong>{t("block.iPad.models.iPadAir")}</strong>
													</div>
												</div>
											</div>
										</Link>
									</li>
									<li>
										<Link to="/ipad/ipad-mini/" title={t("block.iPad.models.iPadMini")}>
											<div className={styles.FeaturedSlide}>
												<div className={styles.FeaturedSlideWrp}>
													<picture>
														<source srcSet={require("./assets/images/BlockContent-iPad-Mini.png.webp")} type="image/webp" />
														<img src={require("./assets/images/BlockContent-iPad-Mini.png.webp")} />
													</picture>
													<div className={styles.FeaturedSlideText}>
														<strong>{t("block.iPad.models.iPadMini")}</strong>
													</div>
												</div>
											</div>
										</Link>
									</li>
									<li>
										<Link to="/ipad/apple-pencil/" title={t("block.iPad.models.ApplePencil")}>
											<div className={styles.FeaturedSlide}>
												<div className={styles.FeaturedSlideWrp}>
													<picture>
														<source srcSet={require("./assets/images/BlockContent-Apple-Pencil.png.webp")} type="image/webp" />
														<img src={require("./assets/images/BlockContent-Apple-Pencil.png.webp")} />
													</picture>
													<div className={styles.FeaturedSlideText}>
														<strong>{t("block.iPad.models.ApplePencil")}</strong>
													</div>
												</div>
											</div>
										</Link>
									</li>
									<li>
										<Link to="/ipad/keyboard/" title={t("block.iPad.models.SmartKeyboard")}>
											<div className={styles.FeaturedSlide}>
												<div className={styles.FeaturedSlideWrp}>
													<picture>
														<source srcSet={require("./assets/images/BlockContent-Smart-KeyBoard.png.webp")} type="image/webp" />
														<img src={require("./assets/images/BlockContent-Smart-KeyBoard.png.webp")} />
													</picture>
													<div className={styles.FeaturedSlideText}>
														<strong>{t("block.iPad.models.SmartKeyboard")}</strong>
													</div>
												</div>
											</div>
										</Link>
									</li>
									<li>
										<Link to="/ipad/accessories-ipad/" title={t("block.iPad.models.iPadAccessories")}>
											<div className={styles.FeaturedSlide}>
												<div className={styles.FeaturedSlideWrp}>
													<picture>
														<source srcSet={require("./assets/images/BlockContent-iPad-Accessory.png.webp")} type="image/webp" />
														<img src={require("./assets/images/BlockContent-iPad-Accessory.png.webp")} />
													</picture>
													<div className={styles.FeaturedSlideText}>
														<strong>{t("block.iPad.models.iPadAccessories")}</strong>
													</div>
												</div>
											</div>
										</Link>
									</li>
								</ul>
							</div>
						</div>
					</section>

					<section className={styles.Grid}>
						<div className={styles.GridList}>
							<div className={`${styles.GridItem} ${styles.Full}`} style={{ background: "#edeffe" }}>
								<div className={styles.GridImage}>
									<picture>
										<source srcSet={require("./assets/images/GridFull-Smart-KeyBoard.jpg.webp")} type="image/webp" />
										<img src={require("./assets/images/GridFull-Smart-KeyBoard.jpg.webp")} />
									</picture>
								</div>
							</div>
							<div className={styles.GridItem} style={{ background: "#8c90b3" }}>
								<div className={styles.GridImage}>
									<picture>
										<source srcSet={require("./assets/images/Grid-Smart-KeyBoard3.jpg.webp")} type="image/webp" />
										<img src={require("./assets/images/Grid-Smart-KeyBoard3.jpg.webp")} />
									</picture>
								</div>
								<div className={styles.GridText} style={{ color: "white" }}>
									<p>{t("block.iPad.review")}</p>
									<Link to="/ipad/keyboard/">{t("buyOnline")}</Link>
								</div>
							</div>
						</div>
					</section>

					{/* End Block */}
				</main>
			</div>
		</div>
	);
};

export default App;
