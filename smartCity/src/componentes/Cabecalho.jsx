import estilos from './Cabecalho.module.css'; 
import { PauseCircle, BluetoothConnected } from "@phosphor-icons/react";

export function Cabecalho() {
    return(
        <header className={estilos.conteiner}>
            <p>Smart City</p>
            <BluetoothConnected size={32} />
        </header>
    )
}