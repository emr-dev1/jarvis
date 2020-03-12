import React from 'react';
import Dropdown from './DropdownComponent';

export default {
	component: Dropdown,
	title: 'Dropdown',
};

export const dropdown = () => (
	<Dropdown
		name={'Open Me'}
		contents={['One', 'Two', 'Three']}
	/>
);
