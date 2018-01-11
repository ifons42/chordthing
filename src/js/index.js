// Libraries
import $ from 'jquery';
import 'underscore';
import 'backbone';
import 'bootstrap';

// Styles
import '../scss/main.scss';

// Templates
import AboutModal from './templates/aboutModal';

$(window).ready(() => {
  // Load templates
  AboutModal.load();
});

