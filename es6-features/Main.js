import { function1,a,function2} from "./NamedImport1.js";
import * as Elements from "./NamedImport1.js";
import c1 from "./DefaultImport.js";
console.log(function1("mazhar"),a,function2("world"));
console.log(Elements.function1("mazhar"),Elements.a,Elements.function2("world"));
console.log(Elements.f1("mkmk"),Elements.b);
console.log(c1(1,2))