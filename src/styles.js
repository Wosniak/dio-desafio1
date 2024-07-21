import styled from 'styled-components';

export const Container = styled.div`
    width: 100%;
    background-color: #cacaca;
    height: 100vh;

    display: flex;
    align-items: center;
    justify-content: center;
`;

export const Content = styled.div`
    background-color: #fff;
    width: 50%;
    min-height: 350px;
`;

export const Row = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
`;

export const Column = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
`;
