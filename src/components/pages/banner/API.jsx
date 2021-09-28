import { useTranslation } from 'react-i18next';
import Table, { Cell, HeaderCell, Column } from '@molecules/table/Table';

export const API = () => {
  const { t } = useTranslation();
  const data = [
    {
      property: <code>title</code>,
      description: t('The title of the button'),
      type: 'string',
      default: 'default',
    },
  ];

  return (
    <div>
      <h3>{t('API')}</h3>
      <p>
        {t(
          'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolores, quaerat?',
        )}
      </p>
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
