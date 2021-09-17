# **Mihail Kramskov**
**Junior web-developer**

## Contact information:
* *Phone:* +7-(905)-384-28-14
* *E-mail:* kramskov.mgoo@gmail.com
* *Telegram:* @mhatikov

### Briefly About Myself:
*I started being interested in web development at the age of 11, as soon as I got my first computer with Internet access. I have always been interested in working with pages on the Internet. That's why I started learning html at school. Over time, I came to the conclusion that this is what I want to do professionally.*

*My interest led me to enter the university for a technical specialty, where I mastered C++. Then, I started studying JavaScript and other related technologies for working with web pages in courses.*

*At the moment, I'm graduating from university and I want to start my dream job. I am very hardworking, pedantic and very fond of learning new things. This desire was expressed as a child, when I constantly installed mods in video games and liked to study the structure of applications and "Mod-loaders".*

### **Hard-skills:**
* **HyperText Markup and cascading style sheets:**
  * *Html5*
  * *XHTML* (in progress)
  * *CSS*
  * *SASS*
  * *LESS*
* **Code language:**
  * *JavaScript basics*
  * *C++ basics*
* **Module-bundlers:**
  * *Webpack*
  * *Gulp-js*
  * *Prepros*
* **IDE and source-code editors:**
  * *Microsoft Visual-Studio*
  * *Microsoft VS-code*
  * *Web-storm*
  * *Sublime-Text*
* **Frameworks:** 
  * *Angular* (in progress)
* **Methodologies:**
  * *BEM*
* **Distributed version control systems**
  * GIT (GitHub, GitLab)

### **Code example:**
*"My Languages" KATA from CODEWARS:* 
You are given a dictionary/hash/object containing some languages and your test results in the given languages. Return the list of languages where your test score is at least 60, in descending order of the results. Note: the scores will always be unique (so no duplicate values)

*Code:* 
```javascript
  function myLanguages(results) {
  let list = [];
  for(let languageResult in results){
    let valueLanguageResult = results[languageResult];
    if(Number(valueLanguageResult) >= 60){
      list.push(languageResult);
    }
  }
 list.sort((a,b)=>{
   if(results[a] > results[b]) return -1;
   if(results[a] === results[b]) return 0;
   if(results[a] < results[b]) return 1;
 })
  return list;
}
```

### **Education:**
* **Saratov State University. Faculty of Computer Science and Information Technology. "SSU-CSIT"**
* **Programming courses "Foxminded" Front-end Angular. (in progress Link: https://foxminded.ua/front-end/).**
* **JavaScript Manual on learnjavascript.ru (in progress)**
* **RS Schools Course «JavaScript/Front-end. Stage 1» (in progress)**
### **Languages:**
* Russian - native
* Ukrainian - Intermediate
* English - A2
