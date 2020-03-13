import React, { useState } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const Dropdown = styled.div`
    display: inline-flex;
    position: relative;
    vertical-align: top;
    margin: 0.5em;
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

const DropdownTrigger = styled.div`
    border-color: #dbdbdb;
    border-width: 1px;
    color: #363636;
    cursor: pointer;
    justify-content: center;
    padding-bottom: calc(.5em - 1px);
    padding-left: 1em;
    padding-right: 1em;
    padding-top: calc(.5em - 1px);
    text-align: center;
    background-color: white;
    border-radius: 4px;
`;

const DropdownContent = styled.div`
    background-color: white;
    border-radius: 4px;
    box-shadow: 0 0.5em 1em -0.125em rgba(10, 10, 10, 0.1), 0 0px 0 1px rgba(10, 10, 10, 0.02);
    /* padding-bottom: 0.5rem;
    padding-top: 0.5rem; */
`;

const DropdownItem = styled.a`
    color: #4a4a4a;
    display: block;
    font-size: 0.875rem;
    line-height: 1.5;
    padding: 0.375rem 1rem;
    position: relative;

    &:hover {
        background-color: #1EA7FD;
        color: white;
    }
`;

const DropdownComponent = ({ name, contents, trigger }) => {
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
            <DropdownTrigger>
                {name}
            </DropdownTrigger>
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
