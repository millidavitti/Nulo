import Headings from "../Headings";
import Container from "../Layout/Container";
import Section from "../Layout/Section";
import user from "../../styles/user.module.css";

export default function ChangePassword() {
	return (
		<Section background='var(--grey)'>
			<Container>
				<Headings>Update your password</Headings>
				<form>
					<div className={user.input}>
						<label htmlFor='current password'>Current Password</label>
						<input type='password' name='name' id='current password' />
					</div>
					<div className={user.input}>
						<label htmlFor='new password'>New Password</label>
						<input type='password' name='name' id='new password' />
					</div>
					<div className={user.input}>
						<label htmlFor='confirm password'>Confirm Password</label>
						<input type='password' name='name' id='confirm password' />
					</div>
				</form>
			</Container>
		</Section>
	);
}
