import Image from "next/image";
import user from "../../styles/user.module.css";
import Headings from "../Headings";
import Margin from "../Layout/Margin";
import Section from "../Layout/Section";
import image from "../../assets/image.jpg";
import { useState } from "react";
export default function AccountInfo() {
	const [formData, setFormData] = useState({
		name: "",
		gender: "",
		username: "",
		email: "",
		dob: "",
		address: "",
		phone: "",
	});
	function getData(event) {
		const {
			target: { name, value },
		} = event;
		setFormData((pre) => ({
			...pre,
			[name]: value,
		}));
	}
	return (
		<Section background='var(--grey)'>
			<div className={user.acountInfo}>
				<Margin>
					<Headings>Account Information</Headings>
				</Margin>
				<div className={user.avatar}>
					<Image
						width={100}
						height={100}
						src={image.src}
						style={{ borderRadius: "50%" }}
					/>
					<div>
						<input
							onChange={(e) => console.log(e.target.files)}
							type='file'
							name='avatar'
							accept='image/*'
						/>
						<p>Choose an Image</p>
					</div>
				</div>
				<form>
					<div className={user.input}>
						<label htmlFor='name'>Name</label>
						<input
							value={formData.name}
							onChange={getData}
							type='text'
							name='name'
							id='name'
						/>
					</div>
					<div className={user.input}>
						<label htmlFor='gender'>Gender</label>
						<select
							value={formData.gender}
							onChange={getData}
							name='gender'
							id=''
						>
							<option value='Male'>Male</option>
							<option value='Female'>Female</option>
							<option value='Others'>Others</option>
						</select>
					</div>
					<div className={user.input}>
						<label htmlFor='username'>Username</label>
						<input
							value={formData.username}
							onChange={getData}
							type='text'
							name='username'
							id='username'
						/>
					</div>
					<div className={user.input}>
						<label htmlFor='email'>Email</label>
						<input
							value={formData.email}
							onChange={getData}
							type='email'
							name='email'
							id='email'
						/>
					</div>
					<div className={user.input}>
						<label htmlFor='dob'>Date of birth</label>
						<input
							value={formData.dob}
							onChange={getData}
							type='date'
							name='dob'
							id='dob'
						/>
					</div>
					<div className={user.input}>
						<label htmlFor='address'>Address</label>
						<input
							value={formData.address}
							onChange={getData}
							type='text'
							name='address'
							id='address'
						/>
					</div>
					<div className={user.input}>
						<label htmlFor='phone'>Phone number</label>
						<input
							value={formData.phone}
							onChange={getData}
							type='tel'
							name='phone'
							id='phone'
						/>
					</div>
					<button type='submit'>Update Info</button>
				</form>
			</div>
		</Section>
	);
}
