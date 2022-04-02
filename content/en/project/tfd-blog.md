---
title: "A serverless blog powered by Nuxt/Content  + TailwindCSS by TFD"
token: "A serverless blog powered by Nuxt/Content  + TailwindCSS by TFD"
category: project
description: "A serverless blog powered by Nuxt/Content  + TailwindCSS by TFD"
media: https://i.imgur.com/eFmAzaH.jpg
git: https://github.com/tfd-ed/tfd-blog
by: "Chau Dara"
---
We often hear the term **vlog** on YouTube nowadays. What about **Blog**?

Blog is a website that regularly updates information concerning specific topics that people who really care and are interested in the topics in question. Blog can be a news website, personal diary, tips, DIY, etc.

So the **V** in front of the blog means **video**. We can say  that vlog is a version of blog that tells stories in video instead of writing.

You can start writing your own blog with **TFD Blog**.

## Features

This is a serverless blog powered by [@nuxt/content](https://content.nuxtjs.org/) and  [TailwindCSS](https://tailwindcss.com/)  with integration-ready with [forestry.io](https://forestry.io/) for headless CMS.

- Use [Docker](https://www.docker.com/) to containerize with [Nginx](https://www.nginx.com/) serves as a reverse proxy.
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

| Variable            | Description                              | Default                   |
|---------------------|------------------------------------------|---------------------------|
| GOOGLE_ANALYTICS_ID | Your Google Analytics UA ID (UA-XXXXX-X) |                           |
| WEB_URL             | Your blog domain                         | www.tfdevs.com            |
| FACEBOOK_URL        | Link to your Facebook page or group      |                           |
| TELEGRAM_URL        | Link to your Telegram channel or group   | https://t.me/tfdTech      |
| GITHUB_URL          | Link to your Github account              | https://github.com/tfd-ed |
| YOUTUBE_URL         | Link to your YouTube channel             |                           |
| SITE_TITLE          | Your blog title                          | TFD Blog                  |
| EMAIL               | Your blog email address                  | info@tfdevs.com           |
| YOUTUBE_CHANNEL_ID  | Your YouTube channel id                  | UCJHZ__wUxS9lgTZHMxpMJcQ  |


```bash    
$ cd tfd-blog   
$ docker-compose up -d   
````  

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
