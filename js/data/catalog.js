/**
 * LICUADOS LOCOS — local catalog adapter
 *
 * Structural clone of ecommerce-v2. Photography is intentionally absent.
 * A future Protocol Data adapter can replace this local source without
 * rewriting the page composition.
 */
(function () {
  "use strict";

  const BLANK_IMAGE = "data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs=";

  const categories = [
    { id: "frutilla", label: "Frutilla", image: "assets/images/secciones/frutilla.png", productId: "frutilla-clasico" },
    { id: "banana", label: "Banana", image: "assets/images/secciones/banana.png", productId: "banana-clasico" },
    { id: "mango", label: "Mango", image: "assets/images/secciones/mango.png", productId: "mango-clasico" },
    { id: "manzana", label: "Manzana", image: "assets/images/secciones/manzana.png", productId: "manzana-clasico" },
    { id: "naranja", label: "Naranja", image: "assets/images/secciones/naranja.png", productId: "naranja-clasico" },
    { id: "sandia", label: "Sandía", image: "assets/images/secciones/sandia.png", productId: "sandia-clasico" },
    { id: "melon", label: "Melón", image: "assets/images/secciones/melon.png", productId: "melon-clasico" },
    { id: "uvas", label: "Uvas", image: "assets/images/secciones/uvas.png", productId: "uvas-clasico" },
    { id: "durazno", label: "Durazno", image: "assets/images/secciones/durazno.png", productId: "durazno-clasico" }
  ];

  const products = [
    { id:"frutilla-clasico", category:"frutilla", title:"Licuado de Frutilla", subtitle:"Frutilla · leche · hielo", price:8890, oldPrice:null, rating:4.5, reviews:94, buyers:310, deliveryDays:1, deliveryLabel:"Preparación rápida", badge:"Clásico", image:"assets/images/productos/frutilla.png", description:"Licuado clásico de frutilla, preparado al momento con una textura fresca y cremosa.", features:["Frutilla","Leche","Hielo","Preparado al momento"], supportQuestions:["¿Qué tamaño tiene?","¿Se puede pedir sin azúcar?","¿Puedo cambiar la base del licuado?"], stock:99 },
    { id:"banana-clasico", category:"banana", title:"Licuado de Banana", subtitle:"Banana · leche · hielo", price:8890, oldPrice:null, rating:4.5, reviews:88, buyers:420, deliveryDays:1, deliveryLabel:"Preparación rápida", badge:"Clásico", image:"assets/images/productos/banana.png", description:"Banana madura, leche y hielo en una mezcla suave y cremosa.", features:["Banana","Leche","Hielo","Preparado al momento"], supportQuestions:["¿Qué tamaño tiene?","¿Se puede pedir con agua?","¿Puedo agregar otra fruta?"], stock:99 },
    { id:"mango-clasico", category:"mango", title:"Licuado de Mango", subtitle:"Mango · leche · hielo", price:8890, oldPrice:null, rating:4.5, reviews:81, buyers:285, deliveryDays:1, deliveryLabel:"Preparación rápida", badge:"Clásico", image:"assets/images/productos/mango.png", description:"Mango, leche y hielo en una mezcla cremosa de sabor tropical.", features:["Mango","Leche","Hielo","Preparado al momento"], supportQuestions:["¿Qué tamaño tiene?","¿Se puede pedir sin azúcar?","¿Puedo cambiar la base del licuado?"], stock:99 },
    { id:"manzana-clasico", category:"manzana", title:"Licuado de Manzana", subtitle:"Manzana · leche · hielo", price:8890, oldPrice:null, rating:4.5, reviews:67, buyers:235, deliveryDays:1, deliveryLabel:"Preparación rápida", badge:"Clásico", image:"assets/images/productos/manzana.png", description:"Manzana, leche y hielo en una combinación suave, fresca y cremosa.", features:["Manzana","Leche","Hielo","Preparado al momento"], supportQuestions:["¿Se puede pedir sin azúcar?","¿Puedo cambiar la base del licuado?","¿Qué tamaño tiene?"], stock:99 },
    { id:"naranja-clasico", category:"naranja", title:"Licuado de Naranja", subtitle:"Naranja · agua · hielo", price:8890, oldPrice:null, rating:4.5, reviews:74, buyers:275, deliveryDays:1, deliveryLabel:"Preparación rápida", badge:"Refrescante", image:"assets/images/productos/naranja.png", description:"Naranja, agua y hielo para un licuado cítrico, fresco y liviano.", features:["Naranja","Agua","Hielo","Preparado al momento"], supportQuestions:["¿Lleva leche?","¿Se puede pedir sin azúcar?","¿Qué tamaño tiene?"], stock:99 },
    { id:"sandia-clasico", category:"sandia", title:"Licuado de Sandía", subtitle:"Sandía · agua · hielo", price:8890, oldPrice:null, rating:4.5, reviews:76, buyers:290, deliveryDays:1, deliveryLabel:"Preparación rápida", badge:"Refrescante", image:"assets/images/productos/sandia.png", description:"Sandía, agua y hielo para una mezcla liviana y muy refrescante.", features:["Sandía","Agua","Hielo","Preparado al momento"], supportQuestions:["¿Lleva leche?","¿Se puede pedir sin azúcar?","¿Qué tamaño tiene?"], stock:99 },
    { id:"melon-clasico", category:"melon", title:"Licuado de Melón", subtitle:"Melón · agua · hielo", price:8890, oldPrice:null, rating:4.5, reviews:62, buyers:215, deliveryDays:1, deliveryLabel:"Preparación rápida", badge:"Refrescante", image:"assets/images/productos/melon.png", description:"Melón, agua y hielo en una combinación dulce, fresca y ligera.", features:["Melón","Agua","Hielo","Preparado al momento"], supportQuestions:["¿Lleva leche?","¿Se puede pedir sin azúcar?","¿Qué tamaño tiene?"], stock:99 },
    { id:"uvas-clasico", category:"uvas", title:"Licuado de Uvas", subtitle:"Uvas · agua · hielo", price:8890, oldPrice:null, rating:4.5, reviews:55, buyers:190, deliveryDays:1, deliveryLabel:"Preparación rápida", badge:"Frutal", image:"assets/images/productos/uvas.png", description:"Uvas, agua y hielo con un perfil naturalmente dulce y fresco.", features:["Uvas","Agua","Hielo","Preparado al momento"], supportQuestions:["¿Se cuela?","¿Se puede pedir sin azúcar?","¿Qué tamaño tiene?"], stock:99 },
    { id:"durazno-clasico", category:"durazno", title:"Licuado de Durazno", subtitle:"Durazno · leche · hielo", price:8890, oldPrice:null, rating:4.5, reviews:71, buyers:260, deliveryDays:1, deliveryLabel:"Preparación rápida", badge:"Clásico", image:"assets/images/productos/durazno.png", description:"Durazno, leche y hielo con una base cremosa y fresca.", features:["Durazno","Leche","Hielo","Preparado al momento"], supportQuestions:["¿Se puede pedir sin azúcar?","¿Qué tamaño tiene?","¿Puedo cambiar la leche?"], stock:99 },
    { id:"combo-frutilla-banana", category:"combinados", title:"Frutilla + Banana", subtitle:"Frutilla · banana · leche · hielo", price:9230, oldPrice:null, rating:4.5, reviews:128, buyers:640, deliveryDays:1, deliveryLabel:"Preparación rápida", badge:"Más elegido", image:"assets/images/mix/tarjetas/frutilla_y_banana.png", description:"Frutilla y banana en una mezcla cremosa, dulce y equilibrada.", features:["Frutilla","Banana","Leche","Hielo"], supportQuestions:["¿Puedo cambiar una de las frutas?","¿Se puede pedir con agua?","¿Qué tamaño tiene?"], stock:99 },
    { id:"combo-banana-durazno", category:"combinados", title:"Banana + Durazno", subtitle:"Banana · durazno · leche · hielo", price:9230, oldPrice:null, rating:4.5, reviews:86, buyers:370, deliveryDays:1, deliveryLabel:"Preparación rápida", badge:"Combinado", image:"assets/images/mix/tarjetas/banana_y_durazno.png", description:"Banana y durazno en una mezcla suave, cremosa y frutal.", features:["Banana","Durazno","Leche","Hielo"], supportQuestions:["¿Puedo cambiar una de las frutas?","¿Se puede pedir con agua?","¿Qué tamaño tiene?"], stock:99 },
    { id:"combo-durazno-frutilla", category:"combinados", title:"Durazno + Frutilla", subtitle:"Durazno · frutilla · leche · hielo", price:9230, oldPrice:null, rating:4.5, reviews:63, buyers:240, deliveryDays:1, deliveryLabel:"Preparación rápida", badge:"Combinado", image:"assets/images/mix/tarjetas/durazno_y_frutilla.png", description:"Durazno y frutilla en una combinación cremosa, fresca y equilibrada.", features:["Durazno","Frutilla","Leche","Hielo"], supportQuestions:["¿Puedo cambiar una de las frutas?","¿Se puede pedir con agua?","¿Qué tamaño tiene?"], stock:99 }
  ];

  const clone = (value) => JSON.parse(JSON.stringify(value));

  window.TheCampingCatalog = {
    async getCategories() { return clone(categories); },
    async getProducts() { return clone(products); },
    async getProductById(id) { return clone(products.find((product) => product.id === id) || products[0]); }
  };
})();