document.getElementById("focim").textContent = "Mátrix rendszer"
const statuszElemek = document.getElementsByClassName("statusz-szoveg")
console.log(statuszElemek.length)
statuszElemek[0].textContent = "Rendszer ellenőrzése folyamatban..."
statuszElemek[1].textContent = "Kapcsolódás a hálózathoz..."
const listaElemek = document.querySelectorAll(".lista-elem")
console.log(listaElemek[0].textContent)
listaElemek[1].textContent = "Szerver állapot: ONLINE"
const nevInput = document.querySelector("#jatekos-nev-input")
const inditoGomb = document.querySelector("#indito-gomb")
const eredmenyDiv = document.getElementById("eredmeny");
