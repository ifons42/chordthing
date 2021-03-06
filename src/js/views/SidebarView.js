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
      const setting = this.$el.find(':selected').data('instrument');
      this.chordsView.changeInstrument(setting);
      log.info(`instrument changed to ${setting}`);
    },
    'change #debug-logging-check': function () {
      if (this.$el.find('#debug-logging-check').is(':checked')) {
        log.setLevel('trace');
      } else {
        log.setLevel('warn');
      }
    },
    'change #setting-note-delay': function () {
      const setting = this.$el.find('#setting-note-delay').val();
      this.chordsView.changeNoteDelay(setting);
      log.info(`note delay changed to ${setting}`);
    },
    'change #setting-chord-delay': function () {
      const setting = this.$el.find('#setting-chord-delay').val();
      this.chordsView.changeNoteDelay(setting);
      log.info(`chord delay changed to ${setting}`);
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

