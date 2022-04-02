---  
title: "សរសេរគេហទំព័រ ប្លក់(Blog) ដោយ មិនត្រូវការ Server តាមរយៈ TFD Blog  ជាមួយបច្ចេកវិទ្យា Nuxt/Content  នឹង TailwindCSS"
token: "A serverless blog powered by Nuxt/Content  + TailwindCSS by TFD"
category: project  
description: "សរសេរគេហទំព័រ ប្លក់(Blog) ដោយ មិនត្រូវការ Server តាមរយៈ TFD Blog  ជាមួយបច្ចេកវិទ្យា​ Nuxt/Content  នឹង TailwindCSS"  
media: https://i.imgur.com/eFmAzaH.jpg
git: https://github.com/tfd-ed/tfd-blog  
by: "ចៅ ដារ៉ា"
---
យើងតែងតែឮពាក្យ **vlog** នៅលើ YouTube នាពេលបច្ចុប្បន្ននេះ។ ចុះ **Blog** វិញ?

Blogគឺជាគេហទំព័រដែលធ្វើបច្ចុប្បន្នភាពជាប្រចាំនូវព័ត៌មានទាក់ទងនឹងប្រធានបទជាក់លាក់ដែលមានមនុស្សយកចិត្តទុកដាក់ និងចាប់អារម្មណ៍លើប្រធានបទទាំងនោះ។ Blog អាចជាគេហទំព័រព័ត៌មាន កំណត់ហេតុប្រចាំថ្ងៃ គន្លឹះ DIY ជាដើម។

ដូច្នេះ **V** នៅពីមុខប្លក់មានន័យថា **វីដេអូ** ។ យើងអាចនិយាយបានថា **vlog** គឺជា **Blog** ដែលប្រាប់រឿងរ៉ាវនៅក្នុងវីដេអូជំនួសឱ្យការសរសេរ។

អ្នកអាចចាប់ផ្តើមសរសេរ Blog ផ្ទាល់ខ្លួនរបស់អ្នកជាមួយ **TFD Blog** ។

## លក្ខណៈពិសេស

នេះគឺជាគេហទំព័របែបប្លក់ (Blog) មិនត្រូវការ server ដំណើរការដោយ [@nuxt/content](https://content.nuxtjs.org/) នឹង  [TailwindCSS](https://tailwindcss.com/)  អាចភ្ជាប់ជាមួយ [forestry.io](https://forestry.io/) ដើម្បីគ្រប់គ្រងមាតិការ។
- ប្រើ [Docker](https://www.docker.com/) ដើម្បីដាក់​ អ្វីគ្រប់យ៉ាងដែលទ្រទ្រង់គេហទំព័រនេះ ឲ្យនេះមួយដុំដោយឡែក ហើយប្រើ  [NginX](https://www.nginx.com/) ជា ប្រូកស៊ីបញ្ច្រាស (Reverse Proxy)។
- រួមបញ្ចូល [nuxt/google-analytics](https://google-analytics.nuxtjs.org/) ជាមួយនឹងការវិភាគគេហទំព័រងាយស្រួល.
-  រួមបញ្ចូល [daisyui](https://daisyui.com/)​ ជាសមាសធាតុ tailwind ជាមួយនឹងសមាសធាតុអន្តរកម្មដែលអាចប្ដូរតាមបំណងបានខ្ពស់។
- រួមបញ្ចូល [nuxt-img](https://image.nuxtjs.org/components/nuxt-img/)ដើម្បីជំនួស  ``<img>`` ស្លាក HTML សម្រាប់បង្កើនប្រសិទ្ធភាពរូបភាពកាន់តែប្រសើរជាមួយ [Netlify](https://www.netlify.com/)
- រួមបញ្ចូល [@nuxtjs/moment](https://www.npmjs.com/package/@nuxtjs/moment) សម្រាប់ការកំណត់ពេលវេលា
- រួមបញ្ចូល [@babel/eslint-parser, prettier](https://www.npmjs.com/package/@babel/eslint-parser) សម្រាប់ការត្រួតពិនិត្យ និងទម្រង់កូដរបស់កូដ

## បទបង្ហាញ
[គេហទំព័រផ្លូវការបស់ TFD ](https://tfdevs.com)

## របៀបដំឡើង
### ជាមួយ Docker (ណែនាំឲ្យយករបៀបនេះ)
**Clone** រឺ **Fork** ឃ្លាំងកូឌនេះ ទៅកាន់គណនី Github របស់អ្នក.
```bash 
$ git clone https://github.com/tfd-ed/tfd-blog 
```` 

បង្កើតឯកសារថ្មីមួយឈ្មោះ **.env** ពីឯកសារឈ្មោះ **.env.example** ហើយ ជំនួស **អថេរ** ទាំងអស់ជាមួយរបស់អ្នក.

| អថេរ                | ពណ៌នា                                          | លំនាំដើម                  |
|---------------------|------------------------------------------------|---------------------------|
| GOOGLE_ANALYTICS_ID | Google Analytics UA ID របស់អ្នក (UA-XXXXX-X)   |                           |
| WEB_URL             | ដែនប្លុករបស់អ្នក។                              | https://www.tfdevs.com    |
| FACEBOOK_URL        | តំណរភ្ជាប់ទៅកាន់ទំព័រ Facebook ឬក្រុមរបស់អ្នក។ |                           |
| TELEGRAM_URL        | តំណរភ្ជាប់ទៅបណ្តាញ Telegram ឬក្រុមរបស់អ្នក។    | https://t.me/tfdTech      |
| GITHUB_URL          | តំណរភ្ជាប់ទៅគណនី Github របស់អ្នក។              | https://github.com/tfd-ed |
| YOUTUBE_URL         | តំណរភ្ជាប់ទៅឆានែល YouTube របស់អ្នក។            |                           |
| SITE_TITLE          | ចំណងជើងប្លុករបស់អ្នក។                          | TFD Blog                  |
| EMAIL               | អាសយដ្ឋានអ៊ីមែលប្លុករបស់អ្នក។                  | info@tfdevs.com           |
| YOUTUBE_CHANNEL_ID  | លេខសម្គាល់ប៉ុស្តិ៍ YouTube របស់អ្នក។           | UCJHZ__wUxS9lgTZHMxpMJcQ  |



បន្ទាប់មកត្រូវប្រើប្រាស់ បទបញ្ជារដូចខាងក្រោម៖

```bash 
$ cd tfd-blog 
$ docker-compose up -d 
````   
ចូលទៅកាន់ http://localhost
### មិនប្រើ Docker
ត្រូវច្បាស់ថា [NodeJS](https://nodejs.dev/) ជំនាន់ ១៦.៤.០ ឡើងទៅ ត្រូវបានដំឡើងនៅក្នុងម៉ាស៊ីនរបស់អ្នក។

```bash 
$ yarn install 
$ yarn dev 
```` 

ចូលទៅកាន់ http://localhost:3000/

### ត្រៀមប្រើជាផ្លូវការ
```bash 
# បង្កើតគម្រោងឋិតិវន្ត 
$ yarn generate 
$ yarn start 
```   
## ការគ្រប់គ្រងមាតិកា

មាតិកាទាំងអស់មានទីតាំងនៅក្នុងថត `content/` ដែលអ្នកអាចមើលឃើញរចនាសម្ព័ន្ធ។
