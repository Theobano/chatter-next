import styled from "styled-components";

export const NavBarContainer = styled.div`
  padding: 1rem 3rem;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  gap: 0.5rem;

  * {
    text-decoration: none;
  }

  .logo {
    font-size: 2.5rem;
    font-weight: bold;
    color: var(--secondary-color);
    font-weight: 500;
  }

  .nav-inpage {
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 1.2rem;
    gap: 1.5rem;

    * {
      color: var(--black700);
      font-weight: 700;
    }
  }

  .nav-auth {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 1rem;

    > * {
      padding: 0.5em 1rem;
      font-size: 1.125rem;
      font-weight: 700;
      border-radius: 5px;
    }

    > *:first-child {
      background-color: var(--primary-color);
      border: 1px solid var(--secondary-color);
      color: var(--primary-text-color);
    }

    > *:last-child {
      background-color: var(--secondary-color);
      color: var(--primary-color);
    }
  }
`;
