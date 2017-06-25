import React, { Component } from 'react';
import styles from './styles.css';
import { Button } from '../common';

class Recommendation extends Component {
	/** render the profile's stats */
	renderStats() {
		return this.props.stats.map((stat, i) => (
			<div
				key={i}
				className='row' 
				style={{
					flex: '1 100%'
				}}
			>
				<div className='one-half column'>
					<p 
						style={{ 
							fontWeight: '800',
							marginBottom: '10px',
							color: '#818181'
						}}
					>
						{ stat.key }
					</p>
				</div>
				<div className='one-half column'>
					<p 
						style={{
							marginBottom: '10px',
							float: 'right',
							color: 'black',
							fontWeight: '900'
						}}
					>
						{ stat.value }
					</p>
				</div>
			</div>
		));
	}
	render() {
		return (
			<div className={styles.rec}>
				<img 
					src={this.props.profileSrc}
					alt='None'
				/>
				<h2>{this.props.username}</h2>
				<b style={{ fontSize: '20px' }}>
					{this.props.label}
				</b>
				<p>{this.props.description}</p>
				<a
					className={styles.recLink}
					style={{ fontSize: '20px' }}
					onClick={() => this.props.learnMore()}
				>
					{this.props.linkText}
				</a>
				<hr />
				{ this.renderStats() }
				<Button
					style={{ 
						color: 'white', 
						textDecoration: 'none'
					}}
					preset='collaborate'
					text='Collaborate'
					onClick={() => this.props.onBtnClick()}
				/>
			</div>
		);
	}
}

export default Recommendation;
