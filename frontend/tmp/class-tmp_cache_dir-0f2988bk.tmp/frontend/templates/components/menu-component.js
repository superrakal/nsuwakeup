define('frontend/templates/components/menu-component', ['exports'], function (exports) {

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
              "column": 27
            },
            "end": {
              "line": 1,
              "column": 76
            }
          },
          "moduleName": "frontend/templates/components/menu-component.hbs"
        },
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createElement("div");
          dom.setAttribute(el1,"class","small_logo");
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
              "column": 315
            },
            "end": {
              "line": 1,
              "column": 379
            }
          },
          "moduleName": "frontend/templates/components/menu-component.hbs"
        },
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("Мои заказы (");
          dom.appendChild(el0, el1);
          var el1 = dom.createComment("");
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode(")");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var morphs = new Array(1);
          morphs[0] = dom.createMorphAt(fragment,1,1,contextualElement);
          return morphs;
        },
        statements: [
          ["content","model.preorders_count",["loc",[null,[1,353],[1,378]]]]
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
            "column": 0
          },
          "end": {
            "line": 1,
            "column": 466
          }
        },
        "moduleName": "frontend/templates/components/menu-component.hbs"
      },
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createElement("div");
        dom.setAttribute(el1,"class","ui large menu");
        var el2 = dom.createComment("");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("div");
        dom.setAttribute(el2,"class","right menu");
        var el3 = dom.createElement("div");
        dom.setAttribute(el3,"class","ui dropdown item");
        var el4 = dom.createElement("img");
        dom.setAttribute(el4,"class","ui avatar image");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("span");
        var el5 = dom.createComment("");
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode(" ");
        dom.appendChild(el4, el5);
        var el5 = dom.createComment("");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("i");
        dom.setAttribute(el4,"class","dropdown icon");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("div");
        dom.setAttribute(el4,"class","menu");
        var el5 = dom.createElement("a");
        dom.setAttribute(el5,"class","item");
        var el6 = dom.createComment("");
        dom.appendChild(el5, el6);
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("a");
        dom.setAttribute(el5,"class","item");
        var el6 = dom.createTextNode("Выйти");
        dom.appendChild(el5, el6);
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var element0 = dom.childAt(fragment, [0]);
        var element1 = dom.childAt(element0, [1, 0]);
        var element2 = dom.childAt(element1, [0]);
        var element3 = dom.childAt(element1, [1]);
        var element4 = dom.childAt(element1, [3]);
        var element5 = dom.childAt(element4, [1]);
        var morphs = new Array(6);
        morphs[0] = dom.createMorphAt(element0,0,0);
        morphs[1] = dom.createAttrMorph(element2, 'src');
        morphs[2] = dom.createMorphAt(element3,0,0);
        morphs[3] = dom.createMorphAt(element3,2,2);
        morphs[4] = dom.createMorphAt(dom.childAt(element4, [0]),0,0);
        morphs[5] = dom.createElementMorph(element5);
        return morphs;
      },
      statements: [
        ["block","link-to",["root"],[],0,null,["loc",[null,[1,27],[1,88]]]],
        ["attribute","src",["get","model.vk_photo",["loc",[null,[1,153],[1,167]]]]],
        ["content","model.first_name",["loc",[null,[1,200],[1,220]]]],
        ["content","model.last_name",["loc",[null,[1,226],[1,245]]]],
        ["block","link-to",["mypreorders"],[],1,null,["loc",[null,[1,315],[1,391]]]],
        ["element","action",["sign_out"],[],["loc",[null,[1,398],[1,419]]]]
      ],
      locals: [],
      templates: [child0, child1]
    };
  }()));

});