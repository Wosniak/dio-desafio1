import Input from './components/Input';
import Button from './components/Button';
import { Container, Content, Row } from './styles';
import { useState } from 'react';

const App = () => {
    const [currentNumber, setCurrentNumber] = useState('0');

    const [firstNumber, setFirstNumber] = useState(0);

    const [operator, setOperator] = useState(null);
    const [isNewNumber, setIsNewNumber] = useState(false);

    const handleAddNumber = (number) => {
        setCurrentNumber((prev) =>
            prev === '0' || isNewNumber ? `${number}` : `${prev}${number}`
        );
        setIsNewNumber(false);
    };

    const handleSum = () => {
        compute();
        setOperator('+');
        setIsNewNumber(true);
    };

    const handleMinus = () => {
        compute();
        setOperator('-');
        setIsNewNumber(true);
    };

    const handleMultiplication = () => {
        compute();
        setOperator('*');
        setIsNewNumber(true);
    };

    const handleDivision = () => {
        compute();
        setOperator('/');
        setIsNewNumber(true);
    };

    const handleEquals = () => {
        setCurrentNumber(
            handleOperation(operator, firstNumber, Number(currentNumber))
        );
        setFirstNumber(0);
        setIsNewNumber(true);
    };

    const handleClear = () => {
        setCurrentNumber('0');
        setFirstNumber(0);
    };

    const handleOperation = (operator, firstNumber, secondNumber) => {
        switch (operator) {
            case '+':
                return firstNumber + secondNumber;

            case '-':
                return firstNumber - secondNumber;

            case '*':
                return firstNumber * secondNumber;

            case '/':
                return firstNumber / secondNumber;

            default:
        }
    };

    const compute = () => {
        if (firstNumber === 0) {
            setFirstNumber(Number(currentNumber));
        } else {
            let result = handleOperation(
                operator,
                firstNumber,
                Number(currentNumber)
            );
            setFirstNumber(result);
            setCurrentNumber(result.toString());
        }
    };

    return (
        <Container className='App'>
            <Content>
                <Input value={currentNumber} />
                <Row>
                    <Button label={7} onClick={() => handleAddNumber('7')} />
                    <Button label={8} onClick={() => handleAddNumber('8')} />
                    <Button label={9} onClick={() => handleAddNumber('9')} />
                    <Button label='/' onClick={handleDivision} />
                </Row>
                <Row>
                    <Button label={4} onClick={() => handleAddNumber('4')} />
                    <Button label={5} onClick={() => handleAddNumber('5')} />
                    <Button label={6} onClick={() => handleAddNumber('6')} />
                    <Button label='*' onClick={handleMultiplication} />
                </Row>
                <Row>
                    <Button label={1} onClick={() => handleAddNumber('1')} />
                    <Button label={2} onClick={() => handleAddNumber('2')} />
                    <Button label={3} onClick={() => handleAddNumber('3')} />
                    <Button label='-' onClick={handleMinus} />
                </Row>
                <Row>
                    <Button label={0} onClick={() => handleAddNumber('0')} />
                    <Button label='.' onClick={() => handleAddNumber('.')} />
                    <Button label='%' disabled />
                    <Button label='+' onClick={handleSum} />
                </Row>
                <Row>
                    <Button label='=' onClick={handleEquals} />
                    <Button label='C' onClick={handleClear} />
                </Row>
            </Content>
        </Container>
    );
};

export default App;
