import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import DOMHandler from '../utils/DOMHandler';

class NotificationMessageComponent extends React.Component {
    static defaultProps = {
        message: null,
        onClose: null,
        onClick: null
    };

    static propTypes = {
        message: PropTypes.object,
        onClose: PropTypes.func,
        onClick: PropTypes.func,
    };

    constructor(props) {
        super(props);

        this.onClick = this.onClick.bind(this);
        this.onClose = this.onClose.bind(this);
    }

    componentWillUnmount() {
        if (this.timeout) {
            clearTimeout(this.timeout);
        }
    }

    componentDidMount() {
        if (!this.props.message.sticky) {
            this.timeout = setTimeout(() => {
                this.onClose(null);
            }, this.props.message.life || 3000);
        }
    }

    onClose() {
        if (this.timeout) {
            clearTimeout(this.timeout);
        }
    }

    onClick(event) {
        if (this.props.onClick) {
            this.props.onClick(this.props.message);
        }
    }

    render() {
        
    }
}