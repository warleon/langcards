const BARE_COUNTRIES = [
  ['242', 'Fiji'],
  ['834', 'Tanzania'],
  ['732', 'W. Sahara'],
  ['124', 'Canada'],
  ['840', 'United States of America'],
  ['398', 'Kazakhstan'],
  ['860', 'Uzbekistan'],
  ['598', 'Papua New Guinea'],
  ['360', 'Indonesia'],
  ['032', 'Argentina'],
  ['152', 'Chile'],
  ['180', 'Dem. Rep. Congo'],
  ['706', 'Somalia'],
  ['404', 'Kenya'],
  ['729', 'Sudan'],
  ['148', 'Chad'],
  ['332', 'Haiti'],
  ['214', 'Dominican Rep.'],
  ['643', 'Russia'],
  ['044', 'Bahamas'],
  ['238', 'Falkland Is.'],
  ['578', 'Norway'],
  ['304', 'Greenland'],
  ['260', 'Fr. S. Antarctic Lands'],
  ['626', 'Timor-Leste'],
  ['710', 'South Africa'],
  ['426', 'Lesotho'],
  ['484', 'Mexico'],
  ['858', 'Uruguay'],
  ['076', 'Brazil'],
  ['068', 'Bolivia'],
  ['604', 'Peru'],
  ['170', 'Colombia'],
  ['591', 'Panama'],
  ['188', 'Costa Rica'],
  ['558', 'Nicaragua'],
  ['340', 'Honduras'],
  ['222', 'El Salvador'],
  ['320', 'Guatemala'],
  ['084', 'Belize'],
  ['862', 'Venezuela'],
  ['328', 'Guyana'],
  ['740', 'Suriname'],
  ['250', 'France'],
  ['218', 'Ecuador'],
  ['630', 'Puerto Rico'],
  ['388', 'Jamaica'],
  ['192', 'Cuba'],
  ['716', 'Zimbabwe'],
  ['072', 'Botswana'],
  ['516', 'Namibia'],
  ['686', 'Senegal'],
  ['466', 'Mali'],
  ['478', 'Mauritania'],
  ['204', 'Benin'],
  ['562', 'Niger'],
  ['566', 'Nigeria'],
  ['120', 'Cameroon'],
  ['768', 'Togo'],
  ['288', 'Ghana'],
  ['384', "Côte d'Ivoire"],
  ['324', 'Guinea'],
  ['624', 'Guinea-Bissau'],
  ['430', 'Liberia'],
  ['694', 'Sierra Leone'],
  ['854', 'Burkina Faso'],
  ['140', 'Central African Rep.'],
  ['178', 'Congo'],
  ['266', 'Gabon'],
  ['226', 'Eq. Guinea'],
  ['894', 'Zambia'],
  ['454', 'Malawi'],
  ['508', 'Mozambique'],
  ['748', 'eSwatini'],
  ['024', 'Angola'],
  ['108', 'Burundi'],
  ['376', 'Israel'],
  ['422', 'Lebanon'],
  ['450', 'Madagascar'],
  ['275', 'Palestine'],
  ['270', 'Gambia'],
  ['788', 'Tunisia'],
  ['012', 'Algeria'],
  ['400', 'Jordan'],
  ['784', 'United Arab Emirates'],
  ['634', 'Qatar'],
  ['414', 'Kuwait'],
  ['368', 'Iraq'],
  ['512', 'Oman'],
  ['548', 'Vanuatu'],
  ['116', 'Cambodia'],
  ['764', 'Thailand'],
  ['418', 'Laos'],
  ['104', 'Myanmar'],
  ['704', 'Vietnam'],
  ['408', 'North Korea'],
  ['410', 'South Korea'],
  ['496', 'Mongolia'],
  ['356', 'India'],
  ['050', 'Bangladesh'],
  ['064', 'Bhutan'],
  ['524', 'Nepal'],
  ['586', 'Pakistan'],
  ['004', 'Afghanistan'],
  ['762', 'Tajikistan'],
  ['417', 'Kyrgyzstan'],
  ['795', 'Turkmenistan'],
  ['364', 'Iran'],
  ['760', 'Syria'],
  ['051', 'Armenia'],
  ['752', 'Sweden'],
  ['112', 'Belarus'],
  ['804', 'Ukraine'],
  ['616', 'Poland'],
  ['040', 'Austria'],
  ['348', 'Hungary'],
  ['498', 'Moldova'],
  ['642', 'Romania'],
  ['440', 'Lithuania'],
  ['428', 'Latvia'],
  ['233', 'Estonia'],
  ['276', 'Germany'],
  ['100', 'Bulgaria'],
  ['300', 'Greece'],
  ['792', 'Turkey'],
  ['008', 'Albania'],
  ['191', 'Croatia'],
  ['756', 'Switzerland'],
  ['442', 'Luxembourg'],
  ['056', 'Belgium'],
  ['528', 'Netherlands'],
  ['620', 'Portugal'],
  ['724', 'Spain'],
  ['372', 'Ireland'],
  ['540', 'New Caledonia'],
  ['090', 'Solomon Is.'],
  ['554', 'New Zealand'],
  ['036', 'Australia'],
  ['144', 'Sri Lanka'],
  ['156', 'China'],
  ['158', 'Taiwan'],
  ['380', 'Italy'],
  ['208', 'Denmark'],
  ['826', 'United Kingdom'],
  ['352', 'Iceland'],
  ['031', 'Azerbaijan'],
  ['268', 'Georgia'],
  ['608', 'Philippines'],
  ['458', 'Malaysia'],
  ['096', 'Brunei'],
  ['705', 'Slovenia'],
  ['246', 'Finland'],
  ['703', 'Slovakia'],
  ['203', 'Czechia'],
  ['232', 'Eritrea'],
  ['392', 'Japan'],
  ['600', 'Paraguay'],
  ['887', 'Yemen'],
  ['682', 'Saudi Arabia'],
  ['010', 'Antarctica'],
  [null, 'N. Cyprus'],
  ['196', 'Cyprus'],
  ['504', 'Morocco'],
  ['818', 'Egypt'],
  ['434', 'Libya'],
  ['231', 'Ethiopia'],
  ['262', 'Djibouti'],
  [null, 'Somaliland'],
  ['800', 'Uganda'],
  ['646', 'Rwanda'],
  ['070', 'Bosnia and Herz.'],
  ['807', 'Macedonia'],
  ['688', 'Serbia'],
  ['499', 'Montenegro'],
  [null, 'Kosovo'],
  ['780', 'Trinidad and Tobago'],
  ['728', 'S. Sudan'],
]

const COUNTRIES_AFRICA = [
  [
    '834',
    'Tanzania',
    [
      { en: 'Swahili', native: 'Kiswahili' },
      { en: 'English', native: 'English' },
    ],
  ],
  [
    '732',
    'W. Sahara',
    [
      { en: 'Arabic', native: 'العربية' },
      { en: 'Spanish', native: 'Español' },
    ],
  ],
  ['180', 'Dem. Rep. Congo', [{ en: 'French', native: 'Français' }]], // national langs: Lingala, Kikongo, Swahili, Tshiluba
  [
    '706',
    'Somalia',
    [
      { en: 'Somali', native: 'Soomaaliga' },
      { en: 'Arabic', native: 'العربية' },
    ],
  ],
  [
    '404',
    'Kenya',
    [
      { en: 'English', native: 'English' },
      { en: 'Swahili', native: 'Kiswahili' },
    ],
  ],
  [
    '729',
    'Sudan',
    [
      { en: 'Arabic', native: 'العربية' },
      { en: 'English', native: 'English' },
    ],
  ],
  [
    '148',
    'Chad',
    [
      { en: 'French', native: 'Français' },
      { en: 'Arabic', native: 'العربية' },
    ],
  ],
  [
    '716',
    'Zimbabwe',
    [
      { en: 'English', native: 'English' },
      { en: 'Shona', native: 'chiShona' },
      { en: 'Northern Ndebele', native: 'isiNdebele' },
    ],
  ], // (plus several others officially recognized)
  [
    '072',
    'Botswana',
    [
      { en: 'English', native: 'English' },
      { en: 'Tswana', native: 'Setswana' },
    ],
  ],
  ['516', 'Namibia', [{ en: 'English', native: 'English' }]],
  ['686', 'Senegal', [{ en: 'French', native: 'Français' }]],
  ['466', 'Mali', [{ en: 'French', native: 'Français' }]],
  ['478', 'Mauritania', [{ en: 'Arabic', native: 'العربية' }]],
  ['204', 'Benin', [{ en: 'French', native: 'Français' }]],
  ['562', 'Niger', [{ en: 'French', native: 'Français' }]],
  ['566', 'Nigeria', [{ en: 'English', native: 'English' }]],
  [
    '120',
    'Cameroon',
    [
      { en: 'French', native: 'Français' },
      { en: 'English', native: 'English' },
    ],
  ],
  ['768', 'Togo', [{ en: 'French', native: 'Français' }]],
  ['288', 'Ghana', [{ en: 'English', native: 'English' }]],
  ['384', "Côte d'Ivoire", [{ en: 'French', native: 'Français' }]],
  ['324', 'Guinea', [{ en: 'French', native: 'Français' }]],
  ['624', 'Guinea-Bissau', [{ en: 'Portuguese', native: 'Português' }]],
  ['430', 'Liberia', [{ en: 'English', native: 'English' }]],
  ['694', 'Sierra Leone', [{ en: 'English', native: 'English' }]],
  ['854', 'Burkina Faso', [{ en: 'French', native: 'Français' }]],
  [
    '140',
    'Central African Rep.',
    [
      { en: 'French', native: 'Français' },
      { en: 'Sango', native: 'Sängö' },
    ],
  ],
  [
    '178',
    'Congo',
    [
      { en: 'French', native: 'Français' },
      { en: 'Kituba (Congo Swahili Creole)', native: 'Kikongo ya leta' },
      { en: 'Lingala', native: 'Lingála' },
    ],
  ],
  ['266', 'Gabon', [{ en: 'French', native: 'Français' }]],
  [
    '226',
    'Eq. Guinea',
    [
      { en: 'Spanish', native: 'Español' },
      { en: 'French', native: 'Français' },
      { en: 'Portuguese', native: 'Português' },
    ],
  ],
  ['894', 'Zambia', [{ en: 'English', native: 'English' }]],
  [
    '454',
    'Malawi',
    [
      { en: 'English', native: 'English' },
      { en: 'Chichewa', native: 'Chichewa' },
    ],
  ],
  ['508', 'Mozambique', [{ en: 'Portuguese', native: 'Português' }]],
  [
    '748',
    'eSwatini',
    [
      { en: 'Swazi', native: 'siSwati' },
      { en: 'English', native: 'English' },
    ],
  ],
  ['024', 'Angola', [{ en: 'Portuguese', native: 'Português' }]],
  [
    '108',
    'Burundi',
    [
      { en: 'Kirundi', native: 'Ikirundi' },
      { en: 'French', native: 'Français' },
      { en: 'English', native: 'English' },
    ],
  ],
  [
    '450',
    'Madagascar',
    [
      { en: 'Malagasy', native: 'Malagasy' },
      { en: 'French', native: 'Français' },
    ],
  ],
  ['270', 'Gambia', [{ en: 'English', native: 'English' }]],
  ['788', 'Tunisia', [{ en: 'Arabic', native: 'العربية' }]],
  [
    '012',
    'Algeria',
    [
      { en: 'Arabic', native: 'العربية' },
      { en: 'Tamazight (Berber)', native: 'ⵜⴰⵎⴰⵣⵉⵖⵜ' },
    ],
  ],
  [
    '232',
    'Eritrea',
    [
      { en: 'Tigrinya', native: 'ትግርኛ' },
      { en: 'Arabic', native: 'العربية' },
      { en: 'English', native: 'English' },
    ],
  ], // working langs
  [
    '504',
    'Morocco',
    [
      { en: 'Arabic', native: 'العربية' },
      { en: 'Tamazight (Berber)', native: 'ⵜⴰⵎⴰⵣⵉⵖⵜ' },
    ],
  ],
  ['818', 'Egypt', [{ en: 'Arabic', native: 'العربية' }]],
  ['434', 'Libya', [{ en: 'Arabic', native: 'العربية' }]],
  ['231', 'Ethiopia', [{ en: 'Amharic', native: 'አማርኛ' }]], // plus various working langs regionally
  [
    '262',
    'Djibouti',
    [
      { en: 'French', native: 'Français' },
      { en: 'Arabic', native: 'العربية' },
    ],
  ],
  [
    '800',
    'Uganda',
    [
      { en: 'English', native: 'English' },
      { en: 'Swahili', native: 'Kiswahili' },
    ],
  ],
  [
    '646',
    'Rwanda',
    [
      { en: 'Kinyarwanda', native: 'Kinyarwanda' },
      { en: 'French', native: 'Français' },
      { en: 'English', native: 'English' },
    ],
  ], // Swahili also official nationally
  [
    '710',
    'South Africa',
    [
      { en: 'Zulu', native: 'isiZulu' },
      { en: 'Xhosa', native: 'isiXhosa' },
      { en: 'Afrikaans', native: 'Afrikaans' },
      { en: 'English', native: 'English' },
      { en: 'Sepedi (Northern Sotho)', native: 'Sepedi' },
      { en: 'Setswana', native: 'Setswana' },
      { en: 'Sesotho (Southern Sotho)', native: 'Sesotho' },
      { en: 'Xitsonga', native: 'Xitsonga' },
      { en: 'SiSwati', native: 'siSwati' },
      { en: 'Tshivenda', native: 'Tshivenda' },
      { en: 'isiNdebele', native: 'isiNdebele' },
    ],
  ],
  [
    '426',
    'Lesotho',
    [
      { en: 'Sesotho', native: 'Sesotho' },
      { en: 'English', native: 'English' },
    ],
  ],
  ['728', 'S. Sudan', [{ en: 'English', native: 'English' }]],
  [
    null,
    'Somaliland',
    [
      { en: 'Somali', native: 'Soomaaliga' },
      { en: 'Arabic', native: 'العربية' },
    ],
  ],
]

const COUNTRIES_EUROPE = [
  ['040', 'Austria', [{ en: 'German', native: 'Deutsch' }]],
  [
    '056',
    'Belgium',
    [
      { en: 'Dutch', native: 'Nederlands' },
      { en: 'French', native: 'Français' },
      { en: 'German', native: 'Deutsch' },
    ],
  ],
  ['100', 'Bulgaria', [{ en: 'Bulgarian', native: 'Български (Bălgarski)' }]],
  ['191', 'Croatia', [{ en: 'Croatian', native: 'Hrvatski' }]],
  ['203', 'Czechia', [{ en: 'Czech', native: 'Čeština' }]],
  ['208', 'Denmark', [{ en: 'Danish', native: 'Dansk' }]],
  ['233', 'Estonia', [{ en: 'Estonian', native: 'Eesti' }]],
  [
    '246',
    'Finland',
    [
      { en: 'Finnish', native: 'Suomi' },
      { en: 'Swedish', native: 'Svenska' },
    ],
  ],
  ['250', 'France', [{ en: 'French', native: 'Français' }]],
  ['276', 'Germany', [{ en: 'German', native: 'Deutsch' }]],
  ['300', 'Greece', [{ en: 'Greek', native: 'Ελληνικά (Elliniká)' }]],
  ['348', 'Hungary', [{ en: 'Hungarian', native: 'Magyar' }]],
  ['352', 'Iceland', [{ en: 'Icelandic', native: 'Íslenska' }]],
  [
    '372',
    'Ireland',
    [
      { en: 'Irish', native: 'Gaeilge' },
      { en: 'English', native: 'English' },
    ],
  ],
  ['380', 'Italy', [{ en: 'Italian', native: 'Italiano' }]],
  ['428', 'Latvia', [{ en: 'Latvian', native: 'Latviešu' }]],
  ['440', 'Lithuania', [{ en: 'Lithuanian', native: 'Lietuvių' }]],
  [
    '442',
    'Luxembourg',
    [
      { en: 'Luxembourgish', native: 'Lëtzebuergesch' },
      { en: 'French', native: 'Français' },
      { en: 'German', native: 'Deutsch' },
    ],
  ],
  ['498', 'Moldova', [{ en: 'Romanian', native: 'Română' }]],
  ['528', 'Netherlands', [{ en: 'Dutch', native: 'Nederlands' }]],
  ['578', 'Norway', [{ en: 'Norwegian', native: 'Norsk' }]],
  ['616', 'Poland', [{ en: 'Polish', native: 'Polski' }]],
  ['620', 'Portugal', [{ en: 'Portuguese', native: 'Português' }]],
  ['642', 'Romania', [{ en: 'Romanian', native: 'Română' }]],
  ['643', 'Russia', [{ en: 'Russian', native: 'Русский (Russkiy)' }]],
  ['688', 'Serbia', [{ en: 'Serbian', native: 'Српски (Srpski)' }]],
  ['703', 'Slovakia', [{ en: 'Slovak', native: 'Slovenčina' }]],
  ['705', 'Slovenia', [{ en: 'Slovene', native: 'Slovenščina' }]],
  [
    '724',
    'Spain',
    [
      { en: 'Spanish', native: 'Español' },
      { en: 'Catalan', native: 'Català' },
      { en: 'Galician', native: 'Galego' },
      { en: 'Basque', native: 'Euskara' },
    ],
  ],
  ['752', 'Sweden', [{ en: 'Swedish', native: 'Svenska' }]],
  [
    '756',
    'Switzerland',
    [
      { en: 'German', native: 'Deutsch' },
      { en: 'French', native: 'Français' },
      { en: 'Italian', native: 'Italiano' },
      { en: 'Romansh', native: 'Rumantsch' },
    ],
  ],
  ['792', 'Turkey', [{ en: 'Turkish', native: 'Türkçe' }]],
  ['804', 'Ukraine', [{ en: 'Ukrainian', native: 'Українська (Ukrayins’ka)' }]],
  ['826', 'United Kingdom', [{ en: 'English', native: 'English' }]],
  ['008', 'Albania', [{ en: 'Albanian', native: 'Shqip' }]],
  ['051', 'Armenia', [{ en: 'Armenian', native: 'Հայերեն (Hayeren)' }]],
  ['031', 'Azerbaijan', [{ en: 'Azerbaijani', native: 'Azərbaycan dili' }]],
  [
    '070',
    'Bosnia and Herz.',
    [
      { en: 'Bosnian', native: 'Bosanski' },
      { en: 'Croatian', native: 'Hrvatski' },
      { en: 'Serbian', native: 'Српски (Srpski)' },
    ],
  ],
  [
    '112',
    'Belarus',
    [
      { en: 'Belarusian', native: 'Беларуская (Biełaruskaja)' },
      { en: 'Russian', native: 'Русский (Russkiy)' },
    ],
  ],
  [
    '807',
    'Macedonia',
    [
      { en: 'Macedonian', native: 'Македонски (Makedonski)' },
      { en: 'Albanian', native: 'Shqip' },
    ],
  ],
  ['499', 'Montenegro', [{ en: 'Montenegrin', native: 'Crnogorski' }]],
]

const COUNTRIES_ASIA = [
  [
    '004',
    'Afghanistan',
    [
      { en: 'Pashto', native: 'پښتو' },
      { en: 'Dari', native: 'دری' },
    ],
  ],
  ['051', 'Armenia', [{ en: 'Armenian', native: 'Հայերեն' }]],
  ['031', 'Azerbaijan', [{ en: 'Azerbaijani', native: 'Azərbaycan dili' }]],
  ['050', 'Bangladesh', [{ en: 'Bengali', native: 'বাংলা' }]],
  ['064', 'Bhutan', [{ en: 'Dzongkha', native: 'རྫོང་ཁ' }]],
  ['096', 'Brunei', [{ en: 'Malay', native: 'Bahasa Melayu' }]],
  ['116', 'Cambodia', [{ en: 'Khmer', native: 'ភាសាខ្មែរ' }]],
  ['156', 'China', [{ en: 'Mandarin Chinese', native: '中文 (Zhōngwén)' }]],
  [
    '196',
    'Cyprus',
    [
      { en: 'Greek', native: 'Ελληνικά' },
      { en: 'Turkish', native: 'Türkçe' },
    ],
  ],
  [
    '356',
    'India',
    [
      { en: 'Hindi', native: 'हिन्दी' },
      { en: 'English', native: 'English' },
      { en: 'Bengali', native: 'বাংলা' },
      { en: 'Tamil', native: 'தமிழ்' },
      { en: 'Telugu', native: 'తెలుగు' },
      { en: 'Marathi', native: 'मराठी' },
      { en: 'Urdu', native: 'اُردُو' },
    ],
  ],
  ['360', 'Indonesia', [{ en: 'Indonesian', native: 'Bahasa Indonesia' }]],
  ['364', 'Iran', [{ en: 'Persian', native: 'فارسی' }]],
  [
    '368',
    'Iraq',
    [
      { en: 'Arabic', native: 'العربية' },
      { en: 'Kurdish', native: 'کوردی' },
    ],
  ],
  [
    '376',
    'Israel',
    [
      { en: 'Hebrew', native: 'עברית' },
      { en: 'Arabic', native: 'العربية' },
    ],
  ],
  ['392', 'Japan', [{ en: 'Japanese', native: '日本語' }]],
  ['400', 'Jordan', [{ en: 'Arabic', native: 'العربية' }]],
  [
    '398',
    'Kazakhstan',
    [
      { en: 'Kazakh', native: 'Қазақ тілі' },
      { en: 'Russian', native: 'Русский' },
    ],
  ],
  ['414', 'Kuwait', [{ en: 'Arabic', native: 'العربية' }]],
  [
    '417',
    'Kyrgyzstan',
    [
      { en: 'Kyrgyz', native: 'Кыргызча' },
      { en: 'Russian', native: 'Русский' },
    ],
  ],
  ['418', 'Laos', [{ en: 'Lao', native: 'ລາວ' }]],
  ['422', 'Lebanon', [{ en: 'Arabic', native: 'العربية' }]],
  [
    '458',
    'Malaysia',
    [
      { en: 'Malay', native: 'Bahasa Melayu' },
      { en: 'English', native: 'English' },
      { en: 'Mandarin Chinese', native: '中文' },
      { en: 'Tamil', native: 'தமிழ்' },
    ],
  ],
  ['496', 'Mongolia', [{ en: 'Mongolian', native: 'Монгол хэл' }]],
  ['104', 'Myanmar', [{ en: 'Burmese', native: 'မြန်မာစာ' }]],
  ['524', 'Nepal', [{ en: 'Nepali', native: 'नेपाली' }]],
  ['408', 'North Korea', [{ en: 'Korean', native: '한국어' }]],
  [
    '586',
    'Pakistan',
    [
      { en: 'Urdu', native: 'اُردُو' },
      { en: 'English', native: 'English' },
    ],
  ],
  ['275', 'Palestine', [{ en: 'Arabic', native: 'العربية' }]],
  [
    '608',
    'Philippines',
    [
      { en: 'Filipino', native: 'Wikang Filipino' },
      { en: 'English', native: 'English' },
    ],
  ],
  ['634', 'Qatar', [{ en: 'Arabic', native: 'العربية' }]],
  ['682', 'Saudi Arabia', [{ en: 'Arabic', native: 'العربية' }]],
  ['410', 'South Korea', [{ en: 'Korean', native: '한국어' }]],
  [
    '144',
    'Sri Lanka',
    [
      { en: 'Sinhala', native: 'සිංහල' },
      { en: 'Tamil', native: 'தமிழ்' },
    ],
  ],
  ['760', 'Syria', [{ en: 'Arabic', native: 'العربية' }]],
  ['762', 'Tajikistan', [{ en: 'Tajik', native: 'Тоҷикӣ' }]],
  ['764', 'Thailand', [{ en: 'Thai', native: 'ไทย' }]],
  [
    '626',
    'Timor-Leste',
    [
      { en: 'Tetum', native: 'Tetun' },
      { en: 'Portuguese', native: 'Português' },
    ],
  ],
  ['795', 'Turkmenistan', [{ en: 'Turkmen', native: 'Türkmençe' }]],
  ['792', 'Turkey', [{ en: 'Turkish', native: 'Türkçe' }]],
  [
    '784',
    'United Arab Emirates',
    [
      { en: 'Arabic', native: 'العربية' },
      { en: 'English', native: 'English' },
    ],
  ],
  ['860', 'Uzbekistan', [{ en: 'Uzbek', native: 'Oʻzbekcha' }]],
  ['704', 'Vietnam', [{ en: 'Vietnamese', native: 'Tiếng Việt' }]],
  ['887', 'Yemen', [{ en: 'Arabic', native: 'العربية' }]],
  [
    '158',
    'Taiwan',
    [
      { en: 'Mandarin Chinese', native: '中文' },
      { en: 'Taiwanese Hokkien', native: '臺語' },
    ],
  ],
  ['268', 'Georgia', [{ en: 'Georgian', native: 'ქართული' }]],
]

const COUNTRIES_OCEANIA = [
  [
    '242',
    'Fiji',
    [
      { en: 'Fijian', native: 'Vosa Vakaviti' },
      { en: 'Hindi', native: 'हिन्दी' },
      { en: 'English', native: 'English' },
    ],
  ],
  [
    '598',
    'Papua New Guinea',
    [
      { en: 'Tok Pisin', native: 'Tok Pisin' },
      { en: 'Hiri Motu', native: 'Hiri Motu' },
      { en: 'English', native: 'English' },
    ],
  ],
  ['540', 'New Caledonia', [{ en: 'French', native: 'Français' }]],
  ['090', 'Solomon Islands', [{ en: 'English', native: 'English' }]],
  [
    '554',
    'New Zealand',
    [
      { en: 'English', native: 'English' },
      { en: 'Māori', native: 'Te Reo Māori' },
    ],
  ],
  ['036', 'Australia', [{ en: 'English', native: 'English' }]],
  [
    '548',
    'Vanuatu',
    [
      { en: 'Bislama', native: 'Bislama' },
      { en: 'French', native: 'Français' },
      { en: 'English', native: 'English' },
    ],
  ],

  // Sovereign states (not in your code list)
  [
    null,
    'Samoa',
    [
      { en: 'Samoan', native: 'Gagana Sāmoa' },
      { en: 'English', native: 'English' },
    ],
  ],
  [
    null,
    'Tonga',
    [
      { en: 'Tongan', native: 'Faka Tonga' },
      { en: 'English', native: 'English' },
    ],
  ],
  [
    null,
    'Kiribati',
    [
      { en: 'Gilbertese', native: 'Taetae ni Kiribati' },
      { en: 'English', native: 'English' },
    ],
  ],
  [null, 'Micronesia', [{ en: 'English', native: 'English' }]], // plus many local languages
  [
    null,
    'Marshall Islands',
    [
      { en: 'Marshallese', native: 'Kajin M̧ajeļ' },
      { en: 'English', native: 'English' },
    ],
  ],
  [
    null,
    'Palau',
    [
      { en: 'Palauan', native: 'a tekoi er a Belau' },
      { en: 'English', native: 'English' },
    ],
  ],
  [
    null,
    'Tuvalu',
    [
      { en: 'Tuvaluan', native: 'Te Ggana Tuuvalu' },
      { en: 'English', native: 'English' },
    ],
  ],
  [
    null,
    'Nauru',
    [
      { en: 'Nauruan', native: 'Dorerin Naoero' },
      { en: 'English', native: 'English' },
    ],
  ],

  // Territories
  [
    null,
    'French Polynesia',
    [
      { en: 'French', native: 'Français' },
      { en: 'Tahitian', native: 'Reo Tahiti' },
    ],
  ],
  [
    null,
    'Guam',
    [
      { en: 'English', native: 'English' },
      { en: 'Chamorro', native: 'Chamoru' },
    ],
  ],
  [
    null,
    'Northern Mariana Islands',
    [
      { en: 'English', native: 'English' },
      { en: 'Chamorro', native: 'Chamoru' },
      { en: 'Carolinian', native: 'Refaluwasch' },
    ],
  ],
  [
    null,
    'American Samoa',
    [
      { en: 'Samoan', native: 'Gagana Sāmoa' },
      { en: 'English', native: 'English' },
    ],
  ],
  [
    null,
    'Wallis and Futuna',
    [
      { en: 'French', native: 'Français' },
      { en: 'Wallisian', native: 'Fakaʻuvea' },
      { en: 'Futunan', native: 'Fakafutuna' },
    ],
  ],
  [
    null,
    'Tokelau',
    [
      { en: 'Tokelauan', native: 'Gagana Tokelau' },
      { en: 'English', native: 'English' },
    ],
  ],
  [
    null,
    'Pitcairn Islands',
    [
      { en: 'English', native: 'English' },
      { en: 'Pitkern', native: 'Pitkern' },
    ],
  ],
]

const COUNTRIES_AMERICA = [
  // --- North America ---
  [
    '124',
    'Canada',
    [
      { en: 'English', native: 'English' },
      { en: 'French', native: 'Français' },
    ],
  ],
  ['840', 'United States of America', [{ en: 'English', native: 'English' }]],
  ['484', 'Mexico', [{ en: 'Spanish', native: 'Español' }]],
  [
    '084',
    'Belize',
    [
      { en: 'English', native: 'English' },
      { en: 'Spanish', native: 'Español' },
      { en: 'Belizean Creole', native: 'Kriol' },
    ],
  ],
  ['044', 'Bahamas', [{ en: 'English', native: 'English' }]],
  [
    '388',
    'Jamaica',
    [
      { en: 'English', native: 'English' },
      { en: 'Jamaican Patois', native: 'Patois' },
    ],
  ],
  ['192', 'Cuba', [{ en: 'Spanish', native: 'Español' }]],
  [
    '332',
    'Haiti',
    [
      { en: 'Haitian Creole', native: 'Kreyòl Ayisyen' },
      { en: 'French', native: 'Français' },
    ],
  ],
  ['214', 'Dominican Rep.', [{ en: 'Spanish', native: 'Español' }]],
  [
    '630',
    'Puerto Rico',
    [
      { en: 'Spanish', native: 'Español' },
      { en: 'English', native: 'English' },
    ],
  ],
  [
    '304',
    'Greenland',
    [
      { en: 'Greenlandic', native: 'Kalaallisut' },
      { en: 'Danish', native: 'Dansk' },
    ],
  ],

  // --- Central America ---
  [
    '320',
    'Guatemala',
    [
      { en: 'Spanish', native: 'Español' },
      { en: 'Kʼicheʼ', native: 'K’iche’' },
    ],
  ],
  ['222', 'El Salvador', [{ en: 'Spanish', native: 'Español' }]],
  ['340', 'Honduras', [{ en: 'Spanish', native: 'Español' }]],
  ['558', 'Nicaragua', [{ en: 'Spanish', native: 'Español' }]],
  ['188', 'Costa Rica', [{ en: 'Spanish', native: 'Español' }]],
  [
    '591',
    'Panama',
    [
      { en: 'Spanish', native: 'Español' },
      { en: 'Ngäbere', native: 'Ngäbere' },
    ],
  ],

  // --- South America ---
  ['032', 'Argentina', [{ en: 'Spanish', native: 'Español' }]],
  ['076', 'Brazil', [{ en: 'Portuguese', native: 'Português' }]],
  [
    '068',
    'Bolivia',
    [
      { en: 'Spanish', native: 'Español' },
      { en: 'Quechua', native: 'Runa Simi' },
      { en: 'Aymara', native: 'Aymar aru' },
    ],
  ],
  [
    '604',
    'Peru',
    [
      { en: 'Spanish', native: 'Español' },
      { en: 'Quechua', native: 'Runa Simi' },
      { en: 'Aymara', native: 'Aymar aru' },
    ],
  ],
  ['170', 'Colombia', [{ en: 'Spanish', native: 'Español' }]],
  [
    '218',
    'Ecuador',
    [
      { en: 'Spanish', native: 'Español' },
      { en: 'Quechua', native: 'Kichwa' },
    ],
  ],
  ['862', 'Venezuela', [{ en: 'Spanish', native: 'Español' }]],
  ['328', 'Guyana', [{ en: 'English', native: 'English' }]],
  [
    '740',
    'Suriname',
    [
      { en: 'Dutch', native: 'Nederlands' },
      { en: 'Sranan Tongo', native: 'Sranan Tongo' },
    ],
  ],
  ['858', 'Uruguay', [{ en: 'Spanish', native: 'Español' }]],
  [
    '600',
    'Paraguay',
    [
      { en: 'Spanish', native: 'Español' },
      { en: 'Guaraní', native: 'Avañeʼẽ' },
    ],
  ],
  ['152', 'Chile', [{ en: 'Spanish', native: 'Español' }]],
  ['238', 'Falkland Is.', [{ en: 'English', native: 'English' }]],
  ['780', 'Trinidad and Tobago', [{ en: 'English', native: 'English' }]],
]

const WORLD_COUNTRIES = [
  ...COUNTRIES_AFRICA,
  ...COUNTRIES_AMERICA,
  ...COUNTRIES_ASIA,
  ...COUNTRIES_EUROPE,
  ...COUNTRIES_OCEANIA,
]

const LANGS_BY_MAP_CODE = new Map<
  string,
  {
    country: string
    langs: {
      en: string
      native: string
    }[]
  }
>()

WORLD_COUNTRIES.forEach((row) => {
  if (!row[0]) return
  LANGS_BY_MAP_CODE.set(row[0] as string, {
    country: row[1] as string,
    langs: row[2]! as { en: string; native: string }[],
  })
})

export { LANGS_BY_MAP_CODE }
