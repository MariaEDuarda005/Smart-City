import { useState } from 'react'
import estilos from './Perfil.module.css'
import { useNavigate } from 'react-router-dom'
import axios from 'axios';


export function Perfil(){

    const [nome, setNome] = useState('')
    const [email, setEmail] = useState('')
    const [senha, setSenha] = useState('')

    const navigate = useNavigate()

    // function obterDados(e){
    //     console.log("teste")
    //     e.preventDefault()
    //     console.log(`Nome: ${nome}`)
    //     console.log(`Email: ${email}`)
    //     console.log(`Senha: ${senha}`)
    //     navigate('inicial')
    // }

    async function obterDadosFormulario(data) {
        try {
            const response = await axios.post('http://127.0.0.1:8000/api/create_user/', data, {
                headers: {
                    'Authorization': `Bearer ${localStorage.getItem('access_token')}`
                }
            });

            alert('Sensor cadastrado com sucesso!');
            navigate('/perfil'); // Redireciona para a página inicial após o cadastro
        } catch (error) {
            console.error('Erro no cadastro de usuario', error);
        }
    }
    
    return(
        <div className={estilos.conteiner}>
            <form className={estilos.formulario} onSubmit={obterDadosFormulario}>
                <input
                    className={estilos.Logininput}  
                    type="text" 
                    name="nome" 
                    placeholder='Nome'
                    value={nome}
                    onChange={e => setNome(e.target.value)}/>

                <input 
                    className={estilos.Logininput}   
                    type="text" 
                    name="email" 
                    placeholder='Email'
                    value={email}
                    onChange={e => setEmail(e.target.value)}/>

                <input 
                    className={estilos.Logininput}  
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