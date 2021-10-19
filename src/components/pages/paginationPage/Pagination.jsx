import './Pagination.module';
import PropTypes from 'prop-types';
import Pagination from '@molecules/pagination/Pagination';

function PaginationPage(props) {
  return <div>
    <Pagination defaultCurrent={2} total={100} />
  </div>;
}

PaginationPage.propTypes = {};

export default PaginationPage;
