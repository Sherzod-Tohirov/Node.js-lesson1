import { ToastContainer } from 'react-toastify'
import './App.css';
import 'react-toastify/dist/ReactToastify.css';
import Posts from './components/Posts'

function App() {

  return (
    <>
      <Posts />
      <ToastContainer position='bottom-right' autoClose={2000} theme='dark' />
    </>
  )
}

export default App
