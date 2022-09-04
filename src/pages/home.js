//componentes

import Banner    from "../componentes/main/JS/banner.js";
import Vantagens from "../componentes/main/JS/vantagens.js";
import Title     from "../componentes/geral/JS/title.js";
import Interrese from "../componentes/main/JS/interrese.js";


//imgs
import B_img1  from "../imgs/display/woman_maquiagem.png";
import B_img2  from "../imgs/produtos/daz_hyalu.png";
import B2_img1 from "../imgs/display/woman_banho.png";

function Home() {
    return (
      <section>

    <Banner
    bck="yellow_gold" title=" Base Líquida DAZZLE" 
    btn="Comprar" img1= {B_img1} img2= {B_img2}arrow = {true}
    />
    
    <Vantagens/>
  
    <Title text="mais vendidos"/>
  
    <Interrese/>
  
  <Banner
    title="Corpo e Banho" btn="conheça nossos produtos" img1= {B2_img1}
    text="Confira nossa linha de produtos para o corpo. Hidratantes, loções e desodorantes para os cuidados com seu corpo."
    />
  
     
  </section>
    );
  }
  
  export default Home;