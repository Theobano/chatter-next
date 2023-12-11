import styled from "styled-components";

export const PrivateRouteWrapperContainer = styled.div`
display: flex;
flex-direction: row;
flex: 1;
overflow: hidden;
width: 100%;

/* >div:first-child{
    @media screen {
     @media (max-width: 768px) {
        display: none;
     }
    }
    } */

main{
    flex: 1;
    width: 100%;
    overflow: auto;
}
`