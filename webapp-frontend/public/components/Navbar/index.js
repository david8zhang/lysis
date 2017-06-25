import React, { Component } from 'react';
import styles from './styles.css';

class Navbar extends Component {
	render() {
		return (
			<div className={styles[this.props.preset]}>
				<div className={styles.navbarHeader}>
					{ this.props.title }
				</div>
				<div className={styles.navbarRight}>
					{ this.props.children }
				</div>
			</div>
		);
	}
}

Navbar.propTypes = {
	title: React.PropTypes.node,
	brand: React.PropTypes.node,
	preset: React.PropTypes.string
};

Navbar.defaultProps = {
	preset: 'navbar'
};

export default Navbar;
