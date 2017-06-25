import React, { Component } from 'react';
import { browserHistory } from 'react-router';
import SearchBar from '../SearchBar';
import styles from './styles.css';

class Sidebar extends Component {
	renderItems() {
		return this.props.items.map((item, index) => (
			<div 
				key={`sidebar-item-${index}`}
				className={`${styles.sidebarItem}`}
				onClick={() => { 
					browserHistory.push(item.link); 
					this.props.onClose();
				}}
			>
				<img
					style={{ display: 'inline-block' }}
					src={item.src}
					alt='none'
				/>
				<div 
					style={{
						display: 'inline-block', 
						marginLeft: '10px' 
					}}
				>
					{item.text}
				</div>
			</div>
		));
	}
	render() {
		return (
			<div className={styles.sidebar}>
				<div className={`${styles.sidebarOptions}`}>
					<div 
						style={{ 
							display: 'flex', 
							justifyContent: 'flex-end',
							paddingRight: '20px',
							flex: '1 1 100%',
							paddingBottom: '15px'
						}}
					>
						<i
							onClick={() => this.props.onClose()}
							className={`fi-x-circle ${styles.sidebarIcon}`}
						/>
					</div>
					<div style={{ justifyContent: 'center', display: 'flex' }}>
						<SearchBar id='1' />
					</div>
				</div>
				{ this.renderItems() }
			</div>
		);
	}
}

Sidebar.defaultProps = {
	isShowing: true,
	onClose: () => console.log('Clicked Menu!')
};

export default Sidebar;
