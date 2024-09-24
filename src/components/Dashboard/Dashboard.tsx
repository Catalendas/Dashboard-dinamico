import React from 'react';
import { Widget } from './Widget';

import './styles/main.scss'
import { Widgets } from './dashboard.model';

export interface DashboardProps {
	widgets: Widgets[]
	title: string
}

export const Dashboard = ({title, widgets}: DashboardProps) => {
	return (
		<div className="dashboard">
			<h1>{title}</h1>
			{widgets.map((widget: Widgets, index) => (
				<Widget
					key={index}
					content={widget}
					className='dashboard__widget'
				/>
			))}
		</div>
	);
};
