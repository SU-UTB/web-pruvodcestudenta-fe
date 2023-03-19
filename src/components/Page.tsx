import styled from "styled-components";

const PageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100vw;
  justify-content: center;
`

interface Props {
    children: React.ReactNode;
}

export const Page = ({children}: Props) => {
    return (
        <>
            {children}
        </>
    );
}