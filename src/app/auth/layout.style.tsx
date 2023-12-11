import styled from "styled-components";
import authBackground from "./auth-background-image.svg";

export const AuthLayoutContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex: 1;
  gap: 2.25rem;
  overflow: hidden;

  > * {
    flex: 1;
  }

  .aside {
    background-image: url(${authBackground.src});
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    color: var(--primary-color);
    display: flex;

    @media screen and (max-width: 768px) {
      display: none;
    }

    h1 {
      color: var(--primary-color);
      padding: 0;
      margin: 0;
    }

    .overlay {
      background-color: rgba(0, 0, 0, 0.5);
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      padding: 36px;
      gap: 24px;
      width: 100%;
    }
  }

  .content {
    padding: 1.875rem;
    overflow: hidden;

    .nav {
      display: flex;
      flex-direction: row;
      width: 100%;

      >*{
        flex: 1;
      }

    }
  }
`;
