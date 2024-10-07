// type conversion or coersion

document.write("20"+5,"<br>") //205 --string concantinate because 20 consider as string and 5 consider as integer
document.write("20"-5,"<br>") //15 answer becauser 20 and 5 are consider as integer
document.write("20"*5,"<br>") //100
document.write("20"/5,"<br>") //4

document.write(true+1,"<br>") //2
document.write(Number("42"),"<br>") //42
document.write(Number("Hello"),"<br>") //NaN

document.write(typeof String(123),"<br>"); //123
document.write(String (true),"<br>"); //

document.write(Boolean(0),"<br>");  //false
document.write(Boolean(),"<br>"); //false
document.write(Boolean("Hello"),"<br>"); //true

document.write(parseInt("15.90"),"<br>"); //15
document.write(parseInt(3.14));