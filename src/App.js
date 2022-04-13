import React from 'react';
// function Fruit(props){
//   console.log(props);
//   return (
//     <h1>{props.fav} 맛있어요</h1>
//   )
// }
function Fruit({fav}){
  return <h1>{fav}맛있어요</h1>
}

function App() {
  return (
    <div>
      <h1>안녕하세요</h1>
      <Fruit fav="banana" />
      <Fruit fav="mango" />
      <Fruit fav="watermelon" />
    </div>
  );
}

export default App;
