const Map = () => {
	return (
		<iframe
			src="https://yandex.ru/map-widget/v1/?lang=ru_RU&amp;scroll=true&amp;source=constructor-api&amp;um=constructor%3Ae6654a5470774adb8df65f9ba6729011e4d4aa6cf4f2cfb7923c132b0a22be39"
			allowFullScreen={true}
			width="100%"
			height="710px"
			style={{ display: "block", border: 0 }}
		></iframe>
	);
};

export default Map;
