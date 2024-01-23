import Markdown from 'react-markdown'

import { useParams } from 'react-router-dom'
import { useCallback, useEffect, useState } from 'react'
import { api } from '../../lib/axios'
import { MarkdownContainer, PostContainer } from './styles'
import { Issues } from '../../context/IssuesContext'
import { UserIssue } from './components/UserIssue'

export function Post() {
  const { issueNumber } = useParams()
  const [postIssue, setPostIssue] = useState<Issues>({} as Issues)

  const fetchPostIssue = useCallback(async () => {
    const response = await api.get(
      `repos/rocketseat-education/reactjs-github-blog-challenge/issues/${issueNumber}`,
      {},
    )

    setPostIssue(response.data)
  }, [issueNumber])

  useEffect(() => {
    fetchPostIssue()
  }, [fetchPostIssue])

  return (
    <PostContainer>
      <UserIssue issue={postIssue} />
      <MarkdownContainer>
        <Markdown>{postIssue.body}</Markdown>
      </MarkdownContainer>
    </PostContainer>
  )
}
