//componentes

import Banner    from "../componentes/main/JS/banner.js";
import Vantagens from "../componentes/main/JS/vantagens.js";
import Interrese from "../componentes/main/JS/interrese.js";
import ItenD from "../componentes/main/JS/iten_destaque.js";
import Contato from "../componentes/main/JS/contato.js";
import Carrosel from "../componentes/geral/JS/carrosel.js";
import Container from "../componentes/geral/JS/container.js";

import Produtos from "../componentes/dados_locais/produtos.js";


//imgs
import B_img1  from "../imgs/display/woman_maquiagem.png";
import B_img2  from "../imgs/display/daz_hyalu.png";
import B2_img1 from "../imgs/display/woman_banho.png";
import Perfume from "../imgs/display/perfumeD.png";
import Capsulas from "../imgs/display/capsulas.png";


function Home() {
    return (
      <section>

    <Banner
    bck="yellow_gold" title=" Base Líquida DAZZLE" 
    btn="Comprar" img1= {B_img1} img2= {B_img2} arrow = {true}
    />
    
    <Vantagens/>
    
    <Container title="Mais Vendidos">
      
   {Produtos.map(p => 
   <Carrosel img={p.img} name={p.name} price={p.price}/>
   )}

   </Container>
    
    
  
  
    <Interrese/>

    <ItenD img1={Perfume} img2={Capsulas} 
    n1="Venyx L’Or 100ml" n2="Multi- Vit Complex A-Z Mulheres 60 Cápsulas"
    p1={150.00} p2={85.00}/>
  
  <Banner
    title="Corpo e Banho" btn="conheça nossos produtos" img1= {B2_img1}
    text="Confira nossa linha de produtos para o corpo. Hidratantes, loções e desodorantes para os cuidados com seu corpo."
    />
  
     <Contato/>
     
  </section>
    );
  }
  
  export default Home;