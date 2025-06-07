import PdfLink from "../../PDFLink";

const TextHome = ({ el, styles }) => {
	return (
		<>
			{el.heading && <h3 className={styles["text__heading"]}>{el.heading}</h3>}
			{el.text.split("\n").map((smth, id) => (smth ? <p key={id}>{smth}</p> : <br key={id} />))}

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

export default TextHome;
