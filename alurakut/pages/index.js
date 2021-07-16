import MainGrid from '../src/components/MainGrid'
import Box from '../src/components/Box'
import { AlurakutMenu } from '../src/lib/AlurakutCommons';

function ProfileSidebar(propriedades) {
  console.log(propriedades);
  return (
    <Box>
      <img src={`https://github.com/${propriedades.githubUser}.png`} style={{ borderRadius: '8px' }} />
    </Box>
  )
}

// <AlurakutMenu /> Não se pode ter duas tags no mesmo lugar por isso deve-se usar o fragmento <>
//<> O fragmento engloba as tuas tags, neste caso Alurakut e MainGrid
export default function Home() {
const  usuarioAleatorio = 'simone-art';
const pesssoasFavoritas = ['omariosouto', 'peas', 'felipepimentel', 'rafaballerini']


  return (
    <>
    <AlurakutMenu />
   <MainGrid>
    <div className="profileArea" style={{ gridArea: 'profileArea' }}>
      <ProfileSidebar githubUser = {usuarioAleatorio} />
    </div>

    <div className="welcomeArea" style={{ gridArea: 'welcomeArea' }} >
      <Box>
        Bemvindo
      </Box>
    </div>
    
   <div  className="profileRelationsArea" style={{ gridArea: 'profileRelationsArea' }}>
    <Box>
      Pessoas da Comunidade
      {pesssoasFavoritas.map((itemAtual) =>{
         return (
           <li>ItemAtual</li>
         )
      })}
    </Box>
    <Box>
      Comunidades
    </Box>
   </div>
    </MainGrid>
    </>
  )
}
