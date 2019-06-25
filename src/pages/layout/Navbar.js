import React from 'react';
import { Link } from 'react-router-dom';
import SignedInLinks from './SignedInLinks';
import SignedOutLinks from './SignedOutLinks';
import { connect } from 'react-redux';
import Media from "react-media";
import M from 'materialize-css';
import { updateDimensions } from '../../store/window';
import { WIDTH_MD } from '../../util/Constants';
import { NavbarPrimary, ButtonPrimary } from '../../util/Theme';
class Navbar extends React.Component {

	constructor(props) {
		super(props);
		this.state = { }
	}

	componentDidMount() {
		this.props.dispatch(updateDimensions(window.innerWidth, window.innerHeight));
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
			
			<React.Fragment>
				<ul id="slide-out" className="sidenav yellow lighten-2">
					<li className="blue center darken-3 ma0 pa2">
						<div className="f2">
							<Link className="white-text brand-logo" to="/" onClick={(e)=>this.closeSidebar(e)}>Events</Link>
						</div>	
					</li>
					<SignedInLinks side closeSidebar={this.closeSidebar}/>
					<SignedOutLinks side closeSidebar={this.closeSidebar}/>
				</ul>

				<nav className={`nav-wrapper ${NavbarPrimary} darken-3`}>
					<div className="container">
						<Link 
							className={`brand-logo ${this.props.windowWidth <= WIDTH_MD ? 'center' : 'left' }`} 
							to="/"
						>
							Events
						</Link>

						<div
							onClick={() => { this.toggleSideNav() }}
							style={{paddingLeft: '10px'}} 
							className={`${this.props.windowWidth <= WIDTH_MD ? '' : 'hide' } transparent white-text waves-effect waves-light`}
						>
								<i className="material-icons">menu</i>
						</div>
						<SignedInLinks />
						<SignedOutLinks />
					</div>
				</nav>	
			
			</React.Fragment>
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