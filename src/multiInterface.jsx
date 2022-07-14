import React from 'react'
// const resource = await Promise.any([
//   fetch('http://localhost:8888/tabs')
//   .then(res=>console.log('tabs',res)),
//   fetch('http://localhost:8888/list')
//   .then(res=>console.log('list',res))
// ])
export default  React.memo(function MultiInterface() {
  return (
    <>
     <div style={{marginTop:10}}> <button>MultiInterface</button> </div>  
    </>
  );
}
)
