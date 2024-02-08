
//lang
var defLang = 'ru';
let cookLang = getCookie('lang');

if (cookLang) {
    // defLang = cookLang;
    changeLang(cookLang);
} else {
    setCookie('lang', defLang);
}
function changeLang(lang) {
    console.log('defLang: ', defLang)
    console.log('lang: ', lang)
    // defLang = lang;
    setCookie('lang', lang);
    let elements = document.querySelectorAll('.lang');

    Array.prototype.forEach.call(elements, function (el, i) {
        let attr = el.getAttribute('key');
        el.innerHTML = arrLang[lang][attr];
    });
    // document.getElementById("activelang").innerHTML = lang;


    let loc = window.location.pathname;
    var blackLogo = document.getElementById("blacklogo");
    var whiteLogo = document.getElementById("whitelogo");
    var tableInfo = document.getElementById("tableinfo");
    var aboutViewMore = document.getElementById("aboutviewmorebtn");
    var formName = document.getElementById('formname');
    var formNumber = document.getElementById('formnumber');
    var formMessage = document.getElementById('formmessage');
    if (loc == '/' || loc == '/index.html' || loc == '/dag-damjasy/') {
        if (lang == 'ru') {
            tableInfo.setAttribute('src', 'images/table.svg');
        }
        if (lang == 'tm') {
            tableInfo.setAttribute('src', 'images/table-tm.svg');

        }
        if (lang == 'en') {
            tableInfo.setAttribute('src', 'images/table-en.svg');

        }
    }
}