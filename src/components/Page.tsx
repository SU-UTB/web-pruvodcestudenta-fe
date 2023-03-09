import styled from "styled-components";

const PageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100vw`;

// @ts-ignore
export const Page = (props) => {
    return (<PageWrapper>
        {
            props.children
        }
    </PageWrapper>);
}