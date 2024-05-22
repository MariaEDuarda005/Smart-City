import { useState } from 'react';
import estilos from './CadastroSensores.module.css'; 

export function CadastroSensores() {

    const [descricao, setDescricao] = useState('')
    const [statusOperacional, setStatusOperacional] = useState('')
    const [instrucoes, setInstrucoes] = useState('')
    const [contatoResponsavel, setContatoResponsavel] = useState('')
    const [latitude, setLatitude] = useState('')
    const [longitude, setLongitude] = useState('')

    return(
        <div className={estilos.conteiner}>
            <form className={estilos.formulario}>
                <label>
                    Descrição
                    <input
                        className={estilos.campo}  
                        type="text" 
                        name="descricao" 
                    />
                </label>

                <label>
                    Status Operacional
                    <input
                        className={estilos.campo}  
                        type="text" 
                        name="statusOperacional" 
                    />
                </label>

                <label>
                    Instrucões
                    <input
                        className={estilos.campo}  
                        type="text" 
                        name="instrucoes" 
                    />
                </label>

                <label>
                    Contado do Responsavel
                    <input
                        className={estilos.campo}  
                        type="text" 
                        name="contatoResponsavel" 
                    />
                </label>

                <label>
                    Latitude
                    <input
                        className={estilos.campo}  
                        type="text" 
                        name="latitude" 
                    />
                </label>

                <label>
                    Longitude
                    <input
                        className={estilos.campo}  
                        type="text" 
                        name="longitude" 
                    />
                </label>

                <button className={estilos.botao} type='submit'>Enviar</button>
            </form>
        </div>
    )
}