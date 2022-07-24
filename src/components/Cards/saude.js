import React from "react";
import * as S from "./style"

import Saude from "./img/saudebg.png"

export default function Fome() {
    return (
        <S.Container>
            <S.ImgODS src={Saude} alt="ods 3 saude e bem estar"/>
            <div>
                <S.P>1.1: Participar das ações comunitárias ao combate de doenças e vetores de enfermidade.</S.P>
                <S.P>1.2: Evitar descarte de lixos em locais errados, evitando proliferação de pragas e consequentemente doenças.</S.P>
                <S.P>1.3: Aderir as campanhas de vacinação e manter a vacinação em dia.</S.P>
                <S.P>1.4: Manter consultas periódicas nos postos do SUS.</S.P>
            </div>

        </S.Container>
    )
}