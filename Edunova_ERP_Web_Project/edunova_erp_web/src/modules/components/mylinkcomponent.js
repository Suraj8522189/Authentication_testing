
import { Link } from "react-router-dom";
function MyLink(props)
{
    return (<>
    <Link className={props.design} to={props.link}>{props.text}</Link>
    
    </>) 


    
    
 
}


export default MyLink;
