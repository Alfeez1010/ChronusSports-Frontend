import styled from "styled-components";


export const Container = styled.div`
     width: 100%;
     display: flex;
     overflow: auto;
     white-space: nowrap;
     border-bottom: 1px solid #164092;
 
     @media(min-width: 1000px) {
         display: grid;
         padding: 32px;
         width: 20%;
     }
`

export const Items = styled.div`

    color: #EEEEEE;
    font-weight: 400;
    font-size: 16px;
    margin: 30px 8px;
    display: flex;
    padding: 12px 6px;


    a {
         margin: 0px 8px;
     }

     @media(min-width: 1000px) {
         a {
             margin: 30px 8px;
         }
     }
`