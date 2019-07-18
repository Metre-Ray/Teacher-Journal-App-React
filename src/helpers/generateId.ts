// export function genId(): string {
//   return Math.round((Math.random() * 36 ** 12)).toString(36);
// }

module.exports =  function genId() {
  return Math.round((Math.random() * 36 ** 12)).toString(36);
}
