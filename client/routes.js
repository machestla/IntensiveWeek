Router.configure({
    layoutTemplate: "main",
    notFoundTemplate: "notFound"
});

Router.route("Home", {
    template: "Home",   
});

Router.route("/", {
    template: "Home",   
});

Router.route("charts", {
    template: "charts", 
});

Router.route("about", {
    template: "about",   
});

Router.route('/city/:id', {
    template: "city",
    data : function () {
        // Return the document for the selected city (the one whose id is given)
        // The value of this id is given by  this.params.id
        return Cities.findOne({_id:this.params.id});
    }
});