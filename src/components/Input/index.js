import { InputContainer } from './styles';

const Input = ({ value }) => {
    return (
        <InputContainer>
            <input disabled type='text' value={value} />
        </InputContainer>
    );
};

export default Input;
