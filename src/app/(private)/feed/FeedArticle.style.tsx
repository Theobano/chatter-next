import styled from "styled-components";

export const FeedArticleContainer = styled.div`
    display: flex;
    flex-direction: column;
    >a{
        padding: 1.5rem;
        text-decoration: none;


    .feed-article-header{
        display: flex;
        flex-direction: row;
        gap: 1rem;

        .feed-article-author{
            display: flex;
            flex-direction: row;
            gap: 1rem;
            align-items: center;

            img{
                width: 6rem;
                height: 6rem;
                border-radius: 50%;
            }

            .feed-article-author-info{
                display: flex;
                flex-direction: column;
                gap: 0.5rem;

                h3{
                    margin: 0;
                }

                p{
                    margin: 0;
                    color: var(--black-400);

                }
            }
            
        }
        
        .feed-article-date{
            display: flex;
            align-items: flex-end;
            flex: 1;
            color: var(--black-400);
        }
    }

    .feed-article-title{
    }

    .feed-article-read-time{
        display: flex;
        align-items: center;
        gap: 0.5rem;
        color: var(--black-400);
    }

    .feed-article-short-text{
        margin-top: 1.5rem;
        color: var(--black-400);
    }

    .feed-article-featured-image{
        margin-top: 1.5rem;
        img{
            width: 100%;
            border-radius: 5px;
        }

    }

    .feed-article-footer{
        margin-top: 1.5rem;
        display: flex;
        flex-direction: row;
        gap: 1rem;
        align-items: center;
        justify-content: space-between;
        color: var(--black-400);

        >div{
            display: flex;
            flex-direction: row;
            gap: 1rem;
            align-items: center;
            justify-content: center;

            span{
                font-size: 1rem;
                line-height: 1rem;
            }
        }
    }
}
`