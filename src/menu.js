import double from '../src/images/Menu/double-burger.jpg';
import doubleBacon from '../src/images/Menu/double-bacon-burger.jpg'
import classicDouble from '../src/images/Menu/classic-double-burger.jpg'
import donutBurger from '../src/images/Menu/donut-burger.jpg'
import breakfastBurger from '../src/images/Menu/breakfast-burger.jpg'
import baconBurger from '../src/images/Menu/bacon-burger.jpg'

import fries from '../src/images/Menu/fries.jpg'
import loadedFries from '../src/images/Menu/loaded-fries.jpg'
import garlicBread from '../src/images/Menu/garlic-bread.jpg'

import footerImage from '../src/images/pexels-adonyi-gábor-1400172.jpg'

import facebookIcon from '../src/images/icons8-facebook.svg'
import twitterIcon from '../src/images/icons8-twitter.svg'
import instaIcon from '../src/images/icons8-instagram.svg'


const menu = () => {
    return `
    <section class="menu">
            <h1>Choose your burger.</h1>
            <div class="burger-photos-container">
                <div class="burgers">
                    <img class="menu-photos" src="${double}" alt="double burger">
                    <p class="title">Double Burger</p>
                    <p class="price">£8.99</p>
                </div>
                <div class="burgers">
                    <img class="menu-photos" src="${doubleBacon}" alt="double bacon burger">
                    <p class="title">Double Bacon Burger</p>
                    <p class="price">£9.99</p>
                </div>
                <div class="burgers">
                    <img class="menu-photos" src="${classicDouble}" alt="classic double burger">
                    <p class="title">Classic Double Burger</p>
                    <p class="price">£9.99</p>
                </div>
                <div class="burgers">
                    <img class="menu-photos" src="${donutBurger}" alt="donut burger">
                    <p class="title">Donut Burger</p>
                    <p class="price">£9.99</p>
                </div>
                <div class="burgers">
                    <img class="menu-photos" src="${breakfastBurger}" alt="breakfast burger">
                    <p class="title">Breakfast Burger</p>
                    <p class="price">£10.99</p>
                </div>
                <div class="burgers">
                    <img class="menu-photos" src="${baconBurger}" alt="bacon burger">
                    <p class="title">Bacon Burger</p>
                    <p class="price">£8.99</p>
                </div>
                <div class="divider"></div>
            </div>            
            <h1>Choose your sides.</h1>
            <div class="side-photos-container">
                <div class="sides">
                    <img class="menu-photos" src="${fries}" alt="fries">
                    <p class="title">Fries</p>
                    <p class="price">£3.99</p>
                </div>
                <div class="sides">
                    <img class="menu-photos" src="${loadedFries}" alt="loaded fries">
                    <p class="title">Loaded Fries</p>
                    <p class="price">£4.99</p>
                </div>
                <div class="sides">
                    <img class="menu-photos" src="${garlicBread}" alt="garlic bread">
                    <p class="title">Garlic Bread</p>
                    <p class="price">£4.99</p>
                </div>
            </div> 
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
    </section>
    `
}

export default menu;