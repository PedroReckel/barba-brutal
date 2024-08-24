'use client'
import { useEffect, useState } from 'react'
import { Profissional } from '@barba/core'
import ProfissionalItem from '@/components/profissional/ProfissionalItem'
import Titulo from '@/components/shared/Titulo'

export default function NossosProfissionais() {
    const [profissionais, setProfissionais] = useState([]);

    useEffect(() => {
        async function fetchProfissionais() {
            try {
                const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/profissional`);
                const data = await response.json();
                setProfissionais(data);
            } catch (error) {
                console.error(`Erro ao buscar os serviços: `, error);
            }
        }

        fetchProfissionais();
    }, []);

    return (
        <div className="container flex flex-col items-center gap-y-16">
            <Titulo
                tag="Time"
                principal="Nossos Brutos"
                secundario="Só os mais brabos estão aqui! Temos o orgulho de ter o time mais qualificado do Brasil!"
            />
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-7 ">
                {profissionais.map((profissional: Profissional) => (
                    <ProfissionalItem key={profissional.id} profissional={profissional} />
                ))}
            </div>
        </div>
    );
}
