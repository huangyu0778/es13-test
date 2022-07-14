const resource = await Promise.any([
  fetch('http://localhost:8888/tabs')
  .then(res=>{return console.log('tabs',res)}),
  fetch('http://localhost:8888/list')
  .then(res=>{return console.log('list',res)})
])
// Promise.any()方法同样是将多个 Promise 实例，包装成一个新的 Promise 实例。
// Promise.any()有一个子实例成功就算成功，全部子实例失败才算失败。
export default function MultiInterface() {
  return (
    <>
     <div style={{marginTop:10}}> <button>MultiInterface</button> </div>  
    </>
  );
}

