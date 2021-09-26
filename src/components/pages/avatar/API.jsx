import { useTranslation } from 'react-i18next';
import TableAPI from '@templates/TableAPI';

export const API = () => {
	const { t } = useTranslation();

	const avatar = [
		{
			property: <code>appearance</code>,
			description: t('Indicates the shape of the avatar'),
			type: (
				<span>
					<code>circle</code> | <code>square</code>
				</span>
			),
			default: <code>circle</code>,
		},
		{
			property: <code>size</code>,
			description: t('Defines the size of the avatar'),
			type: (
				<span>
					<code>xsmall</code> | <code>small</code> | <code>medium</code> |
					<code>large</code> | <code>xlarge</code> | <code>xxlarge</code>
				</span>
			),
			default: <code>medium</code>,
		},
		{
			property: <code>status</code>,
			description: t("Indicates a user's online status"),
			type: (
				<span>
					<code>online</code> | <code>offline</code> | <code>busy</code>
				</span>
			),
		},
	];

  const avatarGroup = [
    {
			property: <code>size</code>,
			description: t('Defines the size of the avatar'),
			type: (
				<span>
					<code>xsmall</code> | <code>small</code> | <code>medium</code> |
					<code>large</code> | <code>xlarge</code> | <code>xxlarge</code>
				</span>
			),
			default: <code>medium</code>,
		},
    {
      property: <code>length</code>,
      description: t('Defines the number of avatars you want show'),
      type: 'number',
    }
  ]

	return (
		<div>
			<h3>{t('API')}</h3>

			<h4>{t('<Avatar>')}</h4>
			<TableAPI data={avatar} />

      <h4>{t('<Avatar.Group>')}</h4>
      <TableAPI data={avatarGroup} />

		</div>
	);
};
