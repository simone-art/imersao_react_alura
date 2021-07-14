import MainGrid from './src/components/MainGrid'
import Box from './src/components/Box'

// const Title = styled.h1`
//   font-size: 50px;
//   color: ${({ theme }) => theme.colors.primary};
// `

export default function Home() {
  return (
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
  )
}
