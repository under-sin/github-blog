import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faArrowUpRightFromSquare,
  faComment,
  faCalendarDay,
  faChevronLeft,
} from '@fortawesome/free-solid-svg-icons'
import {
  UserIssueAddicionalInfos,
  UserIssueContainer,
  UserIssueControls,
  UserIssueInfoContent,
} from './styles'
import { Issues } from '../../../../context/IssuesContext'
import { publishedDateRelativeToNow } from '../../../../utils/formatter'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { NavLink } from 'react-router-dom'

interface UserIssueProps {
  issue: Issues
}

export function UserIssue({ issue }: UserIssueProps) {
  console.log(issue.len)

  return (
    <UserIssueContainer>
      <UserIssueInfoContent>
        <UserIssueControls>
          <NavLink to={'/'}>
            <FontAwesomeIcon icon={faChevronLeft} />
            VOLTAR
          </NavLink>
          <a href={issue.html_url} target="_blank" rel="noreferrer">
            VER NO GITHUB <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
          </a>
        </UserIssueControls>
        <h1>{issue.title}</h1>
        <UserIssueAddicionalInfos>
          <span>
            <FontAwesomeIcon icon={faGithub} /> {issue.user.login}
          </span>
          <span>
            <FontAwesomeIcon icon={faCalendarDay} />
            {publishedDateRelativeToNow(issue.created_at)}
          </span>
          <span>
            <FontAwesomeIcon icon={faComment} />
            {issue.comments} comentários
          </span>
        </UserIssueAddicionalInfos>
      </UserIssueInfoContent>
    </UserIssueContainer>
  )
}
