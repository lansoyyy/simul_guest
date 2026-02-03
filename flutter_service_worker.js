'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "01eb2c11c2685e04a0e3b0556549b914",
".git/config": "1d648ae14ea464b16c5fa2c15c4bf504",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/FETCH_HEAD": "42487728df85cfec00d8b96f7710be6f",
".git/HEAD": "4cf2d64e44205fe628ddd534e1151b58",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "5029bfab85b1c39281aa9697379ea444",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/sendemail-validate.sample": "4d67df3a8d5c98cb8565c07e42be0b04",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "da660c46b565375b4fb3d144c165646e",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "f9b4477a0753ac2d95e67cf9282e0902",
".git/logs/refs/heads/master": "f9b4477a0753ac2d95e67cf9282e0902",
".git/logs/refs/remotes/origin/HEAD": "3717df97af543c4a1c84ab7d00488cd0",
".git/logs/refs/remotes/origin/master": "7735acdf11776187e7cffcca4dff5e5f",
".git/objects/04/1e7950e82f94cb240a22794b6dd6a75a89406d": "06dd5e8e6e31feac7d670fbdcc821067",
".git/objects/04/6c82e53a112104e888edab5c0a4f89c228db57": "bad5084b4584b28b4b683b8a0086caa0",
".git/objects/06/a012e2b8dbc4d2fba27e720fe3be16eb417a30": "9fca3d69b28dc1976709bc639c1db1e9",
".git/objects/08/27c17254fd3959af211aaf91a82d3b9a804c2f": "360dc8df65dabbf4e7f858711c46cc09",
".git/objects/12/d42a5ae70c3550352ffc77678befc0c5c8e86b": "e05e2eabddc21413c0e679673e3cd0cc",
".git/objects/15/97869d258c8686080f5a64f389cbf3a72702df": "ceb99680672b3d2f737e0939052a362c",
".git/objects/16/ff302bb9cae2c57d898b2bef01c78654a87d16": "934bf651ecc62df0c71c9623d17e013f",
".git/objects/1b/c16e78fbb0390b44c9c6267f58d421543d739c": "a9b0d4a27059383aa08d30be2f54b673",
".git/objects/1d/29092debe20ee4311d61acad65c740ea790134": "838dbdb35f563fef2835fdf22f5a1ee8",
".git/objects/1e/0204a72bf646feaacf7802b1fc1969dee00e22": "0af312b9a4bab38f9051c486928e1116",
".git/objects/22/ff25a721389a28d817d13718ade96d87f9b859": "af0aa37d1c2f7e9dc6e2701d11bf7d60",
".git/objects/23/06f1937f2126827bd2e9dea00087421a98f86f": "754dbb01d14e9838fa7461038116ae25",
".git/objects/23/d39fe1a13fbacded1b17dc534dff7a030dfc0c": "90a00e02e591e672dfff31226204f4a1",
".git/objects/24/205247502ae6a64c4d78034b791318f336b2e9": "cdabd50f9b02e7405cc5e64c798882b0",
".git/objects/25/529448bcee27f166619f893e3c86fb3277f9c3": "46c57a87abf676494b212aabbc8a011a",
".git/objects/27/8901c2d4982a541f594f1e20754cf2a08124a9": "6f37b05fa67405556619432b90aaa516",
".git/objects/2c/d8570a34ab0a95997ceb6aa3c39e3ba5542bc8": "5aa701dea4ce63841b31413d48a6cde6",
".git/objects/2d/bc073afb07f95f173f528317005c9775df61aa": "33f5ede46671053f3f4c931fdcd80657",
".git/objects/34/4601851d1d80657c04dbba7b211a0b0f64acea": "43a19975570643e61122aeb46f6b25d6",
".git/objects/35/0a93df52f538468dab624d7e0f15b6c414f223": "5283988b6dcda948002e023c82393bd1",
".git/objects/39/0b1f72975e11876f633c48fd629ddd1ef4e488": "ebb9bc8ec17339072ca1719590d67e5f",
".git/objects/39/1b3e5d11eff1bb407177958b7ea44702691fbf": "8364c71c7f8841dd2d901bde15f6e029",
".git/objects/39/ffc4727591fb609f5fe9c67c13dcd361a9c987": "9c66be9f293ff82dfedbae28414a81c1",
".git/objects/3a/8cda5335b4b2a108123194b84df133bac91b23": "1636ee51263ed072c69e4e3b8d14f339",
".git/objects/3d/110c730c3805bb8ac7e9061aa02757d58040c8": "07d4dc3975811fe76b49a51eaa2e9b2e",
".git/objects/3f/a6a57c0afe086949f8e6d8c0fd832a46b19283": "665cd03253e755dea56abc2e720fe41f",
".git/objects/41/79b7cdd11f9d4404a0ec9e357b217dfe55508e": "0bae0f2daecb106e738823d9995a3294",
".git/objects/41/e3b6994bf76cf0158dc157e30bf18c6af60857": "ebc27ffaa06799fa54e18245d75a0781",
".git/objects/45/1a999f834a1b714af7f2b8fc8db88513117681": "a93746b989d2da80cf54555ee4186c29",
".git/objects/45/6473edc46732ea458da65b8d7a08b27fda90de": "b7f30f0b3b01a52d4e637010d2d08c01",
".git/objects/45/e9c895ddf3f589c9cd0eea3e70d0740dcf767e": "036f58b4103a0113f7700edcd2ae3f03",
".git/objects/4c/4ff63305a8b4d799e855a677acc59b522218bf": "4961c93dcda5a98c2fc5cc0787ab6142",
".git/objects/50/25faf7eb0143db2c27012361604a2a61ce8be7": "8dc817e783c8a42dc3f41b411f4ea9c7",
".git/objects/50/de41c8315c248a4b380111aeb4d8faa5ac5a40": "b8583ff2d9af57a0745d7845cf867d55",
".git/objects/50/deed9dec16181dc383bf7fc2948735eac2caca": "aba56ee96bbd12be6d01d482f3c6ff55",
".git/objects/51/03e757c71f2abfd2269054a790f775ec61ffa4": "d437b77e41df8fcc0c0e99f143adc093",
".git/objects/51/97bf290da4ed6ce783b41a949fcd4fec8e5f38": "f05249add0cbcb06485f8d0051daf7c4",
".git/objects/52/5fcb2535e79a51994f66df10d8202fa6d7e2f6": "b344212f066ef8f6dea9ef324d5e7021",
".git/objects/54/511675b9a38411400bcedfc3740833598d7725": "bfac8c1cf0a6bb4a6b8f4d2b6063dc6a",
".git/objects/57/0c3089f30e7ccd0b28fba47c4e14b24dd7a1d6": "893414afcf84fbab0f84b7e40a96e8cb",
".git/objects/57/e67ed2cc4dd7e736f00774613469d70a188173": "15926be432542e79fd775c935bf45230",
".git/objects/5a/094f56da2d6ab2e0f292feda54810c7c305ef7": "fdda5b9053647c07d58c9d5a350d909e",
".git/objects/60/2539d0647a6a4d1c7ad15e679f33914cb21b17": "8ae596c9d16e20b0b535dfbd1e992d42",
".git/objects/60/5c29e2a2221cb761ef1713816259ceb47b610c": "b204dbc2ab0d3ffdfe93ae243b4764b9",
".git/objects/64/c0732199bf170881fa873f46c67f374f50be6b": "5cea1f63104c1f14b439efd295b98b15",
".git/objects/65/14f468cfa8625e0746e45bf314bb368edc4de9": "e219cc505efe433f4102c2cc483ccc10",
".git/objects/65/3cd1523a8ece8427618ddd230880c00aa5736e": "bea432fced23755c76e7cb778d7f9d3a",
".git/objects/67/babb394662d50e727578fae14afe5548e8786a": "9d1ac476d1127b5c7966c6aa1a17044c",
".git/objects/68/43fddc6aef172d5576ecce56160b1c73bc0f85": "2a91c358adf65703ab820ee54e7aff37",
".git/objects/69/494edd904ff7f6c4518bba50720618a27ad0c3": "69b700eb8e5e95e8120cf1ddfb9eeb14",
".git/objects/69/b2023ef3b84225f16fdd15ba36b2b5fc3cee43": "6ccef18e05a49674444167a08de6e407",
".git/objects/6b/5554398f308dd97c8f9d4d5a151ba4b705f636": "f50fb772eb5df79b910e5ffe152bc593",
".git/objects/6d/00a7510d3267a89cded3e2de55f42d5ae9a810": "2ca424040b365e69749e67d82638ff48",
".git/objects/6d/2322df49a3800adc26e6bd41a299348433d129": "f75e5194a420ab88c4797eeed2d0c19a",
".git/objects/6d/e63657271b8c589841739fc3c4901c76e05e53": "4478a9c28066de217e8c5d7648528f11",
".git/objects/6f/7661bc79baa113f478e9a717e0c4959a3f3d27": "985be3a6935e9d31febd5205a9e04c4e",
".git/objects/70/a3b3cfcb1bbcce1fa85a38a9332b6e6e371706": "43de2665fcf2b07e67725a1224a61a86",
".git/objects/71/38724c427f10eb8a04734a0621b4115b6b6331": "cbda154bf80022748eb08311792748be",
".git/objects/73/cc3d1e8479e2444283899b579570edd7753faf": "0a3128143459ceaf38798149503abeea",
".git/objects/73/cc7d3fed7c3f3db978032370e6c5ba44eda11e": "bc353752c375b9b2680070748bfb3495",
".git/objects/74/081bc91591de6fa63492736e087ab267ca862e": "b54a92bf22fe09b6e3e5a25ca7c6bae8",
".git/objects/76/191930f1b73a1839da1b3bf7e6daa625778de1": "cde23adf77065f20c49bfb183df1103b",
".git/objects/76/9bbdd7963c7b26a24f219a46f8dbe03a9153d5": "64be18d64f074265e74302bb92307c19",
".git/objects/79/0faaccb12f8f1e2d40a86f348e7435b132c12d": "88cae9be46ae0d66092da211a73fed19",
".git/objects/7c/3463b788d022128d17b29072564326f1fd8819": "37fee507a59e935fc85169a822943ba2",
".git/objects/7d/5e4c9f028cb607c58b744b7c3c54fff593b825": "b7d0f60cfdcb0f55cf69ed393007df17",
".git/objects/7f/6e46754ab1aedfc579082372879134a9c84ad0": "ce821938a351d412d1dfaab3a8b7dd82",
".git/objects/81/6ec9f24003cd0d2162918e742fac758d65e69c": "bc6f3e60f7299535b1217c91dbe0d32d",
".git/objects/82/5a204317f8df2153054b61e91a853423df73cc": "6d745f1255c2193046d1961f4bae7db3",
".git/objects/83/2d9dc096af468f4c773f82b0767c909ce2a250": "4210a12fd382aa2497e4cd0e70890d3d",
".git/objects/85/283edd2b98d044ff1a41b8cfcce0a91e0872a3": "66a384396937958112e8e94959c7106b",
".git/objects/85/63aed2175379d2e75ec05ec0373a302730b6ad": "997f96db42b2dde7c208b10d023a5a8e",
".git/objects/88/951c980d65b65bb726dc171679bec10c43fa5b": "a0358d7f5ad9ec559a01a06144bd1435",
".git/objects/8a/41f546ffaaad77d3dee9d95d808376a7db0916": "9242cb629216310bf4a8133dae7c5b36",
".git/objects/8b/8abd3be7a2641ae1d8fa83d63a4cd76c8b6b05": "72549928de87a8204df2e847cea06931",
".git/objects/8e/428b6f633ca93451bf903b598283ebe1b37419": "b91ca2511f0f74e313b23077c02df4a6",
".git/objects/8f/93f156d66ca94e605aa46da135090443e90976": "1d05f4f5c7c9b22f6130dd590022dc56",
".git/objects/93/32a1e9bde8cf09b82c4e92382a385548e363ba": "61f0b2e3b1b38f65e21791a78d8c8a2c",
".git/objects/93/b363f37b4951e6c5b9e1932ed169c9928b1e90": "c8d74fb3083c0dc39be8cff78a1d4dd5",
".git/objects/9a/50b452d7c3c1af525699913ae7040f1dfa2a60": "71659ef95ea0d45906992683aa91c781",
".git/objects/9b/2877ee3db7cf53081a8082f1ff5e414d3aceb5": "d4963c899dc629ea1e59f26709246565",
".git/objects/a2/0a9e011a45f499033158c76e4021937cdd27e4": "a3961ea644a1a2cd706cb7768dc2f376",
".git/objects/a2/596852654d1165576c2bc499eae43de7175ea8": "7aa3a49ecf9162227a0c61375ad51e80",
".git/objects/a2/d0d34fd067770a560a902ce34dad6110dd70d2": "f4425ef680954f9dac8e9bcf01cefa74",
".git/objects/a3/a78ebb00342bd7f13090c4b0c45b034bf1e78b": "942d6c61e20d4d68843ca386bf3ec55e",
".git/objects/a3/f7580ef9f4b6dcc0a0611d9da18beba15433ea": "b5746800743f6d3634943e485754b417",
".git/objects/a5/2c9806e7525e0893da6203a7be2d1fc08fb9fc": "9b6ff0b1d0942a3ba760ab8b764ea0f1",
".git/objects/a6/04ecf9c7b9628fd88d0d7cc8352813b35c051e": "20b1d94d3be84ad2b8694f80a6a48165",
".git/objects/a8/970969f1ab63d53ca3338e79180c49744912fa": "ad12a23e58a41d2117901767071acabd",
".git/objects/ad/ced61befd6b9d30829511317b07b72e66918a1": "37e7fcca73f0b6930673b256fac467ae",
".git/objects/af/2be6c2c82c73a09457dc8444387490968734d9": "5bff37ca2977461bc2fb60d7efe82e8b",
".git/objects/b0/8070848a83025f9f0c0d735ad8cde9193ac13c": "f45bc0cf95d5ed52e24d1960c3810711",
".git/objects/b2/2dafdcfe4de9a70875744b126ce235a0234be8": "65dc971a1ee79bdef311c9c44dd4902f",
".git/objects/b3/244670ff7b34d23b7068db2750707943e239b8": "e1649a3d02b6b73cd5bf48960c82e1e9",
".git/objects/b4/7e1adffe35e2fc50471a4ebe101aed4bdaeb69": "b659219c122e28f8d48a9a03b948e21e",
".git/objects/b6/7b0295e3340f0af63d49b3ee76ccbbf41fc6eb": "bc40412cd6b1e998dc494b909133ae1c",
".git/objects/b8/38c25b025c87ed96abb97291459e0a2a010a4e": "680ba251aaba069927b84574a22abcc5",
".git/objects/b8/44aec0245ce808623f60651686aeed1db288e4": "7deb33803bc317d517f29f7fe4a50771",
".git/objects/b8/fada60a43a74f4046f02a67bd33247b174f172": "5906d47044458c0a09ab11744306546e",
".git/objects/b9/3e39bd49dfaf9e225bb598cd9644f833badd9a": "666b0d595ebbcc37f0c7b61220c18864",
".git/objects/b9/9dc8cb80cb106520d39ea125b751470b4a9f4f": "e2f0e032342e0cf8af6147e7208b29dc",
".git/objects/b9/e9bc22c42fa900f8e386e99b2716f7de0fa1cc": "0be96eaffecc29ccb5ace4c4d6d63290",
".git/objects/bb/4db3d19bc54d415068fe3e727c768d75b4c046": "877f78d29f858adfef417e4913dc70c8",
".git/objects/bc/a6c485698f143bde308840f5afe2e13399f839": "865e4f448a541c150c43a06132592ffe",
".git/objects/bc/a9035bf84f03555d9c27c5dc43c13389299afb": "29dfbe8555088d84da08c454be6a214e",
".git/objects/be/72943a63cb9f10c4b07c840eae1ffee9de1f6d": "687334525186df55021faba0e25642a2",
".git/objects/c0/14dcff4d23c0cb7be324a6c6c0d68a81c4d9c8": "ac3ade38ecdcf1a1a4cd69eceb10996b",
".git/objects/c2/b7921f9de22e3d558b22abfdf11940b136d602": "a73d2b2ce10a1edf6a2d0eb1bb785318",
".git/objects/c4/192d78b6d7c01241089dd0396ab2b5a9cd8aea": "a78872dd68593f5c4996edc2ee096ce7",
".git/objects/c7/ac1e4ba9a7ae9d620af2cbff32c0f3cfa3ca09": "14fb060bd865bf655129e1f2dfbfe92d",
".git/objects/c8/3af99da428c63c1f82efdcd11c8d5297bddb04": "144ef6d9a8ff9a753d6e3b9573d5242f",
".git/objects/ca/8aff056c8320f77c87e427fde5b08b753ff910": "6f46c7e970c82d991ca0723ab835b721",
".git/objects/cb/bb043c6a37de13a03d919875be1244294ae6be": "71eaef05ea7d248a5ee87078f57070ee",
".git/objects/d1/aefe80a04bd4438e08fd203ff99c05771e2d3d": "6dd62bea2a3901f9a3923761d1edbacd",
".git/objects/d3/e1aea7748d934410eaaaa76adcd26c6dc6591f": "01e23dcc7e5549d99197add54835f417",
".git/objects/d9/5b1d3499b3b3d3989fa2a461151ba2abd92a07": "a072a09ac2efe43c8d49b7356317e52e",
".git/objects/d9/7fe1fdf868f3c0b6ea3a83b516497c17398c48": "a39cbfb609bc8c788c0ea03e0b295f64",
".git/objects/da/015b7dd96b790e807a34a1c59f8a3d98ad629f": "9ab25f56fc19451d0913a7c1915df854",
".git/objects/dd/355c6723b63f47823c33fcd95aef19f5af0e93": "6c8048d9e703566f5727ae4bd19f4306",
".git/objects/de/c2a06eadda89b4fe96d658c4068c947fb2ef5e": "25f5094690e29169c04baeabb85dd16f",
".git/objects/df/2ed59293294121e18d95d269fe59d5f7df2650": "155218d8d1bc46353085743473d48324",
".git/objects/df/8b06d2ccbc7f0961a0f2fd3b8fbf7fd806c2f6": "76aab1a8098871e613283193f99a3f2a",
".git/objects/e1/be1ec48726acf5f2cce1fbf9670b060c761a07": "18d8863f644b5a4f8e3649e7fed6e9fa",
".git/objects/e3/2b1ffd35fd0f7ca36ed4bbeb6c458fb45b12e6": "37c3d510aa5bf590dae3a552f1be3d2b",
".git/objects/e4/bf2219b4457c1b5ea5237d4041580e4cfb6502": "9c4d702d06b6ddf4cdf02e92f7709a87",
".git/objects/e4/f9f9b5897957e923fa48080ee30f0f50ce571c": "33299a1992f5f15f96a3bcb28eab9e5a",
".git/objects/e6/21488a8e6ee7ce62e3fea8672af5462308ba4e": "b1275e73fdd546a0faa34b14afb97759",
".git/objects/e6/eb8f689cbc9febb5a913856382d297dae0d383": "466fce65fb82283da16cdd7c93059ff3",
".git/objects/e6/f4e2e17579d87adfaf1f2246e71dd136615d82": "48faca3d46e5275548cca2f2461fc87d",
".git/objects/e8/1b32a2038b8e8f66931f2936e3c8ae5f6acb5a": "f91405177f1088512073980b096098b8",
".git/objects/eb/fed309a4119362a37c6f5f526f3ea77699c256": "1d85909c030be87921859eb772baf0a9",
".git/objects/ee/0e319c5539dbb17d9167d3b7194b5e1a963b42": "b8904b0dc33f998f23b01fa587059178",
".git/objects/ee/cfdca0356074ff713b70edeef34c26bd0b3629": "d4d1e178c1bc000216cf887c9b4273c6",
".git/objects/f3/3e0726c3581f96c51f862cf61120af36599a32": "afcaefd94c5f13d3da610e0defa27e50",
".git/objects/f4/8d7a0597d86380dfa4da2d5fcdc0c7bbb1e4bd": "b406215b39eadbf11cf70315f25b7754",
".git/objects/f6/cfb0dda828824a497b5b560f50cac7c33b599c": "94d904e2918df9c069d1c4822a85fe6c",
".git/objects/f6/e6c75d6f1151eeb165a90f04b4d99effa41e83": "95ea83d65d44e4c524c6d51286406ac8",
".git/objects/f8/34b47a846e0cf59df40d7a3dffe67708bea21c": "253aa90a644de15aa7cf388e4e552e61",
".git/objects/f8/6ecccf5f8419d39ee732b43939b276796af80a": "4d5defe6fd747e5e72e7072448db9c41",
".git/objects/f8/81649c0b905ffe8b4b40ae044acd8db75b6eed": "b7cc2487b7aa93d0be432aa256647d48",
".git/objects/fa/a79336e918588256d2b59f5653fd9f70836cb1": "c3b365043bcdd77a1c98e9874f07b575",
".git/objects/fb/17c7222b31b8d7b5603d70066a5a1f77f80f76": "c6cef83973aee105ca142376fb29ecbe",
".git/objects/fd/05cfbc927a4fedcbe4d6d4b62e2c1ed8918f26": "5675c69555d005a1a244cc8ba90a402c",
".git/objects/fd/b2f99d783d9a82a34b95c8d14f1f7fcd9d20cb": "101d1ecf6a6d376d1946efedd0c86dd1",
".git/objects/fe/3b361250004737b67b1bfb8bce70f6c1ed6776": "b2473cc0d3397c044b8058d2e92c37e9",
".git/objects/ff/4b57c0c07320a87675e06b639fba33f2f12ada": "0f69b47625a93e670ab93527dd1f1fb4",
".git/objects/pack/pack-3b70626dcccce9762678a46053a73e541716adfb.idx": "17cc037327ac968dddece775cf2937e5",
".git/objects/pack/pack-3b70626dcccce9762678a46053a73e541716adfb.pack": "efd27c629f433450b8c78aad4e6c1b0d",
".git/objects/pack/pack-3b70626dcccce9762678a46053a73e541716adfb.rev": "5e4b64495c6332cdc52f87e832bcc6ef",
".git/objects/pack/pack-c83672b348e596dd3cbe7cc188636450045b2a86.idx": "89c0f17d5937d0adf44dc6ad80fc2691",
".git/objects/pack/pack-c83672b348e596dd3cbe7cc188636450045b2a86.pack": "2a0fdc5898fc835d0132b33c705099df",
".git/objects/pack/pack-c83672b348e596dd3cbe7cc188636450045b2a86.rev": "04ec08aecb983782654e6450c653bea0",
".git/ORIG_HEAD": "d0174cb2599b35f8c20e07ac8b8c1acb",
".git/packed-refs": "313849b0a9d6186fe5e1675fccc63d9c",
".git/refs/heads/master": "1ee3b7fd40fe5dd865f422a8ba1aa15e",
".git/refs/remotes/origin/HEAD": "73a00957034783b7b5c8294c54cd3e12",
".git/refs/remotes/origin/master": "1ee3b7fd40fe5dd865f422a8ba1aa15e",
"assets/AssetManifest.bin": "6b3bc950195e805a1d3726d8ddd1896c",
"assets/AssetManifest.bin.json": "5e9d61e33a85db2780324c2c2229cb44",
"assets/AssetManifest.json": "cb2d4c9c592abb686251c38f8c5fed67",
"assets/assets/fonts/Urbanist-Bold.ttf": "f1be12677cd5a989d8851a7743ea9b9e",
"assets/assets/fonts/Urbanist-Medium.ttf": "b772c045777ba8193439cd080d580285",
"assets/assets/fonts/Urbanist-Regular.ttf": "40b401cd8b8d6dc564119975375d0111",
"assets/assets/images/logo.png": "9338d9dd16867b1e0cf51c6498162bd5",
"assets/FontManifest.json": "3c11146eecc07da87cbd6533f988d11a",
"assets/fonts/MaterialIcons-Regular.otf": "b77b664a037ec3fd5f4e584e024dd4df",
"assets/NOTICES": "7331b31df7fbf1ccc071e320a327e15d",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "33b7d9392238c04c131b6ce224e13711",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "15d54d142da2f2d6f2e90ed1d55121af",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "f20c98cc459b964f3d2926782a978c57",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "ec9694722ed4028f0754c7bd6cf718ba",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "728b2d477d9b8c14593d4f9b82b484f3",
"canvaskit/canvaskit.js.symbols": "bdcd3835edf8586b6d6edfce8749fb77",
"canvaskit/canvaskit.wasm": "7a3f4ae7d65fc1de6a6e7ddd3224bc93",
"canvaskit/chromium/canvaskit.js": "8191e843020c832c9cf8852a4b909d4c",
"canvaskit/chromium/canvaskit.js.symbols": "b61b5f4673c9698029fa0a746a9ad581",
"canvaskit/chromium/canvaskit.wasm": "f504de372e31c8031018a9ec0a9ef5f0",
"canvaskit/skwasm.js": "ea559890a088fe28b4ddf70e17e60052",
"canvaskit/skwasm.js.symbols": "e72c79950c8a8483d826a7f0560573a1",
"canvaskit/skwasm.wasm": "39dd80367a4e71582d234948adc521c0",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "83d881c1dbb6d6bcd6b42e274605b69c",
"flutter_bootstrap.js": "d0873f8385798fff775d47d2ff5caa94",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "61c35813cc08d211d5cbfa5ff3373d06",
"/": "61c35813cc08d211d5cbfa5ff3373d06",
"main.dart.js": "c4d94f8a4684e7d91d8b07c7247ef656",
"manifest.json": "b1bced03e010ee532bac8444ea3156ba",
"version.json": "8468f510ba4a4f8c7bd069141f81fd69"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
