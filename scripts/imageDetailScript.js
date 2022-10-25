var modal = document.getElementById("detailModal");

var image1 = document.getElementById("img1");
var image2 = document.getElementById("img2");
var image3 = document.getElementById("img3");
var image4 = document.getElementById("img4");
var image5 = document.getElementById("img5");
var image6 = document.getElementById("img6");
var image7 = document.getElementById("img7");
var image8 = document.getElementById("img8");
var image9 = document.getElementById("img9");

var modalImage = document.getElementById("imgToDisplay");

image1.onclick = function(){
  modal.style.display = "block";
  modalImage.src = this.src;
}
image2.onclick = function(){
  modal.style.display = "block";
  modalImage.src = this.src;
}
image3.onclick = function(){
  modal.style.display = "block";
  modalImage.src = this.src;
}
image4.onclick = function(){
  modal.style.display = "block";
  modalImage.src = this.src;
}
image5.onclick = function(){
  modal.style.display = "block";
  modalImage.src = this.src;
}
image6.onclick = function(){
  modal.style.display = "block";
  modalImage.src = this.src;
}
image7.onclick = function(){
  modal.style.display = "block";
  modalImage.src = this.src;
}
image8.onclick = function(){
  modal.style.display = "block";
  modalImage.src = this.src;
}
image9.onclick = function(){
  modal.style.display = "block";
  modalImage.src = this.src;
}

var span = document.getElementsByClassName("closeModal")[0];

span.onclick = function() {
  modal.style.display = "none";
}