import { useTableContext } from './Table';
import styles from './Table.module';
import Cell from './Cell';

const Row = ({ item }) => {
  const { columnsData } = useTableContext();

  return (
    <tr className={styles.row}>
      {columnsData.map(({ key, header, width }, index) => {
        return (
          <Cell width={width} key={key} heading={header}>
            {item[key]}
          </Cell>
        );
      })}
    </tr>
  );
};

export default Row;
