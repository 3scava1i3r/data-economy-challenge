import React from 'react'

function Vote() {
  return (
    <div className='vote'>
      <h2>Vote</h2>
      <div className='vote__btn'><a class="waves-effect waves-light btn"><i class="material-icons right">cloud</i>Aam Aadmi Party (AAP)</a></div>
      <div className='vote__btn'><a class="waves-effect waves-light btn"><i class="material-icons right">cloud</i>Bharatiya Janata Party (BJP)</a></div>
      <div className='vote__btn'><a class="waves-effect waves-light btn"><i class="material-icons right">cloud</i>Bahujan Samaj Party (BSP)</a></div>
      <div className='vote__btn'><a class="waves-effect waves-light btn"><i class="material-icons right">cloud</i> Communist Party of India (CPI)</a></div>
      <div className='vote__btn'><a class="waves-effect waves-light btn"><i class="material-icons right">cloud</i>Indian National Congress (INC)</a></div>
      <div className='vote__btn'><a class="waves-effect waves-light btn"><i class="material-icons right">cloud</i>None of the above (NOTA)</a></div>
      <div className='vote__btn'><a class="waves-effect waves-light #ff80ab pink accent-1 btn"><i class="material-icons right">cloud</i>VOTE</a></div>
    </div>
   
  )
}

export default Vote
