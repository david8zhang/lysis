import React, { Component } from 'react';
import styles from './styles.css';

class Input extends Component {
	render() {
		const checkedOnChange = (event) => this.props.onChange(event.target.checked);
		const valueOnChange = (event) => this.props.onChange(event.target.value);
		const style = styles[this.props.preset] || styles.customInput;
		return (
			<div 
				className={style}
				style={this.props.style}
			>
				<input
					style={this.props.inputStyle} 
					name={this.props.name}
					className={styles.input}
					value={this.props.value}
					checked={this.props.value}
					onChange={this.props.type === 'checkbox' ? checkedOnChange : valueOnChange}
					type={this.props.type}
					placeholder={this.props.placeholder}
					id={this.props.id}
				/>
				{ this.props.label &&
					<label htmlFor={this.props.id}>
						{this.props.label}
					</label>
				}
			</div>

		);
	}
}

Input.propTypes = {
	onChange: React.PropTypes.func.isRequired,
	id: React.PropTypes.string.isRequired,
	value: React.PropTypes.oneOfType([
		React.PropTypes.string, 
		React.PropTypes.bool, 
		React.PropTypes.number
	]),
	placeholder: React.PropTypes.string,
	type: React.PropTypes.string,
	style: React.PropTypes.object,
	name: React.PropTypes.string
};

Input.defaultProps = {
	type: 'text',
	value: ''
};

export default Input;
