import React, { Component } from 'react';
import styles from './styles.css';

class Profile extends Component {
	/** render the profile's stats */
	renderStats() {
		return this.props.stats.map((stat, index) => (
			<div 
				key={`${stat.key} ${index}`}
				className='row' 
				style={{
					flex: '1 100%'
				}}
			>
				<div className='one-half column'>
					<p 
						style={{ 
							fontWeight: '800',
							marginBottom: '10px' 
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
			<div 
				className={styles.profile} 
				style={{ marginBottom: '41px' }}
			>
				<img 
					src={this.props.profileSrc}
					alt='None'
				/>
				<h2>{this.props.username}</h2>
				<p>{this.props.description}</p>
				<hr style={{ width: '100%', marginBottom: '20px' }} />
				{ this.renderStats() }
			</div>
		);
	}
}

export default Profile;
