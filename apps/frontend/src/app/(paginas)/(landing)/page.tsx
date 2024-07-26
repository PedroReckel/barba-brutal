'use client'

import TituloSlogan from "@/src/components/landing/TituloSlogan"
import ContainerComBackground from "@/src/components/shared/ContainerComBackground"
import NossosServicos from '../../../components/servico/NossosServicos'
import NossosProfissionais from "@/src/components/profissional/NossosProfissionais"
import NossosClientes from "@/src/components/cliente/NossosClientes"

export default function Landing() {
    return (
        <div>
            <TituloSlogan />
            <ContainerComBackground imagem="/banners/servicos.webp">
                <NossosServicos /> 
            </ContainerComBackground>
            <ContainerComBackground imagem="/banners/prossionais.webp">
                <NossosProfissionais /> 
            </ContainerComBackground>
            <ContainerComBackground imagem="/banners/clientes.webp">
                <NossosClientes /> 
            </ContainerComBackground>
        </div>
    )
}