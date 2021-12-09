import styled from '@emotion/styled';

/* eslint-disable-next-line */
export interface MyUiLibraryProps {}

const StyledMyUiLibrary = styled.div`
  color: pink;
`;

export function MyUiLibrary(props: MyUiLibraryProps) {
  return (
    <StyledMyUiLibrary>
      <h1>Welcome to MyUiLibrary!</h1>
    </StyledMyUiLibrary>
  );
}

export default MyUiLibrary;
