import React from 'react';
import Navbar from './components/Navbar';
import Header from './components/Header';
import ItemListContainer from './components/ItemListContainer';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Header />
      <ItemListContainer />
    </div>
  );
}

export default App;
