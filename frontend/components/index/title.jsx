export const Title = ({ styles, indexMedia }) => {
	return (
		<section
			className={`${styles['sectionTitle']} ${indexMedia['sectionTitle']}`}
		>
			<div
				className={`${styles['wrapperTitle']} ${indexMedia['wrapperTitle']}`}
			>
				<div
					className={`${styles['wrapperContentTitle']} ${indexMedia['wrapperContentTitle']}`}
				>
					<div className={`${styles['pTitle']} ${indexMedia['pTitle']}`}>
						<p>
							Группа строительных компаний “Волжский Домостроительный комбинат”
							на сегодняшний день имеет большой опыт строительства многоэтажных
							жилых домов и офисных помещений. Наша компания применяет при
							строительстве современные материалы, технологии, а также
							использует железобетонные изделия собственного производства. В
							результате вы получаете качественное жильё за низкую стоимость
						</p>
					</div>
					<div className={`${indexMedia['logoTitle']}`}>
						<img src='/index/title/logo.png' />
					</div>
				</div>
			</div>
		</section>
	);
};
