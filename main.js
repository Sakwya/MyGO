rimgs = document.querySelectorAll(".rimg-content")
for (const rimg of rimgs) {
	let children = rimg.children
	if(children.length!=2)throw Error(".rimg-content should only have 2 children")
	let width = children[0].clientWidth;
	let height = children[0].clientHeight;
	children[1].style.width = `calc( 80vw - 6rem - ${width}px )`
	children[1].style.height = `${height}px`
}