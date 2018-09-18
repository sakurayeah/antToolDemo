import $ from 'jquery';
import '../index.html';
import './index.less';

const init = () => {
  $.ajax({
    url: '/init.json',
    data: {},
    type: 'GET',
    success: (d = {}) => {
      if (d.title) {
        $('body').append(d.title);
      } else {
        $('body').append('title');
      }
    },
    error: () => {
      $('body').append('ajax error');
    }
  })
}

init();