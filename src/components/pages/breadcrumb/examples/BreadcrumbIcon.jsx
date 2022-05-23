import Breadcrumb from '@molecules/breadcrumb/Breadcrumb';

const BreadcrumbIcon = () => {
  return (
    <>
      <Breadcrumb>
        <Breadcrumb.Item href="#">
          <i className="fas fa-home" />
        </Breadcrumb.Item>
        <Breadcrumb.Item href="#">
          <i className="fas fa-user" />
          <span>User</span>
        </Breadcrumb.Item>
        <Breadcrumb.Item>Details</Breadcrumb.Item>
      </Breadcrumb>
    </>
  );
};

export default BreadcrumbIcon;
