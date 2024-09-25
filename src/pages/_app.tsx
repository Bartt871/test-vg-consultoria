import type { AppProps } from 'next/app';
import Head from 'next/head';

import '@/styles/globals.css';
import { ToastMessageProvider } from '@/contexts/ToastMessageProvider';

export default function App({ Component, pageProps }: AppProps) {
	return (
		<>
			<Head>
				<title>Teste Front-End - BNP</title>
			</Head>

			<ToastMessageProvider>
				<Component {...pageProps} />
			</ToastMessageProvider>
		</>
	);
}

