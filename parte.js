function carregar() {
  var msg = document.getElementById('msg')
  var gm = document.getElementById('gif')

  var data = new Date()
  var hora = data.getHours()

  if (hora >= 0 && hora < 12) {
    bd.innerHTML = 'Bom dia!'
  } else if (hora >= 12 && hora < 18) {
    bd.innerHTML = 'Boa tarde!'
  } else {
    bd.innerHTML = 'Boa noite!'
  }

  if (hora >= 0 && hora < 12) {
    msg.innerHTML = `Agora são ${hora} horas da manhã.`
  } else if (hora >= 12 && hora < 18) {
    msg.innerHTML = `Agora são ${hora} horas da tarde.`
  } else {
    msg.innerHTML = `Agora são ${hora} horas da noite.`
  }

  if (hora >= 0 && hora < 12) {
    //manhã
    //gm.src = 'giphymanha.gif'
    gm.innerHTML =
      '<iframe src="https://giphy.com/embed/Ynx96CTePINFrqcZ0N" width="250" height="250" frameBorder="0" class="giphy-embed" allowFullScreen></iframe><p><a href="https://giphy.com/gifs/molangofficialpage-coffee-molang-mummy-Ynx96CTePINFrqcZ0N"></a></p>'

    document.body.style.background = '#D3EFBD'
    document.body.style.color = '#2E3532'
  } else if (hora >= 12 && hora < 18) {
    //tarde
    gm.innerHTML =
      '<iframe src="https://giphy.com/embed/mh8FmVpuXgZugAWNiS" width="250" height="250" frameBorder="0" class="giphy-embed" allowFullScreen></iframe><p><a href="https://giphy.com/gifs/molangofficialpage-dance-molang-piupiu-mh8FmVpuXgZugAWNiS"></a></p>'

    document.body.style.background = '#8B2635'
  } else {
    //noite
    gm.innerHTML = 
      '<iframe src="https://giphy.com/embed/A2wxBJMAINb4NNVs7f" width="250" height="200" frameBorder="0" class="giphy-embed" allowFullScreen></iframe><p><a href="https://giphy.com/gifs/molangofficialpage-ramadan-ramadhan-molang-A2wxBJMAINb4NNVs7f"></a></p>'

    document.body.style.background = '#2E3532'
  }
}
