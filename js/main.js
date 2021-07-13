function ItemListViewModel() {

    var self = this;

    self.items = ko.observableArray([]);
}

ko.components.register("loading-button", {
    template: [
        '<button class="LoadingButton">',
            '<span data-bind="text: buttonText"></span>',
        '</button>',
    ].join(''),
    viewModel: function(params) {

        var self = this;

        self.buttonText = ko.observable(params.buttonText)
    }
});

ko.applyBindings(new ItemListViewModel(), document.querySelector('#knockout-app'));