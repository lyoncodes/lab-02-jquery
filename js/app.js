'use strict'
const allHorns = []

function Horn (obj) {
  this.image_url = obj.image_url
  this.title = obj.title
  this.description = obj.description
  this.keyword = obj.keyword
  this.horns = obj.horns

  allHorns.push(this)
}

Horn.prototype.render = function () {
  $('main').append('<div class = "entry"></div>')
  let $entry = $('div[class = "entry"]')
  let hornTemplate = $('#photo-template').html()
  $entry.html(hornTemplate)
  // CONTENT
  $entry.find('h2').text(this.title)
  $entry.find('img').attr('src', this.image_url)
  $entry.find('p').text(this.description)
  $entry.find('h6').text(this.horns)
  $entry.removeClass('entry')
  $entry.attr('class', this.keyword)
}
Horn.prototype.menu = function () {
  if (uniqueHorns.indexOf(this.keyword) === -1) {
    $('select').append('<option class = "option"></option>')
    let $option = $('option[class = "option"]')
    $option.attr('value', this.keyword)
    $option.text(this.keyword)
    $option.removeClass('option')
    uniqueHorns.push(this.keyword)
  }
}
function readJson () {
  $.get('data/page-1.json', 'json')
    .then(data => {
      data.forEach(hornObj => {
        new Horn(hornObj)
      })
    })
    .then(() => {
      allHorns.forEach(horn => {
        horn.render()
        horn.menu()
      })
    })
}

$(() => readJson())
console.log(allHorns)

$('select').on('change', function () {
  let $selection = $(this).val()
  if ($selection === 'default') {
    $('div').show()
    return
  }
  $('div').hide()
  $(`div[class = "${$selection}"]`).show()
})
