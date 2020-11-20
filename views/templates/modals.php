<div class="modals">

	<div class="modals__modal modal m-callback" id="m-callback">
		<div class="modal__inner">
			<div class="modal__header">
				<div class="modal__title">Замовити зворотній дзвінок</div>
				<div class="modal__text">
					Заповніть будь ласка усі поля форми.<br>
					Ми зв'яжемося із вами на протязі 10 хв, та надамо
					усю необхідну інформацію.
				</div>
			</div>
			<div class="modal__content">

				<form class="modal__form form js-validate" autocomplete="off">
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

					<button class="button button-svg">
						<span class="button-svg__deco-one"></span>
						<span class="button-svg__deco-two"></span>
						<svg height="52" width="350" xmlns="http://www.w3.org/2000/svg">
							<rect class="button-svg__rect1" height="52" width="350" />
							<rect class="button-svg__rect2" height="52" width="350" />
						</svg>
						<span class="button-svg__text">Відправити</span>
					</button>
				</form>
			</div>
			<button class="modal__button-close button button-close js-reset-validation" data-fancybox-close>
				<span class="button-close__item"></span>
				<span class="button-close__item"></span>
				<span class="button-close__item"></span>
			</button>
		</div>
	</div>

	<div class="modals__modal modal m-success" id="m-success">
		<div class="modal__inner">
			<div class="modal__header">
				<div class="modal__title">Спасибо, заявка успешно отправлена</div>
				<div class="modal__text">
					Мы свяжемся с Вами в ближайшее время
				</div>
			</div>
		</div>
	</div>

</div>
