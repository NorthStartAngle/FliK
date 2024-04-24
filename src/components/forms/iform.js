import styles from "./style.module.css"
import {Theme} from "../theme.js"

export default function Iform({theme,handleSubmit,handleClose,isX=false,children}){
      return(
            <div className="container">
                  <form onSubmit={handleSubmit} style={Theme(theme)} className={styles.mainform}>
                        <div className={styles.topbar}>
                              <img src='./asset/icons/close.svg' className="Form-close" alt="logo" onClick={handleClose}/>
                              {isX && (
                                    <img src='./asset/icons/twitterx.svg' alt="" className={styles.twiterx}/>
                              ) }
                        </div>
                        {children}
                  </form>
            </div>
      );
}