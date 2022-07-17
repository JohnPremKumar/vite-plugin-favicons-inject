steroid-router
===========
[![npm][npm]][npm-url]
[![license][license]][license-url]
<a href="https://npmcharts.com/compare/steroid-router?minimal=true">
  <img src="https://img.shields.io/npm/dm/steroid-router.svg">
</a>
<a href="https://img.shields.io/bundlephobia/minzip/steroid-router">
  <img src="https://img.shields.io/bundlephobia/minzip/steroid-router">
</a>
<br>

A simple client side router for vanilla JS applications.

Below link has the barebone implementation of client side routing using steroid-router
<https://steroid-router.surge.sh>

Install
-------

```bash
$ npm install steroid-router
```

Usage
-----

### As ES6 Module with bundlers like webpack, etc. ###

```javascript
import router from 'steroid-router'

// initialize route handlers
// support all kind of express js like route syntax
router(<routes>, <options>);
```


### As legacy javascript files using script tags. ###
```javascript
<script src="https://cdn.jsdelivr.net/npm/steroid-router@latest/dist/steroid-router.min.js"></script>
...
<script>
router(<routes>, <options>);
</script>
```


Parameter
---------

 - `routes` - array of route object.
 - `options` (optional) - options object (refer https://www.npmjs.com/package/path-to-regexp#usage for all available options).

 For the given location - `example.com/course/demo`

```javascript

function courseRoute (data) {
 console.log(data.params.courseName);
 // demo
 console.log(JSON.stringify(data));
 // {"matched":["/course/demo/","demo"],"params":{"courseName":"demo"}, "state": {}}
 // further route
}
....
// other route handlers
....

let routeHandler = router([{
    match: '/course/:courseName?', // route with optional courseName route parameter
    action: courseRoute
  }, {
    match: '/merchandise/:category', // route with mandatory category route parameter
    action: merchandiseRoute
  }, {
    match: '/', // a fixed route
    action: indexRoute
  }, {
    match: '(.*)', // fallback to catch all non-matched routes - used for 404 redirects
    action: routeNotFound
  }]);

// Return object with function name navigateTo

```

 - `match` - matches the given route
 - `action` - a function called with route match data when route match occurs

### Route match data
```javascript
 {"matched":["/course/demo/","demo"],"params":{"courseName":"demo"}, "state": {}}
 ```

 - `matched` - matched path regex array. `Eg: ["/course/demo/","demo"]`
 - `params` - params object of the route. if any route parameter is specified. `Eg: {"courseName":"demo"}`
 - `state` - state object of the route. if any state is passed from the previous route

Note: Always first matching route will be used.

Navigation
----------
steroid-router supports both declarative and imperative navigation approach

### Declarative navigation
Just add the class `steroid-route` to the anchor tag `<a>` to make it as steroid route.
```html
<a class="steroid-route" href="/dashboard">Dashboard</a>
```
where,
`href` if the route path.

Additonally, optinal navigation parameters can be passed using `data-*` attributes like below:
```html
<a class="steroid-route" href="/course" data-withstack="true" data-withstate='{"id":2}' data-withtitle="course" data-withaction="true">Course</a>
```
###  Imperative navigation
Router function returns object with navigation menthod named navigateTo()
```javascript
routeHandler.navigateTo(url, withStack?, state?, title?, action?);
```

 - `url` - the client side route to navigate to
 - `withStack` (optional) - whether the current route route need to be stacked. `default: false`
 - `state` (optional) - state object to pass to the route
 - `title` (optional) - Title of the route - not widely adopted (Refer: https://github.com/whatwg/html/issues/2174 for more details)
 - `action` (optional) - Whether route action should be triggered - useful for post navigation url updates. `default: true`

Server
-------
Make sure your backend server is configured to serve the respective html files where the routes are defined.

For more detailed information about different types of routing refer the article below:
https://johnpremkumar.medium.com/routing-a-delusion-among-developers-9c34e6fddd47


Used By
-------

<a href="https://www.hackerkid.org/" target="_blank">
  <img src="https://www.hackerkid.org/images/favicons/favicon.ico" alt="HackerKidLogo">
  <p>HackerKid</p>
</a>


License
-------

MIT



[npm]: https://img.shields.io/npm/v/steroid-router.svg
[npm-url]: https://npmjs.com/package/steroid-router
[license]: https://img.shields.io/npm/l/steroid-router?no-cache
[license-url]: https://github.com/JohnPremKumar/steroid-router/blob/main/LICENCE
