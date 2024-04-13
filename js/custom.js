
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



//send mail
async function submitForm(event) {
    event.preventDefault(); // отключаем перезагрузку/перенаправление страницы
    try {
        // Формируем запрос
      const response = await fetch(event.target.action, {
          method: 'POST',
          body: new FormData(event.target)
      });
      // проверяем, что ответ есть
      if (!response.ok) throw (`Ошибка при обращении к серверу: ${response.status}`);
      // проверяем, что ответ действительно JSON
      const contentType = response.headers.get('content-type');
      if (!contentType || !contentType.includes('application/json')) {
        throw ('Ошибка обработки. Ответ не JSON');
      }
      // обрабатываем запрос
      const json = await response.json();
      if (json.result === "success") {
          // в случае успеха
          alert(json.info);
      } else { 
          // в случае ошибки
          console.log(json);
          throw (json.info);
      }
    } catch (error) { // обработка ошибки
      alert(error);
    }
  }