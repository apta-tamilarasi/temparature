let a=parseInt(prompt("Enter the temparature"))

document.write(a+"<br>")

if(a<0){
	document.write("Freezing weather")
}


else if(a>=0 && a<10){
	document.write("very cold weather")
}


else if(a>=10 && a<20){
	document.write("cold weather")
}


else if(a>=20 && a<30){
	document.write("normal")
}

else if(a>=30 && a<40){
	document.write("hot")
}

else if(a>=40){
	document.write("very hot")
}

else{
	document.write("Enter only temparature")
}