let Person1 =
{
    name: "Adam",
    health: 20,
    attack: 2,
    accuracy: 0.8,
}
let Person2 =
{
    name: "Bernard",
    health: 20,
    attack: 4,
    accuracy: 0.4,
}

function accuracyCheck(char)
{
    let accuracyRandom = Math.random()
    console.log(`Précision : ${accuracyRandom} vs ${char.accuracy}`)
    if (char.accuracy >= accuracyRandom)
    {
        console.log(`${char.name} ✅`)
    }
    else
    {
        console.log(`${char.name} ❌`)
    }
    return (char.accuracy >= accuracyRandom)
}


function AttackTest2(charA,charB)
{
    const charA_startHP = charA.health
    const charB_startHP = charB.health
    let Turn = 1
    while ((charA.health > 0)&&(charB.health > 0))
    {
        console.log(`Tour ${Turn}: ${charA.name}:${charA.health}/${charA_startHP} // ${charB.name}:${charB.health}/${charB_startHP}`)
        console.log(`Tour de ${charA.name}`)
        if (accuracyCheck(charA))
        {
            charB.health -= charA.attack
        }
        console.log(`Tour de ${charB.name}`)
        if (accuracyCheck(charB))
        {
            charA.health -= charB.attack
        }
        Turn += 1
    }
    if (charA.health >= 0)
    {
        console.log(`${charA.name} a gagne`)
    }
    else{
        console.log(`${charB.name} a gagne`)
    }
}
AttackTest2(Person1,Person2)