<?php include '../../views/layouts/header.php'; ?>

<main class="root__err404 err404">
    <div class="container">

        <div class="err404__content">
            <h1 class="err404__title block-title _w-dot">Запитувана сторінка не знайдена</h1>
            <span class="err404__num">404</span>
            <p class="err404__text">Можливо був введений некоректна адреса або сторінка була видалена.</p>
            <a href="" class="button button-svg">
                <span class="button-svg__deco-one"></span>
                <span class="button-svg__deco-two"></span>
                <svg height="52" width="350" xmlns="http://www.w3.org/2000/svg">
                    <rect class="button-svg__rect1" height="52" width="350" />
                    <rect class="button-svg__rect2" height="52" width="350" />
                    <div class="button-svg__text">Перейти на головну</div>
                </svg>
            </a>
            <p class="err404__text">Для повернення на попередню сторінку натисніть кнопку «Назад» в своєму браузері.</p>
        </div>

        <div class="err404__bg">
            <img src="/assets/images/theme/404-bg-image.jpg" alt="" width="640">
        </div>

    </div>
</main>

<script>
    document.querySelector('.js-header-overlay').classList.add('_err404');
</script>

<?php include '../../views/templates/modals.php'; ?>

<?php include '../../views/components/to-top.php'; ?>

<?php include '../../views/layouts/footer.php'; ?> 
