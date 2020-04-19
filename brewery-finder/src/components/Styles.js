import styled, { css } from 'styled-components';


//Color Profiles -----------------------------------------

/* App colors: OPTION 1 */
/* top container bg: #6E2B12 __
top color text: #F26A37 __
top color text border: #EAE741 __
top color icons: white

bottom (global) container bg: #1E0E0C __
bottom card container bg: #D52027 __
bottom container edge border: #EAE741

accent color: #EAE741 */



/* App colors: OPTION 2 */
/* top container bg: #10635c
top color text: #c8c7c1
top color text border: #E5E500
top color icons: white

bottom container bg: #173b2b
bottom card container bg: #73203C
bottom-text-color: #232420
bottom container edge border: #0f524b

accent color: ##6D243A or #E5E500 */



//Global Styles ----------------------




//Header Styles ----------------------


export const Header = styled.header`
    padding: 15px;
    margin-bottom: 40px;
    background-color: #4A4138;
    border: 2px solid #EAE741;
    border-radius: 7.5px;
    box-shadow: 5px 10px #1E0E0C;
    color: #F26A37;
    text-shadow: 2px 2px #1E0E0C;
`;

export const SearchBreweriesBtn = styled.button`
    text-decoration: none;
    font-family: 'Inria Sans', sans-serif;
    color: white;
    width: 120px;
    height: 50px;
    background-color: #6D243A;
    border: 2px solid #EAE741;
    border-radius: 10px;
    box-shadow: 3px 4px #1E0E0C;

    :hover {
        background-color: maroon;
    }
`;


//Body Styles ------------------------


export const BreweryListContainer = styled.div`
    margin: 0 auto;
    margin-top: 40px;
    width: 275px;
    text-shadow: none;
`;

export const BreweryCardContainer = styled.div`
    padding: 10px;
    margin: 10px;
    background-color: #804004;
    border: 2px solid #EAE741;
    border-radius: 10px;
    box-shadow: 2.5px 5px #1E0E0C;
    color: #1E0E0C;
`;

export const CardTitle = styled.h2`
    text-decoration: underline;
`;

export const CardParagraph = styled.p`
    color: #EAE741;
    font-size: .75em;
    font-style: italic;
`;