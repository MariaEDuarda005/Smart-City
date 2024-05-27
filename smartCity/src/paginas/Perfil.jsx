import estilos from './Perfil.module.css'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { z } from 'zod'


const schemaPerfil = z.object({

    nome: z.string()
        .min(1, "Informe um nome")
        .max(100, "Maximo de 100 caracteres"),

    senha: z.string()
        .min(5, "Minimo de 5 caracteres")
        .max(30, "Maximo de 30 caracteres"),

})

export function Perfil(){

    const { 
        register, 
        handleSubmit,
        formState: {errors}
    } = useForm({
        resolver: zodResolver(schemaPerfil)
    })

    function obterDadosFormulario(data){
        console.log(data)
        console.log(`Nome: ${data.nome}`)
        console.log(`Senha: ${data.senha}`)
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
            </form>
        </div>
        
    )
}