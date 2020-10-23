import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { initiateGetResult } from '../../actions';

const Search = (props) => {
  const [term, setTerm] = useState('');

  useEffect(() => {
    props.initiateGetResult('justin');
  });

  return (
    <>
      <input value={term} onChange={(e) => setTerm(e.target.value)}></input>
    </>
  );
};

export default connect(null, { initiateGetResult })(Search);
