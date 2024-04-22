function fitReshape() {
	const rimgs = document.querySelectorAll(".rimg-content")
	const pageWidth = document.querySelector(".main-post").clientWidth
	for (const rimg of rimgs) {
		let children = rimg.children
		children[1].style.width = 0
		if (children.length != 2) throw Error(".rimg-content should only have 2 children")
		let width = children[0].clientWidth;
		let height = children[0].clientHeight;
		children[1].style.width = `calc( ${pageWidth}px - 6rem - ${width}px )`
		children[1].style.height = `${height}px`
	}
}
fitReshape()
window.addEventListener("resize",()=>{
	fitReshape();
})