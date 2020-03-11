import React from 'react';
import styled from 'styled-components';

const Tile = styled.div`
    align-items: stretch;
    display: block;
    flex-basis: 0;
    flex-grow: 1;
    flex-shrink: 1;
    min-height: min-content;

    ${({ isAncestor }) => {
        if (isAncestor) {
            return `margin-left: -0.75em; margin-right: -0.75em; margin-top: -0.75em;`;
        }
    }}

    &:last-child {
        margin-bottom: -0.75rem;
    }

    &:not(:last-child) {
        margin-bottom: 0.75rem;
    }

    ${({ isChild }) => {
        if (isChild) {
            return `margin: 0 !important;`;
        }
    }}
    ${({ isParent }) => {
        if (isParent) {
            return `padding: 0.75rem;`;
        }
    }}
    ${({ isVertical }) => {
        if (isVertical) {
            return `flex-direction: column;`;
        }
    }}
`;

const TileComponent = (props) => {
    return (
        <Tile {...props}>
            {props.chilren}
        </Tile>
    );
};

export default TileComponent;
