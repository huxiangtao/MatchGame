/**
 * Created with IntelliJ IDEA.
 * User: huxiangtao
 * Date: 13-8-22
 * Time: ÏÂÎç5:11
 * To change this template use File | Settings | File Templates.
 */

(function(view,playingCardDeck) {
    'use strict';

    var _flipCount = 0;

    view.action.on('card:filp' , function(index) {
        _flipCount++;
        view.updateFlipsLabel({
            count:_flipCount
        });

        view.updateCardButtons(function(i) {
            if(i === index) {
                var card = app.deck().drawRandomCard();
                return {
                    contents: card.contents(),
                    isFaceUp: card.isFaceUp
                };
            } else {
                return {};
            }
        });

    });


    var app = {

        init: function() {
            view.init({});
        },

        deck: function() {
            return this._deck || (this._deck = playingCardDeck());
        }

    };

    window.app = app;

})(window.view,window.playingCardDeck);