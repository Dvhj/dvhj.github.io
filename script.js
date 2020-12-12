function show() {
	alert("   Чё")}


window.onload = function() {
     var pos = 0; 
    //our box element
    var box = document.getElementById('box');
    var t = setInterval(move, 10);
  
    function move() {
        if(pos >= 1830) {
            pos -= 1830;
            box.style.left = pos+'px';
        }
        else {
            pos += 1;
            box.style.left = pos+'px';
        }
    }
}; 



function cata() {
		alert("   Не трожь кота")
		}




var images = ["123.jpg", "2.jpg", "papich-postrimlyu-na-novoj-ploshchadke.jpg", "Cl5vBlBuxUI.jpg","ребенок.jpg"];
		var num = 0;
		function next(){
			var slider = document.getElementById("slider");
			num++;
			if (num>=images.length) {
				num = 0;
			}	
			slider.src = images[num];
			}
		function prev(){
			var slider = document.getElementById("slider");
			num--;
			if (num< 0) {
				num = images.length - 1;
			}	
			slider.src = images[num];
			}
		