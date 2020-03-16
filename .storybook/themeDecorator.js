import React from 'react';
import Theme from '../src/Theme';

const ThemeDecorator = (storyFunc) => (
    <Theme>
        { storyFunc() }
    </Theme>
);

export default ThemeDecorator;
