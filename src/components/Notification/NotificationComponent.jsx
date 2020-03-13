import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

class NotificationComponent extends React.Component {
	static defaultProps = {
		position: 'top-right',
		onClick: PropTypes.func,
	};

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
