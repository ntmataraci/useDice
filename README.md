# useDice
Reactjs Dice Hook for DnD

<H1>DICE STYLE HOOK FOR DND</H1>
Use it xdy+bonus
x: dice qty
y: dice type
bonus: can + or - with number

Exapmle of usage

const dice = useDice("3d6+5") 
const dice2 = useDice("2d6-5") 

Also you can use for advante and disadvantage
const dice = useDice("adv")   /** for 2d20 and max
const dice = useDice("disadv")   /** for 2d20 and min
