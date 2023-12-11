import styled from "styled-components";

export const RegisterContainer = styled.div`
width: 100%;

h2 {
    text-align: center;
}

display: flex;
flex-direction: column;
gap: 1.5rem;
/* overflow: auto; */

form {
    display: flex;
    flex-direction: column;
    gap: 1.5rem;

    .name-container {
        display: flex;
        gap: .75rem;
        width: 100%;

        >*{flex: 1;}
    }

    .invalid{
        border-color: red;
    }

    .submit-button{
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
    }
}

.google-auth-button{
    display: flex;
    width: 100%;
    align-items: center;
    justify-content: center;
    gap: 1rem;
    cursor: pointer;
    transition: all 0.1s ease-in-out;

    background-color: var(--white-100);
    border: 1px solid var(--black-100);
    color: var(--black-700);

    &:hover{
        background-color: var(--primary-color);
        border: 1px solid var(--secondary-color);
        color: var(--secondary-color);
    }

    &:active{
        background-color: var(--primary-color);
        box-shadow: 0 0 0 2px var(--secondary-color);
    }
}

`;