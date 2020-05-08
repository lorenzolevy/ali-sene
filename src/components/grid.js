import styled from "styled-components";

const Grid = styled.div`
    @media (max-width: 980px) and (min-width: 580px) {
        grid-template-columns: repeat(2, 1fr);

    }
    @media (min-width: 980px) {
        grid-template-columns: repeat(3, 300px);  
    }
    display: grid;
    grid-gap: .6rem;  
`;

export default Grid;

