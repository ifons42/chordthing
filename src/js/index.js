// Libraries
import $ from 'jquery';
import 'bootstrap';
import * as log from 'loglevel';

// Custom styles
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
    chord: 'C',
  });
  const chord2 = new Chord({
    chord: 'Cmaj7',
  });
  const chord3 = new Chord({
    chord: 'C7',
  });
  const chord4 = new Chord({
    chord: 'C6',
  });
  const chord5 = new Chord({
    chord: 'Fmaj7',
  });
  const chord6 = new Chord({
    chord: 'F7',
  });
  const chord7 = new Chord({
    chord: 'G7',
  });
  const chord8 = new Chord({
    chord: 'C',
  });

  const chords = new Chords({
    model: Chord,
  }, [
    chord1, chord2, chord3, chord4, chord5,
    chord6, chord7, chord8,
  ]);

  const chordList = new ChordListView({
    el: $('#chord-list-view'),
    model: chords,
  });
  chordList.render();
});

