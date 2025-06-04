const TextPortfolio = ({ el, styles }) => {
	return (
		<>
			{el.headingBig && <h1 className={styles["text__heading--big"]}>{el.headingBig}</h1>}
			{el.heading && <h3 className={styles["text__heading"]}>{el.heading}</h3>}
			{el.text &&
				el.text.split("\n").map((smth, id) => (smth ? <p key={id}>{smth}</p> : <br key={id} />))}
			{el.table && (
				<table className={styles["text__table"]}>
					<tbody>
						{el.table.map((tr, idx) => (
							<tr key={idx}>
								{tr.map((td, i) => (
									<td key={i}>
										{td.split("\n").map((par, index) => (
											<p key={index}>{par}</p>
										))}
									</td>
								))}
							</tr>
						))}
					</tbody>
				</table>
			)}
		</>
	);
};

export default TextPortfolio;
