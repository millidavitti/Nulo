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
									Installation
								</Link>
								<Link href=''>
									Release Notes
								</Link>
								<Link href=''>
									Upgrade Guide
								</Link>
								<Link href=''>
									Browser Support
								</Link>
								<Link href=''>
									Editor Support
								</Link>
							</div>
						</div>
						<div className='footer-columns'>
							<h2>Explore</h2>
							<div className='footer-items'>
								<Link href=''>
									Design feeatures
								</Link>
								<Link href=''>
									Prototyping
								</Link>
								<Link href=''>
									Design systems
								</Link>
								<Link href=''>
									Pricing
								</Link>
								<Link href=''>
									Security
								</Link>
							</div>
						</div>
						<div className='footer-columns'>
							<h2>Resources</h2>
							<div className='footer-items'>
								<Link href=''>
									Design feeatures
								</Link>
								<Link href=''>
									Prototyping
								</Link>
								<Link href=''>
									Design systems
								</Link>
								<Link href=''>
									Pricing
								</Link>
								<Link href=''>
									Security
								</Link>
							</div>
						</div>
						<div className='footer-columns'>
							<h2>Getting started</h2>
							<div className='footer-items'>
								<Link href=''>
									Community
								</Link>
								<Link href=''>
									Prototyping
								</Link>
								<Link href=''>
									Design systems
								</Link>
								<Link href=''>
									Pricing
								</Link>
								<Link href=''>
									Security
								</Link>
							</div>
						</div>
					</ResponsiveGrid>
				</Margin>
			</Container>
		</footer>
    );
}
