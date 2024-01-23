import styled from 'styled-components'

export const UserIssueContainer = styled.div`
  background: ${(props) => props.theme['base-profile']};

  width: 100%;
  max-width: 864px;
  margin: 0 auto 4.5rem;
  padding: 2rem;
  border-radius: 10px;
  box-shadow: 0 2px 28px 0 rgba(0, 0, 0, 0.25);

  margin-top: -5.5rem;

  display: flex;
  gap: 2rem;
  align-items: center;

  img {
    width: 10rem;
    height: 10rem;
    border-radius: 8px;
  }

  h1 {
    color: ${(props) => props.theme['base-title']};
    font-size: 1.5rem;
    font-weight: 700;
    line-height: 1.3;

    margin-bottom: 0.5rem;
  }
`

export const UserIssueControls = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 0.5rem;

  a {
    color: ${(props) => props.theme.blue};
    font-size: 0.75rem;
    font-weight: 700;
    text-decoration: none;

    display: flex;
    gap: 0.5rem;
    align-items: center;
    justify-content: center;

    border-top: 2px solid transparent;
    border-bottom: 2px solid transparent;

    margin-bottom: 1.25rem;
  }

  a:hover {
    border-bottom: 2px solid ${(props) => props.theme.blue};
  }
`

export const UserIssueInfoContent = styled.div`
  flex: 1;
  align-items: start;
`

export const UserIssueAddicionalInfos = styled.div`
  display: flex;
  gap: 1.5rem;
  align-items: center;
  justify-content: left;

  span {
    font-size: 1rem;
    color: ${(props) => props.theme['base-subtitle']};

    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;

    svg {
      color: ${(props) => props.theme['base-label']};
    }
  }
`
