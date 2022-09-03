import style from "../CSS/title.module.css";

function Title({text}){
return(
<>
<h1 className={style.title}>{text}</h1>
</>
)
}

export default Title