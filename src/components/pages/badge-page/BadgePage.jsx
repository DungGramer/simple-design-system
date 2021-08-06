import styles from './BadgePage.module';
import PropTypes from 'prop-types';
import Badge from '@atoms/Badge/Badge';

function BadgePage({}) {
  return (
    <div className="badge-page">
      <h1>Badge</h1>
      <p>
        A badge is a visual indicator for numeric values such as tallies and
        scores.
      </p>
      <Badge appearance="info" >
        5000
      </Badge>
    </div>
  );
}

BadgePage.propTypes = {};

export default BadgePage;
