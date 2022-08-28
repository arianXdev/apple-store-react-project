import { useState, useEffect } from "react";
import { doc, getDoc, onSnapshot, collection } from "firebase/firestore";
import db from "../../services/firebase";

import { useParams } from "react-router-dom";
import styles from "./ProductDetails.module.css";

const ProductDetails = () => {
	const params = useParams();
	const [productInfo, setProductInfo] = useState([]);

	const docRef = doc(db, params.macId, params.macProductId);

	useEffect(
		() =>
			onSnapshot(collection(db, params.macId), (snapshot) => {
				snapshot.docs.filter((doc) => (doc.id == params.macProductId ? doc : false)).map((item) => setProductInfo(item.data()));
			}),
		[]
	);

	return (
		<div>
			<h1>{productInfo.PersianName}</h1>
		</div>
	);
};

export default ProductDetails;
