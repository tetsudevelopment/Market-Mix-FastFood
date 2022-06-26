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
            cant: 1,
            total: 0,
          },
          {
            idModal: "#h02",
            id: "h02",
            name: "Hamburguesa Whopper",
            img: "assets/food/hamburgerWhopper.png",
            description:
              "Nuestra WHOPPER® cuenta con carne 113 gr de res a la parrilla, preparada con jugosos tomates, lechuga recién cortada, pepinillos, cebollas en rodajas y cremosa mayonesa sobre un pan con ajonjolí tostado perfectamente y ketchup ¡Pídela en COMBO con papas a la francesa y tu bebida favorita!",
            price: 22000,
            cant: 1,
            total: 0,
          },
          {
            idModal: "#h03",
            id: "h03",
            name: "Hamburguesa Xl Queso Tocineta",
            img: "assets/food/hamburgerXlQuesoTocineta.png",
            description:
              "Cuenta con doble carne de res 48 gr c/u a la parrilla, jugosos tomates, lechuga recién cortada, y cremosa mayonesa sobre un pan sandwich con ajonjolí.",
            price: 22000,
            cant: 1,
            total: 0,
          },
          {
            idModal: "#h04",
            id: "h04",
            name: "Hamburguesa XT BBQ",
            img: "assets/food/hamburgerXTBQQ.png",
            description:
              "Cuenta con una carne de res a la parrilla de 198 gr, queso, lechuga, tomates, cebolla crujiente, salsa BBQ y cremosa mayonesa sobre un pan esponjoso de maíz.",
            price: 32000,
            cant: 1,
            total: 0,
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
            cant: 1,
            total: 0,
          },
          {
            idModal: "#hd02",
            id: "hd02",
            name: "Hot Dog Argentino",
            img: "assets/food/HotDogArgentino.jpg",
            description:
              "Queso cervecero, pimentones asados, chimichurri y chorizo artesanal.",
            price: 19000,
            cant: 1,
            total: 0,
          },
          {
            idModal: "#hd03",
            id: "hd03",
            name: "Hot Dog Azul",
            img: "assets/food/HotDogAzul.jpg",
            description:
              "Queso roquefort, tomates rostizados, rugula, hongos, salchicha alemana.",
            price: 18000,
            cant: 1,
            total: 0,
          },
          {
            idModal: "#hd04",
            id: "hd04",
            name: "Hot Dog Borracho",
            img: "assets/food/HotDogBorracho.jpg",
            description:
              "Demiglace de Buchanan’s , cebollas caramelizadas con cerveza a8tesanal, queso cheddar y tocineta ahumada, Salchicha suiza,tocineta.",
            price: 19000,
            cant: 1,
            total: 0,
          },
        ],
      },
    ], // Datos comida
    dataUser: [
      {
        name: "Usuario 1",
        userId: "1234",
        userPin: "1234",
      },
      {
        name: "Usuario 2",
        userId: "12345",
        userPin: "12345",
      },
    ], //Datos Usuario
    dataTable: [], //tabla del carrito
    dataEmployee: [],
    userId: "1234",
    userPin: "1234",
    viewMain: 0,
    viewEmployee: 0,
    total: 0,
    cantidad: 0,
    pedido: 0,
    pago: 0,
    dataAdmin: {
      cancelTotal: 0,
      entregadoTotal: 0,
      cancelLength: 0,
      entregadoLength: 0,
      cancelName: 'Cancelado',
      entregadoName: 'Entregado',
      total:0,
    }
  },
  computed: {
    totall() {
      this.total;
      this.dataTable.forEach((element) => {
        return (this.total += element.total);
      });
      return this.total;
    }
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
      if (item.cant == 0) {
        return alert("Seleccioné la cantidad que desea comprar");
      } else if (this.dataTable.length === 0) {
        console.log("Entro en el else-if");
        this.dataTable.push(item);
      } else {
        let index = this.dataTable.indexOf(item);
        if (index === -1) {
          this.dataTable.push(item);
        } else {
          this.dataTable.forEach((element) => {
            if (element.id === item.id) {
              console.log("Entro en el if");
              let index = this.dataTable.indexOf(element);
              this.dataTable[index].element.cant = item.cant;
            }
          });
        }
      }
      this.cantidad = this.dataTable.length;
    },
    cancel() {
      if (this.dataTable.length > 0) {
        alert("Su pedido a sido cancelado");
        this.pedido++;
        this.dataEmployee.push({
          idModal: `#pedido${this.pedido}`,
          id: `pedido${this.pedido}`,
          pedido: this.pedido,
          status: "Cancelado",
          total: this.total,
          producto: this.dataTable,
        });
        this.total = 0;
        this.dataTable = [];
        this.cantidad = this.dataTable.length; 
      } else {
        console.log("Salir");
      }
    },
    toBuy() {
      if (this.pago == 0) {
        alert('Seleccione un metodo de pago')
      }else if (this.dataTable.length > 0) {
        this.pedido++;
        this.dataEmployee.push({
          idModal: `#pedido${this.pedido}`,
          id: `pedido${this.pedido}`,
          pedido: this.pedido,
          status: "Preparando",
          total: this.total,
          producto: this.dataTable,
        });
        this.total = 0;
        this.dataTable = [];
        this.cantidad = this.dataTable.length;
        alert('Su compra a sido satisfactoria')
      } else {
        console.log('Error');
      }
    },
    buy() {
      alert("No tiene productos que comprar");
    },
    deleteProduct(index) {
      this.dataTable.splice(index, 1);
      this.cantidad = this.dataTable.length;
    },
    getOut() {
      this.viewMain = 0;
      this.viewEmployee = 0;
      this.userId = '';
      this.userPin = '';
    },
    login() {
      let login = this.dataUser.find((element) => {
        return element;
      });
      if (login.userId == this.userId && login.userPin == this.userPin) {
        return (this.viewMain = 1);
      } else {
        alert("Usuario/Clave son incorrectos");
      }
    },
    employee(value) {
      if (value == 1) {
        this.viewEmployee = 1;
      } else if (value == 2) {
        this.viewEmployee = 2;
      } else {
        this.viewEmployee = 3;
        this.admin();
      }
    },
    ok(index) {
      if (this.viewEmployee == 1) {
        this.dataEmployee[index].status = 'Listo';
      } else if (this.viewEmployee == 2) {
        this.dataEmployee[index].status = "Entregado";
      } else {
        
      }
    },
    admin() {
      this.valueAdmin();
      this.dataEmployee.forEach((element) => {
        if (element.status == 'Cancelado') {
          this.dataAdmin.cancelTotal = this.dataAdmin.cancelTotal+ element.total;
          this.dataAdmin.cancelLength += element.producto.length;
        } else if (element.status == "Entregado") {
          this.dataAdmin.entregadoTotal += element.total;
          this.dataAdmin.entregadoLength += element.producto.length;
        }
      });
      this.dataAdmin.total = this.dataAdmin.cancelTotal + this.dataAdmin.entregadoTotal;
    },
    valueAdmin() {
      this.dataAdmin.cancelTotal = 0;
      this.dataAdmin.cancelLength = 0;
      this.dataAdmin.entregadoTotal = 0;
      this.dataAdmin.entregadoLength = 0;
      this.dataAdmin.total = 0;
    },
  },
});
