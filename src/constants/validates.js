export const isURL = (str) => {
  if (!str) return str;

  const pattern = new RegExp(
    '^(https?:\\/\\/)?' + // protocol
      '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.?)+[a-z]{2,}|' + // domain name
      '((\\d{1,3}\\.){3}\\d{1,3}))' + // OR ip (v4) address
      '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*' + // port and path
      '(\\?[;&a-z\\d%_.~+=-]*)?' + // query string
      '(\\#[-a-z\\d_]*)?$',
    'i'
  ); // fragment locator
  return pattern.test(str);
};

export const isEmail = (str) => {
  if (!str) return str;

  const pattern =
    /^(([^<>()\\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return pattern.test(str);
};

export const isPhoneVN = (str) => {
  if (!str) return str;

  const pattern =
    /^(0|\+84)(\s|\.)?((3[2-9])|(5[689])|(7[06-9])|(8[1-689])|(9[0-46-9]))(\d)(\s|\.)?(\d{3})(\s|\.)?(\d{3})$/;
  return pattern.test(str);
};

// export const isFalsy = (value) => {
//   if (Boolean(value) === false) {
//     return true;
//   }

//   if (typeof value === 'string' && value.trim() === '') {
//     return true;
//   }
//   if (Array.isArray(value) && value.length === 0) {
//     return true;
//   }

//   if (typeof value === 'object' && Object.keys(value).length === 0) {
//     return true;
//   }

//   const falsy = [
//     undefined,
//     'undefined',
//     null,
//     'null',
//     false,
//     'false',
//     '',
//     0,
//     -0,
//     '0',
//     '0.0',
//     0n,
//     NaN,
//     'NaN',
//     ' ',
//     '\t',
//     '\n',
//     '\r',
//     '\f',
//     '\v',
//     '\u00A0',
//     '\u2028',
//     '\u2029',
//     '\uFEFF',
//     '\u200B',
//     '\u180E',
//   ];
//   if (falsy.includes(value)) {
//     return true;
//   }

//   return false;
// };

export const isTruthy = (value) => {
  return !isFalsy(value);
};

export const isApple = () => {
  return [
    'iPad Simulator',
    'iPad',
    'iPhone Simulator',
    'iPhone',
    'iPod Simulator',
    'iPod',
    'Macintosh',
  ].includes(navigator.platform);
};

/**
 * @deprecated
 */
export const detectIOSVersion = () => {
  if (isApple()) {
    if (window.indexedDB) {
      return 'ios 8 or later';
    }
    if (window.webkitAudioContext) {
      return 'ios 7 or later';
    }
    if (window.webkitStorageInfo) {
      return 'ios 6 or later';
    }
    if (window.webkit) {
      return 'ios 5 or later';
    }
    if (window.Audio) {
      return 'ios 4 or later';
    }
    return 'ios 3 or later';
  }
  return false;
};

export const isMobile = () => {
  return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
    navigator.userAgent
  );
};
