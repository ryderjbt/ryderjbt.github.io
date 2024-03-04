function alertButton() 
{
    alert("KILL ME PLEASE OH GOD PLEASE")
}

function catButton() 
{
    var theImages = [{
        src: "https://ryderjbt.github.io/Images/Catsite/2cfd6392-a979-4427-84e6-fe0bd724f521.jpg",
    }, {
        src: "https://ryderjbt.github.io/Images/Catsite/4DB4F81A-2C55-4FC5-BE52-67C0574C1327.jpg",
    }, { 
        src: "https://ryderjbt.github.io/Images/Catsite/be3ac2e0-94d0-4b3f-bc1b-67c88e67868c.jpg",
    }, { 
        src: "https://ryderjbt.github.io/Images/Catsite/IMG_0021.JPG",
    }, { 
        src: "https://ryderjbt.github.io/Images/Catsite/IMG_0034.JPG",
    }, { 
        src: "https://ryderjbt.github.io/Images/Catsite/IMG_0095.JPG",
    }, { 
        src: "https://ryderjbt.github.io/Images/Catsite/IMG_0275.JPG",
    }, { 
        src: "https://ryderjbt.github.io/Images/Catsite/IMG_0278.JPG",
    }, {
        src: "https://ryderjbt.github.io/Images/Catsite/IMG_1013.jpeg",
    }, {
        src: "https://ryderjbt.github.io/Images/Catsite/IMG_1036.JPG",
    }, {
        src: "https://ryderjbt.github.io/Images/Catsite/IMG_1068.jpeg",
    }, {
        src: "https://ryderjbt.github.io/Images/Catsite/IMG_1170.jpeg",
    }, {
        src: "https://ryderjbt.github.io/Images/Catsite/IMG_1171.jpeg",
    }, { 
        src: "https://ryderjbt.github.io/Images/Catsite/IMG_1196.JPG",
    }, {
        src: "https://ryderjbt.github.io/Images/Catsite/IMG_4487.JPG",
    }, {
        src: "https://ryderjbt.github.io/Images/Catsite/IMG_4488.JPG",
    }, {
        src: "https://ryderjbt.github.io/Images/Catsite/IMG_4489.JPG",
    }, {
        src: "https://ryderjbt.github.io/Images/Catsite/IMG_4490.JPG",
    }, {
        src: "https://ryderjbt.github.io/Images/Catsite/IMG_4491.JPG",
    }, {
        src: "https://ryderjbt.github.io/Images/Catsite/IMG_4492.JPG",
    }, {
        src: "https://ryderjbt.github.io/Images/Catsite/IMG_4708.JPG",
    }, {
        src: "https://ryderjbt.github.io/Images/Catsite/IMG_4795.jpeg",
    }, {
        src: "https://ryderjbt.github.io/Images/Catsite/IMG_4806.jpeg",
    }, {
        src: "https://ryderjbt.github.io/Images/Catsite/IMG_4815.jpeg",
    }, {
        src: "https://ryderjbt.github.io/Images/Catsite/IMG_4827.jpeg",
    }, {
        src: "https://ryderjbt.github.io/Images/Catsite/IMG_4839.JPG",
    }, {
        src: "https://ryderjbt.github.io/Images/Catsite/IMG_4887.JPG",
    }, {
        src: "https://ryderjbt.github.io/Images/Catsite/IMG_4889.JPG",
    }, {
        src: "https://ryderjbt.github.io/Images/Catsite/IMG_4890.jpeg",
    }, {
        src: "https://ryderjbt.github.io/Images/Catsite/IMG_4891.jpeg",
    }, {
        src: "https://ryderjbt.github.io/Images/Catsite/IMG_4919.jpeg",
    }, {
        src: "https://ryderjbt.github.io/Images/Catsite/IMG_4942.JPG",
    }, {
        src: "https://ryderjbt.github.io/Images/Catsite/IMG_5003.JPG",
    }, {
        src: "https://ryderjbt.github.io/Images/Catsite/IMG_5570.JPG",
    }, {
        src: "https://ryderjbt.github.io/Images/Catsite/IMG_5571.JPG",
    }, {
        src: "https://ryderjbt.github.io/Images/Catsite/IMG_5693.JPG",
    }, {
        src: "https://ryderjbt.github.io/Images/Catsite/IMG_5831.JPG",
    }, {
        src: "https://ryderjbt.github.io/Images/Catsite/IMG_5835.JPG",
    }, {
        src: "https://ryderjbt.github.io/Images/Catsite/IMG_5836.JPG",
    }, {
        src: "https://ryderjbt.github.io/Images/Catsite/IMG_5838.JPG",
    }, {
        src: "https://ryderjbt.github.io/Images/Catsite/IMG_5949.JPG",
    }, {
        src: "https://ryderjbt.github.io/Images/Catsite/IMG_6006.JPG",
    }, {
        src: "https://ryderjbt.github.io/Images/Catsite/IMG_6134.JPG",
    }, {
        src: "https://ryderjbt.github.io/Images/Catsite/IMG_6309.jpeg",
    }, { 
        src: "https://ryderjbt.github.io/Images/Catsite/IMG_6310.jpeg",
    }, {
        src: "https://ryderjbt.github.io/Images/Catsite/IMG_7089.jpeg",
    }, {
        src: "https://ryderjbt.github.io/Images/Catsite/IMG_7290.JPG",
    }];
   
   var preBuffer = [];
   for (var i = 0, j = theImages.length; i < j; i++) {
       preBuffer[i] = new Image();
       preBuffer[i].src = theImages[i].src;
       preBuffer[i].width = "350";
       preBuffer[i].height = "500";
       preBuffer[i].style = "margin-top: 100px; border: 5px solid #95744b; background-color: #95744b;";
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