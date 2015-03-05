##Testem Babel Generator

This is a fork of [generator-mocha-testem](https://github.com/callumlocke/generator-mocha-testem) and [mocha-sinon-traceur-example](https://github.com/uxebu/mocha-sinon-traceur-example)

An easy to grok ES6 / BDD scaffold. Using:

*   gulp
*   babel (es6 transpiler)
*   testem

###Setup

####Create a project directory for the generator (until published in npm)
```
git clone git@github.com:btburton42/generator-mocha-testem-babel.git
```

####Then, from inside that project directory
```
npm install
npm link
```

####Then from inside another directory where you wish to initialize the project
```
yo mocha-testem-babel
```

####Running the scripts. 

In one terminal shell, run `gulp`, in the another shell run `testem`. Magic should happen.
