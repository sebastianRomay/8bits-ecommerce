import NavBar from './components/Nav/NavBar';
import Header from './components/Header/Header'
import ItemListContainer from './containers/ItemListContainer/ItemListContainer';



const App = () => {



  return (
    <>
      <Header/>
      <NavBar/>
      <div className='d-flex justify-content-center m-5 flex-wrap'>
      <ItemListContainer/>
      </div>
    </>
  )
}

export default App