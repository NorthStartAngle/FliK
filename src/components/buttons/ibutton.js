import './ibutton.css'

export default function Ibutton({icon,caption,styles,font,handleClick}){
    return (
        <div  className="container1" style={styles} onClick={e=>{e.stopPropagation();handleClick();}}>
            <div className='content1'>
                {(icon != "") && <img src={icon} alt=""/>}
                <i style={font}>{caption}</i>
            </div>
        </div>
    );
}