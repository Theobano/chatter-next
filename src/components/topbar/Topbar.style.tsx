import styled from "styled-components";

export const TopbarContainer = styled.div`
    width: 100%;
    height: 4.125rem;
    padding: 1rem;
    padding-left: 20%;
    padding-right: 20%;
    border: 1px solid var(--black-100);
    display: flex;
    align-items: center;
    justify-content: space-between;
    align-items: center;
    gap: 1rem;

    .sandwich-button{
        display: none;

        @media screen and (max-width: 768px){
            display: flex;
            flex-direction: column;
            gap: 0.5rem;
            align-items: flex-start;
            justify-content: center;
            background: none;
            border: none;
            cursor: pointer;
            padding: 0;

            div{
                width: 1.5rem;
                height: 0.125rem;
                background-color: var(--secondary-color);
            }

            div:nth-child(2){
                width: 1rem;
            }
        }
    }

    .search-bar{
        display: flex;
        flex-wrap: nowrap;
        align-items: center;
        gap: 1.5rem;
        flex: 1;
        border: 1px solid var(--black-100);
        border-radius: 0.25rem;
        padding: 0.5rem 0rem 0.5rem 1rem;


        .search-button{
            display: flex;
            align-items: center;
            justify-content: center;
            background: none;
            border: none;
            cursor: pointer;
            padding: 0;

        }

        input{
            flex: 1;
            height: 100%;
            border: none;
            border-radius: 0.25rem;
            padding: 0;
            font-size: 1rem;

            &:focus{
                outline: none;
            }
        }
    }

    `;