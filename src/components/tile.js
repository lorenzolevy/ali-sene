import styled from "styled-components"

const Tile = styled.div`
    background: transparent;
    border: none;
    padding: 0;
    margin: 0;
    > div {
        border-radius: .3rem;
    }
    > div > div {
        padding-bottom: 100%!important;
    }
`;

export default Tile