import { useEffect, useState } from 'react'
import PrintUser from './PrintUser'
import Loading from './Loading'
import './second.css'




function Second() {

  const [user, setUser] = useState()
  const [isLoaded, setIsLoaded] = useState(false)

  //Info uzkrovimas is API
  const fetchData = async () => {
    const resp = await fetch('https://api.github.com/users/njonusiene')
    const data = await resp.json()
    setUser(data)
  }
 
  useEffect(() =>{
    fetchData()
  }, [])

  //uzskrovimo animacija
  useEffect (() => {
    setTimeout(() => {
      setIsLoaded(true)
    }, 1000)
  }, [user])

  return (
    <>
  
    <div className="card">
    {isLoaded && user ? 
        <PrintUser user={user} fetchData={fetchData} />
       : <Loading/>
      }
    </div>
    </>
  )
}

export default Second
