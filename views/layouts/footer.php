<footer class="footer">
    <div class="container">

        <div class="footer__main footer-main">
            <div class="footer-main__grid">
                <div class="footer-main__col">
                    <div class="footer-logo">
                        <img class="footer-logo__image lazy-image" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mP8/5+hHgAHggJ/PchI7wAAAABJRU5ErkJggg==
" data-src="/assets/images/theme/logo-black.svg" alt="DD Footer Logo">
                    </div>
                </div>
                <div class="footer-main__col">
                    <div class="footer-widget">
                        <div class="footer-widget__title">Адреса</div>
                        <ul class="footer-widget__list">
                            <li class="footer-widget__list-item">
                                <svg class="icon-marker" width="24" height="26">
                                    <use xlink:href="/assets/sprite/symbol/sprite.svg#icon-marker"></use>
                                </svg>
                                <a class="link-address _location"
                                   href="https://www.google.com/maps?q=google+maps+%D1%85%D0%BC%D0%B5%D0%BB%D1%8C%D0%BD%D0%B8%D1%86%D0%BA%D0%B8%D0%B9&rlz=1C1SQJL_ruUA870UA870&um=1&ie=UTF-8&sa=X&ved=2ahUKEwj7h_TYnsrrAhVhlosKHSQWChcQ_AUoAXoECA0QAw"
                                   target="blank">Україна, м.Хмельницький</a>
                            </li>
                            <li class="footer-widget__list-item">
                                <svg class="icon-letter" width="28" height="22">
                                    <use xlink:href="/assets/sprite/symbol/sprite.svg#icon-letter"></use>
                                </svg>
                                <a class="link-address _location"
                                   href="mailto:admin@dorealedesign.com">admin@dorealedesign.com</a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div class="footer-main__col">
                    <div class="footer-widget">
                        <div class="footer-widget__title">Телефон</div>
                        <ul class="footer-widget__list">
                            <li class="footer-widget__list-item">
                                <svg class="icon-phone-old" width="23" height="23">
                                    <use xlink:href="/assets/sprite/symbol/sprite.svg#icon-phone-old"></use>
                                </svg>
                                <a class="link-address _location"
                                   href="tel:+380980000000">+38 (098) 0000 000</a>
                            </li>
                            <li class="footer-widget__list-item">
                                <button class="button footer-widget__call-btn" data-fancybox data-modal="true"
                                        data-src="#m-callback">замовити дзвінок
                                </button>
                            </li>
                        </ul>
                    </div>
                </div>
                <div class="footer-main__col">
                    <div class="social">
                        <div class="social__list">
                            <a class="social__list-item" target="blank"href="#">
                                <svg class="icon-instagram" width="28" height="28">
                                    <use xlink:href="/assets/sprite/symbol/sprite.svg#icon-instagram"></use>
                                </svg>
                            </a>
                            <a class="social__list-item" target="blank"href="#">
                                <svg class="icon-facebook" width="28" height="28">
                                    <use xlink:href="/assets/sprite/symbol/sprite.svg#icon-facebook"></use>
                                </svg>
                            </a>
                            <a class="social__list-item" target="blank"href="#">
                                <svg class="icon-youtube" width="28" height="28">
                                    <use xlink:href="/assets/sprite/symbol/sprite.svg#icon-youtube"></use>
                                </svg>
                            </a>
                            <a class="social__list-item" target="blank"href="#">
                                <svg class="icon-telegram" width="28" height="28">
                                    <use xlink:href="/assets/sprite/symbol/sprite.svg#icon-telegram"></use>
                                </svg>
                            </a>
                        </div>
                    </div>
                </div>
                <div class="footer-main__col _double">
                    <div class="footer__slogan">
                        <div class="font-caravan">Doreale Design — грамотний проект з</div>
                        <svg class="icon-heart" width="28" height="28">
                            <use xlink:href="/assets/sprite/symbol/sprite.svg#icon-heart"></use>
                        </svg>
                    </div>
                </div>
            </div>
        </div>

        <div class="footer__bottom footer-bottom">
            <div class="footer-bottom__content">
                <div class="footer-bottom__copyright">
                    <div class="footer-copyright">Студія дизайн інтер'єру - Doreale Design
                        &copy; 2020</div>
                </div>
                <div class="footer-bottom__creator">
                    <div class="art-sites">
                        <div class="art-sites__text">Сайт розроблений і просувається</div>
                        <a class="art-sites__logo" href="https://art-sites.org/ru" title="art-sites.org"
                           target="_blank">
                            <img class="art-sites__logo-image" src="/assets/images/theme/artsites.svg" width="114"
                                 alt="">
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</footer>
</div><!-- end.root -->


<script>

    let preloader = document.querySelector('.preloader');
    let root = document.querySelector('.root');
    let body = document.body;
    let rootHeader = document.querySelector('.root__header');
    let pageHeaderBgImage = document.querySelector('.header-page__bg-image');

    setTimeout(() => {
        preloader.remove();
        body.classList.remove('_preload');
        rootHeader.classList.remove('_preload');
        if(pageHeaderBgImage){
            pageHeaderBgImage.classList.remove('_preload');
        }
    }, 6000);

    setTimeout(() => {
        root.classList.remove('_preload');

    }, 4000);

</script>

<!--== Google Map  -->
<script src="https://maps.googleapis.com/maps/api/js?key=AIzaSyAnmv8rDSzIL4RVE5EBt6Kt4hqdFXU2mA4"></script>

<!--== Scripts -->
<script src="/assets/vendor/js/vendor.js"></script>
<script src="/assets/js/scripts.js"></script>
<script src="/assets/back/handle-mail.js"></script>

</body>
</html>

