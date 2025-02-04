// slå dig løs her... 

//eksempel på at udskrive alle overskrifter i services i konsollen:
services.forEach(service => console.log(service.headline))

/* ---------------------------hero img----------- */
let heroDocument = document.querySelector(".hero")
heroDocument.classList.add("no-columns", "hero__img")
let heroImg = document.createElement("img")
heroImg.src = hero.image
heroDocument.append(heroImg)

/* --------------hero text div---------------------- */
let heroText = document.createElement("div")
heroText.classList.add("hero__text")

heroText.innerHTML = `<h2>${hero.headline}</h2>
                     <p>${hero.copy}</p>
                     <button class="hero__text__btn"><img class="icon" src="${hero.icon}" alt=""> Explore</button>`
console.log(heroText);
heroDocument.appendChild(heroText)

/* -------------------- services section--------------*/





