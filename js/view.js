/**
 * Created with IntelliJ IDEA.
 * User: huxiangtao
 * Date: 13-11-11
 * Time: 下午5:46
 * To change this template use File | Settings | File Templates.
 */

(function(doc) {
    'use strict';

    var MATCHES_SELECTOR = [
        'webkitMatchesSelector',
        'mozMatchesSelector',
        'matchesSelector'
    ].filter(function(name) {
        return this[name];
    },doc.body)[0];

    var clickEvents = {

        '.card, .card *': function() {
            var sender = this;
            if(!sender.classList.contains('card')) {
                sender = sender.parentNode;
            }
            if(sender.disabled) {
                return;
            }
            var index = Array.prototype.indexOf.call(view.cardButtons, sender);
            view.action.fire('card:filp' , [index]);
        }
    };

    var view = {

        action: pubsub(),//设计消息接口

        init: function(opt) {
            this.flipsLabel = doc.querySelector('.count');
            this.cardButtons = doc.querySelectorAll('.card');
            Array.prototype.forEach.call(this.cardButtons,function(cardButton) {
                var data = opt.cardData && opt.cardData();
                cardButton.innerHTML = '<div class="front">' + data.contents + '</div>';
            },this);
            delegate(doc.body, 'click', clickEvents);
        },

        updateCardButtons: function(fn, context) {

        },

        updateFlipsLabel: function(data) {

        }
    };

    function delegate(elm, subject, table) {
        var selectors = Object.keys(table);
        elm.addEventListener(subject, function(e) {
            var target = e.target;
            selectors.forEach(function(selector) {
                if(target[MATCHES_SELECTOR](selector)) {
                    this[selector].call(target,e);
                }
            },table);
        });
    }

    function pubsub() {
        var lib = {};
        return {
            //广播瞬时消息
            fire: function(subject, args) {
                if(lib[subject]) {
                    lib[subject].forEach(function(handler) {
                        handler.apply(this,args);
                    });
                }
            },
            //监听、订阅、观察消息
            on: function(subject, handler) {
                var observer = lib[subject];
                if(!observer) {
                    observer = lib[subject] = [];
                }
                observer.push(handler);
            },
            //取消订阅
            off: function(subject, handler) {
                var observer = lib[subject];
                if(observer) {
                    if(handler) {
                        var i =observer.indexOf(handler);
                        if(i !== -1) {
                            observer.splice(i, 1);
                        }
                    } else {
                        observer.length = 0;
                    }
                }
            }
        };
    }

    window.view = view;

})(window.document);