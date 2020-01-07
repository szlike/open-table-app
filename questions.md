**How long did you spend on the coding test?** <br /> 

Around five hours

**What would you add to your solution if you had more time?** <br />

Using keystroke (keyup or keydown) instead of button to trigger search and refine action. Will add pagination and mouse-scroll to load more result in case responses are huge. These can improve performance.

**If you didn't spend much time on the coding test then use this as an opportunity to explain what you would add.** <br />

I will add  <br />

**What was the most useful feature that was added to the latest version of your chosen language? Please include a snippet of code that shows how you've used it. ** <br />

I like how Template literals (${}) improve code cleaness and tideness.

spread operator (...) is not intutive to understand at the begining but it helps creating boilplate functions and classes.

Arrow function provide this binding which produce a much simplier structre and we can get rid of that=this

for example: <br />
```
function displayFancySentences(who, what, how){
  return `${who} and Peter ${what} ${how}`
}
```
```
function foo(a,b,c){ 
  console.log(`a=${a}, b=${b}, c=${c}`)
} 
let data = [1, 2, 3];

foo( ...data); // a=5, b=15, c=2
```
```
var foo = function( a, b ) { return a * b;}
V.S.
let bar = ( a, b ) => a * b;
```
**How would you track down a performance issue in production? Have you ever had to do this?** <br />






**How would you improve the API that you just used?** <br />

**Please describe yourself using JSON.** <br />
