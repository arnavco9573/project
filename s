[33mcommit 7187c39755263a371910a0e4a8b8fcd30fa7412b[m[33m ([m[1;36mHEAD -> [m[1;32mmaster[m[33m)[m
Author: arnavco9573 <arnavsharm589@gmail.com>
Date:   Sun Aug 13 23:23:06 2023 +0530

    init first file

[1mdiff --git a/src/App.js b/src/App.js[m
[1mindex 3784575..036ec7b 100644[m
[1m--- a/src/App.js[m
[1m+++ b/src/App.js[m
[36m@@ -1,23 +1,24 @@[m
[31m-import logo from './logo.svg';[m
[31m-import './App.css';[m
[32m+[m[32mimport "./App.css";[m
[32m+[m[32mimport Accordian from "./components/Accordian";[m
[32m+[m[32mimport BoxSec from "./components/BoxSec";[m
[32m+[m[32mimport CardHero from "./components/CardHero";[m
[32m+[m[32mimport Footer from "./components/Footer";[m
[32m+[m[32mimport Hero from "./components/Hero";[m
[32m+[m[32mimport Join from "./components/Join";[m
[32m+[m[32mimport Navbar from "./components/Navbar";[m
[32m+[m[32mimport Testimonials from "./components/Testimonials";[m
 [m
 function App() {[m
   return ([m
[31m-    <div className="App">[m
[31m-      <header className="App-header">[m
[31m-        <img src={logo} className="App-logo" alt="logo" />[m
[31m-        <p>[m
[31m-          Edit <code>src/App.js</code> and save to reload.[m
[31m-        </p>[m
[31m-        <a[m
[31m-          className="App-link"[m
[31m-          href="https://reactjs.org"[m
[31m-          target="_blank"[m
[31m-          rel="noopener noreferrer"[m
[31m-        >[m
[31m-          Learn React[m
[31m-        </a>[m
[31m-      </header>[m
[32m+[m[32m    <div>[m
[32m+[m[32m      <Navbar />[m
[32m+[m[32m      <Hero />[m
[32m+[m[32m      <CardHero />[m
[32m+[m[32m      <BoxSec />[m
[32m+[m[32m      <Testimonials />[m
[32m+[m[32m      <Accordian/>[m
[32m+[m[32m      <Join/>[m
[32m+[m[32m      <Footer/>[m
     </div>[m
   );[m
 }[m
