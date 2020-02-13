import React from 'react';
import Controls from '../components/controls/Controls';
import Face from '../components/face/Face';
import { getFace } from '../Selecter/moodSelectors';
import { useDispatch, useSelector } from 'react-redux';
import {
  drinkCoffee,
  eatSnack,
  takeNap,
  study
} from '../actions/moodActions';




const Moods = () =>  {
  const dispatch = useDispatch();
  const face = useSelector(getFace);

  return (
    <>
      <Controls>
        <button onClick={() => dispatch(drinkCoffee())}>coffee</button>
        <button onClick={() => dispatch(eatSnack())}>snacks</button>
        <button onClick={() => dispatch(takeNap())}>naps</button>
        <button onClick={() => dispatch(study())}>studies</button>
      </Controls>
      <Face emoji={face} />
    </>
  );
};

export default Moods;
