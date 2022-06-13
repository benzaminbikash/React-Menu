import React from 'react'

const Menu = ({ values }) => {
    return (
        <div className='menu'>
            <div className='mainmenu'>
                {values.map((items) => {
                    return (
                        <>
                            <div className='itemsValue'>
                                <img src={items.img} alt="randomImages" className="photo" />
                            </div>
                            <div className="bikash">
                                <header>
                                    <h4>{items.title}</h4>
                                    <h4 className="price">{items.price}</h4>
                                </header>
                                <p>{items.desc}</p>
                            </div>
                        </>
                    )
                })}
            </div>
        </div>
    )
}

export default Menu