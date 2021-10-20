import Radio from '@molecules/radio/Radio';

const RadioGroup = () => {
  return (
    <>
      <Radio.Group name="country" appearance="chips">
        <Radio value="Brazil">Brazil</Radio>
        <Radio value="Slovakia">Slovakia</Radio>
        <Radio value="Micronesia">Micronesia</Radio>
      </Radio.Group>
    </>
  );
};

export default RadioGroup;
