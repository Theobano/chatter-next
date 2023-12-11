import styled from "styled-components";

export const VerifyEmailContainer = styled.div`
flex: 1;
height: 100%;
display: flex;
flex-direction: column;
/* gap: 1.5rem; */
align-items: center;
justify-content: center;

h2 {
    text-align: center;
}

p{
    font-size: 1rem;
    font-weight: 400;
    color: var(--black-400);
}

button{
    width: 100%;
    cursor: pointer;
    transition: all 0.1s ease-in-out;

    &:hover{
        background-color: var(--primary-color);
        border: 1px solid var(--secondary-color);
        color: var(--secondary-color);
    }

    &:active{
        background-color: var(--primary-color);
        box-shadow: 0 0 0 2px var(--secondary-color);
    }

    &:disabled{
        background-color: var(--primary-color);
        border: 1px solid var(--black-100);
        color: var(--black-100);
        cursor: not-allowed;
    }
}

a{
    color: var(--secondary-color);
    text-decoration: none;
    font-weight: 500;
}
`