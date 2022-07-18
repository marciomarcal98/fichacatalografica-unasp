import styled from "styled-components"

export const DefaultLayoutContainer = styled.div`
  max-width: 37.5rem;
  min-height: calc(100vh - 10rem);
  margin: 3rem auto;
  padding: 1.5rem;

  background: ${(props) => props.theme['gray-800']};

  border-radius: 8px;

  display: flex;
  flex-direction: column;

  @media(max-width: 632px) {
    margin-inline: 1rem;
  }
`