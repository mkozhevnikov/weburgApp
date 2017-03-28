(function() {
    var TorrentModel = function(name) {
        this.name = ko.observable(name);
    }

    var TorrentViewModel = function(list) {
        var data = list.map(function(el) { return new TorrentModel(el[2]) });
        this.torrents = ko.observableArray(data);
        this.title = "Torrents";
    }

    $.getJSON('/torrents', function(data) {
        ko.applyBindings(new TorrentViewModel(data));
    });
})();