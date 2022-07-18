import styled from "styled-components";

const BaseDiv = styled.div`
  padding: 1rem;
  background: ${props => props.theme["gray-700"]};
  border-radius: 8px;
  display: flex;
  flex-direction: column;

  span {
    margin-bottom: 1rem;
    color: ${props => props.theme["gray-100"]};
    font-weight: 700;
    font-size: 1.5rem;
  }
`

export const Input = styled.input`
  background: transparent;
  height: 2.5rem;
  border: 0;
  border-bottom: 2px solid ${(props) => props.theme['gray-500']};
  font-weight: 700;
  font-size: 0.875rem;
  padding: 0 0.5rem;
  color: ${(props) => props.theme['gray-100']};
  margin-bottom: 1.5rem;

  &:focus {
    box-shadow: none;
    border-bottom: 2px solid ${(props) => props.theme['green-500']};
  }

  &::placeholder {
    color: ${(props) => props.theme['gray-500']};
  }
`

export const AuthorContainer = styled(BaseDiv)`
  margin-bottom: 2rem;
`

export const SelectContainer = styled.div`
  span {
    color: ${(props) => props.theme['gray-500']};
    font-weight: 700;
    font-size: 0.875rem;
    margin-right: 0.5rem;
  }

  select {
    padding: 0.5rem;
    margin-bottom: 1.5rem;
    border-radius: 8px;
    border: 0;
    background: ${props => props.theme["gray-600"]};
    color: ${props => props.theme["gray-100"]};
    cursor: pointer;
  }

  @media(max-width: 440px) {
    display: flex;
    flex-direction: column;
  }
`

export const FinalPaperInfo = styled(BaseDiv)`
  margin-bottom: 2rem;
`

export const OrientationInfo = styled(BaseDiv)`
  margin-bottom: 2rem;
`

export const SubjectsInfo = styled(BaseDiv)`
  margin-bottom: 2rem;

  small {
    font-size: 1rem;
  }
`

export const SubmitButton = styled.button`
  width: 100%;
  padding: 1rem;
  border-radius: 8px;
  border: 0;
  color: ${props => props.theme.white};
  background: ${props => props.theme["green-500"]};

  &:disabled {
    opacity: 0.7;
    cursor: not-allowed;
  }

  &:not(:disabled):hover {
    transition: background 0.2s;
    background: ${props => props.theme["green-300"]};
    cursor: pointer;
  }
`