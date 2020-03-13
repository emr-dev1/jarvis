import { configure, addDecorator } from '@storybook/react';
import { GlobalStyle } from '../src/GlobalStyle';
import * as React from 'react';

const req = require.context('../src/components', true, /\.stories\.js$/);

addDecorator((style) => <><GlobalStyle/>{style()}</>);

configure(req, module);
