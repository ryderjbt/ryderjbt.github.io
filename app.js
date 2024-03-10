function alertButton() 
{
    alert("KILL ME PLEASE OH GOD PLEASE")
}

function catButton() 
{
    var theImages = [{
        src: "https://ryderjbt.github.io/Images/Mum/3aaf537a-3afb-4935-b8aa-941b4547dad1.jpg",
    }, {
        src: "https://ryderjbt.github.io/Images/Mum/8aa12044-5284-4d63-ac87-6ebc19b91499.jpg",
    }, { 
        src: "https://ryderjbt.github.io/Images/Mum/43237169-d572-493a-bd22-51535323f524.jpg",
    }, { 
        src: "https://ryderjbt.github.io/Images/Mum/a754b7ec-469f-4685-b5b1-05651f0ae9ca.jpg",
    }, { 
        src: "https://ryderjbt.github.io/Images/Mum/c548d2a3-0bd0-4f93-a6d4-096e4c458274.jpg",
    }, { 
        src: "https://ryderjbt.github.io/Images/Mum/IMG_0314.PNG",
    }, { 
        src: "https://ryderjbt.github.io/Images/Mum/IMG_0700.JPEG",
    }, { 
        src: "https://ryderjbt.github.io/Images/Mum/IMG_0704.JPEG",
    }, {
        src: "https://ryderjbt.github.io/Images/Mum/IMG_1308.JPG",
    }, {
        src: "https://ryderjbt.github.io/Images/Mum/IMG_1315.JPG",
    }, {
        src: "https://ryderjbt.github.io/Images/Mum/IMG_1326.JPG",
    }, {
        src: "https://ryderjbt.github.io/Images/Mum/IMG_2297.JPG",
    }, {
        src: "https://ryderjbt.github.io/Images/Mum/IMG_3967.JPG",
    }, { 
        src: "https://ryderjbt.github.io/Images/Mum/IMG_5197.JPG",
    }, {
        src: "https://ryderjbt.github.io/Images/Mum/IMG_6138.JPG",
    }, {
        src: "https://ryderjbt.github.io/Images/Mum/IMG_8518.JPEG",
    }, {
        src: "https://ryderjbt.github.io/Images/Mum/IMG_8520.JPEG",
    }, {
        src: "https://ryderjbt.github.io/Images/Mum/IMG_1317.JPG",
    }, {
        src: "https://ryderjbt.github.io/Images/Mum/IMG_1330.PNG",
    }, {
        src: "https://ryderjbt.github.io/Images/Mum/IMG_3524.JPEG",
    }, {
        src: "https://ryderjbt.github.io/Images/Mum/IMG_3969.JPG",
    }, {
        src: "https://ryderjbt.github.io/Images/Mum/IMG_5198.JPG",
    }, {
        src: "https://ryderjbt.github.io/Images/Mum/IMG_8517.JPEG",
    }, {
        src: "https://ryderjbt.github.io/Images/Mum/IMG_8519.JPEG",
    }, {
        src: "https://ryderjbt.github.io/Images/Mum/IMG_8521.JPEG",
    }];
   
   var preBuffer = [];
   for (var i = 0, j = theImages.length; i < j; i++) {
       preBuffer[i] = new Image();
       preBuffer[i].src = theImages[i].src;
       preBuffer[i].width = "350";
       preBuffer[i].height = "500";
       preBuffer[i].style = "position: absolute; left: 40%; margin-top: 90px; border: 10px solid #95744b; background-color: #95744b;";
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