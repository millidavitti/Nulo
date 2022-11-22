import Description from "./Description";
import Headings from "./Headings";
import Container from "./Layout/Container";
import Margin from "./Layout/Margin";
import Section from "./Layout/Section";
import home from "../styles/Home.module.css";
import { RightArrow } from "../assets/SVG.config";
import Moscow from "../assets/illustrations/Moscow-rafiki.svg";
import Grid from "./Layout/Grid";

export default function NewsLetter() {
	return (
		<Section background='var(--newsLetter)'>
			<Container>
				<Grid>
					<div className={home.newsLett}>
						<Headings>Join our newsletter 🎉</Headings>
						<Margin>
							<Description>
								Read and share new perspectives on just about any topic.
								Everyone’s welcome.
							</Description>
						</Margin>
						<p className={home.newsLetterPoint}>
							<span>01</span> Get Discount
						</p>
						<p className={home.newsLetterPoint}>
							<span>02</span> Get premium magazines
						</p>

						<form className={home.form}>
							<input
								type='email'
								name='email'
								className={home.email}
								placeholder='Enter your email'
							/>
							<button type='submit'>
								<RightArrow size={20} fill='white' />
							</button>
						</form>
					</div>
					<Moscow />
				</Grid>
			</Container>
		</Section>
	);
}
