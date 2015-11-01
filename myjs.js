var canvas=document.getElementById('clock');
var c=canvas.getContext('2d');
var w=window.innerWidth/2, h=window.innerHeight/2;
var r=(w<h)?w:h ;
c.canvas.width=2*r; c.canvas.height=2*r;
var sh=r*6/8, mh=r*5/8, hh=r*3.5/8 ;
c.shadowColor='#eeeeee';c.shadowBlur = 5;	
document.addEventListener('DOMContentLoaded', startTimer);
function startTimer() {
	document.getElementById('clockCredit').style.font=r/15+'px Arial'; document.getElementById('clockCreditName').style.font=r/5+'px Italics';
    setInterval(displayTime, 1000);
    displayTime();
}
function displayTime() {
    var now=new Date(), h=now.getHours(), m=now.getMinutes(), s=now.getSeconds(),week=['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday']; months=['Jan','Feb','Mar','Apr','May','June','July','Aug','Sep','Oct','Nov','Dec'];
	var ampm=(h<12)?'AM':'PM' ; date=now.getDate()+" "+months[now.getMonth()];
	h=(now.getHours() < 12 )?(now.getHours()):(now.getHours()-12);
	c.clearRect(0, 0, canvas.width, canvas.height);
	
	c.lineCap='butt';
	
	c.beginPath(); c.arc(r,r,8.5*r/9.5,0,2*Math.PI); c.strokeStyle='#eeeeee';c.lineWidth = r/70; c.stroke();
	
	c.beginPath(); c.arc(r,r,8*r/9,0,2*Math.PI,false); c.fillStyle='#000000'; c.fill();c.strokeStyle='#dddddd';c.stroke();
	
	c.beginPath(); c.arc(r,r,14*r/15,0,2*Math.PI); c.strokeStyle='#555555';c.lineWidth = r/12; c.stroke();
	
	for(n=0;n<61;n++){c.beginPath();c.arc(r,r,r-r/5.5,n*Math.PI/30-Math.PI/720,n*Math.PI/30+Math.PI/720); c.strokeStyle='#bbbbbb';c.lineWidth = r/40; c.stroke();}
	
	for(n=0;n<13;n++){c.beginPath();c.arc(r,r,r-r/5.5,n*Math.PI/6-Math.PI/360,n*Math.PI/6+Math.PI/360) ;c.strokeStyle='#eeeeee';c.lineWidth = r/20; c.stroke();}
	
	c.shadowBlur=20;c.font=r/4+'px Italics';c.fillStyle='#dddddd'; c.textAlign='center'; c.fillText(week[now.getDay()],r,r/1.5); c.fillText(date,r,r+r/2); 
	
	c.shadowBlur=5;c.lineCap='round';
	
	dh(h,m);dm(m);ds(s);
}
function dh(h,m){	
	var ha=(h-3)*2*Math.PI/12 + m*Math.PI/360, hx=hh*Math.cos(ha), hy=hh*Math.sin(ha);
	c.beginPath(); c.strokeStyle='#eeeeee'; c.lineWidth = r/25; c.moveTo(r,r); c.lineTo(r+hx,r+hy);c.stroke(); 
}
function dm(m){	
	var ma=(m-15)*2*Math.PI/60 ;var mx=mh*Math.cos(ma);var my=mh*Math.sin(ma);
	c.beginPath(); c.strokeStyle='#eeeeee';c.lineWidth = r/50;c.moveTo(r,r);c.lineTo(r+mx,r+my);c.stroke(); 
}
function ds(s){	
	var sa=(s-15)*2*Math.PI/60 ;var sx=sh*Math.cos(sa);var sy=sh*Math.sin(sa);
	c.beginPath();c.strokeStyle='#FF0000';c.lineWidth = r/75;
	c.arc(r,r,r/70,0,2*Math.PI);
	c.moveTo(r,r);c.lineTo(r-sx/9,r-sy/9);
	c.moveTo(r,r);c.lineTo(r+sx,r+sy);c.stroke(); 	
}