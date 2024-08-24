'use client'
import { useState, useEffect } from 'react';
import { Servico } from '@barba/core'
import { useRouter } from 'next/navigation';
import ServicoItem from './ServicoItem';
import Titulo from '../shared/Titulo';

export default function NossosServicos() {
    const [servicos, setServicos] = useState([]);
    const router = useRouter();

    useEffect(() => {
        async function fetchServicos() {
            try {
                const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/servico`);
                const data = await response.json();
                setServicos(data);
                console.log(data)
            } catch (error) {
                console.error('Erro ao buscar os serviços:', error);
            }
        }

        fetchServicos();
    }, []);

    function iniciarAgendamento() {
        router.push('/agendamento');
    }

    return (
        <div className="flex flex-col gap-16">
            <Titulo
                tag="Serviços"
                principal="Do Clássico ao Rock"
                secundario="Cabelo afiado, barba de lenhador e mãos de motoqueiro, tudo ao som de rock pesado!"
            />
            <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-5">
                {servicos.map((servico: Servico) => (
                    <ServicoItem key={servico.id} servico={servico} onClick={iniciarAgendamento} />
                ))}
            </div>
        </div>
    );
}