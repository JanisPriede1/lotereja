const vardi=['Uldis Uldis','Valdis Zatlers','Edgars Berzins', 'Peteris Drazmanis', 'Lauris Reiniks'];
const balvas=['Ferrari','Dators','Luters','Piena speks', 'Kekavas kebab 10 eiro davanu karte'];
const naudaKopa= 1000000; // kopeja summa 1 milj
let uzvaretajuSkaits= 5;
let rindas = document.querySelector('.rindas');
rindas.innerHTML = ' ';
for(let i=0; i < uzvaretajuSkaits; i++){

let rand= Math.random() * vardi.length;
rand= Math.floor(rand);// noapaļo uz leju
let uzvaratejs = vardi[rand]; // izvada konsole nejausi izveletus vardus
let ligma = balvas[rand];
rindas.innerHTML+= `
<tr>
    <td>${i+1}</td>
    <td>${uzvaratejs}</td>
    <td>${ligma}</td>
    
</tr>`
}