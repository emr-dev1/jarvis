import React from 'react';
import PropTypes from 'prop-types';
import DOMHandler from '../utils/DOMHandler';

import {
	Notification,
	NotificationItem
} from './NotificationStyles';

let messageIndex = 0;

class NotificationComponent extends React.Component {

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

	show(content) {
		if (content) {
			let newMessages;

			if (Array.isArray(content)) {
				for (let i = 0; i < content.length; i++) {
					content[i].id = messageIndex++;
					newMessages = this.state.messages ? [...this.state.messages, ...content] : [content];
				}
			}
			else {
				content.id = messageIndex++;
				newMessages = this.state.messages ? [...this.state.messages, value] : [value];
			}

			this.setState({
				messages: newMessages,
			});

			this.container.style.zIndex = String(this.props.baseZIndex + DOMHandler.generateZIndex());
		}
	}

	clear() {
		this.setState({
			messages: [],
		});
	}

	onClose(message) {
		// filter the messages in the state
		// set the filtered messages as state messages
		// check if a remove function exists, execute if it does
		let newMessages = this.state.messages.filter(msg = msg.id !== message.id);
		this.setState({
			messsages: newMessages,
		});

		if (this.props.onRemove) {
			this.props.onRemove(message);
		}
	}

	render() {
		return (
			<Notification>

			</Notification>
		);
	}
};

export default NotificationComponent;
