import React from "react";
import Footer from "../../components/Footer/Footer";
import Header from '../../components/Header/Header';
import NavBar from '../../components/Nav/NavBar';
import ItemListContainer from '../../containers/ItemListContainer/ItemListContainer';

const Home = () => {
  return (
    <>
      <Header/>
      <NavBar/>
      <div className='d-flex justify-content-center m-5 flex-wrap'>
      <ItemListContainer/>
      </div>
      <Footer/>
    </>
  );
};

export default Home;