var stringConstructor = "test".constructor;
var arrayConstructor = [].constructor;
var objectConstructor = {}.constructor;

function whatIsIt(object) {
    if (object === null) {
        return "null";
    }
    else if (object === undefined) {
        return "undefined";
    }
    else if (object.constructor === stringConstructor) {
        return "String";
    }
    else if (object.constructor === arrayConstructor) {
        return "Array";
    }
    else if (object.constructor === objectConstructor) {
        return "Object";
    }
}

var testSubjects = ["string", [1,2,3], {foo: "bar"}, 4];

for (var i=0, len = testSubjects.length; i < len; i++) {
    console.log(whatIsIt(testSubjects[i]));
}