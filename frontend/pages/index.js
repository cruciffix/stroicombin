import localFont from 'next/font/local';

import headerStyles from '@/styles/Header.module.css';
import headerMedia from '@/styles/HeaderMedia.module.css';

import indexStyles from '@/styles/Index.module.css';
import titleMedia from '@/styles/TitleMedia.module.css';

import { Header } from '@/components/header';
import { Title } from '@/components/index/title';
import { VDK } from '@/components/index/vdk';

const geistSans = localFont({
	src: './fonts/GeistVF.woff',
	variable: '--font-geist-sans',
	weight: '100 900',
});
const geistMono = localFont({
	src: './fonts/GeistMonoVF.woff',
	variable: '--font-geist-mono',
	weight: '100 900',
});

export default function Home() {
	return (
		<>
			<Header styles={headerStyles} headerMedia={headerMedia} />

			<Title styles={indexStyles} mediaStyles={titleMedia} />
			<VDK styles={indexStyles}/>
		</>
	);
}
