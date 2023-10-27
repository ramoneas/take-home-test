<h1 align="center"> Take Home Test </h1>

## Description.
**This is a mono repository that contains an API and Web page, the objective of this app is to create a git commit history in simple words this project tracks every commit pushed to the master branch.**

## :construction: Web Development Tools.
- **The API was develop in <a href= "https://docs.nestjs.com">NestJS</a>.**
- **The Web page was develop in <a href="https://vitejs.dev/guide/">React.js built with Vite.js</a>.**
- **For the commit information extraction, the <a href="https://docs.github.com/en/rest/commits/commits?apiVersion=2022-11-28">GitHub API</a> was used.**

## :hammer:Overview of the functionality.
- **`Functionality`: Can obtain the commit message.**
- **`Functionality`: Can obtain the commit author and his avatar.**
- **`Functionality`: Can redirect to the specific commit details.**

## 📁 How to access to the project.
**To access to the project, you have to clone the project hosted in this repository.**

**Open your computer terminal in a directory of your preference and run the following command.**
```bash
git clone https://github.com/ramoneas/take-home-test.git
```
**If this command doesn't work try with the others options in the `<>Code` button.**


## 🛠️ Open and run the project API.

- **After cloned, it's necessary to access to the `tht-api` project directory, using the following command.**
```bash
cd tht-api
```

- **Once we are inside the tht-api folder, we can start the project. Run the API server with the following command.**
```bash
npm run start:dev
```

## 🛠️ Open and run the project Web Page (Must have the API running to do this step).

- **After running the API server, it's necessary to access to the `tht-web` project directory, using the following command.**
```bash
cd tht-web
```
**(if you are locate inside of tht-api file, do this.)**
```bash
cd ..
cd tht-web
```
- **Once we are inside the tht-web folder, we can start the project. Start the Web page with the following command.**
```bash
npm run dev
```

## Swagger Documentation.
**In this project there's an API documentation endpoint built with Swagger, once the server is up and running it will be able to find in the following URL.**
```bash
http://localhost:5000/documentation
```

## Expected result.
**If you follow all the steps correctly, this will be your view**
![image](https://github.com/ramoneas/take-home-test/assets/61937309/5c8ad2f3-9b48-4b44-b411-0afab9e1e62c)

**(After clicking on the Local URL link, MUST HAVE THE API RUNNING BEFORE CLICKING)**
![WhatsApp Image 2023-10-26 at 22 24 48_200fb967](https://github.com/ramoneas/take-home-test/assets/61937309/843e882d-403e-4ddb-b640-e2ba083d4fe2)


## Licencia
**Copyright (c) 2023 <a href="https://github.com/ramoneas">Ramón Alvarez</a>**

**This project is [MIT](https://choosealicense.com/licenses/mit/) licensed.**
