class Form 
{
    constructor(){}
    display()
    {
        var title=createElement('h2');
        title.html("CAR RACING GAME");
        title.position(200,100);

        var input=createInput("").attribute("placeholder","Name");
        input.position(200,260);
        var buttton=createButton("Play");
        button.position(200,280);

        var greeting=createElement('h3');

        button.mousePressed(function(){
            input.hide();
            button.hide();

            var n=input.value();

            playerCount+=1;
            player.update(n);
            player.updateCount(playerCount);

            greeting.html("WELCOME   "+n);
            greeting.position(200,260);


        })
    }
}
