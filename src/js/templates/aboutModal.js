import $ from 'jquery';
import * as log from 'loglevel';

// Config
import * as config from '../../../project-config';

// Handlebars template
import * as aboutModalTemplate from '../../templates/aboutModal.handlebars';

import * as githubMarkImage from '../../img/GitHub-Mark-32px.png';

export default class AboutModal {
  static load() {
    $('div#aboutModalTemplate').html(aboutModalTemplate({
      title: config.title,
      version: config.version,
      githubImage: githubMarkImage,
    }));
    log.info('about modal template loaded');
  }
}

