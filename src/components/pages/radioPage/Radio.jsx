import './Radio.module';
import PropTypes from 'prop-types';
import Radio from '@molecules/radio/Radio';

function RadioPage(props) {
  return <div>
    <Radio value="a">Hello</Radio>
    <Radio name="a" disabled>Hello</Radio>
    <Radio name="a" appearance='chips'>Hello</Radio>

    <Radio.Group name="a" appearance="chips">
      <Radio value="a">A</Radio>
      <Radio value="b">B</Radio>
    </Radio.Group>
  </div>;
}

RadioPage.propTypes = {};

export default RadioPage;
