import styled from 'styled-components'

export const SearchIssuesContainer = styled.div`
  width: 100%;
  max-width: 864px;
  margin: 4.5rem auto 3rem;

  display: flex;
  flex-direction: column;

  div {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 0.75rem;

    strong {
      font-size: 1.125rem;
      font-weight: 700;
      line-height: 1.6;
      color: ${(props) => props.theme['base-subtitle']};
    }

    span {
      font-size: 0.875rem;
      color: ${(props) => props.theme['base-span']};
      line-height: 1.6;
    }
  }

  input {
    display: flex;
    flex: 1;
    background: ${(props) => props.theme['base-input']};
    border-radius: 6px;
    border: 2px solid ${(props) => props.theme['base-border']};
    padding: 1rem 0.75rem;

    color: ${(props) => props.theme['base-text']};
    font-size: 1rem;
  }

  input::placeholder {
    color: ${(props) => props.theme['base-label']};
  }

  input:focus {
    outline: 0;
    box-shadow: none;
    border: 2px solid ${(props) => props.theme.blue};
  }
`
