import localforage from 'localforage';

var local = localforage.createInstance({
  'name': 'eventsApp'
})

export const test = () => {

  local.setItem('token', '829747')
  .then(res=>{
    console.log(res);
    return local.getItem('token');
  })
  .then(res=>{
    console.log(res);
  })
  .catch(err=>{
    console.log(err);
  });

}

export default local;