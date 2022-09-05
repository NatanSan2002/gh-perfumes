import style from "../CSS/carrosel.module.css";

import Buy from "../../geral/JS/b_buy.js";

//imgs 
import star from"../../../imgs/icons/star.png";
import starD from"../../../imgs/icons/star_d.png";

import fav from "../../../imgs/icons/love.png";




function Carrosel({name,img,price}) {

return(

<div className={style.container}>

    

<div className={style.img_container}>
<img src={fav} className={style.fav} alt="favoritar_icon"/>
<img src={require("../../../imgs/produtos/"+img) } alt="Imagem do Pruduto"/>
</div>


<p className={style.tl}>{name}</p>

<div className={style.avaliation}>

<img src={star} alt="Estrela de avaliação"/>
<img src={star} alt="Estrela de avaliação"/>
<img src={star} alt="Estrela de avaliação"/>
<img src={star} alt="Estrela de avaliação"/>
<img src={starD} alt="Estrela de avaliação"/>
</div>

<p className={style.price}>R$ {price.toFixed(2)}</p> 

<Buy/>




</div>


)
}


export default Carrosel;