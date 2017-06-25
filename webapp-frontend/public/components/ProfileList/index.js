import React, { Component } from 'react';
import styles from './styles.css';

class ProfileList extends Component {
	renderItems() {
		return this.props.profiles.map((profile, index) => (
			<div 
				style={{ width: '100%' }} 
				key={index}
			>
				<div className={styles.profileItem}>
					<div className={styles.profileInfo}>
						<img src={profile.imgSrc} alt='none' />
						<p>{profile.username}</p>
					</div>
					<div className={styles.profileVids}>
						<p>{profile.numVids}</p>
					</div>
				</div>
				<hr 
					style={{ 
						marginTop: '0px',
						marginBottom: '0px',
						marginLeft: '20px',
						marginRight: '20px'
					}} 
				/>
			</div>
		));
	}
	render() {
		return (
			<div className={styles.profileList}>
				<h2>{this.props.collabTitle}</h2>
				<div className={styles.profileHeader}>
					<p>{this.props.headerText}</p>
				</div>
				<div style={{ maxHeight: '800px', overflow: 'auto' }}>
					{ this.renderItems() }
				</div>
			</div>
		);
	}
}

ProfileList.propTypes = {
	collabTitle: React.PropTypes.string,
	headerText: React.PropTypes.string.isRequired,
	profiles: React.PropTypes.arrayOf(React.PropTypes.object).isRequired
};

export default ProfileList;
