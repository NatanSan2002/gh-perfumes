import style from "../CSS/footer.module.css";

import descricao from "../../../imgs/logos/footer.jpg";
import censura from "../../../imgs/logos/censura.png"

function Footer() {
return(
<footer className={style.container}>
<img className={style.img} src={descricao} alt="Descrição"/>
<img className={style.blur} src={censura} alt="Borrar Crédito"/>
</footer>
)

}

export default Footer;