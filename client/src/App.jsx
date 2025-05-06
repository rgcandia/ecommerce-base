import style from './style.module.css'
import Nav from './components/Nav/Nav';
// socket
import conn from './socket/index'
import { useEffect } from 'react';
function App (){
    useEffect(()=>{
        conn.initSocket();
    },[])
    return(<div className={style.app} >  
        <Nav/>
        <h1>Componente Principal  APP</h1>
     </div>)
}
export default App;