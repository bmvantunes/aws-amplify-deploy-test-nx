import styled from '@emotion/styled';
import { GetServerSideProps } from 'next';

const StyledPage = styled.div`
  color: red;
`;

export function Hello(nx: unknown) {
  return (
    <StyledPage>NEW NEW NEW NEW NXloXXXXXl {JSON.stringify({ nx })}</StyledPage>
  );
}

export const getServerSideProps: GetServerSideProps = async () => {
  return {
    props: { nx: new Date().toISOString() },
  };
};

export default Hello;
