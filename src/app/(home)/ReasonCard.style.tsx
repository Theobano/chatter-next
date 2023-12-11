import styled from "styled-components";

export const ReasonCardContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 1.125em .9375rem;
    gap: .75rem;
    border-radius: .5rem;
    border: 1px solid var(--black100);

    .icon{
        width: 5.75rem;
        height: 5.5rem;
        border-radius: 50%;
        background-color: var(--icon-background-color);
        display: flex;
        align-items: center;
        justify-content: center;
    }

    h3{
        margin: 0;
        font-size: 1.5rem;
        font-weight: 500;
        line-height: 1.25rem;
    }

    p{
        margin: 0;
        font-weight: 400;
        color: var(--black400);
    }


`