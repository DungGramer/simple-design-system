/**
 * Class DateTime
 * @constructor
 *
 * @property {Date} date
 * @method getYear() {Regex}
 * @method getMonth() {Regex}
 * @method getDay() {Regex}
 * @method getHours() {Regex}
 * @method getMinutes() {Regex}
 * @method getSeconds() {Regex}
 * @method getMilliseconds() {Regex}
 * @method getNanosecond() {Regex}
 * @method getAMPM() {Regex}
 * @method getTimezone() {Regex}
 * @method getDateTime() {Regex}
 * @method format() {Regex}
 *
 *
 * getDayOfWeek() {Regex}
 * getDayOfYear() {Regex}
 * getWeekOfYear() {Regex}
 * getWeekOfMonth() {Regex}
 * getDayOfWeekInMonth() {Regex}
 * getQuarter() {Regex}
 *
 */

class DateTime {
  constructor(date) {
    this.date = new Date(date);
  }

  regex = {
    Year: /(YYYY|YY|\%Y|\%y|\%C)/g,
    Month: /(MMMMM|MMMM|MMM|MM|M|\%m|\%b|\%B)/g,
    Day: /(DD|D|d|\%e)/g,
    DayOfWeek: /(%A|%a|%u|%w)/g,
    DayOfYear: /(%j|DDD|%d)/g,
    Hour: /(H|hh|h|\%H|\%I|\%k|\%l)/g,
    Minute: /(m|mm|\%M)/g,
    Second: /(s|ss|\%S|\%s)/g,
    Millisecond: /(S|SS|\%S|\%Q)/g,
    Nanosecond: /(n|nn|nnn|\%N)/g,
    AMPM: /(a|\%P|\%p)/g,
    TimeZone: /(Z|\%z|\%Z)/g,
    DateTime: /(\%c|\%F|\%D|\%T|\%r|\%R)/g
  };

  abbreviations = [
    {
      abbr: 'ACDT',
      name: 'Australian Central Daylight Saving Time',
      utc: '+10:30',
    },
    {
      abbr: 'ACST',
      name: 'Australian Central Standard Time',
      utc: '+9:30',
    },
    {
      abbr: 'ACT',
      name: 'Acre Time',
      utc: '-5',
    },
    {
      abbr: 'ADT',
      name: 'Atlantic Daylight Time',
      utc: '-3',
    },
    {
      abbr: 'AEDT',
      name: 'Australian Eastern Daylight Saving Time',
      utc: '+11',
    },
    {
      abbr: 'AEST',
      name: 'Australian Eastern Standard Time',
      utc: '+10',
    },
    {
      abbr: 'AET',
      name: 'Australian Eastern Time',
      utc: '+10/UTC+11',
    },
    {
      abbr: 'AFT',
      name: 'Afghanistan Time',
      utc: '+4:30',
    },
    {
      abbr: 'AKDT',
      name: 'Alaska Daylight Time',
      utc: '-8',
    },
    {
      abbr: 'AKST',
      name: 'Alaska Standard Time',
      utc: '-9',
    },
    {
      abbr: 'ALMT',
      name: 'Alma-Ata Time[1]',
      utc: '+6',
    },
    {
      abbr: 'AMST',
      name: 'Amazon Summer Time (Brazil)[2]',
      utc: '-3',
    },
    {
      abbr: 'AMT',
      name: 'Amazon Time (Brazil)[3]',
      utc: '-4',
    },
    {
      abbr: 'AMT',
      name: 'Armenia Time',
      utc: '+4',
    },
    {
      abbr: 'ANAT',
      name: 'Anadyr Time[4]',
      utc: '+12',
    },
    {
      abbr: 'AQTT',
      name: 'Aqtobe Time[5]',
      utc: '+5',
    },
    {
      abbr: 'ART',
      name: 'Argentina Time',
      utc: '-3',
    },
    {
      abbr: 'AST',
      name: 'Arabia Standard Time',
      utc: '+3',
    },
    {
      abbr: 'AST',
      name: 'Atlantic Standard Time',
      utc: '-4',
    },
    {
      abbr: 'AWST',
      name: 'Australian Western Standard Time',
      utc: '+8',
    },
    {
      abbr: 'AZOST',
      name: 'Azores Summer Time',
      utc: '+',
    },
    {
      abbr: 'AZOT',
      name: 'Azores Standard Time',
      utc: '-1',
    },
    {
      abbr: 'AZT',
      name: 'Azerbaijan Time',
      utc: '+4',
    },
    {
      abbr: 'BNT',
      name: 'Brunei Time',
      utc: '+8',
    },
    {
      abbr: 'BIOT',
      name: 'British Indian Ocean Time',
      utc: '+6',
    },
    {
      abbr: 'BIT',
      name: 'Baker Island Time',
      utc: '−12',
    },
    {
      abbr: 'BOT',
      name: 'Bolivia Time',
      utc: '-4',
    },
    {
      abbr: 'BRST',
      name: 'Brasília Summer Time',
      utc: '-2',
    },
    {
      abbr: 'BRT',
      name: 'Brasília Time',
      utc: '-3',
    },
    {
      abbr: 'BST',
      name: 'Bangladesh Standard Time',
      utc: '+6',
    },
    {
      abbr: 'BST',
      name: 'Bougainville Standard Time[6]',
      utc: '+11',
    },
    {
      abbr: 'BST',
      name: 'British Summer Time (British Standard Time from Feb 1968 to Oct 1971)',
      utc: '+1',
    },
    {
      abbr: 'BTT',
      name: 'Bhutan Time',
      utc: '+6',
    },
    {
      abbr: 'CAT',
      name: 'Central Africa Time',
      utc: '+2',
    },
    {
      abbr: 'CCT',
      name: 'Cocos Islands Time',
      utc: '+6:30',
    },
    {
      abbr: 'CDT',
      name: 'Central Daylight Time (North America)',
      utc: '-5',
    },
    {
      abbr: 'CDT',
      name: 'Cuba Daylight Time[7]',
      utc: '-4',
    },
    {
      abbr: 'CEST',
      name: 'Central European Summer Time',
      utc: '+2',
    },
    {
      abbr: 'CET',
      name: 'Central European Time',
      utc: '+1',
    },
    {
      abbr: 'CHADT',
      name: 'Chatham Daylight Time',
      utc: '+13:45',
    },
    {
      abbr: 'CHAST',
      name: 'Chatham Standard Time',
      utc: '+12:45',
    },
    {
      abbr: 'CHOT',
      name: 'Choibalsan Standard Time',
      utc: '+8',
    },
    {
      abbr: 'CHOST',
      name: 'Choibalsan Summer Time',
      utc: '+9',
    },
    {
      abbr: 'CHST',
      name: 'Chamorro Standard Time',
      utc: '+10',
    },
    {
      abbr: 'CHUT',
      name: 'Chuuk Time',
      utc: '+10',
    },
    {
      abbr: 'CIST',
      name: 'Clipperton Island Standard Time',
      utc: '-8',
    },
    {
      abbr: 'CKT',
      name: 'Cook Island Time',
      utc: '−10',
    },
    {
      abbr: 'CLST',
      name: 'Chile Summer Time',
      utc: '-3',
    },
    {
      abbr: 'CLT',
      name: 'Chile Standard Time',
      utc: '-4',
    },
    {
      abbr: 'COST',
      name: 'Colombia Summer Time',
      utc: '-4',
    },
    {
      abbr: 'COT',
      name: 'Colombia Time',
      utc: '-5',
    },
    {
      abbr: 'CST',
      name: 'Central Standard Time (North America)',
      utc: '-6',
    },
    {
      abbr: 'CST',
      name: 'China Standard Time',
      utc: '+8',
    },
    {
      abbr: 'CST',
      name: 'Cuba Standard Time',
      utc: '-5',
    },
    {
      abbr: 'CT',
      name: 'Central Time',
      utc: '-6, −05',
    },
    {
      abbr: 'CVT',
      name: 'Cape Verde Time',
      utc: '-1',
    },
    {
      abbr: 'CXT',
      name: 'Christmas Island Time',
      utc: '+7',
    },
    {
      abbr: 'DAVT',
      name: 'Davis Time',
      utc: '+7',
    },
    {
      abbr: 'DDUT',
      name: "Dumont d'Urville Time",
      utc: '+10',
    },
    {
      abbr: 'DFT',
      name: 'AIX-specific equivalent of Central European Time[NB 1]',
      utc: '+1',
    },
    {
      abbr: 'EASST',
      name: 'Easter Island Summer Time',
      utc: '-5',
    },
    {
      abbr: 'EAST',
      name: 'Easter Island Standard Time',
      utc: '-6',
    },
    {
      abbr: 'EAT',
      name: 'East Africa Time',
      utc: '+3',
    },
    {
      abbr: 'ECT',
      name: 'Eastern Caribbean Time (does not recognise DST)',
      utc: '-4',
    },
    {
      abbr: 'ECT',
      name: 'Ecuador Time',
      utc: '-5',
    },
    {
      abbr: 'EDT',
      name: 'Eastern Daylight Time (North America)',
      utc: '-4',
    },
    {
      abbr: 'EEST',
      name: 'Eastern European Summer Time',
      utc: '+3',
    },
    {
      abbr: 'EET',
      name: 'Eastern European Time',
      utc: '+2',
    },
    {
      abbr: 'EGST',
      name: 'Eastern Greenland Summer Time',
      utc: '+',
    },
    {
      abbr: 'EGT',
      name: 'Eastern Greenland Time',
      utc: '-1',
    },
    {
      abbr: 'EST',
      name: 'Eastern Standard Time (North America)',
      utc: '-5',
    },
    {
      abbr: 'ET',
      name: 'Eastern Time (North America)',
      utc: '-5, −04',
    },
    {
      abbr: 'FET',
      name: 'Further-eastern European Time',
      utc: '+3',
    },
    {
      abbr: 'FJT',
      name: 'Fiji Time',
      utc: '+12',
    },
    {
      abbr: 'FKST',
      name: 'Falkland Islands Summer Time',
      utc: '-3',
    },
    {
      abbr: 'FKT',
      name: 'Falkland Islands Time',
      utc: '-4',
    },
    {
      abbr: 'FNT',
      name: 'Fernando de Noronha Time',
      utc: '-2',
    },
    {
      abbr: 'GALT',
      name: 'Galápagos Time',
      utc: '-6',
    },
    {
      abbr: 'GAMT',
      name: 'Gambier Islands Time',
      utc: '-9',
    },
    {
      abbr: 'GET',
      name: 'Georgia Standard Time',
      utc: '+4',
    },
    {
      abbr: 'GFT',
      name: 'French Guiana Time',
      utc: '-3',
    },
    {
      abbr: 'GILT',
      name: 'Gilbert Island Time',
      utc: '+12',
    },
    {
      abbr: 'GIT',
      name: 'Gambier Island Time',
      utc: '-9',
    },
    {
      abbr: 'GMT',
      name: 'Greenwich Mean Time',
      utc: '+0',
    },
    {
      abbr: 'GST',
      name: 'South Georgia and the South Sandwich Islands Time',
      utc: '-2',
    },
    {
      abbr: 'GST',
      name: 'Gulf Standard Time',
      utc: '+4',
    },
    {
      abbr: 'GYT',
      name: 'Guyana Time',
      utc: '-4',
    },
    {
      abbr: 'HDT',
      name: 'Hawaii–Aleutian Daylight Time',
      utc: '-9',
    },
    {
      abbr: 'HAEC',
      name: "Heure Avancée d'Europe Centrale French-language name for CEST",
      utc: '+2',
    },
    {
      abbr: 'HST',
      name: 'Hawaii–Aleutian Standard Time',
      utc: '−10',
    },
    {
      abbr: 'HKT',
      name: 'Hong Kong Time',
      utc: '+8',
    },
    {
      abbr: 'HMT',
      name: 'Heard and McDonald Islands Time',
      utc: '+5',
    },
    {
      abbr: 'HOVST',
      name: 'Hovd Summer Time (not used from 2017-present)',
      utc: '+8',
    },
    {
      abbr: 'HOVT',
      name: 'Hovd Time',
      utc: '+7',
    },
    {
      abbr: 'ICT',
      name: 'Indochina Time',
      utc: '+7',
    },
    {
      abbr: 'IDLW',
      name: 'International Day Line West time zone',
      utc: '−12',
    },
    {
      abbr: 'IDT',
      name: 'Israel Daylight Time',
      utc: '+3',
    },
    {
      abbr: 'IOT',
      name: 'Indian Ocean Time',
      utc: '+3',
    },
    {
      abbr: 'IRDT',
      name: 'Iran Daylight Time',
      utc: '+4:30',
    },
    {
      abbr: 'IRKT',
      name: 'Irkutsk Time',
      utc: '+8',
    },
    {
      abbr: 'IRST',
      name: 'Iran Standard Time',
      utc: '+3:30',
    },
    {
      abbr: 'IST',
      name: 'Indian Standard Time',
      utc: '+5:30',
    },
    {
      abbr: 'IST',
      name: 'Irish Standard Time[8]',
      utc: '+1',
    },
    {
      abbr: 'IST',
      name: 'Israel Standard Time',
      utc: '+2',
    },
    {
      abbr: 'JST',
      name: 'Japan Standard Time',
      utc: '+9',
    },
    {
      abbr: 'KALT',
      name: 'Kaliningrad Time',
      utc: '+2',
    },
    {
      abbr: 'KGT',
      name: 'Kyrgyzstan Time',
      utc: '+6',
    },
    {
      abbr: 'KOST',
      name: 'Kosrae Time',
      utc: '+11',
    },
    {
      abbr: 'KRAT',
      name: 'Krasnoyarsk Time',
      utc: '+7',
    },
    {
      abbr: 'KST',
      name: 'Korea Standard Time',
      utc: '+9',
    },
    {
      abbr: 'LHST',
      name: 'Lord Howe Standard Time',
      utc: '+10:30',
    },
    {
      abbr: 'LHST',
      name: 'Lord Howe Summer Time',
      utc: '+11',
    },
    {
      abbr: 'LINT',
      name: 'Line Islands Time',
      utc: '+14',
    },
    {
      abbr: 'MAGT',
      name: 'Magadan Time',
      utc: '+12',
    },
    {
      abbr: 'MART',
      name: 'Marquesas Islands Time',
      utc: '-9:30',
    },
    {
      abbr: 'MAWT',
      name: 'Mawson Station Time',
      utc: '+5',
    },
    {
      abbr: 'MDT',
      name: 'Mountain Daylight Time (North America)',
      utc: '-6',
    },
    {
      abbr: 'MET',
      name: 'Middle European Time (same zone as CET)',
      utc: '+1',
    },
    {
      abbr: 'MEST',
      name: 'Middle European Summer Time (same zone as CEST)',
      utc: '+2',
    },
    {
      abbr: 'MHT',
      name: 'Marshall Islands Time',
      utc: '+12',
    },
    {
      abbr: 'MIST',
      name: 'Macquarie Island Station Time',
      utc: '+11',
    },
    {
      abbr: 'MIT',
      name: 'Marquesas Islands Time',
      utc: '-9:30',
    },
    {
      abbr: 'MMT',
      name: 'Myanmar Standard Time',
      utc: '+6:30',
    },
    {
      abbr: 'MSK',
      name: 'Moscow Time',
      utc: '+3',
    },
    {
      abbr: 'MST',
      name: 'Malaysia Standard Time',
      utc: '+8',
    },
    {
      abbr: 'MST',
      name: 'Mountain Standard Time (North America)',
      utc: '-7',
    },
    {
      abbr: 'MUT',
      name: 'Mauritius Time',
      utc: '+4',
    },
    {
      abbr: 'MVT',
      name: 'Maldives Time',
      utc: '+5',
    },
    {
      abbr: 'MYT',
      name: 'Malaysia Time',
      utc: '+8',
    },
    {
      abbr: 'NCT',
      name: 'New Caledonia Time',
      utc: '+11',
    },
    {
      abbr: 'NDT',
      name: 'Newfoundland Daylight Time',
      utc: '-2:30',
    },
    {
      abbr: 'NFT',
      name: 'Norfolk Island Time',
      utc: '+11',
    },
    {
      abbr: 'NOVT',
      name: 'Novosibirsk Time [9]',
      utc: '+7',
    },
    {
      abbr: 'NPT',
      name: 'Nepal Time',
      utc: '+5:45',
    },
    {
      abbr: 'NST',
      name: 'Newfoundland Standard Time',
      utc: '-3:30',
    },
    {
      abbr: 'NT',
      name: 'Newfoundland Time',
      utc: '-3:30',
    },
    {
      abbr: 'NUT',
      name: 'Niue Time',
      utc: '−11',
    },
    {
      abbr: 'NZDT',
      name: 'New Zealand Daylight Time',
      utc: '+13',
    },
    {
      abbr: 'NZST',
      name: 'New Zealand Standard Time',
      utc: '+12',
    },
    {
      abbr: 'OMST',
      name: 'Omsk Time',
      utc: '+6',
    },
    {
      abbr: 'ORAT',
      name: 'Oral Time',
      utc: '+5',
    },
    {
      abbr: 'PDT',
      name: 'Pacific Daylight Time (North America)',
      utc: '-7',
    },
    {
      abbr: 'PET',
      name: 'Peru Time',
      utc: '-5',
    },
    {
      abbr: 'PETT',
      name: 'Kamchatka Time',
      utc: '+12',
    },
    {
      abbr: 'PGT',
      name: 'Papua New Guinea Time',
      utc: '+10',
    },
    {
      abbr: 'PHOT',
      name: 'Phoenix Island Time',
      utc: '+13',
    },
    {
      abbr: 'PHT',
      name: 'Philippine Time',
      utc: '+8',
    },
    {
      abbr: 'PHST',
      name: 'Philippine Standard Time',
      utc: '+8',
    },
    {
      abbr: 'PKT',
      name: 'Pakistan Standard Time',
      utc: '+5',
    },
    {
      abbr: 'PMDT',
      name: 'Saint Pierre and Miquelon Daylight Time',
      utc: '-2',
    },
    {
      abbr: 'PMST',
      name: 'Saint Pierre and Miquelon Standard Time',
      utc: '-3',
    },
    {
      abbr: 'PONT',
      name: 'Pohnpei Standard Time',
      utc: '+11',
    },
    {
      abbr: 'PST',
      name: 'Pacific Standard Time (North America)',
      utc: '-8',
    },
    {
      abbr: 'PWT',
      name: 'Palau Time[10]',
      utc: '+9',
    },
    {
      abbr: 'PYST',
      name: 'Paraguay Summer Time[11]',
      utc: '-3',
    },
    {
      abbr: 'PYT',
      name: 'Paraguay Time[12]',
      utc: '-4',
    },
    {
      abbr: 'RET',
      name: 'Réunion Time',
      utc: '+4',
    },
    {
      abbr: 'ROTT',
      name: 'Rothera Research Station Time',
      utc: '-3',
    },
    {
      abbr: 'SAKT',
      name: 'Sakhalin Island Time',
      utc: '+11',
    },
    {
      abbr: 'SAMT',
      name: 'Samara Time',
      utc: '+4',
    },
    {
      abbr: 'SAST',
      name: 'South African Standard Time',
      utc: '+2',
    },
    {
      abbr: 'SBT',
      name: 'Solomon Islands Time',
      utc: '+11',
    },
    {
      abbr: 'SCT',
      name: 'Seychelles Time',
      utc: '+4',
    },
    {
      abbr: 'SDT',
      name: 'Samoa Daylight Time',
      utc: '−10',
    },
    {
      abbr: 'SGT',
      name: 'Singapore Time',
      utc: '+8',
    },
    {
      abbr: 'SLST',
      name: 'Sri Lanka Standard Time',
      utc: '+5:30',
    },
    {
      abbr: 'SRET',
      name: 'Srednekolymsk Time',
      utc: '+11',
    },
    {
      abbr: 'SRT',
      name: 'Suriname Time',
      utc: '-3',
    },
    {
      abbr: 'SST',
      name: 'Samoa Standard Time',
      utc: '−11',
    },
    {
      abbr: 'SST',
      name: 'Singapore Standard Time',
      utc: '+8',
    },
    {
      abbr: 'SYOT',
      name: 'Showa Station Time',
      utc: '+3',
    },
    {
      abbr: 'TAHT',
      name: 'Tahiti Time',
      utc: '−10',
    },
    {
      abbr: 'THA',
      name: 'Thailand Standard Time',
      utc: '+7',
    },
    {
      abbr: 'TFT',
      name: 'French Southern and Antarctic Time[13]',
      utc: '+5',
    },
    {
      abbr: 'TJT',
      name: 'Tajikistan Time',
      utc: '+5',
    },
    {
      abbr: 'TKT',
      name: 'Tokelau Time',
      utc: '+13',
    },
    {
      abbr: 'TLT',
      name: 'Timor Leste Time',
      utc: '+9',
    },
    {
      abbr: 'TMT',
      name: 'Turkmenistan Time',
      utc: '+5',
    },
    {
      abbr: 'TRT',
      name: 'Turkey Time',
      utc: '+3',
    },
    {
      abbr: 'TOT',
      name: 'Tonga Time',
      utc: '+13',
    },
    {
      abbr: 'TVT',
      name: 'Tuvalu Time',
      utc: '+12',
    },
    {
      abbr: 'ULAST',
      name: 'Ulaanbaatar Summer Time',
      utc: '+9',
    },
    {
      abbr: 'ULAT',
      name: 'Ulaanbaatar Standard Time',
      utc: '+8',
    },
    {
      abbr: 'UTC',
      name: 'Coordinated Universal Time',
      utc: '+',
    },
    {
      abbr: 'UYST',
      name: 'Uruguay Summer Time',
      utc: '-2',
    },
    {
      abbr: 'UYT',
      name: 'Uruguay Standard Time',
      utc: '-3',
    },
    {
      abbr: 'UZT',
      name: 'Uzbekistan Time',
      utc: '+5',
    },
    {
      abbr: 'VET',
      name: 'Venezuelan Standard Time',
      utc: '-4',
    },
    {
      abbr: 'VLAT',
      name: 'Vladivostok Time',
      utc: '+10',
    },
    {
      abbr: 'VOLT',
      name: 'Volgograd Time',
      utc: '+4',
    },
    {
      abbr: 'VOST',
      name: 'Vostok Station Time',
      utc: '+6',
    },
    {
      abbr: 'VUT',
      name: 'Vanuatu Time',
      utc: '+11',
    },
    {
      abbr: 'WAKT',
      name: 'Wake Island Time',
      utc: '+12',
    },
    {
      abbr: 'WAST',
      name: 'West Africa Summer Time',
      utc: '+2',
    },
    {
      abbr: 'WAT',
      name: 'West Africa Time',
      utc: '+1',
    },
    {
      abbr: 'WEST',
      name: 'Western European Summer Time',
      utc: '+1',
    },
    {
      abbr: 'WET',
      name: 'Western European Time',
      utc: '+',
    },
    {
      abbr: 'WIB',
      name: 'Western Indonesian Time',
      utc: '+7',
    },
    {
      abbr: 'WIT',
      name: 'Eastern Indonesian Time',
      utc: '+9',
    },
    {
      abbr: 'WITA',
      name: 'Central Indonesia Time',
      utc: '+8',
    },
    {
      abbr: 'WGST',
      name: 'West Greenland Summer Time[14]',
      utc: '-2',
    },
    {
      abbr: 'WGT',
      name: 'West Greenland Time[15]',
      utc: '-3',
    },
    {
      abbr: 'WST',
      name: 'Western Standard Time',
      utc: '+8',
    },
    {
      abbr: 'YAKT',
      name: 'Yakutsk Time',
      utc: '+9',
    },
    {
      abbr: 'YEKT',
      name: 'Yekaterinburg Time',
      utc: '+5',
    },
  ];

  getYear(format) {
    let year = this.date.getFullYear();

    switch (format) {
      case 'YYYY':
      case '%Y':
        //2021
        return year;
      case 'YY':
      case '%y':
        //21
        return year.toString().substr(2, 2);
      case '%C':
        //20
        return year.toString().substr(0, 2);
      default:
        // 2021
        return year;
    }
  }

  getMonth(format) {
    let monthNumber = this.date.getMonth() + 1;
    let monthNumberWithZero =
      monthNumber < 10 ? `0${monthNumber}` : monthNumber;
    let monthStringLong = this.date.toLocaleString('default', {
      month: 'long',
    });
    let monthStringShort = this.date.toLocaleString('default', {
      month: 'short',
    });

    switch (format) {
      case 'MMMMM':
        // J
        return monthStringLong.charAt(0);
      case 'MMMM':
        // January
        return monthStringLong;
      case 'MMM':
        // Jan
        return monthStringShort;
      case 'MM':
      case '%m':
        // 01
        return monthNumberWithZero;
      case 'M':
        // 1
        return monthNumber;
      case '%B':
        // 01, January
        return monthNumberWithZero + ', ' + monthStringLong;
      case '%b':
        // 1, Jan
        return monthNumber + ', ' + monthStringShort;
      default:
        return monthNumber;
    }
  }

  getDay(format) {
    let dayNumber = this.date.getDate();
    let dayNumberWithZero = dayNumber < 10 ? `0${dayNumber}` : dayNumber;

    switch (format) {
      case 'DD':
      case '%d':
      case 'd':
        // 01
        return dayNumberWithZero;
      case '%e':
        // 1
        return dayNumber;
      default:
        return dayNumber;
    }
  }

  getDayOfWeek(format) {
    let dayNumber = this.date.getDay();

    switch (format) {
      case '%A':
        // Sunday
        return this.date.toLocaleString('default', {
          weekday: 'long',
        });
      case '%a':
        // Sun
        return this.date.toLocaleString('default', {
          weekday: 'short',
        });
      case '%u':
        // 1
        return dayNumber;
      case '%w':
        // 0
        return dayNumber - 1;
      default:
        return dayNumber;
    }
  }

  getDayOfYear(format) {
    let dayOfYear = Math.ceil(
      (this.date - new Date(this.date.getFullYear(), 0, 0)) /
        1000 /
        60 /
        60 /
        24,
    );
    switch (format) {
      case '%j':
      case 'DDD':
        // 001
        return dayOfYear < 10 ? `00${dayOfYear}` : dayOfYear < 100 ? `0${dayOfYear}` : dayOfYear;
      case '%d':
        // 1
        return dayOfYear;
      default:
        return dayOfYear;
    }
  }

  getHour(format) {
    let hour24 = this.date.getHours();
    let hour24WithZero = hour24 < 10 ? `0${hour24}` : hour24;

    let hour12 = hour24 > 12 ? hour24 - 12 : hour24;
    let hour12WithZero = hour12 < 10 ? `0${hour12}` : hour12;

    switch (format) {
      case 'h':
      case '%l':
        // 1 - 12
        return hour12;
      case '%I':
      case 'hh':
        // 01 - 12
        return hour12WithZero;
      case 'H':
      case '%k':
        // 01
        return hour24WithZero;
      case '%H':
        // 00 - 23
        return hour24WithZero;
      default:
        return hour24;
    }
  }

  getMinute(format) {
    let minute = this.date.getMinutes();
    let minuteWithZero = minute < 10 ? `0${minute}` : minute;

    switch (format) {
      case 'm':
      case '%M':
        // 01
        return minuteWithZero;
      case 'mm':
        // 01
        return minute;
      default:
        return minute;
    }
  }

  getSecond(format) {
    let second = this.date.getSeconds();
    let secondWithZero = second < 10 ? `0${second}` : second;

    switch (format) {
      case 's':
      case '%S':
        // 01
        return secondWithZero;
      case 'ss':
        // 01
        return second;
      case '%s':
        return Math.floor(this.date.getTime() / 1000);
      default:
        return second;
    }
  }

  getMillisecond(format) {
    let millisecond = this.date.getMilliseconds();
    let millisecondWithZero =
      millisecond < 10
        ? `00${millisecond}`
        : millisecond < 100
        ? `0${millisecond}`
        : millisecond;

    switch (format) {
      case 'S':
      case '%S':
        // 01
        return millisecondWithZero;
      case 'SS':
        // 01
        return millisecond;
      case '%Q':
        return this.date.getTime();
      default:
        return millisecond;
    }
  }

  getNanosecond(format) {
    let nanoSecond = this.date.getMilliseconds();
    let nanoSecondWithZero =
      nanoSecond < 10
        ? `00${nanoSecond}`
        : nanoSecond < 100
        ? `0${nanoSecond}`
        : nanoSecond;

    switch (format) {
      case 'n':
      case '%N':
        // 01
        return nanoSecondWithZero;
      case 'nn':
        // 01
        return nanoSecond;
      case 'nnn':
        // 01
        return nanoSecond;
      default:
        return nanoSecond;
    }
  }

  getAMPM(format) {
    let hour24 = this.date.getHours();
    let ampm = hour24 > 12 ? 'PM' : 'AM';

    switch (format) {
      case 'a':
        // AM
        return ampm;
      case '%P':
        // AM
        return ampm.toUpperCase();
      case '%p':
        // am
        return ampm.toLowerCase();
      default:
        return ampm;
    }
  }

  getTimeZone(format) {
    let GMTFormat = this.date
      .toLocaleTimeString('en-us', { timeZoneName: 'short' })
      .split(' ')[2]
      .split('GMT')[1];

    let timeZoneString = this.date
      .toLocaleTimeString('en-us', { timeZoneName: 'long', hour12: false })
      .match(/[^:?0-9]+\w+/g)[0]
      .trim();

    let timeZoneShort = this.abbreviations.find(
      abbreviation =>
        abbreviation.name === timeZoneString && abbreviation.utc === GMTFormat,
    );

    switch (format) {
      case 'Z':
        // Indochina Time
        return timeZoneString;
      case '%z':
        // +7
        return GMTFormat;
      case '%Z':
        // ICT
        return timeZoneShort.abbr;
      default:
        return GMTFormat;
    }
  }

  getDateTime(format) {
    let dateTime = this.date.toLocaleString('default', {
      year: 'numeric',
      month: '2-digit',
      day: '2-digit',
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
      hour12: false,
    });

    switch (format) {
      case '%c':
        return this.date;
      case '%F':
        return this.getYear('YYYY') + '-' + this.getMonth('MM') + '-' + this.getDay('DD');
      case '%D':
        return this.getMonth('MM') + '/' + this.getDay('DD') + '/' + this.getYear('YYYY');
      case '%T':
        // 23:59:59
        return this.getHour('HH') + ':' + this.getMinute('mm') + ':' + this.getSecond('ss');
      case '%r':
        // 11:59:59 PM
        return this.getHour('hh') + ':' + this.getMinute('mm') + ':' + this.getSecond('ss') + ' ' + this.getAMPM('a');
      case '%R':
        // 11:59 PM
        return this.getHour('hh') + ':' + this.getMinute('mm') + ' ' + this.getAMPM('a');
      default:
        return dateTime;
    }
  }

  format(format) {
    let dateFormat = format;
    for (let key in this.regex) {
      if (this.regex[key].test(format)) {
        let splitMatch = format.match(this.regex[key])[0];
        dateFormat = dateFormat.replace(splitMatch, this[`get${key}`](splitMatch));
      }
    }

    return dateFormat;
  }
}

export default DateTime;
