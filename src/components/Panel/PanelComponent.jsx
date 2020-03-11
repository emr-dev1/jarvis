import React from 'react';
import styled from 'styled-components';

export const Panel = styled.div`
    border-radius: 6px;
    box-shadow: 0 0.5em 1em -0.125em rgba(10, 10, 10, 0.1), 0 0px 0 1px rgba(10, 10, 10, 0.02);
    font-size: 1rem;
`;

export const PanelHeading = styled.div`
    background-color: #ededed;
    border-radius: 6px 6px 0 0;
    color: #363636;
    font-size: 1.25em;
    font-weight: 700;
    line-height: 1.25;
    padding: 0.75em 1em;
`;

export const PanelBlock = styled.div`
    align-items: center;
    color: #363636;
    display: flex;
    justify-content: flex-start;
    padding: 0.5em 0.75em;
`;

export const PanelTabs = styled.div`
    align-items: flex-end;
    display: flex;
    font-size: 0.875em;
    justify-content: center;

    & a {
        border-bottom: 1px solid #dbdbdb;
        margin-bottom: -1px;
        padding: 0.5em;
    }
`;

const PanelComponent = ({ heading, blocks, tabs }) => {
    const renderBlocks = () => {
        
    }

    return (
        <Panel>
            <PanelHeading>
                {heading}
            </PanelHeading>
        </Panel>
    )
};

export default PanelComponent;
