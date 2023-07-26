import React from 'react';
import { styled } from 'styled-components';
import listBackground from '../images/post_background.png';
import { StPContents, StPTitle, StSection } from './Main';
import Modal, { StModalbutton, StWrapButton } from './Modal';
import { QueryClient, useMutation, useQuery } from 'react-query';
import { deletePost, getPost } from '../api/post';

function List({ isActive }) {
  const queryClient = new QueryClient();
  const mutation = useMutation(deletePost, {
    onSuccess: () => {
      queryClient.invalidateQueries('post');
    },
  });
  const { isLoading, isError, data } = useQuery('post', getPost);
  if (isLoading) {
    return <p>로딩중입니다...!</p>;
  }
  if (isError) {
    return <p>오류가 발생하였습니다...!</p>;
  }

  const deleteHandler = (id) => {
    const deletePost = data.filter((post) => post.id === id);
    const checkPassword = prompt('비밀번호를 입력해주세요.');
    if (checkPassword === deletePost[0].password) {
      mutation.mutate(id);
    } else {
      alert('비밀번호가 틀렸습니다.');
    }
  };

  return (
    <StSection background={`url(${listBackground})`}>
      <StPTitle as={'h2'}>Post를 작성해서 해양동물들을 도와주세요.</StPTitle>
      <StPContents>
        해양동물을 위해 스스로 어떤 노력을 할 수 있을지 적어봅시다.
      </StPContents>
      <StPEtc>( post 하나 당 해양 동물에게 500원씩 기부가 됩니다. )</StPEtc>
      <Modal />
      <StCardWrap>
        {data.map((post) => {
          return (
            <StPostCard key={post.id} isActive={isActive}>
              <p>{post.contents}</p>
              <StWrapButton>
                <StModalbutton
                  width="125px"
                  backgroundcolor="#ffffffab"
                  border="1px solid var(--main-color)"
                  color="var(--main-color)"
                  onClick={() => {
                    deleteHandler(post.id);
                  }}
                >
                  삭제
                </StModalbutton>
              </StWrapButton>
            </StPostCard>
          );
        })}
      </StCardWrap>
    </StSection>
  );
}

export default List;
// const Stsection = styled.section`
//   background: ${(props) => props.background};
//   height: 930px;
// `;

const StCardWrap = styled.div`
  display: flex;
  height: 355px;
  width: 1600px;
  overflow-x: auto;
  padding-bottom: 50px;
  &::-webkit-scrollbar {
    height: 15px;
    box-shadow: 5px 5px 10px 0 #00000032;
  }
  &::-webkit-scrollbar-thumb {
    border-radius: 30px;
    background-color: var(--main-color);
  }
  &::-webkit-scrollbar-track {
    border-radius: 30px;
    background-color: #ffffff75;
  }
`;

const StPostCard = styled.div`
  background-color: #ffffffad;
  flex: 0 0 355px;
  margin-right: 60px;
  padding: 30px;
  box-sizing: border-box;
  box-shadow: 5px 5px 10px 0 #00000032;
  & p {
    height: 218px;
    margin-bottom: 30px;
  }
`;

const StPEtc = styled.p`
  font-weight: 300;
`;
