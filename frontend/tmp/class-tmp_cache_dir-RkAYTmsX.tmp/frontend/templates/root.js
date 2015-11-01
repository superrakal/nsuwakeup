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
            "column": 1522
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
        dom.setAttribute(el1,"class","container");
        var el2 = dom.createElement("div");
        dom.setAttribute(el2,"class","title text-center");
        var el3 = dom.createElement("h1");
        dom.setAttribute(el3,"class","mark-style");
        var el4 = dom.createTextNode("Как оформить предзаказ?");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("div");
        dom.setAttribute(el2,"class","steps");
        var el3 = dom.createElement("div");
        dom.setAttribute(el3,"class","col-lg-3 col-md-6 step");
        var el4 = dom.createElement("div");
        dom.setAttribute(el4,"class","panel panel-default");
        var el5 = dom.createElement("div");
        dom.setAttribute(el5,"class","panel-body");
        var el6 = dom.createElement("div");
        dom.setAttribute(el6,"class","circle-number");
        var el7 = dom.createTextNode("1");
        dom.appendChild(el6, el7);
        dom.appendChild(el5, el6);
        var el6 = dom.createElement("i");
        dom.setAttribute(el6,"class","fa fa-coffee fa-5x");
        dom.appendChild(el5, el6);
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("div");
        dom.setAttribute(el5,"class","panel-footer text-center");
        var el6 = dom.createTextNode("Выбрать кофе");
        dom.appendChild(el5, el6);
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("div");
        dom.setAttribute(el3,"class","col-lg-3 col-md-6 step");
        var el4 = dom.createElement("div");
        dom.setAttribute(el4,"class","panel panel-default");
        var el5 = dom.createElement("div");
        dom.setAttribute(el5,"class","panel-body");
        var el6 = dom.createElement("div");
        dom.setAttribute(el6,"class","circle-number");
        var el7 = dom.createTextNode("2");
        dom.appendChild(el6, el7);
        dom.appendChild(el5, el6);
        var el6 = dom.createElement("i");
        dom.setAttribute(el6,"class","fa fa-eyedropper fa-5x");
        dom.appendChild(el5, el6);
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("div");
        dom.setAttribute(el5,"class","panel-footer text-center");
        var el6 = dom.createTextNode("Выбрать сироп");
        dom.appendChild(el5, el6);
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("div");
        dom.setAttribute(el3,"class","col-lg-3 col-md-6 step");
        var el4 = dom.createElement("div");
        dom.setAttribute(el4,"class","panel panel-default");
        var el5 = dom.createElement("div");
        dom.setAttribute(el5,"class","panel-body");
        var el6 = dom.createElement("div");
        dom.setAttribute(el6,"class","circle-number");
        var el7 = dom.createTextNode("3");
        dom.appendChild(el6, el7);
        dom.appendChild(el5, el6);
        var el6 = dom.createElement("i");
        dom.setAttribute(el6,"class","fa fa-file-text-o fa-5x");
        dom.appendChild(el5, el6);
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("div");
        dom.setAttribute(el5,"class","panel-footer text-center");
        var el6 = dom.createTextNode("Оформить предзаказ");
        dom.appendChild(el5, el6);
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("div");
        dom.setAttribute(el3,"class","col-lg-3 col-md-6 step");
        var el4 = dom.createElement("div");
        dom.setAttribute(el4,"class","panel panel-default");
        var el5 = dom.createElement("div");
        dom.setAttribute(el5,"class","panel-body");
        var el6 = dom.createElement("div");
        dom.setAttribute(el6,"class","circle-number");
        var el7 = dom.createTextNode("4");
        dom.appendChild(el6, el7);
        dom.appendChild(el5, el6);
        var el6 = dom.createElement("i");
        dom.setAttribute(el6,"class","fa fa-thumbs-o-up fa-5x");
        dom.appendChild(el5, el6);
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("div");
        dom.setAttribute(el5,"class","panel-footer text-center");
        var el6 = dom.createTextNode("Забрать заказ");
        dom.appendChild(el5, el6);
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("div");
        dom.setAttribute(el2,"class","make_order text-center");
        var el3 = dom.createElement("button");
        dom.setAttribute(el3,"class","btn btn-lg btn-success");
        var el4 = dom.createTextNode("Оформить предзаказ");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("div");
        dom.setAttribute(el2,"class","reviews text-center");
        var el3 = dom.createElement("h1");
        dom.setAttribute(el3,"class","mark-style");
        var el4 = dom.createTextNode("Оставьте отзыв!");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("form");
        var el4 = dom.createElement("div");
        dom.setAttribute(el4,"class","form-group");
        var el5 = dom.createElement("textarea");
        dom.setAttribute(el5,"placeholder","Ваш отзыв...");
        dom.setAttribute(el5,"class","form-control");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("div");
        dom.setAttribute(el4,"class","form-group");
        var el5 = dom.createElement("button");
        dom.setAttribute(el5,"class","btn btn-success btn-lg");
        var el6 = dom.createTextNode("Отправить");
        dom.appendChild(el5, el6);
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var element0 = dom.childAt(fragment, [0, 2, 0]);
        var morphs = new Array(1);
        morphs[0] = dom.createElementMorph(element0);
        return morphs;
      },
      statements: [
        ["element","action",["create_preorder"],[],["loc",[null,[1,1142],[1,1170]]]]
      ],
      locals: [],
      templates: []
    };
  }()));

});