class OutlineController {
  constructor() {
    window.addEventListener('keydown', this.onKeydown);
    window.addEventListener('mousedown', this.onMouseAction);
  }

  onMouseAction() {
    document.body.classList.add('intent_mouse');
  }

  onKeydown(e: KeyboardEvent) {
    if (e.key === 'Tab') {
      document.body.classList.remove('intent_mouse');
    }
  }
}

export default OutlineController;