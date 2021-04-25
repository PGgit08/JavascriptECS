// enemy generation
const colors = ["blue", "orange"];
for(let i=0; i<2; i++){    
    const {x, y} = rand_coords(100, 100);
    const NewEnemy = Enemy(x, y, colors[i], colors[i]);
    makeEntity(NewEnemy.id, NewEnemy);
};

