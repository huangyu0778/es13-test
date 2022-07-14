import React from 'react'
import axios from 'axios';
const list = await axios.get('http://localhost:8888/list');
// console.log(list,'list');

export default React.memo(function TopLevel() {
  return (
    <>
      <div><button>砍我一刀</button> </div>  
    </>
  );
}) 
