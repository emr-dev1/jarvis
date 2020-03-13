import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const Notification = styled.div`
    position: fixed;
    width: 20em;

    ${({ topRight }) => {
        return `top:20px;bottom:20px;right:20px;`;
    }}
    ${({ topLeft }) => {
       return `top:20px;bottom:auto;right:20px;`;
    }}
    ${({ bottomLeft }) => {
        return `top:20px;bottom:auto;left:20px;`;
    }}
    ${({ bottomRight }) => {
        return `top:auto;bottom:20px;right:20px`;
    }}
`;

const NotificationItem = styled.div`

`;

const NotificationComponent = () => {

	static propTypes = {
		position: PropTypes.string,
		onClick: PropTypes.func,
	};

	constructor(props) {
		super(props);

		this.state = {
			messages: [],
		}
	}

	show() {

	}

	clear() {
		this.setState({
			messages: [],
		});
	}

	onClose() {
		// filter the messages in the state
		// set the filtered messages as state messages
		// check if a remove function exists, execute if it does
	}

	render() {
		return (
			<Notification>

			</Notification>
		)
	}
};

export default NotificationComponent;
