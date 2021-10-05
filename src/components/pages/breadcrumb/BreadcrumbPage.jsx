import './Breadcrumb.module';
import PropTypes from 'prop-types';
import Breadcrumb from '@molecules/breadcrumb/Breadcrumb';

function BreadcrumbPage(props) {
  return <div>
    <Breadcrumb>
      <Breadcrumb.Item href="#">Home</Breadcrumb.Item>
      <Breadcrumb.Item href="#">Library</Breadcrumb.Item>
      <Breadcrumb.Item active>Data</Breadcrumb.Item>
    </Breadcrumb>
  </div>;
}

Breadcrumb.propTypes = {};

export default BreadcrumbPage;
