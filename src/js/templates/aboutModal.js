import $ from 'jquery';
import * from 'loglevel';

// Config
import * as config from '../../../project-config';

// Handlebars template
import * as aboutModalTemplate from '../../templates/aboutModal.handlebars';

export default class AboutModal {
  static load() {
    $('div#aboutModalTemplate').html(aboutModalTemplate({
      title: config.title,
      version: config.version,
      githubImage: require('../../img/GitHub-Mark-32px.png'),
    }));
    log.info('about modal template loaded');
  }
}

