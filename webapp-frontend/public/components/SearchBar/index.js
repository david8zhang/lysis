import React, { Component } from 'react';
import { Input, Button } from '../common';
import styles from './styles.css';

class SearchBar extends Component {
	constructor(props) {
		super(props);
		this.state = {
			value: '',
		};
	}
	render() {
		return (
			<div className={styles.search}>
				<i className='fi-magnifying-glass' />
				<Input
					style={{ 
						display: 'inline-block', 
						width: '100%',
						padding: '0px'
					}}
					value={this.state.value}
					preset='searchInput'
					type='text'
					onChange={(value) => this.setState({ value })}
					id={this.props.id}
					placeholder='Search'
				/>
				<Button
					preset='transparent'
					text='Go'
					style={{
						borderRadius: '0px 20px 20px 0px',
						paddingLeft: '15px',
						paddingRight: '15px',
						paddingTop: '10px',
					}}
					onClick={() => console.log(this.state)}
				/>
			</div>
		);
	}
}

export default SearchBar;
