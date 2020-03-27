// This file is automatically compiled by Webpack, along with any other files
// present in this directory. You're encouraged to place your actual application logic in
// a relevant structure within app/javascript and only use these pack files to reference
// that code so it'll be compiled.

require("@rails/ujs").start()
require("turbolinks").start()
require("@rails/activestorage").start()
require("channels")


// Uncomment to copy all static images under ../images to the output folder and reference
// them with the image_pack_tag helper in views (e.g <%= image_pack_tag 'rails.png' %>)
// or the `imagePath` JavaScript helper below.
//
// const images = require.context('../images', true)
// const imagePath = (name) => images(name, true)
// Shannon entropy

  // entropy.js MIT License © 2014 James Abney http://github.com/jabney
  // ES6 portation MIT License © 2017 Peter Seprus http://github.com/ppseprus

  // Calculate the Shannon entropy of a string in bits per symbol.
  (function (shannon) {
    'use strict';

    // Create an array of character frequencies.
    const getFrequencies = str => {
      let dict = new Set(str);
      return [...dict].map(chr => {
        return str.match(new RegExp(chr, 'g')).length;
      });
    };

    // Measure the entropy of a string in bits per symbol.
    shannon.entropy = str => getFrequencies(str)
      .reduce((sum, frequency) => {
        let p = frequency / str.length;
        return sum - (p * Math.log(p) / Math.log(2));
      }, 0);

    // Measure the entropy of a string in total bits.
    shannon.bits = str => shannon.entropy(str) * str.length;

    // Log the entropy of a string to the console.
    shannon.log = str => console.log(`Entropy of "${str}" in bits per symbol:`, shannon.entropy(str));

  })(window.shannon = window.shannon || Object.create(null));
