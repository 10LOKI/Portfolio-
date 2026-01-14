import styled from "styled-components";

export const Container = styled.section`
  margin-top: 10rem;
  padding: 4rem 10rem;

  h2 {
    text-align: center;
    font-size: 4rem;
    margin-bottom: 4rem;
  }

  .education-items {
    display: flex;
    flex-direction: column;
    gap: 3rem;
    max-width: 900px;
    margin: 0 auto;
  }

  .education-item {
    display: flex;
    align-items: center;
    gap: 2rem;
    background: rgba(255, 255, 255, 0.05);
    padding: 2.5rem;
    border-radius: 1.5rem;
    border: 2px solid var(--green);
    transition: transform 0.3s, box-shadow 0.3s;

    &:hover {
      transform: translateY(-5px);
      box-shadow: 0 10px 30px rgba(35, 206, 107, 0.3);
    }
  }

  .education-icon {
    font-size: 4rem;
    min-width: 80px;
    text-align: center;
  }

  .education-content {
    flex: 1;

    h3 {
      color: var(--green);
      font-size: 1.8rem;
      margin-bottom: 0.8rem;
    }

    .institution {
      font-size: 1.4rem;
      color: #ccc;
    }
  }

  @media (max-width: 960px) {
    padding: 4rem 3rem;

    h2 {
      font-size: 3rem;
    }

    .education-item {
      flex-direction: column;
      text-align: center;
    }

    .education-icon {
      font-size: 3rem;
    }
  }

  @media (max-width: 600px) {
    padding: 4rem 2rem;

    h2 {
      font-size: 2.5rem;
    }
  }
`;
