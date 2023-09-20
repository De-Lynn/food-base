import './Categories.scss'

function Categories() {
    const categories = [
        {id: '1', title: 'Breakfast'},
        {id: '2', title: 'Brunch'},
        {id: '3', title: 'Lunch/Dinner'},
        {id: '4', title: 'Snack'},
        {id: '5', title: 'Teatime'},
    ]

    return (
        <div className="categories">
            <div className="title">Categories</div>
            <div className="categories-carousel">
                {categories.map(el => {
                    return (
                        <div>
                            <img src="" alt="" />
                            <div className="category">{el.title}</div> 
                        </div>
                        
                    )
                })}
            </div>
        </div>
    )
}

export default Categories