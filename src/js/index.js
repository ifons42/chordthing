// Libraries
import $ from 'jquery';
import 'underscore';
import 'backbone';
import 'bootstrap';
import * from 'loglevel';

// Styles
import '../scss/main.scss';

// Templates
import AboutModal from './templates/aboutModal';

$(window).ready(() => {
  log.info('loading templates');
  // Load templates
  AboutModal.load();

  log.info('templates loaded');
});

