// (1)

const my_description = [
    {
        name: "Егор",
        age: 17,
        hobby: "Программирование"
    }
]

for(let i = 0; i < my_description.length; i++){
    console.log(`Hello ${my_description[i].name}`)
}

// (2)

const users_description = [
    {
        name: "Ivan",
        age: 23,
        is_admin: false
    },
    {
        name: "Petr",
        age: 29,
        is_admin: false
    },
    {
        name: "Maria",
        age: 19,
        is_admin: true
    }
]

ch_simple = 0

for(let i = 0; i < users_description.length; i++){
    if(users_description[i].is_admin !== true){
        ch_simple++
    }
}

console.log(`Количество простых пользователей: ${ch_simple}`)