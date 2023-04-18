import double from './images/Menu/double-burger.jpg';

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
                    <img class="menu-photos" src="../src/images/Menu/double-bacon-burger.jpg" alt="double bacon burger">
                    <p class="title">Double Bacon Burger</p>
                    <p class="price">£9.99</p>
                </div>
                <div class="burgers">
                    <img class="menu-photos" src="../src/images/Menu/classic-double-burger.jpg" alt="classic double burger">
                    <p class="title">Classic Double Burger</p>
                    <p class="price">£9.99</p>
                </div>
                <div class="burgers">
                    <img class="menu-photos" src="../src/images/Menu/donut-burger.jpg" alt="donut burger">
                    <p class="title">Donut Burger</p>
                    <p class="price">£9.99</p>
                </div>
                <div class="burgers">
                    <img class="menu-photos" src="../src/images/Menu/breakfast-burger.jpg" alt="breakfast burger">
                    <p class="title">Breakfast Burger</p>
                    <p class="price">£10.99</p>
                </div>
                <div class="burgers">
                    <img class="menu-photos" src="../src/images/Menu/bacon-burger.jpg" alt="bacon burger">
                    <p class="title">Bacon Burger</p>
                    <p class="price">£8.99</p>
                </div>
                <div class="divider"></div>
            </div>            
            <h1>Choose your sides.</h1>
            <div class="side-photos-container">
                <div class="sides">
                    <img class="menu-photos" src="../src/images/Menu/fries.jpg" alt="fries">
                    <p class="title">Fries</p>
                    <p class="price">£3.99</p>
                </div>
                <div class="sides">
                    <img class="menu-photos" src="../src/images/Menu/loaded-fries.jpg" alt="loaded fries">
                    <p class="title">Loaded Fries</p>
                    <p class="price">£4.99</p>
                </div>
                <div class="sides">
                    <img class="menu-photos" src="../src/images/Menu/garlic-bread.jpg" alt="garlic bread">
                    <p class="title">Garlic Bread</p>
                    <p class="price">£4.99</p>
                </div>
            </div> 
            <footer>
        <img class="footer-image" src="../src/images/pexels-adonyi-gábor-1400172.jpg" alt="photo of some salad ingredients">
        <div class="footer-text">
            <p class="footer-title">Address</p>
            <p class="footer-para">123 High Street, AB12 3CD</p>
            <p class="footer-title">Email</p>
            <p class="footer-para">help@123.com</p>
            <p class="footer-title">Tel:</p>
            <p class="footer-para">01234 567890</p>
            <div class="socials">
                <img src="../src/images/icons8-facebook.svg" alt="facebook icon">
                <img src="../src/images/icons8-instagram.svg" alt="instagram icon">
                <img src="../src/images/icons8-twitter.svg" alt="twitter icon">
            </div>
            <p class="copyright">Copyright ©2020 Pepe La Sunfay 6000 - All rights reserved</p>
        </div>
    </footer>              
    </section>
    `
}

export default menu;