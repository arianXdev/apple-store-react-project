import { useState } from "react";

import SpeedDial from "@mui/material/SpeedDial";
import SpeedDialAction from "@mui/material/SpeedDialAction";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLanguage } from "@fortawesome/free-solid-svg-icons";

import { useTranslation } from "react-i18next";

import EnglishIcon from "../../assets/images/english-icon.png";
import PersianIcon from "../../assets/images/persian-flag.png";

import "./FAB.css";

export default function FAB() {
	// eslint-disable-next-line
	const { t, i18n } = useTranslation();

	const [open, setOpen] = useState(false);
	const handleOpen = () => setOpen(true);
	const handleClose = () => setOpen(false);

	// Change Language Event Handler
	const changeLanguage = (language) => {
		i18n.changeLanguage(language);
		// Stores language name in local storage to use in next session
		localStorage.setItem("Language", language);
	};

	const actions = [
		{ icon: <img src={EnglishIcon} alt="english-icon" width="40" />, name: "English", language: "en" },
		{ icon: <img src={PersianIcon} alt="persian-icon" />, name: "Persian", language: "fa" },
	];

	return (
		<SpeedDial
			className="FAB"
			ariaLabel="Change Language Button"
			sx={{ bottom: 30, right: 30 }}
			icon={<FontAwesomeIcon icon={faLanguage} />}
			onClose={handleClose}
			onOpen={handleOpen}
			open={open}
		>
			{actions.map((action) => (
				<SpeedDialAction key={action.name} icon={action.icon} tooltipTitle={action.name} onClick={() => changeLanguage(action.language)} />
			))}
		</SpeedDial>
	);
}
