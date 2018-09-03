const fs = require('fs');

fs.copyFileSync('../AdvancedProfanityFilter/dist/lib/config.js', './dist/lib/config.mjs');
fs.copyFileSync('../AdvancedProfanityFilter/dist/lib/filter.js', './dist/lib/filter.mjs');
fs.copyFileSync('../AdvancedProfanityFilter/dist/lib/helper.js', './dist/lib/helper.mjs');
fs.copyFileSync('../AdvancedProfanityFilter/dist/lib/word.js', './dist/lib/word.mjs');