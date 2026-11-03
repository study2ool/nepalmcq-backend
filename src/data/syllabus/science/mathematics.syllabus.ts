import type { SyllabusFile } from "../../../types/quiz.types.js";

export const science_mathematicsSyllabus: SyllabusFile = {
  metadata: {
    country: "Nepal",
    curriculum: "NEB",
    level: "Grades 11 and 12",
    subject: "Mathematics",
    format: "Syllabus topic map for question bank generation",
    version: "1.0",
    note: "Expanded topic outline. Verify chapter titles and prescribed content against the current official NEB curriculum.",
    subjectCode: "MAT",
  },
  grades: {
    "11": {
      id: "MAT11",
      grade: 11,
      subject: "Mathematics",
      branches: [
        {
          id: "MAT11-B01",
          branchNumber: 1,
          branchName: "Algebra",
          chapters: [
            {
              id: "MAT11-CH01",
              chapterNumber: 1,
              chapterName: "Sets",
              topics: [
                {
                  id: "MAT11-CH01-T01",
                  topicNumber: 1,
                  topic: "Concept of sets",
                  brief:
                    "A set is a well-defined collection of distinct objects, called elements, considered as a single entity in mathematics.",
                },
                {
                  id: "MAT11-CH01-T02",
                  topicNumber: 2,
                  topic: "Representation of sets",
                  brief:
                    "Sets can be represented using descriptive statements, listing their elements, or specifying a rule that determines which elements belong to the set.",
                },
                {
                  id: "MAT11-CH01-T03",
                  topicNumber: 3,
                  topic: "Roster method",
                  brief:
                    "The roster method represents a set by listing all its elements inside curly brackets, separating them with commas.",
                },
                {
                  id: "MAT11-CH01-T04",
                  topicNumber: 4,
                  topic: "Set-builder method",
                  brief:
                    "The set-builder method describes a set using a mathematical property or condition satisfied by every element of that set.",
                },
                {
                  id: "MAT11-CH01-T05",
                  topicNumber: 5,
                  topic: "Types of sets",
                  brief:
                    "Common types of sets include empty sets, singleton sets, finite sets, infinite sets, equal sets, and equivalent sets.",
                },
                {
                  id: "MAT11-CH01-T06",
                  topicNumber: 6,
                  topic: "Subset and proper subset",
                  brief:
                    "A set A is a subset of B if every element of A belongs to B. It is a proper subset if A is contained in B but A is not equal to B.",
                },
                {
                  id: "MAT11-CH01-T07",
                  topicNumber: 7,
                  topic: "Universal set",
                  brief:
                    "The universal set contains all elements being considered in a particular problem and is commonly denoted by U.",
                },
                {
                  id: "MAT11-CH01-T08",
                  topicNumber: 8,
                  topic: "Power set",
                  brief:
                    "The power set of a set A is the set of all subsets of A, including the empty set and A itself. If A has n elements, its power set has 2ⁿ elements.",
                },
                {
                  id: "MAT11-CH01-T09",
                  topicNumber: 9,
                  topic: "Union of sets",
                  brief:
                    "The union of sets A and B, written A ∪ B, contains every element that belongs to A, B, or both.",
                },
                {
                  id: "MAT11-CH01-T10",
                  topicNumber: 10,
                  topic: "Intersection of sets",
                  brief:
                    "The intersection of sets A and B, written A ∩ B, contains only the elements common to both sets.",
                },
                {
                  id: "MAT11-CH01-T11",
                  topicNumber: 11,
                  topic: "Difference of sets",
                  brief:
                    "The difference A − B contains elements that belong to A but do not belong to B.",
                },
                {
                  id: "MAT11-CH01-T12",
                  topicNumber: 12,
                  topic: "Complement of a set",
                  brief:
                    "The complement of a set A contains all elements of the universal set U that are not in A, commonly written A′ or Aᶜ.",
                },
                {
                  id: "MAT11-CH01-T13",
                  topicNumber: 13,
                  topic: "Venn diagrams",
                  brief:
                    "Venn diagrams use overlapping or separate closed curves to represent sets and illustrate relationships and operations between them.",
                },
                {
                  id: "MAT11-CH01-T14",
                  topicNumber: 14,
                  topic: "Properties of set operations",
                  brief:
                    "Set operations follow laws such as commutative, associative, distributive, identity, and complement laws, which help simplify set expressions.",
                },
                {
                  id: "MAT11-CH01-T15",
                  topicNumber: 15,
                  topic: "Applications of sets",
                  brief:
                    "Sets are used to classify objects, organize data, describe relationships, solve counting problems, and represent groups with shared characteristics.",
                },
                {
                  id: "MAT11-CH01-T16",
                  topicNumber: 16,
                  topic: "Problems involving two sets",
                  brief:
                    "Two-set problems use union, intersection, and set complements to determine how many elements belong to one or both groups, often using the formula n(A ∪ B) = n(A) + n(B) − n(A ∩ B).",
                },
                {
                  id: "MAT11-CH01-T17",
                  topicNumber: 17,
                  topic: "Problems involving three sets",
                  brief:
                    "Three-set problems use Venn diagrams and inclusion-exclusion to count elements in three groups while avoiding double-counting, using n(A ∪ B ∪ C) = n(A) + n(B) + n(C) − n(A ∩ B) − n(B ∩ C) − n(C ∩ A) + n(A ∩ B ∩ C).",
                },
              ],
            },
            {
              id: "MAT11-CH02",
              chapterNumber: 2,
              chapterName: "Real Numbers and Intervals",
              topics: [
                {
                  id: "MAT11-CH02-T01",
                  topicNumber: 1,
                  topic: "Natural numbers",
                  brief:
                    "Natural numbers are the counting numbers 1, 2, 3, and so on. Depending on the convention, zero may also be included.",
                },
                {
                  id: "MAT11-CH02-T02",
                  topicNumber: 2,
                  topic: "Integers",
                  brief:
                    "Integers include positive whole numbers, negative whole numbers, and zero, represented by the set ℤ.",
                },
                {
                  id: "MAT11-CH02-T03",
                  topicNumber: 3,
                  topic: "Rational numbers",
                  brief:
                    "A rational number is any number that can be expressed as p/q, where p and q are integers and q is not zero. Its decimal expansion terminates or repeats.",
                },
                {
                  id: "MAT11-CH02-T04",
                  topicNumber: 4,
                  topic: "Irrational numbers",
                  brief:
                    "Irrational numbers cannot be expressed as a ratio of two integers and have non-terminating, non-repeating decimal expansions, such as √2 and π.",
                },
                {
                  id: "MAT11-CH02-T05",
                  topicNumber: 5,
                  topic: "Real number system",
                  brief:
                    "The real number system consists of all rational and irrational numbers and can be represented by points on the number line.",
                },
                {
                  id: "MAT11-CH02-T06",
                  topicNumber: 6,
                  topic: "Properties of real numbers",
                  brief:
                    "Real numbers satisfy properties such as closure, commutativity, associativity, distributivity, and the existence of additive and multiplicative identities and inverses where defined.",
                },
                {
                  id: "MAT11-CH02-T07",
                  topicNumber: 7,
                  topic: "Absolute value",
                  brief:
                    "The absolute value of a real number is its non-negative distance from zero on the number line, denoted by |x|.",
                },
                {
                  id: "MAT11-CH02-T08",
                  topicNumber: 8,
                  topic: "Number line representation",
                  brief:
                    "A number line represents real numbers as points on a straight line, with larger values positioned to the right and smaller values to the left.",
                },
                {
                  id: "MAT11-CH02-T09",
                  topicNumber: 9,
                  topic: "Intervals on the real line",
                  brief:
                    "An interval is a set of real numbers lying between specified endpoints, possibly including or excluding those endpoints.",
                },
                {
                  id: "MAT11-CH02-T10",
                  topicNumber: 10,
                  topic: "Open and closed intervals",
                  brief:
                    "An open interval, (a, b), excludes both endpoints, while a closed interval, [a, b], includes both endpoints.",
                },
                {
                  id: "MAT11-CH02-T11",
                  topicNumber: 11,
                  topic: "Half-open intervals",
                  brief:
                    "A half-open interval includes one endpoint and excludes the other, represented by [a, b) or (a, b].",
                },
                {
                  id: "MAT11-CH02-T12",
                  topicNumber: 12,
                  topic: "Interval notation",
                  brief:
                    "Interval notation uses parentheses for excluded endpoints and square brackets for included endpoints to describe ranges of real numbers.",
                },
                {
                  id: "MAT11-CH02-T13",
                  topicNumber: 13,
                  topic: "Inequalities involving real numbers",
                  brief:
                    "Inequalities compare real numbers using symbols such as <, >, ≤, and ≥. Their solutions can be represented using intervals or number-line graphs.",
                },
              ],
            },
            {
              id: "MAT11-CH03",
              chapterNumber: 3,
              chapterName: "Functions",
              topics: [
                {
                  id: "MAT11-CH03-T01",
                  topicNumber: 1,
                  topic: "Concept of a function",
                  brief:
                    "A function is a relation that assigns exactly one output to each input in its domain.",
                },
                {
                  id: "MAT11-CH03-T02",
                  topicNumber: 2,
                  topic: "Domain of a function",
                  brief:
                    "The domain of a function is the set of all permissible input values for which the function is defined.",
                },
                {
                  id: "MAT11-CH03-T03",
                  topicNumber: 3,
                  topic: "Codomain of a function",
                  brief:
                    "The codomain is the specified set containing all possible output values of a function, even if some of those values are never attained.",
                },
                {
                  id: "MAT11-CH03-T04",
                  topicNumber: 4,
                  topic: "Range of a function",
                  brief:
                    "The range of a function is the set of actual output values produced by applying the function to every input in its domain.",
                },
                {
                  id: "MAT11-CH03-T05",
                  topicNumber: 5,
                  topic: "Function notation",
                  brief:
                    "Function notation, such as f(x), represents the output of a function f for the input x and helps express mathematical relationships clearly.",
                },
                {
                  id: "MAT11-CH03-T06",
                  topicNumber: 6,
                  topic: "Real-valued functions",
                  brief:
                    "A real-valued function is a function whose outputs are real numbers, usually defined on a subset of the real numbers.",
                },
                {
                  id: "MAT11-CH03-T07",
                  topicNumber: 7,
                  topic: "One-to-one functions",
                  brief:
                    "A one-to-one or injective function assigns different outputs to different inputs, so f(a) = f(b) implies a = b.",
                },
                {
                  id: "MAT11-CH03-T08",
                  topicNumber: 8,
                  topic: "Many-to-one functions",
                  brief:
                    "A many-to-one function allows two or more distinct inputs to produce the same output.",
                },
                {
                  id: "MAT11-CH03-T09",
                  topicNumber: 9,
                  topic: "Onto functions",
                  brief:
                    "An onto or surjective function has a range equal to its codomain, meaning every element of the codomain is an output for at least one input.",
                },
                {
                  id: "MAT11-CH03-T10",
                  topicNumber: 10,
                  topic: "Into functions",
                  brief:
                    "An into function has a range that is a proper subset of its codomain, so at least one codomain element is not attained.",
                },
                {
                  id: "MAT11-CH03-T11",
                  topicNumber: 11,
                  topic: "Identity function",
                  brief:
                    "The identity function maps every element to itself and is defined by f(x) = x on its domain.",
                },
                {
                  id: "MAT11-CH03-T12",
                  topicNumber: 12,
                  topic: "Constant function",
                  brief:
                    "A constant function gives the same output for every input in its domain and can be written as f(x) = c, where c is a constant.",
                },
                {
                  id: "MAT11-CH03-T13",
                  topicNumber: 13,
                  topic: "Composite functions",
                  brief:
                    "A composite function combines two functions by applying one function to the output of another, written as (f ∘ g)(x) = f(g(x)).",
                },
                {
                  id: "MAT11-CH03-T14",
                  topicNumber: 14,
                  topic: "Inverse functions",
                  brief:
                    "An inverse function reverses the action of a function by exchanging inputs and outputs. A function has an inverse on its codomain when it is bijective.",
                },
                {
                  id: "MAT11-CH03-T15",
                  topicNumber: 15,
                  topic: "Graphs of functions",
                  brief:
                    "The graph of a function consists of points (x, f(x)) plotted on coordinate axes, providing a visual representation of its behaviour.",
                },
                {
                  id: "MAT11-CH03-T16",
                  topicNumber: 16,
                  topic: "Vertical line test",
                  brief:
                    "The vertical line test determines whether a graph represents a function of x: every vertical line must intersect the graph at most once.",
                },
                {
                  id: "MAT11-CH03-T17",
                  topicNumber: 17,
                  topic: "Algebra of functions",
                  brief:
                    "The algebra of functions combines functions through addition, subtraction, multiplication, and division, with suitable restrictions on their domains.",
                },
              ],
            },
            {
              id: "MAT11-CH04",
              chapterNumber: 4,
              chapterName: "Quadratic Equations",
              topics: [
                {
                  id: "MAT11-CH04-T01",
                  topicNumber: 1,
                  topic: "Standard form of a quadratic equation",
                  brief:
                    "A quadratic equation has the standard form ax² + bx + c = 0, where a, b, and c are constants and a ≠ 0.",
                },
                {
                  id: "MAT11-CH04-T02",
                  topicNumber: 2,
                  topic: "Solution by factorization",
                  brief:
                    "Factorization solves a quadratic equation by expressing its left-hand side as a product of factors and setting each factor equal to zero.",
                },
                {
                  id: "MAT11-CH04-T03",
                  topicNumber: 3,
                  topic: "Solution by completing the square",
                  brief:
                    "Completing the square rearranges a quadratic expression into a perfect-square form, allowing the unknown variable to be solved.",
                },
                {
                  id: "MAT11-CH04-T04",
                  topicNumber: 4,
                  topic: "Quadratic formula",
                  brief:
                    "The quadratic formula gives the solutions of ax² + bx + c = 0 as x = (−b ± √(b² − 4ac))/(2a), where a ≠ 0.",
                },
                {
                  id: "MAT11-CH04-T05",
                  topicNumber: 5,
                  topic: "Discriminant",
                  brief:
                    "The discriminant of a quadratic equation is D = b² − 4ac. It determines the nature of the roots and appears under the square root in the quadratic formula.",
                },
                {
                  id: "MAT11-CH04-T06",
                  topicNumber: 6,
                  topic: "Nature of roots",
                  brief:
                    "For real coefficients, a positive discriminant gives two distinct real roots, a zero discriminant gives equal real roots, and a negative discriminant gives two non-real complex conjugate roots.",
                },
                {
                  id: "MAT11-CH04-T07",
                  topicNumber: 7,
                  topic: "Relation between roots and coefficients",
                  brief:
                    "For ax² + bx + c = 0 with roots α and β, the sum of the roots is α + β = −b/a and their product is αβ = c/a.",
                },
                {
                  id: "MAT11-CH04-T08",
                  topicNumber: 8,
                  topic: "Formation of quadratic equations",
                  brief:
                    "A quadratic equation can be formed from its given roots or conditions by constructing an expression whose degree is two and setting it equal to zero.",
                },
                {
                  id: "MAT11-CH04-T09",
                  topicNumber: 9,
                  topic: "Equations reducible to quadratic equations",
                  brief:
                    "Some higher-degree or fractional equations can be transformed into quadratic equations using substitutions, algebraic rearrangement, or suitable factorization.",
                },
                {
                  id: "MAT11-CH04-T10",
                  topicNumber: 10,
                  topic: "Word problems involving quadratic equations",
                  brief:
                    "Word problems involving quadratic equations translate practical situations, such as area, dimensions, and motion, into quadratic equations that can be solved to find unknown quantities.",
                },
              ],
            },
            {
              id: "MAT11-CH05",
              chapterNumber: 5,
              chapterName: "Sequences and Series",
              topics: [
                {
                  id: "MAT11-CH05-T01",
                  topicNumber: 1,
                  topic: "Sequences",
                  brief:
                    "A sequence is an ordered list of numbers or terms arranged according to a rule, often described by an explicit formula or a recurrence relation.",
                },
                {
                  id: "MAT11-CH05-T02",
                  topicNumber: 2,
                  topic: "Finite and infinite sequences",
                  brief:
                    "A finite sequence contains a fixed number of terms, whereas an infinite sequence continues without an end.",
                },
                {
                  id: "MAT11-CH05-T03",
                  topicNumber: 3,
                  topic: "Arithmetic progression",
                  brief:
                    "An arithmetic progression is a sequence in which the difference between consecutive terms is constant, called the common difference.",
                },
                {
                  id: "MAT11-CH05-T04",
                  topicNumber: 4,
                  topic: "Nth term of an arithmetic progression",
                  brief:
                    "The nth term of an arithmetic progression is given by aₙ = a + (n − 1)d, where a is the first term and d is the common difference.",
                },
                {
                  id: "MAT11-CH05-T05",
                  topicNumber: 5,
                  topic: "Sum of an arithmetic progression",
                  brief:
                    "The sum of the first n terms of an arithmetic progression is Sₙ = n/2 [2a + (n − 1)d], or Sₙ = n(a + l)/2 when the last term l is known.",
                },
                {
                  id: "MAT11-CH05-T06",
                  topicNumber: 6,
                  topic: "Arithmetic means",
                  brief:
                    "The arithmetic mean of two numbers a and b is (a + b)/2. Inserting arithmetic means between numbers creates an arithmetic progression.",
                },
                {
                  id: "MAT11-CH05-T07",
                  topicNumber: 7,
                  topic: "Geometric progression",
                  brief:
                    "A geometric progression is a sequence in which each term after the first is obtained by multiplying the preceding term by a constant non-zero ratio.",
                },
                {
                  id: "MAT11-CH05-T08",
                  topicNumber: 8,
                  topic: "Nth term of a geometric progression",
                  brief:
                    "The nth term of a geometric progression is aₙ = arⁿ⁻¹, where a is the first term and r is the common ratio.",
                },
                {
                  id: "MAT11-CH05-T09",
                  topicNumber: 9,
                  topic: "Sum of a finite geometric progression",
                  brief:
                    "For a geometric progression with first term a and common ratio r, the sum of n terms is Sₙ = a(1 − rⁿ)/(1 − r) when r ≠ 1; if r = 1, Sₙ = na.",
                },
                {
                  id: "MAT11-CH05-T10",
                  topicNumber: 10,
                  topic: "Sum of an infinite geometric progression",
                  brief:
                    "An infinite geometric series with first term a and common ratio r has sum S∞ = a/(1 − r) when |r| < 1.",
                },
                {
                  id: "MAT11-CH05-T11",
                  topicNumber: 11,
                  topic: "Geometric means",
                  brief:
                    "The geometric mean of two positive numbers a and b is √(ab). Geometric means inserted between numbers form a geometric progression.",
                },
                {
                  id: "MAT11-CH05-T12",
                  topicNumber: 12,
                  topic: "Harmonic progression",
                  brief:
                    "A harmonic progression is a sequence of non-zero terms whose reciprocals form an arithmetic progression.",
                },
                {
                  id: "MAT11-CH05-T13",
                  topicNumber: 13,
                  topic: "Special series",
                  brief:
                    "Special series are sums with recognisable patterns, such as the sums of natural numbers, squares, cubes, or geometric terms, that can often be evaluated using standard formulas.",
                },
                {
                  id: "MAT11-CH05-T14",
                  topicNumber: 14,
                  topic: "Applications of sequences and series",
                  brief:
                    "Sequences and series model repeated changes, financial growth, savings, population trends, patterns, and other situations involving ordered terms and cumulative sums.",
                },
              ],
            },
            {
              id: "MAT11-CH06",
              chapterNumber: 6,
              chapterName: "Matrices and Determinants",
              topics: [
                {
                  id: "MAT11-CH06-T01",
                  topicNumber: 1,
                  topic: "Concept of a matrix",
                  brief:
                    "A matrix is a rectangular arrangement of numbers or other mathematical elements in rows and columns.",
                },
                {
                  id: "MAT11-CH06-T02",
                  topicNumber: 2,
                  topic: "Order of a matrix",
                  brief:
                    "The order of a matrix is expressed as m × n, where m is the number of rows and n is the number of columns.",
                },
                {
                  id: "MAT11-CH06-T03",
                  topicNumber: 3,
                  topic: "Types of matrices",
                  brief:
                    "Common types include row matrices, column matrices, rectangular matrices, square matrices, zero matrices, diagonal matrices, scalar matrices, identity matrices, and triangular matrices.",
                },
                {
                  id: "MAT11-CH06-T04",
                  topicNumber: 4,
                  topic: "Equality of matrices",
                  brief:
                    "Two matrices are equal if they have the same order and every pair of corresponding elements is equal.",
                },
                {
                  id: "MAT11-CH06-T05",
                  topicNumber: 5,
                  topic: "Addition of matrices",
                  brief:
                    "Matrices of the same order can be added by adding their corresponding elements.",
                },
                {
                  id: "MAT11-CH06-T06",
                  topicNumber: 6,
                  topic: "Subtraction of matrices",
                  brief:
                    "Matrices of the same order can be subtracted by subtracting corresponding elements of the second matrix from those of the first.",
                },
                {
                  id: "MAT11-CH06-T07",
                  topicNumber: 7,
                  topic: "Scalar multiplication",
                  brief:
                    "Scalar multiplication multiplies every element of a matrix by the same number, called a scalar.",
                },
                {
                  id: "MAT11-CH06-T08",
                  topicNumber: 8,
                  topic: "Matrix multiplication",
                  brief:
                    "Matrix multiplication is defined when the number of columns in the first matrix equals the number of rows in the second, and each resulting entry is calculated from row-column products.",
                },
                {
                  id: "MAT11-CH06-T09",
                  topicNumber: 9,
                  topic: "Transpose of a matrix",
                  brief:
                    "The transpose of a matrix is obtained by interchanging its rows and columns and is denoted by Aᵀ.",
                },
                {
                  id: "MAT11-CH06-T10",
                  topicNumber: 10,
                  topic: "Symmetric matrices",
                  brief:
                    "A symmetric matrix is a square matrix that equals its transpose, so Aᵀ = A.",
                },
                {
                  id: "MAT11-CH06-T11",
                  topicNumber: 11,
                  topic: "Skew-symmetric matrices",
                  brief:
                    "A skew-symmetric matrix is a square matrix satisfying Aᵀ = −A; consequently, all its diagonal entries are zero.",
                },
                {
                  id: "MAT11-CH06-T12",
                  topicNumber: 12,
                  topic: "Determinants of square matrices",
                  brief:
                    "A determinant is a scalar associated with a square matrix that provides information about invertibility and the behaviour of related linear transformations.",
                },
                {
                  id: "MAT11-CH06-T13",
                  topicNumber: 13,
                  topic: "Properties of determinants",
                  brief:
                    "Determinants follow rules involving row operations, interchange of rows, scalar multiplication, and repeated or proportional rows that simplify their evaluation.",
                },
                {
                  id: "MAT11-CH06-T14",
                  topicNumber: 14,
                  topic: "Minors and cofactors",
                  brief:
                    "The minor of an element is the determinant obtained by deleting its row and column, while its cofactor is the minor multiplied by the sign factor (−1)^(i+j).",
                },
                {
                  id: "MAT11-CH06-T15",
                  topicNumber: 15,
                  topic: "Adjoint of a matrix",
                  brief:
                    "The adjoint, or adjugate, of a square matrix is the transpose of its cofactor matrix and is used to calculate the inverse.",
                },
                {
                  id: "MAT11-CH06-T16",
                  topicNumber: 16,
                  topic: "Inverse of a matrix",
                  brief:
                    "The inverse of a square matrix A is a matrix A⁻¹ satisfying AA⁻¹ = A⁻¹A = I. It exists only when det(A) ≠ 0.",
                },
                {
                  id: "MAT11-CH06-T17",
                  topicNumber: 17,
                  topic: "Solving simultaneous linear equations using matrices",
                  brief:
                    "A system of linear equations can be written as AX = B and solved using matrix inverses or other matrix methods when the required conditions are satisfied.",
                },
              ],
            },
            {
              id: "MAT11-CH07",
              chapterNumber: 7,
              chapterName: "Complex Numbers",
              topics: [
                {
                  id: "MAT11-CH07-T01",
                  topicNumber: 1,
                  topic: "Imaginary unit",
                  brief:
                    "The imaginary unit i is defined by i² = −1 and is used to express square roots of negative real numbers.",
                },
                {
                  id: "MAT11-CH07-T02",
                  topicNumber: 2,
                  topic: "Definition of complex numbers",
                  brief:
                    "A complex number has the form z = a + bi, where a and b are real numbers and i² = −1.",
                },
                {
                  id: "MAT11-CH07-T03",
                  topicNumber: 3,
                  topic: "Real and imaginary parts",
                  brief:
                    "For a complex number z = a + bi, the real part is Re(z) = a and the imaginary part is Im(z) = b.",
                },
                {
                  id: "MAT11-CH07-T04",
                  topicNumber: 4,
                  topic: "Equality of complex numbers",
                  brief:
                    "Two complex numbers a + bi and c + di are equal if and only if their real parts are equal and their imaginary parts are equal, so a = c and b = d.",
                },
                {
                  id: "MAT11-CH07-T05",
                  topicNumber: 5,
                  topic: "Addition of complex numbers",
                  brief:
                    "Complex numbers are added by separately adding their real parts and their imaginary parts.",
                },
                {
                  id: "MAT11-CH07-T06",
                  topicNumber: 6,
                  topic: "Subtraction of complex numbers",
                  brief:
                    "Complex numbers are subtracted by subtracting the corresponding real parts and imaginary parts.",
                },
                {
                  id: "MAT11-CH07-T07",
                  topicNumber: 7,
                  topic: "Multiplication of complex numbers",
                  brief:
                    "Complex numbers are multiplied using algebraic expansion and the identity i² = −1, then simplifying the real and imaginary terms.",
                },
                {
                  id: "MAT11-CH07-T08",
                  topicNumber: 8,
                  topic: "Division of complex numbers",
                  brief:
                    "Complex-number division is performed by multiplying the numerator and denominator by the conjugate of the denominator, provided the denominator is non-zero.",
                },
                {
                  id: "MAT11-CH07-T09",
                  topicNumber: 9,
                  topic: "Complex conjugates",
                  brief:
                    "The complex conjugate of z = a + bi is z̄ = a − bi. The product z z̄ = a² + b² is real and non-negative.",
                },
                {
                  id: "MAT11-CH07-T10",
                  topicNumber: 10,
                  topic: "Modulus of a complex number",
                  brief:
                    "The modulus of z = a + bi is |z| = √(a² + b²), representing the distance of the complex number from the origin in the complex plane.",
                },
                {
                  id: "MAT11-CH07-T11",
                  topicNumber: 11,
                  topic: "Argand plane",
                  brief:
                    "The Argand plane represents complex numbers on coordinate axes, with the horizontal axis showing real parts and the vertical axis showing imaginary parts.",
                },
                {
                  id: "MAT11-CH07-T12",
                  topicNumber: 12,
                  topic: "Geometric representation of complex numbers",
                  brief:
                    "A complex number a + bi can be represented as the point (a, b) or the vector from the origin to that point in the complex plane.",
                },
                {
                  id: "MAT11-CH07-T13",
                  topicNumber: 13,
                  topic: "Polar form of complex numbers",
                  brief:
                    "The polar form of a non-zero complex number is z = r(cos θ + i sin θ), where r is its modulus and θ is its argument.",
                },
                {
                  id: "MAT11-CH07-T14",
                  topicNumber: 14,
                  topic: "Powers of complex numbers",
                  brief:
                    "Powers of complex numbers can be calculated using algebraic expansion or De Moivre's theorem, which states that [r(cos θ + i sin θ)]ⁿ = rⁿ(cos nθ + i sin nθ) for integer n.",
                },
              ],
            },
            {
              id: "MAT11-CH08",
              chapterNumber: 8,
              chapterName: "Permutations and Combinations",
              topics: [
                {
                  id: "MAT11-CH08-T01",
                  topicNumber: 1,
                  topic: "Fundamental principle of counting",
                  brief:
                    "The fundamental principle of counting states that if one task can be completed in m ways and another in n ways, the two successive tasks can be completed in mn ways.",
                },
                {
                  id: "MAT11-CH08-T02",
                  topicNumber: 2,
                  topic: "Factorial notation",
                  brief:
                    "The factorial of a non-negative integer n is n! = n(n − 1)(n − 2)…2·1, with 0! = 1.",
                },
                {
                  id: "MAT11-CH08-T03",
                  topicNumber: 3,
                  topic: "Permutations",
                  brief:
                    "A permutation is an arrangement of objects in which order matters. The number of arrangements of r objects chosen from n distinct objects is nPr = n!/(n − r)!.",
                },
                {
                  id: "MAT11-CH08-T04",
                  topicNumber: 4,
                  topic: "Permutations of distinct objects",
                  brief:
                    "The number of ways to arrange n distinct objects in a line is n!, while arranging r of them in order gives n!/(n − r)!.",
                },
                {
                  id: "MAT11-CH08-T05",
                  topicNumber: 5,
                  topic: "Permutations involving repeated objects",
                  brief:
                    "When some objects are identical, the number of distinct arrangements of n objects with repetitions of counts n₁, n₂, and so on is n!/(n₁!n₂!…).",
                },
                {
                  id: "MAT11-CH08-T06",
                  topicNumber: 6,
                  topic: "Circular permutations",
                  brief:
                    "For n distinct objects arranged around a circle, rotations are treated as equivalent, giving (n − 1)! arrangements when reflections are considered different.",
                },
                {
                  id: "MAT11-CH08-T07",
                  topicNumber: 7,
                  topic: "Combinations",
                  brief:
                    "A combination is a selection of objects in which order does not matter. The number of ways to choose r objects from n distinct objects is nCr = n!/[r!(n − r)!].",
                },
                {
                  id: "MAT11-CH08-T08",
                  topicNumber: 8,
                  topic: "Relation between permutations and combinations",
                  brief:
                    "Permutations and combinations are related by nPr = nCr × r!, because each selection of r objects can be arranged in r! different orders.",
                },
                {
                  id: "MAT11-CH08-T09",
                  topicNumber: 9,
                  topic: "Properties of combinations",
                  brief:
                    "Important combination identities include nCr = nC(n − r), nC0 = nCn = 1, and nCr + nC(r − 1) = (n + 1)Cr.",
                },
                {
                  id: "MAT11-CH08-T10",
                  topicNumber: 10,
                  topic: "Applications of permutations",
                  brief:
                    "Permutations are used to count ordered arrangements such as seating plans, rankings, codes, schedules, and ordered selections.",
                },
                {
                  id: "MAT11-CH08-T11",
                  topicNumber: 11,
                  topic: "Applications of combinations",
                  brief:
                    "Combinations are used to count unordered selections such as committees, teams, groups, and samples chosen from a larger collection.",
                },
                {
                  id: "MAT11-CH08-T12",
                  topicNumber: 12,
                  topic: "Counting problems with restrictions",
                  brief:
                    "Restricted counting problems apply permutations, combinations, and counting principles while accounting for conditions such as required positions, forbidden arrangements, or objects that must remain together.",
                },
              ],
            },
            {
              id: "MAT11-CH09",
              chapterNumber: 9,
              chapterName: "Binomial Theorem",
              topics: [
                {
                  id: "MAT11-CH09-T01",
                  topicNumber: 1,
                  topic: "Binomial expressions",
                  brief:
                    "A binomial expression is an algebraic expression containing two terms, such as a + b or x − 2.",
                },
                {
                  id: "MAT11-CH09-T02",
                  topicNumber: 2,
                  topic: "Expansion of positive integral powers",
                  brief:
                    "Expanding a positive integral power of a binomial expresses it as a sum of terms obtained by repeated multiplication, with coefficients determined by binomial coefficients.",
                },
                {
                  id: "MAT11-CH09-T03",
                  topicNumber: 3,
                  topic: "Binomial theorem",
                  brief:
                    "The binomial theorem states that (a + b)ⁿ = Σ from r = 0 to n of nCr aⁿ⁻ʳbʳ for a non-negative integer n.",
                },
                {
                  id: "MAT11-CH09-T04",
                  topicNumber: 4,
                  topic: "General term in a binomial expansion",
                  brief:
                    "The general term in the expansion of (a + b)ⁿ is Tᵣ₊₁ = nCr aⁿ⁻ʳbʳ, where r ranges from 0 to n.",
                },
                {
                  id: "MAT11-CH09-T05",
                  topicNumber: 5,
                  topic: "Binomial coefficients",
                  brief:
                    "Binomial coefficients, written nCr or (n choose r), give the numerical coefficients in a binomial expansion and are calculated using n!/[r!(n − r)!].",
                },
                {
                  id: "MAT11-CH09-T06",
                  topicNumber: 6,
                  topic: "Properties of binomial coefficients",
                  brief:
                    "Binomial coefficients satisfy identities such as nCr = nC(n − r), symmetry across Pascal's triangle, and Pascal's identity nCr + nC(r − 1) = (n + 1)Cr.",
                },
                {
                  id: "MAT11-CH09-T07",
                  topicNumber: 7,
                  topic: "Middle term of an expansion",
                  brief:
                    "The middle term or terms of a binomial expansion are identified from the total number of terms and the general-term formula.",
                },
                {
                  id: "MAT11-CH09-T08",
                  topicNumber: 8,
                  topic: "Independent term",
                  brief:
                    "The independent term is the term in an expansion that does not contain the variable. It is found by determining which general term has a variable exponent of zero.",
                },
                {
                  id: "MAT11-CH09-T09",
                  topicNumber: 9,
                  topic: "Finding specified coefficients",
                  brief:
                    "Specified coefficients in a binomial expansion can be found by identifying the relevant general term, simplifying its variable power, and evaluating its numerical coefficient.",
                },
                {
                  id: "MAT11-CH09-T10",
                  topicNumber: 10,
                  topic: "Applications of the binomial theorem",
                  brief:
                    "The binomial theorem is used to expand powers, find coefficients and constant terms, simplify algebraic expressions, and approximate certain numerical values.",
                },
              ],
            },
            {
              id: "MAT11-CH10",
              chapterNumber: 10,
              chapterName: "Mathematical Induction",
              topics: [
                {
                  id: "MAT11-CH10-T01",
                  topicNumber: 1,
                  topic: "Principle of mathematical induction",
                  brief:
                    "Mathematical induction is a proof method for statements about integers, established by proving a base case and showing that truth for one integer implies truth for the next.",
                },
                {
                  id: "MAT11-CH10-T02",
                  topicNumber: 2,
                  topic: "Base case",
                  brief:
                    "The base case verifies that the statement is true for the initial integer, often n = 1 or another specified starting value.",
                },
                {
                  id: "MAT11-CH10-T03",
                  topicNumber: 3,
                  topic: "Inductive hypothesis",
                  brief:
                    "The inductive hypothesis assumes that the statement is true for an arbitrary integer n in the relevant range, so it can be used to prove the next case.",
                },
                {
                  id: "MAT11-CH10-T04",
                  topicNumber: 4,
                  topic: "Inductive step",
                  brief:
                    "The inductive step uses the inductive hypothesis to prove that if a statement holds for n, it also holds for n + 1.",
                },
                {
                  id: "MAT11-CH10-T05",
                  topicNumber: 5,
                  topic: "Proof of summation formulas",
                  brief:
                    "Mathematical induction can prove summation identities by checking the initial case and demonstrating that the formula for n leads to the formula for n + 1.",
                },
                {
                  id: "MAT11-CH10-T06",
                  topicNumber: 6,
                  topic: "Proof of divisibility statements",
                  brief:
                    "Induction can establish divisibility claims by proving the initial case and showing that the required divisibility property is preserved at the next integer.",
                },
                {
                  id: "MAT11-CH10-T07",
                  topicNumber: 7,
                  topic: "Proof of inequalities",
                  brief:
                    "Induction can prove inequalities for integer values by verifying the starting case and using the inductive hypothesis to establish the inequality for the next value.",
                },
                {
                  id: "MAT11-CH10-T08",
                  topicNumber: 8,
                  topic: "Inductive proofs involving sequences",
                  brief:
                    "Induction can prove formulas or properties of sequences by establishing the first term and showing that the property remains valid under the sequence's recurrence or term formula.",
                },
              ],
            },
          ],
        },
        {
          id: "MAT11-B02",
          branchNumber: 2,
          branchName: "Trigonometry",
          chapters: [
            {
              id: "MAT11-CH11",
              chapterNumber: 11,
              chapterName: "Trigonometric Functions",
              topics: [
                {
                  id: "MAT11-CH11-T01",
                  topicNumber: 1,
                  topic: "Angles in degrees and radians",
                  brief:
                    "Angles can be measured in degrees or radians. A complete revolution is 360° or 2π radians, and a straight angle is 180° or π radians.",
                },
                {
                  id: "MAT11-CH11-T02",
                  topicNumber: 2,
                  topic: "Conversion between degrees and radians",
                  brief:
                    "Degrees and radians can be converted using 180° = π radians. To convert degrees to radians, multiply by π/180; to convert radians to degrees, multiply by 180/π.",
                },
                {
                  id: "MAT11-CH11-T03",
                  topicNumber: 3,
                  topic: "Trigonometric ratios",
                  brief:
                    "Trigonometric ratios relate the sides of a right-angled triangle to an acute angle. The main ratios are sine, cosine, and tangent, defined using the opposite side, adjacent side, and hypotenuse.",
                },
                {
                  id: "MAT11-CH11-T04",
                  topicNumber: 4,
                  topic: "Trigonometric functions of real numbers",
                  brief:
                    "Trigonometric functions assign values to real-number inputs representing angles, including sine, cosine, tangent, cotangent, secant, and cosecant.",
                },
                {
                  id: "MAT11-CH11-T05",
                  topicNumber: 5,
                  topic: "Signs of trigonometric functions",
                  brief:
                    "The signs of trigonometric functions depend on the quadrant of the angle. Different functions are positive in different quadrants according to the coordinates on the unit circle.",
                },
                {
                  id: "MAT11-CH11-T06",
                  topicNumber: 6,
                  topic: "Trigonometric functions in different quadrants",
                  brief:
                    "The four quadrants determine the signs of sine, cosine, and tangent: all are positive in the first quadrant; sine is positive in the second; tangent is positive in the third; and cosine is positive in the fourth.",
                },
                {
                  id: "MAT11-CH11-T07",
                  topicNumber: 7,
                  topic: "Standard trigonometric values",
                  brief:
                    "Standard trigonometric values are exact function values for commonly used angles such as 0°, 30°, 45°, 60°, and 90°, or their radian equivalents.",
                },
                {
                  id: "MAT11-CH11-T08",
                  topicNumber: 8,
                  topic: "Graphs of sine and cosine",
                  brief:
                    "The graphs of sine and cosine are periodic waves with amplitude 1 and period 2π. The sine graph passes through the origin, while the cosine graph starts at its maximum value.",
                },
                {
                  id: "MAT11-CH11-T09",
                  topicNumber: 9,
                  topic: "Graphs of tangent and other trigonometric functions",
                  brief:
                    "Tangent, cotangent, secant, and cosecant have characteristic graphs with periodic behaviour and, where their denominators become zero, vertical asymptotes or undefined points.",
                },
                {
                  id: "MAT11-CH11-T10",
                  topicNumber: 10,
                  topic: "Periodicity",
                  brief:
                    "A trigonometric function is periodic if its values repeat after a fixed interval. Sine and cosine have period 2π, while tangent and cotangent have period π.",
                },
                {
                  id: "MAT11-CH11-T11",
                  topicNumber: 11,
                  topic: "Even and odd trigonometric functions",
                  brief:
                    "An even function satisfies f(−x) = f(x), while an odd function satisfies f(−x) = −f(x). Cosine and secant are even, whereas sine, tangent, cosecant, and cotangent are odd on their respective domains.",
                },
                {
                  id: "MAT11-CH11-T12",
                  topicNumber: 12,
                  topic: "Trigonometric identities",
                  brief:
                    "Trigonometric identities are equations that hold for all values in their common domains. Important identities include sin²x + cos²x = 1 and 1 + tan²x = sec²x.",
                },
                {
                  id: "MAT11-CH11-T13",
                  topicNumber: 13,
                  topic: "Compound-angle formulas",
                  brief:
                    "Compound-angle formulas express trigonometric functions of sums or differences of angles, such as sin(A ± B), cos(A ± B), and tan(A ± B).",
                },
                {
                  id: "MAT11-CH11-T14",
                  topicNumber: 14,
                  topic: "Multiple-angle formulas",
                  brief:
                    "Multiple-angle formulas express trigonometric functions of multiples of an angle, such as sin(nx), cos(nx), and tan(nx), in terms of functions of the original angle.",
                },
                {
                  id: "MAT11-CH11-T15",
                  topicNumber: 15,
                  topic: "Double-angle formulas",
                  brief:
                    "Double-angle formulas are special multiple-angle identities, including sin 2x = 2 sin x cos x, cos 2x = cos²x − sin²x, and tan 2x = 2 tan x/(1 − tan²x) when defined.",
                },
                {
                  id: "MAT11-CH11-T16",
                  topicNumber: 16,
                  topic: "Trigonometric equations",
                  brief:
                    "Trigonometric equations contain unknown angles in trigonometric functions. They are solved using identities, standard values, periodicity, and the required domain or interval.",
                },
              ],
            },
            {
              id: "MAT11-CH12",
              chapterNumber: 12,
              chapterName: "Inverse Trigonometric Functions",
              topics: [
                {
                  id: "MAT11-CH12-T01",
                  topicNumber: 1,
                  topic: "Concept of inverse trigonometric functions",
                  brief:
                    "Inverse trigonometric functions determine an angle corresponding to a given trigonometric value. They are defined by restricting the original functions to intervals where they are one-to-one.",
                },
                {
                  id: "MAT11-CH12-T02",
                  topicNumber: 2,
                  topic: "Principal values",
                  brief:
                    "A principal value is the unique angle selected from the standard range of an inverse trigonometric function. For example, arcsin uses values from −π/2 to π/2.",
                },
                {
                  id: "MAT11-CH12-T03",
                  topicNumber: 3,
                  topic: "Domain and range of inverse trigonometric functions",
                  brief:
                    "Each inverse trigonometric function has a defined domain and principal-value range. For example, arcsin has domain [−1, 1] and range [−π/2, π/2], while arccos has domain [−1, 1] and range [0, π].",
                },
                {
                  id: "MAT11-CH12-T04",
                  topicNumber: 4,
                  topic: "Inverse sine function",
                  brief:
                    "The inverse sine function, written sin⁻¹x or arcsin x, returns the principal angle whose sine is x, for −1 ≤ x ≤ 1. Its range is [−π/2, π/2].",
                },
                {
                  id: "MAT11-CH12-T05",
                  topicNumber: 5,
                  topic: "Inverse cosine function",
                  brief:
                    "The inverse cosine function, written cos⁻¹x or arccos x, returns the principal angle whose cosine is x, for −1 ≤ x ≤ 1. Its range is [0, π].",
                },
                {
                  id: "MAT11-CH12-T06",
                  topicNumber: 6,
                  topic: "Inverse tangent function",
                  brief:
                    "The inverse tangent function, written tan⁻¹x or arctan x, returns the principal angle whose tangent is x for any real input. Its range is (−π/2, π/2).",
                },
                {
                  id: "MAT11-CH12-T07",
                  topicNumber: 7,
                  topic: "Graphs of inverse trigonometric functions",
                  brief:
                    "Graphs of inverse trigonometric functions show the relationship between an input trigonometric value and its principal angle, with domains and ranges determined by the chosen restrictions.",
                },
                {
                  id: "MAT11-CH12-T08",
                  topicNumber: 8,
                  topic: "Identities involving inverse trigonometric functions",
                  brief:
                    "Inverse trigonometric identities describe relationships between inverse functions and trigonometric functions, such as sin(sin⁻¹x) = x for x in [−1, 1], and complementary-angle identities within their valid domains.",
                },
                {
                  id: "MAT11-CH12-T09",
                  topicNumber: 9,
                  topic: "Simplification of inverse trigonometric expressions",
                  brief:
                    "Inverse trigonometric expressions can be simplified using principal-value ranges, trigonometric identities, complementary-angle relationships, and domain restrictions.",
                },
              ],
            },
          ],
        },
        {
          id: "MAT11-B03",
          branchNumber: 3,
          branchName: "Analytic Geometry",
          chapters: [
            {
              id: "MAT11-CH13",
              chapterNumber: 13,
              chapterName: "Straight Lines",
              topics: [
                {
                  id: "MAT11-CH13-T01",
                  topicNumber: 1,
                  topic: "Cartesian coordinate system",
                  brief:
                    "The Cartesian coordinate system represents points on a plane using ordered pairs (x, y) defined by two perpendicular axes, the x-axis and y-axis.",
                },
                {
                  id: "MAT11-CH13-T02",
                  topicNumber: 2,
                  topic: "Distance between two points",
                  brief:
                    "The distance between two points is calculated using the distance formula derived from the Pythagorean theorem: d = √((x₂ − x₁)² + (y₂ − y₁)²).",
                },
                {
                  id: "MAT11-CH13-T03",
                  topicNumber: 3,
                  topic: "Section formula",
                  brief:
                    "The section formula determines the coordinates of a point that divides a line segment in a given ratio, either internally or externally.",
                },
                {
                  id: "MAT11-CH13-T04",
                  topicNumber: 4,
                  topic: "Midpoint formula",
                  brief:
                    "The midpoint formula finds the point exactly halfway between two endpoints by averaging their x-coordinates and y-coordinates.",
                },
                {
                  id: "MAT11-CH13-T05",
                  topicNumber: 5,
                  topic: "Slope of a line",
                  brief:
                    "The slope measures the steepness and direction of a straight line. It is calculated as the change in y divided by the change in x between two points.",
                },
                {
                  id: "MAT11-CH13-T06",
                  topicNumber: 6,
                  topic: "Angle between two lines",
                  brief:
                    "The angle between two straight lines can be determined from their slopes using the tangent formula, provided the lines are not vertical in the chosen slope representation.",
                },
                {
                  id: "MAT11-CH13-T07",
                  topicNumber: 7,
                  topic: "Parallel lines",
                  brief:
                    "Two distinct non-vertical lines are parallel when they have equal slopes. Parallel lines have the same direction and do not intersect.",
                },
                {
                  id: "MAT11-CH13-T08",
                  topicNumber: 8,
                  topic: "Perpendicular lines",
                  brief:
                    "Two non-vertical lines are perpendicular when the product of their slopes is −1. They intersect at a right angle.",
                },
                {
                  id: "MAT11-CH13-T09",
                  topicNumber: 9,
                  topic: "Different forms of the equation of a straight line",
                  brief:
                    "A straight line can be represented using different equations, including slope-intercept, point-slope, two-point, intercept, and general forms.",
                },
                {
                  id: "MAT11-CH13-T10",
                  topicNumber: 10,
                  topic: "Slope-intercept form",
                  brief:
                    "The slope-intercept form is y = mx + c, where m represents the slope and c represents the y-intercept of the line.",
                },
                {
                  id: "MAT11-CH13-T11",
                  topicNumber: 11,
                  topic: "Point-slope form",
                  brief:
                    "The point-slope form, y − y₁ = m(x − x₁), represents a line with slope m passing through the point (x₁, y₁).",
                },
                {
                  id: "MAT11-CH13-T12",
                  topicNumber: 12,
                  topic: "Two-point form",
                  brief:
                    "The two-point form determines the equation of a line passing through two given points by using their coordinates.",
                },
                {
                  id: "MAT11-CH13-T13",
                  topicNumber: 13,
                  topic: "Intercept form",
                  brief:
                    "The intercept form of a straight line is x/a + y/b = 1, where a and b are its x-intercept and y-intercept, respectively, when both intercepts are nonzero.",
                },
                {
                  id: "MAT11-CH13-T14",
                  topicNumber: 14,
                  topic: "General form of a straight line",
                  brief:
                    "The general form of a straight line is Ax + By + C = 0, where A, B, and C are constants and A and B are not both zero.",
                },
                {
                  id: "MAT11-CH13-T15",
                  topicNumber: 15,
                  topic: "Distance of a point from a line",
                  brief:
                    "The perpendicular distance from a point (x₁, y₁) to the line Ax + By + C = 0 is |Ax₁ + By₁ + C| / √(A² + B²).",
                },
                {
                  id: "MAT11-CH13-T16",
                  topicNumber: 16,
                  topic: "Intersection of straight lines",
                  brief:
                    "The intersection of two straight lines is found by solving their equations simultaneously. Depending on their positions, they may intersect at one point, be parallel, or coincide.",
                },
              ],
            },
            {
              id: "MAT11-CH14",
              chapterNumber: 14,
              chapterName: "Conic Sections",
              topics: [
                {
                  id: "MAT11-CH14-T01",
                  topicNumber: 1,
                  topic: "Introduction to conic sections",
                  brief:
                    "Conic sections are curves formed by intersecting a plane with a double cone. The main types are circles, parabolas, ellipses, and hyperbolas.",
                },
                {
                  id: "MAT11-CH14-T02",
                  topicNumber: 2,
                  topic: "Circle",
                  brief:
                    "A circle is the set of all points in a plane that are at a fixed distance, called the radius, from a fixed point called the centre.",
                },
                {
                  id: "MAT11-CH14-T03",
                  topicNumber: 3,
                  topic: "Standard equation of a circle",
                  brief:
                    "The standard equation of a circle with centre (h, k) and radius r is (x − h)² + (y − k)² = r².",
                },
                {
                  id: "MAT11-CH14-T04",
                  topicNumber: 4,
                  topic: "Centre and radius of a circle",
                  brief:
                    "The centre specifies the fixed point of a circle, while the radius is the distance from the centre to any point on its circumference. Both can be identified from the circle's equation.",
                },
                {
                  id: "MAT11-CH14-T05",
                  topicNumber: 5,
                  topic: "Parabola",
                  brief:
                    "A parabola is a conic section consisting of points equidistant from a fixed point called the focus and a fixed line called the directrix.",
                },
                {
                  id: "MAT11-CH14-T06",
                  topicNumber: 6,
                  topic: "Standard equation of a parabola",
                  brief:
                    "Common standard equations of a parabola include y² = 4ax and x² = 4ay, describing parabolas opening horizontally and vertically, respectively, with vertex at the origin.",
                },
                {
                  id: "MAT11-CH14-T07",
                  topicNumber: 7,
                  topic: "Vertex and focus of a parabola",
                  brief:
                    "The vertex is the turning point of a parabola, and the focus is a fixed point that helps define the curve. Their positions depend on the parabola's equation.",
                },
                {
                  id: "MAT11-CH14-T08",
                  topicNumber: 8,
                  topic: "Directrix of a parabola",
                  brief:
                    "The directrix is a fixed straight line used to define a parabola. Every point on the parabola is equally distant from the directrix and the focus.",
                },
                {
                  id: "MAT11-CH14-T09",
                  topicNumber: 9,
                  topic: "Ellipse",
                  brief:
                    "An ellipse is a closed conic section in which the sum of the distances from any point on the curve to two fixed points, called foci, remains constant.",
                },
                {
                  id: "MAT11-CH14-T10",
                  topicNumber: 10,
                  topic: "Standard equation of an ellipse",
                  brief:
                    "For an ellipse centred at the origin with a horizontal major axis, the standard equation is x²/a² + y²/b² = 1, where a > b > 0.",
                },
                {
                  id: "MAT11-CH14-T11",
                  topicNumber: 11,
                  topic: "Centre and axes of an ellipse",
                  brief:
                    "The centre is the midpoint of an ellipse, while its major and minor axes are perpendicular lines through the centre that define its longest and shortest diameters.",
                },
                {
                  id: "MAT11-CH14-T12",
                  topicNumber: 12,
                  topic: "Foci of an ellipse",
                  brief:
                    "The foci are two fixed points inside an ellipse. For an ellipse centred at the origin with a horizontal major axis, their coordinates are (±c, 0), where c² = a² − b².",
                },
                {
                  id: "MAT11-CH14-T13",
                  topicNumber: 13,
                  topic: "Hyperbola",
                  brief:
                    "A hyperbola is a conic section consisting of two separate branches. The absolute difference between the distances from any point on it to two fixed foci is constant.",
                },
                {
                  id: "MAT11-CH14-T14",
                  topicNumber: 14,
                  topic: "Standard equation of a hyperbola",
                  brief:
                    "A hyperbola centred at the origin with a horizontal transverse axis has the standard equation x²/a² − y²/b² = 1.",
                },
                {
                  id: "MAT11-CH14-T15",
                  topicNumber: 15,
                  topic: "Vertices and foci of a hyperbola",
                  brief:
                    "The vertices are the points where the hyperbola approaches its centre most closely along the transverse axis. The foci lie farther from the centre, with c² = a² + b² for a standard hyperbola.",
                },
                {
                  id: "MAT11-CH14-T16",
                  topicNumber: 16,
                  topic: "Eccentricity of conic sections",
                  brief:
                    "Eccentricity measures how much a conic differs from a circle. A circle has eccentricity 0, an ellipse has eccentricity between 0 and 1, a parabola has eccentricity 1, and a hyperbola has eccentricity greater than 1.",
                },
              ],
            },
            {
              id: "MAT11-CH15",
              chapterNumber: 15,
              chapterName: "Vectors",
              topics: [
                {
                  id: "MAT11-CH15-T01",
                  topicNumber: 1,
                  topic: "Scalar and vector quantities",
                  brief:
                    "A scalar quantity has magnitude only, such as mass or temperature, while a vector quantity has both magnitude and direction, such as displacement or velocity.",
                },
                {
                  id: "MAT11-CH15-T02",
                  topicNumber: 2,
                  topic: "Representation of vectors",
                  brief:
                    "A vector is commonly represented by a directed line segment or a bold or arrow-marked symbol. Its length represents magnitude, and its arrow indicates direction.",
                },
                {
                  id: "MAT11-CH15-T03",
                  topicNumber: 3,
                  topic: "Magnitude of a vector",
                  brief:
                    "The magnitude of a vector is its length. For a two-dimensional vector a = (a₁, a₂), the magnitude is |a| = √(a₁² + a₂²).",
                },
                {
                  id: "MAT11-CH15-T04",
                  topicNumber: 4,
                  topic: "Unit vectors",
                  brief:
                    "A unit vector has magnitude 1 and indicates a direction. A nonzero vector can be converted into a unit vector by dividing it by its magnitude.",
                },
                {
                  id: "MAT11-CH15-T05",
                  topicNumber: 5,
                  topic: "Position vectors",
                  brief:
                    "A position vector describes the location of a point relative to an origin. For a point P(x, y), its position vector is OP = xi + yj.",
                },
                {
                  id: "MAT11-CH15-T06",
                  topicNumber: 6,
                  topic: "Equal vectors",
                  brief:
                    "Two vectors are equal when they have the same magnitude and direction, regardless of their starting positions.",
                },
                {
                  id: "MAT11-CH15-T07",
                  topicNumber: 7,
                  topic: "Negative vectors",
                  brief:
                    "A negative vector has the same magnitude as the original vector but points in the opposite direction. For a vector a, its negative is −a.",
                },
                {
                  id: "MAT11-CH15-T08",
                  topicNumber: 8,
                  topic: "Addition of vectors",
                  brief:
                    "Vector addition combines two or more vectors using the triangle or parallelogram rule, or by adding their corresponding components.",
                },
                {
                  id: "MAT11-CH15-T09",
                  topicNumber: 9,
                  topic: "Subtraction of vectors",
                  brief:
                    "Vector subtraction is performed by adding the negative of the vector being subtracted. In component form, corresponding components are subtracted.",
                },
                {
                  id: "MAT11-CH15-T10",
                  topicNumber: 10,
                  topic: "Scalar multiplication of vectors",
                  brief:
                    "Scalar multiplication multiplies a vector by a real number, changing its magnitude and possibly its direction. A negative scalar reverses the direction.",
                },
                {
                  id: "MAT11-CH15-T11",
                  topicNumber: 11,
                  topic: "Components of a vector",
                  brief:
                    "The components of a vector are its projections along coordinate axes. In two dimensions, a vector can be expressed as a = a₁i + a₂j.",
                },
                {
                  id: "MAT11-CH15-T12",
                  topicNumber: 12,
                  topic: "Resolution of vectors",
                  brief:
                    "Resolution of vectors is the process of splitting a vector into components along specified directions, often perpendicular coordinate axes.",
                },
                {
                  id: "MAT11-CH15-T13",
                  topicNumber: 13,
                  topic: "Position vectors in two and three dimensions",
                  brief:
                    "In two dimensions, a position vector is written as xi + yj. In three dimensions, it is written as xi + yj + zk for a point with coordinates (x, y, z).",
                },
                {
                  id: "MAT11-CH15-T14",
                  topicNumber: 14,
                  topic: "Applications of vectors in geometry",
                  brief:
                    "Vectors help solve geometric problems involving distances, directions, line segments, collinearity, and relationships between points and shapes.",
                },
              ],
            },
          ],
        },
        {
          id: "MAT11-B04",
          branchNumber: 4,
          branchName: "Calculus",
          chapters: [
            {
              id: "MAT11-CH16",
              chapterNumber: 16,
              chapterName: "Limits and Continuity",
              topics: [
                {
                  id: "MAT11-CH16-T01",
                  topicNumber: 1,
                  topic: "Concept of a limit",
                  brief:
                    "A limit describes the value that a function approaches as its input approaches a particular number, whether or not the function is defined at that number.",
                },
                {
                  id: "MAT11-CH16-T02",
                  topicNumber: 2,
                  topic: "Left-hand limits",
                  brief:
                    "A left-hand limit describes the value a function approaches as the input approaches a given number from smaller values, written as x → a⁻.",
                },
                {
                  id: "MAT11-CH16-T03",
                  topicNumber: 3,
                  topic: "Right-hand limits",
                  brief:
                    "A right-hand limit describes the value a function approaches as the input approaches a given number from larger values, written as x → a⁺.",
                },
                {
                  id: "MAT11-CH16-T04",
                  topicNumber: 4,
                  topic: "Limits of algebraic functions",
                  brief:
                    "Limits of algebraic functions can often be evaluated by direct substitution when the function is continuous at the point. Other cases may require algebraic simplification.",
                },
                {
                  id: "MAT11-CH16-T05",
                  topicNumber: 5,
                  topic: "Limits of rational functions",
                  brief:
                    "Limits of rational functions are often found by substituting the approaching value into the numerator and denominator, provided the denominator is nonzero. If substitution gives an indeterminate form, simplification may be needed.",
                },
                {
                  id: "MAT11-CH16-T06",
                  topicNumber: 6,
                  topic: "Standard limits",
                  brief:
                    "Standard limits are commonly used results that simplify limit calculations, such as limₓ→₀ (sin x)/x = 1 when angles are measured in radians.",
                },
                {
                  id: "MAT11-CH16-T07",
                  topicNumber: 7,
                  topic: "Limits involving factorization",
                  brief:
                    "Factorization helps evaluate limits that initially produce an indeterminate form such as 0/0. Common factors can be cancelled before taking the limit.",
                },
                {
                  id: "MAT11-CH16-T08",
                  topicNumber: 8,
                  topic: "Limits involving rationalization",
                  brief:
                    "Rationalization simplifies certain limits involving radicals by multiplying the numerator or denominator by a suitable conjugate to remove the radical difference.",
                },
                {
                  id: "MAT11-CH16-T09",
                  topicNumber: 9,
                  topic: "Limits at infinity",
                  brief:
                    "Limits at infinity describe the behavior of a function as its input becomes arbitrarily large or small. They are useful for studying long-term behavior and horizontal asymptotes.",
                },
                {
                  id: "MAT11-CH16-T10",
                  topicNumber: 10,
                  topic: "Infinite limits",
                  brief:
                    "An infinite limit occurs when a function's values increase or decrease without bound as the input approaches a particular value. This behavior may indicate a vertical asymptote.",
                },
                {
                  id: "MAT11-CH16-T11",
                  topicNumber: 11,
                  topic: "Continuity at a point",
                  brief:
                    "A function is continuous at x = a if f(a) is defined, the limit as x approaches a exists, and that limit equals f(a).",
                },
                {
                  id: "MAT11-CH16-T12",
                  topicNumber: 12,
                  topic: "Continuity on an interval",
                  brief:
                    "A function is continuous on an interval if it is continuous at every interior point and satisfies the appropriate one-sided continuity condition at any included endpoint.",
                },
                {
                  id: "MAT11-CH16-T13",
                  topicNumber: 13,
                  topic: "Types of discontinuity",
                  brief:
                    "Discontinuities occur where a function fails to be continuous. Common types include removable discontinuities, jump discontinuities, and infinite discontinuities.",
                },
              ],
            },
            {
              id: "MAT11-CH17",
              chapterNumber: 17,
              chapterName: "Derivatives",
              topics: [
                {
                  id: "MAT11-CH17-T01",
                  topicNumber: 1,
                  topic: "Concept of a derivative",
                  brief:
                    "A derivative measures the instantaneous rate of change of a function with respect to its input. Geometrically, it represents the slope of the tangent to the function's graph at a point.",
                },
                {
                  id: "MAT11-CH17-T02",
                  topicNumber: 2,
                  topic: "Derivative from first principles",
                  brief:
                    "The derivative from first principles is defined using a limit of the difference quotient: f'(x) = limₕ→₀ [f(x + h) − f(x)]/h, when the limit exists.",
                },
                {
                  id: "MAT11-CH17-T03",
                  topicNumber: 3,
                  topic: "Geometric interpretation of a derivative",
                  brief:
                    "Geometrically, the derivative at a point gives the slope of the tangent line to the curve at that point, describing how steeply the graph rises or falls.",
                },
                {
                  id: "MAT11-CH17-T04",
                  topicNumber: 4,
                  topic: "Derivative as a rate of change",
                  brief:
                    "A derivative represents an instantaneous rate of change. For example, the derivative of position with respect to time gives instantaneous velocity.",
                },
                {
                  id: "MAT11-CH17-T05",
                  topicNumber: 5,
                  topic: "Derivatives of algebraic functions",
                  brief:
                    "Derivatives of algebraic functions are found using differentiation rules for powers, sums, differences, products, quotients, and compositions of functions.",
                },
                {
                  id: "MAT11-CH17-T06",
                  topicNumber: 6,
                  topic: "Power rule",
                  brief:
                    "The power rule states that the derivative of xⁿ is nxⁿ⁻¹, where n is a constant and the expression is defined in the relevant domain.",
                },
                {
                  id: "MAT11-CH17-T07",
                  topicNumber: 7,
                  topic: "Sum and difference rules",
                  brief:
                    "The sum and difference rules state that the derivative of a sum or difference of differentiable functions equals the sum or difference of their derivatives.",
                },
                {
                  id: "MAT11-CH17-T08",
                  topicNumber: 8,
                  topic: "Product rule",
                  brief:
                    "The product rule differentiates the product of two differentiable functions: (fg)' = f'g + fg'. Each function is differentiated once while the other remains unchanged.",
                },
                {
                  id: "MAT11-CH17-T09",
                  topicNumber: 9,
                  topic: "Quotient rule",
                  brief:
                    "The quotient rule differentiates a ratio of functions: (f/g)' = (f'g − fg')/g², provided g is nonzero in the region considered.",
                },
                {
                  id: "MAT11-CH17-T10",
                  topicNumber: 10,
                  topic: "Chain rule",
                  brief:
                    "The chain rule differentiates composite functions by multiplying the derivative of the outer function by the derivative of the inner function.",
                },
                {
                  id: "MAT11-CH17-T11",
                  topicNumber: 11,
                  topic: "Derivatives of trigonometric functions",
                  brief:
                    "Trigonometric functions have standard derivatives, such as d/dx(sin x) = cos x and d/dx(cos x) = −sin x, when angles are measured in radians.",
                },
                {
                  id: "MAT11-CH17-T12",
                  topicNumber: 12,
                  topic: "Derivatives of exponential functions",
                  brief:
                    "The derivative of an exponential function depends on its base. For example, d/dx(eˣ) = eˣ, while d/dx(aˣ) = aˣ ln(a) for a > 0.",
                },
                {
                  id: "MAT11-CH17-T13",
                  topicNumber: 13,
                  topic: "Derivatives of logarithmic functions",
                  brief:
                    "Logarithmic functions can be differentiated using standard rules. For x > 0, d/dx(ln x) = 1/x, and for a > 0 with a ≠ 1, d/dx(logₐ x) = 1/(x ln a).",
                },
                {
                  id: "MAT11-CH17-T14",
                  topicNumber: 14,
                  topic: "Implicit differentiation",
                  brief:
                    "Implicit differentiation finds dy/dx when x and y are related by an equation rather than an explicit formula for y. The chain rule is used when differentiating terms involving y.",
                },
                {
                  id: "MAT11-CH17-T15",
                  topicNumber: 15,
                  topic: "Higher-order derivatives",
                  brief:
                    "Higher-order derivatives are obtained by differentiating a function repeatedly. The second derivative describes the rate of change of the first derivative and can indicate the curvature of a graph.",
                },
              ],
            },
          ],
        },
        {
          id: "MAT11-B05",
          branchNumber: 5,
          branchName: "Statistics and Probability",
          chapters: [
            {
              id: "MAT11-CH18",
              chapterNumber: 18,
              chapterName: "Statistics",
              topics: [
                {
                  id: "MAT11-CH18-T01",
                  topicNumber: 1,
                  topic: "Collection of statistical data",
                  brief:
                    "Collection of statistical data is the process of gathering information for analysis and interpretation. Data may be collected through surveys, observations, experiments, interviews, or existing records.",
                },
                {
                  id: "MAT11-CH18-T02",
                  topicNumber: 2,
                  topic: "Classification of data",
                  brief:
                    "Classification of data involves organizing collected information into groups or categories based on common characteristics, such as qualitative features, numerical values, or time periods.",
                },
                {
                  id: "MAT11-CH18-T03",
                  topicNumber: 3,
                  topic: "Frequency distributions",
                  brief:
                    "A frequency distribution organizes data into values or class intervals and records how many observations fall into each category. It helps summarize and understand patterns in a dataset.",
                },
                {
                  id: "MAT11-CH18-T04",
                  topicNumber: 4,
                  topic: "Grouped and ungrouped data",
                  brief:
                    "Ungrouped data consists of individual observations listed separately, while grouped data organizes observations into class intervals or categories with corresponding frequencies.",
                },
                {
                  id: "MAT11-CH18-T05",
                  topicNumber: 5,
                  topic: "Measures of central tendency",
                  brief:
                    "Measures of central tendency describe the typical or central value of a dataset. The main measures are arithmetic mean, median, and mode.",
                },
                {
                  id: "MAT11-CH18-T06",
                  topicNumber: 6,
                  topic: "Arithmetic mean",
                  brief:
                    "The arithmetic mean is calculated by dividing the sum of all observations by the number of observations. For frequency data, each value is multiplied by its frequency before calculating the total.",
                },
                {
                  id: "MAT11-CH18-T07",
                  topicNumber: 7,
                  topic: "Median",
                  brief:
                    "The median is the middle value when observations are arranged in ascending or descending order. For an even number of observations, it is the average of the two middle values.",
                },
                {
                  id: "MAT11-CH18-T08",
                  topicNumber: 8,
                  topic: "Mode",
                  brief:
                    "The mode is the value that occurs most frequently in a dataset. A dataset may have one mode, multiple modes, or no single most frequent value.",
                },
                {
                  id: "MAT11-CH18-T09",
                  topicNumber: 9,
                  topic: "Quartiles",
                  brief:
                    "Quartiles divide an ordered dataset into four parts. The first quartile represents the lower quarter, the second quartile is the median, and the third quartile represents the upper three-quarters position.",
                },
                {
                  id: "MAT11-CH18-T10",
                  topicNumber: 10,
                  topic: "Measures of dispersion",
                  brief:
                    "Measures of dispersion describe how widely data values are spread around a central value. Common measures include range, quartile deviation, mean deviation, variance, and standard deviation.",
                },
                {
                  id: "MAT11-CH18-T11",
                  topicNumber: 11,
                  topic: "Range",
                  brief:
                    "The range is the difference between the maximum and minimum values in a dataset. It provides a simple measure of the total spread of the observations.",
                },
                {
                  id: "MAT11-CH18-T12",
                  topicNumber: 12,
                  topic: "Quartile deviation",
                  brief:
                    "Quartile deviation, also called the semi-interquartile range, is half the difference between the third and first quartiles. It measures the spread of the middle half of the data.",
                },
                {
                  id: "MAT11-CH18-T13",
                  topicNumber: 13,
                  topic: "Mean deviation",
                  brief:
                    "Mean deviation is the average of the absolute differences between observations and a chosen central value, such as the mean or median.",
                },
                {
                  id: "MAT11-CH18-T14",
                  topicNumber: 14,
                  topic: "Variance",
                  brief:
                    "Variance measures the average squared deviation of observations from their mean. It indicates how spread out the values are, with larger variance indicating greater dispersion.",
                },
                {
                  id: "MAT11-CH18-T15",
                  topicNumber: 15,
                  topic: "Standard deviation",
                  brief:
                    "Standard deviation is the positive square root of variance. It measures the typical spread of observations around the mean and is expressed in the same units as the original data.",
                },
                {
                  id: "MAT11-CH18-T16",
                  topicNumber: 16,
                  topic: "Coefficient of variation",
                  brief:
                    "The coefficient of variation expresses standard deviation relative to the mean, usually as a percentage. It is useful for comparing variability between datasets with different scales, provided the means are suitable for comparison.",
                },
                {
                  id: "MAT11-CH18-T17",
                  topicNumber: 17,
                  topic: "Interpretation of statistical data",
                  brief:
                    "Interpretation of statistical data involves examining summaries, averages, variability, tables, and graphs to identify patterns, compare groups, and draw conclusions supported by the data.",
                },
              ],
            },
            {
              id: "MAT11-CH19",
              chapterNumber: 19,
              chapterName: "Probability",
              topics: [
                {
                  id: "MAT11-CH19-T01",
                  topicNumber: 1,
                  topic: "Random experiments",
                  brief:
                    "A random experiment is a process that produces an outcome from a known set of possible outcomes, but the specific result cannot be predicted with certainty in advance.",
                },
                {
                  id: "MAT11-CH19-T02",
                  topicNumber: 2,
                  topic: "Sample space",
                  brief:
                    "The sample space is the set of all possible outcomes of a random experiment. It is commonly denoted by S and forms the basis for defining events and probabilities.",
                },
                {
                  id: "MAT11-CH19-T03",
                  topicNumber: 3,
                  topic: "Events",
                  brief:
                    "An event is a subset of the sample space containing one or more outcomes of a random experiment. An event occurs when the experimental result belongs to that subset.",
                },
                {
                  id: "MAT11-CH19-T04",
                  topicNumber: 4,
                  topic: "Simple events and compound events",
                  brief:
                    "A simple event contains exactly one outcome, while a compound event contains two or more outcomes from the sample space.",
                },
                {
                  id: "MAT11-CH19-T05",
                  topicNumber: 5,
                  topic: "Mutually exclusive events",
                  brief:
                    "Mutually exclusive events cannot occur simultaneously in a single trial. For events A and B, this means their intersection is empty and P(A ∩ B) = 0.",
                },
                {
                  id: "MAT11-CH19-T06",
                  topicNumber: 6,
                  topic: "Exhaustive events",
                  brief:
                    "A collection of events is exhaustive if their union includes every possible outcome in the sample space, ensuring that at least one of the events occurs.",
                },
                {
                  id: "MAT11-CH19-T07",
                  topicNumber: 7,
                  topic: "Complementary events",
                  brief:
                    "The complement of an event A consists of all outcomes in the sample space that are not in A. Its probability is P(Aᶜ) = 1 − P(A).",
                },
                {
                  id: "MAT11-CH19-T08",
                  topicNumber: 8,
                  topic: "Classical probability",
                  brief:
                    "Classical probability calculates the likelihood of an event when all outcomes are equally likely. It is the number of favourable outcomes divided by the total number of possible outcomes.",
                },
                {
                  id: "MAT11-CH19-T09",
                  topicNumber: 9,
                  topic: "Addition law of probability",
                  brief:
                    "The addition law calculates the probability that at least one of two events occurs: P(A ∪ B) = P(A) + P(B) − P(A ∩ B). For mutually exclusive events, the intersection probability is zero.",
                },
                {
                  id: "MAT11-CH19-T10",
                  topicNumber: 10,
                  topic: "Multiplication law of probability",
                  brief:
                    "The multiplication law calculates the probability that two events occur together: P(A ∩ B) = P(A)P(B|A), when P(A) > 0. It can also be written as P(B)P(A|B), when P(B) > 0.",
                },
                {
                  id: "MAT11-CH19-T11",
                  topicNumber: 11,
                  topic: "Independent events",
                  brief:
                    "Two events are independent if the occurrence of one does not change the probability of the other. For independent events A and B, P(A ∩ B) = P(A)P(B).",
                },
                {
                  id: "MAT11-CH19-T12",
                  topicNumber: 12,
                  topic: "Conditional probability",
                  brief:
                    "Conditional probability is the probability of an event occurring when another event is known to have occurred. For P(B) > 0, it is defined as P(A|B) = P(A ∩ B) / P(B).",
                },
                {
                  id: "MAT11-CH19-T13",
                  topicNumber: 13,
                  topic: "Applications of probability",
                  brief:
                    "Probability is used to estimate the likelihood of uncertain outcomes in fields such as games, weather forecasting, insurance, scientific research, quality control, and decision-making.",
                },
              ],
            },
          ],
        },
      ],
    },
    "12": {
      id: "MAT12",
      grade: 12,
      subject: "Mathematics",
      branches: [
        {
          id: "MAT12-B01",
          branchNumber: 1,
          branchName: "Algebra",
          chapters: [
            {
              id: "MAT12-CH01",
              chapterNumber: 1,
              chapterName: "Relations and Functions",
              topics: [
                {
                  id: "MAT12-CH01-T01",
                  topicNumber: 1,
                  topic: "Cartesian product of sets",
                  brief:
                    "The Cartesian product of two sets A and B is the set of all ordered pairs (a, b), where a belongs to A and b belongs to B. It is denoted by A × B.",
                },
                {
                  id: "MAT12-CH01-T02",
                  topicNumber: 2,
                  topic: "Relations",
                  brief:
                    "A relation from set A to set B is any subset of the Cartesian product A × B. It describes a connection between elements of two sets.",
                },
                {
                  id: "MAT12-CH01-T03",
                  topicNumber: 3,
                  topic: "Domain and range of a relation",
                  brief:
                    "The domain of a relation is the set of all first components of its ordered pairs, while the range is the set of all second components that appear.",
                },
                {
                  id: "MAT12-CH01-T04",
                  topicNumber: 4,
                  topic: "Representation of relations",
                  brief:
                    "Relations can be represented using ordered pairs, tables, arrow diagrams, sets of ordered pairs, or graphs on the Cartesian coordinate plane.",
                },
                {
                  id: "MAT12-CH01-T05",
                  topicNumber: 5,
                  topic: "Equivalence relations",
                  brief:
                    "An equivalence relation is a relation that is reflexive, symmetric, and transitive. It groups elements into equivalence classes based on a shared relationship.",
                },
                {
                  id: "MAT12-CH01-T06",
                  topicNumber: 6,
                  topic: "Functions",
                  brief:
                    "A function is a relation that assigns exactly one output to each input in its domain. Each input has a unique corresponding output.",
                },
                {
                  id: "MAT12-CH01-T07",
                  topicNumber: 7,
                  topic: "One-to-one functions",
                  brief:
                    "A one-to-one function, or injective function, maps distinct inputs to distinct outputs. No two different domain elements have the same image.",
                },
                {
                  id: "MAT12-CH01-T08",
                  topicNumber: 8,
                  topic: "Onto functions",
                  brief:
                    "An onto function, or surjective function, maps elements of its domain so that every element of its codomain is the image of at least one input.",
                },
                {
                  id: "MAT12-CH01-T09",
                  topicNumber: 9,
                  topic: "Bijective functions",
                  brief:
                    "A bijective function is both one-to-one and onto. Every element of the codomain corresponds to exactly one element of the domain, so an inverse function exists.",
                },
                {
                  id: "MAT12-CH01-T10",
                  topicNumber: 10,
                  topic: "Composite functions",
                  brief:
                    "A composite function combines two functions by applying one function to the output of another. The composition of f and g is written as (f ∘ g)(x) = f(g(x)).",
                },
                {
                  id: "MAT12-CH01-T11",
                  topicNumber: 11,
                  topic: "Inverse functions",
                  brief:
                    "An inverse function reverses the action of the original function. For a function to have an inverse on its full domain and codomain, it must be bijective.",
                },
                {
                  id: "MAT12-CH01-T12",
                  topicNumber: 12,
                  topic: "Properties of functions",
                  brief:
                    "Properties of functions include their domain, codomain, range, injectivity, surjectivity, bijectivity, symmetry, monotonicity, and behavior under composition.",
                },
              ],
            },
            {
              id: "MAT12-CH02",
              chapterNumber: 2,
              chapterName: "Inverse Trigonometric Functions",
              topics: [
                {
                  id: "MAT12-CH02-T01",
                  topicNumber: 1,
                  topic: "Principal values of inverse trigonometric functions",
                  brief:
                    "Principal values are the selected angle values used to define inverse trigonometric functions uniquely. Each inverse function uses a specified principal range.",
                },
                {
                  id: "MAT12-CH02-T02",
                  topicNumber: 2,
                  topic: "Domain and range",
                  brief:
                    "The domain specifies the allowed inputs of an inverse trigonometric function, while the range specifies its principal output angles. These restrictions make the inverse functions single-valued.",
                },
                {
                  id: "MAT12-CH02-T03",
                  topicNumber: 3,
                  topic: "Inverse sine function",
                  brief:
                    "The inverse sine function, written as sin⁻¹(x) or arcsin(x), returns the principal angle whose sine is x. Its domain is [−1, 1] and its range is [−π/2, π/2].",
                },
                {
                  id: "MAT12-CH02-T04",
                  topicNumber: 4,
                  topic: "Inverse cosine function",
                  brief:
                    "The inverse cosine function, written as cos⁻¹(x) or arccos(x), returns the principal angle whose cosine is x. Its domain is [−1, 1] and its range is [0, π].",
                },
                {
                  id: "MAT12-CH02-T05",
                  topicNumber: 5,
                  topic: "Inverse tangent function",
                  brief:
                    "The inverse tangent function, written as tan⁻¹(x) or arctan(x), returns the principal angle whose tangent is x. Its domain is all real numbers and its range is (−π/2, π/2).",
                },
                {
                  id: "MAT12-CH02-T06",
                  topicNumber: 6,
                  topic: "Graphs of inverse trigonometric functions",
                  brief:
                    "Graphs of inverse trigonometric functions show how principal angles vary with their inputs. Their domains and ranges are restricted so each function has a unique output for every allowed input.",
                },
                {
                  id: "MAT12-CH02-T07",
                  topicNumber: 7,
                  topic: "Identities involving inverse trigonometric functions",
                  brief:
                    "Inverse trigonometric identities express relationships between inverse functions and angles. For example, sin(sin⁻¹ x) = x for x in [−1, 1].",
                },
                {
                  id: "MAT12-CH02-T08",
                  topicNumber: 8,
                  topic: "Simplification of inverse trigonometric expressions",
                  brief:
                    "Simplification uses inverse-function identities, principal-value ranges, and trigonometric relationships to rewrite expressions in a simpler equivalent form.",
                },
              ],
            },
            {
              id: "MAT12-CH03",
              chapterNumber: 3,
              chapterName: "Matrices and Determinants",
              topics: [
                {
                  id: "MAT12-CH03-T01",
                  topicNumber: 1,
                  topic: "Types and order of matrices",
                  brief:
                    "A matrix is a rectangular arrangement of numbers in rows and columns. Its order is the number of rows multiplied by the number of columns, and types include row, column, square, rectangular, zero, diagonal, and identity matrices.",
                },
                {
                  id: "MAT12-CH03-T02",
                  topicNumber: 2,
                  topic: "Matrix operations",
                  brief:
                    "Matrix operations include addition, subtraction, scalar multiplication, and other defined operations. Addition and subtraction require matrices of the same order.",
                },
                {
                  id: "MAT12-CH03-T03",
                  topicNumber: 3,
                  topic: "Matrix multiplication",
                  brief:
                    "Matrix multiplication is possible when the number of columns in the first matrix equals the number of rows in the second. Each entry of the product is obtained from the corresponding row-column products and their sum.",
                },
                {
                  id: "MAT12-CH03-T04",
                  topicNumber: 4,
                  topic: "Transpose of a matrix",
                  brief:
                    "The transpose of a matrix is formed by interchanging its rows and columns. If A is a matrix, its transpose is denoted by Aᵀ.",
                },
                {
                  id: "MAT12-CH03-T05",
                  topicNumber: 5,
                  topic: "Determinants",
                  brief:
                    "A determinant is a scalar value associated with a square matrix. It helps determine whether a matrix is invertible and is used in solving systems of linear equations.",
                },
                {
                  id: "MAT12-CH03-T06",
                  topicNumber: 6,
                  topic: "Properties of determinants",
                  brief:
                    "Determinant properties describe how a determinant changes when rows or columns are interchanged, multiplied by constants, or combined through elementary operations.",
                },
                {
                  id: "MAT12-CH03-T07",
                  topicNumber: 7,
                  topic: "Minors and cofactors",
                  brief:
                    "The minor of a matrix element is the determinant obtained by deleting its row and column. Its cofactor is the minor multiplied by the sign factor (−1)^(i+j).",
                },
                {
                  id: "MAT12-CH03-T08",
                  topicNumber: 8,
                  topic: "Adjoint of a matrix",
                  brief:
                    "The adjoint of a square matrix is the transpose of its cofactor matrix. It is used to calculate the inverse of a matrix when the determinant is nonzero.",
                },
                {
                  id: "MAT12-CH03-T09",
                  topicNumber: 9,
                  topic: "Inverse of a matrix",
                  brief:
                    "The inverse of a square matrix A is a matrix A⁻¹ satisfying AA⁻¹ = A⁻¹A = I. It exists only when det(A) ≠ 0.",
                },
                {
                  id: "MAT12-CH03-T10",
                  topicNumber: 10,
                  topic: "Solving linear equations using matrices",
                  brief:
                    "A system of linear equations can be expressed in matrix form as AX = B. When A is invertible, the solution is X = A⁻¹B.",
                },
                {
                  id: "MAT12-CH03-T11",
                  topicNumber: 11,
                  topic: "Cramer's rule",
                  brief:
                    "Cramer's rule solves a square system of linear equations using determinants. It gives each variable as a ratio of a modified determinant to the determinant of the coefficient matrix, provided the latter is nonzero.",
                },
                {
                  id: "MAT12-CH03-T12",
                  topicNumber: 12,
                  topic: "Applications of matrices and determinants",
                  brief:
                    "Matrices and determinants are used to solve simultaneous equations, represent transformations, analyze data, and model problems in geometry, science, economics, and engineering.",
                },
              ],
            },
            {
              id: "MAT12-CH04",
              chapterNumber: 4,
              chapterName: "Complex Numbers",
              topics: [
                {
                  id: "MAT12-CH04-T01",
                  topicNumber: 1,
                  topic: "Algebra of complex numbers",
                  brief:
                    "Complex numbers have the form a + bi, where a and b are real numbers and i² = −1. They can be added, subtracted, multiplied, and divided using the rules of complex arithmetic.",
                },
                {
                  id: "MAT12-CH04-T02",
                  topicNumber: 2,
                  topic: "Complex conjugates",
                  brief:
                    "The complex conjugate of a + bi is a − bi. Multiplying a complex number by its conjugate gives a real value, a² + b².",
                },
                {
                  id: "MAT12-CH04-T03",
                  topicNumber: 3,
                  topic: "Modulus and argument",
                  brief:
                    "The modulus of a complex number is its distance from the origin in the complex plane, while its argument is the angle its position vector makes with the positive real axis.",
                },
                {
                  id: "MAT12-CH04-T04",
                  topicNumber: 4,
                  topic: "Argand diagram",
                  brief:
                    "An Argand diagram represents a complex number a + bi as the point (a, b), with the real part on the horizontal axis and the imaginary part on the vertical axis.",
                },
                {
                  id: "MAT12-CH04-T05",
                  topicNumber: 5,
                  topic: "Polar form",
                  brief:
                    "The polar form of a nonzero complex number is z = r(cos θ + i sin θ), where r is its modulus and θ is an argument of the number.",
                },
                {
                  id: "MAT12-CH04-T06",
                  topicNumber: 6,
                  topic: "De Moivre's theorem",
                  brief:
                    "De Moivre's theorem states that [r(cos θ + i sin θ)]ⁿ = rⁿ(cos nθ + i sin nθ) for integer n, and it is useful for calculating powers and roots of complex numbers.",
                },
                {
                  id: "MAT12-CH04-T07",
                  topicNumber: 7,
                  topic: "Powers of complex numbers",
                  brief:
                    "Powers of complex numbers can be calculated using algebraic multiplication or polar form. De Moivre's theorem simplifies powers by raising the modulus and multiplying the argument by the exponent.",
                },
                {
                  id: "MAT12-CH04-T08",
                  topicNumber: 8,
                  topic: "Roots of complex numbers",
                  brief:
                    "The nth roots of a nonzero complex number are obtained by taking the nth root of its modulus and using arguments that differ by multiples of 2π/n. These roots are equally spaced around a circle in the complex plane.",
                },
                {
                  id: "MAT12-CH04-T09",
                  topicNumber: 9,
                  topic: "Geometric representation of complex numbers",
                  brief:
                    "Complex numbers can be represented as points or vectors in a plane. Their geometric representation helps explain modulus, argument, conjugation, and the effects of arithmetic operations.",
                },
              ],
            },
            {
              id: "MAT12-CH05",
              chapterNumber: 5,
              chapterName: "Sequences and Series",
              topics: [
                {
                  id: "MAT12-CH05-T01",
                  topicNumber: 1,
                  topic: "Arithmetic progression",
                  brief:
                    "An arithmetic progression is a sequence in which the difference between consecutive terms is constant. Its nth term is aₙ = a + (n − 1)d, where a is the first term and d is the common difference.",
                },
                {
                  id: "MAT12-CH05-T02",
                  topicNumber: 2,
                  topic: "Geometric progression",
                  brief:
                    "A geometric progression is a sequence in which each term after the first is obtained by multiplying the previous term by a constant ratio. Its nth term is aₙ = arⁿ⁻¹.",
                },
                {
                  id: "MAT12-CH05-T03",
                  topicNumber: 3,
                  topic: "Harmonic progression",
                  brief:
                    "A harmonic progression is a sequence of nonzero terms whose reciprocals form an arithmetic progression.",
                },
                {
                  id: "MAT12-CH05-T04",
                  topicNumber: 4,
                  topic: "Arithmetic and geometric means",
                  brief:
                    "The arithmetic mean of two numbers is their sum divided by two, while their geometric mean is the square root of their product when the product is nonnegative.",
                },
                {
                  id: "MAT12-CH05-T05",
                  topicNumber: 5,
                  topic: "Sum of finite series",
                  brief:
                    "The sum of a finite series is the total of its terms. Common formulas include Sₙ = n/2[2a + (n − 1)d] for an arithmetic progression and Sₙ = a(rⁿ − 1)/(r − 1) for a geometric progression when r ≠ 1.",
                },
                {
                  id: "MAT12-CH05-T06",
                  topicNumber: 6,
                  topic: "Sum of infinite geometric series",
                  brief:
                    "An infinite geometric series has a finite sum when the absolute value of its common ratio is less than 1. Its sum is S = a/(1 − r), where a is the first term.",
                },
                {
                  id: "MAT12-CH05-T07",
                  topicNumber: 7,
                  topic: "Special summation formulas",
                  brief:
                    "Special summation formulas provide shortcuts for adding common sequences, such as the first n natural numbers, the squares of natural numbers, and the cubes of natural numbers.",
                },
                {
                  id: "MAT12-CH05-T08",
                  topicNumber: 8,
                  topic: "Convergence of geometric series",
                  brief:
                    "A geometric series converges to a finite sum when the absolute value of its common ratio is less than 1. If the ratio has absolute value greater than or equal to 1, the infinite series does not converge.",
                },
                {
                  id: "MAT12-CH05-T09",
                  topicNumber: 9,
                  topic: "Applications of sequences and series",
                  brief:
                    "Sequences and series are used to model repeated growth or decline, savings and interest, patterns in numbers, financial calculations, and other situations involving regularly structured terms.",
                },
              ],
            },
            {
              id: "MAT12-CH06",
              chapterNumber: 6,
              chapterName: "Binomial Theorem",
              topics: [
                {
                  id: "MAT12-CH06-T01",
                  topicNumber: 1,
                  topic: "Binomial expansion",
                  brief:
                    "Binomial expansion expresses a power of a sum or difference as a sum of terms. For a nonnegative integer n, (a + b)ⁿ = Σᵣ₌₀ⁿ ⁿCᵣ aⁿ⁻ʳbʳ.",
                },
                {
                  id: "MAT12-CH06-T02",
                  topicNumber: 2,
                  topic: "Binomial coefficients",
                  brief:
                    "Binomial coefficients count the ways to choose r objects from n objects and are written as ⁿCᵣ = n!/[r!(n − r)!]. They determine the coefficients in a binomial expansion.",
                },
                {
                  id: "MAT12-CH06-T03",
                  topicNumber: 3,
                  topic: "General term",
                  brief:
                    "The general term gives any chosen term in a binomial expansion. In (a + b)ⁿ, the term Tᵣ₊₁ is ⁿCᵣaⁿ⁻ʳbʳ.",
                },
                {
                  id: "MAT12-CH06-T04",
                  topicNumber: 4,
                  topic: "Middle terms",
                  brief:
                    "Middle terms are the central terms in a binomial expansion. An expansion with an even number of terms has one middle term, while one with an odd number of terms has two middle terms.",
                },
                {
                  id: "MAT12-CH06-T05",
                  topicNumber: 5,
                  topic: "Independent term",
                  brief:
                    "The independent term, also called the constant term, is the term in an expansion that contains no variable. It can be identified by finding the term whose variable exponent is zero.",
                },
                {
                  id: "MAT12-CH06-T06",
                  topicNumber: 6,
                  topic: "Finding specified coefficients",
                  brief:
                    "Finding a specified coefficient involves identifying the term containing a required power of a variable and evaluating its numerical multiplier using the binomial theorem.",
                },
                {
                  id: "MAT12-CH06-T07",
                  topicNumber: 7,
                  topic: "Properties of binomial coefficients",
                  brief:
                    "Binomial coefficients satisfy useful properties, including symmetry, ⁿCᵣ = ⁿCₙ₋ᵣ, and Pascal's identity, ⁿCᵣ + ⁿCᵣ₋₁ = ⁿ⁺¹Cᵣ.",
                },
                {
                  id: "MAT12-CH06-T08",
                  topicNumber: 8,
                  topic: "Applications of binomial expansion",
                  brief:
                    "Binomial expansion is used to simplify powers of sums and differences, find particular terms and coefficients, calculate constant terms, and solve algebraic problems.",
                },
              ],
            },
          ],
        },
        {
          id: "MAT12-B02",
          branchNumber: 2,
          branchName: "Trigonometry",
          chapters: [
            {
              id: "MAT12-CH07",
              chapterNumber: 7,
              chapterName: "Trigonometric Identities and Equations",
              topics: [
                {
                  id: "MAT12-CH07-T01",
                  topicNumber: 1,
                  topic: "Fundamental trigonometric identities",
                  brief:
                    "Fundamental trigonometric identities are equations that hold for all values in their domains. Important identities include sin²θ + cos²θ = 1, 1 + tan²θ = sec²θ, and 1 + cot²θ = cosec²θ.",
                },
                {
                  id: "MAT12-CH07-T02",
                  topicNumber: 2,
                  topic: "Compound-angle identities",
                  brief:
                    "Compound-angle identities express trigonometric functions of sums or differences of two angles. For example, sin(A + B) = sin A cos B + cos A sin B.",
                },
                {
                  id: "MAT12-CH07-T03",
                  topicNumber: 3,
                  topic: "Multiple-angle identities",
                  brief:
                    "Multiple-angle identities express trigonometric functions of angles such as 3θ or 4θ in terms of functions of θ. They help simplify expressions and solve trigonometric problems.",
                },
                {
                  id: "MAT12-CH07-T04",
                  topicNumber: 4,
                  topic: "Double-angle identities",
                  brief:
                    "Double-angle identities express trigonometric functions of 2θ using functions of θ. Examples include sin 2θ = 2 sin θ cos θ and cos 2θ = cos²θ − sin²θ.",
                },
                {
                  id: "MAT12-CH07-T05",
                  topicNumber: 5,
                  topic: "Transformation formulas",
                  brief:
                    "Transformation formulas convert sums or differences of trigonometric functions into products, or products into sums or differences. They are useful for simplifying expressions and solving equations.",
                },
                {
                  id: "MAT12-CH07-T06",
                  topicNumber: 6,
                  topic: "Trigonometric equations",
                  brief:
                    "Trigonometric equations contain trigonometric functions of unknown angles. They are solved using identities, algebraic methods, and the periodic properties of trigonometric functions.",
                },
                {
                  id: "MAT12-CH07-T07",
                  topicNumber: 7,
                  topic: "General solutions of trigonometric equations",
                  brief:
                    "General solutions describe all angles satisfying a trigonometric equation. They account for periodicity, such as sin θ = sin α giving θ = α + 2nπ or θ = (π − α) + 2nπ, where n is any integer.",
                },
                {
                  id: "MAT12-CH07-T08",
                  topicNumber: 8,
                  topic: "Inverse trigonometric identities",
                  brief:
                    "Inverse trigonometric identities describe relationships between trigonometric functions and their inverses. Their use requires attention to the principal-value ranges of inverse trigonometric functions.",
                },
                {
                  id: "MAT12-CH07-T09",
                  topicNumber: 9,
                  topic: "Simplification of trigonometric expressions",
                  brief:
                    "Simplification of trigonometric expressions uses identities, algebraic manipulation, and equivalent trigonometric forms to rewrite expressions more concisely or establish mathematical equalities.",
                },
              ],
            },
          ],
        },
        {
          id: "MAT12-B03",
          branchNumber: 3,
          branchName: "Analytic Geometry",
          chapters: [
            {
              id: "MAT12-CH08",
              chapterNumber: 8,
              chapterName: "Conic Sections",
              topics: [
                {
                  id: "MAT12-CH08-T01",
                  topicNumber: 1,
                  topic: "Circle",
                  brief:
                    "A circle is the set of all points in a plane that are at a fixed distance, called the radius, from a fixed point called the centre.",
                },
                {
                  id: "MAT12-CH08-T02",
                  topicNumber: 2,
                  topic: "Equation of a circle",
                  brief:
                    "The equation of a circle with centre (h, k) and radius r is (x − h)² + (y − k)² = r². It can also be expressed in general form as x² + y² + Dx + Ey + F = 0.",
                },
                {
                  id: "MAT12-CH08-T03",
                  topicNumber: 3,
                  topic: "Tangent to a circle",
                  brief:
                    "A tangent is a straight line that touches a circle at exactly one point. The tangent at any point on a circle is perpendicular to the radius drawn to that point.",
                },
                {
                  id: "MAT12-CH08-T04",
                  topicNumber: 4,
                  topic: "Normal to a circle",
                  brief:
                    "The normal to a circle at a given point is the line perpendicular to the tangent at that point. It passes through the point of contact and the centre of the circle.",
                },
                {
                  id: "MAT12-CH08-T05",
                  topicNumber: 5,
                  topic: "Parabola",
                  brief:
                    "A parabola is a conic section consisting of points equidistant from a fixed point called the focus and a fixed straight line called the directrix.",
                },
                {
                  id: "MAT12-CH08-T06",
                  topicNumber: 6,
                  topic: "Standard equation of a parabola",
                  brief:
                    "Common standard equations of a parabola with vertex at the origin include y² = 4ax and x² = 4ay, representing parabolas opening horizontally and vertically, respectively.",
                },
                {
                  id: "MAT12-CH08-T07",
                  topicNumber: 7,
                  topic: "Tangent and normal to a parabola",
                  brief:
                    "The tangent to a parabola touches the curve at a point, while the normal passes through that point perpendicular to the tangent. Their equations can be derived using the parabola's standard equation and the point of contact.",
                },
                {
                  id: "MAT12-CH08-T08",
                  topicNumber: 8,
                  topic: "Ellipse",
                  brief:
                    "An ellipse is a closed conic section in which the sum of the distances from any point on the curve to two fixed points, called foci, remains constant.",
                },
                {
                  id: "MAT12-CH08-T09",
                  topicNumber: 9,
                  topic: "Standard equation of an ellipse",
                  brief:
                    "For an ellipse centred at the origin with a horizontal major axis, the standard equation is x²/a² + y²/b² = 1, where a > b > 0.",
                },
                {
                  id: "MAT12-CH08-T10",
                  topicNumber: 10,
                  topic: "Tangent and normal to an ellipse",
                  brief:
                    "The tangent to an ellipse touches the curve at a specified point, while the normal is perpendicular to the tangent there. Their equations are obtained using the ellipse's equation and the coordinates of the point.",
                },
                {
                  id: "MAT12-CH08-T11",
                  topicNumber: 11,
                  topic: "Hyperbola",
                  brief:
                    "A hyperbola is a conic section with two separate branches. The absolute difference between the distances from any point on the curve to two fixed foci is constant.",
                },
                {
                  id: "MAT12-CH08-T12",
                  topicNumber: 12,
                  topic: "Standard equation of a hyperbola",
                  brief:
                    "A hyperbola centred at the origin with a horizontal transverse axis has the standard equation x²/a² − y²/b² = 1, where a and b are positive constants.",
                },
                {
                  id: "MAT12-CH08-T13",
                  topicNumber: 13,
                  topic: "Tangent and normal to a hyperbola",
                  brief:
                    "The tangent to a hyperbola touches the curve at a specified point, and the normal passes through that point at a right angle to the tangent. Both can be determined by differentiating or using the standard equation.",
                },
                {
                  id: "MAT12-CH08-T14",
                  topicNumber: 14,
                  topic: "Eccentricity and foci",
                  brief:
                    "Eccentricity measures the shape of a conic section and is related to the distance of its foci from the centre. A circle has eccentricity 0, an ellipse has eccentricity between 0 and 1, a parabola has eccentricity 1, and a hyperbola has eccentricity greater than 1.",
                },
              ],
            },
            {
              id: "MAT12-CH09",
              chapterNumber: 9,
              chapterName: "Vectors in Three Dimensions",
              topics: [
                {
                  id: "MAT12-CH09-T01",
                  topicNumber: 1,
                  topic: "Three-dimensional coordinate system",
                  brief:
                    "The three-dimensional coordinate system uses three mutually perpendicular axes, x, y, and z, to locate points in space using ordered triples (x, y, z).",
                },
                {
                  id: "MAT12-CH09-T02",
                  topicNumber: 2,
                  topic: "Position vectors",
                  brief:
                    "A position vector specifies the location of a point relative to the origin. For a point P(x, y, z), its position vector is OP = xi + yj + zk.",
                },
                {
                  id: "MAT12-CH09-T03",
                  topicNumber: 3,
                  topic: "Magnitude of a vector",
                  brief:
                    "The magnitude of a three-dimensional vector a = ai + bj + ck is its length, calculated as |a| = √(a² + b² + c²).",
                },
                {
                  id: "MAT12-CH09-T04",
                  topicNumber: 4,
                  topic: "Direction ratios",
                  brief:
                    "Direction ratios are three numbers proportional to the direction components of a line or vector in three-dimensional space. They help describe the line's orientation.",
                },
                {
                  id: "MAT12-CH09-T05",
                  topicNumber: 5,
                  topic: "Direction cosines",
                  brief:
                    "Direction cosines are the cosines of the angles a line makes with the positive x-, y-, and z-axes. If they are l, m, and n, then l² + m² + n² = 1.",
                },
                {
                  id: "MAT12-CH09-T06",
                  topicNumber: 6,
                  topic: "Dot product",
                  brief:
                    "The dot product of two vectors is a scalar calculated by multiplying their corresponding components and adding the results. It is also equal to the product of their magnitudes and the cosine of the angle between them.",
                },
                {
                  id: "MAT12-CH09-T07",
                  topicNumber: 7,
                  topic: "Angle between two vectors",
                  brief:
                    "The angle between two nonzero vectors can be found using their dot product: cos θ = (a · b)/(|a||b|). This relationship is also useful for identifying perpendicular vectors.",
                },
                {
                  id: "MAT12-CH09-T08",
                  topicNumber: 8,
                  topic: "Cross product",
                  brief:
                    "The cross product of two three-dimensional vectors produces a vector perpendicular to both. Its magnitude equals the product of the vectors' magnitudes and the sine of the angle between them.",
                },
                {
                  id: "MAT12-CH09-T09",
                  topicNumber: 9,
                  topic: "Scalar triple product",
                  brief:
                    "The scalar triple product of vectors a, b, and c is a · (b × c). Its absolute value gives the volume of the parallelepiped formed by the vectors, and a value of zero indicates coplanarity.",
                },
                {
                  id: "MAT12-CH09-T10",
                  topicNumber: 10,
                  topic: "Vector equations of lines",
                  brief:
                    "A line in three-dimensional space can be represented by r = a + λb, where a is the position vector of a point on the line, b is a direction vector, and λ is a real parameter.",
                },
                {
                  id: "MAT12-CH09-T11",
                  topicNumber: 11,
                  topic: "Applications of vectors in three dimensions",
                  brief:
                    "Three-dimensional vectors are used to calculate distances, angles, projections, areas, and volumes, and to describe lines, planes, forces, and motion in space.",
                },
              ],
            },
            {
              id: "MAT12-CH10",
              chapterNumber: 10,
              chapterName: "Straight Lines and Planes",
              topics: [
                {
                  id: "MAT12-CH10-T01",
                  topicNumber: 1,
                  topic: "Equation of a straight line in three dimensions",
                  brief:
                    "A straight line in three-dimensional space can be expressed in vector form as r = a + λb or in symmetric form using a point on the line and its direction ratios.",
                },
                {
                  id: "MAT12-CH10-T02",
                  topicNumber: 2,
                  topic: "Direction ratios of a line",
                  brief:
                    "Direction ratios describe the orientation of a line in three-dimensional space. They are proportional to the components of a direction vector and can be used to construct the line's equation.",
                },
                {
                  id: "MAT12-CH10-T03",
                  topicNumber: 3,
                  topic: "Direction cosines of a line",
                  brief:
                    "Direction cosines specify the angles a line makes with the coordinate axes. If the direction cosines are l, m, and n, they satisfy l² + m² + n² = 1.",
                },
                {
                  id: "MAT12-CH10-T04",
                  topicNumber: 4,
                  topic: "Angle between two lines",
                  brief:
                    "The angle between two lines can be calculated from their direction vectors using the dot product. The smaller angle is generally taken as the angle between the lines.",
                },
                {
                  id: "MAT12-CH10-T05",
                  topicNumber: 5,
                  topic: "Shortest distance between skew lines",
                  brief:
                    "Skew lines are nonparallel lines in three-dimensional space that do not intersect. Their shortest distance is the length of the common perpendicular segment joining them.",
                },
                {
                  id: "MAT12-CH10-T06",
                  topicNumber: 6,
                  topic: "Equation of a plane",
                  brief:
                    "A plane in three-dimensional space can be represented by Ax + By + Cz + D = 0, where (A, B, C) is a nonzero normal vector perpendicular to the plane.",
                },
                {
                  id: "MAT12-CH10-T07",
                  topicNumber: 7,
                  topic: "Normal form of a plane",
                  brief:
                    "The normal form of a plane is x cos α + y cos β + z cos γ = p, where α, β, and γ are the angles made by the normal with the coordinate axes and p is the signed distance parameter from the origin.",
                },
                {
                  id: "MAT12-CH10-T08",
                  topicNumber: 8,
                  topic: "Intercept form of a plane",
                  brief:
                    "The intercept form of a plane is x/a + y/b + z/c = 1, where a, b, and c are the nonzero intercepts made by the plane on the coordinate axes.",
                },
                {
                  id: "MAT12-CH10-T09",
                  topicNumber: 9,
                  topic: "Angle between two planes",
                  brief:
                    "The angle between two planes is determined by the angle between their normal vectors. Their dot product can be used to calculate the smaller angle between the planes.",
                },
                {
                  id: "MAT12-CH10-T10",
                  topicNumber: 10,
                  topic: "Angle between a line and a plane",
                  brief:
                    "The angle between a line and a plane is the complement of the angle between the line's direction vector and the plane's normal vector.",
                },
                {
                  id: "MAT12-CH10-T11",
                  topicNumber: 11,
                  topic: "Distance of a point from a plane",
                  brief:
                    "The perpendicular distance from a point (x₁, y₁, z₁) to the plane Ax + By + Cz + D = 0 is |Ax₁ + By₁ + Cz₁ + D| / √(A² + B² + C²).",
                },
                {
                  id: "MAT12-CH10-T12",
                  topicNumber: 12,
                  topic: "Intersection of lines and planes",
                  brief:
                    "The intersection of lines and planes is determined by solving their equations simultaneously. Depending on their directions and positions, they may intersect at a point, lie within the same plane, be parallel, or have no common point.",
                },
              ],
            },
          ],
        },
        {
          id: "MAT12-B04",
          branchNumber: 4,
          branchName: "Calculus",
          chapters: [
            {
              id: "MAT12-CH11",
              chapterNumber: 11,
              chapterName: "Limits and Continuity",
              topics: [
                {
                  id: "MAT12-CH11-T01",
                  topicNumber: 1,
                  topic: "Limits of functions",
                  brief:
                    "The limit of a function describes the value that the function approaches as its input approaches a particular point, even if the function is undefined at that point.",
                },
                {
                  id: "MAT12-CH11-T02",
                  topicNumber: 2,
                  topic: "Standard limits",
                  brief:
                    "Standard limits are commonly used limit formulas that simplify calculations involving algebraic, trigonometric, exponential, and logarithmic functions.",
                },
                {
                  id: "MAT12-CH11-T03",
                  topicNumber: 3,
                  topic: "Limits involving trigonometric functions",
                  brief:
                    "These limits involve trigonometric expressions and often use identities and standard results such as lim(x→0) sin x/x = 1, with angles measured in radians.",
                },
                {
                  id: "MAT12-CH11-T04",
                  topicNumber: 4,
                  topic: "Limits involving exponential functions",
                  brief:
                    "Limits involving exponential functions study the behavior of expressions containing terms such as aˣ and eˣ as the variable approaches a specified value.",
                },
                {
                  id: "MAT12-CH11-T05",
                  topicNumber: 5,
                  topic: "Limits involving logarithmic functions",
                  brief:
                    "These limits examine expressions containing logarithms, often using logarithmic identities and standard results to evaluate their behavior near a given point.",
                },
                {
                  id: "MAT12-CH11-T06",
                  topicNumber: 6,
                  topic: "Continuity at a point",
                  brief:
                    "A function f is continuous at x = a if f(a) is defined, the limit lim(x→a) f(x) exists, and that limit equals f(a).",
                },
                {
                  id: "MAT12-CH11-T07",
                  topicNumber: 7,
                  topic: "Continuity on an interval",
                  brief:
                    "A function is continuous on an interval if it is continuous at every interior point. At an included endpoint, continuity is checked using the appropriate one-sided limit.",
                },
                {
                  id: "MAT12-CH11-T08",
                  topicNumber: 8,
                  topic: "Types of discontinuity",
                  brief:
                    "Discontinuity occurs when a function fails to be continuous at a point. Common types include removable discontinuity, jump discontinuity, and infinite discontinuity.",
                },
              ],
            },
            {
              id: "MAT12-CH12",
              chapterNumber: 12,
              chapterName: "Differentiation",
              topics: [
                {
                  id: "MAT12-CH12-T01",
                  topicNumber: 1,
                  topic: "Derivative from first principles",
                  brief:
                    "The derivative from first principles is defined as f′(x) = lim(h→0) [f(x+h) − f(x)]/h, provided the limit exists. It represents the instantaneous rate of change of a function.",
                },
                {
                  id: "MAT12-CH12-T02",
                  topicNumber: 2,
                  topic: "Rules of differentiation",
                  brief:
                    "Differentiation rules provide efficient methods for finding derivatives, including the constant rule, power rule, sum rule, constant multiple rule, product rule, and quotient rule.",
                },
                {
                  id: "MAT12-CH12-T03",
                  topicNumber: 3,
                  topic: "Product rule",
                  brief:
                    "The product rule is used to differentiate the product of two differentiable functions. If y = uv, then dy/dx = u(dv/dx) + v(du/dx).",
                },
                {
                  id: "MAT12-CH12-T04",
                  topicNumber: 4,
                  topic: "Quotient rule",
                  brief:
                    "The quotient rule differentiates one function divided by another. If y = u/v, where v ≠ 0, then dy/dx = [v(du/dx) − u(dv/dx)]/v².",
                },
                {
                  id: "MAT12-CH12-T05",
                  topicNumber: 5,
                  topic: "Chain rule",
                  brief:
                    "The chain rule differentiates composite functions. If y = f(g(x)), then dy/dx = f′(g(x))g′(x), meaning the derivative of the outer function is multiplied by the derivative of the inner function.",
                },
                {
                  id: "MAT12-CH12-T06",
                  topicNumber: 6,
                  topic: "Derivatives of trigonometric functions",
                  brief:
                    "These derivatives describe the rates of change of trigonometric functions. For example, d(sin x)/dx = cos x and d(cos x)/dx = −sin x when x is measured in radians.",
                },
                {
                  id: "MAT12-CH12-T07",
                  topicNumber: 7,
                  topic: "Derivatives of inverse trigonometric functions",
                  brief:
                    "Inverse trigonometric derivatives are used to differentiate functions such as sin⁻¹x, cos⁻¹x, and tan⁻¹x. For example, d(sin⁻¹x)/dx = 1/√(1 − x²) for |x| < 1.",
                },
                {
                  id: "MAT12-CH12-T08",
                  topicNumber: 8,
                  topic: "Derivatives of exponential functions",
                  brief:
                    "Exponential functions have derivatives related to their original values. For example, d(eˣ)/dx = eˣ and d(aˣ)/dx = aˣ ln a for a > 0.",
                },
                {
                  id: "MAT12-CH12-T09",
                  topicNumber: 9,
                  topic: "Derivatives of logarithmic functions",
                  brief:
                    "Logarithmic derivatives are used to differentiate logarithmic expressions. For example, d(ln x)/dx = 1/x for x > 0.",
                },
                {
                  id: "MAT12-CH12-T10",
                  topicNumber: 10,
                  topic: "Implicit differentiation",
                  brief:
                    "Implicit differentiation finds derivatives when x and y are related by an equation rather than y being explicitly isolated. Both sides are differentiated with respect to x, applying the chain rule to terms involving y.",
                },
                {
                  id: "MAT12-CH12-T11",
                  topicNumber: 11,
                  topic: "Parametric differentiation",
                  brief:
                    "Parametric differentiation finds derivatives when x and y are expressed in terms of a parameter t. If dx/dt ≠ 0, then dy/dx = (dy/dt)/(dx/dt).",
                },
                {
                  id: "MAT12-CH12-T12",
                  topicNumber: 12,
                  topic: "Logarithmic differentiation",
                  brief:
                    "Logarithmic differentiation uses logarithms to simplify differentiation of complicated products, quotients, and variable powers. Taking logarithms of both sides often converts products into sums before differentiating.",
                },
                {
                  id: "MAT12-CH12-T13",
                  topicNumber: 13,
                  topic: "Higher-order derivatives",
                  brief:
                    "Higher-order derivatives are obtained by differentiating a function's derivative repeatedly. The second derivative measures how the first derivative changes and helps analyze curvature and acceleration.",
                },
                {
                  id: "MAT12-CH12-T14",
                  topicNumber: 14,
                  topic: "Differentiation of special functions",
                  brief:
                    "This topic applies differentiation techniques to particular functions or expressions that require specialized methods, such as piecewise-defined functions, absolute-value functions, or combinations of standard functions.",
                },
              ],
            },
            {
              id: "MAT12-CH13",
              chapterNumber: 13,
              chapterName: "Applications of Derivatives",
              topics: [
                {
                  id: "MAT12-CH13-T01",
                  topicNumber: 1,
                  topic: "Rate of change",
                  brief:
                    "The derivative measures the instantaneous rate at which one quantity changes with respect to another. For example, the derivative of displacement with respect to time gives instantaneous velocity.",
                },
                {
                  id: "MAT12-CH13-T02",
                  topicNumber: 2,
                  topic: "Tangents to curves",
                  brief:
                    "A tangent is a straight line that touches a curve at a point and has the same instantaneous slope as the curve there. At x = a, its slope is f′(a), when the derivative exists.",
                },
                {
                  id: "MAT12-CH13-T03",
                  topicNumber: 3,
                  topic: "Normals to curves",
                  brief:
                    "A normal is a line perpendicular to the tangent at a point on a curve. If the tangent has a finite nonzero slope m, the normal has slope −1/m.",
                },
                {
                  id: "MAT12-CH13-T04",
                  topicNumber: 4,
                  topic: "Increasing functions",
                  brief:
                    "A function is increasing on an interval if its values rise as the input increases. If f′(x) > 0 throughout an interval, the function is strictly increasing there.",
                },
                {
                  id: "MAT12-CH13-T05",
                  topicNumber: 5,
                  topic: "Decreasing functions",
                  brief:
                    "A function is decreasing on an interval if its values fall as the input increases. If f′(x) < 0 throughout an interval, the function is strictly decreasing there.",
                },
                {
                  id: "MAT12-CH13-T06",
                  topicNumber: 6,
                  topic: "Stationary points",
                  brief:
                    "A stationary point is a point on a differentiable curve where the first derivative is zero. Such points may correspond to local maxima, local minima, or stationary points of inflection.",
                },
                {
                  id: "MAT12-CH13-T07",
                  topicNumber: 7,
                  topic: "Local maxima",
                  brief:
                    "A function has a local maximum at a point if its value there is at least as large as the values at nearby points. Derivatives help identify and classify possible local maxima.",
                },
                {
                  id: "MAT12-CH13-T08",
                  topicNumber: 8,
                  topic: "Local minima",
                  brief:
                    "A function has a local minimum at a point if its value there is at most as small as the values at nearby points. Derivative tests can determine whether a critical point is a local minimum.",
                },
                {
                  id: "MAT12-CH13-T09",
                  topicNumber: 9,
                  topic: "First derivative test",
                  brief:
                    "The first derivative test classifies a critical point by examining how the derivative changes sign around it. A change from positive to negative indicates a local maximum, while a change from negative to positive indicates a local minimum.",
                },
                {
                  id: "MAT12-CH13-T10",
                  topicNumber: 10,
                  topic: "Second derivative test",
                  brief:
                    "The second derivative test classifies a stationary point x = a when f′(a) = 0. If f″(a) > 0, there is a local minimum; if f″(a) < 0, there is a local maximum. If f″(a) = 0, the test is inconclusive.",
                },
                {
                  id: "MAT12-CH13-T11",
                  topicNumber: 11,
                  topic: "Optimization problems",
                  brief:
                    "Optimization uses derivatives to find maximum or minimum values of quantities such as area, volume, cost, or profit. The method involves forming a function, finding critical points, and checking which values satisfy the problem's constraints.",
                },
                {
                  id: "MAT12-CH13-T12",
                  topicNumber: 12,
                  topic: "Approximation using differentials",
                  brief:
                    "Differentials estimate small changes in a function. For y = f(x), the differential dy = f′(x)dx approximates the actual change Δy when dx is small.",
                },
              ],
            },
            {
              id: "MAT12-CH14",
              chapterNumber: 14,
              chapterName: "Integration",
              topics: [
                {
                  id: "MAT12-CH14-T01",
                  topicNumber: 1,
                  topic: "Antiderivatives",
                  brief:
                    "An antiderivative of a function f(x) is a function F(x) whose derivative equals f(x). Thus, F′(x) = f(x), and antiderivatives differ by a constant on an interval.",
                },
                {
                  id: "MAT12-CH14-T02",
                  topicNumber: 2,
                  topic: "Indefinite integrals",
                  brief:
                    "An indefinite integral represents the family of antiderivatives of a function. It is written as ∫f(x) dx = F(x) + C, where F′(x) = f(x) and C is an arbitrary constant.",
                },
                {
                  id: "MAT12-CH14-T03",
                  topicNumber: 3,
                  topic: "Standard integration formulas",
                  brief:
                    "Standard integration formulas provide known antiderivatives of common functions, such as ∫xⁿ dx = xⁿ⁺¹/(n+1) + C for n ≠ −1 and ∫(1/x) dx = ln|x| + C.",
                },
                {
                  id: "MAT12-CH14-T04",
                  topicNumber: 4,
                  topic: "Integration by substitution",
                  brief:
                    "Integration by substitution simplifies an integral by replacing an expression with a new variable. It reverses the chain rule and is especially useful when an integrand contains a function and its derivative.",
                },
                {
                  id: "MAT12-CH14-T05",
                  topicNumber: 5,
                  topic: "Integration by parts",
                  brief:
                    "Integration by parts is based on the product rule and is given by ∫u dv = uv − ∫v du. It is useful for integrating products of functions.",
                },
                {
                  id: "MAT12-CH14-T06",
                  topicNumber: 6,
                  topic: "Integration using partial fractions",
                  brief:
                    "Partial fraction integration decomposes a rational function into simpler fractions that can be integrated separately. It is generally applied after ensuring the rational function is proper, using polynomial division if necessary.",
                },
                {
                  id: "MAT12-CH14-T07",
                  topicNumber: 7,
                  topic: "Integration of trigonometric functions",
                  brief:
                    "This topic involves integrating powers and products of trigonometric functions using standard formulas, identities, and substitutions to simplify the integrand.",
                },
                {
                  id: "MAT12-CH14-T08",
                  topicNumber: 8,
                  topic: "Integration of rational functions",
                  brief:
                    "A rational function is a ratio of polynomials. Its integration may involve polynomial division, factorization of the denominator, partial fractions, and standard logarithmic or inverse trigonometric formulas.",
                },
                {
                  id: "MAT12-CH14-T09",
                  topicNumber: 9,
                  topic: "Definite integrals",
                  brief:
                    "A definite integral ∫ₐᵇ f(x) dx represents the net accumulated value of a function over the interval [a, b]. It is evaluated using an antiderivative F as F(b) − F(a) when the fundamental theorem applies.",
                },
                {
                  id: "MAT12-CH14-T10",
                  topicNumber: 10,
                  topic: "Properties of definite integrals",
                  brief:
                    "Properties of definite integrals include reversing the limits, splitting an interval, and using linearity. These rules simplify calculations and help evaluate integrals using symmetry and substitutions.",
                },
                {
                  id: "MAT12-CH14-T11",
                  topicNumber: 11,
                  topic: "Fundamental theorem of calculus",
                  brief:
                    "The fundamental theorem of calculus connects differentiation and integration. It states, under suitable conditions, that differentiating an accumulated integral recovers the integrand and that definite integrals can be evaluated using antiderivatives.",
                },
              ],
            },
            {
              id: "MAT12-CH15",
              chapterNumber: 15,
              chapterName: "Applications of Integration",
              topics: [
                {
                  id: "MAT12-CH15-T01",
                  topicNumber: 1,
                  topic: "Area under a curve",
                  brief:
                    "Integration can calculate the area between a curve and the x-axis over an interval. When the function is nonnegative, the area is ∫ₐᵇ f(x) dx; when it changes sign, the geometric area must account for each region separately.",
                },
                {
                  id: "MAT12-CH15-T02",
                  topicNumber: 2,
                  topic: "Area between two curves",
                  brief:
                    "The area between two curves over an interval is found by integrating the difference between the upper and lower functions: A = ∫ₐᵇ [upper function − lower function] dx, provided their order does not change.",
                },
                {
                  id: "MAT12-CH15-T03",
                  topicNumber: 3,
                  topic: "Area bounded by curves and coordinate axes",
                  brief:
                    "Integration determines the area of a region enclosed by one or more curves and the coordinate axes. The limits are found from intersection points, and the appropriate function is integrated over each region.",
                },
                {
                  id: "MAT12-CH15-T04",
                  topicNumber: 4,
                  topic: "Definite integral as an area",
                  brief:
                    "A definite integral represents signed area: regions above the x-axis contribute positively, while regions below it contribute negatively. Total geometric area is calculated by adding the absolute areas of the separate regions.",
                },
                {
                  id: "MAT12-CH15-T05",
                  topicNumber: 5,
                  topic: "Applications of integration to geometric problems",
                  brief:
                    "Integration is used to calculate geometric quantities such as areas of irregular regions and areas enclosed by curves. Choosing suitable limits and expressing the region through functions are key steps.",
                },
              ],
            },
            {
              id: "MAT12-CH16",
              chapterNumber: 16,
              chapterName: "Differential Equations",
              topics: [
                {
                  id: "MAT12-CH16-T01",
                  topicNumber: 1,
                  topic: "Concept of a differential equation",
                  brief:
                    "A differential equation is an equation involving an unknown function and one or more of its derivatives. It models relationships involving changing quantities in mathematics, physics, and other sciences.",
                },
                {
                  id: "MAT12-CH16-T02",
                  topicNumber: 2,
                  topic: "Order of a differential equation",
                  brief:
                    "The order of a differential equation is the order of the highest derivative present in the equation. For example, an equation containing a second derivative but no higher derivatives is second order.",
                },
                {
                  id: "MAT12-CH16-T03",
                  topicNumber: 3,
                  topic: "Degree of a differential equation",
                  brief:
                    "The degree of a differential equation is the power of its highest-order derivative after the equation has been expressed as a polynomial in derivatives, provided the equation is free from radicals and fractions involving derivatives.",
                },
                {
                  id: "MAT12-CH16-T04",
                  topicNumber: 4,
                  topic: "Formation of differential equations",
                  brief:
                    "Formation of a differential equation involves eliminating arbitrary constants or parameters from a family of functions by differentiating and combining the resulting equations.",
                },
                {
                  id: "MAT12-CH16-T05",
                  topicNumber: 5,
                  topic: "General and particular solutions",
                  brief:
                    "A general solution contains arbitrary constants and represents a family of solutions to a differential equation. A particular solution is obtained by assigning values to those constants using specified initial or boundary conditions.",
                },
                {
                  id: "MAT12-CH16-T06",
                  topicNumber: 6,
                  topic: "Differential equations with separable variables",
                  brief:
                    "A separable differential equation can be rearranged so that expressions involving one variable appear on one side and expressions involving the other variable appear on the opposite side. Integrating both sides gives the solution.",
                },
                {
                  id: "MAT12-CH16-T07",
                  topicNumber: 7,
                  topic: "First-order differential equations",
                  brief:
                    "A first-order differential equation contains derivatives only up to the first order. Common methods for solving such equations include separation of variables and other techniques appropriate to the equation's form.",
                },
                {
                  id: "MAT12-CH16-T08",
                  topicNumber: 8,
                  topic: "Applications of differential equations",
                  brief:
                    "Differential equations model changing systems such as population growth, radioactive decay, cooling, motion, and fluid flow. Their solutions describe how a quantity evolves under specified conditions.",
                },
              ],
            },
          ],
        },
        {
          id: "MAT12-B05",
          branchNumber: 5,
          branchName: "Statistics and Probability",
          chapters: [
            {
              id: "MAT12-CH17",
              chapterNumber: 17,
              chapterName: "Probability",
              topics: [
                {
                  id: "MAT12-CH17-T01",
                  topicNumber: 1,
                  topic: "Random experiments",
                  brief:
                    "A random experiment is a process that produces one outcome from several possible outcomes, where the exact result cannot be predicted with certainty beforehand. Examples include tossing a coin, rolling a die, and drawing a card.",
                },
                {
                  id: "MAT12-CH17-T02",
                  topicNumber: 2,
                  topic: "Sample spaces and events",
                  brief:
                    "A sample space is the set of all possible outcomes of a random experiment, while an event is any subset of the sample space. Events may be simple, compound, certain, or impossible.",
                },
                {
                  id: "MAT12-CH17-T03",
                  topicNumber: 3,
                  topic: "Addition theorem of probability",
                  brief:
                    "The addition theorem calculates the probability that at least one of two events occurs. For events A and B, P(A ∪ B) = P(A) + P(B) − P(A ∩ B). If the events are mutually exclusive, their intersection has probability zero.",
                },
                {
                  id: "MAT12-CH17-T04",
                  topicNumber: 4,
                  topic: "Multiplication theorem of probability",
                  brief:
                    "The multiplication theorem calculates the probability that two events occur together. For events A and B, P(A ∩ B) = P(A)P(B|A), provided the conditional probability is defined.",
                },
                {
                  id: "MAT12-CH17-T05",
                  topicNumber: 5,
                  topic: "Independent events",
                  brief:
                    "Two events are independent if the occurrence of one does not change the probability of the other. For independent events A and B, P(A ∩ B) = P(A)P(B).",
                },
                {
                  id: "MAT12-CH17-T06",
                  topicNumber: 6,
                  topic: "Conditional probability",
                  brief:
                    "Conditional probability measures the probability of an event occurring when another event is already known to have occurred. For events A and B with P(B) > 0, P(A|B) = P(A ∩ B)/P(B).",
                },
                {
                  id: "MAT12-CH17-T07",
                  topicNumber: 7,
                  topic: "Bayes' theorem",
                  brief:
                    "Bayes' theorem calculates the probability of an event given new evidence by combining prior probabilities with conditional probabilities. It is useful for updating probabilities when additional information becomes available.",
                },
                {
                  id: "MAT12-CH17-T08",
                  topicNumber: 8,
                  topic: "Random variables",
                  brief:
                    "A random variable assigns a numerical value to each outcome of a random experiment. Random variables may be discrete, taking countable values, or continuous, taking values over a range.",
                },
                {
                  id: "MAT12-CH17-T09",
                  topicNumber: 9,
                  topic: "Probability distributions",
                  brief:
                    "A probability distribution describes the possible values of a random variable and their probabilities. For a discrete random variable, the probabilities are nonnegative and sum to one.",
                },
                {
                  id: "MAT12-CH17-T10",
                  topicNumber: 10,
                  topic: "Mathematical expectation",
                  brief:
                    "Mathematical expectation is the probability-weighted average of the possible values of a random variable. For a discrete random variable X, E(X) = Σ xP(X = x), provided the expectation exists.",
                },
                {
                  id: "MAT12-CH17-T11",
                  topicNumber: 11,
                  topic: "Mean and variance of a random variable",
                  brief:
                    "The mean of a random variable represents its expected value, while variance measures how widely its values are spread around the mean. For a random variable X, Var(X) = E(X²) − [E(X)]².",
                },
              ],
            },
            {
              id: "MAT12-CH18",
              chapterNumber: 18,
              chapterName: "Statistics",
              topics: [
                {
                  id: "MAT12-CH18-T01",
                  topicNumber: 1,
                  topic: "Measures of central tendency",
                  brief:
                    "Measures of central tendency describe the central or typical value of a dataset. The main measures are the arithmetic mean, median, and mode.",
                },
                {
                  id: "MAT12-CH18-T02",
                  topicNumber: 2,
                  topic: "Arithmetic mean",
                  brief:
                    "The arithmetic mean is calculated by dividing the sum of all observations by the number of observations. For ungrouped data, mean = Σx/n; for frequency data, mean = Σfx/Σf.",
                },
                {
                  id: "MAT12-CH18-T03",
                  topicNumber: 3,
                  topic: "Median and mode",
                  brief:
                    "The median is the middle value when observations are arranged in order, while the mode is the value that occurs most frequently. These measures help describe the centre of a dataset in different ways.",
                },
                {
                  id: "MAT12-CH18-T04",
                  topicNumber: 4,
                  topic: "Measures of dispersion",
                  brief:
                    "Measures of dispersion describe how spread out data values are. Common measures include the range, quartile deviation, mean deviation, variance, and standard deviation.",
                },
                {
                  id: "MAT12-CH18-T05",
                  topicNumber: 5,
                  topic: "Variance",
                  brief:
                    "Variance measures the average squared deviation of observations from their mean. Population variance is σ² = Σ(x − μ)²/N, while sample variance commonly uses the denominator n − 1.",
                },
                {
                  id: "MAT12-CH18-T06",
                  topicNumber: 6,
                  topic: "Standard deviation",
                  brief:
                    "Standard deviation is the positive square root of variance and measures the typical spread of data values around the mean. It is expressed in the same units as the original data.",
                },
                {
                  id: "MAT12-CH18-T07",
                  topicNumber: 7,
                  topic: "Coefficient of variation",
                  brief:
                    "The coefficient of variation measures relative variability by comparing standard deviation with the mean. It is commonly calculated as CV = (standard deviation/mean) × 100% when the mean is nonzero and meaningful.",
                },
                {
                  id: "MAT12-CH18-T08",
                  topicNumber: 8,
                  topic: "Correlation",
                  brief:
                    "Correlation describes the strength and direction of association between two variables. It may be positive, negative, or approximately zero, but correlation alone does not establish that one variable causes changes in the other.",
                },
                {
                  id: "MAT12-CH18-T09",
                  topicNumber: 9,
                  topic: "Karl Pearson's correlation coefficient",
                  brief:
                    "Karl Pearson's correlation coefficient measures the strength and direction of a linear relationship between two quantitative variables. Its value ranges from −1 to +1, with values near either extreme indicating a strong linear relationship.",
                },
                {
                  id: "MAT12-CH18-T10",
                  topicNumber: 10,
                  topic: "Rank correlation",
                  brief:
                    "Rank correlation measures the association between variables using the ranks of their observations rather than their original values. Spearman's rank correlation coefficient is a common method for measuring rank-based relationships.",
                },
                {
                  id: "MAT12-CH18-T11",
                  topicNumber: 11,
                  topic: "Regression",
                  brief:
                    "Regression is a statistical method used to describe the relationship between variables and estimate or predict the value of one variable from another. The variable being predicted is commonly called the dependent variable.",
                },
                {
                  id: "MAT12-CH18-T12",
                  topicNumber: 12,
                  topic: "Regression lines",
                  brief:
                    "Regression lines represent linear relationships used to estimate one variable from another. For two variables, the regression line of Y on X predicts Y from X, while the line of X on Y predicts X from Y.",
                },
                {
                  id: "MAT12-CH18-T13",
                  topicNumber: 13,
                  topic: "Interpretation of statistical relationships",
                  brief:
                    "Interpreting statistical relationships involves examining the direction, strength, and form of association between variables. Conclusions should consider the data, possible outliers, context, and the distinction between correlation and causation.",
                },
              ],
            },
          ],
        },
        {
          id: "MAT12-B06",
          branchNumber: 6,
          branchName: "Computational and Applied Mathematics",
          chapters: [
            {
              id: "MAT12-CH19",
              chapterNumber: 19,
              chapterName: "Numerical Methods",
              topics: [
                {
                  id: "MAT12-CH19-T01",
                  topicNumber: 1,
                  topic: "Approximation and errors",
                  brief:
                    "Approximation involves finding a value close to the exact value when an exact solution is difficult or unnecessary. Errors measure the difference between the approximate value and the true or accepted value.",
                },
                {
                  id: "MAT12-CH19-T02",
                  topicNumber: 2,
                  topic: "Absolute error",
                  brief:
                    "Absolute error is the magnitude of the difference between an approximate value and the true or accepted value. It is calculated as |true value − approximate value|.",
                },
                {
                  id: "MAT12-CH19-T03",
                  topicNumber: 3,
                  topic: "Relative error",
                  brief:
                    "Relative error compares the absolute error with the magnitude of the true or accepted value. It is calculated as absolute error divided by the absolute value of the true value, provided the true value is nonzero.",
                },
                {
                  id: "MAT12-CH19-T04",
                  topicNumber: 4,
                  topic: "Percentage error",
                  brief:
                    "Percentage error expresses relative error as a percentage. It is calculated by multiplying the relative error by 100% when the true value is nonzero.",
                },
                {
                  id: "MAT12-CH19-T05",
                  topicNumber: 5,
                  topic: "Numerical solution of equations",
                  brief:
                    "Numerical methods approximate the roots of equations when exact algebraic solutions are difficult to obtain. These methods generate successive estimates that can approach a solution within a specified tolerance.",
                },
                {
                  id: "MAT12-CH19-T06",
                  topicNumber: 6,
                  topic: "Bisection method",
                  brief:
                    "The bisection method finds an approximate root of a continuous function by repeatedly halving an interval whose endpoints have function values with opposite signs. Each step retains the half-interval containing a root.",
                },
                {
                  id: "MAT12-CH19-T07",
                  topicNumber: 7,
                  topic: "Newton-Raphson method",
                  brief:
                    "The Newton-Raphson method approximates a root using the iteration xₙ₊₁ = xₙ − f(xₙ)/f′(xₙ), provided the derivative is nonzero at the current estimate. Its success depends on the initial guess and the behavior of the function.",
                },
                {
                  id: "MAT12-CH19-T08",
                  topicNumber: 8,
                  topic: "Numerical differentiation",
                  brief:
                    "Numerical differentiation estimates derivatives using function values at nearby points. Finite-difference formulas, such as forward, backward, and central differences, are useful when an analytical derivative is unavailable or difficult to calculate.",
                },
                {
                  id: "MAT12-CH19-T09",
                  topicNumber: 9,
                  topic: "Numerical integration",
                  brief:
                    "Numerical integration estimates a definite integral using numerical formulas such as the trapezoidal rule and Simpson's rule. It is useful when an exact antiderivative is difficult to find or only sampled data are available.",
                },
                {
                  id: "MAT12-CH19-T10",
                  topicNumber: 10,
                  topic: "Applications of numerical methods",
                  brief:
                    "Numerical methods are used to approximate solutions to mathematical problems in science, engineering, economics, and computing. Applications include solving equations, estimating derivatives and integrals, and analyzing data.",
                },
              ],
            },
            {
              id: "MAT12-CH20",
              chapterNumber: 20,
              chapterName: "Linear Programming",
              topics: [
                {
                  id: "MAT12-CH20-T01",
                  topicNumber: 1,
                  topic: "Linear programming problems",
                  brief:
                    "A linear programming problem involves maximizing or minimizing a linear objective function subject to linear constraints. It is commonly used to allocate limited resources efficiently.",
                },
                {
                  id: "MAT12-CH20-T02",
                  topicNumber: 2,
                  topic: "Decision variables",
                  brief:
                    "Decision variables represent the unknown quantities to be determined in a linear programming problem. Their values describe choices such as production quantities, resource allocations, or activity levels.",
                },
                {
                  id: "MAT12-CH20-T03",
                  topicNumber: 3,
                  topic: "Objective function",
                  brief:
                    "The objective function is the linear expression representing the quantity to be maximized or minimized, such as profit, revenue, cost, or production time.",
                },
                {
                  id: "MAT12-CH20-T04",
                  topicNumber: 4,
                  topic: "Constraints",
                  brief:
                    "Constraints are linear equations or inequalities that represent the limitations and requirements of a problem, such as available materials, labour hours, budgets, or production capacity.",
                },
                {
                  id: "MAT12-CH20-T05",
                  topicNumber: 5,
                  topic: "Non-negativity restrictions",
                  brief:
                    "Non-negativity restrictions require decision variables to be zero or positive, usually because they represent quantities such as production levels or resource usage. For two variables, these restrictions are x ≥ 0 and y ≥ 0.",
                },
                {
                  id: "MAT12-CH20-T06",
                  topicNumber: 6,
                  topic: "Graphical representation of constraints",
                  brief:
                    "Graphical representation converts each linear constraint into a boundary line and identifies the half-plane satisfying the inequality. The overlapping regions show the values that satisfy all constraints.",
                },
                {
                  id: "MAT12-CH20-T07",
                  topicNumber: 7,
                  topic: "Feasible region",
                  brief:
                    "The feasible region is the set of all points satisfying every constraint, including non-negativity restrictions. In a two-variable linear programming problem, it is represented by the common region on a coordinate graph.",
                },
                {
                  id: "MAT12-CH20-T08",
                  topicNumber: 8,
                  topic: "Corner-point method",
                  brief:
                    "The corner-point method evaluates the objective function at the vertices of the feasible region. When an optimum exists for a standard linear programming problem with a nonempty bounded feasible region, at least one optimal solution occurs at a corner point.",
                },
                {
                  id: "MAT12-CH20-T09",
                  topicNumber: 9,
                  topic: "Maximization problems",
                  brief:
                    "A maximization problem seeks the largest possible value of a linear objective function while satisfying all constraints. Examples include maximizing profit, revenue, or output with limited resources.",
                },
                {
                  id: "MAT12-CH20-T10",
                  topicNumber: 10,
                  topic: "Minimization problems",
                  brief:
                    "A minimization problem seeks the smallest possible value of a linear objective function while meeting all constraints. Examples include minimizing production costs, transportation expenses, or resource usage.",
                },
                {
                  id: "MAT12-CH20-T11",
                  topicNumber: 11,
                  topic: "Applications of linear programming",
                  brief:
                    "Linear programming is applied to production planning, transportation, scheduling, resource allocation, diet planning, and financial decisions where a linear objective must be optimized under limited resources.",
                },
              ],
            },
          ],
        },
      ],
    },
  },
};
