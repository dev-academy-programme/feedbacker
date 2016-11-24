[![Build Status](https://feedbacker-buildresults-1h6psw4lm2br8.s3.amazonaws.com/gh/dev-academy-programme/feedbacker/branches/master/8f7101bcf2854756d4cc7da15e77080f.svg)](https://feedbacker-buildresults-1h6psw4lm2br8.s3.amazonaws.com/gh/dev-academy-programme/feedbacker/branches/master/5e111ca5a3c96782485178988e0083e8.html)

# Feedbacker

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run front

# backend on localhost:3000
npm run back

# build client for production with minification
npm run build
```

Front talks to back via proxytable on the `/graphql` endpoint.

For detailed explanation on how things work, checkout the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).


# State

```
{
  feedback: {
    forms: [
      {
        title: "",
        designator: "",
        questions: [
          {
            
          }
        ]
      }
    ]
  }
}
```
