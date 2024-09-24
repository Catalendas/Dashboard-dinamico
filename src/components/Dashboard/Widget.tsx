import React from 'react';
import { templateComponents } from './dashboard.config';
// import { Chart, Layer, Bars, Ticks } from 'rumble-charts';

export interface WidgetProps {
	content: any;
	className?: string;
}

export const Widget = ({ content, className }: WidgetProps) => {
	const WidgetComponent = templateComponents[content.config.template]
	const customClass = className && `${className} `;
	const position = content.config.position.toLowerCase()
	
	return (
		<div className={`${customClass} widget widget--${position}`}>
			<WidgetComponent content={content}/>
		</div>
	);
};
