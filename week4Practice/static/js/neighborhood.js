function pickImage() {
    var options = ["bacon_in_the_woods.png", "munising.jpg","bend_in_the_road.png", "hollow_tree.png", "lake_view.JPG"];
    var randomImg = "static/images/" + options[Math.floor(Math.random() * options.length)];
    var img = document.querySelector("#header_img");
    img.setAttribute("src", randomImg);
    img.setAttribute("alt", "");

}