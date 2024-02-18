"use strict";
// 3.4
// type Family<Parent = Animal, Child = Animal> = {
//   mother: Parent;
//   father: Parent;
//   child: Child;
// }
// type S = Family<string, string>;
// type T = Family;
// type U = Family<string>;
// type Family<Parent, Child = Animal> = {
//   mother: Parent;
//   father: Parent;
//   child: Child;
// }
// type Family<Parent extends HasName, Child extends HasName = Animal> = {
//   mother: Parent;
//   father: Parent;
//   child: Child;
// }
