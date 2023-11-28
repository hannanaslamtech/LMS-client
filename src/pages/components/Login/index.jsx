import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import styles from "./styles.module.css";
import Header from "../Header/Header";
import Footer from "../Header/Footer";

const Login = () => {
	const [data, setData] = useState({ email: "", password: "" });
	const [error, setError] = useState("");
	const navigate = useNavigate();

	const handleChange = ({ currentTarget: input }) => {
		setData({ ...data, [input.name]: input.value });
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		try {
			const url = "https://lms-server-git-main-hannanaslamtech.vercel.app/api/auth";
			const { data: res } = await axios.post(url, data);
			if (res.role === "faculty") {
				localStorage.setItem('role', res.role);
				return navigate("/Faculty");
			} else if (res.role === "student") {
				localStorage.setItem('role', res.role);
				return navigate("/EmployeeDashboard");
			}
			else {
				// Handle the case where the token is not present in the response
				console.error("Error");
			}

		} catch (error) {
			if (
				error.response &&
				error.response.status >= 400 &&
				error.response.status <= 500
			) {
				setError(error.response.data.message);
			}
		}
	};

	return (
		<div className="flex flex-col w-full h-full">
			<Header />
			<div className={styles.login_container}>

				<div className={styles.login_form_container}>
					<div className={styles.left}>
						<h1>Login to Your Account </h1>
						<form className={styles.form_container} onSubmit={handleSubmit}>

							<input
								type="email"
								placeholder="Email"
								name="email"
								onChange={handleChange}
								value={data.email}
								required
								className={styles.input}
							/>
							<input
								type="password"
								placeholder="Password"
								name="password"
								onChange={handleChange}
								value={data.password}
								required
								className={styles.input}
							/>
							{error && <div className={styles.error_msg}>{error}</div>}
							<button type="submit" className={styles.green_btn}>
								Sing In
							</button>
						</form>
					</div>
					<div className={styles.right}>
						<h1>New User ?</h1>
						<Link to="/signup">
							<button type="button" className={styles.white_btn}>
								Sing Up
							</button>
						</Link>
					</div>
				</div>
			</div>
			<Footer />
		</div>
	);
};

export default Login;