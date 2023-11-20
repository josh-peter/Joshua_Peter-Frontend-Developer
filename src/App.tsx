/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useState } from 'react'
import Categories from './components/Categories'
import Hero from './components/Hero'
import SearchForm from './components/searchForm'
import { useDispatch, useSelector } from 'react-redux'
import { getRocketsAction } from './services/reducers/rockets/getRocketsReducer'

function App() {
  const dispatch = useDispatch<any>()
  const { rockets } = useSelector((state:any) => state.rockets);
  const [allRockets, setAllRockets] = useState(rockets)

  const searchHandler = (name:string, value:string) => {
    setAllRockets(rockets)
    console.log(value, "THE VALUE HEHEHEHEHEHE")
    console.log(allRockets, "IN HEREEEE")
    if (name === 'rocketName' && value !== ""){
      const filteredRes = allRockets?.filter((rocket: any) => rocket.name.toLowerCase().includes(value.toLowerCase()) ||  rocket.country.toLowerCase().includes(value.toLowerCase()));
      console.log(filteredRes, "THE FILTEREEEE")
      setAllRockets(filteredRes)
      return
    }
  }

  useEffect(() => {
    dispatch(getRocketsAction())
  }, [dispatch])

  return (
    <>
      <Hero />
      <SearchForm setSearch={searchHandler} />
      <Categories rockets={allRockets}/>
    </>
  )
}

export default App
