// var out = document.getElementById('out')
// for (var i = 1; i < 11; i++) {
//   out.innerHTML += i + ' '
// }

// var a = 5
// switch (a) {
//   case 2:
//     console.log('a = 2');
//     break;
//   case 3:
//     console.log('a = 3');
//     break;
//   default:
//     console.log('другое');
// }

function out_on_page(out_value) {
  document.getElementById('out').innerHTML = out_value
}

function sum_value_of_two_fields(a, b) {
  return a + b;
}

function calc(a, b, c) {
  return result = (2 * Math.pow(a, b - 4) - Math.pow(7 * a - c, b * b)) / (Math.pow(5 *c + Math.sqrt(a + b), 1 / 4) + c / b)
}

function calc_abs() {
  var a = +document.getElementById('field_1').value
  var b = +document.getElementById('field_2').value
  return result = Math.pow(Math.abs(a - b), 3)

}

function comparison() {
  var a = +document.getElementById('field_1').value
  var b = +document.getElementById('field_2').value
  return a / b < 0
}

function calc_2() {
  var a = +document.getElementById('field_1').value
  var b = +document.getElementById('field_2').value
  return Math.sin(a) - Math.tan(b)
}

function simple_num() {
  var a = +document.getElementById('field_1').value
  for (var i = 2; i < Math.sqrt(a); i++) {
    if (a % i == 0) {
      var k = true
      return `Число ${a} - составное`
      break
    }
  }
  if (!k || a == 2) {
    return `Число ${a} - простое`
  }
}

function all_dividers() {
  var a = +document.getElementById('field_1').value
  var result = ''
  for (var i = 1; i < a + 1; i++) {
    if (a % i == 0) {
      result += i + ' '
    }
  }
  return result
}
