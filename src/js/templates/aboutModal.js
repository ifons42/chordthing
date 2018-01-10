import $ from 'jquery';

// Config
import * as config from '../../../project-config';

// Handlebars template
import * as aboutModalTemplate from '../../templates/aboutModal.handlebars';

console.log(config);

$('div#aboutModalTemplate').html(aboutModalTemplate({
  title: config.title,
  version: config.version,
  githubImage: require('../../img/GitHub-Mark-32px.png'),
}));

