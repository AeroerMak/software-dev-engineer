
// ===================================
// Software Development Skills Foundation (Python) Level 2 Question Bank
// ===================================

class SoftwareDevPythonLevel2QuestionBank {
    static getQuestions() {
        return [
            {
                id: 1,
                question: "Which statement BEST defines an application?",
                options: [
                    "A self-contained step-by-step set of operations to be performed",
                    "A collection of instructions that performs a specific task when executed by a computer or device",
                    "A deliberate process that transforms one or more inputs into one or more results, with variable change",
                    "A sequence of one or more symbols given meaning by specific act(s) of interpretation"
                ],
                correctAnswer: "B",
                explanation: "An application (or software application) is best defined as a collection of instructions that performs a specific task when executed by a computer or device. This distinguishes it from algorithms (option A), processes (option C), or language/encoding systems (option D)."
            },
            {
                id: 2,
                question: "Consider the following Python code:\n\n```python\nname = 'Peoplecert'\nobj = iter(name)\nwhile True:\n    try:\n        item = next(obj)\n        print(item)\n    except StopIteration:\n        break\n```\n\nWhich of the proposed sentences is TRUE?",
                options: [
                    "The iter() method initializes an iterator (name) for the iterable object (obj) and the next() method returns the next value of the iterable object.",
                    "The iter() method initializes an iterator (obj) for the iterable object (name) and the next() method returns the next value of the iterator.",
                    "The iter() method initializes an iterator (name) for the iterable object (obj) and the next() method returns the next value of the iterator.",
                    "The iter() method initializes an iterator (obj) for the iterable object (name) and the next() method returns the next value of the iterable object."
                ],
                correctAnswer: "B",
                explanation: "The iter() function takes an iterable object (like the string 'name') and returns an iterator object ('obj'). So iter(name) initializes obj (the iterator) for name (the iterable). The next() function takes an iterator (obj) and returns the next item from that iterator. Therefore, option B correctly describes the relationship between iter(), next(), the iterable (name), and the iterator (obj)."
            },
            {
                id: 3,
                question: "In regards to an ER Diagram, which of the following statements is CORRECT?",
                options: [
                    "Every class in a class diagram is transformed into a record in a database diagram",
                    "Every non-multivalued attribute is transformed into a table row",
                    "All classes in a class diagram should participate in associations",
                    "Cardinality is the number of instances of an entity from a relation that can be associated with another entity"
                ],
                correctAnswer: "D",
                explanation: "Cardinality in ER diagrams refers to the number of instances of one entity that can be associated with instances of another entity through a relationship. This is a fundamental concept in database design. Option A is incorrect as classes are not directly transformed into records. Option B is incorrect as attributes become columns, not rows. Option C is incorrect as not all classes need to participate in associations."
            },
            {
                id: 4,
                question: "Which of the proposed code snippets WILL NOT return an error, according to the rules of Python's data structures' operation?",
                options: [
                    "```python\nfruits=('apple', 'banana', 'cherry', 'apple', 'banana', 'cherry')\nfor i in range (5):\n    print (fruits[i])\n```",
                    "```python\nfruits={'apple': 100, 'banana': 200, 'cherry':300}\nfruits['cherry']=400\nprint(fruits.items())\n```",
                    "```python\nfruits=('apple', 'banana', 'cherry')\nfruits[1]='melon'\n```",
                    "```python\nfruits=['ape', 'banana','cherry']\nprint (fruits[3])\n```"
                ],
                correctAnswer: "A",
                explanation: "Option A defines a tuple with 6 elements and iterates through indices 0-4, which are all valid indices for this tuple. This code will execute without error. Option B also performs valid dictionary operations (updating a key's value and printing items) and would not return an error. Option C attempts to modify an immutable tuple, which will raise a TypeError. Option D attempts to access index 3 in a list that only has indices 0-2, which will raise an IndexError."
            },
            {
                id: 5,
                question: "Consider the following Python code:\n\n```python\nstep=\nfor i in range(-8,0,step):\n    i=i**step\n    print(i, end=' ')\n```\n\nWhich value of the step variable outputs the numbers: 64 36 16 4 ?",
                options: [
                    "1",
                    "8",
                    "2",
                    "4"
                ],
                correctAnswer: "C",
                explanation: "When step = 2, range(-8, 0, 2) iterates i as -8, -6, -4, -2. For each value: (-8)**2 = 64, (-6)**2 = 36, (-4)**2 = 16, (-2)**2 = 4. This produces the output '64 36 16 4'. If step = 1, the range would iterate -8 to -1, producing different values. If step = 8, only -8 would be iterated, producing 16777216. If step = 4, only -8 and -4 would be iterated, producing 4096 and 256."
            },
            {
                id: 6,
                question: "Consider the following Python code:\n\n```python\nx, y, z = 0, -5, 5\n\nif y > 0:\n    if z < 0:\n        x = x + 5\n    elif y > 5:\n        x = x + 4\n    else:\n        x = x + 3\nelse:\n    x = x + 2\n\nprint(x)\n```\n\nWhat is the output of this code?",
                options: [
                    "0",
                    "2",
                    "3",
                    "5"
                ],
                correctAnswer: "B",
                explanation: "The variables are initialized as x=0, y=-5, z=5. The condition 'if y > 0' evaluates to False since -5 is not greater than 0. Therefore, the code executes the else block, which sets x = x + 2. Since x was 0, x becomes 0 + 2 = 2. The print(x) statement then outputs 2."
            },
            {
                id: 7,
                question: "Which of the following queries would display all the Students whose first_name starts with the character 'A'?",
                table: {
                    name: "STUDENTS",
                    columns: ["student_code", "first_name", "last_name", "email", "phone_no", "date_of_birth", "honours_subject", "percentage_of_marks"],
                    rows: []
                },
                options: [
                    "SELECT first_name, last_name FROM students WHERE first_name LIKE 'A%';",
                    "SELECT first_name, last_name FROM students WHERE first_name LIKE '%A';",
                    "SELECT first_name, last_name FROM students WHERE first_name LIKE '%A%';",
                    "SELECT first_name, last_name FROM students WHERE first_name LIKE 'A';"
                ],
                correctAnswer: "A",
                explanation: "The LIKE operator with 'A%' pattern matches any string that starts with 'A' followed by any characters. The '%' wildcard represents zero or more characters. Option A (LIKE 'A%') will match names starting with 'A'. Option B (LIKE '%A') matches names ending with 'A'. Option C (LIKE '%A%') matches names containing 'A' anywhere. Option D (LIKE 'A') only matches exactly 'A'."
            },
            {
                id: 8,
                question: "Consider the code snippet below.\n\n```python\ndef add (a, b = 10):\n    return a + b\nx = add (4,6)\nprint(x,end=' ')\ny = add (10)\nprint(y, end=' ')\nsumm = add(x,y)\nprint(summ, end=' ')\n```\n\nWhat is the expected output?",
                options: [
                    "10 20 30",
                    "14 20 34",
                    "20 20 40",
                    "16 20 36"
                ],
                correctAnswer: "A",
                explanation: "The function add(a, b=10) has a default parameter b=10. When x = add(4,6), both arguments are provided, so x = 4 + 6 = 10. When y = add(10), only one argument is provided, so b uses its default value of 10, making y = 10 + 10 = 20. When summ = add(x,y), it becomes add(10,20) = 10 + 20 = 30. The print statements with end=' ' produce output on the same line with spaces: '10 20 30 '."
            },
            {
                id: 9,
                question: "The HAVING clause acts like a:",
                options: [
                    "WHERE clause, but is used for groups rather than rows",
                    "WHERE clause, but is used for rows rather than columns",
                    "WHERE clause, but is used for columns rather than groups",
                    "WHERE clause exactly"
                ],
                correctAnswer: "A",
                explanation: "The HAVING clause is similar to the WHERE clause, but it is used to filter groups of rows (after GROUP BY) rather than individual rows. The WHERE clause filters rows before grouping, while HAVING filters groups after grouping has occurred. This makes HAVING essential when you need to filter based on aggregate functions like COUNT(), SUM(), AVG(), etc."
            },
            {
                id: 10,
                question: "Which of the following statements describes a Python memory management function which only allocates the specified number of bytes a user requested?",
                options: [
                    "pythonmalloc(size)",
                    "realloc(size)",
                    "calloc(size)",
                    "malloc(size)"
                ],
                correctAnswer: "D",
                explanation: "The malloc(size) function allocates exactly the specified number of bytes requested by the user without any initialization. calloc(size) allocates memory and initializes it to zero, which involves additional operations. realloc(size) resizes existing memory allocation. pythonmalloc(size) is not a standard Python memory management function. Therefore, malloc(size) is the function that only allocates the exact number of bytes requested."
            },
            {
                id: 11,
                question: "Entities A and B are related with a \"many-to-many\" (N-N) relationship in an ER diagram. Which of the following statements, when creating a database schema, is CORRECT?",
                options: [
                    "The primary key of table B will be used as foreign key in table A, and the primary key of table A will be used as foreign key in table B",
                    "The primary key of table B will be used as foreign key in table A",
                    "An intermediate table needs to be formed containing the primary keys of the two tables (A and B) as foreign keys",
                    "The primary key of table A will be used as foreign key in table B"
                ],
                correctAnswer: "C",
                explanation: "In a many-to-many (N-N) relationship between two entities in an ER diagram, a direct foreign key relationship cannot be established between the two tables. Instead, an intermediate (junction or associative) table must be created. This intermediate table's primary key is typically a composite key formed by the primary keys of both table A and table B. These primary keys from A and B also act as foreign keys in the intermediate table, referencing their respective original tables. This structure correctly resolves the many-to-many relationship in a relational database schema."
            },
            {
                id: 12,
                question: "Which SQL statement would retrieve all fields and records from a table named Customers, where the value of the field CustomerID is 324?",
                options: [
                    "SELECT * FROM Customers WHERE CustomerID=324",
                    "SELECT FirstName FROM Customers WHERE CustomerID=324",
                    "SELECT * FROM Customers WHERE CustomerID LIKE 324",
                    "SELECT LastName FROM Customers WHERE CustomerID=324"
                ],
                correctAnswer: "A",
                explanation: "To retrieve all fields and records from a table, `SELECT *` is used. The `FROM Customers` clause specifies the table name. The `WHERE CustomerID=324` clause filters records where the CustomerID field has an exact value of 324. Option B and D only select specific fields (FirstName and LastName respectively), not all fields. Option C uses `LIKE`, which is typically used for pattern matching with strings and wildcards, not for exact numeric equality comparisons."
            },
            {
                id: 13,
                question: "Consider the code snippet below.\n\n```python\nx=1000\ny=20.23456\nz='3ABCD'\nprint('{:10d} {:10.2f} {:20}'.format(x,y,z))\n```\n\nWhat is the expected output?",
                options: [
                    "1000.00000 20.23456ABCD",
                    "1000 20.233ABCD",
                    "20.233 1000ABCD",
                    "ABCD 100020.23456"
                ],
                correctAnswer: "B",
                explanation: "The format string uses three format specifiers: `{:10d}` formats x (1000) as a decimal integer in a 10-character wide field (right-aligned), producing '1000'. `{:10.2f}` formats y (20.23456) as a float with 2 decimal places in a 10-character wide field, producing '20.23' (rounded). `{:20}` formats z ('3ABCD') as a string in a 20-character wide field (right-aligned). The output shows the values in order: x, y, z. Note: The actual output would include spacing, but option B represents the closest match to the formatted values."
            },
            {
                id: 14,
                question: "Which of the following commands can ADD a ROW to a database table?",
                options: [
                    "Create",
                    "Add",
                    "Update",
                    "Insert"
                ],
                correctAnswer: "D",
                explanation: "The INSERT command is the SQL statement used to add new rows (records) to a database table. CREATE is used to create new tables, databases, or other database objects. UPDATE is used to modify existing rows in a table. ADD is not a standard SQL command for adding rows to a table (though it can be used in ALTER TABLE statements to add columns)."
            },
            {
                id: 15,
                question: "Consider the code snippet below. Which of the following statements prints the object's attributes?\n\n```python\nclass fruits():\n    def __init__(self, name, color):\n        self.name = name\n        self.color = color\n\n    def show(self):\n        print(\"fruit is\", self.name)\n        print(\"color is\", self.color)\n\napple = fruits(\"apple\", \"red\")\n```",
                options: [
                    "print(apple(name, color))",
                    "print(apple.self.name, apple.self.color)",
                    "print(apple.__init__())",
                    "print(apple.show())"
                ],
                correctAnswer: "D",
                explanation: "The `show()` method in the `fruits` class contains print statements that display the object's `name` and `color` attributes. Calling `apple.show()` executes the method, which prints the attributes. Option A is incorrect because `apple` is an object instance, not a callable function. Option B is incorrect because `self` is only used within class methods; outside the class, attributes are accessed directly as `apple.name` and `apple.color`. Option C is incorrect because `__init__` is the constructor used for initialization, not for printing attributes."
            },
            {
                id: 16,
                question: "Which of the proposed sentences, in regards to class members accessibility, is TRUE?",
                options: [
                    "Public members of a class in Python can be accessed from outside the class environment",
                    "Protected members of a class in Python are accessible only from within their class",
                    "Protected members of a class in Python are accessible only from its subclasses",
                    "Public members of a class in Python are accessible only from within their class"
                ],
                correctAnswer: "A",
                explanation: "In Python, public members (members without any underscore prefix) can be accessed from anywhere, including outside the class environment. Protected members (prefixed with a single underscore, like `_member`) are accessible from the class and its subclasses, not just within the class itself. Private members (prefixed with double underscores, like `__member`) use name mangling but can still be accessed. Option A correctly states that public members can be accessed from outside the class."
            },
            {
                id: 17,
                question: "Assume that we want the first item to have text aligned to left, second item to right, third to left etc. How can we make every lists' items of our website have alternate text alignment?",
                options: [
                    "```css\nli { text-align: left; }\nli:nth-child(even) { text-align: right; }\n```",
                    "```css\nli { text-align: right; }\nli:nth-child(even) { text-align: left; }\n```",
                    "```css\nul { text-align: right; }\nul:nth-child(even) { text-align: left; }\n```",
                    "```css\nul { text-align: left; }\nul:nth-child(even) { text-align: right; }\n```"
                ],
                correctAnswer: "A",
                explanation: "To achieve alternate text alignment (1st left, 2nd right, 3rd left, etc.), we need to target `li` (list item) elements, not `ul` (unordered list) elements. Option A sets all list items to left alignment by default, then uses the `:nth-child(even)` pseudo-selector to set even-numbered items (2nd, 4th, 6th, etc.) to right alignment. This produces the desired pattern: left, right, left, right. Option B would produce right, left, right, left (incorrect order). Options C and D target `ul` elements instead of `li` elements, which won't affect individual list items."
            },
            {
                id: 18,
                question: "Assume Table Customers consists of the following columns (FirstName, LastName). Which SQL statement would insert the values John, Smith into the proper fields of the Customers table?",
                options: [
                    "INSERT INTO Customers (FirstName, LastName) VALUES (Smith, John)",
                    "INSERT INTO Customers (LastName, FirstName) VALUES ('Smith John')",
                    "INSERT INTO Customers (FirstName, LastName) VALUES ('John', 'Smith')",
                    "INSERT INTO Customers (LastName, FirstName) VALUES (Smith, John)"
                ],
                correctAnswer: "C",
                explanation: "The correct SQL INSERT statement must match the column order specified: (FirstName, LastName). The values must be in the same order: 'John' for FirstName and 'Smith' for LastName. String values must be enclosed in single quotes. Option C correctly uses `INSERT INTO Customers (FirstName, LastName) VALUES ('John', 'Smith')` with proper column order, value order, and string quotes. Option A has wrong value order and missing quotes. Option B has wrong column order and only one value. Option D has wrong column order and missing quotes."
            },
            {
                id: 19,
                question: "Assume that you want to write a SQL query to display the names of the students that have the best average grade and belong either to class A or to class B. The student name and the class are contained in the Student table (denoted with S) whereas student grades are contained in the Grades table (denoted with G). Which of the following SQL statements would achieve that?",
                options: [
                    "```sql\nSELECT S.Name, AVG(G.Grade) AS Average_Grade\nFROM Students S\nINNER JOIN Grades G\nON S.id=G.id\nWHERE S.Class = 'A' OR 'B'\nGROUP BY S.Name\nORDER BY Average_Grade ASC\n```",
                    "```sql\nSELECT S.Name, AVG(G.Grade) AS Average_Grade\nFROM Students S\nINNER JOIN Grades G\nON S.id=G.id\nWHERE S.Class = 'A' AND S.Class='B'\nGROUP BY S.Name\nORDER BY Average_Grade DESC\n```",
                    "```sql\nSELECT S.Name, AVG(G.Grade) AS Average_Grade\nFROM Students S\nINNER JOIN Grades G\nON S.id=G.id\nWHERE S.Class = 'A' OR S.Class = 'B'\nGROUP BY S.Name\nORDER BY Average_Grade DESC\n```",
                    "```sql\nSELECT S.Name, AVG(G.Grade) AS Average_Grade\nFROM Students S\nINNER JOIN Grades G\nON S.id=G.id\nWHERE S.Class IN ('A', 'B')\nGROUP BY S.Name\nORDER BY Average_Grade ASC\n```"
                ],
                correctAnswer: "C",
                explanation: "To find students with the best average grade from class A or B, we need: (1) Correct WHERE clause: `S.Class = 'A' OR S.Class = 'B'` or `S.Class IN ('A', 'B')` to filter for classes A or B. (2) ORDER BY Average_Grade DESC to show highest (best) averages first. Option C correctly uses `S.Class = 'A' OR S.Class = 'B'` and `ORDER BY Average_Grade DESC`. Option A has invalid WHERE syntax (`'A' OR 'B'`) and wrong sort order (ASC). Option B uses AND instead of OR, which is logically impossible. Option D has correct WHERE clause but wrong sort order (ASC instead of DESC)."
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
                explanation: "A CSS rule follows the structure: selector { declaration1; declaration2; ... }. The selector identifies which HTML elements to style, and it is followed by one or more declarations (property-value pairs) enclosed in curly braces. Each declaration consists of a property and a value separated by a colon. Option C correctly describes this structure. Options A and B incorrectly state that declarations come before selectors. Option D is vague and doesn't accurately describe the standard CSS rule structure."
            },
            {
                id: 21,
                question: "Generic types and generic function definitions can be parameterized by using a factory available in 'typing' module called ________.",
                options: [
                    "TypeVar",
                    "Mapping",
                    "NewType",
                    "Iterable"
                ],
                correctAnswer: "A",
                explanation: "TypeVar is a factory function in Python's typing module used to create type variables for generic types and functions. It allows you to define generic functions and classes that can work with different types while maintaining type safety. For example: `T = TypeVar('T')` creates a type variable that can represent any type. Mapping and Iterable are generic collection types, not factories for parameterization. NewType is used to create distinct types, not for generic parameterization."
            },
            {
                id: 22,
                question: "Consider the code snippet below. What is the expected output?\n\n```python\ndef myWeight (kg):\n    try:\n        kg = int(kg)\n        return 30 <= kg <= 200\n    except ValueError:\n        return False\n\nprint(myWeight(150), end=' ')\nprint(myWeight('150'), end=' ')\nprint(myWeight(''), end=' ')\nprint(myWeight('150.0'), end=' ')\n```",
                options: [
                    "True True False False",
                    "True False False True",
                    "True True True True",
                    "False False True True"
                ],
                correctAnswer: "A",
                explanation: "myWeight(150): 150 is already an integer, converts successfully, 30 <= 150 <= 200 is True. myWeight('150'): String '150' converts to int 150, 30 <= 150 <= 200 is True. myWeight(''): Empty string cannot be converted to int, raises ValueError, returns False. myWeight('150.0'): String '150.0' cannot be directly converted to int (int() doesn't parse float strings), raises ValueError, returns False. Therefore, the output is 'True True False False '."
            },
            {
                id: 23,
                question: "Consider the code snippet below. Which of the proposed words fits BEST the behavior applied to the class method Hello()?\n\n```python\nclass Person:\n    def Hello(self, *args):\n        word = ''\n        for x in args:\n            word += x\n        print(word)\n\nobj = Person()\nobj.Hello()\nobj.Hello('World')\nobj.Hello('How', 'Are', 'You')\n```",
                options: [
                    "Overriding",
                    "Shadowing",
                    "Overloading",
                    "Casting"
                ],
                correctAnswer: "C",
                explanation: "The method Hello() uses *args (variable arguments), allowing it to be called with different numbers of arguments (0, 1, or multiple). This behavior is best described as Overloading - the ability to define a method that can accept different numbers or types of arguments. In Python, this is achieved through *args and **kwargs, which simulates method overloading found in other languages. Overriding refers to replacing a parent class method in a subclass. Shadowing refers to a variable hiding another variable with the same name in an outer scope. Casting refers to type conversion."
            },
            {
                id: 24,
                question: "Assume Table Customers includes a column named customerName. Which SQL statement would remove the customer 'John Smith' from the Customers table?",
                options: [
                    "DROP * FROM Customers WHERE customerName = 'John Smith'",
                    "DELETE FROM Customers WHERE customerName = 'John Smith'",
                    "TRUNCATE * FROM Customers WHERE customerName = 'John Smith'",
                    "DELETE FROM Customers WHERE customerName = John Smith"
                ],
                correctAnswer: "B",
                explanation: "The DELETE statement is used to remove rows from a table. The correct syntax is `DELETE FROM table_name WHERE condition`. Option B correctly uses `DELETE FROM Customers WHERE customerName = 'John Smith'` with proper string quotes. Option A uses DROP, which is for dropping tables or columns, not rows. Option C uses TRUNCATE, which removes all rows from a table and doesn't support WHERE clauses. Option D is missing quotes around the string value 'John Smith'."
            },
            {
                id: 25,
                question: "Consider the code snippet below. What is the expected output?\n\n```python\nfrom abc import ABC, abstractmethod\n\nclass Aircraft(ABC):\n    @abstractmethod\n    def fly(self):\n        pass\n\nclass Jet(Aircraft):\n    def fly(self):\n        print(f'My {self} is flying')\n\naircraft = Aircraft()\njet = Jet()\njet.fly()\n```",
                options: [
                    "My jet is flying",
                    "TypeError: Can't instantiate abstract class Aircraft with abstract method fly",
                    "Invalid Syntax",
                    "My <__main__.Jet object at 0x000000ADFF3EAAF0> is flying"
                ],
                correctAnswer: "B",
                explanation: "Abstract classes in Python (defined using `ABC` and `@abstractmethod`) cannot be instantiated directly if they contain unimplemented abstract methods. The `Aircraft` class has an abstract method `fly()` that is not implemented in the `Aircraft` class itself. When the code attempts to execute `aircraft = Aircraft()`, Python raises a `TypeError` because you cannot create an instance of an abstract class with unimplemented abstract methods. The program terminates at this line, so `jet = Jet()` and `jet.fly()` are never executed. Option D would be the output if the code ran successfully, but the TypeError occurs first."
            },
            {
                id: 26,
                question: "Consider the code snippet below. What is the expected output?\n\n```python\ndef intersect(str1,str2):\n    summ=0\n    for ch in str1:\n        if ch in str2:\n            summ+=1\n            Result.append(ch)\n\nsumm=0\nResult=[]\nStr1='SCRUM'\nStr2='SCAM'\nintersect(Str1,Str2)\nprint(f' Result is: {Result} and sum is: {summ}')\n```",
                options: [
                    "NameError:name 'Result' is not defined",
                    "Result is: ['S', 'C','M'] and sum is 3",
                    "Result is:[] and sum is 0",
                    "Result is: ['S','C', 'M'] and sum is 0"
                ],
                correctAnswer: "D",
                explanation: "The function `intersect` has a local variable `summ` that shadows the global `summ`. Inside the function, `summ` refers to the local variable, which is incremented but discarded when the function ends. The global `summ` remains 0. However, `Result` is a global list that is modified inside the function (using `append`), so changes persist. The function finds common characters between 'SCRUM' and 'SCAM': 'S', 'C', and 'M'. Therefore, `Result` becomes `['S', 'C', 'M']` and the global `summ` remains `0`. The output is `Result is: ['S','C', 'M'] and sum is 0`."
            },
            {
                id: 27,
                question: "Which of the following statements about a primary key constraint is FALSE?",
                options: [
                    "A table may have more than one primary key constraints",
                    "The primary key constraint uniquely identifies each record in a table",
                    "Primary keys must contain unique values",
                    "A primary key column cannot contain null values"
                ],
                correctAnswer: "A",
                explanation: "A table can have only ONE primary key constraint. However, a primary key can be composite (consisting of multiple columns), but it is still considered a single primary key constraint. Option A is FALSE. Option B is TRUE - the primary key uniquely identifies each record. Option C is TRUE - primary keys must have unique values. Option D is TRUE - primary key columns cannot contain NULL values (NOT NULL constraint is automatically enforced)."
            },
            {
                id: 28,
                question: "Which of the following words BEST describes a feature allowing programmers to perform a single action in different ways?",
                options: [
                    "Modularity",
                    "Inheritance",
                    "Encapsulation",
                    "Polymorphism"
                ],
                correctAnswer: "D",
                explanation: "Polymorphism is the object-oriented programming feature that allows objects of different types to be treated through the same interface, enabling a single action (method call) to be performed in different ways depending on the object type. For example, different classes can implement the same method name with different behaviors. Modularity refers to organizing code into separate, independent modules. Inheritance allows classes to inherit properties and methods from parent classes. Encapsulation refers to bundling data and methods together and restricting access to internal details."
            },
            {
                id: 29,
                question: "The following code snippet returns 'Type Error: object of type 'Market' has no len().' Which of the proposed practices fixes this error?\n\n```python\nclass Market:\n    def __init__(self, cart, buyer_name):\n        self.cart = list(cart)\n        self.buyer_name = buyer_name\n\nmarket = Market(['shoe', 'dress', 'coat'], 'John Smith')\nprint(len(market))\n```",
                options: [
                    "Make a copy of the \"cart\" list and find its length",
                    "Override the `__len__()` method",
                    "Overload the `len()` function",
                    "Create a new method under the Market class"
                ],
                correctAnswer: "B",
                explanation: "To make a custom class work with Python's built-in `len()` function, you need to implement the `__len__()` magic method (also called a dunder method). When `len()` is called on an object, Python internally calls the object's `__len__()` method. The correct implementation would be: `def __len__(self): return len(self.cart)`. Option A is a workaround but doesn't fix the error with `len(market)`. Option C is incorrect - you cannot overload built-in functions like `len()` in Python. Option D would create a custom method but wouldn't make `len(market)` work."
            },
            {
                id: 30,
                question: "Which of the proposed word combinations properly completes the following text: The ______ is a simple directory, including collections of _______. This directory has also the _______ file invoked by the interpreter.",
                options: [
                    "packet/functions/__name__.py",
                    "bundle/methods/initialize.py",
                    "package/modules/__init__.py",
                    "package/processes/stack.py"
                ],
                correctAnswer: "C",
                explanation: "A Python package is a directory that contains collections of modules. The `__init__.py` file is a special file that makes a directory a Python package. When a package is imported, Python automatically executes the `__init__.py` file, making it the file 'invoked by the interpreter.' Option C correctly identifies: package (the directory), modules (the collections), and `__init__.py` (the special file). Option A uses `__name__.py` which is not a standard package file. Option B uses `initialize.py` which is a regular module, not the special `__init__.py`. Option D uses `stack.py` which is also just a regular module file."
            },
            {
                id: 31,
                question: "Which of the following sentences is FALSE?",
                options: [
                    "As a Phase of Design Thinking, Empathy is a tool to help understand a targeted persona.",
                    "As a Phase of Design Thinking, Empathy is not a tool to help understand programmers' needs",
                    "As a Phase of Design Thinking, Empathy can carry out new research to fill in gaps regarding user understanding.",
                    "As a Phase of Design Thinking, Empathy is the centerpiece of a software-centered design process."
                ],
                correctAnswer: "B",
                explanation: "Option B is FALSE. Empathy in Design Thinking is a tool to help understand ALL users' needs, including programmers if they are the target users. The statement incorrectly claims that empathy is NOT a tool to understand programmers' needs, which contradicts the fundamental purpose of the empathy phase. Option A is TRUE - empathy helps understand targeted personas. Option C is TRUE - empathy involves research to understand users. Option D is TRUE - empathy is central to user-centered (and software-centered) design processes."
            },
            {
                id: 32,
                question: "Which of the following queries selects the order IDs with more than 5 products, along with the amount of products they contain?",
                options: [
                    "```sql\nSELECT order_id, count(*) AS products\nFROM Orders\nHAVING products >5\nGROUP BY order_id\n```",
                    "```sql\nSELECT order_id, count(*) AS products\nFROM Orders\nGROUP BY order_id\nWHERE products > 5\n```",
                    "```sql\nSELECT order_id, COUNT(*) AS products\nFROM Orders\nGROUP BY order_id\nHAVING products > 5\n```"
                ],
                correctAnswer: "C",
                explanation: "Option C is correct. The proper SQL syntax requires `GROUP BY` to come before `HAVING`. `HAVING` is used to filter groups based on aggregate functions (like COUNT), while `WHERE` filters rows before grouping. Option A has `HAVING` before `GROUP BY`, which is incorrect syntax. Option B uses `WHERE` to filter on the aggregate alias `products`, but `WHERE` cannot be used with aggregate functions or aliases - `HAVING` must be used instead. Option C correctly groups by `order_id`, counts products, and then filters groups with more than 5 products using `HAVING`."
            },
            {
                id: 33,
                question: "Consider the code snippet below. What is the expected output?\n\n```python\nimport collections\n\nclass Results:\n    def important(self, characters):\n        element = collections.Counter(characters)\n        return element.most_common()[0][0]\n\noutcome = Results().important(['c', 'h', 'i', 'n', 'e', 's', 'e', 'h', 'e', 'r', 'b', 's'])\nprint(outcome)\n```",
                options: [
                    "h",
                    "c",
                    "e",
                    "i"
                ],
                correctAnswer: "C",
                explanation: "The code uses `collections.Counter` to count character occurrences in the list. `most_common()` returns a list of tuples `(element, count)` sorted by frequency. `[0]` gets the first (most common) tuple, and `[0]` again extracts the character from that tuple. Counting the characters: 'c'=1, 'h'=2, 'i'=1, 'n'=1, 'e'=3, 's'=2, 'r'=1, 'b'=1. The character 'e' appears 3 times, which is the highest frequency, so the output is 'e'."
            },
            {
                id: 34,
                question: "What type of inheritance is illustrated in the following code snippet?\n\n```python\nclass Alpha():\n    pass\nclass Beta():\n    pass\nclass Gamma(Alpha, Beta):\n    pass\n```",
                options: [
                    "Multilevel",
                    "Hierarchical",
                    "Single-Level",
                    "Multiple"
                ],
                correctAnswer: "D",
                explanation: "Multiple inheritance occurs when a class inherits from more than one parent class. In this code, `Gamma` inherits from both `Alpha` and `Beta` (indicated by `class Gamma(Alpha, Beta):`), which is Multiple Inheritance. Multilevel inheritance would be a chain like A → B → C. Hierarchical inheritance would have one parent with multiple children. Single-level inheritance would have one parent and one child."
            },
            {
                id: 35,
                question: "A splitting of software development work into distinct phases (or stages) containing activities with the intent of better planning and management describes:",
                options: [
                    "Requirements capturing",
                    "Project management",
                    "Software as a Service",
                    "Application development"
                ],
                correctAnswer: "B",
                explanation: "Project management involves organizing and managing work by breaking it down into distinct phases or stages, each containing specific activities. This approach enables better planning, resource allocation, risk management, and overall project control. Requirements capturing is a specific phase/activity within project management. Software as a Service (SaaS) is a software delivery model. Application development is the overall process of creating software, but the specific description of splitting work into phases for planning and management refers to project management methodology."
            },
            {
                id: 36,
                question: "Which of the proposed pairs of statements fills in the blanks (1) and (2) appropriately?\n\n```python\nimport mysql.connector\nmydb = mysql.connector.connect(\n    host=\"localhost\",\n    user=\"yourusername\",\n    password=\"yourpassword\",\n    database=\"customers.db\"\n)\nmycursor = mydb.cursor()\nadd_customer =\"INSERT into customers (name, address) VALUES (%s,%s)\"\ncustomer_data=_______ (1)\nmycursor.execute(add_customer, customer_data)\n_______ (2)\n```",
                options: [
                    "(1) customer_data=[\"John\", \"Highway 33\"] (2) mydb.submit()",
                    "(1) customer_data={\"John\", \"Highway 33\"} (2) mydb.commit()",
                    "(1) customer_data=(\"John\", \"Highway 33\") (2) mydb.commit()",
                    "(1) customer_data=(\"John\", \"Highway 33\") (2) mydb.submit()"
                ],
                correctAnswer: "C",
                explanation: "For blank (1), `mycursor.execute()` with parameterized queries expects an iterable (tuple or list) where elements match the order of `%s` placeholders. A tuple `(\"John\", \"Highway 33\")` is the most common and recommended format. A set (option B) is unordered and unsuitable. For blank (2), after executing INSERT/UPDATE/DELETE statements, changes must be committed using `mydb.commit()` to permanently save them. There is no `mydb.submit()` method in mysql.connector. Option C correctly uses a tuple for data and `commit()` for transaction finalization."
            },
            {
                id: 37,
                question: "Consider the code snippet below. Which of the proposed describes BEST the kind of relationships between the classes Employee and Salary?\n\n```python\nclass Salary:\n    def __init__(self, earnings):\n        self.earnings = earnings\n\n    def earnings_total(self):\n        return (self.earnings * 12)\n\nclass Employee:\n    def __init__(self, obj_earning, extras):\n        self.obj_earning = obj_earning\n        self.extras = extras\n\n    def earnings_annual(self):\n        return \"Annual earnings are: \" + str(self.obj_earning.earnings_total() + self.extras)\n\nobj_earning = Salary(750)\nobj_emp = Employee(obj_earning, 250)\nprint(obj_emp.earnings_annual())\n```",
                options: [
                    "Inheritance",
                    "Association",
                    "Composition",
                    "Aggregation"
                ],
                correctAnswer: "D",
                explanation: "Aggregation is a \"has-a\" relationship where one class contains another, but the contained object can exist independently. In this code, `Employee` has a `Salary` object (`obj_earning`), but the `Salary` object is created independently (`obj_earning = Salary(750)`) and then passed to `Employee`. The `Salary` object's lifecycle is not managed by `Employee`, meaning it can exist without the `Employee` object. Inheritance would mean `Employee` is a type of `Salary` (e.g., `class Employee(Salary):`), which is not the case. Association is a general term, but Aggregation is more specific. Composition would imply stronger ownership where `Salary` is created inside `Employee` and cannot exist independently."
            },
            {
                id: 38,
                question: "The code snippet below outputs the price per cup of coffee for a person. Which of the basic rules of object-oriented programming it violates?\n\n```python\nclass Person:\n    def __init__(self, name, cup):\n        self.name = name\n        self.cup = cup\n    def price_per_cup(self):\n        return self.cup.get_creator_machine().get_price(300)\n\nclass CoffeeCup:\n    def __init__(self, name, machine):\n        self.name = name\n        self.mymachine = machine\n    def get_creator_machine(self):\n        return self.mymachine\n\nclass CoffeeMachine:\n    def __init__(self, machinename):\n        self.machinename = machinename\n    def get_price(self, num):\n        return num / 1000\n\nmachine = CoffeeMachine('mymachine')\ncup = CoffeeCup('mycup', machine)\nme = Person('John', cup)\nprint(me.price_per_cup())\n```",
                options: [
                    "The Law of Single Responsibility",
                    "The Law of Demeter",
                    "The Dependency Inversion Law",
                    "It functions properly. It does not violate any rule"
                ],
                correctAnswer: "B",
                explanation: "The Law of Demeter (also known as the \"Principle of Least Knowledge\") states that an object should only communicate with its immediate \"friends\" (itself, its direct components, objects passed as arguments, and objects it creates). It should not reach through a chain of method calls to access distant objects. In this code, `Person.price_per_cup()` violates this by calling `self.cup.get_creator_machine().get_price(300)`, creating a chain where `Person` accesses `CoffeeMachine` through `CoffeeCup`. This creates tight coupling and makes the code fragile. The Law of Single Responsibility concerns a class having only one reason to change. The Dependency Inversion Principle concerns depending on abstractions, not concretions."
            },
            {
                id: 39,
                question: "Consider the following schema: STUDENTS(student_code, first_name, last_name, email, phone_no, date_of_birth, honours_subject, percentage_of_marks); Which of the following queries would display names of all the students whose honours_subject is English or honours_subject is Spanish and percentage_of_marks is more than 80?",
                options: [
                    "```sql\nSELECT first_name, last_name FROM students WHERE (honours_subject = 'English' OR honours_subject = 'Spanish') AND percentage_of_marks > 80;\n```",
                    "```sql\nSELECT first_name, last_name FROM students WHERE honours_subject = 'English' OR honours_subject = 'Spanish AND percentage_of_marks > 80;\n```",
                    "```sql\nSELECT first_name, last_name FROM students WHERE (honours_subject = 'English' OR honours_subject = 'Spanish AND percentage_of_marks > 80);\n```",
                    "```sql\nSELECT first_name, last_name FROM students where (honours_subject = 'English') OR honours_subject = 'Spanish AN percentage_of_marks > 80;\n```"
                ],
                correctAnswer: "A",
                explanation: "Option A correctly groups the OR condition using parentheses: `(honours_subject = 'English' OR honours_subject = 'Spanish') AND percentage_of_marks > 80`. This ensures that the `percentage_of_marks > 80` condition applies to students who have either English OR Spanish as their honours_subject. Without parentheses, due to operator precedence, the AND would only apply to the second OR condition. Option B has a syntax error - the string 'Spanish AND percentage_of_marks > 80' is not properly closed. Option C has the same syntax error with an unclosed string. Option D has a typo 'AN' instead of 'AND' and incorrect logic without proper grouping."
            },
            {
                id: 40,
                question: "Consider the code snippet below. Which of the following statements instantiates properly an object of the class Complex?\n\n```python\nclass Complex:\n    \"\"\"This class complex numbers description\"\"\"\n    def __init__(self, realpart, imagpart):\n        self.real = realpart\n        self.image = imagpart\n```",
                options: [
                    "Complex__init__(3,\"21\")",
                    "Complex(3,\"21\")",
                    "Complex.create(3,\"21\")",
                    "Complex()"
                ],
                correctAnswer: "B",
                explanation: "In Python, to instantiate a class, you call the class name directly with the required arguments. The `__init__` method is automatically called when the object is created. Option B `Complex(3,\"21\")` is the correct syntax - it creates an instance of Complex with `realpart=3` and `imagpart=\"21\"`. Option A has incorrect syntax (missing dot and you don't call `__init__` directly). Option C would require a class method `create` which doesn't exist. Option D is missing the required arguments for `__init__`."
            },
            {
                id: 41,
                question: "Consider the code snippet below. What is the expected output?\n\n```python\nfirststring = 'peoplecert Education'\nprint(firststring[6:-6])\nsecondstring=firststring[:-9]\nprint(secondstring.capitalize())\nprint([secondstring[i:i+3] for i in range(0, len(secondstring), 3)])\n```",
                options: [
                    "cert Edu\nPeoplecert\n['peo', 'ple', 'cer', 't']",
                    "cert Ed\nPeoplecert\n['peo', 'ple', 'cert']",
                    "cert Edu\nPeoplecer\n['peo', 'ple', 'cer']"
                ],
                correctAnswer: "A",
                explanation: "Line 2: `firststring[6:-6]` slices from index 6 to index 14 (20-6), resulting in 'cert Edu'. Line 3: `firststring[:-9]` slices from start to index 11 (20-9), giving 'peoplecert ' (with trailing space). Line 4: `capitalize()` converts first character to uppercase, resulting in 'Peoplecert '. Line 5: List comprehension splits 'peoplecert ' into chunks of 3: i=0→'peo', i=3→'ple', i=6→'cer', i=9→'t ' (but the output shows 't' without space, likely trimmed in display). The output matches Option A."
            },
            {
                id: 42,
                question: "______ refers to all the activities - directed by policies, organized and structured in processes and supporting procedures - that are performed by an organization to plan, design, deliver, operate and control information technology services offered to customers.",
                options: [
                    "Software Development",
                    "System Development",
                    "Project Management",
                    "IT Service Management"
                ],
                correctAnswer: "D",
                explanation: "IT Service Management (ITSM) is a discipline that focuses on aligning IT services with the needs of business. It encompasses all activities, processes, policies, and procedures used to plan, design, deliver, operate, and control IT services. Software Development focuses on creating software applications. System Development is broader but still focuses on development rather than service management. Project Management is about managing projects, not specifically IT service operations and control."
            },
            {
                id: 43,
                question: "Which of the proposed statements about abstraction in Python is FALSE?",
                options: [
                    "Python provides the abstract class itself to programmers",
                    "In Python, abstraction can be achieved by using abstract classes and interfaces",
                    "Python provides the abc module to use abstraction in a Python program",
                    "In Python, an abstract base class needs first to be defined and then used"
                ],
                correctAnswer: "A",
                explanation: "Option A is FALSE. Python does not provide a built-in 'abstract class' keyword or direct abstract class support. Instead, Python provides the `abc` (Abstract Base Classes) module, which must be imported and used to create abstract classes. Option B is TRUE - abstraction can be achieved using abstract classes (via abc module) and interfaces. Option C is TRUE - the `abc` module is part of Python's standard library. Option D is TRUE - you must first define an abstract base class (using ABC and @abstractmethod) before it can be used."
            },
            {
                id: 44,
                question: "______ method is called for any object when the reference count for that object becomes zero.",
                options: [
                    "__new__",
                    "__init__",
                    "__del__",
                    "__destruct__"
                ],
                correctAnswer: "C",
                explanation: "The `__del__` method is Python's destructor method, which is called when an object's reference count reaches zero and the object is about to be garbage collected. `__new__` is called to create a new instance before `__init__`. `__init__` is the constructor that initializes the object after it's created. `__destruct__` is not a Python method - Python uses `__del__` instead. Note that `__del__` is not guaranteed to be called immediately when the reference count becomes zero, as it depends on Python's garbage collection mechanism."
            },
            {
                id: 45,
                question: "What is the expected output?\n\n```python\nimport weakref\n\nclass Abstract:\n    pass\n\ndef callback(a,b,c):\n    print(\"Callback\")\n    return a*b*c\n\nobj = Abstract()\nf = weakref.finalize(obj, callback, 2,4,8)\nprint(f.alive)\nprint(f())\nprint(not f.alive)\n```",
                options: [
                    "True\nCallback\n64\nTrue",
                    "False\nCallback\n64\nTrue",
                    "True\n64\nTrue",
                    "True\nCallback\n64\nFalse"
                ],
                correctAnswer: "A",
                explanation: "`weakref.finalize` creates a finalizer that calls a callback when an object is garbage collected. Initially, `f.alive` is `True` because the object exists. When `f()` is called manually, it executes the callback (printing 'Callback'), returns the callback's return value (2*4*8 = 64), and marks the finalizer as dead. After calling `f()`, `f.alive` becomes `False`, so `not f.alive` is `True`. The output is: True, Callback, 64, True."
            },
            {
                id: 46,
                question: "Which of the following SQL statements returns the same result as the SQL statement below?\n\n```sql\nSELECT NAME FROM CUSTOMER WHERE STATE = 'VA';\n```",
                options: [
                    "```sql\nSELECT NAME IN CUSTOMER WHERE STATE IN ('VA');\n```",
                    "```sql\nSELECT NAME IN CUSTOMER WHERE STATE = 'VA';\n```",
                    "```sql\nSELECT NAME FROM CUSTOMER WHERE STATE LIKE 'VA%';\n```",
                    "```sql\nSELECT NAME FROM CUSTOMER WHERE STATE IN ('VA');\n```"
                ],
                correctAnswer: "D",
                explanation: "Option D `SELECT NAME FROM CUSTOMER WHERE STATE IN ('VA');` is functionally equivalent to `WHERE STATE = 'VA'` when there's only one value in the IN clause. Both will return rows where STATE exactly equals 'VA'. Option A and B have syntax errors - they use `IN` instead of `FROM` for specifying the table name. Option C uses `LIKE 'VA%'` which would match any state starting with 'VA' (like 'VA', 'VAN', 'VALUE', etc.), not just exactly 'VA', so it could return different results."
            },
            {
                id: 47,
                question: "Which of the following are components of the Standard CPython's garbage collector?",
                options: [
                    "1,3 (Reference Counting Collector, Sys.Garbage Collector)",
                    "2,4 (Generational Garbage Collector, Object.Garbage Collector)",
                    "1,2 (Reference Counting Collector, Generational Garbage Collector)",
                    "1,4 (Reference Counting Collector, Object.Garbage Collector)"
                ],
                correctAnswer: "C",
                explanation: "CPython's garbage collection system consists of two main components: (1) Reference Counting Collector - the primary mechanism that immediately deallocates objects when their reference count reaches zero, and (2) Generational Garbage Collector - a cycle detector that handles circular references by periodically scanning objects. 'Sys.Garbage Collector' and 'Object.Garbage Collector' are not actual components of CPython's garbage collector. The `gc` module provides an interface to the generational garbage collector, but it's not called 'Sys.Garbage Collector'."
            },
            {
                id: 48,
                question: "Which of the following is NOT a diagram that must be created during requirements capturing/analysis?",
                options: [
                    "State Transition diagram",
                    "E-R diagram",
                    "Activity diagram",
                    "Use Cases"
                ],
                correctAnswer: "A",
                explanation: "State Transition diagrams are typically created during the design phase rather than requirements capturing/analysis. They model the behavior of a system in terms of states and transitions, which is more of a design concern. E-R (Entity-Relationship) diagrams are essential during requirements analysis to model data requirements. Activity diagrams are commonly used during requirements analysis to model business processes and workflows. Use Cases (or Use Case diagrams) are fundamental to requirements capturing as they describe functional requirements from the user's perspective."
            },
            {
                id: 49,
                question: "Consider the code snippet below. What is the expected output?\n\n```python\ndict_a={'greet': 'Hello!'}\ndict_b = dict_a.copy()\ndict_b['greet'] = 'Goodbye!'\ndict_c=dict_b.copy()\ndict_a['greet']='See you!'\nprint(dict_a)\nprint(dict_b)\nprint(dict_c)\n```",
                options: [
                    "{'greet': 'See you!'}\n{'greet': 'See you!'}\n{'greet': 'See you!'}",
                    "{'greet': 'See you!'}\n{'greet': 'See you!'}\n{'greet': 'Goodbye!'}",
                    "{'greet': 'See you!'}\n{'greet': 'Goodbye!'}\n{'greet': 'Goodbye!'}"
                ],
                correctAnswer: "C",
                explanation: "`dict.copy()` creates a shallow copy (new dictionary with copied key-value pairs). Line 1: `dict_a` = {'greet': 'Hello!'}. Line 2: `dict_b` is a copy of `dict_a`, so `dict_b` = {'greet': 'Hello!'}. Line 3: `dict_b['greet']` is changed to 'Goodbye!', so `dict_b` = {'greet': 'Goodbye!'} (dict_a unchanged). Line 4: `dict_c` is a copy of `dict_b`, so `dict_c` = {'greet': 'Goodbye!'}. Line 5: `dict_a['greet']` is changed to 'See you!', so `dict_a` = {'greet': 'See you!'} (dict_b and dict_c unchanged). The output is: {'greet': 'See you!'}, {'greet': 'Goodbye!'}, {'greet': 'Goodbye!'}."
            },
            {
                id: 50,
                question: "Consider the code snippet below. What is the expected output?\n\n```python\nclass Entity:\n    def __init__(self, id=None, name=None, attribs=None):\n        self.id = id\n        self.name = name\n        self.attribs = {} if attribs is None else attribs\n\n    def copy(self, attribs=None):\n        new_attribs = {k: v.copy() for k, v in self.attribs.items()} if attribs is None else attribs\n        return Entity(id=self.id, name=self.name, attribs=new_attribs)\n\nentity = Entity(12, \"John\")\nnew_entity = entity.copy()\nprint(new_entity.id, new_entity.name)\nentity.name = \"Peter\"\nprint(entity.name)\nprint(new_entity.id, new_entity.name)\n```",
                options: [
                    "12 John\nPeter\n12 Peter",
                    "12 John\nPeter\n12 John",
                    "12 John\nJohn\n12 John"
                ],
                correctAnswer: "B",
                explanation: "The `copy()` method creates a new `Entity` object with copied values. When `entity.copy()` is called, it creates `new_entity` with `id=12` and `name=\"John\"` (copied values, not references). Since `entity.attribs` is empty `{}`, the dict comprehension creates an empty dict. `new_entity` is a separate object from `entity`. When `entity.name = \"Peter\"` is executed, it only changes `entity.name`, not `new_entity.name`. Therefore: `print(new_entity.id, new_entity.name)` prints \"12 John\", `print(entity.name)` prints \"Peter\", and the final `print(new_entity.id, new_entity.name)` prints \"12 John\"."
            },
            {
                id: 51,
                question: "Which of the proposed sentences about 'iterators' in Python is TRUE?",
                options: [
                    "The iterator generates an iterable when passed to the iter() method.",
                    "Iterators are objects that allow you to traverse through all the elements of a collection.",
                    "Lists, tuples, dictionaries, strings and sets are all iterators.",
                    "The __next__() method returns the iterator object itself."
                ],
                correctAnswer: "B",
                explanation: "Option B is TRUE. Iterators are objects that implement the iterator protocol (`__iter__()` and `__next__()` methods) and allow you to traverse through elements of a collection. Option A is FALSE - `iter()` takes an iterable and returns an iterator, not the other way around. Option C is FALSE - lists, tuples, dictionaries, strings, and sets are iterables (they can be iterated over), but they are not iterators themselves. You need to call `iter()` on them to get an iterator. Option D is FALSE - `__next__()` returns the next element from the iterator, not the iterator itself. The `__iter__()` method returns the iterator object itself."
            },
            {
                id: 52,
                question: "A ______ represents a single, implicitly structured data item in a table.",
                options: [
                    "Column",
                    "Relationship",
                    "Data type",
                    "Row"
                ],
                correctAnswer: "D",
                explanation: "A row (also called a record or tuple) represents a single data item or entity in a table. Each row contains values for each column, forming a complete record. A column represents a specific attribute or field that applies to all rows. A relationship describes how tables are connected. A data type defines what kind of data can be stored in a column."
            },
            {
                id: 53,
                question: "Which of the proposed sentences BEST describes the term 'reference' in Python?",
                options: [
                    "A variable is a symbolic name that is a 'reference' or pointer to an object.",
                    "Only one 'reference' can refer to the same object defined during the execution of a program.",
                    "Any given 'reference' cannot be bound to objects of different types during the execution of a program.",
                    "A variable is a symbolic number that is a 'reference' or pointer to an object."
                ],
                correctAnswer: "A",
                explanation: "Option A is correct. In Python, variables are symbolic names that act as references (or pointers) to objects in memory. When you assign a value to a variable, you're creating a reference to that object. Option B is FALSE - multiple variables can reference the same object (e.g., `a = [1,2,3]; b = a`). Option C is FALSE - Python is dynamically typed, so a variable can be reassigned to objects of different types (e.g., `x = 5; x = 'hello'`). Option D is incorrect - variables are symbolic names, not numbers."
            },
            {
                id: 54,
                question: "What is the expected output?\n\n```python\na = [1,2,3]\nb = [1,2,3]\nprint(a == b)\nprint(a is b)\n#----------------\na = tuple()\nb = tuple()\nprint(a == b)\nprint(a is b)\n#----------------\nclass A:\n    pass\nprint(A() == A())\nprint(A() is A())\n```",
                options: [
                    "False\nFalse\nTrue\nTrue\nFalse\nFalse",
                    "True\nFalse\nFalse\nFalse\nFalse\nFalse",
                    "True\nFalse\nTrue\nTrue\nFalse\nFalse",
                    "True\nTrue\nTrue\nTrue\nTrue\nTrue"
                ],
                correctAnswer: "C",
                explanation: "`==` compares values, while `is` compares object identity. Lines 1-4: `a == b` is True (lists with same content), but `a is b` is False (different objects). Lines 6-9: Empty tuples `tuple()` are cached/singleton in Python, so `a == b` is True and `a is b` is True (same object). Lines 11-14: `A() == A()` is False (default comparison is by identity for custom classes), and `A() is A()` is False (different instances). Output: True, False, True, True, False, False."
            },
            {
                id: 55,
                question: "Which of the following statements about SQL joins is FALSE?",
                options: [
                    "An inner join is a join of two tables returning only matching rows",
                    "A left or right outer join returns the results of the inner join as well as the unmatched rows in the left or right table respectively",
                    "A full outer join returns results of an inner join as well as the results of a left and right join",
                    "An inner join returns the results of a full outer join minus the results of a left and right join"
                ],
                correctAnswer: "C",
                explanation: "Option C is FALSE. A full outer join returns all rows from both tables (matching rows combined, plus unmatched rows from both tables with NULLs). It is NOT the sum of inner join + left join + right join, as that would duplicate the inner join results. A full outer join = inner join + unmatched rows from left + unmatched rows from right. Option A is TRUE - inner join returns only matching rows. Option B is TRUE - left/right outer joins include inner join results plus unmatched rows. Option D is also FALSE but less clearly stated - the relationship described doesn't accurately represent how joins work."
            },
            {
                id: 56,
                question: "Which of the proposed sentences BEST describes the term 'hashable objects' in Python?",
                options: [
                    "Most of Python's mutable built-in objects are hashable.",
                    "A hashable object needs an __eq__() method to be compared to other objects.",
                    "Objects which are instances of user-defined classes are not hashable at all.",
                    "Hashes are used only by dictionaries and sets to quickly find their keys."
                ],
                correctAnswer: "B",
                explanation: "Option B is correct. Hashable objects must implement both `__hash__()` and `__eq__()` methods. The `__eq__()` method is essential for comparing objects, and hashable objects must have a consistent hash value that doesn't change during their lifetime. Option A is FALSE - mutable objects (like lists, dictionaries, sets) are NOT hashable because their hash value could change if modified. Option C is FALSE - user-defined classes can be hashable if they implement `__hash__()` and `__eq__()` methods. Option D is FALSE - while dictionaries and sets use hashes, hashes are also used in other contexts, and this statement is too restrictive."
            },
            {
                id: 57,
                question: "How many 'except' statements can a 'try-except' block have?",
                options: [
                    "Zero",
                    "at least one",
                    "more than one",
                    "two"
                ],
                correctAnswer: "C",
                explanation: "A try-except block can have multiple except statements to handle different types of exceptions. You can have one except statement, two except statements, or many more. While a try block must have at least one except or finally clause, the question specifically asks about the possibility of having multiple except statements, which is definitely allowed. Option C 'more than one' correctly indicates that you can have multiple except clauses. Option B 'at least one' is also true but less specific. Option D 'two' is too restrictive as you can have more than two."
            },
            {
                id: 58,
                question: "Which of the following SQL statements would insert PAPPAS as the LastName in the Persons table?",
                options: [
                    "```sql\nINSERT INTO Persons (LastName) VALUES ('PAPPAS')\n```",
                    "```sql\nINSERT INTO Persons ('PAPPAS') INTO LastName\n```",
                    "```sql\nINSERT ('PAPPAS') INTO Persons(LastName)\n```",
                    "```sql\nINSERT INTO Persons VALUES 'PAPPAS'\n```"
                ],
                correctAnswer: "A",
                explanation: "Option A uses the correct SQL INSERT syntax: `INSERT INTO table_name (column_name) VALUES (value)`. Option B has incorrect syntax - the value and column are in the wrong order. Option C has incorrect syntax - the VALUES keyword is missing and the order is wrong. Option D is missing parentheses around the value and doesn't specify which column to insert into, which would cause an error if the table has more than one column."
            },
            {
                id: 59,
                question: "On which code segments a code optimization technique has been applied?\n\n```python\n# Segment 1\nnumbers = [6, -24, 12, -36]\nzeroones = []\nzeroones = [1 if x >= 0 else 0 for x in numbers]\n\n# Segment 2\nwords_list = ['This ', 'is ', 'a ', 'Python', 'words', 'List']\nline = ''\nfor i in words_list:\n    line = line + i\n\n# Segment 3\nstudents = [('Jonathan', 'B', 13), ('Peter', 'A', 17), ('David', 'B', 10)]\nsorted_students = sorted(students)\n\n# Segment 4\nabsolutes = set(map(abs, numbers))\n```",
                options: [
                    "Segment 1 and 3",
                    "Segment 2 and 4",
                    "Segment 1 and 4",
                    "Segment 2 and 3"
                ],
                correctAnswer: "C",
                explanation: "Segment 1 uses list comprehension `[1 if x >= 0 else 0 for x in numbers]`, which is more efficient than a loop with append. Segment 4 uses `map()` and `set()`, which are optimized functional programming constructs. Segment 2 uses inefficient string concatenation in a loop (`line = line + i`), which creates new string objects each iteration - the optimized approach would be `\"\".join(words_list)`. Segment 3 uses `sorted()`, which is a built-in optimized function, but the question asks for code optimization techniques applied in the code itself, not just using built-in functions. Option C correctly identifies segments 1 and 4 as having optimization techniques."
            },
            {
                id: 60,
                question: "The data in an RDBMS is stored in database objects called:",
                options: [
                    "Views",
                    "Queries",
                    "Tables",
                    "Stored Procedures"
                ],
                correctAnswer: "C",
                explanation: "In a Relational Database Management System (RDBMS), data is stored in tables. Tables consist of rows (records) and columns (fields), and they are the fundamental storage structure for data. Views are virtual tables based on the result of a query - they don't store data themselves. Queries are used to retrieve or manipulate data from tables. Stored Procedures are precompiled collections of SQL statements that perform operations on data, but they don't store the actual data."
            },
            {
                id: 61,
                question: "Which of the proposed relations is MOST suitable between Student and Person classes?",
                options: [
                    "Association",
                    "Composition",
                    "Inheritance",
                    "Aggregation"
                ],
                correctAnswer: "C",
                explanation: "Inheritance is the most suitable relationship between Student and Person because a Student IS-A Person. This is a classic \"is-a\" relationship where Student is a specialized type of Person, inheriting all attributes and behaviors from Person while adding student-specific features. Association is a general relationship, not specific enough. Composition and Aggregation are \"has-a\" relationships (Student HAS-A Person), which doesn't make logical sense - a Student doesn't contain a Person, a Student IS a Person."
            },
            {
                id: 62,
                question: "A database schema is:",
                options: [
                    "The skeleton structure that represents the graphical view of the entire database",
                    "The skeleton structure that represents the logical view of the entire database",
                    "A graphical representation of the logical relationships of the entities",
                    "A graphical representation of the flow of data through an information system, modelling its process aspects"
                ],
                correctAnswer: "B",
                explanation: "A database schema is the skeleton structure that represents the logical view of the entire database. It defines the structure, organization, and constraints of the database, including tables, columns, data types, relationships, and constraints. Option A mentions 'graphical view' which is not accurate - a schema is the logical structure, not necessarily graphical. Option C describes an Entity-Relationship (ER) diagram, which is a graphical representation of a schema but not the schema itself. Option D describes a Data Flow Diagram (DFD), which is completely different from a database schema."
            },
            {
                id: 63,
                question: "Which of the proposed sentences about the use of static methods is TRUE?",
                options: [
                    "Static methods are used to define some behaviour specific to the class, common for all objects.",
                    "Static methods are called static because they always return \"None\".",
                    "Static methods can be bound to either a class or an instance of a class.",
                    "Static methods are defined with the argument 'self' because they operate on objects."
                ],
                correctAnswer: "A",
                explanation: "Option A is TRUE. Static methods are used to define behavior that is specific to the class and common for all objects, but doesn't require access to instance or class data. They are utility functions related to the class. Option B is FALSE - static methods can return any value, not just None. They're called 'static' because they don't receive 'self' or 'cls' parameters. Option C is FALSE - static methods are not bound to instances; they can be called from the class or instance, but they don't receive instance data. Option D is FALSE - static methods do NOT have a 'self' parameter; that's what makes them static."
            },
            {
                id: 64,
                question: "Following the execution of the above statements, how many objects and how many references have been created?\n\n```python\nx=100\ny=x\n```",
                options: [
                    "One object and one reference",
                    "Two objects and two references",
                    "Two objects and one reference",
                    "One object and two references"
                ],
                correctAnswer: "D",
                explanation: "When `x=100` is executed, one integer object (100) is created and one reference (`x`) points to it. When `y=x` is executed, no new object is created - `y` is simply another reference pointing to the same integer object (100). Therefore, there is one object (the integer 100) and two references (`x` and `y`). In Python, small integers are often cached, but conceptually, we have one object with two references pointing to it."
            },
            {
                id: 65,
                question: "Consider the page shown below. Which of the following HTML code segments would produce that?\n\n(Page shows: First name input field, Last name input field, Submit Query button, Reset button, and \"This is a test page\" text)",
                options: [
                    "```html\n<html><body><form action=\"action_page.php\">\nFirst name:<br><input type=\"text\" name=\"firstname\"><br>\nLast name:<br><input type=\"text\" name=\"lastname\"><br><br>\n<input type=\"submit\">\n</form>\n<p>This is a test page</p>\n</body></html>\n```",
                    "```html\n<body><form action=\"action_page.php\">\nFirst name:<br><input type=\"text\" name=\"firstname\"><br>\nkbr>\n<input type=\"submit\">\n</form>\n<p>This is a test page</p>\n</body></html>\n```",
                    "```html\n<html><body><form action=\"action_page.php\">\nFirst name: <br><input type=\"text\" name=\"firstname\"><br>\nLast name:<br><input type=\"text\" name=\"lastname\"><br><br>\n<input type=\"submit\">\n<input type=\"reset\">\n</form>\n<p>This is a test page</p>\n</body></html>\n```",
                    "```html\n<html><body><form action=\"action_page.php\">\nLast name:<br><input type=\"text\" name=\"lastname\"><br>\nFirst name:<br><input type=\"text\" name=\"firstname\"><br><br>\n<input type=\"reset\">\n<input type=\"submit\">\n</form>\n<p>This is a test page</p>\n</body></html>\n```"
                ],
                correctAnswer: "C",
                explanation: "Option C correctly produces the page with: First name input field, Last name input field (in correct order), Submit button, Reset button, and the paragraph \"This is a test page\". Option A is missing the Reset button. Option B only has First name field and has a syntax error (kbr>). Option D has the fields in wrong order (Last name before First name) and buttons in wrong order (Reset before Submit)."
            },
            {
                id: 66,
                question: "An alias can be an alternate name given to a:",
                options: [
                    "Relation",
                    "Row",
                    "Group",
                    "Table"
                ],
                correctAnswer: "D",
                explanation: "In SQL, an alias is an alternate name given to a table (or column). Table aliases are commonly used in SQL queries, for example: `SELECT * FROM customers AS c` or `SELECT * FROM customers c`. While 'Relation' is technically correct in database theory (a relation is a table), 'Table' is the standard SQL terminology. A row is a single record in a table, and 'Group' is not a standard database object that can have an alias."
            },
            {
                id: 67,
                question: "Consider the following Python code:\n\n```python\na = 10\nb = 20\nd = a + b\nb = d\nd = a\nprint(a, b, d)\n```\n\nWhich of the following groups of names references to a shared object?",
                options: [
                    "a and b",
                    "a and d",
                    "d and b",
                    "a and b and d"
                ],
                correctAnswer: "B",
                explanation: "Tracing through the code: `a = 10` creates a reference `a` to integer object 10. `b = 20` creates a reference `b` to integer object 20. `d = a + b` creates a new integer object 30 and reference `d` points to it. `b = d` reassigns `b` to reference the same object as `d` (30). `d = a` reassigns `d` to reference the same object as `a` (10). After execution, `a` and `d` both reference the same integer object (10), while `b` references a different object (30). Therefore, `a and d` is the correct answer."
            },
            {
                id: 68,
                question: "Table orders has as its foreign key the primary key of table customers.\nWhich of the following actions is normally allowed?",
                options: [
                    "Create an order for a new customer that is not contained in the table customers",
                    "Delete a customer who has placed an order from the table customers",
                    "Change the value of the primary key of table customers",
                    "Find the orders that correspond to an existing customer"
                ],
                correctAnswer: "D",
                explanation: "Foreign key constraints enforce referential integrity. Option A is NOT allowed - you cannot create an order with a foreign key value that doesn't exist in the customers table. Option B is normally NOT allowed - deleting a customer who has orders would violate referential integrity (unless CASCADE DELETE is configured, but this is not the normal/default behavior). Option C is normally NOT allowed - changing a primary key value that is referenced by foreign keys would violate referential integrity. Option D is allowed - querying/finding orders for an existing customer is a read operation that doesn't violate any constraints and is always permitted."
            },
            {
                id: 69,
                question: "Which of the following statements about a foreign key constraint is FALSE?",
                options: [
                    "It establishes a relationship with a primary key or a unique key in the same table or a different table",
                    "A foreign key value cannot be null",
                    "A foreign key constraint cannot be defined on multiple columns",
                    "It prevents invalid data from being inserted into the foreign key column"
                ],
                correctAnswer: "B",
                explanation: "Option B is FALSE. Foreign key values CAN be null unless a NOT NULL constraint is explicitly applied. By default, foreign key columns allow NULL values, which is useful for optional relationships. Option A is TRUE - foreign keys can reference primary keys or unique keys, and can be self-referencing (same table) or reference different tables. Option C is also FALSE (composite foreign keys are possible), but the question asks for 'the FALSE statement' and B is more clearly and commonly false. Option D is TRUE - foreign key constraints enforce referential integrity by preventing insertion of values that don't exist in the referenced table."
            },
            {
                id: 70,
                question: "Consider the HTML code below:\n\n```html\n<html>\n<body>\n<form>\n<select name=\"cars\">\n<option value=\"volvo\">Volvo</option>\n<option value=\"saab\">Saab</option>\n<option value=\"fiat\">Fiat</option>\n<option value=\"audi\">Audi</option>\n</select>\n<br><br>\n<input type=\"submit\">\n</form>\n</body>\n</html>\n```\n\nWhat kind of element(s) would this code place onto the HTML page?",
                options: [
                    "A Form, a drop-down list and a Submit button",
                    "Four (4) check boxes and a Submit button",
                    "Three (3) input boxes and a Reset button",
                    "A Form, check boxes, and submit/reset buttons"
                ],
                correctAnswer: "A",
                explanation: "The HTML code creates: (1) A `<form>` element that contains the form controls, (2) A `<select>` element with `name=\"cars\"` which creates a drop-down list with four options (Volvo, Saab, Fiat, Audi), and (3) An `<input type=\"submit\">` element which creates a Submit button. The `<select>` element is specifically for creating drop-down lists, not checkboxes or input boxes. There is no Reset button in the code. Therefore, Option A correctly identifies all three elements: a Form, a drop-down list, and a Submit button."
            },
            {
                id: 71,
                question: "Consider the following ER Diagram:\n\nEmployee (1) ----[manages]---- (0...1) Department\n\nThe relationship 'manages' has an attribute 'since'. The cardinalities show that an Employee manages 0 or 1 Department, and a Department is managed by 0 or 1 Employee.\n\nWhich of the following statements, when creating a database schema, is CORRECT?",
                options: [
                    "The primary key of table Employee will be used as a foreign key in table Department",
                    "The primary key of table Department will be used as a foreign key in table Employee",
                    "An intermediate table needs to be created containing the primary keys of the two tables as foreign keys",
                    "There is no need to establish any kind of relationship between the two tables"
                ],
                correctAnswer: "A",
                explanation: "This is a one-to-one (1:1) relationship where an Employee can manage 0 or 1 Department, and a Department can be managed by 0 or 1 Employee. For a 1:1 relationship, we typically place the foreign key in one of the tables. Since Department is optional (0...1), it's standard practice to place the foreign key in the Department table pointing to Employee. This allows a Department to exist without a manager (NULL foreign key) or with one manager. The 'since' attribute can be stored in the Department table along with the employee_id foreign key. Option B would put the foreign key in Employee, which is less common for this relationship. Option C is incorrect - intermediate tables are used for many-to-many relationships, not one-to-one. Option D is incorrect - the relationship must be established to maintain referential integrity."
            },
            {
                id: 72,
                question: "Which statement BEST defines HTTP?",
                options: [
                    "An application protocol for distributed, collaborative, hypermedia information systems",
                    "The standard markup language for creating web pages and web applications",
                    "A reference to a web resource that specifies its location on a computer network and a mechanism for retrieving it",
                    "A style sheet language used for describing the presentation of a document written in a markup language"
                ],
                correctAnswer: "A",
                explanation: "HTTP (HyperText Transfer Protocol) is an application protocol used for distributed, collaborative, hypermedia information systems. It is the foundation of data communication for the World Wide Web. Option B describes HTML (HyperText Markup Language), not HTTP. Option C describes a URL (Uniform Resource Locator), not HTTP. Option D describes CSS (Cascading Style Sheets), not HTTP."
            },
            {
                id: 73,
                question: "Consider the following Python code:\n\n```python\nfrom http.server import BaseHTTPRequestHandler, HTTPServer\nimport time\n\nhostName = \"localhost\"\nserverPort = 8080\n\nclass MyServer(BaseHTTPRequestHandler):\n    def _html(self, name, address):\n        content = f\"\"\"<html><head><title>My first page</title></head>\n<body>\n<h1> Company's details are:<h1><br>\n<h3>Name: {name}</h3><br>\n<h3> Address: {address}</h3>\n</body></html>\"\"\"\n        return content.encode(\"utf8\")\n    \n    # **** a method is missing......***\n\nif __name__ == \"__main__\":\n    webServer = HTTPServer((hostName, serverPort), MyServer)\n    print(\"Server started http://%s:%s\" % (hostName, serverPort))\n    try:\n        webServer.serve_forever()\n    except KeyboardInterrupt:\n        pass\n    webServer.server_close()\n    print(\"Server stopped.\")\n```\n\nWhich of the proposed methods MUST be added, if we want to print the contents of the _html() method in a localhost web page?",
                options: [
                    "```python\ndef do_POST(self):\n    content_length = int(self.headers['Content-Length'])\n    post_body = self.rfile.read(content_len)\n    self.wfile.write(self._html(\"PeopleCert\", \"Panepistimiou\"))\n```",
                    "```python\ndef _set_headers(self):\n    self.send_response(200)\n    self.send_header(\"Content-type\", \"text/html\")\n    self.end_headers()\n```",
                    "```python\ndef do_GET(self):\n    self.send_response(200)\n    self.send_header(\"Content-type\", \"text/html\")\n    self.end_headers()\n    self.wfile.write(self._html(\"PeopleCert\", \"Panepistimiou\"))\n```",
                    "```python\ndef do_HEAD(self):\n    self.send_response(200)\n    self._set_headers()\n```"
                ],
                correctAnswer: "C",
                explanation: "To display HTML content when accessing the localhost web page, you need to handle GET requests. When you navigate to a URL in a web browser, it sends a GET request by default. The `do_GET(self)` method is the standard method in `BaseHTTPRequestHandler` that handles GET requests. It must: (1) send a 200 OK response, (2) set the Content-type header to \"text/html\", (3) end the headers, and (4) write the HTML content from `_html()` to the response stream using `self.wfile.write()`. Option A (`do_POST`) handles POST requests, which are not sent by default when accessing a URL in a browser. Option B (`_set_headers`) is a helper method but doesn't handle requests or write content. Option D (`do_HEAD`) handles HEAD requests, which don't return a response body, so it won't display the HTML content."
            },
            {
                id: 74,
                question: "Which of the following Tags defines a HTML heading?",
                options: [
                    "<head>",
                    "<title>",
                    "<td>",
                    "<h1>"
                ],
                correctAnswer: "D",
                explanation: "The `<h1>` tag defines an HTML heading. HTML provides six levels of headings from `<h1>` (largest/most important) to `<h6>` (smallest/least important). Option A (`<head>`) is the document head section that contains metadata, not a heading element. Option B (`<title>`) defines the page title that appears in the browser tab, not a visible heading on the page. Option C (`<td>`) is a table data cell element, not a heading tag."
            },
            {
                id: 75,
                question: "Consider the following Django code:\n\n```python\nfrom django.shortcuts import render\nimport forms\n\ndef registration_form(request):\n    form = forms.SignUp()\n    if request.method == 'POST':\n        form = forms.SignUp(request.POST)\n        html = 'This form has been received another time.'\n        if form.is_valid():\n            html += \"This Form is valid\"\n    else:\n        html = 'Welcome! This is the first time.'\n    return render(request, 'signup.html', {'html': html, 'form': form})\n```\n\nWhich is the use of the 'form.is_valid()' method?",
                options: [
                    "It is used to clean and validate complete form's data.",
                    "Is is used only to validate data of a particular form's field.",
                    "It is used to check if the form's data has been received by the server.",
                    "It is used to prevent attacks to the form's data from malicious visitors."
                ],
                correctAnswer: "A",
                explanation: "The `form.is_valid()` method in Django is used to clean and validate the complete form's data. When called, it runs validation on all fields in the form, performs data cleaning (converting data to appropriate Python types), and returns True if all fields are valid, False otherwise. If validation fails, errors are stored in `form.errors`. Option B is incorrect - `is_valid()` validates all fields, not just one particular field. Option C is incorrect - checking if form data was received is done by checking `request.method == 'POST'`, not `is_valid()`. Option D is incorrect - while Django forms do provide CSRF protection and other security features, `is_valid()` is specifically for data validation and cleaning, not primarily for preventing attacks."
            },
            {
                id: 76,
                question: "Which of the following sentences BEST defines GitHub?",
                options: [
                    "A version control system (VCS) that is used for software development",
                    "A software tool for distributed revision control of computer source code",
                    "A software application that provides comprehensive facilities to computer programmers for software development",
                    "A web-based git repository hosting service that offers distributed version control and source code management functionality"
                ],
                correctAnswer: "D",
                explanation: "GitHub is a web-based hosting service for Git repositories. It provides a platform for distributed version control and source code management functionality, along with features like issue tracking, pull requests, code review, and collaboration tools. Option A describes Git (the version control system), not GitHub. Option B also describes Git, not GitHub. Option C is too vague and could describe many development tools like IDEs, but doesn't specifically define GitHub. Option D correctly identifies GitHub as a web-based hosting service built on top of Git."
            },
            {
                id: 77,
                question: "Which of the following statements BEST defines unit testing?",
                options: [
                    "Test that seeks to verify the interfaces between components against a software design",
                    "Test that verifies the functionality of a specific section of code, usually at the function level",
                    "Test to verify that the system meets its requirements",
                    "Test the handling of data passed between various units, or subsystem components"
                ],
                correctAnswer: "B",
                explanation: "Unit testing is a software testing method where individual units (functions, methods, classes, or modules) are tested in isolation to verify their functionality. Unit tests are typically written at the function or method level and test the smallest testable parts of an application. Option A describes integration testing, which tests the interfaces and interactions between components. Option C describes system testing or acceptance testing, which verifies that the entire system meets requirements. Option D also describes integration testing, which focuses on data flow between units or subsystems."
            },
            {
                id: 78,
                question: "Entities A and B are related with to a \"one-to-many\" (1-N) relationship in an ER diagram.\nWhich of the following statements, when creating a database schema, is CORRECT?",
                options: [
                    "The primary key of table B will be used as a foreign key in table A",
                    "An intermediate table needs to be created containing the primary keys of the two tables (A and B) as foreign keys",
                    "The primary key of table A will be used as a foreign key in table B",
                    "The primary key of table B will be used as a foreign key in table A, and the primary key of table A will be used as a foreign key in table B"
                ],
                correctAnswer: "C",
                explanation: "In a one-to-many (1-N) relationship, where entity A is the \"one\" side and entity B is the \"many\" side, the primary key of table A (the \"one\" side) is used as a foreign key in table B (the \"many\" side). This allows multiple rows in table B to reference the same row in table A. For example, if A represents \"Department\" and B represents \"Employee\", each employee (many) belongs to one department (one), so the employee table would have a foreign key referencing the department table. Option A is incorrect - it would reverse the relationship. Option B describes a many-to-many relationship, not one-to-many. Option D describes a bidirectional relationship which is not how one-to-many relationships are implemented in relational databases."
            },
            {
                id: 79,
                question: "Assume there are two tables in a database named Customers and Orders. Which of the following queries displays the customer name and the number of orders each customer made?",
                options: [
                    "```sql\nSELECT a.name, COUNT(b.order_id)\nFROM Customers AS a, Orders as b\nWHERE a.id=b.id\nGROUP BY b.order_id\n```",
                    "```sql\nSELECT a.name, COUNT(b.order_id)\nFROM Customers AS a\nINNER JOIN Orders AS b\nON a.id=b.id\nGROUP BY a.name\n```",
                    "```sql\nSELECT a.name, COUNT(b.order_id)\nFROM Customers AS a\nINNER JOIN Orders AS b\nON a.id=b.id\nORDER BY b.order_id\n```",
                    "```sql\nSELECT a.name, COUNT(b.order_id)\nFROM Customers AS a\n```"
                ],
                correctAnswer: "B",
                explanation: "To display the customer name and the number of orders each customer made, we need to: (1) join Customers and Orders tables, (2) count orders per customer, and (3) group by customer name. Option B correctly uses INNER JOIN to link the tables, counts `b.order_id` to get the number of orders, and groups by `a.name` to aggregate results per customer. Option A groups by `b.order_id` instead of `a.name`, which would group by individual orders rather than customers, producing incorrect results. Option C uses ORDER BY instead of GROUP BY, which would cause an error when using COUNT() with non-grouped columns. Option D is incomplete - it only selects from Customers table and doesn't join with Orders, so it cannot count orders."
            },
            {
                id: 80,
                question: "Suppose your application is connected to a database named \"people.db\", with a table named \"People\".\n\n```python\nimport mysql.connector\nmydb = mysql.connector.connect(\n    host=\"localhost\",\n    user=\"myusername\",\n    password=\"mypassword\",\n    database=\"people.db\"\n)\nmycursor = mydb.cursor()\nmycursor.execute(\"SELECT * FROM People\")\nresults = mycursor.fetchall()\n```\n\nWhich is the type of the results variable in the following code snippet?",
                options: [
                    "A tuple",
                    "A dictionary",
                    "A set",
                    "A list"
                ],
                correctAnswer: "D",
                explanation: "In Python's `mysql.connector` library, the `fetchall()` method returns a list of tuples. Each tuple in the list represents a row from the query result, where each element in the tuple corresponds to a column value. Therefore, `results` is of type `list`. While each element within the list is a tuple (representing a row), the `results` variable itself is a list. Option A is incorrect - `results` is a list, not a tuple (though it contains tuples). Option B is incorrect - dictionaries are not returned by `fetchall()`. Option C is incorrect - sets are not returned by `fetchall()`."
            },
            {
                id: 81,
                question: "Which of the following HTML code would produce that?\n\n(Expected output: \"HTML | CSS | JavaScript | jQuery\" displayed as underlined links, followed by \"Note: This is a TEST page.\" with \"Note:\" in bold)",
                options: [
                    "```html\n<html>\n<body>\n<nav>\n<a href=\"/html/\">HTML</a> |\n<a href=\"/css/\">CSS</a> |\n<a href=\"/js/\">JavaScript</a> |\n<a href=\"/jquery/\">jQuery</a>\n</nav>\n<p><strong>Note:</strong> This is a TEST page.</p>\n</body>\n</html>\n```",
                    "```html\n<html>\n<body>\n<p> HTML | CSS | JavaScript | jQuery</p>\n</nav>\n<p><strong>Note:</strong> This is a TEST page.</p>\n</body>\n</html>\n```",
                    "```html\n<html>\n<body>\n<p>HTML </p>\n<p>CSS |</p>\n<p>JavaScript |</p>\n<p>jQuery </p>\n<p><strong>Note:</strong> This is a TEST page.</p>\n</body>\n</html>\n```",
                    "```html\n<html>\n<body>\n<form action=\"demo_form.asp\">\nHTML | <input type=\"text\" name=\"HTML\" value=\"HTML\"><br>\nCSS | <input type=\"text\" name=\"CSS\" value=\"HTML \"><br>\nJavaScript | <input type=\"text\" name=\"JS\" value=\"HTML \"><br>\njQuery <input type=\"text\" name=\"SQ\" value=\"HTML \"><br>\n<input type=\"submit\" value=\"Submit\">\n</form>\n<p><strong>Note:</strong> This is a TEST page.</p>\n</body>\n</html>\n```"
                ],
                correctAnswer: "A",
                explanation: "Option A correctly produces the expected output. The `<nav>` element contains four `<a>` (anchor) tags that create hyperlinks for \"HTML\", \"CSS\", \"JavaScript\", and \"jQuery\", separated by pipe characters `|`. These links appear underlined in the browser. The paragraph uses `<strong>` to make \"Note:\" bold. Option B uses a `<p>` tag with plain text instead of links, and has a syntax error (closing `</nav>` without an opening tag). Option C uses separate `<p>` tags for each item, which would create separate paragraphs on different lines, not inline links. Option D creates a form with input fields, not links, which doesn't match the expected output."
            },
            {
                id: 82,
                question: "Assume we have an element with three elements as children. How can we make the elements full-width and layout them vertically?",
                options: [
                    "```css\nsection {\n    display: flex;\n    align-items: vertical;\n    justify-content: stretch;\n}\n```",
                    "```css\nsection {\n    display: flex;\n    flex-flow: column nowrap;\n    justify-content: stretch;\n}\n```",
                    "```css\nsection {\n    display: flex;\n    flex-flow: column nowrap;\n    align-items: stretch;\n}\n```",
                    "```css\nsection {\n    display: flex;\n    align-items: stretch;\n    justify-content: column nowrap;\n}\n```"
                ],
                correctAnswer: "C",
                explanation: "To make elements full-width and layout them vertically using Flexbox: (1) `display: flex;` enables Flexbox layout, (2) `flex-flow: column nowrap;` sets the flex direction to column (vertical layout) and prevents wrapping, and (3) `align-items: stretch;` makes the flex items stretch to fill the available space along the cross-axis. Since `flex-direction` is `column`, the cross-axis is horizontal, so `align-items: stretch` makes items full-width. Option A uses invalid values: `align-items: vertical` and `justify-content: stretch` are not valid CSS. Option B uses `justify-content: stretch`, which is invalid. Option D uses `justify-content: column nowrap`, which is invalid - `column nowrap` is used with `flex-flow`, not `justify-content`."
            },
            {
                id: 83,
                question: "Which of the following tags defines an unordered list in HTML?",
                options: [
                    "<ol>",
                    "<ul>",
                    "<li>",
                    "<br>"
                ],
                correctAnswer: "B",
                explanation: "The `<ul>` tag defines an unordered list in HTML. Unordered lists are typically rendered with bullet points. The `<ul>` element contains one or more `<li>` (list item) elements. Option A (`<ol>`) defines an ordered list, which is numbered. Option C (`<li>`) defines a list item, which is used inside `<ul>` or `<ol>` elements, but it doesn't define the list itself. Option D (`<br>`) is a line break element, not a list tag."
            },
            {
                id: 84,
                question: "Consider the following Python code snippet added to an individual view:\n\n```python\nfrom rest_framework import filters\n\nclass UserListView(generics.ListAPIView):\n    queryset = User.objects.all()\n    serializer_class = UserSerializer\n    filter_backends = [filters.SearchFilter]\n    search_fields = ['username', 'email']\n```\n\nWhich of the proposed queries is now allowed to the client, in Django REST Framework?",
                options: [
                    "http://std.com/api/users?",
                    "http://std.com/api/users/4675/?username=russel&email",
                    "http://std.com/api/users?user=russel||email",
                    "http://std.com/api/users?search=\"admin\""
                ],
                correctAnswer: "D",
                explanation: "The `filters.SearchFilter` in Django REST Framework uses the `search` query parameter by default. When `search_fields = ['username', 'email']` is specified, the SearchFilter will search within these fields when a `search` parameter is provided. Option D correctly uses `?search=\"admin\"` which will search for \"admin\" in both the `username` and `email` fields. Option A is a basic query without search parameters, which would work but doesn't utilize the SearchFilter. Option B uses an ID in the URL path and incorrect parameter format - SearchFilter doesn't use individual field parameters like `username=` or `email=`. Option C uses `user=` parameter which is not recognized by SearchFilter, and the `||` operator is not valid for SearchFilter."
            },
            {
                id: 85,
                question: "Consider the following Flask code:\n\n```python\nfrom flask import Flask, render_template\napp = Flask(__name__)\n\n@app.route(\"/\")\ndef home():\n    Users = {\n        \"Helda\":\"Stockholm\",\n        \"John\":\"London\",\n        \"Bill\":\"New York\",\n        \"Ron\": \"Los Angeles\"\n    }\n    return render_template(\"index.html\", users=Users)\n\nif __name__ == \"__main__\":\n    app.run(host=\"0.0.0.0\", port=3000, debug=True)\n```\n\nWhich of the proposed code snippets will display the users with location equal to London?",
                options: [
                    "```html\n</tr>\n{ for usernames, locations in users.items() }\n<tr>\n<td>{{username}}</td>\n<td>{{location}}</td>\n</tr>\n{ endfor }\n```",
                    "```html\n</tr>\n{% for username, location in users.items() %}\n{% if location == \"London\" %}\n<tr>\n<td>{{username}}</td>\n<td>{{location}}</td>\n</tr>\n{% endif %}\n{% endfor %}\n```",
                    "```html\n</tr>\n{% for locations in users.items() %}\n{% if location == \"London\" %}\n<tr>\n<td>{{username}}</td>\n<td>{{location}}</td>\n</tr>\n{% endfor %}\n```",
                    "```html\n</tr>\n{for username, location in users.items()}\n{if location == \"London\" }\n<tr>\n<td>{{username}}</td>\n<td>{{location}}</td>\n```"
                ],
                correctAnswer: "B",
                explanation: "Option B correctly uses Jinja2 template syntax to filter and display users with location equal to \"London\". It properly: (1) iterates over `users.items()` with `{% for username, location in users.items() %}`, (2) checks if location equals \"London\" with `{% if location == \"London\" %}`, (3) displays the username and location in table cells, and (4) uses correct Jinja2 syntax with `{% %}` delimiters. Option A uses incorrect syntax `{ }` instead of `{% %}`, and has variable name mismatch (`usernames` vs `username`). Option C only assigns one variable `locations` from the loop but tries to use `username` and `location` which aren't properly defined. Option D is missing the `%` characters in the template tags, making it syntactically incorrect."
            },
            {
                id: 86,
                question: "Which of the proposed sentences BEST describes the use of 'Serializers' in Django REST Framework?",
                options: [
                    "Serializers are used for joining content items into one package.",
                    "Serializers are used for 'translating' Django models to other, usually text-based, formats.",
                    "Serializers are used for dividing content into discrete pages.",
                    "Serializers are user for providing information about an item's content."
                ],
                correctAnswer: "B",
                explanation: "Serializers in Django REST Framework are used to convert complex data types (like Django model instances and QuerySets) into Python native datatypes that can be easily rendered into JSON, XML, or other content types. They also provide deserialization, allowing parsed data to be converted back into complex types. This process of 'translating' Django models to text-based formats (like JSON) is the core purpose of serializers. Option A is incorrect - serializers don't join content items. Option C describes pagination, not serialization. Option D is vague and doesn't accurately describe what serializers do - they don't just provide information, they convert data formats."
            },
            {
                id: 87,
                question: "What does the acronym SQL stand for?",
                options: [
                    "Strong Question Language",
                    "Structured Question Language",
                    "Structured Query Language",
                    "Strong Query Language"
                ],
                correctAnswer: "C",
                explanation: "SQL stands for \"Structured Query Language\". It is a standardized programming language used for managing and manipulating relational databases. SQL allows users to query, insert, update, and delete data, as well as create and modify database structures. Option A uses \"Strong\" instead of \"Structured\" and \"Question\" instead of \"Query\". Option B uses \"Question\" instead of \"Query\". Option D uses \"Strong\" instead of \"Structured\"."
            },
            {
                id: 88,
                question: "Consider the code snippet below:\n\n```python\ndef postComm(request, n_comment):\n    if request.session.get('isCommented', False):\n        return HttpResponse(\"You've have already commented.\")\n    comm = comments.Comment(comment=n_comment)\n    comm.save()\n    request.session['isCommented'] = True\n    return HttpResponse('Thanks for your comment!')\n```\n\nWhich of the proposed sentences is TRUE?",
                options: [
                    "isCommented variable is TRUE before the user posts a comment and the user cannot post a comment more than once.",
                    "isCommented variable is TRUE after the user posts a comment and the user cannot post a comment more than once.",
                    "isCommented variable is FALSE before the user posts a comment and the user can post a comment more than once.",
                    "isCommented variable is FALSE after the user posts a comment and the user can post a comment more than once."
                ],
                correctAnswer: "B",
                explanation: "The code uses Django session to prevent duplicate comments. Initially, `request.session.get('isCommented', False)` returns False (or the key doesn't exist, defaulting to False), so the function proceeds to create and save the comment. After saving, `request.session['isCommented'] = True` is set. On subsequent calls, if `isCommented` is True, the function returns early with \"You've have already commented.\" Therefore: (1) Before posting: `isCommented` is False (or doesn't exist), (2) After posting: `isCommented` is set to True, and (3) The user cannot post more than once because the check at the beginning prevents it. Option B correctly describes this behavior. Option A is incorrect - `isCommented` is False before posting. Option C is incorrect - the user cannot post more than once. Option D is incorrect - `isCommented` is True after posting, and the user cannot post more than once."
            },
            {
                id: 89,
                question: "Django's ______ provides a bridge between relational database tables and Python objects.",
                options: [
                    "API",
                    "CSRF",
                    "ORM",
                    "SQL"
                ],
                correctAnswer: "C",
                explanation: "Django's ORM (Object-Relational Mapping) provides a bridge between relational database tables and Python objects. The ORM allows developers to interact with the database using Python code instead of writing raw SQL queries. It maps database tables to Python classes (models), table rows to instances, and columns to attributes. Option A (API) refers to Application Programming Interface, which is a broader concept. Option B (CSRF) stands for Cross-Site Request Forgery protection, which is a security feature, not a database bridge. Option D (SQL) is the database query language itself, not the bridge between tables and objects."
            },
            {
                id: 90,
                question: "Which of the following principles helps us to prevent the accidental modification of data?",
                options: [
                    "Inheritance",
                    "Encapsulation",
                    "Modularization",
                    "Hierarchy"
                ],
                correctAnswer: "B",
                explanation: "Encapsulation is the object-oriented programming principle that helps prevent accidental modification of data. It bundles data with the methods that operate on that data and restricts direct access to an object's internal components. By using access modifiers (like private, protected, public) or properties/getters-setters, encapsulation controls how data can be accessed and modified, preventing accidental changes. Option A (Inheritance) allows classes to inherit properties and methods from parent classes, but doesn't prevent data modification. Option C (Modularization) refers to organizing code into separate modules, which is about code organization, not data protection. Option D (Hierarchy) refers to class hierarchies in inheritance, not data protection."
            },
            {
                id: 91,
                question: "In regards to primary keys in a database table, which statement is TRUE?",
                options: [
                    "Primary keys cannot be used as foreign keys in other tables",
                    "When using multiple columns to construct a primary key, neither individual column values nor their combination need to be unique",
                    "When using multiple columns to construct a primary key, both individual column values and their combination need to be unique",
                    "Primary keys can be comprised of either a single column or multiple columns in a table"
                ],
                correctAnswer: "D",
                explanation: "Primary keys can be either single-column (simple) or composite (multi-column). A composite primary key uses multiple columns together to uniquely identify each row. Option D correctly states this fact. Option A is FALSE - primary keys are commonly used as foreign keys in other tables to establish relationships. Option B is FALSE - for a composite primary key, the combination of all columns must be unique (though individual columns don't need to be unique). Option C is FALSE - for a composite primary key, only the combination of all columns needs to be unique; individual columns can have duplicate values as long as the combination is unique."
            },
            {
                id: 92,
                question: "Consider the following Django models:\n\n```python\nfrom django.db import models\n\nclass Publisher(models.Model):\n    name = models.CharField(max_length=10)\n\nclass Book(models.Model):\n    title = models.CharField(max_length=40)\n    ISBN = models.IntegerField()\n    publisher = models.ForeignKey(Publisher, on_delete=models.CASCADE)\n```\n\nWhat kind of relationships, between the database tables, are defined by Django models?",
                options: [
                    "One-To-Many",
                    "Many-To-Many",
                    "One-To-One",
                    "Many-To-One"
                ],
                correctAnswer: "D",
                explanation: "The `ForeignKey` field in the `Book` model creates a Many-To-One relationship from `Book` to `Publisher`. This means many books can belong to one publisher. In Django, a `ForeignKey` always creates a Many-To-One relationship from the model where it's defined (the \"many\" side) to the referenced model (the \"one\" side). Option A (One-To-Many) describes the relationship from the Publisher's perspective, but Django defines it from the Book model's perspective as Many-To-One. Option B (Many-To-Many) would require a `ManyToManyField`, not a `ForeignKey`. Option C (One-To-One) would require a `OneToOneField`."
            },
        ];
    }
}

