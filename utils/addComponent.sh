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
fileName=$(dashToCamelCase "$lowerFolder") # File name


# Create the folder if it doesn't exist
if [ -d "src/components/$1" ]; then
  warn "Directory already exists"
  cd "src/components/$1"
else
  cd src/components/$path
  mkdir $lowerFolder
  cd $lowerFolder
  touch $fileName.jsx $fileName.module.scss
fi

# Import the component
echo "import styles from './$fileName.module';" > $fileName.jsx
echo "import PropTypes from 'prop-types';" >> $fileName.jsx
echo "" >> $fileName.jsx
echo "const $fileName = ({}) => {" >> $fileName.jsx
echo "  return <div className={styles[$lowerFolder]}>$fileName</div>;" >> $fileName.jsx
echo "}" >> $fileName.jsx
echo "" >> $fileName.jsx
echo "$fileName.propTypes = {};" >> $fileName.jsx
echo "" >> $fileName.jsx
echo "export default $fileName;" >> $fileName.jsx

# Import the styles
echo ".$lowerFolder {" >> $fileName.module.scss
echo "}" >> $fileName.module.scss


title "Component created in src/components/$path$lowerFolder"

