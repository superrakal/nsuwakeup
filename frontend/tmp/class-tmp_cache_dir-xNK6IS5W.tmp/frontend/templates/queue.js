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
                "column": 314
              },
              "end": {
                "line": 1,
                "column": 566
              }
            },
            "moduleName": "frontend/templates/queue.hbs"
          },
          arity: 0,
          cachedFragment: null,
          hasRendered: false,
          buildFragment: function buildFragment(dom) {
            var el0 = dom.createDocumentFragment();
            var el1 = dom.createElement("button");
            dom.setAttribute(el1,"class","ui circular mint icon button");
            var el2 = dom.createElement("i");
            dom.setAttribute(el2,"class","fa fa-check icon");
            dom.appendChild(el1, el2);
            dom.appendChild(el0, el1);
            var el1 = dom.createElement("button");
            dom.setAttribute(el1,"class","ui circular red icon button");
            var el2 = dom.createElement("i");
            dom.setAttribute(el2,"class","fa fa-times icon");
            dom.appendChild(el1, el2);
            dom.appendChild(el0, el1);
            return el0;
          },
          buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
            var element0 = dom.childAt(fragment, [0]);
            var element1 = dom.childAt(fragment, [1]);
            var morphs = new Array(2);
            morphs[0] = dom.createElementMorph(element0);
            morphs[1] = dom.createElementMorph(element1);
            return morphs;
          },
          statements: [
            ["element","action",["done",["get","preorder",["loc",[null,[1,366],[1,374]]]]],[],["loc",[null,[1,350],[1,376]]]],
            ["element","action",["ban",["get","preorder",["loc",[null,[1,478],[1,486]]]]],[],["loc",[null,[1,463],[1,488]]]]
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
                "column": 960
              },
              "end": {
                "line": 1,
                "column": 1031
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
            ["content","syurup.name",["loc",[null,[1,1002],[1,1017]]]]
          ],
          locals: ["syurup"],
          templates: []
        };
      }());
      var child2 = (function() {
        return {
          meta: {
            "revision": "Ember@1.13.3",
            "loc": {
              "source": null,
              "start": {
                "line": 1,
                "column": 1046
              },
              "end": {
                "line": 1,
                "column": 1153
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
            dom.setAttribute(el1,"class","additional");
            var el2 = dom.createTextNode("Комментарии:  ");
            dom.appendChild(el1, el2);
            var el2 = dom.createComment("");
            dom.appendChild(el1, el2);
            dom.appendChild(el0, el1);
            return el0;
          },
          buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
            var morphs = new Array(1);
            morphs[0] = dom.createMorphAt(dom.childAt(fragment, [0]),1,1);
            return morphs;
          },
          statements: [
            ["content","preorder.comments",["loc",[null,[1,1126],[1,1147]]]]
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
              "column": 108
            },
            "end": {
              "line": 1,
              "column": 1383
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
          dom.setAttribute(el1,"class","ui feed");
          var el2 = dom.createElement("div");
          dom.setAttribute(el2,"class","event");
          var el3 = dom.createElement("div");
          dom.setAttribute(el3,"class","label");
          var el4 = dom.createElement("img");
          dom.appendChild(el3, el4);
          dom.appendChild(el2, el3);
          var el3 = dom.createElement("div");
          dom.setAttribute(el3,"class","content");
          var el4 = dom.createElement("div");
          dom.setAttribute(el4,"class","date");
          var el5 = dom.createComment("");
          dom.appendChild(el4, el5);
          var el5 = dom.createComment("");
          dom.appendChild(el4, el5);
          dom.appendChild(el3, el4);
          var el4 = dom.createElement("div");
          dom.setAttribute(el4,"class","summary");
          var el5 = dom.createElement("a");
          var el6 = dom.createComment("");
          dom.appendChild(el5, el6);
          var el6 = dom.createTextNode(" ");
          dom.appendChild(el5, el6);
          var el6 = dom.createComment("");
          dom.appendChild(el5, el6);
          dom.appendChild(el4, el5);
          var el5 = dom.createElement("span");
          var el6 = dom.createTextNode(" заказал:");
          dom.appendChild(el5, el6);
          dom.appendChild(el4, el5);
          var el5 = dom.createElement("div");
          dom.setAttribute(el5,"class","additional");
          var el6 = dom.createElement("span");
          dom.setAttribute(el6,"class","text-mint");
          var el7 = dom.createTextNode("Кофе:  ");
          dom.appendChild(el6, el7);
          dom.appendChild(el5, el6);
          var el6 = dom.createComment("");
          dom.appendChild(el5, el6);
          var el6 = dom.createTextNode(" (");
          dom.appendChild(el5, el6);
          var el6 = dom.createComment("");
          dom.appendChild(el5, el6);
          var el6 = dom.createTextNode(" мл.);  ");
          dom.appendChild(el5, el6);
          var el6 = dom.createElement("span");
          dom.setAttribute(el6,"class","text-mint");
          var el7 = dom.createTextNode("Сироп(ы):  ");
          dom.appendChild(el6, el7);
          dom.appendChild(el5, el6);
          var el6 = dom.createComment("");
          dom.appendChild(el5, el6);
          dom.appendChild(el4, el5);
          var el5 = dom.createComment("");
          dom.appendChild(el4, el5);
          var el5 = dom.createElement("div");
          dom.setAttribute(el5,"class","additional");
          var el6 = dom.createElement("h4");
          dom.setAttribute(el6,"class","ui huge");
          var el7 = dom.createTextNode("Номер заказа: #");
          dom.appendChild(el6, el7);
          var el7 = dom.createComment("");
          dom.appendChild(el6, el7);
          dom.appendChild(el5, el6);
          dom.appendChild(el4, el5);
          var el5 = dom.createElement("div");
          dom.setAttribute(el5,"class","additional");
          var el6 = dom.createElement("h3");
          dom.setAttribute(el6,"class","ui huge");
          var el7 = dom.createTextNode("Стоимость: ");
          dom.appendChild(el6, el7);
          var el7 = dom.createComment("");
          dom.appendChild(el6, el7);
          var el7 = dom.createTextNode(" руб.");
          dom.appendChild(el6, el7);
          dom.appendChild(el5, el6);
          dom.appendChild(el4, el5);
          dom.appendChild(el3, el4);
          dom.appendChild(el2, el3);
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var element2 = dom.childAt(fragment, [0, 0]);
          var element3 = dom.childAt(element2, [0, 0]);
          var element4 = dom.childAt(element2, [1]);
          var element5 = dom.childAt(element4, [0]);
          var element6 = dom.childAt(element4, [1]);
          var element7 = dom.childAt(element6, [0]);
          var element8 = dom.childAt(element6, [2]);
          var morphs = new Array(12);
          morphs[0] = dom.createAttrMorph(element3, 'src');
          morphs[1] = dom.createMorphAt(element5,0,0);
          morphs[2] = dom.createMorphAt(element5,1,1);
          morphs[3] = dom.createAttrMorph(element7, 'href');
          morphs[4] = dom.createMorphAt(element7,0,0);
          morphs[5] = dom.createMorphAt(element7,2,2);
          morphs[6] = dom.createMorphAt(element8,1,1);
          morphs[7] = dom.createMorphAt(element8,3,3);
          morphs[8] = dom.createMorphAt(element8,6,6);
          morphs[9] = dom.createMorphAt(element6,3,3);
          morphs[10] = dom.createMorphAt(dom.childAt(element6, [4, 0]),1,1);
          morphs[11] = dom.createMorphAt(dom.childAt(element6, [5, 0]),1,1);
          return morphs;
        },
        statements: [
          ["attribute","src",["get","preorder.user.vk_photo",["loc",[null,[1,211],[1,233]]]]],
          ["content","preorder.formatted_created_at",["loc",[null,[1,281],[1,314]]]],
          ["block","if",[["get","currentUser.is_admin",["loc",[null,[1,320],[1,340]]]]],[],0,null,["loc",[null,[1,314],[1,573]]]],
          ["attribute","href",["concat",["https://vk.com/",["get","preorder.user.vk_screen_name",["loc",[null,[1,626],[1,654]]]]]]],
          ["content","preorder.user.content.first_name",["loc",[null,[1,658],[1,694]]]],
          ["content","preorder.user.last_name",["loc",[null,[1,700],[1,727]]]],
          ["content","preorder.drink.name",["loc",[null,[1,830],[1,853]]]],
          ["content","preorder.drink.volume",["loc",[null,[1,860],[1,885]]]],
          ["block","each",[["get","preorder.syurups",["loc",[null,[1,978],[1,994]]]]],[],1,null,["loc",[null,[1,960],[1,1040]]]],
          ["block","if",[["get","preorder.comments.length",["loc",[null,[1,1052],[1,1076]]]]],[],2,null,["loc",[null,[1,1046],[1,1160]]]],
          ["content","preorder.number",["loc",[null,[1,1224],[1,1243]]]],
          ["content","preorder.drink.price",["loc",[null,[1,1314],[1,1338]]]]
        ],
        locals: ["preorder"],
        templates: [child0, child1, child2]
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
            "column": 1414
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
        dom.setAttribute(el1,"class","ui container");
        var el2 = dom.createElement("section");
        dom.setAttribute(el2,"class","feeds");
        var el3 = dom.createElement("div");
        dom.setAttribute(el3,"class","title text-center");
        var el4 = dom.createElement("h1");
        var el5 = dom.createTextNode("Очередь предзаказов");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createComment("");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var morphs = new Array(1);
        morphs[0] = dom.createMorphAt(dom.childAt(fragment, [0, 0, 0]),1,1);
        return morphs;
      },
      statements: [
        ["block","each",[["get","preorders",["loc",[null,[1,116],[1,125]]]]],[],0,null,["loc",[null,[1,108],[1,1392]]]]
      ],
      locals: [],
      templates: [child0]
    };
  }()));

});