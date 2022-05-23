import Pagination from '@molecules/pagination/Pagination';

const PaginationIndex = () => {
  return (
    <div>
      <Pagination defaultCurrent={2} total={100} defaultPageSize={5} />
    </div>
  );
};

export default PaginationIndex;
