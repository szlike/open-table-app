**How long did you spend on the coding test?** <br /> 

Around five hours

**What would you add to your solution if you had more time?** <br />

add debounce method to keystroke onChange method. Will add pagination and mouse-scroll to load more result in case responses are huge. These can improve performance.

**If you didn't spend much time on the coding test then use this as an opportunity to explain what you would add.**

I will write unit tests to validate and verify each component I create, then some integration test to test if they are correctly communicate with its parent/container component. Write more tests to cover edge cases, such as refreshing page, different procedures to use it, offline testing as well.


**What was the most useful feature that was added to the latest version of your chosen language? Please include a snippet of code that shows how you've used it.** <br />

I like how Template literals (${}) improve code cleaness and tideness.

spread operator (...) is not intutive to understand at the begining but it helps creating boilplate functions and classes.

Arrow function provide this binding which produce a much simplier structre and we can get rid of that=this

for example: <br />
```
function formADynamicString(Name, Subject, When){
  return `${Name} like to ${Do} ${when}`
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
Using arrow function in react class method can prevent using function.bind(this)
functionName = (parameters) => {
    ....code ...
}
V.S
constructor(){
  functionName.bind(this)
}

```
**How would you track down a performance issue in production? Have you ever had to do this?** <br />

1. open network tab under chrome developer tool and check if too many image loading, or a single call is blocking entire app.
2. chrome developer tool performance tab provide tools to profile web page.
3. Use chrome developer tool memory tab to meature memory usage.


**Please describe yourself using JSON.** <br />

JSON is popular data structure that heavily used in RESTFUl and even NOSQL.
There are some nice libraries providing deepMerge or deepEqual function which improves our work efficiency.
Writing script to scan, modify and construct massive JSON files.
