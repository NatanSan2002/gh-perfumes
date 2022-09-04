import style from "../CSS/title.module.css";

function Title({text}){
return(
<>
<h3 className={style.title}>{text}</h3>
</>
)
}

export default Title