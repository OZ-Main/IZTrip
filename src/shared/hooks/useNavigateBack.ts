import { useNavigate } from 'react-router-dom'

export function useNavigateBack() {
  const navigate = useNavigate()

  return function navigateBack() {
    navigate(-1)
  }
}
