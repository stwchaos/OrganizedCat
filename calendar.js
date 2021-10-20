//pagina do calendario
document.addEventListener('DOMContentLoaded', function () {
  const monthsBR = [
    'janeiro',
    'fevereiro',
    'março',
    'abril',
    'maio',
    'junho',
    'julho',
    'agosto',
    'setembro',
    'outubro',
    'novembro',
    'dezembro'
  ]
  const tableDays = document.getElementById('dias')
  function GetDaysCalendar(mes, ano) {
    document.getElementById('mes').innerHTML = monthsBR[mes]
    document.getElementById('ano').innerHTML = ano

    let firstDayOfWeek = new Date(ano, mes, 1).getDay() - 1
    let getLastDayThisMonth = new Date(ano, mes + 1, 0).getDate()

    console.log(-firstDayOfWeek, (index = 0))

    for (
      var i = -firstDayOfWeek, index = 0;
      i < 42 - firstDayOfWeek;
      i++, index++
    ) {
      let dt = new Date(ano, mes, i)
      let dayTable = tableDays.getElementsByTagName('td')[index]
      dayTable.innerHTML = dt.getDate()

      if (i < 1) {
        dayTable.classList.add('mes-an')
      } 

      if (i > getLastDayThisMonth) {
        dayTable.classList.add('prox-mes')
      }
    }
  }
  let now = new Date()
  let mes = now.getMonth()
  let ano = now.getFullYear()
  GetDaysCalendar(mes, ano)

  const bota_ant = document.getElementById('bot_ant')
  const bota_prox = document.getElementById('bot_next')

  bota_prox.onclick = function () {
    mes++
    GetDaysCalendar(mes, ano)
  }

  bota_ant.onclick = function () {
    mes--
    GetDaysCalendar(mes, ano)
  }
})
