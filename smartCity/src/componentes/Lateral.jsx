import estilos from './Lateral.module.css'

export function Lateral () {

    return (
        <aside className={estilos.conteiner}>
            <header>
                <div className={estilos.perfil}>
                    <img 
                        className={estilos.avatar}
                        src="https://cdn.icon-icons.com/icons2/1674/PNG/512/person_110935.png"
                    />
                    <strong>Maria Eduarda</strong>
                </div>       
            </header> 

            <section>

                <p 
                    className={estilos.botao}
                    to='/Leitura de sensores'
                >
                    Leitura de sensores
                </p>

                <p 
                    className={estilos.botao}
                    to='Cadastro de sensores'
                >
                    Cadastro de sensores
                </p>

                <p 
                    className={estilos.botao}
                    to='Cadastro de usuarios'
                >
                    Cadastro de usuarios
                </p>

            </section>

        </aside>


    )
}
