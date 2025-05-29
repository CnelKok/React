const TextContacts = ({ el, styles }) => {
	return (
		<>
			{el.headingBig && <h1 className={styles["text__heading--big"]}>{el.headingBig}</h1>}
			{el.text &&
				el.text.split("\n").map((smth, id) => (smth ? <p key={id}>{smth}</p> : <br key={id} />))}
			{el.pdfLink && (
				<a href={el.pdfLink} target="_blank" className={styles["text__element-link"]}>
					{el.pdfText}
				</a>
			)}
		</>
	);
};

export default TextContacts;
