alert("Welcome to my website, i hope joy :)");

function meme() {
  var content = document.getElementById('meme').innerHTML;
   if (content == "") {
     document.getElementById('meme').innerHTML =  '<img src=http://www.dumpaday.com/wp-content/uploads/2013/03/Punny-Puns-alpaca-pun.jpg>';
   }
   else {
     document.getElementById('meme').innerHTML =  "";
   }

}
