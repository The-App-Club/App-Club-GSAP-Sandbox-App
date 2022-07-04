// https://qiita.com/suin/items/3da4fb016728c024eaca#intlsegmenter

function countGrapheme(string) {
  const segmenter = new Intl.Segmenter('ja', {granularity: 'grapheme'});
  return [...segmenter.segment(string)].length;
}

export {countGrapheme};
