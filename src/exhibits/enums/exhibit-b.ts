// Gives you all enums, reaming keys and such. and the predictably of a normal object ( none of the weird enum behaviors )

enum Shape {
  circle = "circle", //this is useful in refactoring, we can set Shape.circle to anything we want later without having to
  // modify it across all the files
  square = "square"
}

type Shape1 = (typeof Shape)[keyof typeof Shape];
const resolveShape1 = (arg: Shape1) => {};
resolveShape1("square");
resolveShape1(Shape.square);

type Shape2 = keyof typeof Shape;
const resolveShape2 = (arg: Shape2) => {};
resolveShape2("circle");
resolveShape2(Shape.circle);

export const shapes_1 = {
  circle: "circle",
  square: "square"
} as const;

type Shape3 = keyof typeof shapes_1;
const resolveShape3 = (arg: Shape3) => {};
resolveShape3("circle");
resolveShape3(Shape.circle);

type Shape4 = (typeof shapes_1)[keyof typeof shapes_1];
const resolveShape4 = (arg: Shape4) => {};
resolveShape4("circle");
resolveShape4(Shape.circle);

export const shapes_2 = {
  circle: {
    shape: ["x", "y", "rx"]
  },
  square: ["x", "y", "height", "width"]
} as const;

type Shape5 = keyof typeof shapes_2;
const resolveShape5 = (arg: Shape5) => {};
resolveShape5("circle");
resolveShape5(Shape.circle);

type Shape6 = (typeof shapes_2)[keyof typeof shapes_2];
const resolveShape6 = (arg: Shape6) => {};
resolveShape6({ shape: ["x", "y", "rx"] });
resolveShape6(shapes_2.circle);
resolveShape6(shapes_2.square);

type Shape10 = keyof typeof shapes_2;
const resolveShape10 = <T extends Shape10>(shape: T): (typeof shapes_2)[T] => {
  return {} as any;
};
const res101 = resolveShape10("circle");
const res102 = resolveShape10(Shape.circle);

export const shapes_3 = {
  [Shape.circle]: {
    shape: ["x", "y", "rx"]
  },
  [Shape.square]: ["x", "y", "height", "width"]
} as const;

type Shape7 = keyof typeof shapes_3;
const resolveShape7 = (arg: Shape7) => {};
resolveShape7("circle");
resolveShape7(Shape.circle);

type Shape8 = (typeof shapes_3)[keyof typeof shapes_3];
const resolveShape8 = (arg: Shape8) => {};
resolveShape8({ shape: ["x", "y", "rx"] });
resolveShape8(shapes_3["circle"]);
resolveShape8(shapes_3["circle2"]);
resolveShape8(shapes_3[Shape.circle]);

type Shape9 = keyof typeof shapes_3;
const resolveShape9 = <T extends Shape9>(shape: T): (typeof shapes_3)[T] => {
  return {} as any;
};
resolveShape9("circle");
const res = resolveShape9(Shape.circle);
