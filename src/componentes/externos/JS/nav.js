import style from "../CSS/nav.module.css";
import t_logo from "../../../imgs/logos/title.png";
import userL from "../../../imgs/icons/user_love.png";
import user from "../../../imgs/icons/user.png";
import shop from "../../../imgs/icons/bolsa.png";
import lupa from "../../../imgs/icons/lupa.png";
import love from "../../../imgs/icons/love.png";

function Nav() {
return(
<nav className={style.container}>

<div className={style.top}> 
<p> A Empresa </p>

<div>
<div className={style.link_icon}>
<img src={userL} alt="icon_usuario"/> 
<p className={style.line}> SEJA UM CONSULTOR </p>
</div>

<p> Fale Conosco </p>
</div>
</div>

<div className={style.bot}>

<img className={style.logo} src={t_logo} alt="logo_site"/>  

<div className={style.input_container}>
<input type="text" placeholder="Busque aqui o produto de seu interesse"/>
<img src={lupa} alt="lupa_pesquisa"/>
</div>

<div>
<div className={style.link_icon}>
<img src={user} alt="icon_usuario"/>
<div>
<p>Olá Visitante,</p>
<p className={style.tl}>ENTRE OU CADASTRE-SE</p>
</div>
</div>
</div>

<div className={style.link_icon}>
<img src={love} alt="icon_coração"/> 
<p className={style.tl}>FAVORITOS</p>
</div>

<div className={style.link_icon}>
<p className={style.notify}>0</p>
<img src={shop} alt="icon_compras"/> 
<p className={style.tl}>SACOLA</p>
</div>

</div>
<div className={style.sub_menu}>

<div>
<div className={style.menu}>
<div></div><div></div><div></div>
</div>

<p className={style.tl}>
TODAS AS CATEGORIAS
</p>
</div>

<p className={style.tl}>
FRAGÂNCIAS
</p>
<p className={style.tl}>
MAQUIAGEM
</p>
<p className={style.tl}>
CORPO & BANHO
</p>
<p className={style.tl}>
VIDA SAUDÁVEL 
</p>
<p className={style.tl}>
ENERGIA E PERFORMANCE
</p>
</div>

</nav>
)
}

export default Nav