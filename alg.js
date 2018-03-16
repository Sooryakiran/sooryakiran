if(window.addEventListener){
	window.addEventListener('load',function() { init(); });	
}
var b;
function init(){
	$("#data").load("bloglist.txt #pp", function(){
	var a=document.getElementById("pp").innerHTML;
	b=a.split('\n');
	var n=b.length;
	var i;
	var nowrow=1;
	for(i=1;i<n-1;i++){
		var now=b[i];
		var details=now.split('-');
		var title=details[0];
		var sub=details[1];
		var img=details[2];
		var c=document.getElementById("content");
		if((i-1)%3==0){
			if(i!=1)c.innerHTML=c.innerHTML+"</center></div>"
			c.innerHTML=c.innerHTML+ "<center><div class='row' id='"+ nowrow +"'>" ;
			nowrow++;
		
		}
		
		
		var s="<div  class='col-sm-4' style='max-width:280px;margin:2em'><a href='#' class:'thumbnail' onclick='loadstory("+ i +")'><img style='border-radius:100px;'  width='200px' height='200px'  src='images/"+img+"'/>" +"<br><center><div style='margin:0.5em; font-size:130%; color:gray;' >"+title+"</div><div style='margin:0.5em; font-size:90%; color:gray;' >"+sub+"</div>" + "</center></a></div>";
		var row=
		c.innerHTML=c.innerHTML+s;
		
		
	
	}
	
	});

}


function loadstory(num){
		var now=b[num];
		var details=now.split('-');
		var title=details[0];
		var sub=details[1];
		var img=details[2];
		
		document.getElementById("ttt").innerHTML=title;
		document.getElementById("hhh").innerHTML=sub;
		document.getElementById("imger").innerHTML="<img style='max-width:100%;' src='images/" +img + "'/>"; 	
		var a=title.split(' ');
		var c=a[0]
		$("#studmax").load(c + ".txt");
		
		
		

}
