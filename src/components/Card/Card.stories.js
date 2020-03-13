import React from 'react';
import CardComponent from './CardComponent';
import Column from '../Column/ColumnComponent';

export default {
	component: CardComponent,
	title: 'Card',
};

export const InactiveCard = () => (
	<CardComponent>
		Lorem Ipsum
	</CardComponent>
);
