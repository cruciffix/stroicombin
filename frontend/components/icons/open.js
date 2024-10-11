export const Open = ({ styles, headerMedia }) => {
	return (
		<svg
			className={`${styles['headerClose']} ${headerMedia['headerOpen']}`}
			id={'headerOpen'}
			width='40'
			height='40'
			viewBox='0 0 40 40'
			fill='none'
		>
			<rect width='40' height='7' rx='3.5' fill='white' />
			<rect y='33' width='40' height='7' rx='3.5' fill='white' />
			<rect y='17' width='40' height='7' rx='3.5' fill='white' />
		</svg>
	);
};
