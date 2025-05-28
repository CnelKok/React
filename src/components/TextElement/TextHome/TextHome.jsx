const TextHome = ({ el, styles }) => {
	return (
		<>
			{el.heading && <h3 className={styles["text__heading"]}>{el.heading}</h3>}
			{el.text.split("\n").map((smth, id) => (smth ? <p key={id}>{smth}</p> : <br key={id} />))}
			{el.pdfLink && (
				<a href={el.pdfLink} target="_blank" className={styles["text__element-link"]}>
					{el.pdfText}
				</a>
			)}
		</>
	);
};

export default TextHome;
