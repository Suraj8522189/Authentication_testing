
import { data1 } from "./data";
import MyLink from "./mylinkcomponent";

function Home1(){

  var links1 = data1.map( (b)=> <MyLink design ={"link1"}  link={b[0]}   text={b[1]}></MyLink> )


    return(<>
        <div className="body ">
    <h1 className="titel1" >⚜️Welcome Admin⚜️ </h1>
  {links1}
  
  
    </div>
    </>)
}
export default Home1