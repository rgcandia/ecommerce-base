import style from './style.module.css'
import Nav from './components/Nav/Nav';
function App (){
    return(<div className={style.app} >  
        <Nav/>
        <h1>Componente Principal  APP</h1>
     </div>)
}
export default App;