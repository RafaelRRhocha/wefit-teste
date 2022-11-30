import type { FC } from 'react';
import { SDiv } from './styles';

interface LoadingProps {}

const Loading: FC<LoadingProps> = ({}) => {
  return (
    <SDiv>
      <picture>
        <img src="https://user-images.githubusercontent.com/99758843/185761535-b0fe5cf6-49e2-44f8-bd35-64100d247654.gif" alt="loading" />
      </picture>
    </SDiv>
  );
}

export default Loading;