import { useContext } from 'react'
import { SearchIssuesContainer } from './styles'
import { IssuesContext } from '../../../../context/IssuesContext'
import * as z from 'zod'
import { Controller, useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'

const searchIssueSchema = z.object({
  query: z.string(),
})

type SearchIssueType = z.infer<typeof searchIssueSchema>

export function SearcgIssues() {
  const { issues, fetchIssues } = useContext(IssuesContext)

  const { control, setValue } = useForm<SearchIssueType>({
    resolver: zodResolver(searchIssueSchema),
  })

  async function HandleInputChange(e: React.ChangeEvent<HTMLInputElement>) {
    const inputValue = e.target.value
    setValue('query', inputValue)

    await fetchIssues(inputValue)
  }

  const totalPublishedIssues = issues.length

  return (
    <SearchIssuesContainer>
      <div>
        <strong>Publicações</strong>
        <span>{totalPublishedIssues} publicações</span>
      </div>

      <Controller
        name="query"
        control={control}
        defaultValue=""
        render={({ field }) => (
          <input
            type="text"
            placeholder="Buscar conteúdos"
            {...field}
            onChange={HandleInputChange}
          />
        )}
      />
    </SearchIssuesContainer>
  )
}
