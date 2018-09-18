import $ from 'jquery';
import btnTpl from './button.atpl';

class Bottom {
  constructor(opts = {}) {
    this.wrap = opts.wrap || $('body');
    this.txt = opts.txt || '按钮';
    this.type = opts.type || 'normal';
  }
  render() {
    const tpl = btnTpl({
      type: this.type,
      txt: this.txt,
    })
    this.wrap.append(tpl);
  }
}

export default Bottom;