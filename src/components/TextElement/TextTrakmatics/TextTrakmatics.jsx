const TextTrakmatics = ({ el, styles }) => {
	return (
		<>
			{el.headingBig && <h1 className={styles["text__heading--big"]}>{el.headingBig}</h1>}
			{el.pdfLink && (
				<a href={el.pdfLink} target="_blank" className={styles["text__element-link"]}>
					{el.pdfText}
				</a>
			)}
		</>
	);
};

export default TextTrakmatics;
