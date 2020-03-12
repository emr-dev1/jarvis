import React, { useState } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const Dropdown = styled.div`
    display: inline-flex;
    position: relative;
    vertical-align: top;
`;

const DropdownMenu = styled.a`
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

const DropdownItem = styled.a`
    color: #4a4a4a;
    display: block;
    font-size: 0.875rem;
    line-height: 1.5;
    padding: 0.375rem 1rem;
    position: relative;
`;

const DropdownComponent = ({ name, contents }) => {
    const [open, setOpen] = useState(false);

    const handleClick = () => {
        setOpen(!open);
    };

    const renderDropdownContent = () => (
        contents.map((content) => (
            <DropdownItem key={content}>
                {content}
            </DropdownItem>
        ))
    );

    return (
        <Dropdown onClick={handleClick}>
            <span>{name}</span>
            <DropdownMenu isActive={open}>
                {contents && (
                    <DropdownContent>
                        { renderDropdownContent() }
                    </DropdownContent>
                )}
            </DropdownMenu>
        </Dropdown>
    );
};

DropdownComponent.propTypes = {
    name: PropTypes.string,
    contents: PropTypes.array,
};

export default DropdownComponent;
