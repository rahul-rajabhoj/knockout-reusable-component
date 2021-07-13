function ItemListViewModel() {

    var self = this;

    self.items = ko.observableArray([]);

    self.fetchItems = function(callback) {
        setTimeout(function() {
            var MOCK_RESPONSE = {
                items: [
                    "I", "Found", "Some", "Items"
                ]
            }
            callback(MOCK_RESPONSE);
        }, 2000);
    }
}

ko.components.register("loading-button", {
    template: [
        '<button data-bind="click: onClick, css: { loading: isLoading }" class="LoadingButton">',
            '<span data-bind="text: buttonText"></span>',
        '</button>',
    ].join(''),
    viewModel: function(params) {

        var self = this;

        self.isLoading = ko.observable(false);

        self.buttonText = ko.observable(params.buttonTitle);

        self.onClick = function() {
            self.isLoading(true);

            params.action(function(data) {
                self.isLoading(false);
            });
        }
    }
});

ko.applyBindings(new ItemListViewModel(), document.querySelector('#knockout-app'));