import styled from "styled-components";

export const FeedContainer = styled.div`
flex: 1;
margin: 1.88rem 1.5em;
border: 1px solid var(--black-100);
padding: 1.5rem 5rem;
/* min-height: 100%; */
display: flex;
flex-direction: column;
gap: 1.5rem;

.heading{
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 1rem;
    justify-content: space-between;

    >a{
        text-decoration: none;
        display: flex;
        align-items: center;
        gap: 0.5rem;
        background-color: var(--secondary-color);
        padding: 0.5rem 1rem;
        border-radius: 5px;
        font-size: 1rem;
        line-height: 1rem;
        font-weight: 700;
        color: var(--primary-color);

    }
}

.feeds{
    flex: 1;
    display: flex;
    flex-direction: column;
    .feed-tabs{
        display: flex;
        justify-content: space-between;
        gap: 1.5rem;
        padding: 0 1rem;
        border: 1px solid var(--black-100);
        border-radius: 0.5rem;

        a{
            text-decoration: none;
            font-size: 1.2rem;
            font-weight: 500;
            line-height: 1.5rem;
            color: var(--black-700);
            padding: 1rem 0;
            text-align: center;

            &.active{
                border-bottom: 5px solid var(--secondary-color);
            }
            
        }
    }

    .feeds-container{
        flex: 1;
        border: 1px solid var(--black-100);
        border-radius: 5px;

        >div:not(:last-child){
            border-bottom: 1px solid var(--black-100);
        }

    }
}

`