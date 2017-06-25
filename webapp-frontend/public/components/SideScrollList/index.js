import React, { Component } from 'react';
import { Panel } from '../common';
import styles from './styles.css';

class SidescrollList extends Component {
	constructor(props) {
		super(props);
		this.state = {
			items: this.props.items
		};
	}
	/**
	 * Repeatedly pop and append until the 
	 * chosen active element is at the front of the list
	 * @param  {Integer} index The index of the card that was clicked
	 * @return {None}       
	 */
	scrollToItems(index) {
		const newItems = this.state.items;
		const selectedNode = this.state.items[index];
		while (newItems[0] !== selectedNode) {
			const frontItem = newItems.splice(0, 1)[0];
			this.setState({
				items: newItems
			});
			newItems.push(frontItem);
			this.setState({
				items: newItems
			});
		}
	}
	renderItems() {
		const items = [];
		for (let i = 0; i < 3; i++) {
			const item = this.state.items[i];
			const zoom = 1 - (i / 8);
			const marginLeft = `${i * 300}px`;
			const zIndex = 3 - i;
			items.push(
				<Panel
					key={i}
					preset='rec'
					onClick={() => this.scrollToItems(i)}
					style={{ 
						boxShadow: '5px 5px 2px rgba(0, 0, 0, 0.2)',
						position: 'absolute',
						height: 'auto',
						width: '400px',
						marginLeft,
						zIndex,
						zoom,
					}}
				>
					{item}
				</Panel>
			);			
		}
		return items;
	}
	render() {
		const items = this.renderItems();
		return (
			<div 
				className={styles.sideScrollList}
				style={this.props.style}
			>
				{ items }
			</div>
		);
	}
}

export default SidescrollList;
