(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _contents = require("./_contents.js");

var _contents2 = _interopRequireDefault(_contents);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Translator = function () {
  function Translator() {
    var options = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];

    _classCallCheck(this, Translator);

    // available languages for the website
    this._availableLang = ["fr", "en", "es"];

    // language currently in use for the website
    this._lang = options.defaultLang || this._initLang();

    // DOM elements
    this._langEl = document.querySelector('#lang');
    this._langList = document.querySelector('#lang-list');

    // method bindings
    this._onLanguageChange = this._onLanguageChange.bind(this);
    this._onMenuClick = this._onMenuClick.bind(this);

    // set web page language based on browser language
    this._setLang();

    // setup event listeners
    var langEls = document.querySelectorAll('.lang');
    for (var i = 0; i < langEls.length; i++) {
      langEls[i].addEventListener('click', this._onLanguageChange);
    }var langSelector = document.querySelector('#lang-selector');
    langSelector.addEventListener('click', this._onMenuClick);
  }

  _createClass(Translator, [{
    key: "_setLang",
    value: function _setLang() {
      this._langEl.innerHTML = this._lang;

      for (var id in _contents2.default) {
        var el = document.querySelector("#" + id);
        if (el) el.innerHTML = _contents2.default[id][this._lang];else console.log("WARNING: the element #" + id + " was not found in the DOM.");
      }
    }
  }, {
    key: "_onLanguageChange",
    value: function _onLanguageChange(e) {
      var lang = e.target.dataset.lang;

      if (lang !== this._lang) {
        this._lang = lang;
        this._setLang();
      }

      this._langList.classList.add("hidden");
    }
  }, {
    key: "_onMenuClick",
    value: function _onMenuClick() {
      this._langList.classList.toggle("hidden");
    }
  }, {
    key: "_initLang",
    value: function _initLang() {
      // language detected in the browser
      var browserLang = window.navigator.languages ? window.navigator.languages[0] : window.navigator.language || window.navigator.userLanguage;

      if (browserLang) {
        var lang = browserLang.substr(0, 2);
        var index = this._availableLang.indexOf(lang);
        if (index > -1) return lang;
      }

      return this._defaultLang;
    }
  }]);

  return Translator;
}();

exports.default = Translator;

},{"./_contents.js":2}],2:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = {
  "nav-category1": {
    "fr": "Fonctionnement",
    "en": "How it works",
    "es": "Cómo functiona"
  },
  "nav-category2": {
    "fr": "À propos",
    "en": "About",
    "es": "About"
  },
  "nav-category3": {
    "fr": "FAQ",
    "en": "FAQ",
    "es": "FAQ"
  },

  // Section 1
  "section1-title": {
    "fr": "<span class=\"highlight\">Numéro<br class=\"break-xs\"/> d'alerte SNCF</span><br/>accessible 24/7",
    "en": "<span class=\"highlight\">SNCF alert number</span><br/>available 24/7",
    "es": "<span class=\"highlight\">Número<br class=\"break-xs\"/> de alerta SNCF</span><br/>disponible 24/7"
  },
  "section1-text1": {
    "fr": "Le 31&nbsp;17&nbsp;7 (SMS) ou 31&nbsp;17 (voix) est le numéro d’alerte accessible 24h/24 et 7j/7 sur l’ensemble du réseau ferré français pour signaler une situation dangereuse dont vous êtes victime ou témoin.",
    "en": "Le 31&nbsp;17&nbsp;7 (SMS) ou 31&nbsp;17 (voix) est le numéro d’alerte accessible 24h/24 et 7j/7 sur l’ensemble du réseau ferré français pour signaler une situation dangereuse dont vous êtes victime ou témoin.",
    "es": "Le 31&nbsp;17&nbsp;7 (SMS) ou 31&nbsp;17 (voix) est le numéro d’alerte accessible 24h/24 et 7j/7 sur l’ensemble du réseau ferré français pour signaler une situation dangereuse dont vous êtes victime ou témoin."
  },
  "section1-text2": {
    "fr": "Pour améliorer la sécurité et l’assistance aux personnes dans les transports, la SNCF déploie une application dédiée. En cas d’incident ou risque, l’application Alerte 3117 permet une mise en relation instantanée  avec les opérateurs compétents, détenteurs d’une carte professionnelle délivrée par le Conseil National des Activités Privées de Sécurité (CNAPS).",
    "en": "Pour améliorer la sécurité et l’assistance aux personnes dans les transports, la SNCF déploie une application dédiée. En cas d’incident ou risque, l’application Alerte 3117 permet une mise en relation instantanée  avec les opérateurs compétents, détenteurs d’une carte professionnelle délivrée par le Conseil National des Activités Privées de Sécurité (CNAPS).",
    "es": "Pour améliorer la sécurité et l’assistance aux personnes dans les transports, la SNCF déploie une application dédiée. En cas d’incident ou risque, l’application Alerte 3117 permet une mise en relation instantanée  avec les opérateurs compétents, détenteurs d’une carte professionnelle délivrée par le Conseil National des Activités Privées de Sécurité (CNAPS)."
  },
  "section1-appstore": {
    "fr": "<img src=\"img/appstore-fr.svg\" alt=\"Télécharger sur l'App Store\" class=\"dl\"/>",
    "en": "<img src=\"img/appstore-en.svg\" alt=\"Download on the App Store\" class=\"dl\"/>",
    "es": "<img src=\"img/appstore-es.svg\" alt=\"Consiguela en el App Store\" class=\"dl\"/>"
  },
  "section1-googleplay": {
    "fr": "<img src=\"img/googleplay-fr.png\" alt=\"Disponible sur Google Play\" class=\"dl\"/>",
    "en": "<img src=\"img/googleplay-en.png\" alt=\"Get it on Google Play\" class=\"dl\"/>",
    "es": "<img src=\"img/googleplay-es.png\" alt=\"Disponible a Google Play\" class=\"dl\"/>"
  },

  // Section 2
  "section2-title": {
    "fr": "Comment utiliser le service&nbsp;?",
    "en": "How to use the service?",
    "es": "¿Cómo utilizar el servicio?"
  },
  "section2-step1-title": {
    "fr": "Acceptez la géolocalisation",
    "en": "Enable location services",
    "es": "Enable location services"
  },
  "section2-step1-text": {
    "fr": "La localisation grâce à votre téléphone permet aux opérateurs, puis aux secours qui interviennent, de le faire de manière plus réactive et plus précise.",
    "en": "La localisation grâce à votre téléphone permet aux opérateurs, puis aux secours qui interviennent, de le faire de manière plus réactive et plus précise.",
    "es": "La localisation grâce à votre téléphone permet aux opérateurs, puis aux secours qui interviennent, de le faire de manière plus réactive et plus précise."
  },
  "section2-step2-title": {
    "fr": "Renseignez vos informations de profil",
    "en": "Fill in your profile",
    "es": "Fill in your profile"
  },
  "section2-step2-text": {
    "fr": "Les informations déclarées<sup>1</sup> dans l’application et transmises aux opérateurs au moment de votre appel ou SMS, aideront les interventions à s’organiser pour votre sécurité le cas échéant.",
    "en": "Les informations déclarées<sup>1</sup> dans l’application et transmises aux opérateurs au moment de votre appel ou SMS, aideront les interventions à s’organiser pour votre sécurité le cas échéant.",
    "es": "Les informations déclarées<sup>1</sup> dans l’application et transmises aux opérateurs au moment de votre appel ou SMS, aideront les interventions à s’organiser pour votre sécurité le cas échéant."
  },
  "section2-step3-title": {
    "fr": "Contactez les services par téléphone et SMS",
    "en": "Contact services by phone and text",
    "es": "Contact services by phone and text"
  },
  "section2-step3-text": {
    "fr": "Les atteintes à la sécurité, secours et assistance et incivilités seront évalués par les opérateurs habilités et seront traités selon des procédures précises<sup>2</sup>.",
    "en": "Les atteintes à la sécurité, secours et assistance et incivilités seront évalués par les opérateurs habilités et seront traités selon des procédures précises<sup>2</sup>.",
    "es": "Les atteintes à la sécurité, secours et assistance et incivilités seront évalués par les opérateurs habilités et seront traités selon des procédures précises<sup>2</sup>."
  },

  // Section 3
  "section3-title": {
    "fr": "À propos&hellip;",
    "en": "About&hellip;",
    "es": "A proposito&hellip;"
  },
  "section3-text": {
    "fr": "Le 31&nbsp;17 (appel téléphonique) et le 31&nbsp;17&nbsp;7 (par SMS) vous mettent immédiatement en relation avec les opérateurs du Centre de Gestion des Appels de la SNCF. Ce service est accessible 24h/24 et 7j/7, sur l’ensemble du Réseau Ferré National.<br/>Vous pouvez signaler une situation dont vous êtes victime ou témoin.",
    "en": "Le 31&nbsp;17 (appel téléphonique) et le 31&nbsp;17&nbsp;7 (par SMS) vous mettent immédiatement en relation avec les opérateurs du Centre de Gestion des Appels de la SNCF. Ce service est accessible 24h/24 et 7j/7, sur l’ensemble du Réseau Ferré National.<br/>Vous pouvez signaler une situation dont vous êtes victime ou témoin.",
    "es": "Le 31&nbsp;17 (appel téléphonique) et le 31&nbsp;17&nbsp;7 (par SMS) vous mettent immédiatement en relation avec les opérateurs du Centre de Gestion des Appels de la SNCF. Ce service est accessible 24h/24 et 7j/7, sur l’ensemble du Réseau Ferré National.<br/>Vous pouvez signaler une situation dont vous êtes victime ou témoin."
  },
  "section3-timeline1": {
    "fr": "Les agents recueillent toutes les informations nécessaires pour définir votre identité, la nature de votre appel, la localisation, endroit où se passe l’incident.",
    "en": "Les agents recueillent toutes les informations nécessaires pour définir votre identité, la nature de votre appel, la localisation, endroit où se passe l’incident.",
    "es": "Les agents recueillent toutes les informations nécessaires pour définir votre identité, la nature de votre appel, la localisation, endroit où se passe l’incident."
  },
  "section3-timeline2": {
    "fr": "L’opérateur réalise un diagnostic de la situation et adresse aux services compétents le signalement de votre besoin (ex&nbsp;: Poste de Commandement National Sûreté, Centre Opérationnel de la Gestion des Circulations, Pompiers, &hellip;).",
    "en": "L’opérateur réalise un diagnostic de la situation et adresse aux services compétents le signalement de votre besoin (ex&nbsp;: Poste de Commandement National Sûreté, Centre Opérationnel de la Gestion des Circulations, Pompiers, &hellip;).",
    "es": "L’opérateur réalise un diagnostic de la situation et adresse aux services compétents le signalement de votre besoin (ex&nbsp;: Poste de Commandement National Sûreté, Centre Opérationnel de la Gestion des Circulations, Pompiers, &hellip;)."
  },
  "section3-timeline3": {
    "fr": "Le numéro de l’appelant est enregistré pour permettre le maintien de la communication (appel ou SMS) et peut être géolocalisé pour faciliter l’intervention des services compétents. Les conversations sont enregistrées.",
    "en": "Le numéro de l’appelant est enregistré pour permettre le maintien de la communication (appel ou SMS) et peut être géolocalisé pour faciliter l’intervention des services compétents. Les conversations sont enregistrées.",
    "es": "Le numéro de l’appelant est enregistré pour permettre le maintien de la communication (appel ou SMS) et peut être géolocalisé pour faciliter l’intervention des services compétents. Les conversations sont enregistrées."
  },
  "section3-timeline4": {
    "fr": "Les opérateurs à votre écoute sont détenteurs d’une carte professionnelle délivrée par le Conseil National des Activités Privées de Sécurité (CNAPS). Ils sont donc formés à toutes les situations, y compris au traitement des appels &laquo;&nbsp;Alerte Attentat&nbsp;&raquo;.",
    "en": "Les opérateurs à votre écoute sont détenteurs d’une carte professionnelle délivrée par le Conseil National des Activités Privées de Sécurité (CNAPS). Ils sont donc formés à toutes les situations, y compris au traitement des appels &laquo;&nbsp;Alerte Attentat&nbsp;&raquo;.",
    "es": "Les opérateurs à votre écoute sont détenteurs d’une carte professionnelle délivrée par le Conseil National des Activités Privées de Sécurité (CNAPS). Ils sont donc formés à toutes les situations, y compris au traitement des appels &laquo;&nbsp;Alerte Attentat&nbsp;&raquo;."
  },
  "section3-contact": {
    "fr": "En cas de réclamation ou question sur le numéro d’alerte, contacter un interlocuteur à l’adresse suivante&nbsp;: <a href=\"mailto:contact@alerte3117.fr\">contact@alerte3117.fr</a>.",
    "en": "En cas de réclamation ou question sur le numéro d’alerte, contacter un interlocuteur à l’adresse suivante&nbsp;: <a href=\"mailto:contact@alerte3117.fr\">contact@alerte3117.fr</a>.",
    "es": "En cas de réclamation ou question sur le numéro d’alerte, contacter un interlocuteur à l’adresse suivante&nbsp;: <a href=\"mailto:contact@alerte3117.fr\">contact@alerte3117.fr</a>."
  },

  // Section 4
  "section4-title": {
    "fr": "Quand et pourquoi&nbsp;?",
    "en": "When and why?",
    "es": "¿Cuándo y por qué?"
  },
  "section4-faq1-question": {
    "fr": "Qu'est-ce que le service Alerte 3117&nbsp;?",
    "en": "What is the service Alerte 3117?",
    "es": "¿Qué es el servicio Alerte 3117?"
  },
  "section4-faq1-answer": {
    "fr": "Le 31&nbsp;17 (appel téléphonique) ou 31&nbsp;17&nbsp;7 (par SMS) est un numéro d’alerte à disposition des usagers des réseaux ferrés nationaux.",
    "en": "Le 31&nbsp;17 (appel téléphonique) ou 31&nbsp;17&nbsp;7 (par SMS) est un numéro d’alerte à disposition des usagers des réseaux ferrés nationaux.",
    "es": "Le 31&nbsp;17 (appel téléphonique) ou 31&nbsp;17&nbsp;7 (par SMS) est un numéro d’alerte à disposition des usagers des réseaux ferrés nationaux."
  },
  "section4-faq2-question": {
    "fr": "Quand utiliser ce numéro&nbsp;?",
    "en": "When shall you use this number?",
    "es": "When shall you use this number?" // TODO
  },
  "section4-faq2-answer": {
    "fr": "Lorsque vous êtes victime ou témoin d’une situation dangereuse, menaçante, ou impliquant la sécurité.",
    "en": "Lorsque vous êtes victime ou témoin d’une situation dangereuse, menaçante, ou impliquant la sécurité.",
    "es": "Lorsque vous êtes victime ou témoin d’une situation dangereuse, menaçante, ou impliquant la sécurité."
  },
  "section4-faq3-question": {
    "fr": "Qui intervient auprès de vous&nbsp;?",
    "en": "Qui intervient auprès de vous&nbsp;?",
    "es": "Qui intervient auprès de vous&nbsp;?"
  },
  "section4-faq3-answer": {
    "fr": "Selon l’urgence et la nature de votre appel, les opérateurs signaleront votre situation au service le plus compétent (professionnels de la sécurité ou de la santé, agents techniques sur les voies ou en gare, &hellip;).",
    "en": "Selon l’urgence et la nature de votre appel, les opérateurs signaleront votre situation au service le plus compétent (professionnels de la sécurité ou de la santé, agents techniques sur les voies ou en gare, &hellip;).",
    "es": "Selon l’urgence et la nature de votre appel, les opérateurs signaleront votre situation au service le plus compétent (professionnels de la sécurité ou de la santé, agents techniques sur les voies ou en gare, &hellip;)."
  },
  "section4-faq4-question": {
    "fr": "Pourquoi préférer l'envoi d'un SMS&nbsp;?",
    "en": "Why should you preferrably send a text message?",
    "es": "Why should you preferrably send a text message?"
  },
  "section4-faq4-answer": {
    "fr": "La procédure et les opérateurs sont les mêmes. Le SMS est un moyen à disposition plus discret, vous permettant de signaler une situation sans vous mettre en danger.",
    "en": "La procédure et les opérateurs sont les mêmes. Le SMS est un moyen à disposition plus discret, vous permettant de signaler une situation sans vous mettre en danger.",
    "es": "La procédure et les opérateurs sont les mêmes. Le SMS est un moyen à disposition plus discret, vous permettant de signaler une situation sans vous mettre en danger."
  },
  "section4-faq5-question": {
    "fr": "Pourquoi ne pas abuser de ce numéro&nbsp;?",
    "en": "Pourquoi ne pas abuser de ce numéro&nbsp;?",
    "es": "Pourquoi ne pas abuser de ce numéro&nbsp;?"
  },
  "section4-faq5-answer": {
    "fr": "Les appels plaisantins ou fausses alertes peuvent donner lieu à des poursuites judiciaires à l’encontre de l’appelant.",
    "en": "Les appels plaisantins ou fausses alertes peuvent donner lieu à des poursuites judiciaires à l’encontre de l’appelant.",
    "es": "Les appels plaisantins ou fausses alertes peuvent donner lieu à des poursuites judiciaires à l’encontre de l’appelant."
  },
  "section4-faq6-question": {
    "fr": "Le numéro est-il accessible à l'étranger&nbsp;?",
    "en": "Is the number available abroad?",
    "es": "Is the number available abroad?"
  },
  "section4-faq6-answer": {
    "fr": "Le numéro d’alerte est un service disponible sur le territoire national (post Euro lot 3).",
    "en": "Le numéro d’alerte est un service disponible sur le territoire national (post Euro lot 3).",
    "es": "Le numéro d’alerte est un service disponible sur le territoire national (post Euro lot 3)."
  },

  // Footnotes
  "footnote1-title": {
    "fr": "<sup>1</sup> Traitement des données personnelles",
    "en": "<sup>1</sup> Traitement des données personnelles",
    "es": "<sup>1</sup> Traitement des données personnelles"
  },
  "footnote1-text": {
    "fr": "Dans le cadre du bon traitement des appels de Sécurité/Secours &ndash; Assistance/Incivilités ALERTE 3117, le service ce traitement des appels Sécurité &laquo;&nbsp;ALERTE 3117&nbsp;&raquo; recueille vos informations, conformément à la loi &laquo;&nbsp;informatique et libertés&nbsp;&raquo; du 6 janvier 1978 modifiée. Vous disposez d’un droit d’accès et de rectification aux informations qui vous concernent. Vous pouvez également, pour des motifs légitimes, vous opposer au traitement des données vous concernant.",
    "en": "Dans le cadre du bon traitement des appels de Sécurité/Secours &ndash; Assistance/Incivilités ALERTE 3117, le service ce traitement des appels Sécurité &laquo;&nbsp;ALERTE 3117&nbsp;&raquo; recueille vos informations, conformément à la loi &laquo;&nbsp;informatique et libertés&nbsp;&raquo; du 6 janvier 1978 modifiée. Vous disposez d’un droit d’accès et de rectification aux informations qui vous concernent. Vous pouvez également, pour des motifs légitimes, vous opposer au traitement des données vous concernant.",
    "es": "Dans le cadre du bon traitement des appels de Sécurité/Secours &ndash; Assistance/Incivilités ALERTE 3117, le service ce traitement des appels Sécurité &laquo;&nbsp;ALERTE 3117&nbsp;&raquo; recueille vos informations, conformément à la loi &laquo;&nbsp;informatique et libertés&nbsp;&raquo; du 6 janvier 1978 modifiée. Vous disposez d’un droit d’accès et de rectification aux informations qui vous concernent. Vous pouvez également, pour des motifs légitimes, vous opposer au traitement des données vous concernant."
  },
  "footnote2-title": {
    "fr": "<sup>2</sup> Traitement des appels/SMS",
    "en": "<sup>2</sup> Traitement des appels/SMS",
    "es": "<sup>2</sup> Traitement des appels/SMS"
  },
  "footnote2-text": {
    "fr": "Dans le cadre du traitement des appels et SMS, les conversations sont enregistrées et le numéro de l’appelant démasqué conformément à la pratique des appels de secours.<br/>L’abus de ce numéro vous expose à des poursuites judiciaires.",
    "en": "Dans le cadre du traitement des appels et SMS, les conversations sont enregistrées et le numéro de l’appelant démasqué conformément à la pratique des appels de secours.<br/>L’abus de ce numéro vous expose à des poursuites judiciaires.",
    "es": "Dans le cadre du traitement des appels et SMS, les conversations sont enregistrées et le numéro de l’appelant démasqué conformément à la pratique des appels de secours.<br/>L’abus de ce numéro vous expose à des poursuites judiciaires."
  }
};

},{}],3:[function(require,module,exports){
'use strict';

var _Translate = require('./Translate');

var _Translate2 = _interopRequireDefault(_Translate);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

window.addEventListener('load', function () {
  var translate = new _Translate2.default({ defaultLang: "fr" });

  var overlay = document.querySelector('.overlay');
  overlay.classList.add('hidden');
});

},{"./Translate":1}]},{},[3]);
