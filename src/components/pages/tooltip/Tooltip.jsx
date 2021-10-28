import './Tooltip.module';
import PropTypes from 'prop-types';
import Button from '@atoms/button/Button';
import Tooltip from '@molecules/tooltip/Tooltip';

function TooltipPage(props) {
  return <div>
    <Tooltip content="hover me">
    <Button title="Tooltip" />
    </Tooltip>
  </div>;
}

TooltipPage.propTypes = {};

export default TooltipPage;
