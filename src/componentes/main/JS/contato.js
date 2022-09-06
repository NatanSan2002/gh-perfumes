import style from "../CSS/contato.module.css";

//imgs
import FB from "../../../imgs/icons/fb.png";
import INSTA from "../../../imgs/icons/insta.png";
import YTB from "../../../imgs/icons/ytb.png";



function Contato(){
return(
<footer className={style.container}>

<div className={style.register}>
<p className={style.tl}>RecebA nossas ofertas e novidades </p>

<div>
<input type="text" placeholder="Digite seu nome"/>
<input type="text" placeholder="Digite seu email"/>
</div>

<button type="button">
<p>cadastrar</p>
</button>
</div>

<div className={style.info}>





<div>
<p className={style.tl}>GRUPO HINODE</p>
<a href="/">A Empresa</a>
<a href="/">Catálogo Hinode</a>
<a href="/">Seja um Consultor</a>
<a href="/">Hinode Prime</a>
<a href="/">Frete Inteligênte</a>
</div>
<div>
<p className={style.tl}>MAIS VENDIDOS</p>
<a href="/">Corps Lígnea Body Contour Gel Modelador</a>
<a href="/">Shake de Vanilla H+ HND</a>
<a href="/">Shake de Morango H+ HND</a>
<a href="/">Luva de Silicone Creme para as Mãos Hands</a>
<a href="/">Empire Gold</a>
<a href="/">Empire VIP</a>
</div>
<div>
<p className={style.tl}>DÚVIDAS FREQUENTES</p>
<a href="/">Fale Conosco</a>
<a href="/">Entrega, Trocas e Devoluções</a>
<a href="/">Compra e Venda</a>
<a href="/">Política de Privacidade</a>
<a href="/">Remover Consentimento</a>
</div>
<div className={style.tel}>
<div>
<button type="button" className={style.distance}>
<p>central de atendimento</p>
</button>
<p><a href="/">De segunda a sexta das 9h às 21h</a></p>
<p><a href="/">Capitas e regiões metropolitanas 4020-2424 </a></p>
<p><a href="/">Demais localidades: 0800-144-6633</a></p>
</div>

<div className={style.socials}>
<a href="https://www.instagram.com/" target="_blank" rel="noreferrer">
    <img src={INSTA} alt="Instagram_icone"/> 
    </a>
<a href="https://www.youtube.com/"  target="_blank" rel="noreferrer">
    <img src={YTB} alt="Youtube_Icone"/>
    </a>
<a href="https://www.facebook.com/"  target="_blank" rel="noreferrer">
    <img src={FB} alt="Facebook_icone"/>
    </a>

</div>

</div>


</div>
</footer>
)
}

export default Contato;