define('frontend/templates/syurup', ['exports'], function (exports) {

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
                "column": 335
              },
              "end": {
                "line": 1,
                "column": 371
              }
            },
            "moduleName": "frontend/templates/syurup.hbs"
          },
          arity: 0,
          cachedFragment: null,
          hasRendered: false,
          buildFragment: function buildFragment(dom) {
            var el0 = dom.createDocumentFragment();
            var el1 = dom.createTextNode("В наличии");
            dom.appendChild(el0, el1);
            return el0;
          },
          buildRenderNodes: function buildRenderNodes() { return []; },
          statements: [

          ],
          locals: [],
          templates: []
        };
      }());
      var child1 = (function() {
        return {
          meta: {
            "revision": "Ember@1.13.3",
            "loc": {
              "source": null,
              "start": {
                "line": 1,
                "column": 371
              },
              "end": {
                "line": 1,
                "column": 395
              }
            },
            "moduleName": "frontend/templates/syurup.hbs"
          },
          arity: 0,
          cachedFragment: null,
          hasRendered: false,
          buildFragment: function buildFragment(dom) {
            var el0 = dom.createDocumentFragment();
            var el1 = dom.createTextNode("Нет в наличии :(");
            dom.appendChild(el0, el1);
            return el0;
          },
          buildRenderNodes: function buildRenderNodes() { return []; },
          statements: [

          ],
          locals: [],
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
              "column": 153
            },
            "end": {
              "line": 1,
              "column": 514
            }
          },
          "moduleName": "frontend/templates/syurup.hbs"
        },
        arity: 1,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createElement("div");
          dom.setAttribute(el1,"class","ui card");
          var el2 = dom.createElement("div");
          dom.setAttribute(el2,"class","image");
          var el3 = dom.createElement("img");
          dom.appendChild(el2, el3);
          dom.appendChild(el1, el2);
          var el2 = dom.createElement("div");
          dom.setAttribute(el2,"class","content");
          var el3 = dom.createElement("a");
          dom.setAttribute(el3,"class","header");
          var el4 = dom.createComment("");
          dom.appendChild(el3, el4);
          dom.appendChild(el2, el3);
          var el3 = dom.createElement("div");
          dom.setAttribute(el3,"class","description");
          var el4 = dom.createComment("");
          dom.appendChild(el3, el4);
          dom.appendChild(el2, el3);
          dom.appendChild(el1, el2);
          var el2 = dom.createElement("div");
          dom.setAttribute(el2,"class","extra content text-center");
          var el3 = dom.createComment("");
          dom.appendChild(el2, el3);
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var element0 = dom.childAt(fragment, [0]);
          var element1 = dom.childAt(element0, [0, 0]);
          var element2 = dom.childAt(element0, [1]);
          var morphs = new Array(4);
          morphs[0] = dom.createAttrMorph(element1, 'src');
          morphs[1] = dom.createMorphAt(dom.childAt(element2, [0]),0,0);
          morphs[2] = dom.createMorphAt(dom.childAt(element2, [1]),0,0);
          morphs[3] = dom.createMorphAt(dom.childAt(element0, [2]),0,0);
          return morphs;
        },
        statements: [
          ["attribute","src",["get","syurup.image",["loc",[null,[1,231],[1,243]]]]],
          ["content","syurup.name",["loc",[null,[1,291],[1,306]]]],
          ["block","if",[["get","syurup.is_available",["loc",[null,[1,341],[1,360]]]]],[],0,1,["loc",[null,[1,335],[1,402]]]],
          ["inline","syurup-component",[],["syurup",["subexpr","@mut",[["get","syurup",["loc",[null,[1,479],[1,485]]]]],[],[]],"preorder",["subexpr","@mut",[["get","model",["loc",[null,[1,495],[1,500]]]]],[],[]]],["loc",[null,[1,453],[1,502]]]]
        ],
        locals: ["syurup"],
        templates: [child0, child1]
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
            "column": 772
          }
        },
        "moduleName": "frontend/templates/syurup.hbs"
      },
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createElement("div");
        dom.setAttribute(el1,"class","ui container");
        var el2 = dom.createElement("section");
        var el3 = dom.createElement("div");
        dom.setAttribute(el3,"class","title text-center");
        var el4 = dom.createElement("h1");
        dom.setAttribute(el4,"class","ui header");
        var el5 = dom.createTextNode("Выбор сиропа(ов)");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("div");
        dom.setAttribute(el3,"class","ui three stackable cards");
        var el4 = dom.createComment("");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("section");
        dom.setAttribute(el2,"class","text-center");
        var el3 = dom.createElement("div");
        dom.setAttribute(el3,"tabindex","0");
        dom.setAttribute(el3,"class","ui animated fade button mint huge");
        var el4 = dom.createElement("div");
        dom.setAttribute(el4,"class","visible content");
        var el5 = dom.createTextNode("Подтвердить предзаказ");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("div");
        dom.setAttribute(el4,"class","hidden content");
        var el5 = dom.createTextNode("Подтвердить");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var element3 = dom.childAt(fragment, [0]);
        var element4 = dom.childAt(element3, [1, 0]);
        var morphs = new Array(2);
        morphs[0] = dom.createMorphAt(dom.childAt(element3, [0, 1]),0,0);
        morphs[1] = dom.createElementMorph(element4);
        return morphs;
      },
      statements: [
        ["block","each",[["get","syurups",["loc",[null,[1,171],[1,178]]]]],[],0,null,["loc",[null,[1,153],[1,523]]]],
        ["element","action",["confirm"],[],["loc",[null,[1,573],[1,593]]]]
      ],
      locals: [],
      templates: [child0]
    };
  }()));

});