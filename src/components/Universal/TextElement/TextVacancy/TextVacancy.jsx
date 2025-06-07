const TextVacancy = ({ el, styles }) => {
	return (
		<>
			{el.headingBig && <h1>{el.headingBig}</h1>}
			{el.heading && <h3 className={styles["text__heading"]}>{el.heading}</h3>}
			{el.text &&
				el.text.split("\n").map((smth, id) => (smth ? <p key={id}>{smth}</p> : <br key={id} />))}
		</>
	);
};

export default TextVacancy;
