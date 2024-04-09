
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
    var aboutViewMore = document.getElementById("");
    var formName = document.getElementById('formname');
    var formNumber = document.getElementById('formnumber');
    var formMessage = document.getElementById('formmessage');
    if (loc == '/' || loc == '/index.html' || loc == '/dag-damjasy/') {
        if (lang == 'ru') {

        }
        if (lang == 'tm') {

        }
        if (lang == 'en') {

        }
    }
}

function reload(){
    location.reload();
}