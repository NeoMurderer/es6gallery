'use strict'
var gallery

function documentReady() {
	let galleryContainer = '#galleryContainer'

	gallery = new Gallery({
		'container': galleryContainer,
		'time': 2000
	})

	console.log(gallery)
}

function addSlide() {
	let slideId = Math.random()
	let slide = {
		id: slideId,
		src: "images/default_0.jpg",
		title: `Avesome slide #${slideId}`
	}
	gallery.addSlide(slide)
}
document.addEventListener("DOMContentLoaded", documentReady)