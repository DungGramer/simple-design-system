import Flag from '@molecules/flag/Flag';

const FlagAppearance = () => {
  return (
    <>
      <Flag title="New version published" />
      <Flag title="New version published" appearance="warning" />
      <Flag title="New version published" appearance="error" />
      <Flag title="New version published" appearance="success" />
    </>
  );
};

export default FlagAppearance;