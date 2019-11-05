(function($, window, document, undefined) {
    'use strict';

    // init cubeportfolio
    $('#js-grid-masonry-projects').cubeportfolio({
        filters: '#js-filters-masonry-projects',
        loadMore: '#js-loadMore-masonry-projects',
        loadMoreAction: 'click',
        layoutMode: 'grid',
        defaultFilter: '*',
        animationType: 'fadeOut',
        gapHorizontal: 2,
        gapVertical: 2,
        gridAdjustment: 'responsive',
        mediaQueries: [{
            width: 1500,
            cols: 5,
        }, {
            width: 1100,
            cols: 10,
        }, {
            width: 800,
            cols: 8,
        }, {
            width: 480,
            cols: 4,
            options: {
                caption: '',
                gapHorizontal: 25,
                gapVertical: 10,
            }
        }],
        caption: 'minimal',
        displayType: 'fadeIn',
        displayTypeSpeed: 100,

        // lightbox
        lightboxDelegate: '.cbp-lightbox',
        lightboxGallery: true,
        lightboxTitleSrc: 'data-title',
        lightboxCounter: '<div class="cbp-popup-lightbox-counter">{{current}} of {{total}}</div>',

        // singlePage popup
        singlePageDelegate: '.cbp-singlePage',
        singlePageDeeplinking: true,
        singlePageStickyNavigation: true,
        singlePageCounter: '<div class="cbp-popup-singlePage-counter">{{current}} of {{total}}</div>',
        singlePageCallback: function(url, element) {
            // to update singlePage content use the following method: this.updateSinglePage(yourContent)
            var t = this;

            $.ajax({
                    url: url,
                    type: 'GET',
                    dataType: 'html',
                    timeout: 10000
                })
                .done(function(result) {
                    t.updateSinglePage(result);
                })
                .fail(function() {
                    t.updateSinglePage('AJAX Error! Please refresh the page!');
                });
        },
    });
})(jQuery, window, document);