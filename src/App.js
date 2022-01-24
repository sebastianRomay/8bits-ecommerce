import NavBar from './components/Nav/NavBar';
import Header from './components/Header/Header'
import ItemListContainer from './containers/ItemListContainer/ItemListContainer';


const App = () => {



  return (
    <>
      <Header/>
      <NavBar/>
      <div className='d-flex justify-content-center m-5'>
      <ItemListContainer img='https://as01.epimg.net/meristation/imagenes/2021/03/21/noticias/1616347029_224093_1616347078_noticia_normal.jpg' title='Gameboy' precio='5000'/>
      <ItemListContainer img='https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/SNES-Model-2-Set.jpg/1024px-SNES-Model-2-Set.jpg' title='Snes' precio='8000'/>
      <ItemListContainer img='https://museodeinformatica.org.ar/wp-content/uploads/2015/01/1280px-Sega-Genesis-Mk2-6button.jpg' title='Sega' precio='3800'/>
      </div>
    </>
  )
}

export default App