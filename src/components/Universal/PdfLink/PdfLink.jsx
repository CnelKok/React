const PdfLink = ({ url, title, children, className = "" }) => {
	const href = `/React/pdf.html?url=${encodeURIComponent(url)}&title=${encodeURIComponent(title)}`;
	return (
		<a href={href} target="_blank" rel="noopener noreferrer" className={className}>
			{children || title}
		</a>
	);
};

export default PdfLink;
