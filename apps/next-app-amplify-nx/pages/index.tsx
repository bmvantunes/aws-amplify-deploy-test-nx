import styled from '@emotion/styled';
// import { GetServerSideProps } from 'next';
import { MyUiLibrary } from '@my-company-name/my-ui-library'

const StyledPage = styled.div`
  color: red;
`;

export function Index() {
  /*
   * Replace the elements below with your own.
   *
   * Note: The corresponding styles are in the ./index.@emotion/styled file.
   */
  return (
    <StyledPage>
     NEW NEW NEW NEW NXloXXXXXl

     <MyUiLibrary/>
    </StyledPage>
  );
}

// export const getServerSideProps:GetServerSideProps = async() => {
//   return {
//     props: {nx: new Date().toISOString()}
//   }
// }

export default Index;
