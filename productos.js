// Productos de La Delicia de Copa
const productos = [
    // LÁCTEOS
    {
        id: 1,
        nombre: "Leche Entera 1L",
        categoria: "Lácteos",
        precio: 4500,
        imagen: "https://colanta.com/sabe-mas/wp-content/uploads/Leche-Entera-Colanta-1.jpg",
        descripcion: "Leche fresca entera, rica en calcio y vitaminas.",
        stock: true,
        destacado: true
    },
    {
        id: 2,
        nombre: "Queso Mozzarella 250g",
        categoria: "Lácteos",
        precio: 8500,
        imagen: "https://mercadomadrid.com.co/8511-thickbox_default/queso-mozarella-alpina-bloque-x-250g.jpg",
        descripcion: "Queso mozzarella fresco, perfecto para pizzas y ensaladas.",
        stock: true,
        destacado: false
    },
    {
        id: 3,
        nombre: "Yogurt Griego 500g",
        categoria: "Lácteos",
        precio: 6500,
        imagen: "https://d20f60vzbd93dl.cloudfront.net/uploads/tienda_008371/tienda_008371_6222e462dc431d0edb39fff042e9108b78fbd01d_producto_large_90.jpg",
        descripcion: "Yogurt griego natural, alto en proteínas.",
        stock: true,
        destacado: false
    },
    {
        id: 4,
        nombre: "Mantequilla 200g",
        categoria: "Lácteos",
        precio: 4200,
        imagen: "https://tse2.mm.bing.net/th/id/OIP.as3yf-2fJtD968ZHDmnvHgHaFd?rs=1&pid=ImgDetMain&o=7&rm=3",
        descripcion: "Mantequilla fresca para cocinar y untar.",
        stock: true,
        destacado: false
    },
    {
        id: 5,
        nombre: "Queso Cheddar 300g",
        categoria: "Lácteos",
        precio: 12000,
        imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS2FSL0myS60FMXZnSyeRB8VtVMO8S9DV1POQ&s",
        descripcion: "Queso cheddar madurado, sabor intenso.",
        stock: true,
        destacado: true
    },
    {
        id: 6,
        nombre: "Leche Deslactosada 1L",
        categoria: "Lácteos",
        precio: 4800,
        imagen: "https://jumbocolombiaio.vtexassets.com/arquivos/ids/195663-800-800?v=637814059713900000&width=800&height=800&aspect=true",
        descripcion: "Leche deslactosada para personas intolerantes.",
        stock: true,
        destacado: false
    },
    {
        id: 7,
        nombre: "Queso Fresco 400g",
        categoria: "Lácteos",
        precio: 6800,
        imagen: "https://realplaza.vtexassets.com/arquivos/ids/33189671/image-3a2d304551d248db92d8487048c42eb3.jpg?v=638223841942600000",
        descripcion: "Queso fresco suave, ideal para desayunos.",
        stock: true,
        destacado: false
    },
    {
        id: 8,
        nombre: "Crema de Leche 200ml",
        categoria: "Lácteos",
        precio: 3200,
        imagen: "https://d2o812a6k13pkp.cloudfront.net/Productos/40509269_0120230411095033.jpg",
        descripcion: "Crema de leche para cocinar y postres.",
        stock: true,
        destacado: false
    },
    {
        id: 9,
        nombre: "Queso Parmesano 150g",
        categoria: "Lácteos",
        precio: 15000,
        imagen: "https://gastrologi.com/wp-content/uploads/2023/07/39-QUESO-PARMESANO-ALPINA-BLOQUE-X-GR-1.jpg",
        descripcion: "Queso parmesano rallado, sabor auténtico italiano.",
        stock: true,
        destacado: true
    },
    {
        id: 10,
        nombre: "Leche Condensada 400g",
        categoria: "Lácteos",
        precio: 5500,
        imagen: "https://jumbocolombiafood.vteximg.com.br/arquivos/ids/171225-1000-1000/7702097066558-281-29.jpg?v=636111260667930000",
        descripcion: "Leche condensada para postres y dulces.",
        stock: true,
        destacado: false
    },

    // BEBIDAS
    {
        id: 11,
        nombre: "Coca Cola 2L",
        categoria: "Bebidas",
        precio: 8500,
        imagen: "https://tse4.mm.bing.net/th/id/OIP.bk4TA6ZdBhVeekQe2bpfGAHaHa?rs=1&pid=ImgDetMain&o=7&rm=3",
        descripcion: "Coca Cola refrescante en botella de 2 litros.",
        stock: true,
        destacado: true
    },
    {
        id: 12,
        nombre: "Cerveza Corona 6 Pack",
        categoria: "Bebidas",
        precio: 25000,
        imagen: "https://granitos.hn/market/wp-content/uploads/2020/08/cerveza-corona-pg-web.png",
        descripcion: "Pack de 6 cervezas Corona, sabor refrescante.",
        stock: true,
        destacado: false
    },
    {
        id: 13,
        nombre: "Agua Natural 600ml",
        categoria: "Bebidas",
        precio: 2500,
        imagen: "https://tse3.mm.bing.net/th/id/OIP.YsvYYoJvCPGfsBe3uXp7UwHaHa?rs=1&pid=ImgDetMain&o=7&rm=3",
        descripcion: "Agua natural purificada, hidratación saludable.",
        stock: true,
        destacado: false
    },
    {
        id: 14,
        nombre: "Jugo de Naranja 1L",
        categoria: "Bebidas",
        precio: 4500,
        imagen: "https://tse2.mm.bing.net/th/id/OIP.hgSkZejCfFKFMdYzO3gwTAHaHa?rs=1&pid=ImgDetMain&o=7&rm=3",
        descripcion: "Jugo de naranja natural, rico en vitamina C.",
        stock: true,
        destacado: false
    },
    {
        id: 15,
        nombre: "Whisky Johnnie Walker 750ml",
        categoria: "Bebidas",
        precio: 85000,
        imagen: "https://arkrem.vteximg.com.br/arquivos/ids/155677-1000-1000/10013987-Whisky-Johnnie-Walker-Red-Label-750ml.jpg?v=637290651488000000",
        descripcion: "Whisky Johnnie Walker Black Label premium.",
        stock: true,
        destacado: true
    },
    {
        id: 16,
        nombre: "Gaseosa Sprite 1.5L",
        categoria: "Bebidas",
        precio: 6500,
        imagen: "https://jumbocolombiaio.vtexassets.com/arquivos/ids/625492-800-800?v=638508771451700000&width=800&height=800&aspect=true",
        descripcion: "Sprite refrescante con sabor a lima-limón.",
        stock: true,
        destacado: false
    },
    {
        id: 17,
        nombre: "Cerveza Poker 6 Pack",
        categoria: "Bebidas",
        precio: 18000,
        imagen: "https://licoresquindio.com/wp-content/uploads/2020/06/Poker-lata-473ml.png",
        descripcion: "Pack de 6 cervezas Poker, sabor nacional.",
        stock: true,
        destacado: false
    },
    {
        id: 18,
        nombre: "Energizante Red Bull 250ml",
        categoria: "Bebidas",
        precio: 8500,
        imagen: "https://plazavea.vteximg.com.br/arquivos/ids/167072-1000-1000/Bebida-energizante-RED-BULL-ENERGY-DRINK-Lata-250ml.jpg?v=635762033450100000",
        descripcion: "Bebida energizante Red Bull, energía instantánea.",
        stock: true,
        destacado: false
    },
    {
        id: 19,
        nombre: "Ron Bacardí 750ml",
        categoria: "Bebidas",
        precio: 45000,
        imagen: "",
        descripcion: "Ron Bacardí Superior, perfecto para cócteles.",
        stock: true,
        destacado: true
    },
    {
        id: 20,
        nombre: "Té Verde 500ml",
        categoria: "Bebidas",
        precio: 3500,
        imagen: "",
        descripcion: "Té verde natural, antioxidantes naturales.",
        stock: true,
        destacado: false
    },

    // LIMPIEZA Y ASEO
    {
        id: 21,
        nombre: "Detergente Líquido 1L",
        categoria: "Limpieza",
        precio: 12000,
        imagen: "",
        descripcion: "Detergente líquido concentrado para ropa.",
        stock: true,
        destacado: true
    },
    {
        id: 22,
        nombre: "Papel Higiénico 4 Rollos",
        categoria: "Aseo",
        precio: 8500,
        imagen: "",
        descripcion: "Papel higiénico suave, 4 rollos por paquete.",
        stock: true,
        destacado: false
    },
    {
        id: 23,
        nombre: "Jabón de Baño 3 Unidades",
        categoria: "Aseo",
        precio: 6500,
        imagen: "",
        descripcion: "Jabón de baño hidratante, pack de 3 unidades.",
        stock: true,
        destacado: false
    },
    {
        id: 24,
        nombre: "Cloro 1L",
        categoria: "Limpieza",
        precio: 4500,
        imagen: "",
        descripcion: "Cloro desinfectante para limpieza del hogar.",
        stock: true,
        destacado: false
    },
    {
        id: 25,
        nombre: "Shampoo 400ml",
        categoria: "Cuidado Personal",
        precio: 8500,
        imagen: "",
        descripcion: "Shampoo nutritivo para todo tipo de cabello.",
        stock: true,
        destacado: true
    },
    {
        id: 26,
        nombre: "Desinfectante Multiusos 500ml",
        categoria: "Limpieza",
        precio: 7500,
        imagen: "",
        descripcion: "Desinfectante multiusos, elimina gérmenes.",
        stock: true,
        destacado: false
    },
    {
        id: 27,
        nombre: "Crema Dental 100g",
        categoria: "Cuidado Personal",
        precio: 4500,
        imagen: "",
        descripcion: "Crema dental con flúor, protección completa.",
        stock: true,
        destacado: false
    },
    {
        id: 28,
        nombre: "Toallas de Papel 2 Rollos",
        categoria: "Limpieza",
        precio: 5500,
        imagen: "",
        descripcion: "Toallas de papel absorbentes, 2 rollos.",
        stock: true,
        destacado: false
    },
    {
        id: 29,
        nombre: "Suavizante de Ropa 1L",
        categoria: "Limpieza",
        precio: 9500,
        imagen: "",
        descripcion: "Suavizante de ropa con aroma fresco.",
        stock: true,
        destacado: true
    },
    {
        id: 30,
        nombre: "Desodorante Roll-On 50ml",
        categoria: "Cuidado Personal",
        precio: 6500,
        imagen: "",
        descripcion: "Desodorante roll-on, protección de 24 horas.",
        stock: true,
        destacado: false
    },

    // PRODUCTOS COMESTIBLES
    {
        id: 31,
        nombre: "Arroz Blanco 1kg",
        categoria: "Comestibles",
        precio: 3500,
        imagen: "",
        descripcion: "Arroz blanco de grano largo, calidad premium.",
        stock: true,
        destacado: true
    },
    {
        id: 32,
        nombre: "Aceite de Cocina 900ml",
        categoria: "Comestibles",
        precio: 8500,
        imagen: "",
        descripcion: "Aceite vegetal para cocinar y freír.",
        stock: true,
        destacado: false
    },
    {
        id: 33,
        nombre: "Frijoles Rojos 500g",
        categoria: "Comestibles",
        precio: 4500,
        imagen: "",
        descripcion: "Frijoles rojos secos, ricos en proteínas.",
        stock: true,
        destacado: false
    },
    {
        id: 34,
        nombre: "Azúcar Blanca 1kg",
        categoria: "Comestibles",
        precio: 3200,
        imagen: "",
        descripcion: "Azúcar blanca refinada, endulzante natural.",
        stock: true,
        destacado: false
    },
    {
        id: 35,
        nombre: "Harina de Trigo 1kg",
        categoria: "Comestibles",
        precio: 2800,
        imagen: "",
        descripcion: "Harina de trigo para panadería y repostería.",
        stock: true,
        destacado: true
    },
    {
        id: 36,
        nombre: "Sal de Mesa 500g",
        categoria: "Comestibles",
        precio: 1500,
        imagen: "",
        descripcion: "Sal de mesa yodada, condimento esencial.",
        stock: true,
        destacado: false
    },
    {
        id: 37,
        nombre: "Pasta Espagueti 500g",
        categoria: "Comestibles",
        precio: 3800,
        imagen: "",
        descripcion: "Pasta espagueti italiana, calidad premium.",
        stock: true,
        destacado: false
    },
    {
        id: 38,
        nombre: "Café Molido 500g",
        categoria: "Comestibles",
        precio: 12000,
        imagen: "",
        descripcion: "Café molido 100% colombiano, aroma intenso.",
        stock: true,
        destacado: true
    },
    {
        id: 39,
        nombre: "Atún en Lata 170g",
        categoria: "Comestibles",
        precio: 4500,
        imagen: "",
        descripcion: "Atún en lata en aceite, rico en proteínas.",
        stock: true,
        destacado: false
    },
    {
        id: 40,
        nombre: "Sardinas en Lata 120g",
        categoria: "Comestibles",
        precio: 3500,
        imagen: "",
        descripcion: "Sardinas en lata con tomate, omega 3.",
        stock: true,
        destacado: false
    },

    // CUIDADO PERSONAL
    {
        id: 41,
        nombre: "Jabón Facial 100g",
        categoria: "Cuidado Personal",
        precio: 8500,
        imagen: "",
        descripcion: "Jabón facial limpiador, piel suave y fresca.",
        stock: true,
        destacado: true
    },
    {
        id: 42,
        nombre: "Crema Hidratante 200ml",
        categoria: "Cuidado Personal",
        precio: 12000,
        imagen: "",
        descripcion: "Crema hidratante corporal, nutrición profunda.",
        stock: true,
        destacado: false
    },
    {
        id: 43,
        nombre: "Protector Solar 60ml",
        categoria: "Cuidado Personal",
        precio: 18000,
        imagen: "",
        descripcion: "Protector solar FPS 50, protección UV.",
        stock: true,
        destacado: true
    },
    {
        id: 44,
        nombre: "Enjuague Bucal 500ml",
        categoria: "Cuidado Personal",
        precio: 9500,
        imagen: "",
        descripcion: "Enjuague bucal antiséptico, frescura duradera.",
        stock: true,
        destacado: false
    },
    {
        id: 45,
        nombre: "Cepillo de Dientes",
        categoria: "Cuidado Personal",
        precio: 3500,
        imagen: "",
        descripcion: "Cepillo de dientes suave, limpieza efectiva.",
        stock: true,
        destacado: false
    },
    {
        id: 46,
        nombre: "Hilo Dental 50m",
        categoria: "Cuidado Personal",
        precio: 4500,
        imagen: "",
        descripcion: "Hilo dental encerado, limpieza interdental.",
        stock: true,
        destacado: false
    },
    {
        id: 47,
        nombre: "Champú Anticaspa 400ml",
        categoria: "Cuidado Personal",
        precio: 10500,
        imagen: "",
        descripcion: "Champú anticaspa, control efectivo.",
        stock: true,
        destacado: true
    },
    {
        id: 48,
        nombre: "Acondicionador 400ml",
        categoria: "Cuidado Personal",
        precio: 8500,
        imagen: "",
        descripcion: "Acondicionador nutritivo, cabello sedoso.",
        stock: true,
        destacado: false
    },
    {
        id: 49,
        nombre: "Crema de Manos 100ml",
        categoria: "Cuidado Personal",
        precio: 6500,
        imagen: "",
        descripcion: "Crema de manos hidratante, absorción rápida.",
        stock: true,
        destacado: false
    },
    {
        id: 50,
        nombre: "Desodorante en Spray 150ml",
        categoria: "Cuidado Personal",
        precio: 7500,
        imagen: "",
        descripcion: "Desodorante en spray, frescura todo el día.",
        stock: true,
        destacado: true
    },

    // FRUTAS Y VERDURAS
    {
        id: 51,
        nombre: "Plátano Verde 1kg",
        categoria: "Frutas",
        precio: 3500,
        imagen: "",
        descripcion: "Plátano verde fresco, ideal para cocinar.",
        stock: true,
        destacado: true
    },
    {
        id: 52,
        nombre: "Tomate 1kg",
        categoria: "Verduras",
        precio: 4500,
        imagen: "",
        descripcion: "Tomate fresco, perfecto para ensaladas.",
        stock: true,
        destacado: false
    },
    {
        id: 53,
        nombre: "Cebolla 1kg",
        categoria: "Verduras",
        precio: 2800,
        imagen: "",
        descripcion: "Cebolla fresca, base para muchos platos.",
        stock: true,
        destacado: false
    },
    {
        id: 54,
        nombre: "Papa 2kg",
        categoria: "Verduras",
        precio: 5500,
        imagen: "",
        descripcion: "Papa fresca, versátil para cocinar.",
        stock: true,
        destacado: true
    },
    {
        id: 55,
        nombre: "Zanahoria 1kg",
        categoria: "Verduras",
        precio: 3200,
        imagen: "",
        descripcion: "Zanahoria fresca, rica en betacaroteno.",
        stock: true,
        destacado: false
    },
    {
        id: 56,
        nombre: "Lechuga 1 Unidad",
        categoria: "Verduras",
        precio: 2500,
        imagen: "",
        descripcion: "Lechuga fresca, crujiente para ensaladas.",
        stock: true,
        destacado: false
    },
    {
        id: 57,
        nombre: "Naranja 1kg",
        categoria: "Frutas",
        precio: 3800,
        imagen: "",
        descripcion: "Naranja fresca, rica en vitamina C.",
        stock: true,
        destacado: true
    },
    {
        id: 58,
        nombre: "Manzana 1kg",
        categoria: "Frutas",
        precio: 6500,
        imagen: "",
        descripcion: "Manzana fresca, crujiente y dulce.",
        stock: true,
        destacado: false
    },
    {
        id: 59,
        nombre: "Limón 1kg",
        categoria: "Frutas",
        precio: 4200,
        imagen: "",
        descripcion: "Limón fresco, perfecto para aderezar.",
        stock: true,
        destacado: false
    },
    {
        id: 60,
        nombre: "Aguacate 1kg",
        categoria: "Frutas",
        precio: 8500,
        imagen: "",
        descripcion: "Aguacate fresco, rico en grasas saludables.",
        stock: true,
        destacado: true
    },

    // CARNES
    {
        id: 61,
        nombre: "Pollo Entero 1.5kg",
        categoria: "Carnes",
        precio: 18500,
        imagen: "",
        descripcion: "Pollo entero fresco, ideal para asar.",
        stock: true,
        destacado: true
    },
    {
        id: 62,
        nombre: "Carne Molida 500g",
        categoria: "Carnes",
        precio: 12000,
        imagen: "",
        descripcion: "Carne molida fresca, perfecta para hamburguesas.",
        stock: true,
        destacado: false
    },
    {
        id: 63,
        nombre: "Pechuga de Pollo 1kg",
        categoria: "Carnes",
        precio: 15000,
        imagen: "",
        descripcion: "Pechuga de pollo sin hueso, baja en grasa.",
        stock: true,
        destacado: true
    },
    {
        id: 64,
        nombre: "Chuleta de Cerdo 1kg",
        categoria: "Carnes",
        precio: 18000,
        imagen: "",
        descripcion: "Chuleta de cerdo fresca, ideal para asar.",
        stock: true,
        destacado: false
    },
    {
        id: 65,
        nombre: "Salchichas 500g",
        categoria: "Carnes",
        precio: 8500,
        imagen: "",
        descripcion: "Salchichas frescas, perfectas para parrilla.",
        stock: true,
        destacado: false
    },
    {
        id: 66,
        nombre: "Jamón Cocido 300g",
        categoria: "Carnes",
        precio: 12000,
        imagen: "",
        descripcion: "Jamón cocido en lonchas, sabor suave.",
        stock: true,
        destacado: true
    },
    {
        id: 67,
        nombre: "Tocino 250g",
        categoria: "Carnes",
        precio: 9500,
        imagen: "",
        descripcion: "Tocino ahumado, perfecto para desayunos.",
        stock: true,
        destacado: false
    },
    {
        id: 68,
        nombre: "Chorizo 300g",
        categoria: "Carnes",
        precio: 8500,
        imagen: "",
        descripcion: "Chorizo fresco, sabor tradicional.",
        stock: true,
        destacado: false
    },
    {
        id: 69,
        nombre: "Costilla de Cerdo 1kg",
        categoria: "Carnes",
        precio: 22000,
        imagen: "",
        descripcion: "Costilla de cerdo fresca, ideal para barbacoa.",
        stock: true,
        destacado: true
    },
    {
        id: 70,
        nombre: "Hígado de Res 500g",
        categoria: "Carnes",
        precio: 8500,
        imagen: "",
        descripcion: "Hígado de res fresco, rico en hierro.",
        stock: true,
        destacado: false
    },

    // PANADERÍA
    {
        id: 71,
        nombre: "Pan Blanco 1 Unidad",
        categoria: "Panadería",
        precio: 2500,
        imagen: "",
        descripcion: "Pan blanco fresco, ideal para desayunos.",
        stock: true,
        destacado: true
    },
    {
        id: 72,
        nombre: "Pan Integral 1 Unidad",
        categoria: "Panadería",
        precio: 3500,
        imagen: "",
        descripcion: "Pan integral fresco, rico en fibra.",
        stock: true,
        destacado: false
    },
    {
        id: 73,
        nombre: "Croissants 6 Unidades",
        categoria: "Panadería",
        precio: 8500,
        imagen: "",
        descripcion: "Croissants recién horneados, crujientes.",
        stock: true,
        destacado: true
    },
    {
        id: 74,
        nombre: "Donas 6 Unidades",
        categoria: "Panadería",
        precio: 12000,
        imagen: "",
        descripcion: "Donas glaseadas, dulces y esponjosas.",
        stock: true,
        destacado: false
    },
    {
        id: 75,
        nombre: "Torta de Chocolate 1 Unidad",
        categoria: "Panadería",
        precio: 25000,
        imagen: "",
        descripcion: "Torta de chocolate casera, deliciosa.",
        stock: true,
        destacado: true
    },
    {
        id: 76,
        nombre: "Galletas de Avena 200g",
        categoria: "Panadería",
        precio: 6500,
        imagen: "",
        descripcion: "Galletas de avena caseras, saludables.",
        stock: true,
        destacado: false
    },
    {
        id: 77,
        nombre: "Empanadas 6 Unidades",
        categoria: "Panadería",
        precio: 15000,
        imagen: "",
        descripcion: "Empanadas de carne, sabor tradicional.",
        stock: true,
        destacado: true
    },
    {
        id: 78,
        nombre: "Almojábanas 4 Unidades",
        categoria: "Panadería",
        precio: 8500,
        imagen: "",
        descripcion: "Almojábanas frescas, queso y cuajada.",
        stock: true,
        destacado: false
    },
    {
        id: 79,
        nombre: "Pan de Queso 8 Unidades",
        categoria: "Panadería",
        precio: 12000,
        imagen: "",
        descripcion: "Pan de queso casero, sabor auténtico.",
        stock: true,
        destacado: true
    },
    {
        id: 80,
        nombre: "Buñuelos 6 Unidades",
        categoria: "Panadería",
        precio: 9500,
        imagen: "",
        descripcion: "Buñuelos fritos, tradición navideña.",
        stock: true,
        destacado: false
    },

    // PRODUCTOS ADICIONALES
    {
        id: 81,
        nombre: "Huevos 30 Unidades",
        categoria: "Comestibles",
        precio: 12000,
        imagen: "",
        descripcion: "Huevos frescos de gallina, 30 unidades.",
        stock: true,
        destacado: true
    },
    {
        id: 82,
        nombre: "Mantequilla de Maní 500g",
        categoria: "Comestibles",
        precio: 8500,
        imagen: "",
        descripcion: "Mantequilla de maní natural, sin azúcar.",
        stock: true,
        destacado: false
    },
    {
        id: 83,
        nombre: "Miel de Abeja 500g",
        categoria: "Comestibles",
        precio: 12000,
        imagen: "",
        descripcion: "Miel de abeja pura, endulzante natural.",
        stock: true,
        destacado: true
    },
    {
        id: 84,
        nombre: "Vinagre Blanco 500ml",
        categoria: "Comestibles",
        precio: 3500,
        imagen: "",
        descripcion: "Vinagre blanco, perfecto para aderezos.",
        stock: true,
        destacado: false
    },
    {
        id: 85,
        nombre: "Salsa de Tomate 500g",
        categoria: "Comestibles",
        precio: 4500,
        imagen: "",
        descripcion: "Salsa de tomate natural, sin conservantes.",
        stock: true,
        destacado: false
    },
    {
        id: 86,
        nombre: "Mostaza 200g",
        categoria: "Comestibles",
        precio: 3500,
        imagen: "",
        descripcion: "Mostaza amarilla, sabor tradicional.",
        stock: true,
        destacado: false
    },
    {
        id: 87,
        nombre: "Mayonesa 500g",
        categoria: "Comestibles",
        precio: 5500,
        imagen: "",
        descripcion: "Mayonesa cremosa, perfecta para sándwiches.",
        stock: true,
        destacado: true
    },
    {
        id: 88,
        nombre: "Ketchup 500g",
        categoria: "Comestibles",
        precio: 4500,
        imagen: "",
        descripcion: "Ketchup de tomate, sabor clásico.",
        stock: true,
        destacado: false
    },
    {
        id: 89,
        nombre: "Ajo en Polvo 50g",
        categoria: "Comestibles",
        precio: 2500,
        imagen: "",
        descripcion: "Ajo en polvo, condimento versátil.",
        stock: true,
        destacado: false
    },
    {
        id: 90,
        nombre: "Pimienta Negra 50g",
        categoria: "Comestibles",
        precio: 3500,
        imagen: "",
        descripcion: "Pimienta negra molida, aroma intenso.",
        stock: true,
        destacado: true
    },

    // PRODUCTOS FINALES
    {
        id: 91,
        nombre: "Cereal de Avena 500g",
        categoria: "Comestibles",
        precio: 8500,
        imagen: "",
        descripcion: "Cereal de avena integral, desayuno saludable.",
        stock: true,
        destacado: true
    },
    {
        id: 92,
        nombre: "Nueces 200g",
        categoria: "Comestibles",
        precio: 12000,
        imagen: "",
        descripcion: "Nueces frescas, ricas en omega 3.",
        stock: true,
        destacado: false
    },
    {
        id: 93,
        nombre: "Almendras 200g",
        categoria: "Comestibles",
        precio: 15000,
        imagen: "",
        descripcion: "Almendras tostadas, snack saludable.",
        stock: true,
        destacado: true
    },
    {
        id: 94,
        nombre: "Pasas 200g",
        categoria: "Comestibles",
        precio: 6500,
        imagen: "",
        descripcion: "Pasas de uva, dulces y nutritivas.",
        stock: true,
        destacado: false
    },
    {
        id: 95,
        nombre: "Chocolate Negro 100g",
        categoria: "Comestibles",
        precio: 8500,
        imagen: "",
        descripcion: "Chocolate negro 70% cacao, antioxidantes.",
        stock: true,
        destacado: true
    },
    {
        id: 96,
        nombre: "Galletas Saladas 200g",
        categoria: "Comestibles",
        precio: 4500,
        imagen: "",
        descripcion: "Galletas saladas, perfectas para acompañar.",
        stock: true,
        destacado: false
    },
    {
        id: 97,
        nombre: "Palomitas de Maíz 200g",
        categoria: "Comestibles",
        precio: 3500,
        imagen: "",
        descripcion: "Palomitas de maíz para microondas.",
        stock: true,
        destacado: false
    },
    {
        id: 98,
        nombre: "Gelatina 4 Sobres",
        categoria: "Comestibles",
        precio: 5500,
        imagen: "",
        descripcion: "Gelatina de diferentes sabores, 4 sobres.",
        stock: true,
        destacado: true
    },
    {
        id: 99,
        nombre: "Helado de Vainilla 1L",
        categoria: "Comestibles",
        precio: 12000,
        imagen: "",
        descripcion: "Helado de vainilla cremoso, 1 litro.",
        stock: true,
        destacado: true
    },
    {
        id: 100,
        nombre: "Canasta Familiar Completa",
        categoria: "Canasta Familiar",
        precio: 120000,
        imagen: "",
        descripcion: "Canasta familiar completa con productos esenciales para toda la semana.",
        stock: true,
        destacado: true
    }
];

// Función para formatear precios
function formatearPrecio(precio) {
    return new Intl.NumberFormat('es-CO', {
        style: 'currency',
        currency: 'COP',
        minimumFractionDigits: 0
    }).format(precio);
}

// Función para renderizar productos
function renderizarProductos(productosArray, contenedorId) {
    
    
    const contenedor = document.getElementById(contenedorId);
    if (!contenedor) {
        
        return;
    }

    contenedor.innerHTML = '';

    productosArray.forEach((producto, index) => {
        
        const productoHTML = `
            <div class="col-md-6 col-lg-4 mb-4">
                <div class="card h-100 producto-card">
                    <img src="${producto.imagen}" class="card-img-top" alt="${producto.nombre}" style="height: 200px; object-fit: cover;">
                    <div class="card-body d-flex flex-column">
                        <div class="mb-2">
                            <span class="badge bg-primary">${producto.categoria}</span>
                            ${producto.destacado ? '<span class="badge bg-warning ms-1">Destacado</span>' : ''}
                        </div>
                        <h5 class="card-title">${producto.nombre}</h5>
                        <p class="card-text text-muted">${producto.descripcion}</p>
                        <div class="mt-auto">
                            <div class="d-flex justify-content-between align-items-center mb-3">
                                <div>
                                    <span class="precio-actual">${formatearPrecio(producto.precio)}</span>
                                </div>
                                <span class="badge ${producto.stock ? 'bg-success' : 'bg-danger'}">
                                    ${producto.stock ? 'Disponible' : 'Agotado'}
                                </span>
                            </div>
                            <button class="btn btn-primary w-100" ${!producto.stock ? 'disabled' : ''} onclick="agregarAlCarrito(${producto.id})">
                                <i class="fas fa-shopping-cart me-2"></i>
                                ${producto.stock ? 'Agregar al Carrito' : 'Agotado'}
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        `;
        contenedor.innerHTML += productoHTML;
    });
    
    
}

// Función para obtener productos destacados
function obtenerProductosDestacados() {
    return productos.filter(producto => producto.destacado);
}

// Función para agregar producto al carrito (simulada)
function agregarAlCarrito(productoId) {
    const producto = productos.find(p => p.id === productoId);
    if (producto && producto.stock) {
        // Aquí se podría implementar la lógica del carrito
        alert(`¡${producto.nombre} agregado al carrito!\nPrecio: ${formatearPrecio(producto.precio)}`);
        
        // Simular llamada a WhatsApp
        const mensaje = `Hola, me interesa comprar: ${producto.nombre} - ${formatearPrecio(producto.precio)}`;
        const urlWhatsApp = `https://wa.me/5731047566XX?text=${encodeURIComponent(mensaje)}`;
        window.open(urlWhatsApp, '_blank');
    }
}

// Función para inicializar la página de productos
function inicializarProductos() {
    
    
    
    // Renderizar todos los productos
    const contenedorTodos = document.getElementById('productos-container');
    if (contenedorTodos) {
        
        renderizarProductos(productos, 'productos-container');
    } else {
        
    }
    
    // Ya no renderizamos productos destacados en la página de productos
}

// Función para inicializar productos en la página de inicio
function inicializarProductosHome() {
    
    const contenedorHome = document.getElementById('productos-destacados-home');
    if (contenedorHome) {
        const destacados = obtenerProductosDestacados().slice(0, 6);
        
        renderizarProductos(destacados, 'productos-destacados-home');
    }
}

// Inicializar cuando se carga la página
document.addEventListener('DOMContentLoaded', function() {
    
    
    // Verificar qué página estamos cargando
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    
    
    if (currentPage === 'index.html' || currentPage === '') {
        inicializarProductosHome();
    } else if (currentPage === 'productos.html') {
        inicializarProductos();
    }
    
    // Función de respaldo con delay para asegurar que todo esté cargado
    setTimeout(function() {
        
        
        // Verificar si los productos se cargaron correctamente
        const contenedorTodos = document.getElementById('productos-container');
        if (contenedorTodos && contenedorTodos.children.length === 0) {
            
            inicializarProductos();
        }
        
        const contenedorHome = document.getElementById('productos-destacados-home');
        if (contenedorHome && contenedorHome.children.length === 0) {
            
            inicializarProductosHome();
        }
    }, 500);
});

// Función de respaldo adicional cuando la ventana esté completamente cargada
window.addEventListener('load', function() {
    
    
    // Verificar productos en página de productos
    const contenedorTodos = document.getElementById('productos-container');
    if (contenedorTodos && contenedorTodos.children.length === 0) {
        
        renderizarProductos(productos, 'productos-container');
    }
    
    // Ya no verificamos productos destacados en página de productos
    
    // Verificar productos destacados en home
    const contenedorHome = document.getElementById('productos-destacados-home');
    if (contenedorHome && contenedorHome.children.length === 0) {
        
        const destacados = obtenerProductosDestacados().slice(0, 6);
        renderizarProductos(destacados, 'productos-destacados-home');
    }
});

// Exportar funciones para uso global
window.productos = productos;
window.renderizarProductos = renderizarProductos;
window.obtenerProductosDestacados = obtenerProductosDestacados;
window.agregarAlCarrito = agregarAlCarrito;
