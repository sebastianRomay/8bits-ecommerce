import NavBar from './components/Nav/NavBar';
import Header from './components/Header/Header'
import ItemListContainer from './containers/ItemListContainer/ItemListContainer';
import ItemsList from './components/ItemsList/ItemsList';


const App = () => {



  return (
    <>
      <Header/>
      <NavBar/>
      <div className='d-flex justify-content-center m-5 flex-wrap'>
      <ItemsList/>
      </div>
    </>
  )
}

export default App