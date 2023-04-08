import React,{useState} from "react";
import { NavLink, Navigate, useNavigate } from 'react-router-dom';
import './login_style.css';
const bodyStyle = {
	backgroundImage: "url('https://media.istockphoto.com/id/1223362514/photo/insurance-agent-checking-policy-documents-in-office.jpg?s=612x612&w=0&k=20&c=eSRwkq0QR1uYcHpf9V2CfqoTcNrYRDQj32IJ7oTDaro=')" ,
    backgroundSize: "cover",
    backgroundRepeat: "noRepeat"
}
const containerStyle = {
	display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    height: "100vh"
}





function Login(){
	const navigate = useNavigate();

	const [user,setUser]=useState({
		Username:""	,Password:"",
	   });
	   let name,value;
     const handleFuction=(e)=>{
            console.log(e);
			name=e.target.name;
			value=e.target.value;
         setUser({...user,[name]:value});


	 }
	 const log = async (e) => {
		e.preventDefault();
		// const history=useNavigate();
		const { Username,Password} = user;
		const res = await fetch("http://localhost:8000/login", {
			method: 'POST',
			headers: {
				"Content-Type": 'application/json'
			},
			body: JSON.stringify({
				Username,Password
			})

		})
		const data = await res.json();
		if (!data || res.status === 400||res.status === 401) {
			window.alert("wrong password or username");
		}
		 
		else {
			window.alert("registration done");
			navigate('/home');
		}

	}




    return (
        <div style={bodyStyle}>
        <div class="container login" style={containerStyle}>
		<form method="POST">
			<h2>Login</h2>
			<label for="username" name="username" >Username:</label>
			<input type="text" id="username" name="Username" value={user.Username} onChange={handleFuction} required />
			<label for="password">Password:</label>
			<input type="password" id="password" name="Password" value={user.Password} onChange={handleFuction} required />
			<input type="submit" value="Login" onSubmit={log} />
		</form>
		<div class="sign-up">
			Don't have an account? <a href="#">Sign up</a>
		</div>
	    </div>

        </div>
    )
}
export default Login;