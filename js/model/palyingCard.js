/**
 * Created with IntelliJ IDEA.
 * User: huxiangtao
 * Date: 13-8-26
 * Time: ����3:11
 * To change this template use File | Settings | File Templates.
 */

(function(card) {
    'use strict'

    function PlayingCard() {
        this.superClass = card.Card;
        this.superClass.call(this); //�̳���������Card�Ĺ��캯��Card(),�������µĶ����ʱ�򣬻�ȥִ��������캯����,�Ӷ���Ϊ�����һ������
        this.constructor = PlayingCard;
    }

    PlayingCard.prototype = Object.create(card.Card.prototype);

    function exports() {
        return new PlayingCard();
    }

    exports.PlayingCard = PlayingCard;

    window.playingCard = exports;
})(window.card);