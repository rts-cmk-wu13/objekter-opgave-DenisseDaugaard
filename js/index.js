// slå dig løs her... 

//eksempel på at udskrive alle overskrifter i services i konsollen:
//services.forEach(service => console.log(service.headline))

/* ---------------------------hero img----------- */
let heroDocument = document.querySelector(".hero")

heroDocument.classList.add("hero__img")
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
let servicesSection = document.querySelector(".services")

services.forEach(function(service){
  let serviceCard = document.createElement("div")
  serviceCard.classList.add("service")
  serviceCard.innerHTML = `<figure class="service__card__img__content">
                            <img class="service__card__img" src="${service.illustration}" alt="random image">
                            </figure>
                            <section class="sercice__card__text">
                                <h3>${service.headline}</h3>
                                <p>${service.text}</p>
                                <a href="#">${service.linktext}</a>
                            </section>`
console.log(serviceCard);
servicesSection.append(serviceCard)
})







