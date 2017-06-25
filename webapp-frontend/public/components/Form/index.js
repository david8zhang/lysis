import React, { Component } from 'react';
import styles from './styles.css';
import { Input, Button } from '../common';

class Form extends Component {
	constructor(props) {
		super(props);
		this.state = {};
	}
	renderInputs() {
		return this.props.inputs.map((input) => (
			<div style={{ padding: '5px' }} key={input.key}>
				<Input
                    required={input.required}
					style={{ width: '100%' }}
					inputStyle={{ width: '100%' }}
					placeholder={input.placeholder}
					value={this.state[input.key]}
					onChange={(value) => this.setState({ [input.key]: value })}
					type={input.type}
					id={input.key}
					label={input.label}
				/>
			</div>
		));
	}
	render() {
		return (
			<div className={styles[this.props.preset]}>
				<div className={styles.formHeader}>
					{ this.props.title }
				</div>
				{ this.renderInputs() }
				<div style={{ padding: '5px' }}>
					<Button
						text='Submit'
						preset='submit'
						onClick={() => this.props.onSubmit(this.state)}
					/>
				</div>
			</div>
		);
	}
}

Form.defaultProps = {
	preset: 'form'
};

export default Form;
