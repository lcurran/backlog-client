import Ember from 'ember';

export function donePercent(params) {
  let done = 0;
  let total = params.get('length');
  params.forEach((lib) => {
    if (lib.game.done === true) done+=1;
  })
  let percent = (done/total)*100
  return percent +'%';
}

export default Ember.Helper.helper(donePercent);
