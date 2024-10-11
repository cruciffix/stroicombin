import React from 'react';
import { Open } from './icons/open';
import { Close } from './icons/close';

export const Header = ({ styles, headerMedia }) => {
	const [flag, setFlag] = React.useState(false);
	React.useEffect(() => {
		let open = document.getElementById('headerOpen');
		let close = document.getElementById('headerClose');
		let headerContainer = document.getElementById('headerContainer');
		open.addEventListener('click', () => {
			headerContainer.style.left = 0;
		});

		close.addEventListener('click', () => {
			headerContainer.style.left = -1000 + 'px';
		});
	}, []);

	return (
		<>
			<Open styles={styles} headerMedia={headerMedia} />

			<div
				id='headerContainer'
				className={`${headerMedia['headerContainer']} ${headerMedia['abroad']}`}
			>
				<header className={`${styles['header']} ${headerMedia['header']}`}>
					<div
						className={`${styles['headerCloseOpen']} ${headerMedia['headerCloseOpen']}`}
					></div>
					<Close styles={styles} headerMedia={headerMedia} />
					<div className='margin'>
						<div
							className={`${styles['headerWrapperMenu']} ${headerMedia['headerWrapperMenu']}`}
						>
							<div
								className={`${styles['headerLogo']} ${headerMedia['headerLogo']}`}
							>
								<img src='/logo.png' />
							</div>

							<div
								className={`${styles['headerMenu']} ${headerMedia['headerMenu']}`}
							>
								{['Главная', 'Ипотечный программы', 'Объекты', 'О нас'].map(
									(item, index) => {
										return (
											<span key={item + '_' + index}>
												<a href='#'>{item}</a>
											</span>
										);
									}
								)}
							</div>

							<div
								className={`${styles['consultBtn']} ${headerMedia['consultBtn']}`}
							>
								<a>КОНСУЛЬТАЦИЯ</a>
							</div>
						</div>
						{/* Menu */}
					</div>
				</header>

				<div
					className={`${styles['headerWrapperIcon']} ${headerMedia['headerWrapperIcon']}`}
				>
					{['vk', 'inst', 'tg'].map((item, index) => {
						return (
							<a key={item + '_' + index} href='#'>
								<img src={`/icons/${item}.svg`} />
							</a>
						);
					})}
				</div>
				{/* Messengers */}
			</div>
		</>
	);
};
