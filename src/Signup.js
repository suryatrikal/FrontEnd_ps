import React, { useState } from "react";
import { NavLink, Navigate, useNavigate } from 'react-router-dom';
import './singupStyle.css';
const bodyStyle = {
	backgroundImage: "url('https://media.istockphoto.com/id/1223362514/photo/insurance-agent-checking-policy-documents-in-office.jpg?s=612x612&w=0&k=20&c=eSRwkq0QR1uYcHpf9V2CfqoTcNrYRDQj32IJ7oTDaro=')",
	backgroundSize: "cover",
	backgroundRepeat: "noRepeat",
	margin: "0 auto"
}
const containerStyle = {
	display: "flex",
	flexDirection: "column",
	alignItems: "center",
	justifyContent: "center",
	height: "100vh"
}

function Signup() {
	const navigate = useNavigate();

	const [user, setUser] = useState({
		Username: "", Email: "", Password: "", ConfirmPassword: "", Branch: "", Semester: ""
	});
	let name, value;
	const handleFuction = (e) => {
		console.log(e);

		name = e.target.name;
		value = e.target.value;
		setUser({ ...user, [name]: value });
	}
	const su = async (e) => {
		e.preventDefault();
		// const history=useNavigate();
		const { Username, Email, Password, ConfirmPassword, Branch, Semester } = user;
		const res = await fetch("http://localhost:8000/register", {
			method: 'POST',
			headers: {
				"Content-Type": 'application/json'
			},
			body: JSON.stringify({
				Username, Email, Password, ConfirmPassword, Branch, Semester
			})

		})
		const data = await res.json();
		if (!data || res.status === 400) {
			window.alert("Fill it properly");
		}
		else if (res.status === 401) {
			window.alert("passwords are not matching");

		}
		else {
			window.alert("registration done");
			navigate('/login');
		}

	}

	return (
		<div className="signUp" style={bodyStyle}>
			<div className="contanier" style={containerStyle}>
				<form method="POST" >
					<h2>Sign Up</h2>
					<label for="username">Username:</label>
					<input type="text" id="username" name="Username" value={user.Username} onChange={handleFuction} required />
					<label for="email">Email:</label>
					<input type="email" id="email" name="Email" value={user.Email} onChange={handleFuction} required />
					<label for="password">Password:</label>
					<input type="password" id="password" name="Password" value={user.Password} onChange={handleFuction} required />
					<label for="confirm-password">Confirm Password:</label>
					<input type="password" id="password" name="ConfirmPassword" value={user.ConfirmPassword} onChange={handleFuction} required />
					<div class="form-group">
						<label for="branch" >Branch:</label>
						<input type="text" id="branch" name="Branch" value={user.Branch} onChange={handleFuction} required />
						<label for="semester">Semester:</label>
						<input type="number" id="semester" name="Semester" min="1" max="8" value={user.Semester} onChange={handleFuction} required />
					</div>
					<input type="submit" value="Sign Up" onClick={su} />
				</form>

				<div class="login">
					Already have an account? <a href="#">Login</a>
				</div>
			</div>


		</div>
	)
}
export default Signup;