import React, { Component } from 'react';
import styles from './styles.css';

class Button extends Component {
	render() {
		return (
			<a
				className={styles[this.props.preset] || 'button button-primary'} 
				onClick={this.props.onClick}
				style={this.props.style}
			>
				{this.props.text}
			</a>
		);
	}
}

Button.propTypes = {
	onClick: React.PropTypes.func.isRequired,
	text: React.PropTypes.string.isRequired,
	preset: React.PropTypes.string,
	style: React.PropTypes.object
};

export default Button;
