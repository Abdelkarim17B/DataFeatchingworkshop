import React, { useEffect, useState } from 'react'
import Card from './Card'

function DataFetching() {
  const endpoint = import.meta.env.VITE_API_ENDPOINT;
  const [data, setData] = useState(null)

  useEffect(()=>{const fetchData = async () =>{
            try {
                const Response = await fetch(endpoint)
                if(!Response.ok){
                  throw new Error('Failed to fetch')
                }
                const jsonData = await Response.json();
                setData(jsonData)
            } catch(error){
                console.error("Error in DataFetching", error)
            }
        }
        fetchData()
    }, [])

  return (
    <div>
      {
        data ? (
        <div style={{display: 'flex', gap: 16, flexWrap: 'wrap'}}>
          {
            data.map(item=>(
              <Card key={item.id} id={item.id} title={item?.title} body={item?.body}/>  
            ))
          }
        </div>
        ) : (<p>Loading...</p>)
      }

    </div>
  )
}

export default DataFetching