import React from 'react';
import { Dashboard } from 'src/components/Dashboard/Dashboard';

import './styles/main.scss';
import { widgets } from './mocks/dashboard.data';

const App = () => {
	return (
		<div className="App">
			<Dashboard title="My Awesome SOLID Dashboard" widgets={widgets}/>
		</div>
	);
};

export default App;
