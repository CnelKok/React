import PdfLink from "../../PDFLink";

const TextContacts = ({ el, styles }) => {
	return (
		<>
			{el.headingBig && <h1 className={styles["text__heading--big"]}>{el.headingBig}</h1>}
			{el.text &&
				el.text.split("\n").map((smth, id) => (smth ? <p key={id}>{smth}</p> : <br key={id} />))}
			{el.pdfLink && (
				<PdfLink
					url={el.pdfLink}
					title={`${el.pdfText} | ОИК`}
					className={styles["text__element-link"]}
				>
					{el.pdfText}
				</PdfLink>
			)}
		</>
	);
};

export default TextContacts;
