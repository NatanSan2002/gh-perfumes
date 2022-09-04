import style from "../CSS/banner.module.css";

import seta_L from "../../../imgs/icons/l_arrow.png";
import seta_R from "../../../imgs/icons/r_arrow.png";
import ball from "../../../imgs/icons/ball.png";

function Banner ({arrow,bck,img1,img2,title,btn,text}) {


return(
<article className={`${style.container} ${style[bck]}`}>

<img className={style.img1} src={img1} alt="Mulher_Maquiando"/>
{img2 && (<img src={img2} alt="Produto"/>)}

<div>

<div className={style.title}>
<p className={style.tl}> {title} </p>
</div>
<p>{text}</p>

<button className={style.button} type="button">
<p>{btn}</p>
</button>

</div>

{arrow && 
(
<>
<img src={seta_R} className={`${style.arrow} ${style.arrowR}`} alt="Seta_Esquerda"/>
<img src={seta_L} className={`${style.arrow} ${style.arrowL}`} alt="Seta_Esquerda"/>  

<div className={style.abas}>
<img src={ball} alt="bola sessão"/>
<img src={ball} alt="bola sessão"/>
<img src={ball} alt="bola sessão"/>
<img src={ball} alt="bola sessão"/>
</div>

</>
)}

</article>

)
}

Banner.defaultProps = {arrow:false,bck:"default"}



export default Banner;