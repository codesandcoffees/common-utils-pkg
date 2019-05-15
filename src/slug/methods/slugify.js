/**
 * Converts a string into a slug for URL usage.
 *
 * @module SlugUtil
 * @name slugify
 * @param {String} string string to convert to slug
 * @returns {String} Returns slug version of the string.
 * @example
 *
 * SlugUtil.slugify('The quick brown fox');
 * // => 'the-quick-brown-fox'
 *
 * SlugUtil.slugify('A. more-Complicated string!..');
 * // => 'a-more-complicated-string'
 *
 * SlugUtil.slugify('wïth speciäl chærs');
 * // => 'with-special-chars'
 */

const slugify = (string) => {
  const a = 'àáäâãåăæçèéëêǵḧìíïîḿńǹñòóöôœṕŕßśșțùúüûǘẃẍÿź·/_,:;';
  const b = 'aaaaaaaaceeeeghiiiimnnnoooooprssstuuuuuwxyz------';
  const p = new RegExp(a.split('').join('|'), 'g');

  /* eslint-disable no-useless-escape */
  // https://gist.github.com/hagemann/382adfc57adbd5af078dc93feef01fe1
  return string
    .toString()
    .toLowerCase()
    .replace(/\s+/g, '-') // Replace spaces with -
    .replace(p, c => b.charAt(a.indexOf(c))) // Replace special characters
    .replace(/&/g, '-and-') // Replace & with 'and'
    .replace(/[^\w\-]+/g, '') // Remove all non-word characters
    .replace(/\-\-+/g, '-') // Replace multiple - with single -
    .replace(/^-+/, '') // Trim - from start of text
    .replace(/-+$/, ''); // Trim - from end of text
  /* eslint-enable no-useless-escape */
};


export default slugify;
