import { useState } from 'react'
import estilos from './Login.module.css'

export function Login(){

    const [nome, setNome] = useState('')
    const [email, setEmail] = useState('')
    const [senha, setSenha] = useState('')

    function obterDados(e){
        console.log("teste")
        e.preventDefault()
        console.log(`Nome: ${nome}`)
        console.log(`Email: ${email}`)
        console.log(`Senha: ${senha}`)
    }

    
    
    return(
        <div className={estilos.conteiner}>
            <form className={estilos.formulario} onSubmit={obterDados}>
                <input
                    className={estilos.input}  
                    type="text" 
                    name="nome" 
                    placeholder='Nome'
                    value={nome}
                    onChange={e => setNome(e.target.value)}/>

                <input 
                    className={estilos.input} 
                    type="text" 
                    name="email" 
                    placeholder='Email'
                    value={email}
                    onChange={e => setEmail(e.target.value)}/>

                <input 
                    className={estilos.input} 
                    type="text" 
                    name="senha" 
                    placeholder='Senha'
                    value={senha}
                    onChange={e => setSenha(e.target.value)}/>

                <button className={estilos.button} type='submit'>Enviar</button>
            </form>
        </div>
    )
}