/**
 * Created with IntelliJ IDEA.
 * User: huxiangtao
 * Date: 13-11-11
 * Time: 下午3:54
 * To change this template use File | Settings | File Templates.
 */

(function(deck) {
    'use strict';

    function PlayingCardDeck() {
        this.superClass = deck.Deck;
        this.superClass.call(this);
        this.constructor = PlayingCardDeck;
    }

    PlayingCardDeck.prototype = Object.create(deck.Deck.prototype);

    function exports() {
        return new PlayingCardDeck();
    }

    exports.PlayingCardDeck = PlayingCardDeck;

    window.playingCardDeck = exports;

})(window.deck);