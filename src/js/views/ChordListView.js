/* eslint no-param-reassign: ["error", { "props": false }] */

import { View } from 'backbone';

import ChordView from './ChordView';

class ChordListView extends View {
  constructor(options) {
    options.tagName = 'ul';
    super(options);
  }

  render() {
    // Clear my element
    this.$el.empty();

    // Add chords to list
    for (let i = 0; i < this.model.length; i += 1) {
      // Create new chord view
      const chord = new ChordView({
        model: this.model.at(i),
      });

      // Add chord to list
      this.$el.append(chord.$el);
      chord.render();
    }

    return this;
  }
}

export default ChordListView;

