let headerCont = document.getElementById('header-container');
headerCont.style.backgroundColor = '#00B069';

let contRosa = document.getElementsByClassName('emergency-tasks')[0];
contRosa.style.backgroundColor = '#FF9F84';

let contAmarelo = document.getElementsByClassName('no-emergency-tasks')[0];
contAmarelo.style.backgroundColor = '#F9DB5E';

const noEmergencyTasksHeaders = document.querySelectorAll('.no-emergency-tasks h3');
for (let index = 0; index < noEmergencyTasksHeaders.length; index += 1) {
  noEmergencyTasksHeaders[index].style.backgroundColor = 'rgb(35, 37, 37)';
}

const emergTasks = document.querySelectorAll('.emergency-tasks h3');
for (let index = 0; index < emergTasks.length; index++) {
    emergTasks[index].style.backgroundColor = '#A500F3'
}

let rodape = document.getElementById('footer-container');
rodape.style.backgroundColor = '#003533';

