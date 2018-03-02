

function getFirstSelector(selector){

  let select = document.querySelector(selector)
  return select
}

function nestedTarget(){
  let select = document.getElementById('nested').querySelector('div.target')
  return select
}

function increaseRankBy(n){
  let select = document.getElementById('app').querySelectorAll('ul.ranked-list')

  for (let i = 0; i < select.length; i++){
    select[i].innerHTML = parseInt(select[i] + n)
  }
}

function deepestChild(){
  let select = document.getElementById('grand-node').querySelectorAll('div')

  for (let i = 0; i < select.length; i++){
    select[i].querySelectorAll('div')
  }
}
