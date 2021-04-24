// enemy generation
for(let i=0; i<3; i++){    
    const {x, y} = rand_coords(100, 100);
    const NewEnemy = Enemy(x, y, i.toString());
    makeEntity(NewEnemy.id, NewEnemy);
};

