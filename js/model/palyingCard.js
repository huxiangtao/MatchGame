/**
 * Created with IntelliJ IDEA.
 * User: huxiangtao
 * Date: 13-8-26
 * Time: 下午3:11
 * To change this template use File | Settings | File Templates.
 */

(function(card) {
    'use strict'
    var _validSuits,
        _rankStrings = ["?","A","2","3","4","5","6","7","8","9","10","J","Q","K"];

    function PlayingCard() {
        this.superClass = card.Card;
        this.superClass.call(this); //继承了来自于Card的构造函数Card(),当生成新的对象的时候，会去执行这个构造函数体,从而成为该类的一个子类
        this.constructor = PlayingCard;
    }

    PlayingCard.prototype = Object.create(card.Card.prototype);

    var playingCardMethods = {

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

    Object.keys(playingCardMethods).forEach(function(name) {
        this[name] = playingCardMethods[name];
    },PlayingCard.prototype);

    PlayingCard.validSuits = function() {
        if(!_validSuits) {
            _validSuits = {"?" : 1,"?" : 1,"?" : 1,"?" : 1};
        }
        return _validSuits;
    }

    function exports() {
        return new PlayingCard();
    }

    exports.PlayingCard = PlayingCard;

    window.playingCard = exports;
    debugger;
})(window.card);