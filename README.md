# Karma Jasmine Selenium Tutorial

![LAMBDATEST Logo](https://opengraph.githubassets.com/a252df5ff0d6935fc2722a0afe08bfbce82989b6ea153696ca551c061853cc1c/LambdaTest/karma-jasmine-sample)

## Prerequisites

1. Install [npm](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm)

```
sudo apt install npm
```

2. Install [Node.js](https://nodejs.org/en/)

```
sudo apt install nodejs
```

## Steps to Run your First Test

Step 1. Clone the Krma-Jasmine-Sample Repository.

```
git clone https://github.com/LambdaTest/karma-jasmine-sample
```

Step 2. Inside Krma-Jasmine-Sample folder, export the Lambda-test Credentials. You can get these from your automation dashboard.

<p align="center">
   <b>For Linux/macOS:</b>

```
export LT_USERNAME="YOUR_USERNAME"
export LT_ACCESS_KEY="YOUR ACCESS KEY"
```

<p align="center">
   <b>For Windows:</b>

```
set LT_USERNAME="YOUR_USERNAME"
set LT_ACCESS_KEY="YOUR ACCESS KEY"
```

Step 3. Inside Krma-Jasmine-Sample folder install necessary packages.

```
cd karma-jasmine-sample
npm i
```
### Running Tests
1. To run single Test.
```
 karma start karma.conf.js
 or 
 npm test
```
2. To run tests in Parallel.
```
karma start karma.parallelconf.js
```

###  Routing traffic through your local machine
- Set tunnel value to `true` in test capabilities
> OS specific instructions to download and setup tunnel binary can be found at the following links.
>    - [Windows](https://www.lambdatest.com/support/docs/display/TD/Local+Testing+For+Windows)
>    - [Mac](https://www.lambdatest.com/support/docs/display/TD/Local+Testing+For+MacOS)
>    - [Linux](https://www.lambdatest.com/support/docs/display/TD/Local+Testing+For+Linux)



    
### Important Note:
Some Safari & IE browsers, doesn't support automatic resolution of the URL string "localhost". Therefore if you test on URLs like "http://localhost/" or "http://localhost:8080" etc, you would get an error in these browsers. A possible solution is to use "localhost.lambdatest.com" or replace the string "localhost" with machine IP address. For example if you wanted to test "http://localhost/dashboard" or, and your machine IP is 192.168.2.6 you can instead test on "http://192.168.2.6/dashboard" or "http://localhost.lambdatest.com/dashboard".



## About LambdaTest

[LambdaTest](https://www.lambdatest.com/) is a cloud based selenium grid infrastructure that can help you run automated cross browser compatibility tests on 2000+ different browser and operating system environments. LambdaTest supports all programming languages and frameworks that are supported with Selenium, and have easy integrations with all popular CI/CD platforms. It's a perfect solution to bring your [selenium automation testing](https://www.lambdatest.com/selenium-automation) to cloud based infrastructure that not only helps you increase your test coverage over multiple desktop and mobile browsers, but also allows you to cut down your test execution time by running tests on parallel.

### Resources

##### [SeleniumHQ Documentation](http://www.seleniumhq.org/docs/)
##### [Karma Documentation](http://karma-runner.github.io/3.0/intro/how-it-works.html)


