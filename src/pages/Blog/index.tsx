import { Profile } from '../../components/Profile'
import { Cards } from './components/Cards'
import { SearcgIssues } from './components/SearchIssues'
import { BlogContainer } from './styles'

export function Blog() {
  return (
    <BlogContainer>
      <div>
        <Profile />
        <SearcgIssues />
        <Cards />
      </div>
    </BlogContainer>
  )
}
