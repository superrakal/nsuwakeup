define('frontend/templates/coffee', ['exports'], function (exports) {

  'use strict';

  exports['default'] = Ember.HTMLBars.template((function() {
    var child0 = (function() {
      return {
        meta: {
          "revision": "Ember@1.13.3",
          "loc": {
            "source": null,
            "start": {
              "line": 1,
              "column": 75
            },
            "end": {
              "line": 1,
              "column": 582
            }
          },
          "moduleName": "frontend/templates/coffee.hbs"
        },
        arity: 1,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createElement("div");
          dom.setAttribute(el1,"class","col-lg-3 col-md-4 col-sm-6 col-xs-12 item");
          var el2 = dom.createElement("div");
          dom.setAttribute(el2,"class","panel panel-default text-center");
          var el3 = dom.createElement("div");
          dom.setAttribute(el3,"class","panel-body");
          var el4 = dom.createElement("img");
          dom.setAttribute(el4,"class","img-responsive");
          dom.appendChild(el3, el4);
          var el4 = dom.createElement("div");
          dom.setAttribute(el4,"class","additional");
          var el5 = dom.createElement("div");
          dom.setAttribute(el5,"class","price pull-left");
          var el6 = dom.createComment("");
          dom.appendChild(el5, el6);
          var el6 = dom.createTextNode(" руб. (");
          dom.appendChild(el5, el6);
          var el6 = dom.createComment("");
          dom.appendChild(el5, el6);
          var el6 = dom.createTextNode(" мл.)");
          dom.appendChild(el5, el6);
          dom.appendChild(el4, el5);
          var el5 = dom.createElement("div");
          dom.setAttribute(el5,"class","action pull-right");
          var el6 = dom.createElement("button");
          dom.setAttribute(el6,"class","btn btn-success");
          var el7 = dom.createTextNode("Выбрать");
          dom.appendChild(el6, el7);
          dom.appendChild(el5, el6);
          dom.appendChild(el4, el5);
          dom.appendChild(el3, el4);
          dom.appendChild(el2, el3);
          var el3 = dom.createElement("div");
          dom.setAttribute(el3,"class","panel-footer text-center");
          var el4 = dom.createComment("");
          dom.appendChild(el3, el4);
          dom.appendChild(el2, el3);
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var element0 = dom.childAt(fragment, [0, 0]);
          var element1 = dom.childAt(element0, [0]);
          var element2 = dom.childAt(element1, [0]);
          var element3 = dom.childAt(element1, [1]);
          var element4 = dom.childAt(element3, [0]);
          var element5 = dom.childAt(element3, [1, 0]);
          var morphs = new Array(5);
          morphs[0] = dom.createAttrMorph(element2, 'src');
          morphs[1] = dom.createMorphAt(element4,0,0);
          morphs[2] = dom.createMorphAt(element4,2,2);
          morphs[3] = dom.createElementMorph(element5);
          morphs[4] = dom.createMorphAt(dom.childAt(element0, [1]),0,0);
          return morphs;
        },
        statements: [
          ["attribute","src",["get","drink.image",["loc",[null,[1,235],[1,246]]]]],
          ["content","drink.price",["loc",[null,[1,325],[1,340]]]],
          ["content","drink.volume",["loc",[null,[1,357],[1,373]]]],
          ["element","action",["choose",["get","drink",["loc",[null,[1,446],[1,451]]]]],[],["loc",[null,[1,428],[1,453]]]],
          ["content","drink.name",["loc",[null,[1,550],[1,564]]]]
        ],
        locals: ["drink"],
        templates: []
      };
    }());
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
            "column": 597
          }
        },
        "moduleName": "frontend/templates/coffee.hbs"
      },
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createElement("div");
        dom.setAttribute(el1,"class","title text-center");
        var el2 = dom.createElement("h1");
        var el3 = dom.createTextNode("Выбор кофе");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("div");
        dom.setAttribute(el1,"class","items");
        var el2 = dom.createComment("");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var morphs = new Array(1);
        morphs[0] = dom.createMorphAt(dom.childAt(fragment, [1]),0,0);
        return morphs;
      },
      statements: [
        ["block","each",[["get","drinks",["loc",[null,[1,92],[1,98]]]]],[],0,null,["loc",[null,[1,75],[1,591]]]]
      ],
      locals: [],
      templates: [child0]
    };
  }()));

});