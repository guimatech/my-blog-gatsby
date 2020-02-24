import React from 'react'

import * as S from './styled'

const PostItem = () => (
  <S.PostItemLink>
    <S.PostItemWrapper>
      <S.PostItemTag background="#47650b">Misc</S.PostItemTag>
      <S.PostItemInfo>
        <S.PostItemDate>24 de fevereiro de 2020 - 4 min de leitura</S.PostItemDate>
        <S.PostItemTitle>
          Clean code na prática
        </S.PostItemTitle>
        <S.PostItemDescription>
          Nesse artigo vou te mostrar como aplicar clean code na prática.
        </S.PostItemDescription>
      </S.PostItemInfo>
    </S.PostItemWrapper>
  </S.PostItemLink>
)

export default PostItem