"1. Írd át a `focim` azonosítójú főcím tartalmát „Mátrix rendszer”-re a `getElementById()` metódussal!"

const focimElem=document.getElementById("focim")
focimElem.textContent="Mátrix rendszer"

"2. Jelöld ki a `statusz-szoveg` osztályú elemeket a `getElementsByClassName()` metódussal, és tárold a kapott elemlistát a `statuszElemek` változóban!"

const statuszElemek=document.getElementsByClassName("statusz-szoveg")

"3. Írd ki a konzolra, hogy hány elemet tartalmaz a `statuszElemek` lista!"

console.log(statuszElemek.length)

"4. Írd át a lista első elemének szövegét „Rendszer ellenőrzése folyamatban...” szövegre! Az elemet az indexével érd el!"

statuszElemek[0].textContent = "Rendszer ellenőrzése folyamatban..."

"5. Írd át a lista második elemének szövegét „Kapcsolódás a hálózathoz...” szövegre!"

statuszElemek[1].textContent = "Kapcsolódás a hálózathoz..."

"6. Jelöld ki az összes `lista-elem` osztályú elemet a `querySelectorAll()` metódussal, és tárold a kapott elemlistát a `listaElemek` változóban!"

const listaElemek = document.querySelectorAll(".lista-elem")

"7. Olvasd ki a `listaElemek` lista első elemének szövegét, és írd ki a konzolra!"

console.log(listaElemek[0].textContent)

"8. Módosítsd a lista második elemének szövegét „Szerver állapot: ONLINE” szövegre!"

listaElemek[1].textContent = "Szerver állapot: ONLINE"


"9. Jelöld ki a `jatekos-nev-input` azonosítójú beviteli mezőt a `querySelector()` metódussal, és tárold a `nevInput` változóban!"

const nevInput = document.querySelector("#jatekos-nev-input")

"10. Jelöld ki az `indito-gomb` azonosítójú gombot a `querySelector()` metódussal, és tárold az `inditoGomb` változóban!"

const inditoGomb = document.querySelector("#indito-gomb")

"11. Jelöld ki az `eredmeny` azonosítójú elemet a `getElementById()` metódussal, és tárold az `eredmenyDiv` változóban!"

const eredmenyDiv = document.getElementById(".eredmeny")

"12. Rendelj a gombhoz kattintásra lefutó eseménykezelőt az `addEventListener()` metódussal!"

inditoGomb.addEventListener("click", function(){
    const gombSzovege = inditoGomb.textContent;
    const jatekosNev = nevInput.value;
    eredmenyDiv.textContent = `üdvözlünk, ${jatekosNev}! végrehajtott akció: ${gombSzovege}`;
})

"13. Az eseménykezelőben olvasd ki a gomb feliratát a `textContent` tulajdonsággal, és tárold a `gombSzovege` változóban!"

"14. Ugyanitt olvasd ki a beviteli mező aktuális tartalmát a `value` tulajdonsággal, és tárold a `jatekosNev` változóban!"

