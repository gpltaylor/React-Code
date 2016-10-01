import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Variable from './react-code/variable';
import Block from './react-code/block';
import Class from './react-code/class';
import Constructor from './react-code/constructor';
import Function from './react-code/function';
import Concat from './react-code/concat';
import Return from './react-code/return';
import CreateInstance from './react-code/createinstance'
import Apply from './react-code/apply';

class App extends Component {
  render() {
    return (
<div className="App">
  <div className="App-header">
    <img src={logo} className="App-logo" alt="logo" />
    <h2>Welcome to React Code!</h2>
  </div>

  <p className="App-intro">
  Are you sick of writing JavaScript code, but you know React
  Components are the future? Welcome to React-Code, the only way to
  write code using Components!
  </p>

<div className="row">
  <h1>JS Block and Variables</h1>
  <Block>
    <Variable name='firstName' defaultValue='Garry'/>
    <Variable name='surname' defaultValue='Taylor'/>
    <Variable name='age' defaultValue={21}/>
  </Block>
</div>

<div className="row">
  <h2>Class</h2>
  <Class name="Person">
    <Constructor>
      <Variable name='firstName' scope='this'/>
      <Variable name='surname' scope='this'/>
      <Variable name='age' scope='this'/>
    </Constructor>
  </Class>
</div>

<div className="row">
  <h2>Functions</h2>
  <p>Creating functions is such a pain, what the hell is a Fat Arrow,
  I've been on a diet, can't I have a thin one?</p>
  <Function name="fullName" scope="var">
    <Variable name='firstName' scope='this'/>
    <Variable name='surname' scope='this'/>
  </Function>
</div>
<div className="row">
  <h2>Concat</h2>
  <p>My Cat went to the back door, I got up and opened it, the cat looked
  up, smiled, and walks back into the living room!
  I'd been ConCatinated.</p>
  <Concat delimiter = ' ' name='fullName'>
    <Variable name='firstName' scope='this'/>
    <Variable name='surname' scope='this'/>
  </Concat>
</div>
<div className="row">
  <h2>Return free my pretty</h2>
  <p>When I was young, I had the world to discover,
  I want to return to that; wait a minute... I had no money and 15 years
  of bad education to get through.</p>
  <Return name="firstName" scope='none' />
</div>

<div className="row">
  <h2>Create Instance</h2>
  <p>If I type "new" one more time, I swear I'm gona make a
  Factory, then you'll be sorry!</p>
  <CreateInstance name="person" type="Person">
    <Variable name='firstName' defaultValue='Garry' />
    <Variable name='surname' defaultValue='Taylor' />
  </CreateInstance>
</div>

<div className="row">
  <h2>Calling Functions</h2>
  <p>I had a little function, arrowed and fat, that needing calling and
  get the results back.</p>
  <Apply obj="person" method="getFullName" result="result">
    <Variable name='firstName' defaultValue='Garry' scope='none'/>
    <Variable name='surname' defaultValue='Taylor' scope='none'/>
  </Apply>
</div>

<div className="row">
  <h2>Putting it together</h2>
  <p>React-Code works best when we put it all together.</p>

  <Class name="Person">
    <Constructor>
      <Variable name='firstName' scope='this'/>
      <Variable name='surname' scope='this'/>
    </Constructor>

    <Function name="getFullName" scope="none">
      <Concat delimiter = ' ' name='fullName'>
        <Variable name='firstName' scope='this'/>
        <Variable name='surname' scope='this'/>
      </Concat>
      <Return name="fullName" scope='none' />
    </Function>
  </Class>

  <CreateInstance name="person" type="Person" delimiter=",">
    <Variable name='firstName' defaultValue='Garry' />
    <Variable name='surname' defaultValue='Taylor' />
  </CreateInstance>

  <Apply obj="person" method="getFullName" result="result" />
</div>
</div>
    );
  }
}

export default App;
