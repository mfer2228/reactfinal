const products =[
{
id:'001',
nombre:'Red Light',
artista:'The strokes',
album:'First impressions of earth',
frase:'two could be complete without the rest of the world',
category:'cerrar',
año:'2005',
duración:'3:10' 
},

{
 id:'002',
nombre:'12:51',
artista:'The strokes',
album:'Room on fire',
frase:"Kiss me now that i'm older",
category:'metro',
año:'2003',
duración:'2:30'
},

{
id:'003',
nombre:'Governator',
artista:'GreenDay',
album:'American Idiot',
frase:'it makes great television watching the world end',
category:'gritar',
año:'2004',
duración:'2:30'
},

{
id:'004',
nombre:'Hard to explain',
artista:'The Strokes',
album:'Is this it',
frase:'I say the right thing but act the wrong way',
category:'metro',
año:'2001',
duración:'3:40'},

{
id:'005',
nombre:'Llueve sobre la ciudad',
artista:'Los Bunkers',
album:'Vida de perros',
frase:'Siento que es momento de olvidarte y no volver',
category:'metro',
año:'2005',
duración:'4:00'},

{
id:'006',
nombre:'My tears ricochet',
artista:'Taylor Swift',
album:'Folklore',
frase:'You had to kill me but it killed you just the same',
category:'cerrar',
año:'2020',
duración:'4:20'},

{
id:'007',
nombre:'Razorblade',
artista:'THe strokes',
album:'First impressions of earth',
frase:'The world is in your hand or is at your throat',
category:'gritar',
año:'2006',
duración:'3:30'},

{
id:'008',
nombre:'Tren al sur',
artista:'Los Prisioneros',
album:'Corazones',
frase:'No ves que estoy contento? no ves que soy feliz?',
category:'metro',
año:'1990',
duración:'5:30'},

{
id:'009',
nombre:'El Triciclo',
artista:'Caramelos de Cianuro',
album:'Harakiri City',
frase:'Recordábase de chico martillando su triciclo y lo corta que es la vida',
category:'gritar',
año:'1996',
duración:'2:30'},


{
id:'010',
nombre:'Everybody wants to rule the world',
artista:'Tears for fears',
album:'Songs from the Big Chair',
frase:'Nothing ever lasts forever',
category:'cerrar',
año:'1985',
duración:'4:20'}

]


// este componente se encarga de sacar las canciones de async para item y detailedsongcard

export const getProducts = () => {
    return new Promise((resolve) => {
        setTimeout (() => {
            resolve(products) 
        }, 500)
    })
}

export const getProductById = (productId) => {
    return new Promise((resolve) => {
        setTimeout (() => {
            resolve(products.find (prod => prod.id === productId) ) 
        }, 500)
    })
}

export const getProductsByCategory = (productCat) => {
    return new Promise((resolve) => {
        setTimeout (() => {
            resolve(products.find (prod => prod.category === productCat) ) 
        }, 500)
    })
}