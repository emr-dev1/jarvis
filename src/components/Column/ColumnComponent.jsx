import React from 'react';
import styled from 'styled-components';

const Column = styled.div`
    display: block;
    flex-basis: 0;
    flex-grow: 0;
    flex-shrink: 0;
    padding: 0.75em;
    width: ${({ width }) => `${width}`};
`;

const ColumnComponent = (props) => {
    let width = props.width;

    if (width < 0) {
        width = 0
    }
    if (width > 12) {
        width = 12;
    }

    width = `${(100 / 12) * width}%`;

    return (
        <Column width={width}>
            {props.children}
        </Column>
    )
};

export default ColumnComponent;
