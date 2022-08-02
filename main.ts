//import { execSync} from 'child_process';

//console.log(execSync('curl ipinfo.io').toString());
const IP = require('ip);
let ip = IP.address();
var geoip = require('geoip-lite');

var geo = geoip.lookup(ip);

console.log(geo)
