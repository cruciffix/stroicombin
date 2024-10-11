export const Title = ({ styles, mediaStyles }) => {
	return (
		<section
			className={`${styles['sectionTitle']} ${mediaStyles['sectionTitle']}`}
		>
			<div
				className={`${styles['wrapperTitle']} ${mediaStyles['wrapperTitle']}`}
			>
				<div
					className={`${styles['wrapperContentTitle']} ${mediaStyles['wrapperContentTitle']}`}
				>
					<div className={`${styles['pTitle']} ${mediaStyles['pTitle']}`}>
						<p>
							Группа строительных компаний “Волжский Домостроительный комбинат”
							на сегодняшний день имеет большой опыт строительства многоэтажных
							жилых домов и офисных помещений. Наша компания применяет при
							строительстве современные материалы, технологии, а также
							использует железобетонные изделия собственного производства. В
							результате вы получаете качественное жильё за низкую стоимость
						</p>
					</div>
					<div className={`${mediaStyles['logoTitle']}`}>
						<img src='/index/title/logo.png' />
					</div>
				</div>
			</div>
		</section>
	);
};
