// Libraries
import $ from 'jquery';
import 'bootstrap';
import * as log from 'loglevel';

// Styles
import '../scss/main.scss';

// Templates
import AboutModal from './templates/aboutModal';
import Sidebar from './templates/sidebar';
import Editor from './templates/editor';

import Chord from './models/ChordModel';
import Chords from './collections/ChordsCollection';
import ChordListView from './views/ChordListView';

// Set logging level
log.setLevel('trace');

$(window).ready(() => {
  // Load templates
  log.info('loading templates');
  AboutModal.load();
  Sidebar.load();
  Editor.load();

  log.info('templates loaded');


  const chord1 = new Chord({
    chord: 'Cmaj7',
  });
  const chord2 = new Chord({
    chord: 'F',
  });
  const chord3 = new Chord({
    chord: 'Bmaj7',
  });

  const chords = new Chords({
    model: Chord,
  });
  chords.add(chord1);
  chords.add(chord2);
  chords.add(chord3);

  const chordList = new ChordListView({
    el: $('#chord-list'),
    model: chords,
  });
  chordList.render();
});

