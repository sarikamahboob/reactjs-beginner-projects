import React, { useEffect, useState } from 'react'
import "./style.css"
import axios from 'axios'

const Meals = () => {
  const [items, setItems] = useState([])
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("https://www.themealdb.com/api/json/v1/1/filter.php?i=chicken_breast")
        setItems(response.data.meals)
      } catch (error) {
        console.error("Error fetching data:", error)
      }
    }
    fetchData()
  }, [])

  const itemList = items?.map(({strMeal,strMealThumb,idMeal}) => {
    return (
      <section className='card'>
        <img src={strMealThumb} alt={strMeal} />
        <section className='content'>
          <p>{strMeal }</p>
          <p>
            #{ idMeal }
          </p>
        </section>
      </section>
    )
  })

  return (
    <div className='items-container'>
      {itemList}
    </div>
  )
}

export default Meals