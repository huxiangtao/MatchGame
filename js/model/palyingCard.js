/**
 * Created with IntelliJ IDEA.
 * User: huxiangtao
 * Date: 13-8-26
 * Time: ����3:11
 * To change this template use File | Settings | File Templates.
 */

(function(card) {
    'use strict'
    var _validSuits,
        _rankStrings = ["?","A","2","3","4","5","6","7","8","9","10","J","Q","K"];

    function PlayingCard() {
        this.superClass = card.Card;
        this.superClass.call(this); //�̳���������Card�Ĺ��캯��Card(),�������µĶ����ʱ�򣬻�ȥִ��������캯����,�Ӷ���Ϊ�����һ������
        this.constructor = PlayingCard;
    }

    PlayingCard.prototype = Object.create(card.Card.prototype); //ͨ��ԭ�͹�����ʵ�ּ̳�

    var playingCardMethods = { //����ķ���

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


    //ͨ��Keys������palyingCardMethods��������Ժͷ��������ֱ�������������Ϊһ��ÿ����Ϊ�ַ��������顣
    var resArr = Object.keys(playingCardMethods);

    //�ٽ���������forEach��������ִ�У���forEach�����еڶ�������obj�����󣩵�ʱ���������ͻ����forEach�����лص�������this��
    //�����name���õ���v,���ص������ĵ�һ��������������������е�һ�������ص��������������������ֱ���v(���)��i(��Ľű�)��arr(���鱾��)��
    //��������ǽ�����Obj['']�ܷ�������Ӧ��ֵ��ǰ���ϵġ�
    resArr.forEach(function(name) {
        this[name] = playingCardMethods[name];
    },PlayingCard.prototype);

    PlayingCard.maxRank = function() {
        return _rankStrings.length - 1;
    }


    PlayingCard.validSuits = function() {
        if(!_validSuits) {
            _validSuits = {"?" : 1,"?" : 1,"?" : 1,"?" : 1};
        }
        return _validSuits;
    }

    function exports() {
        return new PlayingCard();
    }
    debugger;


    exports.PlayingCard = PlayingCard;

    window.playingCard = exports;
    debugger;
})(window.card);