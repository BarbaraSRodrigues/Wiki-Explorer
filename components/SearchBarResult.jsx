import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import './SearchBar.css';
import Modal from './Modal';

const SearchBarResult = () => {

// Use States
  const [openModal, setOpenModal] = useState(false);

  return (
    <div className="group group-search-bar-result">
    {/* Botão de Filtro */}
    <div>
      <button className="button button-filter" onClick={() => setOpenModal(true)}>
        <svg xmlns="http://www.w3.org/2000/svg" width="1.8em" height="1.8em" viewBox="0 0 24 24">
          <path fill="currentColor" d="M9 5a1 1 0 1 0 0 2a1 1 0 0 0 0-2M6.17 5a3.001 3.001 0 0 1 5.66 0H19a1 1 0 1 1 0 2h-7.17a3.001 3.001 0 0 1-5.66 0H5a1 1 0 0 1 0-2zM15 11a1 1 0 1 0 0 2a1 1 0 0 0 0-2m-2.83 0a3.001 3.001 0 0 1 5.66 0H19a1 1 0 1 1 0 2h-1.17a3.001 3.001 0 0 1-5.66 0H5a1 1 0 1 1 0-2zM9 17a1 1 0 1 0 0 2a1 1 0 0 0 0-2m-2.83 0a3.001 3.001 0 0 1 5.66 0H19a1 1 0 1 1 0 2h-7.17a3.001 3.001 0 0 1-5.66 0H5a1 1 0 1 1 0-2z"/>
        </svg>
      </button>
    </div>

    {/* Botões da SearchBar */}
    <div className="input-wrapper input-wrapper-result" id="searchBar">
      <svg id="search" xmlns="http://www.w3.org/2000/svg" width="2em" height="2em" viewBox="0 0 24 24">
        <path fill="#272B34" d="m21 19l-5.154-5.154a7 7 0 1 0-2 2L19 21zM5 10c0-2.757 2.243-5 5-5s5 2.243 5 5s-2.243 5-5 5s-5-2.243-5-5"/>
      </svg>
      <input placeholder="Type to search..." />
      <Link to="/result">
        <button className="button" id="secondButton">
          <svg id="submit" xmlns="http://www.w3.org/2000/svg" width="1.5em" height="1.5em" viewBox="0 0 16 16">
            <path fill="none" stroke="#fff" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="m1.75 1.75l12.5 6l-12.5 6.5l1.5-6.5zm2 6h3.5"/>
          </svg>
        </button>
      </Link>
    </div>
    <Modal isOpen={openModal} setClose={() => setOpenModal(!openModal)} />
  </div>
  )
}

export default SearchBarResult