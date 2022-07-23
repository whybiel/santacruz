import React,{useState} from "react";
import * as S from "./style"

//COMPONENTS
import Fome from "../Cards/fome"
import Educa from "../Cards/educacao"
import Health from "../Cards/saude"
import Life from "../Cards/vida"

//IMAGES

import Fome0 from "./img/fome0.png"
import Educacao from "./img/educação.png"
import Saude from "./img/saude.png"
import Vida from "./img/vidaagua.png"

export default function ODS(){

    const [fome, setFome] = useState(false)
    const [educacao, setEducacao] = useState(false)
    const [saude, setSaude] = useState(false)
    const [vida, setVida] = useState(false)

    const TransformFome =()=>{
        setFome(true)
        setEducacao(false)
        setSaude(false)
        setVida(false)
    }
    const TransformEducacao =()=>{
        setFome(false)
        setEducacao(true)
        setSaude(false)
        setVida(false)
    }
    const TransformSaude =()=>{
        setFome(false)
        setEducacao(false)
        setSaude(true)
        setVida(false)
    }

    const TransformVida =()=>{
        setFome(false)
        setEducacao(false)
        setSaude(false)
        setVida(true)
    }
    const CloseAll =()=>{
        setFome(false)
        setEducacao(false)
        setSaude(false)
        setVida(false)
    }

    return(
        <S.Container>
            <S.SubContainer>
            <S.Img onClick={()=>{TransformFome()}} src={Fome0} alt="imagem ods contra fome"/>
            <S.Img onClick={()=>{TransformEducacao()}} src={Educacao} alt="imagem ods por mais educação"/>
            <S.Img onClick={()=>{TransformSaude()}} src={Saude} alt="imagem ods por mais saude"/>
            <S.Img onClick={()=>{TransformVida()}} src={Vida} alt="imagem ods por mais vida na água"/>
            </S.SubContainer>
            {fome && <Fome/>}
            {educacao && <Educa/>}
            {saude && <Health/>}
            {vida && <Life/>}
        </S.Container>
        
    )
}