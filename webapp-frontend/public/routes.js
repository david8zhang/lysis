import React from 'react';
import { Route } from 'react-router';

/** Containers */
import { IndexPage, DashPage } from './pages';

export default (
	<Route path='/' component={IndexPage}>
		<Route path='dash' component={DashPage} />
	</Route>
);
