import MainGrid from './src/components/MainGrid'
import Box from './src/components/Box'
import { AlurakutMenu } from './src/lib/AlurakutCommons';

// const Title = styled.h1`
//   font-size: 50px;
//   color: ${({ theme }) => theme.colors.primary};
// `

// <AlurakutMenu /> Não se pode ter duas tags no mesmo lugar por isso deve-se usar o fragmento <>
//<> O fragmento engloba as tuas tags, neste caso Alurakut e MainGrid
export default function Home() {
  return (
    <>
    <AlurakutMenu />
   <MainGrid>
    <div className="profileArea" style={{ gridArea: 'profileArea' }}>
      <Box>
        <img src="https://github.com/simone-art.png" />
      </Box>
    </div>

    <div className="welcomeArea" style={{ gridArea: 'welcomeArea' }} >
      <Box>
        Bemvindo
      </Box>
    </div>
    
   <div  className="profileRelationsArea" style={{ gridArea: 'profileRelationsArea' }}>
    <Box>
      Pessoas da Comunidade
    </Box>
    <Box>
      Comunidades
    </Box>
   </div>
    </MainGrid>
    </>
  )
}
