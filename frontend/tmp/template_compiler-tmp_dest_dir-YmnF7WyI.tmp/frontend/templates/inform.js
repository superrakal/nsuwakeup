export default Ember.HTMLBars.template((function() {
  var child0 = (function() {
    return {
      meta: {
        "revision": "Ember@1.13.3",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 382
          },
          "end": {
            "line": 1,
            "column": 450
          }
        },
        "moduleName": "frontend/templates/inform.hbs"
      },
      arity: 1,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createElement("span");
        var el2 = dom.createComment("");
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("; ");
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
        ["content","syurup.name",["loc",[null,[1,421],[1,436]]]]
      ],
      locals: ["syurup"],
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
            "column": 885
          },
          "end": {
            "line": 1,
            "column": 1044
          }
        },
        "moduleName": "frontend/templates/inform.hbs"
      },
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createElement("div");
        dom.setAttribute(el1,"class","ui success message");
        var el2 = dom.createElement("div");
        dom.setAttribute(el2,"class","header");
        var el3 = dom.createTextNode("Ваш заказ принят. Заберите его у точки выдачи вовремя!");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("p");
        var el3 = dom.createTextNode("Хорошего дня :)");
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
              "column": 1052
            },
            "end": {
              "line": 1,
              "column": 1134
            }
          },
          "moduleName": "frontend/templates/inform.hbs"
        },
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createElement("button");
          dom.setAttribute(el1,"class","ui mint loading button huge");
          var el2 = dom.createTextNode("Оформляем");
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
    }());
    var child1 = (function() {
      return {
        meta: {
          "revision": "Ember@1.13.3",
          "loc": {
            "source": null,
            "start": {
              "line": 1,
              "column": 1134
            },
            "end": {
              "line": 1,
              "column": 1328
            }
          },
          "moduleName": "frontend/templates/inform.hbs"
        },
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createElement("div");
          dom.setAttribute(el1,"tabindex","0");
          dom.setAttribute(el1,"class","ui animated fade button mint huge");
          var el2 = dom.createElement("div");
          dom.setAttribute(el2,"class","visible content");
          var el3 = dom.createTextNode("Подтвердить предзаказ");
          dom.appendChild(el2, el3);
          dom.appendChild(el1, el2);
          var el2 = dom.createElement("div");
          dom.setAttribute(el2,"class","hidden content");
          var el3 = dom.createTextNode("Заказать!");
          dom.appendChild(el2, el3);
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
          ["element","action",["confirm"],[],["loc",[null,[1,1147],[1,1167]]]]
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
            "column": 1044
          },
          "end": {
            "line": 1,
            "column": 1335
          }
        },
        "moduleName": "frontend/templates/inform.hbs"
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
        ["block","if",[["get","isConfirming",["loc",[null,[1,1058],[1,1070]]]]],[],0,1,["loc",[null,[1,1052],[1,1335]]]]
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
          "column": 1878
        }
      },
      "moduleName": "frontend/templates/inform.hbs"
    },
    arity: 0,
    cachedFragment: null,
    hasRendered: false,
    buildFragment: function buildFragment(dom) {
      var el0 = dom.createDocumentFragment();
      var el1 = dom.createElement("div");
      dom.setAttribute(el1,"class","ui container text-center");
      var el2 = dom.createElement("section");
      var el3 = dom.createElement("div");
      dom.setAttribute(el3,"class","title text-center");
      var el4 = dom.createElement("h1");
      dom.setAttribute(el4,"class","ui huge");
      var el5 = dom.createTextNode("Подтверждение предзаказа");
      dom.appendChild(el4, el5);
      dom.appendChild(el3, el4);
      dom.appendChild(el2, el3);
      dom.appendChild(el1, el2);
      var el2 = dom.createElement("table");
      dom.setAttribute(el2,"class","ui tablet stackable table");
      var el3 = dom.createElement("thead");
      var el4 = dom.createElement("tr");
      var el5 = dom.createElement("th");
      var el6 = dom.createTextNode("id заказа");
      dom.appendChild(el5, el6);
      dom.appendChild(el4, el5);
      var el5 = dom.createElement("th");
      var el6 = dom.createTextNode("Кофе");
      dom.appendChild(el5, el6);
      dom.appendChild(el4, el5);
      var el5 = dom.createElement("th");
      var el6 = dom.createTextNode("Сироп(ы)");
      dom.appendChild(el5, el6);
      dom.appendChild(el4, el5);
      var el5 = dom.createElement("th");
      var el6 = dom.createTextNode("Стоимость");
      dom.appendChild(el5, el6);
      dom.appendChild(el4, el5);
      dom.appendChild(el3, el4);
      dom.appendChild(el2, el3);
      var el3 = dom.createElement("tbody");
      var el4 = dom.createElement("tr");
      var el5 = dom.createElement("td");
      var el6 = dom.createComment("");
      dom.appendChild(el5, el6);
      dom.appendChild(el4, el5);
      var el5 = dom.createElement("td");
      var el6 = dom.createComment("");
      dom.appendChild(el5, el6);
      var el6 = dom.createTextNode(" (");
      dom.appendChild(el5, el6);
      var el6 = dom.createComment("");
      dom.appendChild(el5, el6);
      var el6 = dom.createTextNode(" мл.)");
      dom.appendChild(el5, el6);
      dom.appendChild(el4, el5);
      var el5 = dom.createElement("td");
      var el6 = dom.createComment("");
      dom.appendChild(el5, el6);
      dom.appendChild(el4, el5);
      var el5 = dom.createElement("td");
      var el6 = dom.createComment("");
      dom.appendChild(el5, el6);
      var el6 = dom.createTextNode(" руб.");
      dom.appendChild(el5, el6);
      dom.appendChild(el4, el5);
      dom.appendChild(el3, el4);
      dom.appendChild(el2, el3);
      dom.appendChild(el1, el2);
      var el2 = dom.createElement("h3");
      dom.setAttribute(el2,"class","ui huge");
      var el3 = dom.createTextNode("Вы можете оставить комментарий к заказу.");
      dom.appendChild(el2, el3);
      dom.appendChild(el1, el2);
      var el2 = dom.createElement("p");
      var el3 = dom.createTextNode("Если у Вас есть скидочная карта, то скидка предоставляется при личной демонстрации наличия карты.");
      dom.appendChild(el2, el3);
      dom.appendChild(el1, el2);
      var el2 = dom.createElement("div");
      dom.setAttribute(el2,"class","ui form");
      var el3 = dom.createElement("div");
      dom.setAttribute(el3,"class","field");
      var el4 = dom.createComment("");
      dom.appendChild(el3, el4);
      dom.appendChild(el2, el3);
      dom.appendChild(el1, el2);
      var el2 = dom.createElement("section");
      var el3 = dom.createComment("");
      dom.appendChild(el2, el3);
      dom.appendChild(el1, el2);
      var el2 = dom.createElement("div");
      dom.setAttribute(el2,"class","col-md-12");
      var el3 = dom.createElement("blockquote");
      var el4 = dom.createElement("p");
      var el5 = dom.createTextNode("Огласим некоторые правила. Ваш предзаказ доступен к выдаче в течении двух часов с момента оформления и, соответственно, изготовления.");
      dom.appendChild(el4, el5);
      dom.appendChild(el3, el4);
      var el4 = dom.createElement("p");
      var el5 = dom.createTextNode("Если Вы не забрали свой заказ в указанный срок, то он автоматически анулируется, кофе выливается, а Вы добавляетесь в черный список нашего заведения.");
      dom.appendChild(el4, el5);
      dom.appendChild(el3, el4);
      var el4 = dom.createElement("p");
      var el5 = dom.createTextNode("При оплате штрафа за ложный предзаказ Вы убираетесь из черного списка.");
      dom.appendChild(el4, el5);
      dom.appendChild(el3, el4);
      var el4 = dom.createElement("h4");
      dom.setAttribute(el4,"class","ui horizontal divider header");
      var el5 = dom.createElement("i");
      dom.setAttribute(el5,"class","fa fa-coffee icon");
      dom.appendChild(el4, el5);
      var el5 = dom.createTextNode("WakeUp! Coffee");
      dom.appendChild(el4, el5);
      dom.appendChild(el3, el4);
      dom.appendChild(el2, el3);
      dom.appendChild(el1, el2);
      dom.appendChild(el0, el1);
      return el0;
    },
    buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
      var element1 = dom.childAt(fragment, [0]);
      var element2 = dom.childAt(element1, [1, 1, 0]);
      var element3 = dom.childAt(element2, [1]);
      var morphs = new Array(7);
      morphs[0] = dom.createMorphAt(dom.childAt(element2, [0]),0,0);
      morphs[1] = dom.createMorphAt(element3,0,0);
      morphs[2] = dom.createMorphAt(element3,2,2);
      morphs[3] = dom.createMorphAt(dom.childAt(element2, [2]),0,0);
      morphs[4] = dom.createMorphAt(dom.childAt(element2, [3]),0,0);
      morphs[5] = dom.createMorphAt(dom.childAt(element1, [4, 0]),0,0);
      morphs[6] = dom.createMorphAt(dom.childAt(element1, [5]),0,0);
      return morphs;
    },
    statements: [
      ["content","model.number",["loc",[null,[1,289],[1,305]]]],
      ["content","model.drink.name",["loc",[null,[1,314],[1,334]]]],
      ["content","model.drink.volume",["loc",[null,[1,341],[1,363]]]],
      ["block","each",[["get","model.syurups",["loc",[null,[1,400],[1,413]]]]],[],0,null,["loc",[null,[1,382],[1,459]]]],
      ["content","model.drink.price",["loc",[null,[1,468],[1,489]]]],
      ["inline","textarea",[],["value",["subexpr","@mut",[["get","model.comments",["loc",[null,[1,751],[1,765]]]]],[],[]],"placeholder","Оставьте Ваши пожелания и мы постараемся их воплотить в жизнь","disabled",["subexpr","@mut",[["get","isConfirmed",["loc",[null,[1,851],[1,862]]]]],[],[]]],["loc",[null,[1,734],[1,864]]]],
      ["block","if",[["get","isConfirmed",["loc",[null,[1,891],[1,902]]]]],[],1,2,["loc",[null,[1,885],[1,1342]]]]
    ],
    locals: [],
    templates: [child0, child1, child2]
  };
}()));