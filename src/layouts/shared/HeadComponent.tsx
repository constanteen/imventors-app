import { ReactElement } from 'react';
import Head from 'next/head';

export default function HeadComponent(): ReactElement {
	return (
		<Head>
			<link
				href="https://unpkg.com/boxicons@2.1.1/css/boxicons.min.css"
				rel="stylesheet"
			/>
		</Head>
	);
}
