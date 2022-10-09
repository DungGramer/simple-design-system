import styles from './Pagination.module';
import PropTypes from 'prop-types';
import { useState } from 'react';
import { useEffect } from 'react';
import Icon from '@atoms/icon/Icon';
import {
  FaAngleDoubleLeft,
  FaAngleDoubleRight,
  FaChevronLeft,
  FaChevronRight,
  FaEllipsisH,
} from 'react-icons/fa';

// const renderData = (data) => {
//   return (
//     <ul>
//       {data.map((item, index) => {
//         return <li key={index}>{item.title}</li>;
//       })}
//     </ul>
//   );
// };

const Pagination = ({ defaultCurrent, total, defaultPageSize }) => {
  // const [data, setData] = useState([]);

  const [currentPage, setCurrentPage] = useState(defaultCurrent);
  const [itemPerPage, setItemPerPage] = useState(defaultPageSize);

  const [maxPageLimit, setMaxPageLimit] = useState(defaultPageSize);
  const [minPageLimit, setMinPageLimit] = useState(0);

  const totalPages = Math.ceil(total / itemPerPage);
  const pages = Array.from({ length: totalPages }, (v, i) => i + 1);

  const firstPage = pages.shift();
  const lastPage = pages.pop();

  // const indexOfLastItem = currentPage * itemPerPage;
  // const indexOfFirstItem = indexOfLastItem - itemPerPage;
  // const currentData = data.slice(indexOfFirstItem, indexOfLastItem);

  // useEffect(() => {
  //   fetch('https://jsonplaceholder.typicode.com/todos/')
  //     .then((response) => response.json())
  //     .then((json) => setData(json));
  // }, []);

  const handleChange = (e) => {
    setCurrentPage(Number(e.target.innerText));
  };

  const handleNext = () => {
    setCurrentPage(currentPage + 1);

    if (currentPage + 1 > maxPageLimit) {
      setMaxPageLimit(maxPageLimit + itemPerPage);
      setMinPageLimit(minPageLimit + itemPerPage);
    }
  };

  const handlePrev = () => {
    setCurrentPage(currentPage - 1);

    if ((currentPage - 1) % itemPerPage === 0) {
      setMaxPageLimit(maxPageLimit - itemPerPage);
      setMinPageLimit(minPageLimit - itemPerPage);
    }
  };

  const handleForward = () => {
    setCurrentPage(currentPage + itemPerPage);

    if (currentPage + itemPerPage > maxPageLimit) {
      setMaxPageLimit(maxPageLimit + itemPerPage);
      setMinPageLimit(minPageLimit + itemPerPage);
    }
  };

  const handleBackward = () => {
    setCurrentPage(currentPage - itemPerPage);

    if (currentPage - itemPerPage > 0) {
      setMaxPageLimit(maxPageLimit - itemPerPage);
      setMinPageLimit(minPageLimit - itemPerPage);
    }
  };

  const handleMoveFirst = () => {
    setCurrentPage(firstPage);
    setMaxPageLimit(defaultPageSize);
    setMinPageLimit(0);
  };

  const handleMoveLast = () => {
    setCurrentPage(lastPage);
    setMaxPageLimit(lastPage);
    setMinPageLimit(lastPage - defaultPageSize);
  };

  const PageNumberItem = ({ onClick, pageNum }) => (
    <li onClick={onClick} className={currentPage == pageNum ? styles.active : null}>
      <a rel="nofollow">{pageNum}</a>
    </li>
  );

  const renderPageNumbers = pages.map((pageNum, index) => {
    if (pageNum < maxPageLimit + 1 && pageNum > minPageLimit) {
      return <PageNumberItem onClick={handleChange} pageNum={pageNum} />;
    }
    return null;
  });

  return (
    <nav className={styles['pagination']}>
      {/* {renderData(currentData)} */}
      <ul className={styles.pageNumber}>
        {currentPage !== firstPage && (
          <li onClick={handlePrev}>
            <Icon icon={<FaChevronLeft />} cursor="pointer" size="16px" />
          </li>
        )}
        <PageNumberItem onClick={handleMoveFirst} pageNum={firstPage} />
        {minPageLimit >= 1 && (
          <li onClick={handleBackward} className={`${styles.ellipsis} ${styles['ellipsis-prev']}`}>
            <Icon icon={<FaEllipsisH />} cursor="pointer" size="16px" className={styles['dot']} />
            <Icon
              icon={<FaAngleDoubleLeft />}
              cursor="pointer"
              size="16px"
              className={styles.next}
            />
          </li>
        )}
        {renderPageNumbers}
        {pages.length > maxPageLimit && (
          <li onClick={handleForward} className={`${styles.ellipsis} ${styles['ellipsis-next']}`}>
            <Icon icon={<FaEllipsisH />} cursor="pointer" size="16px" className={styles['dot']} />
            <Icon
              icon={<FaAngleDoubleRight />}
              cursor="pointer"
              size="16px"
              className={styles.next}
            />
          </li>
        )}
        <PageNumberItem onClick={handleMoveLast} pageNum={lastPage} />
        {currentPage !== lastPage && (
          <li onClick={handleNext}>
            <Icon icon={<FaChevronRight />} cursor="pointer" size="16px" />
          </li>
        )}
      </ul>
    </nav>
  );
};

Pagination.propTypes = {
  defaultCurrent: PropTypes.number,
  total: PropTypes.number,
};

Pagination.defaultProps = {
  defaultCurrent: 1,
  defaultPageSize: 1,
};

export default Pagination;
