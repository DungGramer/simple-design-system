import Table, { Cell, HeaderCell, Column } from '@molecules/table/Table';
import { objectGenerator } from '~/mock/objectGenerator';

const TableBasic = () => {
  const data = objectGenerator(['name', 'birthday', 'address', 'job'], 5, true);
  return (
    <>
      <Table data={data}>
        <Column>
          <HeaderCell header={'Name'} />
          <Cell dataKey="name" />
        </Column>
        <Column>
          <HeaderCell header={'Birthday'} />
          <Cell dataKey="birthday" />
        </Column>
        <Column>
          <HeaderCell header={'Address'} />
          <Cell dataKey="address" />
        </Column>
        <Column>
          <HeaderCell header={'Job'} />
          <Cell dataKey="job" />
        </Column>
      </Table>
    </>
  );
};

export default TableBasic;
