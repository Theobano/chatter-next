import styled from "styled-components";
import headerBackground from "./header-background-image.svg";

export const HomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  overflow: auto;
  width: 100%;

  h1 {
    margin: 0;
  }
  

  .styled-button {
    margin-top: 0.75rem;
    text-decoration: none;
    background-color: var(--secondary-color);
    color: var(--primary-color);
    padding: 0.9em 1.75rem;
    border-radius: 5px;
  }

  header {
    background-image: url(${headerBackground.src});
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    color: var(--primary-color);
    display: flex;
    height: 100vh;
    width: 100%;
    margin: 0;
    padding: 0;
    box-sizing: border-box;

    .overlay {
      background-color: rgba(0, 0, 0, 0.5);
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      gap: 24px;
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: center;

      > div {
        padding: 25%;
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        justify-content: center;
        gap: 1.5rem;

        > h1 {
          color: var(--primary-color);
          margin: 0;
        }
        > p {
          font-size: 1.5rem;
          line-height: 1.5rem;
          margin: 0;
        }
      }
    }
  }

  main {
    display: flex;
    flex-direction: column;
    flex: 1;

    .about {
      display: flex;
      flex-direction: column;
      padding: 6em 0;
      .about-chatter {
        padding: 0 4.5rem;

        display: flex;
        flex-direction: row;
        /* grid-template-columns: 3fr 2fr; */
        gap: 5.25rem;

        @media screen {
          @media (max-width: 768px) {
            flex-wrap: wrap;
            padding: 2.5em 3rem;
            gap: 2.25rem;

            /* flex-direction: column; */
          }
        }

        > div {
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
          > h2 {
            margin: 0;
          }
          > p {
            margin: 0;
          }

          :first-child {
            flex: 1;
            min-width: 50%;
          }

          :last-child {
            display: flex;
            align-items: center;
            justify-content: center;
            @media screen {
              @media (max-width: 768px) {
                width: 100%;
              }
            }
            img {
              width: 100%;
            }
          }
        }
      }
    }

    .why-chatter {
      padding: 0 12.5rem;
      display: flex;
      flex-direction: column;
      gap: 3.375rem;
      padding-bottom: 6.6875rem;

      @media screen {
        @media (max-width: 768px) {
          padding: 0 3rem;
        }
      }

      .reasons {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        gap: 3rem;

        @media screen {
          @media (max-width: 768px) {
            grid-template-columns: 1fr;
            gap: 3rem;
          }
        }
      }
    }

    .join-chatter {
      display: flex;
      flex-direction: row;
      gap: 1.625rem;
      padding: 3.25rem;
      background-color: var(--background-color1);

      @media screen {
        @media (max-width: 768px) {
          flex-direction: column;
          padding: 2.5em 3rem;
        }
      }

      > div {
        display: flex;
        justify-content: center;

        &:first-child {
          padding: 2rem;
          align-items: center;

          img {
            border-radius: 50%;
          }
        }

        &:last-child {
          flex: 1;
          flex-direction: column;
          align-items: flex-start;

          em {
            font-style: normal;
            font-weight: 500;
            font-size: 1.125rem;
          }
        }
      }
    }

    .get-started {
      display: flex;
      flex-direction: row;
      gap: 7.5rem;
      padding: 6em 9.75rem;

      @media screen {
        @media (max-width: 768px) {
          flex-direction: column;
          padding: 2.5em 3rem;
        }
      }

      > div {
        display: flex;
        justify-content: center;

        &:first-child {
          flex-direction: row;
          gap: 1.3125rem;

          img {
            border-radius: 50%;
          }

          > div {
            display: flex;
            align-items: center;
            justify-content: center;

            &:first-child {
              flex-direction: column;
              gap: 5.6875rem;
            }
          }
        }

        &:last-child {
          flex: 1;
          flex-direction: column;
          align-items: flex-start;
        }
      }
    }
  }
  footer,
  .footer {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: flex-start;
    padding: 3.753em 5rem;
    background-color: var(--background-color1);

    @media screen {
      @media (max-width: 768px) {
        flex-direction: column;
        padding: 2.5em 3rem;
      }
    }

    * {
      text-decoration: none;
    }

    .logo {
      font-size: 2.5rem;
      color: var(--secondary-color);
      font-weight: 500;
    }

    > div {
      :first-child {
        padding: 2em 0;
      }
    }
  }
`;
