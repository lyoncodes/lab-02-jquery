'use strict'
$(function () {
  $.get('')// TODO
})
var Horns = function (image_url, title, description, keyword, horns) {
  this.image_url = image_url
  this.title = title
  this.description = description
  this.keyword = keyword
  this.horns = horns
}
var firstHorn = new Horns()