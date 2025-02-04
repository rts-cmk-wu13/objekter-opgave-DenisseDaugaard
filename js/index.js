// slå dig løs her... 

//eksempel på at udskrive alle overskrifter i services i konsollen:
//services.forEach(service => console.log(service.headline))

/* ---------------------------hero img----------- */
let heroDocument = document.querySelector(".hero")

let heroContainer = document.createElement("figure")
heroContainer.classList.add("no-columns")
heroContainer.innerHTML = `<img src="${hero.image}" alt="">`

heroDocument.append(heroContainer)

/* --------------hero text div---------------------- */
let heroText = document.createElement("div")

heroText.classList.add("hero__text")
heroText.innerHTML = `<h1>${hero.headline}</h1>
                     <p>${hero.copy}</p>
                     <button class="hero__text__btn"><img class="icon" src="${hero.icon}" alt=""> Explore</button>`
//console.log(heroText);
heroDocument.appendChild(heroText)

/* -------------------- services section--------------*/
let servicesSection = document.querySelector(".services")

services.forEach(function(service){
  let serviceCard = document.createElement("div")
  serviceCard.classList.add("service")
  serviceCard.innerHTML = `<figure class="service__card__img__contentainer">
                            <img class="service__card__img" src="${service.illustration}" alt="random image">
                            </figure>
                            <section class="sercice__card__text">
                                <h3>${service.headline}</h3>
                                <p>${service.text}</p>
                                <a href="#">${service.linktext}</a>
                            </section>`
//console.log(serviceCard);
servicesSection.append(serviceCard)
})


/* ----------------------------facilities------------------ */

let facilitiesSection = document.querySelector(".facilities")
let facilitiesHeadline = document.createElement("h2")
facilitiesHeadline.classList.add("no-columns" , "facility-headline")
facilitiesHeadline.textContent = facilities.headline

console.log(facilities.options);
facilities.options.forEach(function(option){
  let facilityCard = document.createElement("div")
  facilityCard.classList.add("facility")
  facilityCard.innerHTML = `<figure>
                        <img class="icon__2" src="${option.icon}" alt="small icon">
                       </figure>
                       <section class="facility__text">
                        <h3>${option.headline}</h3>
                        <p>${option.text}</p>
                        <a href="#">Show more</a>
                       </section>`
  facilitiesSection.append(facilityCard, facilitiesHeadline)
                       
})

/* --------------------sites-------------------------- */

let sitesSection = document.querySelector(".sites")

let sitesStartDiv = document.createElement("div")
sitesStartDiv.classList.add("sites__start__div")
sitesStartDiv.innerHTML = `<h2>${sites.headline}</h2>
                            <p>${sites.text}</p>
                            <button><img class="icon" src="${sites.btnicon}" alt="random img">Start</button>`
                            //console.log(sitesStartDiv);

sites.places.forEach(function(place){
  let placeCard = document.createElement("div")
  placeCard.classList.add("place")
  placeCard.innerHTML = `<figure>
                        <img src="${place.img}" alt="image of people">
                       </figure>
                       <section class="facility__text">
                        <h3>${place.name}</h3>
                        <p>${place.city}</p>
                        <a href="#">View the Site</a>
                       </section>`
  sitesSection.append(sitesStartDiv, placeCard)
}) 

/* --------------------------- advantages -------------------- */

let advantagesSection = document.querySelector(".advantages")

advantages.forEach(function(advantege){
  let advantegeCard = document.createElement("div")
  advantegeCard.classList.add("advantage")
  advantegeCard.innerHTML = `<figure>
                        <img class="icon__2" src="${advantege.icon}" alt="small icon">
                       </figure>
                       <section class="facility__text">
                        <h3>${advantege.headline}</h3>
                        <p>${advantege.text}</p>
                        <a href="#">Show more</a>
                       </section>`
  advantagesSection.append(advantegeCard)
})

/* -------------------------footer-------------------------------------- */

let footerSection = document.querySelector(".footer")

let footerFirstDiv = document.createElement("div")
footerFirstDiv.classList.add("footer__column")
footerFirstDiv.innerHTML = `<h2>${footer.headline}</h2>
                            <p>${footer.text}</p>
                            `
footer.contacts.forEach(function(contact){
  let footerContacDiv = document.createElement("div")
  footerContacDiv.classList.add("footer__column")
  footerContacDiv.innerHTML = `<div>
                                <h3>${contact.headline}</h3>
                                <ul>
                                  <li>${contact.contactlist1}</li>
                                  <li>${contact.contactlist2}</li>
                                  <li>${contact.contactlist3}</li>
                                  <li>${contact.contactlist4}</li>
                                </ul>
                              </div>`
  footerSection.append(footerFirstDiv)
})
                            







