import React from 'react';
import { Link } from 'react-router-dom';
import SignedInLinks from './SignedInLinks';
import SignedOutLinks from './SignedOutLinks';
import { connect } from 'react-redux';
import Media from "react-media";
import M from 'materialize-css';
import { updateDimensions } from '../../store/window';
import { WIDTH_MD } from '../../util/Constants';
class Navbar extends React.Component {

	constructor(props) {
		super(props);
		this.state = { }
	}

	componentDidMount() {
		window.addEventListener('resize', (e) => {
			this.props.dispatch(updateDimensions(window.innerWidth, window.innerHeight));
			console.log(window.innerWidth, window.innerHeight);
		});
	}

	componentWillUnmount() {
		window.removeEventListener('resize')
	}

	componentDidUpdate() { }

	closeSidebar = (e) => {
		console.log("Clicked", e && e.target, e);
		let sidenav = document.querySelector('.sidenav');
		var instance = M.Sidenav.init(sidenav);
		console.log(sidenav, instance)
		instance && instance.isOpen && instance.close() 
	}

	toggleSideNav = (e) => {
		console.log("Clicked", e && e.target, e);
		let sidenav = document.querySelector('.sidenav');
		var instance = M.Sidenav.init(sidenav);
		console.log(sidenav, instance)
		if (!instance) return;	
		instance.isOpen ? instance.close() : instance.open()
	}


	render() {
		return (
			this.props.windowWidth <= WIDTH_MD ? (
			<React.Fragment>
				<ul id="slide-out" className="sidenav yellow lighten-3">
					<li>
						<h3 className="center">
							<Link className="brand-logo yellow darken-4" to="/" onClick={(e)=>this.closeSidebar(e)}>Events</Link>
						</h3>	
					</li>
					
					<SignedInLinks side closeSidebar={this.closeSidebar}/>
					<SignedOutLinks side closeSidebar={this.closeSidebar}/>
				</ul>
				<button 
					onClick={() => { this.toggleSideNav() }} 
					className="btn btn-floating btn-large waves-effect waves-light"
				>
						<i className="material-icons">menu</i>
				</button>

			</React.Fragment>	
			):(
				<nav className="nav-wrapper grey darken-3">
					<div className="container">
						<Link className="brand-logo left" to="/">Events</Link>
						<SignedInLinks />
						<SignedOutLinks />
					</div>
				</nav>	
			)
		)
	}
}

const mapStateToProps = state => {
	console.log(state);
	return {
		windowWidth: state.window.width
	}
}

export default connect(mapStateToProps)(Navbar);