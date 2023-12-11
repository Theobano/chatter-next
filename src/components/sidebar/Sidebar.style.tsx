import styled from "styled-components";

export const SidebarContainer = styled.div`
  height: 100%;
  max-width: 30%;
  display: flex;
  flex-direction: column;
  padding: 1rem;
  padding-left: 4.5rem;
  border-right: 1px solid var(--black100);
  overflow: auto;

  .close-button {
    display: none;
  }

  @media screen and (max-width: 768px) {
    background-color: var(--primary-color);
    position: absolute;
    max-width: none;
    transition: 0.3s ease-in-out;
    left: -100%;

    &.open {
      left: 0%;
    }

    .close-button {
      display: flex;
      align-items: center;
      justify-content: center;
      background: none;
      border: none;
      cursor: pointer;
      padding: 0;
      margin: 1rem;
      position: absolute;
      top: 1rem;
      right: 1rem;
      z-index: 1;

      div {
        width: 1.5rem;
        height: 0.125rem;
        background-color: var(--logout-text-color);

        &:first-child {
          transform: translateX(50%) rotate(45deg);
        }

        &:last-child {
          transform: translateX(-50%) rotate(-45deg);
        }
      }
    }
  }

  .logo {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    margin-bottom: 1rem;
    a {
      font-size: 1.5rem;
      font-weight: 700;
      text-decoration: none;
      color: var(--secondary-color);
    }
  }

  .links {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    flex: 1;
    overflow: auto;

    section {
      display: flex;
      flex-direction: column;

      h4 {
        display: flex;
        flex-direction: row;
        flex-wrap: nowrap;
        gap: 1rem;
        align-items: center;

        span {
          display: flex;
          align-items: center;
        }
      }

      > div {
        display: flex;
        flex-direction: column;
        gap: 1rem;
        padding: 0.5em 0.5rem;

        a {
          display: flex;
          align-items: center;
          gap: 1rem;
          padding-left: 1rem;
          color: var(--text-color);
          text-decoration: none;

          .img {
            fill: var(--secondary-color);
          }

          &.active {
            color: var(--secondary-color);
          }
        }
      }
    }

    .logout {
      background: none;
      border: none;
        cursor: pointer;
      > h4 {
        color: var(--logout-text-color);
        margin: 0;
      }
    }
  }
`;
