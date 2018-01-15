import $ from 'jquery';
import * as log from 'loglevel';

// Handlebars template
import * as helpModalTemplate from '../../templates/helpModal.handlebars';

export default class HelpModal {
  static load() {
    $('div#helpModalTemplate').html(helpModalTemplate());
    log.info('help modal template loaded');
  }
}

