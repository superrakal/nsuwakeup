define('frontend/templates/queue', ['exports'], function (exports) {

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
                "column": 1211
              },
              "end": {
                "line": 1,
                "column": 1303
              }
            },
            "moduleName": "frontend/templates/queue.hbs"
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
            ["content","syurup.name",["loc",[null,[1,1281],[1,1296]]]]
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
                "column": 1578
              },
              "end": {
                "line": 1,
                "column": 1692
              }
            },
            "moduleName": "frontend/templates/queue.hbs"
          },
          arity: 0,
          cachedFragment: null,
          hasRendered: false,
          buildFragment: function buildFragment(dom) {
            var el0 = dom.createDocumentFragment();
            var el1 = dom.createElement("div");
            dom.setAttribute(el1,"class","comments");
            var el2 = dom.createElement("p");
            var el3 = dom.createTextNode("Коментарий к заказу: ");
            dom.appendChild(el2, el3);
            var el3 = dom.createComment("");
            dom.appendChild(el2, el3);
            dom.appendChild(el1, el2);
            dom.appendChild(el0, el1);
            return el0;
          },
          buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
            var morphs = new Array(1);
            morphs[0] = dom.createMorphAt(dom.childAt(fragment, [0, 0]),1,1);
            return morphs;
          },
          statements: [
            ["content","preorder.comments",["loc",[null,[1,1661],[1,1682]]]]
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
              "column": 111
            },
            "end": {
              "line": 1,
              "column": 1705
            }
          },
          "moduleName": "frontend/templates/queue.hbs"
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
          dom.setAttribute(el2,"class","user");
          var el3 = dom.createElement("div");
          dom.setAttribute(el3,"class","pull-left");
          var el4 = dom.createElement("p");
          var el5 = dom.createTextNode("Заказчик: ");
          dom.appendChild(el4, el5);
          var el5 = dom.createElement("a");
          var el6 = dom.createComment("");
          dom.appendChild(el5, el6);
          var el6 = dom.createTextNode(" ");
          dom.appendChild(el5, el6);
          var el6 = dom.createComment("");
          dom.appendChild(el5, el6);
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
          var el2 = dom.createComment("");
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var element0 = dom.childAt(fragment, [0]);
          var element1 = dom.childAt(element0, [0]);
          var element2 = dom.childAt(element0, [1, 0, 0, 1]);
          var element3 = dom.childAt(element0, [2]);
          var element4 = dom.childAt(element3, [1, 0, 1]);
          var morphs = new Array(11);
          morphs[0] = dom.createMorphAt(dom.childAt(element1, [0, 0]),1,1);
          morphs[1] = dom.createMorphAt(dom.childAt(element1, [1, 0]),0,0);
          morphs[2] = dom.createAttrMorph(element2, 'href');
          morphs[3] = dom.createMorphAt(element2,0,0);
          morphs[4] = dom.createMorphAt(element2,2,2);
          morphs[5] = dom.createMorphAt(dom.childAt(element3, [0, 0, 1]),0,0);
          morphs[6] = dom.createMorphAt(element4,0,0);
          morphs[7] = dom.createMorphAt(element4,2,2);
          morphs[8] = dom.createMorphAt(dom.childAt(element3, [2, 0, 1]),0,0);
          morphs[9] = dom.createMorphAt(dom.childAt(element3, [3, 0, 1]),0,0);
          morphs[10] = dom.createMorphAt(element0,4,4);
          return morphs;
        },
        statements: [
          ["content","preorder.status",["loc",[null,[1,233],[1,252]]]],
          ["content","preorder.formatted_created_at",["loc",[null,[1,289],[1,322]]]],
          ["attribute","href",["concat",["https://vk.com/",["get","preorder.user.vk_screen_name",["loc",[null,[1,451],[1,479]]]]]]],
          ["content","preorder.user.first_name",["loc",[null,[1,483],[1,511]]]],
          ["content","preorder.user.last_name",["loc",[null,[1,517],[1,544]]]],
          ["content","preorder.id",["loc",[null,[1,777],[1,792]]]],
          ["content","preorder.drink.name",["loc",[null,[1,967],[1,990]]]],
          ["content","preorder.drink.volume",["loc",[null,[1,997],[1,1022]]]],
          ["block","each",[["get","preorder.syurups",["loc",[null,[1,1229],[1,1245]]]]],[],0,null,["loc",[null,[1,1211],[1,1312]]]],
          ["content","preorder.drink.price",["loc",[null,[1,1492],[1,1516]]]],
          ["block","if",[["get","preorder.comments.length",["loc",[null,[1,1584],[1,1608]]]]],[],1,null,["loc",[null,[1,1578],[1,1699]]]]
        ],
        locals: ["preorder"],
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
            "column": 1726
          }
        },
        "moduleName": "frontend/templates/queue.hbs"
      },
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createElement("div");
        dom.setAttribute(el1,"class","title text-center");
        var el2 = dom.createElement("h1");
        var el3 = dom.createTextNode("Очередь предзаказов");
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
        ["block","each",[["get","preorders",["loc",[null,[1,131],[1,140]]]]],[],0,null,["loc",[null,[1,111],[1,1714]]]]
      ],
      locals: [],
      templates: [child0]
    };
  }()));

});