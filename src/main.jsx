import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './components/App'
import { Provider } from 'react-redux'
import { state } from "./redux/store"


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store = {state}>
    <App />
    </Provider>
  </StrictMode>,
)
