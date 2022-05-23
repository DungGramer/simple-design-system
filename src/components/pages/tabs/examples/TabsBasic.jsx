import Tabs from '@molecules/tabs/Tabs';
import job from '~/mock/job';
import name from '~/mock/name';
import address from '~/mock/address';

const TabsBasic = () => {
  const RenderData = ({ data, length }) => (
    <ul>
      {data.slice(0, length).map((item, index) => (
        <li key={index}>{item}</li>
      ))}
    </ul>
  );

  return (
    <>
      <Tabs title={['Name', 'Job', 'Address']}>
        <RenderData data={name} length={10} />
        <RenderData data={job} length={10} />
        <RenderData data={address} length={10} />
      </Tabs>
    </>
  );
};

export default TabsBasic;
