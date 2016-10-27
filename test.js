
require("babel-register")({
  // Optional ignore regex - if any filenames **do** match this regex then they
  // aren't compiled. 
  ignore: /(.css|.scss)$/
});

require('./client/assets/styles/index.css');