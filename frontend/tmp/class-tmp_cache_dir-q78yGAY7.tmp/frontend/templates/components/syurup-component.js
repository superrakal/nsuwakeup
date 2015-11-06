define('frontend/templates/components/syurup-component', ['exports'], function (exports) {

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
              "column": 226
            },
            "end": {
              "line": 1,
              "column": 262
            }
          },
          "moduleName": "frontend/templates/components/syurup-component.hbs"
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
              "column": 262
            },
            "end": {
              "line": 1,
              "column": 286
            }
          },
          "moduleName": "frontend/templates/components/syurup-component.hbs"
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
    var child2 = (function() {
      var child0 = (function() {
        return {
          meta: {
            "revision": "Ember@1.13.3",
            "loc": {
              "source": null,
              "start": {
                "line": 1,
                "column": 357
              },
              "end": {
                "line": 1,
                "column": 438
              }
            },
            "moduleName": "frontend/templates/components/syurup-component.hbs"
          },
          arity: 0,
          cachedFragment: null,
          hasRendered: false,
          buildFragment: function buildFragment(dom) {
            var el0 = dom.createDocumentFragment();
            var el1 = dom.createElement("button");
            dom.setAttribute(el1,"class","btn btn-danger");
            var el2 = dom.createTextNode("Убрать");
            dom.appendChild(el1, el2);
            dom.appendChild(el0, el1);
            return el0;
          },
          buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
            var element1 = dom.childAt(fragment, [0]);
            var morphs = new Array(1);
            morphs[0] = dom.createElementMorph(element1);
            return morphs;
          },
          statements: [
            ["element","action",["remove"],[],["loc",[null,[1,380],[1,399]]]]
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
                "column": 438
              },
              "end": {
                "line": 1,
                "column": 512
              }
            },
            "moduleName": "frontend/templates/components/syurup-component.hbs"
          },
          arity: 0,
          cachedFragment: null,
          hasRendered: false,
          buildFragment: function buildFragment(dom) {
            var el0 = dom.createDocumentFragment();
            var el1 = dom.createElement("button");
            dom.setAttribute(el1,"class","btn btn-success");
            var el2 = dom.createTextNode("Добавить");
            dom.appendChild(el1, el2);
            dom.appendChild(el0, el1);
            return el0;
          },
          buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
            var element0 = dom.childAt(fragment, [0]);
            var morphs = new Array(1);
            morphs[0] = dom.createElementMorph(element0);
            return morphs;
          },
          statements: [
            ["element","action",["add"],[],["loc",[null,[1,454],[1,470]]]]
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
              "column": 330
            },
            "end": {
              "line": 1,
              "column": 519
            }
          },
          "moduleName": "frontend/templates/components/syurup-component.hbs"
        },
        arity: 0,
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
          ["block","if",[["get","isAdded",["loc",[null,[1,363],[1,370]]]]],[],0,1,["loc",[null,[1,357],[1,519]]]]
        ],
        locals: [],
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
            "column": 615
          }
        },
        "moduleName": "frontend/templates/components/syurup-component.hbs"
      },
      arity: 0,
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
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("div");
        dom.setAttribute(el5,"class","action pull-right");
        var el6 = dom.createComment("");
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
        var element2 = dom.childAt(fragment, [0, 0]);
        var element3 = dom.childAt(element2, [0]);
        var element4 = dom.childAt(element3, [0]);
        var element5 = dom.childAt(element3, [1]);
        var morphs = new Array(4);
        morphs[0] = dom.createAttrMorph(element4, 'src');
        morphs[1] = dom.createMorphAt(dom.childAt(element5, [0]),0,0);
        morphs[2] = dom.createMorphAt(dom.childAt(element5, [1]),0,0);
        morphs[3] = dom.createMorphAt(dom.childAt(element2, [1]),0,0);
        return morphs;
      },
      statements: [
        ["attribute","src",["get","syurup.image",["loc",[null,[1,135],[1,147]]]]],
        ["block","if",[["get","syurup.is_available",["loc",[null,[1,232],[1,251]]]]],[],0,1,["loc",[null,[1,226],[1,293]]]],
        ["block","if",[["get","syurup.is_available",["loc",[null,[1,336],[1,355]]]]],[],2,null,["loc",[null,[1,330],[1,526]]]],
        ["content","syurup.name",["loc",[null,[1,582],[1,597]]]]
      ],
      locals: [],
      templates: [child0, child1, child2]
    };
  }()));

});