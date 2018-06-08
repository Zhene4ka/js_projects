document.querySelector('#studentsCount').innerText = people.length

var arrGroupNumber = []
var countWoman = 0
var sumOfAges = 0
var minAge = people[0].age
var lastnameStudentWithMinAge = ''
var maxAge = 0
var lastnameStudentWithMaxAge = ''
for (var i = 0; i < people.length; i++) {
  if (arrGroupNumber.indexOf(people[i].group) == -1) {
    arrGroupNumber.push(people[i].group)
  }
  if (people[i].gender == 'f') {
    countWoman += 1
  }
  sumOfAges += people[i].age

  if (people[i].age < minAge) {
    minAge = people[i].age
    lastnameStudentWithMinAge = people[i].name.last
    console.log([maxAge, lastnameStudentWithMaxAge]);
  }

  if (people[i].age > maxAge) {
    maxAge = people[i].age
    lastnameStudentWithMaxAge = people[i].name.last
    console.log([maxAge, lastnameStudentWithMaxAge]);
  }
}
document.querySelector('#groupsCount').innerText = arrGroupNumber.length
document.querySelector('#wAmCount').innerText = `${countWoman} ${people.length - countWoman}`
document.querySelector('#avarageAge').innerText = Math.round(sumOfAges / people.length)
document.querySelector('#ageAndLastnameStudentWithMinAndMaxAges').innerHTML = minAge + ' ' + lastnameStudentWithMinAge + '<br>' + maxAge + ' ' + lastnameStudentWithMaxAge

var groups = {}
for (var i = 0; i < people.length; i++) {
  if (groups[people[i].group] === undefined) {
    groups[people[i].group] = {
      studentsCount: 0,
      sumAge: 0,
      womenCount: 0,
      menCount: 0
    }
  }
  groups[people[i].group].studentsCount++
  groups[people[i].group].sumAge += people[i].age
  if (people[i].gender == 'f') {
    groups[people[i].group].womenCount++
  } else {
    groups[people[i].group].menCount++
  }
}

for (var group in groups) {
  document.querySelector('#groupsInfo').innerHTML += 'Номер группы:' + group + ', <br>Число студентов: ' + groups[group].studentsCount +
                                                      ', <br>Средний возраст студентов:' + Math.round(groups[group].sumAge / groups[group].studentsCount) +
                                                      ', <br>Число мужчин: ' + groups[group].menCount +
                                                      ', <br>Число женщин: ' + groups[group].womenCount + '<br><br>'
}
