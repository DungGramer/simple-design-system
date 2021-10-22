import Button from '@atoms/button/Button';
import Banner from '@molecules/banner/Banner';
import Lozenge from '@molecules/lozenge/Lozenge';
import Tabs from '@molecules/tabs/Tabs';

const TabsControlled = () => {
  return (
    <>
      <Tabs defaultTab={2} title={['Banner', 'Lozenge', 'Button']}>
        <Banner type="announcement">Announcement message goes here</Banner>
        <Lozenge>Default</Lozenge>
        <Button title="Click me" />
      </Tabs>
    </>
  );
};

export default TabsControlled;