function alertButton() 
{
    alert("KILL ME PLEASE OH GOD PLEASE")
}

function catButton() 
{
    var theImages = [{
       src: "http://farm4.staticflickr.com/3691/11268502654_f28f05966c_m.jpg",
   }, {
       src: "Images\SisterSign.png",
   }, {
       src: "Images\SisterSignYellow.png",
   }];
   
   var preBuffer = [];
   for (var i = 0, j = theImages.length; i < j; i++) {
       preBuffer[i] = new Image();
       preBuffer[i].src = theImages[i].src;
       preBuffer[i].width = "250";
       preBuffer[i].height = "400";
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