var ptx_lunr_search_style = "textbook";
var ptx_lunr_docs = [
{
  "id": "front-colophon",
  "level": "1",
  "url": "front-colophon.html",
  "type": "Colophon",
  "number": "",
  "title": "Colophon",
  "body": "  1st Edition   https:\/\/math-blox.com    "
},
{
  "id": "preface",
  "level": "1",
  "url": "preface.html",
  "type": "Preface",
  "number": "",
  "title": "Preface",
  "body": " This interactive online text is intended to be used to learn the introductory concepts of ordinary differential equations. The book is designed for students who have completed single-variable calculus and is suitable for a one semester course in differential equations. The book is written in a straightforward, readable style and has a large number of worked examples and exercises.   "
},
{
  "id": "main-5-3-3",
  "level": "1",
  "url": "main-5-3-3.html",
  "type": "Section",
  "number": "1.1",
  "title": "An Analogy",
  "body": "An Analogy  When you're learning something new, it's often helpful to connect it to concepts you already know. To grasp what a differential equation is, let's first compare it to standard equations that might feel more familiar. Consider the following three equations, where we aim to solve for :       All three are equations with the same goal—finding the unknown . However, only the third equation is a differential equation because it contains a derivative.  Now, let's try solving for in each case.             In the first equation, we found that is a number, and in the second, it's a function of . But in the third equation, how do we solve for when there is a derivative attached to it? This is exactly the kind of question that differential equations aim to answer.  We'll dive deeper into solving these types of equations soon. For now, there's still plenty more to learn about the basics, so let's keep going!  Check your Understanding   Differential equations differ from standard equations in that they have     a solution    Incorrect. While this statement is generally true, it is not what makes it different from any other equation.      a variable    Incorrect. Any equation could contain a variable.      an unknown    Incorrect. Most equations contain an unknown.      a derivative    Correct! If an equation contains a derivative, it is a differential equation.      Which of the following best describes a differential equation?     An equation involving only algebraic expressions.          An equation involving functions and their derivatives.          An equation involving trigonometric functions.          An equation that changes over time.          What distinguishes a differential equation from a standard equation?     It contains an unknown variable.   Incorrect. Both standard and differential equations contain unknown variables.     It contains a derivative.   Correct! A differential equation contains one or more derivatives, which differentiates it from a standard equation.     It contains a variable.   Incorrect. Any equation could contain a variable.     "
},
{
  "id": "c1-s1-ss1-i1",
  "level": "2",
  "url": "main-5-3-3.html#c1-s1-ss1-i1",
  "type": "Reading Question",
  "number": "1.1.1",
  "title": "<em class=\"emphasis\">Differential equations differ from standard equations in that they have <span class=\"fillin underline\" role=\"img\" aria-label=\"5-character blank\" style=\"width: 2.272727272727273em;\" \/><\/em>.",
  "body": " Differential equations differ from standard equations in that they have     a solution    Incorrect. While this statement is generally true, it is not what makes it different from any other equation.      a variable    Incorrect. Any equation could contain a variable.      an unknown    Incorrect. Most equations contain an unknown.      a derivative    Correct! If an equation contains a derivative, it is a differential equation.    "
},
{
  "id": "c1-s1-ss1-i2",
  "level": "2",
  "url": "main-5-3-3.html#c1-s1-ss1-i2",
  "type": "Reading Question",
  "number": "1.1.2",
  "title": "<em class=\"emphasis\">Which of the following best describes a differential equation?<\/em>",
  "body": " Which of the following best describes a differential equation?     An equation involving only algebraic expressions.          An equation involving functions and their derivatives.          An equation involving trigonometric functions.          An equation that changes over time.        "
},
{
  "id": "c1-s1-ss1-i3",
  "level": "2",
  "url": "main-5-3-3.html#c1-s1-ss1-i3",
  "type": "Reading Question",
  "number": "1.1.3",
  "title": "<em class=\"emphasis\">What distinguishes a differential equation from a standard equation?<\/em>",
  "body": " What distinguishes a differential equation from a standard equation?     It contains an unknown variable.   Incorrect. Both standard and differential equations contain unknown variables.     It contains a derivative.   Correct! A differential equation contains one or more derivatives, which differentiates it from a standard equation.     It contains a variable.   Incorrect. Any equation could contain a variable.   "
},
{
  "id": "main-5-3-4",
  "level": "1",
  "url": "main-5-3-4.html",
  "type": "Section",
  "number": "1.2",
  "title": "Definition",
  "body": "Definition  Here is the formal definition of a differential equation.   Differential Equation   A differential equation (DE) is an equation that involves one or more derivatives of an unknown function. If the function depends on a single variable, the equation is an ordinary differential equation (ODE) . Otherwise, it is called a partial differential equation (PDE) .     Convention: DE means ODE  Since this text focuses exclusively on ordinary differential equations, any use of DE will imply ODE .  According to the definition, a differential equation must include at least one derivative (e.g., , ) and an equality sign (\"=\"). This distinction helps us identify the following expressions as differential equations: In contrast, the following are not differential equations because they either lack a derivative or an equality sign:   Derivative Notation  We will use either prime notation or Leibniz notation to denote derivatives. For higher-order derivatives, the following conventions apply:     Derivative Order     1  2  3  4   n    Prime          Leibniz           Be careful not to confuse with raised to the power of 7!    Check your Understanding   An equation that contains an \"=\" sign and at least one derivative is called a derivative equation    True   Incorrect, derivative equation is not a standard term in mathematics.     False   Correct!       The expression is the same as to the power of 18    True   Incorrect. Please read the note on derivative notation.     False   Correct!       Identify the differential equation          Correct! This equation involves a derivative, making it a differential equation.           Incorrect. This equation does not contain any derivatives, so it is not a differential equation.           Incorrect. This equation does not contain any derivatives, so it is not a differential equation.           Incorrect. This equation does not contain any derivatives, so it is not a differential equation.      In this textbook, what does the abbreviation \"DE\" stand for?     An Ordinary Differential Equation    Correct! In this book, DE is shorthand for Differential Equation.      An Partial Differential Equation    Incorrect! Please review the note Convention: DE means ODE .      Dependent Equation    Incorrect. While DE could theoretically stand for Dependent Equation, in this book it always refers to Differential Equation.      Derivative Equation    Incorrect. While DE could theoretically stand for Derivative Equation, is not a standard term in mathematics. In this book it always refers to Differential Equation.      What distinguishes an ordinary differential equation (ODE) from a partial differential equation (PDE)?     The number of variables the unknown function depends on.    Correct! An ODE has derivatives with respect to a single variable, while a PDE involves multiple variables.      The number of derivatives in the equation.    Incorrect. Please review the definition of ODEs and PDEs.      The number of solutions the equation has.    Incorrect. Please review the definition of ODEs and PDEs.      The number of hours it takes to solve the equation.    Incorrect. Please review the definition of ODEs and PDEs.      Which of the following is NOT required for an equation to be classified as a differential equation?     An unknown function.    Incorrect. A differential equation does include an unknown function, which we are solving for.      An -variable.    Correct! An -variable is not a requirement for a differential equation.      A derivative.    Incorrect. The presence of at least one derivative is essential to define a differential equation.      An \"=\" sign.    Incorrect. An equality sign is required for an equation to be classified as a differential equation.      What notation will this textbook primarily use for derivatives?     Both prime and Leibniz notation.    Correct! The textbook will use both prime and Leibniz notation for derivatives.      Only prime notation.    Incorrect. While prime notation will be used, Leibniz notation will also be utilized.      Only Leibniz notation.    Incorrect. The book will use both Leibniz and prime notation for derivatives.      Subscript notation.    Incorrect. Subscript notation is not used for derivatives in this textbook.      Click on all the Differential Equations                                       There are only 5 Differential Equations in this set.    "
},
{
  "id": "def-de",
  "level": "2",
  "url": "main-5-3-4.html#def-de",
  "type": "Definition",
  "number": "1",
  "title": "Differential Equation.",
  "body": " Differential Equation   A differential equation (DE) is an equation that involves one or more derivatives of an unknown function. If the function depends on a single variable, the equation is an ordinary differential equation (ODE) . Otherwise, it is called a partial differential equation (PDE) .   "
},
{
  "id": "de-convention",
  "level": "2",
  "url": "main-5-3-4.html#de-convention",
  "type": "Note",
  "number": "2",
  "title": "Convention: DE means ODE.",
  "body": "Convention: DE means ODE  Since this text focuses exclusively on ordinary differential equations, any use of DE will imply ODE .  "
},
{
  "id": "derivative-notation",
  "level": "2",
  "url": "main-5-3-4.html#derivative-notation",
  "type": "Note",
  "number": "3",
  "title": "Derivative Notation.",
  "body": "Derivative Notation  We will use either prime notation or Leibniz notation to denote derivatives. For higher-order derivatives, the following conventions apply:     Derivative Order     1  2  3  4   n    Prime          Leibniz           Be careful not to confuse with raised to the power of 7!   "
},
{
  "id": "c1-s1-ss2-i1",
  "level": "2",
  "url": "main-5-3-4.html#c1-s1-ss2-i1",
  "type": "Reading Question",
  "number": "1.2.1",
  "title": "<em class=\"emphasis\">An equation that contains an \"=\" sign and at least one derivative is called a derivative equation<\/em>.",
  "body": " An equation that contains an \"=\" sign and at least one derivative is called a derivative equation    True   Incorrect, derivative equation is not a standard term in mathematics.     False   Correct!     "
},
{
  "id": "c1-s1-ss2-i2",
  "level": "2",
  "url": "main-5-3-4.html#c1-s1-ss2-i2",
  "type": "Reading Question",
  "number": "1.2.2",
  "title": "<em class=\"emphasis\">The expression <span class=\"process-math\">\\(z^{(18)}\\)<\/span> is the same as <span class=\"process-math\">\\(z\\)<\/span> to the power of 18<\/em>.",
  "body": " The expression is the same as to the power of 18    True   Incorrect. Please read the note on derivative notation.     False   Correct!     "
},
{
  "id": "c1-s1-ss2-i3",
  "level": "2",
  "url": "main-5-3-4.html#c1-s1-ss2-i3",
  "type": "Reading Question",
  "number": "1.2.3",
  "title": "<em class=\"emphasis\">Identify the differential equation<\/em>.",
  "body": " Identify the differential equation          Correct! This equation involves a derivative, making it a differential equation.           Incorrect. This equation does not contain any derivatives, so it is not a differential equation.           Incorrect. This equation does not contain any derivatives, so it is not a differential equation.           Incorrect. This equation does not contain any derivatives, so it is not a differential equation.    "
},
{
  "id": "c1-s1-ss2-i4",
  "level": "2",
  "url": "main-5-3-4.html#c1-s1-ss2-i4",
  "type": "Reading Question",
  "number": "1.2.4",
  "title": "<em class=\"emphasis\">In this textbook, what does the abbreviation \"DE\" stand for?<\/em>",
  "body": " In this textbook, what does the abbreviation \"DE\" stand for?     An Ordinary Differential Equation    Correct! In this book, DE is shorthand for Differential Equation.      An Partial Differential Equation    Incorrect! Please review the note Convention: DE means ODE .      Dependent Equation    Incorrect. While DE could theoretically stand for Dependent Equation, in this book it always refers to Differential Equation.      Derivative Equation    Incorrect. While DE could theoretically stand for Derivative Equation, is not a standard term in mathematics. In this book it always refers to Differential Equation.    "
},
{
  "id": "c1-s1-ss2-i5",
  "level": "2",
  "url": "main-5-3-4.html#c1-s1-ss2-i5",
  "type": "Reading Question",
  "number": "1.2.5",
  "title": "<em class=\"emphasis\">What distinguishes an ordinary differential equation (ODE) from a partial differential equation (PDE)?<\/em>",
  "body": " What distinguishes an ordinary differential equation (ODE) from a partial differential equation (PDE)?     The number of variables the unknown function depends on.    Correct! An ODE has derivatives with respect to a single variable, while a PDE involves multiple variables.      The number of derivatives in the equation.    Incorrect. Please review the definition of ODEs and PDEs.      The number of solutions the equation has.    Incorrect. Please review the definition of ODEs and PDEs.      The number of hours it takes to solve the equation.    Incorrect. Please review the definition of ODEs and PDEs.    "
},
{
  "id": "c1-s1-ss2-i6",
  "level": "2",
  "url": "main-5-3-4.html#c1-s1-ss2-i6",
  "type": "Reading Question",
  "number": "1.2.6",
  "title": "<em class=\"emphasis\">Which of the following is NOT required for an equation to be classified as a differential equation?<\/em>",
  "body": " Which of the following is NOT required for an equation to be classified as a differential equation?     An unknown function.    Incorrect. A differential equation does include an unknown function, which we are solving for.      An -variable.    Correct! An -variable is not a requirement for a differential equation.      A derivative.    Incorrect. The presence of at least one derivative is essential to define a differential equation.      An \"=\" sign.    Incorrect. An equality sign is required for an equation to be classified as a differential equation.    "
},
{
  "id": "c1-s1-ss2-i7",
  "level": "2",
  "url": "main-5-3-4.html#c1-s1-ss2-i7",
  "type": "Reading Question",
  "number": "1.2.7",
  "title": "<em class=\"emphasis\">What notation will this textbook primarily use for derivatives?<\/em>",
  "body": " What notation will this textbook primarily use for derivatives?     Both prime and Leibniz notation.    Correct! The textbook will use both prime and Leibniz notation for derivatives.      Only prime notation.    Incorrect. While prime notation will be used, Leibniz notation will also be utilized.      Only Leibniz notation.    Incorrect. The book will use both Leibniz and prime notation for derivatives.      Subscript notation.    Incorrect. Subscript notation is not used for derivatives in this textbook.    "
},
{
  "id": "c1-s1-ss2-i8",
  "level": "2",
  "url": "main-5-3-4.html#c1-s1-ss2-i8",
  "type": "Reading Question",
  "number": "1.2.8",
  "title": "<em class=\"emphasis\">Click on all the Differential Equations<\/em>.",
  "body": " Click on all the Differential Equations                                       There are only 5 Differential Equations in this set.  "
},
{
  "id": "main-5-3-5",
  "level": "1",
  "url": "main-5-3-5.html",
  "type": "Section",
  "number": "1.3",
  "title": "Variables",
  "body": "Variables  In this section, we'll explore the two types of variables found in differential equations: dependent and independent variables. Understanding the roles of these variables is crucial when solving and interpreting differential equations.  Consider the differential equation: This equation involves two variables: and . One of these variables is the unknown that we are trying to solve for, but which one?  Typically, the variable you want to solve for is the one with a derivative applied to it. Here, the term in indicates:  The derivative is being taken with respect to , and  is a function of (since it wouldn't make sense to take the derivative of with respect to unless depends on ).    Therefore, is called the dependent variable because it depends on . On the other hand, is the independent variable .  Dependent & Independent Variables    Dependent Variable:  The variable representing the unknown function we are trying to find. It is always the variable with a derivative applied to it.   Independent Variable:  The variable that the dependent variable is a function of. It does not have a derivative applied to it.       Identify the dependent and independent variables in each equation and state which variable represents the unknown.         Since the derivative appears, it implies that:  is a function of and is the dependent variable .  is the independent variable .  represents the unknown to this differential equation.             The second derivative suggests that:  is a function of and is the dependent variable .  is the independent variable .  represents the unknown to this differential equation.              Here, implies that is the dependent variable . Since no independent variable is explicitly shown, typically the context of the problem would provide it. If not, we can assume it ourselves—perhaps , making the unknown .        Check your Understanding   Which variable in is the independent variable?     Yes! is the independent variable.     Incorrect. Review the examples.     Incorrect. Review the examples.     Which variable in is the dependent variable?   Dependent variable:     Incorrect. represents the derivative of the dependent variable with respect to the independent variable.       Incorrect. The dependent variable is the one being differentiated.       Correct! is the dependent variable in this equation.     In a differential equation, the dependent variable has a derivative applied to it    True  Correct! The dependent variable in a differential equation always has a derivative applied to it.    False  Incorrect. By definition, a differential equation involves derivatives of the dependent variable.     Which variable in are we solving for?    dependent variable,  Incorrect. is neither the dependent variable, nor what we are solving for.    independent variable,  Incorrect! is the independent variable, but it is not what we are solving for.    dependent variable,  Yes! We are solving for the unknown, .    independent variable,  Incorrect. We are solving for , but it is not the independent variable.     In the differential equation , the dependent variable is       Correct! The dependent variable is , which depends on .     .*   Incorrect. Review the definitions of dependent and independent variables in the context of differential equations.       "
},
{
  "id": "types-of-variables",
  "level": "2",
  "url": "main-5-3-5.html#types-of-variables",
  "type": "Definition",
  "number": "4",
  "title": "Dependent &amp; Independent Variables.",
  "body": "Dependent & Independent Variables    Dependent Variable:  The variable representing the unknown function we are trying to find. It is always the variable with a derivative applied to it.   Independent Variable:  The variable that the dependent variable is a function of. It does not have a derivative applied to it.     "
},
{
  "id": "main-5-3-5-7",
  "level": "2",
  "url": "main-5-3-5.html#main-5-3-5-7",
  "type": "Example",
  "number": "5",
  "title": "",
  "body": " Identify the dependent and independent variables in each equation and state which variable represents the unknown.         Since the derivative appears, it implies that:  is a function of and is the dependent variable .  is the independent variable .  represents the unknown to this differential equation.             The second derivative suggests that:  is a function of and is the dependent variable .  is the independent variable .  represents the unknown to this differential equation.              Here, implies that is the dependent variable . Since no independent variable is explicitly shown, typically the context of the problem would provide it. If not, we can assume it ourselves—perhaps , making the unknown .       "
},
{
  "id": "c1-s1-ss3-i1",
  "level": "2",
  "url": "main-5-3-5.html#c1-s1-ss3-i1",
  "type": "Reading Question",
  "number": "1.3.1",
  "title": "<em class=\"emphasis\">Which variable in <span class=\"process-math\">\\(\\ds (1 - x)y'' - 4xy' + 5y = \\cos x \\)<\/span> is the independent variable?<\/em>",
  "body": " Which variable in is the independent variable?     Yes! is the independent variable.     Incorrect. Review the examples.     Incorrect. Review the examples.   "
},
{
  "id": "c1-s1-ss3-i2",
  "level": "2",
  "url": "main-5-3-5.html#c1-s1-ss3-i2",
  "type": "Reading Question",
  "number": "1.3.2",
  "title": "<em class=\"emphasis\">Which variable in <span class=\"process-math\">\\(\\ds \\frac{dy}{dx} + 2y = 3x^2 \\)<\/span> is the dependent variable?<\/em>",
  "body": " Which variable in is the dependent variable?   Dependent variable:     Incorrect. represents the derivative of the dependent variable with respect to the independent variable.       Incorrect. The dependent variable is the one being differentiated.       Correct! is the dependent variable in this equation.   "
},
{
  "id": "c1-s1-ss3-i3",
  "level": "2",
  "url": "main-5-3-5.html#c1-s1-ss3-i3",
  "type": "Reading Question",
  "number": "1.3.3",
  "title": "<em class=\"emphasis\">In a differential equation, the dependent variable has a derivative applied to it<\/em>.",
  "body": " In a differential equation, the dependent variable has a derivative applied to it    True  Correct! The dependent variable in a differential equation always has a derivative applied to it.    False  Incorrect. By definition, a differential equation involves derivatives of the dependent variable.   "
},
{
  "id": "c1-s1-ss3-i4",
  "level": "2",
  "url": "main-5-3-5.html#c1-s1-ss3-i4",
  "type": "Reading Question",
  "number": "1.3.4",
  "title": "<em class=\"emphasis\">Which variable in <span class=\"process-math\">\\(\\ds \\frac{dP}{ds} + \\frac{P}{s^2} = 17s \\)<\/span> are we solving for?<\/em>",
  "body": " Which variable in are we solving for?    dependent variable,  Incorrect. is neither the dependent variable, nor what we are solving for.    independent variable,  Incorrect! is the independent variable, but it is not what we are solving for.    dependent variable,  Yes! We are solving for the unknown, .    independent variable,  Incorrect. We are solving for , but it is not the independent variable.   "
},
{
  "id": "c1-s1-ss3-i5",
  "level": "2",
  "url": "main-5-3-5.html#c1-s1-ss3-i5",
  "type": "Reading Question",
  "number": "1.3.5",
  "title": "<em class=\"emphasis\">In the differential equation <span class=\"process-math\">\\(\\frac{dx}{dy} = 2xy + 1\\text{,}\\)<\/span> the dependent variable is <span class=\"fillin underline\" role=\"img\" aria-label=\"3-character blank\" style=\"width: 1.363636363636364em;\" \/><\/em>.",
  "body": " In the differential equation , the dependent variable is       Correct! The dependent variable is , which depends on .     .*   Incorrect. Review the definitions of dependent and independent variables in the context of differential equations.     "
},
{
  "id": "main-5-3-6",
  "level": "1",
  "url": "main-5-3-6.html",
  "type": "Section",
  "number": "1.4",
  "title": "Terms &amp; Coefficients",
  "body": "Terms & Coefficients  This text will frequently refer to terms and coefficients . Here is the definition.  Terms & Coefficients   In differential equations, terms and coefficients are defined as follows:   Terms  The expressions separated by , , or signs.   Coefficients  The objects multiplied by the dependent variable or one of its derivatives.   Constant Term  A term without a dependent variable is called a constant term and is not a coefficient.      Consider the differential equation: . This equation has five terms and four coefficients: , , , and . Notice that coefficients can be functions of the independent variable (like and ) or constants (like and ). The distinction between constant and variable coefficients will become crucial when we study a group of differential equations known as constant-coefficient equations .   Terms & Coefficients in a Differential Equation    Identify the terms and coefficients of the differential equation     The equation can be broken down as follows: . The coefficients are , , and . Notice that and are functions of the independent variable , whereas is a constant.    Check your Understanding   For the following, assume is the dependent variable as a function of .    Given , what is the coefficient of ?    Incorrect. is the coefficient of .    Correct! is the coefficient of the term involving .    Incorrect. is the coefficient of .    Incorrect. is the constant on the right-hand side of the equation.     Given , which of the following is considered a constant term?    Incorrect. This term contains a derivative of the dependent variable , so it is not a constant term.    Incorrect. This term involves the dependent variable , so it is not a constant term.    Correct! is the constant term because it does not depend on the dependent variable or its derivatives.     is an example of a constant term   True  Correct! In the context of differential equations, is a constant term since it is not multiplied by the dependent variable or one of its derivatives.   False  Incorrect. While is not a constant function, it is a constant term in the context of differential equations.     is the coefficient of the term   True  Incorrect. The coefficient is the factor multiplying the entire term involving the dependent variable, not the dependent variable itself.   False  Correct! The coefficient is what multiplies the term involving the dependent variable, so in this case, the coefficient of is , not .     The term does not have a coefficient   True  Incorrect. Every term in a differential equation has a coefficient, even if that coefficient is simply 1.   False  Correct! The coefficient of is 1, even if it is not explicitly written.     Given , which terms has a function as its coefficient?    Correct! is a function of and acts as the coefficient of .    Incorrect. is a constant coefficient, not a function.    Incorrect. is a constant coefficient, not a function.    Incorrect. is on the right-hand side of the equation and is not acting as a coefficient for any term.     Given , which statement best describes the coefficient of ?   It is a constant coefficient  Incorrect. A constant coefficient does not depend on the independent variable.   It is a function of the independent variable  Correct! The coefficient depends on the independent variable .   There is no coefficient  Incorrect. The term has a coefficient, which is .   It is an arbitrary constant  Incorrect. is a specific function of , not an arbitrary constant.     Given , which of the following statements is true?   The coefficient of is .  Correct! The term has a coefficient of .   The coefficient of is .  Incorrect. The coefficient of is , not .   The coefficient of is .  Incorrect. The correct coefficient of is , not .   There is no constant term in the equation.  Correct! The equation does not include a constant term since all terms involve the dependent variable or its derivatives.     Select all the coefficients in the differential equation                           The coefficients in this equation are , , and . Remember, coefficients are the factors multiplied by the dependent variable or its derivatives.   Review this example for more guidance on identifying coefficients.    "
},
{
  "id": "def-terms-coefficients",
  "level": "2",
  "url": "main-5-3-6.html#def-terms-coefficients",
  "type": "Definition",
  "number": "6",
  "title": "Terms &amp; Coefficients.",
  "body": "Terms & Coefficients   In differential equations, terms and coefficients are defined as follows:   Terms  The expressions separated by , , or signs.   Coefficients  The objects multiplied by the dependent variable or one of its derivatives.   Constant Term  A term without a dependent variable is called a constant term and is not a coefficient.     "
},
{
  "id": "terms-and-coefficients",
  "level": "2",
  "url": "main-5-3-6.html#terms-and-coefficients",
  "type": "Example",
  "number": "7",
  "title": "<em class=\"emphasis\">Terms & Coefficients in a Differential Equation<\/em>.",
  "body": " Terms & Coefficients in a Differential Equation    Identify the terms and coefficients of the differential equation     The equation can be broken down as follows: . The coefficients are , , and . Notice that and are functions of the independent variable , whereas is a constant.   "
},
{
  "id": "c1-s1-ss4-i1",
  "level": "2",
  "url": "main-5-3-6.html#c1-s1-ss4-i1",
  "type": "Reading Question",
  "number": "1.4.1",
  "title": "<em class=\"emphasis\">Given <span class=\"process-math\">\\(\\ds 5y'' + 2y' - \\cos(t) y = 7\\text{,}\\)<\/span> what is the coefficient of <span class=\"process-math\">\\(\\ds y'\\text{?}\\)<\/span><\/em>",
  "body": " Given , what is the coefficient of ?    Incorrect. is the coefficient of .    Correct! is the coefficient of the term involving .    Incorrect. is the coefficient of .    Incorrect. is the constant on the right-hand side of the equation.   "
},
{
  "id": "c1-s1-ss4-i2",
  "level": "2",
  "url": "main-5-3-6.html#c1-s1-ss4-i2",
  "type": "Reading Question",
  "number": "1.4.2",
  "title": "<em class=\"emphasis\">Given <span class=\"process-math\">\\(\\ds 3t^2 y' + \\frac{1}{t} y - 4 = 0\\text{,}\\)<\/span> which of the following is considered a constant term?<\/em>",
  "body": " Given , which of the following is considered a constant term?    Incorrect. This term contains a derivative of the dependent variable , so it is not a constant term.    Incorrect. This term involves the dependent variable , so it is not a constant term.    Correct! is the constant term because it does not depend on the dependent variable or its derivatives.   "
},
{
  "id": "c1-s1-ss4-i3",
  "level": "2",
  "url": "main-5-3-6.html#c1-s1-ss4-i3",
  "type": "Reading Question",
  "number": "1.4.3",
  "title": "<em class=\"emphasis\"><span class=\"process-math\">\\(3t\\)<\/span> is an example of a constant term<\/em>.",
  "body": " is an example of a constant term   True  Correct! In the context of differential equations, is a constant term since it is not multiplied by the dependent variable or one of its derivatives.   False  Incorrect. While is not a constant function, it is a constant term in the context of differential equations.   "
},
{
  "id": "c1-s1-ss4-i4",
  "level": "2",
  "url": "main-5-3-6.html#c1-s1-ss4-i4",
  "type": "Reading Question",
  "number": "1.4.4",
  "title": "<em class=\"emphasis\"><span class=\"process-math\">\\(y\\)<\/span> is the coefficient of the term <span class=\"process-math\">\\(y \\sin(t)\\)<\/span><\/em>.",
  "body": " is the coefficient of the term   True  Incorrect. The coefficient is the factor multiplying the entire term involving the dependent variable, not the dependent variable itself.   False  Correct! The coefficient is what multiplies the term involving the dependent variable, so in this case, the coefficient of is , not .   "
},
{
  "id": "c1-s1-ss4-i5",
  "level": "2",
  "url": "main-5-3-6.html#c1-s1-ss4-i5",
  "type": "Reading Question",
  "number": "1.4.5",
  "title": "<em class=\"emphasis\">The term <span class=\"process-math\">\\(y'''\\)<\/span> does not have a coefficient<\/em>.",
  "body": " The term does not have a coefficient   True  Incorrect. Every term in a differential equation has a coefficient, even if that coefficient is simply 1.   False  Correct! The coefficient of is 1, even if it is not explicitly written.   "
},
{
  "id": "c1-s1-ss4-i6",
  "level": "2",
  "url": "main-5-3-6.html#c1-s1-ss4-i6",
  "type": "Reading Question",
  "number": "1.4.6",
  "title": "<em class=\"emphasis\">Given <span class=\"process-math\">\\(\\ds e^t y''' + 4y' - 3y = \\sin(t)\\text{,}\\)<\/span> which terms has a function as its coefficient?<\/em>",
  "body": " Given , which terms has a function as its coefficient?    Correct! is a function of and acts as the coefficient of .    Incorrect. is a constant coefficient, not a function.    Incorrect. is a constant coefficient, not a function.    Incorrect. is on the right-hand side of the equation and is not acting as a coefficient for any term.   "
},
{
  "id": "c1-s1-ss4-i7",
  "level": "2",
  "url": "main-5-3-6.html#c1-s1-ss4-i7",
  "type": "Reading Question",
  "number": "1.4.7",
  "title": "<em class=\"emphasis\">Given <span class=\"process-math\">\\(\\ds t^3 y'' + 6 y' - \\ln(t) y = 0\\text{,}\\)<\/span> which statement best describes the coefficient of <span class=\"process-math\">\\(y\\text{?}\\)<\/span><\/em>",
  "body": " Given , which statement best describes the coefficient of ?   It is a constant coefficient  Incorrect. A constant coefficient does not depend on the independent variable.   It is a function of the independent variable  Correct! The coefficient depends on the independent variable .   There is no coefficient  Incorrect. The term has a coefficient, which is .   It is an arbitrary constant  Incorrect. is a specific function of , not an arbitrary constant.   "
},
{
  "id": "c1-s1-ss4-i8",
  "level": "2",
  "url": "main-5-3-6.html#c1-s1-ss4-i8",
  "type": "Reading Question",
  "number": "1.4.8",
  "title": "<em class=\"emphasis\">Given <span class=\"process-math\">\\(\\frac{d^2y}{dt^2} - 3t^2 y' + 4y = 0\\text{,}\\)<\/span> which of the following statements is true?<\/em>",
  "body": " Given , which of the following statements is true?   The coefficient of is .  Correct! The term has a coefficient of .   The coefficient of is .  Incorrect. The coefficient of is , not .   The coefficient of is .  Incorrect. The correct coefficient of is , not .   There is no constant term in the equation.  Correct! The equation does not include a constant term since all terms involve the dependent variable or its derivatives.   "
},
{
  "id": "c1-s1-ss4-i9",
  "level": "2",
  "url": "main-5-3-6.html#c1-s1-ss4-i9",
  "type": "Reading Question",
  "number": "1.4.9",
  "title": "<em class=\"emphasis\">Select all the coefficients in the differential equation<\/em>.",
  "body": " Select all the coefficients in the differential equation                           The coefficients in this equation are , , and . Remember, coefficients are the factors multiplied by the dependent variable or its derivatives.   Review this example for more guidance on identifying coefficients.  "
},
{
  "id": "main-5-3-7",
  "level": "1",
  "url": "main-5-3-7.html",
  "type": "Section",
  "number": "1.5",
  "title": "Order",
  "body": "Order  In this section, we'll explore a key concept in differential equations known as order . Think of the order of a differential equation as the number of layers or steps you need to peel away to reveal the original function. The more layers there are, the higher the order, and usually, the more complex the equation.    The order of a differential equation refers to the highest derivative that appears in the equation. For example, if the highest derivative is the first derivative, it's called a first-order differential equation. If the highest derivative is the second derivative, it's called a second-order differential equation, and so on.     Give the order of the following differential equations:          Order = 1. This is a first-order differential equation because the highest derivative is .            Order = 3 . This is a third-order differential equation because the highest derivative is .            Order = 2 This is a second-order differential equation because the highest derivative is .        Caution, Don't Confuse Exponents with Derivatives  It's important to distinguish between exponents and derivatives. For example, in the second example, indicates that the dependent variable is raised to the 8th power, but this is not related to the order of the differential equation.   Check your Understanding   Which of the following equations is a third-order differential equation?     Correct! The highest derivative here is the third derivative, making it a third-order differential equation.     Incorrect. This is a second-order differential equation.     Incorrect. This is a second-order differential equation.     Incorrect. This is a first-order differential equation.     The order of a differential equation is determined by the number of terms it contains    True  Incorrect. The order is based on the highest derivative, regardless of the number of terms.    False  Correct! The order is determined by the highest derivative, not the number of terms.     The differential equation has order   order:        Correct! The most derivatives applied are two in .     5   Incorrect. Carefully review the definition of order and do not confuse the power of a variable with the order.     .*   Carefully review the definition of order.       The differential equation has order   order:        Correct! The highest derivative is the third derivative .     2   Incorrect. The highest derivative is the third derivative, not the second.     .*   Carefully review the definition of order.       The differential equation has order   order:        Correct! The highest derivative is the fifth derivative .     2   Incorrect. There is a higher derivative in this equation.     3   Incorrect. The third derivative does not appear in this equation.     .*   Carefully review the definition of order.       "
},
{
  "id": "main-5-3-7-2",
  "level": "2",
  "url": "main-5-3-7.html#main-5-3-7-2",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "order "
},
{
  "id": "def-order",
  "level": "2",
  "url": "main-5-3-7.html#def-order",
  "type": "Definition",
  "number": "8",
  "title": "",
  "body": "  The order of a differential equation refers to the highest derivative that appears in the equation. For example, if the highest derivative is the first derivative, it's called a first-order differential equation. If the highest derivative is the second derivative, it's called a second-order differential equation, and so on.   "
},
{
  "id": "main-5-3-7-4",
  "level": "2",
  "url": "main-5-3-7.html#main-5-3-7-4",
  "type": "Example",
  "number": "9",
  "title": "",
  "body": " Give the order of the following differential equations:          Order = 1. This is a first-order differential equation because the highest derivative is .            Order = 3 . This is a third-order differential equation because the highest derivative is .            Order = 2 This is a second-order differential equation because the highest derivative is .       "
},
{
  "id": "main-5-3-7-5",
  "level": "2",
  "url": "main-5-3-7.html#main-5-3-7-5",
  "type": "Note",
  "number": "10",
  "title": "Caution, Don’t Confuse Exponents with Derivatives.",
  "body": "Caution, Don't Confuse Exponents with Derivatives  It's important to distinguish between exponents and derivatives. For example, in the second example, indicates that the dependent variable is raised to the 8th power, but this is not related to the order of the differential equation.  "
},
{
  "id": "c1-s1-ss5-i1",
  "level": "2",
  "url": "main-5-3-7.html#c1-s1-ss5-i1",
  "type": "Reading Question",
  "number": "1.5.1",
  "title": "<em class=\"emphasis\">Which of the following equations is a third-order differential equation?<\/em>",
  "body": " Which of the following equations is a third-order differential equation?     Correct! The highest derivative here is the third derivative, making it a third-order differential equation.     Incorrect. This is a second-order differential equation.     Incorrect. This is a second-order differential equation.     Incorrect. This is a first-order differential equation.   "
},
{
  "id": "c1-s1-ss5-i2",
  "level": "2",
  "url": "main-5-3-7.html#c1-s1-ss5-i2",
  "type": "Reading Question",
  "number": "1.5.2",
  "title": "<em class=\"emphasis\">The order of a differential equation is determined by the number of terms it contains<\/em>.",
  "body": " The order of a differential equation is determined by the number of terms it contains    True  Incorrect. The order is based on the highest derivative, regardless of the number of terms.    False  Correct! The order is determined by the highest derivative, not the number of terms.   "
},
{
  "id": "c1-s1-ss5-i3",
  "level": "2",
  "url": "main-5-3-7.html#c1-s1-ss5-i3",
  "type": "Reading Question",
  "number": "1.5.3",
  "title": "<em class=\"emphasis\">The differential equation <span class=\"process-math\">\\(\\ds (1 - x)y'' - x^4y' + y^5 = \\cos x \\)<\/span> has order <span class=\"fillin underline\" role=\"img\" aria-label=\"3-character blank\" style=\"width: 1.363636363636364em;\" \/><\/em>.",
  "body": " The differential equation has order   order:        Correct! The most derivatives applied are two in .     5   Incorrect. Carefully review the definition of order and do not confuse the power of a variable with the order.     .*   Carefully review the definition of order.     "
},
{
  "id": "c1-s1-ss5-i4",
  "level": "2",
  "url": "main-5-3-7.html#c1-s1-ss5-i4",
  "type": "Reading Question",
  "number": "1.5.4",
  "title": "<em class=\"emphasis\">The differential equation <span class=\"process-math\">\\(\\ds y''' + 3y' - 4y = 0 \\)<\/span> has order <span class=\"fillin underline\" role=\"img\" aria-label=\"3-character blank\" style=\"width: 1.363636363636364em;\" \/><\/em>.",
  "body": " The differential equation has order   order:        Correct! The highest derivative is the third derivative .     2   Incorrect. The highest derivative is the third derivative, not the second.     .*   Carefully review the definition of order.     "
},
{
  "id": "c1-s1-ss5-i5",
  "level": "2",
  "url": "main-5-3-7.html#c1-s1-ss5-i5",
  "type": "Reading Question",
  "number": "1.5.5",
  "title": "<em class=\"emphasis\">The differential equation <span class=\"process-math\">\\(\\ds t^3 \\frac{d^2y}{dt^2} + \\frac{d^5y}{dt^5} = \\sin(t) \\)<\/span> has order <span class=\"fillin underline\" role=\"img\" aria-label=\"3-character blank\" style=\"width: 1.363636363636364em;\" \/><\/em>.",
  "body": " The differential equation has order   order:        Correct! The highest derivative is the fifth derivative .     2   Incorrect. There is a higher derivative in this equation.     3   Incorrect. The third derivative does not appear in this equation.     .*   Carefully review the definition of order.     "
},
{
  "id": "main-5-3-8",
  "level": "1",
  "url": "main-5-3-8.html",
  "type": "Section",
  "number": "1.6",
  "title": "Linear Terms",
  "body": "Linear Terms  The most informative label you can place on a differential equation is whether it is linear or nonlinear. While linearity often refers to equations that graph as straight lines, the concept of linearity in differential equations is more nuanced. Understanding this distinction is crucial as it significantly influences how the equations are solved and interpreted.  Before jumping in, it may be helpful to revisit meaning of dependent variables, terms and coefficients as we will be referencing them throughout this discussion.  Now, let's define what it means for a term in a differential equation to be linear.  Linear Term    Linear Term  A term that has one of the forms     where is the dependent variable. The coefficient, , can be a function of the independent variable, , but not the dependent variable.      The linearity of a term depends entirely on the dependent variable  The linearity of a term is determined by the presence of a single or derivative of to the power of . The coefficients, play no part in the linearity.    Given the differential equation, , identify each term and label the term as linear or nonlinear.  To determine the linearity of a term we only need to consider the dependent variables (column below). We are looking for a single or derivative of raised to the power of . If we find such a term, we label it as linear. Otherwise, it is nonlinear. Let's separate the different parts in the following table.        Term  Coefficient  Dependent Variables  Linearity       linear       nonlinear       nonlinear       linear       nonlinear       nonlinear             Linearity depends  on this column only      Note, since constant terms do not contain a dependent variable, they are necessarily linear. So, in the context of differential equations, is also a linear term.    To help identify nonlinear terms, here are some common characteristics:  Identifying Nonlinear Terms  A term is nonlinear if it contains a dependent variable, or , that is     Raised to a power other than 1, e.g., or .    Inside another function, e.g., or .    Multiplied or divided by another or , e.g., or .      Let's practice this with one more example.   Determine the linearity of each term in the following differential equations.                    Check your Understanding   Assume that and are the dependent and independent variables, respectively.    is a linear term   True  Correct! The term is linear because it is a function of the independent variable only.   False  Incorrect, review the examples of linear terms in the section on Linear Terms.     is a linear term   True  Correct! The term is linear.   False  Incorrect! The term is indeed linear.     is a linear term   True  Incorrect, review the rules for identifying nonlinear terms.   False  Correct! A term that includes the derivative of the dependent variable inside another function is nonlinear.     is a linear term   False  Correct! The term is nonlinear because the dependent variable is inside an exponential function.   True  Incorrect. Review the rules for identifying nonlinear terms.     Identify the linear term in the equation:    Correct! The term is linear because it involves a single derivative of the dependent variable.    Incorrect. This term is nonlinear.    Incorrect. This term is nonlinear because it involves the dependent variable inside a logarithmic function.    Correct! This term is linear because it involves the independent variable only.     Which of the following is a nonlinear term?    Incorrect. This is a linear term.    Correct! The term is nonlinear because it involves a derivative inside a trigonometric function.    Incorrect. This is a linear term.    Incorrect. This is a linear term.     A linear term can contain the dependent variable multiplied by the independent variable   True  Correct! For example, is a linear term.   False  Incorrect. Carefully review the examples above.     Which of the following terms is linear?    Incorrect. is nonlinear because the dependent variable is raised to a power other than one.    Correct! is linear because it is a function of the independent variable multiplied by the first derivative of the dependent variable.    Incorrect. is nonlinear because it includes the dependent variable inside another function.    Incorrect. is nonlinear because it involves the product of the dependent variable and its derivative.     Which of the following terms is linear?    Correct! is linear because it is a function of the independent variable multiplied by the second derivative of the dependent variable.    Incorrect. is nonlinear because the dependent variable is raised to a power other than one.    Incorrect. is nonlinear because the dependent variable is squared.    Incorrect. is nonlinear because it involves the product of the dependent variable and a function of the dependent variable.     Which of the following is a characteristic of a nonlinear term?   It involves the dependent variable raised to the first power.  Incorrect. This is a characteristic of a linear term.   It involves the dependent variable only as a constant.  Incorrect. This is a characteristic of a linear term.   It includes the dependent variable inside another function.  Correct! A nonlinear term includes the dependent variable inside another function.   It involves the independent variable only.  Incorrect. This is a characteristic of a linear term.     Which term is an example of a nonlinear term?    Incorrect. is linear because it is a constant.    Incorrect. is linear because it is a function of the independent variable only.    Correct! is nonlinear because the dependent variable is squared.    Incorrect. is linear because it is a function of the independent variable multiplied by the dependent variable.     Select the Linear Terms   Click on all of the linear terms in the following differential equation.                       In this equation, , , , and are linear terms.   Review     Select the Nonlinear Terms   Click on all of the nonlinear terms in the following differential equation.                          In this equation, and are nonlinear terms.   Review     "
},
{
  "id": "main-5-3-8-5",
  "level": "2",
  "url": "main-5-3-8.html#main-5-3-8-5",
  "type": "Definition",
  "number": "11",
  "title": "Linear Term.",
  "body": "Linear Term    Linear Term  A term that has one of the forms     where is the dependent variable. The coefficient, , can be a function of the independent variable, , but not the dependent variable.     "
},
{
  "id": "main-5-3-8-6",
  "level": "2",
  "url": "main-5-3-8.html#main-5-3-8-6",
  "type": "Note",
  "number": "12",
  "title": "The linearity of a term depends entirely on the dependent variable.",
  "body": "The linearity of a term depends entirely on the dependent variable  The linearity of a term is determined by the presence of a single or derivative of to the power of . The coefficients, play no part in the linearity.  "
},
{
  "id": "main-5-3-8-7",
  "level": "2",
  "url": "main-5-3-8.html#main-5-3-8-7",
  "type": "Example",
  "number": "13",
  "title": "",
  "body": " Given the differential equation, , identify each term and label the term as linear or nonlinear.  To determine the linearity of a term we only need to consider the dependent variables (column below). We are looking for a single or derivative of raised to the power of . If we find such a term, we label it as linear. Otherwise, it is nonlinear. Let's separate the different parts in the following table.        Term  Coefficient  Dependent Variables  Linearity       linear       nonlinear       nonlinear       linear       nonlinear       nonlinear             Linearity depends  on this column only      Note, since constant terms do not contain a dependent variable, they are necessarily linear. So, in the context of differential equations, is also a linear term.   "
},
{
  "id": "main-5-3-8-11",
  "level": "2",
  "url": "main-5-3-8.html#main-5-3-8-11",
  "type": "Example",
  "number": "14",
  "title": "",
  "body": " Determine the linearity of each term in the following differential equations.                   "
},
{
  "id": "c1-s1-ss6-i1",
  "level": "2",
  "url": "main-5-3-8.html#c1-s1-ss6-i1",
  "type": "Reading Question",
  "number": "1.6.1",
  "title": "<em class=\"emphasis\"><span class=\"process-math\">\\(3t\\)<\/span> is a linear term<\/em>.",
  "body": " is a linear term   True  Correct! The term is linear because it is a function of the independent variable only.   False  Incorrect, review the examples of linear terms in the section on Linear Terms.   "
},
{
  "id": "c1-s1-ss6-i2",
  "level": "2",
  "url": "main-5-3-8.html#c1-s1-ss6-i2",
  "type": "Reading Question",
  "number": "1.6.2",
  "title": "<em class=\"emphasis\"><span class=\"process-math\">\\(y \\sin(t)\\)<\/span> is a linear term<\/em>.",
  "body": " is a linear term   True  Correct! The term is linear.   False  Incorrect! The term is indeed linear.   "
},
{
  "id": "c1-s1-ss6-i3",
  "level": "2",
  "url": "main-5-3-8.html#c1-s1-ss6-i3",
  "type": "Reading Question",
  "number": "1.6.3",
  "title": "<em class=\"emphasis\"><span class=\"process-math\">\\(t\\sin(y')\\)<\/span> is a linear term<\/em>.",
  "body": " is a linear term   True  Incorrect, review the rules for identifying nonlinear terms.   False  Correct! A term that includes the derivative of the dependent variable inside another function is nonlinear.   "
},
{
  "id": "c1-s1-ss6-i4",
  "level": "2",
  "url": "main-5-3-8.html#c1-s1-ss6-i4",
  "type": "Reading Question",
  "number": "1.6.4",
  "title": "<em class=\"emphasis\"><span class=\"process-math\">\\(e^{ty}\\)<\/span> is a linear term<\/em>.",
  "body": " is a linear term   False  Correct! The term is nonlinear because the dependent variable is inside an exponential function.   True  Incorrect. Review the rules for identifying nonlinear terms.   "
},
{
  "id": "c1-s1-ss6-i5",
  "level": "2",
  "url": "main-5-3-8.html#c1-s1-ss6-i5",
  "type": "Reading Question",
  "number": "1.6.5",
  "title": "<em class=\"emphasis\">Identify the linear term in the equation: <span class=\"process-math\">\\(\\ds\\frac{1}{t}y'' + y^2 + \\ln(y') = e^t\\)<\/span><\/em>.",
  "body": " Identify the linear term in the equation:    Correct! The term is linear because it involves a single derivative of the dependent variable.    Incorrect. This term is nonlinear.    Incorrect. This term is nonlinear because it involves the dependent variable inside a logarithmic function.    Correct! This term is linear because it involves the independent variable only.   "
},
{
  "id": "c1-s1-ss6-i6",
  "level": "2",
  "url": "main-5-3-8.html#c1-s1-ss6-i6",
  "type": "Reading Question",
  "number": "1.6.6",
  "title": "<em class=\"emphasis\">Which of the following is a nonlinear term?<\/em>",
  "body": " Which of the following is a nonlinear term?    Incorrect. This is a linear term.    Correct! The term is nonlinear because it involves a derivative inside a trigonometric function.    Incorrect. This is a linear term.    Incorrect. This is a linear term.   "
},
{
  "id": "c1-s1-ss6-i7",
  "level": "2",
  "url": "main-5-3-8.html#c1-s1-ss6-i7",
  "type": "Reading Question",
  "number": "1.6.7",
  "title": "<em class=\"emphasis\">A linear term can contain the dependent variable multiplied by the independent variable<\/em>.",
  "body": " A linear term can contain the dependent variable multiplied by the independent variable   True  Correct! For example, is a linear term.   False  Incorrect. Carefully review the examples above.   "
},
{
  "id": "c1-s1-ss6-i8",
  "level": "2",
  "url": "main-5-3-8.html#c1-s1-ss6-i8",
  "type": "Reading Question",
  "number": "1.6.8",
  "title": "<em class=\"emphasis\">Which of the following terms is linear?<\/em>",
  "body": " Which of the following terms is linear?    Incorrect. is nonlinear because the dependent variable is raised to a power other than one.    Correct! is linear because it is a function of the independent variable multiplied by the first derivative of the dependent variable.    Incorrect. is nonlinear because it includes the dependent variable inside another function.    Incorrect. is nonlinear because it involves the product of the dependent variable and its derivative.   "
},
{
  "id": "c1-s1-ss6-i9",
  "level": "2",
  "url": "main-5-3-8.html#c1-s1-ss6-i9",
  "type": "Reading Question",
  "number": "1.6.9",
  "title": "<em class=\"emphasis\">Which of the following terms is linear?<\/em>",
  "body": " Which of the following terms is linear?    Correct! is linear because it is a function of the independent variable multiplied by the second derivative of the dependent variable.    Incorrect. is nonlinear because the dependent variable is raised to a power other than one.    Incorrect. is nonlinear because the dependent variable is squared.    Incorrect. is nonlinear because it involves the product of the dependent variable and a function of the dependent variable.   "
},
{
  "id": "c1-s1-ss6-i10",
  "level": "2",
  "url": "main-5-3-8.html#c1-s1-ss6-i10",
  "type": "Reading Question",
  "number": "1.6.10",
  "title": "<em class=\"emphasis\">Which of the following is a characteristic of a nonlinear term?<\/em>",
  "body": " Which of the following is a characteristic of a nonlinear term?   It involves the dependent variable raised to the first power.  Incorrect. This is a characteristic of a linear term.   It involves the dependent variable only as a constant.  Incorrect. This is a characteristic of a linear term.   It includes the dependent variable inside another function.  Correct! A nonlinear term includes the dependent variable inside another function.   It involves the independent variable only.  Incorrect. This is a characteristic of a linear term.   "
},
{
  "id": "c1-s1-ss6-i11",
  "level": "2",
  "url": "main-5-3-8.html#c1-s1-ss6-i11",
  "type": "Reading Question",
  "number": "1.6.11",
  "title": "<em class=\"emphasis\">Which term is an example of a nonlinear term?<\/em>",
  "body": " Which term is an example of a nonlinear term?    Incorrect. is linear because it is a constant.    Incorrect. is linear because it is a function of the independent variable only.    Correct! is nonlinear because the dependent variable is squared.    Incorrect. is linear because it is a function of the independent variable multiplied by the dependent variable.   "
},
{
  "id": "c1-s1-ss6-i12",
  "level": "2",
  "url": "main-5-3-8.html#c1-s1-ss6-i12",
  "type": "Reading Question",
  "number": "1.6.12",
  "title": "<em class=\"emphasis\">Select the Linear Terms<\/em>.",
  "body": " Select the Linear Terms   Click on all of the linear terms in the following differential equation.                       In this equation, , , , and are linear terms.   Review   "
},
{
  "id": "c1-s1-ss6-i13",
  "level": "2",
  "url": "main-5-3-8.html#c1-s1-ss6-i13",
  "type": "Reading Question",
  "number": "1.6.13",
  "title": "<em class=\"emphasis\">Select the Nonlinear Terms<\/em>.",
  "body": " Select the Nonlinear Terms   Click on all of the nonlinear terms in the following differential equation.                          In this equation, and are nonlinear terms.   Review   "
},
{
  "id": "main-5-3-9",
  "level": "1",
  "url": "main-5-3-9.html",
  "type": "Section",
  "number": "1.7",
  "title": "Linearity",
  "body": "Linearity  In the world of differential equations, distinguishing between linear and nonlinear equations is vital. This distinction will often guide you on how to approach solving the equation and what methods to use. The good news is, all the work we did in the previous section will make this task much easier.   A differential equation is linear if it contains only linear terms. That is, it can be expressed as If just one of the terms in the equation is nonlinear, then the entire differential equation is nonlinear .   This definition might seem abstract at first, but it encompasses all possible linear differential equations. In practice, most equations you'll encounter will involve only a few terms, and the challenge lies in identifying whether any of those terms break the rule of linearity. If they do, the equation is nonlinear.   Let's determine whether the following differential equation is linear:   To classify this equation, we need to verify if every term involving and its derivatives is linear. Let's break it down term by term:   Since each term involving or its derivatives is linear, this differential equation is indeed linear.    In summary, recognizing whether a differential equation is linear or nonlinear will help you determine the appropriate methods for solving it. Linear equations allow for a more straightforward approach, while nonlinear equations often require specialized techniques.  Check your Understanding  The differential equation is linear   True  Correct! This equation is linear as all terms involving and its derivatives appear to the first power, and there are no nonlinear functions of .    False  Incorrect. This equation is indeed linear because both and are to the first power and are not inside any nonlinear functions.     The differential equation, , is   Linear   Yes! This DE is linear. Each term involving or its derivatives, such as , , and , is linear. A linear differential equation contains terms where the dependent variable and its derivatives appear to the first power and are not multiplied by each other.    Nonlinear   No, this is linear. Looking carefully at each term, we see:   Since every term is linear, this differential equation is linear. Review the definition of linear differential equations.      The differential equation, , is   Linear   No, this is nonlinear. Looking carefully at each term, we see:   Since one term is not linear, this differential equation is nonlinear. Revisit the rules for linearity and nonlinearity.    Nonlinear   Yes! This DE is nonlinear since the term is not linear. Nonlinear terms involve functions like sine, logarithms, or powers greater than one when applied to the dependent variable .     The differential equation, , is    Linear  Incorrect. The term makes this equation nonlinear, as it involves the exponential function of the dependent variable.    Nonlinear  Correct! The term introduces nonlinearity into the equation, as it involves the dependent variable inside an exponential function.    Select the linear differential equation    Incorrect. The term makes this equation nonlinear.     Incorrect. The term makes this equation nonlinear.     Correct! All terms are linear in this equation, making it a linear differential equation.     Incorrect. The term introduces nonlinearity in this equation.    Which term makes the equation nonlinear?    Correct! The term is nonlinear because the dependent variable is raised to the second power.     Incorrect. While this term includes a function of , it is still linear because appears to the first power.     Incorrect. The term is linear because and its derivatives are to the first power.     Select all the linear differential equations                Linear equations only involve the dependent variable and its derivatives to the first power, and they won’t be inside nonlinear functions like sine or multiplied by each other.   Remember that a linear differential equation contains only linear terms. Four of these equations are linear.    Select all the nonlinear differential equations   Click on all of the linear differential equations.                              Nonlinear equations often have terms where the dependent variable or its derivatives are raised to powers other than one, or are inside functions like sine, logarithms, or are multiplied by each other.   First identify the dependent variable, then carefully look at each term to determine if it is nonlinear.    "
},
{
  "id": "def-linear",
  "level": "2",
  "url": "main-5-3-9.html#def-linear",
  "type": "Definition",
  "number": "15",
  "title": "",
  "body": " A differential equation is linear if it contains only linear terms. That is, it can be expressed as If just one of the terms in the equation is nonlinear, then the entire differential equation is nonlinear .  "
},
{
  "id": "main-5-3-9-5",
  "level": "2",
  "url": "main-5-3-9.html#main-5-3-9-5",
  "type": "Example",
  "number": "16",
  "title": "",
  "body": " Let's determine whether the following differential equation is linear:   To classify this equation, we need to verify if every term involving and its derivatives is linear. Let's break it down term by term:   Since each term involving or its derivatives is linear, this differential equation is indeed linear.   "
},
{
  "id": "c1-s1-ss7-i1",
  "level": "2",
  "url": "main-5-3-9.html#c1-s1-ss7-i1",
  "type": "Reading Question",
  "number": "1.7.1",
  "title": "<em class=\"emphasis\">The differential equation <span class=\"process-math\">\\(\\frac{dy}{dt} + t^2 y = e^t\\)<\/span> is linear<\/em>.",
  "body": "The differential equation is linear   True  Correct! This equation is linear as all terms involving and its derivatives appear to the first power, and there are no nonlinear functions of .    False  Incorrect. This equation is indeed linear because both and are to the first power and are not inside any nonlinear functions.   "
},
{
  "id": "c1-s1-ss7-i2",
  "level": "2",
  "url": "main-5-3-9.html#c1-s1-ss7-i2",
  "type": "Reading Question",
  "number": "1.7.2",
  "title": "<em class=\"emphasis\">The differential equation, <span class=\"process-math\">\\(\\ds y'' + y' \\cos t = 7y \\text{,}\\)<\/span> is <span class=\"fillin underline\" role=\"img\" aria-label=\"8-character blank\" style=\"width: 3.636363636363636em;\" \/><\/em>.",
  "body": " The differential equation, , is   Linear   Yes! This DE is linear. Each term involving or its derivatives, such as , , and , is linear. A linear differential equation contains terms where the dependent variable and its derivatives appear to the first power and are not multiplied by each other.    Nonlinear   No, this is linear. Looking carefully at each term, we see:   Since every term is linear, this differential equation is linear. Review the definition of linear differential equations.    "
},
{
  "id": "c1-s1-ss7-i3",
  "level": "2",
  "url": "main-5-3-9.html#c1-s1-ss7-i3",
  "type": "Reading Question",
  "number": "1.7.3",
  "title": "<em class=\"emphasis\">The differential equation, <span class=\"process-math\">\\(\\ds y'' + \\sin(y) = 17t \\text{,}\\)<\/span> is <span class=\"fillin underline\" role=\"img\" aria-label=\"8-character blank\" style=\"width: 3.636363636363636em;\" \/><\/em>.",
  "body": " The differential equation, , is   Linear   No, this is nonlinear. Looking carefully at each term, we see:   Since one term is not linear, this differential equation is nonlinear. Revisit the rules for linearity and nonlinearity.    Nonlinear   Yes! This DE is nonlinear since the term is not linear. Nonlinear terms involve functions like sine, logarithms, or powers greater than one when applied to the dependent variable .    "
},
{
  "id": "c1-s1-ss7-i4",
  "level": "2",
  "url": "main-5-3-9.html#c1-s1-ss7-i4",
  "type": "Reading Question",
  "number": "1.7.4",
  "title": "<em class=\"emphasis\">The differential equation, <span class=\"process-math\">\\(\\ds \\frac{d^2x}{dt^2} + e^x = 0 \\text{,}\\)<\/span> is <span class=\"fillin underline\" role=\"img\" aria-label=\"8-character blank\" style=\"width: 3.636363636363636em;\" \/><\/em>.",
  "body": "The differential equation, , is    Linear  Incorrect. The term makes this equation nonlinear, as it involves the exponential function of the dependent variable.    Nonlinear  Correct! The term introduces nonlinearity into the equation, as it involves the dependent variable inside an exponential function.   "
},
{
  "id": "c1-s1-ss7-i5",
  "level": "2",
  "url": "main-5-3-9.html#c1-s1-ss7-i5",
  "type": "Reading Question",
  "number": "1.7.5",
  "title": "<em class=\"emphasis\">Select the linear differential equation<\/em>.",
  "body": "Select the linear differential equation    Incorrect. The term makes this equation nonlinear.     Incorrect. The term makes this equation nonlinear.     Correct! All terms are linear in this equation, making it a linear differential equation.     Incorrect. The term introduces nonlinearity in this equation.   "
},
{
  "id": "c1-s1-ss7-i6",
  "level": "2",
  "url": "main-5-3-9.html#c1-s1-ss7-i6",
  "type": "Reading Question",
  "number": "1.7.6",
  "title": "<em class=\"emphasis\">Which term makes the equation <span class=\"process-math\">\\(\\ds y''' + 3y' \\sin(t) + y^2 = 0\\)<\/span> nonlinear?<\/em>",
  "body": "Which term makes the equation nonlinear?    Correct! The term is nonlinear because the dependent variable is raised to the second power.     Incorrect. While this term includes a function of , it is still linear because appears to the first power.     Incorrect. The term is linear because and its derivatives are to the first power.   "
},
{
  "id": "c1-s1-ss7-i7",
  "level": "2",
  "url": "main-5-3-9.html#c1-s1-ss7-i7",
  "type": "Reading Question",
  "number": "1.7.7",
  "title": "<em class=\"emphasis\">Select all the linear differential equations<\/em>.",
  "body": " Select all the linear differential equations                Linear equations only involve the dependent variable and its derivatives to the first power, and they won’t be inside nonlinear functions like sine or multiplied by each other.   Remember that a linear differential equation contains only linear terms. Four of these equations are linear.  "
},
{
  "id": "c1-s1-ss7-i8",
  "level": "2",
  "url": "main-5-3-9.html#c1-s1-ss7-i8",
  "type": "Reading Question",
  "number": "1.7.8",
  "title": "<em class=\"emphasis\">Select all the nonlinear differential equations<\/em>.",
  "body": " Select all the nonlinear differential equations   Click on all of the linear differential equations.                              Nonlinear equations often have terms where the dependent variable or its derivatives are raised to powers other than one, or are inside functions like sine, logarithms, or are multiplied by each other.   First identify the dependent variable, then carefully look at each term to determine if it is nonlinear.  "
},
{
  "id": "main-5-4-3",
  "level": "1",
  "url": "main-5-4-3.html",
  "type": "Section",
  "number": "2.1",
  "title": "What is a Solution?",
  "body": "What is a Solution?  Regardless what kind of equation you are working with, a solution is a value or function that satisfies the equation. The term satisfies simply means that when you plug the value into the equation, it simplifies to a statement that is undeniably true. This undeniably true statement is sometimes called an identity. For example, suppose I want to check if and are solutions to the equation . To do this, we verify that both and  satisfy the equation by separately plugging and in for each , simplify and see if we end up with an undeniably true statement, like so        Since yields an true statement we say it satisfies the equation and is a solution. In contrast, does not give a true statement, so it does not satisfy the equation and is not a solution.  The same idea applies to differential equations, except in that solutions to differential equations are functions instead of numbers . To see this, let's verify if and are solutions to the differential equation .  Separately plugging and into the equation yields        Since results in a false statement, it does not satisfy the equation and is not a solution. However, does satisfy the equation and is a solution.  To summarize, verifying a solution involves substituting the function into the differential equation and ensuring that the equality is satisfied.  Check your Understanding   The function, , satisfies the differential equation    True  Incorrect.  is not a solution since      False  Correct!  is not a solution since       Which variable in is the solution?        Yes! is the independent variable.         The independent variable cannot have a derivative applied to it.      Correct! is the independent variable, which depends on.     Incorrect. is the dependent variable, not the independent one.     Incorrect. is the second derivative of the dependent variable with respect to .     In general, a solution to a differential equation is a     constant    It is possible for a solution to be a constant, but not in general.      function    Yes, when you solve a differential equation, you get a function.      number    It is possible for a solution to be a number, but not in general.      limit    Sorry, no.      Which variable in does the solution depend on?    dependent variable,  Incorrect. The solution depends on , but is not a dependent variable.    independent variable,  Yes! the solution, , depends on the independent variable .    dependent variable,  Incorrect. Although is a dependent variable, the solution is . So the solution does not depend on .    independent variable,  Incorrect. The variable is not an independent variable, nor does the solution depend on it.    What is the primary goal of solving a differential equation?   To find an unknown function that satisfies the equation.  Correct! The goal of solving a differential equation is to find the function that meets the equation's conditions.    To find the derivative of a function.  Incorrect. While derivatives are involved, the goal is to find the function, not just its derivative.    To identify the constants in an equation.  Incorrect. Identifying constants might be part of the process, but it is not the primary goal.    To determine the independent variable.  Incorrect. The independent variable is usually known; we solve for the dependent variable.     "
},
{
  "id": "main-5-4-3-6-2",
  "level": "2",
  "url": "main-5-4-3.html#main-5-4-3-6-2",
  "type": "Reading Question",
  "number": "2.1.1",
  "title": "<em class=\"emphasis\">The function, <span class=\"process-math\">\\(y = 9x\\text{,}\\)<\/span> satisfies the differential equation <span class=\"process-math\">\\(y' = 3y\\)<\/span><\/em>.",
  "body": " The function, , satisfies the differential equation    True  Incorrect.  is not a solution since      False  Correct!  is not a solution since     "
},
{
  "id": "main-5-4-3-6-3",
  "level": "2",
  "url": "main-5-4-3.html#main-5-4-3-6-3",
  "type": "Reading Question",
  "number": "2.1.2",
  "title": "<em class=\"emphasis\">Which variable in <span class=\"process-math\">\\(\\ds u'' + t^2 u = 0 \\)<\/span> is the solution?<\/em>",
  "body": " Which variable in is the solution?        Yes! is the independent variable.         The independent variable cannot have a derivative applied to it.      Correct! is the independent variable, which depends on.     Incorrect. is the dependent variable, not the independent one.     Incorrect. is the second derivative of the dependent variable with respect to .   "
},
{
  "id": "main-5-4-3-6-4",
  "level": "2",
  "url": "main-5-4-3.html#main-5-4-3-6-4",
  "type": "Reading Question",
  "number": "2.1.3",
  "title": "<em class=\"emphasis\">In general, a “solution” to a differential equation is a <span class=\"fillin underline\" role=\"img\" aria-label=\"8-character blank\" style=\"width: 3.636363636363636em;\" \/><\/em>.",
  "body": " In general, a solution to a differential equation is a     constant    It is possible for a solution to be a constant, but not in general.      function    Yes, when you solve a differential equation, you get a function.      number    It is possible for a solution to be a number, but not in general.      limit    Sorry, no.    "
},
{
  "id": "main-5-4-3-6-5",
  "level": "2",
  "url": "main-5-4-3.html#main-5-4-3-6-5",
  "type": "Reading Question",
  "number": "2.1.4",
  "title": "<em class=\"emphasis\">Which variable in <span class=\"process-math\">\\(\\ds \\frac{dP}{ds} + \\frac{P}{s^2} = 17s \\)<\/span> does the solution depend on?<\/em>",
  "body": " Which variable in does the solution depend on?    dependent variable,  Incorrect. The solution depends on , but is not a dependent variable.    independent variable,  Yes! the solution, , depends on the independent variable .    dependent variable,  Incorrect. Although is a dependent variable, the solution is . So the solution does not depend on .    independent variable,  Incorrect. The variable is not an independent variable, nor does the solution depend on it.   "
},
{
  "id": "main-5-4-3-6-6",
  "level": "2",
  "url": "main-5-4-3.html#main-5-4-3-6-6",
  "type": "Reading Question",
  "number": "2.1.5",
  "title": "<em class=\"emphasis\">What is the primary goal of solving a differential equation?<\/em>",
  "body": "What is the primary goal of solving a differential equation?   To find an unknown function that satisfies the equation.  Correct! The goal of solving a differential equation is to find the function that meets the equation's conditions.    To find the derivative of a function.  Incorrect. While derivatives are involved, the goal is to find the function, not just its derivative.    To identify the constants in an equation.  Incorrect. Identifying constants might be part of the process, but it is not the primary goal.    To determine the independent variable.  Incorrect. The independent variable is usually known; we solve for the dependent variable.   "
},
{
  "id": "main-5-4-4",
  "level": "1",
  "url": "main-5-4-4.html",
  "type": "Section",
  "number": "2.2",
  "title": "Verifying Solutions",
  "body": "Verifying Solutions  In the previous section, we discussed what it means for a function to be a solution to a differential equation. Now, we turn our attention to how we can verify that a proposed function is indeed a solution.  The process of verifying a solution is straightforward: you substitute the proposed function into the differential equation and check whether the equation holds true. This simple test helps ensure that the function satisfies the relationship defined by the differential equation. Beginner Tip: Move all terms to One Side Remember, the following differential equations are identical: . Meaning that you are free to use either form when verifying solutions. For beginners, it is often easier to verify solutions using the second form, as you just have to show the left-side of equation simplifies to zero, giving you . Let's look at a few examples.   Verify that is a solution to .  Let's begin by moving all terms to the left-side of the equation.   To reduce errors and break the problem into more manageable steps, we will compute and simplify the derivatives appearing in the equation.   Finally, we substitute in and and simplify. Therefore, is a solution to      Verify that is a solution to .  As before, we compute since it appears in the equation and move all terms to the left-side.   Plug and in and simplify. Therefore, is not a solution to      Verify that both and are solutions to .  Find and since they appear in the equation.   Plug and into the DE and simplify. Therefore, is a solution to     Find and since they appear in the DE.   Plug and into the DE and simplify. Therefore, is a solution to      Verify that is a solution to .  :   . Find and since they appear in the DE.   Plug and into the DE and simplify. Therefore, is a solution to     As you work through more complex differential equations, this verification process becomes a valuable tool. It allows you to confirm whether a function is a valid solution before proceeding with further analysis or applications.  In the next section, we'll explore different techniques for finding solutions to differential equations, but always remember—verification is key!   Solution Verification with Two Constants   Verify that is a solution to .   Move terms to left:   Find since it appears in the DE.   Plug into the DE and simplify. Therefore, is a solution to . In fact, it is the general solution, but we don't show that here.      Solve    The general solution to this DE was already found to be . Notice that two initial conditions are provided in this example. This extra piece of information is needed since our general solution contains two constants.  Since one initial condition involves the derivative, we will need to compute this before applying this condition.   Now let's apply the initial conditions:   We now have two equations and two unknowns, There are multiple ways to solve this system of equations, and the reader is encouraged to verify that and . Here is one We will solve for in the first equation and then substitute into the second.    Thus, the solution we that satisfies the DE and both of the provided initial conditions is      Don't assume a function that satisfies a DE is a general solution!   A function that contains constants and satisfies a differential equation does not mean it is the general solution since it could be missing a term. For example, you could easily show that is also a solution to , but you already know from that is a solution, which is more general than .    Verify that , where is any constant, is a solution to the DE    We'll approach this the same way we approached the algebraic equation in the example above: we will to substitute the function in on the left and right hand sides of the equation        Since both the and turn out to be , we have shown that satisfies and is, thus, a solution to     Example Notes  Since we used a generic constant , we have shown that is a solution for any value we like for the constant . In particular,  for is a solution.  for is a solution.  for is a solution.  Since there is no limit to what we can choose, this DE must have an infinite number of solutions. In the next section, we will describe this idea further.    Determine if is a solution to the DE where and are constants.   Find .   and substitute Which shows that is a solution to     Example Notes  In this example, we showed that the function was a solution .  Notice that we were able to verify the solution, even though the constants, and , were not known. This suggests that you can substitute any values of and into the solution and it will still be a solution to the DE. Try it!   Now, since there are infinitely many choices for and , then, logically, there must be infinitely many solutions to the DE, .     Verify that is a solution to the DE     Working out the left and right hand sides of this DE, we have:          Since , we have verified that is a solution to     Check your Understanding   A differential equation has one solution      True  Incorrect.  shows a differential equation with two solutions.     False  Correct!     is a solution to    is a solution to the differential equation .    True  Incorrect.  is not a solution since      False  Correct!  is not a solution since       List the correct order of steps needed to verify is a solution to     Drag the step on the left to the appropriate step order on the right.    Review the examples above to see the steps in verifying a solution.    Compute  Step 1    Compute  Step 2    Plug in  Step 3    Simplify both sides  Step 4    Check for  Step 5     Consider the differential equation with missing right-hand side: . Assuming is a solution to this equation, which of the following is a possible right-hand side?            Incorrect. Plug and into the left-side and simplify.           Incorrect. Plug and into the left-side and simplify.           Correct! Plugging and into the left-side gives and to get a true statement, the right-hand side must be .      "
},
{
  "id": "move-terms-when-verifying",
  "level": "2",
  "url": "main-5-4-4.html#move-terms-when-verifying",
  "type": "Note",
  "number": "17",
  "title": "Beginner Tip: Move all terms to One Side.",
  "body": "Beginner Tip: Move all terms to One Side Remember, the following differential equations are identical: . Meaning that you are free to use either form when verifying solutions. For beginners, it is often easier to verify solutions using the second form, as you just have to show the left-side of equation simplifies to zero, giving you . "
},
{
  "id": "main-5-4-4-4",
  "level": "2",
  "url": "main-5-4-4.html#main-5-4-4-4",
  "type": "Example",
  "number": "18",
  "title": "",
  "body": " Verify that is a solution to .  Let's begin by moving all terms to the left-side of the equation.   To reduce errors and break the problem into more manageable steps, we will compute and simplify the derivatives appearing in the equation.   Finally, we substitute in and and simplify. Therefore, is a solution to    "
},
{
  "id": "main-5-4-4-5",
  "level": "2",
  "url": "main-5-4-4.html#main-5-4-4-5",
  "type": "Example",
  "number": "19",
  "title": "",
  "body": " Verify that is a solution to .  As before, we compute since it appears in the equation and move all terms to the left-side.   Plug and in and simplify. Therefore, is not a solution to    "
},
{
  "id": "de-two-solutions",
  "level": "2",
  "url": "main-5-4-4.html#de-two-solutions",
  "type": "Example",
  "number": "20",
  "title": "",
  "body": " Verify that both and are solutions to .  Find and since they appear in the equation.   Plug and into the DE and simplify. Therefore, is a solution to     Find and since they appear in the DE.   Plug and into the DE and simplify. Therefore, is a solution to    "
},
{
  "id": "main-5-4-4-7",
  "level": "2",
  "url": "main-5-4-4.html#main-5-4-4-7",
  "type": "Example",
  "number": "21",
  "title": "",
  "body": " Verify that is a solution to .  :   . Find and since they appear in the DE.   Plug and into the DE and simplify. Therefore, is a solution to    "
},
{
  "id": "two-constant-solution-verification",
  "level": "2",
  "url": "main-5-4-4.html#two-constant-solution-verification",
  "type": "Example",
  "number": "22",
  "title": "<em class=\"emphasis\">Solution Verification with Two Constants<\/em>.",
  "body": " Solution Verification with Two Constants   Verify that is a solution to .   Move terms to left:   Find since it appears in the DE.   Plug into the DE and simplify. Therefore, is a solution to . In fact, it is the general solution, but we don't show that here.    "
},
{
  "id": "main-5-4-4-11",
  "level": "2",
  "url": "main-5-4-4.html#main-5-4-4-11",
  "type": "Example",
  "number": "23",
  "title": "",
  "body": " Solve    The general solution to this DE was already found to be . Notice that two initial conditions are provided in this example. This extra piece of information is needed since our general solution contains two constants.  Since one initial condition involves the derivative, we will need to compute this before applying this condition.   Now let's apply the initial conditions:   We now have two equations and two unknowns, There are multiple ways to solve this system of equations, and the reader is encouraged to verify that and . Here is one We will solve for in the first equation and then substitute into the second.    Thus, the solution we that satisfies the DE and both of the provided initial conditions is    "
},
{
  "id": "main-5-4-4-12",
  "level": "2",
  "url": "main-5-4-4.html#main-5-4-4-12",
  "type": "Note",
  "number": "24",
  "title": "<em class=\"emphasis\">Don’t assume a function that satisfies a DE is a general solution!<\/em>",
  "body": " Don't assume a function that satisfies a DE is a general solution!   A function that contains constants and satisfies a differential equation does not mean it is the general solution since it could be missing a term. For example, you could easily show that is also a solution to , but you already know from that is a solution, which is more general than .  "
},
{
  "id": "main-5-4-4-13",
  "level": "2",
  "url": "main-5-4-4.html#main-5-4-4-13",
  "type": "Example",
  "number": "25",
  "title": "",
  "body": " Verify that , where is any constant, is a solution to the DE    We'll approach this the same way we approached the algebraic equation in the example above: we will to substitute the function in on the left and right hand sides of the equation        Since both the and turn out to be , we have shown that satisfies and is, thus, a solution to    "
},
{
  "id": "main-5-4-4-14",
  "level": "2",
  "url": "main-5-4-4.html#main-5-4-4-14",
  "type": "Note",
  "number": "26",
  "title": "Example Notes.",
  "body": "Example Notes  Since we used a generic constant , we have shown that is a solution for any value we like for the constant . In particular,  for is a solution.  for is a solution.  for is a solution.  Since there is no limit to what we can choose, this DE must have an infinite number of solutions. In the next section, we will describe this idea further.  "
},
{
  "id": "main-5-4-4-15",
  "level": "2",
  "url": "main-5-4-4.html#main-5-4-4-15",
  "type": "Example",
  "number": "27",
  "title": "",
  "body": " Determine if is a solution to the DE where and are constants.   Find .   and substitute Which shows that is a solution to    "
},
{
  "id": "main-5-4-4-16",
  "level": "2",
  "url": "main-5-4-4.html#main-5-4-4-16",
  "type": "Note",
  "number": "28",
  "title": "Example Notes.",
  "body": "Example Notes  In this example, we showed that the function was a solution .  Notice that we were able to verify the solution, even though the constants, and , were not known. This suggests that you can substitute any values of and into the solution and it will still be a solution to the DE. Try it!   Now, since there are infinitely many choices for and , then, logically, there must be infinitely many solutions to the DE, .  "
},
{
  "id": "main-5-4-4-17",
  "level": "2",
  "url": "main-5-4-4.html#main-5-4-4-17",
  "type": "Example",
  "number": "29",
  "title": "",
  "body": "  Verify that is a solution to the DE     Working out the left and right hand sides of this DE, we have:          Since , we have verified that is a solution to    "
},
{
  "id": "main-5-4-4-18-2",
  "level": "2",
  "url": "main-5-4-4.html#main-5-4-4-18-2",
  "type": "Reading Question",
  "number": "2.2.1",
  "title": "<em class=\"emphasis\">A differential equation has one solution<\/em>.",
  "body": " A differential equation has one solution      True  Incorrect.  shows a differential equation with two solutions.     False  Correct!   "
},
{
  "id": "main-5-4-4-18-3",
  "level": "2",
  "url": "main-5-4-4.html#main-5-4-4-18-3",
  "type": "Reading Question",
  "number": "2.2.2",
  "title": "<em class=\"emphasis\"><span class=\"process-math\">\\(y = x^2 + 3\\)<\/span> is a solution to <span class=\"process-math\">\\(\\ds\\frac{dy}{dx} - 3 = 2x\\)<\/span><\/em>.",
  "body": " is a solution to    is a solution to the differential equation .    True  Incorrect.  is not a solution since      False  Correct!  is not a solution since     "
},
{
  "id": "verify-steps-matching",
  "level": "2",
  "url": "main-5-4-4.html#verify-steps-matching",
  "type": "Reading Question",
  "number": "2.2.3",
  "title": "<em class=\"emphasis\">List the correct order of steps needed to verify <span class=\"process-math\">\\(s = \\cos(3x)\\)<\/span> is a solution to <span class=\"process-math\">\\(\\ds\\vphantom{|}s'' - 6s' + 9s = 0\\)<\/span><\/em>.",
  "body": " List the correct order of steps needed to verify is a solution to     Drag the step on the left to the appropriate step order on the right.    Review the examples above to see the steps in verifying a solution.    Compute  Step 1    Compute  Step 2    Plug in  Step 3    Simplify both sides  Step 4    Check for  Step 5   "
},
{
  "id": "main-5-4-4-18-5",
  "level": "2",
  "url": "main-5-4-4.html#main-5-4-4-18-5",
  "type": "Reading Question",
  "number": "2.2.4",
  "title": "<em class=\"emphasis\">Consider the differential equation with missing right-hand side:<div class=\"displaymath process-math\">\n\\begin{equation*}\ny'' - \\frac{4}{x}y' = \\fillinmath{XXXXX}\\text{.}\n\\end{equation*}\n<\/div>Assuming <span class=\"process-math\">\\(y = 2x^3\\)<\/span> is a solution to this equation, which of the following is a possible right-hand side?<\/em>",
  "body": " Consider the differential equation with missing right-hand side: . Assuming is a solution to this equation, which of the following is a possible right-hand side?            Incorrect. Plug and into the left-side and simplify.           Incorrect. Plug and into the left-side and simplify.           Correct! Plugging and into the left-side gives and to get a true statement, the right-hand side must be .    "
},
{
  "id": "main-5-4-5",
  "level": "1",
  "url": "main-5-4-5.html",
  "type": "Section",
  "number": "2.3",
  "title": "Types of Solutions",
  "body": "Types of Solutions  At this point, you should comfortable with the idea that a solution to a differential equation is a function that satisfies it . You have also seen that a single differential equation can have more than one solution . However, this begs the question:   How many solutions does a differential equation have?   The answer depends on the context of the problem, and that's what we will explore in this section. Let's kick things off with an example.   Show that the functions are solutions to the differential equation .  Verifying each function individually would be repetitive because they all follow the same pattern: , where can be any constant. Let’s prove that is a solution.  First, compute :   Now, substitute and into the differential equation:  Therefore, is a solution, and the specific value of does not matter.     From the above example, you can see that the function satisfies the differential equation for any value of . This leads to an important observation:  How many choices for are there?   Of course, the answer is infinitely many! This means the equation has an infinite number of solutions. This brings us to some key terms related to solutions of differential equations.   Types of Solutions     Family of Solutions  The collection of all possible solutions of a differential equation.    General Solution  The common form of all the solutions in the family. This includes arbitrary constants that can take any value.    Particular Solution  A single solution obtained by assigning specific values to the constants in the general solution.      Applying these terms to our previous example, we can summarize that:  is the general solution of the equation .  is one particular solution in the family of solutions .  The family of solutions consists of all functions of the form .    Understanding the different types of solutions—general, particular, and families of solutions—is crucial as you continue to explore differential equations. In the upcoming sections, we'll talk more about where particular solutions come from.  Check your Understanding   A family of solutions can be viewed as the collection of all particular solutions    True  Correct! A family of solutions includes all possible particular solutions.    False  Incorrect. A family of solutions is a set of all possible solutions, not just one particular solution.     A particular solution can be viewed as a member of the family of solutions    True  Correct! A particular solution is one of the many solutions in the family of solutions.    False  Incorrect. A particular solution is a specific member of the family of solutions.     Which task is fundamentally different from the others?    Solving a differential equation.  Incorrect. Solving a differential equation involves finding solutions.    Finding the general solution to a differential equation.  Incorrect. Finding the general solution is part of finding solutions.    Finding a family of solutions to a differential equation.  Incorrect. Finding a family of solutions is related to identifying all possible solutions.    Verifying a solution to a differential equation.  Correct! Verifying a solution checks if a proposed function satisfies the equation, rather than finding a new one.     What is the difference between a general solution and a particular solution?    A general solution is a specific solution to a differential equation, while a particular solution is a general form of the solution.  Incorrect. A general solution is a form of the solution that includes arbitrary constants, while a particular solution is a specific member of the family of solutions.    A general solution is a form of the solution that includes arbitrary constants, while a particular solution is a specific member of the family of solutions.  Correct! The general solution represents all possible solutions, while a particular solution is one specific solution.    A general solution is a specific member of the family of solutions, while a particular solution is a form of the solution.  Incorrect. A general solution is a form of the solution that includes arbitrary constants, while a particular solution is a specific member of the family of solutions.    A general solution is a specific solution to a differential equation, while a particular solution is a general form of the solution.  Incorrect. A general solution is a form of the solution that includes arbitrary constants, while a particular solution is a specific member of the family of solutions.     Fill in the Blank  When you find the general solution of a differential equation, you are finding the common of each particular solution.     Good Work!      Incorrect. The correct answer starts with an f      What role does the general solution play in solving a differential equation?   It provides the exact value of the function.  Incorrect. The general solution provides a family of functions, not just one specific value.    It represents a family of functions that satisfy the differential equation.  Correct! The general solution includes all possible solutions, depending on the values of the constants.    It simplifies the differential equation.  Incorrect. While solving the equation involves simplification, the general solution represents the functions that satisfy the equation.    It eliminates the constants from the solution.  Incorrect. The general solution still includes arbitrary constants.     What is a family of solutions?    A collection of all possible solutions to a differential equation.  Correct! The family of solutions includes every possible particular solution.    The general solution to a differential equation.  Incorrect. The general solution represents a form of the family of solutions, not the entire set.    A single specific solution to a differential equation.  Incorrect. This describes a particular solution, not the family of solutions.    A solution without any constants.  Incorrect. A solution without constants is typically a particular solution, not the entire family.     A general solution always includes arbitrary constants    True  Correct! The general solution represents the form that includes arbitrary constants.    False  Incorrect. A general solution must include arbitrary constants to represent all possible particular solutions.     Fill in the Blank A solution is a single solution obtained by assigning specific values to the constants in the general solution.     Good Work!      Incorrect. The correct answer starts with a p       In , we verified that was a solution to Based on this, how many solutions must this equation have?     One.  Incorrect. Reason?     Two.  Incorrect. Reason?     Infinitely-Many.  Correct! We can choose any value of C and it will still satisfy this equation. Since there are infinitely-many of numbers to choose from, there are infinitely-many solutions.     Unknown since we don't know .  Incorrect. Reason?      "
},
{
  "id": "verification-with-a-constant",
  "level": "2",
  "url": "main-5-4-5.html#verification-with-a-constant",
  "type": "Example",
  "number": "30",
  "title": "",
  "body": " Show that the functions are solutions to the differential equation .  Verifying each function individually would be repetitive because they all follow the same pattern: , where can be any constant. Let’s prove that is a solution.  First, compute :   Now, substitute and into the differential equation:  Therefore, is a solution, and the specific value of does not matter.    "
},
{
  "id": "types-of-solutions",
  "level": "2",
  "url": "main-5-4-5.html#types-of-solutions",
  "type": "Definition",
  "number": "31",
  "title": "Types of Solutions.",
  "body": "Types of Solutions     Family of Solutions  The collection of all possible solutions of a differential equation.    General Solution  The common form of all the solutions in the family. This includes arbitrary constants that can take any value.    Particular Solution  A single solution obtained by assigning specific values to the constants in the general solution.     "
},
{
  "id": "main-5-4-5-8-2",
  "level": "2",
  "url": "main-5-4-5.html#main-5-4-5-8-2",
  "type": "Reading Question",
  "number": "2.3.1",
  "title": "<em class=\"emphasis\">A family of solutions can be viewed as the collection of all particular solutions<\/em>.",
  "body": " A family of solutions can be viewed as the collection of all particular solutions    True  Correct! A family of solutions includes all possible particular solutions.    False  Incorrect. A family of solutions is a set of all possible solutions, not just one particular solution.   "
},
{
  "id": "main-5-4-5-8-3",
  "level": "2",
  "url": "main-5-4-5.html#main-5-4-5-8-3",
  "type": "Reading Question",
  "number": "2.3.2",
  "title": "<em class=\"emphasis\">A particular solution can be viewed as a member of the family of solutions<\/em>.",
  "body": " A particular solution can be viewed as a member of the family of solutions    True  Correct! A particular solution is one of the many solutions in the family of solutions.    False  Incorrect. A particular solution is a specific member of the family of solutions.   "
},
{
  "id": "main-5-4-5-8-4",
  "level": "2",
  "url": "main-5-4-5.html#main-5-4-5-8-4",
  "type": "Reading Question",
  "number": "2.3.3",
  "title": "<em class=\"emphasis\">Which task is fundamentally different from the others?<\/em>",
  "body": " Which task is fundamentally different from the others?    Solving a differential equation.  Incorrect. Solving a differential equation involves finding solutions.    Finding the general solution to a differential equation.  Incorrect. Finding the general solution is part of finding solutions.    Finding a family of solutions to a differential equation.  Incorrect. Finding a family of solutions is related to identifying all possible solutions.    Verifying a solution to a differential equation.  Correct! Verifying a solution checks if a proposed function satisfies the equation, rather than finding a new one.   "
},
{
  "id": "main-5-4-5-8-5",
  "level": "2",
  "url": "main-5-4-5.html#main-5-4-5-8-5",
  "type": "Reading Question",
  "number": "2.3.4",
  "title": "<em class=\"emphasis\">What is the difference between a general solution and a particular solution?<\/em>",
  "body": " What is the difference between a general solution and a particular solution?    A general solution is a specific solution to a differential equation, while a particular solution is a general form of the solution.  Incorrect. A general solution is a form of the solution that includes arbitrary constants, while a particular solution is a specific member of the family of solutions.    A general solution is a form of the solution that includes arbitrary constants, while a particular solution is a specific member of the family of solutions.  Correct! The general solution represents all possible solutions, while a particular solution is one specific solution.    A general solution is a specific member of the family of solutions, while a particular solution is a form of the solution.  Incorrect. A general solution is a form of the solution that includes arbitrary constants, while a particular solution is a specific member of the family of solutions.    A general solution is a specific solution to a differential equation, while a particular solution is a general form of the solution.  Incorrect. A general solution is a form of the solution that includes arbitrary constants, while a particular solution is a specific member of the family of solutions.   "
},
{
  "id": "main-5-4-5-8-6",
  "level": "2",
  "url": "main-5-4-5.html#main-5-4-5-8-6",
  "type": "Reading Question",
  "number": "2.3.5",
  "title": "<em class=\"emphasis\">Fill in the Blank<\/em>.",
  "body": " Fill in the Blank  When you find the general solution of a differential equation, you are finding the common of each particular solution.     Good Work!      Incorrect. The correct answer starts with an f     "
},
{
  "id": "main-5-4-5-8-7",
  "level": "2",
  "url": "main-5-4-5.html#main-5-4-5-8-7",
  "type": "Reading Question",
  "number": "2.3.6",
  "title": "<em class=\"emphasis\">What role does the general solution play in solving a differential equation?<\/em>",
  "body": "What role does the general solution play in solving a differential equation?   It provides the exact value of the function.  Incorrect. The general solution provides a family of functions, not just one specific value.    It represents a family of functions that satisfy the differential equation.  Correct! The general solution includes all possible solutions, depending on the values of the constants.    It simplifies the differential equation.  Incorrect. While solving the equation involves simplification, the general solution represents the functions that satisfy the equation.    It eliminates the constants from the solution.  Incorrect. The general solution still includes arbitrary constants.   "
},
{
  "id": "main-5-4-5-8-8",
  "level": "2",
  "url": "main-5-4-5.html#main-5-4-5-8-8",
  "type": "Reading Question",
  "number": "2.3.7",
  "title": "<em class=\"emphasis\">What is a family of solutions?<\/em>",
  "body": " What is a family of solutions?    A collection of all possible solutions to a differential equation.  Correct! The family of solutions includes every possible particular solution.    The general solution to a differential equation.  Incorrect. The general solution represents a form of the family of solutions, not the entire set.    A single specific solution to a differential equation.  Incorrect. This describes a particular solution, not the family of solutions.    A solution without any constants.  Incorrect. A solution without constants is typically a particular solution, not the entire family.   "
},
{
  "id": "main-5-4-5-8-9",
  "level": "2",
  "url": "main-5-4-5.html#main-5-4-5-8-9",
  "type": "Reading Question",
  "number": "2.3.8",
  "title": "<em class=\"emphasis\">A general solution always includes arbitrary constants<\/em>.",
  "body": " A general solution always includes arbitrary constants    True  Correct! The general solution represents the form that includes arbitrary constants.    False  Incorrect. A general solution must include arbitrary constants to represent all possible particular solutions.   "
},
{
  "id": "main-5-4-5-8-10",
  "level": "2",
  "url": "main-5-4-5.html#main-5-4-5-8-10",
  "type": "Reading Question",
  "number": "2.3.9",
  "title": "<em class=\"emphasis\">Fill in the Blank<\/em>.",
  "body": " Fill in the Blank A solution is a single solution obtained by assigning specific values to the constants in the general solution.     Good Work!      Incorrect. The correct answer starts with a p     "
},
{
  "id": "main-5-4-5-8-11",
  "level": "2",
  "url": "main-5-4-5.html#main-5-4-5-8-11",
  "type": "Reading Question",
  "number": "2.3.10",
  "title": "<em class=\"emphasis\">In Example 30, we verified that <span class=\"process-math\">\\(y = Ce^{2x}\\)<\/span> was a solution to<div class=\"displaymath process-math\" data-contains-math-knowls=\".\/knowl\/xref\/verification-with-a-constant.html\">\n\\begin{equation*}\ny''' - 4y' = 0\n\\end{equation*}\n<\/div>Based on this, how many solutions must this equation have?<\/em>",
  "body": " In , we verified that was a solution to Based on this, how many solutions must this equation have?     One.  Incorrect. Reason?     Two.  Incorrect. Reason?     Infinitely-Many.  Correct! We can choose any value of C and it will still satisfy this equation. Since there are infinitely-many of numbers to choose from, there are infinitely-many solutions.     Unknown since we don't know .  Incorrect. Reason?    "
},
{
  "id": "main-5-4-6",
  "level": "1",
  "url": "main-5-4-6.html",
  "type": "Section",
  "number": "2.4",
  "title": "Visualizing Solutions",
  "body": "Visualizing Solutions  A powerful way to understand solutions to differential equations is by visualizing them. Consider the differential equation , which has the general solution,   Since each member of the family of solutions comes from a different value of , we can plot a few of them to see how they differ (see ).     Hover over the green curves in the figure to see each particular solution and corresponding value of .   In terms of the types of solutions,   Each green curve in the figure represents a particular solution, with its own specific value of .  The general solution, , provides the framework for all these individual solutions.       Plots of for .    Although the figure only shows a few members of the infinite family of solutions, notice that the green curves never overlap. This means that each curve represents a unique solution. If you were to randomly select a point on the plot, you would, in effect, be selecting a single curve—only one solution can pass through that specific point. This idea is at the heart of where particular solution come from and it will be the focus of the next section.  Check your Understanding   Answer the following questions using the figure and the fact that is the general solution to the differential equation     Select the particular solution in that passes through the point     Incorrect. Hover over the curve in the figure that passes through .     Incorrect. Hover over the curve in the figure that passes through .     Correct!     Incorrect. Hover over the curve in the figure that passes through .     Select the particular solution in that passes through the point     Incorrect. Hover over the curve in the figure that passes through .     Incorrect. Hover over the curve in the figure that passes through .     Incorrect. Hover over the curve in the figure that passes through .     Correct!     Two different particular solutions of could have the same -value    True  Incorrect. The value of is what makes each particular solution different.    False  Correct! Different particular solutions have different values of .     There are infinitely-many particular solutions in a family    True  Correct! Each value of corresponds to a different particular solution.    False  Incorrect. There are infinitely many particular solutions in a family.     Which of the following best describes a family of solutions?    A set of solutions derived from different values of a constant in the general solution.  Correct! Each solution in the family corresponds to a specific value of the constant .    A single, unique solution to the differential equation.  Incorrect. A family of solutions includes multiple possible solutions.    The derivative of a particular solution.  Incorrect. A family of solutions is not about derivatives.    A solution that only applies to specific initial conditions.  Incorrect. A family of solutions includes all possible solutions, not just those for specific conditions.     What is the difference between a general solution and a particular solution?    A general solution includes constants, while a particular solution is a specific case of the general solution with constants fixed.  Correct! The general solution covers all possibilities, while the particular solution is one specific instance.    A general solution is more accurate than a particular solution.  Incorrect. Both types of solutions are valid; they just serve different purposes.    The general solution is found from a particular solution.  Incorrect. The particular solution is found from the general solution.    There are infinitely many general solutions and only one particular solution.  Incorrect. There is only one general solution, but there are infinitely many particular solutions.     Unique Points on Curves   If you randomly select a point on the plot of , what can you say about the curve that passes through it?    Only one solution curve can pass through that specific point.  Correct! A unique solution curve corresponds to each point on the plot.    Several curves may pass through the same point.  Incorrect. Each curve is unique to a specific point.    All curves pass through the same point.  Incorrect. The curves do not overlap.    No curves pass through the selected point.  Incorrect. Each point corresponds to one curve in the family of solutions.     "
},
{
  "id": "family-of-solutions-figure-1",
  "level": "2",
  "url": "main-5-4-6.html#family-of-solutions-figure-1",
  "type": "Figure",
  "number": "32",
  "title": "",
  "body": "  Plots of for .  "
},
{
  "id": "main-5-4-6-6-3",
  "level": "2",
  "url": "main-5-4-6.html#main-5-4-6-6-3",
  "type": "Reading Question",
  "number": "2.4.1",
  "title": "<em class=\"emphasis\">Select the particular solution in Figure 32 that passes through the point <span class=\"process-math\">\\((0,5)\\)<\/span><\/em>.",
  "body": " Select the particular solution in that passes through the point     Incorrect. Hover over the curve in the figure that passes through .     Incorrect. Hover over the curve in the figure that passes through .     Correct!     Incorrect. Hover over the curve in the figure that passes through .   "
},
{
  "id": "main-5-4-6-6-4",
  "level": "2",
  "url": "main-5-4-6.html#main-5-4-6-6-4",
  "type": "Reading Question",
  "number": "2.4.2",
  "title": "<em class=\"emphasis\">Select the particular solution in Figure 32 that passes through the point <span class=\"process-math\">\\((1,1)\\)<\/span><\/em>.",
  "body": " Select the particular solution in that passes through the point     Incorrect. Hover over the curve in the figure that passes through .     Incorrect. Hover over the curve in the figure that passes through .     Incorrect. Hover over the curve in the figure that passes through .     Correct!   "
},
{
  "id": "main-5-4-6-6-5",
  "level": "2",
  "url": "main-5-4-6.html#main-5-4-6-6-5",
  "type": "Reading Question",
  "number": "2.4.3",
  "title": "<em class=\"emphasis\">Two different particular solutions of (4) could have the same <span class=\"process-math\">\\(c\\)<\/span>-value<\/em>.",
  "body": " Two different particular solutions of could have the same -value    True  Incorrect. The value of is what makes each particular solution different.    False  Correct! Different particular solutions have different values of .   "
},
{
  "id": "main-5-4-6-6-6",
  "level": "2",
  "url": "main-5-4-6.html#main-5-4-6-6-6",
  "type": "Reading Question",
  "number": "2.4.4",
  "title": "<em class=\"emphasis\">There are infinitely-many particular solutions in a family<\/em>.",
  "body": " There are infinitely-many particular solutions in a family    True  Correct! Each value of corresponds to a different particular solution.    False  Incorrect. There are infinitely many particular solutions in a family.   "
},
{
  "id": "main-5-4-6-6-7",
  "level": "2",
  "url": "main-5-4-6.html#main-5-4-6-6-7",
  "type": "Reading Question",
  "number": "2.4.5",
  "title": "<em class=\"emphasis\">Which of the following best describes a family of solutions?<\/em>",
  "body": " Which of the following best describes a family of solutions?    A set of solutions derived from different values of a constant in the general solution.  Correct! Each solution in the family corresponds to a specific value of the constant .    A single, unique solution to the differential equation.  Incorrect. A family of solutions includes multiple possible solutions.    The derivative of a particular solution.  Incorrect. A family of solutions is not about derivatives.    A solution that only applies to specific initial conditions.  Incorrect. A family of solutions includes all possible solutions, not just those for specific conditions.   "
},
{
  "id": "main-5-4-6-6-8",
  "level": "2",
  "url": "main-5-4-6.html#main-5-4-6-6-8",
  "type": "Reading Question",
  "number": "2.4.6",
  "title": "<em class=\"emphasis\">What is the difference between a general solution and a particular solution?<\/em>",
  "body": " What is the difference between a general solution and a particular solution?    A general solution includes constants, while a particular solution is a specific case of the general solution with constants fixed.  Correct! The general solution covers all possibilities, while the particular solution is one specific instance.    A general solution is more accurate than a particular solution.  Incorrect. Both types of solutions are valid; they just serve different purposes.    The general solution is found from a particular solution.  Incorrect. The particular solution is found from the general solution.    There are infinitely many general solutions and only one particular solution.  Incorrect. There is only one general solution, but there are infinitely many particular solutions.   "
},
{
  "id": "main-5-4-6-6-9",
  "level": "2",
  "url": "main-5-4-6.html#main-5-4-6-6-9",
  "type": "Reading Question",
  "number": "2.4.7",
  "title": "<em class=\"emphasis\">Unique Points on Curves<\/em>.",
  "body": " Unique Points on Curves   If you randomly select a point on the plot of , what can you say about the curve that passes through it?    Only one solution curve can pass through that specific point.  Correct! A unique solution curve corresponds to each point on the plot.    Several curves may pass through the same point.  Incorrect. Each curve is unique to a specific point.    All curves pass through the same point.  Incorrect. The curves do not overlap.    No curves pass through the selected point.  Incorrect. Each point corresponds to one curve in the family of solutions.   "
},
{
  "id": "main-6-2",
  "level": "1",
  "url": "main-6-2.html",
  "type": "Chapter",
  "number": "3",
  "title": "Direct Integration",
  "body": "Direct Integration      "
},
{
  "id": "main-6-3",
  "level": "1",
  "url": "main-6-3.html",
  "type": "Chapter",
  "number": "4",
  "title": "Separation of Variables",
  "body": "Separation of Variables          "
},
{
  "id": "main-6-4",
  "level": "1",
  "url": "main-6-4.html",
  "type": "Chapter",
  "number": "5",
  "title": "Integrating Factor",
  "body": "Integrating Factor         "
},
{
  "id": "main-7-2",
  "level": "1",
  "url": "main-7-2.html",
  "type": "Chapter",
  "number": "6",
  "title": "Homogeneous",
  "body": "Homogeneous           "
},
{
  "id": "main-7-3",
  "level": "1",
  "url": "main-7-3.html",
  "type": "Chapter",
  "number": "7",
  "title": "Nonhomogeneous",
  "body": "Nonhomogeneous            "
},
{
  "id": "main-7-4",
  "level": "1",
  "url": "main-7-4.html",
  "type": "Chapter",
  "number": "8",
  "title": "Variation of Parameters",
  "body": "Variation of Parameters   "
},
{
  "id": "main-8-2",
  "level": "1",
  "url": "main-8-2.html",
  "type": "Chapter",
  "number": "9",
  "title": "Forward Transforms",
  "body": "Forward Transforms         "
},
{
  "id": "main-8-3",
  "level": "1",
  "url": "main-8-3.html",
  "type": "Chapter",
  "number": "10",
  "title": "Backward Transforms",
  "body": "Backward Transforms        "
},
{
  "id": "main-8-4",
  "level": "1",
  "url": "main-8-4.html",
  "type": "Chapter",
  "number": "11",
  "title": "Solving Equations",
  "body": "Solving Equations       "
},
{
  "id": "main-9-3",
  "level": "1",
  "url": "main-9-3.html",
  "type": "Chapter",
  "number": "12",
  "title": "Linear Systems",
  "body": "Linear Systems  "
},
{
  "id": "main-9-4",
  "level": "1",
  "url": "main-9-4.html",
  "type": "Chapter",
  "number": "13",
  "title": "Nonlinear Systems",
  "body": "Nonlinear Systems  "
},
{
  "id": "main-9-5",
  "level": "1",
  "url": "main-9-5.html",
  "type": "Chapter",
  "number": "14",
  "title": "Applications",
  "body": "Applications  "
},
{
  "id": "main-10-3",
  "level": "1",
  "url": "main-10-3.html",
  "type": "Chapter",
  "number": "15",
  "title": "Euler’s Method",
  "body": "Euler's Method  "
},
{
  "id": "main-10-4",
  "level": "1",
  "url": "main-10-4.html",
  "type": "Chapter",
  "number": "16",
  "title": "Runge-Kutta Methods",
  "body": "Runge-Kutta Methods  "
},
{
  "id": "main-10-5",
  "level": "1",
  "url": "main-10-5.html",
  "type": "Chapter",
  "number": "17",
  "title": "Error Analysis",
  "body": "Error Analysis  "
},
{
  "id": "main-11",
  "level": "1",
  "url": "main-11.html",
  "type": "Appendix",
  "number": "A",
  "title": "Algebra Review",
  "body": "Algebra Review       "
},
{
  "id": "main-12",
  "level": "1",
  "url": "main-12.html",
  "type": "Appendix",
  "number": "B",
  "title": "Details",
  "body": "Details       "
}
]

var ptx_lunr_idx = lunr(function () {
  this.ref('id')
  this.field('title')
  this.field('body')
  this.metadataWhitelist = ['position']

  ptx_lunr_docs.forEach(function (doc) {
    this.add(doc)
  }, this)
})