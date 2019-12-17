
var physics = document.querySelectorAll(".phy");
var ab = document.querySelector("#ta1");
var att1 = 0;
var attended = 0,total = 0;
//var isphy =0;
for(var i=0;i<3;i++)
{

physics[i].addEventListener("click",function() {
    attended+=1;
    total+=1;
    att1=(attended*100)/total;
    ab.innerHTML=att1;
});
physics[i].addEventListener("dblclick",function(){
    total+=1;
    attended-=2;
    total-=2;
    att1=(attended*100)/total;
    ab.innerHTML=att1;
});
}



var physicsl = document.querySelectorAll(".phyl");
var ac = document.querySelector("#ta2");
var att2=0;
var attended1=0,total1=0;
for(var i=0;i<2;i++)
{

physicsl[i].addEventListener("click",function() {
    attended1+=1;
    total1+=1;
    att2=(attended1*100)/total1;
    ac.innerHTML=att2;
});
physicsl[i].addEventListener("dblclick",function(){
    total1+=1;
    attended1-=2;
    total1-=2;
    att2=(attended1*100)/total1;
    ac.innerHTML=att2;
});
}



var eee = document.querySelectorAll(".eee");
var ad = document.querySelector("#ta3");
var att3=0;
var attended2=0,total2=0;
for(var i=0;i<6;i++)
{

eee[i].addEventListener("click",function() {
    attended2+=1;
    total2+=1;
    att3=(attended2*100)/total2;
    ad.innerHTML=att3;
});
eee[i].addEventListener("dblclick",function(){
    total2+=1;
    attended2-=2;
    total2-=2;
    att3=(attended2*100)/total2;
    ad.innerHTML=att3;
});
}




var ece = document.querySelectorAll(".ece");
var ae = document.querySelector("#ta4");
var att4=0;
var attended3=0,total3=0;
for(var i=0;i<4;i++)
{

ece[i].addEventListener("click",function() {
    attended3+=1;
    total3+=1;
    att4=(attended3*100)/total3;
    ae.innerHTML=att4;
});
ece[i].addEventListener("dblclick",function(){
    tota3+=1;
    attended3-=2;
    total3-=2;
    att4=(attended3*100)/total3;
    ae.innerHTML=att4;
});
}



var math = document.querySelectorAll(".math");
var af = document.querySelector("#ta5");
var att5=0;
var attended4=0,total4=0;
for(var i=0;i<7;i++)
{

math[i].addEventListener("click",function() {
    attended4+=1;
    total4+=1;
    att5=(attended4*100)/total4;
    af.innerHTML=att5;

});
math[i].addEventListener("dblclick",function(){
    total4+=1;
    attended4-=2;
    total4-=2;
    att5=(attended*100)/total;
    af.innerHTML=att5;
});
}





var mech = document.querySelectorAll(".mech");
var ag = document.querySelector("#ta6");
var att6=0;
var attended5=0,total5=0;
for(var i=0;i<3;i++)
{

mech[i].addEventListener("click",function() {
    attended5+=1;
    total5+=1;
    att6=(attended5*100)/total5;
    ag.innerHTML=att6;
});
mech[i].addEventListener("dblclick",function(){
    total5+=1;
    attended5-=2;
    total5-=2;
    att6=(attended5*100)/total5;
    ag.innerHTML=att6;
});
}




var mechl = document.querySelectorAll(".mechl");
var ah = document.querySelector("#ta7");
var att7=0;
var attendedmechl=0,totalmechl=0;
for(var i=0;i<2;i++)
{

mechl[i].addEventListener("click",function() {
    attendedmechl+=1;
    totalmechl +=1;
    att7=(attendedmechl*100)/totalmechl;
    ah.innerHTML=att7;
});
mechl[i].addEventListener("dblclick",function(){
    totalmechl+=1;
    attendedmechl-=2;
    totalmechl -=2;
    att7=(attendedmechl*100)/totalmechl;
    ah.innerHTML=att7;
});
}


var comp = document.querySelectorAll(".comp");
var ai = document.querySelector("#ta8");
var att8=0;
var attended7=0,total7=0;
for(var i=0;i<5;i++)
{

comp[i].addEventListener("click",function() {
    attended7+=1;
    total7+=1;
    att8=(attended7*100)/total7;
    ai.innerHTML=att8;
});
comp[i].addEventListener("dblclick",function(){
    total7 +=1;
    attended7 -=2;
    total7 -=2;
    att1=(attended7 *100)/total7;
    ai.innerHTML=att8;
})
}


var chem = document.querySelectorAll(".chem");
var ag = document.querySelector("#ta9");
var att9=0;
var attended10=0,total10=0;
for(var i=0;i<4;i++)
{

chem[i].addEventListener("click",function() {
    attended10 +=1;
    total10 +=1;
    att9=(attended10 *100)/total10;
    ag.innerHTML=att9;
});
chem[i].addEventListener("dblclick",function(){
    total10 +=1;
    attended10 -=2;
    total10 -=2;
    att9=(attended10 *100)/total10;
    ag.innerHTML=att9;
})
}




function onc(e) {
   var target = e.target,
       status = e.target.classList.contains('active');

   e.target.classList.add(status ? 'inactive' : 'active');
   e.target.classList.remove(status ? 'active' : 'inactive'); 
}


function onc1(e) {
   var target = e.target,
       status = e.target.classList.contains('active');

   e.target.classList.add(status ? 'inactive' : 'active');
   e.target.classList.remove(status ? 'active' : 'inactive'); 
}