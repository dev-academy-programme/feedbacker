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

Backend will return something like this from the API:

```
{
  questions: [
    {
      "designator": "1.0",
      "title": "Cohort",
      "answers": [
        "kowhai-2016",
        "weka-2016",
        "kokako-2016"
      ]
    },
    {
      "designator": "1.1",
      "title": "GitHub",
      "answers": [
        "wombat",
        "aardvark",
        "kumquat"
      ]
    },
    {
      "designator": "1.2",
      "title": "How are you?",
      "answers": [
        "Fine",
        "Not bad",
        "Pretty terrible"
      ]
    }
  ]
}
```

If `trackByDesignators` is an array, for example:

```
parseForm(rawData, {
  trackByDesignators: ['1.2']
}
``` 

the answers will look like this:

```
{
  questions: [
    {
      "designator": "1.0",
      "title": "Cohort",
      "answers": [
        { "answer": "kowhai-2016", "GitHub": "wombat" }
        { "answer": "weka-2016", "GitHub": "aardvark" }
        { "answer": "kokako-2016", "GitHub": "kumquat" }
      ]
    },
    {
      "designator": "1.1",
      "title": "GitHub",
      "answers": [
        { "answer": "wombat", "GitHub": "wombat" }
        { "answer": "aardvark", "GitHub": "aardvark" }
        { "answer": "kumquat", "GitHub": "aardvark" }
      ]
    },
    {
      "designator": "1.2",
      "title": "How are you?",
      "answers": [
        { "answer": "Fine", "GitHub": "wombat" }
        { "answer": "Not bad", "GitHub": "aardvark" }
        { "answer": "Pretty terrible", "GitHub": "aardvark" }
      ]
    }
  ]
}
```
