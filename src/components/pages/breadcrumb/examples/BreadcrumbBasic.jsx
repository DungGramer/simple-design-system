import Breadcrumb from '@molecules/breadcrumb/Breadcrumb';

const BreadcrumbBasic = () => {
  return (
    <>
      <Breadcrumb>
        <Breadcrumb.Item href="#">Home</Breadcrumb.Item>
        <Breadcrumb.Item href="#">Library</Breadcrumb.Item>
        <Breadcrumb.Item active>Data</Breadcrumb.Item>
      </Breadcrumb>
    </>
  );
};

export default BreadcrumbBasic;
