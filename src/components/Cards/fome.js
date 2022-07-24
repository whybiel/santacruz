import React from "react";
import * as S from "./style"

import Fomebg from "./img/fomebg.png"

export default function Fome() {
    return (
        <S.Container>
            <S.ImgODS src={Fomebg} alt="ods 2 fome zero"/>
            <div>
                <S.P>1.1: Garantir cestas básicas aos moradores de comunidade, dando foco em favelas e lugares marginalizados.</S.P>
                <S.P>1.2: Apoiar lugares que entregam quentinhas em Santa Cruz, com alimentos ou qalquer valor, podendo ser feito por moradores com condições melhores.</S.P>
                <S.P>1.3: Evitar o desperdício de comida, reaproveitando o máximo possível sempre, fazendo pratos e dando aos necessitados, ou até mesmo, dar aos animais domésticos ou de rua.</S.P>
                <S.P>1.4: Incentivar o cultivo de hortaliças e frutas para consumo próprio.</S.P>
                <S.P>1.5: Evitar remoção de grandes árvores frutíferas como: mangueira, bananeira, goiabeira etc.</S.P>
            </div>

        </S.Container>
    )
}