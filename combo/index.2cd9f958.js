!function(){function e(e,t,i,o){Object.defineProperty(e,t,{get:i,set:o,enumerable:!0,configurable:!0})}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},i={},o={},n=t.parcelRequireb0ef;null==n&&((n=function(e){if(e in i)return i[e].exports;if(e in o){var t=o[e];delete o[e];var n={id:e,exports:{}};return i[e]=n,t.call(n.exports,n,n.exports),n.exports}var s=new Error("Cannot find module '"+e+"'");throw s.code="MODULE_NOT_FOUND",s}).register=function(e,t){o[e]=t},t.parcelRequireb0ef=n),n.register("801F5",(function(t,i){var o,n;e(t.exports,"register",(function(){return o}),(function(e){return o=e})),e(t.exports,"resolve",(function(){return n}),(function(e){return n=e}));var s={};o=function(e){for(var t=Object.keys(e),i=0;i<t.length;i++)s[t[i]]=e[t[i]]},n=function(e){var t=s[e];if(null==t)throw new Error("Could not resolve bundle with id "+e);return t}})),n.register("6qymH",(function(e,t){!function(i,o){"use strict";var n="function",s="undefined",r="object",a="string",l="model",c="name",d="type",u="vendor",b="version",m="architecture",h="console",w="mobile",p="tablet",f="smarttv",v="wearable",g="embedded",y="Amazon",x="Apple",k="ASUS",E="BlackBerry",S="Browser",_="Chrome",L="Firefox",A="Google",j="Huawei",O="LG",C="Microsoft",q="Motorola",H="Opera",T="Samsung",R="Sharp",F="Sony",B="Xiaomi",U="Zebra",z="Facebook",N=function(e){for(var t={},i=0;i<e.length;i++)t[e[i].toUpperCase()]=e[i];return t},P=function(e,t){return typeof e===a&&-1!==D(t).indexOf(D(e))},D=function(e){return e.toLowerCase()},I=function(e,t){if(typeof e===a)return e=e.replace(/^\s\s*/,""),typeof t===s?e:e.substring(0,350)},$=function(e,t){for(var i,s,a,l,c,d,u=0;u<t.length&&!c;){var b=t[u],m=t[u+1];for(i=s=0;i<b.length&&!c;)if(c=b[i++].exec(e))for(a=0;a<m.length;a++)d=c[++s],typeof(l=m[a])===r&&l.length>0?2===l.length?typeof l[1]==n?this[l[0]]=l[1].call(this,d):this[l[0]]=l[1]:3===l.length?typeof l[1]!==n||l[1].exec&&l[1].test?this[l[0]]=d?d.replace(l[1],l[2]):o:this[l[0]]=d?l[1].call(this,d,l[2]):o:4===l.length&&(this[l[0]]=d?l[3].call(this,d.replace(l[1],l[2])):o):this[l]=d||o;u+=2}},M=function(e,t){for(var i in t)if(typeof t[i]===r&&t[i].length>0){for(var n=0;n<t[i].length;n++)if(P(t[i][n],e))return"?"===i?o:i}else if(P(t[i],e))return"?"===i?o:i;return e},V={ME:"4.90","NT 3.11":"NT3.51","NT 4.0":"NT4.0",2e3:"NT 5.0",XP:["NT 5.1","NT 5.2"],Vista:"NT 6.0",7:"NT 6.1",8:"NT 6.2",8.1:"NT 6.3",10:["NT 6.4","NT 10.0"],RT:"ARM"},G={browser:[[/\b(?:crmo|crios)\/([\w\.]+)/i],[b,[c,"Chrome"]],[/edg(?:e|ios|a)?\/([\w\.]+)/i],[b,[c,"Edge"]],[/(opera mini)\/([-\w\.]+)/i,/(opera [mobiletab]{3,6})\b.+version\/([-\w\.]+)/i,/(opera)(?:.+version\/|[\/ ]+)([\w\.]+)/i],[c,b],[/opios[\/ ]+([\w\.]+)/i],[b,[c,H+" Mini"]],[/\bopr\/([\w\.]+)/i],[b,[c,H]],[/(kindle)\/([\w\.]+)/i,/(lunascape|maxthon|netfront|jasmine|blazer)[\/ ]?([\w\.]*)/i,/(avant |iemobile|slim)(?:browser)?[\/ ]?([\w\.]*)/i,/(ba?idubrowser)[\/ ]?([\w\.]+)/i,/(?:ms|\()(ie) ([\w\.]+)/i,/(flock|rockmelt|midori|epiphany|silk|skyfire|ovibrowser|bolt|iron|vivaldi|iridium|phantomjs|bowser|quark|qupzilla|falkon|rekonq|puffin|brave|whale|qqbrowserlite|qq|duckduckgo)\/([-\w\.]+)/i,/(weibo)__([\d\.]+)/i],[c,b],[/(?:\buc? ?browser|(?:juc.+)ucweb)[\/ ]?([\w\.]+)/i],[b,[c,"UC"+S]],[/microm.+\bqbcore\/([\w\.]+)/i,/\bqbcore\/([\w\.]+).+microm/i],[b,[c,"WeChat(Win) Desktop"]],[/micromessenger\/([\w\.]+)/i],[b,[c,"WeChat"]],[/konqueror\/([\w\.]+)/i],[b,[c,"Konqueror"]],[/trident.+rv[: ]([\w\.]{1,9})\b.+like gecko/i],[b,[c,"IE"]],[/yabrowser\/([\w\.]+)/i],[b,[c,"Yandex"]],[/(avast|avg)\/([\w\.]+)/i],[[c,/(.+)/,"$1 Secure "+S],b],[/\bfocus\/([\w\.]+)/i],[b,[c,L+" Focus"]],[/\bopt\/([\w\.]+)/i],[b,[c,H+" Touch"]],[/coc_coc\w+\/([\w\.]+)/i],[b,[c,"Coc Coc"]],[/dolfin\/([\w\.]+)/i],[b,[c,"Dolphin"]],[/coast\/([\w\.]+)/i],[b,[c,H+" Coast"]],[/miuibrowser\/([\w\.]+)/i],[b,[c,"MIUI "+S]],[/fxios\/([-\w\.]+)/i],[b,[c,L]],[/\bqihu|(qi?ho?o?|360)browser/i],[[c,"360 "+S]],[/(oculus|samsung|sailfish|huawei)browser\/([\w\.]+)/i],[[c,/(.+)/,"$1 "+S],b],[/(comodo_dragon)\/([\w\.]+)/i],[[c,/_/g," "],b],[/(electron)\/([\w\.]+) safari/i,/(tesla)(?: qtcarbrowser|\/(20\d\d\.[-\w\.]+))/i,/m?(qqbrowser|baiduboxapp|2345Explorer)[\/ ]?([\w\.]+)/i],[c,b],[/(metasr)[\/ ]?([\w\.]+)/i,/(lbbrowser)/i,/\[(linkedin)app\]/i],[c],[/((?:fban\/fbios|fb_iab\/fb4a)(?!.+fbav)|;fbav\/([\w\.]+);)/i],[[c,z],b],[/safari (line)\/([\w\.]+)/i,/\b(line)\/([\w\.]+)\/iab/i,/(chromium|instagram)[\/ ]([-\w\.]+)/i],[c,b],[/\bgsa\/([\w\.]+) .*safari\//i],[b,[c,"GSA"]],[/headlesschrome(?:\/([\w\.]+)| )/i],[b,[c,_+" Headless"]],[/ wv\).+(chrome)\/([\w\.]+)/i],[[c,_+" WebView"],b],[/droid.+ version\/([\w\.]+)\b.+(?:mobile safari|safari)/i],[b,[c,"Android "+S]],[/(chrome|omniweb|arora|[tizenoka]{5} ?browser)\/v?([\w\.]+)/i],[c,b],[/version\/([\w\.\,]+) .*mobile\/\w+ (safari)/i],[b,[c,"Mobile Safari"]],[/version\/([\w(\.|\,)]+) .*(mobile ?safari|safari)/i],[b,c],[/webkit.+?(mobile ?safari|safari)(\/[\w\.]+)/i],[c,[b,M,{"1.0":"/8",1.2:"/1",1.3:"/3","2.0":"/412","2.0.2":"/416","2.0.3":"/417","2.0.4":"/419","?":"/"}]],[/(webkit|khtml)\/([\w\.]+)/i],[c,b],[/(navigator|netscape\d?)\/([-\w\.]+)/i],[[c,"Netscape"],b],[/mobile vr; rv:([\w\.]+)\).+firefox/i],[b,[c,L+" Reality"]],[/ekiohf.+(flow)\/([\w\.]+)/i,/(swiftfox)/i,/(icedragon|iceweasel|camino|chimera|fennec|maemo browser|minimo|conkeror|klar)[\/ ]?([\w\.\+]+)/i,/(seamonkey|k-meleon|icecat|iceape|firebird|phoenix|palemoon|basilisk|waterfox)\/([-\w\.]+)$/i,/(firefox)\/([\w\.]+)/i,/(mozilla)\/([\w\.]+) .+rv\:.+gecko\/\d+/i,/(polaris|lynx|dillo|icab|doris|amaya|w3m|netsurf|sleipnir|obigo|mosaic|(?:go|ice|up)[\. ]?browser)[-\/ ]?v?([\w\.]+)/i,/(links) \(([\w\.]+)/i],[c,b],[/(cobalt)\/([\w\.]+)/i],[c,[b,/master.|lts./,""]]],cpu:[[/(?:(amd|x(?:(?:86|64)[-_])?|wow|win)64)[;\)]/i],[[m,"amd64"]],[/(ia32(?=;))/i],[[m,D]],[/((?:i[346]|x)86)[;\)]/i],[[m,"ia32"]],[/\b(aarch64|arm(v?8e?l?|_?64))\b/i],[[m,"arm64"]],[/\b(arm(?:v[67])?ht?n?[fl]p?)\b/i],[[m,"armhf"]],[/windows (ce|mobile); ppc;/i],[[m,"arm"]],[/((?:ppc|powerpc)(?:64)?)(?: mac|;|\))/i],[[m,/ower/,"",D]],[/(sun4\w)[;\)]/i],[[m,"sparc"]],[/((?:avr32|ia64(?=;))|68k(?=\))|\barm(?=v(?:[1-7]|[5-7]1)l?|;|eabi)|(?=atmel )avr|(?:irix|mips|sparc)(?:64)?\b|pa-risc)/i],[[m,D]]],device:[[/\b(sch-i[89]0\d|shw-m380s|sm-[ptx]\w{2,4}|gt-[pn]\d{2,4}|sgh-t8[56]9|nexus 10)/i],[l,[u,T],[d,p]],[/\b((?:s[cgp]h|gt|sm)-\w+|galaxy nexus)/i,/samsung[- ]([-\w]+)/i,/sec-(sgh\w+)/i],[l,[u,T],[d,w]],[/\((ip(?:hone|od)[\w ]*);/i],[l,[u,x],[d,w]],[/\((ipad);[-\w\),; ]+apple/i,/applecoremedia\/[\w\.]+ \((ipad)/i,/\b(ipad)\d\d?,\d\d?[;\]].+ios/i],[l,[u,x],[d,p]],[/(macintosh);/i],[l,[u,x]],[/\b((?:ag[rs][23]?|bah2?|sht?|btv)-a?[lw]\d{2})\b(?!.+d\/s)/i],[l,[u,j],[d,p]],[/(?:huawei|honor)([-\w ]+)[;\)]/i,/\b(nexus 6p|\w{2,4}e?-[atu]?[ln][\dx][012359c][adn]?)\b(?!.+d\/s)/i],[l,[u,j],[d,w]],[/\b(poco[\w ]+)(?: bui|\))/i,/\b; (\w+) build\/hm\1/i,/\b(hm[-_ ]?note?[_ ]?(?:\d\w)?) bui/i,/\b(redmi[\-_ ]?(?:note|k)?[\w_ ]+)(?: bui|\))/i,/\b(mi[-_ ]?(?:a\d|one|one[_ ]plus|note lte|max|cc)?[_ ]?(?:\d?\w?)[_ ]?(?:plus|se|lite)?)(?: bui|\))/i],[[l,/_/g," "],[u,B],[d,w]],[/\b(mi[-_ ]?(?:pad)(?:[\w_ ]+))(?: bui|\))/i],[[l,/_/g," "],[u,B],[d,p]],[/; (\w+) bui.+ oppo/i,/\b(cph[12]\d{3}|p(?:af|c[al]|d\w|e[ar])[mt]\d0|x9007|a101op)\b/i],[l,[u,"OPPO"],[d,w]],[/vivo (\w+)(?: bui|\))/i,/\b(v[12]\d{3}\w?[at])(?: bui|;)/i],[l,[u,"Vivo"],[d,w]],[/\b(rmx[12]\d{3})(?: bui|;|\))/i],[l,[u,"Realme"],[d,w]],[/\b(milestone|droid(?:[2-4x]| (?:bionic|x2|pro|razr))?:?( 4g)?)\b[\w ]+build\//i,/\bmot(?:orola)?[- ](\w*)/i,/((?:moto[\w\(\) ]+|xt\d{3,4}|nexus 6)(?= bui|\)))/i],[l,[u,q],[d,w]],[/\b(mz60\d|xoom[2 ]{0,2}) build\//i],[l,[u,q],[d,p]],[/((?=lg)?[vl]k\-?\d{3}) bui| 3\.[-\w; ]{10}lg?-([06cv9]{3,4})/i],[l,[u,O],[d,p]],[/(lm(?:-?f100[nv]?|-[\w\.]+)(?= bui|\))|nexus [45])/i,/\blg[-e;\/ ]+((?!browser|netcast|android tv)\w+)/i,/\blg-?([\d\w]+) bui/i],[l,[u,O],[d,w]],[/(ideatab[-\w ]+)/i,/lenovo ?(s[56]000[-\w]+|tab(?:[\w ]+)|yt[-\d\w]{6}|tb[-\d\w]{6})/i],[l,[u,"Lenovo"],[d,p]],[/(?:maemo|nokia).*(n900|lumia \d+)/i,/nokia[-_ ]?([-\w\.]*)/i],[[l,/_/g," "],[u,"Nokia"],[d,w]],[/(pixel c)\b/i],[l,[u,A],[d,p]],[/droid.+; (pixel[\daxl ]{0,6})(?: bui|\))/i],[l,[u,A],[d,w]],[/droid.+ (a?\d[0-2]{2}so|[c-g]\d{4}|so[-gl]\w+|xq-a\w[4-7][12])(?= bui|\).+chrome\/(?![1-6]{0,1}\d\.))/i],[l,[u,F],[d,w]],[/sony tablet [ps]/i,/\b(?:sony)?sgp\w+(?: bui|\))/i],[[l,"Xperia Tablet"],[u,F],[d,p]],[/ (kb2005|in20[12]5|be20[12][59])\b/i,/(?:one)?(?:plus)? (a\d0\d\d)(?: b|\))/i],[l,[u,"OnePlus"],[d,w]],[/(alexa)webm/i,/(kf[a-z]{2}wi)( bui|\))/i,/(kf[a-z]+)( bui|\)).+silk\//i],[l,[u,y],[d,p]],[/((?:sd|kf)[0349hijorstuw]+)( bui|\)).+silk\//i],[[l,/(.+)/g,"Fire Phone $1"],[u,y],[d,w]],[/(playbook);[-\w\),; ]+(rim)/i],[l,u,[d,p]],[/\b((?:bb[a-f]|st[hv])100-\d)/i,/\(bb10; (\w+)/i],[l,[u,E],[d,w]],[/(?:\b|asus_)(transfo[prime ]{4,10} \w+|eeepc|slider \w+|nexus 7|padfone|p00[cj])/i],[l,[u,k],[d,p]],[/ (z[bes]6[027][012][km][ls]|zenfone \d\w?)\b/i],[l,[u,k],[d,w]],[/(nexus 9)/i],[l,[u,"HTC"],[d,p]],[/(htc)[-;_ ]{1,2}([\w ]+(?=\)| bui)|\w+)/i,/(zte)[- ]([\w ]+?)(?: bui|\/|\))/i,/(alcatel|geeksphone|nexian|panasonic|sony(?!-bra))[-_ ]?([-\w]*)/i],[u,[l,/_/g," "],[d,w]],[/droid.+; ([ab][1-7]-?[0178a]\d\d?)/i],[l,[u,"Acer"],[d,p]],[/droid.+; (m[1-5] note) bui/i,/\bmz-([-\w]{2,})/i],[l,[u,"Meizu"],[d,w]],[/\b(sh-?[altvz]?\d\d[a-ekm]?)/i],[l,[u,R],[d,w]],[/(blackberry|benq|palm(?=\-)|sonyericsson|acer|asus|dell|meizu|motorola|polytron)[-_ ]?([-\w]*)/i,/(hp) ([\w ]+\w)/i,/(asus)-?(\w+)/i,/(microsoft); (lumia[\w ]+)/i,/(lenovo)[-_ ]?([-\w]+)/i,/(jolla)/i,/(oppo) ?([\w ]+) bui/i],[u,l,[d,w]],[/(archos) (gamepad2?)/i,/(hp).+(touchpad(?!.+tablet)|tablet)/i,/(kindle)\/([\w\.]+)/i,/(nook)[\w ]+build\/(\w+)/i,/(dell) (strea[kpr\d ]*[\dko])/i,/(le[- ]+pan)[- ]+(\w{1,9}) bui/i,/(trinity)[- ]*(t\d{3}) bui/i,/(gigaset)[- ]+(q\w{1,9}) bui/i,/(vodafone) ([\w ]+)(?:\)| bui)/i],[u,l,[d,p]],[/(surface duo)/i],[l,[u,C],[d,p]],[/droid [\d\.]+; (fp\du?)(?: b|\))/i],[l,[u,"Fairphone"],[d,w]],[/(u304aa)/i],[l,[u,"AT&T"],[d,w]],[/\bsie-(\w*)/i],[l,[u,"Siemens"],[d,w]],[/\b(rct\w+) b/i],[l,[u,"RCA"],[d,p]],[/\b(venue[\d ]{2,7}) b/i],[l,[u,"Dell"],[d,p]],[/\b(q(?:mv|ta)\w+) b/i],[l,[u,"Verizon"],[d,p]],[/\b(?:barnes[& ]+noble |bn[rt])([\w\+ ]*) b/i],[l,[u,"Barnes & Noble"],[d,p]],[/\b(tm\d{3}\w+) b/i],[l,[u,"NuVision"],[d,p]],[/\b(k88) b/i],[l,[u,"ZTE"],[d,p]],[/\b(nx\d{3}j) b/i],[l,[u,"ZTE"],[d,w]],[/\b(gen\d{3}) b.+49h/i],[l,[u,"Swiss"],[d,w]],[/\b(zur\d{3}) b/i],[l,[u,"Swiss"],[d,p]],[/\b((zeki)?tb.*\b) b/i],[l,[u,"Zeki"],[d,p]],[/\b([yr]\d{2}) b/i,/\b(dragon[- ]+touch |dt)(\w{5}) b/i],[[u,"Dragon Touch"],l,[d,p]],[/\b(ns-?\w{0,9}) b/i],[l,[u,"Insignia"],[d,p]],[/\b((nxa|next)-?\w{0,9}) b/i],[l,[u,"NextBook"],[d,p]],[/\b(xtreme\_)?(v(1[045]|2[015]|[3469]0|7[05])) b/i],[[u,"Voice"],l,[d,w]],[/\b(lvtel\-)?(v1[12]) b/i],[[u,"LvTel"],l,[d,w]],[/\b(ph-1) /i],[l,[u,"Essential"],[d,w]],[/\b(v(100md|700na|7011|917g).*\b) b/i],[l,[u,"Envizen"],[d,p]],[/\b(trio[-\w\. ]+) b/i],[l,[u,"MachSpeed"],[d,p]],[/\btu_(1491) b/i],[l,[u,"Rotor"],[d,p]],[/(shield[\w ]+) b/i],[l,[u,"Nvidia"],[d,p]],[/(sprint) (\w+)/i],[u,l,[d,w]],[/(kin\.[onetw]{3})/i],[[l,/\./g," "],[u,C],[d,w]],[/droid.+; (cc6666?|et5[16]|mc[239][23]x?|vc8[03]x?)\)/i],[l,[u,U],[d,p]],[/droid.+; (ec30|ps20|tc[2-8]\d[kx])\)/i],[l,[u,U],[d,w]],[/(ouya)/i,/(nintendo) ([wids3utch]+)/i],[u,l,[d,h]],[/droid.+; (shield) bui/i],[l,[u,"Nvidia"],[d,h]],[/(playstation [345portablevi]+)/i],[l,[u,F],[d,h]],[/\b(xbox(?: one)?(?!; xbox))[\); ]/i],[l,[u,C],[d,h]],[/smart-tv.+(samsung)/i],[u,[d,f]],[/hbbtv.+maple;(\d+)/i],[[l,/^/,"SmartTV"],[u,T],[d,f]],[/(nux; netcast.+smarttv|lg (netcast\.tv-201\d|android tv))/i],[[u,O],[d,f]],[/(apple) ?tv/i],[u,[l,x+" TV"],[d,f]],[/crkey/i],[[l,_+"cast"],[u,A],[d,f]],[/droid.+aft(\w)( bui|\))/i],[l,[u,y],[d,f]],[/\(dtv[\);].+(aquos)/i,/(aquos-tv[\w ]+)\)/i],[l,[u,R],[d,f]],[/(bravia[\w ]+)( bui|\))/i],[l,[u,F],[d,f]],[/(mitv-\w{5}) bui/i],[l,[u,B],[d,f]],[/\b(roku)[\dx]*[\)\/]((?:dvp-)?[\d\.]*)/i,/hbbtv\/\d+\.\d+\.\d+ +\([\w ]*; *(\w[^;]*);([^;]*)/i],[[u,I],[l,I],[d,f]],[/\b(android tv|smart[- ]?tv|opera tv|tv; rv:)\b/i],[[d,f]],[/((pebble))app/i],[u,l,[d,v]],[/droid.+; (glass) \d/i],[l,[u,A],[d,v]],[/droid.+; (wt63?0{2,3})\)/i],[l,[u,U],[d,v]],[/(quest( 2)?)/i],[l,[u,z],[d,v]],[/(tesla)(?: qtcarbrowser|\/[-\w\.]+)/i],[u,[d,g]],[/droid .+?; ([^;]+?)(?: bui|\) applew).+? mobile safari/i],[l,[d,w]],[/droid .+?; ([^;]+?)(?: bui|\) applew).+?(?! mobile) safari/i],[l,[d,p]],[/\b((tablet|tab)[;\/]|focus\/\d(?!.+mobile))/i],[[d,p]],[/(phone|mobile(?:[;\/]| [ \w\/\.]*safari)|pda(?=.+windows ce))/i],[[d,w]],[/(android[-\w\. ]{0,9});.+buil/i],[l,[u,"Generic"]]],engine:[[/windows.+ edge\/([\w\.]+)/i],[b,[c,"EdgeHTML"]],[/webkit\/537\.36.+chrome\/(?!27)([\w\.]+)/i],[b,[c,"Blink"]],[/(presto)\/([\w\.]+)/i,/(webkit|trident|netfront|netsurf|amaya|lynx|w3m|goanna)\/([\w\.]+)/i,/ekioh(flow)\/([\w\.]+)/i,/(khtml|tasman|links)[\/ ]\(?([\w\.]+)/i,/(icab)[\/ ]([23]\.[\d\.]+)/i],[c,b],[/rv\:([\w\.]{1,9})\b.+(gecko)/i],[b,c]],os:[[/microsoft (windows) (vista|xp)/i],[c,b],[/(windows) nt 6\.2; (arm)/i,/(windows (?:phone(?: os)?|mobile))[\/ ]?([\d\.\w ]*)/i,/(windows)[\/ ]?([ntce\d\. ]+\w)(?!.+xbox)/i],[c,[b,M,V]],[/(win(?=3|9|n)|win 9x )([nt\d\.]+)/i],[[c,"Windows"],[b,M,V]],[/ip[honead]{2,4}\b(?:.*os ([\w]+) like mac|; opera)/i,/cfnetwork\/.+darwin/i],[[b,/_/g,"."],[c,"iOS"]],[/(mac os x) ?([\w\. ]*)/i,/(macintosh|mac_powerpc\b)(?!.+haiku)/i],[[c,"Mac OS"],[b,/_/g,"."]],[/droid ([\w\.]+)\b.+(android[- ]x86|harmonyos)/i],[b,c],[/(android|webos|qnx|bada|rim tablet os|maemo|meego|sailfish)[-\/ ]?([\w\.]*)/i,/(blackberry)\w*\/([\w\.]*)/i,/(tizen|kaios)[\/ ]([\w\.]+)/i,/\((series40);/i],[c,b],[/\(bb(10);/i],[b,[c,E]],[/(?:symbian ?os|symbos|s60(?=;)|series60)[-\/ ]?([\w\.]*)/i],[b,[c,"Symbian"]],[/mozilla\/[\d\.]+ \((?:mobile|tablet|tv|mobile; [\w ]+); rv:.+ gecko\/([\w\.]+)/i],[b,[c,L+" OS"]],[/web0s;.+rt(tv)/i,/\b(?:hp)?wos(?:browser)?\/([\w\.]+)/i],[b,[c,"webOS"]],[/crkey\/([\d\.]+)/i],[b,[c,_+"cast"]],[/(cros) [\w]+ ([\w\.]+\w)/i],[[c,"Chromium OS"],b],[/(nintendo|playstation) ([wids345portablevuch]+)/i,/(xbox); +xbox ([^\);]+)/i,/\b(joli|palm)\b ?(?:os)?\/?([\w\.]*)/i,/(mint)[\/\(\) ]?(\w*)/i,/(mageia|vectorlinux)[; ]/i,/([kxln]?ubuntu|debian|suse|opensuse|gentoo|arch(?= linux)|slackware|fedora|mandriva|centos|pclinuxos|red ?hat|zenwalk|linpus|raspbian|plan 9|minix|risc os|contiki|deepin|manjaro|elementary os|sabayon|linspire)(?: gnu\/linux)?(?: enterprise)?(?:[- ]linux)?(?:-gnu)?[-\/ ]?(?!chrom|package)([-\w\.]*)/i,/(hurd|linux) ?([\w\.]*)/i,/(gnu) ?([\w\.]*)/i,/\b([-frentopcghs]{0,5}bsd|dragonfly)[\/ ]?(?!amd|[ix346]{1,2}86)([\w\.]*)/i,/(haiku) (\w+)/i],[c,b],[/(sunos) ?([\w\.\d]*)/i],[[c,"Solaris"],b],[/((?:open)?solaris)[-\/ ]?([\w\.]*)/i,/(aix) ((\d)(?=\.|\)| )[\w\.])*/i,/\b(beos|os\/2|amigaos|morphos|openvms|fuchsia|hp-ux)/i,/(unix) ?([\w\.]*)/i],[c,b]]},W=function(e,t){if(typeof e===r&&(t=e,e=o),!(this instanceof W))return new W(e,t).getResult();var n=e||(typeof i!==s&&i.navigator&&i.navigator.userAgent?i.navigator.userAgent:""),h=t?function(e,t){var i={};for(var o in e)t[o]&&t[o].length%2==0?i[o]=t[o].concat(e[o]):i[o]=e[o];return i}(G,t):G;return this.getBrowser=function(){var e,t={};return t[c]=o,t[b]=o,$.call(t,n,h.browser),t.major=typeof(e=t.version)===a?e.replace(/[^\d\.]/g,"").split(".")[0]:o,t},this.getCPU=function(){var e={};return e[m]=o,$.call(e,n,h.cpu),e},this.getDevice=function(){var e={};return e[u]=o,e[l]=o,e[d]=o,$.call(e,n,h.device),e},this.getEngine=function(){var e={};return e[c]=o,e[b]=o,$.call(e,n,h.engine),e},this.getOS=function(){var e={};return e[c]=o,e[b]=o,$.call(e,n,h.os),e},this.getResult=function(){return{ua:this.getUA(),browser:this.getBrowser(),engine:this.getEngine(),os:this.getOS(),device:this.getDevice(),cpu:this.getCPU()}},this.getUA=function(){return n},this.setUA=function(e){return n=typeof e===a&&e.length>350?I(e,350):e,this},this.setUA(n),this};W.VERSION="1.0.33",W.BROWSER=N([c,b,"major"]),W.CPU=N([m]),W.DEVICE=N([l,u,d,h,w,f,p,v,g]),W.ENGINE=W.OS=N([c,b]),typeof t!==s?(e.exports&&(t=e.exports=W),t.UAParser=W):typeof define===n&&define.amd?define((function(){return W})):typeof i!==s&&(i.UAParser=W);var Z=typeof i!==s&&(i.jQuery||i.Zepto);if(Z&&!Z.ua){var Y=new W;Z.ua=Y.getResult(),Z.ua.get=function(){return Y.getUA()},Z.ua.set=function(e){Y.setUA(e);var t=Y.getResult();for(var i in t)Z.ua[i]=t[i]}}}("object"==typeof window?window:this)})),n.register("15xAQ",(function(e,t){e.exports=n("j69u9").getBundleURL("4bO6T")+n("801F5").resolve("1nIbR")})),n.register("j69u9",(function(t,i){var o;e(t.exports,"getBundleURL",(function(){return o}),(function(e){return o=e}));var n={};function s(e){return(""+e).replace(/^((?:https?|file|ftp|(chrome|moz|safari-web)-extension):\/\/.+)\/[^/]+$/,"$1")+"/"}o=function(e){var t=n[e];return t||(t=function(){try{throw new Error}catch(t){var e=(""+t.stack).match(/(https?|file|ftp|(chrome|moz|safari-web)-extension):\/\/[^)\n]+/g);if(e)return s(e[2])}return"/"}(),n[e]=t),t}})),n.register("juxYb",(function(e,t){e.exports=n("j69u9").getBundleURL("4bO6T")+n("801F5").resolve("1KHHZ")})),n.register("dEF6h",(function(e,t){e.exports=n("j69u9").getBundleURL("4bO6T")+n("801F5").resolve("k8Ccm")})),n.register("c2ari",(function(e,t){e.exports=n("j69u9").getBundleURL("4bO6T")+n("801F5").resolve("aKUGs")})),n.register("5UZwb",(function(e,t){e.exports=n("j69u9").getBundleURL("4bO6T")+n("801F5").resolve("jx9OB")})),n.register("d5Duj",(function(e,t){e.exports=n("j69u9").getBundleURL("4bO6T")+n("801F5").resolve("lfyBj")})),n.register("ig3BB",(function(e,t){e.exports=n("j69u9").getBundleURL("4bO6T")+n("801F5").resolve("7LfLa")})),n.register("eE3qF",(function(e,t){e.exports=n("j69u9").getBundleURL("4bO6T")+n("801F5").resolve("ipGBT")})),n("801F5").register(JSON.parse('{"4bO6T":"index.2cd9f958.js","1nIbR":"1.f89f328f.jpg","1KHHZ":"1@2x.4a479e3c.jpg","k8Ccm":"2.91ebde90.jpg","aKUGs":"3.85b088c0.jpg","jx9OB":"4.97cc282e.jpg","lfyBj":"5.3842acb1.jpg","7LfLa":"6.7a6d31c1.jpg","ipGBT":"7.4dfa6f43.jpg"}'));var s={};
/*! WOW - v0.1.4 - 2014-03-03
* Copyright (c) 2014 Matthieu Aussaguel; Licensed MIT */(function(){var e,t=function(e,t){return function(){return e.apply(t,arguments)}};e=function(){function e(){}return e.prototype.extend=function(e,t){var i,o;for(i in e)null!=(o=e[i])&&(t[i]=o);return t},e.prototype.isMobile=function(e){return/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(e)},e}(),this.WOW=function(){function i(e){null==e&&(e={}),this.scrollCallback=t(this.scrollCallback,this),this.scrollHandler=t(this.scrollHandler,this),this.start=t(this.start,this),this.scrolled=!0,this.config=this.util().extend(e,this.defaults)}return i.prototype.defaults={boxClass:"wow",animateClass:"animated",offset:0,mobile:!0},i.prototype.init=function(){var e;return this.element=window.document.documentElement,this.boxes=this.element.getElementsByClassName(this.config.boxClass),this.boxes.length?this.disabled()?this.resetStyle():"interactive"===(e=document.readyState)||"complete"===e?this.start():document.addEventListener("DOMContentLoaded",this.start):void 0},i.prototype.start=function(){var e,t,i,o;for(t=0,i=(o=this.boxes).length;i>t;t++)e=o[t],this.applyStyle(e,!0);return window.addEventListener("scroll",this.scrollHandler,!1),window.addEventListener("resize",this.scrollHandler,!1),this.interval=setInterval(this.scrollCallback,50)},i.prototype.stop=function(){return window.removeEventListener("scroll",this.scrollHandler,!1),window.removeEventListener("resize",this.scrollHandler,!1),null!=this.interval?clearInterval(this.interval):void 0},i.prototype.show=function(e){return this.applyStyle(e),e.className=e.className+" "+this.config.animateClass},i.prototype.applyStyle=function(e,t){var i,o,n;return o=e.getAttribute("data-wow-duration"),i=e.getAttribute("data-wow-delay"),n=e.getAttribute("data-wow-iteration"),e.setAttribute("style",this.customStyle(t,o,i,n))},i.prototype.resetStyle=function(){var e,t,i,o,n;for(n=[],t=0,i=(o=this.boxes).length;i>t;t++)e=o[t],n.push(e.setAttribute("style","visibility: visible;"));return n},i.prototype.customStyle=function(e,t,i,o){var n;return n=e?"visibility: hidden; -webkit-animation-name: none; -moz-animation-name: none; animation-name: none;":"visibility: visible;",t&&(n+="-webkit-animation-duration: "+t+"; -moz-animation-duration: "+t+"; animation-duration: "+t+";"),i&&(n+="-webkit-animation-delay: "+i+"; -moz-animation-delay: "+i+"; animation-delay: "+i+";"),o&&(n+="-webkit-animation-iteration-count: "+o+"; -moz-animation-iteration-count: "+o+"; animation-iteration-count: "+o+";"),n},i.prototype.scrollHandler=function(){return this.scrolled=!0},i.prototype.scrollCallback=function(){var e;return this.scrolled&&(this.scrolled=!1,this.boxes=function(){var t,i,o,n;for(n=[],t=0,i=(o=this.boxes).length;i>t;t++)(e=o[t])&&(this.isVisible(e)?this.show(e):n.push(e));return n}.call(this),!this.boxes.length)?this.stop():void 0},i.prototype.offsetTop=function(e){var t;for(t=e.offsetTop;e=e.offsetParent;)t+=e.offsetTop;return t},i.prototype.isVisible=function(e){var t,i,o,n,s;return i=e.getAttribute("data-wow-offset")||this.config.offset,n=(s=window.pageYOffset)+this.element.clientHeight-i,t=(o=this.offsetTop(e))+e.clientHeight,n>=o&&t>=s},i.prototype.util=function(){return this._util||(this._util=new e)},i.prototype.disabled=function(){return!1===this.config.mobile&&this.util().isMobile(navigator.userAgent)},i}()}).call(s);var r=n("6qymH");const a=()=>{const{userAgent:e}=navigator,t=new(0,r.UAParser);let i="unknown";return"Huawei"===t.getDevice().vendor&&(i="huawei"),/android/i.test(e)&&(i="android"),"Apple"===t.getDevice().vendor&&(i="ios"),i};var l=function(){const e=a();document.body.classList.add(`platform_${e}`),function(){const e=a(),t={ios:"https://redirect.appmetrica.yandex.com/serve/315401363163010541",android:"https://redirect.appmetrica.yandex.com/serve/388180713033187193",huawei:"https://redirect.appmetrica.yandex.com/serve/244065662866049837"};let i=t.android;"ios"===e?i=t.ios:"huawei"===e&&(i=t.huawei)}()};const c="popup-modal-hidden",d="modal-box-viewed",u="close",{body:b}=document;function m(e){const t=document.querySelector(e),i=t.closest(".popup-modal");b.classList.add(d),i.classList.remove(c),t.classList.add("modal-box-active"),i.addEventListener("click",(t=>{const{target:i}=t,o=i.classList.contains(u)?i:i.closest(`.${u}`);i.closest(".modal-box")&&!o||function(e){const t=document.querySelector(e);b.classList.remove(d),t.closest(".popup-modal").classList.add(c)}(e)}))}function h(e){return`0${e.toString(16)}`.substring(-2)}var w=function(e){const t=new Uint8Array((e||40)/2);return window.crypto.getRandomValues(t),Array.from(t,h).join("")};var p=class{constructor(){this.scrollHeight=Math.max(document.body.scrollHeight,document.documentElement.scrollHeight,document.body.offsetHeight,document.documentElement.offsetHeight,document.body.clientHeight,document.documentElement.clientHeight),this.clientHeight=document.documentElement.clientHeight,this.fullEventData={},this.scrollGtm=new Set([10,30,50,70,90])}handleClick(e){const t="js-gtm-event",i=e.target.classList.contains(t)?e.target:e.target.closest(`.${t}`);if(i){const e=i,t={eventAction:"click",eventLabel:e.getAttribute("data-event")||null,eventLocation:e.getAttribute("data-section")||null,eventContext:e.getAttribute("data-context")||null,eventCategory:e.getAttribute("data-event-category")||"Interactions"};this.gaPush(t)}}handleScroll(){const e=window.scrollY/(this.scrollHeight-this.clientHeight)*100;this.scrollEvt(e)}scrollEvt(e){this.scrollGtm.forEach((t=>{e>=t&&(this.scrollGtm.delete(t),this.scrollEventPush(t))}))}scrollEventPush(e){const t={eventAction:"scroll",eventLabel:`scrollPage-${e}%`,eventCategory:"Interactions"};this.gaPush(t)}gaPush(e){this.fullEventData={eventLabel:e.eventLabel,eventLocation:e.eventLocation||null,eventContext:e.eventContext||null,hitsTime:Date.now(),requestId:w(7),firingOptions:"onesPerEvent",event:"event",eventStream:"flight",eventAction:e.eventAction,eventCategory:e.eventCategory,eventContent:e.eventContent||null,eventValue:e.eventValue||null,ecommerce:null,ecommerceAction:!1,noninteraction:!1};try{dataLayer.push(this.fullEventData)}catch(e){console.log(this.fullEventData)}}addEventListeners(){document.body.addEventListener("click",this.handleClick.bind(this)),document.addEventListener("scroll",(()=>{this.handleScroll()}))}};const f=document.querySelector(".tooltip");var v={1:n("15xAQ"),"1@2x":n("juxYb"),2:n("dEF6h"),"2@2x":n("dEF6h"),3:n("c2ari"),"3@2x":n("c2ari"),4:n("5UZwb"),"4@2x":n("5UZwb"),5:n("d5Duj"),"5@2x":n("d5Duj"),6:n("ig3BB"),"6@2x":n("ig3BB"),7:n("eE3qF"),"7@2x":n("eE3qF")};var g=class{constructor(e){this.promoCampaignIds=[{id:"1400002",discount:50},{id:"2200001",discount:55}],this.itemObject=e,this.imagesPaths=v,this.htmlComponent=document.createDocumentFragment(),this.htmlComponent.append(this.createElement()),this.discount=null}stringifyPrice(e){const t=e.toString().split("");return t.splice(-3,0," "),`${t.join("")}&nbsp;₽`}getDiscount(){const e=this.itemObject.promoCampaigns;this.promoCampaignIds.forEach((t=>e.filter((e=>e.id===t.id))[0]?.discount)),e.forEach((e=>{const t=this.promoCampaignIds.filter((t=>t.id===e.id));t.length>0&&(this.discount=t[0].discount)}))}getDiscountedPrice(){return Math.ceil(this.itemObject.price.amount-this.itemObject.price.amount*this.discount/100)}createElement(){const e=document.createElement("li");return e.classList.add("shop-list__item"),e.classList.add("shop-item"),e.setAttribute("id",`${this.itemObject.article}`),this.getDiscount(),e.innerHTML=`\n    <div class="shop-item__label">Скидка&nbsp;${this.discount}%</div>\n    <div class="shop-item__image">\n      <picture>\n        <source\n          media="(min-width: 1600px), (-webkit-min-device-pixel-ratio: 1.25), (min-resolution: 120dpi)"\n          type="image/webp"\n          srcset=https://tele2.ru${this.itemObject.images[0].url}\n        />\n        <img src=https://tele2.ru${this.itemObject.images[0].url} alt="" />\n      </picture>\n    </div>\n    <div class="shop-item__name">${this.itemObject.frontName}</div>\n    <div class="shop-item__price price">\n      <div\n        class="price__new"\n      >${this.stringifyPrice(this.getDiscountedPrice())}</div>\n      <div class="price__old">${this.stringifyPrice(this.itemObject.price.amount)}</div>\n    </div>\n    <div class="shop-item__footer item-footer">\n      <div class="item-footer__conditions">\n        при покупке комплекта 3&nbsp;в 1\n      </div>\n      <a\n        class="item-footer__button btn-primary js-gtm-event"\n        href=https://msk.tele2.ru/shop/product/${this.itemObject.categorySlug}/${this.itemObject.slug}/\n        target="_blank"\n        title="Подробнее"\n        data-event=${this.itemObject.slug}\n      >\n        <span class="button__text"> Подробнее </span>\n        <svg width="22" height="22" viewBox="0 0 22 22" fill="none">\n          <use xlink:href="#arrow-link"></use>\n        </svg>\n      </a>\n    </div>\n    `,e}render(){return this.htmlComponent}};var y=class{constructor(){this.state=null}renderShop(){const e=this.state,t=document.querySelector(".shop-list"),i=document.querySelector(".shop-item_last");e.forEach((e=>{if(!0===e.pickupAvailable&&e.price.amount){const o=new g(e).createElement();t.insertBefore(o,i)}}))}};var x=class{constructor(){const e=this.getRegion()||"siteMSK",t=e?.slice(4).toLowerCase()||"msk",i=`.tele2.ru/api/shop/products/devices/bundles/?siteId=${e}&category=smartphones&promoCampaignId=1400002+2200001&bundleIndex=1&bundleSize=500`;this.baseUrl=`https://${t}${i}`}getRegion(){const e=window.location.search;return new URLSearchParams(e).get("region")}async request(){const e=await fetch(this.baseUrl,{method:"GET",headers:{Accept:"application/json, text/plain"}});return new Promise(((t,i)=>{try{const i=e;if(!i.ok)throw new Error(String(i.status));t(i)}catch(e){i(e)}}))}async getSubscriptionList(){return(await this.request()).json()}};var k=class{#e;#t;constructor(e){this.#e=e}async loadData(){try{const e=await this.#e.getSubscriptionList();this.#t=e.data}catch(e){console.log("Error",e)}}getSubscriptions(){return this.#t}};var E=class{constructor(e,t){this.view=e,this.model=t,window.queueMicrotask((()=>this.updateView()))}handleWindowPopState(){this.updateView()}createViewState(){return this.model.getSubscriptions()}updateView(){this.view.state=this.createViewState(),this.view.renderShop()}};const S=new p,_=new class{keyframesForSim=[{transform:"translateY(-5rem)",opacity:0,offset:0},{transform:"translateX(0.5rem)",opacity:1,offset:1}];keyframesForShadow=[{transform:"scaleX(0)",right:"3rem",opacity:0,offset:0},{transform:"scaleX(1)",right:"-2.7rem",opacity:1,offset:1}];optionsForAnimations={duration:1e3,delay:400,iterations:1,fill:"forwards",easing:"ease"};constructor(){this.scrollObserverElement=document.querySelector(".observe"),this.animatedItems=document.querySelectorAll(".js-animation")}setAnimationOnScroll(){const e=new IntersectionObserver((t=>{t.forEach((t=>{t.isIntersecting&&(this.setAnimation(),e.unobserve(this.scrollObserverElement))}))}));e.observe(this.scrollObserverElement)}setAnimation(){this.animatedItems.forEach((e=>{e.classList.contains("pic-layer_sim")?e.animate(this.keyframesForSim,this.optionsForAnimations):e.animate(this.keyframesForShadow,this.optionsForAnimations)}))}init(){this.setAnimationOnScroll()}},L=new k(new x);function A(e){const t=e.getBoundingClientRect().top+window.scrollY+0;window.scrollTo({top:t,behavior:"smooth"})}window.addEventListener("load",(()=>{var e;l(),(new(0,s.WOW)).init(),S.addEventListeners(),_.init(),e=document.querySelector(".shop"),"#about"===document.location.hash&&A(e),function(){const e=document.querySelectorAll(".js-go-next"),t=document.querySelectorAll("section");e.forEach((e=>{e.addEventListener("click",(()=>{const i=e.closest("section");let o;t.forEach(((e,n)=>{e===i&&(o=t[n+1],A(o))}))}))}))}(),document.querySelector(".popup__link").addEventListener("click",(()=>m("#popup-modal-box"))),document.querySelectorAll(".tooltip-icon").forEach((e=>{e.addEventListener("click",(()=>{f.classList.toggle("opened")}))})),function(){const e=document.querySelectorAll(".faq__item"),t="active";e.forEach((i=>{i.addEventListener("click",(()=>{const o=i.childNodes[3];i.classList.contains(t)?(o.style.transition="none",i.classList.remove(t)):(!function(e){const t="active";e.forEach((e=>{const i=e.childNodes[3];e.classList.contains(t)&&(i.style.transition="none",e.classList.remove(t))}))}(e),o.style.transition="0.2s ease-in-out",i.classList.add(t))}))}))}(),L.loadData().then((()=>{const e=new y;new E(e,L)}))}))}();