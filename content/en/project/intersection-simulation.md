---
title: "Road Intersection Simulation and Visualization"
token: "Road Intersection Simulation and Visualization"
category: programming
description: "Intersection simulation program written in C++"
media: https://i.imgur.com/YgaJFP9.png
git: https://github.com/KimangKhenng/Traffic-SImulation-and-Visualization
by: "Chau Dara"
---

I've decided to open-source this source code under **GPLv3(GNU General Public License, version 3)** after my graduation from the university.

This is an intersection simulation software capable of generating the arriving vehicles at varying controllable rate. The vehicle behavior can be changed in realtime in the following mode:

- Obeying the traffic lights 
- Not Obeying traffic lights, 
- Treating front vehicles as invisible or not.
  
## Demo

<div class="video-container">
  <iframe width="560" height="315" src="https://www.youtube.com/embed/yKl4c4eQUy8" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
</div>
<div class="video-container">
  <iframe width="560" height="315" src="https://www.youtube.com/embed/r1cmzhc8LH8" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
</div>

##  Tested  Systems
I have complied the source code and test on the following systems:

* Windows  10 20H2 19042
* macOS  Big Sur 11.2.1
* Ubuntu 20.04.2 LTS

##  Build  Instructions
#### Clone the source code
```sh   
$ git  clone  https://github.com/KimangKhenng/Traffic-SImulation-and-Visualization.git  
``` 
RISV  requires  [Qt  5.0.0+](https://download.qt.io/archive/qt/)  to  to  complie  and  run.  The  source  code  can  be  compiled  using  one  of  these  options. 
###  Quick Run on Windows, Mac, and Linux  with  Qt  Creator
- Open the project with Qt Creator.
- Configure project with either MinGW or Visual Compiler
- Run
###  Manually Build Release on Windows with MingGW
Make sure you add ***Qt/5.XX/mingw/mingwXXX_64/bin/*** and **Qt/Tools/mingwXXX_64/bin/** to your **PATH** in system environment variables.

```sh  
$ cd Traffic-SImulation-and-Visualization  
$ qmake  
$ mingw32-make  
$ mingw32-make clean  
$ cd release  
$ windeployqt --quick --no-translations .  
```  
##  Contributors
- **KimAng Kheang**, TFD ( Software Architect, AI Developer)
- **Sokchea Kor**, ITED, FE, RUPP ( Advisor, Initiator)

Interested in becoming one of the contributors? Wanna take part in our community? Send me an email detaling how you would like to add features, fixe certain part, or whatever on your mind to kimangkheang@gmail.com
## Acknowledgement
<div class="flex flex-row space-x-2">
  <a href="https://www.rupp.edu.kh/fe/" target="_blank"><img src="https://i.imgur.com/VRomAuU.jpg" ></a>
  <a href="https://www.rupp.edu.kh/" target="_blank"><img src="https://i.imgur.com/UyGOhnf.png" ></a>
  <a href="https://www.youtube.com/c/TeachingForDevelopment" target="_blank"><img src="https://i.imgur.com/LW2lDla.png" ></a>
</div>

- Thanks to **endrll**  for providing [CQtDeployer](https://github.com/QuasarApp/CQtDeployer) packaging system to ship this software in production.
- Thanks to **jurplel** for providing [install-qt-action](https://github.com/jurplel/install-qt-action) that helps us in creating automating build process.
