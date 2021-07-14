import styled from 'styled-components'

//Criado componente MainGrid
//Grid-gap para ver os cards separados
// width: 100% para pegar a parte do mobile
//max-width: 500px pra nao esticar tanto no celular
const MainGrid = styled.main`
   width: 100%;
   grid-gap: 10px;
   margin-left: auto;
   margin_right: auto;
   max-width: 500px;
   padding: 16px;
   .profileArea {
    display: none;
    @media(min-width: 860px){
      display: block;
    }
   }

   @media(min-width: 860px){
    max-width: 1110px;
    display: grid;
    grid-template-areas: "profileArea welcomeArea profileRelationsArea"; 
    grid-template-column: 160px 1fr 312px;
   }

`;

export default MainGrid;