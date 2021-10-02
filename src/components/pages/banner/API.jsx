import { useTranslation } from 'react-i18next';
import Table, { Cell, HeaderCell, Column } from '@molecules/table/Table';

export const API = () => {
  const { t } = useTranslation();
  const data = [
    {
      property: <code>children</code>,
      description: t('Content to be shown'),
      type: 'node',
    },
    {
      property: <code>type</code>,
      description: t('Visual style to be used for the banner'),
      type: <span><code>warning</code> | <code>error</code> | <code>announcement</code></span>,
      default: <code>warning</code>,
    },
    {
      property: <code>icon</code>,
      description: t('Show icon of banner'),
      type: 'string',
    },
  ];

  return (
    <div>
      <h3>{t('API')}</h3>
      <h4>{t('<Banner>')}</h4>
      <Table data={data}>
        <Column>
          <HeaderCell header={t('Property')} />
          <Cell dataKey='property' />
        </Column>
        <Column>
          <HeaderCell header={t('Description')} />
          <Cell dataKey='description' />
        </Column>
        <Column>
          <HeaderCell header={t('Type')} />
          <Cell dataKey='type' />
        </Column>
        <Column>
          <HeaderCell header={t('Default')} />
          <Cell dataKey='default' />
        </Column>
      </Table>
    </div>
  );
};
