exports.isEmail = function (value) {
  (/^(([^<>()[\]\\.,;:\s@\']+(\.[^<>()[\]\\.,;:\s@\']+)*)|(\'.+\'))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)
  .test(value);
};

exports.slugify = function (title) {
  var i, slug, length,
      accents = {
        a: /\u00e1/g,
        e: /u00e9/g,
        i: /\u00ed/g,
        o: /\u00f3/g,
        u: /\u00fa/g,
        n: /\u00f1/g,
      };

  slug = title.toString().toLowerCase();

  for (i = 0, length = accents.length; i < length; i++) {
    slug = slug.replace(accents[i], i);
  }

  return slug
    .replace(/\s+/g, '-')         // Replace spaces with -
    .replace(/[^\w\-]+/g, '')     // Remove all non-word chars
    .replace(/\-\-+/g, '-')       // Replace multiple - with single -
    .replace(/^-+/, '')           // Trim - from start of text
    .replace(/-+$/, '');          // Trim - from end of text
};


exports.truncate = function (text, initChar, endChar) {
  text = text.substring(initChar, endChar);
  text = text.replace(/<script[^>]*>(.*?)<\/script>/, '');

  return text;
};