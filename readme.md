# Express Starter

[![Build Status](https://travis-ci.org/esayemm/express-starter.svg?branch=master)](https://travis-ci.org/esayemm/express-starter)

Boilerplate for starting a node express project.

##Prerequisite
Have [starter-deck-cli](https://github.com/esayemm/starter-deck-cli) installed
globally.

##Installation
```sh
sdcli save express https://github.com/esayemm/express-starter
```
<hr>
##Development
####Publish a release
Use [npm version](https://docs.npmjs.com/cli/version) and follow [semver](http://semver.org/) rules.<br>

```
npm version [ major | minor | patch ]
```

1. bumps package version
2. creates git tag
3. push tag
4. builds
5. npm publish