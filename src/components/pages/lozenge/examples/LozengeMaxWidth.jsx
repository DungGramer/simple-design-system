import Lozenge from '@molecules/lozenge/Lozenge';

const LozengeMaxWidth = () => {
  return (
    <>
      <Lozenge>default max width with long text which truncates</Lozenge>
      <Lozenge maxWidth={100}>custom max width with long text which truncates</Lozenge>
    </>
  );
};

export default LozengeMaxWidth;