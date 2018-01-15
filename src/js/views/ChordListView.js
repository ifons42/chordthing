/* eslint no-param-reassign: ["error", { "props": false }] */
/* eslint func-names: "off" */
/* eslint no-loop-func: "off" */

import Backbone from 'backbone';
import * as Soundfont from 'soundfont-player';
import * as teoria from 'teoria';
// import * as log from 'loglevel';

import Chord from '../models/ChordModel';
import ChordView from './ChordView';

const ChordListView = Backbone.View.extend({
  tagName: 'div',

  events: {
    'click #add-chord': function () {
      // Create new chord
      const chord = new Chord({
        chord: 'C',
      });
      // Add chord to collection
      this.model.add(chord);
      // Re-render
      this.render();
    },
    'click #play-chords': function () {
      Soundfont.instrument(new AudioContext(), 'acoustic_guitar_nylon').then((piano) => {
        piano.play('C4');
        for (let i = 0; i < this.model.length; i += 1) {
          ((count, model) => {
            setTimeout(() => {
              // Create chord
              const chord = teoria.chord(model.get('chord'));
              // Loop through notes
              let noteNum = 0;
              for (const item of chord.notes()) {
                ((noteCount, note) => {
                  setTimeout(() => {
                    // Play note
                    piano.play(note.midi());
                  }, noteNum * 50);
                })(noteNum, item);
                noteNum += 1;
              }
            }, count * 1000);
          })(i, this.model.at(i));
        }
      });
    },
    'click #clear-chords': function () {
      // Show modal
      this.clearModal.modal('show');
    },
    'click #clear-modal-delete': function () {
      // Delete all chords
      this.model.reset();
      // Re-render
      this.render();
      // Hide modal
      this.clearModal.modal('hide');
    },
    'click #clear-modal-nvm': function () {
      // Hide modal
      this.clearModal.modal('hide');
    },
  },

  initialize() {
    // Clear all modal
    this.clearModal = this.$el.find('div#clear-modal');
    // Initialize clear modal
    this.clearModal.modal({
      show: false,
    });
  },

  render() {
    // List element
    const listEl = this.$el.find('div#chord-list');
    // Clear list
    listEl.empty();

    // Add chords to list
    for (let i = 0; i < this.model.length; i += 1) {
      // Create new chord view
      const chord = new ChordView({
        model: this.model.at(i),
        collection: this.model,
      });
      chord.index = i;

      // Add chord to list
      listEl.append(chord.$el);
      chord.render();
    }

    return this;
  },
});

export default ChordListView;

