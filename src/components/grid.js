import styled from "styled-components";

const Grid = styled.div`
@media (max-width: 580px) {
    display: grid;
    grid-template-rows: repeat(5, 1fr);
}
@media (max-width: 980px) and (min-width: 580px) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    

}
@media (min-width: 980px) {
    display: grid;
    grid-template-columns: repeat(3, 300px);
        
}
grid-gap: .6rem;  
`;

export default Grid;

