// 2 π rh + 2 π r 2 
alert("CALCULAR EL AREA DE UN CILINDRO")
let r = parseInt(prompt("INGRESE EL RADIO DE LA CILINDRO"));
let h = parseInt(prompt("INGRESE LA ALTURA DE LA CILINDRO"));
/////////////////////////// area
let π = 3.14;
let a = 2 * π * r * h + 2 * π * r * 2;
////////////////////////// volumen
let ab = 2 * (π * (r*r));
let v = ab * h;
alert(`EL AREA DEL CILINDRO ES: ${a}`)
alert(`EL VOLUMEN DEL CILINDRO ES: ${v}`)