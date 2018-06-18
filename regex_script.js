function isValidField(inputName, re, errorText) {
  var tagName = document.getElementsByName(inputName)[0]
  if (tagName.value.match(re)) {
    tagName.className = 'success';
    document.getElementById(inputName).innerText = '';
  } else {
    tagName.className = 'error';
    document.getElementById(inputName).innerText = errorText;
  }
}


document.getElementsByName('phone')[0].onblur = function () {
  var inputName = 'phone';
  var re = /^(\\+7|8)9\d{9}$/;
  errorText = 'Номер телефона должен иметь формат +79887776655';
  isValidField(inputName, re, errorText);
}
document.getElementsByName('login')[0].onblur = function () {
  var inputName = 'login';
  var re = /^[\dA-zА-яёЁ]+$/;
  errorText = 'Логин состоит из цифр и букв';
  isValidField(inputName, re, errorText);
}
document.getElementsByName('email')[0].onblur = function () {
  var inputName = 'email';
  var re = /^[-\._\dA-zА-яёЁ]+@[\dA-zА-яёЁ]+\.[A-zА-яёЁ]{2,6}$/;
  errorText = 'email символы -._ буквы и цифры затем символ @ затем - цифры и буквы символ точка и буквы от 2 до 6 раз';
  isValidField(inputName, re, errorText);
};
document.getElementsByName('pass')[0].onblur = function () {
  var inputName = 'pass';
  var re = /^(\d+[A-zА-яёЁ]*|[A-zА-яёЁ]+\d+[A-zА-яёЁ]*)$/;
  errorText = 'пароль состоит из символов верхнего, нижнего регистра и цифр хотя бы по одному разу, может быть на русском ';
  isValidField(inputName, re, errorText);
};
