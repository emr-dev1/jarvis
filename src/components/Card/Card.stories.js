import React from 'react';
import CardComponent from './CardComponent';

export default {
	component: CardComponent,
	title: 'CardComponent',
};

export const card = () => (
	<CardComponent
		name={'Open Me'}
		contents={['One', 'Two', 'Three']}
	/>
);
