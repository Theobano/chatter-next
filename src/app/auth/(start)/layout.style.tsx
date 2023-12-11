import styled from "styled-components";

export const AuthLandingLayoutContainer = styled.div`
  height: 100%;
  width: 100%;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  a {
    flex: 1;
    font-size: 1rem;
    text-decoration: none;
    color: var(--text-color);
    display: flex;
    flex-direction: column;
    height: 100%;
    justify-content: space-between;

    .nav-text {
      margin-bottom: 10px;
      margin-right: 30px;
    }

    .indicator {
      width: 100%;
      height: 2px;
      background-color: var(--anchor-indicator-color);
    }

    &.active {
      .indicator {
        background-color: var(--secondary-color);
      }
    }
  }

  .outlet-container {
    flex: 1;
    display: flex;
    flex-direction: column;
    width: 100%;
    /* height: 100%; */
    align-items: center;
    justify-content: center;
    padding: 2.5rem 1.5rem;
    overflow: auto;
  }
`;
