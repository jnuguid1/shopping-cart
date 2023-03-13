import React from 'react';

const CategoryList = (props) => {
  return (
    <ul className='store-categories'>
      {props.categories.map(category => {
        return (
          <li 
            key={category.id}
            id={category.id}
            onClick={props.onCategoryChange}  
          >
            {category.name}
          </li>
        )
      })}
    </ul>
  )
};

export default CategoryList;