function alertButton() 
{
    alert("KILL ME PLEASE OH GOD PLEASE")
}

function catButton() 
{
    var theImages = [{
       src: "https://ryderjbt.github.io/Images/Catsite/lillithUpsideDown.jpg",
   }, {
       src: "https://ryderjbt.github.io/Images/Catsite/lillithUpsideDown.jpg",
   }, {
       src: "https://ryderjbt.github.io/Images/Catsite/lillithUpsideDown.jpg",
   }];
   
   var preBuffer = [];
   for (var i = 0, j = theImages.length; i < j; i++) {
       preBuffer[i] = new Image();
       preBuffer[i].src = theImages[i].src;
       preBuffer[i].width = "250";
       preBuffer[i].height = "400";
       preBuffer[i].style = "margin-top: 45%; border: 5px solid #95744b; background-color: #95744b;";
   }
  
// create random image number
 function getRandomInt(min,max) 
   {
     //  return Math.floor(Math.random() * (max - min + 1)) + min;
   
imn = Math.floor(Math.random() * (max - min + 1)) + min;
   return preBuffer[imn];
   }  

// 0 is first image,   preBuffer.length - 1) is  last image
 
var newImage = getRandomInt(0, preBuffer.length - 1);

// remove the previous images
var images = document.getElementsByTagName('img');
var l = images.length;
for (var p = 0; p < l; p++) {
   images[0].parentNode.removeChild(images[0]);
}
// display the image  
document.body.appendChild(newImage);
}