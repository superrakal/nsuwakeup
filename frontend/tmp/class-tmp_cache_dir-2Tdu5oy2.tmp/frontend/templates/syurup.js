define('frontend/templates/syurup', ['exports'], function (exports) {

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
              "column": 108
            },
            "end": {
              "line": 1,
              "column": 184
            }
          },
          "moduleName": "frontend/templates/syurup.hbs"
        },
        arity: 1,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createComment("");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var morphs = new Array(1);
          morphs[0] = dom.createMorphAt(fragment,0,0,contextualElement);
          dom.insertBoundary(fragment, 0);
          dom.insertBoundary(fragment, null);
          return morphs;
        },
        statements: [
          ["inline","syurup-component",[],["syurup",["subexpr","@mut",[["get","syurup",["loc",[null,[1,161],[1,167]]]]],[],[]],"preorder",["subexpr","@mut",[["get","model",["loc",[null,[1,177],[1,182]]]]],[],[]]],["loc",[null,[1,135],[1,184]]]]
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
            "column": 0
          },
          "end": {
            "line": 1,
            "column": 336
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
        dom.setAttribute(el1,"class","title text-center");
        var el2 = dom.createElement("h1");
        var el3 = dom.createTextNode("Выбор сиропа(ов)");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("div");
        dom.setAttribute(el1,"class","items col-md-12");
        var el2 = dom.createElement("div");
        dom.setAttribute(el2,"class","row");
        var el3 = dom.createComment("");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("div");
        dom.setAttribute(el2,"class","row");
        var el3 = dom.createElement("div");
        dom.setAttribute(el3,"class","text-center");
        var el4 = dom.createElement("button");
        dom.setAttribute(el4,"class","btn btn-lg btn-success");
        var el5 = dom.createTextNode("Оформить");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var element0 = dom.childAt(fragment, [1]);
        var element1 = dom.childAt(element0, [1, 0, 0]);
        var morphs = new Array(2);
        morphs[0] = dom.createMorphAt(dom.childAt(element0, [0]),0,0);
        morphs[1] = dom.createElementMorph(element1);
        return morphs;
      },
      statements: [
        ["block","each",[["get","syurups",["loc",[null,[1,126],[1,133]]]]],[],0,null,["loc",[null,[1,108],[1,193]]]],
        ["element","action",["confirm"],[],["loc",[null,[1,249],[1,269]]]]
      ],
      locals: [],
      templates: [child0]
    };
  }()));

});