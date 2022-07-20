import '../directory/directory.style.scss'
import CategoryItem from '../category-item/category-item.component'
const directoryItem = ({categories}) => {
  return (
    <div className="categories-container">
      {
        categories.map((category)=>{
          return (<CategoryItem key={category.id} category={category}/>)
        })
      }
    </div>
  )
}

export default directoryItem