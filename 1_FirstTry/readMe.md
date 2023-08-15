# Jest project

## 1. Create a project folder

## 2. Create package.json with `npm init`
```shell
> npm init -y
```

or
```shell
> npm init
```

and answer the questions

## 3. Install jest as devDependencies

```shell
> npm install jest --save-dev
```

## 4. Modify test-script in package.json
```json
"scripts": {
  "test":"jest"
}
```

## 5. Create test folder named ``__tests__`` 
(double underscores)

## 6. Write tests

## 7. To run tests

```shell
> npm test
```

## 7B To run only one test file
```shell
> npm test --testFile fileToBeTested.test.js
```
