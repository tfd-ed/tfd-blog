---  
title: "កម្មវិធីធ្វើត្រាប់តាម ចរាចរណ៍នៅផ្លូវប្រសព្វ ដោយប្រើគណិត នឹង ភាសាប្រូក្រាម C/C++"
token: "Road Intersection Simulation and Visualization"
category: programming  
description: "កម្មវិធីធ្វើត្រាប់តាម ចរាចរណ៍នៅផ្លូវប្រសព្វ​ដែល​មាន​សមត្ថភាព​បង្កើត​យានជំនិះ​ដែល​មក​ដល់​ក្នុង​អត្រា​ដែល​អាច​គ្រប់​គ្រង​ខុសៗ​គ្នា។"  
media: https://i.imgur.com/YgaJFP9.png  
git: https://github.com/KimangKhenng/Traffic-SImulation-and-Visualization  
by: "ចៅ ដារ៉ា"
---  

ខ្ញុំបានសម្រេចចិត្តបង្ហាញកូដគំរោងនេះជាសាធារណៈនៅក្រោម GPLv3 (អាជ្ញាប័ណ្ណសាធារណៈទូទៅរបស់ GNU, កំណែ 3) បន្ទាប់ពីខ្ញុំបានបញ្ចប់ការសិក្សាពីសាកលវិទ្យាល័យ។

នេះ​ជា​កម្មវិធីធ្វើត្រាប់តាមចរាចរណ៍នៅផ្លូវប្រសព្វ​ដែល​មាន​សមត្ថភាព​បង្កើត​យានជំនិះ​ដែល​មក​ដល់​ក្នុង​អត្រា​អាច​គ្រប់​គ្រង​ខុសៗ​គ្នា។

ឥរិយាបថរថយន្តអាចត្រូវបានផ្លាស់ប្តូរក្នុងពេលវេលាជាក់ស្តែងនៅក្នុងរបៀបដូចខាងក្រោម៖

- គោរព​ភ្លើង​សញ្ញា​ចរាចរណ៍
- មិន​គោរព​ច្បាប់​ចរាចរណ៍​
- មើលអ្នកនៅ​មិន​ឃើញ​ឬ​អត់
  ## បទបង្ហាញ

<div class="video-container">  
  <iframe width="560" height="315" src="https://www.youtube.com/embed/yKl4c4eQUy8" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>  
</div>  
<div class="video-container">  
  <iframe width="560" height="315" src="https://www.youtube.com/embed/r1cmzhc8LH8" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>  
</div>  

## ប្រព័ន្ធប្រតិបត្តិការណ៍ដែលបានសាកល្បង
ខ្ញុំបានសាកល្បងដំណើការប្រូក្រាមនេះលើប្រព័ន្ធខាងក្រោម៖

* Windows  10 20H2 19042
* macOS  Big Sur 11.2.1
* Ubuntu 20.04.2 LTS

##  របៀបដំឡើង
#### ទាញយកកូដតាមរយៈ Git
```bash 
$ git  clone  https://github.com/KimangKhenng/Traffic-SImulation-and-Visualization.git 
``` 
កម្មវិធីនេះ  ត្រូវឲ្យមាន  [Qt  ជំនាន់ ៥.០.០ ឡើងទៅ](https://download.qt.io/archive/qt/)  ដើម្បីបកប្រែកូដនឹង ដំណើរការ.  កូដនេះអាចបកប្រែបាន តាមវិធីតទៅនេះ៖.

### ដំណើរការរហ័សនៅលើ Windows, Mac និង Linux ជាមួយ Qt Creator
- បើកគម្រោងជាមួយ Qt Creator ។
- កំណត់រចនាសម្ព័ន្ធគម្រោងជាមួយ MinGW ឬ Visual Compiler
- ចុច Compile នឹង Run

###  Manually Build Release on Windows with MingGW
សូមបង្កើត ***Qt/5.XX/mingw/mingwXXX_64/bin/*** នឹង **Qt/Tools/mingwXXX_64/bin/** ទៅលើ​ **PATH** នៅក្នុង System Environment Variables.

```bash 
$ cd Traffic-SImulation-and-Visualization 
$ qmake 
$ mingw32-make 
$ mingw32-make clean 
$ cd release 
$ windeployqt --quick --no-translations . 
``` 

## អ្នករួមចំណែក
- **ឃាង គឹមអាង**, TFD ( ស្ថាបត្យករ Software, អ្នកអភិវឌ្ឍន៍ AI)
- **កោ សុខជា**, ដេប៉ាតឺម៉ង់វិស្វកម្មបច្ចេកវិទ្យាព័ត៌មាន, មហាវិទ្យាល័យ​វិស្វកម្ម, សាកលវិទ្យាល័យភូមិន្ទភ្នំពេញ ( Advisor, Initiator)

ចាប់អារម្មណ៍ចង់ក្លាយជាអ្នករួមចំណែកម្នាក់? ចង់ចូលរួមក្នុងសហគមន៍របស់យើងទេ? ផ្ញើអ៊ីមែលមកខ្ញុំដោយលម្អិតអំពីរបៀបដែលអ្នកចង់បន្ថែមលក្ខណៈពិសេស ជួសជុលផ្នែកខ្លះ ឬអ្វីក៏ដោយដែលអ្នកចង់បានមកកាន់ kimangkheang@gmail.com

## ថ្លែងអំណរគុណ
<div class="flex flex-row space-x-2">  
  <a href="https://www.rupp.edu.kh/fe/" target="_blank"><img src="https://i.imgur.com/VRomAuU.jpg" ></a>  
  <a href="https://www.rupp.edu.kh/" target="_blank"><img src="https://i.imgur.com/UyGOhnf.png" ></a>  
  <a href="https://www.youtube.com/c/TeachingForDevelopment" target="_blank"><img src="https://i.imgur.com/LW2lDla.png" ></a>  
</div>  

- សូមអរគុណដល់ endrll សម្រាប់ការផ្តល់ប្រព័ន្ធវេចខ្ចប់ [CQtDeployer](https://github.com/QuasarApp/CQtDeployer) ដើម្បីផលិតកម្មវិធីនេះ។
- សូមអរគុណដល់ jurplel សម្រាប់ការផ្តល់ [install-qt-action](https://github.com/jurplel/install-qt-action) ដែលជួយយើងក្នុងការបង្កើតដំណើរការបង្កើតដោយស្វ័យប្រវត្តិ។
