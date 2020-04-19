import React from 'react';
import { CardTitle, BreweryCardContainer, CardParagraph } from './Styles';


const BreweryCard = props => {
        return (
            <BreweryCardContainer id='brewery-card-container'>
                <div className='name-and-type'>
                    <CardTitle>{props.name}</CardTitle>
                    <h4>{props.type}</h4>
                </div>
                <div className='location-info'>
                    <CardParagraph>{props.street}</CardParagraph>
                    <CardParagraph>{props.city}, {props.state} {props.zip}</CardParagraph>
                    <CardParagraph>P:  {props.phone}</CardParagraph>
                </div>
                
            </BreweryCardContainer>
        )
}


export default BreweryCard;