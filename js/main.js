function ItemListViewModel() {

    var self = this;

    self.items = ko.observableArray();
}

ko.applyBindings(new ItemListViewModel(), document.querySelector('#knockout-app'));