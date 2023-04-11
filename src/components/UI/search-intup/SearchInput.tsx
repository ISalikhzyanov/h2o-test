import React from 'react';
import '../search-intup/searchInput.scss'
import searchImg from '../../../assets/img/serach.svg'

function SearchInput() {
    return (
        <div className="search-input">
            <img
                src={searchImg}
                alt=""
                width="16"
                height="32"
                className="search-input__img"
            />
            <input
                placeholder="Поиск"
                className="search-input__input"
            />
        </div>
    );
}

export default SearchInput;
