import style from "../CSS/iten_destaque.module.css";

import Price from "../../geral/JS/price_container.js";
import Buy from "../../geral/JS/b_buy.js";



function Iten_Destaque({img1,img2,n1,n2,p1,p2}){
return(

<article className={style.container}>
<div>
<img src={img1} alt="Foto_Produto"/>
<Price price={p1} name={n1}/>
<div className={style.buy}>
<Buy/>
</div>
</div>

<div>
<img src={img2} alt="Foto_Produto"/>
<Price price={p2} name={n2}/>
<div className={style.buy}>
<Buy/>
</div>
</div>
</article>
)
}

export default Iten_Destaque