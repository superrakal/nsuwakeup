export default Ember.HTMLBars.template((function() {
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
          "column": 458
        }
      },
      "moduleName": "frontend/templates/components/steps-component.hbs"
    },
    arity: 0,
    cachedFragment: null,
    hasRendered: false,
    buildFragment: function buildFragment(dom) {
      var el0 = dom.createDocumentFragment();
      var el1 = dom.createElement("div");
      dom.setAttribute(el1,"class","ui last container");
      var el2 = dom.createElement("div");
      dom.setAttribute(el2,"class","ui three steps");
      var el3 = dom.createElement("div");
      dom.setAttribute(el3,"class","step");
      var el4 = dom.createElement("i");
      dom.setAttribute(el4,"class","fa fa-coffee icon");
      dom.appendChild(el3, el4);
      var el4 = dom.createElement("div");
      dom.setAttribute(el4,"class","content");
      var el5 = dom.createElement("div");
      dom.setAttribute(el5,"class","title");
      var el6 = dom.createTextNode("Выберите кофе");
      dom.appendChild(el5, el6);
      dom.appendChild(el4, el5);
      dom.appendChild(el3, el4);
      dom.appendChild(el2, el3);
      var el3 = dom.createElement("div");
      dom.setAttribute(el3,"class","step");
      var el4 = dom.createElement("i");
      dom.setAttribute(el4,"class","fa fa-eyedropper icon");
      dom.appendChild(el3, el4);
      var el4 = dom.createElement("div");
      dom.setAttribute(el4,"class","content");
      var el5 = dom.createElement("div");
      dom.setAttribute(el5,"class","title");
      var el6 = dom.createTextNode("Добавьте сироп(ы)");
      dom.appendChild(el5, el6);
      dom.appendChild(el4, el5);
      dom.appendChild(el3, el4);
      dom.appendChild(el2, el3);
      var el3 = dom.createElement("div");
      dom.setAttribute(el3,"class","step");
      var el4 = dom.createElement("i");
      dom.setAttribute(el4,"class","fa fa-file-text-o icon");
      dom.appendChild(el3, el4);
      var el4 = dom.createElement("div");
      dom.setAttribute(el4,"class","content");
      var el5 = dom.createElement("div");
      dom.setAttribute(el5,"class","title");
      var el6 = dom.createTextNode("Подтвердите предзаказ");
      dom.appendChild(el5, el6);
      dom.appendChild(el4, el5);
      dom.appendChild(el3, el4);
      dom.appendChild(el2, el3);
      dom.appendChild(el1, el2);
      dom.appendChild(el0, el1);
      return el0;
    },
    buildRenderNodes: function buildRenderNodes() { return []; },
    statements: [

    ],
    locals: [],
    templates: []
  };
}()));