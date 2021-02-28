import styled from "styled-components";

type Props = {
  responsive: any
}

const FormMultiInput = styled.div`
  display: flex;
  justify-content: space-between;

  & > div {
    width: 49%;
  }

  @media (max-width: 768px) {
    ${({ responsive }: Props) =>
    responsive &&
    `flex-direction: column`
  }
  }
`;
export default FormMultiInput;
