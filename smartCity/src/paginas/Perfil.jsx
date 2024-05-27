import estilos from './Perfil.module.css'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { useNavigate } from 'react-router-dom'


const schemaPerfil = z.object({

    nome: z.string()
        .min(5, "Informe um nome, minimo 5 caracter")
        .max(50, "Maximo de 50 caracteres"),

    senha: z.string()
        .min(5, "Minimo de 5 caracteres")
        .max(30, "Maximo de 30 caracteres"),

})

export function Perfil(){

    const navigate = useNavigate()

    const { 
        register, 
        handleSubmit,
        formState: {errors}
    } = useForm({
        resolver: zodResolver(schemaPerfil)
    })

    async function obterDadosFormulario(data){
        try{
            // chamar a api
            const response = await axios.post('http://127.0.0.1:8000/api/token', {
                username: data.nome,
                password: data.senha
            });
            const {access, refresh} = response.data;
            localStorage.setItem('access_token', access);
            localStorage.setItem('refresh_token', refresh);

            console.log("Login foi bem sucedido");
            navigate('/inicial')
        }catch(error){
            console.log("Erro na autenticação ", error)
        }
    }

    return(
        <div className={estilos.container}>
            <form 
                className={estilos.formulario}
                onSubmit={handleSubmit(obterDadosFormulario)}
            >
                <label>
                    Nome
                    <input 
                        {...register('nome')}
                    />

                    {errors.nome && (
                        <p className={estilos.p}>
                            {errors.nome.message}
                        </p>
                    )}
                </label>
                <label>
                    Senha
                    <input 
                        {...register('senha')}
                    />

                    {errors.senha && (
                        <p className={estilos.p}>
                            {errors.senha.message}
                        </p>
                    )}
                </label>

                <button className={estilos.button} type='submit'>Enviar</button>

            </form>
        </div>
        
    )
}