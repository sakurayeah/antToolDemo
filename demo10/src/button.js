import $ from 'jquery';

class Bottom {
  constructor(opts = {}) {
    this.wrap = opts.wrap || $('body');
    this.txt = opts.txt || '按钮';
    this.type = opts.type || 'normal'
  }
  render() {
    this.wrap.append(`<div class="btn ${this.type}">${this.txt }</div>`);
  }
}

export default Bottom;