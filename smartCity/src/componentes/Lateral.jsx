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
                    to='/inicial'
                >
                    Filmes
                </p>

                <p 
                    className={estilos.botao}
                    to='perfil'
                >
                    Perfil
                </p>

                <p 
                    className={estilos.botao}
                    to='sobre'
                >
                    Sobre
                </p>

            </section>

        </aside>


    )
}
