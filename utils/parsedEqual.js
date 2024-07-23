// eslint-disable-next-line id-length
export default (t, first, second) =>
  t.deepEqual(JSON.parse(JSON.stringify(first)), second);
