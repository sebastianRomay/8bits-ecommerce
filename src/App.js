import NavBar from './components/Nav/NavBar';
import Header from './components/Header/Header'
import ItemListContainer from './containers/ItemListContainer/ItemListContainer';


const App = () => {



  return (
    <>
      <Header/>
      <NavBar/>
      <div className='d-flex justify-content-center m-5 flex-wrap'>
      <ItemListContainer img='https://as01.epimg.net/meristation/imagenes/2021/03/21/noticias/1616347029_224093_1616347078_noticia_normal.jpg' title='Gameboy' precio='5000'/>
      <ItemListContainer img='https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/SNES-Model-2-Set.jpg/1024px-SNES-Model-2-Set.jpg' title='Snes' precio='8000'/>
      <ItemListContainer img='https://museodeinformatica.org.ar/wp-content/uploads/2015/01/1280px-Sega-Genesis-Mk2-6button.jpg' title='Sega' precio='3800'/>
      <ItemListContainer img='https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/PSX-Console-wController.png/1200px-PSX-Console-wController.png' title='PS1' precio='15000'/>
      <ItemListContainer img='https://as01.epimg.net/meristation/imagenes/2015/12/04/noticia/1449248400_549417_1532442420_sumario_normal.jpg' title='PS2' precio='18000'/>
      <ItemListContainer img='https://upload.wikimedia.org/wikipedia/commons/0/02/N64-Console-Set.png' title='Nintendo 64' precio='13000'/>
      </div>
    </>
  )
}

export default App