import { Link } from 'react-router-dom'
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

                <Link 
                    className={estilos.botao}
                    to='/inicial'
                >
                    Cadastro
                </Link>

                <Link 
                    className={estilos.botao}
                    to='perfil'
                >
                    Usuarios
                </Link>

                <Link 
                    className={estilos.botao}
                    to='sensores'
                >
                    Sensores
                </Link>

                <Link 
                    className={estilos.botao}
                    to='mapa'
                >
                    Mapa
                </Link>
                
                <Link 
                    className={estilos.botao}
                    to='filtro'
                >
                    Filtro
                </Link>
                


            </section>

        </aside>


    )
}
