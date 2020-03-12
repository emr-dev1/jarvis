import React from 'react';
import Dropdown from '.';

export default {
	component: Dropdown,
	title: 'Dropdown',
};

export const dropdown = () => (
	<Dropdown
		name={'dropper'}
		contents={['One', 'Two', 'Three']}
	/>
);
