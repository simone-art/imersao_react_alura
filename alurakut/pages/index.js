import React from 'react';
import MainGrid from '../src/components/MainGrid'
import Box from '../src/components/Box'
import { AlurakutMenu, OrkutNostalgicIconSet, AlurakutProfileSidebarMenuDefault } from '../src/lib/AlurakutCommons';
import { ProfileRelationsBoxWrapper } from '../src/components/ProfileRelations';


// <AlurakutProfileSidebarMenuDefault, componente que permite criar um card pessoal 
// className="boxLink", classe definida dentro da tag Box que estiliza os links das caixas
//State serve pra manipular o estado React.useState funciona como loop


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
const [comunidades, setComunidades] = React.useState([{
  title: 'Eu odeio acordar cedo',
  image: 'https://alurakut.vercel.app/capa-comunidade-01.jpg'
}]);
//const comunidades pega o array e set comunidades pega a posição
console.log(comunidades);
const  usuarioAleatorio = 'simone-art';
const pesssoasFavoritas = ['omariosouto', 'peas', 'felipementel', 'rafaballerini', 'mayconbatista', 'simone-art']
//const comunidades = ['Alurakut'];

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
         const dadosDoForm = new FormData(e.target);

         console.log('Campo: ', dadosDoForm.get('title'));
         console.log('Campo: ', dadosDoForm.get('image'));
         
         const comunidade = {
          id: new Date().toISOString(),
          title: dadosDoForm.get('title'),
          image: dadosDoForm.get('image'),
        }

        const comunidadesAtualizadas = [...comunidades, comunidade];
                setComunidades(comunidadesAtualizadas)

         //comunidades.push('Alura-Stars');
         //Usando O Spreed para pegar os items e integrá-los
         //const comunidadesAtualizadas = [...comunidades, 'Alura Stars']
         //setComunidades(comunidadesAtualizadas)
         //console.log(comunidades);
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
   <ul>
        {comunidades.map((itemAtual) =>{
         return (
          <li>
            <a href={`/users/${itemAtual.title}`}>
              <img src={itemAtual.image}/>
              <span>{itemAtual.title}</span>
            </a>
           </li>
         )
        })}
      </ul>
   </ProfileRelationsBoxWrapper>

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
