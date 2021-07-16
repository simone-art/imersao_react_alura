import MainGrid from '../src/components/MainGrid'
import Box from '../src/components/Box'
import { AlurakutMenu, OrkutNostalgicIconSet } from '../src/lib/AlurakutCommons';

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
const pesssoasFavoritas = ['omariosouto', 'peas', 'felipementel', 'rafaballerini', 'mayconbatista']


  return (
    <>
    <AlurakutMenu />
   <MainGrid>

    <div className="profileArea" style={{ gridArea: 'profileArea' }}>
      <ProfileSidebar githubUser = {usuarioAleatorio} />
    </div>

    <div className="welcomeArea" style={{ gridArea: 'welcomeArea' }} >
      <Box>
      <h1 className="title">
        Bemvindo(a)
      </h1>  
      <OrkutNostalgicIconSet />
      </Box>
    </div>
    
   <div  className="profileRelationsArea" style={{ gridArea: 'profileRelationsArea' }}>
    <Box>
      <h2 className="smallTitle">
       Pessoas da Comunidade ({pesssoasFavoritas.length})
      </h2>
      <ul>
      {pesssoasFavoritas.map((itemAtual) =>{
         return (
           <a href={`users/${itemAtual}`} key={itemAtual}>
           <img src={`https://github.com/${itemAtual}.png`}/>
           <span>{itemAtual}</span>
           </a>
         )
      })}
      </ul>
    </Box>
    <Box>
      Comunidades
    </Box>
   </div>
    </MainGrid>
    </>
  )
}
