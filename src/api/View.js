define([], function () {

    /**
     * A View is used to provide displayable content, and to react to
     * associated life cycle events.
     *
     * @interface
     */
    function View() {

    }

    /**
     * Acquire any resources associated with this view.
     *
     * View implementations should use this method to attach any
     * listeners or acquire other resources that are necessary to keep
     * the contents of this view up-to-date.
     */
    View.prototype.show = function () {

    };

    /**
     * Populate the supplied DOM element with the contents of this view.
     * @param {HTMLElement} container the DOM element to populate
     */
    View.prototype.populate = function (container) {

    };

    /**
     * Release any resources associated with this view.
     *
     * View implementations should use this method to detach any
     * listeners or release other resources that are no longer necessary
     * once a view is no longer used.
     */
    View.prototype.destroy = function () {

    };

    return View;
});
