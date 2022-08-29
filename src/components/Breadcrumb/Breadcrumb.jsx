import Breadcrumbs from "@mui/material/Breadcrumbs";

import { useLocation, useParams, Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faApple } from "@fortawesome/free-brands-svg-icons";

function handleClick(event) {
	event.preventDefault();
}

export default function IconBreadcrumbs() {
	// eslint-disable-next-line
	const [t, i18n] = useTranslation();
	const location = useLocation();
	const params = useParams();

	return (
		<div role="presentation" onClick={handleClick}>
			<Breadcrumbs aria-label="breadcrumb" style={t("lang") !== "en" ? { display: "none" } : null}>
				<Link to="/" style={{ display: "flex", alignItems: "center" }}>
					<FontAwesomeIcon icon={faApple} size="lg" style={{ marginRight: 7 }} />
				</Link>
				{location.pathname !== "/" ? <Link to={location.pathname}>{!params.macId ? <>{location.pathname.replace("/", " ")}</> : null}</Link> : false}
			</Breadcrumbs>
		</div>
	);
}
