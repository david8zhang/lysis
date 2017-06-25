import React, { Component } from 'react';
import styles from './styles.css';
import { Input, Button } from '../common';

class SlideForm extends Component {
	constructor(props) {
		super(props);
		this.state = {};
	}
	renderInputs() {
		return this.props.inputs.map((input) => (
			<Input 
				preset='headerInput'
				placeholder={input.placeholder}
				style={{ float: 'left', width: 'auto', marginRight: '10px' }} 
				value={this.state[input.key]}
				onChange={(value) => this.setState({ [input.key]: value })}
				type={input.type}
				key={input.key}
				id={input.key}
			/>
		));
	}

	render() {
		return (
			<div className={`${styles.slideForm} animated slideInRight`}>
				{ this.renderInputs() }
				<Button
					style={{ padding: '12px 30px 13px 30px', float: 'left' }}
					preset='submit'
					text='Submit' 
					onClick={() => this.props.onSubmit(this.state)}
				/>
			</div>
		);
	}
}

SlideForm.defaultProps = {
	inputs: [
		{
			placeholder: 'Enter your email',
			type: 'text',
			key: 'email'
		},
		{
			placeholder: 'Enter your password',
			type: 'password',
			key: 'password'
		}
	]
};

export default SlideForm;
