# sample_protractor_wait
Just a sample to wait for client variable change in protractor@3.0.0

# how to run
## install protractor
```bash
npm -g install protractor
# update webdriver
webdriver-manager update
```
## install local packages
```bash
npm install 
```
## run webdriver in a second terminal
```bash
webdriver-manager start
```

## run the tests
```bash
protractor wait_sample/conf.js
protractor size_sample/conf.js
```

## sources
I found the information at http://docsplendid.com/archives/209
