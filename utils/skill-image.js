import angular from "/public/svg/skills/angular.svg";
import c from "/public/svg/skills/c.svg";
import cplusplus from "/public/svg/skills/cplusplus.svg";
import css from "/public/svg/skills/css.svg";
import docker from "/public/svg/skills/docker.svg";
import firebase from "/public/svg/skills/firebase.svg";
import flutter from "/public/svg/skills/flutter.svg";
import git from "/public/svg/skills/git.svg";
import html from "/public/svg/skills/html.svg";
import java from "/public/svg/skills/java.svg";
import javascript from "/public/svg/skills/javascript.svg";
import microsoftoffice from "/public/svg/skills/microsoftoffice.svg";
import mysql from "/public/svg/skills/mysql.svg";
import nextjslogo from "/public/svg/skills/nextjs.svg";
import numpy from "/public/svg/skills/numpy.svg";
import postgresql from "/public/svg/skills/postgresql.svg";
import python from "/public/svg/skills/python.svg";
import react from "/public/svg/skills/react.svg";
import tailwind from "/public/svg/skills/tailwind.svg";
import typescript from "/public/svg/skills/typescript.svg";
import postman from "/public/svg/skills/postman.svg";
import excel from "/public/svg/skills/excel.svg";
import r from "/public/svg/skills/r.svg";
import tableau from "/public/svg/skills/tableau.svg";
import sas from "/public/svg/skills/sas.svg";
import rxjs from "/public/svg/skills/rxjs.svg";
import reactnative from "/public/svg/skills/reactnative.svg";
import powerbi from "/public/svg/skills/powerbi.svg";
import pandas from "/public/svg/skills/pandas.svg";
import nodejslogo from "/public/svg/skills/nodejs.svg";
import matplotlib from "/public/svg/skills/matplotlib.svg";
export const skillsImage = (skill) => {
  const skillID = skill.toLowerCase();
  switch (skillID) {
    case "html":
      return html;
    case "docker":
      return docker;
    case "css":
      return css;
    case "angular":
      return angular;
    case "javascript":
      return javascript;
    case "react":
      return react;
    case "typescript":
      return typescript;
    case "mysql":
      return mysql;
    case "postgresql":
      return postgresql;
    case "tailwind":
      return tailwind;
    case "c":
      return c;
    case "cplusplus":
      return cplusplus;
    case "java":
      return java;
    case "python":
      return python;
    case "firebase":
      return firebase;
    case "git":
      return git;
    case "numpy":
      return numpy;
    case "flutter":
      return flutter;
    case "microsoftoffice":
      return microsoftoffice;
    case "postman":
      return postman;
    case "excel":
      return excel;
    case "r":
      return r;
    case "tableau":
      return tableau;
    case "sas":
      return sas;
    case "rxjs":
      return rxjs;
    case "reactnative":
      return reactnative;
    case "powerbi":
      return powerbi;
    case "pandas":
      return pandas;
    case "nodejslogo":
      return nodejslogo;
    // case "nextjslogo":
    //   return nextjslogo;
    case "matplotlib":
      return matplotlib;
    default:
      break;
  }
};
