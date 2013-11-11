/**
 * Created with IntelliJ IDEA.
 * User: huxiangtao
 * Date: 13-11-11
 * Time: обнГ5:46
 * To change this template use File | Settings | File Templates.
 */

(function(doc) {
    'use strict';

    var view = {
        init: function(opt) {
            this.cardButtons = doc.querySelectorAll('.card');
            Array.prototype.forEach.call(this.cardButtons,function(cardButton) {
                var data = opt.cardData && opt.cardData();
                cardButton.innerHTML = '<div class="front">' + data.contents + '</div>';
            },this);
        }
    };

    window.view = view;
})(window.document);