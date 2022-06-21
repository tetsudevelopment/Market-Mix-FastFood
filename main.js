let app = new Vue({
  el: "#app",
  data: {
    dataFood: [
      {
        burger: [
          {
            idModal: "#h01",
            id: "h01",
            name: "Hamburguesa Mega Stacker",
            img: "assets/food/hamburgerMegaStacker.png",
            description:
              "Cuenta con triple carne de res 113 gr C/U a la parrilla, queso, tocineta crujiente y deliciosa salsa stacker sobre un pan con ajonjolí",
            price: 35000,
            cant: 0,
          },
          {
            idModal: "#h02",
            id: "h02",
            name: "Hamburguesa Whopper",
            img: "assets/food/hamburgerWhopper.png",
            description:
              "Nuestra WHOPPER® cuenta con carne 113 gr de res a la parrilla, preparada con jugosos tomates, lechuga recién cortada, pepinillos, cebollas en rodajas y cremosa mayonesa sobre un pan con ajonjolí tostado perfectamente y ketchup ¡Pídela en COMBO con papas a la francesa y tu bebida favorita!",
            price: 22000,
            cant: 0,
          },
          {
            idModal: "#h03",
            id: "h03",
            name: "Hamburguesa Xl Queso Tocineta",
            img: "assets/food/hamburgerXlQuesoTocineta.png",
            description:
              "Cuenta con doble carne de res 48 gr c/u a la parrilla, jugosos tomates, lechuga recién cortada, y cremosa mayonesa sobre un pan sandwich con ajonjolí.",
            price: 22000,
            cant: 0,
          },
          {
            idModal: "#h04",
            id: "h04",
            name: "Hamburguesa XT BBQ",
            img: "assets/food/hamburgerXTBQQ.png",
            description:
              "Cuenta con una carne de res a la parrilla de 198 gr, queso, lechuga, tomates, cebolla crujiente, salsa BBQ y cremosa mayonesa sobre un pan esponjoso de maíz.",
            price: 32000,
            cant: 0,
          },
        ],
        hotDog: [
          {
            idModal: "#hd01",
            id: "hd01",
            name: "Hot Dog Americano",
            img: "assets/food/HotDogAmericano.jpg",
            description:
              "Bacon ahumado, doble queso, pepinillos, cebolla crunch, salsa de tomate y mostaza. Salchicha suiza, tocineta",
            price: 18000,
            cant: 0,
          },
          {
            idModal: "#hd02",
            id: "hd02",
            name: "Hot Dog Argentino",
            img: "assets/food/HotDogArgentino.jpg",
            description:
              "Queso cervecero, pimentones asados, chimichurri y chorizo artesanal.",
            price: 19000,
            cant: 0,
          },
          {
            idModal: "#hd03",
            id: "hd03",
            name: "Hot Dog Azul",
            img: "assets/food/HotDogAzul.jpg",
            description:
              "Queso roquefort, tomates rostizados, rugula, hongos, salchicha alemana.",
            price: 18000,
            cant: 0,
          },
          {
            idModal: "#hd04",
            id: "hd04",
            name: "Hot Dog Borracho",
            img: "assets/food/HotDogBorracho.jpg",
            description:
              "Demiglace de Buchanan’s , cebollas caramelizadas con cerveza a8tesanal, queso cheddar y tocineta ahumada, Salchicha suiza,tocineta.",
            price: 19000,
            cant: 0,
          },
        ],
      },
    ],
    dataTable: [
      {
        idModal: "#h01",
        id: "h01",
        name: "Hamburguesa Mega Stacker",
        img: "assets/food/hamburgerMegaStacker.png",
        description:
          "Cuenta con triple carne de res 113 gr C/U a la parrilla, queso, tocineta crujiente y deliciosa salsa stacker sobre un pan con ajonjolí",
        price: 35000,
        cant: 0,
      },
      {
        idModal: "#hd01",
        id: "hd01",
        name: "Hot Dog Americano",
        img: "assets/food/HotDogAmericano.jpg",
        description:
          "Bacon ahumado, doble queso, pepinillos, cebolla crunch, salsa de tomate y mostaza. Salchicha suiza, tocineta",
        price: 18000,
        cant: 0,
      },
    ],
    userId: "1234",
    userPin: "1234",
    viewMain: 0,
    viewEmployee: 0,
  },
  methods: {
    cant(item, value) {
      if (value == 0) {
        if (item.cant > 0) {
          item.cant--;
        } else {
          console.log("Seleccione uno ole");
          return (item.cant = 0);
        }
      } else {
        item.cant++;
      }
    },
    agg(item) {
      // if (item.cant == 0) {
      //   alert('Seleccioné la cantidad que desea comprar')
      // } else {
      //   let comida=this.dataTable.forEach(element => {
      //     console.log(element);
      //   });
      //   this.dataTable.push(item)
      // }
    },
    getOut() {
      this.viewMain = 0;
    },
    login() {
      this.viewMain = 1;
    },
    waiter() {
      this.viewEmployee = 2;
    },
    cook() {
      this.viewEmployee = 1;
    },
  },
});
