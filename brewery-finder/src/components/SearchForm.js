import React from 'react';
import { SearchBreweriesBtn } from './Styles';


const Searchform = () => {



    return (
        <section className="search-form">
          <form>
            <input
              type='text'
                        onChange={props.handleInputChanges}
                        value={props.searchQuery}
              placeholder={props.placeHolder}
            />
            <SearchBreweriesBtn type='submit'>Search</SearchBreweriesBtn>
          </form>
        </section>
      );

}


export const SearchForm