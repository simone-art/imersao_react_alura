import styled from 'styled-components'

// const Title = styled.h1`
//   font-size: 50px;
//   color: ${({ theme }) => theme.colors.primary};
// `

//Constantes vao em maiúsculas porque elas são componentes não tags
const Box = styled.div`
  background: #FFFFFF;
  border-radius: 8px;
`;

//Criado componente MainGrid
//Grid-gap para ver os cards separados
const MainGrid = styled.main`
   display: grid;
   grid-gap: 10px;
   padding: 16px;

   @media(min-width: 860px){
    grid-template-areas: "profileArea welcomeArea profileRelationsArea"; 
    grid-template-column: 160px 1fr 312px;
   }

`;


export default function Home() {
  return <MainGrid>
    <div style={{ gridArea: 'profileArea' }}>
      <Box>
        Images
      </Box>
    </div>

    <div style={{ gridArea: 'welcomeArea' }} >
      <Box>
        Bemvindo
      </Box>
    </div>
    
   <div style={{ gridArea: 'profileRelationsArea' }}>
    <Box>
      Pessoas da Comunidade
    </Box>
    <Box>
      Comunidades
    </Box>
   </div>
    </MainGrid>
}
