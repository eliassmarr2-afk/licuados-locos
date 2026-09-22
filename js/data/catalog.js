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
    { id: "frutilla", label: "Frutilla", image: "assets/images/secciones/frutilla.png" },
    { id: "banana", label: "Banana", image: "assets/images/secciones/banana.png" },
    { id: "mango", label: "Mango", image: "assets/images/secciones/mango.png" },
    { id: "manzana", label: "Manzana", image: "assets/images/secciones/manzana.png" },
    { id: "naranja", label: "Naranja", image: "assets/images/secciones/naranja.png" },
    { id: "sandia", label: "Sandía", image: "assets/images/secciones/sandia.png" },
    { id: "melon", label: "Melón", image: "assets/images/secciones/melon.png" },
    { id: "uvas", label: "Uvas", image: "assets/images/secciones/uvas.png" },
    { id: "durazno", label: "Durazno", image: "assets/images/secciones/durazno.png" }
  ];

  const products = [
    { id:"frutilla-clasico", category:"frutilla", title:"Licuado de Frutilla", subtitle:"Frutilla · leche · hielo", price:8890, oldPrice:null, rating:4.5, reviews:94, buyers:310, deliveryDays:1, deliveryLabel:"Preparación rápida", badge:"Clásico", image:BLANK_IMAGE, description:"Licuado clásico de frutilla, preparado al momento con una textura fresca y cremosa.", features:["Frutilla","Leche","Hielo","Preparado al momento"], supportQuestions:["¿Qué tamaño tiene?","¿Se puede pedir sin azúcar?","¿Puedo cambiar la base del licuado?"], stock:99 },
    { id:"banana-clasico", category:"banana", title:"Licuado de Banana", subtitle:"Banana · leche · hielo", price:8890, oldPrice:null, rating:4.5, reviews:88, buyers:420, deliveryDays:1, deliveryLabel:"Preparación rápida", badge:"Clásico", image:BLANK_IMAGE, description:"Banana madura, leche y hielo en una mezcla suave y cremosa.", features:["Banana","Leche","Hielo","Preparado al momento"], supportQuestions:["¿Qué tamaño tiene?","¿Se puede pedir con agua?","¿Puedo agregar otra fruta?"], stock:99 },
    { id:"sandia-clasico", category:"sandia", title:"Licuado de Sandía", subtitle:"Sandía · hielo", price:8890, oldPrice:null, rating:4.5, reviews:76, buyers:290, deliveryDays:1, deliveryLabel:"Preparación rápida", badge:"Refrescante", image:BLANK_IMAGE, description:"Sandía bien fría y hielo para una mezcla liviana y refrescante.", features:["Sandía","Hielo","Textura liviana","Preparado al momento"], supportQuestions:["¿Lleva leche?","¿Se puede pedir sin azúcar?","¿Qué tamaño tiene?"], stock:99 },
    { id:"durazno-clasico", category:"durazno", title:"Licuado de Durazno", subtitle:"Durazno · leche · hielo", price:8890, oldPrice:null, rating:4.5, reviews:71, buyers:260, deliveryDays:1, deliveryLabel:"Preparación rápida", badge:"Clásico", image:BLANK_IMAGE, description:"Durazno, leche y hielo con una base cremosa y fresca.", features:["Durazno","Leche","Hielo","Preparado al momento"], supportQuestions:["¿Se puede pedir sin azúcar?","¿Qué tamaño tiene?","¿Puedo cambiar la leche?"], stock:99 },
    { id:"manzana-clasico", category:"manzana", title:"Licuado de Manzana", subtitle:"Manzana · hielo", price:8890, oldPrice:null, rating:4.5, reviews:67, buyers:235, deliveryDays:1, deliveryLabel:"Preparación rápida", badge:"Fresco", image:BLANK_IMAGE, description:"Manzana fresca y hielo en una combinación equilibrada y liviana.", features:["Manzana","Hielo","Sabor fresco","Preparado al momento"], supportQuestions:["¿Lleva leche?","¿Se puede combinar con otra fruta?","¿Qué tamaño tiene?"], stock:99 },
    { id:"uvas-clasico", category:"uvas", title:"Licuado de Uvas", subtitle:"Uvas · hielo", price:8890, oldPrice:null, rating:4.5, reviews:55, buyers:190, deliveryDays:1, deliveryLabel:"Preparación rápida", badge:"Frutal", image:BLANK_IMAGE, description:"Uvas y hielo con un perfil naturalmente dulce y fresco.", features:["Uvas","Hielo","Sabor frutal","Preparado al momento"], supportQuestions:["¿Se cuela?","¿Se puede pedir sin azúcar?","¿Qué tamaño tiene?"], stock:99 },
    { id:"combo-frutilla-banana", category:"combinados", title:"Frutilla + Banana", subtitle:"Frutilla · banana · leche · hielo", price:9230, oldPrice:null, rating:4.5, reviews:128, buyers:640, deliveryDays:1, deliveryLabel:"Preparación rápida", badge:"Más elegido", image:BLANK_IMAGE, description:"Frutilla y banana en una mezcla cremosa, dulce y equilibrada.", features:["Frutilla","Banana","Leche","Hielo"], supportQuestions:["¿Puedo cambiar una de las frutas?","¿Se puede pedir con agua?","¿Qué tamaño tiene?"], stock:99 },
    { id:"combo-sandia-durazno", category:"combinados", title:"Sandía + Durazno", subtitle:"Sandía · durazno · hielo", price:9230, oldPrice:null, rating:4.5, reviews:86, buyers:370, deliveryDays:1, deliveryLabel:"Preparación rápida", badge:"Combinado", image:BLANK_IMAGE, description:"Una combinación fresca de sandía y durazno con mucho sabor.", features:["Sandía","Durazno","Hielo","Preparado al momento"], supportQuestions:["¿Lleva leche?","¿Puedo cambiar una fruta?","¿Qué tamaño tiene?"], stock:99 },
    { id:"combo-manzana-uvas", category:"combinados", title:"Manzana + Uvas", subtitle:"Manzana · uvas · hielo", price:9230, oldPrice:null, rating:4.5, reviews:63, buyers:240, deliveryDays:1, deliveryLabel:"Preparación rápida", badge:"Combinado", image:BLANK_IMAGE, description:"Manzana y uvas con un perfil fresco, dulce y ligeramente ácido.", features:["Manzana","Uvas","Hielo","Preparado al momento"], supportQuestions:["¿Se cuela?","¿Puedo cambiar una fruta?","¿Qué tamaño tiene?"], stock:99 }
  ];

  const clone = (value) => JSON.parse(JSON.stringify(value));

  window.TheCampingCatalog = {
    async getCategories() { return clone(categories); },
    async getProducts() { return clone(products); },
    async getProductById(id) { return clone(products.find((product) => product.id === id) || products[0]); }
  };
})();