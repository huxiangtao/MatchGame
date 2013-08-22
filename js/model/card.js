/**
 * Created with IntelliJ IDEA.
 * User: huxiangtao
 * Date: 13-8-22
 * Time: обнГ5:31
 * To change this template use File | Settings | File Templates.
 */

(function() {
    'use strict';

    function Card() {

    }

    Card.prototype = {
        contents: function() {

        }

    };

    function exports() {
        return new Card();
    }

    exports.Card = Card;

    window.card = exports;
})();