// entity class
class Entity{
    // entity is here
    constructor(id){
        this.id = id;
        this.components = {};
        this.bundles = [];
    };
    
    // testing this out
    // a bundle can be a name for
    // a group of components
    // for example 'Appearance'
    // can be for Color and Position components
    add_bundle(name){
        this.bundles.push(name);
    };

    add_bundles(names){
        for(let name in names){
            this.add_bundle(names[name]);
        };
    };

    remove_bundle(name){
        this.bundles.splice(this.bundles.indexOf(name), 1);
    };

    // to add a component
    add_component(component){
        this.components[component.name] = component;
    };

    // to add multiple components
    add_components(components){
        for(let component in components){
            // console.log(component);
            this.add_component(components[component]);
        };
    };

    // to remove a component
    remove_component(component_name){
        delete this.components[component_name];
    };
};