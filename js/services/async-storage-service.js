export const storageServices = {
    query,
    get,
    post,
    put,
    remove,
    postMany,
    _makeId
}


// Get all books from storage
function query(entityType) {
    var entities = JSON.parse(localStorage.getItem(entityType)) || []
    // console.log(entities)

    return Promise.resolve(entities)
}

//Get item by ID
function get(entityType, entityId){
    return query(entityType)
        .then(entities => entities.find(entity => entity.id === entityId))
} 


//Create new item 
function post(entityType, newEntity) {
    newEntity.id = _makeId();
    return query(entityType)
        .then(entities => {
            entities.push(newEntity);
            _save(entityType, entities);
            return newEntity
        })
        
}

//Create new Items
function postMany(entityType,newEntities) {
    return query(entityType)
    .then(entities => {
        entities.push(...newEntities);
        _save(entityType, entities)
        return entities
    })
};

//Update an item 
function put(entityType, updatedEntity) {
    return query(entityType) 
        .then(entities => {
            const idx = entities.findIndex(entity => entity.id === updatedEntity.id);
            entities.splice(idx, 1, updatedEntity)
            _save(entityType, entities)
        })
}



//Remove an item
function remove(entityType, entityId) {
    return query(entityType)
        .then(entities => {
            const idx = entities.findIndex(entity => entity.id === entityId)
            entities.splice(idx, 1)
            _save(entityType, entities)
        })
}

//Save to local storage 
function _save(entityType, entities) {
    localStorage.setItem(entityType, JSON.stringify(entities))
}

function _makeId(length = 8) {
    var text = "";
    var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    for (var i = 0; i < length; i++) {
        text += possible.charAt(Math.floor(Math.random() * possible.length));
    }
    return text;
}
