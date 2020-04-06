import styled from "styled-components"

const Tile = styled.div`
    overflow: hidden;
    cursor: pointer;
    > div {
        border-radius: .3rem;
    }
    > div > div {
        padding-bottom: 100%!important;
    }
    &:hover {
        > div {
            border-radius: .6rem;
        }
    }
`;

export default Tile