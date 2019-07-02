function togglePixelFont() {
    const htmlTag = document.getElementsByTagName("html")[0];
    if (htmlTag.hasAttribute("data-theme")) {
        if (typeof(Storage) !== "undefined") {
            sessionStorage.pixelFontToggle = 0;
        }
	htmlTag.removeAttribute("data-theme");
	document.getElementById("pixelfont-toggle").checked = false;
        return
    }
    htmlTag.setAttribute("data-theme", "pixel")
    document.getElementById("pixelfont-toggle").checked = true;
    if (typeof(Storage) !== "undefined") {
        sessionStorage.pixelFontToggle = 1;
    }
}

function setPixelFont(){
    if (typeof(Storage) !== "undefined" && sessionStorage.pixelFontToggle) {
        const htmlTag = document.getElementsByTagName("html")[0];
        if (Number(sessionStorage.getItem("pixelFontToggle")) === 1) {
            document.getElementById("pixelfont-toggle").checked = true;
            htmlTag.setAttribute("data-theme", "pixel");
        }
        else {
            htmlTag.removeAttribute("data-theme");
	        document.getElementById("pixelfont-toggle").checked = false;
        }
    }
}

document.getElementById("pixelfont-toggle").addEventListener("click", togglePixelFont);