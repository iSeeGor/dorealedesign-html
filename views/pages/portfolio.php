<?php include '../../views/layouts/header.php'; ?>

<div class="root__header-page header-page _w-slogan">

	<div class="header-page__content">
		<div class="container">

			<div class="header-page__top">
				<h2 class="header-page__block-title block-title _w-dot">Портфоліо</h2>
			</div>
			<div class="header-page__body">
				<div class="header-page__company-logo">
					<svg class="icon-dd rellax">
						<use xlink:href="/assets/sprite/symbol/sprite.svg#dd-logo-letters"></use>
					</svg>
				</div>
				<div class="header-page__description">
					<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores totam quod at nemo. Eaque hic animi debitis magnam nam ut consequuntur soluta, cum, vitae dolores voluptates exercitationem nesciunt dicta. Impedit!</p>
					<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores totam quod at nemo. Eaque hic animi debitis magnam nam ut consequuntur soluta, cum, vitae dolores voluptates exercitationem nesciunt dicta. Impedit!</p>
				</div>
			</div>

		</div>
	</div>

	<div class="header-page__bg">
		<img class="header-page__bg-image _preload lazy-image" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mP8/5+hHgAHggJ/PchI7wAAAABJRU5ErkJggg==" data-src="/assets/images/theme/headers/portfolio-bg.jpg" alt="">
	</div>

	<div class="header-page__slogan">
		<div class="font-caravan">Досконалiсть в деталях... </div>
	</div>
</div>

<main class="root__main main p-portfolio">


	<div class="filter-control" data-sal="slide-up" data-sal-delay="200" data-sal-duration="1000">
		<div class="container">
			<div class="filter-control__inner">
				<button class="filter-control__button button _active filter-all" data-filter=".f-all">Усі</button>
				<button class="filter-control__button button" data-filter=".f-interier">Інтер'єр</button>
				<button class="filter-control__button button" data-filter=".f-exterier">Екстер'єр</button>
				<button class="filter-control__button button" data-filter=".f-done">Реалізовані</button>
			</div>
		</div>
	</div>

	<div class="filter-content">
		<div class="product-grid">
			<div class="product-grid__container js-mixItUp">
				<div class="product-grid__col f-all f-interier">
					<div class="dd-card">

						<div class="dd-card__media">
							<img class="lazy-image" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mP8/5+hHgAHggJ/PchI7wAAAABJRU5ErkJggg==" data-src="/assets/images/content/demo-projects/amsterdam.jpg" alt="">
						</div>

						<div class="dd-card__category">
							Інтер'єр
						</div>

						<div class="dd-card__body">
							<div class="dd-card__body-inner">
								<div class="dd-card__title">Amsterdam</div>
								<ul class="dd-card__meta-list">
									<li class="dd-card__meta-item">80 м<sup>2</sup></li>
									<li class="dd-card__meta-item">Ukraine, Kiev. 2020 р.</li>
								</ul>

								<a href="/views/pages/project.php" class="button button-more _white">
									Переглянути проект
									<span class="button-more__circle">
										<svg xmlns="http://www.w3.org/2000/svg">
											<circle cx="50%" cy="50%" r="22.5"></circle>
										</svg>
									</span>
								</a>
							</div>
						</div>
					</div>
				</div>

				<div class="product-grid__col f-all f-exterier">
					<div class="dd-card">

						<div class="dd-card__media">
							<img class="lazy-image" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mP8/5+hHgAHggJ/PchI7wAAAABJRU5ErkJggg==" data-src="/assets/images/content/demo-projects/perfect.jpg" alt="">
						</div>

						<div class="dd-card__category">
							Інтер'єр
						</div>

						<div class="dd-card__body">
							<div class="dd-card__body-inner">
								<div class="dd-card__title">Ferfect</div>
								<ul class="dd-card__meta-list">
									<li class="dd-card__meta-item">80 м<sup>2</sup></li>
									<li class="dd-card__meta-item">Ukraine, Kiev. 2020 р.</li>
								</ul>

								<a href="/views/pages/project.php" class="button button-more _white">
									Переглянути проект
									<span class="button-more__circle">
										<svg xmlns="http://www.w3.org/2000/svg">
											<circle cx="50%" cy="50%" r="22.5"></circle>
										</svg>
									</span>
								</a>
							</div>
						</div>
					</div>
				</div>

				<div class="product-grid__col f-all f-done">
					<div class="dd-card">

						<div class="dd-card__media">
							<img class="lazy-image" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mP8/5+hHgAHggJ/PchI7wAAAABJRU5ErkJggg==" data-src="/assets/images/content/demo-projects/malachit.jpg" alt="">
						</div>

						<div class="dd-card__category">
							Інтер'єр
						</div>

						<div class="dd-card__body">
							<div class="dd-card__body-inner">
								<div class="dd-card__title">Malachit</div>
								<ul class="dd-card__meta-list">
									<li class="dd-card__meta-item">80 м<sup>2</sup></li>
									<li class="dd-card__meta-item">Ukraine, Kiev. 2020 р.</li>
								</ul>

								<a href="/views/pages/project.php" class="button button-more _white">
									Переглянути проект
									<span class="button-more__circle">
										<svg xmlns="http://www.w3.org/2000/svg">
											<circle cx="50%" cy="50%" r="22.5"></circle>
										</svg>
									</span>
								</a>
							</div>
						</div>
					</div>
				</div>

				<div class="product-grid__col f-all f-interier">
					<div class="dd-card">

						<div class="dd-card__media">
							<img class="lazy-image" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mP8/5+hHgAHggJ/PchI7wAAAABJRU5ErkJggg==" data-src="/assets/images/content/demo-projects/luxuryhouce.jpg" alt="">
						</div>

						<div class="dd-card__category">
							Інтер'єр
						</div>

						<div class="dd-card__body">
							<div class="dd-card__body-inner">
								<div class="dd-card__title">Luxury Houce</div>
								<ul class="dd-card__meta-list">
									<li class="dd-card__meta-item">80 м<sup>2</sup></li>
									<li class="dd-card__meta-item">Ukraine, Kiev. 2020 р.</li>
								</ul>

								<a href="/views/pages/project.php" class="button button-more _white">
									Переглянути проект
									<span class="button-more__circle">
										<svg xmlns="http://www.w3.org/2000/svg">
											<circle cx="50%" cy="50%" r="22.5"></circle>
										</svg>
									</span>
								</a>
							</div>
						</div>
					</div>
				</div>

				<div class="product-grid__col f-all f-exterier">
					<div class="dd-card">

						<div class="dd-card__media">
							<img class="lazy-image" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mP8/5+hHgAHggJ/PchI7wAAAABJRU5ErkJggg==" data-src="/assets/images/content/demo-projects/charm.jpg" alt="">
						</div>

						<div class="dd-card__category">
							Екстер'єр
						</div>

						<div class="dd-card__body">
							<div class="dd-card__body-inner">
								<div class="dd-card__title">Charm</div>
								<ul class="dd-card__meta-list">
									<li class="dd-card__meta-item">80 м<sup>2</sup></li>
									<li class="dd-card__meta-item">Ukraine, Kiev. 2020 р.</li>
								</ul>

								<a href="/views/pages/project.php" class="button button-more _white">
									Переглянути проект
									<span class="button-more__circle">
										<svg xmlns="http://www.w3.org/2000/svg">
											<circle cx="50%" cy="50%" r="22.5"></circle>
										</svg>
									</span>
								</a>
							</div>
						</div>
					</div>
				</div>

				<div class="product-grid__col f-all f-done">
					<div class="dd-card">

						<div class="dd-card__media">
							<img class="lazy-image" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mP8/5+hHgAHggJ/PchI7wAAAABJRU5ErkJggg==" data-src="/assets/images/content/demo-projects/homelike.jpg" alt="">
						</div>

						<div class="dd-card__category">
							Екстер'єр
						</div>

						<div class="dd-card__body">
							<div class="dd-card__body-inner">
								<div class="dd-card__title">Homelike</div>
								<ul class="dd-card__meta-list">
									<li class="dd-card__meta-item">80 м<sup>2</sup></li>
									<li class="dd-card__meta-item">Ukraine, Kiev. 2020 р.</li>
								</ul>

								<a href="/views/pages/project.php" class="button button-more _white">
									Переглянути проект
									<span class="button-more__circle">
										<svg xmlns="http://www.w3.org/2000/svg">
											<circle cx="50%" cy="50%" r="22.5"></circle>
										</svg>
									</span>
								</a>
							</div>
						</div>
					</div>
				</div>
				
			</div>
			
		</div>

		<button class="button button-svg load-more" data-items="{{ $items }}">
			<span class="button-svg__deco-one"></span>
			<span class="button-svg__deco-two"></span>
			<svg height="52" width="350" xmlns="http://www.w3.org/2000/svg">
				<rect class="button-svg__rect1" height="52" width="350" />
				<rect class="button-svg__rect2" height="52" width="350" />
			</svg>
			<span class="button-svg__text">ПОКАЗАТИ ЩЕ</span>
		</button>

	</div>

	<div class="p-portfolio__b-feedback b-feedback">
		<div class="container">
			<div class="b-feedback__inner">
				<div class="b-feedback__head">
					<h2 class="b-feedback__block-title block-title _w-dot" data-sal="slide-right" data-sal-duration="800" data-sal-easing="ease-out-back">Замовити дизайн-проект</h2>
					<div class="b-feedback__desc" data-sal="fade" data-sal-duration="1200">
						Зв'яжіться з нами. Заповніть поля форми та ми вам зателефонуємо упродовж 10 хв.
					</div>
				</div>
				<div class="b-feedback__body" data-sal="fade" data-sal-duration="1200" data-sal-delay="300">
					<form class="b-feedback__form form js-validate" autocomplete="off">
                        @csrf
						<div class="form__row">
							<div class="form__group">
								<input class="input-dd" type="text" name="name" id="m-name" required>
								<label for="m-name"><span>Ваше Ім'я</span></label>
							</div>
						</div>

						<div class="form__row">
							<div class="form__group">
								<input class="input-dd input_number" type="text" name="phone" id="m-phone" required minlength="10">
								<label for="m-phone"><span>Ваш телефон</span></label>
							</div>
						</div>

						<div class="form__row">
							<button class="button button-svg">
								<span class="button-svg__deco-one"></span>
								<span class="button-svg__deco-two"></span>
								<svg height="52" width="350" xmlns="http://www.w3.org/2000/svg">
									<rect class="button-svg__rect1" height="52" width="350" />
									<rect class="button-svg__rect2" height="52" width="350" />
								</svg>
								<span class="button-svg__text">Відправити</span>
							</button>
						</div>
					</form>
				</div>
				<div class="b-feedback__footer">
					<img src="/assets/images/theme/home/b-feedback-bg-image-right.jpg" alt="" class="b-feedback__bg-image _rigth" data-sal="slide-up" data-sal-duration="800">
					<img src="/assets/images/theme/home/b-feedback-bg-image-left.jpg" alt="" class="b-feedback__bg-image _left" data-sal="slide-up" data-sal-duration="800">
				</div>
			</div>
		</div>
	</div>
</main>

<?php include '../../views/templates/modals.php'; ?>

<?php include '../../views/components/to-top.php'; ?>

<?php include '../../views/layouts/footer.php'; ?> 