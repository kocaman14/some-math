import React, { useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { changeNumber } from '../features/math';
import '../App.css'

export const Page = () => {
  const { total, number } = useSelector((state) => state.math); 
  const dispatch = useDispatch();

  const factorial = useMemo(() => {
    let result = 1;
    for (let i = 1; i <= number; i++) {
      result *= i;
    }
    return result;
  }, [number]);

  return (
    <div className="page-container">
      <h1>Faktöriyel Hesaplama</h1>
      <input
        min="0"
        type="number"
        value={number}
        onChange={(e) => dispatch(changeNumber(e.target.value))}
      />
      <button onClick={() => dispatch(changeNumber(number))}>Hesapla</button>
      {total > 0 ? <span>Sonuç: {factorial}</span> : null}
    </div>
  );
}
