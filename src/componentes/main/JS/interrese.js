import style from "../CSS/interrese.module.css";

import Title from "../../geral/JS/title";

import body       from "../../../imgs/display/body.png";
import maquiagem  from "../../../imgs/display/labios.png";
import fragancias from "../../../imgs/display/perfume.png";
import banho      from "../../../imgs/display/banho.png";

let views = [ 
    {setor:"Corpo & Banho", img:banho, viu:2},
    {setor:"Energia & Performance", img:body, viu:3},
    {setor:"fragâncias", img:fragancias, viu:4},
    {setor:"maquiagens", img:maquiagem, viu:5}
]


function Ordenar() {
    views.sort(function ( a, b ) {
        if ( a.viu > b.viu ){
          return -1;} else if ( a.viu < b.viu){
          return true;
}
    }
)
}

Ordenar();




function Interrese(){
return(
<>
<article className={style.container}>
<Title text="isso pode ser do seu interrese"/>
<div className={style.squares}>


{views.map(e => (
<div>
<img src={e.img} alt="foto_maquiagem"/>
<div>
<p className={style.tl}>{e.setor}</p>
<p className={style.more}>ver mais</p>
</div>
</div>
))}



</div>


</article>
</>
)
}

export default Interrese;