import { useEffect } from 'react'
import Categories from './components/Categories'
import Hero from './components/Hero'
import SearchForm from './components/searchForm'
import { useDispatch } from 'react-redux'
import { getRocketsAction } from './services/reducers/rockets/getRocketsReducer'

function App() {
  const dispatch = useDispatch<any>()

  useEffect(() => {
    dispatch(getRocketsAction())
  }, [])

  return (
    <>
      <Hero />
      <SearchForm />
      <Categories/>
    </>
  )
}

export default App
