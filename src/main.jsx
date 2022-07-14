import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'

ReactDOM.createRoot(document.getElementById('root')).render(
  // useEffect两次被调用与strict mode in development有关
  // 可以使用useRef使用ref来避免它
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
