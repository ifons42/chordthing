import $ from 'jquery';
import * as log from 'loglevel';

// Config
import * as config from '../../../project-config';

// Handlebars template
import * as sidebarTemplate from '../../templates/sidebar.handlebars';

export default class AboutModal {
  static load() {
    $('div#sidebar').html(sidebarTemplate());
    log.info('sidebar template loaded');
  }
}

