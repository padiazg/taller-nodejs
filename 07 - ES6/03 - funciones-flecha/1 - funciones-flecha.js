
function iteractuar(f0, n) {
    for (let i=1; i<=n; i++) {
        f0(i);
    }
}

console.log('con function');
function Llamar0() {
    var self = this;

    self.q = 10;
    console.log('inicio q:', self.q);
    iteractuar(function(y) {
        this.q=1;
        self.q++;
        console.log('iteracción', y, ' self.q=', self.q, ' this.q:', this.q);
    }, 5);

}

const o0 = new Llamar0();

console.log('\ncon una funcion flecha');
function Llamar1() {
    this.q=20;
    console.log('inicio q:', this.q);
    iteractuar(y => console.log('iteracción', y, ' this.q:', this.q), 5);
}
const o1 = new Llamar1();
