import React, { Component } from 'react';
import styles from './styles.css';

class InfoCard extends Component {
	render() {
		let animation;
		if (this.props.browser && 
			(this.props.browser.indexOf('Chrome') !== -1 ||
			this.props.browser.indexOf('Firefox') !== -1)) {
			animation = 'flip-up';
		}
		return (
			<div 
				className={styles.infoCard} 
				data-aos={animation}
				data-aos-delay={this.props.delay}
				data-aos-duration='600'
				data-aos-once
			>
				<div className={styles.infoCardHeader}>
					{ this.props.header }
				</div>
				<hr className={styles.infoHeaderDivider} />
				<div className={styles.infoCardBody}>
					<p>{this.props.body}</p>
				</div>
			</div>
		);
	}
}

InfoCard.propTypes = {
	header: React.PropTypes.node.isRequired,
	body: React.PropTypes.node.isRequired,
	img: React.PropTypes.string.isRequired,
	delay: React.PropTypes.string
};

export default InfoCard;
