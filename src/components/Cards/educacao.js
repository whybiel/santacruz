import React from "react";
import * as S from "./style"

import Educabg from "./img/educabg.png"

export default function Education() {
    return (
        <S.Container>
            <S.ImgODS src={Educabg} alt="ods 4 educação de qualidade"/>
            <div>
            <S.P>1.1: Fazer grupos de estudos para pessoas dispostas a aprender e que buscam melhor qualidade de vida através do estudo.</S.P>
                <S.P>1.2: Criar cursos sociais como: pré-enem, pré-militar etc</S.P>
                <S.P>1.3: Buscar professores recém formados e investir em explicadoras.</S.P>
                <S.P>1.4: Promover ações locais feita pela própria comunidade com caráter educativo</S.P>
            </div>

        </S.Container>
    )
}