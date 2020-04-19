import React from 'react';
import BreweryCard from './BreweryCard';

import BreweryContext from ''

import { BreweryListContainer, } from './Styles';


const BreweryList = () => {
    
    const { breweries } = useContext(BreweryContext);

    return (
        <div className='main-container'>
            {breweries.map(places => {
                return (
                    <BreweryListContainer className='brewery-list-container'>
                        <BreweryCard key={places.breweryId} name={places.breweryName} type={places.breweryType} street={places.breweryStreet} city={places.breweryCity} state={places.breweryState} zip={places.breweryZip} phone={places.breweryPhone}/>
                    </BreweryListContainer>
                );
            })}
        </div>
    )
}

export default BreweryList;