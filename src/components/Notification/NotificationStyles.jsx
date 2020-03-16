import styled from 'styled-components';

export const Notification = styled.div`
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

export const NotificationItem = styled.div`
	position: relative;
	padding: 0.5em 1em;
	display: flex;
	flex-direction: row;
	align-items: flex-start;
`;
