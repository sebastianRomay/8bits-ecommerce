import { useState } from 'react';

const Count = ({fn, useState, texto}) => {
  return (
    <>
        <button className='btn btn-success' onClick={fn}>{texto}</button>
    </>
  ) 
};

export default Count;
