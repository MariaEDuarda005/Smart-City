import estilos from './Inicial.module.css'
import { Cabecalho } from '../componentes/Cabecalho' 
import { Lateral } from '../componentes/Lateral'
import { Formulario } from '../componentes/Formulario'

export function Inicial() {

    return (
        <div className={estilos.gridConteiner}>
          <Cabecalho/>
          <Lateral/>
          <Formulario/>
        </div>
    )
  }
  