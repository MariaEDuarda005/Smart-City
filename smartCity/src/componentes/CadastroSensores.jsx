import { useState } from 'react';
import estilos from './CadastroSensores.module.css'; 

export function CadastroSensores() {

    const [descricao, setDescricao] = useState('')
    const [unidadeMedida, setUnidadeMedida] = useState('')
    const [localizacao, setLocalizacao] = useState('')
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
                    Unidade de medida
                    <input
                        className={estilos.campo}  
                        type="text" 
                        name="unidadeMedida" 
                    />
                </label>

                <label>
                    Localização
                    <input
                        className={estilos.campo}  
                        type="text" 
                        name="Localizacao" 
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