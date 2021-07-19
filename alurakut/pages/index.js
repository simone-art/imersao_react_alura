import MainGrid from '../src/components/MainGrid'
import Box from '../src/components/Box'
import { AlurakutMenu, OrkutNostalgicIconSet, AlurakutProfileSidebarMenuDefault } from '../src/lib/AlurakutCommons';
import { ProfileRelationsBoxWrapper } from '../src/components/ProfileRelations';


// <AlurakutProfileSidebarMenuDefault, componente que permite criar um card pessoal 
// className="boxLink", classe definida dentro da tag Box que estiliza os links das caixas


function ProfileSidebar(propriedades) {
  console.log(propriedades);
  return (
    <Box>
      <img src={`https://github.com/${propriedades.githubUser}.png`} style={{ borderRadius: '8px' }} />
    <hr />

    <p>
        <a className="boxLink" href={`https://github.com/${propriedades.githubUser}`}>
          @{propriedades.githubUser}
        </a>
    </p>
    <hr />

    <AlurakutProfileSidebarMenuDefault />

    </Box>

    
  )
}

// <AlurakutMenu /> Não se pode ter duas tags no mesmo lugar por isso deve-se usar o fragmento <>
//<> O fragmento engloba as tuas tags, neste caso Alurakut e MainGrid
export default function Home() {
const  usuarioAleatorio = 'simone-art';
const pesssoasFavoritas = ['omariosouto', 'peas', 'felipementel', 'rafaballerini', 'mayconbatista', 'simone-art']


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
      <Box>
       <h2>O que você deseja fazer?</h2>
       <form onSubmit={function handleCriaComunidade(e){
         e.preventDefault();
         console.log(e)
         alert('Olá pessoas')
       }}>
         <div>
          <input placeholder ="Qual vai ser o nome da sua comunidade?" 
          name="title"
          aria-label="Qual vai ser o nome da sua comunidade?"
          type="text" />
         </div>
         <div>
          <input placeholder ="Coloque uma URL para usarmos de capa" 
          name="image"
          aria-label="Coloque uma URL para usarmos de capa" />
         </div>
         <button>Criar comunidade</button>
       </form>
      </Box>
    </div>
    
   <div  className="profileRelationsArea" style={{ gridArea: 'profileRelationsArea' }}>
    <ProfileRelationsBoxWrapper>
      <h2 className="smallTitle">
       Pessoas da Comunidade ({pesssoasFavoritas.length})
      </h2>
      <ul>
        {pesssoasFavoritas.map((itemAtual) =>{
         return (
          <li>
            <a href={`users/${itemAtual}`} key={itemAtual}>
              <img src={`https://github.com/${itemAtual}.png`}/>
              <span>{itemAtual}</span>
            </a>
           </li>
         )
        })}
      </ul>
      </ProfileRelationsBoxWrapper>
    </div>
    </MainGrid>
    </>
  )
}
