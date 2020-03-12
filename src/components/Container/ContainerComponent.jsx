import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
    flex-grow: 1;
    margin: 0 auto;
    position: relative;
    width: auto;
`;

const ContainerFluid = styled.div`
    max-width: none;
    padding-left: 32px;
    padding-right: 32px;
    width: 100%;
`;

const ContainerComponent = ({ fluid, children }) => {
    if (fluid) {
        return (
            <ContainerFluid>
                {children}
            </ContainerFluid>
        );
    };

    return (
        <Container>
            {children}
        </Container>
    );
};

export default ContainerComponent;
