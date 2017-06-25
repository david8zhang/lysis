import React from 'react';
import { Scene, Router } from 'react-native-router-flux';
import { HomePage, ChatPage } from './pages';

const RouterComponent = () => (
	<Router hideNavBar>
		<Scene 
			key='home'
			component={HomePage}
			style={sceneStyle}
		/>
		<Scene
			key='chat'
			component={ChatPage}
			style={sceneStyle}
		/>
	</Router>
);

const sceneStyle = { paddingTop: 24 };

export default RouterComponent;
