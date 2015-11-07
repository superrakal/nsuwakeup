define('frontend/templates/components/menu-component', ['exports'], function (exports) {

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
            "column": 355
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
        var el2 = dom.createElement("a");
        dom.setAttribute(el2,"href","/");
        var el3 = dom.createElement("div");
        dom.setAttribute(el3,"class","small_logo");
        dom.appendChild(el2, el3);
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
        var element0 = dom.childAt(fragment, [0, 1, 0]);
        var element1 = dom.childAt(element0, [0]);
        var element2 = dom.childAt(element0, [1]);
        var element3 = dom.childAt(element0, [3, 0]);
        var morphs = new Array(4);
        morphs[0] = dom.createAttrMorph(element1, 'src');
        morphs[1] = dom.createMorphAt(element2,0,0);
        morphs[2] = dom.createMorphAt(element2,2,2);
        morphs[3] = dom.createElementMorph(element3);
        return morphs;
      },
      statements: [
        ["attribute","src",["get","model.vk_photo",["loc",[null,[1,138],[1,152]]]]],
        ["content","model.first_name",["loc",[null,[1,185],[1,205]]]],
        ["content","model.last_name",["loc",[null,[1,211],[1,230]]]],
        ["element","action",["sign_out"],[],["loc",[null,[1,287],[1,308]]]]
      ],
      locals: [],
      templates: []
    };
  }()));

});