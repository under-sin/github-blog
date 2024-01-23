import { styled } from 'styled-components'

export const PostContainer = styled.div`
  width: 100%;
  max-width: 864px;
  margin: 0 auto;
`

export const MarkdownContainer = styled.div`
  padding: 0 2.25rem 2rem;

  h1,
  h2 {
    color: ${(props) => props.theme['base-title']};
  }

  h3,
  h4,
  h5 {
    color: ${(props) => props.theme['base-subtitle']};
  }

  ul {
    padding-left: 1.5rem;
    padding-bottom: 1.5rem;
    color: ${(props) => props.theme['base-text']};

    display: flex;
    flex-direction: column;
    gap: 0.75rem;
  }

  p {
    margin-bottom: 1.5rem;

    color: ${(props) => props.theme['base-text']};
    font-size: 1rem;
    line-height: 1.6;

    a {
      color: ${(props) => props.theme.blue};
    }

    img {
      max-width: calc(864px - 4rem);
    }
  }
`
