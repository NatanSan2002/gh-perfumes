import style from "../CSS/container.module.css"

import {useRef} from "react";

//imgs
import seta_L from "../../../imgs/icons/l_arrow2.png";
import seta_R from "../../../imgs/icons/r_arrow2.png";
import ball from "../../../imgs/icons/ball_gold.png";
import Title from "./title";






function Container(props) {
    const carrosel = useRef(null);

    function Scroll_L(e) {
        e.preventDefault();
        carrosel.current.scrollLeft += carrosel.current.offsetWidth;
    }

    function Scroll_R(e) {
        e.preventDefault();
        carrosel.current.scrollLeft -= carrosel.current.offsetWidth;
    }


return(
<article className={style.container}>


<Title className={style.title} text={props.title}/>
<div className={style.flex} ref={carrosel}>

{props.children} 

</div>

<img onClick={Scroll_L} src={seta_R} className={`${style.arrow} ${style.arrowR}`} alt="Seta_Direita"/>
<img onClick={Scroll_R} src={seta_L} className={`${style.arrow} ${style.arrowL}`} alt="Seta_Esquerda"/> 

<div className={style.abas}>
<img src={ball} alt="bola sessão"/>
<img src={ball} alt="bola sessão"/>
<img src={ball} alt="bola sessão"/>
<img src={ball} alt="bola sessão"/>
</div>

</article>
)

}

export default Container