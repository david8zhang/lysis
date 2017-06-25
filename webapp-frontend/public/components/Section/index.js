import React, { Component } from 'react';
import styles from './styles.css';

class Section extends Component {
	render() {
		const style = {
			backgroundColor: this.props.color || ''
		};
		if (this.props.img) {
			style.backgroundImage = `url(${this.props.img})`;
		}
		return (
			<section 
				className={styles[this.props.preset]}
				style={style}
			>
				<div className='container' style={{ width: '100%', margin: '0px', maxWidth: '100%' }}>
					{ this.props.children }
				</div>
			</section>
		);
	}
}

Section.propTypes = {
	preset: React.PropTypes.string.isRequired,
	img: React.PropTypes.string,
	children: React.PropTypes.node,
	style: React.PropTypes.object
};

export default Section;
