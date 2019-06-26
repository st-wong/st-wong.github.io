function togglePixelFont () {
    const htmlTag = document.getElementsByTagName("html")[0]
    if (htmlTag.hasAttribute("data-theme")) {
        htmlTag.removeAttribute("data-theme")
        return
    }
    htmlTag.setAttribute("data-theme", "pixel")
}
document
    .getElementById("pixelfont-toggle")
	.addEventListener("click", togglePixelFont);