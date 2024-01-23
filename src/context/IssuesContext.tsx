import {
  ReactNode,
  createContext,
  useCallback,
  useEffect,
  useState,
} from 'react'
import { api } from '../lib/axios'

export interface Issues {
  html_url: string
  number: number
  title: string
  user: {
    login: string
  }
  comments: number
  body: string
  created_at: string
}

interface IssueContextType {
  issues: Issues[]
  fetchIssues: (query?: string) => Promise<void>
}

interface IssueProviderProps {
  children: ReactNode
}

export const IssuesContext = createContext({} as IssueContextType)

export function IssueProvider({ children }: IssueProviderProps) {
  const [issues, setIssues] = useState<Issues[]>([])

  const fetchIssues = useCallback(async (query?: string) => {
    const baseQuery = 'repo:rocketseat-education/reactjs-github-blog-challenge'

    const queryParams = query ? `${baseQuery} ${query}` : baseQuery

    const response = await api.get('search/issues', {
      params: {
        q: queryParams,
      },
    })

    setIssues(response.data.items)
  }, [])

  useEffect(() => {
    fetchIssues()
  }, [fetchIssues])

  return (
    <IssuesContext.Provider value={{ issues, fetchIssues }}>
      {children}
    </IssuesContext.Provider>
  )
}
