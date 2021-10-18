title() {
  echo -e "\e[1;97;44m$1\e[0m"
}

warn() {
  echo -e "\e[1;97;41m$1\e[0m"
}

dashToCamelCase() {
  echo "$1" | sed -r 's/(^|_|-)([a-z])/\U\2/g'
}

lowerCase() {
    echo "$1" | tr '[:upper:]' '[:lower:]'
}

getPath() {
  echo "$1" | sed -r 's/([^\/])*$/\ /g' | xargs
}


# Set up variables
path=$(getPath "$1")
lastFolder=${1##*\/}

lowerFolder=$(lowerCase "$lastFolder") # Folder name
fileName=$(dashToCamelCase "${lowerFolder}") # File name
lowerFileName=$(lowerCase "$fileName") # File name
namePage="${fileName}Page"


# Create the folder if it doesn't exist
if [ -d "src/components/pages/$1" ]; then
  warn "Directory already exists"
  cd "src/components/pages/$1"
else
  code src/routes/example-components.route.js
  cd src/components/pages/$path
  mkdir $lowerFolder
  cd $lowerFolder
  touch "${fileName}Page".jsx $fileName.module.scss API.jsx Example.jsx Usage.jsx
  mkdir examples && cd examples && touch index.js && cd ..

# Import API.jsx
echo "import { useTranslation } from 'react-i18next';
import TableAPI from '@templates/TableAPI/TableAPI';

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
			<h4>{t('<"${fileName}" />')}</h4>

			<TableAPI data={data} />
		</div>
	);
};" > API.jsx

# Import Example.jsx
echo "import ExampleSection from '@templates/example-section/ExampleSection';
import pathExample from '~/routes/example-components.route';

export const Example = () => {
	return (
		<div>
			{pathExample['"${lowerFileName}"'].map((item, index) => {
				return <ExampleSection key={index} item={item} />;
			})}
		</div>
	);
};" > Example.jsx

# Import Usage.jsx
echo "import { useTranslation } from 'react-i18next';

export const Usage = () => {
  const { t } = useTranslation();

  return <div>
    <h3>{t('Usage')}</h3>
    <p>{t('Lorem ipsum dolor sit amet consectetur adipisicing elit. Id, consectetur?')}</p>

  </div>;
}" > Usage.jsx

# Import $fileName.jsx
echo "import { Example } from './Example';
import { API } from './API';
import { Usage } from './Usage';
import { useTranslation } from 'react-i18next';
import Tabs from '@molecules/tabs/Tabs';

const "${namePage}" = ({}) => {
  const { t } = useTranslation();

  return (
    <div>
      <h1>{t('"${lowerFileName}".title')}</h1>
      <p>{t('"${lowerFileName}".description')}</p>

      <Tabs title={[t('Examples'), t('API'), t('Usage')]}>
        <Example />
        <API />
        <Usage />
      </Tabs>
    </div>
  );
}

"${namePage}".propTypes = {};

export default "${namePage}";" > $namePage.jsx

fi