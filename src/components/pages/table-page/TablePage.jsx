import styles from './TablePage.module';
import PropTypes from 'prop-types';
import Table, { Cell, HeaderCell, Column } from '@molecules/table/Table';
import { useTranslation } from 'react-i18next';



const TablePage = ({}) => {
  const { t } = useTranslation();
  const data = [
    {
      property: <code>title</code>,
      description: t('The title of the button'),
      type: 'string',
    },

    {
      property: <code>type</code>,
      description: t('The type of the button'),
      type: <span><code>primary</code> | <code>default</code> | <code>dashed</code> | <code>text</code> | <code>link</code></span>,
      default: 'default',
    },
    {
      property: <code>icon</code>,
      description: t('Set the icon component of button'),
      type: 'string',
    },
    {
      property: <code>size</code>,
      description: t('The size of the button'),
      type: <span><code>small</code> | <code>large</code></span>
    },
    {
      property: <code>shape</code>,
      description: t('Can be set button shape'),
      type: 'circle',
    },
    {
      property: <code>disabled</code>,
      description: t('Disabled state of button'),
      type: 'boolean',
      default: 'false',
    },
    {
      property: <code>loading</code>,
      description: t('Whether the button is loading'),
      type: 'boolean',
      default: 'false',
    },
    {
      property: <code>onClick</code>,
      description: t('The callback function when the button is clicked'),
      type: 'function',
    },
  ];
  console.log(`📕 data - 56:TablePage.jsx \n`, data);

  return <div className={styles['table-page']}>
    <Table data={data}>
      <Column>
        <HeaderCell>property</HeaderCell>
        <Cell dataKey="property" />
      </Column>
      <Column>
        <HeaderCell>description</HeaderCell>
        <Cell dataKey="description" />
      </Column>
      <Column>
        <HeaderCell>type</HeaderCell>
        <Cell dataKey="type" />
      </Column>
      <Column>
        <HeaderCell>default</HeaderCell>
        <Cell dataKey="default" />
      </Column>
    </Table>
  </div>;
}

TablePage.propTypes = {};

export default TablePage;
