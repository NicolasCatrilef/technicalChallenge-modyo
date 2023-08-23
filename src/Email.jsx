import React from 'react'

async function obtenerValor(loadData) {
  const response = await loadData()
  return response;
}


const Email = ({dataVersion, loadData}) => {

  // const matias = Promise.resolve(loadData());
  let data = matias.then(value => {
    console.log(value); // 👉️ "bobbyhadz.com"
    data = value;
    return value; 

  }).catch(err => {
    console.log(err);
  });


  // const response = loadData().then((val) => {return (<p>{val}</p>) });
  // const response1 = loadData()

  // const data = await obtenerValor(loadData);

  console.log('matias', matias);
  // console.log('response1',response1);
  // console.log('data',data);
  // console.log(loadData);
  console.log('data ::: ', data);

  

  return (
    <>    
      <p>Tan Tan!! = {{matias | async}}</p>
    </>
  )
}

export default Email;