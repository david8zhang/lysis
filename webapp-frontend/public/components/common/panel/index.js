import React, { Component } from 'react';
import styles from './styles.css';

class Panel extends Component {
	render() {
		const style = { ...this.props.style };
		if (this.props.hasPadding) {
			style.paddingRight = '20px';
			style.paddingLeft = '20px';
		}
		return (
			<div 
				onClick={this.props.onClick}
				className={styles[this.props.preset]}
				style={style}
			>
				{
					this.props.title &&
					<h2>{this.props.title}</h2>
				}
				<div 
					className={styles.main}
					style={this.props.contentStyle}
				>
					{ this.props.children }
				</div>
			</div>
		);
	}
}

Panel.defaultProps = {
	preset: 'panel'
};

export default Panel;
