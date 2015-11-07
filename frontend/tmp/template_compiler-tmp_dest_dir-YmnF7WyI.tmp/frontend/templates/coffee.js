export default Ember.HTMLBars.template((function() {
  var child0 = (function() {
    return {
      meta: {
        "revision": "Ember@1.13.3",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 147
          },
          "end": {
            "line": 1,
            "column": 574
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
        dom.setAttribute(el3,"class","meta");
        var el4 = dom.createElement("span");
        dom.setAttribute(el4,"class","date");
        var el5 = dom.createComment("");
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode(" мл.");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("div");
        dom.setAttribute(el3,"class","description");
        var el4 = dom.createTextNode("Цена ");
        dom.appendChild(el3, el4);
        var el4 = dom.createComment("");
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("  руб.");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("div");
        dom.setAttribute(el2,"class","extra content text-center");
        var el3 = dom.createElement("button");
        dom.setAttribute(el3,"class","ui button mint");
        var el4 = dom.createTextNode("Выбрать");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var element0 = dom.childAt(fragment, [0]);
        var element1 = dom.childAt(element0, [0, 0]);
        var element2 = dom.childAt(element0, [1]);
        var element3 = dom.childAt(element0, [2, 0]);
        var morphs = new Array(5);
        morphs[0] = dom.createAttrMorph(element1, 'src');
        morphs[1] = dom.createMorphAt(dom.childAt(element2, [0]),0,0);
        morphs[2] = dom.createMorphAt(dom.childAt(element2, [1, 0]),0,0);
        morphs[3] = dom.createMorphAt(dom.childAt(element2, [2]),1,1);
        morphs[4] = dom.createElementMorph(element3);
        return morphs;
      },
      statements: [
        ["attribute","src",["get","drink.image",["loc",[null,[1,225],[1,236]]]]],
        ["content","drink.name",["loc",[null,[1,284],[1,298]]]],
        ["content","drink.volume",["loc",[null,[1,339],[1,355]]]],
        ["content","drink.price",["loc",[null,[1,412],[1,427]]]],
        ["element","action",["choose",["get","drink",["loc",[null,[1,515],[1,520]]]]],[],["loc",[null,[1,497],[1,522]]]]
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
          "column": 605
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
      dom.setAttribute(el1,"class","ui container");
      var el2 = dom.createElement("section");
      var el3 = dom.createElement("div");
      dom.setAttribute(el3,"class","title text-center");
      var el4 = dom.createElement("h1");
      dom.setAttribute(el4,"class","ui header");
      var el5 = dom.createTextNode("Выбор кофе");
      dom.appendChild(el4, el5);
      dom.appendChild(el3, el4);
      dom.appendChild(el2, el3);
      var el3 = dom.createElement("div");
      dom.setAttribute(el3,"class","ui three stackable cards");
      var el4 = dom.createComment("");
      dom.appendChild(el3, el4);
      dom.appendChild(el2, el3);
      dom.appendChild(el1, el2);
      dom.appendChild(el0, el1);
      return el0;
    },
    buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
      var morphs = new Array(1);
      morphs[0] = dom.createMorphAt(dom.childAt(fragment, [0, 0, 1]),0,0);
      return morphs;
    },
    statements: [
      ["block","each",[["get","drinks",["loc",[null,[1,155],[1,161]]]]],[],0,null,["loc",[null,[1,147],[1,583]]]]
    ],
    locals: [],
    templates: [child0]
  };
}()));