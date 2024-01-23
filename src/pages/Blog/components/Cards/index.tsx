import { useContext } from 'react'
import { CardsContainer, CardContent, CardHeader } from './styles'
import { publishedDateRelativeToNow } from '../../../../utils/formatter'
import { IssuesContext } from '../../../../context/IssuesContext'
import { Link } from 'react-router-dom'

export function Cards() {
  const { issues } = useContext(IssuesContext)

  const issuesHasValue = issues.length > 0

  return (
    <CardsContainer>
      {issuesHasValue
        ? issues.map((issue) => {
            return (
              <CardContent key={issue.number}>
                <Link to={`/post/${issue.number}`}>
                  <CardHeader>
                    <h2>{issue.title}</h2>
                    <small>
                      {publishedDateRelativeToNow(issue.created_at)}
                    </small>
                  </CardHeader>

                  <span>{issue.body}</span>
                </Link>
              </CardContent>
            )
          })
        : ''}
    </CardsContainer>
  )
}
