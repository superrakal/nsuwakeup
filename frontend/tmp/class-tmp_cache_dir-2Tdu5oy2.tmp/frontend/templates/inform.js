define('frontend/templates/inform', ['exports'], function (exports) {

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
              "column": 680
            },
            "end": {
              "line": 1,
              "column": 734
            }
          },
          "moduleName": "frontend/templates/inform.hbs"
        },
        arity: 1,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createComment("");
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode(" ");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var morphs = new Array(1);
          morphs[0] = dom.createMorphAt(fragment,0,0,contextualElement);
          dom.insertBoundary(fragment, 0);
          return morphs;
        },
        statements: [
          ["content","syurup.name",["loc",[null,[1,713],[1,728]]]]
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
              "column": 1358
            },
            "end": {
              "line": 1,
              "column": 1674
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
          dom.setAttribute(el1,"role","alert");
          dom.setAttribute(el1,"class","alert alert-success alert-dismissible fade in");
          var el2 = dom.createElement("button");
          dom.setAttribute(el2,"aria-label","Close");
          dom.setAttribute(el2,"data-dismiss","alert");
          dom.setAttribute(el2,"type","button");
          dom.setAttribute(el2,"class","close");
          var el3 = dom.createElement("span");
          dom.setAttribute(el3,"aria-hidden","true");
          var el4 = dom.createTextNode(" ×");
          dom.appendChild(el3, el4);
          dom.appendChild(el2, el3);
          dom.appendChild(el1, el2);
          var el2 = dom.createElement("p");
          var el3 = dom.createTextNode("Ваш заказ принят. Заберите его у точки выдачи вовремя!  ");
          dom.appendChild(el2, el3);
          dom.appendChild(el1, el2);
          var el2 = dom.createElement("strong");
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
                "column": 1682
              },
              "end": {
                "line": 1,
                "column": 1752
              }
            },
            "moduleName": "frontend/templates/inform.hbs"
          },
          arity: 0,
          cachedFragment: null,
          hasRendered: false,
          buildFragment: function buildFragment(dom) {
            var el0 = dom.createDocumentFragment();
            var el1 = dom.createElement("i");
            dom.setAttribute(el1,"class","fa fa-circle-o-notch fa-spin fa-3x");
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
                "column": 1752
              },
              "end": {
                "line": 1,
                "column": 1850
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
            dom.setAttribute(el1,"class","btn btn-success btn-lg");
            var el2 = dom.createTextNode("Подтвердить предзаказ");
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
            ["element","action",["confirm"],[],["loc",[null,[1,1768],[1,1788]]]]
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
              "column": 1674
            },
            "end": {
              "line": 1,
              "column": 1857
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
          ["block","if",[["get","isConfirming",["loc",[null,[1,1688],[1,1700]]]]],[],0,1,["loc",[null,[1,1682],[1,1857]]]]
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
            "column": 2336
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
        dom.setAttribute(el1,"class","title text-center");
        var el2 = dom.createElement("h1");
        var el3 = dom.createTextNode("Подтверждение предзаказа");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("div");
        dom.setAttribute(el1,"class","col-md-12");
        var el2 = dom.createElement("div");
        dom.setAttribute(el2,"class","col-lg-3 col-md-3 col-sm-12 col-xs-12");
        var el3 = dom.createElement("div");
        dom.setAttribute(el3,"class","panel panel-default text-center");
        var el4 = dom.createElement("div");
        dom.setAttribute(el4,"class","panel-heading");
        var el5 = dom.createTextNode("id Заказа");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("div");
        dom.setAttribute(el4,"class","panel-body");
        var el5 = dom.createComment("");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("div");
        dom.setAttribute(el2,"class","col-lg-3 col-md-3 col-sm-12 col-xs-12");
        var el3 = dom.createElement("div");
        dom.setAttribute(el3,"class","panel panel-default text-center");
        var el4 = dom.createElement("div");
        dom.setAttribute(el4,"class","panel-heading");
        var el5 = dom.createTextNode("Кофе");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("div");
        dom.setAttribute(el4,"class","panel-body");
        var el5 = dom.createComment("");
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode(" (");
        dom.appendChild(el4, el5);
        var el5 = dom.createComment("");
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode(" мл.)");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("div");
        dom.setAttribute(el2,"class","col-lg-3 col-md-3 col-sm-12 col-xs-12");
        var el3 = dom.createElement("div");
        dom.setAttribute(el3,"class","panel panel-default text-center");
        var el4 = dom.createElement("div");
        dom.setAttribute(el4,"class","panel-heading");
        var el5 = dom.createTextNode("Сироп(ы)");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("div");
        dom.setAttribute(el4,"class","panel-body");
        var el5 = dom.createComment("");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("div");
        dom.setAttribute(el2,"class","col-lg-3 col-md-3 col-sm-12 col-xs-12");
        var el3 = dom.createElement("div");
        dom.setAttribute(el3,"class","panel panel-default text-center");
        var el4 = dom.createElement("div");
        dom.setAttribute(el4,"class","panel-heading");
        var el5 = dom.createTextNode("Стоимость");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("div");
        dom.setAttribute(el4,"class","panel-body");
        var el5 = dom.createComment("");
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode(" руб.");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("div");
        dom.setAttribute(el1,"class","col-md-12 comments text-center");
        var el2 = dom.createElement("h3");
        var el3 = dom.createTextNode("Вы можете оставить комментарий к заказу.");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("small");
        var el3 = dom.createTextNode("Если у Вас есть скидочная карта, то скидка предоставляется при личной демонстрации наличия карты.");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("br");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("br");
        dom.appendChild(el1, el2);
        var el2 = dom.createComment("");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("div");
        dom.setAttribute(el1,"class","col-md-12 confirm_preorder text-center");
        var el2 = dom.createComment("");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("div");
        dom.setAttribute(el1,"class","col-md-12");
        var el2 = dom.createElement("blockquote");
        var el3 = dom.createElement("p");
        var el4 = dom.createTextNode("Огласим некоторые правила. Ваш предзаказ доступен к выдаче в течении двух часов с момента оформления и, соответственно, изготовления.");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("p");
        var el4 = dom.createTextNode("Если Вы не забрали свой заказ в указанный срок, то он автоматически анулируется, кофе выливается, а Вы добавляетесь в черный список нашего заведения.");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("p");
        var el4 = dom.createTextNode("При оплате штрафа за ложный предзаказ Вы убираетесь из черного списка.");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("footer");
        var el4 = dom.createTextNode("Команда WakeUp! Coffee");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var element1 = dom.childAt(fragment, [1]);
        var element2 = dom.childAt(element1, [1, 0, 1]);
        var morphs = new Array(7);
        morphs[0] = dom.createMorphAt(dom.childAt(element1, [0, 0, 1]),0,0);
        morphs[1] = dom.createMorphAt(element2,0,0);
        morphs[2] = dom.createMorphAt(element2,2,2);
        morphs[3] = dom.createMorphAt(dom.childAt(element1, [2, 0, 1]),0,0);
        morphs[4] = dom.createMorphAt(dom.childAt(element1, [3, 0, 1]),0,0);
        morphs[5] = dom.createMorphAt(dom.childAt(fragment, [2]),4,4);
        morphs[6] = dom.createMorphAt(dom.childAt(fragment, [3]),0,0);
        return morphs;
      },
      statements: [
        ["content","model.id",["loc",[null,[1,255],[1,267]]]],
        ["content","model.drink.name",["loc",[null,[1,442],[1,462]]]],
        ["content","model.drink.volume",["loc",[null,[1,469],[1,491]]]],
        ["block","each",[["get","model.syurups",["loc",[null,[1,698],[1,711]]]]],[],0,null,["loc",[null,[1,680],[1,743]]]],
        ["content","model.drink.price",["loc",[null,[1,923],[1,944]]]],
        ["inline","textarea",[],["value",["subexpr","@mut",[["get","model.comments",["loc",[null,[1,1208],[1,1222]]]]],[],[]],"placeholder","Оставьте Ваши пожелания и мы постараемся их воплотить в жизнь"],["loc",[null,[1,1191],[1,1300]]]],
        ["block","if",[["get","isConfirmed",["loc",[null,[1,1364],[1,1375]]]]],[],1,2,["loc",[null,[1,1358],[1,1864]]]]
      ],
      locals: [],
      templates: [child0, child1, child2]
    };
  }()));

});