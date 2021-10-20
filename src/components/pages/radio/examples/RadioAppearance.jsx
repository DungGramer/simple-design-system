import Radio from "@molecules/radio/Radio";

const RadioAppearance = () => {
  return <>
    <Radio name="name" value="John">John</Radio>
    <Radio name="name" value="Rodney" appearance="chips">Rodney</Radio>
  </>;
};

export default RadioAppearance;
