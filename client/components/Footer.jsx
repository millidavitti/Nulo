import Link from "next/link";
import { Twitter, Youtube } from "../assets/SVG.config";
import Container from "./Layout/Container";
import Margin from "./Layout/Margin";
import ResponsiveGrid from "./Layout/ResponsiveGrid";
import Nulo from "./Nulo";
export default function Footer() {
	return (
		<footer>
			<Container>
				<div className='footer-header'>
					<Nulo size={50} />
					<div className='footer-socials'>
						<Twitter size={30} />
						<Youtube size={30} />
					</div>
				</div>
				<Margin>
					<ResponsiveGrid min={150}>
						<div className='footer-columns'>
							<h2>Getting started</h2>
							<div className='footer-items'>
								<Link href=''>
									<a>Installation</a>
								</Link>
								<Link href=''>
									<a>Release Notes</a>
								</Link>
								<Link href=''>
									<a>Upgrade Guide</a>
								</Link>
								<Link href=''>
									<a>Browser Support</a>
								</Link>
								<Link href=''>
									<a>Editor Support</a>
								</Link>
							</div>
						</div>
						<div className='footer-columns'>
							<h2>Explore</h2>
							<div className='footer-items'>
								<Link href=''>
									<a>Design feeatures</a>
								</Link>
								<Link href=''>
									<a>Prototyping</a>
								</Link>
								<Link href=''>
									<a>Design systems</a>
								</Link>
								<Link href=''>
									<a>Pricing</a>
								</Link>
								<Link href=''>
									<a>Security</a>
								</Link>
							</div>
						</div>
						<div className='footer-columns'>
							<h2>Resources</h2>
							<div className='footer-items'>
								<Link href=''>
									<a>Design feeatures</a>
								</Link>
								<Link href=''>
									<a>Prototyping</a>
								</Link>
								<Link href=''>
									<a>Design systems</a>
								</Link>
								<Link href=''>
									<a>Pricing</a>
								</Link>
								<Link href=''>
									<a>Security</a>
								</Link>
							</div>
						</div>
						<div className='footer-columns'>
							<h2>Getting started</h2>
							<div className='footer-items'>
								<Link href=''>
									<a>Community</a>
								</Link>
								<Link href=''>
									<a>Prototyping</a>
								</Link>
								<Link href=''>
									<a>Design systems</a>
								</Link>
								<Link href=''>
									<a>Pricing</a>
								</Link>
								<Link href=''>
									<a>Security</a>
								</Link>
							</div>
						</div>
					</ResponsiveGrid>
				</Margin>
			</Container>
		</footer>
	);
}
