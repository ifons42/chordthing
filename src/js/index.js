// Libraries
import $ from 'jquery';
import 'underscore';
import 'backbone';
import 'bootstrap';
import * as log from 'loglevel';

// Styles
import '../scss/main.scss';

// Templates
import AboutModal from './templates/aboutModal';
import Sidebar from './templates/sidebar';
import Editor from './templates/editor';

// Set logging level
log.setLevel('trace');

$(window).ready(() => {
  // Load templates
  log.info('loading templates');
  AboutModal.load();
  Sidebar.load();
  Editor.load();

  log.info('templates loaded');
});

