import style from './App.module.css'
import Nav from '../Nav/Nav';

function App (){

    return(<div className={style.app} >  
        <Nav/>
        <h1>Bienvenidos !</h1>
     </div>)
}
export default App;
