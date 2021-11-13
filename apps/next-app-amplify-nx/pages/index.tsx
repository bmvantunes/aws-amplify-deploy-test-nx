import styled from '@emotion/styled';
import { GetServerSideProps } from 'next';

const StyledPage = styled.div`
  .page {
  }
`;

export function Index(nx: unknown) {
  /*
   * Replace the elements below with your own.
   *
   * Note: The corresponding styles are in the ./index.@emotion/styled file.
   */
  return (
    <StyledPage>
     Hello NX {JSON.stringify({nx})}
    </StyledPage>
  );
}

export const getServerSideProps:GetServerSideProps = async() => {
  return {
    props: {nx: new Date().toISOString()}
  }
}

export default Index;
