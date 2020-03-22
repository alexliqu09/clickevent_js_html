var boton = document.getElementById("botoncito");
boton.addEventListener("click", dibujoPorClick );
var d = document.getElementById("pantallla");
var image = d.getContext("2d");

var fondo ={
  url:"escuela.png",
  carga:false
};

var person1 ={
  url2:"3.png",
  url3:"4.png",
  carga:false
};
var person2 ={
  url2:"7.png",
  url3:"8.png",
  carga:false
};
var i=1;
escenario(fondo.url,person1.url2,person2.url2);
//escena3();
//escena4();
function dibujoPorClick()
{
  if(i==1){
    escenario(fondo.url,person1.url3,person2.url2);
  }
  if(i==2)
  {
    escenario(fondo.url,person1.url3,person2.url3);
  }
  if(i==3)
  {
    escenario(fondo.url,person1.url2,person2.url3);
}
i++;
}

function escenario(fondo_0, persona_1,persona_2)
{
  fondo.imagen= new Image();
  fondo.imagen.src=fondo_0//fondo.url;
  fondo.imagen.addEventListener("load", cargarfondo);

  person1.imagen= new Image();
  person1.imagen.src=persona_1//person1.url2;
  person1.imagen.addEventListener("load", cargarPerson1);

  person2.imagen= new Image();
  person2.imagen.src=persona_2//person2.url2;
  person2.imagen.addEventListener("load", cargarPerson2);

  cargarfondo();
  cargarPerson1();
  cargarPerson2();

}
function cargarfondo(){
  fondo.carga=true;
  dibujar();
}

function cargarPerson1(){
  person1.carga=true;
  dibujar();
}

function cargarPerson2(){
  person2.carga=true;
  dibujar();
}
function dibujar(){
  if(fondo.carga)
  {
    image.drawImage(fondo.imagen,0,0);
  }
  if(person1.carga)
  {
    image.drawImage(person1.imagen,860,250);
  }
  if(person2.carga)
  {
    image.drawImage(person2.imagen,-40,230);
  }
}
