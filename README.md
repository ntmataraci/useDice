# useDice
Reactjs Dice Hook for DnD

<H1>DICE STYLE HOOK FOR DND</H1>
Use it xdy+bonus
x: dice qty
y: dice type
bonus: can + or - with number

Exapmle of usage

<p>const dice = useDice("3d6+5") </p>
  
<p> const dice2 = useDice("2d6-5") </p>

<h2> Also you can use for advante and disadvantage</h2>
<p> const dice = useDice("adv")   /** for 2d20 and max  </p>
<p> const dice = useDice("disadv")   /** for 2d20 and min  </p>

<H2> for return use this object keys </h2>
<li> value  /* your dice command */ </li>
<li>total  /* total or min-max */ </li>
<li> dice  /* your dices */ </li>
  };
