import {useEffect,useRef} from 'react'
import axios from 'axios';
const list = await axios.get('http://localhost:8888/list');
// console.log(list,'list');

export default function TopLevel() {
  const firstRenderRef = useRef(true);
  useEffect(()=>{
    if(firstRenderRef.current){
      firstRenderRef.current = false;
      return;
    }
    const loadList = async () => {
      const res = await axios.get('http://localhost:8888/list') 
      // console.log('res',res); 
    }
    loadList()
    return () => {} 
  },[])
  return (
    <>
      <div><button>智子实验室</button> </div>  
      {/*  该提案可以让await提升到模块中，不需要和async强绑定了，*/}
    </>
  );
}
