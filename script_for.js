function get_count_b() {
  var s = document.querySelector('#field_1').value
  var counter = 0
  for (var i = 0; i < s.length; i++) {
    if (s[i] === 'b') {
      counter++
    }
  }
  return counter
}

function out(id, val) {
    var out = document.querySelector(id)
    out.innerText = val
    return out
}

function getNOK() {
  var a_init = +document.querySelector('#field_2').value
  var b_init = +document.querySelector('#field_3').value
  var a = a_init
  var b = b_init
  var r = 1
  while (r !== 0) {
    r = a % b
    a = b
    b = r
  }
  var nod = a
  var nok = a_init * b_init / nod
  return nok
}

function check_on_simple(n) {
  var result = n
  for (var i = 2; i < n; i++) {
    if (n % i === 0) {
      result = false
      break
    }
  }
  return result
}

function print_all_simple() {
  var c = +document.querySelector('#field_4').value
  var result = ''
  for (var i = 1; i <= c; i++) {
    if (check_on_simple(i)) {
      result += i + ' '
    }
  }
  return result
}

function calc_fact() {
  var n = +document.querySelector('#field_5').value
  var f = 1
  for (var i = 2; i <= n; i++) {
    f *= i
  }
  return f
}
