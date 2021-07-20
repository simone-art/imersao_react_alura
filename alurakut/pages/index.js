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
    //<Box as="aside"> é uma tag html padrão para dar forma ao que está dentro do box
    <Box as="aside">
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

//Criado componente ProfileRelationsBox
function ProfileRelationsBox(propriedades) {
  return (
    <ProfileRelationsBoxWrapper>
      <h2 className="smallTitle">
        {propriedades.title} ({propriedades.items.length})
      </h2>
      <ul>
        {/* {seguidores.map((itemAtual) => {
          return (
            <li key={itemAtual}>
              <a href={`https://github.com/${itemAtual}.png`}>
                <img src={itemAtual.image} />
                <span>{itemAtual.title}</span>
              </a>
            </li>
          )
        })} */}
      </ul>
    </ProfileRelationsBoxWrapper>
  )
}

// <AlurakutMenu /> Não se pode ter duas tags no mesmo lugar por isso deve-se usar o fragmento <>
//<> O fragmento engloba as tuas tags, neste caso Alurakut e MainGrid

export default function Home() {
const  usuarioAleatorio = 'simone-art';
const [comunidades, setComunidades] = React.useState([]);

const pesssoasFavoritas = ['omariosouto', 'peas', 'felipementel', 'rafaballerini', 'mayconbatista', 'simone-art']
//const comunidades = ['Alurakut'];

const [seguidores, setSeguidores] = React.useState([]);
// 0 pegar o array de dados do Github
React.useEffect(function() {
  // GET
  fetch('https://api.github.com/users/peas/followers')
  .then(function (respostaDoServidor) {
    return respostaDoServidor.json();
  })
  .then(function(respostaCompleta) {
    //Pega o número de seguidores da URL da Api
    setSeguidores(respostaCompleta);
  })


// API GrapQL
fetch('https://graphql.datocms.com/', {
      method: 'POST',
      headers: {
        'Authorization': '7f7590695431ea76f84616a4b4d32d',
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      },
      body: JSON.stringify({ "query": `query {
        allCommunities {
          id 
          title
          imageUrl
          creatorSlug
        }
      }` })
    })
    .then((response) => response.json()) // Pega o retorno do response.json() e já retorna
    .then((respostaCompleta) => {
      //const comunidadesVindasDoDato vem da Api Graph
      const comunidadesVindasDoDato = respostaCompleta.data.allCommunities;
      console.log(comunidadesVindasDoDato)
      setComunidades(comunidadesVindasDoDato)
    })
    // .then(function (response) {
    //   return response.json()
    // })

  }, [])


console.log('seguidores antes do return', seguidores);



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
   <ProfileRelationsBox title="Seguidores" items={seguidores} />
   <ProfileRelationsBoxWrapper>
   <ul>
        {comunidades.map((itemAtual) =>{
         return (
          <li key={itemAtual.id}>
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
          <li key={itemAtual}>
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
