import Pagination from '@molecules/pagination/Pagination';

const PaginationBasic = () => {
  return (
    <>
      <Pagination total={400} defaultPageSize={5} />
    </>
  );
};

export default PaginationBasic;
