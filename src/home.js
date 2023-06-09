import mainBurgerImage from '/src/images/pexels-valeria-boltneva-1639562.jpg'

import footerImage from '../src/images/pexels-adonyi-gábor-1400172.jpg'

import facebookIcon from '../src/images/icons8-facebook.svg'
import twitterIcon from '../src/images/icons8-twitter.svg'
import instaIcon from '../src/images/icons8-instagram.svg'

const home = () => {
    return `
    <main>
        <section class="main-burger-container">      
            <img class="main-burger-image" src="${mainBurgerImage}" alt="photo of a tasty burger">
            <div class="main-text">
                <h5>Welcome!</h5>
                <h1>Authentic flavours, locally sourced.</h1>
                <button class="menu-button">Menu</button>
            </div> 
        <section>
        <section class="about">
            <h1>Our Story</h1>
            <div class="story-text">
                <p class="para para-one">Maecenas fermentum tortor id fringilla molestie. In hac habitasse platea dictumst. Morbi maximus lobortis ipsum, ut
                blandit augue ullamcorper vitae. Nulla dignissim leo felis, eget cursus elit aliquet ut. Curabitur vel convallis massa.
                Morbi tellus tortor, luctus et lacinia non, tincidunt in lacus. Vivamus sed ligula imperdiet, feugiat magna vitae,
                blandit ex. Vestibulum id dapibus dolor, ac cursus.</p>
                <p class="para para-two">Maecenas fermentum tortor id fringilla molestie. In hac habitasse platea dictumst. Morbi maximus lobortis ipsum, ut
                blandit augue ullamcorper vitae. Nulla dignissim leo felis, eget cursus elit aliquet ut. Curabitur vel convallis massa.
                Morbi tellus tortor, luctus et lacinia non, tincidunt in lacus. Vivamus sed ligula imperdiet, feugiat magna vitae,
                blandit ex. Vestibulum id dapibus dolor, ac cursus.</p>
            </div>
        </section>
    </main>
    <footer>
        <img class="footer-image" src="${footerImage}" alt="photo of some salad ingredients">
        <div class="footer-text">
            <p class="footer-title">Address</p>
            <p class="footer-para">123 High Street, AB12 3CD</p>
            <p class="footer-title">Email</p>
            <p class="footer-para">help@123.com</p>
            <p class="footer-title">Tel:</p>
            <p class="footer-para">01234 567890</p>
            <div class="socials">
                <img src="${facebookIcon}" alt="facebook icon">
                <img src="${instaIcon}" alt="instagram icon">
                <img src="${twitterIcon}" alt="twitter icon">
            </div>
            <p class="copyright">Copyright ©2020 Pepe La Sunfay 6000 - All rights reserved</p>
        </div>
    </footer>
   `
}

export default home;