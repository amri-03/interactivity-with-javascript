function upDate(previewPic){
    document.getElementById ( 'image' ).style.backgroundImage = "url('" + previewPic.src + "')";
    document.getElementById ('image').innerHTML = previewPic.alt;
    console.log("Image " + " : " + previewPic.alt);

}

function unDo(){
    document.getElementById( 'image' ).style.backgroundImage = "url('')";
    document.getElementById( 'image' ).innerHTML = "Hover over an image below to display here.";
}

function updatingAttribute() {
    var displayImages = document.querySelectorAll('.grid img');
    for (var i = 0; i < displayImages.length; i++) {
        displayImages[i].setAttribute("tabindex", "0");
    }
}

