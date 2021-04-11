// entity class
class Entity{
    // entity is here
    constructor(id){
        this.id = id;
        this.components = {};
    };
    
    // to add a component
    add_component(component){
        this.components[component.name] = component;
    };

    // to remove a component
    remove_component(component_name){
        delete this.components[component_name];
    };
};