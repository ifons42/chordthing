/* eslint func-names: "off" */

import Backbone from 'backbone';
import * as log from 'loglevel';

import Settings from '../models/SettingsModel';

const SidebarView = Backbone.View.extend({
  tagName: 'div',
  model: Settings,

  events: {
    'change #setting-project-name': function () {
      log.info('Project name changed');
    },
    'change #setting-instrument-select': function () {
      const setting = this.$el.find('#setting-instrument-select').val();
      switch (setting) {
        case 'Grand Piano':
          this.chordsView.changeInstrument('acoustic_grand_piano');
          break;
        case 'Acoustic Guitar':
          this.chordsView.changeInstrument('acoustic_guitar_nylon');
          break;
        case 'Acoustic Bass':
          this.chordsView.changeInstrument('acoustic_bass');
          break;
        case 'Electric Guitar':
          this.chordsView.changeInstrument('electric_guitar_clean');
          break;
        case 'Electric Piano':
          this.chordsView.changeInstrument('electric_piano_1');
          break;
        case 'Alto Saxophone':
          this.chordsView.changeInstrument('alto_sax');
          break;
        case 'Trumpet':
          this.chordsView.changeInstrument('trumpet');
          break;
        default:
          log.warn('unexpected value for instrument');
          break;
      }
      log.info(`instrument changed to ${setting}`);
    },
    'change #debug-logging-check': function () {
      if (this.$el.find('#debug-logging-check').is(':checked')) {
        log.setLevel('trace');
      } else {
        log.setLevel('warn');
      }
    },
  },

  initialize() {
    if (log.getLevel() < log.levels.WARN) {
      this.$el.find('#debug-logging-check').prop('checked', true);
    } else {
      this.$el.find('#debug-logging-check').prop('checked', false);
    }
  },
});

export default SidebarView;

