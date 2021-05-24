const express = require('express');
const app = express();
const server = require('http').createServer(app);
const WebSocket = require('ws');

const wss = new WebSocket.Server({ server: server });

const funFacts = [
    'Recette à base de merguez : Ingrédients : 2 belles tomates , 1 poivron vert, 1/4 d’huile d’olive, 2 gousses d’ail, Sel, Poivre noir,Harissa, 1 cuillère de concentré de tomate, 2 œufs entiers,3 merguez',
    '« Parfois, il faut laisser les choses comme elles sont. Ce steak. Ce morceau de poisson. Ce bouillon. Ce n’est pas parce qu’on s’agite qu’on améliore la qualité de la nourriture. »',
    '« Les légumes dans les sauces et autres – ça se cuisine en premier. Il ne faut pas ajouter des oignons crus à une sauce tomate qui mijote depuis un moment et s’attendre à ce que ça soit bon. De grandes quantités d’épices choisies au hasard donnent un mauvais goût à la nourriture. Il faut les connaître et savoir comment les utiliser. »',
    '« Il faut lire l’intégralité de la recette avant de toucher quoi que ce soit. Ensuite, on prépare tous les ingrédients dans les bonnes proportions avant de démarrer la cuisson. On coupe les légumes, on émince la viande et on mixe les épices. La cuisine est tellement plus facile quand tout est prêt avant et qu’il n’y a plus qu’à se soucier de ce qui se passe dans la poêle. Que pensez-vous qu’il se passe dans les cuisines d’un resto entre le service du midi et celui du soir ? Tout est préparé pour que la cuisine aille plus vite et soit plus facile. »',
    '« Gardez les doigts derrière les jointures (des mains) et le couteau devant, et gardez la lame sur la planche à découper. Vos doigts vous remercieront. »',
    '« Mon frère est chef dans un restaurant 2 étoiles et me dit que les choses seraient tellement plus simples si les gens ajoutaient le sel durant la cuisson et pas uniquement au début ou à la fin. »',
    '« N’ayez pas peur de faire des expériences et d’ajuster les recettes selon vos goûts. Goûtez au fur et à mesure de la cuisson en ajustant l’assaisonnement, le sel, le sucre et les niveaux d’acidité. Ne soyez pas un robot qui suit une recette. La cuisine est un art. »',
];

wss.on('connection', function connection(ws) {
    

    console.log('New client connected');
    setInterval(() => {

        const index = Math.floor(Math.random() * funFacts.length);

        ws.send(funFacts[index]);
    }, 10 * 1000);
    
    
    ws.on('message', function incoming(message) {
        console.log(`received ${message}`);
        
    });
});

app.get('/', (req, res) => res.send('hello world')),

    server.listen(3000, () => console.log('listening on port : 3000'));