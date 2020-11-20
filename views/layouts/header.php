<!DOCTYPE html>
<html lang="ru">
<head>
    <meta charset="UTF-8" />
    <meta name="author" content="author name" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta http-equiv="X-UA-Compatible" content="ie=edge" />

    <title>Doreale Design</title>

    <meta name="description" content="Doreale Design description..." />
    <meta name="keywords" content="Doreale Design keywords..." />
    <meta name="format-detection" content="telephone=no">

    <!--== favicon's  -->
    <link rel="apple-touch-icon" sizes="180x180" href="/favicon/apple-touch-icon.png">
	<link rel="icon" type="image/png" sizes="32x32" href="/favicon/favicon-32x32.png">
	<link rel="icon" type="image/png" sizes="16x16" href="/favicon/favicon-16x16.png">
	<link rel="manifest" href="/favicon/site.webmanifest">
	<link rel="mask-icon" href="/favicon/safari-pinned-tab.svg" color="#5bbad5">
	<meta name="msapplication-TileColor" content="#000000">
	<meta name="theme-color" content="#ffffff">

    <!--== Preload Fonts -->
	<link rel="preload" href="/assets/fonts/Montserrat-Regular.woff2" as="font" type="font/woff2" crossorigin="">
	<link rel="preload" href="/assets/fonts/Montserrat-Medium.woff2" as="font" type="font/woff2" crossorigin="">

	<style>

		body._preload {
			overflow: hidden;
			margin-right: 17px;
		}

		.root._preload {
			opacity: 0;
		}
		.preloader {
			position: fixed;
			width: 100%;
			height: 100%;
			z-index: 1000;
			display: flex;
			justify-content: center;
			align-items: center;
			 /* display:none; */
		}

		.preloader__logo {
			position: relative;
			z-index: 1;
			animation: 4s opacity-logo 2s ease-in-out forwards;
			 /* display: none; */
		}


		.preloader__main-overlay {
			position: absolute;
			top: 0;
			left: 0;
			width: 100%;
			height: 100%;
			background: #262626;
			animation: 4s opacity 2s ease-in-out forwards;
		}

		.preloader__second-overlay {
			position: absolute;
			top: 50%;
			left: 0;
			width: 0%;
			height: 1px;
			background: #ebe7e7;
			transform: translateY(-50%);
			animation: 4s preload-line 2s ease-in-out forwards;
		}

	</style>

	<!--== CSS Vendor -->
	<link rel="stylesheet" href="/assets/vendor/css/vendor.css" />

	<!--== CSS Main Style -->
	<!-- <link rel="stylesheet" href="/assets/css/style.css" /> -->
	<link rel="stylesheet" href="/assets/css/style-mq.css" />

	<!--== CSS Media -->
	<link rel="stylesheet" href="/assets/css/media.css" />

	<noscript>
		<style>
			[data-sal|='fade'] {
			opacity: 1;
			}

			[data-sal|='slide'],
			[data-sal|='zoom'] {
			opacity: 1;
			transform: none;
			}

			[data-sal|='flip'] {
			transform: none;
			}
		</style>
	</noscript>


</head>

<body class="_preload">

<div class="preloader">
	<img src="/assets/images/theme/logo-white.svg" alt="Doreale Design Logo" class="preloader__logo" width='400'>

	<div class="preloader__main-overlay"></div>
	<div class="preloader__second-overlay"></div>

</div>

<div class="root _preload">

	<div class="aside-menu">
		<div class="aside-menu__content">
			<nav class="mobile-nav">
				<ul class="mobile-nav__list">
					<li class="mobile-nav__item">
						<a href="/" class="mobile-nav__link _active">Головна</a>
					</li>
					<li class="mobile-nav__item">
						<a href="/views/pages/service.php" class="mobile-nav__link">Посуги</a>
					</li>
					<li class="mobile-nav__item">
						<a href="/views/pages/portfolio.php" class="mobile-nav__link">Портфоліо</a>
					</li>
					<li class="mobile-nav__item">
						<a href="/views/pages/about.php" class="mobile-nav__link">Про нас</a>
					</li>
				</ul>
			</nav>

			<div class="header__header-details aside-menu__details">
				<div class="header-details__item">
					<a class="header-details__phone" href="tel:+380900000000">+38 (099) 000 0000</a>
				</div>
				<div class="header-details__item">
					<button class="button header-details__button" data-fancybox="" data-modal="true" data-src="#m-callback">Замовити дзвінок</button>
				</div>
			</div>
		</div>
		<div class="aside-menu__overlay"></div>
	</div>

	<header class="root__header header _preload">
		<div class="header__overlay js-header-overlay"></div>
		<div class="container-fluid">
			<div class="header__inner mw-1920">

				<div class="header__logo logo">
					<a class="logo__link" href="/">
						<img src="/assets/images/theme/logo-white.svg" alt="Doreale Design Logo" class="logo__image js-logo-image">
					</a>
				</div>

				<div class="header__nav nav">
					<nav class="nav__menu nav-menu">
						<ul class="nav-menu__list">
							<li class="nav-menu__item">
								<a class="nav-menu__link _active" href="/">Головна</a>
							</li>
							<li class="nav-menu__item">
								<a class="nav-menu__link" href="/views/pages/service.php">Послуги</a>
							</li>
							<li class="nav-menu__item">
								<a class="nav-menu__link" href="/views/pages/portfolio.php">Портфоліо</a>
							</li>
							<li class="nav-menu__item">
								<a class="nav-menu__link" href="/views/pages/about.php">Про нас</a>
							</li>
						</ul>
					</nav>
				</div>

				<div class="header__header-details header-details">
					<div class="header-details__item">
						<a class="header-details__phone" href="tel:+380990000000">+38 (099) 000 0000</a>
					</div>
					<div class="header-details__item">
						<button class="button header-details__button" data-fancybox data-modal="true" data-src="#m-callback">Замовити дзвінок</button>
					</div>
				</div>

				<div class="header__hamburger hamburger">
					<div class="hamburger__item"></div>
					<div class="hamburger__item"></div>
					<div class="hamburger__item"></div>
				</div>

			</div>
		</div>
	</header>
