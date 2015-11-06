define('frontend/templates/mypreorders', ['exports'], function (exports) {

  'use strict';

  exports['default'] = Ember.HTMLBars.template((function() {
    var child0 = (function() {
      var child0 = (function() {
        return {
          meta: {
            "revision": "Ember@1.13.3",
            "loc": {
              "source": null,
              "start": {
                "line": 1,
                "column": 986
              },
              "end": {
                "line": 1,
                "column": 1078
              }
            },
            "moduleName": "frontend/templates/mypreorders.hbs"
          },
          arity: 1,
          cachedFragment: null,
          hasRendered: false,
          buildFragment: function buildFragment(dom) {
            var el0 = dom.createDocumentFragment();
            var el1 = dom.createElement("span");
            dom.setAttribute(el1,"class","label label-success");
            var el2 = dom.createComment("");
            dom.appendChild(el1, el2);
            dom.appendChild(el0, el1);
            return el0;
          },
          buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
            var morphs = new Array(1);
            morphs[0] = dom.createMorphAt(dom.childAt(fragment, [0]),0,0);
            return morphs;
          },
          statements: [
            ["content","syurup.name",["loc",[null,[1,1056],[1,1071]]]]
          ],
          locals: ["syurup"],
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
              "column": 106
            },
            "end": {
              "line": 1,
              "column": 1359
            }
          },
          "moduleName": "frontend/templates/mypreorders.hbs"
        },
        arity: 1,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createElement("div");
          dom.setAttribute(el1,"class","preorder");
          var el2 = dom.createElement("div");
          dom.setAttribute(el2,"class","title");
          var el3 = dom.createElement("div");
          dom.setAttribute(el3,"class","pull-left");
          var el4 = dom.createElement("p");
          var el5 = dom.createTextNode("Статус предзаказа: ");
          dom.appendChild(el4, el5);
          var el5 = dom.createComment("");
          dom.appendChild(el4, el5);
          dom.appendChild(el3, el4);
          dom.appendChild(el2, el3);
          var el3 = dom.createElement("div");
          dom.setAttribute(el3,"class","pull-right");
          var el4 = dom.createElement("p");
          var el5 = dom.createComment("");
          dom.appendChild(el4, el5);
          dom.appendChild(el3, el4);
          dom.appendChild(el2, el3);
          var el3 = dom.createElement("div");
          dom.setAttribute(el3,"class","clearfix");
          dom.appendChild(el2, el3);
          dom.appendChild(el1, el2);
          var el2 = dom.createElement("div");
          dom.setAttribute(el2,"class","col-md-12");
          var el3 = dom.createElement("div");
          dom.setAttribute(el3,"class","col-lg-3 col-md-3 col-sm-12 col-xs-12");
          var el4 = dom.createElement("div");
          dom.setAttribute(el4,"class","panel panel-default text-center");
          var el5 = dom.createElement("div");
          dom.setAttribute(el5,"class","panel-heading");
          var el6 = dom.createTextNode("id Заказа");
          dom.appendChild(el5, el6);
          dom.appendChild(el4, el5);
          var el5 = dom.createElement("div");
          dom.setAttribute(el5,"class","panel-body");
          var el6 = dom.createComment("");
          dom.appendChild(el5, el6);
          dom.appendChild(el4, el5);
          dom.appendChild(el3, el4);
          dom.appendChild(el2, el3);
          var el3 = dom.createElement("div");
          dom.setAttribute(el3,"class","col-lg-3 col-md-3 col-sm-12 col-xs-12");
          var el4 = dom.createElement("div");
          dom.setAttribute(el4,"class","panel panel-default text-center");
          var el5 = dom.createElement("div");
          dom.setAttribute(el5,"class","panel-heading");
          var el6 = dom.createTextNode("Кофе");
          dom.appendChild(el5, el6);
          dom.appendChild(el4, el5);
          var el5 = dom.createElement("div");
          dom.setAttribute(el5,"class","panel-body");
          var el6 = dom.createComment("");
          dom.appendChild(el5, el6);
          var el6 = dom.createTextNode(" (");
          dom.appendChild(el5, el6);
          var el6 = dom.createComment("");
          dom.appendChild(el5, el6);
          var el6 = dom.createTextNode(" мл.)");
          dom.appendChild(el5, el6);
          dom.appendChild(el4, el5);
          dom.appendChild(el3, el4);
          dom.appendChild(el2, el3);
          var el3 = dom.createElement("div");
          dom.setAttribute(el3,"class","col-lg-3 col-md-3 col-sm-12 col-xs-12");
          var el4 = dom.createElement("div");
          dom.setAttribute(el4,"class","panel panel-default text-center");
          var el5 = dom.createElement("div");
          dom.setAttribute(el5,"class","panel-heading");
          var el6 = dom.createTextNode("Сироп(ы)");
          dom.appendChild(el5, el6);
          dom.appendChild(el4, el5);
          var el5 = dom.createElement("div");
          dom.setAttribute(el5,"class","panel-body");
          var el6 = dom.createComment("");
          dom.appendChild(el5, el6);
          dom.appendChild(el4, el5);
          dom.appendChild(el3, el4);
          dom.appendChild(el2, el3);
          var el3 = dom.createElement("div");
          dom.setAttribute(el3,"class","col-lg-3 col-md-3 col-sm-12 col-xs-12");
          var el4 = dom.createElement("div");
          dom.setAttribute(el4,"class","panel panel-default text-center");
          var el5 = dom.createElement("div");
          dom.setAttribute(el5,"class","panel-heading");
          var el6 = dom.createTextNode("Стоимость");
          dom.appendChild(el5, el6);
          dom.appendChild(el4, el5);
          var el5 = dom.createElement("div");
          dom.setAttribute(el5,"class","panel-body");
          var el6 = dom.createComment("");
          dom.appendChild(el5, el6);
          var el6 = dom.createTextNode(" руб.");
          dom.appendChild(el5, el6);
          dom.appendChild(el4, el5);
          dom.appendChild(el3, el4);
          dom.appendChild(el2, el3);
          dom.appendChild(el1, el2);
          var el2 = dom.createElement("div");
          dom.setAttribute(el2,"class","clearfix");
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var element0 = dom.childAt(fragment, [0]);
          var element1 = dom.childAt(element0, [0]);
          var element2 = dom.childAt(element0, [1]);
          var element3 = dom.childAt(element2, [1, 0, 1]);
          var morphs = new Array(7);
          morphs[0] = dom.createMorphAt(dom.childAt(element1, [0, 0]),1,1);
          morphs[1] = dom.createMorphAt(dom.childAt(element1, [1, 0]),0,0);
          morphs[2] = dom.createMorphAt(dom.childAt(element2, [0, 0, 1]),0,0);
          morphs[3] = dom.createMorphAt(element3,0,0);
          morphs[4] = dom.createMorphAt(element3,2,2);
          morphs[5] = dom.createMorphAt(dom.childAt(element2, [2, 0, 1]),0,0);
          morphs[6] = dom.createMorphAt(dom.childAt(element2, [3, 0, 1]),0,0);
          return morphs;
        },
        statements: [
          ["content","preorder.status",["loc",[null,[1,234],[1,253]]]],
          ["content","preorder.formatted_created_at",["loc",[null,[1,290],[1,323]]]],
          ["content","preorder.id",["loc",[null,[1,552],[1,567]]]],
          ["content","preorder.drink.name",["loc",[null,[1,742],[1,765]]]],
          ["content","preorder.drink.volume",["loc",[null,[1,772],[1,797]]]],
          ["block","each",[["get","preorder.syurups",["loc",[null,[1,1004],[1,1020]]]]],[],0,null,["loc",[null,[1,986],[1,1087]]]],
          ["content","preorder.drink.price",["loc",[null,[1,1267],[1,1291]]]]
        ],
        locals: ["preorder"],
        templates: [child0]
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
            "column": 1380
          }
        },
        "moduleName": "frontend/templates/mypreorders.hbs"
      },
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createElement("div");
        dom.setAttribute(el1,"class","title text-center");
        var el2 = dom.createElement("h1");
        var el3 = dom.createTextNode("Мои предзаказы");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("div");
        dom.setAttribute(el1,"class","container");
        var el2 = dom.createElement("div");
        dom.setAttribute(el2,"class","preorders");
        var el3 = dom.createComment("");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var morphs = new Array(1);
        morphs[0] = dom.createMorphAt(dom.childAt(fragment, [1, 0]),0,0);
        return morphs;
      },
      statements: [
        ["block","each",[["get","model.preorders",["loc",[null,[1,126],[1,141]]]]],[],0,null,["loc",[null,[1,106],[1,1368]]]]
      ],
      locals: [],
      templates: [child0]
    };
  }()));

});