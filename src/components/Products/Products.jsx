import { useState, useEffect } from "react";
import { onSnapshot, collection } from "firebase/firestore";
import db from "../../services/firebase";

import { useParams, Outlet, Link } from "react-router-dom";

import Product from "./Product";

import styles from "./Products.module.css";

const Products = ({ productName, bg }) => {
	const params = useParams();

	// Macs
	const [macBookAir, setMacBookAir] = useState([]);
	const [macBookPro13, setMacBookPro13] = useState([]);
	const [macBookPro14, setMacBookPro14] = useState([]);
	const [macBookPro16, setMacBookPro16] = useState([]);
	const [macMini, setMacMini] = useState([]);
	const [macStudio, setMacStudio] = useState([]);
	const [proDisplayXDR, setProDisplayXDR] = useState([]);

	useEffect(
		() =>
			onSnapshot(collection(db, "macbook-pro-13"), (snapshot) => {
				setMacBookPro13(snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() })));
			}),
		[]
	);

	useEffect(
		() =>
			onSnapshot(collection(db, "macbook-pro-14"), (snapshot) => {
				setMacBookPro14(snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() })));
			}),
		[]
	);

	useEffect(
		() =>
			onSnapshot(collection(db, "macbook-pro-16"), (snapshot) => {
				setMacBookPro16(snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() })));
			}),
		[]
	);

	useEffect(
		() =>
			onSnapshot(collection(db, "macbook-air"), (snapshot) => {
				setMacBookAir(snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() })));
			}),
		[]
	);

	useEffect(
		() =>
			onSnapshot(collection(db, "mac-mini"), (snapshot) => {
				setMacMini(snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() })));
			}),
		[]
	);

	useEffect(
		() =>
			onSnapshot(collection(db, "mac-studio"), (snapshot) => {
				setMacStudio(snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() })));
			}),
		[]
	);

	useEffect(
		() =>
			onSnapshot(collection(db, "pro-display-xdr"), (snapshot) => {
				setProDisplayXDR(snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() })));
			}),
		[]
	);

	const getProducts = () => {
		if (productName === "mac") {
			if (params.macId === "mac-studio") {
				return (
					<div className={styles.products}>
						{macStudio.map(({ id, EnglishName, PersianName, dollarPrice, rialPrice, image }, index) => (
							<Product id={id} key={index} name={[EnglishName, PersianName]} dollarPrice={dollarPrice} rialPrice={rialPrice} pathName={params.macId} />
						))}
					</div>
				);
			} else if (params.macId === "mac-mini") {
				return (
					<div className={styles.products}>
						{macMini.map(({ id, EnglishName, PersianName, dollarPrice, rialPrice, image }, index) => (
							<Product id={id} key={index} name={[EnglishName, PersianName]} dollarPrice={dollarPrice} rialPrice={rialPrice} pathName={params.macId} image={image} />
						))}
					</div>
				);
			} else if (params.macId === "macbook-pro-13") {
				return (
					<div className={styles.products}>
						{macBookPro13.map(({ id, EnglishName, PersianName, dollarPrice, rialPrice, image }, index) => (
							<Product id={id} key={index} name={[EnglishName, PersianName]} dollarPrice={dollarPrice} rialPrice={rialPrice} pathName={params.macId} image={image} />
						))}
					</div>
				);
			} else if (params.macId === "macbook-pro-14") {
				return (
					<div className={styles.products}>
						{macBookPro14.map(({ id, EnglishName, PersianName, dollarPrice, rialPrice, image }, index) => (
							<Product id={id} key={index} name={[EnglishName, PersianName]} dollarPrice={dollarPrice} rialPrice={rialPrice} pathName={params.macId} image={image} />
						))}
					</div>
				);
			} else if (params.macId === "macbook-pro-16") {
				return (
					<div className={styles.products}>
						{macBookPro16.map(({ id, EnglishName, PersianName, dollarPrice, rialPrice, image }, index) => (
							<Product id={id} key={index} name={[EnglishName, PersianName]} dollarPrice={dollarPrice} rialPrice={rialPrice} pathName={params.macId} image={image} />
						))}
					</div>
				);
			} else if (params.macId === "pro-display-xdr") {
				return (
					<div className={styles.products}>
						{proDisplayXDR.map(({ id, EnglishName, PersianName, dollarPrice, rialPrice, image }, index) => (
							<Product id={id} key={index} name={[EnglishName, PersianName]} dollarPrice={dollarPrice} rialPrice={rialPrice} pathName={params.macId} image={image} />
						))}
					</div>
				);
			} else if (params.macId === "macbook-air") {
				return (
					<div className={styles.products}>
						{macBookAir.map(({ id, EnglishName, PersianName, dollarPrice, rialPrice, image }, index) => (
							<Product id={id} key={index} name={[EnglishName, PersianName]} dollarPrice={dollarPrice} rialPrice={rialPrice} pathName={params.macId} image={image} />
						))}
					</div>
				);
			} else if (!params.macId) {
				return (
					<div className={styles.products}>
						{macStudio.map(({ id, EnglishName, PersianName, dollarPrice, rialPrice, image }, index) => (
							<Product
								id={id}
								key={index}
								name={[EnglishName, PersianName]}
								dollarPrice={dollarPrice}
								rialPrice={rialPrice}
								pathName={params.macId}
								image={image}
								mainPage={true}
							/>
						))}
					</div>
				);
			}
		}
	};

	return (
		<>
			{!params.macProductId ? (
				<section className={styles.ProductsBody} bg={bg}>
					{<div className="container-lg">{getProducts()}</div>}
				</section>
			) : (
				<Outlet />
			)}
		</>
	);
};

export default Products;
