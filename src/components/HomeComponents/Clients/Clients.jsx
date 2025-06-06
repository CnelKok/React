import { useState, lazy, Suspense } from "react";
import styles from "./clients.module.css";
import data from "./data";
import FallBack from "../../../pages/FallBack";

const PopUp = lazy(() => import("../../PopUp"));
const CardPopUp = lazy(() => import("../../CardPopUp"));
const Card = lazy(() => import("../Card"));

const Clients = () => {
	const [active, setActive] = useState(false);
	const [index, setIndex] = useState(0);

	const openPopUp = (idx) => {
		setIndex(idx);
		setActive(true);
	};
	return (
		<>
			<PopUp active={active} setActive={setActive}>
				<Suspense fallback={<FallBack className={styles["clients__fallback"]} />}>
					<CardPopUp key={index} {...data[index]} />
				</Suspense>
			</PopUp>

			<div className={styles.clients}>
				{data.map((item, i) => (
					<Card onClick={() => openPopUp(i)} key={i} {...item}></Card>
				))}
			</div>
		</>
	);
};

export default Clients;
