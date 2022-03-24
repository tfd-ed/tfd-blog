<h1>A serverless blog powered by Nuxt/Content  + TailwindCSS by TFD
  <a  
    href="https://nestjs.com/"  
    target="blank"  
  >  
<br/>  
<br/> 
    <img  
      src="https://www.docker.com/wp-content/uploads/2022/03/horizontal-logo-monochromatic-white.png"  
      width="180"  
      alt="Nest Logo"  
    /> 
    <img  
      src="https://content.nuxtjs.org/logo-light.svg"  
      width="220"  
      alt="Nest Logo"  
    />  
<img  
      src="https://camo.githubusercontent.com/53b9876cd8e38928387c6824043b0e2772b15b1bfdb7f42d0864216abbf3dfe8/68747470733a2f2f7265666163746f72696e6775692e6e7963332e63646e2e6469676974616c6f6365616e7370616365732e636f6d2f7461696c77696e642d6c6f676f2e737667"  
      width="200"  
      alt="Nest Logo"  
    />  

  </a>  
</h1>

<p align="center">  
<img src="https://img.shields.io/badge/docker-%230db7ed.svg?style=for-the-badge&logo=docker&logoColor=white" width="75">
<img src="https://img.shields.io/badge/node.js-%2343853D.svg?style=for-the-badge&logo=node.js&logoColor=white" width="80">  
<img src="https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E" width="100">  
<img src="https://img.shields.io/badge/ESLint-4B3263?style=for-the-badge&logo=eslint&logoColor=white" width="80">  
<img src="https://img.shields.io/badge/Nuxt-black?style=for-the-badge&logo=nuxt.js&logoColor=white" width="70">  
<img src="https://img.shields.io/badge/tailwindcss-%2338B2AC.svg?style=for-the-badge&logo=tailwind-css&logoColor=white" width="110">
<img src="https://img.shields.io/badge/-jest-%23C21325?style=for-the-badge&logo=jest&logoColor=white" width="60">  
<br/>
<a href="https://app.netlify.com/sites/relaxed-neumann-d28ee3/deploys"><img src="https://api.netlify.com/api/v1/badges/1f884128-722a-4ae3-bc04-8bf55bc27cd3/deploy-status"/></a>
<a href="https://www.npmjs.com/package/nuxt" target="_blank"><img src="https://badgen.net/npm/v/nuxt" alt="Version" /></a>  
<a href="https://www.gnu.org/licenses/gpl-3.0" target="_blank"><img src="https://img.shields.io/badge/License-GPLv3-blue.svg" alt="Package License" /></a>  
<img alt="YouTube Channel Subscribers" src="https://img.shields.io/youtube/channel/subscribers/UCJHZ__wUxS9lgTZHMxpMJcQ?style=social">  
<br/>   
</p>

## Features

This is a serverless blog powered by [@nuxt/content](https://content.nuxtjs.org/) and  [TailwindCSS](https://tailwindcss.com/)  with integration-ready with [forestry.io](https://forestry.io/) for headless CMS.

- Use [Docker](https://www.docker.com/) to containerize with [NginX](https://www.nginx.com/) serves as a reverse proxy.
-  Integrated [nuxt/google-analytics](https://google-analytics.nuxtjs.org/) with easy web measurement.
- Preconfigured [daisyui](https://daisyui.com/) tailwind components with highly customizable interactive components
- Integrated [nuxt-img](https://image.nuxtjs.org/components/nuxt-img/) to replace vanilla  ``<img>`` HTML tag for better image optimization with [Netlify](https://www.netlify.com/)
- Integrated [@nuxtjs/moment](https://www.npmjs.com/package/@nuxtjs/moment) for time formatting
- Smooth configurable page, layout transition at ``@/assets/css/main``
- Integrated [@babel/eslint-parser, prettier](https://www.npmjs.com/package/@babel/eslint-parser) for codes' rules & styles checking and formatting

## Demo
[Official TFD Blog](https://tfdevs.com)

## Setup Guide
### With Docker (Recommended)
**Clone** or **Fork** this git repository to your Github account.
```bash  
$ git clone https://github.com/tfd-ed/tfd-blog  
````  
Create **.env** file from **.env.example** and replace **environment variables** with your owns.

| Variable  | Description  | Default                                          |  
|---|---|--------------------------------------------------|
| GOOGLE_ANALYTICS_ID  |  Your Google Analytics UA ID (UA-XXXXX-X) |                                                  | 
|  WEB_URL |  Your blog domain | https://www.tfdevs.com                           | 
|  FACEBOOK_URL |  Link to your Facebook page or group | https://www.facebook.com/teachingfordevelopment  | 
|  TELEGRAM_URL | Link to your Telegram channel or group  | https://t.me/tfdTech                             | 
|  GITHUB_URL | Link to your Github account  | https://github.com/tfd-ed                        | 
| YOUTUBE_URL  |  Link to your YouTube channel | https://www.youtube.com/c/TeachingForDevelopment | 
|  SITE_TITLE | Your blog title  | TFD Blog                                         | 
|  EMAIL |  Your blog email address | info@tfdevs.com                                  | 
| YOUTUBE_CHANNEL_ID | Your YouTube channel id | UCJHZ__wUxS9lgTZHMxpMJcQ                                                 |

```bash    
$ cd tfd-blog   
$ docker-compose up -d   
````  
Visit http://localhost
### Without Docker
Make sure [NodeJS](https://nodejs.dev/) version 16.4.0+ is installed in your machine.
```bash      
$ yarn install  
$ yarn dev  
````  
Visit http://localhost:3000/

### Production
```bash  
# generate static project  
$ yarn generate  
$ yarn start  
```  

## Managing Content

All contents are located in `content/` directory where you can see the structure.

## Donation

Kindly donate to the following bank account (Cambodia) if you want to support our works.  
<a href="https://imgur.com/fEjLJ0E"><img src="https://i.imgur.com/fEjLJ0E.jpg" title="source: imgur.com" width="350"  /></a> 
