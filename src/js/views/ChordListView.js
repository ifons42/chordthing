/* eslint no-param-reassign: ["error", { "props": false }] */
/* eslint func-names: "off" */

import Backbone from 'backbone';

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

