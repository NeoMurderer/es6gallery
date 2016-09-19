'use strict'
class Gallery {

	set slides(slides){
		this._slides = slides 
	}
	get slides(){
		return this._slides
	}
	get currentSlide() {
		return this.wrapper.querySelector(".active")
	}
	getDefaultSlides() {
		return [
			{
				'id':0,
				'src':"images/default_0.jpg",
				'title':"Awesome image #0"
			},{
				'id':1,
				'src':"images/default_1.jpg",
				'title':"Awesome image #1"
			},{
				'id':2,
				'src':"images/default_2.jpg",
				'title':"Awesome image #2"
			},{
				'id':3,
				'src':"images/default_3.jpg",
				'title':"Awesome image #3"
			}
		]
	}
	getSlideTemplate({id=0,src='',title=''}) {
		return `<li data-slide_id="${id}" class="${id == 0 ? 'active' : ''}"><img src="${src}" title="${title}"></li>`
	}
	getSlidesHtml() {
		let slidesHtml = [];
		let slides = this.slides
		for (let i = 0; i < slides.length; i++) { 
			let slide = slides[i]

			let html = this.getSlideTemplate(slide)

			slidesHtml.push(html)
		}
		return slidesHtml.join("")
	}
	renderSlider(wrapper) {
		let slidesHtml = document.createElement("ul")
		slidesHtml.className = "slider-container"
		slidesHtml.innerHTML = this.getSlidesHtml()

		wrapper.appendChild(slidesHtml)
	}
	showNextSlide(){
		const nextSlideIndex = this.currentSlideIndex + 1

		let currentSlide = this.currentSlide

		currentSlide.classList.remove('active')

		let nextSlide  = currentSlide.nextSibling

		if (! nextSlide) {
			nextSlide = this.wrapper.querySelector("li")
		}
		nextSlide.classList.add('active')

	}
	runAutoRotate() {
		this.currentSlideIndex = 0
		setInterval(() => { this.showNextSlide() },this.config.time)
	}
	addSlide(slide) {
		let html = this.getSlideTemplate(slide)
		this.slides.push(slide)
		this.wrapper.querySelector(".slider-container").innerHTML+=html
	}
	constructor(config) {
		this.config = config
		let slides = this.getDefaultSlides()

		this.slides = slides

		this.wrapper  = document.querySelector(config.container)

		this.renderSlider(this.wrapper)

		this.runAutoRotate()
	}

	// methods
}