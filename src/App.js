import Header from "./componentes/externos/JS/header.js";
import Banner from "./componentes/main/JS/banner.js";


//imgs
import B_img1 from "./imgs/display/woman_maquiagem.png";
import B_img2 from "./imgs/produtos/daz_hyalu.png";
import B2_img1 from "./imgs/display/woman_banho.png";


function App() {
  return (
    <div>
   <Header/>
  <Banner
  bck="yellow_gold" title=" Base Líquida DAZZLE" 
  btn="Comprar" img1= {B_img1} img2= {B_img2}arrow = {true}
  />

<Banner
  title="Corpo e Banho" btn="conheça nossos produtos" img1= {B2_img1}
  text="Confira nossa linha de produtos para o corpo. Hidratantes, loções e desodorantes para os cuidados com seu corpo."
  />
  
   
    </div>
  );
}

export default App;
