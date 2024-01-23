import { formatDistanceToNow } from 'date-fns'
import { ptBR } from 'date-fns/locale'

export function publishedDateRelativeToNow(date: string) {
  const publishedDate = new Date(date)
  return formatDistanceToNow(publishedDate, {
    locale: ptBR,
    addSuffix: true,
  })
}
