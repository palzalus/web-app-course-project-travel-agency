import $ from 'jquery';


class Modal {
	constructor() {
		this.openModalBtn = $('.open-modal');
		this.modal = $('.modal');
		this.closeModalBtn = $('.modal__close');
		this.events();
	}

	events() {
		// clicking the open modal btn
		this.openModalBtn.click(this.openModal.bind(this));
		// clicking the x modal button
		this.closeModalBtn.click(this.closeModal.bind(this));
		// pushes the esc key on keyboard
		$(document).keyup(this.keyPressHandler.bind(this));
	}

	keyPressHandler(e) {
		if (e.keyCode == 27) {
			this.closeModal();
		}
	}

	openModal() {
		this.modal.addClass('modal--show');
		return false;
	}

	closeModal() {
		this.modal.removeClass('modal--show');
	}
}

export default Modal;