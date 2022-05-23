import ExampleSection from '@templates/example-section/ExampleSection';
import pathExample from '~/routes/example-components.route';

export const Example = () => {
  return (
    <div>
      {pathExample['modal'].map((item, index) => {
        return <ExampleSection key={index} item={item} />;
      })}
    </div>
  );
};
