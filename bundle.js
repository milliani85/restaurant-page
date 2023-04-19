(()=>{"use strict";var e="/restaurant-page/";const s=e+"71e09fe9ec0862e5e90c.jpg",n=e+"b4793d5729faec57f88a.jpg",a=e+"c42aaf01bcbd1a07d0ce.svg",t=e+"1f5b8e28863a159b84a6.svg",i=e+"2ee2d2e76f65109a3bcf.svg",l=()=>`\n    <main>\n        <section class="main-burger-container">      \n            <img class="main-burger-image" src="${s}" alt="photo of a tasty burger">\n            <div class="main-text">\n                <h5>We're back!</h5>\n                <h1>Hotter, tastier and naughtier.</h1>\n                <button class="menu-button">Menu</button>\n            </div> \n        <section>\n        <section class="about">\n            <h1>Our Story</h1>\n            <div class="story-text">\n                <p class="para para-one">Maecenas fermentum tortor id fringilla molestie. In hac habitasse platea dictumst. Morbi maximus lobortis ipsum, ut\n                blandit augue ullamcorper vitae. Nulla dignissim leo felis, eget cursus elit aliquet ut. Curabitur vel convallis massa.\n                Morbi tellus tortor, luctus et lacinia non, tincidunt in lacus. Vivamus sed ligula imperdiet, feugiat magna vitae,\n                blandit ex. Vestibulum id dapibus dolor, ac cursus.</p>\n                <p class="para para-two">Maecenas fermentum tortor id fringilla molestie. In hac habitasse platea dictumst. Morbi maximus lobortis ipsum, ut\n                blandit augue ullamcorper vitae. Nulla dignissim leo felis, eget cursus elit aliquet ut. Curabitur vel convallis massa.\n                Morbi tellus tortor, luctus et lacinia non, tincidunt in lacus. Vivamus sed ligula imperdiet, feugiat magna vitae,\n                blandit ex. Vestibulum id dapibus dolor, ac cursus.</p>\n            </div>\n        </section>\n    </main>\n    <footer>\n        <img class="footer-image" src="${n}" alt="photo of some salad ingredients">\n        <div class="footer-text">\n            <p class="footer-title">Address</p>\n            <p class="footer-para">123 High Street, AB12 3CD</p>\n            <p class="footer-title">Email</p>\n            <p class="footer-para">help@123.com</p>\n            <p class="footer-title">Tel:</p>\n            <p class="footer-para">01234 567890</p>\n            <div class="socials">\n                <img src="${a}" alt="facebook icon">\n                <img src="${i}" alt="instagram icon">\n                <img src="${t}" alt="twitter icon">\n            </div>\n            <p class="copyright">Copyright ©2020 Pepe La Sunfay 6000 - All rights reserved</p>\n        </div>\n    </footer>\n   `,r=e+"9dde79c6817293b91628.jpg",c=e+"f63dacb67f490f358641.jpg",o=e+"a54361ffbfd263c303e0.jpg",u=e+"93419b38167beea2bbb2.jpg",p=e+"c5614519581130d22c40.jpg",d=e+"abf4ce2e34422f662eb0.jpg",m=e+"30e8e1b355c5e9025240.jpg",g=e+"3ebad7410d9c43998e24.jpg",b=e+"24f5bf875d506cb053a1.jpg",v=document.querySelector("#content");function f(){const e=document.createElement("div");e.classList.add("current-element"),e.innerHTML=l(),v.appendChild(e)}function h(){document.querySelector(".current-element").remove()}function y(e){const s=e.target.innerText;"Home"===s?(h(),f()):"Menu"===s?(h(),function(){const e=document.createElement("div");e.classList.add("current-element"),e.innerHTML=`\n    <section class="menu">\n            <h1>Choose your burger.</h1>\n            <div class="burger-photos-container">\n                <div class="burgers">\n                    <img class="menu-photos" src="${r}" alt="double burger">\n                    <p class="title">Double Burger</p>\n                    <p class="price">£8.99</p>\n                </div>\n                <div class="burgers">\n                    <img class="menu-photos" src="${c}" alt="double bacon burger">\n                    <p class="title">Double Bacon Burger</p>\n                    <p class="price">£9.99</p>\n                </div>\n                <div class="burgers">\n                    <img class="menu-photos" src="${o}" alt="classic double burger">\n                    <p class="title">Classic Double Burger</p>\n                    <p class="price">£9.99</p>\n                </div>\n                <div class="burgers">\n                    <img class="menu-photos" src="${u}" alt="donut burger">\n                    <p class="title">Donut Burger</p>\n                    <p class="price">£9.99</p>\n                </div>\n                <div class="burgers">\n                    <img class="menu-photos" src="${p}" alt="breakfast burger">\n                    <p class="title">Breakfast Burger</p>\n                    <p class="price">£10.99</p>\n                </div>\n                <div class="burgers">\n                    <img class="menu-photos" src="${d}" alt="bacon burger">\n                    <p class="title">Bacon Burger</p>\n                    <p class="price">£8.99</p>\n                </div>\n                <div class="divider"></div>\n            </div>            \n            <h1>Choose your sides.</h1>\n            <div class="side-photos-container">\n                <div class="sides">\n                    <img class="menu-photos" src="${m}" alt="fries">\n                    <p class="title">Fries</p>\n                    <p class="price">£3.99</p>\n                </div>\n                <div class="sides">\n                    <img class="menu-photos" src="${g}" alt="loaded fries">\n                    <p class="title">Loaded Fries</p>\n                    <p class="price">£4.99</p>\n                </div>\n                <div class="sides">\n                    <img class="menu-photos" src="${b}" alt="garlic bread">\n                    <p class="title">Garlic Bread</p>\n                    <p class="price">£4.99</p>\n                </div>\n            </div> \n    <footer>\n        <img class="footer-image" src="${n}" alt="photo of some salad ingredients">\n        <div class="footer-text">\n            <p class="footer-title">Address</p>\n            <p class="footer-para">123 High Street, AB12 3CD</p>\n            <p class="footer-title">Email</p>\n            <p class="footer-para">help@123.com</p>\n            <p class="footer-title">Tel:</p>\n            <p class="footer-para">01234 567890</p>\n            <div class="socials">\n                <img src="${a}" alt="facebook icon">\n                <img src="${i}" alt="instagram icon">\n                <img src="${t}" alt="twitter icon">\n            </div>\n            <p class="copyright">Copyright ©2020 Pepe La Sunfay 6000 - All rights reserved</p>\n        </div>\n    </footer>              \n    </section>\n    `,v.appendChild(e)}()):"Contact"===s&&(h(),function(){const e=document.createElement("div");e.classList.add("current-element"),e.innerHTML=`\n    <img class="contact-image" src="${n}" alt="">\n    <div class="contact-text-container">\n        <h1>Contact Us</h1>\n        <p>Maecenas fermentum tortor id fringilla molestie. In hac habitasse platea dictumst. Morbi maximus lobortis ipsum, ut\n        blandit augue ullamcorper vitae. Nulla dignissim leo felis, eget cursus elit aliquet ut. Curabitur vel convallis massa.\n        Morbi tellus tortor, luctus et lacinia non, tincidunt in lacus. Vivamus sed ligula imperdiet, feugiat magna vitae,\n        blandit ex. Vestibulum id dapibus dolor, ac cursus.</p>\n        <div class="divider"></div>\n    </div>\n    <form class="contact-form">\n        <div class="input-container">\n            <label for="name">Name:</label>\n            <input type="text" id="name" name="name" required>\n        </div>\n        <div class="input-container">\n            <label for="email">Email:</label>\n            <input type="email" id="email" name="email" required>\n        </div>\n        <div class="input-container">\n            <label for="tel">Telephone:</label>\n            <input type="tel" id="tel" name="tel" required>\n        </div>\n        <div class="input-container">\n            <label for="subject">Subject:</label>\n            <input type="text" id="subject" name="subject" required>\n        </div>\n        <div class="input-container">\n            <label for="message">Message:</label>\n            <textarea id="message" name="message" required></textarea>\n        </div>\n        <button type="submit">Send</button>\n    </form>\n   <footer>\n        <img class="footer-image" src="${n}" alt="photo of some salad ingredients">\n        <div class="footer-text">\n            <p class="footer-title">Address</p>\n            <p class="footer-para">123 High Street, AB12 3CD</p>\n            <p class="footer-title">Email</p>\n            <p class="footer-para">help@123.com</p>\n            <p class="footer-title">Tel:</p>\n            <p class="footer-para">01234 567890</p>\n            <div class="socials">\n                <img src="${a}" alt="facebook icon">\n                <img src="${i}" alt="instagram icon">\n                <img src="${t}" alt="twitter icon">\n            </div>\n            <p class="copyright">Copyright ©2020 Pepe La Sunfay 6000 - All rights reserved</p>\n        </div>\n    </footer>`,v.appendChild(e)}())}!function(){const e=document.createElement("div");e.innerHTML='\n     <nav class="nav">\n        <div>\n            <h1>Pepe La Sunfay<span> 6000</span></h1>\n        </div>\n        <ul class="nav-tabs">\n            <li>Home</li>\n            <li>Menu</li>\n            <li>Contact</li>\n        </ul>\n    </nav>\n    ',v.appendChild(e)}(),f(),document.querySelectorAll(".nav-tabs").forEach((e=>{e.addEventListener("click",y)})),document.querySelector(".menu-button").addEventListener("click",y)})();