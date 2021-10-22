import { useTranslation } from 'react-i18next';
import TableAPI from '@templates/tableAPI/TableAPI';
import CodeColumn from '@templates/tableAPI/CodeColumn';

export const API = () => {
	const { t } = useTranslation();
	const data = [
		{
			property: <code>resize</code>,
			description: t('Enables the resizing of the textarea'),
			type: <CodeColumn data={['auto', 'vertical', 'horizontal', 'both']} />,
			default: <code>auto</code>,
		},
    {
      property: <code>isDisabled</code>,
      description: t('Sets the field as uneditable, with a changed hover state.'),
      type: <code>boolean</code>,
    },
    {
      property: <code>isReadOnly</code>,
      description: t('If true, prevents the value of the input from being edited.'),
      type: <code>boolean</code>,
    },
    {
      property: <code>isRequired</code>,
      description: t('Set required for form that the field is part of.'),
      type: <code>boolean</code>,
    },
    {
      property: <code>maxHeight</code>,
      description: t('Sets the maximum height of the textarea.'),
      type: <code>number</code>,
    },
    {
      property: <code>defaultValue</code>,
      description: t('The default value of the textarea'),
      type: <code>string</code>,
    },
    {
      property: <code>spellCheck</code>,
      description: t('Enables native spell check on the textarea element.'),
      type: <code>boolean</code>,
    }
	];
	return (
		<div>
			<h3>{t('API')}</h3>
			<h4>{t('<TextArea />')}</h4>

			<TableAPI data={data} />
		</div>
	);
};
