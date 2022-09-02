import style from "../CSS/header.module.css";
import t_logo from "../../../imgs/logos/title.png";
import userL from "../../../imgs/icons/user_love.png";
import user from "../../../imgs/icons/user.png";
import shop from "../../../imgs/icons/bolsa.png";
import lupa from "../../../imgs/icons/lupa.png";
import love from "../../../imgs/icons/love.png";

function Header() {
return(
<div className={style.container}>

<nav className={style.top}> 
<p> A Empresa </p>

<div>
<div className={style.link_icon}>
<img src={userL} alt="icon_usuario"/> 
<p className={style.line}> SEJA UM CONSULTOR </p>
</div>

<p> Fale Conosco </p>
</div>
</nav>

<nav className={style.bot}>

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
<h1>ENTRE OU CADASTRE-SE</h1>
</div>
</div>
</div>

<div className={style.link_icon}>
<img src={love} alt="icon_coração"/> 
<h1>FAVORITOS</h1>
</div>

<div className={style.link_icon}>
<p className={style.notify}>0</p>
<img src={shop} alt="icon_compras"/> 
<h1>SACOLA</h1>
</div>

</nav>
<nav className={style.sub_menu}>

<div>
<div className={style.menu}>
<div></div><div></div><div></div>
</div>

<h1>
TODAS AS CATEGORIAS
</h1>
</div>

<h1>
FRAGÂNCIAS
</h1>
<h1>
MAQUIAGEM
</h1>
<h1>
CORPO & BANHO
</h1>
<h1>
VIDA SAUDÁVEL 
</h1>
<h1>
ENERGIA E PERFORMANCE
</h1>
</nav>

</div>
)
}

export default Header