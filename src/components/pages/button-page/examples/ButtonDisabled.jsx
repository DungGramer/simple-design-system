import Button from '@atoms/button/Button';

const ButtonDisabled = () => {
	return (
		<>
			<Button title="Click me" disabled />
			<Button title="Click me" disabled type="primary" />
		</>
	);
};

export default ButtonDisabled;