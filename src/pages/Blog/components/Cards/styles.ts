import styled from 'styled-components'

export const CardsContainer = styled.div`
  width: 100%;
  max-width: 864px;
  margin: 0 auto;

  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 2rem;
`

export const CardContent = styled.div`
  a {
    background: ${(props) => props.theme['base-post']};
    padding: 2rem;
    border-radius: 10px;
    cursor: pointer;
    height: 100%;
    border: 2px solid ${(props) => props.theme['base-post']};

    display: flex;
    flex-direction: column;
    gap: 1.25rem;

    text-decoration: none;

    span {
      display: block;
      width: 100%;
      font-size: 1rem;
      color: ${(props) => props.theme['base-text']};
      overflow: ellipsis;
      line-height: 1.6;

      max-height: 4.5rem;
      max-width: 21rem;
      overflow: hidden;
      text-overflow: ellipsis;
    }
  }

  a:hover {
    border: 2px solid ${(props) => props.theme['base-label']};
  }
`

export const CardHeader = styled.header`
  display: flex;
  align-items: start;
  justify-content: space-between;

  h2 {
    color: ${(props) => props.theme['base-title']};
    font-size: 1.25rem;
    font-weight: 700;
    line-height: 1.6;
  }

  small {
    color: ${(props) => props.theme['base-span']};
    font-size: 0.75rem;
    white-space: nowrap;
    line-height: 2.1;
  }
`
