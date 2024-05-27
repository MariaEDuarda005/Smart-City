import { Routes, Route } from 'react-router-dom'
import { Login } from '../paginas/Login'
import { Inicial } from '../paginas/Inicial'
import { Perfil } from '../paginas/Perfil'
import { Tabela } from '../componentes/Tabela'
import { CadastroSensores } from '../componentes/CadastroSensores'

export function Rotas(){
    return(
        <Routes>
            <Route path='/' element={ <Login/> }/>
            <Route  path='/inicial' element={<Inicial/>}>
                <Route index element={<Tabela/>}/>
                <Route path='perfil' element={<Perfil/>}/>
                <Route path='cadastroSensores' element={<CadastroSensores/>}/>
            </Route>
        </Routes>
    )
}