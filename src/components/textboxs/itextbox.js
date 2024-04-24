import {useContext} from "react"
import { userinfoContext } from '../contexts';
import './itextbox.css'

export default function Itextbox({placeholder,styles}){
    // const [content, setContent] = useState('');
    // const {userinfo,setUserinfo} = useContext(userinfoContext);
    return (
        <div class="input-block" style={styles}>
            <input type="text" name="input-text" id="input-text" required spellcheck="false"/> 
            {/* onChange={e=>setUserinfo({...userinfo,content:e.target.value})} */}
            <span class="placeholder">
                {placeholder}
            </span>
        </div>
    );
}