import { ToastContainer } from 'react-toastify'
import './App.css';
import 'react-toastify/dist/ReactToastify.css';
import Posts from './components/Posts'

function App() {

  return (
    <>
      <Posts />
      <ToastContainer />
    </>
  )
}

export default App
