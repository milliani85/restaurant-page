const contact = () => {
    return `
    <img class="contact-image" src="../src/images/pexels-adonyi-gábor-1400172.jpg" alt="">
    <div class="contact-text-container">
        <h1>Contact Us</h1>
        <p>Maecenas fermentum tortor id fringilla molestie. In hac habitasse platea dictumst. Morbi maximus lobortis ipsum, ut
        blandit augue ullamcorper vitae. Nulla dignissim leo felis, eget cursus elit aliquet ut. Curabitur vel convallis massa.
        Morbi tellus tortor, luctus et lacinia non, tincidunt in lacus. Vivamus sed ligula imperdiet, feugiat magna vitae,
        blandit ex. Vestibulum id dapibus dolor, ac cursus.</p>
        <div class="divider"></div>
    </div>
    <form class="contact-form">
        <div class="input-container">
            <label for="name">Name:</label>
            <input type="text" id="name" name="name" required>
        </div>
        <div class="input-container">
            <label for="email">Email:</label>
            <input type="email" id="email" name="email" required>
        </div>
        <div class="input-container">
            <label for="tel">Telephone:</label>
            <input type="tel" id="tel" name="tel" required>
        </div>
        <div class="input-container">
            <label for="subject">Subject:</label>
            <input type="text" id="subject" name="subject" required>
        </div>
        <div class="input-container">
            <label for="message">Message:</label>
            <textarea id="message" name="message" required></textarea>
        </div>
        <button type="submit">Send</button>
    </form>
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
    </footer>`
}

export default contact;