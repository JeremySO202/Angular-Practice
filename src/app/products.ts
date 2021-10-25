export interface Product {
  id: number;
  name: string;
  price: number;
  description: string;
}

export const products = [
  {
    id: 1,
    name: 'iPhone XL',
    price: 899,
    description: 'Un telefono grande con la mejor pantalla',
  },
  {
    id: 2,
    name: 'iPhone Mini',
    price: 699,
    description: 'Un buen telefono con buena camara',
  },
  {
    id: 3,
    name: 'iPhone Standard',
    price: 399,
    description: '',
  },
];

/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/
