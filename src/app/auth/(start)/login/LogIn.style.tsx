import styled from "styled-components";

export const LoginPageContainer = styled.div`
  width: 100%;

  h2 {
    text-align: center;
  }

  form {
    display: flex;
    flex-direction: column;
    gap: 1.5rem;

    button[type="submit"] {
      cursor: pointer;
      transition: all 0.1s ease-in-out;

      &:hover {
        background-color: var(--primary-color);
        border: 1px solid var(--secondary-color);
        color: var(--secondary-color);
      }

      &:active {
        background-color: var(--primary-color);
        box-shadow: 0 0 0 2px var(--secondary-color);
      }

      &:disabled {
        background-color: var(--primary-color);

        border: 1px solid var(--black-100);
        color: var(--black-100);
        cursor: not-allowed;
      }
    }
  }

  .google-login-button {
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

    &:hover {
      background-color: var(--primary-color);
      border: 1px solid var(--secondary-color);
      color: var(--secondary-color);
    }

    &:active {
      background-color: var(--primary-color);
      box-shadow: 0 0 0 2px var(--secondary-color);
    }
  }
`;
