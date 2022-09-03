import style from "../CSS/vantagens.module.css";

//imgs
import card from   "../../../imgs/icons/card.png";
import box from    "../../../imgs/icons/box.png";
import change from "../../../imgs/icons/change.png";
import carro from  "../../../imgs/icons/carro.png";


function Vantagens () {
return(
<div className={style.container}>

<div>
<img src={card} alt="cartão"/> 
<p> Tudo em até 6x sem juros </p>
</div>

<div>
<img src={carro} alt="entrega"/> 
<p> FRETE GRÁTIS nas compras acima de R$ 49,00 para todo o Brasil </p>
</div>

<div>
<img src={change} alt="troca"/> 
<p> Hinode Prime: Receba em casa todo mês com 20% OFF </p>
</div>

<div>
<img src={box} alt="caixa"/> 
<p> Garanta mais economia com frete inteligente </p>
</div>



</div>
)
}



export default Vantagens;