import styled from 'styled-components';

const StyledCheckbox = styled.input`
  appearance: none;
  width: 1.5rem;
  height: 1.5rem;
  border-radius: 0.25rem;
  border: 1px solid gray;
  background-color: white;
  color: white;

  &:checked {
    background-color: yellow;
    color: black;
  }
`;

const Checkbox = () => {
  return (
    <StyledCheckbox
      id="terms"
      aria-describedby="terms-description"
      name="terms"
      type="checkbox"
      required
    />
  );
};

export default Checkbox;
