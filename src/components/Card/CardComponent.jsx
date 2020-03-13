import React from 'react';
import styled from 'styled-components';

const Card = styled.div`
    background-color: white;
    border-radius: 3px;
    box-shadow: 0.5em 0.8em 1em -0.1em rgba(10, 10, 10, 0.1), 0 0px 0 1px rgba(10, 10, 10, 0.02);
    color: #4a4a4a;
    display: block;
    padding: 1.25rem;
    margin: 1em;

    ${({ isActive }) => {
        if (isActive) {
            return `
                &:active {
                    box-shadow: inset 0 1px 2px rgba(10, 10, 10, 0.2), 0 0 0 1px #3273dc;
                }
            `;
        }
    }}

`;

const CardHeader = styled.div`

`;

const CardComponent = ({ children, width }) => {
    return (
        <Card width={width}>
            {children}
        </Card>
    );
};

export default CardComponent;
