function equation_solution(a, b, c) {
    var d = Math.pow(b, 2) - 4 * a * c;
    if (d < 0) {
      return 'Нет решений'
    } else if (d > 0) {
      var x_1 = (-b + Math.sqrt(d)) / (2 * a);
      var x_2 = (-b - Math.sqrt(d)) / (2 * a);
      return x_1 + ' ' + x_2
    } else {
      var x = -b / (2 * a);
      return x
    }
}

function calc() {
  var a = document.querySelector('#a').value
  var b = document.querySelector('#b').value
  var c = document.querySelector('#c').value
  var out = document.querySelector('#output')
  out.innerText = 'Корни уравнения:' + equation_solution(a, b, c)
}
