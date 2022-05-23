import Breadcrumb from '@molecules/breadcrumb/Breadcrumb';

const BreadcrumbSeparator = () => {
  return (
    <>
      <Breadcrumb separator=">">
        <Breadcrumb.Item href="#">Home</Breadcrumb.Item>
        <Breadcrumb.Item href="#">Library</Breadcrumb.Item>
        <Breadcrumb.Item>Data</Breadcrumb.Item>
      </Breadcrumb>
    </>
  );
};

export default BreadcrumbSeparator;
