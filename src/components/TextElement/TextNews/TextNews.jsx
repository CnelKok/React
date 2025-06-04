import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

const TextNews = ({ el, styles }) => {
	return (
		<>
			{el.date && (
				<time className={styles["text__date"]} dateTime={el.date}>
					{el.date}
				</time>
			)}
			{el.heading && <h3 className={styles["text__heading"]}>{el.heading}</h3>}
			{el.text &&
				el.text.split("\n").map((smth, id) => (smth ? <p key={id}>{smth}</p> : <br key={id} />))}
			{el.imgBig && (
				<div className={styles["text__news-image"]}>
					<LazyLoadImage src={el.imgBig} effect="blur" placeholderSrc={el.imgSmall} />
				</div>
			)}
		</>
	);
};

export default TextNews;
