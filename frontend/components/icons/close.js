export const Close = ({styles, headerMedia }) => {
	return (
		<svg
			className={`${styles["headerClose"]} ${headerMedia['headerClose']}`}
			id={'headerClose'}
			width='40'
			height='40'
			viewBox='0 0 40 40'
			fill='none'
		>
			<rect
				x='0.189453'
				y='35.0957'
				width='49.6316'
				height='6'
				rx='3'
				transform='rotate(-45 0.189453 35.0957)'
				fill='white'
			/>
			<rect
				x='4.24219'
				width='49.6316'
				height='6'
				rx='3'
				transform='rotate(45 4.24219 0)'
				fill='white'
			/>
		</svg>
	);
};
