import { configure, addDecorator } from '@storybook/react';
import { GlobalStyle } from '../src/GlobalStyle';
import themeDecorator from './themeDecorator';
import * as React from 'react';

const req = require.context('../src/components', true, /\.stories\.js$/);

addDecorator(themeDecorator);
addDecorator((style) => <><GlobalStyle/>{style()}</>);

configure(req, module);
