import React from "react";
import * as S from "./style"

import Vida from "./img/vidabg.png"

export default function Fome() {
    return (
        <S.Container>
            <S.ImgODS src={Vida} alt="ods 14 vida na agua"/>
            <div>
                <S.P>1.1: Evitar jogar gorduras e lixos pela descarga ou bueiros abertos na comunidade.</S.P>
                <S.P>1.2: Não jogar lixo em valões, rios, lagos para que a poluição não devaste o ecossistema local.</S.P>
                <S.P>1.3: Não jogar produtos químicos, materiais com componentes elétricos como: pilhas, baterias, celulares</S.P>
                <S.P>1.4: Evitar descarte de plástico, móveis, etc próximos de locais com água.</S.P>
            </div>
        </S.Container>
    )
}