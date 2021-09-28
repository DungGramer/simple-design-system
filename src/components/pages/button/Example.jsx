import ExampleSection from '@molecules/example-section/ExampleSection';
import pathExample from '~/routes/example-components.route';

export const Example = () => {
	return (
		<div>
			{pathExample.button.map((item, index) => {
				return <ExampleSection key={index} item={item} />;
			})}
		</div>
	);
};