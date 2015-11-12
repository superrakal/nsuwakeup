define('frontend/templates/root', ['exports'], function (exports) {

  'use strict';

  exports['default'] = Ember.HTMLBars.template((function() {
    return {
      meta: {
        "revision": "Ember@1.13.3",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 1,
            "column": 554
          }
        },
        "moduleName": "frontend/templates/root.hbs"
      },
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createElement("div");
        dom.setAttribute(el1,"class","ui container text-center");
        var el2 = dom.createElement("section");
        var el3 = dom.createElement("h1");
        dom.setAttribute(el3,"class","ui header hero mint-text");
        var el4 = dom.createTextNode("WakeUp! Coffee");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("h3");
        var el4 = dom.createElement("b");
        var el5 = dom.createTextNode("08:30 - 18:45 / понедельник-пятница / Главный корпус");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("br");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("h2");
        dom.setAttribute(el3,"class","ui header");
        var el4 = dom.createTextNode("Как оформить предзаказ?");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createComment("");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("section");
        var el3 = dom.createElement("div");
        dom.setAttribute(el3,"tabindex","0");
        dom.setAttribute(el3,"class","ui animated fade button mint huge");
        var el4 = dom.createElement("div");
        dom.setAttribute(el4,"class","visible content");
        var el5 = dom.createTextNode("Оформить предзаказ");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("div");
        dom.setAttribute(el4,"class","hidden content");
        var el5 = dom.createTextNode("Выбор кофе");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("section");
        var el3 = dom.createElement("h2");
        dom.setAttribute(el3,"class","ui header");
        var el4 = dom.createTextNode("Оставьте отзыв!");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createComment("");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var element0 = dom.childAt(fragment, [0]);
        var element1 = dom.childAt(element0, [1, 0]);
        var morphs = new Array(3);
        morphs[0] = dom.createMorphAt(dom.childAt(element0, [0]),4,4);
        morphs[1] = dom.createElementMorph(element1);
        morphs[2] = dom.createMorphAt(dom.childAt(element0, [2]),1,1);
        return morphs;
      },
      statements: [
        ["content","steps-component",["loc",[null,[1,225],[1,244]]]],
        ["element","action",["create_preorder"],[],["loc",[null,[1,268],[1,296]]]],
        ["content","comments-component",["loc",[null,[1,516],[1,538]]]]
      ],
      locals: [],
      templates: []
    };
  }()));

});