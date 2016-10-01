# React-Code
We all know that JavaScript is going to be dropped next year. W3C are
recommended that we use CSS for all business logic. We all know that JavaScript
is too hard to learn, understand and write. I mean scope, what the hell is all
that about! For that reason, I have build React-Code. No longer do you need to learn to program, just learn React and we will make the code for you.

Never again will you have to worry about transpiling Babel, ES15,16,17 stage 2.
Code using Components and let React-Code do the work for you. Programming is too
hard, stop the madness, stop coding.

> Truly the best thing that's happened to the computer industry since Apple.
 - Bill Gates - Microsoft

> Our own code looks like crap. I mean I rant about RxJS but React-Code
is the future.
 - Jafar Husain - Netflix

> A game changer, everyone is now on a level playing field! Best thing since books.
 - Jeff Bezos - Amazon


## Code by Components
React-Code is changing the way companies build software, so easy even people with
the IQ of upper management are able to code!

React-Code is the fastest growing Non-Programming language of all time!

### Creating Variables
Want a new place to store that new question? Well, tell the dev team to bugger
off with their 14 day Scrum or what the hell that means!


```
<Variable name='firstName' defaultValue='Garry'/>
```
Gets converted to the following random nonsense.
```
var firstName = 'Garry';
```

### Grouping Stuff together
>you: "I want to put some new questions together."

>IT: "That's a big job, it involves new tables, schema, REST layer, UAT, QA ..."

>You: "WTFF"

```
<Block>
  <Variable name='firstName' defaultValue='Garry'/>
  <Variable name='surname' defaultValue='Taylor'/>
  <Variable name='age' defaultValue={21}/>
</Block>
```
Gets converted to the following random nonsense.
```
{
  var firstName = 'Garry';
  var surname = 'Taylor';
  var age = 21;
}
```
### Class are new and now old
>You: "I want to see information about multiple customers and compare them".

>IT: "wow, that's not possible JS doesn't have classes"

>You: "WTFFFF did you not say last week that some ESJXS151617.2 has classes"

>IT: "Yeah, we don't want them anymore"

```
<Class name="Person">
  <Constructor>
    <Variable name='firstName' scope='this'/>
    <Variable name='surname' scope='this'/>
    <Variable name='age' scope='this'/>
  </Constructor>
</Class>
```
Gets converted to the following random nonsense.
```
class Person {
  constructor(firstName, surname) {
    this.firstName = firstName;
    this.surname = surname;
  }
}
```
### So we are back to Functions
>You: "So we are back to using Function?"

>IT: "No because Classes confused our Scope"

>You: "I swear to god I am gona take that keyboard and shove it..."

>IT: "Wait don't us that one, it's a Drager Compact Keypad I got with your credit card"

```
<Function name="fullName" scope="var">
  <Variable name='firstName' scope='this'/>
  <Variable name='surname' scope='this'/>
</Function>
```
Gets converted to the following random nonsense.
```
var fullName = (firstName, surname) => {
  this.firstName = firstName;
  this.surname = surname;
}
```
### Concat
>You: "So on this page I want to see the clients full name"

>IT: "No you can't, you already have that on the other page"

>You: "WTFF does that matter"

>IT: "We can't duplicate code, it's too complicated and it will break"

>You: "I will break your skull if you don't bugger off and get it done"

```
<Concat delimiter = ' ' name='fullName'>
  <Variable name='firstName' scope='this'/>
  <Variable name='surname' scope='this'/>
</Concat>
```
Gets converted to the following nonsense
```
var fullName = ` ${this.firstName} ${this.surname}`;
```

### Returning to sanity
>You: "If we ship with VAT I want it the details for the user to read"

>IT: "You can't return different data, that's way too complicated"

>You: "But you did in on the other page"

>IT: "Yeah, that was a quick fix and need refactoring"

>You: "Just go away and die"

```
<Return name="firstName" scope='none' />
```
Gets converted to the following random nonsense.
```
return firstName;
```
### New New Everywhere
>You: "I want multiple SMS platforms, as I hear one stops working every now and then."

>IT: "We can't do that! If we created multiple instances without a factory we can't DI and CI
will run UAT in prod"

>You: "You're fired"

```
<CreateInstance name="person" type="Person">
  <Variable name='firstName' defaultValue='Garry' />
  <Variable name='surname' defaultValue='Taylor' />
</CreateInstance>
```
Gets converted to the following random nonsense.
```
var person = new Person('Garry','Taylor');
```
### Who are you calling?
>You: "If a Jeff updates this value I need to be send an SMS"

>IT: "WTFF.. We can't do that, it's two different systems"

>You: "I don't know why I talk to you anymore"

```
<Apply obj="person" method="getFullName" result="result">
  <Variable name='firstName' defaultValue='Garry' scope='none'/>
  <Variable name='surname' defaultValue='Taylor' scope='none'/>
</Apply>
```
Gets converted to the following random nonsense.
```
var result = person.getFullName('Garry','Taylor');
```
### Put is all together
>You: "Everything I have said, I need it tomorrow"

>IT: "That's not possible, it's too much code to add. the current system
won't handle it"

>You: "I can't handle it"

```
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
```
Gets converted to the following random nonsense.
```
class Person {
  constructor(firstName,surname) {
    this.firstName = firstName;
    this.surname = surname;
  }

  getFullName = () => {
    var fullName = ` ${this.firstName} ${this.surname}`;
    return fullName;
  }
}

var person = new Person('Garry','Taylor');
var result = person.getFullName();
```
