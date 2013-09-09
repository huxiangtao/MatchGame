/**
 * Created with IntelliJ IDEA.
 * User: huxiangtao
 * Date: 13-8-26
 * Time: 下午3:11
 * To change this template use File | Settings | File Templates.
 */

(function(card) {
    'use strict'

    function PlayingCard() {
        this.superClass = card.Card;
        this.superClass.call(this); //继承了来自于Card的构造函数Card(),当生成新的对象的时候，会去执行这个构造函数体,从而成为该类的一个子类
        this.constructor = PlayingCard;
    }

    PlayingCard.prototype = Object.create(card.Card.prototype);

    function exports() {
        return new PlayingCard();
    }

    exports.PlayingCard = PlayingCard;

    window.playingCard = exports;
})(window.card);