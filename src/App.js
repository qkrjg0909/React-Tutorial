import React , { Component} from 'react';
//import logo from './logo.svg';
import Customer from './components/Customer'
import './App.css';

const customers =
  [
    {
       'id'      : 1
      ,'image'   : 'https://placeimg.com/64/64/1'
      ,'name'    : '박근영'
      ,'birthday': '911115'
      ,'gender'  : '남자'
      ,'job'     : '와토'
    },
    {
       'id'      : 2
      ,'image'   : 'https://placeimg.com/64/64/2'
      ,'name'    : '박유라'
      ,'birthday': '941018'
      ,'gender'  : '여자'
      ,'job'     : 'Sexy Furniture Designer'
    },
    {
       'id'      : 3
      ,'image'   : 'https://placeimg.com/64/64/3'
      ,'name'    : '안종순'
      ,'birthday': '91xxxx'
      ,'gender'  : '남자'
      ,'job'     : '와토'
    },
  ]


function App(){
  return (
    <div>
      {
        customers.map(c => {
          return (
            <Customer
              key      = {c.id}
              image    = {c.image}
              id       = {c.id}
              name     = {c.name}
              birthday = {c.birthday}
              gender   = {c.gender}
              job      = {c.job}
            />
          );
        })
      }
    </div>
  );
}

export default App;
