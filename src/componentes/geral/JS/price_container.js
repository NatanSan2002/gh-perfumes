import style from "../CSS/price_container.module.css";

import star from "../../../imgs/icons/star.png";

function Price ({name,price}) {
return(
<div className={style.container}>
<p className={style.name}>{name}</p>

<div className={style.avaliation}>
<img src={star} alt="Avaliação do produto"/> 
<img src={star} alt="Avaliação do produto"/> 
<img src={star} alt="Avaliação do produto"/> 
<img src={star} alt="Avaliação do produto"/> 
<img src={star} alt="Avaliação do produto"/> 
</div>
<div>
<p className={style.price}> R$ {price.toFixed(2)}</p>
<p className={style.vezs}>em até 2x de R$ {(price/2).toFixed(2)}</p>
</div>
</div>
)
}

export default Price