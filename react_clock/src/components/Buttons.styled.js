import styled from "styled-components";

export const Button = styled.button`
    width: 200px;
    height: 50px;
    // pass background color as props in button component
    background-color: ${(props) => props.backgroundColor};
    display: block;
`;