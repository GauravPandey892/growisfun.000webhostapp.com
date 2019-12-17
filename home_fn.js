var logo = document.getElementById("img1");

logo.addEventListener("dblclick",function()
{
	//alert("hey");
	window.open("colorgame.html");
});

var i=0; var x; var ar=[0]; var q;var d,lll; var j=0; 
var con=document.querySelector(".btn");
con.addEventListener("click",stat);
function stat()
{
	var y=document.getElementById('message').value;
	x = document.createElement("div");
	x.id=i;
	x.setAttribute("class","fdiv");
	
	var x1 = document.createElement("h2");
	x1.textContent=y;
	x.appendChild(x1);
	var v = document.getElementById("ldiv");
	v.appendChild(x);
	
	
	var a1=document.createElement("input");
	a1.value="Like "; a1.name="0";
	a1.type="button";
	a1.id="lik"+i;
	a1.setAttribute("class","btn");
	x.appendChild(a1);
	//var p = a1.parentNode.id;
	//alert(p);
	a1.setAttribute("onClick","like(this.id,this.parentNode.id)");
	
	
	var a2=document.createElement("input");
	a2.value="Comment";
	a2.type="button";
	a2.id="com"+i;
	a2.setAttribute("onClick","comm(this.id, this.parentNode.id)");
	a2.setAttribute("class","btn");
	x.appendChild(a2);
	
	var a3=document.createElement("input");
	a3.value="Delete Post";
	a3.type="button";
	a3.id="dele"+i;
	a3.setAttribute("onClick","dele(this.parentNode.id)");
	a3.setAttribute("class","btn");
	x.appendChild(a3);
	var ll=document.createElement("input");
	ll.value="0 "; 
	ll.type="button";
	a1.setAttribute("class","btn");
	ar[i]=0;
	
	i++;
}

var it=0;
function like(z,y)
{
	
	ar[y]=ar[y]+1;
	x=document.getElementById(z);
	x.value="Like :) "+ar[y];
}


function dele(pr)
{
	var a=document.getElementById(pr);
	var l=document.getElementById("ldiv");
	l.removeChild(a);
	i--;
}

function comm(z,y)
{

	var h=document.getElementById(y);
	var co=document.createElement("div"); //div created
	co.id="co"+y+j;
	var pro=window.prompt("Your comment: "); 
	var cd=document.createElement("h4");
	cd.textContent=pro;
	co.setAttribute("class","flag");
	co.appendChild(cd);
	
	
	var repf=document.createElement("input");
	repf.value="Reply";
	repf.type="button";
	repf.setAttribute("onClick","reply(this.id, this.parentNode.id)");
	repf.setAttribute("class","btn1");
	
	var repd=document.createElement("input");
	//repd.id="com"+
	repd.value="Delete";
	repd.type="button";
	
	repd.setAttribute("onClick","delrep(this.id, this.parentNode.id)");
	repd.setAttribute("class","btn1");
	
	
	h.appendChild(co);
	co.appendChild(repd);
	co.appendChild(repf);
	var c=repd.parentNode;
	var xx=c.parentNode.id; j++;
	//alert(xx);
	repd.setAttribute("onClick","delrep(this.parentNode.id,this.parentNode.parentNode.id)");
	
}

function reply(o,s)
{
	var rep=document.createElement("h5"); //alert(s);
	var pro=window.prompt("Your comment: "); 
	rep.textContent=pro;
	var ff=document.getElementById(s);
	rep.setAttribute("class","flag2");
	ff.appendChild(rep);
}

function delrep(b,d)
{
	var comen=document.getElementById(b);
	var dv=document.getElementById(d);
	dv.removeChild(comen);
}
	
