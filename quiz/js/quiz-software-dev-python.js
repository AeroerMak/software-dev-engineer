// ===================================
// Software Development Skills Foundation (Python) Question Bank
// ===================================

class SoftwareDevPythonQuestionBank {
    static getQuestions() {
        return [
            {
                id: 1,
                question: "A ________ is a ________ in which the functional process logic, data access, computer data storage and user interface are developed and maintained as independent modules on separate platforms.",
                options: [
                    "Database schema / diagram",
                    "Web application architecture / client architecture",
                    "Three-tier architecture / client-server architecture",
                    "XML schema / diagram"
                ],
                correctAnswer: "C",
                explanation: "Three-tier architecture is a type of client-server architecture that separates the presentation, application, and data layers into distinct components potentially running on different platforms."
            },
            {
                id: 2,
                question: "Which of the following is a typical activity in the creation of a program?",
                options: [
                    "Prototyping",
                    "Debugging",
                    "Project Management",
                    "Installation"
                ],
                correctAnswer: "B",
                explanation: "Debugging is a core development activity where developers identify and fix defects to ensure the program behaves as intended."
            },
            {
                id: 3,
                question: "Under which software development methodology do requirements and solutions evolve through the collaborative effort of self-organizing cross-functional teams?",
                options: [
                    "Waterfall",
                    "Spiral",
                    "Agile",
                    "Prototyping"
                ],
                correctAnswer: "C",
                explanation: "Agile methodology emphasizes iterative development and collaboration among self-organizing cross-functional teams, allowing requirements and solutions to evolve together."
            },
            {
                id: 4,
                question: "Which statement BEST describes computing?",
                options: [
                    "Any goal-oriented activity requiring, benefiting from, or creating algorithms through computers.",
                    "An algorithm that uniquely represents symbols from some source alphabet, which may be in some other target alphabet.",
                    "A deliberate process that transforms one or more inputs into one or more results, with variable change.",
                    "A process of discovering and resolving defects that prevent correct operation of computer software or a system."
                ],
                correctAnswer: "A",
                explanation: "Computing broadly refers to goal-oriented activities that leverage computers and algorithms to solve problems, automate tasks, or process information."
            },
            {
                id: 5,
                question: "The process of collecting the user needs to solve a problem or an issue and achieve an objective is known as:",
                options: [
                    "Requirements analysis.",
                    "System analysis.",
                    "Data flow diagram / ER diagram",
                    "ER diagram"
                ],
                correctAnswer: "A",
                explanation: "Requirements analysis focuses on gathering and documenting user needs to ensure the solution addresses the underlying problem or objective."
            },
            {
                id: 6,
                question: "Consider the following commands executed sequentially in a Unix shell. What output does the final ls command display?",
                codeSnippet: [
                    "echo \"Hello World\" > data.txt",
                    "cp data.txt hello.txt",
                    "mkdir hello_dir",
                    "mv hello.txt goodbye.txt",
                    "ls"
                ],
                options: [
                    "data.txt goodbye.txt hello_dir",
                    "data.txt hello.txt hello_dir",
                    "goodbye.txt data.txt",
                    "hello.txt data.txt"
                ],
                correctAnswer: "A",
                explanation: "After copying, renaming, and creating the directory, ls lists the remaining items: the original data.txt file, the renamed goodbye.txt file, and the hello_dir directory."
            },
            {
                id: 7,
                question: "A front-end application, which includes GUI, is created using ________.",
                options: [
                    "...a compiler",
                    "...an IDE",
                    "...node",
                    "...the command line"
                ],
                correctAnswer: "B",
                explanation: "Developers typically use an IDE (Integrated Development Environment) to build front-end applications with graphical user interfaces, providing tooling for editing, building, and debugging."
            },
            {
                id: 8,
                question: "Which variable name is INCORRECT?",
                options: [
                    "6variable",
                    "_mystring",
                    "AnyVar",
                    "v_n78ble11"
                ],
                correctAnswer: "A",
                explanation: "Variable names cannot begin with a digit; they must start with a letter or underscore."
            },
            {
                id: 9,
                question: "Which of the following is an interpreted programming language?",
                options: [
                    "ADA",
                    "C#",
                    "JavaScript",
                    "Delphi"
                ],
                correctAnswer: "C",
                explanation: "JavaScript runs inside interpreters embedded in browsers and runtime environments, executing code directly without a separate compilation step."
            },
            {
                id: 10,
                question: "Consider the following Python code snippet. What value is printed?",
                codeSnippet: [
                    "x, y, z = 0, -5, 5",
                    "",
                    "if y > 0:",
                    "    if z < 0:",
                    "        x = x + 5",
                    "    elif y > 5:",
                    "        x = x + 4",
                    "    else:",
                    "        x = x + 3",
                    "else:",
                    "    x = x + 2",
                    "",
                    "print(x)"
                ],
                options: [
                    "3",
                    "2",
                    "4",
                    "5"
                ],
                correctAnswer: "B",
                explanation: "Since y is -5, the outer if condition fails and the else block runs, adding 2 to x (initially 0), so the result is 2."
            },
            {
                id: 11,
                question: "Given the following Python class definition, which option correctly displays the fruit's details?",
                codeSnippet: [
                    "class fruits():",
                    "    def __init__(self, name, color):",
                    "        self.name = name",
                    "        self.color = color",
                    "",
                    "    def show(self):",
                    "        print(\"fruit is\", self.name)",
                    "        print(\"color is\", self.color)",
                    "",
                    "apple = fruits(\"apple\", \"red\")"
                ],
                options: [
                    "print(apple(name, color))",
                    "print(apple.self.name, apple.self.color)",
                    "print(apple.__init__())",
                    "print(apple.show())"
                ],
                correctAnswer: "D",
                explanation: "Calling apple.show() invokes the method that prints the name and color. Wrapping it in print displays the method's output (and prints None afterward due to the method's implicit return)."
            },
            {
                id: 12,
                question: "Which of the proposed sentences about Encapsulation is TRUE?",
                options: [
                    "Encapsulation can be achieved by using abstract classes and methods.",
                    "Encapsulation can be achieved by using private and protected access members.",
                    "Encapsulation can be achieved by creating classes containing other classes' members.",
                    "Encapsulation can be achieved by creating \"using\" relationships between two or more objects."
                ],
                correctAnswer: "B",
                explanation: "Encapsulation hides internal state by controlling access through private or protected members and exposing public methods."
            },
            {
                id: 13,
                question: "Consider the following Python class. What output is produced by the two print statements?",
                codeSnippet: [
                    "class Student:",
                    "    def __init__(self):",
                    "        self.__name = None",
                    "",
                    "    @property",
                    "    def name(self):",
                    "        return self.__name",
                    "",
                    "    def email(self, name):",
                    "        self.__name = name",
                    "        return '{}@peoplecert.com'.format(self.__name)",
                    "",
                    "s = Student()",
                    "print('Your name is', s.name, end=' ')",
                    "print('and your email address is', s.email('John'))"
                ],
                options: [
                    "Your name is John and your email address is John@peoplecert.com",
                    "Your name is None and your email address is None@peoplecert.com",
                    "Your name is None and your email address is John@peoplecert.com",
                    "Your name is John and your email address is None@peoplecert.com"
                ],
                correctAnswer: "C",
                explanation: "The first print accesses the property before email() runs, so the name is still None. The email() method then sets the name to 'John' and returns the address."
            },
            {
                id: 14,
                question: "Which of the following tags defines an ordered list in HTML?",
                options: [
                    "<ol>",
                    "<ul>",
                    "<li>",
                    "<br>"
                ],
                correctAnswer: "A",
                explanation: "The <ol> tag creates an ordered (numbered) list in HTML."
            },
            {
                id: 15,
                question: "Which of the following sentences BEST describes a Composition relationship between Class A and Class B?",
                options: [
                    "It is a weak relationship, as Class B uses specific attributes from Class A in its methods and Class A is independent of Class B.",
                    "It is a weak form of aggregation, as Class B references an independent A object when initialized, as one of its attributes and Class A is independent of Class B.",
                    "It is a strong relationship, where Class B initializes an instance of Class A in its own constructor as an attribute. If the B’s object is destroyed, the A’s object is destroyed too.",
                    "It is a relationship, where Class B inherits all the methods and properties from Class A. Class B is considered as the child of Class A."
                ],
                correctAnswer: "C",
                explanation: "Composition tightly couples the lifetimes of the objects; the containing class controls the creation and destruction of the composed object."
            },
            {
                id: 16,
                question: "We want list items to alternate their text alignment: first to the left, second to the right, third to the left, etc. Which CSS achieves this for every list?",
                codeSnippet: [
                    "li {",
                    "    text-align: left;",
                    "}",
                    "",
                    "li:nth-child(even) {",
                    "    text-align: right;",
                    "}"
                ],
                options: [
                    "li { text-align: left; } li:nth-child(even) { text-align: right; }",
                    "li { text-align: right; } li:nth-child(even) { text-align: left; }",
                    "ul { text-align: right; } ul:nth-child(even) { text-align: left; }",
                    "ul { text-align: left; } ul:nth-child(even) { text-align: right; }"
                ],
                correctAnswer: "A",
                explanation: "Applying the alternating alignment directly to li elements with nth-child targets every list item individually."
            },
            {
                id: 17,
                question: "Which of the proposed sentences BEST describes the term Heap?",
                options: [
                    "Heap is used for dynamic memory allocation.",
                    "Heap is used for static memory allocation.",
                    "Heap is a contiguous block of memory.",
                    "Heap is allocated by the compiler for the declared variables."
                ],
                correctAnswer: "A",
                explanation: "The heap manages dynamically allocated memory whose lifetime is controlled manually or by a garbage collector."
            },
            {
                id: 18,
                question: "How many columns is the Bootstrap grid system based on?",
                options: [
                    "3",
                    "9",
                    "6",
                    "12"
                ],
                correctAnswer: "D",
                explanation: "Bootstrap's grid system divides the layout into 12 columns, allowing flexible responsive designs."
            },
            {
                id: 19,
                question: "Consider the following Python function that builds a binary representation. What output is printed?",
                codeSnippet: [
                    "lst = []",
                    "",
                    "def equivalent(x):",
                    "    if x == 0:",
                    "        return lst",
                    "    bin_digit = x % 2",
                    "    lst.append(bin_digit)",
                    "    equivalent(x // 2)",
                    "",
                    "equivalent(4)",
                    "lst.reverse()",
                    "",
                    "for i in lst:",
                    "    print(i, end=' ')"
                ],
                options: [
                    "0 0 1",
                    "3",
                    "1 0 0",
                    "Infinite Loop"
                ],
                correctAnswer: "C",
                explanation: "The recursive function collects binary digits of 4 (100). After reversing, the for loop prints '1 0 0'."
            },
            {
                id: 20,
                question: "Which of the following statements BEST describes the structure of a CSS rule?",
                options: [
                    "A declaration followed by a selector",
                    "A declaration followed by one or more selectors",
                    "A selector, followed by one or more declarations",
                    "A number of selectors followed by a number of declarations"
                ],
                correctAnswer: "C",
                explanation: "A CSS rule starts with a selector and contains one or more declarations within braces."
            },
            {
                id: 21,
                question: "Consider the following Python code. What output is produced?",
                codeSnippet: [
                    "def greet(name, times):",
                    "    return f\"Hello, {name}!\", times + 1",
                    "",
                    "def main():",
                    "    times = 0",
                    "    greeting, times = greet(\"World\", times)",
                    "    print(f\"{greeting}. Counts {times} times\")",
                    "    greeting, times = greet(\"People\", times)",
                    "    print(f\"{greeting}. Counts {times} times\")",
                    "",
                    "main()"
                ],
                options: [
                    "Hello, World!. Counts 1 times\\nHello, People!. Counts 2 times",
                    "('Hello, World!', 1), Counts 0 times\\n('Hi, People!', 1), Counts 0 times",
                    "Type Error",
                    "Hello, World!. Counts 0 times"
                ],
                correctAnswer: "A",
                explanation: "The function returns a greeting and an incremented counter each time it's called. The counter progresses from 0 to 1, then to 2."
            },
            {
                id: 22,
                question: "Consider the following Python snippet. What is the expected output?",
                codeSnippet: [
                    "x = [10, 20, 30]",
                    "y = [10, 20, 30]",
                    "",
                    "print(id(x))",
                    "print(id(y))",
                    "print(y is x)"
                ],
                options: [
                    "327337051136\\n327327956928\\nTrue",
                    "327337051136\\n327337051136\\nFalse",
                    "327337051136\\n327327956928\\nFalse",
                    "327337051136\\n327337051136\\nTrue"
                ],
                correctAnswer: "C",
                explanation: "Lists with identical contents are separate objects, so their ids differ and `y is x` evaluates to False."
            },
            {
                id: 23,
                question: "Consider the following Python code. Which OOP concept does it demonstrate?",
                codeSnippet: [
                    "class House:",
                    "    def __init__(self):",
                    "        self.__build = False",
                    "        self.__price = 0",
                    "",
                    "myhouse = House()",
                    "print(myhouse.build)      # AttributeError",
                    "print(myhouse.__price)"
                ],
                options: [
                    "Polymorphism",
                    "Modularization",
                    "Hierarchy",
                    "Encapsulation"
                ],
                correctAnswer: "D",
                explanation: "Private attributes (`__attribute`) hide internal state, illustrating encapsulation."
            },
            {
                id: 24,
                question: "Given the class definition below, which statement is TRUE about the attributes?",
                codeSnippet: [
                    "class employee:",
                    "    def __init__(self, name, sal):",
                    "        self._name = name",
                    "        self.__salary = sal"
                ],
                options: [
                    "_name is private and __salary is protected",
                    "_name is public and __salary is private",
                    "_name is private and __salary is public",
                    "_name is protected and __salary is private"
                ],
                correctAnswer: "D",
                explanation: "Single underscore denotes a protected attribute by convention, while double underscore triggers name mangling, making the attribute effectively private."
            },
            {
                id: 25,
                question: "Consider the following Python code using abstract base classes. What happens when it runs?",
                codeSnippet: [
                    "from abc import ABC, abstractmethod",
                    "",
                    "class Baseclass(ABC):",
                    "    def print(self, x):",
                    "        print(\"Passed value:\", x, end=' ')",
                    "",
                    "    @abstractmethod",
                    "    def task(self):",
                    "        print(\"We are inside Baseclass task.\", end=' ')",
                    "",
                    "class Childclass(Baseclass):",
                    "    def task(self):",
                    "        print(\"We are inside Childclass task.\", end=' ')",
                    "",
                    "obj1 = Baseclass()",
                    "obj1.task()",
                    "obj1.print(100)"
                ],
                options: [
                    "We are inside Baseclass task. Passed value: 100",
                    "AttributeError: 'Childclass' object has no attribute 'print'",
                    "TypeError: Can't instantiate abstract class Baseclass with abstract method task",
                    "We are inside Childclass task. Passed value: 100"
                ],
                correctAnswer: "C",
                explanation: "Abstract classes with unimplemented abstract methods cannot be instantiated; doing so raises a TypeError before any method runs."
            },
            {
                id: 26,
                question: "Which word describes the process of converting a variable from one data type to another?",
                options: [
                    "Cashing",
                    "Casting",
                    "Cussing",
                    "Cauldron"
                ],
                correctAnswer: "B",
                explanation: "Type conversion is commonly called casting."
            },
            {
                id: 27,
                question: "Which statement about variable shadowing is TRUE?",
                options: [
                    "The inner variable is shadowed by the outer variable.",
                    "The variable with the higher level scope overrides the variable with the lower level scope.",
                    "The inner identifier masks the outer identifier.",
                    "The lower level variable is shadowed."
                ],
                correctAnswer: "C",
                explanation: "Shadowing occurs when an inner-scope identifier masks an outer one."
            },
            {
                id: 28,
                question: "Inheritance represents:",
                options: [
                    "HAS-A relationship",
                    "IS-A relationship",
                    "A relationship among classes and objects",
                    "A relationship among multiple objects"
                ],
                correctAnswer: "B",
                explanation: "Inheritance models an IS-A relationship between subclasses and superclasses."
            },
            {
                id: 29,
                question: "Which of the following statements about method overloading in Python is TRUE?",
                options: [
                    "Python supports method overloading by default.",
                    "Method overloading changes the implementation of two methods with the same signature.",
                    "Method overloading is not permitted at all.",
                    "We may overload methods but only the latest definition is used."
                ],
                correctAnswer: "D",
                explanation: "Defining multiple methods with the same name keeps only the last definition, effectively overriding earlier ones."
            },
            {
                id: 30,
                question: "Given the following multiple inheritance example, what is the output of calling Child().m()?",
                codeSnippet: [
                    "class Family:",
                    "    def m(self):",
                    "        print(\"In Family\")",
                    "",
                    "class Father(Family):",
                    "    def m(self):",
                    "        print(\"In Father\")",
                    "        super().m()",
                    "",
                    "class Mother(Family):",
                    "    def m(self):",
                    "        print(\"In Mother\")",
                    "        super().m()",
                    "",
                    "class Child(Father, Mother):",
                    "    def m(self):",
                    "        print(\"In Child\")",
                    "        super().m()",
                    "",
                    "Child().m()"
                ],
                options: [
                    "In Child\\nIn Father\\nIn Mother\\nIn Family",
                    "In Child\\nIn Father\\nIn Family\\nIn Mother",
                    "In Child\\nIn Mother\\nIn Father\\nIn Family",
                    "In Child\\nIn Mother\\nIn Family"
                ],
                correctAnswer: "A",
                explanation: "Python's MRO for Child(Father, Mother) is Child → Father → Mother → Family, so super() follows that order."
            },
            {
                id: 31,
                question: "Which of the following is needed in Python to create a formal interface?",
                options: [
                    "ABC class",
                    "A user-defined class",
                    "An instance method",
                    "A class method"
                ],
                correctAnswer: "A",
                explanation: "Python uses abstract base classes (ABC module) to define formal interfaces."
            },
            {
                id: 32,
                question: "Which word BEST describes the OOP feature that allows a single action to behave differently depending on context?",
                options: [
                    "Modularity",
                    "Inheritance",
                    "Encapsulation",
                    "Polymorphism"
                ],
                correctAnswer: "D",
                explanation: "Polymorphism lets different types respond to the same operation in their own way."
            },
            {
                id: 33,
                question: "Consider the following Python class definition. What happens when MyClass(50, 100) is executed?",
                codeSnippet: [
                    "class MyClass:",
                    "    def __init__(self, a):",
                    "        print(f\"Constructor 1 with argument {a}\")",
                    "",
                    "    def __init__(self, a, b):",
                    "        print(f\"Constructor 2 with arguments {a}, {b}\")",
                    "",
                    "obj = MyClass(50, 100)"
                ],
                options: [
                    "Constructor 2 with arguments 50, 100",
                    "Constructor 1 with argument 50",
                    "Constructor 2 with argument 100",
                    "Constructor 1 with argument 50 Constructor 2 with arguments 50, 100"
                ],
                correctAnswer: "A",
                explanation: "Python keeps only the most recent method definition; the second __init__ overrides the first."
            },
            {
                id: 34,
                question: "Which statement BEST describes the term 'finalize'?",
                options: [
                    "Finalize registers a cleanup function to be called when an object is garbage collected.",
                    "Finalize is used to place important code that executes whether an exception is handled or not.",
                    "Finalize is used to apply restrictions on a class, method, or variable.",
                    "Finalize is used to announce the end of a module's execution."
                ],
                correctAnswer: "A",
                explanation: "Finalizers allow registering cleanup callbacks that run when objects are about to be collected."
            },
            {
                id: 35,
                question: "Consider the following code that creates reference cycles. What is the expected output?",
                codeSnippet: [
                    "import gc, sys",
                    "",
                    "def ref_cycle():",
                    "    lst = [1, 2, 3, 4]",
                    "    lst.append(lst)",
                    "    print(sys.getrefcount(lst), end=' ')",
                    "    return lst",
                    "",
                    "for _ in range(2):",
                    "    ref_cycle()",
                    "",
                    "n = gc.collect()",
                    "print(n, end=' ')",
                    "print(gc.garbage, end=' ')",
                    "print(gc.collect(), end=' ')"                    
                ],
                options: [
                    "2 2 0 [] 0",
                    "3 3 2 [] 0",
                    "4 4 4 [] 0",
                    "5 5 2 [] 2"
                ],
                correctAnswer: "A",
                explanation: "Each list references itself, so getrefcount shows 2. Garbage collection finds no unreachable cycles (0), garbage list is empty, and the final collect returns 0."
            },
            {
                id: 36,
                question: "Consider the following code with mutual references. What is the expected output when Sister(10) is instantiated (before the program exits)?",
                codeSnippet: [
                    "class Brother:",
                    "    def __init__(self, id, sister):",
                    "        self.id = id",
                    "        self.sister = sister",
                    "        print('Brother', self.id, 'is born')",
                    "",
                    "    def __del__(self):",
                    "        print('Brother', self.id, 'has died')",
                    "",
                    "class Sister:",
                    "    def __init__(self, id):",
                    "        self.id = id",
                    "        self.brother = Brother(id, self)",
                    "        print('Sister', self.id, 'is born')",
                    "",
                    "    def __del__(self):",
                    "        print('Sister', self.id, 'has died')",
                    "",
                    "my_sister = Sister(10)"
                ],
                options: [
                    "Brother 10 is born\\nBrother 10 has died\\nSister 10 is born\\nSister 10 has died",
                    "Brother 10 is born\\nSister 10 is born\\nBrother 10 has died\\nSister 10 has died",
                    "Brother 10 is born\\nSister 10 is born",
                    "Brother 10 is born\\nBrother 10 has died\\nSister 10 is born"
                ],
                correctAnswer: "C",
                explanation: "The constructors run immediately, but the circular references prevent immediate destruction, so only the 'is born' messages appear before program termination."
            },
            {
                id: 37,
                question: "Which statement about copying objects via assignment (`=`) is TRUE?",
                options: [
                    "Immutable objects' copies are not fully independent of the originals.",
                    "Mutable objects' copies are not fully independent of the originals.",
                    "Mutable objects' copies are fully independent of the originals.",
                    "Both mutable and immutable objects' copies are not fully independent of the originals."
                ],
                correctAnswer: "D",
                explanation: "Assignment binds another reference to the same object, regardless of mutability; changes to the shared object are reflected via all references."
            },
            {
                id: 38,
                question: "Which Python data structure is BEST suited for storing unique hashable items?",
                options: [
                    "A set",
                    "A dictionary",
                    "A list",
                    "A stack"
                ],
                correctAnswer: "A",
                explanation: "Sets store unique hashable elements and provide O(1) membership checks."
            },
            {
                id: 39,
                question: "Which statement about Python's Counter is FALSE?",
                options: [
                    "A Counter is an unordered collection of elements.",
                    "A Counter is a subclass of dict.",
                    "A Counter counts the key-value pairs in an object.",
                    "A Counter cannot count elements from another Counter."
                ],
                correctAnswer: "C",
                explanation: "Counter counts hashable elements, not key-value pairs; option C describes dict.items, not Counter behaviour."
            },
            {
                id: 40,
                question: "Consider the custom iterator below. What is printed?",
                codeSnippet: [
                    "class DoubleNums:",
                    "    def __init__(self, end=1):",
                    "        self.end = end",
                    "",
                    "    def __iter__(self):",
                    "        self.n = 0",
                    "        return self",
                    "",
                    "    def __next__(self):",
                    "        if self.n >= self.end:",
                    "            raise StopIteration",
                    "        outcome = 2 * self.n",
                    "        self.n += 1",
                    "        return outcome",
                    "",
                    "nums = DoubleNums(2)",
                    "i = iter(nums)",
                    "print(next(i), end=' ')",
                    "print(next(i), end=' ')",
                    "print(next(i), end=' ')"                    
                ],
                options: [
                    "0 2 StopIteration",
                    "0 2 4",
                    "0 2 4 StopIteration",
                    "0 2 0"
                ],
                correctAnswer: "C",
                explanation: "The first two next() calls yield 0 and 2; the third raises StopIteration, which prints as an exception message."
            },
            {
                id: 41,
                question: "Consider the following snippet using collections.Counter. What does it print?",
                codeSnippet: [
                    "import collections",
                    "",
                    "class Results:",
                    "    def important(self, characters):",
                    "        element = collections.Counter(characters)",
                    "        return element.most_common()[0][0]",
                    "",
                    "outcome = Results().important(['A', 'B', 'B', 'C', 'C', 'C'])",
                    "print(outcome)"
                ],
                options: [
                    "('C', 3)",
                    "'C'",
                    "'B'",
                    "('B', 2)"
                ],
                correctAnswer: "B",
                explanation: "most_common()[0][0] returns the element with highest frequency, not the pair; here, 'C'."
            },
            {
                id: 42,
                question: "Consider the Student class below. What is printed?",
                codeSnippet: [
                    "class Student:",
                    "    def __init__(self, fname, lname, age):",
                    "        self.fname = fname",
                    "        self.lname = lname",
                    "        self.age = age",
                    "",
                    "    def __eq__(self, other):",
                    "        if isinstance(other, Student):",
                    "            return self.age == other.age",
                    "        return False",
                    "",
                    "    def __ne__(self, other):",
                    "        return not self.__eq__(other)",
                    "",
                    "s1 = Student('Dean', 'Smith', 25)",
                    "s2 = Student('Mary', 'Smith', 25)",
                    "s3 = Student('Jean', 'Smith', 20)",
                    "",
                    "print(s2 == s1)",
                    "print(s3 == s1)"
                ],
                options: [
                    "True\\nTrue",
                    "True\\nFalse",
                    "False\\nTrue",
                    "False\\nFalse"
                ],
                correctAnswer: "B",
                explanation: "Equality compares ages; s2 matches s1 (25), but s3 (20) does not."
            },
            {
                id: 43,
                question: "Consider the identity comparisons below. What is the combined output?",
                codeSnippet: [
                    "a = [1, 2, 3]",
                    "b = [1, 2, 3]",
                    "print(a == b)",
                    "print(a is b)",
                    "",
                    "a = tuple()",
                    "b = tuple()",
                    "print(a == b)",
                    "print(a is b)",
                    "",
                    "class A:",
                    "    pass",
                    "",
                    "print(A() == A())",
                    "print(A() is A())"
                ],
                options: [
                    "True\\nFalse\\nTrue\\nTrue\\nFalse\\nFalse",
                    "True\\nFalse\\nTrue\\nTrue\\nFalse\\nTrue",
                    "True\\nTrue\\nTrue\\nTrue\\nFalse\\nFalse",
                    "True\\nFalse\\nTrue\\nFalse\\nFalse\\nFalse"
                ],
                correctAnswer: "A",
                explanation: "Lists compare equal but are different objects; empty tuples are interned and share identity; separate A() instances are distinct."
            },
            {
                id: 44,
                question: "Which of the following is a mutable Python data type?",
                options: [
                    "int",
                    "str",
                    "tuple",
                    "set"
                ],
                correctAnswer: "D",
                explanation: "Among the options, only set is mutable; ints, strings, and tuples are immutable."
            },
            {
                id: 45,
                question: "Consider the try/except/else/finally block below. Is the code valid?",
                codeSnippet: [
                    "try:",
                    "    100 / 0",
                    "except:",
                    "    print('ZeroDivisionError')",
                    "else:",
                    "    print('Success!')",
                    "finally:",
                    "    print('Exit')"
                ],
                options: [
                    "No, finally and except cannot be used together.",
                    "No, else and finally cannot be used together.",
                    "Yes, it is valid."
                ],
                correctAnswer: "C",
                explanation: "Python allows try blocks to use except, else, and finally together; the syntax is valid and finally always runs."
            },
            {
                id: 46,
                question: "Given the nested functions below, what is printed?",
                codeSnippet: [
                    "def externalFun(a, b):",
                    "    def internalFun(x, z):",
                    "        return x + z, x * z, x / z",
                    "    return internalFun(a, b)",
                    "    return x, z",
                    "",
                    "outcome = externalFun(5, 10)",
                    "print(outcome)"
                ],
                options: [
                    "(15, 50)",
                    "(15, 50, 0.5)",
                    "(5, 10)",
                    "(5, 50, 10)"
                ],
                correctAnswer: "B",
                explanation: "externalFun returns the tuple from internalFun(5, 10), yielding sum, product, and quotient: 15, 50, 0.5."
            },
            {
                id: 47,
                question: "Which of the following are valid cursor methods for executing SQL statements and retrieving results?",
                options: [
                    "1, 4, 5",
                    "2, 3, 4",
                    "1, 3, 5",
                    "1, 2, 4"
                ],
                correctAnswer: "A",
                explanation: "Standard DB-API cursors provide execute(), fetchone(), and fetchall(); fetchwarnings() and run() are not standard methods."
            },
            {
                id: 48,
                question: "Looking at the four code segments below, which ones apply Python code-optimization techniques like comprehensions or built-ins for speed?",
                codeSnippet: [
                    "# Segment 1",
                    "numbers = [5, -24, 12, -36]",
                    "zero_cross = []",
                    "zero_cross = [x if x >= 0 else 0 for x in numbers]",
                    "",
                    "# Segment 2",
                    "words_list = ['This ', 'is ', 'a ', 'Python ', 'words', 'list']",
                    "line = ''",
                    "for i in words_list:",
                    "    line = line + i",
                    "",
                    "# Segment 3",
                    "students = [('Jonathan', 'B', 13), ('Peter', 'A', 17), ('David', 'B', 10)]",
                    "sorted_students = sorted(students)",
                    "",
                    "# Segment 4",
                    "absolute_set = set(map(abs, numbers))"
                ],
                options: [
                    "Segments 1 and 4",
                    "Segments 2 and 3",
                    "Segments 1 and 3",
                    "Segments 3 and 4"
                ],
                correctAnswer: "A",
                explanation: "Segment 1 uses a list comprehension and Segment 4 leverages map with set; both are optimized idioms. Segment 2 uses a simple loop, and Segment 3 uses sorted without a key."
            },
            {
                id: 49,
                question: "Which SQL comparison operator checks if the values of two operands are NOT equal?",
                options: [
                    "<>",
                    "!=",
                    "!",
                    "<"
                ],
                correctAnswer: "B",
                explanation: "SQL supports the `!=` operator (as well as `<>`) to test inequality; among the choices given, `!=` is the valid one."
            },
            {
                id: 50,
                question: "Which SQL statement retrieves any value starting with 'Cod'?",
                options: [
                    "SELECT * FROM Customers WHERE value LIKE '%Cod'",
                    "SELECT * FROM Customers WHERE value LIKE 'Cod%'",
                    "SELECT * FROM Customers WHERE value = 'Cod'",
                    "SELECT * FROM Customers WHERE value LIKE 'Cod'"
                ],
                correctAnswer: "B",
                explanation: "The wildcard pattern 'Cod%' matches strings beginning with 'Cod'."
            },
            {
                id: 51,
                question: "Which SQL statement creates a unique index named pindx on the SSN column in table Persons?",
                options: [
                    "ADD INDEX pindx ON Persons (SSN)",
                    "CREATE UNIQUE INDEX pindx ON Persons (SSN)",
                    "CREATE INDEX pindx ON Persons (SSN)",
                    "ADD UNIQUE INDEX pindx ON Persons (SSN)"
                ],
                correctAnswer: "B",
                explanation: "CREATE UNIQUE INDEX defines a named index and enforces uniqueness; ADD INDEX is not standard SQL."
            },
            {
                id: 52,
                question: "Which statement regarding the use of databases is correct?",
                options: [
                    "Data redundancy is avoided in relational databases.",
                    "Data redundancy is avoided in files.",
                    "Data updates are partially executed.",
                    "Simultaneous access of multiple users is not possible."
                ],
                correctAnswer: "A",
                explanation: "Normalization in relational databases reduces redundancy; file-based systems often duplicate data, and databases support concurrent access with atomic updates."
            },
            {
                id: 53,
                question: "Given tables sales(SCode, Pcode, Sdate, Ccode, Smcode, Quant, Cost) and salesmen(Scode, Sname, Scomm), which SQL query lists every salesman with their total cost for sales made in 2001?",
                options: [
                    "SELECT s.Sname, SUM(sa.Cost) FROM salesmen s JOIN sales sa ON s.Scode = sa.Scode WHERE YEAR(sa.Sdate) = 2001 GROUP BY s.Sname",
                    "SELECT s.Sname, sa.Cost FROM salesmen s JOIN sales sa ON s.Scode = sa.Scode WHERE sa.Sdate = 2001",
                    "SELECT Sname, Cost FROM sales WHERE Sdate = 2001",
                    "SELECT Sname, SUM(Cost) FROM sales GROUP BY Sname"
                ],
                correctAnswer: "A",
                explanation: "You must join salesmen to sales on Scode, filter by year 2001, and aggregate costs per salesman."
            },
            {
                id: 54,
                question: "Which SQL keyword removes duplicate rows from a query result?",
                options: [
                    "DELETE",
                    "DISTINCT",
                    "NOT EXIST",
                    "UNIQUE"
                ],
                correctAnswer: "B",
                explanation: "Using DISTINCT in the SELECT clause eliminates duplicate rows; DELETE removes rows from tables."
            },
            {
                id: 55,
                question: "In an RDBMS, data is stored in database objects called:",
                options: [
                    "Views",
                    "Queries",
                    "Tables",
                    "Stored Procedures"
                ],
                correctAnswer: "C",
                explanation: "Tables are the core data-storage objects in relational databases; views, queries, and stored procedures reference or manipulate table data."
            },
            {
                id: 56,
                question: "Which SQL command is used to add a new row to a database table?",
                options: [
                    "CREATE",
                    "ADD",
                    "UPDATE",
                    "INSERT"
                ],
                correctAnswer: "D",
                explanation: "INSERT statements add rows to tables; CREATE defines structures, and UPDATE modifies existing rows."
            },
            {
                id: 57,
                question: "In a table, a ________ represents a single, implicitly structured data item.",
                options: [
                    "Column",
                    "Relationship",
                    "Data type",
                    "Row"
                ],
                correctAnswer: "D",
                explanation: "A row (record) stores one data item instance across all columns in a relational table."
            },
            {
                id: 58,
                question: "Entities A and B have a many-to-many relationship. Which statement is correct when designing the database schema?",
                options: [
                    "The primary key of table B will be used as foreign key in table A, and the primary key of table A will be used as foreign key in table B",
                    "The primary key of table B will be used as foreign key in table A",
                    "Create an intermediate table containing the primary keys of both tables (A and B) as foreign keys",
                    "The primary key of table A will be used as foreign key in table B"
                ],
                correctAnswer: "C",
                explanation: "Many-to-many relationships require a junction table holding the primary keys of both related tables."
            },
            {
                id: 59,
                question: "Table orders uses the primary key of table customers as a foreign key. Which action is normally allowed?",
                options: [
                    "Create an order for a new customer not contained in customers",
                    "Delete a customer who has orders from customers",
                    "Change the value of the primary key of customers",
                    "Find the orders matching an existing customer"
                ],
                correctAnswer: "D",
                explanation: "A foreign key lets you reference related rows; inserting without a customer, deleting parent rows, or changing primary keys violate referential integrity."
            },
            {
                id: 60,
                question: "Which query returns students whose honours_subject is English or Spanish and percentage_of_marks is greater than 80?",
                options: [
                    "SELECT first_name, last_name FROM students WHERE (honours_subject = 'English' OR honours_subject = 'Spanish') AND percentage_of_marks > 80;",
                    "SELECT first_name, last_name FROM students WHERE honours_subject = 'English' OR honours_subject = 'Spanish' AND percentage_of_marks > 80;",
                    "SELECT first_name, last_name FROM students WHERE honours_subject = 'English' OR honours_subject = 'Spanish' AND percentage_of_marks > 80; -- duplicate of B",
                    "SELECT first_name, last_name FROM students WHERE (honours_subject = 'English') OR honours_subject = 'Spanish');"
                ],
                correctAnswer: "A",
                explanation: "Parentheses ensure percentage_of_marks > 80 applies to both honours_subject conditions."
            },
            {
                id: 61,
                question: "In an ER diagram, which statement is correct?",
                options: [
                    "Every class in a class diagram is transformed into a record in a database diagram.",
                    "Every non-multivalued attribute is transformed into a table row.",
                    "All classes in a class diagram should participate in associations.",
                    "Cardinality is the number of instances of an entity in a relation that can be associated with another entity."
                ],
                correctAnswer: "D",
                explanation: "Cardinality describes the count of entity instances related to another entity in ER modeling."
            },
            {
                id: 62,
                question: "Which statement about a primary key constraint is false?",
                options: [
                    "A table may have more than one primary key constraint.",
                    "The primary key constraint uniquely identifies each record in a table.",
                    "Primary keys must contain unique values.",
                    "A primary key column cannot contain NULL values."
                ],
                correctAnswer: "A",
                explanation: "A table can have only one primary key constraint, though it may consist of multiple columns."
            },
            {
                id: 63,
                question: "Given the ER diagram where one Employee manages zero or one Department, which statement is correct when creating the schema?",
                options: [
                    "Use Employee's primary key as a foreign key in Department.",
                    "Use Department's primary key as a foreign key in Employee.",
                    "Create an intermediate table holding both primary keys as foreign keys.",
                    "No relationship needs to be established between the two tables."
                ],
                correctAnswer: "A",
                explanation: "In a 1-to-0/1 relationship, the optional side (Department) holds a foreign key to the mandatory side (Employee)."
            },
            {
                id: 64,
                question: "A database schema is:",
                options: [
                    "The skeleton structure that represents the graphical view of the entire database",
                    "The skeleton structure that represents the logical view of the entire database",
                    "A graphical representation of the logical relationships of the entities",
                    "A graphical representation of the flow of data through an information system, modeling its process aspects"
                ],
                correctAnswer: "B",
                explanation: "The schema is the logical structure or blueprint of the database, describing tables, fields, and relationships."
            },
            {
                id: 65,
                question: "Which statement about primary keys is true?",
                options: [
                    "Primary keys cannot be used as foreign keys in other tables.",
                    "When multiple columns form a primary key, neither individual values nor their combination must be unique.",
                    "When multiple columns form a primary key, both individual column values and their combination must be unique.",
                    "Primary keys can be comprised of either a single column or multiple columns in a table."
                ],
                correctAnswer: "D",
                explanation: "A primary key can be a single column or a composite of multiple columns; the combination must be unique."
            },
            {
                id: 66,
                question: "The HAVING clause acts like a:",
                options: [
                    "WHERE clause, but used for groups rather than rows",
                    "WHERE clause, but used for rows rather than columns",
                    "WHERE clause, but used for columns rather than groups",
                    "WHERE clause exactly"
                ],
                correctAnswer: "A",
                explanation: "HAVING filters aggregated groups after GROUP BY, similar to WHERE filtering rows."
            },
            {
                id: 67,
                question: "Given the HTML snippet shown, what elements would appear on the page?",
                options: [
                    "Four buttons labeled with car names",
                    "A drop-down list of car choices and a submit button",
                    "A text input for each car brand",
                    "An ordered list of car brands"
                ],
                correctAnswer: "B",
                explanation: "The <select> with <option> tags creates a drop-down list; the <input type=\"submit\"> adds a submit button."
            },
            {
                id: 68,
                question: "Which statement best defines HTTP?",
                options: [
                    "An application protocol for distributed, collaborative, hypermedia information systems",
                    "The standard markup language for creating web pages and web applications",
                    "A reference to a web resource specifying its location and retrieval mechanism",
                    "A style sheet language used for describing the presentation of a document written in a markup language"
                ],
                correctAnswer: "A",
                explanation: "HTTP (Hypertext Transfer Protocol) is the application-layer protocol used for transferring hypermedia information on the web."
            },
            {
                id: 69,
                question: "Entities A and B have a one-to-many relationship. Which statement is correct when designing the schema?",
                options: [
                    "Use table B's primary key as a foreign key in table A.",
                    "Create an intermediate table with both primary keys as foreign keys.",
                    "Use table A's primary key as a foreign key in table B.",
                    "Use each table's primary key as a foreign key in the other."
                ],
                correctAnswer: "C",
                explanation: "In a 1-to-N relationship, the 'many' side (table B) holds the foreign key referencing the 'one' side (table A)."
            },
            {
                id: 70,
                question: "Given Customers(FirstName, LastName), which SQL statement correctly inserts John Smith?",
                options: [
                    "INSERT INTO Customers (FirstName, LastName) VALUES (Smith, John);",
                    "INSERT INTO Customers (LastName, FirstName) VALUES ('Smith', 'John');",
                    "INSERT INTO Customers (FirstName, LastName) VALUES ('John', 'Smith');",
                    "INSERT INTO Customers (LastName, FirstName) VALUES (Smith, John);"
                ],
                correctAnswer: "C",
                explanation: "The VALUES must be quoted strings matching the column order (FirstName, LastName)."
            },
            {
                id: 71,
                question: "Which SQL statement retrieves all fields from Customers when CustomerID is 324?",
                options: [
                    "SELECT * FROM Customers WHERE CustomerID = 324;",
                    "SELECT FirstName FROM Customers WHERE CustomerID = 324;",
                    "SELECT * FROM Customers WHERE CustomerID LIKE 324;",
                    "SELECT LastName FROM Customers WHERE CustomerID = 324;"
                ],
                correctAnswer: "A",
                explanation: "SELECT * with a WHERE filter returns every column for matching rows."
            },
            {
                id: 72,
                question: "An alias can be an alternate name given to a:",
                options: [
                    "Relation",
                    "Row",
                    "Group",
                    "Table"
                ],
                correctAnswer: "D",
                explanation: "In SQL, aliases provide alternate names for tables (and columns) within a query."
            },
            {
                id: 73,
                question: "What does the acronym SQL stand for?",
                options: [
                    "Strong Question Language",
                    "Structured Question Language",
                    "Structured Query Language",
                    "Strong Query Language"
                ],
                correctAnswer: "C",
                explanation: "SQL is short for Structured Query Language."
            },
            {
                id: 74,
                question: "Which query lists each customer name along with the number of orders they made?",
                options: [
                    "SELECT a.name, COUNT(b.order_id) FROM Customers a, Orders b WHERE a.id = b.id GROUP BY b.order_id;",
                    "SELECT a.name, COUNT(b.order_id) FROM Customers a INNER JOIN Orders b ON a.id = b.customer_id GROUP BY a.name;",
                    "SELECT a.name, COUNT(b.order_id) FROM Customers a LEFT JOIN Orders b ON a.id = b.order_id GROUP BY b.order_id;",
                    "SELECT b.name, COUNT(a.order_id) FROM Orders a RIGHT JOIN Customers b ON a.id = b.id GROUP BY b.name;"
                ],
                correctAnswer: "B",
                explanation: "Join Orders to Customers on the customer ID and group by customer name to count their orders."
            },
            {
                id: 75,
                question: "To lay out three child elements vertically at full width using Flexbox, which CSS is correct?",
                options: [
                    "section { display: flex; align-items: vertical; justify-content: stretch; }",
                    "section { display: flex; flex-flow: column nowrap; justify-content: stretch; }",
                    "section { display: flex; flex-flow: column nowrap; align-items: center; }",
                    "section { display: flex; flex-flow: row wrap; justify-content: stretch; }"
                ],
                correctAnswer: "B",
                explanation: "flex-flow: column nowrap stacks children vertically while display:flex and stretch keep them full width."
            },
            {
                id: 76,
                question: "Which of the following is a phase of the software testing cycle?",
                options: [
                    "Requirement Analysis",
                    "Time Management",
                    "Project Planning",
                    "Software Enhancement"
                ],
                correctAnswer: "A",
                explanation: "Testing begins with requirement analysis to understand test objectives before planning and execution."
            },
            {
                id: 77,
                question: "Which item is NOT part of Django's built-in UserCreationForm?",
                options: [
                    "password1 field",
                    "username field",
                    "check_password() function",
                    "validate_password() function"
                ],
                correctAnswer: "C",
                explanation: "UserCreationForm provides username, password1, and password2 fields plus validation helpers; check_password() is a User model method, not part of the form."
            },
            {
                id: 78,
                question: "Which action must be done to enable session functionality in Django authentication?",
                options: [
                    "Add a request.session attribute in authenticate()",
                    "Add a request.session attribute in login()",
                    "Modify MIDDLEWARE_CLASSES and INSTALLED_APPS in urls.py",
                    "Ensure MIDDLEWARE and INSTALLED_APPS include session components in settings.py"
                ],
                correctAnswer: "D",
                explanation: "Sessions require 'django.contrib.sessions' in INSTALLED_APPS and middleware configured in settings.py."
            },
            {
                id: 79,
                question: "What does running `python manage.py makemigrations music` do?",
                options: [
                    "Creates new model database tables for the music app immediately",
                    "Lists all current migrations in the project",
                    "Generates migration files for the music app so changes can be applied later",
                    "Reverts the database schema for the music app to a previous state"
                ],
                correctAnswer: "C",
                explanation: "makemigrations creates migration files describing model changes; `migrate` applies them to the database."
            },
            {
                id: 80,
                question: "A GET request to `/programmers/Namespacinator` returns JSON with `type`, `nickname`, and `powerLevel`. Which statement is true?",
                options: [
                    "The JSON is the representation of the programmer resource.",
                    "The JSON is the programmer resource itself.",
                    "The JSON represents a collection of programmers.",
                    "The JSON represents a null resource."
                ],
                correctAnswer: "A",
                explanation: "REST responses return representations (JSON) of resources, not the resource itself."
            },
            {
                id: 81,
                question: "Given the Flask app shown, which statement is true?",
                options: [
                    "Visiting `/` returns 'Welcome to our HomePage!' and visiting `/John` returns 'Welcome John!'.",
                    "Visiting `/` returns 'Welcome John!' and `/John` returns the homepage.",
                    "The routes will not work because `@app.route` must be below the function definition.",
                    "The application will fail because the port must be an integer string."
                ],
                correctAnswer: "A",
                explanation: "Flask decorators register the functions: the root route returns the homepage string, and `/\<name>` returns a personalized greeting."
            }
        ];
    }
}

if (typeof window !== 'undefined') {
    window.SoftwareDevPythonQuestionBank = SoftwareDevPythonQuestionBank;
}

if (typeof module !== 'undefined' && module.exports) {
    module.exports = SoftwareDevPythonQuestionBank;
}

