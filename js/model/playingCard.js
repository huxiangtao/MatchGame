/**
 * Created with IntelliJ IDEA.
 * User: huxiangtao
 * Date: 13-8-26
 * Time: 下午3:11
 * To change this template use File | Settings | File Templates.
 */

(function(card) {
    'use strict';
    var _validSuits,
        _rankStrings = ["?","A","2","3","4","5","6","7","8","9","10","J","Q","K"];

    function PlayingCard() {
        this.superClass = card.Card;
        this.superClass.call(this); //继承了来自于Card的构造函数Card(),当生成新的对象的时候，会去执行这个构造函数体,从而成为该类的一个子类
        this.constructor = PlayingCard;
    }

    PlayingCard.prototype = Object.create(card.Card.prototype); //通过原型构造来实现继承

    var playingCardMethods = { //子类的方法

        contents: function() {
            return _rankStrings[this.rank()] + this.suit();
        },

        suit: function(v) {
            if(v === undefined) {
                return this._suit ? this._suit : "?";
            } else {
                if (PlayingCard.validSuits()[v]) {
                    this._suit = v;
                }
            }
            return this._suit;
        },

        rank: function(v) {
            if(v === undefined) {
                return this._rank;
            } else {
                if(v <= PalyingCard.maxRank()) {
                    this._rank = v;
                }
                return this._rank;
            }
        }
    };


    //通过Keys方法将palyingCardMethods对象的属性和方法的名字遍历出来，保存为一个每个项为字符串的数组。
    var resArr = Object.keys(playingCardMethods);

    //再将该数组用forEach方法遍历执行，当forEach函数有第二个参数obj（对象）的时候，这个对象就会替代forEach函数中回调函数的this。
    //这里的name则用的是v,即回调函数的第一个参数，代表这个数组中的一个项。这个回调函数接收三个参数，分别是v(项本身)、i(项的脚标)、arr(数组本身)。
    //这个方法是建立在Obj['']能访问名对应的值的前提上的。
    resArr.forEach(function(name) {
        this[name] = playingCardMethods[name];
    },PlayingCard.prototype);

    PlayingCard.maxRank = function() {
        return _rankStrings.length - 1;
    }


    PlayingCard.validSuits = function() {
        if(!_validSuits) {
            _validSuits = {"♡" : 1,"♢" : 1,"♠" : 1,"♧" : 1};
        }
        return _validSuits;
    }

    function exports() {
        return new PlayingCard();
    }



    exports.PlayingCard = PlayingCard;

    window.playingCard = exports;

})(window.card);