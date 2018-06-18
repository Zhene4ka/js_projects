function showStudentList(elem) {
  document.getElementById('studentListForGroup').innerHTML = '<tr><th>Имя</th><th>Фамилия</th></tr>'
  people.forEach(function (student) {
    if (student.group == +elem) {
        document.getElementById('studentListForGroup').innerHTML += '<tr><td>' + student.name.first + '</td><td>' + student.name.last + '</td></tr>'
    }
  })
}

function showStudentInfo(elem) {
  document.getElementById('studentInfo').style = "display:block;";
  people.forEach(function (student) {
    if (student._id == elem.id) {
      document.getElementById('lastName').value = student.name.last;
      document.getElementById('firstName').value = student.name.first;
      document.getElementById('age').value = student.age;
      document.getElementById('gender').value = student.gender;
      document.getElementById('groupNumber').value = student.group;
      document.getElementsByTagName('form')[0].id = elem.id
    }
  })
}

function onClose() {
  document.getElementById('studentInfo').style = "display:none;"
}

function listGenerate() {
  people.forEach(function (student) {
    document.getElementById('studentsInfo').innerHTML += `<tr onclick="showStudentInfo(this)" id="${student._id}"><td>` + student.name.first + ' ' + student.name.last + ', группа:' + student.group + '</td></tr>';
  })
}

function save() {
  var ident = document.getElementsByTagName('form')[0];
  people.forEach(function (student) {
    if (student._id == ident.id) {
      student.name.last = document.getElementById('lastName').value;
      student.name.first = document.getElementById('firstName').value;
      student.age = document.getElementById('age').value;
      student.gender = document.getElementById('gender').value;
      student.group = document.getElementById('groupNumber').value;
    }
  })
  listGenerate();
}

listGenerate();

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

document.getElementById('groupsInfo').innerHTML += '<tr><th>Номер группы</th><th>Число студентов</th><th>Средний возраст</th><th>Число мужчин</th><th>Число женщин</th></tr>'
for (var group in groups) {
  document.getElementById('groupsInfo').innerHTML += `<tr onclick="showStudentList(${group})"><td>` + group + '</td><td>' + groups[group].studentsCount  + '</td><td>'
  + Math.round(groups[group].sumAge / groups[group].studentsCount) + '</td><td>' + groups[group].menCount + '</td><td>' + groups[group].womenCount + '</td></tr>'
}
