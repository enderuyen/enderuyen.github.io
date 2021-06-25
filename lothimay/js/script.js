function play() {
    if (document.getElementById("audio").play()) {
        document.getElementById("video").pause();
    }
    if (document.getElementById("video").play()) {
        document.getElementById("audio").pause();
    }
    document.getElementById("hihi").innerHTML = "Xin chào";
}