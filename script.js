
//Uppgift 2

console.log(realmadrid)
//console.log(fcbarcelona)  fel - let är block scoped
//console.log(chelsea)  fel - const är block scoped


{
    let fcbarcelona = "Messi"
    const chelsea = "Drogba"
    var realmadrid = "Ronaldo"

    console.log(fcbarcelona)
    console.log(chelsea)
    console.log(realmadrid)
}
console.log(realmadrid)
//console.log(fcbarcelona) fel - let är block scoped
//console.log(chelsea) fel - const är block scoped

/* reflektion 2: När variabler deklareras med let eller const är de block scoped, vilket innebär att de endast är tillgängliga inom det block där de deklarerades. 
Variabler deklarerade med var är däremot function scoped och kan nås utanför blocket. Försöker man nå var innan blocket där den är deklarerad, 
får man ett felmeddelande om att variabeln inte är definierad. Försöker du nå den efter blocket fungerar det eftersom var är function scoped.

Console.log innan block = Let och const får felmeddelanden, var blir endast undefined
Console.log inuti block= Alla tre fungerar
Console.log efter block = var fungerar endast eftersom det är function scoped med tillsatt värde.*/

//Uppgift 3
console.log ( '10' == 10 ); // true, värdena är lika
console.log ( '10' === 10 ); // false, olika datatyper
console.log ( NaN === NaN ); // false, NaN är aldrig lika med sig själv
console.log ( null == undefined ); // true, båda representerar "ingen värde"
console.log ( null === undefined ); // false, olika datatyper

console.log (undefined ? 'Truthy' : 'Falsy'); // värdet är falskt, undefined är falsy

/* reflektion 3:
Skillnaden mellan == och === är att det första endast jämför omvandlande typer. === jämför både värde och typ utan omvandling.
NaN är speciellt eftersom det inte är lika med något, inklusive sig själv. Därför returnerar NaN === NaN false. 
När uutryck står ensamt i ternary utvärderar vi det som truth eller falsy. Undefined är en falsy värde, så det returnerar 'Falsy'.
NaN = ogiltig matematisk beräkning
undefined = ingen tilldelad värde 
null = tomt värde */

let name = "Hassan";
console.log(name);

//Uppgift 4
const greet = (name) => {
    console.log(name);
    return "Hej " + name + "!"; 
};

let greetingMessage = greet("Abdalla"); 
console.log(greetingMessage);
console.log(name);

/* reflektion 4:
skillnaden mellan hur vi skapar en funktion är följande:
1. Funktionsdeklaration: Definieras med nyckelordet "function" följt av funktionsnamnet och parenteser. Kan anropas innan den deklareras på grund av hoisting.
2. Funktionsuttryck: Funktionen tilldelas en variabel. Kan vara anonym eller namngiven. Kan inte anropas innan den deklareras.
3. Arrow-funktioner: En kortare syntax för att skriva funktioner med "=>". Har lexikal this-bindning, vilket påverkar hur this fungerar inuti funktionen.
Jag valde arrow eftersom den är väldigt kort och tydlig i sin syntax.

De jag måste tänka på är att funktionsdeklarationer hoistas, medan funktionsuttryck och arrow-funktioner inte gör det. 
Funktionsdeklarationer fungerar före sin plats i koden medans övriga typer måste anropas efter definiytionen.

Name är en global variaabel name och parametern name i funktionen greet är lokal för den funktionen. 
När vi anropar greet("Abdalla"), skickas "Abdalla" som argument till den lokala parametern name, 
vilket inte påverkar den globala variabeln name. Därför förblir den globala variabeln name oförändrad och loggas som "Hassan" efter funktionsanropet.

Parameter är namnet i funktionen, argument är värdet som man skickar in och variabel är en behållare för datan.
*/
