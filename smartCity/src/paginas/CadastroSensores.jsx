import { useState } from 'react';
import estilos from './CadastroSensores.module.css'; 
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const TIPO_SENSOR_CHOICES = ['Temperatura', 'Contador', 'Luminosidade', 'Umidade'];
const UNIDADE_MEDIDA_CHOICES = ['°C', 'qtd', 'cd', '%'];

const schemaCadastroSensores = z.object({

    tipo: z.enum(TIPO_SENSOR_CHOICES, {
        required_error: 'Tipo é obrigatório',
    }),
 
    mac_address: z.string()
        .max(20, 'Mac Address deve ter no máximo 20 caracteres')
        .nullable()
        .optional(),

    latitude: z.string().refine(val => !isNaN(parseFloat(val)), 'Latitude inválida'),
    
    longitude: z.string().refine(val => !isNaN(parseFloat(val)), 'Longitude inválida'),
 
    localizacao: z.string()
        .max(100, 'Máximo de 100 caracteres'),
 
    responsavel: z.string()
        .max(100, 'Máximo de 100 caracteres'),
 
    unidade_medida: z.enum(UNIDADE_MEDIDA_CHOICES, {
        required_error: 'Unidade de Medida é obrigatória',
    }),
 
    status_operacional: z.boolean()
        .default(true),
 
    observacao: z.string()
        .optional(),

})

export function CadastroSensores() {
    const navigate = useNavigate();
    const { 
        register, 
        handleSubmit,
        formState: {errors}
    } = useForm({
        resolver: zodResolver(schemaCadastroSensores)
    })

    const [tipo, setTipo] = useState('')
    const [mac_address, setMac_address] = useState('')
    const [latitude, setLatitude] = useState('')
    const [longitude, setLongitude] = useState('')
    const [localizacao, setLocalizacao] = useState('')
    const [responsavel, setResponsavel] = useState('')
    const [unidade_medida, setUnidade_medida] = useState('')
    const [status_operacional, setStatus_operacional] = useState('')
    const [observacao, setObservacao] = useState('')

    async function obterDadosFormulario(data) {
        try {
            const response = await axios.post('http://127.0.0.1:8000/api/sensores/', data, {
                headers: {
                    'Authorization': `Bearer ${localStorage.getItem('access_token')}`
                }
            });

            alert('Sensor cadastrado com sucesso!'); // mensagem de alerta
            navigate('/inicial/perfil'); // Redireciona para a página inicial após o cadastro
        } catch (error) {
            console.error('Erro no cadastro de sensor', error);
        }
    }

    return(
        <div className={estilos.conteiner}>
            <form className={estilos.formulario}  onSubmit={handleSubmit(obterDadosFormulario)}>
            {errors.tipo && (
                    <p>{errors.tipo.message}</p>
                )}
                <label>Tipo</label>
                <select
                    {...register('tipo')}
                    className={estilos.campo}
                    value={tipo}
                    onChange={e => setTipo(e.target.value)}
                >
                    <option value="">Selecione...</option>
                    {TIPO_SENSOR_CHOICES.map((tipo, i) => (
                        <option key={i} value={tipo}>
                            {tipo}
                        </option>
                    ))}
                </select>
               
 
                {errors.mac_address && (
                    <p>{errors.mac_address.message}</p>
                )}
                <label>Mac Address</label>
                <input
                    {...register('mac_address')}
                    className={estilos.campo}
                    placeholder="ex: 00:1B:44:11:3A:B7"
                    value={mac_address}
                    onChange={e => setMac_address(e.target.value)}
                />
 
 
                {errors.latitude && (
                    <p>{errors.latitude.message}</p>
                )}  
                <label>Latitude</label>
                <input
                    {...register('latitude')}
                    className={estilos.campo}
                    value={latitude}
                    onChange={e => setLatitude(e.target.value)}
                />
               
 
                {errors.longitude && (
                    <p>{errors.longitude.message}</p>
                )}
                <label>Longitude</label>
                <input
                    {...register('longitude')}
                    className={estilos.campo}
                    value={longitude}
                    onChange={e=> setLongitude(e.target.value)}
                />
 
 
                {errors.localizacao && (
                    <p>{errors.localizacao.message}</p>
                )}
                <label>Localização</label>
                <input
                    {...register('localizacao')}
                    className={estilos.campo}
                    value={localizacao}
                    onChange={e=> setLocalizacao(e.target.value)}
                />
 
                {errors.responsavel && (
                    <p>{errors.responsavel.message}</p>
                )}
                <label>Responsável</label>
                <input
                    {...register('responsavel')}
                    className={estilos.campo}
                    value={responsavel}
                    onChange={e=> setResponsavel(e.target.value)}
                />
 
 
                {errors.unidade_medida && (
                    <p>{errors.unidade_medida.message}</p>
                )}
                <label>Unidade de Medida</label>
                <select
                    {...register('unidade_medida')}
                    className={estilos.campo}
                    value={unidade_medida}
                    onChange={e=> setUnidade_medida(e.target.value)}
                >
                    <option value="">Selecione...</option>
                    {UNIDADE_MEDIDA_CHOICES.map((tipo, i) => (
                        <option key={i} value={tipo}>
                            {tipo}
                        </option>
                    ))}
                </select>
 
 
                {errors.status_operacional && (
                    <p>{errors.status_operacional.message}</p>
                )}
                <label>Status Operacional</label>
                <input
                    className={estilos.checkbox}
                    type="checkbox"
                    {...register('status_operacional')}
                    value={status_operacional}
                    onChange={e=> setStatus_operacional(e.target.value)}
                />
 
                {errors.observacao &&(
                    <p>{errors.observacao.message}</p>
                )}

                <label>Observação</label>
                <textarea
                    {...register('observacao')}
                    className={estilos.campo}
                    placeholder="Insira sua observação..."
                    value={observacao}
                    onChange={e=> setObservacao(e.target.value)}
                />

                <div className={estilos.BotaoMeio}>
                    <button className={estilos.botao} type='submit'>
                        Enviar
                    </button>
                </div>
            </form>
        </div>
    )
}