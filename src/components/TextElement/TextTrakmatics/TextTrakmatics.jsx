import PdfLink from "../../PDFLink";

const TextTrakmatics = ({ el, styles }) => {
	return (
		<>
			{el.headingBig && <h1 className={styles["text__heading--big"]}>{el.headingBig}</h1>}
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

export default TextTrakmatics;
