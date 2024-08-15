
function List(){
    const f=[{name:"apple",calories:95},
    {name:"banana",calories:105},
    {name:"pineapple",calories:37},
];
    const listItem=f.map(fruit=>
        <li key={fruit.name}>{fruit.name}:&nbsp; <b>{fruit.calories}</b></li>);
    return(
        <ol>{listItem}</ol>
    );
}
export default List