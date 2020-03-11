import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const Dropdown = styled.div`
    display: inline-flex;
    position: relative;
    vertical-align: top;
`;

const DropdownMenu = styled.div`
    display: none;
    left: 0;
    min-width: 12rem;
    padding-top: 4px;
    position: absolute;
    top: 100%;
    z-index: 20;

    ${({ isActive }) => {
        if (isActive) {
            return 'display: block;';
        }
    }}
`;

const DropdownContent = styled.div`
    background-color: white;
    border-radius: 4px;
    box-shadow: 0 0.5em 1em -0.125em rgba(10, 10, 10, 0.1), 0 0px 0 1px rgba(10, 10, 10, 0.02);
    padding-bottom: 0.5rem;
    padding-top: 0.5rem;
`;

const DropdownItem = styled.div`
    color: #4a4a4a;
    display: block;
    font-size: 0.875rem;
    line-height: 1.5;
    padding: 0.375rem 1rem;
    position: relative;
`;

const DropdownDivider = styled.div`
    background-color: #ededed;
    border: none;
    display: block;
    height: 1px;
    margin: 0.5rem 0;
`;

const DropdownComponent = (props) => {
    
}

DropdownComponent.propTypes = {
    
}

export default DropdownComponent;
