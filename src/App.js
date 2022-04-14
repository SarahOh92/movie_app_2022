import React from 'react';
import PropTypes from 'prop-types'
// function Fruit(props){
//   console.log(props);
//   return (
//     <h1>{props.fav} 맛있어요</h1>
//   )
// }
function Fruit({name, picture, rating}){
  return( 
    <div>
      <h2>{name} 맛있어요</h2>
      <h4>{rating} / 5.0</h4>
      <img src={picture} alt={name} />
    </div>
    )
}
const fruitILike = [
  {
    id:1,
    name: 'banana',
    image:'http://qwerew.cafe24.com/images/banana.png',
    rating: 5
  },
  {
    id:2,
    name: 'apple',
    image:'http://qwerew.cafe24.com/images/apple.png',
    rating: 4.9
  },
  {
    id:3,
    name: 'melon',
    image:'http://qwerew.cafe24.com/images/melon.jpg',
    rating: 4
  }
];

function App() {
  return (
    <div>
      {fruitILike.map((dish) => (<Fruit key={dish.id} name = {dish.name} picture = {dish.image} rating = {dish.rating} />)
    )}
    </div>
  );
}
Fruit.propTypes ={
  name: PropTypes.string.isRequired,
  picture: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired
}

export default App;
