import LazyLoadImage from "../../LazyLoadImage";
const TextNews = ({ el, styles }) => {
	return (
		<>
			{el.date && (
				<time className={styles["text__date"]} dateTime={el.date}>
					{el.date}
				</time>
			)}
			{el.headingBig && <h1 className={styles["text__heading--big"]}>{el.headingBig}</h1>}
			{el.text &&
				el.text.split("\n").map((smth, id) => (smth ? <p key={id}>{smth}</p> : <br key={id} />))}
			{el.imgBig && (
				<div className={styles["text__news-image"]}>
					<LazyLoadImage
						highSrc={el.imgBig}
						lowSrc={el.imgPlaceholder}
						width={el.width}
						height={el.height}
						mediumSrc={el.imgMedium}
						smallSrc={el.imgSmall}
						alt={el.alt}
					/>
				</div>
			)}
		</>
	);
};

export default TextNews;
