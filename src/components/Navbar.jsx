import { Link } from "react-router-dom";

export const Navbar = () => {

	return (
		<nav className="navbar navbar-light">
			<div className="container">
				<span className="navbar-brand mb-0 h1">Contacts</span>
				<div className="ml-auto">
					<Link to="/demo">
						<button className="btn btn-success">Add new contact</button>
					</Link>
				</div>
			</div>
		</nav>
	);
};