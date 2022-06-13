import React from 'react'

const Category = ({ filterItems, category }) => {
    return (
        <div className='category'>
            {/* <button onClick={() => filterItems("breakfast")}>BreakFast</button> */}
            {category.map((values) => {
                return (
                    <>
                        <button className='btn' onClick={() => filterItems(values)}>{values}</button>
                    </>
                )
            })}
        </div>
    )
}

export default Category