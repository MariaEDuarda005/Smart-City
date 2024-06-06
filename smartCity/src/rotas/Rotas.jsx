import { Routes, Route } from 'react-router-dom'
import { Perfil } from '../paginas/Perfil'
import { Inicial } from '../paginas/Inicial'
import { Login } from '../paginas/Login'
import { Tabela } from '../componentes/Tabela'
import { CadastroSensores } from '../paginas/CadastroSensores'
import { Sensor } from '../paginas/Sensor'
import { Sensores } from '../componentes/Sensores'
import { Card } from '../componentes/Card'
import { Localizacao } from '../paginas/Localizacao'
import { Filtro } from '../paginas/Filtro'
import { AlterarSensor } from '../paginas/AlterarSensor'

export function Rotas(){
    return(
        <Routes>
            <Route path='/' element={ <Login/> }/>
            <Route  path='/inicial' element={<Inicial/>}>
                <Route index element={<CadastroSensores/>}/>
                <Route path='perfil' element={<Perfil/>}/>
                <Route path='sensores' element={<Sensor/>}/>
                <Route path='mapa' element={<Localizacao/>}/>
                <Route path='filtro' element={<Filtro />} />        
                <Route path="sensores/alterarSensor/:id" element={<AlterarSensor/>}/>
            </Route>
        </Routes>
    )
}