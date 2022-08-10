import { useParams } from 'react-router-dom'

export const Movie = () => {
  const { id } = useParams()
  return (
    <>{`filme de id: ${id}`}</>)
}
