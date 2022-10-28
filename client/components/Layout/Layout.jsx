import Head from "next/head";
import Footer from "../Footer";

import MobileHeader from "../Navigation/MobileHeader";

export default function Layout({ children }) {
	return (
		<>
			<Head>
				<link rel='shortcut icon' href='logo.svg' type='image/svg'></link>
			</Head>
			{/* Header */}
			<MobileHeader />
			<main>{children}</main>
			{/* Footer */}
			<Footer />
		</>
	);
}
