import React from 'react';
import Loader from 'react-loader-spinner';
import { useSelector } from 'react-redux';
function Spin() {
  const { loading } = useSelector(({ loaderComments }) => loaderComments);
  console.log(loading);
  return (
    <div className="loader-styles">
      <Loader type="TailSpin" color="#00BFFF" height={100} width={100} visible={loading} />
    </div>
  );
}

export default Spin;
