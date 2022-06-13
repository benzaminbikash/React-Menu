import React, { useState } from 'react'
import "./App.css"
import data from "./data"
import Menu from "./Menu"
import Category from './Category'
const Allcategories = ["all", ...new Set(data.map((items) => items.category))]


const App = () => {
    const [values, setValues] = useState(data)
    const [categories, setCategories] = useState(Allcategories)

    const filterItems = (category) => {
        if (category === "all") {
            setValues(data)
            return
        }
        const newItems = data.filter((items) => items.category === category)
        setValues(newItems)
    }
    return (
        <div className='conatiner'>
            <div className='main'>
                <h2 className='ourmenu'>Our Menu</h2>
                <div className='underline'></div>
                <Category filterItems={filterItems} category={categories} />
                <Menu values={values} />

            </div>
        </div>
    )
}

export default App