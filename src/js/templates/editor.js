import $ from 'jquery';
import * as log from 'loglevel';

// Handlebars template
import * as editorTemplate from '../../templates/editor.handlebars';

export default class Editor {
  static load() {
    $('div#editor').html(editorTemplate());
    log.info('editor template loaded');
  }
}

