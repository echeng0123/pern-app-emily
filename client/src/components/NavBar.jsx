// This component is the navigation bar for the page

import { Link } from "react-router-dom";

export default function NavBar({ token }) {
	return (
		<div id="nav-bar-section">
			<Link to="/home">Home</Link>
			<Link to="/physical">Physical Instruments</Link>
			<Link to="/virtual">Virtual Instruments</Link>
			<Link to="/genres">Genres</Link>
			<Link to="/genrejunctions">Genre Junctions</Link>

			{localStorage.getItem("token") ? (
				<>
					<Link to="/profile">Profile</Link>
					<Link to="/logout">Logout</Link>
				</>
			) : (
				<Link to="/login">Login</Link>
			)}
		</div>
	);
}
