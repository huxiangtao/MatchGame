/**
 * Created with IntelliJ IDEA.
 * User: huxiangtao
 * Date: 13-8-22
 * Time: ÏÂÎç5:11
 * To change this template use File | Settings | File Templates.
 */

(function(view,playingCardDeck) {
    'use strict';


    var app = {

        init: function() {
            view.init({
                cardData: function() {
                    var card = app.deck().drawRandomCard();
                    return {
                        contents: card.contents()
                    };
                }
            });
        },

        deck: function() {
            return this._deck || (this._deck = playingCardDeck());
        }

    };

    window.app = app;

})(window.view,window.playingCardDeck);