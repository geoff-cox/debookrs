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
  "body": "An Analogy  When you're learning something new, it's often helpful to connect it to concepts you already know. To grasp what a differential equation is, let's first compare it to standard equations that might feel more familiar. Consider the following three equations, where we aim to solve for :       All three are equations with the same goal—finding the unknown . However, only the third equation is a differential equation because it contains a derivative.  Now, let's try solving for in each case.             In the first equation, we found that is a number, and in the second, it's a function of . But in the third equation, how do we solve for when there is a derivative attached to it? This is exactly the kind of question that differential equations aim to answer.  We'll dive deeper into solving these types of equations soon. For now, there's still plenty more to learn about the basics, so let's keep going!  Check-Point Questions   Differential equations differ from standard equations in that they have   Differential equations differ from standard equations in that they have    a solution   Incorrect. While this statement is generally true, it is not what makes it different from any other equation.     a variable   Incorrect. Any equation could contain a variable.     an unknown   Incorrect. Most equations contain an unknown.     a derivative   Correct! If an equation contains a derivative, it is a differential equation.      Which of the following best describes a differential equation?   Which of the following best describes a differential equation?    An equation involving only algebraic expressions.        An equation involving functions and their derivatives.        An equation involving trigonometric functions.        An equation that changes over time.         What distinguishes a differential equation from a standard equation?   What distinguishes a differential equation from a standard equation?    It contains an unknown variable.  Incorrect. Both standard and differential equations contain unknown variables.    It contains a derivative.  Correct! A differential equation contains one or more derivatives, which differentiates it from a standard equation.    It contains a variable.  Incorrect. Any equation could contain a variable.     "
},
{
  "id": "p1-c1-s1-rq1",
  "level": "2",
  "url": "main-5-3-3-9.html#p1-c1-s1-rq1",
  "type": "Reading Question",
  "number": "1.1.1",
  "title": "<em class=\"emphasis\">Differential equations differ from standard equations in that they have <span class=\"fillin underline\" role=\"img\" aria-label=\"5-character blank\" style=\"width: 2.272727272727273em;\" \/><\/em>.",
  "body": " Differential equations differ from standard equations in that they have   Differential equations differ from standard equations in that they have    a solution   Incorrect. While this statement is generally true, it is not what makes it different from any other equation.     a variable   Incorrect. Any equation could contain a variable.     an unknown   Incorrect. Most equations contain an unknown.     a derivative   Correct! If an equation contains a derivative, it is a differential equation.    "
},
{
  "id": "p1-c1-s1-rq2",
  "level": "2",
  "url": "main-5-3-3-9.html#p1-c1-s1-rq2",
  "type": "Reading Question",
  "number": "1.1.2",
  "title": "<em class=\"emphasis\">Which of the following best describes a differential equation?<\/em>",
  "body": " Which of the following best describes a differential equation?   Which of the following best describes a differential equation?    An equation involving only algebraic expressions.        An equation involving functions and their derivatives.        An equation involving trigonometric functions.        An equation that changes over time.       "
},
{
  "id": "p1-c1-s1-rq3",
  "level": "2",
  "url": "main-5-3-3-9.html#p1-c1-s1-rq3",
  "type": "Reading Question",
  "number": "1.1.3",
  "title": "<em class=\"emphasis\">What distinguishes a differential equation from a standard equation?<\/em>",
  "body": " What distinguishes a differential equation from a standard equation?   What distinguishes a differential equation from a standard equation?    It contains an unknown variable.  Incorrect. Both standard and differential equations contain unknown variables.    It contains a derivative.  Correct! A differential equation contains one or more derivatives, which differentiates it from a standard equation.    It contains a variable.  Incorrect. Any equation could contain a variable.   "
},
{
  "id": "main-5-3-4",
  "level": "1",
  "url": "main-5-3-4.html",
  "type": "Section",
  "number": "1.2",
  "title": "Definition",
  "body": "Definition  Here is the formal definition of a differential equation.   Differential Equation   A differential equation (DE) is an equation that involves one or more derivatives of an unknown function. If the function depends on a single variable, the equation is an ordinary differential equation (ODE) . Otherwise, it is called a partial differential equation (PDE) .     Convention: DE means ODE  Since this text focuses exclusively on ordinary differential equations, any use of DE will imply ODE .  According to the definition, a differential equation must include at least one derivative (e.g., , ) and an equality sign (\"=\"). This distinction helps us identify the following expressions as differential equations: In contrast, the following are not differential equations because they either lack a derivative or an equality sign:   Derivative Notation  We will use either prime notation or Leibniz notation to denote derivatives. For higher-order derivatives, the following conventions apply:     Derivative Order     1  2  3  4   n    Prime          Leibniz           Be careful not to confuse with raised to the power of 7!    Check-Point Questions   An equation that contains an \"=\" sign and at least one derivative is called a derivative equation   An equation that contains an \"=\" sign and at least one derivative is called a derivative equation    True   Incorrect, derivative equation is not a standard term in mathematics.     False   Correct!       The expression is the same as to the power of 18   The expression is the same as to the power of 18    True   Incorrect. Please read the note on derivative notation.     False   Correct!       Identify the differential equation   Identify the differential equation      Correct! This equation involves a derivative, making it a differential equation.       Incorrect. This equation does not contain any derivatives, so it is not a differential equation.       Incorrect. This equation does not contain any derivatives, so it is not a differential equation.       Incorrect. This equation does not contain any derivatives, so it is not a differential equation.      Which of the following is NOT required for an equation to be classified as a differential equation?   Which of the following is NOT required for an equation to be classified as a differential equation?    An unknown function.   Incorrect. A differential equation does include an unknown function, which we are solving for.     An -variable.   Correct! An -variable is not a requirement for a differential equation.     A derivative.   Incorrect. The presence of at least one derivative is essential to define a differential equation.     An \"=\" sign.   Incorrect. An equality sign is required for an equation to be classified as a differential equation.      Click on all the Differential Equations   Click on all the Differential Equations                                       There are only 5 Differential Equations in this set.    "
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
  "id": "p1-c1-s2-rq1",
  "level": "2",
  "url": "main-5-3-4-6.html#p1-c1-s2-rq1",
  "type": "Reading Question",
  "number": "1.2.1",
  "title": "<em class=\"emphasis\">An equation that contains an \"=\" sign and at least one derivative is called a derivative equation<\/em>.",
  "body": " An equation that contains an \"=\" sign and at least one derivative is called a derivative equation   An equation that contains an \"=\" sign and at least one derivative is called a derivative equation    True   Incorrect, derivative equation is not a standard term in mathematics.     False   Correct!     "
},
{
  "id": "p1-c1-s2-rq2",
  "level": "2",
  "url": "main-5-3-4-6.html#p1-c1-s2-rq2",
  "type": "Reading Question",
  "number": "1.2.2",
  "title": "<em class=\"emphasis\">The expression <span class=\"process-math\">\\(z^{(18)}\\)<\/span> is the same as <span class=\"process-math\">\\(z\\)<\/span> to the power of 18<\/em>.",
  "body": " The expression is the same as to the power of 18   The expression is the same as to the power of 18    True   Incorrect. Please read the note on derivative notation.     False   Correct!     "
},
{
  "id": "p1-c1-s2-rq3",
  "level": "2",
  "url": "main-5-3-4-6.html#p1-c1-s2-rq3",
  "type": "Reading Question",
  "number": "1.2.3",
  "title": "<em class=\"emphasis\">Identify the differential equation<\/em>.",
  "body": " Identify the differential equation   Identify the differential equation      Correct! This equation involves a derivative, making it a differential equation.       Incorrect. This equation does not contain any derivatives, so it is not a differential equation.       Incorrect. This equation does not contain any derivatives, so it is not a differential equation.       Incorrect. This equation does not contain any derivatives, so it is not a differential equation.    "
},
{
  "id": "p1-c1-s2-rq4",
  "level": "2",
  "url": "main-5-3-4-6.html#p1-c1-s2-rq4",
  "type": "Reading Question",
  "number": "1.2.4",
  "title": "<em class=\"emphasis\">Which of the following is NOT required for an equation to be classified as a differential equation?<\/em>",
  "body": " Which of the following is NOT required for an equation to be classified as a differential equation?   Which of the following is NOT required for an equation to be classified as a differential equation?    An unknown function.   Incorrect. A differential equation does include an unknown function, which we are solving for.     An -variable.   Correct! An -variable is not a requirement for a differential equation.     A derivative.   Incorrect. The presence of at least one derivative is essential to define a differential equation.     An \"=\" sign.   Incorrect. An equality sign is required for an equation to be classified as a differential equation.    "
},
{
  "id": "p1-c1-s2-rq5",
  "level": "2",
  "url": "main-5-3-4-6.html#p1-c1-s2-rq5",
  "type": "Reading Question",
  "number": "1.2.5",
  "title": "<em class=\"emphasis\">Click on all the Differential Equations<\/em>.",
  "body": " Click on all the Differential Equations   Click on all the Differential Equations                                       There are only 5 Differential Equations in this set.  "
},
{
  "id": "main-5-3-5",
  "level": "1",
  "url": "main-5-3-5.html",
  "type": "Section",
  "number": "1.3",
  "title": "Variables",
  "body": "Variables  In this section, we'll explore the two types of variables found in differential equations: dependent and independent variables. Understanding the roles of these variables is crucial when solving and interpreting differential equations.  Consider the differential equation: This equation involves two variables: and . One of these variables is the unknown that we are trying to solve for, but which one?  Typically, the variable you want to solve for is the one with a derivative applied to it. Here, the term in indicates:  The derivative is being taken with respect to , and  is a function of (since it wouldn't make sense to take the derivative of with respect to unless depends on ).    Therefore, is called the dependent variable because it depends on . On the other hand, is the independent variable .  Dependent & Independent Variables    Dependent Variable:  The variable representing the unknown function we are trying to find. It is always the variable with a derivative applied to it.   Independent Variable:  The variable that the dependent variable is a function of. It does not have a derivative applied to it.       Identify the dependent and independent variables in each equation and state which variable represents the unknown.         Since the derivative appears, it implies that:  is a function of and is the dependent variable .  is the independent variable .  represents the unknown to this differential equation.             The second derivative suggests that:  is a function of and is the dependent variable .  is the independent variable .  represents the unknown to this differential equation.              Here, implies that is the dependent variable . Since no independent variable is explicitly shown, typically the context of the problem would provide it. If not, we can assume it ourselves—perhaps , making the unknown .        Check-Point Questions   Which variable in is the independent variable?   Which variable in is the independent variable?     Yes! is the independent variable.     Incorrect. Review the examples.     Incorrect. Review the examples.     Which variable in is the dependent variable?   Which variable in is the dependent variable?     Incorrect. represents the derivative of the dependent variable with respect to the independent variable.       Incorrect. The dependent variable is the one being differentiated.       Correct! is the dependent variable in this equation.     In a differential equation, the dependent variable has a derivative applied to it   In a differential equation, the dependent variable has a derivative applied to it    True  Correct! The dependent variable in a differential equation always has a derivative applied to it.    False  Incorrect. By definition, a differential equation involves derivatives of the dependent variable.     Which variable in are we solving for?   Which variable in are we solving for?    dependent variable,  Incorrect. is neither the dependent variable, nor what we are solving for.    independent variable,  Incorrect! is the independent variable, but it is not what we are solving for.    dependent variable,  Yes! We are solving for the unknown, .    independent variable,  Incorrect. We are solving for , but it is not the independent variable.     In the differential equation , the dependent variable is  dependent variable:      Correct! The dependent variable is , which depends on .     .*   Incorrect. Review the definitions of dependent and independent variables in the context of differential equations.       "
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
  "id": "p1-c1-s3-rq1",
  "level": "2",
  "url": "main-5-3-5-8.html#p1-c1-s3-rq1",
  "type": "Reading Question",
  "number": "1.3.1",
  "title": "<em class=\"emphasis\">Which variable in <span class=\"process-math\">\\(\\ds (1 - x)y'' - 4xy' + 5y = \\cos x \\)<\/span> is the independent variable?<\/em>",
  "body": " Which variable in is the independent variable?   Which variable in is the independent variable?     Yes! is the independent variable.     Incorrect. Review the examples.     Incorrect. Review the examples.   "
},
{
  "id": "p1-c1-s3-rq2",
  "level": "2",
  "url": "main-5-3-5-8.html#p1-c1-s3-rq2",
  "type": "Reading Question",
  "number": "1.3.2",
  "title": "<em class=\"emphasis\">Which variable in <span class=\"process-math\">\\(\\ds \\frac{dy}{dx} + 2y = 3x^2 \\)<\/span> is the dependent variable?<\/em>",
  "body": " Which variable in is the dependent variable?   Which variable in is the dependent variable?     Incorrect. represents the derivative of the dependent variable with respect to the independent variable.       Incorrect. The dependent variable is the one being differentiated.       Correct! is the dependent variable in this equation.   "
},
{
  "id": "p1-c1-s3-rq3",
  "level": "2",
  "url": "main-5-3-5-8.html#p1-c1-s3-rq3",
  "type": "Reading Question",
  "number": "1.3.3",
  "title": "<em class=\"emphasis\">In a differential equation, the dependent variable has a derivative applied to it<\/em>.",
  "body": " In a differential equation, the dependent variable has a derivative applied to it   In a differential equation, the dependent variable has a derivative applied to it    True  Correct! The dependent variable in a differential equation always has a derivative applied to it.    False  Incorrect. By definition, a differential equation involves derivatives of the dependent variable.   "
},
{
  "id": "p1-c1-s3-rq4",
  "level": "2",
  "url": "main-5-3-5-8.html#p1-c1-s3-rq4",
  "type": "Reading Question",
  "number": "1.3.4",
  "title": "<em class=\"emphasis\">Which variable in <span class=\"process-math\">\\(\\ds \\frac{dP}{ds} + \\frac{P}{s^2} = 17s \\)<\/span> are we solving for?<\/em>",
  "body": " Which variable in are we solving for?   Which variable in are we solving for?    dependent variable,  Incorrect. is neither the dependent variable, nor what we are solving for.    independent variable,  Incorrect! is the independent variable, but it is not what we are solving for.    dependent variable,  Yes! We are solving for the unknown, .    independent variable,  Incorrect. We are solving for , but it is not the independent variable.   "
},
{
  "id": "p1-c1-s3-rq5",
  "level": "2",
  "url": "main-5-3-5-8.html#p1-c1-s3-rq5",
  "type": "Reading Question",
  "number": "1.3.5",
  "title": "<em class=\"emphasis\">In the differential equation <span class=\"process-math\">\\(\\ds \\frac{dx}{dy} = 2xy + 1\\text{,}\\)<\/span> the dependent variable is <span class=\"fillin underline\" role=\"img\" aria-label=\"3-character blank\" style=\"width: 1.363636363636364em;\" \/><\/em>.",
  "body": " In the differential equation , the dependent variable is  dependent variable:      Correct! The dependent variable is , which depends on .     .*   Incorrect. Review the definitions of dependent and independent variables in the context of differential equations.     "
},
{
  "id": "main-5-3-6",
  "level": "1",
  "url": "main-5-3-6.html",
  "type": "Section",
  "number": "1.4",
  "title": "Terms &amp; Coefficients",
  "body": "Terms & Coefficients  This text will frequently refer to terms and coefficients . Here is the definition.  Terms & Coefficients   In differential equations, terms and coefficients are defined as follows:   Terms  The expressions separated by , , or signs.   Coefficients  The objects multiplied by the dependent variable or one of its derivatives.   Constant Term  A term without a dependent variable is called a constant term and is not a coefficient.      Consider the differential equation: . This equation has five terms and four coefficients: , , , and . Notice that coefficients can be functions of the independent variable (like and ) or constants (like and ). The distinction between constant and variable coefficients will become crucial when we study a group of differential equations known as constant-coefficient equations .   Terms & Coefficients in a Differential Equation    Identify the terms and coefficients of the differential equation     The equation can be broken down as follows: . The coefficients are , , and . Notice that and are functions of the independent variable , whereas is a constant.    Check-Point Questions   For the following, assume is the dependent variable as a function of .    Given , what is the coefficient of ?   Given , what is the coefficient of ?    Incorrect. is the coefficient of .    Correct! is the coefficient of the term involving .    Incorrect. is the coefficient of .    Incorrect. is the constant on the right-hand side of the equation.     Given , which of the following is considered a constant term?   Given , which of the following is considered a constant term?    Incorrect. This term contains a derivative of the dependent variable , so it is not a constant term.    Incorrect. This term involves the dependent variable , so it is not a constant term.    Correct! is the constant term because it does not depend on the dependent variable or its derivatives.     is an example of a constant term   is an example of a constant term   True  Correct! In the context of differential equations, is a constant term since it is not multiplied by the dependent variable or one of its derivatives.   False  Incorrect. While is not a constant function, it is a constant term in the context of differential equations.     is the coefficient of the term   is the coefficient of the term   True  Incorrect. The coefficient is the factor multiplying the entire term involving the dependent variable, not the dependent variable itself.   False  Correct! The coefficient is what multiplies the term involving the dependent variable, so in this case, the coefficient of is , not .     The term does not have a coefficient   The term does not have a coefficient   True  Incorrect. Every term in a differential equation has a coefficient, even if that coefficient is simply 1.   False  Correct! The coefficient of is 1, even if it is not explicitly written.     Given , which terms has a function as its coefficient?   Given , which terms has a function as its coefficient?    Correct! is a function of and acts as the coefficient of .    Incorrect. is a constant coefficient, not a function.    Incorrect. is a constant coefficient, not a function.    Incorrect. is on the right-hand side of the equation and is not acting as a coefficient for any term.     Given , which statement best describes the coefficient of ?   Given , which statement best describes the coefficient of ?   It is a constant coefficient  Incorrect. A constant coefficient does not depend on the independent variable.   It is a function of the independent variable  Correct! The coefficient depends on the independent variable .   There is no coefficient  Incorrect. The term has a coefficient, which is .   It is an arbitrary constant  Incorrect. is a specific function of , not an arbitrary constant.     Given , which of the following statements is true?   Given , which of the following statements is true?   The coefficient of is .  Correct! The term has a coefficient of .   The coefficient of is .  Incorrect. The coefficient of is , not .   The coefficient of is .  Incorrect. The correct coefficient of is , not .   There is no constant term in the equation.  Incorrect. The equation does not include a constant term since all terms involve the dependent variable or its derivatives.     Select all the coefficients in the differential equation   Select all the coefficients in the differential equation                           The coefficients in this equation are , , and . Remember, coefficients are the factors multiplied by the dependent variable or its derivatives.   Review the example in this section for more guidance on identifying coefficients.    "
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
  "id": "p1-c1-s4-rq1",
  "level": "2",
  "url": "main-5-3-6-6.html#p1-c1-s4-rq1",
  "type": "Reading Question",
  "number": "1.4.1",
  "title": "<em class=\"emphasis\">Given <span class=\"process-math\">\\(\\ds 5y'' + 2y' - \\cos(t) y = 7\\text{,}\\)<\/span> what is the coefficient of <span class=\"process-math\">\\(\\ds y'\\text{?}\\)<\/span><\/em>",
  "body": " Given , what is the coefficient of ?   Given , what is the coefficient of ?    Incorrect. is the coefficient of .    Correct! is the coefficient of the term involving .    Incorrect. is the coefficient of .    Incorrect. is the constant on the right-hand side of the equation.   "
},
{
  "id": "p1-c1-s4-rq2",
  "level": "2",
  "url": "main-5-3-6-6.html#p1-c1-s4-rq2",
  "type": "Reading Question",
  "number": "1.4.2",
  "title": "<em class=\"emphasis\">Given <span class=\"process-math\">\\(\\ds 3t^2 y' + \\frac{1}{t} y - 4 = 0\\text{,}\\)<\/span> which of the following is considered a constant term?<\/em>",
  "body": " Given , which of the following is considered a constant term?   Given , which of the following is considered a constant term?    Incorrect. This term contains a derivative of the dependent variable , so it is not a constant term.    Incorrect. This term involves the dependent variable , so it is not a constant term.    Correct! is the constant term because it does not depend on the dependent variable or its derivatives.   "
},
{
  "id": "p1-c1-s4-rq3",
  "level": "2",
  "url": "main-5-3-6-6.html#p1-c1-s4-rq3",
  "type": "Reading Question",
  "number": "1.4.3",
  "title": "<em class=\"emphasis\"><span class=\"process-math\">\\(3t\\)<\/span> is an example of a constant term<\/em>.",
  "body": " is an example of a constant term   is an example of a constant term   True  Correct! In the context of differential equations, is a constant term since it is not multiplied by the dependent variable or one of its derivatives.   False  Incorrect. While is not a constant function, it is a constant term in the context of differential equations.   "
},
{
  "id": "p1-c1-s4-rq4",
  "level": "2",
  "url": "main-5-3-6-6.html#p1-c1-s4-rq4",
  "type": "Reading Question",
  "number": "1.4.4",
  "title": "<em class=\"emphasis\"><span class=\"process-math\">\\(y\\)<\/span> is the coefficient of the term <span class=\"process-math\">\\(y \\sin(t)\\)<\/span><\/em>.",
  "body": " is the coefficient of the term   is the coefficient of the term   True  Incorrect. The coefficient is the factor multiplying the entire term involving the dependent variable, not the dependent variable itself.   False  Correct! The coefficient is what multiplies the term involving the dependent variable, so in this case, the coefficient of is , not .   "
},
{
  "id": "p1-c1-s4-rq5",
  "level": "2",
  "url": "main-5-3-6-6.html#p1-c1-s4-rq5",
  "type": "Reading Question",
  "number": "1.4.5",
  "title": "<em class=\"emphasis\">The term <span class=\"process-math\">\\(\\ds y'''\\)<\/span> does not have a coefficient<\/em>.",
  "body": " The term does not have a coefficient   The term does not have a coefficient   True  Incorrect. Every term in a differential equation has a coefficient, even if that coefficient is simply 1.   False  Correct! The coefficient of is 1, even if it is not explicitly written.   "
},
{
  "id": "p1-c1-s4-rq6",
  "level": "2",
  "url": "main-5-3-6-6.html#p1-c1-s4-rq6",
  "type": "Reading Question",
  "number": "1.4.6",
  "title": "<em class=\"emphasis\">Given <span class=\"process-math\">\\(\\ds e^t y''' + 4y' - 3y = \\sin(t)\\text{,}\\)<\/span> which terms has a function as its coefficient?<\/em>",
  "body": " Given , which terms has a function as its coefficient?   Given , which terms has a function as its coefficient?    Correct! is a function of and acts as the coefficient of .    Incorrect. is a constant coefficient, not a function.    Incorrect. is a constant coefficient, not a function.    Incorrect. is on the right-hand side of the equation and is not acting as a coefficient for any term.   "
},
{
  "id": "p1-c1-s4-rq7",
  "level": "2",
  "url": "main-5-3-6-6.html#p1-c1-s4-rq7",
  "type": "Reading Question",
  "number": "1.4.7",
  "title": "<em class=\"emphasis\">Given <span class=\"process-math\">\\(\\ds t^3 y'' + 6 y' - \\ln(t) y = 0\\text{,}\\)<\/span> which statement best describes the coefficient of <span class=\"process-math\">\\(y\\text{?}\\)<\/span><\/em>",
  "body": " Given , which statement best describes the coefficient of ?   Given , which statement best describes the coefficient of ?   It is a constant coefficient  Incorrect. A constant coefficient does not depend on the independent variable.   It is a function of the independent variable  Correct! The coefficient depends on the independent variable .   There is no coefficient  Incorrect. The term has a coefficient, which is .   It is an arbitrary constant  Incorrect. is a specific function of , not an arbitrary constant.   "
},
{
  "id": "p1-c1-s4-rq8",
  "level": "2",
  "url": "main-5-3-6-6.html#p1-c1-s4-rq8",
  "type": "Reading Question",
  "number": "1.4.8",
  "title": "<em class=\"emphasis\">Given <span class=\"process-math\">\\(\\ds\\frac{d^2y}{dt^2} - 3t^2 y' + 4y = 0\\text{,}\\)<\/span> which of the following statements is true?<\/em>",
  "body": " Given , which of the following statements is true?   Given , which of the following statements is true?   The coefficient of is .  Correct! The term has a coefficient of .   The coefficient of is .  Incorrect. The coefficient of is , not .   The coefficient of is .  Incorrect. The correct coefficient of is , not .   There is no constant term in the equation.  Incorrect. The equation does not include a constant term since all terms involve the dependent variable or its derivatives.   "
},
{
  "id": "p1-c1-s4-rq9",
  "level": "2",
  "url": "main-5-3-6-6.html#p1-c1-s4-rq9",
  "type": "Reading Question",
  "number": "1.4.9",
  "title": "<em class=\"emphasis\">Select all the coefficients in the differential equation<\/em>.",
  "body": " Select all the coefficients in the differential equation   Select all the coefficients in the differential equation                           The coefficients in this equation are , , and . Remember, coefficients are the factors multiplied by the dependent variable or its derivatives.   Review the example in this section for more guidance on identifying coefficients.  "
},
{
  "id": "main-5-3-7",
  "level": "1",
  "url": "main-5-3-7.html",
  "type": "Section",
  "number": "1.5",
  "title": "Order",
  "body": "Order  In this section, we'll explore a key concept in differential equations known as order . Think of the order of a differential equation as the number of layers or steps you need to peel away to reveal the original function. The more layers there are, the higher the order, and usually, the more complex the equation.   The order of a differential equation refers to the highest derivative that appears in the equation. For example, if the highest derivative is the first derivative, it's called a first-order differential equation. If the highest derivative is the second derivative, it's called a second-order differential equation, and so on.    Give the order of the following differential equations:          Order = 1. This is a first-order differential equation because the highest derivative is .            Order = 3 . This is a third-order differential equation because the highest derivative is .            Order = 2 This is a second-order differential equation because the highest derivative is .        Caution, Don't Confuse Exponents with Derivatives  It's important to distinguish between exponents and derivatives. For example, in the second example, indicates that the dependent variable is raised to the 8th power, but this is not related to the order of the differential equation.   Check-Point Questions   Which of the following equations is a third-order differential equation?   Which of the following equations is a third-order differential equation?     Correct! The highest derivative here is the third derivative, making it a third-order differential equation.     Incorrect. This is a second-order differential equation.     Incorrect. This is a second-order differential equation.     Incorrect. This is a first-order differential equation.     The order of a differential equation is determined by the number of terms it contains   The order of a differential equation is determined by the number of terms it contains    True  Incorrect. The order is based on the highest derivative, regardless of the number of terms.    False  Correct! The order is determined by the highest derivative, not the number of terms.     The differential equation has order  order:      Correct! The most derivatives applied are two in .     5   Incorrect. Carefully review the definition of order and do not confuse the power of a variable with the order.     .*   Carefully review the definition of order.       The differential equation has order  order:      Correct! The highest derivative is the third derivative .     2   Incorrect. The highest derivative is the third derivative, not the second.     .*   Carefully review the definition of order.       The differential equation has order  order:      Correct! The highest derivative is the fifth derivative .     2   Incorrect. There is a higher derivative in this equation.     3   Incorrect. The third derivative does not appear in this equation.     .*   Carefully review the definition of order.       "
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
  "body": " The order of a differential equation refers to the highest derivative that appears in the equation. For example, if the highest derivative is the first derivative, it's called a first-order differential equation. If the highest derivative is the second derivative, it's called a second-order differential equation, and so on.  "
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
  "id": "p1-c1-s5-rq1",
  "level": "2",
  "url": "main-5-3-7-6.html#p1-c1-s5-rq1",
  "type": "Reading Question",
  "number": "1.5.1",
  "title": "<em class=\"emphasis\">Which of the following equations is a third-order differential equation?<\/em>",
  "body": " Which of the following equations is a third-order differential equation?   Which of the following equations is a third-order differential equation?     Correct! The highest derivative here is the third derivative, making it a third-order differential equation.     Incorrect. This is a second-order differential equation.     Incorrect. This is a second-order differential equation.     Incorrect. This is a first-order differential equation.   "
},
{
  "id": "p1-c1-s5-rq2",
  "level": "2",
  "url": "main-5-3-7-6.html#p1-c1-s5-rq2",
  "type": "Reading Question",
  "number": "1.5.2",
  "title": "<em class=\"emphasis\">The order of a differential equation is determined by the number of terms it contains<\/em>.",
  "body": " The order of a differential equation is determined by the number of terms it contains   The order of a differential equation is determined by the number of terms it contains    True  Incorrect. The order is based on the highest derivative, regardless of the number of terms.    False  Correct! The order is determined by the highest derivative, not the number of terms.   "
},
{
  "id": "p1-c1-s5-rq3",
  "level": "2",
  "url": "main-5-3-7-6.html#p1-c1-s5-rq3",
  "type": "Reading Question",
  "number": "1.5.3",
  "title": "<em class=\"emphasis\">The differential equation <span class=\"process-math\">\\(\\ds (1 - x)y'' - x^4y' + y^5 = \\cos x \\)<\/span> has order <span class=\"fillin underline\" role=\"img\" aria-label=\"3-character blank\" style=\"width: 1.363636363636364em;\" \/><\/em>.",
  "body": " The differential equation has order  order:      Correct! The most derivatives applied are two in .     5   Incorrect. Carefully review the definition of order and do not confuse the power of a variable with the order.     .*   Carefully review the definition of order.     "
},
{
  "id": "p1-c1-s5-rq4",
  "level": "2",
  "url": "main-5-3-7-6.html#p1-c1-s5-rq4",
  "type": "Reading Question",
  "number": "1.5.4",
  "title": "<em class=\"emphasis\">The differential equation <span class=\"process-math\">\\(\\ds y''' + 3y' - 4y = 0 \\)<\/span> has order <span class=\"fillin underline\" role=\"img\" aria-label=\"3-character blank\" style=\"width: 1.363636363636364em;\" \/><\/em>.",
  "body": " The differential equation has order  order:      Correct! The highest derivative is the third derivative .     2   Incorrect. The highest derivative is the third derivative, not the second.     .*   Carefully review the definition of order.     "
},
{
  "id": "p1-c1-s5-rq5",
  "level": "2",
  "url": "main-5-3-7-6.html#p1-c1-s5-rq5",
  "type": "Reading Question",
  "number": "1.5.5",
  "title": "<em class=\"emphasis\">The differential equation <span class=\"process-math\">\\(\\ds t^3 \\frac{d^2y}{dt^2} + \\frac{d^5y}{dt^5} = \\sin(t) \\)<\/span> has order <span class=\"fillin underline\" role=\"img\" aria-label=\"3-character blank\" style=\"width: 1.363636363636364em;\" \/><\/em>.",
  "body": " The differential equation has order  order:      Correct! The highest derivative is the fifth derivative .     2   Incorrect. There is a higher derivative in this equation.     3   Incorrect. The third derivative does not appear in this equation.     .*   Carefully review the definition of order.     "
},
{
  "id": "main-5-3-8",
  "level": "1",
  "url": "main-5-3-8.html",
  "type": "Section",
  "number": "1.6",
  "title": "Linear Terms",
  "body": "Linear Terms  The most informative label you can place on a differential equation is whether it is linear or nonlinear. While linearity often refers to equations that graph as straight lines, the concept of linearity in differential equations is more nuanced. Understanding this distinction is crucial as it significantly influences how the equations are solved and interpreted.  Before jumping in, it may be helpful to revisit meaning of dependent variables, terms and coefficients as we will be referencing them throughout this discussion.  Now, let's define what it means for a term in a differential equation to be linear.  Linear Term    Linear Term  A term that has one of the forms     where is the dependent variable. The coefficient, , can be a function of the independent variable, , but not the dependent variable.      The linearity of a term depends entirely on the dependent variable  The linearity of a term is determined by the presence of a single or derivative of to the power of . The coefficients, play no part in the linearity.    Given the differential equation, , identify each term and label the term as linear or nonlinear.  To determine the linearity of a term we only need to consider the dependent variables (column below). We are looking for a single or derivative of raised to the power of . If we find such a term, we label it as linear. Otherwise, it is nonlinear. Let's separate the different parts in the following table.        Term  Coefficient  Dependent Variables  Linearity       linear       nonlinear       nonlinear       linear       nonlinear       nonlinear             Linearity depends  on this column only      Note, since constant terms do not contain a dependent variable, they are necessarily linear. So, in the context of differential equations, is also a linear term.    To help identify nonlinear terms, here are some common characteristics:  Identifying Nonlinear Terms  A term is nonlinear if it contains a dependent variable, or , that is     Raised to a power other than 1, e.g., or .    Inside another function, e.g., or .    Multiplied or divided by another or , e.g., or .      Let's practice this with one more example.   Determine the linearity of each term in the following differential equations.                    Check-Point Questions   Assume that and are the dependent and independent variables, respectively.    is a linear term   is a linear term   True  Correct! The term is linear because it is a function of the independent variable only.   False  Incorrect, review the examples of linear terms in the section on Linear Terms.     is a linear term   is a linear term   True  Correct! The term is linear.   False  Incorrect. The term is indeed linear.     is a linear term   is a linear term   True  Incorrect, review the rules for identifying nonlinear terms.   False  Correct! A term that includes the derivative of the dependent variable inside another function is nonlinear.     is a linear term   is a linear term   False  Correct! The term is nonlinear because the dependent variable is inside an exponential function.   True  Incorrect. Review the rules for identifying nonlinear terms.     Identify the linear term in the equation:   Identify the linear term in the equation:    Correct! The term is linear because it involves a single derivative of the dependent variable.    Incorrect. This term is nonlinear.    Incorrect. This term is nonlinear because it involves the dependent variable inside a logarithmic function.    Incorrect. This term is linear because it involves the independent variable only.     Which of the following is a nonlinear term?   Which of the following is a nonlinear term?    Incorrect. This is a linear term.    I The term is nonlinear because it involves a derivative inside a trigonometric function.    Incorrect. This is a linear term.    Incorrect. This is a linear term.     A linear term can contain the dependent variable multiplied by the independent variable   A linear term can contain the dependent variable multiplied by the independent variable   True  Correct! For example, is a linear term.   False  Incorrect. Carefully review the examples above.     Which of the following terms is linear?   Which of the following terms is linear?    Incorrect. is nonlinear because the dependent variable is raised to a power other than one.    Correct! is linear because it is a function of the independent variable multiplied by the first derivative of the dependent variable.    Incorrect. is nonlinear because it includes the dependent variable inside another function.    Incorrect. is nonlinear because it involves the product of the dependent variable and its derivative.     Which of the following terms is linear?   Which of the following terms is linear?    Correct! is linear because it is a function of the independent variable multiplied by the second derivative of the dependent variable.    Incorrect. is nonlinear because the dependent variable is raised to a power other than one.    Incorrect. is nonlinear because the dependent variable is squared.    Incorrect. is nonlinear because it involves the product of the dependent variable and a function of the dependent variable.     Which of the following is a characteristic of a nonlinear term?   Which of the following is a characteristic of a nonlinear term?   It involves the dependent variable raised to the first power.  Incorrect. This is a characteristic of a linear term.   It involves the dependent variable only as a constant.  Incorrect. This is a characteristic of a linear term.   It includes the dependent variable inside another function.  Correct! A nonlinear term includes the dependent variable inside another function.   It involves the independent variable only.  Incorrect. This is a characteristic of a linear term.     Which term is an example of a nonlinear term?   Which term is an example of a nonlinear term?    Incorrect. is linear because it is a constant.    Incorrect. is linear because it is a function of the independent variable only.    Correct! is nonlinear because the dependent variable is squared.    Incorrect. is linear because it is a function of the independent variable multiplied by the dependent variable.     Select the Linear Terms  Click on all of the linear terms in the following differential equation.                      In this equation, , , , and are linear terms.   Review     Select the Nonlinear Terms  Click on all of the nonlinear terms in the following differential equation.                         In this equation, and are nonlinear terms.   Review     "
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
  "id": "p1-c1-s6-rq1",
  "level": "2",
  "url": "main-5-3-8-12.html#p1-c1-s6-rq1",
  "type": "Reading Question",
  "number": "1.6.1",
  "title": "<em class=\"emphasis\"><span class=\"process-math\">\\(3t\\)<\/span> is a linear term<\/em>.",
  "body": " is a linear term   is a linear term   True  Correct! The term is linear because it is a function of the independent variable only.   False  Incorrect, review the examples of linear terms in the section on Linear Terms.   "
},
{
  "id": "p1-c1-s6-rq2",
  "level": "2",
  "url": "main-5-3-8-12.html#p1-c1-s6-rq2",
  "type": "Reading Question",
  "number": "1.6.2",
  "title": "<em class=\"emphasis\"><span class=\"process-math\">\\(y \\sin(t)\\)<\/span> is a linear term<\/em>.",
  "body": " is a linear term   is a linear term   True  Correct! The term is linear.   False  Incorrect. The term is indeed linear.   "
},
{
  "id": "p1-c1-s6-rq3",
  "level": "2",
  "url": "main-5-3-8-12.html#p1-c1-s6-rq3",
  "type": "Reading Question",
  "number": "1.6.3",
  "title": "<em class=\"emphasis\"><span class=\"process-math\">\\(t\\sin(y')\\)<\/span> is a linear term<\/em>.",
  "body": " is a linear term   is a linear term   True  Incorrect, review the rules for identifying nonlinear terms.   False  Correct! A term that includes the derivative of the dependent variable inside another function is nonlinear.   "
},
{
  "id": "p1-c1-s6-rq4",
  "level": "2",
  "url": "main-5-3-8-12.html#p1-c1-s6-rq4",
  "type": "Reading Question",
  "number": "1.6.4",
  "title": "<em class=\"emphasis\"><span class=\"process-math\">\\(e^{ty}\\)<\/span> is a linear term<\/em>.",
  "body": " is a linear term   is a linear term   False  Correct! The term is nonlinear because the dependent variable is inside an exponential function.   True  Incorrect. Review the rules for identifying nonlinear terms.   "
},
{
  "id": "p1-c1-s6-rq5",
  "level": "2",
  "url": "main-5-3-8-12.html#p1-c1-s6-rq5",
  "type": "Reading Question",
  "number": "1.6.5",
  "title": "<em class=\"emphasis\">Identify the linear term in the equation: <span class=\"process-math\">\\(\\ds\\frac{1}{t}y'' + y^2 + \\ln(y') = e^t\\)<\/span><\/em>.",
  "body": " Identify the linear term in the equation:   Identify the linear term in the equation:    Correct! The term is linear because it involves a single derivative of the dependent variable.    Incorrect. This term is nonlinear.    Incorrect. This term is nonlinear because it involves the dependent variable inside a logarithmic function.    Incorrect. This term is linear because it involves the independent variable only.   "
},
{
  "id": "p1-c1-s6-rq6",
  "level": "2",
  "url": "main-5-3-8-12.html#p1-c1-s6-rq6",
  "type": "Reading Question",
  "number": "1.6.6",
  "title": "<em class=\"emphasis\">Which of the following is a nonlinear term?<\/em>",
  "body": " Which of the following is a nonlinear term?   Which of the following is a nonlinear term?    Incorrect. This is a linear term.    I The term is nonlinear because it involves a derivative inside a trigonometric function.    Incorrect. This is a linear term.    Incorrect. This is a linear term.   "
},
{
  "id": "p1-c1-s6-rq7",
  "level": "2",
  "url": "main-5-3-8-12.html#p1-c1-s6-rq7",
  "type": "Reading Question",
  "number": "1.6.7",
  "title": "<em class=\"emphasis\">A linear term can contain the dependent variable multiplied by the independent variable<\/em>.",
  "body": " A linear term can contain the dependent variable multiplied by the independent variable   A linear term can contain the dependent variable multiplied by the independent variable   True  Correct! For example, is a linear term.   False  Incorrect. Carefully review the examples above.   "
},
{
  "id": "p1-c1-s6-rq8",
  "level": "2",
  "url": "main-5-3-8-12.html#p1-c1-s6-rq8",
  "type": "Reading Question",
  "number": "1.6.8",
  "title": "<em class=\"emphasis\">Which of the following terms is linear?<\/em>",
  "body": " Which of the following terms is linear?   Which of the following terms is linear?    Incorrect. is nonlinear because the dependent variable is raised to a power other than one.    Correct! is linear because it is a function of the independent variable multiplied by the first derivative of the dependent variable.    Incorrect. is nonlinear because it includes the dependent variable inside another function.    Incorrect. is nonlinear because it involves the product of the dependent variable and its derivative.   "
},
{
  "id": "p1-c1-s6-rq9",
  "level": "2",
  "url": "main-5-3-8-12.html#p1-c1-s6-rq9",
  "type": "Reading Question",
  "number": "1.6.9",
  "title": "<em class=\"emphasis\">Which of the following terms is linear?<\/em>",
  "body": " Which of the following terms is linear?   Which of the following terms is linear?    Correct! is linear because it is a function of the independent variable multiplied by the second derivative of the dependent variable.    Incorrect. is nonlinear because the dependent variable is raised to a power other than one.    Incorrect. is nonlinear because the dependent variable is squared.    Incorrect. is nonlinear because it involves the product of the dependent variable and a function of the dependent variable.   "
},
{
  "id": "p1-c1-s6-rq10",
  "level": "2",
  "url": "main-5-3-8-12.html#p1-c1-s6-rq10",
  "type": "Reading Question",
  "number": "1.6.10",
  "title": "<em class=\"emphasis\">Which of the following is a characteristic of a nonlinear term?<\/em>",
  "body": " Which of the following is a characteristic of a nonlinear term?   Which of the following is a characteristic of a nonlinear term?   It involves the dependent variable raised to the first power.  Incorrect. This is a characteristic of a linear term.   It involves the dependent variable only as a constant.  Incorrect. This is a characteristic of a linear term.   It includes the dependent variable inside another function.  Correct! A nonlinear term includes the dependent variable inside another function.   It involves the independent variable only.  Incorrect. This is a characteristic of a linear term.   "
},
{
  "id": "p1-c1-s6-rq11",
  "level": "2",
  "url": "main-5-3-8-12.html#p1-c1-s6-rq11",
  "type": "Reading Question",
  "number": "1.6.11",
  "title": "<em class=\"emphasis\">Which term is an example of a nonlinear term?<\/em>",
  "body": " Which term is an example of a nonlinear term?   Which term is an example of a nonlinear term?    Incorrect. is linear because it is a constant.    Incorrect. is linear because it is a function of the independent variable only.    Correct! is nonlinear because the dependent variable is squared.    Incorrect. is linear because it is a function of the independent variable multiplied by the dependent variable.   "
},
{
  "id": "p1-c1-s6-rq12",
  "level": "2",
  "url": "main-5-3-8-12.html#p1-c1-s6-rq12",
  "type": "Reading Question",
  "number": "1.6.12",
  "title": "<em class=\"emphasis\">Select the Linear Terms<\/em>.",
  "body": " Select the Linear Terms  Click on all of the linear terms in the following differential equation.                      In this equation, , , , and are linear terms.   Review   "
},
{
  "id": "p1-c1-s6-rq13",
  "level": "2",
  "url": "main-5-3-8-12.html#p1-c1-s6-rq13",
  "type": "Reading Question",
  "number": "1.6.13",
  "title": "<em class=\"emphasis\">Select the Nonlinear Terms<\/em>.",
  "body": " Select the Nonlinear Terms  Click on all of the nonlinear terms in the following differential equation.                         In this equation, and are nonlinear terms.   Review   "
},
{
  "id": "main-5-3-9",
  "level": "1",
  "url": "main-5-3-9.html",
  "type": "Section",
  "number": "1.7",
  "title": "Linearity",
  "body": "Linearity  In the world of differential equations, distinguishing between linear and nonlinear equations is vital. This distinction will often guide you on how to approach solving the equation and what methods to use. The good news is, all the work we did in the previous section will make this task much easier.   A differential equation is linear if it contains only linear terms. That is, it can be expressed as If just one of the terms in the equation is nonlinear, then the entire differential equation is nonlinear .   This definition might seem abstract at first, but it encompasses all possible linear differential equations. In practice, most equations you'll encounter will involve only a few terms, and the challenge lies in identifying whether any of those terms break the rule of linearity. If they do, the equation is nonlinear.   Let's determine whether the following differential equation is linear:   To classify this equation, we need to verify if every term involving and its derivatives is linear. Let's break it down term by term:   Since each term involving or its derivatives is linear, this differential equation is indeed linear.    In summary, recognizing whether a differential equation is linear or nonlinear will help you determine the appropriate methods for solving it. Linear equations allow for a more straightforward approach, while nonlinear equations often require specialized techniques.  Check-Point Questions  The differential equation is linear  The differential equation is linear    True  Correct! This equation is linear as all terms involving and its derivatives appear to the first power, and there are no nonlinear functions of .    False  Incorrect. This equation is indeed linear because both and are to the first power and are not inside any nonlinear functions.     The differential equation, , is   The differential equation, , is   Linear   Yes! This DE is linear. Each term involving or its derivatives, such as , , and , is linear. A linear differential equation contains terms where the dependent variable and its derivatives appear to the first power and are not multiplied by each other.    Nonlinear   No, this is linear. Looking carefully at each term, we see:   Since every term is linear, this differential equation is linear. Review the definition of linear differential equations.      The differential equation, , is   The differential equation, , is   Linear   No, this is nonlinear. Looking carefully at each term, we see:   Since one term is not linear, this differential equation is nonlinear. Revisit the rules for linearity and nonlinearity.    Nonlinear   Yes! This DE is nonlinear since the term is not linear. Nonlinear terms involve functions like sine, logarithms, or powers greater than one when applied to the dependent variable .     The differential equation, , is   The differential equation, , is    Linear  Incorrect. The term makes this equation nonlinear, as it involves the exponential function of the dependent variable.    Nonlinear  Correct! The term introduces nonlinearity into the equation, as it involves the dependent variable inside an exponential function.    Select the linear differential equation  Select the linear differential equation     Incorrect. The term makes this equation nonlinear.     Incorrect. The term makes this equation nonlinear.     Correct! All terms are linear in this equation, making it a linear differential equation.     Incorrect. The term introduces nonlinearity in this equation.    Which term makes the equation nonlinear?  Which term makes the equation nonlinear?     Correct! The term is nonlinear because the dependent variable is raised to the second power.     Incorrect. While this term includes a function of , it is still linear because appears to the first power.     Incorrect. The term is linear because and its derivatives are to the first power.     Select all the linear differential equations   Select all the linear differential equations                Linear equations only involve the dependent variable and its derivatives to the first power, and they won't be inside nonlinear functions like sine or multiplied by each other.   Remember that a linear differential equation contains only linear terms. Four of these equations are linear.    Select all the nonlinear differential equations  Click on all of the linear differential equations.                             Nonlinear equations often have terms where the dependent variable or its derivatives are raised to powers other than one, or are inside functions like sine, logarithms, or are multiplied by each other.   First identify the dependent variable, then carefully look at each term to determine if it is nonlinear.    "
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
  "id": "p1-c1-s7-rq1",
  "level": "2",
  "url": "main-5-3-9-7.html#p1-c1-s7-rq1",
  "type": "Reading Question",
  "number": "1.7.1",
  "title": "<em class=\"emphasis\">The differential equation <span class=\"process-math\">\\(\\frac{dy}{dt} + t^2 y = e^t\\)<\/span> is linear<\/em>.",
  "body": "The differential equation is linear  The differential equation is linear    True  Correct! This equation is linear as all terms involving and its derivatives appear to the first power, and there are no nonlinear functions of .    False  Incorrect. This equation is indeed linear because both and are to the first power and are not inside any nonlinear functions.   "
},
{
  "id": "p1-c1-s7-rq2",
  "level": "2",
  "url": "main-5-3-9-7.html#p1-c1-s7-rq2",
  "type": "Reading Question",
  "number": "1.7.2",
  "title": "<em class=\"emphasis\">The differential equation, <span class=\"process-math\">\\(\\ds y'' + y' \\cos t = 7y \\text{,}\\)<\/span> is <span class=\"fillin underline\" role=\"img\" aria-label=\"8-character blank\" style=\"width: 3.636363636363636em;\" \/><\/em>.",
  "body": " The differential equation, , is   The differential equation, , is   Linear   Yes! This DE is linear. Each term involving or its derivatives, such as , , and , is linear. A linear differential equation contains terms where the dependent variable and its derivatives appear to the first power and are not multiplied by each other.    Nonlinear   No, this is linear. Looking carefully at each term, we see:   Since every term is linear, this differential equation is linear. Review the definition of linear differential equations.    "
},
{
  "id": "p1-c1-s7-rq3",
  "level": "2",
  "url": "main-5-3-9-7.html#p1-c1-s7-rq3",
  "type": "Reading Question",
  "number": "1.7.3",
  "title": "<em class=\"emphasis\">The differential equation, <span class=\"process-math\">\\(\\ds y'' + \\sin(y) = 17t \\text{,}\\)<\/span> is <span class=\"fillin underline\" role=\"img\" aria-label=\"8-character blank\" style=\"width: 3.636363636363636em;\" \/><\/em>.",
  "body": " The differential equation, , is   The differential equation, , is   Linear   No, this is nonlinear. Looking carefully at each term, we see:   Since one term is not linear, this differential equation is nonlinear. Revisit the rules for linearity and nonlinearity.    Nonlinear   Yes! This DE is nonlinear since the term is not linear. Nonlinear terms involve functions like sine, logarithms, or powers greater than one when applied to the dependent variable .    "
},
{
  "id": "p1-c1-s7-rq4",
  "level": "2",
  "url": "main-5-3-9-7.html#p1-c1-s7-rq4",
  "type": "Reading Question",
  "number": "1.7.4",
  "title": "<em class=\"emphasis\">The differential equation, <span class=\"process-math\">\\(\\ds \\frac{d^2x}{dt^2} + e^x = 0 \\text{,}\\)<\/span> is <span class=\"fillin underline\" role=\"img\" aria-label=\"8-character blank\" style=\"width: 3.636363636363636em;\" \/><\/em>.",
  "body": "The differential equation, , is   The differential equation, , is    Linear  Incorrect. The term makes this equation nonlinear, as it involves the exponential function of the dependent variable.    Nonlinear  Correct! The term introduces nonlinearity into the equation, as it involves the dependent variable inside an exponential function.   "
},
{
  "id": "p1-c1-s7-rq5",
  "level": "2",
  "url": "main-5-3-9-7.html#p1-c1-s7-rq5",
  "type": "Reading Question",
  "number": "1.7.5",
  "title": "<em class=\"emphasis\">Select the linear differential equation<\/em>.",
  "body": "Select the linear differential equation  Select the linear differential equation     Incorrect. The term makes this equation nonlinear.     Incorrect. The term makes this equation nonlinear.     Correct! All terms are linear in this equation, making it a linear differential equation.     Incorrect. The term introduces nonlinearity in this equation.   "
},
{
  "id": "p1-c1-s7-rq6",
  "level": "2",
  "url": "main-5-3-9-7.html#p1-c1-s7-rq6",
  "type": "Reading Question",
  "number": "1.7.6",
  "title": "<em class=\"emphasis\">Which term makes the equation <span class=\"process-math\">\\(\\ds y''' + 3y' \\sin(t) + y^2 = 0\\)<\/span> nonlinear?<\/em>",
  "body": "Which term makes the equation nonlinear?  Which term makes the equation nonlinear?     Correct! The term is nonlinear because the dependent variable is raised to the second power.     Incorrect. While this term includes a function of , it is still linear because appears to the first power.     Incorrect. The term is linear because and its derivatives are to the first power.   "
},
{
  "id": "p1-c1-s7-rq7",
  "level": "2",
  "url": "main-5-3-9-7.html#p1-c1-s7-rq7",
  "type": "Reading Question",
  "number": "1.7.7",
  "title": "<em class=\"emphasis\">Select all the linear differential equations<\/em>.",
  "body": " Select all the linear differential equations   Select all the linear differential equations                Linear equations only involve the dependent variable and its derivatives to the first power, and they won't be inside nonlinear functions like sine or multiplied by each other.   Remember that a linear differential equation contains only linear terms. Four of these equations are linear.  "
},
{
  "id": "p1-c1-s7-rq8",
  "level": "2",
  "url": "main-5-3-9-7.html#p1-c1-s7-rq8",
  "type": "Reading Question",
  "number": "1.7.8",
  "title": "<em class=\"emphasis\">Select all the nonlinear differential equations<\/em>.",
  "body": " Select all the nonlinear differential equations  Click on all of the linear differential equations.                             Nonlinear equations often have terms where the dependent variable or its derivatives are raised to powers other than one, or are inside functions like sine, logarithms, or are multiplied by each other.   First identify the dependent variable, then carefully look at each term to determine if it is nonlinear.  "
},
{
  "id": "main-5-3-10",
  "level": "1",
  "url": "main-5-3-10.html",
  "type": "Section",
  "number": "1.8",
  "title": "Summary &amp; Exercises",
  "body": "Summary & Exercises    Summary of the Key Ideas     Differential Equation   Differential equations are equations that contain derivatives, where the unknowns are functions.  They describe how quantities change over time or space.     An Analogy   Like standard equations, differential equations aim to solve for an unknown, but this unknown is a function rather than a number.     Dependent & Independent Variables   Differential equations involve both dependent (unknown function) and independent variables.  The derivatives in the equation apply to the dependent variable.     Terms & Coefficients   Terms in a differential equation are separated by , , or signs.  Coefficients are constants or functions that multiply the dependent variable or its derivatives.     Order of a Differential Equation   The order of a differential equation is determined by the highest derivative present.     Linearity of a Differential Equation   A differential equation is linear if it contains only linear combinations of the dependent variable and its derivatives.  Otherwise, it is nonlinear.          Conceptual Review   Fill in the blanks   Fill in each blank with one of the following terms:   dependent, independent, function, or differential equation .    In this book, DE stands for .  differential equation    The solution to a differential equation is a .  function    The solution to a differential equation is represented by the variable of the equation.  dependent    Solving a differential equation means finding the variable as a function of the variable.  dependent , independent        True or False    A differential equation is an equation that involves one or more integrals of an unknown function.  False . A differential equation is an equation that involves one or more derivatives of an unknown function, not integrals.   The dependent variable is a function of the independent varaible.  True .   The independent variable is a function of the dependent varaible.  False . The dependent variable is the function, which depends on the independent variable.   An Ordinary Differential Equation (ODE) contains more than one independent variable.  False . An Ordinary Differential Equation (ODE) contains exactly one independent variable. If it contained more than one, it would be a Partial Differential Equation (PDE).      What is the dependent variable in the following differential equation?   The dependent variable in this equation is .       Identify the Variable   Identify the dependent and independent variables of the following DEs:    The first equation has dependent variable and independent variable .  The second has dependent variable and independent variable .    Identify the Variables    For each of the following differential equations, identify the independent variable and the dependent variable.      independent variable:   dependent variable:       independent variable:   dependent variable:       independent variable:   dependent variable:       independent variable:   dependent variable:       independent variable:   dependent variable:       independent variable:   dependent variable:       independent variable:   dependent variable:       independent variable:   dependent variable:     Determine the Order   For each of the following differential equations, identify the dependent variable and the order.      dependent variable:   2nd order      dependent variable:   3rd order      dependent variable:   4th order      dependent variable:   2nd order      dependent variable:   2nd order      dependent variable:   2nd order      dependent variable:   3rd order      dependent variable:   2nd order      dependent variable:   1st order      dependent variable:   2nd order      dependent variable:   1st order      dependent variable:   1st order    Variables & Linearity   For each of the following differential equations, identify the independent and dependent variables, the order, and whether it is linear or nonlinear. If nonlinear, give one term in the expression that breaks the linearity.      independent variable:   dependent variable:   2nd order  linear      independent variable:   dependent variable:   3rd order  nonlinear, term:       independent variable:   dependent variable:   4th order  linear      independent variable:   dependent variable:   2nd order  nonlinear, term:       independent variable:   dependent variable:   2nd order  nonlinear, term:       independent variable:   dependent variable:   2nd order  nonlinear, term: or       independent variable:   dependent variable:   3rd order  linear      independent variable:   dependent variable:   2nd order  nonlinear, term:       independent variable:   dependent variable:   1st order  nonlinear, term:       independent variable:   dependent variable:   2nd order  linear      independent variable:   dependent variable:   1st order  linear      independent variable:   dependent variable:   1st order  nonlinear, term:       Conceptual Review   Fill in the blanks   Fill in each blank with one of the following terms:   dependent, independent, function, or differential equation .    In this book, DE stands for .  differential equation    The solution to a differential equation is a .  function    The solution to a differential equation is represented by the variable of the equation.  dependent    Solving a differential equation means finding the variable as a function of the variable.  dependent , independent        True or False    A differential equation is an equation that involves one or more integrals of an unknown function.  False . A differential equation is an equation that involves one or more derivatives of an unknown function, not integrals.   The dependent variable is a function of the independent varaible.  True .   The independent variable is a function of the dependent varaible.  False . The dependent variable is the function, which depends on the independent variable.   An Ordinary Differential Equation (ODE) contains more than one independent variable.  False . An Ordinary Differential Equation (ODE) contains exactly one independent variable. If it contained more than one, it would be a Partial Differential Equation (PDE).      What is the dependent variable in the following differential equation?   The dependent variable in this equation is .       Identify the Variable   Identify the dependent and independent variables of the following DEs:    The first equation has dependent variable and independent variable .  The second has dependent variable and independent variable .    Identify the Variables    For each of the following differential equations, identify the independent variable and the dependent variable.      independent variable:   dependent variable:       independent variable:   dependent variable:       independent variable:   dependent variable:       independent variable:   dependent variable:       independent variable:   dependent variable:       independent variable:   dependent variable:       independent variable:   dependent variable:       independent variable:   dependent variable:     Determine the Order   For each of the following differential equations, identify the dependent variable and the order.      dependent variable:   2nd order      dependent variable:   3rd order      dependent variable:   4th order      dependent variable:   2nd order      dependent variable:   2nd order      dependent variable:   2nd order      dependent variable:   3rd order      dependent variable:   2nd order      dependent variable:   1st order      dependent variable:   2nd order      dependent variable:   1st order      dependent variable:   1st order    Variables & Linearity   For each of the following differential equations, identify the independent and dependent variables, the order, and whether it is linear or nonlinear. If nonlinear, give one term in the expression that breaks the linearity.      independent variable:   dependent variable:   2nd order  linear      independent variable:   dependent variable:   3rd order  nonlinear, term:       independent variable:   dependent variable:   4th order  linear      independent variable:   dependent variable:   2nd order  nonlinear, term:       independent variable:   dependent variable:   2nd order  nonlinear, term:       independent variable:   dependent variable:   2nd order  nonlinear, term: or       independent variable:   dependent variable:   3rd order  linear      independent variable:   dependent variable:   2nd order  nonlinear, term:       independent variable:   dependent variable:   1st order  nonlinear, term:       independent variable:   dependent variable:   2nd order  linear      independent variable:   dependent variable:   1st order  linear      independent variable:   dependent variable:   1st order  nonlinear, term:      "
},
{
  "id": "main-5-3-10-2-1",
  "level": "2",
  "url": "main-5-3-10.html#main-5-3-10-2-1",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Differential Equation An Analogy Dependent & Independent Variables Terms & Coefficients Order of a Differential Equation Linearity of a Differential Equation "
},
{
  "id": "main-5-3-10-3-1-2",
  "level": "2",
  "url": "main-5-3-10-3.html#main-5-3-10-3-1-2",
  "type": "Exercise",
  "number": "1.8.1",
  "title": "<em class=\"emphasis\">Fill in the blanks<\/em>.",
  "body": " Fill in the blanks   Fill in each blank with one of the following terms:   dependent, independent, function, or differential equation .    In this book, DE stands for .  differential equation    The solution to a differential equation is a .  function    The solution to a differential equation is represented by the variable of the equation.  dependent    Solving a differential equation means finding the variable as a function of the variable.  dependent , independent      "
},
{
  "id": "main-5-3-10-3-1-3",
  "level": "2",
  "url": "main-5-3-10-3.html#main-5-3-10-3-1-3",
  "type": "Exercise",
  "number": "1.8.2",
  "title": "<em class=\"emphasis\">True or False<\/em>.",
  "body": " True or False    A differential equation is an equation that involves one or more integrals of an unknown function.  False . A differential equation is an equation that involves one or more derivatives of an unknown function, not integrals.   The dependent variable is a function of the independent varaible.  True .   The independent variable is a function of the dependent varaible.  False . The dependent variable is the function, which depends on the independent variable.   An Ordinary Differential Equation (ODE) contains more than one independent variable.  False . An Ordinary Differential Equation (ODE) contains exactly one independent variable. If it contained more than one, it would be a Partial Differential Equation (PDE).    "
},
{
  "id": "main-5-3-10-3-1-4",
  "level": "2",
  "url": "main-5-3-10-3.html#main-5-3-10-3-1-4",
  "type": "Exercise",
  "number": "1.8.3",
  "title": "",
  "body": " What is the dependent variable in the following differential equation?   The dependent variable in this equation is .    "
},
{
  "id": "main-5-3-10-3-2",
  "level": "2",
  "url": "main-5-3-10-3.html#main-5-3-10-3-2",
  "type": "Exercise",
  "number": "1.8.4",
  "title": "<em class=\"emphasis\">Identify the Variable<\/em>.",
  "body": " Identify the Variable   Identify the dependent and independent variables of the following DEs:    The first equation has dependent variable and independent variable .  The second has dependent variable and independent variable .  "
},
{
  "id": "main-5-3-10-3-3-3",
  "level": "2",
  "url": "main-5-3-10-3.html#main-5-3-10-3-3-3",
  "type": "Exercise",
  "number": "1.8.5",
  "title": "",
  "body": "   independent variable:   dependent variable:   "
},
{
  "id": "main-5-3-10-3-3-4",
  "level": "2",
  "url": "main-5-3-10-3.html#main-5-3-10-3-3-4",
  "type": "Exercise",
  "number": "1.8.6",
  "title": "",
  "body": "   independent variable:   dependent variable:   "
},
{
  "id": "main-5-3-10-3-3-5",
  "level": "2",
  "url": "main-5-3-10-3.html#main-5-3-10-3-3-5",
  "type": "Exercise",
  "number": "1.8.7",
  "title": "",
  "body": "   independent variable:   dependent variable:   "
},
{
  "id": "main-5-3-10-3-3-6",
  "level": "2",
  "url": "main-5-3-10-3.html#main-5-3-10-3-3-6",
  "type": "Exercise",
  "number": "1.8.8",
  "title": "",
  "body": "   independent variable:   dependent variable:   "
},
{
  "id": "main-5-3-10-3-3-7",
  "level": "2",
  "url": "main-5-3-10-3.html#main-5-3-10-3-3-7",
  "type": "Exercise",
  "number": "1.8.9",
  "title": "",
  "body": "   independent variable:   dependent variable:   "
},
{
  "id": "main-5-3-10-3-3-8",
  "level": "2",
  "url": "main-5-3-10-3.html#main-5-3-10-3-3-8",
  "type": "Exercise",
  "number": "1.8.10",
  "title": "",
  "body": "   independent variable:   dependent variable:   "
},
{
  "id": "main-5-3-10-3-3-9",
  "level": "2",
  "url": "main-5-3-10-3.html#main-5-3-10-3-3-9",
  "type": "Exercise",
  "number": "1.8.11",
  "title": "",
  "body": "   independent variable:   dependent variable:   "
},
{
  "id": "main-5-3-10-3-3-10",
  "level": "2",
  "url": "main-5-3-10-3.html#main-5-3-10-3-3-10",
  "type": "Exercise",
  "number": "1.8.12",
  "title": "",
  "body": "   independent variable:   dependent variable:   "
},
{
  "id": "main-5-3-10-3-4-3",
  "level": "2",
  "url": "main-5-3-10-3.html#main-5-3-10-3-4-3",
  "type": "Exercise",
  "number": "1.8.13",
  "title": "",
  "body": "   dependent variable:   2nd order  "
},
{
  "id": "main-5-3-10-3-4-4",
  "level": "2",
  "url": "main-5-3-10-3.html#main-5-3-10-3-4-4",
  "type": "Exercise",
  "number": "1.8.14",
  "title": "",
  "body": "   dependent variable:   3rd order  "
},
{
  "id": "main-5-3-10-3-4-5",
  "level": "2",
  "url": "main-5-3-10-3.html#main-5-3-10-3-4-5",
  "type": "Exercise",
  "number": "1.8.15",
  "title": "",
  "body": "   dependent variable:   4th order  "
},
{
  "id": "main-5-3-10-3-4-6",
  "level": "2",
  "url": "main-5-3-10-3.html#main-5-3-10-3-4-6",
  "type": "Exercise",
  "number": "1.8.16",
  "title": "",
  "body": "   dependent variable:   2nd order  "
},
{
  "id": "main-5-3-10-3-4-7",
  "level": "2",
  "url": "main-5-3-10-3.html#main-5-3-10-3-4-7",
  "type": "Exercise",
  "number": "1.8.17",
  "title": "",
  "body": "   dependent variable:   2nd order  "
},
{
  "id": "main-5-3-10-3-4-8",
  "level": "2",
  "url": "main-5-3-10-3.html#main-5-3-10-3-4-8",
  "type": "Exercise",
  "number": "1.8.18",
  "title": "",
  "body": "   dependent variable:   2nd order  "
},
{
  "id": "main-5-3-10-3-4-9",
  "level": "2",
  "url": "main-5-3-10-3.html#main-5-3-10-3-4-9",
  "type": "Exercise",
  "number": "1.8.19",
  "title": "",
  "body": "   dependent variable:   3rd order  "
},
{
  "id": "main-5-3-10-3-4-10",
  "level": "2",
  "url": "main-5-3-10-3.html#main-5-3-10-3-4-10",
  "type": "Exercise",
  "number": "1.8.20",
  "title": "",
  "body": "   dependent variable:   2nd order  "
},
{
  "id": "main-5-3-10-3-4-11",
  "level": "2",
  "url": "main-5-3-10-3.html#main-5-3-10-3-4-11",
  "type": "Exercise",
  "number": "1.8.21",
  "title": "",
  "body": "   dependent variable:   1st order  "
},
{
  "id": "main-5-3-10-3-4-12",
  "level": "2",
  "url": "main-5-3-10-3.html#main-5-3-10-3-4-12",
  "type": "Exercise",
  "number": "1.8.22",
  "title": "",
  "body": "   dependent variable:   2nd order  "
},
{
  "id": "main-5-3-10-3-4-13",
  "level": "2",
  "url": "main-5-3-10-3.html#main-5-3-10-3-4-13",
  "type": "Exercise",
  "number": "1.8.23",
  "title": "",
  "body": "   dependent variable:   1st order  "
},
{
  "id": "main-5-3-10-3-4-14",
  "level": "2",
  "url": "main-5-3-10-3.html#main-5-3-10-3-4-14",
  "type": "Exercise",
  "number": "1.8.24",
  "title": "",
  "body": "   dependent variable:   1st order  "
},
{
  "id": "main-5-3-10-3-5-3",
  "level": "2",
  "url": "main-5-3-10-3.html#main-5-3-10-3-5-3",
  "type": "Exercise",
  "number": "1.8.25",
  "title": "",
  "body": "   independent variable:   dependent variable:   2nd order  linear  "
},
{
  "id": "main-5-3-10-3-5-4",
  "level": "2",
  "url": "main-5-3-10-3.html#main-5-3-10-3-5-4",
  "type": "Exercise",
  "number": "1.8.26",
  "title": "",
  "body": "   independent variable:   dependent variable:   3rd order  nonlinear, term:   "
},
{
  "id": "main-5-3-10-3-5-5",
  "level": "2",
  "url": "main-5-3-10-3.html#main-5-3-10-3-5-5",
  "type": "Exercise",
  "number": "1.8.27",
  "title": "",
  "body": "   independent variable:   dependent variable:   4th order  linear  "
},
{
  "id": "main-5-3-10-3-5-6",
  "level": "2",
  "url": "main-5-3-10-3.html#main-5-3-10-3-5-6",
  "type": "Exercise",
  "number": "1.8.28",
  "title": "",
  "body": "   independent variable:   dependent variable:   2nd order  nonlinear, term:   "
},
{
  "id": "main-5-3-10-3-5-7",
  "level": "2",
  "url": "main-5-3-10-3.html#main-5-3-10-3-5-7",
  "type": "Exercise",
  "number": "1.8.29",
  "title": "",
  "body": "   independent variable:   dependent variable:   2nd order  nonlinear, term:   "
},
{
  "id": "main-5-3-10-3-5-8",
  "level": "2",
  "url": "main-5-3-10-3.html#main-5-3-10-3-5-8",
  "type": "Exercise",
  "number": "1.8.30",
  "title": "",
  "body": "   independent variable:   dependent variable:   2nd order  nonlinear, term: or   "
},
{
  "id": "main-5-3-10-3-5-9",
  "level": "2",
  "url": "main-5-3-10-3.html#main-5-3-10-3-5-9",
  "type": "Exercise",
  "number": "1.8.31",
  "title": "",
  "body": "   independent variable:   dependent variable:   3rd order  linear  "
},
{
  "id": "main-5-3-10-3-5-10",
  "level": "2",
  "url": "main-5-3-10-3.html#main-5-3-10-3-5-10",
  "type": "Exercise",
  "number": "1.8.32",
  "title": "",
  "body": "   independent variable:   dependent variable:   2nd order  nonlinear, term:   "
},
{
  "id": "main-5-3-10-3-5-11",
  "level": "2",
  "url": "main-5-3-10-3.html#main-5-3-10-3-5-11",
  "type": "Exercise",
  "number": "1.8.33",
  "title": "",
  "body": "   independent variable:   dependent variable:   1st order  nonlinear, term:   "
},
{
  "id": "main-5-3-10-3-5-12",
  "level": "2",
  "url": "main-5-3-10-3.html#main-5-3-10-3-5-12",
  "type": "Exercise",
  "number": "1.8.34",
  "title": "",
  "body": "   independent variable:   dependent variable:   2nd order  linear  "
},
{
  "id": "main-5-3-10-3-5-13",
  "level": "2",
  "url": "main-5-3-10-3.html#main-5-3-10-3-5-13",
  "type": "Exercise",
  "number": "1.8.35",
  "title": "",
  "body": "   independent variable:   dependent variable:   1st order  linear  "
},
{
  "id": "main-5-3-10-3-5-14",
  "level": "2",
  "url": "main-5-3-10-3.html#main-5-3-10-3-5-14",
  "type": "Exercise",
  "number": "1.8.36",
  "title": "",
  "body": "   independent variable:   dependent variable:   1st order  nonlinear, term:   "
},
{
  "id": "main-5-3-10-4-1-2",
  "level": "2",
  "url": "main-5-3-10-4.html#main-5-3-10-4-1-2",
  "type": "Exercise",
  "number": "1.8.1",
  "title": "<em class=\"emphasis\">Fill in the blanks<\/em>.",
  "body": " Fill in the blanks   Fill in each blank with one of the following terms:   dependent, independent, function, or differential equation .    In this book, DE stands for .  differential equation    The solution to a differential equation is a .  function    The solution to a differential equation is represented by the variable of the equation.  dependent    Solving a differential equation means finding the variable as a function of the variable.  dependent , independent      "
},
{
  "id": "main-5-3-10-4-1-3",
  "level": "2",
  "url": "main-5-3-10-4.html#main-5-3-10-4-1-3",
  "type": "Exercise",
  "number": "1.8.2",
  "title": "<em class=\"emphasis\">True or False<\/em>.",
  "body": " True or False    A differential equation is an equation that involves one or more integrals of an unknown function.  False . A differential equation is an equation that involves one or more derivatives of an unknown function, not integrals.   The dependent variable is a function of the independent varaible.  True .   The independent variable is a function of the dependent varaible.  False . The dependent variable is the function, which depends on the independent variable.   An Ordinary Differential Equation (ODE) contains more than one independent variable.  False . An Ordinary Differential Equation (ODE) contains exactly one independent variable. If it contained more than one, it would be a Partial Differential Equation (PDE).    "
},
{
  "id": "main-5-3-10-4-1-4",
  "level": "2",
  "url": "main-5-3-10-4.html#main-5-3-10-4-1-4",
  "type": "Exercise",
  "number": "1.8.3",
  "title": "",
  "body": " What is the dependent variable in the following differential equation?   The dependent variable in this equation is .    "
},
{
  "id": "main-5-3-10-4-2",
  "level": "2",
  "url": "main-5-3-10-4.html#main-5-3-10-4-2",
  "type": "Exercise",
  "number": "1.8.4",
  "title": "<em class=\"emphasis\">Identify the Variable<\/em>.",
  "body": " Identify the Variable   Identify the dependent and independent variables of the following DEs:    The first equation has dependent variable and independent variable .  The second has dependent variable and independent variable .  "
},
{
  "id": "main-5-3-10-4-3-3",
  "level": "2",
  "url": "main-5-3-10-4.html#main-5-3-10-4-3-3",
  "type": "Exercise",
  "number": "1.8.5",
  "title": "",
  "body": "   independent variable:   dependent variable:   "
},
{
  "id": "main-5-3-10-4-3-4",
  "level": "2",
  "url": "main-5-3-10-4.html#main-5-3-10-4-3-4",
  "type": "Exercise",
  "number": "1.8.6",
  "title": "",
  "body": "   independent variable:   dependent variable:   "
},
{
  "id": "main-5-3-10-4-3-5",
  "level": "2",
  "url": "main-5-3-10-4.html#main-5-3-10-4-3-5",
  "type": "Exercise",
  "number": "1.8.7",
  "title": "",
  "body": "   independent variable:   dependent variable:   "
},
{
  "id": "main-5-3-10-4-3-6",
  "level": "2",
  "url": "main-5-3-10-4.html#main-5-3-10-4-3-6",
  "type": "Exercise",
  "number": "1.8.8",
  "title": "",
  "body": "   independent variable:   dependent variable:   "
},
{
  "id": "main-5-3-10-4-3-7",
  "level": "2",
  "url": "main-5-3-10-4.html#main-5-3-10-4-3-7",
  "type": "Exercise",
  "number": "1.8.9",
  "title": "",
  "body": "   independent variable:   dependent variable:   "
},
{
  "id": "main-5-3-10-4-3-8",
  "level": "2",
  "url": "main-5-3-10-4.html#main-5-3-10-4-3-8",
  "type": "Exercise",
  "number": "1.8.10",
  "title": "",
  "body": "   independent variable:   dependent variable:   "
},
{
  "id": "main-5-3-10-4-3-9",
  "level": "2",
  "url": "main-5-3-10-4.html#main-5-3-10-4-3-9",
  "type": "Exercise",
  "number": "1.8.11",
  "title": "",
  "body": "   independent variable:   dependent variable:   "
},
{
  "id": "main-5-3-10-4-3-10",
  "level": "2",
  "url": "main-5-3-10-4.html#main-5-3-10-4-3-10",
  "type": "Exercise",
  "number": "1.8.12",
  "title": "",
  "body": "   independent variable:   dependent variable:   "
},
{
  "id": "main-5-3-10-4-4-3",
  "level": "2",
  "url": "main-5-3-10-4.html#main-5-3-10-4-4-3",
  "type": "Exercise",
  "number": "1.8.13",
  "title": "",
  "body": "   dependent variable:   2nd order  "
},
{
  "id": "main-5-3-10-4-4-4",
  "level": "2",
  "url": "main-5-3-10-4.html#main-5-3-10-4-4-4",
  "type": "Exercise",
  "number": "1.8.14",
  "title": "",
  "body": "   dependent variable:   3rd order  "
},
{
  "id": "main-5-3-10-4-4-5",
  "level": "2",
  "url": "main-5-3-10-4.html#main-5-3-10-4-4-5",
  "type": "Exercise",
  "number": "1.8.15",
  "title": "",
  "body": "   dependent variable:   4th order  "
},
{
  "id": "main-5-3-10-4-4-6",
  "level": "2",
  "url": "main-5-3-10-4.html#main-5-3-10-4-4-6",
  "type": "Exercise",
  "number": "1.8.16",
  "title": "",
  "body": "   dependent variable:   2nd order  "
},
{
  "id": "main-5-3-10-4-4-7",
  "level": "2",
  "url": "main-5-3-10-4.html#main-5-3-10-4-4-7",
  "type": "Exercise",
  "number": "1.8.17",
  "title": "",
  "body": "   dependent variable:   2nd order  "
},
{
  "id": "main-5-3-10-4-4-8",
  "level": "2",
  "url": "main-5-3-10-4.html#main-5-3-10-4-4-8",
  "type": "Exercise",
  "number": "1.8.18",
  "title": "",
  "body": "   dependent variable:   2nd order  "
},
{
  "id": "main-5-3-10-4-4-9",
  "level": "2",
  "url": "main-5-3-10-4.html#main-5-3-10-4-4-9",
  "type": "Exercise",
  "number": "1.8.19",
  "title": "",
  "body": "   dependent variable:   3rd order  "
},
{
  "id": "main-5-3-10-4-4-10",
  "level": "2",
  "url": "main-5-3-10-4.html#main-5-3-10-4-4-10",
  "type": "Exercise",
  "number": "1.8.20",
  "title": "",
  "body": "   dependent variable:   2nd order  "
},
{
  "id": "main-5-3-10-4-4-11",
  "level": "2",
  "url": "main-5-3-10-4.html#main-5-3-10-4-4-11",
  "type": "Exercise",
  "number": "1.8.21",
  "title": "",
  "body": "   dependent variable:   1st order  "
},
{
  "id": "main-5-3-10-4-4-12",
  "level": "2",
  "url": "main-5-3-10-4.html#main-5-3-10-4-4-12",
  "type": "Exercise",
  "number": "1.8.22",
  "title": "",
  "body": "   dependent variable:   2nd order  "
},
{
  "id": "main-5-3-10-4-4-13",
  "level": "2",
  "url": "main-5-3-10-4.html#main-5-3-10-4-4-13",
  "type": "Exercise",
  "number": "1.8.23",
  "title": "",
  "body": "   dependent variable:   1st order  "
},
{
  "id": "main-5-3-10-4-4-14",
  "level": "2",
  "url": "main-5-3-10-4.html#main-5-3-10-4-4-14",
  "type": "Exercise",
  "number": "1.8.24",
  "title": "",
  "body": "   dependent variable:   1st order  "
},
{
  "id": "main-5-3-10-4-5-3",
  "level": "2",
  "url": "main-5-3-10-4.html#main-5-3-10-4-5-3",
  "type": "Exercise",
  "number": "1.8.25",
  "title": "",
  "body": "   independent variable:   dependent variable:   2nd order  linear  "
},
{
  "id": "main-5-3-10-4-5-4",
  "level": "2",
  "url": "main-5-3-10-4.html#main-5-3-10-4-5-4",
  "type": "Exercise",
  "number": "1.8.26",
  "title": "",
  "body": "   independent variable:   dependent variable:   3rd order  nonlinear, term:   "
},
{
  "id": "main-5-3-10-4-5-5",
  "level": "2",
  "url": "main-5-3-10-4.html#main-5-3-10-4-5-5",
  "type": "Exercise",
  "number": "1.8.27",
  "title": "",
  "body": "   independent variable:   dependent variable:   4th order  linear  "
},
{
  "id": "main-5-3-10-4-5-6",
  "level": "2",
  "url": "main-5-3-10-4.html#main-5-3-10-4-5-6",
  "type": "Exercise",
  "number": "1.8.28",
  "title": "",
  "body": "   independent variable:   dependent variable:   2nd order  nonlinear, term:   "
},
{
  "id": "main-5-3-10-4-5-7",
  "level": "2",
  "url": "main-5-3-10-4.html#main-5-3-10-4-5-7",
  "type": "Exercise",
  "number": "1.8.29",
  "title": "",
  "body": "   independent variable:   dependent variable:   2nd order  nonlinear, term:   "
},
{
  "id": "main-5-3-10-4-5-8",
  "level": "2",
  "url": "main-5-3-10-4.html#main-5-3-10-4-5-8",
  "type": "Exercise",
  "number": "1.8.30",
  "title": "",
  "body": "   independent variable:   dependent variable:   2nd order  nonlinear, term: or   "
},
{
  "id": "main-5-3-10-4-5-9",
  "level": "2",
  "url": "main-5-3-10-4.html#main-5-3-10-4-5-9",
  "type": "Exercise",
  "number": "1.8.31",
  "title": "",
  "body": "   independent variable:   dependent variable:   3rd order  linear  "
},
{
  "id": "main-5-3-10-4-5-10",
  "level": "2",
  "url": "main-5-3-10-4.html#main-5-3-10-4-5-10",
  "type": "Exercise",
  "number": "1.8.32",
  "title": "",
  "body": "   independent variable:   dependent variable:   2nd order  nonlinear, term:   "
},
{
  "id": "main-5-3-10-4-5-11",
  "level": "2",
  "url": "main-5-3-10-4.html#main-5-3-10-4-5-11",
  "type": "Exercise",
  "number": "1.8.33",
  "title": "",
  "body": "   independent variable:   dependent variable:   1st order  nonlinear, term:   "
},
{
  "id": "main-5-3-10-4-5-12",
  "level": "2",
  "url": "main-5-3-10-4.html#main-5-3-10-4-5-12",
  "type": "Exercise",
  "number": "1.8.34",
  "title": "",
  "body": "   independent variable:   dependent variable:   2nd order  linear  "
},
{
  "id": "main-5-3-10-4-5-13",
  "level": "2",
  "url": "main-5-3-10-4.html#main-5-3-10-4-5-13",
  "type": "Exercise",
  "number": "1.8.35",
  "title": "",
  "body": "   independent variable:   dependent variable:   1st order  linear  "
},
{
  "id": "main-5-3-10-4-5-14",
  "level": "2",
  "url": "main-5-3-10-4.html#main-5-3-10-4-5-14",
  "type": "Exercise",
  "number": "1.8.36",
  "title": "",
  "body": "   independent variable:   dependent variable:   1st order  nonlinear, term:   "
},
{
  "id": "main-5-4-3",
  "level": "1",
  "url": "main-5-4-3.html",
  "type": "Section",
  "number": "2.1",
  "title": "What is a Solution?",
  "body": "What is a Solution?  Regardless what kind of equation you are working with, a solution is a value or function that satisfies the equation. The term satisfies simply means that when you plug the value into the equation, it simplifies to a statement that is undeniably true. This undeniably true statement is sometimes called an identity. For example, suppose I want to check if and are solutions to the equation . To do this, we verify that both and  satisfy the equation by separately plugging and in for each , simplify and see if we end up with an undeniably true statement, like so        Since yields a true statement we say it satisfies the equation and is a solution. In contrast, does not give a true statement, so it does not satisfy the equation and is not a solution.  The same idea applies to differential equations, except in that solutions to differential equations are functions instead of numbers . To see this, let's verify if and are solutions to the differential equation .  Separately plugging and into the equation yields        Since results in a false statement, it does not satisfy the equation and is not a solution. However, does satisfy the equation and is a solution.  To summarize, verifying a solution involves substituting the function into the differential equation and ensuring that the equality is satisfied.  Check-Point Questions   A solution to a differential equation is a function that the equation   Fill-in Answer:  (Only lower case letters)     \\s*satisf(y|ies|ied|ying)?\\s*   A solution to a differential equation is a function that satisfies the equation.     \\s*solves\\s*   Close and technically not incorrect, but we are looking for satisfies .     .*   Incorrect. Carefully review the term we use in the first paragraph.       What does it mean for a function to satisfy a differential equation?   What does it mean for a function to satisfy a differential equation?    If you plug the function into the equation, you get a true statement.   Yes, a function that satisfies a differential equation yields a true statement when plugged into the equation.     If you plug the function into the equation, you get the solution.   Incorrect. The function is being checked to see if it is a solution, you do not get the solution by plugging it in.     If you take the derivative of the function, you get a true statement.   Incorrect. Carefully read the section again.     If you integrate the function, you get a true statement.   Incorrect. Carefully read the section again.      The function, , satisfies the differential equation    is not a solution since     Which variable in equation represents the solution?   variable that represents the solution:     \\s*u\\s*   Yes, the solution to the differential equation is the dependent variable .     \\s*t\\s*   No, is what the solution depends on, but it is not the solution itself.     .*   Incorrect. Carefully review the section and try again.       In general, a solution to a differential equation is a   In general, a solution to a differential equation is a    constant   It is possible for a solution to be a constant, but not in general.     function   Yes, when you solve a differential equation, you get a function.     number   It is possible for a solution to be a number, but not in general.     limit   Sorry, no.      Which variable in does the solution depend on?   Which variable in does the solution depend on?    dependent variable,  Incorrect. The solution depends on , but is not a dependent variable.    independent variable,  Yes! the solution, , depends on the independent variable .    dependent variable,  Incorrect. is the solution, so it does not depend on .    independent variable,  Incorrect. The variable is not the independent variable.    What is the primary goal of solving a differential equation?  What is the primary goal of solving a differential equation?    To find an unknown function that satisfies the equation.  Correct! The goal of solving a differential equation is to find the function that meets the equation's conditions.    To find the derivative of a function.  Incorrect. While derivatives are involved, the goal is to find the function, not just its derivative.    To identify the constants in an equation.  Incorrect. Identifying constants might be part of the process, but it is not the primary goal.    To determine the independent variable.  Incorrect. The independent variable is usually known; we solve for the dependent variable.     "
},
{
  "id": "p1-c2-s1-rq1",
  "level": "2",
  "url": "main-5-4-3-6.html#p1-c2-s1-rq1",
  "type": "Reading Question",
  "number": "2.1.1",
  "title": "<em class=\"emphasis\">A solution to a differential equation is a function that <span class=\"fillin underline\" role=\"img\" aria-label=\"10-character blank\" style=\"width: 4.545454545454546em;\" \/> the equation<\/em>.",
  "body": " A solution to a differential equation is a function that the equation   Fill-in Answer:  (Only lower case letters)     \\s*satisf(y|ies|ied|ying)?\\s*   A solution to a differential equation is a function that satisfies the equation.     \\s*solves\\s*   Close and technically not incorrect, but we are looking for satisfies .     .*   Incorrect. Carefully review the term we use in the first paragraph.     "
},
{
  "id": "p1-c2-s1-rq2",
  "level": "2",
  "url": "main-5-4-3-6.html#p1-c2-s1-rq2",
  "type": "Reading Question",
  "number": "2.1.2",
  "title": "<em class=\"emphasis\">What does it mean for a function to satisfy a differential equation?<\/em>",
  "body": " What does it mean for a function to satisfy a differential equation?   What does it mean for a function to satisfy a differential equation?    If you plug the function into the equation, you get a true statement.   Yes, a function that satisfies a differential equation yields a true statement when plugged into the equation.     If you plug the function into the equation, you get the solution.   Incorrect. The function is being checked to see if it is a solution, you do not get the solution by plugging it in.     If you take the derivative of the function, you get a true statement.   Incorrect. Carefully read the section again.     If you integrate the function, you get a true statement.   Incorrect. Carefully read the section again.    "
},
{
  "id": "p1-c2-s1-rq3",
  "level": "2",
  "url": "main-5-4-3-6.html#p1-c2-s1-rq3",
  "type": "Reading Question",
  "number": "2.1.3",
  "title": "<em class=\"emphasis\">The function, <span class=\"process-math\">\\(y = x^3\\text{,}\\)<\/span> satisfies the differential equation <span class=\"process-math\">\\(y' = 3y\\)<\/span><\/em>.",
  "body": " The function, , satisfies the differential equation    is not a solution since   "
},
{
  "id": "p1-c2-s1-rq4",
  "level": "2",
  "url": "main-5-4-3-6.html#p1-c2-s1-rq4",
  "type": "Reading Question",
  "number": "2.1.4",
  "title": "<em class=\"emphasis\">Which variable in equation <span class=\"process-math\">\\(\\ds u'' + t^2 u = 0 \\)<\/span> represents the solution?<\/em>",
  "body": " Which variable in equation represents the solution?   variable that represents the solution:     \\s*u\\s*   Yes, the solution to the differential equation is the dependent variable .     \\s*t\\s*   No, is what the solution depends on, but it is not the solution itself.     .*   Incorrect. Carefully review the section and try again.     "
},
{
  "id": "p1-c2-s1-rq5",
  "level": "2",
  "url": "main-5-4-3-6.html#p1-c2-s1-rq5",
  "type": "Reading Question",
  "number": "2.1.5",
  "title": "<em class=\"emphasis\">In general, a “solution” to a differential equation is a <span class=\"fillin underline\" role=\"img\" aria-label=\"8-character blank\" style=\"width: 3.636363636363636em;\" \/><\/em>.",
  "body": " In general, a solution to a differential equation is a   In general, a solution to a differential equation is a    constant   It is possible for a solution to be a constant, but not in general.     function   Yes, when you solve a differential equation, you get a function.     number   It is possible for a solution to be a number, but not in general.     limit   Sorry, no.    "
},
{
  "id": "p1-c2-s1-rq6",
  "level": "2",
  "url": "main-5-4-3-6.html#p1-c2-s1-rq6",
  "type": "Reading Question",
  "number": "2.1.6",
  "title": "<em class=\"emphasis\">Which variable in <span class=\"process-math\">\\(\\ds \\frac{dP}{ds} + \\frac{P}{s^2} = 17s \\)<\/span> does the solution depend on?<\/em>",
  "body": " Which variable in does the solution depend on?   Which variable in does the solution depend on?    dependent variable,  Incorrect. The solution depends on , but is not a dependent variable.    independent variable,  Yes! the solution, , depends on the independent variable .    dependent variable,  Incorrect. is the solution, so it does not depend on .    independent variable,  Incorrect. The variable is not the independent variable.   "
},
{
  "id": "p1-c2-s1-rq7",
  "level": "2",
  "url": "main-5-4-3-6.html#p1-c2-s1-rq7",
  "type": "Reading Question",
  "number": "2.1.7",
  "title": "<em class=\"emphasis\">What is the primary goal of solving a differential equation?<\/em>",
  "body": "What is the primary goal of solving a differential equation?  What is the primary goal of solving a differential equation?    To find an unknown function that satisfies the equation.  Correct! The goal of solving a differential equation is to find the function that meets the equation's conditions.    To find the derivative of a function.  Incorrect. While derivatives are involved, the goal is to find the function, not just its derivative.    To identify the constants in an equation.  Incorrect. Identifying constants might be part of the process, but it is not the primary goal.    To determine the independent variable.  Incorrect. The independent variable is usually known; we solve for the dependent variable.   "
},
{
  "id": "main-5-4-4",
  "level": "1",
  "url": "main-5-4-4.html",
  "type": "Section",
  "number": "2.2",
  "title": "Verifying Solutions",
  "body": "Verifying Solutions  In the previous section, we discussed what it means for a function to be a solution to a differential equation. Now, we turn our attention to how we can verify that a proposed function is indeed a solution.  The process of verifying a solution is straightforward: you substitute the proposed function into the differential equation and check whether the equation holds true. This simple test helps ensure that the function satisfies the relationship defined by the differential equation. Tip: Before verifying, move all terms to one side Remember, the following differential equations are identical: . Meaning that you are free to use either form when verifying solutions. For beginners, it is often easier to verify solutions using the second form, as you just have to show the left-side of equation simplifies to zero, giving you . Let's look at a few examples.   Verify the given solutions for each differential equation. A. Verify that is a solution to .   Let's begin by moving all terms to the left-side of the equation.   To reduce errors and break the problem into more manageable steps, we will compute and simplify the derivatives appearing in the equation.   Finally, we substitute in and and simplify. Therefore, is a solution to    B. Verify that is a solution to .   As before, we compute since it appears in the equation and move all terms to the left-side.   Plug and in and simplify. Therefore, is not a solution to      Verify that both and are solutions to .  Find and since they appear in the equation.   Plug and into the DE and simplify. Therefore, is a solution to     Find and since they appear in the DE.   Plug and into the DE and simplify. Therefore, is a solution to      Verify that is a solution to  .   Find and since they appear in the equation and move all terms to the left-side.   Plug in and and simplify. Therefore, is a solution to     You can even verify that a function is a solution to a differential equation when the function contains constants as the following example shows.   Verify that is a solution to .  Move terms to left:   Find since it appears in the DE.   Plug into the DE and simplify. Therefore, is a solution to . In fact, it is the general solution, but we don't show that here.     As you work through more complex differential equations, this verification process becomes a valuable tool. In the next section, we'll discuss the different types of solutions you will encounter and how you can visualize them.  Check-Point Questions   Moving all terms of a differential equation to one side of the equation is a required step for verifying the solution to a differential equation.   Moving all terms of a differential equation to one side of the equation is a required step for verifying the solution to a differential equation.    True  Incorrect. Read the note provided in this section.     False  Correct! This is not a required step, but it can sometimes simplify the process.     is a solution to  is a solution to the differential equation .   True  Incorrect.  is not a solution since      False  Correct!  is not a solution since       List the steps needed to verify is a solution to     Drag the step on the left to the appropriate step order on the right.    Review the examples above to see the steps in verifying a solution.    Compute  Step 1    Compute  Step 2    Plug in  Step 3    Simplify both sides  Step 4    Check for  Step 5     A differential equation has one solution      True  Incorrect.  shows a differential equation with two solutions.     False  Correct!     Consider the differential equation with missing right-hand side: . Assuming is a solution to this equation, which of the following is a possible right-hand side?        Incorrect. Plug and into the left-side and simplify.       Incorrect. Plug and into the left-side and simplify.       Correct! Plugging and into the left-side gives and to get a true statement, the right-hand side must be .      "
},
{
  "id": "move-terms-when-verifying",
  "level": "2",
  "url": "main-5-4-4.html#move-terms-when-verifying",
  "type": "Note",
  "number": "17",
  "title": "Tip: Before verifying, move all terms to one side.",
  "body": "Tip: Before verifying, move all terms to one side Remember, the following differential equations are identical: . Meaning that you are free to use either form when verifying solutions. For beginners, it is often easier to verify solutions using the second form, as you just have to show the left-side of equation simplifies to zero, giving you . "
},
{
  "id": "main-5-4-4-4",
  "level": "2",
  "url": "main-5-4-4.html#main-5-4-4-4",
  "type": "Example",
  "number": "18",
  "title": "",
  "body": " Verify the given solutions for each differential equation. A. Verify that is a solution to .   Let's begin by moving all terms to the left-side of the equation.   To reduce errors and break the problem into more manageable steps, we will compute and simplify the derivatives appearing in the equation.   Finally, we substitute in and and simplify. Therefore, is a solution to    B. Verify that is a solution to .   As before, we compute since it appears in the equation and move all terms to the left-side.   Plug and in and simplify. Therefore, is not a solution to    "
},
{
  "id": "de-two-solutions",
  "level": "2",
  "url": "main-5-4-4.html#de-two-solutions",
  "type": "Example",
  "number": "19",
  "title": "",
  "body": " Verify that both and are solutions to .  Find and since they appear in the equation.   Plug and into the DE and simplify. Therefore, is a solution to     Find and since they appear in the DE.   Plug and into the DE and simplify. Therefore, is a solution to    "
},
{
  "id": "main-5-4-4-6",
  "level": "2",
  "url": "main-5-4-4.html#main-5-4-4-6",
  "type": "Example",
  "number": "20",
  "title": "",
  "body": " Verify that is a solution to  .   Find and since they appear in the equation and move all terms to the left-side.   Plug in and and simplify. Therefore, is a solution to    "
},
{
  "id": "two-constant-solution-verification",
  "level": "2",
  "url": "main-5-4-4.html#two-constant-solution-verification",
  "type": "Example",
  "number": "21",
  "title": "",
  "body": " Verify that is a solution to .  Move terms to left:   Find since it appears in the DE.   Plug into the DE and simplify. Therefore, is a solution to . In fact, it is the general solution, but we don't show that here.    "
},
{
  "id": "p1-c2-s2-rq1",
  "level": "2",
  "url": "main-5-4-4-10.html#p1-c2-s2-rq1",
  "type": "Reading Question",
  "number": "2.2.1",
  "title": "<em class=\"emphasis\">Moving all terms of a differential equation to one side of the equation is a required step for verifying the solution to a differential equation.<\/em>.",
  "body": " Moving all terms of a differential equation to one side of the equation is a required step for verifying the solution to a differential equation.   Moving all terms of a differential equation to one side of the equation is a required step for verifying the solution to a differential equation.    True  Incorrect. Read the note provided in this section.     False  Correct! This is not a required step, but it can sometimes simplify the process.   "
},
{
  "id": "p1-c2-s2-rq2",
  "level": "2",
  "url": "main-5-4-4-10.html#p1-c2-s2-rq2",
  "type": "Reading Question",
  "number": "2.2.2",
  "title": "<em class=\"emphasis\"><span class=\"process-math\">\\(y = x^2 + 3\\)<\/span> is a solution to <span class=\"process-math\">\\(\\ds\\frac{dy}{dx} - 3 = 2x\\)<\/span><\/em>.",
  "body": " is a solution to  is a solution to the differential equation .   True  Incorrect.  is not a solution since      False  Correct!  is not a solution since     "
},
{
  "id": "p1-c2-s2-rq3",
  "level": "2",
  "url": "main-5-4-4-10.html#p1-c2-s2-rq3",
  "type": "Reading Question",
  "number": "2.2.3",
  "title": "<em class=\"emphasis\">List the steps needed to verify <span class=\"process-math\">\\(s = \\cos(3x)\\)<\/span> is a solution to <span class=\"process-math\">\\(s'' - 6s' + 9s = 0\\)<\/span><\/em>.",
  "body": " List the steps needed to verify is a solution to     Drag the step on the left to the appropriate step order on the right.    Review the examples above to see the steps in verifying a solution.    Compute  Step 1    Compute  Step 2    Plug in  Step 3    Simplify both sides  Step 4    Check for  Step 5   "
},
{
  "id": "p1-c2-s2-rq4",
  "level": "2",
  "url": "main-5-4-4-10.html#p1-c2-s2-rq4",
  "type": "Reading Question",
  "number": "2.2.4",
  "title": "<em class=\"emphasis\">A differential equation has one solution<\/em>.",
  "body": " A differential equation has one solution      True  Incorrect.  shows a differential equation with two solutions.     False  Correct!   "
},
{
  "id": "p1-c2-s2-rq5",
  "level": "2",
  "url": "main-5-4-4-10.html#p1-c2-s2-rq5",
  "type": "Reading Question",
  "number": "2.2.5",
  "title": "<em class=\"emphasis\">Consider the differential equation with missing right-hand side:<div class=\"displaymath process-math\">\n\\begin{equation*}\ny'' - \\frac{4}{x}y' = \\fillinmath{XXXXX}\\text{.}\n\\end{equation*}\n<\/div>Assuming <span class=\"process-math\">\\(y = 2x^3\\)<\/span> is a solution to this equation, which of the following is a possible right-hand side?<\/em>",
  "body": " Consider the differential equation with missing right-hand side: . Assuming is a solution to this equation, which of the following is a possible right-hand side?        Incorrect. Plug and into the left-side and simplify.       Incorrect. Plug and into the left-side and simplify.       Correct! Plugging and into the left-side gives and to get a true statement, the right-hand side must be .    "
},
{
  "id": "main-5-4-5",
  "level": "1",
  "url": "main-5-4-5.html",
  "type": "Section",
  "number": "2.3",
  "title": "Types of Solutions",
  "body": "Types of Solutions  At this point, you should comfortable with the idea that a solution to a differential equation is a function that satisfies it . You have also seen that a single differential equation can have more than one solution . However, this begs the question:   How many solutions does a differential equation have?   The answer depends on the context of the problem, and that's what we will explore in this section. Let's kick things off with an example.   Show that the functions are solutions to the differential equation .  Verifying each function individually would be repetitive because they all follow the same pattern: , where can be any constant. Let's prove that is a solution.  First, compute :   Now, substitute and into the differential equation:  Therefore, is a solution, and the specific value of does not matter.     From the above example, you can see that the function satisfies the differential equation for any value of . This leads to an important observation:  How many choices for are there?   Of course, the answer is infinitely many! This means the equation has an infinite number of solutions. This brings us to some key terms related to solutions of differential equations.    Don't assume a function that satisfies a DE is a general solution!   A function that contains constants and satisfies a differential equation does not mean it is the general solution since it could be missing a term. For example, you could easily show that is a solution to , but you already know from that is a solution, which is more general than .   Types of Solutions     Family of Solutions  The collection of all possible solutions of a differential equation.    General Solution  The common form of all the solutions in the family. This includes arbitrary constants that can take any value.    Particular Solution  A single solution obtained by assigning specific values to the constants in the general solution.      Applying these terms to our previous example, we can summarize that:  is the general solution of the equation .  is one particular solution in the family of solutions .  The family of solutions consists of all functions of the form .    Understanding the different types of solutions—general, particular, and families of solutions—is crucial as you continue to explore differential equations. In the upcoming sections, we'll talk more about where particular solutions come from.  Check-Point Questions   A family of solutions can be viewed as the collection of all particular solutions   A family of solutions can be viewed as the collection of all particular solutions    True  Correct! A family of solutions includes all possible particular solutions.    False  Incorrect. A family of solutions is a set of all possible solutions, not just one particular solution.     A particular solution can be viewed as a member of the family of solutions   A particular solution can be viewed as a member of the family of solutions    True  Correct! A particular solution is one of the many solutions in the family of solutions.    False  Incorrect. A particular solution is a specific member of the family of solutions.     Which task is fundamentally different from the others?   Which task is fundamentally different from the others?    Solving a differential equation.  Incorrect. Solving a differential equation involves finding solutions.    Finding the general solution to a differential equation.  Incorrect. Finding the general solution is part of finding solutions.    Finding a family of solutions to a differential equation.  Incorrect. Finding a family of solutions is related to identifying all possible solutions.    Verifying a solution to a differential equation.  Correct! Verifying a solution checks if a proposed function satisfies the equation, rather than finding a new one.     What is the difference between a general solution and a particular solution?   What is the difference between a general solution and a particular solution?    A general solution is a specific solution to a differential equation, while a particular solution is a general form of the solution.  Incorrect. A general solution is a form of the solution that includes arbitrary constants, while a particular solution is a specific member of the family of solutions.    A general solution is a form of the solution that includes arbitrary constants, while a particular solution is a specific member of the family of solutions.  Correct! The general solution represents all possible solutions, while a particular solution is one specific solution.    A general solution is a specific member of the family of solutions, while a particular solution is a form of the solution.  Incorrect. A general solution is a form of the solution that includes arbitrary constants, while a particular solution is a specific member of the family of solutions.    A general solution is a specific solution to a differential equation, while a particular solution is a general form of the solution.  Incorrect. A general solution is a form of the solution that includes arbitrary constants, while a particular solution is a specific member of the family of solutions.     Fill in the Blank  When you find the general solution of a differential equation, you are finding the common of each particular solution.     Good Work!      Incorrect. The correct answer starts with an f      What role does the general solution play in solving a differential equation?  What role does the general solution play in solving a differential equation?    It provides the exact value of the function.  Incorrect. The general solution provides a family of functions, not just one specific value.    It represents a family of functions that satisfy the differential equation.  Correct! The general solution includes all possible solutions, depending on the values of the constants.    It simplifies the differential equation.  Incorrect. While solving the equation involves simplification, the general solution represents the functions that satisfy the equation.    It eliminates the constants from the solution.  Incorrect. The general solution still includes arbitrary constants.     What is a family of solutions?   What is a family of solutions?    A collection of all possible solutions to a differential equation.  Correct! The family of solutions includes every possible particular solution.    The general solution to a differential equation.  Incorrect. The general solution represents a form of the family of solutions, not the entire set.    A single specific solution to a differential equation.  Incorrect. This describes a particular solution, not the family of solutions.    A solution without any constants.  Incorrect. A solution without constants is typically a particular solution, not the entire family.     A general solution always includes arbitrary constants   A general solution always includes arbitrary constants    True  Correct! The general solution represents the form that includes arbitrary constants.    False  Incorrect. A general solution must include arbitrary constants to represent all possible particular solutions.     Fill in the Blank A solution is a single solution obtained by assigning specific values to the constants in the general solution.     Good Work!      Incorrect. The correct answer starts with a p       In , we verified that was a solution to Based on this, how many solutions must this equation have?     One  Incorrect. Reason?     Two  Incorrect. Reason?     Infinitely-Many  Correct! We can choose any value of C and it will still satisfy this equation. Since there are infinitely-many of numbers to choose from, there are infinitely-many solutions.     Unknown since we don't know  Incorrect. Reason?      "
},
{
  "id": "verification-with-a-constant",
  "level": "2",
  "url": "main-5-4-5.html#verification-with-a-constant",
  "type": "Example",
  "number": "22",
  "title": "",
  "body": " Show that the functions are solutions to the differential equation .  Verifying each function individually would be repetitive because they all follow the same pattern: , where can be any constant. Let's prove that is a solution.  First, compute :   Now, substitute and into the differential equation:  Therefore, is a solution, and the specific value of does not matter.    "
},
{
  "id": "main-5-4-5-5",
  "level": "2",
  "url": "main-5-4-5.html#main-5-4-5-5",
  "type": "Note",
  "number": "23",
  "title": "<em class=\"emphasis\">Don’t assume a function that satisfies a DE is a general solution!<\/em>",
  "body": " Don't assume a function that satisfies a DE is a general solution!   A function that contains constants and satisfies a differential equation does not mean it is the general solution since it could be missing a term. For example, you could easily show that is a solution to , but you already know from that is a solution, which is more general than .  "
},
{
  "id": "types-of-solutions",
  "level": "2",
  "url": "main-5-4-5.html#types-of-solutions",
  "type": "Definition",
  "number": "24",
  "title": "Types of Solutions.",
  "body": "Types of Solutions     Family of Solutions  The collection of all possible solutions of a differential equation.    General Solution  The common form of all the solutions in the family. This includes arbitrary constants that can take any value.    Particular Solution  A single solution obtained by assigning specific values to the constants in the general solution.     "
},
{
  "id": "p1-c2-s3-rq1",
  "level": "2",
  "url": "main-5-4-5-9.html#p1-c2-s3-rq1",
  "type": "Reading Question",
  "number": "2.3.1",
  "title": "<em class=\"emphasis\">A family of solutions can be viewed as the collection of all particular solutions<\/em>.",
  "body": " A family of solutions can be viewed as the collection of all particular solutions   A family of solutions can be viewed as the collection of all particular solutions    True  Correct! A family of solutions includes all possible particular solutions.    False  Incorrect. A family of solutions is a set of all possible solutions, not just one particular solution.   "
},
{
  "id": "p1-c2-s3-rq2",
  "level": "2",
  "url": "main-5-4-5-9.html#p1-c2-s3-rq2",
  "type": "Reading Question",
  "number": "2.3.2",
  "title": "<em class=\"emphasis\">A particular solution can be viewed as a member of the family of solutions<\/em>.",
  "body": " A particular solution can be viewed as a member of the family of solutions   A particular solution can be viewed as a member of the family of solutions    True  Correct! A particular solution is one of the many solutions in the family of solutions.    False  Incorrect. A particular solution is a specific member of the family of solutions.   "
},
{
  "id": "p1-c2-s3-rq3",
  "level": "2",
  "url": "main-5-4-5-9.html#p1-c2-s3-rq3",
  "type": "Reading Question",
  "number": "2.3.3",
  "title": "<em class=\"emphasis\">Which task is fundamentally different from the others?<\/em>",
  "body": " Which task is fundamentally different from the others?   Which task is fundamentally different from the others?    Solving a differential equation.  Incorrect. Solving a differential equation involves finding solutions.    Finding the general solution to a differential equation.  Incorrect. Finding the general solution is part of finding solutions.    Finding a family of solutions to a differential equation.  Incorrect. Finding a family of solutions is related to identifying all possible solutions.    Verifying a solution to a differential equation.  Correct! Verifying a solution checks if a proposed function satisfies the equation, rather than finding a new one.   "
},
{
  "id": "p1-c2-s3-rq4",
  "level": "2",
  "url": "main-5-4-5-9.html#p1-c2-s3-rq4",
  "type": "Reading Question",
  "number": "2.3.4",
  "title": "<em class=\"emphasis\">What is the difference between a general solution and a particular solution?<\/em>",
  "body": " What is the difference between a general solution and a particular solution?   What is the difference between a general solution and a particular solution?    A general solution is a specific solution to a differential equation, while a particular solution is a general form of the solution.  Incorrect. A general solution is a form of the solution that includes arbitrary constants, while a particular solution is a specific member of the family of solutions.    A general solution is a form of the solution that includes arbitrary constants, while a particular solution is a specific member of the family of solutions.  Correct! The general solution represents all possible solutions, while a particular solution is one specific solution.    A general solution is a specific member of the family of solutions, while a particular solution is a form of the solution.  Incorrect. A general solution is a form of the solution that includes arbitrary constants, while a particular solution is a specific member of the family of solutions.    A general solution is a specific solution to a differential equation, while a particular solution is a general form of the solution.  Incorrect. A general solution is a form of the solution that includes arbitrary constants, while a particular solution is a specific member of the family of solutions.   "
},
{
  "id": "p1-c2-s3-rq5",
  "level": "2",
  "url": "main-5-4-5-9.html#p1-c2-s3-rq5",
  "type": "Reading Question",
  "number": "2.3.5",
  "title": "<em class=\"emphasis\">Fill in the Blank<\/em>.",
  "body": " Fill in the Blank  When you find the general solution of a differential equation, you are finding the common of each particular solution.     Good Work!      Incorrect. The correct answer starts with an f     "
},
{
  "id": "p1-c2-s3-rq6",
  "level": "2",
  "url": "main-5-4-5-9.html#p1-c2-s3-rq6",
  "type": "Reading Question",
  "number": "2.3.6",
  "title": "<em class=\"emphasis\">What role does the general solution play in solving a differential equation?<\/em>",
  "body": "What role does the general solution play in solving a differential equation?  What role does the general solution play in solving a differential equation?    It provides the exact value of the function.  Incorrect. The general solution provides a family of functions, not just one specific value.    It represents a family of functions that satisfy the differential equation.  Correct! The general solution includes all possible solutions, depending on the values of the constants.    It simplifies the differential equation.  Incorrect. While solving the equation involves simplification, the general solution represents the functions that satisfy the equation.    It eliminates the constants from the solution.  Incorrect. The general solution still includes arbitrary constants.   "
},
{
  "id": "p1-c2-s3-rq7",
  "level": "2",
  "url": "main-5-4-5-9.html#p1-c2-s3-rq7",
  "type": "Reading Question",
  "number": "2.3.7",
  "title": "<em class=\"emphasis\">What is a family of solutions?<\/em>",
  "body": " What is a family of solutions?   What is a family of solutions?    A collection of all possible solutions to a differential equation.  Correct! The family of solutions includes every possible particular solution.    The general solution to a differential equation.  Incorrect. The general solution represents a form of the family of solutions, not the entire set.    A single specific solution to a differential equation.  Incorrect. This describes a particular solution, not the family of solutions.    A solution without any constants.  Incorrect. A solution without constants is typically a particular solution, not the entire family.   "
},
{
  "id": "p1-c2-s3-rq8",
  "level": "2",
  "url": "main-5-4-5-9.html#p1-c2-s3-rq8",
  "type": "Reading Question",
  "number": "2.3.8",
  "title": "<em class=\"emphasis\">A general solution always includes arbitrary constants<\/em>.",
  "body": " A general solution always includes arbitrary constants   A general solution always includes arbitrary constants    True  Correct! The general solution represents the form that includes arbitrary constants.    False  Incorrect. A general solution must include arbitrary constants to represent all possible particular solutions.   "
},
{
  "id": "p1-c2-s3-rq9",
  "level": "2",
  "url": "main-5-4-5-9.html#p1-c2-s3-rq9",
  "type": "Reading Question",
  "number": "2.3.9",
  "title": "<em class=\"emphasis\">Fill in the Blank<\/em>.",
  "body": " Fill in the Blank A solution is a single solution obtained by assigning specific values to the constants in the general solution.     Good Work!      Incorrect. The correct answer starts with a p     "
},
{
  "id": "p1-c2-s3-rq10",
  "level": "2",
  "url": "main-5-4-5-9.html#p1-c2-s3-rq10",
  "type": "Reading Question",
  "number": "2.3.10",
  "title": "<em class=\"emphasis\">In Example 22, we verified that <span class=\"process-math\">\\(y = Ce^{2x}\\)<\/span> was a solution to<div class=\"displaymath process-math\" data-contains-math-knowls=\".\/knowl\/xref\/verification-with-a-constant.html\">\n\\begin{equation*}\ny''' - 4y' = 0\n\\end{equation*}\n<\/div>Based on this, how many solutions must this equation have?<\/em>",
  "body": " In , we verified that was a solution to Based on this, how many solutions must this equation have?     One  Incorrect. Reason?     Two  Incorrect. Reason?     Infinitely-Many  Correct! We can choose any value of C and it will still satisfy this equation. Since there are infinitely-many of numbers to choose from, there are infinitely-many solutions.     Unknown since we don't know  Incorrect. Reason?    "
},
{
  "id": "main-5-4-6",
  "level": "1",
  "url": "main-5-4-6.html",
  "type": "Section",
  "number": "2.4",
  "title": "Visualizing Solutions",
  "body": "Visualizing Solutions  A powerful way to understand solutions to differential equations is by visualizing them. Consider the differential equation , which has the general solution, ( solution verification details ).  Since each member of the family of solutions comes from a different value of , we can plot a few of them to see how they differ (see ).     Hover over the green curves in the figure to see each particular solution and corresponding value of .   In terms of the types of solutions,   Each green curve in the figure represents a particular solution, with its own specific value of .  The general solution, , provides the framework for all these individual solutions.       Plots of for .    Although the figure only shows a few members of the infinite family of solutions, notice that the green curves never overlap. This means that each curve represents a unique solution. If you were to randomly select a point on the plot, you would, in effect, be selecting a single curve—only one solution can pass through that specific point. This idea is at the heart of where particular solution come from and it will be the focus of the next section.  Check-Point Questions   Answer the following questions using the figure and the fact that is the general solution to the differential equation     Select the particular solution in that passes through the point     Incorrect. The value of must make the solution pass through . Hover over the curve in the figure that passes through .     Incorrect. Remember that at , the exponential term equals 1, so . What value of gives ? Hover over the curve in the figure that passes through .     Correct! The value ensures that , so this solution passes through .     Incorrect. The general solution would pass through if . Hover over the curve in the figure that passes through .     Select the -value for the solution in that passes through the point     Incorrect. Hover over the curve in the figure that passes through and look at the coefficient on .     Incorrect. Hover over the curve in the figure that passes through and look at the coefficient on .     Incorrect. Hover over the curve in the figure that passes through and look at the coefficient on .     Correct! Hovering over the curve passing through shows the particular solution , so .     Two different particular solutions of could have the same -value    True  Incorrect. The value of is what makes each particular solution different.    False  Correct! Different particular solutions have different values of .     There are infinitely-many particular solutions in a family    True  Correct! Each value of corresponds to a different particular solution.    False  Incorrect. There are infinitely many particular solutions in a family.     Which of the following is the best visual description of a family of solutions?    Collection of all the possible solution curves.  Correct! A family of solutions includes all possible solutions so visually it would be the collection of all solution curves.    A single solution curve.  Incorrect. A family of solutions includes all possible particular solutions, not just one.    The intersection of all the possible solution curves.  Incorrect. A family of solutions includes all possible solutions, not just their intersections.    The curve of the general solution.  Incorrect. The general solution is a framework for all possible solutions, but it is not the family of solutions itself. Also, since a general solution includes constants, doesn't have a curve .     Which of the following is the best visual description of a particular solution?    A curve that represents the solution with a specific constant value.  Correct! A particular solution is a single curve that satisfies the differential equation with a specific constant value, distinguishing it from the general solution.    A family of curves that represents all possible solutions to the differential equation.  Incorrect. This description fits a general solution, which encompasses all particular solutions by varying the parameter.    A straight line that intersects all solutions to the differential equation.  Incorrect. A particular solution is not necessarily a straight line, and it does not intersect all other solutions. It's a unique curve based on specific conditions.    A set of discrete points that satisfy the differential equation for various parameter values.  Incorrect. A particular solution is typically represented by a continuous curve, not a set of discrete points.      The solution where will pass through the origin    True  Incorrect. Try recalculating when . Which point does it pass through on the -axis?    False  Correct. If , then , which passes through .     "
},
{
  "id": "family-of-solutions-figure-1",
  "level": "2",
  "url": "main-5-4-6.html#family-of-solutions-figure-1",
  "type": "Figure",
  "number": "25",
  "title": "",
  "body": "  Plots of for .  "
},
{
  "id": "main-5-4-6-6-3",
  "level": "2",
  "url": "main-5-4-6-6.html#main-5-4-6-6-3",
  "type": "Reading Question",
  "number": "2.4.1",
  "title": "<em class=\"emphasis\">Select the particular solution in Figure 25 that passes through the point <span class=\"process-math\">\\((0,5)\\)<\/span><\/em>.",
  "body": " Select the particular solution in that passes through the point     Incorrect. The value of must make the solution pass through . Hover over the curve in the figure that passes through .     Incorrect. Remember that at , the exponential term equals 1, so . What value of gives ? Hover over the curve in the figure that passes through .     Correct! The value ensures that , so this solution passes through .     Incorrect. The general solution would pass through if . Hover over the curve in the figure that passes through .   "
},
{
  "id": "main-5-4-6-6-4",
  "level": "2",
  "url": "main-5-4-6-6.html#main-5-4-6-6-4",
  "type": "Reading Question",
  "number": "2.4.2",
  "title": "<em class=\"emphasis\">Select the <span class=\"process-math\">\\(c\\)<\/span>-value for the solution in Figure 25 that passes through the point <span class=\"process-math\">\\((1,1)\\)<\/span><\/em>.",
  "body": " Select the -value for the solution in that passes through the point     Incorrect. Hover over the curve in the figure that passes through and look at the coefficient on .     Incorrect. Hover over the curve in the figure that passes through and look at the coefficient on .     Incorrect. Hover over the curve in the figure that passes through and look at the coefficient on .     Correct! Hovering over the curve passing through shows the particular solution , so .   "
},
{
  "id": "main-5-4-6-6-5",
  "level": "2",
  "url": "main-5-4-6-6.html#main-5-4-6-6-5",
  "type": "Reading Question",
  "number": "2.4.3",
  "title": "<em class=\"emphasis\">Two different particular solutions of (4) could have the same <span class=\"process-math\">\\(c\\)<\/span>-value<\/em>.",
  "body": " Two different particular solutions of could have the same -value    True  Incorrect. The value of is what makes each particular solution different.    False  Correct! Different particular solutions have different values of .   "
},
{
  "id": "main-5-4-6-6-6",
  "level": "2",
  "url": "main-5-4-6-6.html#main-5-4-6-6-6",
  "type": "Reading Question",
  "number": "2.4.4",
  "title": "<em class=\"emphasis\">There are infinitely-many particular solutions in a family<\/em>.",
  "body": " There are infinitely-many particular solutions in a family    True  Correct! Each value of corresponds to a different particular solution.    False  Incorrect. There are infinitely many particular solutions in a family.   "
},
{
  "id": "main-5-4-6-6-7",
  "level": "2",
  "url": "main-5-4-6-6.html#main-5-4-6-6-7",
  "type": "Reading Question",
  "number": "2.4.5",
  "title": "<em class=\"emphasis\">Which of the following is the best visual description of a family of solutions?<\/em>",
  "body": " Which of the following is the best visual description of a family of solutions?    Collection of all the possible solution curves.  Correct! A family of solutions includes all possible solutions so visually it would be the collection of all solution curves.    A single solution curve.  Incorrect. A family of solutions includes all possible particular solutions, not just one.    The intersection of all the possible solution curves.  Incorrect. A family of solutions includes all possible solutions, not just their intersections.    The curve of the general solution.  Incorrect. The general solution is a framework for all possible solutions, but it is not the family of solutions itself. Also, since a general solution includes constants, doesn't have a curve .   "
},
{
  "id": "main-5-4-6-6-8",
  "level": "2",
  "url": "main-5-4-6-6.html#main-5-4-6-6-8",
  "type": "Reading Question",
  "number": "2.4.6",
  "title": "<em class=\"emphasis\">Which of the following is the best visual description of a particular solution?<\/em>",
  "body": " Which of the following is the best visual description of a particular solution?    A curve that represents the solution with a specific constant value.  Correct! A particular solution is a single curve that satisfies the differential equation with a specific constant value, distinguishing it from the general solution.    A family of curves that represents all possible solutions to the differential equation.  Incorrect. This description fits a general solution, which encompasses all particular solutions by varying the parameter.    A straight line that intersects all solutions to the differential equation.  Incorrect. A particular solution is not necessarily a straight line, and it does not intersect all other solutions. It's a unique curve based on specific conditions.    A set of discrete points that satisfy the differential equation for various parameter values.  Incorrect. A particular solution is typically represented by a continuous curve, not a set of discrete points.   "
},
{
  "id": "main-5-4-6-6-9",
  "level": "2",
  "url": "main-5-4-6-6.html#main-5-4-6-6-9",
  "type": "Reading Question",
  "number": "2.4.7",
  "title": "<em class=\"emphasis\">The solution <span class=\"process-math\">\\(y = ce^{x^2} + 3\\)<\/span> where <span class=\"process-math\">\\(c = -1\\)<\/span> will pass through the origin <span class=\"process-math\">\\((0, 0)\\)<\/span><\/em>.",
  "body": " The solution where will pass through the origin    True  Incorrect. Try recalculating when . Which point does it pass through on the -axis?    False  Correct. If , then , which passes through .   "
},
{
  "id": "main-5-4-7",
  "level": "1",
  "url": "main-5-4-7.html",
  "type": "Section",
  "number": "2.5",
  "title": "Initial Conditions &amp; Particular Solutions",
  "body": "Initial Conditions & Particular Solutions  Solving a differential equation typically starts with finding the general solution that defines all the possible solutions (family of solutions). For example, later on in this text, we will show that the differential equation has the general solution While the general solution gives us a family of possible solutions, in practical scenarios, we are usually interested in the specific solution where the constants are known. This is where initial conditions come into play—they allow us to determine the particular solution that applies to the problem at hand.  An initial condition is a starting value of the solution or its derivatives. For example, consider the free fall of an object due to gravity where is the position (distance from the ground) of this object at time . Assuming the ball is dropped from the top of a 100 ft building, what initial information do you know? Let be the time when the ball is dropped, then the initial conditions are given in the following table.  The following table summarizes the initial conditions for our example, highlighting the key information required to determine the particular solution:       Information at  Initial Condition    The ball is at the top of a 100 ft building.     The ball is dropped from rest (initial velocity is zero).      Without these initial conditions, the solution is incomplete and not applicable to any specific scenario. Assuming the solution must be consistent with these conditions forces the constants in the general solution to take specific values, giving us a particular solution.   Solve the initial value problem .  Since we already know the general solution to is given by . If you are interested in the verification steps, see the solution below.  Verification as a solution  First find :   and substitute these into and simplify: Which shows and so is a solution.   We would like determine the spcific values of and that correspond to the initial conditions and .  Since one initial condition involves the derivative, we will need to compute this before applying this condition.   Now let's apply the initial conditions:   We now have two equations and two unknowns, There are multiple ways to solve this system of equations, and the reader is encouraged to verify that and . Here is one Solving for and We will solve for in the first equation and then substitute into the second.    Thus, the solution we that satisfies the DE and both of the provided initial conditions is      Solve the initial value problem Given that the general solution is .  The initial condition, , tells us that must equal 2 when is 0 . When we substitute and into the general solution, we see that we can solve for .   Therefore, forces and we get the particular solution .    Initial conditions can also be visualized. the initial condition, , is shown as the point on the -axis. The blue curve is the particular solution we found above and is the only solution in the family that passes through this point.      In the graph, the point on the -axis is the initial condition. You can change the initial condition by dragging the point up and down along the -axis.   As you drag the point, make the following observations:   Each new value of gives a new value of , which corresponds to a new particular solution (blue curve).  Only one particular solution from the family of solutions (green curves) passes through the initial condition.       The family of solutions (green curves) and a particular solution (blue curve) passing through .     In summary, the process of solving a differential equation typically begins with finding a general solution. However, to apply this solution to real-world problems, we rely on initial conditions to determine a particular solution that accurately represents the system's specific circumstances.  Check-Point Questions   What is an initial condition?   What is an initial condition?    The starting point of the independent variable.  Incorrect. The initial condition is related to the solution or its derivatives at a specific point.    The starting value of the solution or its derivatives.  Correct! An initial condition specifies the value of the solution or its derivative at a particular point.    The final value of the solution.  Incorrect. The initial condition is at the starting point, not the end.    The point where the solution intersects the x-axis.  Incorrect. The initial condition is about the value at a specific point, not necessarily where it intersects the x-axis.     The differential equation, , is an initial value problem   The differential equation, , is an initial value problem    True  Incorrect. An initial value problem includes specific initial conditions, which are not provided in this equation.    False  Correct! The equation is a differential equation without initial conditions, so it is not an initial value problem.     The solution to the initial value problem, , is a function whose curve passes through the point   The solution to the initial value problem, , is a function whose curve passes through the point     Incorrect. The solution curve does not pass through the point (5, 0).     Correct! The solution curve passes through the point (0, 5).     Incorrect. The solution curve does not pass through the point (0, 0).     Incorrect. The solution curve does not pass through the point (2, 6).    In which case would you need to find a particular solution rather than just a general solution?  In which case would you need to find a particular solution rather than just a general solution?    When the differential equation is linear.  Incorrect. Linearity doesn't determine whether you need a particular solution.    When initial conditions are provided.  Correct! A particular solution is found when you need to satisfy initial conditions.    When the differential equation is has a general solution.  Incorrect. The existence of a general solution doesn't determine whether you need a particular solution.    When the function depends on more than one variable.  Incorrect. Multivariable functions are not the reason for finding a particular solution.     What role do initial conditions play in solving differential equations?  Select all that apply.   They determine the general form of the solution.  Incorrect. Initial conditions are not used to find the general solution.    They used to determine the constants in the general solution.  Correct! Initial conditions are used to find specific values for constants in the general solution.    They are used to find the particular solution.  Correct! Initial conditions are used to find the specific solution that applies to a particular scenario.    They are not needed if the general solution is already known.  Incorrect. If provided, initial conditions are always needed to get the particular solution from the general solution.   C  What happens if you do not apply initial conditions to the general solution of a differential equation?  What happens if you do not apply initial conditions to the general solution of a differential equation?    You get a family of solutions without identifying the particular solution.  Correct! Without initial conditions, you only have the general solution, which represents a family of possible solutions.    You cannot find any solution to the differential equation.  Incorrect. You can find the general solution without initial conditions, but not the specific one.    The solution to the differential equation does not exist.  Incorrect. The solution exists, but you need initial conditions to find the specific one.    The solution to the differential equation is unique.  Incorrect. The general solution represents a family of possible solutions, not a unique one.     "
},
{
  "id": "main-5-4-7-3",
  "level": "2",
  "url": "main-5-4-7.html#main-5-4-7-3",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "initial condition "
},
{
  "id": "main-5-4-7-7",
  "level": "2",
  "url": "main-5-4-7.html#main-5-4-7-7",
  "type": "Example",
  "number": "26",
  "title": "",
  "body": " Solve the initial value problem .  Since we already know the general solution to is given by . If you are interested in the verification steps, see the solution below.  Verification as a solution  First find :   and substitute these into and simplify: Which shows and so is a solution.   We would like determine the spcific values of and that correspond to the initial conditions and .  Since one initial condition involves the derivative, we will need to compute this before applying this condition.   Now let's apply the initial conditions:   We now have two equations and two unknowns, There are multiple ways to solve this system of equations, and the reader is encouraged to verify that and . Here is one Solving for and We will solve for in the first equation and then substitute into the second.    Thus, the solution we that satisfies the DE and both of the provided initial conditions is    "
},
{
  "id": "p1-c2-s5-example-1",
  "level": "2",
  "url": "main-5-4-7.html#p1-c2-s5-example-1",
  "type": "Example",
  "number": "27",
  "title": "",
  "body": " Solve the initial value problem Given that the general solution is .  The initial condition, , tells us that must equal 2 when is 0 . When we substitute and into the general solution, we see that we can solve for .   Therefore, forces and we get the particular solution .   "
},
{
  "id": "initial-conditions-figure-1",
  "level": "2",
  "url": "main-5-4-7.html#initial-conditions-figure-1",
  "type": "Figure",
  "number": "28",
  "title": "",
  "body": "  The family of solutions (green curves) and a particular solution (blue curve) passing through .  "
},
{
  "id": "p1-c2-s5-rq1",
  "level": "2",
  "url": "main-5-4-7-12.html#p1-c2-s5-rq1",
  "type": "Reading Question",
  "number": "2.5.1",
  "title": "<em class=\"emphasis\">What is an initial condition?<\/em>",
  "body": " What is an initial condition?   What is an initial condition?    The starting point of the independent variable.  Incorrect. The initial condition is related to the solution or its derivatives at a specific point.    The starting value of the solution or its derivatives.  Correct! An initial condition specifies the value of the solution or its derivative at a particular point.    The final value of the solution.  Incorrect. The initial condition is at the starting point, not the end.    The point where the solution intersects the x-axis.  Incorrect. The initial condition is about the value at a specific point, not necessarily where it intersects the x-axis.   "
},
{
  "id": "p1-c2-s5-rq2",
  "level": "2",
  "url": "main-5-4-7-12.html#p1-c2-s5-rq2",
  "type": "Reading Question",
  "number": "2.5.2",
  "title": "<em class=\"emphasis\">The differential equation, <span class=\"process-math\">\\(\\ds\\frac{dy}{dx} = 2xy - 6x\\text{,}\\)<\/span> is an initial value problem<\/em>.",
  "body": " The differential equation, , is an initial value problem   The differential equation, , is an initial value problem    True  Incorrect. An initial value problem includes specific initial conditions, which are not provided in this equation.    False  Correct! The equation is a differential equation without initial conditions, so it is not an initial value problem.   "
},
{
  "id": "p1-c2-s5-rq3",
  "level": "2",
  "url": "main-5-4-7-12.html#p1-c2-s5-rq3",
  "type": "Reading Question",
  "number": "2.5.3",
  "title": "<em class=\"emphasis\">The solution to the initial value problem, <span class=\"process-math\">\\(\\ds\\frac{dy}{dx} = 2xy - 6x, \\hspace{0.25cm} y(5) = -10\\text{,}\\)<\/span> is a function whose curve passes through the point <span class=\"fillin underline\" role=\"img\" aria-label=\"5-character blank\" style=\"width: 2.272727272727273em;\" \/><\/em>.",
  "body": " The solution to the initial value problem, , is a function whose curve passes through the point   The solution to the initial value problem, , is a function whose curve passes through the point     Incorrect. The solution curve does not pass through the point (5, 0).     Correct! The solution curve passes through the point (0, 5).     Incorrect. The solution curve does not pass through the point (0, 0).     Incorrect. The solution curve does not pass through the point (2, 6).   "
},
{
  "id": "p1-c2-s5-rq4",
  "level": "2",
  "url": "main-5-4-7-12.html#p1-c2-s5-rq4",
  "type": "Reading Question",
  "number": "2.5.4",
  "title": "<em class=\"emphasis\">In which case would you need to find a particular solution rather than just a general solution?<\/em>",
  "body": "In which case would you need to find a particular solution rather than just a general solution?  In which case would you need to find a particular solution rather than just a general solution?    When the differential equation is linear.  Incorrect. Linearity doesn't determine whether you need a particular solution.    When initial conditions are provided.  Correct! A particular solution is found when you need to satisfy initial conditions.    When the differential equation is has a general solution.  Incorrect. The existence of a general solution doesn't determine whether you need a particular solution.    When the function depends on more than one variable.  Incorrect. Multivariable functions are not the reason for finding a particular solution.   "
},
{
  "id": "p1-c2-s5-rq5",
  "level": "2",
  "url": "main-5-4-7-12.html#p1-c2-s5-rq5",
  "type": "Reading Question",
  "number": "2.5.5",
  "title": "<em class=\"emphasis\">What role do initial conditions play in solving differential equations?<\/em>",
  "body": " What role do initial conditions play in solving differential equations?  Select all that apply.   They determine the general form of the solution.  Incorrect. Initial conditions are not used to find the general solution.    They used to determine the constants in the general solution.  Correct! Initial conditions are used to find specific values for constants in the general solution.    They are used to find the particular solution.  Correct! Initial conditions are used to find the specific solution that applies to a particular scenario.    They are not needed if the general solution is already known.  Incorrect. If provided, initial conditions are always needed to get the particular solution from the general solution.   C "
},
{
  "id": "p1-c2-s5-rq6",
  "level": "2",
  "url": "main-5-4-7-12.html#p1-c2-s5-rq6",
  "type": "Reading Question",
  "number": "2.5.6",
  "title": "<em class=\"emphasis\">What happens if you do not apply initial conditions to the general solution of a differential equation?<\/em>",
  "body": "What happens if you do not apply initial conditions to the general solution of a differential equation?  What happens if you do not apply initial conditions to the general solution of a differential equation?    You get a family of solutions without identifying the particular solution.  Correct! Without initial conditions, you only have the general solution, which represents a family of possible solutions.    You cannot find any solution to the differential equation.  Incorrect. You can find the general solution without initial conditions, but not the specific one.    The solution to the differential equation does not exist.  Incorrect. The solution exists, but you need initial conditions to find the specific one.    The solution to the differential equation is unique.  Incorrect. The general solution represents a family of possible solutions, not a unique one.   "
},
{
  "id": "main-5-4-8",
  "level": "1",
  "url": "main-5-4-8.html",
  "type": "Section",
  "number": "2.6",
  "title": "Summary &amp; Exercises",
  "body": "Summary & Exercises   Summary of the Key Ideas     What is a Solution?   A solution to a differential equation is a function that, when substituted into the equation, satisfies the equation.     Verifying Solutions   Verification of a solution involves substituting the function into the equation and simplifying to check if a true statement is obtained.  To verify a solution, all terms should ideally be moved to one side of the equation, simplifying the process.     Types of Solutions   Differential equations can have different types of solutions: general and particular.  The general solution includes arbitrary constants and represents a family of solutions.  A particular solution is obtained by assigning specific values to these constants.     Initial Conditions   Initial conditions are values given for the solution or its derivatives at a specific point, often used to find a particular solution.  They help specify which member of the general solution family is applicable in a specific context.         Discuss the difference between a general solution, family of solutions, and a particualr solution.  Given the differential equation determine if the following functions are solutions of this differential equation.    a.   b.   c.     d.   e.   f.     g.   h.   i.        a. No  b. Yes  c. Yes    d. No  e. No  f. No    g. Yes  h. Yes  i. Yes     Given the differential equation determine if the following functions are solutions of this differential equation.    a.   b.   c.     d.   e.   f.     g.   h.   i.         a. Yes  b. No  c. Yes    d. No  e. Yes  f. Yes    g. No  h. No  i. Yes      Match each function on the left with a DE on the right if this function is a solution (i.e. is in the family of solutions) for this DE.                                                            Find all values of such that is a solution to .    Find all values of such that is a solution to .    Find all values of such that is a solution to .    Find all values of such that is a solution to .    Find all values of such that is a solution to .    Find all values of such that is a solution to .    Find the value of the constant in order for the differential equation to have the solution .    Is a solution of the differential equation  Yes  Find the value of    For each of the differential equations and function pairs, find all the possible values of such that the function is a solution to the DE.                      Explain the significance of initial condition(s) as they relate to the general solution of a differential equation.  The initial condition(s) specify one or more points that the graph of the solution must pass through. This often allows one to solve for the constants in the general solution.  Therefore, the initial condition(s) act to reduce the family of solutions down to a smaller set of solutions or, ideally, a single particular solution.   Does an initial condition always give you a particular solution?  When there is one constant in the general solution, yes.  When there is more than one constant in the general solution, no.  It does, however, limit the possible values of the constants.   Consider the differential equation   Verify that the family of functions a solution to this differential equation.  Find the particular solution that corresponds to the initial condition .    Yes   , so is the particular solution   Consider the differential equation Which of the following is a family of solutions for this DE?        Find the particular solution such that .  b.   , so is the particular solution   Try first.  Compute       So for this function, it is not the solution.  Now try . Then   while   So this function is the solution  Setting we get   Solve for c,  So the solution for the IVP is   Understanding what it means to Solve a DE   We spend a lot of time solving equations, but do you even remember what it means to be a solution? Let's review what it means to be a solution to an algebraic equation (as in question ), and then what it means to be a solution to a differential equation (as in question ), and then we'll extend those ideas in questions and .   Verify that is a solution to the equation  What confirms that is a solution? the LHS = RHS after substituting into both sides of the equation.  ( Note: Do not rearrange the equation to solve for . That would be the process of finding a solution; you are asked to verify a solution. ) Since we get the same result (21) when we substitute the solution into the RHS and into the LHS, we confirm that is a solution to the equation. We substitute into the left hand side (LHS) of the equation, and then into the right hand side (RHS) of the equation: Since we get the same result when we substitute the solution into the RHS and into the LHS, we have confirmed that is a solution to the equation.  Verify that is a solution to the DE  Look back at the previous question and think about what it means to be a solution to a DE. Since we get the same result (0) when we substitute the solution into the RHS and into the LHS, we confirm that is a solution to the DE. We need to substitute into the DE. In order to substitute into the left hand side, we need to know the second derivative. So we begin by finding that. Now we can substitute into the DE: Since when we substitute in to the DE, we find that the LHS is equal to the RHS, we have verified that is a solution to the DE   Consider the DE  Find all values of such that is a solution to the DE by taking derivatives and substituting into the DE, and then solving for .  no matter the value of or Therefore we might want to factor it out as it won't contribute to our answer.   First we take derivatives so that we can substitute into the DE. Now we can substitute into the DE and solve for : Recall that no matter the value of or Thus we have: So the two solutions are   Now that you have (hopefully!) two values for choose one of the two values and then verify that is a solution for that value of  Since we get the same result (0) when we substitute the solution into the RHS and into the LHS, we confirm that (or ) is a solution to the DE.  The work here is for and the work for is similar.  First we take derivatives so that we can substitute into the DE. Now we can substitute into the DE: Hence, we have shown that is a solution to the DE     Assuming the form of the solution of DE.  Find all values of such that is a solution of the DE     We proceed as in the previous question. First we take derivatives so that we can substitute into the DE. Now we can substitute into the DE: Note that there is no value of that can guarantee that is 0. Hence we have So the two solutions are      "
},
{
  "id": "main-5-4-8-2-1-2",
  "level": "2",
  "url": "main-5-4-8.html#main-5-4-8-2-1-2",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "What is a Solution? Verifying Solutions Types of Solutions Initial Conditions "
},
{
  "id": "main-5-4-8-3-1",
  "level": "2",
  "url": "main-5-4-8-3.html#main-5-4-8-3-1",
  "type": "Exercise",
  "number": "2.6.1",
  "title": "",
  "body": "Discuss the difference between a general solution, family of solutions, and a particualr solution. "
},
{
  "id": "main-5-4-8-3-2",
  "level": "2",
  "url": "main-5-4-8-3.html#main-5-4-8-3-2",
  "type": "Exercise",
  "number": "2.6.2",
  "title": "",
  "body": "Given the differential equation determine if the following functions are solutions of this differential equation.    a.   b.   c.     d.   e.   f.     g.   h.   i.        a. No  b. Yes  c. Yes    d. No  e. No  f. No    g. Yes  h. Yes  i. Yes    "
},
{
  "id": "main-5-4-8-3-3",
  "level": "2",
  "url": "main-5-4-8-3.html#main-5-4-8-3-3",
  "type": "Exercise",
  "number": "2.6.3",
  "title": "",
  "body": "Given the differential equation determine if the following functions are solutions of this differential equation.    a.   b.   c.     d.   e.   f.     g.   h.   i.         a. Yes  b. No  c. Yes    d. No  e. Yes  f. Yes    g. No  h. No  i. Yes     "
},
{
  "id": "main-5-4-8-3-4",
  "level": "2",
  "url": "main-5-4-8-3.html#main-5-4-8-3-4",
  "type": "Exercise",
  "number": "2.6.4",
  "title": "",
  "body": "Match each function on the left with a DE on the right if this function is a solution (i.e. is in the family of solutions) for this DE.                                                           "
},
{
  "id": "main-5-4-8-3-5",
  "level": "2",
  "url": "main-5-4-8-3.html#main-5-4-8-3-5",
  "type": "Exercise",
  "number": "2.6.5",
  "title": "",
  "body": "Find all values of such that is a solution to .   "
},
{
  "id": "main-5-4-8-3-6",
  "level": "2",
  "url": "main-5-4-8-3.html#main-5-4-8-3-6",
  "type": "Exercise",
  "number": "2.6.6",
  "title": "",
  "body": "Find all values of such that is a solution to .   "
},
{
  "id": "main-5-4-8-3-7",
  "level": "2",
  "url": "main-5-4-8-3.html#main-5-4-8-3-7",
  "type": "Exercise",
  "number": "2.6.7",
  "title": "",
  "body": "Find all values of such that is a solution to .   "
},
{
  "id": "main-5-4-8-3-8",
  "level": "2",
  "url": "main-5-4-8-3.html#main-5-4-8-3-8",
  "type": "Exercise",
  "number": "2.6.8",
  "title": "",
  "body": "Find all values of such that is a solution to .   "
},
{
  "id": "main-5-4-8-3-9",
  "level": "2",
  "url": "main-5-4-8-3.html#main-5-4-8-3-9",
  "type": "Exercise",
  "number": "2.6.9",
  "title": "",
  "body": "Find all values of such that is a solution to .   "
},
{
  "id": "main-5-4-8-3-10",
  "level": "2",
  "url": "main-5-4-8-3.html#main-5-4-8-3-10",
  "type": "Exercise",
  "number": "2.6.10",
  "title": "",
  "body": "Find all values of such that is a solution to .   "
},
{
  "id": "main-5-4-8-3-11",
  "level": "2",
  "url": "main-5-4-8-3.html#main-5-4-8-3-11",
  "type": "Exercise",
  "number": "2.6.11",
  "title": "",
  "body": "Find the value of the constant in order for the differential equation to have the solution .   "
},
{
  "id": "main-5-4-8-3-12",
  "level": "2",
  "url": "main-5-4-8-3.html#main-5-4-8-3-12",
  "type": "Exercise",
  "number": "2.6.12",
  "title": "",
  "body": "Is a solution of the differential equation  Yes "
},
{
  "id": "main-5-4-8-3-13-3",
  "level": "2",
  "url": "main-5-4-8-3.html#main-5-4-8-3-13-3",
  "type": "Exercise",
  "number": "2.6.13",
  "title": "",
  "body": "  "
},
{
  "id": "main-5-4-8-3-13-4",
  "level": "2",
  "url": "main-5-4-8-3.html#main-5-4-8-3-13-4",
  "type": "Exercise",
  "number": "2.6.14",
  "title": "",
  "body": "  "
},
{
  "id": "main-5-4-8-3-13-5",
  "level": "2",
  "url": "main-5-4-8-3.html#main-5-4-8-3-13-5",
  "type": "Exercise",
  "number": "2.6.15",
  "title": "",
  "body": "  "
},
{
  "id": "main-5-4-8-3-13-6",
  "level": "2",
  "url": "main-5-4-8-3.html#main-5-4-8-3-13-6",
  "type": "Exercise",
  "number": "2.6.16",
  "title": "",
  "body": "  "
},
{
  "id": "main-5-4-8-3-13-7",
  "level": "2",
  "url": "main-5-4-8-3.html#main-5-4-8-3-13-7",
  "type": "Exercise",
  "number": "2.6.17",
  "title": "",
  "body": "  "
},
{
  "id": "main-5-4-8-3-13-8",
  "level": "2",
  "url": "main-5-4-8-3.html#main-5-4-8-3-13-8",
  "type": "Exercise",
  "number": "2.6.18",
  "title": "",
  "body": "  "
},
{
  "id": "main-5-4-8-3-14",
  "level": "2",
  "url": "main-5-4-8-3.html#main-5-4-8-3-14",
  "type": "Exercise",
  "number": "2.6.19",
  "title": "",
  "body": "Explain the significance of initial condition(s) as they relate to the general solution of a differential equation.  The initial condition(s) specify one or more points that the graph of the solution must pass through. This often allows one to solve for the constants in the general solution.  Therefore, the initial condition(s) act to reduce the family of solutions down to a smaller set of solutions or, ideally, a single particular solution.  "
},
{
  "id": "main-5-4-8-3-15",
  "level": "2",
  "url": "main-5-4-8-3.html#main-5-4-8-3-15",
  "type": "Exercise",
  "number": "2.6.20",
  "title": "",
  "body": "Does an initial condition always give you a particular solution?  When there is one constant in the general solution, yes.  When there is more than one constant in the general solution, no.  It does, however, limit the possible values of the constants.  "
},
{
  "id": "main-5-4-8-3-16",
  "level": "2",
  "url": "main-5-4-8-3.html#main-5-4-8-3-16",
  "type": "Exercise",
  "number": "2.6.21",
  "title": "",
  "body": "Consider the differential equation   Verify that the family of functions a solution to this differential equation.  Find the particular solution that corresponds to the initial condition .    Yes   , so is the particular solution  "
},
{
  "id": "main-5-4-8-3-17",
  "level": "2",
  "url": "main-5-4-8-3.html#main-5-4-8-3-17",
  "type": "Exercise",
  "number": "2.6.22",
  "title": "",
  "body": "Consider the differential equation Which of the following is a family of solutions for this DE?        Find the particular solution such that .  b.   , so is the particular solution   Try first.  Compute       So for this function, it is not the solution.  Now try . Then   while   So this function is the solution  Setting we get   Solve for c,  So the solution for the IVP is  "
},
{
  "id": "main-5-4-8-3-18-3",
  "level": "2",
  "url": "main-5-4-8-3.html#main-5-4-8-3-18-3",
  "type": "Exercise",
  "number": "2.6.23",
  "title": "",
  "body": "Verify that is a solution to the equation  What confirms that is a solution? the LHS = RHS after substituting into both sides of the equation.  ( Note: Do not rearrange the equation to solve for . That would be the process of finding a solution; you are asked to verify a solution. ) Since we get the same result (21) when we substitute the solution into the RHS and into the LHS, we confirm that is a solution to the equation. We substitute into the left hand side (LHS) of the equation, and then into the right hand side (RHS) of the equation: Since we get the same result when we substitute the solution into the RHS and into the LHS, we have confirmed that is a solution to the equation. "
},
{
  "id": "main-5-4-8-3-18-4",
  "level": "2",
  "url": "main-5-4-8-3.html#main-5-4-8-3-18-4",
  "type": "Exercise",
  "number": "2.6.24",
  "title": "",
  "body": "Verify that is a solution to the DE  Look back at the previous question and think about what it means to be a solution to a DE. Since we get the same result (0) when we substitute the solution into the RHS and into the LHS, we confirm that is a solution to the DE. We need to substitute into the DE. In order to substitute into the left hand side, we need to know the second derivative. So we begin by finding that. Now we can substitute into the DE: Since when we substitute in to the DE, we find that the LHS is equal to the RHS, we have verified that is a solution to the DE  "
},
{
  "id": "main-5-4-8-3-18-5",
  "level": "2",
  "url": "main-5-4-8-3.html#main-5-4-8-3-18-5",
  "type": "Exercise",
  "number": "2.6.25",
  "title": "",
  "body": "Consider the DE  Find all values of such that is a solution to the DE by taking derivatives and substituting into the DE, and then solving for .  no matter the value of or Therefore we might want to factor it out as it won't contribute to our answer.   First we take derivatives so that we can substitute into the DE. Now we can substitute into the DE and solve for : Recall that no matter the value of or Thus we have: So the two solutions are  "
},
{
  "id": "main-5-4-8-3-18-6",
  "level": "2",
  "url": "main-5-4-8-3.html#main-5-4-8-3-18-6",
  "type": "Exercise",
  "number": "2.6.26",
  "title": "",
  "body": "Now that you have (hopefully!) two values for choose one of the two values and then verify that is a solution for that value of  Since we get the same result (0) when we substitute the solution into the RHS and into the LHS, we confirm that (or ) is a solution to the DE.  The work here is for and the work for is similar.  First we take derivatives so that we can substitute into the DE. Now we can substitute into the DE: Hence, we have shown that is a solution to the DE   "
},
{
  "id": "main-5-4-8-3-18-7",
  "level": "2",
  "url": "main-5-4-8-3.html#main-5-4-8-3-18-7",
  "type": "Exercise",
  "number": "2.6.27",
  "title": "",
  "body": " Assuming the form of the solution of DE.  Find all values of such that is a solution of the DE     We proceed as in the previous question. First we take derivatives so that we can substitute into the DE. Now we can substitute into the DE: Note that there is no value of that can guarantee that is 0. Hence we have So the two solutions are   "
},
{
  "id": "main-6-3-3",
  "level": "1",
  "url": "main-6-3-3.html",
  "type": "Section",
  "number": "3.1",
  "title": "Antiderivatives",
  "body": "Antiderivatives  When you find an antiderivative, you're actually solving a basic differential equation. For example, consider finding the general antiderivative of . The calculus approach would compute the integral . The differential equations approach, on the other hand, seeks all functions whose derivative is . This means solving any of the following equivalent equations for :   To solve for , we integrate both sides with respect to , like so: where is a constant. Although this method might seem excessive for simple problems, it illustrates the core concept of isolating the dependent variable and expressing it in terms of the independent variable, .  Combining Constants is very common in differential equations Combining constants like we did above is a common practice in differential equations and is something you'll see often in this text.   Solve the initial-value problem  .   Start by isolating the derivative, , on one side of the equation Integrate both sides with respect to to leave us with on the left side   Finally, apply the initial condition to find  Thus, the solution to the differential equation is .    Check-Point Questions   We can solve for by differentiating both sides with respect to    We can solve for by differentiating both sides with respect to .     True   Incorrect, we integrate both sides with respect to .     False   Correct!      The equation implies that the solution, , is the antiderivative of   The equation implies that the solution, , is the antiderivative of .    True   Correct, integrating both sides gives .     False   Incorrect.      Combining constants is a common practice in differential equations.   Combining constants is a common practice in differential equations.    True   Correct!     False   Incorrect, see the footnote above.      What is the process to solve for in the equation ?   What is the process to solve for in the equation ?     Differentiating both sides with respect to .    Incorrect, we integrate both sides with respect to .      Integrating both sides with respect to .    Correct!      Integrating both sides with respect to .    Incorrect, this is not part of the process.      Multiplying both sides by .    Incorrect, this is not part of the process.      How do we start solving the differential equation ?   How do we start solving the differential equation ?     By isolating the derivative, .    Correct! Isolate first, then integrate both sides.      By Integrating both sides with respect to .    Incorrect. While you could do this, we suggest isolating the derivative first.      Differentiate both sides with respect to .    Incorrect, we would like to remove derivatives, not add more.      Convert to .    Incorrect, the notation for the derivative does not matter.      "
},
{
  "id": "main-6-3-3-4",
  "level": "2",
  "url": "main-6-3-3.html#main-6-3-3-4",
  "type": "Note",
  "number": "1",
  "title": "Combining Constants is very common in differential equations.",
  "body": "Combining Constants is very common in differential equations Combining constants like we did above is a common practice in differential equations and is something you'll see often in this text. "
},
{
  "id": "antiderivative-example",
  "level": "2",
  "url": "main-6-3-3.html#antiderivative-example",
  "type": "Example",
  "number": "2",
  "title": "",
  "body": " Solve the initial-value problem  .   Start by isolating the derivative, , on one side of the equation Integrate both sides with respect to to leave us with on the left side   Finally, apply the initial condition to find  Thus, the solution to the differential equation is .   "
},
{
  "id": "p2-c1-s1-rq1",
  "level": "2",
  "url": "main-6-3-3-6.html#p2-c1-s1-rq1",
  "type": "Reading Question",
  "number": "3.1.1",
  "title": "<em class=\"emphasis\">We can solve <span class=\"process-math\">\\(\\ds \\frac{dy}{dx} = x^3 - 7\\)<\/span> for <span class=\"process-math\">\\(y\\)<\/span> by differentiating both sides with respect to <span class=\"process-math\">\\(x\\)<\/span><\/em>.",
  "body": " We can solve for by differentiating both sides with respect to    We can solve for by differentiating both sides with respect to .     True   Incorrect, we integrate both sides with respect to .     False   Correct!    "
},
{
  "id": "p2-c1-s1-rq2",
  "level": "2",
  "url": "main-6-3-3-6.html#p2-c1-s1-rq2",
  "type": "Reading Question",
  "number": "3.1.2",
  "title": "<em class=\"emphasis\">The equation <span class=\"process-math\">\\(\\ds\\frac{dy}{dx} = \\ln(3x+1)\\)<\/span> implies that the solution, <span class=\"process-math\">\\(y\\text{,}\\)<\/span> is the antiderivative of <span class=\"process-math\">\\(\\ln(3x+1)\\)<\/span><\/em>.",
  "body": " The equation implies that the solution, , is the antiderivative of   The equation implies that the solution, , is the antiderivative of .    True   Correct, integrating both sides gives .     False   Incorrect.    "
},
{
  "id": "p2-c1-s1-rq3",
  "level": "2",
  "url": "main-6-3-3-6.html#p2-c1-s1-rq3",
  "type": "Reading Question",
  "number": "3.1.3",
  "title": "<em class=\"emphasis\">Combining constants is a common practice in differential equations.<\/em>.",
  "body": " Combining constants is a common practice in differential equations.   Combining constants is a common practice in differential equations.    True   Correct!     False   Incorrect, see the footnote above.    "
},
{
  "id": "p2-c1-s1-rq4",
  "level": "2",
  "url": "main-6-3-3-6.html#p2-c1-s1-rq4",
  "type": "Reading Question",
  "number": "3.1.4",
  "title": "<em class=\"emphasis\">What is the process to solve for <span class=\"process-math\">\\(y\\)<\/span> in the equation <span class=\"process-math\">\\(\\ds\\frac{dy}{dx} = \\tan(2x)\\text{?}\\)<\/span><\/em>",
  "body": " What is the process to solve for in the equation ?   What is the process to solve for in the equation ?     Differentiating both sides with respect to .    Incorrect, we integrate both sides with respect to .      Integrating both sides with respect to .    Correct!      Integrating both sides with respect to .    Incorrect, this is not part of the process.      Multiplying both sides by .    Incorrect, this is not part of the process.    "
},
{
  "id": "p2-c1-s1-rq5",
  "level": "2",
  "url": "main-6-3-3-6.html#p2-c1-s1-rq5",
  "type": "Reading Question",
  "number": "3.1.5",
  "title": "<em class=\"emphasis\">How do we start solving the differential equation\t<span class=\"process-math\">\\(\\ds\\frac13 y'+ 7x + x^2 = 1\\text{?}\\)<\/span><\/em>",
  "body": " How do we start solving the differential equation ?   How do we start solving the differential equation ?     By isolating the derivative, .    Correct! Isolate first, then integrate both sides.      By Integrating both sides with respect to .    Incorrect. While you could do this, we suggest isolating the derivative first.      Differentiate both sides with respect to .    Incorrect, we would like to remove derivatives, not add more.      Convert to .    Incorrect, the notation for the derivative does not matter.    "
},
{
  "id": "main-6-3-4",
  "level": "1",
  "url": "main-6-3-4.html",
  "type": "Section",
  "number": "3.2",
  "title": "Solutions by Direct Integration",
  "body": "Solutions by Direct Integration  As seen in the previous example , if a differential equation can be written in the form: , then the solution can be found by integrating both sides. This principle extends to more complex equations of the form: . Here, is a placeholder that indicates that only  variables can appear on the right-hand side of this equation. Similarly, indicates that only  or variables can appear inside the derivative.  This leads us to our first method for solving first-order differential equations— direct integration .  Direct Integration  The general solution of a differential equation in the form , can be determined by integrating both sides with respect to .   Consider the following examples to see how the same approach applies to these more interesting problems.   Find the particular solution to the differential equation  .   To solve for , we need to eliminate the derivative by integrating both sides as before. Finally, we use the condition, , to find the particular solution. Therefore, the particular solution is .     Compute the general solution of the differential equation     To solve the differential equation , we integrate both sides with respect to to get   Finally, we isolate and combine constants.     Check-Point Questions   Solving a differential equation by direct integration involves computing a derivative   Solving a differential equation by direct integration involves computing a derivative.    True   Incorrect, direct integration involves integrating both sides of the equation.     False   Correct! Direct integration involves integrating both sides of the equation.      Direct integration could be used to solve the equation   Direct integration could be used to solve the equation .    True   Correct!     False   Incorrect. This equation is in the form .      Why shouldn't direct integration be applied to   Why shouldn't direct integration be applied to the equation .    The equation is not linear.   Incorrect, direct integration can handle this.     The term is squared.   Incorrect, direct integration can handle this.     The term cannot be in the denominator.   Incorrect, direct integration can handle this.     The right-hand side contains .   Correct! Direct integration only works when the right-hand side contains only .      In the equation , what is the first step in solving for ?   In the differential equation , what is the first step in solving for ?    Integrate both sides with respect to .  Correct! Integrating both sides is the first step in solving for .    Differentiate both sides with respect to .  Incorrect. Differentiating would not help solve the equation; integration is the correct approach.    Factor the expression .  Incorrect. Factoring is not necessary here; integration is the correct step.    Substitute a new variable for .  Incorrect. Substitution is not needed; direct integration is the correct step.     Solve using direct integration   Complete each step below to solve the differential equation       The dependent variable is ,  The independent variable is ,    Give the general solution. Don t forget the constant of integration.                           "
},
{
  "id": "direct-integration",
  "level": "2",
  "url": "main-6-3-4.html#direct-integration",
  "type": "Method",
  "number": "1",
  "title": "Direct Integration.",
  "body": "Direct Integration  The general solution of a differential equation in the form , can be determined by integrating both sides with respect to .  "
},
{
  "id": "direct-integration-example-1",
  "level": "2",
  "url": "main-6-3-4.html#direct-integration-example-1",
  "type": "Example",
  "number": "3",
  "title": "",
  "body": " Find the particular solution to the differential equation  .   To solve for , we need to eliminate the derivative by integrating both sides as before. Finally, we use the condition, , to find the particular solution. Therefore, the particular solution is .   "
},
{
  "id": "direct-integration-example-2",
  "level": "2",
  "url": "main-6-3-4.html#direct-integration-example-2",
  "type": "Example",
  "number": "4",
  "title": "",
  "body": " Compute the general solution of the differential equation     To solve the differential equation , we integrate both sides with respect to to get   Finally, we isolate and combine constants.    "
},
{
  "id": "p2-c1-s2-rq1",
  "level": "2",
  "url": "main-6-3-4-8.html#p2-c1-s2-rq1",
  "type": "Reading Question",
  "number": "3.2.1",
  "title": "<em class=\"emphasis\">Solving a differential equation by direct integration involves computing a derivative<\/em>.",
  "body": " Solving a differential equation by direct integration involves computing a derivative   Solving a differential equation by direct integration involves computing a derivative.    True   Incorrect, direct integration involves integrating both sides of the equation.     False   Correct! Direct integration involves integrating both sides of the equation.    "
},
{
  "id": "p2-c1-s2-rq2",
  "level": "2",
  "url": "main-6-3-4-8.html#p2-c1-s2-rq2",
  "type": "Reading Question",
  "number": "3.2.2",
  "title": "<em class=\"emphasis\">Direct integration could be used to solve the equation <span class=\"process-math\">\\(\\ds\\frac{d}{dx}\\left[y^2 + x^3\\right] = \\sqrt{x}\\)<\/span><\/em>.",
  "body": " Direct integration could be used to solve the equation   Direct integration could be used to solve the equation .    True   Correct!     False   Incorrect. This equation is in the form .    "
},
{
  "id": "p2-c1-s2-rq3",
  "level": "2",
  "url": "main-6-3-4-8.html#p2-c1-s2-rq3",
  "type": "Reading Question",
  "number": "3.2.3",
  "title": "<em class=\"emphasis\">Why shouldn’t direct integration be applied to <span class=\"process-math\">\\(\\ds\\frac{d}{dx}\\left[\\frac{x}{y^2}\\right] = \\sin(x+y)\\)<\/span><\/em>.",
  "body": " Why shouldn't direct integration be applied to   Why shouldn't direct integration be applied to the equation .    The equation is not linear.   Incorrect, direct integration can handle this.     The term is squared.   Incorrect, direct integration can handle this.     The term cannot be in the denominator.   Incorrect, direct integration can handle this.     The right-hand side contains .   Correct! Direct integration only works when the right-hand side contains only .    "
},
{
  "id": "p2-c1-s2-rq4",
  "level": "2",
  "url": "main-6-3-4-8.html#p2-c1-s2-rq4",
  "type": "Reading Question",
  "number": "3.2.4",
  "title": "<em class=\"emphasis\">In the equation <span class=\"process-math\">\\(\\ds\\frac{d}{dx}\\left[5x \\cdot y\\right] = \\frac{1}{x^2}\\text{,}\\)<\/span> what is the first step in solving for <span class=\"process-math\">\\(y\\text{?}\\)<\/span><\/em>",
  "body": " In the equation , what is the first step in solving for ?   In the differential equation , what is the first step in solving for ?    Integrate both sides with respect to .  Correct! Integrating both sides is the first step in solving for .    Differentiate both sides with respect to .  Incorrect. Differentiating would not help solve the equation; integration is the correct approach.    Factor the expression .  Incorrect. Factoring is not necessary here; integration is the correct step.    Substitute a new variable for .  Incorrect. Substitution is not needed; direct integration is the correct step.   "
},
{
  "id": "p2-c1-s2-rq5",
  "level": "2",
  "url": "main-6-3-4-8.html#p2-c1-s2-rq5",
  "type": "Reading Question",
  "number": "3.2.5",
  "title": "<em class=\"emphasis\">Solve <span class=\"process-math\">\\(\\ \\ds y'= e^{2x} - 5x\\ \\)<\/span> using direct integration<\/em>.",
  "body": " Solve using direct integration   Complete each step below to solve the differential equation       The dependent variable is ,  The independent variable is ,    Give the general solution. Don t forget the constant of integration.                         "
},
{
  "id": "main-6-3-5",
  "level": "1",
  "url": "main-6-3-5.html",
  "type": "Section",
  "number": "3.3",
  "title": "Summary &amp; Exercises",
  "body": "Summary & Exercises    Summary of the Key Ideas      Antiderivatives as Solutions to Differential Equations    Finding the general antiderivative of a function, , is equivalent to finding the general solution to the differential equation .      Direct Integration    Process of integrating both sides of a differential equation to directly solve for the dependent variable, .          General Solution   Find the general solution for each of the following differential equations. Combine constants where appropriate.                                            Particular Solution   Find the particular solution for each of the following differential equations with the given initial condition.                                             Attempt to apply direct integration to the differential equation . Get to the point where it becomes clear that you cannot solve for directly. What is the obstacle?   Integrating both sides gives Without knowing , we cannot simplify . So the obstacle is that we are unable to combine the these variables into a single on the left side.     Convert this idea from the integrating factor into some exercises for the direct integration method.    To Readers: This is not an exercise (yet). Ignore it.  In this chapter, we will study a solution technique that will help us solve differential equations that are first order and linear. Consider this (carefully selected) example. Notice that the dependent variable is and the independent variable is , so we seek to find a formula for in terms of . The DE is also first order and linear.   What makes this DE special is that the left hand side can be rewritten as follows. We can verify this by actually using the product rule to take the derivative on the left hand side:   Now that we have confirmed that Equation is equivalent to Equation , we can proceed in solving the DE.  The unknown function we want to solve for is , and it is part of the product we are taking the derivative of in Equation . So we begin by undoing that differentiation by integrating both sides of Equation with respect to :   We can now just divide both sides of Equation by the coefficient on to obtain the general solution.   Recall that we said this was a carefully selected DE. This very special DE had the property that we could undo the product rule on its left hand side. This is not, in general, the case when we encounter a first order linear DE. For example, consider this DE.     "
},
{
  "id": "main-6-3-5-2-1",
  "level": "2",
  "url": "main-6-3-5.html#main-6-3-5-2-1",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": " Antiderivatives as Solutions to Differential Equations   Direct Integration  "
},
{
  "id": "main-6-3-5-3-1-3",
  "level": "2",
  "url": "main-6-3-5-3.html#main-6-3-5-3-1-3",
  "type": "Exercise",
  "number": "3.3.1",
  "title": "",
  "body": "    "
},
{
  "id": "main-6-3-5-3-1-4",
  "level": "2",
  "url": "main-6-3-5-3.html#main-6-3-5-3-1-4",
  "type": "Exercise",
  "number": "3.3.2",
  "title": "",
  "body": "    "
},
{
  "id": "main-6-3-5-3-1-5",
  "level": "2",
  "url": "main-6-3-5-3.html#main-6-3-5-3-1-5",
  "type": "Exercise",
  "number": "3.3.3",
  "title": "",
  "body": "    "
},
{
  "id": "main-6-3-5-3-1-6",
  "level": "2",
  "url": "main-6-3-5-3.html#main-6-3-5-3-1-6",
  "type": "Exercise",
  "number": "3.3.4",
  "title": "",
  "body": "    "
},
{
  "id": "main-6-3-5-3-1-7",
  "level": "2",
  "url": "main-6-3-5-3.html#main-6-3-5-3-1-7",
  "type": "Exercise",
  "number": "3.3.5",
  "title": "",
  "body": "    "
},
{
  "id": "main-6-3-5-3-1-8",
  "level": "2",
  "url": "main-6-3-5-3.html#main-6-3-5-3-1-8",
  "type": "Exercise",
  "number": "3.3.6",
  "title": "",
  "body": "    "
},
{
  "id": "main-6-3-5-3-1-9",
  "level": "2",
  "url": "main-6-3-5-3.html#main-6-3-5-3-1-9",
  "type": "Exercise",
  "number": "3.3.7",
  "title": "",
  "body": "    "
},
{
  "id": "main-6-3-5-3-1-10",
  "level": "2",
  "url": "main-6-3-5-3.html#main-6-3-5-3-1-10",
  "type": "Exercise",
  "number": "3.3.8",
  "title": "",
  "body": "    "
},
{
  "id": "main-6-3-5-3-2-3",
  "level": "2",
  "url": "main-6-3-5-3.html#main-6-3-5-3-2-3",
  "type": "Exercise",
  "number": "3.3.9",
  "title": "",
  "body": "    "
},
{
  "id": "main-6-3-5-3-2-4",
  "level": "2",
  "url": "main-6-3-5-3.html#main-6-3-5-3-2-4",
  "type": "Exercise",
  "number": "3.3.10",
  "title": "",
  "body": "    "
},
{
  "id": "main-6-3-5-3-2-5",
  "level": "2",
  "url": "main-6-3-5-3.html#main-6-3-5-3-2-5",
  "type": "Exercise",
  "number": "3.3.11",
  "title": "",
  "body": "    "
},
{
  "id": "main-6-3-5-3-2-6",
  "level": "2",
  "url": "main-6-3-5-3.html#main-6-3-5-3-2-6",
  "type": "Exercise",
  "number": "3.3.12",
  "title": "",
  "body": "    "
},
{
  "id": "main-6-3-5-3-2-7",
  "level": "2",
  "url": "main-6-3-5-3.html#main-6-3-5-3-2-7",
  "type": "Exercise",
  "number": "3.3.13",
  "title": "",
  "body": "    "
},
{
  "id": "main-6-3-5-3-2-8",
  "level": "2",
  "url": "main-6-3-5-3.html#main-6-3-5-3-2-8",
  "type": "Exercise",
  "number": "3.3.14",
  "title": "",
  "body": "    "
},
{
  "id": "main-6-3-5-3-2-9",
  "level": "2",
  "url": "main-6-3-5-3.html#main-6-3-5-3-2-9",
  "type": "Exercise",
  "number": "3.3.15",
  "title": "",
  "body": "    "
},
{
  "id": "main-6-3-5-3-2-10",
  "level": "2",
  "url": "main-6-3-5-3.html#main-6-3-5-3-2-10",
  "type": "Exercise",
  "number": "3.3.16",
  "title": "",
  "body": "    "
},
{
  "id": "main-6-3-5-3-3",
  "level": "2",
  "url": "main-6-3-5-3.html#main-6-3-5-3-3",
  "type": "Exercise",
  "number": "3.3.17",
  "title": "",
  "body": " Attempt to apply direct integration to the differential equation . Get to the point where it becomes clear that you cannot solve for directly. What is the obstacle?   Integrating both sides gives Without knowing , we cannot simplify . So the obstacle is that we are unable to combine the these variables into a single on the left side.  "
},
{
  "id": "main-6-3-5-3-4-2",
  "level": "2",
  "url": "main-6-3-5-3.html#main-6-3-5-3-4-2",
  "type": "Exercise",
  "number": "3.3.18",
  "title": "",
  "body": " To Readers: This is not an exercise (yet). Ignore it.  In this chapter, we will study a solution technique that will help us solve differential equations that are first order and linear. Consider this (carefully selected) example. Notice that the dependent variable is and the independent variable is , so we seek to find a formula for in terms of . The DE is also first order and linear.   What makes this DE special is that the left hand side can be rewritten as follows. We can verify this by actually using the product rule to take the derivative on the left hand side:   Now that we have confirmed that Equation is equivalent to Equation , we can proceed in solving the DE.  The unknown function we want to solve for is , and it is part of the product we are taking the derivative of in Equation . So we begin by undoing that differentiation by integrating both sides of Equation with respect to :   We can now just divide both sides of Equation by the coefficient on to obtain the general solution.   Recall that we said this was a carefully selected DE. This very special DE had the property that we could undo the product rule on its left hand side. This is not, in general, the case when we encounter a first order linear DE. For example, consider this DE.  "
},
{
  "id": "main-6-4-3",
  "level": "1",
  "url": "main-6-4-3.html",
  "type": "Section",
  "number": "4.1",
  "title": "Separable Form",
  "body": "Separable Form  The separation of variables method works when we can separate the dependent and independent variables by multiplication. Let's define this property formally.   A first-order differential equation is separable if it can be written in the separable form :    The notation and are place-holders for expressions that only contain the variable and the variable , respectively. Equivalently, the definition could be written as but it is much easier to just write .  For example, the following differential equations are separable: . Whereas the following differential equations are not separable: .  Special Separable Forms  A differential equation can still be separable even if one or both of the variables, or , do not appear in the equation. For example, the differential equation, is still separable since it can be written as .  Similarly, the following equations are also separable: .   Understanding the separable form of differential equations is crucial for effectively applying the separation of variables method. By recognizing when an equation can be expressed as a product of functions involving only the independent and dependent variables, you unlock a straightforward path to finding solutions.  Check-Point Questions   The term separable refers to the idea that the dependent and independent variables can be separated by   The term separable refers to the idea that the dependent and independent variables can be separated by .    multiplication   Correct!     addition   Read the first sentence of this page.     integration   Read the first sentence of this page.     gender   Really?      Which of the following differential equations is not separable?   Which of the following differential equations is not separable?      Incorrect. This equation is separable because it can be expressed as a product of functions involving only and .       Incorrect. This equation is separable as the variables are already separated by multiplication.       Correct! This equation is not separable because the terms involving and are added together, not multiplied.       Incorrect. This equation is separable because the variables are divided, which can still be separated into a product of functions.      The differential equation, , is separable   The differential equation, , is separable   We can show it is separable by rewriting it as     How can the equation be rewritten in separable form?   How can the equation be rewritten in separable form?      Incorrect. This rewriting does not separate the variables effectively.       Incorrect. This form still combines and terms in a way that is not separable.       Correct! This form separates the variables, making it possible to identify whether the equation is separable.     None of the above.   Correct! This equation is not separable, so it is impossible to write it in separable form.      Select the Separable Differential Equations  Click on each of the separable differential equations below.                              Remember, a differential equation is separable if you can express it as a product of functions of and separately. Look for equations where the variables are separated by multiplication, not addition or other operations.    "
},
{
  "id": "separable",
  "level": "2",
  "url": "main-6-4-3.html#separable",
  "type": "Definition",
  "number": "6",
  "title": "",
  "body": " A first-order differential equation is separable if it can be written in the separable form :   "
},
{
  "id": "p2-c2-s1-rq1",
  "level": "2",
  "url": "main-6-4-3-8.html#p2-c2-s1-rq1",
  "type": "Reading Question",
  "number": "4.1.1",
  "title": "<em class=\"emphasis\">The term separable refers to the idea that the dependent and independent variables can be separated by <span class=\"fillin underline\" role=\"img\" aria-label=\"15-character blank\" style=\"width: 6.818181818181818em;\" \/><\/em>.",
  "body": " The term separable refers to the idea that the dependent and independent variables can be separated by   The term separable refers to the idea that the dependent and independent variables can be separated by .    multiplication   Correct!     addition   Read the first sentence of this page.     integration   Read the first sentence of this page.     gender   Really?    "
},
{
  "id": "p2-c2-s1-rq2",
  "level": "2",
  "url": "main-6-4-3-8.html#p2-c2-s1-rq2",
  "type": "Reading Question",
  "number": "4.1.2",
  "title": "<em class=\"emphasis\">Which of the following differential equations is not separable?<\/em>",
  "body": " Which of the following differential equations is not separable?   Which of the following differential equations is not separable?      Incorrect. This equation is separable because it can be expressed as a product of functions involving only and .       Incorrect. This equation is separable as the variables are already separated by multiplication.       Correct! This equation is not separable because the terms involving and are added together, not multiplied.       Incorrect. This equation is separable because the variables are divided, which can still be separated into a product of functions.    "
},
{
  "id": "p2-c2-s1-rq3",
  "level": "2",
  "url": "main-6-4-3-8.html#p2-c2-s1-rq3",
  "type": "Reading Question",
  "number": "4.1.3",
  "title": "<em class=\"emphasis\">The differential equation, <span class=\"process-math\">\\(\\ds\\frac{dz}{dt} = \\cos^2 z \\text{,}\\)<\/span> is separable<\/em>.",
  "body": " The differential equation, , is separable   The differential equation, , is separable   We can show it is separable by rewriting it as   "
},
{
  "id": "p2-c2-s1-rq4",
  "level": "2",
  "url": "main-6-4-3-8.html#p2-c2-s1-rq4",
  "type": "Reading Question",
  "number": "4.1.4",
  "title": "<em class=\"emphasis\">How can the equation <span class=\"process-math\">\\(\\ds\\frac{dy}{dx} = \\frac{y}{x+y}\\)<\/span> be rewritten in separable form?<\/em>",
  "body": " How can the equation be rewritten in separable form?   How can the equation be rewritten in separable form?      Incorrect. This rewriting does not separate the variables effectively.       Incorrect. This form still combines and terms in a way that is not separable.       Correct! This form separates the variables, making it possible to identify whether the equation is separable.     None of the above.   Correct! This equation is not separable, so it is impossible to write it in separable form.    "
},
{
  "id": "p2-c2-s1-rq5",
  "level": "2",
  "url": "main-6-4-3-8.html#p2-c2-s1-rq5",
  "type": "Reading Question",
  "number": "4.1.5",
  "title": "<em class=\"emphasis\">Select the Separable Differential Equations<\/em>.",
  "body": " Select the Separable Differential Equations  Click on each of the separable differential equations below.                              Remember, a differential equation is separable if you can express it as a product of functions of and separately. Look for equations where the variables are separated by multiplication, not addition or other operations.  "
},
{
  "id": "main-6-4-4",
  "level": "1",
  "url": "main-6-4-4.html",
  "type": "Section",
  "number": "4.2",
  "title": "Verifying Separable",
  "body": "Verifying Separable  Many differential equations will not be handed to you in separable form , so various algebra techniques will be required to put the equations into this form. The following set of examples illustrate this idea.   Show the differential equations are separable using various algebra techniques.  .   Factor   Since is common in both terms of the sum, we can factor it out as showing that the differential equation is separable .    Split the Fraction   This example uses the following rule for multiplying fractions: First, we split and in the numerator and denominator, then use the rule above to separate the fraction, like so and the equation is separable .    Separate the Exponents   Applying the rule to this differential equation allows us to show it is separable as follows:      Show the differential equations are separable by isolating the derivative first.  .   Attention to Detail   This is sort of a trick question to get you in the habit of checking the order of a differential equation. Since this DE is not first-order, it is not separable .    Isolate the Derivative First   We see that this DE is first-order, so now we need to see if it can be rearranged in separable form . Isolating we get and it should be clear that there is no way to separate and by multiplication , and therefore this DE is not separable .    Isolate, Simplify, & Factor   As before, let's isolate on the left side of the equation, like so   Now that the derivative is isolated on the left, we attempt to separate the variables on the right. Factoring out of both terms gives and we see that the differential equation is separable .  In general, there is more than one way to separate a differential equation. This example could have been separated in either of the following ways: The only thing that matters is that and are separated.    Check-Point Questions   The differential equation, , is in separable form    The differential equation, , is in separable form .   This equation is not currently in separable form . However, it can be put in separable form by moving the term to the right-side of the equation.    Match each equation to the algebra technique needed to show the equation is separable    Drag the algebra technique to the corresponding differential equation.               Isolate the derivative     Factor     No technique is needed     Select the Separable Differential Equations Click on each of the separable differential equations below.                              A differential equation is separable if you can rearrange it to express it as a product of functions involving only and separately. Look for equations that can be manipulated into this form, even if they do not initially appear separable.    Write the differential equation, , in separable form   Write the differential equation, , in separable form by identifying and .                                     Move the term to the right and factor out         Write the differential equation, , in separable form    Write the differential equation, , in separable form by identifying and .                                     We isolate the derivative and group the terms as shown below. Notice how we separated the product of two fractions         "
},
{
  "id": "example-verify-separable-1",
  "level": "2",
  "url": "main-6-4-4.html#example-verify-separable-1",
  "type": "Example",
  "number": "7",
  "title": "",
  "body": " Show the differential equations are separable using various algebra techniques.  .   Factor   Since is common in both terms of the sum, we can factor it out as showing that the differential equation is separable .    Split the Fraction   This example uses the following rule for multiplying fractions: First, we split and in the numerator and denominator, then use the rule above to separate the fraction, like so and the equation is separable .    Separate the Exponents   Applying the rule to this differential equation allows us to show it is separable as follows:    "
},
{
  "id": "example-verify-separable-2",
  "level": "2",
  "url": "main-6-4-4.html#example-verify-separable-2",
  "type": "Example",
  "number": "8",
  "title": "",
  "body": " Show the differential equations are separable by isolating the derivative first.  .   Attention to Detail   This is sort of a trick question to get you in the habit of checking the order of a differential equation. Since this DE is not first-order, it is not separable .    Isolate the Derivative First   We see that this DE is first-order, so now we need to see if it can be rearranged in separable form . Isolating we get and it should be clear that there is no way to separate and by multiplication , and therefore this DE is not separable .    Isolate, Simplify, & Factor   As before, let's isolate on the left side of the equation, like so   Now that the derivative is isolated on the left, we attempt to separate the variables on the right. Factoring out of both terms gives and we see that the differential equation is separable .  In general, there is more than one way to separate a differential equation. This example could have been separated in either of the following ways: The only thing that matters is that and are separated.   "
},
{
  "id": "p2-c2-s2-rq1",
  "level": "2",
  "url": "main-6-4-4-5.html#p2-c2-s2-rq1",
  "type": "Reading Question",
  "number": "4.2.1",
  "title": "<em class=\"emphasis\">The differential equation, <span class=\"process-math\">\\(\\ds \\frac{dy}{dx} - x(y^2 + y) = 0\\text{,}\\)<\/span> is in separable form<\/em>.",
  "body": " The differential equation, , is in separable form    The differential equation, , is in separable form .   This equation is not currently in separable form . However, it can be put in separable form by moving the term to the right-side of the equation.  "
},
{
  "id": "p2-c2-s2-rq2",
  "level": "2",
  "url": "main-6-4-4-5.html#p2-c2-s2-rq2",
  "type": "Reading Question",
  "number": "4.2.2",
  "title": "<em class=\"emphasis\">Match each equation to the algebra technique needed to show the equation is separable<\/em>.",
  "body": " Match each equation to the algebra technique needed to show the equation is separable    Drag the algebra technique to the corresponding differential equation.               Isolate the derivative     Factor     No technique is needed    "
},
{
  "id": "p2-c2-s2-rq3",
  "level": "2",
  "url": "main-6-4-4-5.html#p2-c2-s2-rq3",
  "type": "Reading Question",
  "number": "4.2.3",
  "title": "<em class=\"emphasis\">Select the Separable Differential Equations<\/em>.",
  "body": "Select the Separable Differential Equations Click on each of the separable differential equations below.                              A differential equation is separable if you can rearrange it to express it as a product of functions involving only and separately. Look for equations that can be manipulated into this form, even if they do not initially appear separable.  "
},
{
  "id": "p2-c2-s2-rq4",
  "level": "2",
  "url": "main-6-4-4-5.html#p2-c2-s2-rq4",
  "type": "Reading Question",
  "number": "4.2.4",
  "title": "<em class=\"emphasis\">Write the differential equation, <span class=\"process-math\">\\(\\ds\\frac{dy}{dx} - y\\cos(x) = y\\text{,}\\)<\/span> in separable form<\/em>.",
  "body": " Write the differential equation, , in separable form   Write the differential equation, , in separable form by identifying and .                                     Move the term to the right and factor out       "
},
{
  "id": "p2-c4-s1-rq5",
  "level": "2",
  "url": "main-6-4-4-5.html#p2-c4-s1-rq5",
  "type": "Reading Question",
  "number": "4.2.5",
  "title": "<em class=\"emphasis\">Write the differential equation, <span class=\"process-math\">\\(\\ds tP\\frac{dP}{dt} = e^tP^2 - e^ty\\text{,}\\)<\/span> in separable form<\/em>.",
  "body": " Write the differential equation, , in separable form    Write the differential equation, , in separable form by identifying and .                                     We isolate the derivative and group the terms as shown below. Notice how we separated the product of two fractions       "
},
{
  "id": "main-6-4-5",
  "level": "1",
  "url": "main-6-4-5.html",
  "type": "Section",
  "number": "4.3",
  "title": "Separation of Variables Method (SOV)",
  "body": "Separation of Variables Method (SOV)  We are now going to discuss the steps involved in the separation of variables method. In order to use this method, the differential equation must be first-order and be separable .  Identifying a differential equation as first-order is as simple as observing the presence of a first derivative and no higher derivatives. In comparison, determining that an equation is separable is not always immediately apparent. Sometimes, it requires some algebra to rearrange the equation into a form where the method can be applied.  Separation of Variables (SOV)  If a differential equation can be written in the separable form , then the general solution can be determined through the steps below.   Step 1: Separate      Step 2: Integrate      Step 3: Isolate  Isolate (if possible), and combine constants.     These problems serve as warm-up examples to familiarize you with the separation of variables method. You won't encounter any tricky algebra or calculus steps, allowing you to focus solely on the general steps needed to apply this technique. However, pay close attention to the new concept of \"combining constants\", as it will appear frequently throughout this course.   Find the general solution to the following differential equations using the separation of variables method.      You actually don't need separation of variables to solve for . In fact, you might recognize that finding is the same as finding the anti-derivative of , which we know is . Nevertheless, let's apply separation of variables to make sure we get the same answer.  The differential equation has order 1 and is separable since    . We use algebra to move all the terms to the left and all the terms to the right, giving    . We now integrate both sides with respect to , like so    . Finally, we isolate and combine constants.   Since is still a constant, we combine it into a single constant, , and write our solution as          The differential equation has order 1 and is separable since    . We use algebra to move all the terms to the left and all the terms to the right, giving    . We now integrate both sides with respect to , like so    . Finally, we isolate and combine constants.              .    .    .        These examples illustrate the fundamental steps of the separation of variables method, giving you a solid foundation for solving simple separable differential equations. As you progress, the techniques you've learned here will be essential for tackling more challenging problems. In the next section, we'll explore more complex examples that require additional algebraic manipulation and deeper understanding.  Check-Point Questions   Why is it important to verify if a differential equation is separable?   Why is it important to verify if a differential equation is separable?    Separable equations are easier to solve.  Incorrect. While separable equations can be easier to solve, the main reason to verify separability is to ensure that the separation of variables method can be applied.    It helps to identify the order of the differential equation.  Incorrect. Verifying separability does not necessarily relate to identifying the order of the differential equation.    It simplifies the differential equation.  Incorrect. Verifying separability does not simplify the equation itself but confirms if the equation can be solved by separation of variables.    Not all differential equations are separable, and this method only works on separable equations.  Correct! The separation of variables method is only applicable to separable differential equations, making it important to verify separability first.     What are the two key requirements for using the separation of variables method?   What are the two key requirements for using the separation of variables method?    The differential equation must be linear and separable.  Incorrect. Separable is required, but the equation does not need to be linear.    The differential equation must be first-order and linear.  Incorrect. First-order is required, but the equation does not need to be linear for the separation of variables method to be applied.    The differential equation must be second-order and separable.  Incorrect. Separable is required, but the equation cannot be second-order for the separation of variables method to be applied.    The differential equation must be first-order and separable.  Correct! The separation of variables method applies only to first-order differential equations thatare separable.     In the differential equation , which step is crucial for verifying that it is separable?   In the differential equation , which step is crucial for verifying that it is separable?    Integrating both sides immediately.  Incorrect. Integration should come after the equation is verified to be separable.    Substituting a value for .  Incorrect. Substitution is not part of the separation process; the goal is to separate the variables first.    Expanding the terms on both sides.  Incorrect. Expansion is not necessary here; the focus should be on separating the variables.    Rearranging the equation to isolate and separate the variables.  Correct! Rearranging the equation is key to verifying that it can be separated into functions of and .    Separation of Variables Method Steps  List the order of tasks that you should perform to apply separation of variables method.   Drag each task on the left to the correct order on the right.    Review    Verify the DE is separable.  Task 1    Separate the variables on different sides of the equation.  Task 2    Integrate both sides of the DE  Task 3    Solve for , if possible  Task 4    Apply initial conditions, if given.  Task 5     "
},
{
  "id": "sov-method",
  "level": "2",
  "url": "main-6-4-5.html#sov-method",
  "type": "Method",
  "number": "2",
  "title": "Separation of Variables (SOV).",
  "body": "Separation of Variables (SOV)  If a differential equation can be written in the separable form , then the general solution can be determined through the steps below.   Step 1: Separate      Step 2: Integrate      Step 3: Isolate  Isolate (if possible), and combine constants.    "
},
{
  "id": "sov-method-basic-examples",
  "level": "2",
  "url": "main-6-4-5.html#sov-method-basic-examples",
  "type": "Example",
  "number": "9",
  "title": "",
  "body": " Find the general solution to the following differential equations using the separation of variables method.      You actually don't need separation of variables to solve for . In fact, you might recognize that finding is the same as finding the anti-derivative of , which we know is . Nevertheless, let's apply separation of variables to make sure we get the same answer.  The differential equation has order 1 and is separable since    . We use algebra to move all the terms to the left and all the terms to the right, giving    . We now integrate both sides with respect to , like so    . Finally, we isolate and combine constants.   Since is still a constant, we combine it into a single constant, , and write our solution as          The differential equation has order 1 and is separable since    . We use algebra to move all the terms to the left and all the terms to the right, giving    . We now integrate both sides with respect to , like so    . Finally, we isolate and combine constants.              .    .    .       "
},
{
  "id": "p2-c2-s3-rq1",
  "level": "2",
  "url": "main-6-4-5-8.html#p2-c2-s3-rq1",
  "type": "Reading Question",
  "number": "4.3.1",
  "title": "<em class=\"emphasis\">Why is it important to verify if a differential equation is separable?<\/em>",
  "body": " Why is it important to verify if a differential equation is separable?   Why is it important to verify if a differential equation is separable?    Separable equations are easier to solve.  Incorrect. While separable equations can be easier to solve, the main reason to verify separability is to ensure that the separation of variables method can be applied.    It helps to identify the order of the differential equation.  Incorrect. Verifying separability does not necessarily relate to identifying the order of the differential equation.    It simplifies the differential equation.  Incorrect. Verifying separability does not simplify the equation itself but confirms if the equation can be solved by separation of variables.    Not all differential equations are separable, and this method only works on separable equations.  Correct! The separation of variables method is only applicable to separable differential equations, making it important to verify separability first.   "
},
{
  "id": "p2-c2-s3-rq2",
  "level": "2",
  "url": "main-6-4-5-8.html#p2-c2-s3-rq2",
  "type": "Reading Question",
  "number": "4.3.2",
  "title": "<em class=\"emphasis\">What are the two key requirements for using the separation of variables method?<\/em>",
  "body": " What are the two key requirements for using the separation of variables method?   What are the two key requirements for using the separation of variables method?    The differential equation must be linear and separable.  Incorrect. Separable is required, but the equation does not need to be linear.    The differential equation must be first-order and linear.  Incorrect. First-order is required, but the equation does not need to be linear for the separation of variables method to be applied.    The differential equation must be second-order and separable.  Incorrect. Separable is required, but the equation cannot be second-order for the separation of variables method to be applied.    The differential equation must be first-order and separable.  Correct! The separation of variables method applies only to first-order differential equations thatare separable.   "
},
{
  "id": "p2-c2-s3-rq6",
  "level": "2",
  "url": "main-6-4-5-8.html#p2-c2-s3-rq6",
  "type": "Reading Question",
  "number": "4.3.3",
  "title": "<em class=\"emphasis\">In the differential equation <span class=\"process-math\">\\(\\ds\\frac{dy}{dx} + \\frac{x}{y^2} = 0\\text{,}\\)<\/span> which step is crucial for verifying that it is separable?<\/em>",
  "body": " In the differential equation , which step is crucial for verifying that it is separable?   In the differential equation , which step is crucial for verifying that it is separable?    Integrating both sides immediately.  Incorrect. Integration should come after the equation is verified to be separable.    Substituting a value for .  Incorrect. Substitution is not part of the separation process; the goal is to separate the variables first.    Expanding the terms on both sides.  Incorrect. Expansion is not necessary here; the focus should be on separating the variables.    Rearranging the equation to isolate and separate the variables.  Correct! Rearranging the equation is key to verifying that it can be separated into functions of and .   "
},
{
  "id": "p2-c2-s3-rq8",
  "level": "2",
  "url": "main-6-4-5-8.html#p2-c2-s3-rq8",
  "type": "Reading Question",
  "number": "4.3.4",
  "title": "Separation of Variables Method Steps.",
  "body": "Separation of Variables Method Steps  List the order of tasks that you should perform to apply separation of variables method.   Drag each task on the left to the correct order on the right.    Review    Verify the DE is separable.  Task 1    Separate the variables on different sides of the equation.  Task 2    Integrate both sides of the DE  Task 3    Solve for , if possible  Task 4    Apply initial conditions, if given.  Task 5   "
},
{
  "id": "main-6-4-6",
  "level": "1",
  "url": "main-6-4-6.html",
  "type": "Section",
  "number": "4.4",
  "title": "Additional Examples",
  "body": "Additional Examples  The following problems go beyond the basics and require more advanced algebraic manipulations or integration techniques to solve. Each example will deepen your understanding of the separation of variables method (SOV) and its application to more complex differential equations.   Solve the differential equations using the SOV method. A.    The equation is separable since it can be written as: Now we apply the separation of variables method.       .     B.    This differential equation is separable as it can be written as: Therefore, we can apply the separation of variables method.       .      Common Pitfall: Don't Split Square Roots!  In the first example, we found the general solution to as . Some students are tempted to simplify this incorrectly, like so: The constant must remain inside the square root, as this separation over addition or subtraction violates the square root's mathematical properties.   The following problems introduce initial conditions, allowing you to solve for specific solutions using the SOV method.   Solve the initial-value problems using the SOV method. A.    From previous example, the general solution is where the sign means that the general solution includes both the positive and negative square roots. However, when finding a particular solution, only one applies. In this case, the initial condition indicates that is negative when . Therefore, the particular solution must come from the form containing the negative sign. Substituting the initial condition: Therefore, the solution to the initial-value problem is:    B.    This differential equation is first order and separable since Therefore, we can apply the separation of variables method.       .    Substituting, , into the general solution, we get Therefore, the solution to the intial-valued problem is     In the previous examples, we were able to explicitly solve for the dependent variable in terms of the independent variable. However, in some cases, we may only be able to provide an implicit solution, as shown in the next example.   Solve the initial-value problem using the SOV method.     Since all the terms are on the left and all the terms are on the right, we can just factor out on the left to separate the equation.         So, the general solution is . Note that there is no nice way to find explicitly. In these cases, it is ok to leave the general solution in this implicit form. We can still find using initial condition. Recall, that means that when , . Substituting these values in, we get Therefore, the solution to the initial-valued problem is .    The final example highlights some of the subtle details of combining constants and dealing with absolute values that arise when solving differential equations.   Solve the differential equation using the SOV method.     This differential equation is first order and separable since Therefore, we can apply the separation of variables method.      .   Finally, the general solution is     These examples demonstrate a range of techniques and complexities involved in solving separable differential equations. Depending on the form of the equation, the solution might be explicit or implicit, but the method of separation of variables remains a powerful tool for finding solutions to many types of differential equations.  Check-Point Questions   What is the first step to solve , using the separation of variables method?   In the equation , what is the first step to solve it using the separation of variables method?    Integrate both sides.  Incorrect. You need to separate the variables before integrating.    Isolate , if possible.  Incorrect. You should first separate the variables.    Divide both sides by  Incorrect. You should first separate the variables.    Show it is separable.  Correct! This rearrangement allows us to apply separation of variables.     Which of the following are valid ways to combine constants in a differential equation?   Which of the following are valid ways to combine constants in a differential equation? Select ALL that apply.      where    Correct!      where    Correct!      where    Incorrect.      where    Incorrect.      where    Correct!     Solve using separation of variables   Complete each step below to solve the differential equation     Verify that the differential equation is separable.         order:          separable form:             Separate and integrate. Give the integrals and antiderivatives.                        Don t forget the absolute value on the left antiderivative.  Isolate. Give the general solution. Use for the combined constant.                                                         "
},
{
  "id": "main-6-4-6-3",
  "level": "2",
  "url": "main-6-4-6.html#main-6-4-6-3",
  "type": "Example",
  "number": "10",
  "title": "",
  "body": " Solve the differential equations using the SOV method. A.    The equation is separable since it can be written as: Now we apply the separation of variables method.       .     B.    This differential equation is separable as it can be written as: Therefore, we can apply the separation of variables method.       .     "
},
{
  "id": "main-6-4-6-4",
  "level": "2",
  "url": "main-6-4-6.html#main-6-4-6-4",
  "type": "Note",
  "number": "11",
  "title": "Common Pitfall: Don’t Split Square Roots!",
  "body": "Common Pitfall: Don't Split Square Roots!  In the first example, we found the general solution to as . Some students are tempted to simplify this incorrectly, like so: The constant must remain inside the square root, as this separation over addition or subtraction violates the square root's mathematical properties.  "
},
{
  "id": "main-6-4-6-6",
  "level": "2",
  "url": "main-6-4-6.html#main-6-4-6-6",
  "type": "Example",
  "number": "12",
  "title": "",
  "body": " Solve the initial-value problems using the SOV method. A.    From previous example, the general solution is where the sign means that the general solution includes both the positive and negative square roots. However, when finding a particular solution, only one applies. In this case, the initial condition indicates that is negative when . Therefore, the particular solution must come from the form containing the negative sign. Substituting the initial condition: Therefore, the solution to the initial-value problem is:    B.    This differential equation is first order and separable since Therefore, we can apply the separation of variables method.       .    Substituting, , into the general solution, we get Therefore, the solution to the intial-valued problem is    "
},
{
  "id": "main-6-4-6-8",
  "level": "2",
  "url": "main-6-4-6.html#main-6-4-6-8",
  "type": "Example",
  "number": "13",
  "title": "",
  "body": " Solve the initial-value problem using the SOV method.     Since all the terms are on the left and all the terms are on the right, we can just factor out on the left to separate the equation.         So, the general solution is . Note that there is no nice way to find explicitly. In these cases, it is ok to leave the general solution in this implicit form. We can still find using initial condition. Recall, that means that when , . Substituting these values in, we get Therefore, the solution to the initial-valued problem is .   "
},
{
  "id": "main-6-4-6-10",
  "level": "2",
  "url": "main-6-4-6.html#main-6-4-6-10",
  "type": "Example",
  "number": "14",
  "title": "",
  "body": " Solve the differential equation using the SOV method.     This differential equation is first order and separable since Therefore, we can apply the separation of variables method.      .   Finally, the general solution is    "
},
{
  "id": "p2-c2-s4-rq1",
  "level": "2",
  "url": "main-6-4-6-12.html#p2-c2-s4-rq1",
  "type": "Reading Question",
  "number": "4.4.1",
  "title": "<em class=\"emphasis\">What is the first step to solve <span class=\"process-math\">\\(y^2 y' - 1 = 6x^2\\text{,}\\)<\/span> using the separation of variables method?<\/em>",
  "body": " What is the first step to solve , using the separation of variables method?   In the equation , what is the first step to solve it using the separation of variables method?    Integrate both sides.  Incorrect. You need to separate the variables before integrating.    Isolate , if possible.  Incorrect. You should first separate the variables.    Divide both sides by  Incorrect. You should first separate the variables.    Show it is separable.  Correct! This rearrangement allows us to apply separation of variables.   "
},
{
  "id": "p2-c2-s4-rq2",
  "level": "2",
  "url": "main-6-4-6-12.html#p2-c2-s4-rq2",
  "type": "Reading Question",
  "number": "4.4.2",
  "title": "<em class=\"emphasis\">Which of the following are valid ways to combine constants in a differential equation?<\/em>",
  "body": " Which of the following are valid ways to combine constants in a differential equation?   Which of the following are valid ways to combine constants in a differential equation? Select ALL that apply.      where    Correct!      where    Correct!      where    Incorrect.      where    Incorrect.      where    Correct!   "
},
{
  "id": "p2-c2-s4-rq3",
  "level": "2",
  "url": "main-6-4-6-12.html#p2-c2-s4-rq3",
  "type": "Reading Question",
  "number": "4.4.3",
  "title": "<em class=\"emphasis\">Solve <span class=\"process-math\">\\(\\ \\ds \\frac{dy}{dx} - y\\cos(x) = y\\ \\)<\/span> using separation of variables<\/em>.",
  "body": " Solve using separation of variables   Complete each step below to solve the differential equation     Verify that the differential equation is separable.         order:          separable form:             Separate and integrate. Give the integrals and antiderivatives.                        Don t forget the absolute value on the left antiderivative.  Isolate. Give the general solution. Use for the combined constant.                                                      "
},
{
  "id": "main-6-4-7",
  "level": "1",
  "url": "main-6-4-7.html",
  "type": "Section",
  "number": "4.5",
  "title": "Summary &amp; Exercises",
  "body": "Summary & Exercises    Summary of the Key Ideas    Separation of Variables Method   The general solution of a differential equation that is first-order and separable can be found using the separation of variables method .       Separable   Determine whether the given differential equation is separable or not. As demonstrated in the examples, if the equation is separable, use parentheses to explicitly show the separable form.      not separable  not separable; there's no way to separate th an inside the sine term.     separable  This doesn't look separable; but if we use a property of logarithms we can re-write as follows. Hence, this DE is separable .     separable  We can rearrange as follows. Hence, this DE is separable .     separable  We can rearrange as follows. Hence, this DE is separable .     not separable  not separable; there's no way to separate and via multiplication\/division     not separable  not separable; this DE is second order, and DEs must be first order to be separable   Step-by-Step   Maybe write 1 or 2 simple scaffolded problems here?    Given the differential equation , determine if it is separable. If so, rewrite it in the separated form.   The equation is separable because we can write it as:        Continuing from the previous problem, integrate the left side of the separated equation with respect to .   Integrating with respect to , we get:        Now, integrate the right side of the separated equation with respect to .   Integrating with respect to , we get:        Combine the results from the previous exercises to form the general solution to the differential equation.   Equating the two integrals, we get: By grouping constants, we can represent them with a single constant: Where .        Warm Ups   Solve using separation of variables, if possible.                                  Further Practice   Solve using separation of variables, if possible.                       Note: since, in general , we CANNOT simplify the solution to                For the integral on the left hand side, we will need to do a substitution. If we le the and therefor Then we have the following:        When we separate the variables and integrate both sides, we get  Since the equation cannot readily be solved for as an explicit function of , we are done.      Separation of variables gives:    Initial Value Problems   Solve each of the following initial value problems using separation of variables, if possible.       Informally, we divide both side of the differential equation by and multiply each side by to get      and hence The condition yields , so the desired solution is       First we find the general solution: Using the initial condition : So the solution to the initial value problem is:      , or  First we find the general solution: Then we use the initial conditio . Hence, the solution i , or .     , or  First we find the general solution: Then we use the initial conditio . Hence, the solution i , or .   Applications  A 4-lb roast, initially at , is placed in a oven at 5:00 PM After 75 minutes it is found that the temperature of the roast is F. When will the roast be (medium rate)?   We take time in minutes, with corresponding to 5:00 PM We also assume (somewhat unrealistically) that at any instant the temperature of the roast is uniform throughout. We have , , and . Hence Now , implies that , so . We also know that when . Substitution of these values in the preceding equation yields Hence we finally solve the equation for (min), the total cooking time required.Because the roast was placed in the oven at 5:00 PM, it it should be removed at about 6:45 PM   Conceptual Questions  Explain why separating variables works as a method for solving ordinary differential equations.  Separation of variables works by isolating all terms involving to one side and all terms involving to the other. When this can be done, both sides can be integrated independently, allowing for the solution of the differential equation. This method effectively transforms the problem of solving a differential equation into the simpler task of integrating functions.   Why is it important for the equation to be \"separable\" in order to use the method of separation of variables? What does it mean for a differential equation to be separable?  For the method of separation of variables to be used, we must be able to write the differential equation in the form , effectively separating the variables and onto different sides of the equation. When a differential equation can be written in this way, it is called separable. Separability is crucial because it allows us to integrate each side with respect to its own variable, leading to a solution for in terms of .   Provide an example of a differential equation that is not separable and explain why the method of separation of variables cannot be applied to it.     In solving a differential equation using separation of variables, why might the constant of integration appear on both sides of the resulting equation?  After separating variables, we integrate both sides of the equation. Each integration will typically introduce its own constant of integration. Therefore, when we combine the results of these integrations, we often see a constant on both sides. These constants can often be combined into a single constant by subtracting one from the other.   Some differential equations solved using separation of variables yield implicit solutions, while others yield explicit solutions. Explain the difference between implicit and explicit solutions, and provide examples of each.     True\/False: Every first-order ordinary differential equation can be solved using the method of separation of variables.       Which of the following differential equations is not separable?           True\/False: If a differential equation is separable, its solution will always be an explicit function of .     The process of writing a differential equation in the form is called _________ of variables.     Which of the following cannot be directly solved by separation of variables?           True\/False: The method of separation of variables can be directly applied to higher-order differential equations.     True\/False: If you can write a differential equation in the form , then it is separable.     A differential equation of the form without a term:   Is always separable  Is never separable  Can be separable depending on  Is an implicit equation      A structured exercise   Here is where we give the student the background information required to start accomplishing tasks.  Solve a separable DE using separation of variables.                   The second step to do. We'll be lazy and just include an answer.   Just the answer.   A little wrap up.    "
},
{
  "id": "main-6-4-7-2-1",
  "level": "2",
  "url": "main-6-4-7.html#main-6-4-7-2-1",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": " Separation of Variables Method  "
},
{
  "id": "main-6-4-7-3-1-3",
  "level": "2",
  "url": "main-6-4-7-3.html#main-6-4-7-3-1-3",
  "type": "Exercise",
  "number": "4.5.1",
  "title": "",
  "body": "   not separable  not separable; there's no way to separate th an inside the sine term. "
},
{
  "id": "main-6-4-7-3-1-4",
  "level": "2",
  "url": "main-6-4-7-3.html#main-6-4-7-3-1-4",
  "type": "Exercise",
  "number": "4.5.2",
  "title": "",
  "body": "   separable  This doesn't look separable; but if we use a property of logarithms we can re-write as follows. Hence, this DE is separable . "
},
{
  "id": "main-6-4-7-3-1-5",
  "level": "2",
  "url": "main-6-4-7-3.html#main-6-4-7-3-1-5",
  "type": "Exercise",
  "number": "4.5.3",
  "title": "",
  "body": "   separable  We can rearrange as follows. Hence, this DE is separable . "
},
{
  "id": "main-6-4-7-3-1-6",
  "level": "2",
  "url": "main-6-4-7-3.html#main-6-4-7-3-1-6",
  "type": "Exercise",
  "number": "4.5.4",
  "title": "",
  "body": "   separable  We can rearrange as follows. Hence, this DE is separable . "
},
{
  "id": "main-6-4-7-3-1-7",
  "level": "2",
  "url": "main-6-4-7-3.html#main-6-4-7-3-1-7",
  "type": "Exercise",
  "number": "4.5.5",
  "title": "",
  "body": "   not separable  not separable; there's no way to separate and via multiplication\/division "
},
{
  "id": "main-6-4-7-3-1-8",
  "level": "2",
  "url": "main-6-4-7-3.html#main-6-4-7-3-1-8",
  "type": "Exercise",
  "number": "4.5.6",
  "title": "",
  "body": "   not separable  not separable; this DE is second order, and DEs must be first order to be separable "
},
{
  "id": "main-6-4-7-3-2-3",
  "level": "2",
  "url": "main-6-4-7-3.html#main-6-4-7-3-2-3",
  "type": "Exercise",
  "number": "4.5.7",
  "title": "",
  "body": " Given the differential equation , determine if it is separable. If so, rewrite it in the separated form.   The equation is separable because we can write it as:        Continuing from the previous problem, integrate the left side of the separated equation with respect to .   Integrating with respect to , we get:        Now, integrate the right side of the separated equation with respect to .   Integrating with respect to , we get:        Combine the results from the previous exercises to form the general solution to the differential equation.   Equating the two integrals, we get: By grouping constants, we can represent them with a single constant: Where .      "
},
{
  "id": "main-6-4-7-3-3-3",
  "level": "2",
  "url": "main-6-4-7-3.html#main-6-4-7-3-3-3",
  "type": "Exercise",
  "number": "4.5.8",
  "title": "",
  "body": "  "
},
{
  "id": "main-6-4-7-3-3-4",
  "level": "2",
  "url": "main-6-4-7-3.html#main-6-4-7-3-3-4",
  "type": "Exercise",
  "number": "4.5.9",
  "title": "",
  "body": "  "
},
{
  "id": "main-6-4-7-3-3-5",
  "level": "2",
  "url": "main-6-4-7-3.html#main-6-4-7-3-3-5",
  "type": "Exercise",
  "number": "4.5.10",
  "title": "",
  "body": "  "
},
{
  "id": "main-6-4-7-3-3-6",
  "level": "2",
  "url": "main-6-4-7-3.html#main-6-4-7-3-3-6",
  "type": "Exercise",
  "number": "4.5.11",
  "title": "",
  "body": "  "
},
{
  "id": "main-6-4-7-3-3-7",
  "level": "2",
  "url": "main-6-4-7-3.html#main-6-4-7-3-3-7",
  "type": "Exercise",
  "number": "4.5.12",
  "title": "",
  "body": "  "
},
{
  "id": "main-6-4-7-3-3-8",
  "level": "2",
  "url": "main-6-4-7-3.html#main-6-4-7-3-3-8",
  "type": "Exercise",
  "number": "4.5.13",
  "title": "",
  "body": "  "
},
{
  "id": "main-6-4-7-3-3-9",
  "level": "2",
  "url": "main-6-4-7-3.html#main-6-4-7-3-3-9",
  "type": "Exercise",
  "number": "4.5.14",
  "title": "",
  "body": "  "
},
{
  "id": "main-6-4-7-3-3-10",
  "level": "2",
  "url": "main-6-4-7-3.html#main-6-4-7-3-3-10",
  "type": "Exercise",
  "number": "4.5.15",
  "title": "",
  "body": "  "
},
{
  "id": "main-6-4-7-3-3-11",
  "level": "2",
  "url": "main-6-4-7-3.html#main-6-4-7-3-3-11",
  "type": "Exercise",
  "number": "4.5.16",
  "title": "",
  "body": "  "
},
{
  "id": "main-6-4-7-3-3-12",
  "level": "2",
  "url": "main-6-4-7-3.html#main-6-4-7-3-3-12",
  "type": "Exercise",
  "number": "4.5.17",
  "title": "",
  "body": "  "
},
{
  "id": "main-6-4-7-3-4-3",
  "level": "2",
  "url": "main-6-4-7-3.html#main-6-4-7-3-4-3",
  "type": "Exercise",
  "number": "4.5.18",
  "title": "",
  "body": "      "
},
{
  "id": "main-6-4-7-3-4-4",
  "level": "2",
  "url": "main-6-4-7-3.html#main-6-4-7-3-4-4",
  "type": "Exercise",
  "number": "4.5.19",
  "title": "",
  "body": "      "
},
{
  "id": "main-6-4-7-3-4-5",
  "level": "2",
  "url": "main-6-4-7-3.html#main-6-4-7-3-4-5",
  "type": "Exercise",
  "number": "4.5.20",
  "title": "",
  "body": "      Note: since, in general , we CANNOT simplify the solution to   "
},
{
  "id": "main-6-4-7-3-4-6",
  "level": "2",
  "url": "main-6-4-7-3.html#main-6-4-7-3-4-6",
  "type": "Exercise",
  "number": "4.5.21",
  "title": "",
  "body": "      "
},
{
  "id": "main-6-4-7-3-4-7",
  "level": "2",
  "url": "main-6-4-7-3.html#main-6-4-7-3-4-7",
  "type": "Exercise",
  "number": "4.5.22",
  "title": "",
  "body": "     For the integral on the left hand side, we will need to do a substitution. If we le the and therefor Then we have the following:   "
},
{
  "id": "main-6-4-7-3-4-8",
  "level": "2",
  "url": "main-6-4-7-3.html#main-6-4-7-3-4-8",
  "type": "Exercise",
  "number": "4.5.23",
  "title": "",
  "body": "    When we separate the variables and integrate both sides, we get  Since the equation cannot readily be solved for as an explicit function of , we are done. "
},
{
  "id": "main-6-4-7-3-4-9",
  "level": "2",
  "url": "main-6-4-7-3.html#main-6-4-7-3-4-9",
  "type": "Exercise",
  "number": "4.5.24",
  "title": "",
  "body": "    Separation of variables gives:  "
},
{
  "id": "main-6-4-7-3-5-3",
  "level": "2",
  "url": "main-6-4-7-3.html#main-6-4-7-3-5-3",
  "type": "Exercise",
  "number": "4.5.25",
  "title": "",
  "body": "    Informally, we divide both side of the differential equation by and multiply each side by to get      and hence The condition yields , so the desired solution is  "
},
{
  "id": "main-6-4-7-3-5-4",
  "level": "2",
  "url": "main-6-4-7-3.html#main-6-4-7-3-5-4",
  "type": "Exercise",
  "number": "4.5.26",
  "title": "",
  "body": "    First we find the general solution: Using the initial condition : So the solution to the initial value problem is:  "
},
{
  "id": "main-6-4-7-3-5-5",
  "level": "2",
  "url": "main-6-4-7-3.html#main-6-4-7-3-5-5",
  "type": "Exercise",
  "number": "4.5.27",
  "title": "",
  "body": "   , or  First we find the general solution: Then we use the initial conditio . Hence, the solution i , or . "
},
{
  "id": "main-6-4-7-3-5-6",
  "level": "2",
  "url": "main-6-4-7-3.html#main-6-4-7-3-5-6",
  "type": "Exercise",
  "number": "4.5.28",
  "title": "",
  "body": "   , or  First we find the general solution: Then we use the initial conditio . Hence, the solution i , or . "
},
{
  "id": "main-6-4-7-3-6-2",
  "level": "2",
  "url": "main-6-4-7-3.html#main-6-4-7-3-6-2",
  "type": "Exercise",
  "number": "4.5.29",
  "title": "",
  "body": "A 4-lb roast, initially at , is placed in a oven at 5:00 PM After 75 minutes it is found that the temperature of the roast is F. When will the roast be (medium rate)?   We take time in minutes, with corresponding to 5:00 PM We also assume (somewhat unrealistically) that at any instant the temperature of the roast is uniform throughout. We have , , and . Hence Now , implies that , so . We also know that when . Substitution of these values in the preceding equation yields Hence we finally solve the equation for (min), the total cooking time required.Because the roast was placed in the oven at 5:00 PM, it it should be removed at about 6:45 PM "
},
{
  "id": "main-6-4-7-3-7-2",
  "level": "2",
  "url": "main-6-4-7-3.html#main-6-4-7-3-7-2",
  "type": "Exercise",
  "number": "4.5.30",
  "title": "",
  "body": "Explain why separating variables works as a method for solving ordinary differential equations.  Separation of variables works by isolating all terms involving to one side and all terms involving to the other. When this can be done, both sides can be integrated independently, allowing for the solution of the differential equation. This method effectively transforms the problem of solving a differential equation into the simpler task of integrating functions.  "
},
{
  "id": "main-6-4-7-3-7-3",
  "level": "2",
  "url": "main-6-4-7-3.html#main-6-4-7-3-7-3",
  "type": "Exercise",
  "number": "4.5.31",
  "title": "",
  "body": "Why is it important for the equation to be \"separable\" in order to use the method of separation of variables? What does it mean for a differential equation to be separable?  For the method of separation of variables to be used, we must be able to write the differential equation in the form , effectively separating the variables and onto different sides of the equation. When a differential equation can be written in this way, it is called separable. Separability is crucial because it allows us to integrate each side with respect to its own variable, leading to a solution for in terms of .  "
},
{
  "id": "main-6-4-7-3-7-4",
  "level": "2",
  "url": "main-6-4-7-3.html#main-6-4-7-3-7-4",
  "type": "Exercise",
  "number": "4.5.32",
  "title": "",
  "body": "Provide an example of a differential equation that is not separable and explain why the method of separation of variables cannot be applied to it.    "
},
{
  "id": "main-6-4-7-3-7-5",
  "level": "2",
  "url": "main-6-4-7-3.html#main-6-4-7-3-7-5",
  "type": "Exercise",
  "number": "4.5.33",
  "title": "",
  "body": "In solving a differential equation using separation of variables, why might the constant of integration appear on both sides of the resulting equation?  After separating variables, we integrate both sides of the equation. Each integration will typically introduce its own constant of integration. Therefore, when we combine the results of these integrations, we often see a constant on both sides. These constants can often be combined into a single constant by subtracting one from the other.  "
},
{
  "id": "main-6-4-7-3-7-6",
  "level": "2",
  "url": "main-6-4-7-3.html#main-6-4-7-3-7-6",
  "type": "Exercise",
  "number": "4.5.34",
  "title": "",
  "body": "Some differential equations solved using separation of variables yield implicit solutions, while others yield explicit solutions. Explain the difference between implicit and explicit solutions, and provide examples of each.    "
},
{
  "id": "main-6-4-7-3-7-7",
  "level": "2",
  "url": "main-6-4-7-3.html#main-6-4-7-3-7-7",
  "type": "Exercise",
  "number": "4.5.35",
  "title": "",
  "body": "True\/False: Every first-order ordinary differential equation can be solved using the method of separation of variables.    "
},
{
  "id": "main-6-4-7-3-7-8",
  "level": "2",
  "url": "main-6-4-7-3.html#main-6-4-7-3-7-8",
  "type": "Exercise",
  "number": "4.5.36",
  "title": "",
  "body": " Which of the following differential equations is not separable?        "
},
{
  "id": "main-6-4-7-3-7-9",
  "level": "2",
  "url": "main-6-4-7-3.html#main-6-4-7-3-7-9",
  "type": "Exercise",
  "number": "4.5.37",
  "title": "",
  "body": " True\/False: If a differential equation is separable, its solution will always be an explicit function of .  "
},
{
  "id": "main-6-4-7-3-7-10",
  "level": "2",
  "url": "main-6-4-7-3.html#main-6-4-7-3-7-10",
  "type": "Exercise",
  "number": "4.5.38",
  "title": "",
  "body": " The process of writing a differential equation in the form is called _________ of variables.  "
},
{
  "id": "main-6-4-7-3-7-11",
  "level": "2",
  "url": "main-6-4-7-3.html#main-6-4-7-3-7-11",
  "type": "Exercise",
  "number": "4.5.39",
  "title": "",
  "body": " Which of the following cannot be directly solved by separation of variables?        "
},
{
  "id": "main-6-4-7-3-7-12",
  "level": "2",
  "url": "main-6-4-7-3.html#main-6-4-7-3-7-12",
  "type": "Exercise",
  "number": "4.5.40",
  "title": "",
  "body": " True\/False: The method of separation of variables can be directly applied to higher-order differential equations.  "
},
{
  "id": "main-6-4-7-3-7-13",
  "level": "2",
  "url": "main-6-4-7-3.html#main-6-4-7-3-7-13",
  "type": "Exercise",
  "number": "4.5.41",
  "title": "",
  "body": " True\/False: If you can write a differential equation in the form , then it is separable.  "
},
{
  "id": "main-6-4-7-3-7-14",
  "level": "2",
  "url": "main-6-4-7-3.html#main-6-4-7-3-7-14",
  "type": "Exercise",
  "number": "4.5.42",
  "title": "",
  "body": " A differential equation of the form without a term:   Is always separable  Is never separable  Can be separable depending on  Is an implicit equation   "
},
{
  "id": "main-6-4-7-3-8",
  "level": "2",
  "url": "main-6-4-7-3.html#main-6-4-7-3-8",
  "type": "Exercise",
  "number": "4.5.43",
  "title": "<em class=\"emphasis\">A structured exercise<\/em>.",
  "body": " A structured exercise   Here is where we give the student the background information required to start accomplishing tasks.  Solve a separable DE using separation of variables.                   The second step to do. We'll be lazy and just include an answer.   Just the answer.   A little wrap up.  "
},
{
  "id": "main-6-5-3",
  "level": "1",
  "url": "main-6-5-3.html",
  "type": "Section",
  "number": "5.1",
  "title": "Product Rule",
  "body": "Product Rule  The integrating factor method relies on an essential calculus concept: the product rule for derivatives. Since this rule is at the heart of the method, let's take a moment to review it and see how it helps transform a differential equation into one that can be directly integrated.  The product rule is used to compute the derivative of a product of two functions. In the context of solving first-order linear differential equations, we use the product rule in reverse to combine terms involving the dependent and independent variables. This allows us to rewrite the equation as the derivative of a product, making integration straightforward. Let's begin by recalling the two directions of the product rule.  Suppose and are differentiable functions. The product rule states that The forward version goes from left to right, while the backward version, which we'll focus on, goes from right to left. Let's practice applying both versions with a few examples.   Compute each derivative.        Using the forward product rule , we have          Using the forward product rule , we have         Rewrite each expression in the form .       Trial and error with different combinations of and inside is one approach, but a little thought should lead you to the answer .       where is a function of .  It may help to first rewrite the expression as .  Since and appear in different terms, you know and since , we must have .        Finally, let's see what this looks like on an actual differential equation.   Rewrite the left side of the equation in the form .  .   As before, noticing and in different terms of immediately tells us that the left side can be rewritten as and the observation that gives us the other term. Therefore, the differential equation can be rewritten as .  Do you see that direct integration can be used here to solve the differential equation?    By understanding how the product rule works in both directions, we can transform a differential equation into one that is easy to solve through integration. This transformation is the core of the integrating factor method, which we will explore next.  Check-Point Questions   Fill-in the missing parts of each product rule   Fill in the missing parts of each product rule below.                             Correct!    Incorrect, try again.      Correct!    Incorrect, try again.      Correct!    Incorrect, expecting to see the independent variable .    Incorrect, use the natural log instead.    Incorrect, try again.      Correct!    Incorrect, don't forget the chain rule.      Correct!    Put in the other blank!    The variable should be a capitol .    Incorrect, try again.      Correct!    Put in the other blank!    Incorrect, try again.     What is the main purpose of the product rule in the integrating factor method?  What is the main purpose of the product rule in the integrating factor method?    To simplify a differential equation.   Incorrect. Simplification is a result, but the main purpose is to rewrite the equation as the derivative of a product.     To rewrite the differential equation so that one side of the equation is the derivative of a product.   Correct! The product rule is used to express the differential equation in a form suitable for direct integration.     To find the derivative of the solution.   Incorrect. The product rule helps us manipulate the equation into a solvable form, not to find the derivative of the solution.     To eliminate constants from the equation.   Incorrect. The product rule does not eliminate constants; it helps combine terms involving the dependent and independent variables.     Which version of the product rule is used in the integrating factor method?  Which version of the product rule is used in the integrating factor method?    The forward version.   Incorrect. The forward version computes the derivative of a product, but the backward version is used to reverse this process.     The backward version.   Correct! The backward version is used to combine terms and express the equation as the derivative of a product.     Neither version is used.   Incorrect. The product rule is essential in the integrating factor method.     Both versions are equally used.   Incorrect. While both directions are important, the integrating factor method specifically uses the backward version.     How does the product rule help solve the equation ?  How does the product rule help solve the equation ?    It eliminates the dependent variable, .   Incorrect. The product rule does not eliminate , but rather combines terms involving and .     It rewrites the left side of the equation as .   Correct! The product rule helps combine terms so that the equation can be rewritten as a derivative of a product, which can then be integrated.     It changes the equation to .   Incorrect. The product rule does not solve for directly; it helps rewrite the equation in a form suitable for solving.     It differentiates both sides of the equation.   Incorrect. The product rule is used in reverse here to combine terms, not to take derivatives.     Which expression can be rewritten as using the product rule?  Which expression can be rewritten as using the product rule?        Correct! Using the product rule, expands to .         Incorrect. The second term should include the derivative of , not just .         Incorrect. This does not account for the derivative of , which is needed for the correct application of the product rule.         Incorrect. The exponent of should be in both terms, not in the second term.     How can be rewritten using the backward product rule?  How can be rewritten using the backward product rule?        Incorrect. You need to include in the product, not just .         Incorrect. This only gives the derivative of , which is , but doesn't account for and its derivative.         Correct! Using the backward product rule, the expression can be written as the derivative .         Incorrect. This expression incorrectly separates the logarithmic and product rule components. The product rule should involve and together.      "
},
{
  "id": "main-6-5-3-5",
  "level": "2",
  "url": "main-6-5-3.html#main-6-5-3-5",
  "type": "Example",
  "number": "15",
  "title": "",
  "body": " Compute each derivative.        Using the forward product rule , we have          Using the forward product rule , we have       "
},
{
  "id": "main-6-5-3-6",
  "level": "2",
  "url": "main-6-5-3.html#main-6-5-3-6",
  "type": "Example",
  "number": "16",
  "title": "",
  "body": " Rewrite each expression in the form .       Trial and error with different combinations of and inside is one approach, but a little thought should lead you to the answer .       where is a function of .  It may help to first rewrite the expression as .  Since and appear in different terms, you know and since , we must have .       "
},
{
  "id": "main-6-5-3-8",
  "level": "2",
  "url": "main-6-5-3.html#main-6-5-3-8",
  "type": "Example",
  "number": "17",
  "title": "",
  "body": " Rewrite the left side of the equation in the form .  .   As before, noticing and in different terms of immediately tells us that the left side can be rewritten as and the observation that gives us the other term. Therefore, the differential equation can be rewritten as .  Do you see that direct integration can be used here to solve the differential equation?   "
},
{
  "id": "p2-c3-s1-rq1",
  "level": "2",
  "url": "main-6-5-3-10.html#p2-c3-s1-rq1",
  "type": "Reading Question",
  "number": "5.1.1",
  "title": "<em class=\"emphasis\">Fill-in the missing parts of each product rule<\/em>.",
  "body": " Fill-in the missing parts of each product rule   Fill in the missing parts of each product rule below.                             Correct!    Incorrect, try again.      Correct!    Incorrect, try again.      Correct!    Incorrect, expecting to see the independent variable .    Incorrect, use the natural log instead.    Incorrect, try again.      Correct!    Incorrect, don't forget the chain rule.      Correct!    Put in the other blank!    The variable should be a capitol .    Incorrect, try again.      Correct!    Put in the other blank!    Incorrect, try again.    "
},
{
  "id": "p2-c3-s1-rq2",
  "level": "2",
  "url": "main-6-5-3-10.html#p2-c3-s1-rq2",
  "type": "Reading Question",
  "number": "5.1.2",
  "title": "<em class=\"emphasis\">What is the main purpose of the product rule in the integrating factor method?<\/em>",
  "body": "What is the main purpose of the product rule in the integrating factor method?  What is the main purpose of the product rule in the integrating factor method?    To simplify a differential equation.   Incorrect. Simplification is a result, but the main purpose is to rewrite the equation as the derivative of a product.     To rewrite the differential equation so that one side of the equation is the derivative of a product.   Correct! The product rule is used to express the differential equation in a form suitable for direct integration.     To find the derivative of the solution.   Incorrect. The product rule helps us manipulate the equation into a solvable form, not to find the derivative of the solution.     To eliminate constants from the equation.   Incorrect. The product rule does not eliminate constants; it helps combine terms involving the dependent and independent variables.    "
},
{
  "id": "p2-c3-s1-rq3",
  "level": "2",
  "url": "main-6-5-3-10.html#p2-c3-s1-rq3",
  "type": "Reading Question",
  "number": "5.1.3",
  "title": "<em class=\"emphasis\">Which version of the product rule is used in the integrating factor method?<\/em>",
  "body": "Which version of the product rule is used in the integrating factor method?  Which version of the product rule is used in the integrating factor method?    The forward version.   Incorrect. The forward version computes the derivative of a product, but the backward version is used to reverse this process.     The backward version.   Correct! The backward version is used to combine terms and express the equation as the derivative of a product.     Neither version is used.   Incorrect. The product rule is essential in the integrating factor method.     Both versions are equally used.   Incorrect. While both directions are important, the integrating factor method specifically uses the backward version.    "
},
{
  "id": "p2-c3-s1-rq4",
  "level": "2",
  "url": "main-6-5-3-10.html#p2-c3-s1-rq4",
  "type": "Reading Question",
  "number": "5.1.4",
  "title": "<em class=\"emphasis\">How does the product rule help solve the equation <span class=\"process-math\">\\(\\ds\\frac{dy}{dx} \\cdot e^{5x^2} + 10x e^{5x^2} \\cdot y = 3x\\text{?}\\)<\/span><\/em>",
  "body": "How does the product rule help solve the equation ?  How does the product rule help solve the equation ?    It eliminates the dependent variable, .   Incorrect. The product rule does not eliminate , but rather combines terms involving and .     It rewrites the left side of the equation as .   Correct! The product rule helps combine terms so that the equation can be rewritten as a derivative of a product, which can then be integrated.     It changes the equation to .   Incorrect. The product rule does not solve for directly; it helps rewrite the equation in a form suitable for solving.     It differentiates both sides of the equation.   Incorrect. The product rule is used in reverse here to combine terms, not to take derivatives.    "
},
{
  "id": "p2-c3-s1-rq5",
  "level": "2",
  "url": "main-6-5-3-10.html#p2-c3-s1-rq5",
  "type": "Reading Question",
  "number": "5.1.5",
  "title": "<em class=\"emphasis\">Which expression can be rewritten as <span class=\"process-math\">\\(\\ds [\\mu e^{P(x)}]'\\)<\/span> using the product rule?<\/em>",
  "body": "Which expression can be rewritten as using the product rule?  Which expression can be rewritten as using the product rule?        Correct! Using the product rule, expands to .         Incorrect. The second term should include the derivative of , not just .         Incorrect. This does not account for the derivative of , which is needed for the correct application of the product rule.         Incorrect. The exponent of should be in both terms, not in the second term.    "
},
{
  "id": "p2-c3-s1-rq6",
  "level": "2",
  "url": "main-6-5-3-10.html#p2-c3-s1-rq6",
  "type": "Reading Question",
  "number": "5.1.6",
  "title": "<em class=\"emphasis\">How can <span class=\"process-math\">\\(\\ \\ds\\frac{dQ}{dz}\\ln z + \\frac{Q}{z}\\ \\)<\/span> be rewritten using the backward product rule?<\/em>",
  "body": "How can be rewritten using the backward product rule?  How can be rewritten using the backward product rule?        Incorrect. You need to include in the product, not just .         Incorrect. This only gives the derivative of , which is , but doesn't account for and its derivative.         Correct! Using the backward product rule, the expression can be written as the derivative .         Incorrect. This expression incorrectly separates the logarithmic and product rule components. The product rule should involve and together.    "
},
{
  "id": "main-6-5-4",
  "level": "1",
  "url": "main-6-5-4.html",
  "type": "Section",
  "number": "5.2",
  "title": "The Integrating Factor",
  "body": "The Integrating Factor  In the previous section, we introduced the idea of solving first-order linear differential equations by manipulating the equation into a form that allows direct integration. This process involved applying a backward product rule to make the left-hand side a perfect derivative. However, most equations are not in the form to do this directly. Instead, there is a missing piece, called the integrating factor that is required for transformation to take place and is the focus of this section.  To see this missing piece, lets consider the differential equation: . We would like to apply the backward product rule to the left side, but it seems to be missing something. Let's try to figure out what this missing piece is by multipying both sides by something: . With this missing piece and the fact that and appear in the equation, we should be able to rewrite the equation as: . To determine what this missing piece is, we need to see where (start) and (goal) meet in the middle. This is shown below.  Notice, the two middle equations agree everywhere except for the expressions in blue. In order for the start and goal equations to be the same, these expressions must match. In other words, the piece that we need to get must satisfy . But, this is the differential equation where is the unknown!    (for accessibility)      Solving this requires you to notice that it is separable and a quick calculation shows that is the solution. Therefore, if you multiply both sides of by , you can use the backward product rule to write the equation as , which can then be solved by direct integration .  The function, , that allowed us to rewrite the equation is called the integrating factor and it is derived by solving a simple separable equation based on the coefficient of the dependent variable in the differential equation. Once the integrating factor is found, it allows us to rewrite the equation into a form that is straightforward to solve.  The Integrating Factor   The integrating factor for the first-order linear differential equation is . Multiplying both sides by transforms the equation into: .   Derivation of the Integrating Factor  Note, all first-order linear differential equations can be written in the form , where and are functions of . The goal is to write the left-side as a single derivative. However, backward product rule is missing a piece, , that we still need to find. We find by multiplying it onto , like so            Check-Point Questions   What is the main purpose of an integrating factor?   What is the main purpose of an integrating factor in solving first-order linear differential equations?    To transform the equation into one that can be solved using the backward product rule.   Correct! The integrating factor allows us to manipulate the equation so that it becomes a perfect derivative, which can then be integrated directly.     To simplify the coefficients of the equation.   Not quite. While the integrating factor simplifies the process, its primary goal is to enable the use of the backward product rule, not to simplify the coefficients directly.     To eliminate the constant term from the differential equation.   Incorrect. The integrating factor is used to transform the equation into a solvable form, not to remove constant terms.     To reduce the equation to a second-order differential equation.   Incorrect. The integrating factor helps solve first-order differential equations, not reduce them to second-order equations.      Which of the following is the differential equation for the integrating factor ?   Which differential equation do you solve to find the integrating factor, , for the first-order linear equation ?        Incorrect. Try again.         Correct!         Incorrect. Try again.         Incorrect. Try again.      What form does the first-order linear differential equation take after multiplying by the integrating factor?   After multiplying both sides of a first-order linear differential equation by the integrating factor, the equation takes the form:        Correct! Multiplying by the integrating factor transforms the equation into this form.         Incorrect. The correct form is .         Incorrect. This is the form of the original equation before multiplying by the integrating factor.         Incorrect. This form does not represent the transformed equation after multiplying by the integrating factor.      What is the integrating factor for the equation ?   Find the integrating factor for the equation .        Incorrect. This is not the correct expression for the integrating factor.         Correct! The integrating factor is .         Incorrect. The correct integrating factor should involve the integral of the coefficient of , which is , not .         Incorrect. This is not the correct form for the integrating factor.      If we solve a differential equation to find the integrating factor, then why doesn't it contain an integration constant?   When solving a differential equation to find the integrating factor, why is there no constant of integration in the solution?    Since any value of this constant would give a valid integrating factor, we set the constant to the simplest value.   Correct! The integrating factor is used to multiply both sides of the equation, and any constant would cancel out during this process, making the constant irrelevant.     Because the integrating factor must be a specific function with no additional constants.   Incorrect. The integrating factor is determined by the form of the differential equation, but the lack of a constant is not because it must be a specific function—it's because any constant would cancel out when multiplying both sides.     Because the integrating factor equation doesn't have an initial condition.   Incorrect. Although the integrating factor equation doesn't have an initial condition, this is not the reason it does not have one.     Because the constant of integration is already included in the solution for .   Incorrect. The constant of integration appears in the final solution for , but it is not related to why the integrating factor does not include a constant.           "
},
{
  "id": "integrating-factor",
  "level": "2",
  "url": "main-6-5-4.html#integrating-factor",
  "type": "Concept",
  "number": "18",
  "title": "The Integrating Factor.",
  "body": "The Integrating Factor   The integrating factor for the first-order linear differential equation is . Multiplying both sides by transforms the equation into: .   Derivation of the Integrating Factor  Note, all first-order linear differential equations can be written in the form , where and are functions of . The goal is to write the left-side as a single derivative. However, backward product rule is missing a piece, , that we still need to find. We find by multiplying it onto , like so           "
},
{
  "id": "p2-c3-s2-rq1",
  "level": "2",
  "url": "main-6-5-4-7.html#p2-c3-s2-rq1",
  "type": "Reading Question",
  "number": "5.2.1",
  "title": "<em class=\"emphasis\">What is the main purpose of an integrating factor?<\/em>",
  "body": " What is the main purpose of an integrating factor?   What is the main purpose of an integrating factor in solving first-order linear differential equations?    To transform the equation into one that can be solved using the backward product rule.   Correct! The integrating factor allows us to manipulate the equation so that it becomes a perfect derivative, which can then be integrated directly.     To simplify the coefficients of the equation.   Not quite. While the integrating factor simplifies the process, its primary goal is to enable the use of the backward product rule, not to simplify the coefficients directly.     To eliminate the constant term from the differential equation.   Incorrect. The integrating factor is used to transform the equation into a solvable form, not to remove constant terms.     To reduce the equation to a second-order differential equation.   Incorrect. The integrating factor helps solve first-order differential equations, not reduce them to second-order equations.    "
},
{
  "id": "p2-c3-s2-rq2",
  "level": "2",
  "url": "main-6-5-4-7.html#p2-c3-s2-rq2",
  "type": "Reading Question",
  "number": "5.2.2",
  "title": "<em class=\"emphasis\">Which of the following is the differential equation for the integrating factor <span class=\"process-math\">\\(\\mu\\text{?}\\)<\/span><\/em>",
  "body": " Which of the following is the differential equation for the integrating factor ?   Which differential equation do you solve to find the integrating factor, , for the first-order linear equation ?        Incorrect. Try again.         Correct!         Incorrect. Try again.         Incorrect. Try again.    "
},
{
  "id": "p2-c3-s2-rq3",
  "level": "2",
  "url": "main-6-5-4-7.html#p2-c3-s2-rq3",
  "type": "Reading Question",
  "number": "5.2.3",
  "title": "<em class=\"emphasis\">What form does the first-order linear differential equation take after multiplying by the integrating factor?<\/em>",
  "body": " What form does the first-order linear differential equation take after multiplying by the integrating factor?   After multiplying both sides of a first-order linear differential equation by the integrating factor, the equation takes the form:        Correct! Multiplying by the integrating factor transforms the equation into this form.         Incorrect. The correct form is .         Incorrect. This is the form of the original equation before multiplying by the integrating factor.         Incorrect. This form does not represent the transformed equation after multiplying by the integrating factor.    "
},
{
  "id": "p2-c3-s2-rq4",
  "level": "2",
  "url": "main-6-5-4-7.html#p2-c3-s2-rq4",
  "type": "Reading Question",
  "number": "5.2.4",
  "title": "<em class=\"emphasis\">What is the integrating factor for the equation <span class=\"process-math\">\\(y' + 3y = e^x\\text{?}\\)<\/span><\/em>",
  "body": " What is the integrating factor for the equation ?   Find the integrating factor for the equation .        Incorrect. This is not the correct expression for the integrating factor.         Correct! The integrating factor is .         Incorrect. The correct integrating factor should involve the integral of the coefficient of , which is , not .         Incorrect. This is not the correct form for the integrating factor.    "
},
{
  "id": "p2-c3-s2-rq5",
  "level": "2",
  "url": "main-6-5-4-7.html#p2-c3-s2-rq5",
  "type": "Reading Question",
  "number": "5.2.5",
  "title": "<em class=\"emphasis\">If we solve a differential equation to find the integrating factor, then why doesn’t it contain an integration constant?<\/em>",
  "body": " If we solve a differential equation to find the integrating factor, then why doesn't it contain an integration constant?   When solving a differential equation to find the integrating factor, why is there no constant of integration in the solution?    Since any value of this constant would give a valid integrating factor, we set the constant to the simplest value.   Correct! The integrating factor is used to multiply both sides of the equation, and any constant would cancel out during this process, making the constant irrelevant.     Because the integrating factor must be a specific function with no additional constants.   Incorrect. The integrating factor is determined by the form of the differential equation, but the lack of a constant is not because it must be a specific function—it's because any constant would cancel out when multiplying both sides.     Because the integrating factor equation doesn't have an initial condition.   Incorrect. Although the integrating factor equation doesn't have an initial condition, this is not the reason it does not have one.     Because the constant of integration is already included in the solution for .   Incorrect. The constant of integration appears in the final solution for , but it is not related to why the integrating factor does not include a constant.    "
},
{
  "id": "main-6-5-5",
  "level": "1",
  "url": "main-6-5-5.html",
  "type": "Section",
  "number": "5.3",
  "title": "Integrating Factor Method",
  "body": "Integrating Factor Method  The integrating factor method provides a systematic approach to solving first-order linear differential equations. These equations can be written in the standard form as:  A general linear differential equation looks like: . The first-order case simplifies to: , By dividing through by , this reduces to: . This form is called the **standard form** of a first-order linear differential equation: .   . The key to solving such equations lies in finding an integrating factor that simplifies the left-hand side of the equation into a form that can be solve via direct integration .  Now that we've introduced the integrating factor method, let's break down the step-by-step process:  Integrating Factor Method  Here's the procedure for solving a first-order linear differential equation:  Get the Standard Form & Identify     Find the Integrating Factor     Multiply the Equation by & Reverse the Product Rule    Apply Direct Integration       Now that we've laid out the method, let's apply it to some concrete examples. In each case, we will follow the four steps outlined above: (1) put the equation into standard form, (2) compute the integrating factor, (3) multiply the equation and simplify using the product rule, and (4) integrate to find the solution.   Find the general solution to the equation:  .   This is a first-order linear equation, so the integrating factor method applies. Since it's already in standard form, we proceed by identifying .   .    .  Note: We ignore the constant from integration since we only need one integrating factor to reverse the product rule.    .    .      Solve the equation:  .   Rewriting this equation in standard form, we apply the integrating factor method.   .    .    .    .    First we note that this equation is first order and linear, so the integrating factor method applies.   .    .    .    .   Verify the Solution  We have found the general solution, but it is worth remembering that we can always verify that we have the correct solution by substituting back into the original equation.  Since we get the same result when we substitute our solution in on the right and left hand sides of the DE, we confirm that we did find the solution.       Find the general solution to the differential equation     Since the equation is first order and linear, we can apply the integrating factor method. Here are the steps to solve for .   .    .  Note: Since we only need one integrating factor, we ignore absolute value you would normally get from integrating .    .    .     In summary, the integrating factor method can be used to solve any first-order linear equation by transforming it into a form that can be easily solved through direct integration.  Check-Point Questions   The differential equation can be solved using integrating factor    The differential equation can be solved using integrating factor.    This differential equation is first order and linear, so it can be solved using integrating factor.   Check to see that the differential equation is first order and linear.    Why is it important to put the differential equation in standard form before using the integrating factor method?    Why is it important to put the differential equation in standard form before using the integrating factor method?      It allows us to easily identify the coefficient of and compute the integrating factor.   Correct! The standard form highlights , which is needed to calculate the integrating factor.     It makes it easier to find the general solution directly without using integration.   Incorrect. The standard form doesn't eliminate the need for integration; it helps set up the equation for the integrating factor method.     It ensures the differential equation has a unique solution.   Incorrect. Putting the equation in standard form does not guarantee uniqueness; that depends on initial conditions.     It reduces the degree of the differential equation, making it easier to solve.   Incorrect. The standard form doesn't reduce the degree of the equation but helps organize terms for applying the integrating factor.     The differential equation can be solved using integrating factor    The differential equation can be solved using integrating factor.    This differential equation is linear but not first order, so it cannot be solved using integrating factor.   Check to see that the differential equation is first order and linear.    The differential equation is in standard form for the integrating factor method    The differential equation is in standard form for the integrating factor method.    This differential equation is not in the form .   Check to see that the differential equation is in the form .    Determine the integrating factor for the differential equation    Determine the integrating factor for the differential equation .       The integrating factor is .       TThe integrating factor is .       TThe integrating factor is .     Write the differential equation in the form and compute .    Why do we need to compute the integrating factor?   Why is it necessary to compute the integrating factor when using the integrating factor method?     It allows us to rewrite the left-hand side of the differential equation as a single derivative.   Correct! The integrating factor simplifies the equation into a form where direct integration can be applied.     It eliminates the need for initial conditions in the equation.   Incorrect. The integrating factor does not eliminate the need for initial conditions; it helps simplify the equation.     It ensures the equation has a unique solution.   Incorrect. The integrating factor doesn't guarantee uniqueness; initial conditions determine uniqueness.     It changes the equation into a second-order differential equation.   Incorrect. The integrating factor keeps the equation as a first-order differential equation.     What is the final step in solving a differential equation using the integrating factor method?   What is the final step after multiplying the differential equation by the integrating factor?     Apply direct integration to both sides of the equation.   Correct! The final step is to integrate both sides to find the solution.     Factor out the integrating factor from the equation.   Incorrect. The integrating factor helps rewrite the equation, but it is not factored out at the final step.     Solve for the integrating factor using initial conditions.   Incorrect. The integrating factor is computed before applying initial conditions.     Substitute into the original equation to check for errors.   Incorrect. Verifying the solution is optional, but the final required step is integration.      "
},
{
  "id": "if-method",
  "level": "2",
  "url": "main-6-5-5.html#if-method",
  "type": "Method",
  "number": "3",
  "title": "Integrating Factor Method.",
  "body": "Integrating Factor Method  Here's the procedure for solving a first-order linear differential equation:  Get the Standard Form & Identify     Find the Integrating Factor     Multiply the Equation by & Reverse the Product Rule    Apply Direct Integration      "
},
{
  "id": "if-intro-exercise",
  "level": "2",
  "url": "main-6-5-5.html#if-intro-exercise",
  "type": "Example",
  "number": "19",
  "title": "",
  "body": " Find the general solution to the equation:  .   This is a first-order linear equation, so the integrating factor method applies. Since it's already in standard form, we proceed by identifying .   .    .  Note: We ignore the constant from integration since we only need one integrating factor to reverse the product rule.    .    .    "
},
{
  "id": "main-6-5-5-7",
  "level": "2",
  "url": "main-6-5-5.html#main-6-5-5-7",
  "type": "Example",
  "number": "20",
  "title": "",
  "body": " Solve the equation:  .   Rewriting this equation in standard form, we apply the integrating factor method.   .    .    .    .    First we note that this equation is first order and linear, so the integrating factor method applies.   .    .    .    .   Verify the Solution  We have found the general solution, but it is worth remembering that we can always verify that we have the correct solution by substituting back into the original equation.  Since we get the same result when we substitute our solution in on the right and left hand sides of the DE, we confirm that we did find the solution.     "
},
{
  "id": "main-6-5-5-8",
  "level": "2",
  "url": "main-6-5-5.html#main-6-5-5-8",
  "type": "Example",
  "number": "21",
  "title": "",
  "body": " Find the general solution to the differential equation     Since the equation is first order and linear, we can apply the integrating factor method. Here are the steps to solve for .   .    .  Note: Since we only need one integrating factor, we ignore absolute value you would normally get from integrating .    .    .    "
},
{
  "id": "p2-c3-s3-rq1",
  "level": "2",
  "url": "main-6-5-5-10.html#p2-c3-s3-rq1",
  "type": "Reading Question",
  "number": "5.3.1",
  "title": "<em class=\"emphasis\">The differential equation <span class=\"process-math\">\\(y'+2y=3x\\)<\/span> can be solved using integrating factor<\/em>.",
  "body": " The differential equation can be solved using integrating factor    The differential equation can be solved using integrating factor.    This differential equation is first order and linear, so it can be solved using integrating factor.   Check to see that the differential equation is first order and linear.  "
},
{
  "id": "p2-c3-s3-rq2",
  "level": "2",
  "url": "main-6-5-5-10.html#p2-c3-s3-rq2",
  "type": "Reading Question",
  "number": "5.3.2",
  "title": "<em class=\"emphasis\">Why is it important to put the differential equation in standard form before using the integrating factor method?<\/em>",
  "body": " Why is it important to put the differential equation in standard form before using the integrating factor method?    Why is it important to put the differential equation in standard form before using the integrating factor method?      It allows us to easily identify the coefficient of and compute the integrating factor.   Correct! The standard form highlights , which is needed to calculate the integrating factor.     It makes it easier to find the general solution directly without using integration.   Incorrect. The standard form doesn't eliminate the need for integration; it helps set up the equation for the integrating factor method.     It ensures the differential equation has a unique solution.   Incorrect. Putting the equation in standard form does not guarantee uniqueness; that depends on initial conditions.     It reduces the degree of the differential equation, making it easier to solve.   Incorrect. The standard form doesn't reduce the degree of the equation but helps organize terms for applying the integrating factor.   "
},
{
  "id": "p2-c3-s3-rq3",
  "level": "2",
  "url": "main-6-5-5-10.html#p2-c3-s3-rq3",
  "type": "Reading Question",
  "number": "5.3.3",
  "title": "<em class=\"emphasis\">The differential equation <span class=\"process-math\">\\(y''+3xy=e^{5x}\\)<\/span> can be solved using integrating factor<\/em>.",
  "body": " The differential equation can be solved using integrating factor    The differential equation can be solved using integrating factor.    This differential equation is linear but not first order, so it cannot be solved using integrating factor.   Check to see that the differential equation is first order and linear.  "
},
{
  "id": "p2-c3-s3-rq4",
  "level": "2",
  "url": "main-6-5-5-10.html#p2-c3-s3-rq4",
  "type": "Reading Question",
  "number": "5.3.4",
  "title": "<em class=\"emphasis\">The differential equation <span class=\"process-math\">\\(xy'+2xy=x^2\\)<\/span> is in standard form for the integrating factor method<\/em>.",
  "body": " The differential equation is in standard form for the integrating factor method    The differential equation is in standard form for the integrating factor method.    This differential equation is not in the form .   Check to see that the differential equation is in the form .  "
},
{
  "id": "p2-c3-s3-rq5",
  "level": "2",
  "url": "main-6-5-5-10.html#p2-c3-s3-rq5",
  "type": "Reading Question",
  "number": "5.3.5",
  "title": "<em class=\"emphasis\">Determine the integrating factor for the differential equation <span class=\"process-math\">\\(\\ds y'=\\frac{y}{x}+2x+1\\)<\/span><\/em>.",
  "body": " Determine the integrating factor for the differential equation    Determine the integrating factor for the differential equation .       The integrating factor is .       TThe integrating factor is .       TThe integrating factor is .     Write the differential equation in the form and compute .  "
},
{
  "id": "p2-c3-s3-rq6",
  "level": "2",
  "url": "main-6-5-5-10.html#p2-c3-s3-rq6",
  "type": "Reading Question",
  "number": "5.3.6",
  "title": "<em class=\"emphasis\">Why do we need to compute the integrating factor?<\/em>",
  "body": " Why do we need to compute the integrating factor?   Why is it necessary to compute the integrating factor when using the integrating factor method?     It allows us to rewrite the left-hand side of the differential equation as a single derivative.   Correct! The integrating factor simplifies the equation into a form where direct integration can be applied.     It eliminates the need for initial conditions in the equation.   Incorrect. The integrating factor does not eliminate the need for initial conditions; it helps simplify the equation.     It ensures the equation has a unique solution.   Incorrect. The integrating factor doesn't guarantee uniqueness; initial conditions determine uniqueness.     It changes the equation into a second-order differential equation.   Incorrect. The integrating factor keeps the equation as a first-order differential equation.   "
},
{
  "id": "p2-c3-s3-rq7",
  "level": "2",
  "url": "main-6-5-5-10.html#p2-c3-s3-rq7",
  "type": "Reading Question",
  "number": "5.3.7",
  "title": "<em class=\"emphasis\">What is the final step in solving a differential equation using the integrating factor method?<\/em>",
  "body": " What is the final step in solving a differential equation using the integrating factor method?   What is the final step after multiplying the differential equation by the integrating factor?     Apply direct integration to both sides of the equation.   Correct! The final step is to integrate both sides to find the solution.     Factor out the integrating factor from the equation.   Incorrect. The integrating factor helps rewrite the equation, but it is not factored out at the final step.     Solve for the integrating factor using initial conditions.   Incorrect. The integrating factor is computed before applying initial conditions.     Substitute into the original equation to check for errors.   Incorrect. Verifying the solution is optional, but the final required step is integration.   "
},
{
  "id": "main-6-5-6",
  "level": "1",
  "url": "main-6-5-6.html",
  "type": "Section",
  "number": "5.4",
  "title": "Additional Examples",
  "body": "Additional Examples  In this section, we will look at more advanced examples of the integrating factor method. These examples will demonstrate how the technique applies to a wider variety of differential equations, including those with more complex functions or integration techniques. Each example will follow the four-step process outlined in the previous section.   Solve the differential equation:  .   This is a first-order linear differential equation, so we can apply the integrating factor method.   .    .    .    . Now, we can solve for :      Solve the equation:  .   This is a linear equation, and we will solve it using the integrating factor method.   .    .    .    . Using integration by parts on the integral with gives us      Solve the initial value problem.  .   Before applying the integration factor method, we note that the equation is first order and linear.   .    .    .    .   Finally, we apply the initial condition to determine the constant .   We can then write the particular solution to the initial value problem.     The integrating factor method is a versatile tool for solving first-order linear differential equations. By reducing the equation to a form that allows for direct integration, we can tackle a wide variety of problems with confidence. The examples in this chapter illustrate the broad applicability of this technique, and practice with a range of equations will solidify your understanding of how to use it effectively.  Check-Point Questions  Which of the following steps comes first when solving a differential equation using the integration factor method?  Which of the following steps comes first when solving a differential equation using the integration factor method?    Identify the integrating factor.   Correct! The first step is always to identify the integrating factor based on the equation's form.     Multiply both sides by the integrating factor.   Incorrect. You need to identify the integrating factor before multiplying it by both sides of the equation.     Integrate both sides.   Incorrect. Integration occurs later in the process after manipulating the equation using the integrating factor.     Find the constant of integration using initial conditions.   Incorrect. This step comes after solving the equation using the integrating factor.     After determining the integration factor, what is the next step in the process?  After determining the integration factor, what is the next step in the process?    The original equation is multiplied by the integrating factor.   Incorrect. You should apply the integrating factor to the equation after transforming it into the standard form.     The standard form of the equation is multiplied by the integrating factor.   Correct! Once the equation is in the standard form, you multiply both sides by the integrating factor.     Apply direct integration to solve the equation.   Incorrect. Direct integration is the final step, after applying the integrating factor.     The reverse product rule is used to rewrite the equation.   Incorrect. The reverse product rule is not part of this process. Use the integrating factor first.     In solving the equation , what form does the general solution take after direct integration?  In solving the equation , what form does the general solution take after direct integration?    .   Incorrect. This is not the correct form. You need to account for the integrating factor as well.     .   Correct! This is the general solution after applying the integrating factor and performing direct integration.     .   Incorrect. The correct general solution includes the integrating factor in both the exponent and the integral.     .   Incorrect. This form does not represent the general solution to this type of equation.     What is the purpose of the integrating factor in the first-order linear differential equation ?  What is the purpose of the integrating factor in the first-order linear differential equation ?    To simplify the differential equation into a separable form.   Incorrect. The integrating factor is not used to separate variables in this case.     To eliminate the non-linear terms in the equation.   Incorrect. This equation is already linear, and the integrating factor does not eliminate non-linear terms.     To transform the equation into a direct integration problem.   Correct! The integrating factor transforms the equation into a form that allows for direct integration.     To find the value of the constant of integration.   Incorrect. The constant of integration is found after the equation is solved, not by using the integrating factor.     What technique is used to evaluate the integral ?  What technique is used to evaluate the integral ?    Substitution.   Incorrect. Substitution is not the technique used here.     Integration by parts.   Correct! Integration by parts is the appropriate technique for this integral.     Partial fraction decomposition.   Incorrect. Partial fraction decomposition is not useful for this integral.     The Product Rule.   Incorrect. The product rule is a differentiation technique, not an integration technique.          "
},
{
  "id": "main-6-5-6-3",
  "level": "2",
  "url": "main-6-5-6.html#main-6-5-6-3",
  "type": "Example",
  "number": "22",
  "title": "",
  "body": " Solve the differential equation:  .   This is a first-order linear differential equation, so we can apply the integrating factor method.   .    .    .    . Now, we can solve for :    "
},
{
  "id": "main-6-5-6-4",
  "level": "2",
  "url": "main-6-5-6.html#main-6-5-6-4",
  "type": "Example",
  "number": "23",
  "title": "",
  "body": " Solve the equation:  .   This is a linear equation, and we will solve it using the integrating factor method.   .    .    .    . Using integration by parts on the integral with gives us    "
},
{
  "id": "main-6-5-6-5",
  "level": "2",
  "url": "main-6-5-6.html#main-6-5-6-5",
  "type": "Example",
  "number": "24",
  "title": "",
  "body": " Solve the initial value problem.  .   Before applying the integration factor method, we note that the equation is first order and linear.   .    .    .    .   Finally, we apply the initial condition to determine the constant .   We can then write the particular solution to the initial value problem.    "
},
{
  "id": "p2-c3-s4-rq1",
  "level": "2",
  "url": "main-6-5-6-7.html#p2-c3-s4-rq1",
  "type": "Reading Question",
  "number": "5.4.1",
  "title": "<em class=\"emphasis\">Which of the following steps comes first when solving a differential equation using the integration factor method?<\/em>",
  "body": "Which of the following steps comes first when solving a differential equation using the integration factor method?  Which of the following steps comes first when solving a differential equation using the integration factor method?    Identify the integrating factor.   Correct! The first step is always to identify the integrating factor based on the equation's form.     Multiply both sides by the integrating factor.   Incorrect. You need to identify the integrating factor before multiplying it by both sides of the equation.     Integrate both sides.   Incorrect. Integration occurs later in the process after manipulating the equation using the integrating factor.     Find the constant of integration using initial conditions.   Incorrect. This step comes after solving the equation using the integrating factor.    "
},
{
  "id": "p2-c3-s4-rq2",
  "level": "2",
  "url": "main-6-5-6-7.html#p2-c3-s4-rq2",
  "type": "Reading Question",
  "number": "5.4.2",
  "title": "<em class=\"emphasis\">After determining the integration factor, what is the next step in the process?<\/em>",
  "body": "After determining the integration factor, what is the next step in the process?  After determining the integration factor, what is the next step in the process?    The original equation is multiplied by the integrating factor.   Incorrect. You should apply the integrating factor to the equation after transforming it into the standard form.     The standard form of the equation is multiplied by the integrating factor.   Correct! Once the equation is in the standard form, you multiply both sides by the integrating factor.     Apply direct integration to solve the equation.   Incorrect. Direct integration is the final step, after applying the integrating factor.     The reverse product rule is used to rewrite the equation.   Incorrect. The reverse product rule is not part of this process. Use the integrating factor first.    "
},
{
  "id": "p2-c3-s4-rq3",
  "level": "2",
  "url": "main-6-5-6-7.html#p2-c3-s4-rq3",
  "type": "Reading Question",
  "number": "5.4.3",
  "title": "<em class=\"emphasis\">In solving the equation <span class=\"process-math\">\\(\\ds y' + P(x)y = Q(x)\\text{,}\\)<\/span> what form does the general solution take after direct integration?<\/em>",
  "body": "In solving the equation , what form does the general solution take after direct integration?  In solving the equation , what form does the general solution take after direct integration?    .   Incorrect. This is not the correct form. You need to account for the integrating factor as well.     .   Correct! This is the general solution after applying the integrating factor and performing direct integration.     .   Incorrect. The correct general solution includes the integrating factor in both the exponent and the integral.     .   Incorrect. This form does not represent the general solution to this type of equation.    "
},
{
  "id": "p2-c3-s4-rq4",
  "level": "2",
  "url": "main-6-5-6-7.html#p2-c3-s4-rq4",
  "type": "Reading Question",
  "number": "5.4.4",
  "title": "<em class=\"emphasis\">What is the purpose of the integrating factor in the first-order linear differential equation <span class=\"process-math\">\\(\\ds x^2 y' - y = 1\\text{?}\\)<\/span><\/em>",
  "body": "What is the purpose of the integrating factor in the first-order linear differential equation ?  What is the purpose of the integrating factor in the first-order linear differential equation ?    To simplify the differential equation into a separable form.   Incorrect. The integrating factor is not used to separate variables in this case.     To eliminate the non-linear terms in the equation.   Incorrect. This equation is already linear, and the integrating factor does not eliminate non-linear terms.     To transform the equation into a direct integration problem.   Correct! The integrating factor transforms the equation into a form that allows for direct integration.     To find the value of the constant of integration.   Incorrect. The constant of integration is found after the equation is solved, not by using the integrating factor.    "
},
{
  "id": "p2-c3-s4-rq5",
  "level": "2",
  "url": "main-6-5-6-7.html#p2-c3-s4-rq5",
  "type": "Reading Question",
  "number": "5.4.5",
  "title": "<em class=\"emphasis\">What technique is used to evaluate the integral <span class=\"process-math\">\\(\\ds \\int t^3 \\ln t \\, dt\\text{?}\\)<\/span><\/em>",
  "body": "What technique is used to evaluate the integral ?  What technique is used to evaluate the integral ?    Substitution.   Incorrect. Substitution is not the technique used here.     Integration by parts.   Correct! Integration by parts is the appropriate technique for this integral.     Partial fraction decomposition.   Incorrect. Partial fraction decomposition is not useful for this integral.     The Product Rule.   Incorrect. The product rule is a differentiation technique, not an integration technique.    "
},
{
  "id": "main-6-5-7",
  "level": "1",
  "url": "main-6-5-7.html",
  "type": "Section",
  "number": "5.5",
  "title": "Summary &amp; Exercises",
  "body": "Summary & Exercises   Throughout the chapter, we worked through several examples, each demonstrating how to apply the integrating factor method in different contexts. In each case, the systematic process of identifying the standard form, computing the integrating factor, and applying integration was key to solving the differential equation.   Summary of the Key Ideas    First-Order Linear Differential Equations   First-order linear differential equations take the standard form , where and are functions of .  The goal is to find the unknown function .    The Product Rule   The integrating factor method works by rewriting the left side of the standard form as a reversed product rule.  Unfortunately, most equations are not given in a form where a reversed product rule is possible.    Integrating Factor   The integrating factor, , is the missing function needed for the reverse product rule and is found from .  Multiplying the standard form of the equation by leads to a new equation where the left-side can be written as     Integrating Factor Method    The integrating factor method is the process of solving a first order linear differential equation by turning it into a direct integration problem.           Forward Product Rule  Compute the derivative of each of the following functions.        The Integrating Factor  Find the integrating factor of each of the following differential equations.          Conceptual Questions  Answer the following questions.  Write the differential equation below in the form and identify and . Also, state the order and whether it is linear or not.              order is 1  it is linear    What classification of DEs be solved by applying an integrating factor?  We can use an integrating factor to solve DEs that are linear and first order.    General Solution  Use an integrating factor to find the general solution to each equation.       First we note that this DE is already in standard form for a first-order linear DE, with Then we find the integrating factor  Now we multiply both sides of the DE by the integrating factor. Now we recall the product rule for derivatives: We note that the two terms on the left hand side of equation (\\ref{eq1}) are the result of taking the derivative of the product. Hence we can undo the product rule as follows: Now we can integrate both sides of the equation and then solve for the dependent variable.    , where     First we put DE in standard form for a first-order linear DE so we can identify  Thus, Then we find the integrating factor  Now we multiply both sides of the DE by the integrating factor. Now we recall the product rule for derivatives: We note that the two terms on the left hand side of equation (\\ref{eq2}) are the result of taking the derivative of the product. Hence we can undo the product rule as follows: Now we can integrate both sides of the equation and then solve for the dependent variable.    where     First we put DE in standard form for a first-order linear DE so we can identify Notice that for this DE is the independent variable (i.e., it is like the ) and is the dependent variable (i.e., it is like the ). Hence the standard form we will aim for is and we want to identify  Thus, Then we find the integrating factor  Now we multiply both sides of the DE by the integrating factor. Now we recall the product rule for derivatives: We note that the two terms on the left hand side of equation (\\ref{eq3}) are the result of taking the derivative of the product. Hence we can undo the product rule as follows: Now we can integrate both sides of the equation and then solve for the dependent variable.        First we put DE in standard form for a first-order linear DE so we can identify ...EXCEPT for this DE, the roles of and are switched. Notice that here is the independent variable and is the dependent variable. So we will aim for the standard for and we want to identify  Thus, Then we find the integrating factor  Now we multiply both sides of the DE by the integrating factor. Now we recall the product rule for derivatives: We note that the two terms on the left hand side of equation (\\ref{eq4}) are the result of taking the derivative of the product. Hence we can undo the product rule as follows: Now we can integrate both sides of the equation and then solve for the dependent variable.    Initial-Value Problems  Solve each initial value problem   where and     where and           Which Method Applies  For each differential equation below, identify the appropriate statement and explain how you know. You do not need to solve any of the equations.   Can be solved by separating variables, but not using an integrating factor.  Can be solved using an integrating factor, but not by separating variables.  Can be solved both by using integrating factor and by separating variables.  Cannot be solved using either technique.       b. Can be solved using an integrating factor, but not by separating variables.  This DE is first order and linear, so it can be solved using an integrating factor.  It is not separable because when we solve for the derivative, we see that there is no way to separate the variables on the right hand side via multiplication.  Therefore, this DE can be solved using an integrating factor, but not by separating variables.      d. Cannot be solved using either technique.  This DE is first order but it is not linear (because the dependent variable, , appears inside a function--in the term), so it cannot be solved using an integrating factor.  It is not separable because when we solve for the derivative, we see that there is no way to separate the variables on the right hand side via multiplication.  Therefore, this DE cannot be solved using either technique.      c. Can be solved both by using integrating factor and by separating variables.  This DE is first order and linear, so it can be solved using an integrating factor.  It is separable, as shown: because when we solve for the derivative, we see that we can separate the variables on the right hand side via multiplication.  Therefore, this DE can be solved both by using integrating factor and by separating variables.      a. Can be solved by separating variables, but not using an integrating factor.  This DE is first order but it is not linear (because the dependent variable, , is raised to a power--in the term), so it cannot be solved using an integrating factor.  It is separable, as shown: because when we solve for the derivative, we see that we can separate the variables on the right hand side via multiplication.  Therefore, this DE can be solved by separating variables, but not using an integrating factor.        This DE is first order and linear, so it can be solved using an integrating factor.  It is not separable because when we solve for the derivative, we see that there is no way to separate the variables on the right hand side via multiplication.  Therefore, this DE can be solved using an integrating factor, but not by separating variables.     "
},
{
  "id": "main-6-5-7-2-2",
  "level": "2",
  "url": "main-6-5-7.html#main-6-5-7-2-2",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "First-Order Linear Differential Equations The Product Rule Integrating Factor Integrating Factor Method "
},
{
  "id": "main-6-5-7-3-1-3",
  "level": "2",
  "url": "main-6-5-7-3.html#main-6-5-7-3-1-3",
  "type": "Exercise",
  "number": "5.5.1",
  "title": "",
  "body": "    "
},
{
  "id": "main-6-5-7-3-2-3",
  "level": "2",
  "url": "main-6-5-7-3.html#main-6-5-7-3-2-3",
  "type": "Exercise",
  "number": "5.5.2",
  "title": "",
  "body": "      "
},
{
  "id": "main-6-5-7-3-3-3",
  "level": "2",
  "url": "main-6-5-7-3.html#main-6-5-7-3-3-3",
  "type": "Exercise",
  "number": "5.5.3",
  "title": "",
  "body": "Write the differential equation below in the form and identify and . Also, state the order and whether it is linear or not.              order is 1  it is linear   "
},
{
  "id": "main-6-5-7-3-3-4",
  "level": "2",
  "url": "main-6-5-7-3.html#main-6-5-7-3-3-4",
  "type": "Exercise",
  "number": "5.5.4",
  "title": "",
  "body": "What classification of DEs be solved by applying an integrating factor?  We can use an integrating factor to solve DEs that are linear and first order.  "
},
{
  "id": "main-6-5-7-3-4-3",
  "level": "2",
  "url": "main-6-5-7-3.html#main-6-5-7-3-4-3",
  "type": "Exercise",
  "number": "5.5.5",
  "title": "",
  "body": "     First we note that this DE is already in standard form for a first-order linear DE, with Then we find the integrating factor  Now we multiply both sides of the DE by the integrating factor. Now we recall the product rule for derivatives: We note that the two terms on the left hand side of equation (\\ref{eq1}) are the result of taking the derivative of the product. Hence we can undo the product rule as follows: Now we can integrate both sides of the equation and then solve for the dependent variable.  "
},
{
  "id": "main-6-5-7-3-4-4",
  "level": "2",
  "url": "main-6-5-7-3.html#main-6-5-7-3-4-4",
  "type": "Exercise",
  "number": "5.5.6",
  "title": "",
  "body": " , where     First we put DE in standard form for a first-order linear DE so we can identify  Thus, Then we find the integrating factor  Now we multiply both sides of the DE by the integrating factor. Now we recall the product rule for derivatives: We note that the two terms on the left hand side of equation (\\ref{eq2}) are the result of taking the derivative of the product. Hence we can undo the product rule as follows: Now we can integrate both sides of the equation and then solve for the dependent variable.  "
},
{
  "id": "main-6-5-7-3-4-5",
  "level": "2",
  "url": "main-6-5-7-3.html#main-6-5-7-3-4-5",
  "type": "Exercise",
  "number": "5.5.7",
  "title": "",
  "body": " where     First we put DE in standard form for a first-order linear DE so we can identify Notice that for this DE is the independent variable (i.e., it is like the ) and is the dependent variable (i.e., it is like the ). Hence the standard form we will aim for is and we want to identify  Thus, Then we find the integrating factor  Now we multiply both sides of the DE by the integrating factor. Now we recall the product rule for derivatives: We note that the two terms on the left hand side of equation (\\ref{eq3}) are the result of taking the derivative of the product. Hence we can undo the product rule as follows: Now we can integrate both sides of the equation and then solve for the dependent variable.  "
},
{
  "id": "main-6-5-7-3-4-6",
  "level": "2",
  "url": "main-6-5-7-3.html#main-6-5-7-3-4-6",
  "type": "Exercise",
  "number": "5.5.8",
  "title": "",
  "body": "     First we put DE in standard form for a first-order linear DE so we can identify ...EXCEPT for this DE, the roles of and are switched. Notice that here is the independent variable and is the dependent variable. So we will aim for the standard for and we want to identify  Thus, Then we find the integrating factor  Now we multiply both sides of the DE by the integrating factor. Now we recall the product rule for derivatives: We note that the two terms on the left hand side of equation (\\ref{eq4}) are the result of taking the derivative of the product. Hence we can undo the product rule as follows: Now we can integrate both sides of the equation and then solve for the dependent variable.  "
},
{
  "id": "main-6-5-7-3-5-3",
  "level": "2",
  "url": "main-6-5-7-3.html#main-6-5-7-3-5-3",
  "type": "Exercise",
  "number": "5.5.9",
  "title": "",
  "body": " where and     where and  "
},
{
  "id": "main-6-5-7-3-5-4",
  "level": "2",
  "url": "main-6-5-7-3.html#main-6-5-7-3-5-4",
  "type": "Exercise",
  "number": "5.5.10",
  "title": "",
  "body": "      "
},
{
  "id": "main-6-5-7-3-6-3",
  "level": "2",
  "url": "main-6-5-7-3.html#main-6-5-7-3-6-3",
  "type": "Exercise",
  "number": "5.5.11",
  "title": "",
  "body": "   b. Can be solved using an integrating factor, but not by separating variables.  This DE is first order and linear, so it can be solved using an integrating factor.  It is not separable because when we solve for the derivative, we see that there is no way to separate the variables on the right hand side via multiplication.  Therefore, this DE can be solved using an integrating factor, but not by separating variables.  "
},
{
  "id": "main-6-5-7-3-6-4",
  "level": "2",
  "url": "main-6-5-7-3.html#main-6-5-7-3-6-4",
  "type": "Exercise",
  "number": "5.5.12",
  "title": "",
  "body": "   d. Cannot be solved using either technique.  This DE is first order but it is not linear (because the dependent variable, , appears inside a function--in the term), so it cannot be solved using an integrating factor.  It is not separable because when we solve for the derivative, we see that there is no way to separate the variables on the right hand side via multiplication.  Therefore, this DE cannot be solved using either technique.  "
},
{
  "id": "main-6-5-7-3-6-5",
  "level": "2",
  "url": "main-6-5-7-3.html#main-6-5-7-3-6-5",
  "type": "Exercise",
  "number": "5.5.13",
  "title": "",
  "body": "   c. Can be solved both by using integrating factor and by separating variables.  This DE is first order and linear, so it can be solved using an integrating factor.  It is separable, as shown: because when we solve for the derivative, we see that we can separate the variables on the right hand side via multiplication.  Therefore, this DE can be solved both by using integrating factor and by separating variables.  "
},
{
  "id": "main-6-5-7-3-6-6",
  "level": "2",
  "url": "main-6-5-7-3.html#main-6-5-7-3-6-6",
  "type": "Exercise",
  "number": "5.5.14",
  "title": "",
  "body": "   a. Can be solved by separating variables, but not using an integrating factor.  This DE is first order but it is not linear (because the dependent variable, , is raised to a power--in the term), so it cannot be solved using an integrating factor.  It is separable, as shown: because when we solve for the derivative, we see that we can separate the variables on the right hand side via multiplication.  Therefore, this DE can be solved by separating variables, but not using an integrating factor.  "
},
{
  "id": "main-6-5-7-3-6-7",
  "level": "2",
  "url": "main-6-5-7-3.html#main-6-5-7-3-6-7",
  "type": "Exercise",
  "number": "5.5.15",
  "title": "",
  "body": "     This DE is first order and linear, so it can be solved using an integrating factor.  It is not separable because when we solve for the derivative, we see that there is no way to separate the variables on the right hand side via multiplication.  Therefore, this DE can be solved using an integrating factor, but not by separating variables.  "
},
{
  "id": "main-7-3-3",
  "level": "1",
  "url": "main-7-3-3.html",
  "type": "Section",
  "number": "6.1",
  "title": "Classification",
  "body": "Classification  Now that we've tackled some foundational techniques for solving differential equations, it's time to introduce a new type: linear homogeneous differential equations with constant coefficients, or LHCC equations for short. But how do we recognize them? Let's break down each part of the term linear , homogeneous , and constant coefficients to understand these equations fully.  First, recall that a linear differential equation looks like this: The key idea here is that each term involves either a derivative of or itself, all multiplied by coefficients that depend on .  Next, the equation is homogeneous if the constant term is zero, meaning . This ensures the left-hand side of the equation equals zero.  Finally, if all the coefficients are constants (i.e., numbers, not functions of ), the equation is said to have constant coefficients .  Combining these ideas, we arrive at the formal definition of an LHCC equation.   LHCC Equation   A linear homogeneous differential equation with constant coefficients (LHCC) is of the form:   where are constants.    Now that we have the definition, let's practice identifying these equations with a few examples.   Identify which of the following are linear homogeneous differential equations.     The trick is to check if the constant term is zero and the equation has only and its derivatives on the left-hand side. Let's rewrite each equation with the constant term isolated:   .  The first and last equations are homogeneous, but the second is not because the right-hand side is non-zero.     Determine which of the following equations have constant coefficients.     Check if each coefficient is constant:   . The second equation has constant coefficients, while the others do not.    Check your Understanding   Select all the true statements below  Select all the true statements below.    An LHCC equation must have constant coefficients.    Correct! Constant coefficients are one of the defining features of LHCC equations.      If an equation contains non-linear terms like \\( y^2 \\), it can still be classified as LHCC.    Incorrect, LHCC equations are linear, meaning they cannot contain non-linear terms like \\( y^2 \\).      The equation \\( y' + 3y = 0 \\) is both linear and homogeneous.    Correct! This is a first-order linear homogeneous differential equation.      A non-homogeneous equation has a constant term that is not zero.    Correct! If the constant term is not zero, the equation is non-homogeneous.      Fill in the Blank: Classifying a DE   The differential equation is classified as a _______ homogeneous differential equation with _______ coefficients.     linear, constant    Correct! The equation is linear (because there are no powers or products of the dependent variable and its derivatives) and has constant coefficients.      non-linear, constant    Incorrect. Try again.      linear, variable    Incorrect. Try again.      non-linear, variable    Incorrect. Try again.      Identifying a Homogeneous Equation  Which of the following equations is homogeneous?   \\( y'' + 4y^2 + 3 = 0 \\)   Incorrect. This equation has a non-linear term (\\(y^2\\)), so it is not linear.     \\( y'' + 4y' + 3y = 7 \\)   Incorrect. The equation has a non-zero constant term, making it non-homogeneous.     \\( y' + 2y = x^2 \\)   Incorrect. The right-hand side has a non-zero function of \\(x\\), so this is non-homogeneous.     \\( y'' + 4y' + 3y = 0 \\)   Correct! This equation has no constant term and is homogeneous.      Match the Label to the DE   Match each label on the left to an appropriate DE on the right.  Key: L = linear, H = homogeneous, CC = constant coefficient   Note: Multiple matches can be correct, but there is only one perfect matching where all are correct.     CC     LH, order 1     LHCC     LH, order 2     LCC     L      Select the LHCC Equations  Select all of the LHCC Differential Equations.                                       "
},
{
  "id": "main-7-3-3-3",
  "level": "2",
  "url": "main-7-3-3.html#main-7-3-3-3",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "linear differential equation "
},
{
  "id": "main-7-3-3-4",
  "level": "2",
  "url": "main-7-3-3.html#main-7-3-3-4",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "homogeneous "
},
{
  "id": "main-7-3-3-5",
  "level": "2",
  "url": "main-7-3-3.html#main-7-3-3-5",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "constant coefficients "
},
{
  "id": "def-lhcc",
  "level": "2",
  "url": "main-7-3-3.html#def-lhcc",
  "type": "Definition",
  "number": "1",
  "title": "LHCC Equation.",
  "body": " LHCC Equation   A linear homogeneous differential equation with constant coefficients (LHCC) is of the form:   where are constants.   "
},
{
  "id": "main-7-3-3-9",
  "level": "2",
  "url": "main-7-3-3.html#main-7-3-3-9",
  "type": "Example",
  "number": "2",
  "title": "",
  "body": " Identify which of the following are linear homogeneous differential equations.     The trick is to check if the constant term is zero and the equation has only and its derivatives on the left-hand side. Let's rewrite each equation with the constant term isolated:   .  The first and last equations are homogeneous, but the second is not because the right-hand side is non-zero.   "
},
{
  "id": "main-7-3-3-10",
  "level": "2",
  "url": "main-7-3-3.html#main-7-3-3-10",
  "type": "Example",
  "number": "3",
  "title": "",
  "body": " Determine which of the following equations have constant coefficients.     Check if each coefficient is constant:   . The second equation has constant coefficients, while the others do not.   "
},
{
  "id": "p3-c1-s1-rq1",
  "level": "2",
  "url": "main-7-3-3-11.html#p3-c1-s1-rq1",
  "type": "Reading Question",
  "number": "6.1.1",
  "title": "<em class=\"emphasis\">Select all the true statements below<\/em>.",
  "body": " Select all the true statements below  Select all the true statements below.    An LHCC equation must have constant coefficients.    Correct! Constant coefficients are one of the defining features of LHCC equations.      If an equation contains non-linear terms like \\( y^2 \\), it can still be classified as LHCC.    Incorrect, LHCC equations are linear, meaning they cannot contain non-linear terms like \\( y^2 \\).      The equation \\( y' + 3y = 0 \\) is both linear and homogeneous.    Correct! This is a first-order linear homogeneous differential equation.      A non-homogeneous equation has a constant term that is not zero.    Correct! If the constant term is not zero, the equation is non-homogeneous.    "
},
{
  "id": "p3-c1-s1-rq2",
  "level": "2",
  "url": "main-7-3-3-11.html#p3-c1-s1-rq2",
  "type": "Reading Question",
  "number": "6.1.2",
  "title": "<em class=\"emphasis\">Fill in the Blank: Classifying a DE<\/em>.",
  "body": " Fill in the Blank: Classifying a DE   The differential equation is classified as a _______ homogeneous differential equation with _______ coefficients.     linear, constant    Correct! The equation is linear (because there are no powers or products of the dependent variable and its derivatives) and has constant coefficients.      non-linear, constant    Incorrect. Try again.      linear, variable    Incorrect. Try again.      non-linear, variable    Incorrect. Try again.    "
},
{
  "id": "p3-c1-s1-rq3",
  "level": "2",
  "url": "main-7-3-3-11.html#p3-c1-s1-rq3",
  "type": "Reading Question",
  "number": "6.1.3",
  "title": "<em class=\"emphasis\">Identifying a Homogeneous Equation<\/em>.",
  "body": " Identifying a Homogeneous Equation  Which of the following equations is homogeneous?   \\( y'' + 4y^2 + 3 = 0 \\)   Incorrect. This equation has a non-linear term (\\(y^2\\)), so it is not linear.     \\( y'' + 4y' + 3y = 7 \\)   Incorrect. The equation has a non-zero constant term, making it non-homogeneous.     \\( y' + 2y = x^2 \\)   Incorrect. The right-hand side has a non-zero function of \\(x\\), so this is non-homogeneous.     \\( y'' + 4y' + 3y = 0 \\)   Correct! This equation has no constant term and is homogeneous.    "
},
{
  "id": "p3-c1-s1-rq4",
  "level": "2",
  "url": "main-7-3-3-11.html#p3-c1-s1-rq4",
  "type": "Reading Question",
  "number": "6.1.4",
  "title": "<em class=\"emphasis\">Match the Label to the DE<\/em>.",
  "body": " Match the Label to the DE   Match each label on the left to an appropriate DE on the right.  Key: L = linear, H = homogeneous, CC = constant coefficient   Note: Multiple matches can be correct, but there is only one perfect matching where all are correct.     CC     LH, order 1     LHCC     LH, order 2     LCC     L    "
},
{
  "id": "p3-c1-s1-rq5",
  "level": "2",
  "url": "main-7-3-3-11.html#p3-c1-s1-rq5",
  "type": "Reading Question",
  "number": "6.1.5",
  "title": "<em class=\"emphasis\">Select the LHCC Equations<\/em>.",
  "body": " Select the LHCC Equations  Select all of the LHCC Differential Equations.                                     "
},
{
  "id": "main-7-3-4",
  "level": "1",
  "url": "main-7-3-4.html",
  "type": "Section",
  "number": "6.2",
  "title": "Solutions",
  "body": "Solutions  Before diving into how to solve LHCC equations , let's develop some intuition about what the solutions should look like. For this discussion we will assume that the equations contain a term. If they didn't, then you could repeatedly integrate both sides of the equation until you are left with a term and a nonhomogeneous equation. For example, the following shows how an LHCC equation with no term can be reduced to a nonhomogeneous equation with a term. .   We begin with the simple first-order LHCC equation, and note that this equation requires to sum to zero. Recall from algebra that only like terms can combine to simplify to zero. So, for the equation to hold, and must be like terms.  Let's test a few guesses for : , , and .             As you can see, only produces like terms that simplify to zero. This is why exponential functions often work well in LHCC equations. Let's now examine a more complex example to expand on this idea.   Consider the LHCC equation:  Verify that is a solution, but is not.   Let's check each function:          Therefore, only is a solution.    This example further supports the claim that exponential functions, like , are well-suited for LHCC equations because they produce like terms when differentiated. Later, we will see that if is a solution then, in some cases, it is possible for to be a solution as well.  We conclude this section with an important concept that will guide us in the sections to follow. Terms of the Solution to an LHCC Equation  The general solution to an LHCC equation involves terms of the form: where is a constant. Note, if is complex, then , and by Euler's formula , . In this case, it is common to see a solution written with sine and cosine terms.     Check-Point Questions   is the only function whose derivative is a multiple of itself   is the only function whose derivative is a multiple of itself   True Correct!  False Incorrect.    and its derivatives are \"like terms\" that can be combined   and its derivatives are \"like terms\" that can be combined   True Correct!  False Incorrect.    The hundredth derivative of is equal to a constant times   The hundredth derivative of is equal to a constant times   True Correct!  False Incorrect.    Without solving it, which function satisfies the property ?  Without solving it, which function satisfies the property ?      Incorrect.       Correct! The derivative of is times itself.       Incorrect.       Incorrect.     "
},
{
  "id": "main-7-3-4-7",
  "level": "2",
  "url": "main-7-3-4.html#main-7-3-4-7",
  "type": "Example",
  "number": "4",
  "title": "",
  "body": " Consider the LHCC equation:  Verify that is a solution, but is not.   Let's check each function:          Therefore, only is a solution.   "
},
{
  "id": "p3-c1-s2-rq1",
  "level": "2",
  "url": "main-7-3-4-10.html#p3-c1-s2-rq1",
  "type": "Reading Question",
  "number": "6.2.1",
  "title": "<em class=\"emphasis\"><span class=\"process-math\">\\(e^{rx} \\)<\/span> is the only function whose derivative is a multiple of itself<\/em>.",
  "body": " is the only function whose derivative is a multiple of itself   is the only function whose derivative is a multiple of itself   True Correct!  False Incorrect.  "
},
{
  "id": "p3-c1-s2-rq2",
  "level": "2",
  "url": "main-7-3-4-10.html#p3-c1-s2-rq2",
  "type": "Reading Question",
  "number": "6.2.2",
  "title": "<em class=\"emphasis\"><span class=\"process-math\">\\(e^{rx} \\)<\/span> and its derivatives are \"like terms\" that can be combined<\/em>.",
  "body": " and its derivatives are \"like terms\" that can be combined   and its derivatives are \"like terms\" that can be combined   True Correct!  False Incorrect.  "
},
{
  "id": "p3-c1-s2-rq3",
  "level": "2",
  "url": "main-7-3-4-10.html#p3-c1-s2-rq3",
  "type": "Reading Question",
  "number": "6.2.3",
  "title": "<em class=\"emphasis\">The hundredth derivative of <span class=\"process-math\">\\(e^{7x} \\)<\/span> is equal to a constant times <span class=\"process-math\">\\(e^{7x} \\)<\/span><\/em>.",
  "body": " The hundredth derivative of is equal to a constant times   The hundredth derivative of is equal to a constant times   True Correct!  False Incorrect.  "
},
{
  "id": "p3-c1-s2-rq4",
  "level": "2",
  "url": "main-7-3-4-10.html#p3-c1-s2-rq4",
  "type": "Reading Question",
  "number": "6.2.4",
  "title": "<em class=\"emphasis\">Without solving it, which function satisfies the property <span class=\"process-math\">\\(y' = -2y \\text{?}\\)<\/span><\/em>",
  "body": " Without solving it, which function satisfies the property ?  Without solving it, which function satisfies the property ?      Incorrect.       Correct! The derivative of is times itself.       Incorrect.       Incorrect.   "
},
{
  "id": "main-7-3-5",
  "level": "1",
  "url": "main-7-3-5.html",
  "type": "Section",
  "number": "6.3",
  "title": "1st-Order Equations",
  "body": "1st-Order Equations  In the previous section, we learned that solutions to Linear Homogeneous Constant Coefficient (LHCC) equations often involve terms of the form . However, not every value of will work. The correct values of arise from solving an important algebraic equation, obtained by substituting into the differential equation. In this section, we will focus on this process for first-order equations before building up to higher-order cases.  Let's start with a simple first-order equation: We want to find the value of such that is a solution. Substituting into the differential equation gives: Since is never zero, we must have: This tells us that is a solution. Therefore, the general solution is:   The equation , which gave us the value of , is called the characteristic equation . Every LHCC equation has one. The characteristic equation gives us the values of that we need to construct the general solution.  Applying the same approach to the general first-order LHCC equation gives us: This results in the characteristic equation and general solution:   Now, let's apply this method to a couple of examples.   Find the general solution for each LHCC equation.     First, rewrite the equations in standard form:   Now solve the characteristic equations: Thus, the general solutions are:     This straightforward method works for any first-order LHCC equation by using the characteristic equation. In the next sections, we'll extend this technique to higher-order equations.  Check-Point Questions   Characteristic equation for first-order LHCC  What is the characteristic equation for ?    Correct! The characteristic equation is .     Incorrect. Check the sign of the coefficient of .     Incorrect. The characteristic equation for a first-order LHCC is linear, not quadratic.     Incorrect. Make sure to use the correct coefficients from the original equation.     Select the characteristic equation  Select the characteristic equation for the first-order LHCC equation ?    Incorrect. Remember, the characteristic equation should be formed by setting the equation to zero.     Correct! The characteristic equation is found by substituting into the differential equation.     Incorrect. Check the signs of the coefficients.     Incorrect. Ensure you have used the correct coefficients from the original equation.     Select the general solution  Give the general solution for the first-order LHCC equation ?    Incorrect. Check the sign of the exponent.     Correct! The solution has the form , where is found from the characteristic equation.     Incorrect. Make sure to solve the characteristic equation correctly.     Incorrect. Check the coefficient of in the original equation.     Identify the first-order LHCC equation  Which of the following is a first-order LHCC equation?    Incorrect. This is a second-order equation.     Correct! This is a first-order linear homogeneous equation with constant coefficients.     Incorrect. This equation is not homogeneous.     Incorrect. This is not a constant coefficient equation.     What exponential term is in the solution   What exponential term in the solution of the equation ?     Correct! Solving gives . So is the exponential term in the solution.     Incorrect. Check the signs when solving the characteristic equation.     Incorrect. Ensure you are solving the characteristic equation correctly.     Incorrect. Revisit the steps to solve the characteristic equation.     "
},
{
  "id": "main-7-3-5-4",
  "level": "2",
  "url": "main-7-3-5.html#main-7-3-5-4",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "characteristic equation "
},
{
  "id": "main-7-3-5-7",
  "level": "2",
  "url": "main-7-3-5.html#main-7-3-5-7",
  "type": "Example",
  "number": "5",
  "title": "",
  "body": " Find the general solution for each LHCC equation.     First, rewrite the equations in standard form:   Now solve the characteristic equations: Thus, the general solutions are:    "
},
{
  "id": "p3-c1-s3-rq1",
  "level": "2",
  "url": "main-7-3-5-9.html#p3-c1-s3-rq1",
  "type": "Reading Question",
  "number": "6.3.1",
  "title": "<em class=\"emphasis\">Characteristic equation for first-order LHCC<\/em>.",
  "body": " Characteristic equation for first-order LHCC  What is the characteristic equation for ?    Correct! The characteristic equation is .     Incorrect. Check the sign of the coefficient of .     Incorrect. The characteristic equation for a first-order LHCC is linear, not quadratic.     Incorrect. Make sure to use the correct coefficients from the original equation.   "
},
{
  "id": "p3-c1-s3-rq2",
  "level": "2",
  "url": "main-7-3-5-9.html#p3-c1-s3-rq2",
  "type": "Reading Question",
  "number": "6.3.2",
  "title": "<em class=\"emphasis\">Select the characteristic equation<\/em>.",
  "body": " Select the characteristic equation  Select the characteristic equation for the first-order LHCC equation ?    Incorrect. Remember, the characteristic equation should be formed by setting the equation to zero.     Correct! The characteristic equation is found by substituting into the differential equation.     Incorrect. Check the signs of the coefficients.     Incorrect. Ensure you have used the correct coefficients from the original equation.   "
},
{
  "id": "p3-c1-s3-rq3",
  "level": "2",
  "url": "main-7-3-5-9.html#p3-c1-s3-rq3",
  "type": "Reading Question",
  "number": "6.3.3",
  "title": "<em class=\"emphasis\">Select the general solution<\/em>.",
  "body": " Select the general solution  Give the general solution for the first-order LHCC equation ?    Incorrect. Check the sign of the exponent.     Correct! The solution has the form , where is found from the characteristic equation.     Incorrect. Make sure to solve the characteristic equation correctly.     Incorrect. Check the coefficient of in the original equation.   "
},
{
  "id": "p3-c1-s3-rq4",
  "level": "2",
  "url": "main-7-3-5-9.html#p3-c1-s3-rq4",
  "type": "Reading Question",
  "number": "6.3.4",
  "title": "<em class=\"emphasis\">Identify the first-order LHCC equation<\/em>.",
  "body": " Identify the first-order LHCC equation  Which of the following is a first-order LHCC equation?    Incorrect. This is a second-order equation.     Correct! This is a first-order linear homogeneous equation with constant coefficients.     Incorrect. This equation is not homogeneous.     Incorrect. This is not a constant coefficient equation.   "
},
{
  "id": "p3-c1-s3-rq5",
  "level": "2",
  "url": "main-7-3-5-9.html#p3-c1-s3-rq5",
  "type": "Reading Question",
  "number": "6.3.5",
  "title": "<em class=\"emphasis\">What exponential term is in the solution<\/em>.",
  "body": " What exponential term is in the solution   What exponential term in the solution of the equation ?     Correct! Solving gives . So is the exponential term in the solution.     Incorrect. Check the signs when solving the characteristic equation.     Incorrect. Ensure you are solving the characteristic equation correctly.     Incorrect. Revisit the steps to solve the characteristic equation.   "
},
{
  "id": "main-7-3-6",
  "level": "1",
  "url": "main-7-3-6.html",
  "type": "Section",
  "number": "6.4",
  "title": "2nd-Order Equations",
  "body": "2nd-Order Equations  Now that we've mastered first-order LHCC equations, it's time to explore second-order LHCC equations. These are slightly more complex but follow a similar approach. We'll see how the characteristic equation helps us find solutions and look at the different cases that arise depending on the nature of the roots.  Consider the following second-order equation: Substituting into this equation, we get: . Therefore, and are solutions, and the general solution is the combination of these two: .  In general, for any second-order LHCC equation of the form: The characteristic equation is: This quadratic equation will have two solutions, which could be either real or complex. The general solution depends on the nature of these solutions, and we will now explore the different cases. Before moving on, we highly recommend taking a minute to review some concepts related to solving quadratic equations .  Let and be the solutions to the characteristic equation. When , the general solution is: However, if , the terms combine into like terms, , which is an incomplete solution. To fix this, we multiply the second term by , resulting in the correct general solution:  See for an outline of why the extra is required in the general solution of a second order LHCC equation when .     Although, the above explanation covers the situation when and are equal or not, we will split the case into two cases that treat real or complex values separately . The three cases are summarized below.  Summary of Cases  Let and be the solutions of the characteristic equation associated with the second-order LHCC equation. The general solution is:  Case 1 (real & )    Case 2 (real & )    Case 3 (complex)            Let's now practice solving some second-order LHCC equations.   Find the general solutions for each LHCC equation.        First, write down and solve the characteristic equation: . Since and are real and , we are in Case 1 . Therefore, the general solution is: .             The characteristic equation is: . Therefore, the general solution is: .             The characteristic equation in this problem is: . Here, and . So the general solution is: .       Check-Point Questions   Match the DE to Its Characteristic Equation   Match each LHCC differential equation on the left to its corresponding characteristic equation on the right.   Note: Each DE has a unique characteristic equation.                      Solving the characteristic equation  If the characteristic equation for an LHCC equation is , what are the roots?   (double root)  Correct! The root has a multiplicity of 2.     Incorrect. Check the quadratic equation carefully.    and  Incorrect. Ensure you solve the quadratic equation correctly.     Incorrect. These are not the correct roots for this equation.     Match the Characteristic Equation Roots to the General Solution   Match each set of characteristic equation roots on the left to the corresponding general solution on the right.   Note: One of the differential equations is first-order, and the rest are second-order.                              Discriminant of the characteristic equation  If the discriminant of the characteristic equation is , then what kind of solutions does the characteristic equation have?   Real and equal solutions  Incorrect. The discriminant is the number under the square root in the quadratic formula.    Real and unequal solutions  Incorrect. The discriminant is the number under the square root in the quadratic formula.    Complex solutions  Correct! A negative discriminant indicates the square root of a negative number in the quadratic formula, which results in the complex number .     "
},
{
  "id": "main-7-3-6-9",
  "level": "2",
  "url": "main-7-3-6.html#main-7-3-6-9",
  "type": "Example",
  "number": "6",
  "title": "",
  "body": " Find the general solutions for each LHCC equation.        First, write down and solve the characteristic equation: . Since and are real and , we are in Case 1 . Therefore, the general solution is: .             The characteristic equation is: . Therefore, the general solution is: .             The characteristic equation in this problem is: . Here, and . So the general solution is: .      "
},
{
  "id": "p3-c1-s4-rq1",
  "level": "2",
  "url": "main-7-3-6-10.html#p3-c1-s4-rq1",
  "type": "Reading Question",
  "number": "6.4.1",
  "title": "<em class=\"emphasis\">Match the DE to Its Characteristic Equation<\/em>.",
  "body": " Match the DE to Its Characteristic Equation   Match each LHCC differential equation on the left to its corresponding characteristic equation on the right.   Note: Each DE has a unique characteristic equation.                    "
},
{
  "id": "p3-c1-s4-rq2",
  "level": "2",
  "url": "main-7-3-6-10.html#p3-c1-s4-rq2",
  "type": "Reading Question",
  "number": "6.4.2",
  "title": "<em class=\"emphasis\">Solving the characteristic equation<\/em>.",
  "body": " Solving the characteristic equation  If the characteristic equation for an LHCC equation is , what are the roots?   (double root)  Correct! The root has a multiplicity of 2.     Incorrect. Check the quadratic equation carefully.    and  Incorrect. Ensure you solve the quadratic equation correctly.     Incorrect. These are not the correct roots for this equation.   "
},
{
  "id": "p3-c1-s4-rq3",
  "level": "2",
  "url": "main-7-3-6-10.html#p3-c1-s4-rq3",
  "type": "Reading Question",
  "number": "6.4.3",
  "title": "<em class=\"emphasis\">Match the Characteristic Equation Roots to the General Solution<\/em>.",
  "body": " Match the Characteristic Equation Roots to the General Solution   Match each set of characteristic equation roots on the left to the corresponding general solution on the right.   Note: One of the differential equations is first-order, and the rest are second-order.                            "
},
{
  "id": "p3-c1-s4-rq4",
  "level": "2",
  "url": "main-7-3-6-10.html#p3-c1-s4-rq4",
  "type": "Reading Question",
  "number": "6.4.4",
  "title": "<em class=\"emphasis\">Discriminant of the characteristic equation<\/em>.",
  "body": " Discriminant of the characteristic equation  If the discriminant of the characteristic equation is , then what kind of solutions does the characteristic equation have?   Real and equal solutions  Incorrect. The discriminant is the number under the square root in the quadratic formula.    Real and unequal solutions  Incorrect. The discriminant is the number under the square root in the quadratic formula.    Complex solutions  Correct! A negative discriminant indicates the square root of a negative number in the quadratic formula, which results in the complex number .   "
},
{
  "id": "main-7-3-7",
  "level": "1",
  "url": "main-7-3-7.html",
  "type": "Section",
  "number": "6.5",
  "title": "Higher-Order Equations",
  "body": "Higher-Order Equations  Solving higher-order linear homogeneous constant coefficient (LHCC) equations is an extension of the methods used for second-order equations. The basic strategy remains the same: solve the characteristic equation, then construct the general solution. However, for higher-order equations, the characteristic equation is a higher-degree polynomial, which can make finding the solutions more challenging.   LHCC Characteristic Equation   The characteristic equation of an -th order LHCC equation is the -th degree polynomial  Click here for an explanation.   . The solutions to this polynomial, , correspond to the roots that determine the form of the general solution.    In general, the characteristic equation will have roots, which may be real or complex and may also include repeated roots. Each root of the characteristic equation leads to a term in the general solution of the LHCC. Examples in the table below illustrate the process of constructing these general solutions based on the different types of roots.  Examples of LHCC General Solutions     Characteristic Equation  Solutions   General Solution      (3rd order)        (3rd order)        (4th order)        (4th order)        (7th order)        (5th order)       As the table demonstrates, constructing the general solution of an LHCC equation is systematic once you have the roots of the characteristic equation. However, solving higher-order polynomial equations by hand can be difficult. The next example shows a few algebra techniques you can use to handle higher degree equations.   Solve the following characteristic equations.                        Note: DoS = Difference of Squares.        DoS                        common                        common              Technically, and represents 4 repeated factors.          common      DoS                    DoS      DoS                    . Let , then we can rewrite the equation as: . Solving for , we get: . Thus, gives , and gives . The general solution is: .       These factoring techniques useful, but they only apply to specific forms of polynomials and it is unlikely that you will be lucky enough to encounter such forms in practice. Therefore, it is reasonable to use technology to aid you with these tyes of problems. Many software tools are available and you are encouraged to use any that you are familiar with.   Find the general solution to the LHCC equations         using the .     First, write down the characteristic equation: . Plugging this into to the factoring tool shows that it factors as . Solving for , we get . Therefore, the general solution is: .    The characteristic equation is: which is challenging to solve by hand. However, typing it into factoring tool above shows that it can be factored as , which gives the solutions . Therefore, the general solution is: .      Besides factoring software, another options is to use numerical solvers. The next example illustrates this.   Consider the fifth-order LHCC equation:  .   The characteristic equation is: . Solving this polynomial equation analytically is challenging, so we use a numerical solver ( Wolfram Alpha ). This equation has five roots. Three are real: and two are complex: . The general solution, incorporating these roots, is: . .    By recognizing the nature of the roots and utilizing appropriate technology for solving polynomial equations, we can tackle higher-order LHCC equations with confidence.  Check-Point Questions   Match the Differential Equation to its Characteristic Equation  Match each differential equation on the left to its characteristic equation on the right.                            Give the general solution for a 3rd-order LHCC equation whose..  Give the general solution for a 3rd-order LHCC equation whose characteristic equation has the solution: .    Correct! This is the form when there are three distinct real roots.     Incorrect.     Incorrect.     Incorrect.     Give the general solution for a 4th-order LHCC equation whose..  Give the general solution for a 4th-order LHCC equation whose characteristic equation has the solutions: .    Incorrect.     Incorrect. Not enough constants.     Incorrect.     Correct! This is the form when the characteristic equation has complex roots.     Give the general solution for a 5th-order LHCC equation whose..  Give the general solution for a 5th-order LHCC equation whose characteristic equation has the solutions: .    Incorrect. This form does not account for the multiplicity of the roots.     Incorrect. The multiplicity should be reflected for each root.     Correct! This is the form when there are repeated real roots with appropriate multiplicity.     Incorrect. Make sure to account for the cubic multiplicity for .     "
},
{
  "id": "def-characteristic-equation",
  "level": "2",
  "url": "main-7-3-7.html#def-characteristic-equation",
  "type": "Definition",
  "number": "7",
  "title": "<em class=\"emphasis\">LHCC Characteristic Equation<\/em>.",
  "body": " LHCC Characteristic Equation   The characteristic equation of an -th order LHCC equation is the -th degree polynomial  Click here for an explanation.   . The solutions to this polynomial, , correspond to the roots that determine the form of the general solution.   "
},
{
  "id": "higher-order-lhcc-general-solution-examples",
  "level": "2",
  "url": "main-7-3-7.html#higher-order-lhcc-general-solution-examples",
  "type": "Table",
  "number": "8",
  "title": "Examples of LHCC General Solutions",
  "body": "Examples of LHCC General Solutions     Characteristic Equation  Solutions   General Solution      (3rd order)        (3rd order)        (4th order)        (4th order)        (7th order)        (5th order)      "
},
{
  "id": "main-7-3-7-7",
  "level": "2",
  "url": "main-7-3-7.html#main-7-3-7-7",
  "type": "Example",
  "number": "9",
  "title": "",
  "body": " Solve the following characteristic equations.                        Note: DoS = Difference of Squares.        DoS                        common                        common              Technically, and represents 4 repeated factors.          common      DoS                    DoS      DoS                    . Let , then we can rewrite the equation as: . Solving for , we get: . Thus, gives , and gives . The general solution is: .      "
},
{
  "id": "main-7-3-7-9",
  "level": "2",
  "url": "main-7-3-7.html#main-7-3-7-9",
  "type": "Example",
  "number": "10",
  "title": "",
  "body": " Find the general solution to the LHCC equations         using the .     First, write down the characteristic equation: . Plugging this into to the factoring tool shows that it factors as . Solving for , we get . Therefore, the general solution is: .    The characteristic equation is: which is challenging to solve by hand. However, typing it into factoring tool above shows that it can be factored as , which gives the solutions . Therefore, the general solution is: .     "
},
{
  "id": "main-7-3-7-11",
  "level": "2",
  "url": "main-7-3-7.html#main-7-3-7-11",
  "type": "Example",
  "number": "11",
  "title": "",
  "body": " Consider the fifth-order LHCC equation:  .   The characteristic equation is: . Solving this polynomial equation analytically is challenging, so we use a numerical solver ( Wolfram Alpha ). This equation has five roots. Three are real: and two are complex: . The general solution, incorporating these roots, is: . .   "
},
{
  "id": "p3-c1-s5-rq1",
  "level": "2",
  "url": "main-7-3-7-13.html#p3-c1-s5-rq1",
  "type": "Reading Question",
  "number": "6.5.1",
  "title": "<em class=\"emphasis\">Match the Differential Equation to its Characteristic Equation<\/em>.",
  "body": " Match the Differential Equation to its Characteristic Equation  Match each differential equation on the left to its characteristic equation on the right.                          "
},
{
  "id": "p3-c1-s5-rq2",
  "level": "2",
  "url": "main-7-3-7-13.html#p3-c1-s5-rq2",
  "type": "Reading Question",
  "number": "6.5.2",
  "title": "<em class=\"emphasis\">Give the general solution for a 3rd-order LHCC equation whose..<\/em>.",
  "body": " Give the general solution for a 3rd-order LHCC equation whose..  Give the general solution for a 3rd-order LHCC equation whose characteristic equation has the solution: .    Correct! This is the form when there are three distinct real roots.     Incorrect.     Incorrect.     Incorrect.   "
},
{
  "id": "p3-c1-s5-rq3",
  "level": "2",
  "url": "main-7-3-7-13.html#p3-c1-s5-rq3",
  "type": "Reading Question",
  "number": "6.5.3",
  "title": "<em class=\"emphasis\">Give the general solution for a 4th-order LHCC equation whose..<\/em>.",
  "body": " Give the general solution for a 4th-order LHCC equation whose..  Give the general solution for a 4th-order LHCC equation whose characteristic equation has the solutions: .    Incorrect.     Incorrect. Not enough constants.     Incorrect.     Correct! This is the form when the characteristic equation has complex roots.   "
},
{
  "id": "p3-c1-s5-rq4",
  "level": "2",
  "url": "main-7-3-7-13.html#p3-c1-s5-rq4",
  "type": "Reading Question",
  "number": "6.5.4",
  "title": "<em class=\"emphasis\">Give the general solution for a 5th-order LHCC equation whose..<\/em>.",
  "body": " Give the general solution for a 5th-order LHCC equation whose..  Give the general solution for a 5th-order LHCC equation whose characteristic equation has the solutions: .    Incorrect. This form does not account for the multiplicity of the roots.     Incorrect. The multiplicity should be reflected for each root.     Correct! This is the form when there are repeated real roots with appropriate multiplicity.     Incorrect. Make sure to account for the cubic multiplicity for .   "
},
{
  "id": "main-7-3-8",
  "level": "1",
  "url": "main-7-3-8.html",
  "type": "Section",
  "number": "6.6",
  "title": "Summary &amp; Exercises",
  "body": "Summary & Exercises    The LHCC chapter (Linear Homogeneous Differential Equations with Constant Coefficients) in \"Linear Constant Coefficient Methods\" introduces a systematic method to solve higher-order linear differential equations. Here's a summary based on the content:  Summary of the Key Ideas      Linear Homogeneous Differential Equations with Constant Coefficients (LHCC)   These are differential equations where each term consists of a derivative of the unknown function multiplied by a constant.  The general form of an LHCC equation is: .     The Characteristic Equation   By assuming a solution of the form , an LHCC can be reduced to a characteristic polynomial in .  The solutions to the characteristic equation determine the form of the general solution.     Solution Types   Let be a solution to the characteristic equation (CE).  If is different from all other solutions of the CE, then is a term of the general solution.  If is equal to, say, three other solutions of the CE, then are terms of the general solution.  If or , then the general solution contains .        LHCC Method  The general solution to a linear homogeneous differential equation with constant coefficients (LHCC) of the form can be found through the following steps...   Step 1: Solve the Characteristic Equation  Solve the characteristic equation (CE)    Step 2: Write Down the General Solution     Real & Different:   .   Real & Repeated:  (multiplicity ) .   Complex:   .   For mixed root types , combine the corresponding terms to form the complete general solution.           Show why is needed in the general solution for repeated roots of the CE     Classify the following differential equations as either homogeneous or nonhomogeneous  *NEED EXERCISES        Find the general solution for each of the following                          Solve the following initial value problems   an that satisfy thegiven initial conditions.  o  We already have the general solution . In order to use the initial conditions, we will eventually need the first derivative, so let's find that now. Now we can see what comes of the first initial condition  Now we can use the other initial condition  Notice that the resulting equations, (\\ref{eq7}) and (\\ref{eq8}) constitute a system of two linear equations in two unknowns, and we should be able to solve for the unknown an . There are multiple ways to achieve this. One possibility is to solve fo in equation (\\ref{eq7}) and then substitute into equation (\\ref{eq8}) as follows. Hence, we have the solution  Note: it's not clear whether the independent variable i o , so you could replace th 's wit 's.         Boundary Value Problems  Solve the following boundary value problem.    We begin by verifying the following: the DE is linear,  the DE is homogeneous, and  the DE has constant coefficients. Since all of the conditions are true, we can safely proceed to find the general solution. We write down and then solve the characteristic equation, as follows. Since an are distinct, real roots, the general solution is given by Now we can see what comes of the first boundary condition  Now we can use the other boundary condition  Notice that the resulting equations, (\\ref{eq11}) and (\\ref{eq12}) constitute a system of two linear equations in two unknowns, and we should be able to solve for the unknown an . There are multiple ways to achieve this. One possibility is to solve fo in equation (\\ref{eq11}) and then substitute into equation (\\ref{eq12}) as follows. Hence, we have the solution    Solve the following DEs               Initial Value Problems  Solve the following initial value problem.   or  We begin by verifying the following: the DE is linear,  the DE is homogeneous, and  the DE has constant coefficients. Since all of the conditions are true, we can safely proceed by writing the characteristic equation and then solving it (either by factoring or using the quadratic equation). Sinc is a repeated real root, the general solution is In order to use the initial conditions, we will eventually need the first derivative, so let's find that now. Note that we will use the product rule to take the derivative. Now we can see what comes of the first initial condition  Now we can use the other initial condition  Notice that the resulting equations, (\\ref{eq13}) and (\\ref{eq14}) constitute a system of two linear equations in two unknowns, and we should be able to solve for the unknown and . There are multiple ways to achieve this. One possibility is to solve for in equation (\\ref{eq13}) and then substitute into equation (\\ref{eq14}) as follows. Hence, we have the solution    Solve the following DEs               Solve the following DEs                           Find the general solution for a linear, homogeneous DEwith constant coefficients which has the given characteristic equation               Compute the derivative of each of the following functions        Classifying Practice  Select each classification label that applies to the equation     Linear  Correct, each of the terms are linear.    Homogeneous  Correct, the constant term is zero.    Constant Coefficients  Correct, each coefficient is constant.    LHCC  Correct!    Classifying Practice  Select each classification label that applies to the equation     Linear  Incorrect, is a nonlinear term.    Homogeneous  Technically, only linear equations can be labeled as homogeneous or not. Since the equation is nonlinear, we do not select it.    Constant Coefficients  Technically, only linear equations can be labeled as having constant coefficients or not. Since the equation is nonlinear, we do not select it.    LHCC  Incorrect.    Classifying Practice  Select each classification label that applies to the equation     Linear  Correct, both terms are linear.    Homogeneous  Incorrect, the constant term, , is non-zero.    Constant Coefficients  Correct, each coefficient is constant.    LHCC  Incorrect.    Classifying Practice  Select each classification label that applies to the equation     Linear  Correct, all terms are linear.    Homogeneous  Correct, the constant term is zero.    Constant Coefficients  Incorrect, the term coefficient, , is not constant.    LHCC  Incorrect.     "
},
{
  "id": "main-7-3-8-2-1",
  "level": "2",
  "url": "main-7-3-8.html#main-7-3-8-2-1",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Linear Homogeneous Differential Equations with Constant Coefficients (LHCC) The Characteristic Equation Solution Types "
},
{
  "id": "tba",
  "level": "2",
  "url": "main-7-3-8-3.html#tba",
  "type": "Exercise",
  "number": "6.6.1",
  "title": "",
  "body": " Show why is needed in the general solution for repeated roots of the CE    "
},
{
  "id": "main-7-3-8-3-2-3",
  "level": "2",
  "url": "main-7-3-8-3.html#main-7-3-8-3-2-3",
  "type": "Exercise",
  "number": "6.6.2",
  "title": "",
  "body": "    "
},
{
  "id": "main-7-3-8-3-3-2",
  "level": "2",
  "url": "main-7-3-8-3.html#main-7-3-8-3-3-2",
  "type": "Exercise",
  "number": "6.6.3",
  "title": "",
  "body": "     "
},
{
  "id": "main-7-3-8-3-3-3",
  "level": "2",
  "url": "main-7-3-8-3.html#main-7-3-8-3-3-3",
  "type": "Exercise",
  "number": "6.6.4",
  "title": "",
  "body": "     "
},
{
  "id": "main-7-3-8-3-3-4",
  "level": "2",
  "url": "main-7-3-8-3.html#main-7-3-8-3-3-4",
  "type": "Exercise",
  "number": "6.6.5",
  "title": "",
  "body": "     "
},
{
  "id": "main-7-3-8-3-3-5",
  "level": "2",
  "url": "main-7-3-8-3.html#main-7-3-8-3-3-5",
  "type": "Exercise",
  "number": "6.6.6",
  "title": "",
  "body": "    "
},
{
  "id": "main-7-3-8-3-4-2",
  "level": "2",
  "url": "main-7-3-8-3.html#main-7-3-8-3-4-2",
  "type": "Exercise",
  "number": "6.6.7",
  "title": "",
  "body": " an that satisfy thegiven initial conditions.  o  We already have the general solution . In order to use the initial conditions, we will eventually need the first derivative, so let's find that now. Now we can see what comes of the first initial condition  Now we can use the other initial condition  Notice that the resulting equations, (\\ref{eq7}) and (\\ref{eq8}) constitute a system of two linear equations in two unknowns, and we should be able to solve for the unknown an . There are multiple ways to achieve this. One possibility is to solve fo in equation (\\ref{eq7}) and then substitute into equation (\\ref{eq8}) as follows. Hence, we have the solution  Note: it's not clear whether the independent variable i o , so you could replace th 's wit 's.  "
},
{
  "id": "main-7-3-8-3-4-3",
  "level": "2",
  "url": "main-7-3-8-3.html#main-7-3-8-3-4-3",
  "type": "Exercise",
  "number": "6.6.8",
  "title": "",
  "body": "    "
},
{
  "id": "main-7-3-8-3-5-2",
  "level": "2",
  "url": "main-7-3-8-3.html#main-7-3-8-3-5-2",
  "type": "Exercise",
  "number": "6.6.9",
  "title": "",
  "body": "Solve the following boundary value problem.    We begin by verifying the following: the DE is linear,  the DE is homogeneous, and  the DE has constant coefficients. Since all of the conditions are true, we can safely proceed to find the general solution. We write down and then solve the characteristic equation, as follows. Since an are distinct, real roots, the general solution is given by Now we can see what comes of the first boundary condition  Now we can use the other boundary condition  Notice that the resulting equations, (\\ref{eq11}) and (\\ref{eq12}) constitute a system of two linear equations in two unknowns, and we should be able to solve for the unknown an . There are multiple ways to achieve this. One possibility is to solve fo in equation (\\ref{eq11}) and then substitute into equation (\\ref{eq12}) as follows. Hence, we have the solution  "
},
{
  "id": "main-7-3-8-3-6-2",
  "level": "2",
  "url": "main-7-3-8-3.html#main-7-3-8-3-6-2",
  "type": "Exercise",
  "number": "6.6.10",
  "title": "",
  "body": "     "
},
{
  "id": "main-7-3-8-3-6-3",
  "level": "2",
  "url": "main-7-3-8-3.html#main-7-3-8-3-6-3",
  "type": "Exercise",
  "number": "6.6.11",
  "title": "",
  "body": "     "
},
{
  "id": "main-7-3-8-3-7-2",
  "level": "2",
  "url": "main-7-3-8-3.html#main-7-3-8-3-7-2",
  "type": "Exercise",
  "number": "6.6.12",
  "title": "",
  "body": "Solve the following initial value problem.   or  We begin by verifying the following: the DE is linear,  the DE is homogeneous, and  the DE has constant coefficients. Since all of the conditions are true, we can safely proceed by writing the characteristic equation and then solving it (either by factoring or using the quadratic equation). Sinc is a repeated real root, the general solution is In order to use the initial conditions, we will eventually need the first derivative, so let's find that now. Note that we will use the product rule to take the derivative. Now we can see what comes of the first initial condition  Now we can use the other initial condition  Notice that the resulting equations, (\\ref{eq13}) and (\\ref{eq14}) constitute a system of two linear equations in two unknowns, and we should be able to solve for the unknown and . There are multiple ways to achieve this. One possibility is to solve for in equation (\\ref{eq13}) and then substitute into equation (\\ref{eq14}) as follows. Hence, we have the solution  "
},
{
  "id": "main-7-3-8-3-8-2",
  "level": "2",
  "url": "main-7-3-8-3.html#main-7-3-8-3-8-2",
  "type": "Exercise",
  "number": "6.6.13",
  "title": "",
  "body": "     "
},
{
  "id": "main-7-3-8-3-8-3",
  "level": "2",
  "url": "main-7-3-8-3.html#main-7-3-8-3-8-3",
  "type": "Exercise",
  "number": "6.6.14",
  "title": "",
  "body": "     "
},
{
  "id": "main-7-3-8-3-9-2",
  "level": "2",
  "url": "main-7-3-8-3.html#main-7-3-8-3-9-2",
  "type": "Exercise",
  "number": "6.6.15",
  "title": "",
  "body": "     "
},
{
  "id": "main-7-3-8-3-9-3",
  "level": "2",
  "url": "main-7-3-8-3.html#main-7-3-8-3-9-3",
  "type": "Exercise",
  "number": "6.6.16",
  "title": "",
  "body": "     "
},
{
  "id": "main-7-3-8-3-9-4",
  "level": "2",
  "url": "main-7-3-8-3.html#main-7-3-8-3-9-4",
  "type": "Exercise",
  "number": "6.6.17",
  "title": "",
  "body": "     "
},
{
  "id": "main-7-3-8-3-9-5",
  "level": "2",
  "url": "main-7-3-8-3.html#main-7-3-8-3-9-5",
  "type": "Exercise",
  "number": "6.6.18",
  "title": "",
  "body": "     "
},
{
  "id": "main-7-3-8-3-10-2",
  "level": "2",
  "url": "main-7-3-8-3.html#main-7-3-8-3-10-2",
  "type": "Exercise",
  "number": "6.6.19",
  "title": "",
  "body": "     "
},
{
  "id": "main-7-3-8-3-10-3",
  "level": "2",
  "url": "main-7-3-8-3.html#main-7-3-8-3-10-3",
  "type": "Exercise",
  "number": "6.6.20",
  "title": "",
  "body": "     "
},
{
  "id": "main-7-3-8-3-11-2",
  "level": "2",
  "url": "main-7-3-8-3.html#main-7-3-8-3-11-2",
  "type": "Exercise",
  "number": "6.6.21",
  "title": "",
  "body": "    "
},
{
  "id": "p3-c1-summary-rq1",
  "level": "2",
  "url": "main-7-3-8-3.html#p3-c1-summary-rq1",
  "type": "Exercise",
  "number": "6.6.22",
  "title": "Classifying Practice.",
  "body": "Classifying Practice  Select each classification label that applies to the equation     Linear  Correct, each of the terms are linear.    Homogeneous  Correct, the constant term is zero.    Constant Coefficients  Correct, each coefficient is constant.    LHCC  Correct!   "
},
{
  "id": "p3-c1-summary-rq2",
  "level": "2",
  "url": "main-7-3-8-3.html#p3-c1-summary-rq2",
  "type": "Exercise",
  "number": "6.6.23",
  "title": "Classifying Practice.",
  "body": "Classifying Practice  Select each classification label that applies to the equation     Linear  Incorrect, is a nonlinear term.    Homogeneous  Technically, only linear equations can be labeled as homogeneous or not. Since the equation is nonlinear, we do not select it.    Constant Coefficients  Technically, only linear equations can be labeled as having constant coefficients or not. Since the equation is nonlinear, we do not select it.    LHCC  Incorrect.   "
},
{
  "id": "p3-c1-summary-rq3",
  "level": "2",
  "url": "main-7-3-8-3.html#p3-c1-summary-rq3",
  "type": "Exercise",
  "number": "6.6.24",
  "title": "Classifying Practice.",
  "body": "Classifying Practice  Select each classification label that applies to the equation     Linear  Correct, both terms are linear.    Homogeneous  Incorrect, the constant term, , is non-zero.    Constant Coefficients  Correct, each coefficient is constant.    LHCC  Incorrect.   "
},
{
  "id": "p3-c1-summary-rq4",
  "level": "2",
  "url": "main-7-3-8-3.html#p3-c1-summary-rq4",
  "type": "Exercise",
  "number": "6.6.25",
  "title": "Classifying Practice.",
  "body": "Classifying Practice  Select each classification label that applies to the equation     Linear  Correct, all terms are linear.    Homogeneous  Correct, the constant term is zero.    Constant Coefficients  Incorrect, the term coefficient, , is not constant.    LHCC  Incorrect.   "
},
{
  "id": "main-7-4-3",
  "level": "1",
  "url": "main-7-4-3.html",
  "type": "Section",
  "number": "7.1",
  "title": "Nonhomogeneous Equations",
  "body": "Nonhomogeneous Equations  In the previous chapter, we solved linear homogeneous constant coefficient equations of the form . Such equations are called homogeneous because of the zero on the right-hand side. In this chapter, we explore how to solve the more general case of nonhomogeneous equations, which include a non-zero function on the right-hand side, like so . For ease of discussion, will use the shorthand LNCC equations to refer to Linear Nonhomogeneous Constant Coefficient equations.  Recall, the solution of a homogeneous equation is made up of terms which have the unique property of being like terms with its derivatives. This is needed so the terms on the left-hand side can cancel out to zero.   Comparison of a homogeneous equation ( left ) and a nonhomogeneous equation ( right ). In both, the solutions must simplify in a specific way when substituted into the equation.           In contrast, nonhomogeneous equations must have solutions that make the left-hand side simplify to , rather than zero. For this to happen, the solution should be like in the sense that it shares terms with . For example, consider the equation . When the solution, , is plugged into the equation, the left-side terms must simplify to . So, must be like , but what is does like mean? As you will see in the sections that follow, it means has the form . For now, let's just verify that is the like solution that corresponds to this equation.   Verify that is a particular solution to the equation  .   To verify, we substitute into the equation:     Check-Point Questions   Which of the following statements best describes the difference between a homogeneous and a nonhomogeneous LNCC equation?  Which of the following statements best describes the difference between a homogeneous and a nonhomogeneous LNCC equation?    The homogeneous equation has a zero constant term, while the nonhomogeneous equation has a non-zero constant term.  Correct! Homogeneous equations have a zero constant term, while nonhomogeneous equations include a non-zero function like on the right-hand side.    In a nonhomogeneous equation, all terms contain a dependent variable, but in a homogeneous equation, only one term can contain a dependent variable.  Incorrect. This is not an accurate description of either equation type.    A nonhomogeneous equation has a higher order than a homogeneous equation.  Incorrect. The order of the equation does not determine whether it is homogeneous or nonhomogeneous.    Homogeneous equations are always linear, while nonhomogeneous equations are nonlinear.  Incorrect. Both homogeneous and nonhomogeneous equations can be linear.    Which equation is nonhomogeneous? Select the equation that is nonhomogeneous.    Incorrect. This is a homogeneous equation because the right-hand side is zero.     Correct! This equation is nonhomogeneous because it has a non-zero term, , on the right-hand side.     Incorrect. This is a homogeneous equation because the right-hand side is zero.     Incorrect. This is a homogeneous equation because the right-hand side is zero.     Select the solution to the equation ..  Select the solution to the equation  .    Incorrect, the particular solution is .     Correct!     Incorrect, the particular solution is .     Incorrect, the particular solution is .     A solution of the equation ..  A solution to the equation  should contain a polynomial of what degree?    Incorrect, review row 1 of the table above.     Incorrect, plugging (degree 1 polynomial) into the LHS would simplify to another degree 1 polynomial, but the RHS is a degree 3 polynomial.     Incorrect, plugging (degree 2 polynomial) into the LHS would simplify to another degree 2 polynomial, but the RHS is a degree 3 polynomial.     Correct! Plugging (degree 3 polynomial) into the LHS would simplify to a degree 3 polynomial, which is the degree of the polynomial on the RHS.     Incorrect, plugging (degree 4 polynomial) into the LHS would leave you with a term, not seen on the RHS.      "
},
{
  "id": "lhcc-vs-lcc-solution-type",
  "level": "2",
  "url": "main-7-4-3.html#lhcc-vs-lcc-solution-type",
  "type": "Figure",
  "number": "12",
  "title": "",
  "body": " Comparison of a homogeneous equation ( left ) and a nonhomogeneous equation ( right ). In both, the solutions must simplify in a specific way when substituted into the equation.          "
},
{
  "id": "main-7-4-3-6",
  "level": "2",
  "url": "main-7-4-3.html#main-7-4-3-6",
  "type": "Example",
  "number": "13",
  "title": "",
  "body": " Verify that is a particular solution to the equation  .   To verify, we substitute into the equation:    "
},
{
  "id": "p3-c2-s1-rq9",
  "level": "2",
  "url": "main-7-4-3-7.html#p3-c2-s1-rq9",
  "type": "Reading Question",
  "number": "7.1.1",
  "title": "<em class=\"emphasis\">Which of the following statements best describes the difference between a homogeneous and a nonhomogeneous LNCC equation?<\/em>",
  "body": " Which of the following statements best describes the difference between a homogeneous and a nonhomogeneous LNCC equation?  Which of the following statements best describes the difference between a homogeneous and a nonhomogeneous LNCC equation?    The homogeneous equation has a zero constant term, while the nonhomogeneous equation has a non-zero constant term.  Correct! Homogeneous equations have a zero constant term, while nonhomogeneous equations include a non-zero function like on the right-hand side.    In a nonhomogeneous equation, all terms contain a dependent variable, but in a homogeneous equation, only one term can contain a dependent variable.  Incorrect. This is not an accurate description of either equation type.    A nonhomogeneous equation has a higher order than a homogeneous equation.  Incorrect. The order of the equation does not determine whether it is homogeneous or nonhomogeneous.    Homogeneous equations are always linear, while nonhomogeneous equations are nonlinear.  Incorrect. Both homogeneous and nonhomogeneous equations can be linear.   "
},
{
  "id": "p3-c2-s1-rq1",
  "level": "2",
  "url": "main-7-4-3-7.html#p3-c2-s1-rq1",
  "type": "Reading Question",
  "number": "7.1.2",
  "title": "<em class=\"emphasis\">Which equation is nonhomogeneous?<\/em>",
  "body": "Which equation is nonhomogeneous? Select the equation that is nonhomogeneous.    Incorrect. This is a homogeneous equation because the right-hand side is zero.     Correct! This equation is nonhomogeneous because it has a non-zero term, , on the right-hand side.     Incorrect. This is a homogeneous equation because the right-hand side is zero.     Incorrect. This is a homogeneous equation because the right-hand side is zero.   "
},
{
  "id": "p3-c2-s1-rq2",
  "level": "2",
  "url": "main-7-4-3-7.html#p3-c2-s1-rq2",
  "type": "Reading Question",
  "number": "7.1.3",
  "title": "<em class=\"emphasis\">Select the solution to the equation<\/em>...",
  "body": " Select the solution to the equation ..  Select the solution to the equation  .    Incorrect, the particular solution is .     Correct!     Incorrect, the particular solution is .     Incorrect, the particular solution is .   "
},
{
  "id": "p3-c2-s1-rq3",
  "level": "2",
  "url": "main-7-4-3-7.html#p3-c2-s1-rq3",
  "type": "Reading Question",
  "number": "7.1.4",
  "title": "<em class=\"emphasis\">A solution of the equation<\/em>...",
  "body": " A solution of the equation ..  A solution to the equation  should contain a polynomial of what degree?    Incorrect, review row 1 of the table above.     Incorrect, plugging (degree 1 polynomial) into the LHS would simplify to another degree 1 polynomial, but the RHS is a degree 3 polynomial.     Incorrect, plugging (degree 2 polynomial) into the LHS would simplify to another degree 2 polynomial, but the RHS is a degree 3 polynomial.     Correct! Plugging (degree 3 polynomial) into the LHS would simplify to a degree 3 polynomial, which is the degree of the polynomial on the RHS.     Incorrect, plugging (degree 4 polynomial) into the LHS would leave you with a term, not seen on the RHS.   "
},
{
  "id": "main-7-4-4",
  "level": "1",
  "url": "main-7-4-4.html",
  "type": "Section",
  "number": "7.2",
  "title": "General Solutions",
  "body": "General Solutions  In any nonhomogeneous differential equation, the solution should, to some extent, resemble the right-hand side and we can logically guess what function the solution should look like. Yet, hidden within the overall solution could be terms that cancel out each other, affecting only the structure without contributing directly to the right-hand side.  To explore this, consider the following linear nonhomogeneous constant coefficient (LNCC) equation alongside its homogeneous counterpart: Let be the solution to the homogeneous equation , and be the solution to the nonhomogeneous equation , so we have Now, adding these equations together and rearranging the terms gives us This shows that not only is the solution to the nonhomogeneous equation , but so is . This happens because the terms in simplify to zero and the terms in simplify to .  From the previous section, we know is a solution to the LNCC equation and is the solution to the LHCC equation . Therefore, the combined solution is a solution to the LNCC equation where contains the terms that simplify to zero, whereas, contains the terms that simplify to when is substituted into .  This example leads us to the following concept for the general solution of a LNCC differential equation.   LNCC General Solution Parts  The linear nonhomogeneous constant coefficient (LNCC) equation has a solution with a homogeneous and particular part given by . where , found by solving the LHCC equation . Here, contains the terms of the solution that cancel out, whereas, contains the terms that simplify to when is substituted into .     Find the general solution to the differential equation  given that the the particular solution is known to be .   The general solution has the form: Since is given, we only need to solve the homogeneous equation: Using the characteristic equation: The homogeneous solution is: Therefore, the general solution is:     Before we can tackle solving these equations from scratch, we need a strategy for finding the particular solution , which will be covered in the upcoming sections.  Check-Point Questions  If and , what is the general solution to the LNCC equation?   .  Correct! The general solution combines the homogeneous and particular parts.    .  Incorrect. The signs in the particular solution are wrong.    .  Incorrect. This is only the homogeneous solution, not the complete general solution.    .  Incorrect. This is only the particular solution, not the full general solution.     What is the purpose of the particular solution in solving a non-homogeneous linear differential equation?    To represent the general solution of the homogeneous equation.  Incorrect. The general solution of the homogeneous equation is called the complementary solution, not the particular solution.    To determine the coefficients of the characteristic equation.  Incorrect. The characteristic equation is related to the complementary solution and does not involve the particular solution.    To account for the non-homogeneous term on the right-hand side of the equation.  Correct! The particular solution is chosen to match the form of and account for its influence in the equation.    To simplify the process of solving the differential equation.  Incorrect. The particular solution addresses the specific form of and is part of solving the non-homogeneous equation, but its purpose isn't simplification.    How is the homogeneous solution of an LNCC equation typically found?   By solving the characteristic equation associated with the homogeneous equation.  Correct! The characteristic equation provides the exponents for the homogeneous solution.    By integrating the equation twice.  Incorrect. Solving the characteristic equation is the standard method for homogeneous solutions.    By guessing the solution and checking.  Incorrect. The characteristic equation is the systematic way to find the homogeneous solution.    By using boundary conditions.  Incorrect. Boundary conditions are used to find specific constants, not to find .     Which of the following statements are true about the particular part of the solution, , of an LNCC equation?   Which of the following statements are true about the particular part of the solution, , of the LNCC equation     It is part of the general solution of .  Correct! The general solution is the sum of the homogeneous solution and the particular solution .    It contains the terms in the general solution that simplify to zero when you plug it into the left-side of .  Incorrect. is the solution to the homogeneous part, while is the particular solution.    It contains the terms in the general solution that account for .  Correct. The terms of simplify to when plugged into .    It is found by solving an LHCC equation.  Incorrect. is the solution to the homogeneous equation, and solves the nonhomogeneous equation.    It contains constants of integration.  Incorrect The homogeneous solution includes constants of integration that are determined by the initial conditions.    It resembles .  Correct! The particular solution looks like the non-zero right-hand side of the equation.     Which of the following statements are true about the homogeneous part of the solution, , of an LNCC equation?   Which of the following statements are true about the homogeneous part of the solution,, , of the LNCC equation     It is part of the general solution of  Correct! The general solution is the sum of the homogeneous solution and the particular solution .    It contains the terms in the general solution that simplify to zero when you plug it into the left-side of .  Correct! is the solution to the homogeneous part, while is the particular solution.    It contains the terms in the general solution that account for .  Incorrect. is related to the homogeneous equation, while the terms of simplify to when plugged into .    It is found by solving an LHCC equation.  Correct! is the solution to the homogeneous equation, and solves the nonhomogeneous equation.    It contains constants of integration.  Correct! The homogeneous solution includes constants of integration that are determined by the initial conditions.    It resembles .  Incorrect The particular solution accounts for the non-zero right-hand side of the equation.     "
},
{
  "id": "main-7-4-4-6",
  "level": "2",
  "url": "main-7-4-4.html#main-7-4-4-6",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "homogeneous particular "
},
{
  "id": "main-7-4-4-7",
  "level": "2",
  "url": "main-7-4-4.html#main-7-4-4-7",
  "type": "Example",
  "number": "14",
  "title": "",
  "body": " Find the general solution to the differential equation  given that the the particular solution is known to be .   The general solution has the form: Since is given, we only need to solve the homogeneous equation: Using the characteristic equation: The homogeneous solution is: Therefore, the general solution is:    "
},
{
  "id": "p3-c2-s2-rq1",
  "level": "2",
  "url": "main-7-4-4-9.html#p3-c2-s2-rq1",
  "type": "Reading Question",
  "number": "7.2.1",
  "title": "If <span class=\"process-math\">\\(y_h = c_1e^{-x} + c_2e^{2x}\\)<\/span> and <span class=\"process-math\">\\(y_p = 5x - 3\\text{,}\\)<\/span> what is the general solution to the LNCC equation?",
  "body": "If and , what is the general solution to the LNCC equation?   .  Correct! The general solution combines the homogeneous and particular parts.    .  Incorrect. The signs in the particular solution are wrong.    .  Incorrect. This is only the homogeneous solution, not the complete general solution.    .  Incorrect. This is only the particular solution, not the full general solution.   "
},
{
  "id": "p3-c2-s2-rq2",
  "level": "2",
  "url": "main-7-4-4-9.html#p3-c2-s2-rq2",
  "type": "Reading Question",
  "number": "7.2.2",
  "title": "<em class=\"emphasis\">What is the purpose of the particular solution <span class=\"process-math\">\\(y_p\\)<\/span> in solving a non-homogeneous linear differential equation?<\/em>",
  "body": " What is the purpose of the particular solution in solving a non-homogeneous linear differential equation?    To represent the general solution of the homogeneous equation.  Incorrect. The general solution of the homogeneous equation is called the complementary solution, not the particular solution.    To determine the coefficients of the characteristic equation.  Incorrect. The characteristic equation is related to the complementary solution and does not involve the particular solution.    To account for the non-homogeneous term on the right-hand side of the equation.  Correct! The particular solution is chosen to match the form of and account for its influence in the equation.    To simplify the process of solving the differential equation.  Incorrect. The particular solution addresses the specific form of and is part of solving the non-homogeneous equation, but its purpose isn't simplification.   "
},
{
  "id": "p3-c2-s2-rq3",
  "level": "2",
  "url": "main-7-4-4-9.html#p3-c2-s2-rq3",
  "type": "Reading Question",
  "number": "7.2.3",
  "title": "How is the homogeneous solution <span class=\"process-math\">\\(y_h\\)<\/span> of an LNCC equation typically found?",
  "body": "How is the homogeneous solution of an LNCC equation typically found?   By solving the characteristic equation associated with the homogeneous equation.  Correct! The characteristic equation provides the exponents for the homogeneous solution.    By integrating the equation twice.  Incorrect. Solving the characteristic equation is the standard method for homogeneous solutions.    By guessing the solution and checking.  Incorrect. The characteristic equation is the systematic way to find the homogeneous solution.    By using boundary conditions.  Incorrect. Boundary conditions are used to find specific constants, not to find .   "
},
{
  "id": "p3-c2-s2-rq4",
  "level": "2",
  "url": "main-7-4-4-9.html#p3-c2-s2-rq4",
  "type": "Reading Question",
  "number": "7.2.4",
  "title": "<em class=\"emphasis\">Which of the following statements are true about the particular part of the solution, <span class=\"process-math\">\\(y_p\\text{,}\\)<\/span> of an LNCC equation?<\/em>",
  "body": " Which of the following statements are true about the particular part of the solution, , of an LNCC equation?   Which of the following statements are true about the particular part of the solution, , of the LNCC equation     It is part of the general solution of .  Correct! The general solution is the sum of the homogeneous solution and the particular solution .    It contains the terms in the general solution that simplify to zero when you plug it into the left-side of .  Incorrect. is the solution to the homogeneous part, while is the particular solution.    It contains the terms in the general solution that account for .  Correct. The terms of simplify to when plugged into .    It is found by solving an LHCC equation.  Incorrect. is the solution to the homogeneous equation, and solves the nonhomogeneous equation.    It contains constants of integration.  Incorrect The homogeneous solution includes constants of integration that are determined by the initial conditions.    It resembles .  Correct! The particular solution looks like the non-zero right-hand side of the equation.   "
},
{
  "id": "p3-c2-s2-rq5",
  "level": "2",
  "url": "main-7-4-4-9.html#p3-c2-s2-rq5",
  "type": "Reading Question",
  "number": "7.2.5",
  "title": "<em class=\"emphasis\">Which of the following statements are true about the homogeneous part of the solution, <span class=\"process-math\">\\(y_h\\text{,}\\)<\/span> of an LNCC equation?<\/em>",
  "body": " Which of the following statements are true about the homogeneous part of the solution, , of an LNCC equation?   Which of the following statements are true about the homogeneous part of the solution,, , of the LNCC equation     It is part of the general solution of  Correct! The general solution is the sum of the homogeneous solution and the particular solution .    It contains the terms in the general solution that simplify to zero when you plug it into the left-side of .  Correct! is the solution to the homogeneous part, while is the particular solution.    It contains the terms in the general solution that account for .  Incorrect. is related to the homogeneous equation, while the terms of simplify to when plugged into .    It is found by solving an LHCC equation.  Correct! is the solution to the homogeneous equation, and solves the nonhomogeneous equation.    It contains constants of integration.  Correct! The homogeneous solution includes constants of integration that are determined by the initial conditions.    It resembles .  Incorrect The particular solution accounts for the non-zero right-hand side of the equation.   "
},
{
  "id": "main-7-4-5",
  "level": "1",
  "url": "main-7-4-5.html",
  "type": "Section",
  "number": "7.3",
  "title": "Selecting Particular Solutions",
  "body": "Selecting Particular Solutions  As discussed in the previous section, solving non-homogeneous linear differential equations involves finding a solution that satisfies the equation: . The challenge is that the terms on the left side need to combine in just the right way to match on the right. This means the form of the particular solution must resemble closely. When contains polynomial, exponential, or trigonometric (sine or cosine) terms, the particular solution should involve similar components.  The specific function that accounts for on the right side is known as the particular solution , denoted . The form of this solution depends on the type of function represents. To help select the correct form of , refer to , which outlines the most common types of and their corresponding forms.   Selecting the form of based on the form of .       Particular Solution Form,                                 In this table, the constants , , , , , and are assumed to be known, while , , , etc., need to be determined. We will explore how to determine these coefficients in the next section. For now, we are concerned with picking the correct form. Let's work through a few examples to solidify this process.   Find the form of for each of the equations below.       Since has the form , we set .            has the form , so .            has the form , so .           Since is of the form , we set .           Even though only has an term, we consider it to be of the form , where . Therefore, .      When is a sum of multiple functions, each part of the sum contributes to the form of the particular solution. In these situations, we construct by simply adding together the particular solutions corresponding to each term in . Let's look at an example to clarify this approach.   Given each of the constant terms, , of an LNCC equation below, find the form of you would use.       Since is the sum of an term and a constant term, we set .           Since is the sum of an term and a term, we set .           Since is the sum of a term and a term, we set .      When involves products of functions, constructing can become more involved. This is because multiplying terms may introduce extra coefficients that turn out to be unnecessary or redundant. In these cases, simplifying the solution to avoid duplication is essential. The following example illustrates this process.   Find the form of for the equation  .   Since is the product of a polynomial and an exponential, we initially set: . However, is redundant because if we multiply it onto the polynomial, it can be absorbed into and , as follows: . So, the form of simplifies to: .    Here are a few tips to help you avoid redundant coefficients when constructing the form of .  Tips to Avoid Redundant Coefficients    When is the product of an exponential and another function, avoid writing a coefficient for the exponential term.  For products of polynomials and sine\/cosine functions, use: where the polynomial form on each term uses different coefficients.  When working with sums, look for redundant overlapping terms.     Let's put these tips into practice with a couple of examples.   Find the form of for each of the equations below.   Since is the product of an exponential and a cosine function, we apply tip 1 and set: .     Since is the product of two exponential functions, we ignore one of the coefficients and set: . Note, is the same as , so we could also write .     Since is the product of a polynomial and a cosine function, we apply tip 2 and set: .     When setting up the particular solution, it's easy to introduce redundant terms if we aren't careful. For example, if we initially set: and you may notice that the underlined terms introduce unnecessary repetition. By grouping like terms, we can simplify this to: .    Check-Point Questions  Which of the following functions would be an appropriate form for the particular solution if ?    Correct! The form of the particular solution for a quadratic polynomial should match the degree of the polynomial.     Incorrect. This form would be appropriate if was an exponential function, not a polynomial.     Incorrect. This form would be appropriate if was a trigonometric function.     Incorrect. This form would be too complex, as the given function is quadratic, not cubic.    If , what should be the form of the particular solution ?    Correct! The particular solution should account for both the exponential and trigonometric terms in .     Incorrect. The second term should include sine and cosine, not another exponential.     Incorrect. This form only accounts for the trigonometric part of , not the exponential.     Incorrect. This form is not appropriate, as the terms in are separate, not a product of exponential and trigonometric terms.    Which of the following would be the correct form for if ?    Correct! The particular solution should combine the polynomial with the exponential function in the same way as .     Incorrect. This form would be appropriate for an exponential function, but it doesn't account for the polynomial .     Incorrect. This form only accounts for the polynomial part of , not the exponential part.     Incorrect. The extra coefficient is unnecessary, as it can be absorbed into the constants and .     Match the form   Suppose we want the form of particular solution, , for the equation . On the left are possible functions. Drag each of these functions to the correct form of that you would use.                                             Match the form   Suppose we want the form of particular solution, , for the equation . Drag the form of that you would use for each function, .                                                                                         "
},
{
  "id": "main-7-4-5-3",
  "level": "2",
  "url": "main-7-4-5.html#main-7-4-5-3",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "particular solution "
},
{
  "id": "yp-table",
  "level": "2",
  "url": "main-7-4-5.html#yp-table",
  "type": "Table",
  "number": "15",
  "title": "Selecting the form of <span class=\"process-math\">\\(y_p\\)<\/span> based on the form of <span class=\"process-math\">\\(f(x)\\text{.}\\)<\/span>",
  "body": " Selecting the form of based on the form of .       Particular Solution Form,                                "
},
{
  "id": "main-7-4-5-6",
  "level": "2",
  "url": "main-7-4-5.html#main-7-4-5-6",
  "type": "Example",
  "number": "16",
  "title": "",
  "body": " Find the form of for each of the equations below.       Since has the form , we set .            has the form , so .            has the form , so .           Since is of the form , we set .           Even though only has an term, we consider it to be of the form , where . Therefore, .     "
},
{
  "id": "main-7-4-5-8",
  "level": "2",
  "url": "main-7-4-5.html#main-7-4-5-8",
  "type": "Example",
  "number": "17",
  "title": "",
  "body": " Given each of the constant terms, , of an LNCC equation below, find the form of you would use.       Since is the sum of an term and a constant term, we set .           Since is the sum of an term and a term, we set .           Since is the sum of a term and a term, we set .     "
},
{
  "id": "main-7-4-5-10",
  "level": "2",
  "url": "main-7-4-5.html#main-7-4-5-10",
  "type": "Example",
  "number": "18",
  "title": "",
  "body": " Find the form of for the equation  .   Since is the product of a polynomial and an exponential, we initially set: . However, is redundant because if we multiply it onto the polynomial, it can be absorbed into and , as follows: . So, the form of simplifies to: .   "
},
{
  "id": "main-7-4-5-14",
  "level": "2",
  "url": "main-7-4-5.html#main-7-4-5-14",
  "type": "Example",
  "number": "19",
  "title": "",
  "body": " Find the form of for each of the equations below.   Since is the product of an exponential and a cosine function, we apply tip 1 and set: .     Since is the product of two exponential functions, we ignore one of the coefficients and set: . Note, is the same as , so we could also write .     Since is the product of a polynomial and a cosine function, we apply tip 2 and set: .     When setting up the particular solution, it's easy to introduce redundant terms if we aren't careful. For example, if we initially set: and you may notice that the underlined terms introduce unnecessary repetition. By grouping like terms, we can simplify this to: .   "
},
{
  "id": "p3-c2-s3-rq1",
  "level": "2",
  "url": "main-7-4-5-15.html#p3-c2-s3-rq1",
  "type": "Reading Question",
  "number": "7.3.1",
  "title": "<em class=\"emphasis\">Which of the following functions would be an appropriate form for the particular solution <span class=\"process-math\">\\(y_p\\)<\/span> if <span class=\"process-math\">\\(f(x) = 5x^2 + 3x + 1\\text{?}\\)<\/span><\/em>",
  "body": "Which of the following functions would be an appropriate form for the particular solution if ?    Correct! The form of the particular solution for a quadratic polynomial should match the degree of the polynomial.     Incorrect. This form would be appropriate if was an exponential function, not a polynomial.     Incorrect. This form would be appropriate if was a trigonometric function.     Incorrect. This form would be too complex, as the given function is quadratic, not cubic.   "
},
{
  "id": "p3-c2-s3-rq2",
  "level": "2",
  "url": "main-7-4-5-15.html#p3-c2-s3-rq2",
  "type": "Reading Question",
  "number": "7.3.2",
  "title": "<em class=\"emphasis\">If <span class=\"process-math\">\\(f(x) = 3e^{4x} + 2\\sin(3x)\\text{,}\\)<\/span> what should be the form of the particular solution <span class=\"process-math\">\\(y_p\\text{?}\\)<\/span><\/em>",
  "body": "If , what should be the form of the particular solution ?    Correct! The particular solution should account for both the exponential and trigonometric terms in .     Incorrect. The second term should include sine and cosine, not another exponential.     Incorrect. This form only accounts for the trigonometric part of , not the exponential.     Incorrect. This form is not appropriate, as the terms in are separate, not a product of exponential and trigonometric terms.   "
},
{
  "id": "p3-c2-s3-rq3",
  "level": "2",
  "url": "main-7-4-5-15.html#p3-c2-s3-rq3",
  "type": "Reading Question",
  "number": "7.3.3",
  "title": "<em class=\"emphasis\">Which of the following would be the correct form for <span class=\"process-math\">\\(y_p\\)<\/span> if <span class=\"process-math\">\\(f(x) = x^2 e^{x}\\text{?}\\)<\/span><\/em>",
  "body": "Which of the following would be the correct form for if ?    Correct! The particular solution should combine the polynomial with the exponential function in the same way as .     Incorrect. This form would be appropriate for an exponential function, but it doesn't account for the polynomial .     Incorrect. This form only accounts for the polynomial part of , not the exponential part.     Incorrect. The extra coefficient is unnecessary, as it can be absorbed into the constants and .   "
},
{
  "id": "p3-c2-s3-rq4",
  "level": "2",
  "url": "main-7-4-5-15.html#p3-c2-s3-rq4",
  "type": "Reading Question",
  "number": "7.3.4",
  "title": "<em class=\"emphasis\">Match the <span class=\"process-math\">\\(y_p\\)<\/span> form<\/em>.",
  "body": " Match the form   Suppose we want the form of particular solution, , for the equation . On the left are possible functions. Drag each of these functions to the correct form of that you would use.                                           "
},
{
  "id": "p3-c2-s3-rq5",
  "level": "2",
  "url": "main-7-4-5-15.html#p3-c2-s3-rq5",
  "type": "Reading Question",
  "number": "7.3.5",
  "title": "<em class=\"emphasis\">Match the <span class=\"process-math\">\\(y_p\\)<\/span> form<\/em>.",
  "body": " Match the form   Suppose we want the form of particular solution, , for the equation . Drag the form of that you would use for each function, .                                                                                       "
},
{
  "id": "main-7-4-6",
  "level": "1",
  "url": "main-7-4-6.html",
  "type": "Section",
  "number": "7.4",
  "title": "Adjusting Particular Solutions",
  "body": "Adjusting Particular Solutions  As discussed in the previous sections, the general solution to a linear nonhomogeneous constant coefficient (LNCC) equation is the sum of the homogeneous solution, , and the particular solution, . This relationship is expressed as: . However, it is possible for the particular solution to contain terms that overlap with those in the homogeneous solution. When this occurs, parts of the particular solution can be absorbed into the homogeneous solution, leading to a solution that does not accurately match the nonhomogeneous term on the right-hand side of the equation. This section highlights this issue and provides a strategy to resolve it.  To illustrate this, consider the LNCC equation: . Here, the homogeneous and particular solutions are: . The problem arises when you observe that in is similar to in , causing the general solution to become: As a result, the particular solution effectively vanishes into the homogeneous solution, leading to a solution that fails to reflect the nonhomogeneous term .  To address this, we adjust the form of by multiplying it by until there are no overlapping terms between and . In this example, multiplying by once is sufficient to make it independent of . The adjusted form of is:   Adjusting Particular Solutions   When the particular solution, , contains terms in common with the homogeneous solution, , adjust the form of by repeatedly multiplying the overlapping terms by until and share no terms in common.    Let's explore this adjustment process through a few examples.   Find the adjusted form of the particular solution, , for each of the following LNCC equations.    .  First, determine by solving the characteristic equation: , which yields a repeated root , giving the homogeneous solution: .  Since the nonhomogeneous term is , the initial guess for the particular solution is: . However, this form overlaps with in . To resolve this, multiply by : , which now overlaps with . Multiplying by again gives: , which has no terms in common with . This is the correct form to use for .       .  First, solve the characteristic equation: , which yields the roots , , and . This results in the homogeneous solution: .  For the nonhomogeneous term , the initial guess for is: . Since and overlap with terms in , multiply these terms by : . The terms in and are now independent, making this the correct form for .       .  Begin by solving the characteristic equation: , which yields the roots and , leading to the homogeneous solution: .  Since the nonhomogeneous term is , the initial guess for is: . This form is not present in , so no further adjustment is needed. To determine the coefficients and , substitute back into the differential equation and solve for these values.       .  First, determine by solving the characteristic equation: , which yields a repeated root , giving the homogeneous solution: .  Since the nonhomogeneous term is , the initial guess for the particular solution is: . However, notice that and are already present in . To avoid overlap, multiply by , giving: . This form is now independent of , ensuring that there are no overlapping terms.  To determine the coefficients , , and , substitute back into the original differential equation and solve for these values.       This adjustment process ensures that and are independent, allowing the general solution to properly reflect the nonhomogeneous function on the right-hand side of the differential equation.  Check-Point Questions   Which of the following is the correct particular solution form for the differential equation ?  Which of the following is the correct particular solution form for the differential equation ?      Correct! The right-hand side is linear, so the particular solution takes the form .       Incorrect. The right-hand side of the equation is a polynomial, not exponential.       Incorrect. This form would be used if the non-homogeneous term were trigonometric.       Incorrect. This form would be used if the right-hand side was exponential.     What should be done when the particular part, , overlaps with the homogeneous part, , of a solution to an LNCC equation?  What should be done when the particular part, , overlaps with the homogeneous part, , of a solution to an LNCC equation?   The particular solution, , should be left as is.  Incorrect. The cannot have terms in common with .    The overlapping terms in should be removed.  Incorrect. No terms in should ever be removed.    The particular solution needs to be multiplied by until there are no terms in common with .  Correct!    should be multiplied by to match the particular solution.  Incorrect. The particular solution should be adjusted, not the homogeneous solution.     What is the adjusted form of for the LNCC equation ?  What is the adjusted form of for the LNCC equation ?     Incorrect. The nonhomogeneous term is , so the initial guess for should be . However, this form overlaps with . To resolve this, multiply by until there are no terms in common with .       Correct! The adjusted form of is .       Incorrect.       Incorrect.      If the nonhomogeneous term in an LNCC equation is and , what should be the adjusted form of ?   If the nonhomogeneous term in an LNCC equation is and , what should be the adjusted form of ?      Incorrect. The form of should be adjusted until there are no terms in common with .       Correct! The adjusted form of is .       Incorrect. The form of should be adjusted until there are no terms in common with .       Incorrect. The form of should be adjusted until there are no terms in common with .      Why is it necessary to multiply the initial form of by in some cases?   Why is it necessary to multiply the initial form of by in some cases?    To ensure that does not share terms with , making them independent.   Correct! Multiplying by ensures that and have no terms in common.     To make smaller than .   Incorrect. The size of is not the issue.     To change the characteristic equation.   Incorrect. Multiplying by does not affect the characteristic equation.     To remove the nonhomogeneous term from the equation.   Incorrect. The nonhomogeneous term should remain in the equation.      "
},
{
  "id": "main-7-4-6-5",
  "level": "2",
  "url": "main-7-4-6.html#main-7-4-6-5",
  "type": "Concept",
  "number": "20",
  "title": "Adjusting Particular Solutions.",
  "body": "Adjusting Particular Solutions   When the particular solution, , contains terms in common with the homogeneous solution, , adjust the form of by repeatedly multiplying the overlapping terms by until and share no terms in common.   "
},
{
  "id": "main-7-4-6-7",
  "level": "2",
  "url": "main-7-4-6.html#main-7-4-6-7",
  "type": "Example",
  "number": "21",
  "title": "",
  "body": " Find the adjusted form of the particular solution, , for each of the following LNCC equations.    .  First, determine by solving the characteristic equation: , which yields a repeated root , giving the homogeneous solution: .  Since the nonhomogeneous term is , the initial guess for the particular solution is: . However, this form overlaps with in . To resolve this, multiply by : , which now overlaps with . Multiplying by again gives: , which has no terms in common with . This is the correct form to use for .       .  First, solve the characteristic equation: , which yields the roots , , and . This results in the homogeneous solution: .  For the nonhomogeneous term , the initial guess for is: . Since and overlap with terms in , multiply these terms by : . The terms in and are now independent, making this the correct form for .       .  Begin by solving the characteristic equation: , which yields the roots and , leading to the homogeneous solution: .  Since the nonhomogeneous term is , the initial guess for is: . This form is not present in , so no further adjustment is needed. To determine the coefficients and , substitute back into the differential equation and solve for these values.       .  First, determine by solving the characteristic equation: , which yields a repeated root , giving the homogeneous solution: .  Since the nonhomogeneous term is , the initial guess for the particular solution is: . However, notice that and are already present in . To avoid overlap, multiply by , giving: . This form is now independent of , ensuring that there are no overlapping terms.  To determine the coefficients , , and , substitute back into the original differential equation and solve for these values.      "
},
{
  "id": "p3-c2-s4-rq1",
  "level": "2",
  "url": "main-7-4-6-9.html#p3-c2-s4-rq1",
  "type": "Reading Question",
  "number": "7.4.1",
  "title": "<em class=\"emphasis\">Which of the following is the correct particular solution form for the differential equation <span class=\"process-math\">\\(y'' - 4y' + 3y = 9x \\text{?}\\)<\/span><\/em>",
  "body": " Which of the following is the correct particular solution form for the differential equation ?  Which of the following is the correct particular solution form for the differential equation ?      Correct! The right-hand side is linear, so the particular solution takes the form .       Incorrect. The right-hand side of the equation is a polynomial, not exponential.       Incorrect. This form would be used if the non-homogeneous term were trigonometric.       Incorrect. This form would be used if the right-hand side was exponential.   "
},
{
  "id": "p3-c2-s4-rq2",
  "level": "2",
  "url": "main-7-4-6-9.html#p3-c2-s4-rq2",
  "type": "Reading Question",
  "number": "7.4.2",
  "title": "<em class=\"emphasis\">What should be done when the particular part, <span class=\"process-math\">\\(y_p\\text{,}\\)<\/span> overlaps with the homogeneous part, <span class=\"process-math\">\\(y_h\\text{,}\\)<\/span> of a solution to an LNCC equation?<\/em>",
  "body": " What should be done when the particular part, , overlaps with the homogeneous part, , of a solution to an LNCC equation?  What should be done when the particular part, , overlaps with the homogeneous part, , of a solution to an LNCC equation?   The particular solution, , should be left as is.  Incorrect. The cannot have terms in common with .    The overlapping terms in should be removed.  Incorrect. No terms in should ever be removed.    The particular solution needs to be multiplied by until there are no terms in common with .  Correct!    should be multiplied by to match the particular solution.  Incorrect. The particular solution should be adjusted, not the homogeneous solution.   "
},
{
  "id": "p3-c2-s4-rq3",
  "level": "2",
  "url": "main-7-4-6-9.html#p3-c2-s4-rq3",
  "type": "Reading Question",
  "number": "7.4.3",
  "title": "<em class=\"emphasis\">What is the adjusted form of <span class=\"process-math\">\\(y_p\\)<\/span> for the LNCC equation<div class=\"displaymath process-math\">\n\\begin{equation*}\ny'' - 4y' + 3y = e^{3x}\\text{?}\n\\end{equation*}\n<\/div><\/em>",
  "body": " What is the adjusted form of for the LNCC equation ?  What is the adjusted form of for the LNCC equation ?     Incorrect. The nonhomogeneous term is , so the initial guess for should be . However, this form overlaps with . To resolve this, multiply by until there are no terms in common with .       Correct! The adjusted form of is .       Incorrect.       Incorrect.    "
},
{
  "id": "p3-c2-s4-rq4",
  "level": "2",
  "url": "main-7-4-6-9.html#p3-c2-s4-rq4",
  "type": "Reading Question",
  "number": "7.4.4",
  "title": "<em class=\"emphasis\">If the nonhomogeneous term in an LNCC equation is <span class=\"process-math\">\\(x^2 e^{3x}\\)<\/span> and <span class=\"process-math\">\\(y_h = (c_1 + c_2 x) e^{3x}\\text{,}\\)<\/span> what should be the adjusted form of <span class=\"process-math\">\\(y_p\\text{?}\\)<\/span><\/em>",
  "body": " If the nonhomogeneous term in an LNCC equation is and , what should be the adjusted form of ?   If the nonhomogeneous term in an LNCC equation is and , what should be the adjusted form of ?      Incorrect. The form of should be adjusted until there are no terms in common with .       Correct! The adjusted form of is .       Incorrect. The form of should be adjusted until there are no terms in common with .       Incorrect. The form of should be adjusted until there are no terms in common with .    "
},
{
  "id": "p3-c2-s4-rq5",
  "level": "2",
  "url": "main-7-4-6-9.html#p3-c2-s4-rq5",
  "type": "Reading Question",
  "number": "7.4.5",
  "title": "<em class=\"emphasis\">Why is it necessary to multiply the initial form of <span class=\"process-math\">\\(y_p\\)<\/span> by <span class=\"process-math\">\\(x\\)<\/span> in some cases?<\/em>",
  "body": " Why is it necessary to multiply the initial form of by in some cases?   Why is it necessary to multiply the initial form of by in some cases?    To ensure that does not share terms with , making them independent.   Correct! Multiplying by ensures that and have no terms in common.     To make smaller than .   Incorrect. The size of is not the issue.     To change the characteristic equation.   Incorrect. Multiplying by does not affect the characteristic equation.     To remove the nonhomogeneous term from the equation.   Incorrect. The nonhomogeneous term should remain in the equation.    "
},
{
  "id": "main-7-4-7",
  "level": "1",
  "url": "main-7-4-7.html",
  "type": "Section",
  "number": "7.5",
  "title": "Method of Undetermined Coefficients",
  "body": "Method of Undetermined Coefficients  When solving a non-homogeneous linear differential equation, selecting the correct form for the particular solution, , is just the beginning. The next step is determining the values of its unknown coefficients, such as and . In this section, we'll explore how to compute these coefficients by substituting the guessed particular solution into the original equation.  Let's revisit the example we discussed earlier. Consider the differential equation: . We guessed that the particular solution would be linear, so we set .  Our goal now is to determine the values of and . To do this, we substitute into the original differential equation. Here's how it works: Substituting , , and into results in: By matching the coefficients of like terms on opposite sides of the equation,   we solve: Thus, the particular solution is: .  Regardless of 's form, the process of finding the coefficients remains consistent:  Substitute the chosen into the differential equation.  Collect and match coefficients of like terms on both sides of the equation.  Solve the resulting system to find .    This is why the method is called the \"method of undetermined coefficients.\" and the complete process is summarized as follows.  Undetermined Coefficients  The linear nonhomogeneous equation with constant coefficients, has a general solution given by where is the solution to the homogeneous equation and is the particular solution found through the following steps...   Select Initial   Select the initial form of that generalizes .   Adjust   If shares terms with , repeatedly multiply the terms by until there are no terms in common.   Find the Coefficients of   Plug into and match terms on each side to solve for the unknown coefficients of .     Now for a few examples to illustrate the complete application of the nndetermined coefficients method.   Find the general solution to each LNCC equation using the method of undetermined coefficients.  .  Following the method of , we first find as . Next, we select the initial form of as and adjust , if necessary. A quick check shows that has no terms in common with .  Finally, we find the coefficients of . To do this, let's compute , , plug these into the equation, and collect the , , and constant terms as follows:  . Matching the underlined coefficients leads to the following system of equations and solution for the coefficients , , and :                The general solution is then .     .  Following the method of , we find as and then find through the steps that follow.   . The initial form of is ,   . Notice that has an term, which overlaps with . Therefore, we need to adjust by multiplying the term by , . Now that and are independent, we can proceed to find the coefficients , , and .   . Before plugging in , let's find and : . Now, substituting these into the equation and collecting like terms, to get , which leads to the following equations for , , and :                Finally, the general solution is .      Check-Point Questions   After substituting into the equation , you find the system of equations..  After substituting into the equation , you find the system of equations: and . What are the values of and ?      Correct! Solving the system yields and .       Incorrect. Double-check your algebra when solving the system of equations.       Incorrect. While is correct, you need to solve for as well.       Incorrect. , not 2.     Which of the following is NOT a step in finding the coefficients of the particular solution?   Which of the following is NOT a step in finding the coefficients of the particular solution?     Plugging into the differential equation.   Incorrect. This is the first step in determining the coefficients.     Applying the initial conditions.   Correct! The initial conditions are used to solve for the unknown constants in the general solution, not the particular solution.     Collecting and matching like terms.   Incorrect. This is a crucial step for finding the values of and .     Solving the resulting system of equations.   Incorrect. This is the final step in finding the coefficients.     Consider the equation..  Consider the equation . If the particular solution is assumed to be , which of the following represents the correct coefficient-matching equations when substituting into the differential equation?       Incorrect. Remember to match coefficients of like terms separately (i.e., coefficients of and constant terms).         Correct! Matching coefficients of gives , and matching constant terms gives .         Incorrect. Re-check the coefficients and ensure you match the terms correctly.         Incorrect. Verify which terms correspond to coefficients of and the constant terms.      Why do we adjust the form of by multiplying terms by when there is overlap with ?   Why do we adjust the form of by multiplying terms by when there is overlap with ?    To make the computation of derivatives easier.   Incorrect. The adjustment is not made for the ease of differentiation but to ensure the independence of terms.     To ensure that and remain independent.   Correct! Multiplying by ensures that the particular solution does not overlap with the homogeneous solution.     To match the degree of the polynomial in .   Incorrect. While the degree of is related to , the adjustment addresses overlap with .     To simplify the resulting system of equations.   Incorrect. The adjustment is made to maintain independence between and , not for simplification purposes.      Suppose . Which of the following is the correct initial guess for ?  Suppose . Which of the following is the correct selection for ?     Incorrect. Remember to consider whether overlaps with any terms in .       Correct! Since is a term in , we need to multiply the particular solution by to ensure independence.       Incorrect. This form is more suited for a polynomial right-hand side like .       Incorrect. A constant form of would only be appropriate if were a constant.      What are the main steps for finding using the method of undetermined coefficients?   What are the main steps for finding using the method of undetermined coefficients?    Select the particular solution, integrate it, and solve for coefficients.   Incorrect. Integration is not a part of the method of undetermined coefficients.     Select the particular solution, adjust it if necessary, and find its coefficients.   Correct! The process involves making an educated guess, substituting it, and solving for unknown coefficients.     Select the homogeneous solution, adjust for , and differentiate.   Incorrect. The focus is on selecting and solving for , not guessing the homogeneous solution.     Choose , integrate the result, and verify the solution.   Incorrect. Integration is not a step in this method; it's about solving for coefficients of .      "
},
{
  "id": "uc-method",
  "level": "2",
  "url": "main-7-4-7.html#uc-method",
  "type": "Method",
  "number": "5",
  "title": "Undetermined Coefficients.",
  "body": "Undetermined Coefficients  The linear nonhomogeneous equation with constant coefficients, has a general solution given by where is the solution to the homogeneous equation and is the particular solution found through the following steps...   Select Initial   Select the initial form of that generalizes .   Adjust   If shares terms with , repeatedly multiply the terms by until there are no terms in common.   Find the Coefficients of   Plug into and match terms on each side to solve for the unknown coefficients of .    "
},
{
  "id": "main-7-4-7-9",
  "level": "2",
  "url": "main-7-4-7.html#main-7-4-7-9",
  "type": "Example",
  "number": "22",
  "title": "",
  "body": " Find the general solution to each LNCC equation using the method of undetermined coefficients.  .  Following the method of , we first find as . Next, we select the initial form of as and adjust , if necessary. A quick check shows that has no terms in common with .  Finally, we find the coefficients of . To do this, let's compute , , plug these into the equation, and collect the , , and constant terms as follows:  . Matching the underlined coefficients leads to the following system of equations and solution for the coefficients , , and :                The general solution is then .     .  Following the method of , we find as and then find through the steps that follow.   . The initial form of is ,   . Notice that has an term, which overlaps with . Therefore, we need to adjust by multiplying the term by , . Now that and are independent, we can proceed to find the coefficients , , and .   . Before plugging in , let's find and : . Now, substituting these into the equation and collecting like terms, to get , which leads to the following equations for , , and :                Finally, the general solution is .    "
},
{
  "id": "p3-c2-s5-rq3",
  "level": "2",
  "url": "main-7-4-7-10.html#p3-c2-s5-rq3",
  "type": "Reading Question",
  "number": "7.5.1",
  "title": "<em class=\"emphasis\">After substituting <span class=\"process-math\">\\(y_p = Ax + B \\)<\/span> into the equation <span class=\"process-math\">\\(y'' - 4y' + 3y = 9x \\text{,}\\)<\/span> you find the system of equations..<\/em>.",
  "body": " After substituting into the equation , you find the system of equations..  After substituting into the equation , you find the system of equations: and . What are the values of and ?      Correct! Solving the system yields and .       Incorrect. Double-check your algebra when solving the system of equations.       Incorrect. While is correct, you need to solve for as well.       Incorrect. , not 2.   "
},
{
  "id": "p3-c2-s5-rq4",
  "level": "2",
  "url": "main-7-4-7-10.html#p3-c2-s5-rq4",
  "type": "Reading Question",
  "number": "7.5.2",
  "title": "<em class=\"emphasis\">Which of the following is NOT a step in finding the coefficients of the particular solution?<\/em>",
  "body": " Which of the following is NOT a step in finding the coefficients of the particular solution?   Which of the following is NOT a step in finding the coefficients of the particular solution?     Plugging into the differential equation.   Incorrect. This is the first step in determining the coefficients.     Applying the initial conditions.   Correct! The initial conditions are used to solve for the unknown constants in the general solution, not the particular solution.     Collecting and matching like terms.   Incorrect. This is a crucial step for finding the values of and .     Solving the resulting system of equations.   Incorrect. This is the final step in finding the coefficients.   "
},
{
  "id": "p3-c2-s5-rq5",
  "level": "2",
  "url": "main-7-4-7-10.html#p3-c2-s5-rq5",
  "type": "Reading Question",
  "number": "7.5.3",
  "title": "<em class=\"emphasis\">Consider the equation..<\/em>.",
  "body": " Consider the equation..  Consider the equation . If the particular solution is assumed to be , which of the following represents the correct coefficient-matching equations when substituting into the differential equation?       Incorrect. Remember to match coefficients of like terms separately (i.e., coefficients of and constant terms).         Correct! Matching coefficients of gives , and matching constant terms gives .         Incorrect. Re-check the coefficients and ensure you match the terms correctly.         Incorrect. Verify which terms correspond to coefficients of and the constant terms.    "
},
{
  "id": "p3-c2-s5-rq6",
  "level": "2",
  "url": "main-7-4-7-10.html#p3-c2-s5-rq6",
  "type": "Reading Question",
  "number": "7.5.4",
  "title": "<em class=\"emphasis\">Why do we adjust the form of <span class=\"process-math\">\\(y_p\\)<\/span> by multiplying terms by <span class=\"process-math\">\\(x\\)<\/span> when there is overlap with <span class=\"process-math\">\\(y_h\\text{?}\\)<\/span><\/em>",
  "body": " Why do we adjust the form of by multiplying terms by when there is overlap with ?   Why do we adjust the form of by multiplying terms by when there is overlap with ?    To make the computation of derivatives easier.   Incorrect. The adjustment is not made for the ease of differentiation but to ensure the independence of terms.     To ensure that and remain independent.   Correct! Multiplying by ensures that the particular solution does not overlap with the homogeneous solution.     To match the degree of the polynomial in .   Incorrect. While the degree of is related to , the adjustment addresses overlap with .     To simplify the resulting system of equations.   Incorrect. The adjustment is made to maintain independence between and , not for simplification purposes.    "
},
{
  "id": "p3-c2-s5-rq7",
  "level": "2",
  "url": "main-7-4-7-10.html#p3-c2-s5-rq7",
  "type": "Reading Question",
  "number": "7.5.5",
  "title": "<em class=\"emphasis\">Suppose<div class=\"displaymath process-math\">\n\\begin{equation*}\ny'' - 4y' + 3y = 6e^x\\text{.}\n\\end{equation*}\n<\/div>Which of the following is the correct initial guess for <span class=\"process-math\">\\(y_p\\text{?}\\)<\/span><\/em>",
  "body": " Suppose . Which of the following is the correct initial guess for ?  Suppose . Which of the following is the correct selection for ?     Incorrect. Remember to consider whether overlaps with any terms in .       Correct! Since is a term in , we need to multiply the particular solution by to ensure independence.       Incorrect. This form is more suited for a polynomial right-hand side like .       Incorrect. A constant form of would only be appropriate if were a constant.    "
},
{
  "id": "p3-c2-s5-rq8",
  "level": "2",
  "url": "main-7-4-7-10.html#p3-c2-s5-rq8",
  "type": "Reading Question",
  "number": "7.5.6",
  "title": "<em class=\"emphasis\">What are the main steps for finding <span class=\"process-math\">\\(y_p\\)<\/span> using the method of undetermined coefficients?<\/em>",
  "body": " What are the main steps for finding using the method of undetermined coefficients?   What are the main steps for finding using the method of undetermined coefficients?    Select the particular solution, integrate it, and solve for coefficients.   Incorrect. Integration is not a part of the method of undetermined coefficients.     Select the particular solution, adjust it if necessary, and find its coefficients.   Correct! The process involves making an educated guess, substituting it, and solving for unknown coefficients.     Select the homogeneous solution, adjust for , and differentiate.   Incorrect. The focus is on selecting and solving for , not guessing the homogeneous solution.     Choose , integrate the result, and verify the solution.   Incorrect. Integration is not a step in this method; it's about solving for coefficients of .    "
},
{
  "id": "main-7-4-8",
  "level": "1",
  "url": "main-7-4-8.html",
  "type": "Section",
  "number": "7.6",
  "title": "Summary &amp; Exercises",
  "body": "Summary & Exercises    Summary of the Key Ideas    The method of undetermined coefficients is used to solve non-homogeneous linear differential equations.  The general solution to a non-homogeneous equation is the sum of the general solution to the corresponding homogeneous equation and a particular solution.  The method involves guessing the form of the particular solution based on the form of the non-homogeneous term and solving for the coefficients.  The method is applicable when the non-homogeneous term can be expressed as a linear combination of known functions.        Describe the difference between a homogeneous and a non-homogeneous differential equation. A differential equation is termed \"homogeneous\" if all the terms of the equation are either derivatives of the unknown function or multiples of the unknown function itself, and the equation can be set equal to zero. In other words, there are no terms in the equation that are solely functions of the independent variable or constants. For example, the equation is homogeneous because all its terms involve or its derivatives and the equation is set equal to zero. A differential equation is termed \"non-homogeneous\" if it contains terms that are solely functions of the independent variable or constants which are not multiples of the unknown function or its derivatives. For example, the equation is non-homogeneous because of the term on the right side, which is not a derivative or multiple of . The distinction between homogeneous and non-homogeneous differential equations is crucial as the methods used to solve them can differ.  Solve the IVP  Consider the initial-value problem, and answer the following questions.  Find the homogeneous part, , of the general solution of .    Select the initial form of the particular solution, , by looking at the non-homogenous term of equation .   We look at the non-homogenous terms in the DE. In this case, the non-homogeneous part of the DE is Based on this function, we would assume that the particular solutio has a similar form, so we would guess We refer back to th we found previously and we make sure there are no terms like this that are i . In this case, our choice o is not a repeat of terms i , so we are satisfied with our choice o   Substitute into to find the coefficient, . Then give .   We need to substitute into the original DE, so we need to find the first and second derivatives. No we sub in to the original DE and solve for the coefficien . Hence, the particular solution is   Form the general solution    We simply ad an to form the general solution.   Use the initial conditions to find the particular solution to this IVP.      Find the Initial Form of .  Find the initial Form of . for each differential equation below. DO NOT determine the values of the coefficients etc.       Before we can begin, we should confirm that the DE is linear,  the DE has constant coefficients. Now we know that it would be appropriate to solve the DE using the method of undetermined coefficients.\\\\ Even though we are asked only about the form o we must first fin to confirm there are no repeats. So we solve the associated homogeneous DE (by omitting terms that do not contain the dependent variable). We write the characteristic equation and then solve it. Since an are distinct, real roots, the complementary solution is Now we bring our attention to the non-homogeneous parts of the DE, Since it consists of a 2nd degree polynomial and a trig function, we would want to mirror that i as follows. We look at the terms o and see tha doesn't contain any terms that are repeats of terms i so we will not need to adjust our guess fo       Before we can begin, we should confirm that the DE is linear,  the DE has constant coefficients. Now we know that it would be appropriate to solve the DE using the method of undetermined coefficients.\\\\ Even though we are asked only about the form o we must first fin to confirm there are no repeats. So we solve the associated homogeneous DE (by omitting terms that do not contain the dependent variable). We write the characteristic equation and then solve it. Sinc an are distinct, real roots, the complementary solution is Now we bring our attention to the non-homogeneous parts of the DE, Since it consists of an exponential and a trig function, we would want to mirror that i as follows. We compar an and see that they both contain terms of the for Therefore, we need to adjust our guess to account for that repeat, as follows.       Before we can begin, we should confirm that the DE is linear,  the DE has constant coefficients. Now we know that it would be appropriate to solve the DE using the method of undetermined coefficients.\\\\ Even though we are asked only about the form o we must first fin to confirm there are no repeats. So we solve the associated homogeneous DE (by omitting terms that do not contain the dependent variable). We write the characteristic equation and then solve it. Sinc an are distinct, real roots, the complementary solution is Now we bring our attention to the non-homogeneous parts of the DE, Since it consists of a first degree polynomial and the product of an exponential and a trig function, we would want to mirror that i as follows. We look at the terms o and see tha doesn't contain any terms that are repeats of terms i so we will not need to adjust our guess fo             Before we can begin, we should confirm that the DE is linear,  the DE has constant coefficients. Now we know that it would be appropriate to solve the DE using the method of undetermined coefficients.\\\\ Even though we are asked only about the form o we must first fin to confirm there are no repeats. So we solve the associated homogeneous DE (by omitting terms that do not contain the dependent variable). We write the characteristic equation and then solve it. Sinc is a complex conjugate pair, the complementary solution is Now we bring our attention to the non-homogeneous parts of the DE, Since it consists of the product of an exponential and the product of a 2nd degree polynomial and an exponential, we would want to mirror that i as follows. We look at the terms o and see tha doesn't contain any terms that are repeats of terms i so we will not need to adjust our guess fo       Before we can begin, we should confirm that the DE is linear,  the DE has constant coefficients. Now we know that it would be appropriate to solve the DE using the method of undetermined coefficients.\\\\ Even though we are asked only about the form o we must first fin to confirm there are no repeats. So we solve the associated homogeneous DE (by omitting terms that do not contain the dependent variable). We write the characteristic equation and then solve it. Sinc is a complex conjugate pair, the complementary solution is roots, the general solution is Now we bring our attention to the non-homogeneous parts of the DE, Since it consists of both the product of a 1st degree polynomial and an exponential function and the product of an exponential and a trig function, we would want to mirror that i as follows. We compar an and see that they both contain terms of the form of the product of an exponential and a trig function. Therefore, we need to adjust our guess to account for that repeat, as follows.       Before we can begin, we should confirm that the DE is linear,  the DE has constant coefficients. Now we know that it would be appropriate to solve the DE using the method of undetermined coefficients.\\\\ Even though we are asked only about the form o we must first fin to confirm there are no repeats. So we solve the associated homogeneous DE (by omitting terms that do not contain the dependent variable). We write the characteristic equation and then solve it. Sinc is repeated real root, the complementary solution is Now we bring our attention to the non-homogeneous parts of the DE, Since it consists of a second degree polynomial and an exponential function, we would want to mirror that i as follows. We compar an and see that they both contain terms of the for Therefore, we need to adjust our guess to account for that repeat, as follows. Now we again compar an and see that they both contain terms of the for Therefore, we need to again adjust our guess to account for that repeat, as follows. Since we have now eliminated all repeats, we do not need to adjus further.      Before we can begin, we should confirm that the DE is linear,  the DE has constant coefficients. Now we know that it would be appropriate to solve the DE using the method of undetermined coefficients.\\\\ Even though we are asked only about the form o we must first fin to confirm there are no repeats. So we solve the associated homogeneous DE (by omitting terms that do not contain the dependent variable). We write the characteristic equation and then solve it. Sinc is a complex conjugate pair, the complementary solution is Now we bring our attention to the non-homogeneous parts of the DE, Since it consists of an exponential function and the product of a 2nd degree polynomial and an exponential function, we would want to mirror that i as follows. We look at the terms o and see tha doesn't contain any terms that are repeats of terms i so we will not need to adjust our guess fo       Before we can begin, we should confirm that the DE is linear,  the DE has constant coefficients. Now we know that it would be appropriate to solve the DE using the method of undetermined coefficients.\\\\ Even though we are asked only about the form o we must first fin to confirm there are no repeats. So we solve the associated homogeneous DE (by omitting terms that do not contain the dependent variable). We write the characteristic equation and then solve it. Sinc an are distinct, real roots, the complementary solution is Now we bring our attention to the non-homogeneous parts of the DE, Since it consists of a constant and a trig function, we would want to mirror that i as follows. We look at the terms o and see tha doesn't contain any terms that are repeats of terms i so we will not need to adjust our guess fo    Find the general solution for each differential equation      Before we can begin, we should confirm that the DE is linear,  the DE has constant coefficients. Now we know that it would be appropriate to solve the DE using the method of undetermined coefficients.\\\\ We begin by findin the solution to the the associated homogeneous DE (by omitting terms that do not contain the dependent variable): We write the characteristic equation and then solve it. Sinc the complementary solution is Now we bring our attention to the non-homogeneous parts of the DE, Since it consists of a constant and a 2nd degree polynomial, we would want to mirror that i as follows. We look at the terms o and see tha doesn't contain any terms that are repeats of terms i so we will not need to adjust our guess fo In order to determine the coefficient  , an , we will su into the DE. Therefore we need the first derivative, so we find that now. Now we sub into the original DE: We have collected like terms, and now we can equate coefficients to yield a system of three equations and three unknowns. Since we kno we can fin using the second equation Then we can solve fo using the third equation Hence, the particular solution is The general solution is given b :       Before we can begin, we should confirm that the DE is linear,  the DE has constant coefficients. Now we know that it would be appropriate to solve the DE using the method of undetermined coefficients.\\\\ We begin by findin the solution to the the associated homogeneous DE (by omitting terms that do not contain the dependent variable): We write the characteristic equation and then solve it. Sinc an are distinct real roots, the complementary solution is Now we bring our attention to the non-homogeneous parts of the DE, Since it consists of a constant and a 1st degree polynomial, we would want to mirror that i as follows. We compar an and see that they both contain terms of the for Therefore, we need to adjust our guess to account for that repeat, as follows. Since we have now eliminated all repeats, we do not need to adjus further.\\\\ In order to determine the coefficient  , an , we will su into the DE. Therefore we need the first and second derivatives, so we find those now. We will need to use the product rule. Now we sub into the original DE: We have collected like terms, and now we can equate coefficients to yield a system of three equations and three unknowns. We can easily see tha an Then we can solve fo using the second equation. Hence, the particular solution is The general solution is given b :       We are used to seeing second order DEs in a different orientation. It may help to re-write the DE as follows. Before we can begin, we should confirm that the DE is linear,  the DE has constant coefficients. Now we know that it would be appropriate to solve the DE using the method of undetermined coefficients.\\\\ We begin by findin the solution to the the associated homogeneous DE (by omitting terms that do not contain the dependent variable): We write the characteristic equation and then solve it. Sinc is a complex conjugate pair, the complementary solution is Now we bring our attention to the non-homogeneous parts of the DE, Since it consists of a trig function, we would want to mirror that i as follows. We look at the terms o and see tha doesn't contain any terms that are repeats of terms i so we will not need to adjust our guess fo In order to determine the coefficient an , we will su into the DE. Therefore we need the first and second derivatives, so we find those now. Now we sub into the original DE: We have collected like terms, and now we can equate coefficients to yield a system of two equations and two unknowns. There are many ways to solve this system of equations. One way is to solve fo in the first equation and then substitute into the second equation as follows. using the second equation. Hence, the particular solution is The general solution is given b :       Before we can begin, we should confirm that the DE is linear,  the DE has constant coefficients. Now we know that it would be appropriate to solve the DE using the method of undetermined coefficients.\\\\ We begin by findin the solution to the the associated homogeneous DE (by omitting terms that do not contain the dependent variable): We write the characteristic equation and then solve it. Sinc is a repeated real root, the complementary solution is Now we bring our attention to the non-homogeneous parts of the DE, Since it consists of a trig function and an exponential function, we would want to mirror that i as follows. We compar an and see that they both contain terms of the for Therefore, we need to adjust our guess to account for that repeat, as follows. We again compar an and see that they both contain terms of the for Therefore, we need to adjust our guess once more. Since we have now eliminated all repeats, we do not need to adjus further.\\\\ In order to determine the coefficient  , an , we will su into the DE. Therefore we need the first and second derivatives, so we find those now. We will need to use the product rule. Now we sub into the original DE: We have collected like terms, and now we can equate coefficients to yield a system of three equations and three unknowns. We can easily see tha , and we can use the first two equations to solve fo an . There are many ways to do this; one way is to solve fo in the second equation and then substitute into the first equation. Hence, the particular solution is The general solution is given b :       Before we can begin, we should confirm that the DE is linear,  the DE has constant coefficients. Now we know that it would be appropriate to solve the DE using the method of undetermined coefficients.\\\\ We begin by findin the solution to the the associated homogeneous DE (by omitting terms that do not contain the dependent variable): We write the characteristic equation and then solve it. Sinc an are distinct, real roots, the complementary solution is Now we bring our attention to the non-homogeneous parts of the DE, Since it consists of a a first degree polynomial and two exponential functions, we would want to mirror that i as follows. We compar an and see that they both contain terms of the for an Therefore, we need to adjust our guess to account for that repeat, as follows. Since we have now eliminated all repeats, we do not need to adjus further.\\\\ In order to determine the coefficient   , an , we will su into the DE. Therefore we need the first and second derivatives, so we find those now. We will need to use the product rule. Now we sub into the original DE: We have collected like terms, and now we can equate coefficients to yield a system of four equations and four unknowns. We can easily see tha  an . We can use the second equation to solve fo . Hence, the particular solution is The general solution is given b :     Find the solution to the IVP: .   In question (\\ref{particular_soln}), we found the general solution We need only use the given initial condition in order to fin  Thus, the solution is %    Notice that the DE in Question is actually a first-order linear differential equation, so we can use another method of solution to solve it (and we should get the same answer!). Solve the same IVP using an integrating factor and compareyour answers.   First we put DE in standard form for a first-order linear DE so we can identif In this case is the dependent variable (i.e., it behaves lik ) an is the independent variable (i.e., it behaves lik ), so the standard form we seek i so we can identif  Thus Then we find the integrating facto  Now we multiply both sides of the DE by the integrating factor. Now we recall the product rule for derivatives: We note that the two terms on the left hand side of equation (\\ref{eq20}) are the result of taking the derivative of the product. Hence we can undo the product rule as follows: Now we can integrate both sides of the equation and then solve for the dependent variable. On the left hand side we will need to integration by parts. We begin by choosin an and then we can find th the derivative o , an , the antiderivative o as follows. Hence we have The new integral is an improvement, but will require another integration by parts. Again, we choose an as follows. Hence we continue solving our DE as follows: We now take the general solution and apply the initial conditio so that we can solve for the particular solution. Hence, the solution to this IVP i (which is the same answer we got using the method of undetermined coefficients).    "
},
{
  "id": "main-7-4-8-3-1",
  "level": "2",
  "url": "main-7-4-8-3.html#main-7-4-8-3-1",
  "type": "Exercise",
  "number": "7.6.1",
  "title": "",
  "body": "Describe the difference between a homogeneous and a non-homogeneous differential equation. A differential equation is termed \"homogeneous\" if all the terms of the equation are either derivatives of the unknown function or multiples of the unknown function itself, and the equation can be set equal to zero. In other words, there are no terms in the equation that are solely functions of the independent variable or constants. For example, the equation is homogeneous because all its terms involve or its derivatives and the equation is set equal to zero. A differential equation is termed \"non-homogeneous\" if it contains terms that are solely functions of the independent variable or constants which are not multiples of the unknown function or its derivatives. For example, the equation is non-homogeneous because of the term on the right side, which is not a derivative or multiple of . The distinction between homogeneous and non-homogeneous differential equations is crucial as the methods used to solve them can differ. "
},
{
  "id": "main-7-4-8-3-2-3",
  "level": "2",
  "url": "main-7-4-8-3.html#main-7-4-8-3-2-3",
  "type": "Exercise",
  "number": "7.6.2",
  "title": "",
  "body": "Find the homogeneous part, , of the general solution of .   "
},
{
  "id": "main-7-4-8-3-2-4",
  "level": "2",
  "url": "main-7-4-8-3.html#main-7-4-8-3-2-4",
  "type": "Exercise",
  "number": "7.6.3",
  "title": "",
  "body": "Select the initial form of the particular solution, , by looking at the non-homogenous term of equation .   We look at the non-homogenous terms in the DE. In this case, the non-homogeneous part of the DE is Based on this function, we would assume that the particular solutio has a similar form, so we would guess We refer back to th we found previously and we make sure there are no terms like this that are i . In this case, our choice o is not a repeat of terms i , so we are satisfied with our choice o  "
},
{
  "id": "main-7-4-8-3-2-5",
  "level": "2",
  "url": "main-7-4-8-3.html#main-7-4-8-3-2-5",
  "type": "Exercise",
  "number": "7.6.4",
  "title": "",
  "body": "Substitute into to find the coefficient, . Then give .   We need to substitute into the original DE, so we need to find the first and second derivatives. No we sub in to the original DE and solve for the coefficien . Hence, the particular solution is  "
},
{
  "id": "main-7-4-8-3-2-6",
  "level": "2",
  "url": "main-7-4-8-3.html#main-7-4-8-3-2-6",
  "type": "Exercise",
  "number": "7.6.5",
  "title": "",
  "body": "Form the general solution    We simply ad an to form the general solution.  "
},
{
  "id": "main-7-4-8-3-2-7",
  "level": "2",
  "url": "main-7-4-8-3.html#main-7-4-8-3-2-7",
  "type": "Exercise",
  "number": "7.6.6",
  "title": "",
  "body": "Use the initial conditions to find the particular solution to this IVP.    "
},
{
  "id": "main-7-4-8-3-3-3",
  "level": "2",
  "url": "main-7-4-8-3.html#main-7-4-8-3-3-3",
  "type": "Exercise",
  "number": "7.6.7",
  "title": "",
  "body": "    Before we can begin, we should confirm that the DE is linear,  the DE has constant coefficients. Now we know that it would be appropriate to solve the DE using the method of undetermined coefficients.\\\\ Even though we are asked only about the form o we must first fin to confirm there are no repeats. So we solve the associated homogeneous DE (by omitting terms that do not contain the dependent variable). We write the characteristic equation and then solve it. Since an are distinct, real roots, the complementary solution is Now we bring our attention to the non-homogeneous parts of the DE, Since it consists of a 2nd degree polynomial and a trig function, we would want to mirror that i as follows. We look at the terms o and see tha doesn't contain any terms that are repeats of terms i so we will not need to adjust our guess fo  "
},
{
  "id": "main-7-4-8-3-3-4",
  "level": "2",
  "url": "main-7-4-8-3.html#main-7-4-8-3-3-4",
  "type": "Exercise",
  "number": "7.6.8",
  "title": "",
  "body": "    Before we can begin, we should confirm that the DE is linear,  the DE has constant coefficients. Now we know that it would be appropriate to solve the DE using the method of undetermined coefficients.\\\\ Even though we are asked only about the form o we must first fin to confirm there are no repeats. So we solve the associated homogeneous DE (by omitting terms that do not contain the dependent variable). We write the characteristic equation and then solve it. Sinc an are distinct, real roots, the complementary solution is Now we bring our attention to the non-homogeneous parts of the DE, Since it consists of an exponential and a trig function, we would want to mirror that i as follows. We compar an and see that they both contain terms of the for Therefore, we need to adjust our guess to account for that repeat, as follows.  "
},
{
  "id": "main-7-4-8-3-3-5",
  "level": "2",
  "url": "main-7-4-8-3.html#main-7-4-8-3-3-5",
  "type": "Exercise",
  "number": "7.6.9",
  "title": "",
  "body": "    Before we can begin, we should confirm that the DE is linear,  the DE has constant coefficients. Now we know that it would be appropriate to solve the DE using the method of undetermined coefficients.\\\\ Even though we are asked only about the form o we must first fin to confirm there are no repeats. So we solve the associated homogeneous DE (by omitting terms that do not contain the dependent variable). We write the characteristic equation and then solve it. Sinc an are distinct, real roots, the complementary solution is Now we bring our attention to the non-homogeneous parts of the DE, Since it consists of a first degree polynomial and the product of an exponential and a trig function, we would want to mirror that i as follows. We look at the terms o and see tha doesn't contain any terms that are repeats of terms i so we will not need to adjust our guess fo  "
},
{
  "id": "main-7-4-8-3-3-6",
  "level": "2",
  "url": "main-7-4-8-3.html#main-7-4-8-3-3-6",
  "type": "Exercise",
  "number": "7.6.10",
  "title": "",
  "body": "     "
},
{
  "id": "main-7-4-8-3-3-7",
  "level": "2",
  "url": "main-7-4-8-3.html#main-7-4-8-3-3-7",
  "type": "Exercise",
  "number": "7.6.11",
  "title": "",
  "body": "    Before we can begin, we should confirm that the DE is linear,  the DE has constant coefficients. Now we know that it would be appropriate to solve the DE using the method of undetermined coefficients.\\\\ Even though we are asked only about the form o we must first fin to confirm there are no repeats. So we solve the associated homogeneous DE (by omitting terms that do not contain the dependent variable). We write the characteristic equation and then solve it. Sinc is a complex conjugate pair, the complementary solution is Now we bring our attention to the non-homogeneous parts of the DE, Since it consists of the product of an exponential and the product of a 2nd degree polynomial and an exponential, we would want to mirror that i as follows. We look at the terms o and see tha doesn't contain any terms that are repeats of terms i so we will not need to adjust our guess fo  "
},
{
  "id": "main-7-4-8-3-3-8",
  "level": "2",
  "url": "main-7-4-8-3.html#main-7-4-8-3-3-8",
  "type": "Exercise",
  "number": "7.6.12",
  "title": "",
  "body": "    Before we can begin, we should confirm that the DE is linear,  the DE has constant coefficients. Now we know that it would be appropriate to solve the DE using the method of undetermined coefficients.\\\\ Even though we are asked only about the form o we must first fin to confirm there are no repeats. So we solve the associated homogeneous DE (by omitting terms that do not contain the dependent variable). We write the characteristic equation and then solve it. Sinc is a complex conjugate pair, the complementary solution is roots, the general solution is Now we bring our attention to the non-homogeneous parts of the DE, Since it consists of both the product of a 1st degree polynomial and an exponential function and the product of an exponential and a trig function, we would want to mirror that i as follows. We compar an and see that they both contain terms of the form of the product of an exponential and a trig function. Therefore, we need to adjust our guess to account for that repeat, as follows.  "
},
{
  "id": "main-7-4-8-3-3-9",
  "level": "2",
  "url": "main-7-4-8-3.html#main-7-4-8-3-3-9",
  "type": "Exercise",
  "number": "7.6.13",
  "title": "",
  "body": "    Before we can begin, we should confirm that the DE is linear,  the DE has constant coefficients. Now we know that it would be appropriate to solve the DE using the method of undetermined coefficients.\\\\ Even though we are asked only about the form o we must first fin to confirm there are no repeats. So we solve the associated homogeneous DE (by omitting terms that do not contain the dependent variable). We write the characteristic equation and then solve it. Sinc is repeated real root, the complementary solution is Now we bring our attention to the non-homogeneous parts of the DE, Since it consists of a second degree polynomial and an exponential function, we would want to mirror that i as follows. We compar an and see that they both contain terms of the for Therefore, we need to adjust our guess to account for that repeat, as follows. Now we again compar an and see that they both contain terms of the for Therefore, we need to again adjust our guess to account for that repeat, as follows. Since we have now eliminated all repeats, we do not need to adjus further. "
},
{
  "id": "main-7-4-8-3-3-10",
  "level": "2",
  "url": "main-7-4-8-3.html#main-7-4-8-3-3-10",
  "type": "Exercise",
  "number": "7.6.14",
  "title": "",
  "body": "    Before we can begin, we should confirm that the DE is linear,  the DE has constant coefficients. Now we know that it would be appropriate to solve the DE using the method of undetermined coefficients.\\\\ Even though we are asked only about the form o we must first fin to confirm there are no repeats. So we solve the associated homogeneous DE (by omitting terms that do not contain the dependent variable). We write the characteristic equation and then solve it. Sinc is a complex conjugate pair, the complementary solution is Now we bring our attention to the non-homogeneous parts of the DE, Since it consists of an exponential function and the product of a 2nd degree polynomial and an exponential function, we would want to mirror that i as follows. We look at the terms o and see tha doesn't contain any terms that are repeats of terms i so we will not need to adjust our guess fo  "
},
{
  "id": "main-7-4-8-3-3-11",
  "level": "2",
  "url": "main-7-4-8-3.html#main-7-4-8-3-3-11",
  "type": "Exercise",
  "number": "7.6.15",
  "title": "",
  "body": "    Before we can begin, we should confirm that the DE is linear,  the DE has constant coefficients. Now we know that it would be appropriate to solve the DE using the method of undetermined coefficients.\\\\ Even though we are asked only about the form o we must first fin to confirm there are no repeats. So we solve the associated homogeneous DE (by omitting terms that do not contain the dependent variable). We write the characteristic equation and then solve it. Sinc an are distinct, real roots, the complementary solution is Now we bring our attention to the non-homogeneous parts of the DE, Since it consists of a constant and a trig function, we would want to mirror that i as follows. We look at the terms o and see tha doesn't contain any terms that are repeats of terms i so we will not need to adjust our guess fo  "
},
{
  "id": "main-7-4-8-3-4-2",
  "level": "2",
  "url": "main-7-4-8-3.html#main-7-4-8-3-4-2",
  "type": "Exercise",
  "number": "7.6.16",
  "title": "",
  "body": "    Before we can begin, we should confirm that the DE is linear,  the DE has constant coefficients. Now we know that it would be appropriate to solve the DE using the method of undetermined coefficients.\\\\ We begin by findin the solution to the the associated homogeneous DE (by omitting terms that do not contain the dependent variable): We write the characteristic equation and then solve it. Sinc the complementary solution is Now we bring our attention to the non-homogeneous parts of the DE, Since it consists of a constant and a 2nd degree polynomial, we would want to mirror that i as follows. We look at the terms o and see tha doesn't contain any terms that are repeats of terms i so we will not need to adjust our guess fo In order to determine the coefficient  , an , we will su into the DE. Therefore we need the first derivative, so we find that now. Now we sub into the original DE: We have collected like terms, and now we can equate coefficients to yield a system of three equations and three unknowns. Since we kno we can fin using the second equation Then we can solve fo using the third equation Hence, the particular solution is The general solution is given b :  "
},
{
  "id": "main-7-4-8-3-4-3",
  "level": "2",
  "url": "main-7-4-8-3.html#main-7-4-8-3-4-3",
  "type": "Exercise",
  "number": "7.6.17",
  "title": "",
  "body": "    Before we can begin, we should confirm that the DE is linear,  the DE has constant coefficients. Now we know that it would be appropriate to solve the DE using the method of undetermined coefficients.\\\\ We begin by findin the solution to the the associated homogeneous DE (by omitting terms that do not contain the dependent variable): We write the characteristic equation and then solve it. Sinc an are distinct real roots, the complementary solution is Now we bring our attention to the non-homogeneous parts of the DE, Since it consists of a constant and a 1st degree polynomial, we would want to mirror that i as follows. We compar an and see that they both contain terms of the for Therefore, we need to adjust our guess to account for that repeat, as follows. Since we have now eliminated all repeats, we do not need to adjus further.\\\\ In order to determine the coefficient  , an , we will su into the DE. Therefore we need the first and second derivatives, so we find those now. We will need to use the product rule. Now we sub into the original DE: We have collected like terms, and now we can equate coefficients to yield a system of three equations and three unknowns. We can easily see tha an Then we can solve fo using the second equation. Hence, the particular solution is The general solution is given b :  "
},
{
  "id": "main-7-4-8-3-4-4",
  "level": "2",
  "url": "main-7-4-8-3.html#main-7-4-8-3-4-4",
  "type": "Exercise",
  "number": "7.6.18",
  "title": "",
  "body": "    We are used to seeing second order DEs in a different orientation. It may help to re-write the DE as follows. Before we can begin, we should confirm that the DE is linear,  the DE has constant coefficients. Now we know that it would be appropriate to solve the DE using the method of undetermined coefficients.\\\\ We begin by findin the solution to the the associated homogeneous DE (by omitting terms that do not contain the dependent variable): We write the characteristic equation and then solve it. Sinc is a complex conjugate pair, the complementary solution is Now we bring our attention to the non-homogeneous parts of the DE, Since it consists of a trig function, we would want to mirror that i as follows. We look at the terms o and see tha doesn't contain any terms that are repeats of terms i so we will not need to adjust our guess fo In order to determine the coefficient an , we will su into the DE. Therefore we need the first and second derivatives, so we find those now. Now we sub into the original DE: We have collected like terms, and now we can equate coefficients to yield a system of two equations and two unknowns. There are many ways to solve this system of equations. One way is to solve fo in the first equation and then substitute into the second equation as follows. using the second equation. Hence, the particular solution is The general solution is given b :  "
},
{
  "id": "main-7-4-8-3-4-5",
  "level": "2",
  "url": "main-7-4-8-3.html#main-7-4-8-3-4-5",
  "type": "Exercise",
  "number": "7.6.19",
  "title": "",
  "body": "    Before we can begin, we should confirm that the DE is linear,  the DE has constant coefficients. Now we know that it would be appropriate to solve the DE using the method of undetermined coefficients.\\\\ We begin by findin the solution to the the associated homogeneous DE (by omitting terms that do not contain the dependent variable): We write the characteristic equation and then solve it. Sinc is a repeated real root, the complementary solution is Now we bring our attention to the non-homogeneous parts of the DE, Since it consists of a trig function and an exponential function, we would want to mirror that i as follows. We compar an and see that they both contain terms of the for Therefore, we need to adjust our guess to account for that repeat, as follows. We again compar an and see that they both contain terms of the for Therefore, we need to adjust our guess once more. Since we have now eliminated all repeats, we do not need to adjus further.\\\\ In order to determine the coefficient  , an , we will su into the DE. Therefore we need the first and second derivatives, so we find those now. We will need to use the product rule. Now we sub into the original DE: We have collected like terms, and now we can equate coefficients to yield a system of three equations and three unknowns. We can easily see tha , and we can use the first two equations to solve fo an . There are many ways to do this; one way is to solve fo in the second equation and then substitute into the first equation. Hence, the particular solution is The general solution is given b :  "
},
{
  "id": "main-7-4-8-3-4-6",
  "level": "2",
  "url": "main-7-4-8-3.html#main-7-4-8-3-4-6",
  "type": "Exercise",
  "number": "7.6.20",
  "title": "",
  "body": "    Before we can begin, we should confirm that the DE is linear,  the DE has constant coefficients. Now we know that it would be appropriate to solve the DE using the method of undetermined coefficients.\\\\ We begin by findin the solution to the the associated homogeneous DE (by omitting terms that do not contain the dependent variable): We write the characteristic equation and then solve it. Sinc an are distinct, real roots, the complementary solution is Now we bring our attention to the non-homogeneous parts of the DE, Since it consists of a a first degree polynomial and two exponential functions, we would want to mirror that i as follows. We compar an and see that they both contain terms of the for an Therefore, we need to adjust our guess to account for that repeat, as follows. Since we have now eliminated all repeats, we do not need to adjus further.\\\\ In order to determine the coefficient   , an , we will su into the DE. Therefore we need the first and second derivatives, so we find those now. We will need to use the product rule. Now we sub into the original DE: We have collected like terms, and now we can equate coefficients to yield a system of four equations and four unknowns. We can easily see tha  an . We can use the second equation to solve fo . Hence, the particular solution is The general solution is given b :  "
},
{
  "id": "ex-1",
  "level": "2",
  "url": "main-7-4-8-3.html#ex-1",
  "type": "Exercise",
  "number": "7.6.21",
  "title": "",
  "body": "Find the solution to the IVP: .   In question (\\ref{particular_soln}), we found the general solution We need only use the given initial condition in order to fin  Thus, the solution is % "
},
{
  "id": "main-7-4-8-3-6-1",
  "level": "2",
  "url": "main-7-4-8-3.html#main-7-4-8-3-6-1",
  "type": "Exercise",
  "number": "7.6.22",
  "title": "",
  "body": "Notice that the DE in Question is actually a first-order linear differential equation, so we can use another method of solution to solve it (and we should get the same answer!). Solve the same IVP using an integrating factor and compareyour answers.   First we put DE in standard form for a first-order linear DE so we can identif In this case is the dependent variable (i.e., it behaves lik ) an is the independent variable (i.e., it behaves lik ), so the standard form we seek i so we can identif  Thus Then we find the integrating facto  Now we multiply both sides of the DE by the integrating factor. Now we recall the product rule for derivatives: We note that the two terms on the left hand side of equation (\\ref{eq20}) are the result of taking the derivative of the product. Hence we can undo the product rule as follows: Now we can integrate both sides of the equation and then solve for the dependent variable. On the left hand side we will need to integration by parts. We begin by choosin an and then we can find th the derivative o , an , the antiderivative o as follows. Hence we have The new integral is an improvement, but will require another integration by parts. Again, we choose an as follows. Hence we continue solving our DE as follows: We now take the general solution and apply the initial conditio so that we can solve for the particular solution. Hence, the solution to this IVP i (which is the same answer we got using the method of undetermined coefficients). "
},
{
  "id": "main-7-5",
  "level": "1",
  "url": "main-7-5.html",
  "type": "Chapter",
  "number": "8",
  "title": "Variation of Parameters",
  "body": "Variation of Parameters   "
},
{
  "id": "main-8-3-3-3",
  "level": "1",
  "url": "main-8-3-3-3.html",
  "type": "Subsection",
  "number": "9.1.1",
  "title": "Motivation",
  "body": "Motivation  The Laplace transform is a powerful tool for solving differential equations by exploiting integration by parts and the properties of exponential functions. Before we dive into the details, let's recall the basic formula for integration by parts: .  In this equation, and are functions of . So , and . Now, we can rewrite this formula as: .  Notice how the derivative initially applied to on the left-hand side shifts over to on the right-hand side. This ability to transfer derivatives between functions within an integral forms the core idea behind the Laplace transform.  Let's see this concept in action. Consider an integral of the form: , where is a constant. By setting and in our integration by parts formula, we get: .  What's happening here? The derivative on in integral is effectively transferred to the exponential function in integral , leaving an extra factor of next to integral .  This process of transferring derivatives between functions is a reoccuring theme in the Laplace transform method and in the coming sections, we will uncover how it uses this idea to solve a wide range of differential equations.  Check-Point Questions   The Laplace transform method is leverages which concepts to solve differential equations?    Chain Rule   Incorrect. The chain rule is not a key feature of the Laplace transform method. Think about a process that allows you to transfer derivatives.     Product Rule   No, the product rule is not a key concept in the Laplace transform method. Consider a method related to integration.     Integration by Parts   Correct! The Laplace transform method leverages integration by parts to move derivatives from one function to another inside integrals.     Properties of Exponential Functions   Correct! The Laplace transform method uses the properties of exponential functions, especially their behavior under differentiation and integration, to solve differential equations.      Which concept from calculus allows you to transfer the derivative of one function to another inside an integral?    Chain Rule   Incorrect. The chain rule is used for compositions of functions, not for transferring derivatives within integrals. Try again.     L'Hopital's Rule   Incorrect. L'Hopital's Rule is used to evaluate limits of indeterminate forms, not to transfer derivatives within integrals.     Integration by Parts   Correct! Integration by Parts allows the transfer of a derivative from one function to another inside an integral, a fundamental tool in the Laplace transform method.     Implicit Differentiation   Incorrect. Implicit differentiation is used to differentiate equations where the variable isn’t isolated, not to transfer derivatives within integrals.            Correct! The derivative of with respect to is .       Incorrect. The derivative should include a factor of due to the chain rule.       Incorrect. The derivative should be negative because the exponent of has a negative sign.       Incorrect. This expression incorrectly represents the derivative of . Think about applying the chain rule to the exponent.      Select the result of applying integration by parts to the integral,        Incorrect. Pay close attention to how integration by parts is applied. Try again.         Incorrect. You need to transfer the derivative correctly by choosing the appropriate and .         Incorrect. This result is incorrect due to a missing term. Try applying integration by parts again.         Correct! The result of applying integration by parts to is .      "
},
{
  "id": "p4-c1-s1-1-rq1",
  "level": "2",
  "url": "main-8-3-3-3.html#p4-c1-s1-1-rq1",
  "type": "Reading Question",
  "number": "9.1.1.1",
  "title": "<em class=\"emphasis\">The Laplace transform method is leverages which concepts to solve differential equations?<\/em>",
  "body": " The Laplace transform method is leverages which concepts to solve differential equations?    Chain Rule   Incorrect. The chain rule is not a key feature of the Laplace transform method. Think about a process that allows you to transfer derivatives.     Product Rule   No, the product rule is not a key concept in the Laplace transform method. Consider a method related to integration.     Integration by Parts   Correct! The Laplace transform method leverages integration by parts to move derivatives from one function to another inside integrals.     Properties of Exponential Functions   Correct! The Laplace transform method uses the properties of exponential functions, especially their behavior under differentiation and integration, to solve differential equations.    "
},
{
  "id": "p4-c1-s1-1-rq2",
  "level": "2",
  "url": "main-8-3-3-3.html#p4-c1-s1-1-rq2",
  "type": "Reading Question",
  "number": "9.1.1.2",
  "title": "<em class=\"emphasis\">Which concept from calculus allows you to transfer the derivative of one function to another inside an integral?<\/em>",
  "body": " Which concept from calculus allows you to transfer the derivative of one function to another inside an integral?    Chain Rule   Incorrect. The chain rule is used for compositions of functions, not for transferring derivatives within integrals. Try again.     L'Hopital's Rule   Incorrect. L'Hopital's Rule is used to evaluate limits of indeterminate forms, not to transfer derivatives within integrals.     Integration by Parts   Correct! Integration by Parts allows the transfer of a derivative from one function to another inside an integral, a fundamental tool in the Laplace transform method.     Implicit Differentiation   Incorrect. Implicit differentiation is used to differentiate equations where the variable isn’t isolated, not to transfer derivatives within integrals.    "
},
{
  "id": "p4-c1-s1-1-rq3",
  "level": "2",
  "url": "main-8-3-3-3.html#p4-c1-s1-1-rq3",
  "type": "Reading Question",
  "number": "9.1.1.3",
  "title": "<em class=\"emphasis\"><span class=\"process-math\">\\(\\ds\\frac{d}{dt}\\left[e^{-st}\\right] =\\)<\/span> <span class=\"fillin underline\" role=\"img\" aria-label=\"10-character blank\" style=\"width: 4.545454545454546em;\" \/><\/em>.",
  "body": "       Correct! The derivative of with respect to is .       Incorrect. The derivative should include a factor of due to the chain rule.       Incorrect. The derivative should be negative because the exponent of has a negative sign.       Incorrect. This expression incorrectly represents the derivative of . Think about applying the chain rule to the exponent.    "
},
{
  "id": "p4-c1-s1-1-rq4",
  "level": "2",
  "url": "main-8-3-3-3.html#p4-c1-s1-1-rq4",
  "type": "Reading Question",
  "number": "9.1.1.4",
  "title": "<em class=\"emphasis\">Select the result of applying integration by parts to the integral, <span class=\"process-math\">\\(\\ \\ \\ds \\int t^2 \\ y'\\ dt\\)<\/span><\/em>.",
  "body": " Select the result of applying integration by parts to the integral,        Incorrect. Pay close attention to how integration by parts is applied. Try again.         Incorrect. You need to transfer the derivative correctly by choosing the appropriate and .         Incorrect. This result is incorrect due to a missing term. Try applying integration by parts again.         Correct! The result of applying integration by parts to is .    "
},
{
  "id": "main-8-3-3-4",
  "level": "1",
  "url": "main-8-3-3-4.html",
  "type": "Subsection",
  "number": "9.1.2",
  "title": "Definition",
  "body": "Definition  In the previous section, we mentioned the importance of integration by parts and to the Laplace transform process. To perform a Laplace transform is to multiply both sides of an equation by and integrate with respect to . For instance, applying this process to the equation would look like this: . As this shows, applying the transform to the equation amounts to applying it to each term of our original equation (in blue). The following definition of the Laplace transform makes this more precise.  Laplace Transform  The Laplace Transform of a given function is defined as provided that the integral exists (i.e., the improper integral converges).   This definition may appear daunting at first glance, but let's break it down. The in the upper limit signals that we are dealing with an improper integral. In calculus, we learned that improper integrals can be understood as limits. Specifically:   Notice that while the integral involves both and , the integration is performed with respect to . If you're unfamiliar with handling multiple variables like this, simply treat as a constant during the integration process. Now, let's walk through an example to see this concept in action.  Check-Point Questions   The Laplace transform only exists if the improper integral converges   This statement is true. The Laplace transform is defined by an improper integral, and it only exists when this integral converges. If the integral diverges, the Laplace transform is not defined.    The Laplace transform is defined as , provided the exists    integral   Correct! The Laplace transform is defined only if the integral converges.     function   No, it is the convergence of the integral that determines whether the Laplace transform is defined.     -value   No, the Laplace transform is defined by an integral, not by a specific -value.     derivative   No, the Laplace transform is defined by an integral, not by a derivative.      Fill-in-the-Blank. The process of finding a Laplace transform involves multiplying the original function by and with respect to    integrating   No, the correct expression involves the exponential function .     integrating   Correct! The Laplace transform involves multiplying the original function by and integrating with respect to .     integrating   No, the correct expression involves the exponential function .     differentiating   No, the Laplace transform involves integrating with respect to .     differentiating   No, the correct form involves the exponential function and integrating with respect to .      "
},
{
  "id": "main-8-3-3-4-3",
  "level": "2",
  "url": "main-8-3-3-4.html#main-8-3-3-4-3",
  "type": "Definition",
  "number": "2",
  "title": "Laplace Transform.",
  "body": "Laplace Transform  The Laplace Transform of a given function is defined as provided that the integral exists (i.e., the improper integral converges).  "
},
{
  "id": "p4-c1-s1-2-rq1",
  "level": "2",
  "url": "main-8-3-3-4.html#p4-c1-s1-2-rq1",
  "type": "Reading Question",
  "number": "9.1.2.1",
  "title": "<em class=\"emphasis\">The Laplace transform only exists if the improper integral converges<\/em>.",
  "body": " The Laplace transform only exists if the improper integral converges   This statement is true. The Laplace transform is defined by an improper integral, and it only exists when this integral converges. If the integral diverges, the Laplace transform is not defined.  "
},
{
  "id": "p4-c1-s1-2-rq2",
  "level": "2",
  "url": "main-8-3-3-4.html#p4-c1-s1-2-rq2",
  "type": "Reading Question",
  "number": "9.1.2.2",
  "title": "<em class=\"emphasis\">The Laplace transform is defined as <span class=\"process-math\">\\(\\ds\\lap{ f(t) } = \\int_0^{\\infty} e^{-st} f(t)\\, dt\\text{,}\\)<\/span> provided the <span class=\"fillin underline\" role=\"img\" aria-label=\"10-character blank\" style=\"width: 4.545454545454546em;\" \/> exists<\/em>.",
  "body": " The Laplace transform is defined as , provided the exists    integral   Correct! The Laplace transform is defined only if the integral converges.     function   No, it is the convergence of the integral that determines whether the Laplace transform is defined.     -value   No, the Laplace transform is defined by an integral, not by a specific -value.     derivative   No, the Laplace transform is defined by an integral, not by a derivative.    "
},
{
  "id": "p4-c1-s1-2-rq3",
  "level": "2",
  "url": "main-8-3-3-4.html#p4-c1-s1-2-rq3",
  "type": "Reading Question",
  "number": "9.1.2.3",
  "title": "<em class=\"emphasis\">Fill-in-the-Blank. The process of finding a Laplace transform involves multiplying the original function by <span class=\"process-math\">\\(\\ul{\\hspace{5em}}\\)<\/span> and <span class=\"process-math\">\\(\\ul{\\hspace{5em}}\\)<\/span> with respect to <span class=\"process-math\">\\(t\\)<\/span><\/em>.",
  "body": " Fill-in-the-Blank. The process of finding a Laplace transform involves multiplying the original function by and with respect to    integrating   No, the correct expression involves the exponential function .     integrating   Correct! The Laplace transform involves multiplying the original function by and integrating with respect to .     integrating   No, the correct expression involves the exponential function .     differentiating   No, the Laplace transform involves integrating with respect to .     differentiating   No, the correct form involves the exponential function and integrating with respect to .    "
},
{
  "id": "main-8-3-4-3",
  "level": "1",
  "url": "main-8-3-4-3.html",
  "type": "Subsection",
  "number": "9.2.1",
  "title": "Constant Function, <span class=\"process-math\">\\(1\\)<\/span>",
  "body": "Constant Function,    Compute .  By the definition above, we have the improper integral . To evaluate this, we treat as a constant and integrate with respect to . Now that we have , we can plug it into the limit above.   The value of the remaining limit, , depends on whether is positive or negative. So we consider both cases:               Therefore, when the Laplace transform exists and evaluates to     Now that we've worked through an example, here are a few key takeaways:   The Laplace transform always results in a function of . We typically denote the Laplace transform using the capitalized letter of the function we are transforming. For instance,     The values of for which the integral converges are crucial. While these values usually don't affect the solution to the differential equation, we will make a habit of noting them as we build our Laplace transform toolbox.    The notation includes curly braces to indicate the function being transformed.     With this, we've introduced our first Laplace transform. In the next few sections, we will explore more of the common transforms that are used to solve differential equations.  Common Laplace Transform          Check-Point Questions   What is the result of the Laplace transform of the constant function 1?      No, is not the result of the Laplace transform of 1.       Correct! The Laplace transform of the constant function 1 is for .       No, this is not the correct expression for the Laplace transform of 1.       No, this expression does not represent the Laplace transform of 1.      In the Laplace transform integral, the variable is treated as a during the integration process    constant   Correct! The variable is treated as a constant when performing the integration in the Laplace transform.     variable   No, while is technically a variable, it is treated as a constant during the integration with respect to .     coefficient   No, is treated as a constant, not as a coefficient, during the integration process.     limit   No, does not represent a limit in this context; it is treated as a constant.      Based on this discussion, is a    function of   No, while is a function of , is not a function of .     function of and   No, is not a function of .     function of   Correct! The Laplace transform of a function is a function of .     constant   No, is not a constant.      In a Laplace transform, where does the variable come from?    It is an integration constant   No, is not an integration constant.     It is a placeholder for the function   No, is not a placeholder for the function .     It comes from in the definition   Correct! The variable is introduced as a parameter in the Laplace transform definition to transform the function .     replaces in an improper integral   No, is not a replacement for .      "
},
{
  "id": "main-8-3-4-3-2",
  "level": "2",
  "url": "main-8-3-4-3.html#main-8-3-4-3-2",
  "type": "Example",
  "number": "3",
  "title": "",
  "body": " Compute .  By the definition above, we have the improper integral . To evaluate this, we treat as a constant and integrate with respect to . Now that we have , we can plug it into the limit above.   The value of the remaining limit, , depends on whether is positive or negative. So we consider both cases:               Therefore, when the Laplace transform exists and evaluates to    "
},
{
  "id": "p4-c1-s2-1-rq1",
  "level": "2",
  "url": "main-8-3-4-3.html#p4-c1-s2-1-rq1",
  "type": "Reading Question",
  "number": "9.2.1.1",
  "title": "<em class=\"emphasis\">What is the result of the Laplace transform of the constant function 1?<\/em>",
  "body": " What is the result of the Laplace transform of the constant function 1?      No, is not the result of the Laplace transform of 1.       Correct! The Laplace transform of the constant function 1 is for .       No, this is not the correct expression for the Laplace transform of 1.       No, this expression does not represent the Laplace transform of 1.    "
},
{
  "id": "p4-c1-s2-1-rq2",
  "level": "2",
  "url": "main-8-3-4-3.html#p4-c1-s2-1-rq2",
  "type": "Reading Question",
  "number": "9.2.1.2",
  "title": "<em class=\"emphasis\">In the Laplace transform integral, the variable <span class=\"process-math\">\\(s\\)<\/span> is treated as a <span class=\"fillin underline\" role=\"img\" aria-label=\"10-character blank\" style=\"width: 4.545454545454546em;\" \/> during the integration process<\/em>.",
  "body": " In the Laplace transform integral, the variable is treated as a during the integration process    constant   Correct! The variable is treated as a constant when performing the integration in the Laplace transform.     variable   No, while is technically a variable, it is treated as a constant during the integration with respect to .     coefficient   No, is treated as a constant, not as a coefficient, during the integration process.     limit   No, does not represent a limit in this context; it is treated as a constant.    "
},
{
  "id": "p4-c1-s2-1-rq3",
  "level": "2",
  "url": "main-8-3-4-3.html#p4-c1-s2-1-rq3",
  "type": "Reading Question",
  "number": "9.2.1.3",
  "title": "<em class=\"emphasis\">Based on this discussion, <span class=\"process-math\">\\(\\ds\\lap{f(t)}\\)<\/span> is a <span class=\"fillin underline\" role=\"img\" aria-label=\"15-character blank\" style=\"width: 6.818181818181818em;\" \/><\/em>.",
  "body": " Based on this discussion, is a    function of   No, while is a function of , is not a function of .     function of and   No, is not a function of .     function of   Correct! The Laplace transform of a function is a function of .     constant   No, is not a constant.    "
},
{
  "id": "p4-c1-s2-1-rq4",
  "level": "2",
  "url": "main-8-3-4-3.html#p4-c1-s2-1-rq4",
  "type": "Reading Question",
  "number": "9.2.1.4",
  "title": "<em class=\"emphasis\">In a Laplace transform, where does the variable <span class=\"process-math\">\\(s\\)<\/span> come from?<\/em>",
  "body": " In a Laplace transform, where does the variable come from?    It is an integration constant   No, is not an integration constant.     It is a placeholder for the function   No, is not a placeholder for the function .     It comes from in the definition   Correct! The variable is introduced as a parameter in the Laplace transform definition to transform the function .     replaces in an improper integral   No, is not a replacement for .    "
},
{
  "id": "main-8-3-4-4",
  "level": "1",
  "url": "main-8-3-4-4.html",
  "type": "Subsection",
  "number": "9.2.2",
  "title": "Exponential Function, <span class=\"process-math\">\\(e^{at}\\)<\/span>",
  "body": "Exponential Function,   The exponential function is one of the most important functions in mathematics, especially in the context of differential equations. Let's explore how this works with a specific example.   Compute .  We begin by applying the definition of the Laplace transform: For this improper integral to converge, the exponent must be negative, meaning: . Thus, we proceed under the assumption that . Thus, the Laplace transform of is:     This result can be generalized for any constant , giving us the Laplace transform of . Here are the details.   Common Laplace Transform (Exponential)          Check-Point Questions   True\/False.   False. The correct formula is , not .    What must be true about for to exist?      No, must be greater than 137 for the Laplace transform of to exist.       No, the Laplace transform does not exist at because the integral does not converge.       Correct! The Laplace transform of exists only when .       No, must be greater than 7, not less than 0, for the Laplace transform to exist.      ?      Correct! The Laplace transform of is .       No, try again.       No, the Laplace transform should not contain the variable .       No, double-check the numerator.          3   Correct! The Laplace transform of is .     1   No, this is incorrect. The exponent in the denominator should match the exponent in .     0   No, this is incorrect. The correct value is , not .     -3   No, this is incorrect. The value should be positive , not negative.      "
},
{
  "id": "main-8-3-4-4-3",
  "level": "2",
  "url": "main-8-3-4-4.html#main-8-3-4-4-3",
  "type": "Example",
  "number": "4",
  "title": "",
  "body": " Compute .  We begin by applying the definition of the Laplace transform: For this improper integral to converge, the exponent must be negative, meaning: . Thus, we proceed under the assumption that . Thus, the Laplace transform of is:    "
},
{
  "id": "p4-c1-s2-2-rq1",
  "level": "2",
  "url": "main-8-3-4-4.html#p4-c1-s2-2-rq1",
  "type": "Reading Question",
  "number": "9.2.2.1",
  "title": "<em class=\"emphasis\">True\/False. <span class=\"process-math\">\\(\\ds\\quad \\lap{e^{at}} = \\frac{1}{s + a}\\)<\/span><\/em>.",
  "body": " True\/False.   False. The correct formula is , not .  "
},
{
  "id": "p4-c1-s2-2-rq2",
  "level": "2",
  "url": "main-8-3-4-4.html#p4-c1-s2-2-rq2",
  "type": "Reading Question",
  "number": "9.2.2.2",
  "title": "<em class=\"emphasis\">What must be true about <span class=\"process-math\">\\(s\\)<\/span> for <span class=\"process-math\">\\(\\lap{e^{137t}}\\)<\/span> to exist?<\/em>",
  "body": " What must be true about for to exist?      No, must be greater than 137 for the Laplace transform of to exist.       No, the Laplace transform does not exist at because the integral does not converge.       Correct! The Laplace transform of exists only when .       No, must be greater than 7, not less than 0, for the Laplace transform to exist.    "
},
{
  "id": "p4-c1-s2-2-rq3",
  "level": "2",
  "url": "main-8-3-4-4.html#p4-c1-s2-2-rq3",
  "type": "Reading Question",
  "number": "9.2.2.3",
  "title": "<em class=\"emphasis\"><span class=\"process-math\">\\(\\lap{e^{-3t}} = \\)<\/span> ?<\/em>",
  "body": " ?      Correct! The Laplace transform of is .       No, try again.       No, the Laplace transform should not contain the variable .       No, double-check the numerator.    "
},
{
  "id": "p4-c1-s2-2-rq4",
  "level": "2",
  "url": "main-8-3-4-4.html#p4-c1-s2-2-rq4",
  "type": "Reading Question",
  "number": "9.2.2.4",
  "title": "<em class=\"emphasis\"><span class=\"process-math\">\\(\\ds\\quad \\lap{e^{3t}} = \\frac{1}{s - \\fillinmath{X}}\\)<\/span><\/em>.",
  "body": "     3   Correct! The Laplace transform of is .     1   No, this is incorrect. The exponent in the denominator should match the exponent in .     0   No, this is incorrect. The correct value is , not .     -3   No, this is incorrect. The value should be positive , not negative.    "
},
{
  "id": "main-8-3-4-5",
  "level": "1",
  "url": "main-8-3-4-5.html",
  "type": "Subsection",
  "number": "9.2.3",
  "title": "Power Function, <span class=\"process-math\">\\(t^{n}\\)<\/span>",
  "body": "Power Function,   The power function is another common function type found in differential equations. The Laplace transform of follows a recursive pattern, which simplifies the computation for higher powers. We've already seen that . Now, let's compute the transforms for and .   The Laplace transforms for and are as follows:     Details     Details      If you look in each solution, before computing , you'll notice a relationship between the Laplace transforms of powers that differ by one. Namely, , and if you compute the Laplace transform of , you'll find that . In general, this recursive pattern continues for any power as . So if we wanted the Laplace transform of , we could find it like so . This pattern is true for higher powers of , leading to the next laplace transform rule which makes use of the .  Common Laplace Transform (Power)          Check-Point Questions        Correct! The Laplace transform of is .       No, try again.       No, notice the factorial in the numerator.       No, try again.           No, the power of in the denominator should be .       Correct! The Laplace transform of is .       No, the power of in the denominator should be .       No, the power of in the denominator should be .           No, try again.       No, try again.       No, try again.       Correct! The Laplace transform of is .      ?      Correct! The Laplace transform of is .       No, the power of in the denominator is not .       No, the Laplace transform of is not a constant.       No, there should not be a in the numerator.      ?      No, the correct transform is .       Correct! The Laplace transform of is .       No, the correct transform has a in the numerator.       No, the power of in the denominator should be .      "
},
{
  "id": "main-8-3-4-5-3",
  "level": "2",
  "url": "main-8-3-4-5.html#main-8-3-4-5-3",
  "type": "Example",
  "number": "5",
  "title": "",
  "body": " The Laplace transforms for and are as follows:     Details     Details     "
},
{
  "id": "p4-c1-s2-3-rq1",
  "level": "2",
  "url": "main-8-3-4-5.html#p4-c1-s2-3-rq1",
  "type": "Reading Question",
  "number": "9.2.3.1",
  "title": "<em class=\"emphasis\"><span class=\"process-math\">\\(\\ds\\lap{t^4} = \\)<\/span><span class=\"process-math\">\\(\\ds\\frac{\\fillinmath{X} !}{s^5}\\)<\/span><\/em>.",
  "body": "      Correct! The Laplace transform of is .       No, try again.       No, notice the factorial in the numerator.       No, try again.    "
},
{
  "id": "p4-c1-s2-3-rq2",
  "level": "2",
  "url": "main-8-3-4-5.html#p4-c1-s2-3-rq2",
  "type": "Reading Question",
  "number": "9.2.3.2",
  "title": "<em class=\"emphasis\"><span class=\"process-math\">\\(\\ds\\lap{t^3} = \\)<\/span><span class=\"process-math\">\\(\\ds\\frac{6}{\\fillinmath{X}}\\)<\/span><\/em>.",
  "body": "      No, the power of in the denominator should be .       Correct! The Laplace transform of is .       No, the power of in the denominator should be .       No, the power of in the denominator should be .    "
},
{
  "id": "p4-c1-s2-3-rq3",
  "level": "2",
  "url": "main-8-3-4-5.html#p4-c1-s2-3-rq3",
  "type": "Reading Question",
  "number": "9.2.3.3",
  "title": "<em class=\"emphasis\"><span class=\"process-math\">\\(\\ds\\lap{\\fillinmath{X}} = \\ \\frac{479001600}{s^{13}}\\)<\/span><\/em>.",
  "body": "      No, try again.       No, try again.       No, try again.       Correct! The Laplace transform of is .    "
},
{
  "id": "p4-c1-s2-3-rq4",
  "level": "2",
  "url": "main-8-3-4-5.html#p4-c1-s2-3-rq4",
  "type": "Reading Question",
  "number": "9.2.3.4",
  "title": "<em class=\"emphasis\"><span class=\"process-math\">\\(\\ds\\lap{t} = \\)<\/span> ?<\/em>",
  "body": " ?      Correct! The Laplace transform of is .       No, the power of in the denominator is not .       No, the Laplace transform of is not a constant.       No, there should not be a in the numerator.    "
},
{
  "id": "p4-c1-s2-3-rq5",
  "level": "2",
  "url": "main-8-3-4-5.html#p4-c1-s2-3-rq5",
  "type": "Reading Question",
  "number": "9.2.3.5",
  "title": "<em class=\"emphasis\"><span class=\"process-math\">\\(\\ds\\lap{t^2} = \\)<\/span> ?<\/em>",
  "body": " ?      No, the correct transform is .       Correct! The Laplace transform of is .       No, the correct transform has a in the numerator.       No, the power of in the denominator should be .    "
},
{
  "id": "main-8-3-4-6",
  "level": "1",
  "url": "main-8-3-4-6.html",
  "type": "Subsection",
  "number": "9.2.4",
  "title": "Sine and Cosine, <span class=\"process-math\">\\(\\sin(bt),\\ \\cos(bt)\\)<\/span>",
  "body": "Sine and Cosine,   Now, let's turn to the Laplace transforms of trigonometric functions, which frequently arise in systems involving oscillations or wave equations.   Compute .  We start by applying the definition of the Laplace transform: . Rather than directly integrating, we will use a modified to express cosine in terms of  Substituting this into the integral gives: Therefore, the Laplace transform of is:     The sine function is handled in a similar way, as the next example shows.   Compute .  As with cosine, we begin with the definition of the Laplace transform, and rewrite sine using Euler's formula, Substituting this into the integral, we get: Thus, the Laplace transform of is:     Both of these approaches can be generalized to show that the formula for the Laplace transforms of sine and cosine are given as follows:  Common Laplace Transform (Sine, Cosine)             Check-Point Questions        Correct! The Laplace transform of is .       No, the correct numerator should be , not .       No, the correct numerator should be , not .       No, the correct numerator should be , not .           No, try again.       No, try again.       Correct! The Laplace transform of is .       No, try again.           No, try again.       No, try again.       Correct! The Laplace transform of is .       No, try again.      ?      Correct! The Laplace transform of is .       Incorrect. This is the Laplace transform of , not .       Incorrect. The correct numerator is , not .       Incorrect. While is , the answer should simplify to .      ?      Incorrect. The correct numerator should be , not .       Incorrect. The denominator should be , not .       Correct! The Laplace transform of is .       Incorrect. The correct numerator should be , not .      "
},
{
  "id": "main-8-3-4-6-3",
  "level": "2",
  "url": "main-8-3-4-6.html#main-8-3-4-6-3",
  "type": "Example",
  "number": "6",
  "title": "",
  "body": " Compute .  We start by applying the definition of the Laplace transform: . Rather than directly integrating, we will use a modified to express cosine in terms of  Substituting this into the integral gives: Therefore, the Laplace transform of is:    "
},
{
  "id": "main-8-3-4-6-5",
  "level": "2",
  "url": "main-8-3-4-6.html#main-8-3-4-6-5",
  "type": "Example",
  "number": "7",
  "title": "",
  "body": " Compute .  As with cosine, we begin with the definition of the Laplace transform, and rewrite sine using Euler's formula, Substituting this into the integral, we get: Thus, the Laplace transform of is:    "
},
{
  "id": "p4-c1-s2-4-rq1",
  "level": "2",
  "url": "main-8-3-4-6.html#p4-c1-s2-4-rq1",
  "type": "Reading Question",
  "number": "9.2.4.1",
  "title": "<em class=\"emphasis\"><span class=\"process-math\">\\(\\ds\\lap{\\sin(t)} = \\)<\/span><span class=\"process-math\">\\(\\ds\\frac{\\fillinmath{X}}{s^2 + 1}\\)<\/span><\/em>.",
  "body": "      Correct! The Laplace transform of is .       No, the correct numerator should be , not .       No, the correct numerator should be , not .       No, the correct numerator should be , not .    "
},
{
  "id": "p4-c1-s2-4-rq2",
  "level": "2",
  "url": "main-8-3-4-6.html#p4-c1-s2-4-rq2",
  "type": "Reading Question",
  "number": "9.2.4.2",
  "title": "<em class=\"emphasis\"><span class=\"process-math\">\\(\\ds\\lap{\\cos(-2t)} = \\)<\/span><span class=\"process-math\">\\(\\ds\\frac{\\fillinmath{X}}{s^2 + 4}\\)<\/span><\/em>.",
  "body": "      No, try again.       No, try again.       Correct! The Laplace transform of is .       No, try again.    "
},
{
  "id": "p4-c1-s2-4-rq3",
  "level": "2",
  "url": "main-8-3-4-6.html#p4-c1-s2-4-rq3",
  "type": "Reading Question",
  "number": "9.2.4.3",
  "title": "<em class=\"emphasis\"><span class=\"process-math\">\\(\\ds\\lap{\\fillinmath{X}} = \\)<\/span><span class=\"process-math\">\\(\\ds\\frac{s}{s^2 + \\frac14}\\)<\/span><\/em>.",
  "body": "      No, try again.       No, try again.       Correct! The Laplace transform of is .       No, try again.    "
},
{
  "id": "p4-c1-s2-4-rq4",
  "level": "2",
  "url": "main-8-3-4-6.html#p4-c1-s2-4-rq4",
  "type": "Reading Question",
  "number": "9.2.4.4",
  "title": "<em class=\"emphasis\"><span class=\"process-math\">\\(\\ds\\lap{\\sin(5t)} = \\)<\/span> ?<\/em>",
  "body": " ?      Correct! The Laplace transform of is .       Incorrect. This is the Laplace transform of , not .       Incorrect. The correct numerator is , not .       Incorrect. While is , the answer should simplify to .    "
},
{
  "id": "p4-c1-s2-4-rq5",
  "level": "2",
  "url": "main-8-3-4-6.html#p4-c1-s2-4-rq5",
  "type": "Reading Question",
  "number": "9.2.4.5",
  "title": "<em class=\"emphasis\"><span class=\"process-math\">\\(\\ds\\lap{\\cos(-3t)} = \\)<\/span> ?<\/em>",
  "body": " ?      Incorrect. The correct numerator should be , not .       Incorrect. The denominator should be , not .       Correct! The Laplace transform of is .       Incorrect. The correct numerator should be , not .    "
},
{
  "id": "main-8-3-5-3",
  "level": "1",
  "url": "main-8-3-5-3.html",
  "type": "Subsection",
  "number": "9.3.1",
  "title": "Linearity of the Laplace Transform",
  "body": "Linearity of the Laplace Transform  The first property we'll explore is linearity. This property is foundational because it allows us to break down and combine transforms easily. The linearity of the Laplace transform is similar to the linearity of integrals, where we can distribute the transform across addition and subtraction, and pull out constants.   Use the definition of the Laplace transform to compute:   Let's start by applying the definition of the Laplace transform: Here, we've expanded the expression inside the integral. Notice that each term is something we've already encountered in previous sections. We can now use the linearity property to separate the integral: We already know the Laplace transforms of these individual functions: To satisfy all the conditions on , we must have since that ensures all terms are defined. Therefore:     This example demonstrates the linearity property in action. The general statement of the linearity property is as follows: if and are constants, then: or, equivalently:   Laplace Transform Property          Check-Point Questions   The Laplace transform of a constant is the constant times   True. By the linearity property: .    The linearity property can be used to rewrite a Laplace transform as the sum of simpler Laplace transforms   True. The linearity property allows you to separate the Laplace transform into the sum (or difference) of the transforms of each term.    Which of the following are NOT correct applications of the linearity property?      No, this is a correct application of the linearity property.       Correct! The linearity property does not apply to the product of functions.       No, this is a correct application of the linearity property.       Correct! The linearity property does not apply to the power of functions.            Correct! The Laplace transform of a constant is the constant times .       No, the constant 2 should be added to the Laplace transform of 7 cos t.       No, the constant 2 should be added to the Laplace transform of 7 cos t, not multiplied by .       No, the constant 2 should be added to the Laplace transform of 7 cos t.      "
},
{
  "id": "main-8-3-5-3-3",
  "level": "2",
  "url": "main-8-3-5-3.html#main-8-3-5-3-3",
  "type": "Example",
  "number": "8",
  "title": "",
  "body": " Use the definition of the Laplace transform to compute:   Let's start by applying the definition of the Laplace transform: Here, we've expanded the expression inside the integral. Notice that each term is something we've already encountered in previous sections. We can now use the linearity property to separate the integral: We already know the Laplace transforms of these individual functions: To satisfy all the conditions on , we must have since that ensures all terms are defined. Therefore:    "
},
{
  "id": "p4-c1-s3-1-rq1",
  "level": "2",
  "url": "main-8-3-5-3.html#p4-c1-s3-1-rq1",
  "type": "Reading Question",
  "number": "9.3.1.1",
  "title": "<em class=\"emphasis\">The Laplace transform of a constant is the constant times <span class=\"process-math\">\\(\\lap{1}\\)<\/span><\/em>.",
  "body": " The Laplace transform of a constant is the constant times   True. By the linearity property: .  "
},
{
  "id": "p4-c1-s3-1-rq2",
  "level": "2",
  "url": "main-8-3-5-3.html#p4-c1-s3-1-rq2",
  "type": "Reading Question",
  "number": "9.3.1.2",
  "title": "<em class=\"emphasis\">The linearity property can be used to rewrite a Laplace transform as the sum of simpler Laplace transforms<\/em>.",
  "body": " The linearity property can be used to rewrite a Laplace transform as the sum of simpler Laplace transforms   True. The linearity property allows you to separate the Laplace transform into the sum (or difference) of the transforms of each term.  "
},
{
  "id": "p4-c1-s3-1-rq3",
  "level": "2",
  "url": "main-8-3-5-3.html#p4-c1-s3-1-rq3",
  "type": "Reading Question",
  "number": "9.3.1.3",
  "title": "<em class=\"emphasis\">Which of the following are NOT correct applications of the linearity property?<\/em>",
  "body": " Which of the following are NOT correct applications of the linearity property?      No, this is a correct application of the linearity property.       Correct! The linearity property does not apply to the product of functions.       No, this is a correct application of the linearity property.       Correct! The linearity property does not apply to the power of functions.    "
},
{
  "id": "p4-c1-s3-1-rq4",
  "level": "2",
  "url": "main-8-3-5-3.html#p4-c1-s3-1-rq4",
  "type": "Reading Question",
  "number": "9.3.1.4",
  "title": "<em class=\"emphasis\"><span class=\"process-math\">\\(\\ds\\lap{7\\cos t + 2} = \\)<\/span> <span class=\"fillin underline\" role=\"img\" aria-label=\"10-character blank\" style=\"width: 4.545454545454546em;\" \/><\/em>.",
  "body": "       Correct! The Laplace transform of a constant is the constant times .       No, the constant 2 should be added to the Laplace transform of 7 cos t.       No, the constant 2 should be added to the Laplace transform of 7 cos t, not multiplied by .       No, the constant 2 should be added to the Laplace transform of 7 cos t.    "
},
{
  "id": "main-8-3-5-4",
  "level": "1",
  "url": "main-8-3-5-4.html",
  "type": "Subsection",
  "number": "9.3.2",
  "title": "Multiplication by <span class=\"process-math\">\\(e^{at}\\)<\/span>",
  "body": "Multiplication by   The translation property, also known as the first shifting theorem, allows us to handle functions multiplied by an exponential term, . This property is particularly useful for simplifying the Laplace transforms of products of exponential functions and other functions, such as sine, cosine, or polynomials.   Compute .  By the definition of the Laplace transform, we have: Thus, the Laplace transform of is:     The translation property can be generalized for any function multiplied by . The property is formally stated as: where is the Laplace transform of .  Laplace Transform Property  Let .     is a constant.     By applying this property to the functions , , and , we can derive additional common Laplace transforms:  Common Laplace Transforms                Check-Point Questions         Correct! The translation property shifts the transform of by 5 units, giving        No, the translation property involves shifting the transform of by 5, not by 2.       No, the correct shift should be , not .       No, the denominator should have , not 2.             Correct! The translation property applied to gives        No, the correct shift should be , not .       No, the denominator should have , not 3.       No, the correct shift should be and the power should be 4.             Correct! The Laplace transform of is        No, the correct shift should be , not .       No, the shift should be and the denominator should have        No, the correct denominator should be , not       The translation property only works for exponential functions multiplied by sine and cosine functions   False. The translation property applies to any function multiplied by an exponential term     If , what is the Laplace transform of ?      No, the correct shift should be , not .       No, the correct shift should be , not .       No, the correct shift should be , not .       Correct! The translation property shifts the transform of by 2 units, giving       "
},
{
  "id": "main-8-3-5-4-3",
  "level": "2",
  "url": "main-8-3-5-4.html#main-8-3-5-4-3",
  "type": "Example",
  "number": "9",
  "title": "",
  "body": " Compute .  By the definition of the Laplace transform, we have: Thus, the Laplace transform of is:    "
},
{
  "id": "p4-c1-s3-2-rq1",
  "level": "2",
  "url": "main-8-3-5-4.html#p4-c1-s3-2-rq1",
  "type": "Reading Question",
  "number": "9.3.2.1",
  "title": "<em class=\"emphasis\"><span class=\"process-math\">\\(\\quad \\lap{e^{5t} \\sin(2t)} = \\)<\/span> <span class=\"fillin underline\" role=\"img\" aria-label=\"15-character blank\" style=\"width: 6.818181818181818em;\" \/><\/em>.",
  "body": "       Correct! The translation property shifts the transform of by 5 units, giving        No, the translation property involves shifting the transform of by 5, not by 2.       No, the correct shift should be , not .       No, the denominator should have , not 2.    "
},
{
  "id": "p4-c1-s3-2-rq2",
  "level": "2",
  "url": "main-8-3-5-4.html#p4-c1-s3-2-rq2",
  "type": "Reading Question",
  "number": "9.3.2.2",
  "title": "<em class=\"emphasis\"><span class=\"process-math\">\\(\\quad \\lap{e^{2t} t^3} = \\)<\/span> <span class=\"fillin underline\" role=\"img\" aria-label=\"15-character blank\" style=\"width: 6.818181818181818em;\" \/><\/em>.",
  "body": "        Correct! The translation property applied to gives        No, the correct shift should be , not .       No, the denominator should have , not 3.       No, the correct shift should be and the power should be 4.    "
},
{
  "id": "p4-c1-s3-2-rq3",
  "level": "2",
  "url": "main-8-3-5-4.html#p4-c1-s3-2-rq3",
  "type": "Reading Question",
  "number": "9.3.2.3",
  "title": "<em class=\"emphasis\"><span class=\"process-math\">\\(\\quad \\lap{e^{4t} \\cos(5t)} = \\)<\/span> <span class=\"fillin underline\" role=\"img\" aria-label=\"15-character blank\" style=\"width: 6.818181818181818em;\" \/><\/em>.",
  "body": "        Correct! The Laplace transform of is        No, the correct shift should be , not .       No, the shift should be and the denominator should have        No, the correct denominator should be , not     "
},
{
  "id": "p4-c1-s3-2-rq4",
  "level": "2",
  "url": "main-8-3-5-4.html#p4-c1-s3-2-rq4",
  "type": "Reading Question",
  "number": "9.3.2.4",
  "title": "<em class=\"emphasis\">The translation property only works for exponential functions multiplied by sine and cosine functions<\/em>.",
  "body": " The translation property only works for exponential functions multiplied by sine and cosine functions   False. The translation property applies to any function multiplied by an exponential term   "
},
{
  "id": "p4-c1-s3-2-rq5",
  "level": "2",
  "url": "main-8-3-5-4.html#p4-c1-s3-2-rq5",
  "type": "Reading Question",
  "number": "9.3.2.5",
  "title": "<em class=\"emphasis\">If <span class=\"process-math\">\\(\\ds\\lap{f(t)}=\\frac{1}{s(s+1)}\\text{,}\\)<\/span> what is the Laplace transform of <span class=\"process-math\">\\(e^{2t}f(t)\\text{?}\\)<\/span><\/em>",
  "body": " If , what is the Laplace transform of ?      No, the correct shift should be , not .       No, the correct shift should be , not .       No, the correct shift should be , not .       Correct! The translation property shifts the transform of by 2 units, giving     "
},
{
  "id": "main-8-3-5-5",
  "level": "1",
  "url": "main-8-3-5-5.html",
  "type": "Subsection",
  "number": "9.3.3",
  "title": "Derivative Transform",
  "body": "Derivative Transform  The derivative property of the Laplace transform is one of its most powerful aspects, especially when solving differential equations. This property allows us to transform differential equations into algebraic equations, making them easier to solve.   Show that .                                            This result is crucial for solving differential equations. Essentially, it allows us to eliminate derivatives from an equation, transforming the problem into an algebraic form that's easier to solve. But there's more—this property also works recursively, allowing us to handle higher-order derivatives as well.  For example, let's see how this property extends to second and third derivatives: And the pattern continues for higher derivatives.  Laplace Transform Properties  Let .                Check-Point Questions   The Laplace transform of the derivative is given by   False. The correct formula is .    The derivative property of the Laplace transform allows us to convert differential equations into algebraic equations   True. The derivative property simplifies differential equations into algebraic equations by transforming derivatives into powers of .          No, try again.       No, try again.       Correct! .       No, try again.      If and , then     1   Correct! The Laplace transform of with the given initial conditions is .     0   No, this is incorrect. Remember to account for the initial condition .     s   No, this is incorrect. The constant term should be , not .     -1   No, this is incorrect. The correct constant term is positive .        "
},
{
  "id": "main-8-3-5-5-3",
  "level": "2",
  "url": "main-8-3-5-5.html#main-8-3-5-5-3",
  "type": "Example",
  "number": "10",
  "title": "",
  "body": " Show that .                                           "
},
{
  "id": "p4-c1-s3-3-rq1",
  "level": "2",
  "url": "main-8-3-5-5.html#p4-c1-s3-3-rq1",
  "type": "Reading Question",
  "number": "9.3.3.1",
  "title": "<em class=\"emphasis\">The Laplace transform of the derivative <span class=\"process-math\">\\(f'(t) \\)<\/span> is given by <span class=\"process-math\">\\(s\\lap{f(t)}+f(0)\\)<\/span><\/em>.",
  "body": " The Laplace transform of the derivative is given by   False. The correct formula is .  "
},
{
  "id": "p4-c1-s3-3-rq2",
  "level": "2",
  "url": "main-8-3-5-5.html#p4-c1-s3-3-rq2",
  "type": "Reading Question",
  "number": "9.3.3.2",
  "title": "<em class=\"emphasis\">The derivative property of the Laplace transform allows us to convert differential equations into algebraic equations<\/em>.",
  "body": " The derivative property of the Laplace transform allows us to convert differential equations into algebraic equations   True. The derivative property simplifies differential equations into algebraic equations by transforming derivatives into powers of .  "
},
{
  "id": "p4-c1-s3-3-rq3",
  "level": "2",
  "url": "main-8-3-5-5.html#p4-c1-s3-3-rq3",
  "type": "Reading Question",
  "number": "9.3.3.3",
  "title": "<em class=\"emphasis\"><span class=\"process-math\">\\(\\quad\\ds\\lap{\\frac{d}{dt}[e^t\\cos (t)]} = \\)<\/span> <span class=\"fillin underline\" role=\"img\" aria-label=\"15-character blank\" style=\"width: 6.818181818181818em;\" \/><\/em>.",
  "body": "       No, try again.       No, try again.       Correct! .       No, try again.    "
},
{
  "id": "p4-c1-s3-3-rq4",
  "level": "2",
  "url": "main-8-3-5-5.html#p4-c1-s3-3-rq4",
  "type": "Reading Question",
  "number": "9.3.3.4",
  "title": "<em class=\"emphasis\">If <span class=\"process-math\">\\(y(0) = 0\\)<\/span> and <span class=\"process-math\">\\(y'(0) = 1\\text{,}\\)<\/span> then <span class=\"process-math\">\\(\\ds\\lap{y''} = s^2Y - \\fillinmath{X} \\)<\/span><\/em>.",
  "body": " If and , then     1   Correct! The Laplace transform of with the given initial conditions is .     0   No, this is incorrect. Remember to account for the initial condition .     s   No, this is incorrect. The constant term should be , not .     -1   No, this is incorrect. The correct constant term is positive .    "
},
{
  "id": "main-8-3-5-6",
  "level": "1",
  "url": "main-8-3-5-6.html",
  "type": "Subsection",
  "number": "9.3.4",
  "title": "Multiplication by <span class=\"process-math\">\\(t^n\\)<\/span>",
  "body": "Multiplication by   The final property we'll explore is how the Laplace transform handles functions multiplied by a power of . This property is especially useful when dealing with polynomial terms in differential equations.   Show that .  For this problem, it's easier to start on the right side and show that it equals the left:                                            This shows that multiplying a function by inside a Laplace transform is equivalent to taking the derivative of the Laplace transform of the same function, multiplied by . It turns out that each additional power of adds another negative sign and derivative.   Show that .  Again, it's easier to start on the right side and work our way to the left:                                            A similar process shows that for any power of , the Laplace transform is the -th derivative of the Laplace transform of the function, with the sign alternating. The general property is given by: . The only difference is that you are taking the -th derivative of inside the integral.  Laplace Transform Property  Let .          Check-Point Questions   The Laplace transform of is equal to derivative of the Laplace transform of with respect to    second   Correct! The Laplace transform of is equal to the second derivative of with respect to .     first   Incorrect. The Laplace transform of involves the second derivative, not the first.     third   Incorrect. The Laplace transform of involves the second derivative, not the third.     fourth   Incorrect. The Laplace transform of involves the second derivative, not the fourth.      What is the Laplace transform of in terms of ?      Correct! The Laplace transform of is .       Incorrect. The correct expression includes a factor of .       Incorrect. This would be the transform for , not .       Incorrect. The correct transform involves a third derivative, not the second.      Hypothetically, if then        Incorrect. The correct answer should involve a derivative of .       Correct!        Incorrect. The Laplace transform of is .       Incorrect. The correct answer should involve a factor of in the transform.      "
},
{
  "id": "main-8-3-5-6-3",
  "level": "2",
  "url": "main-8-3-5-6.html#main-8-3-5-6-3",
  "type": "Example",
  "number": "11",
  "title": "",
  "body": " Show that .  For this problem, it's easier to start on the right side and show that it equals the left:                                           "
},
{
  "id": "main-8-3-5-6-5",
  "level": "2",
  "url": "main-8-3-5-6.html#main-8-3-5-6-5",
  "type": "Example",
  "number": "12",
  "title": "",
  "body": " Show that .  Again, it's easier to start on the right side and work our way to the left:                                           "
},
{
  "id": "p4-c1-s3-4-rq1",
  "level": "2",
  "url": "main-8-3-5-6.html#p4-c1-s3-4-rq1",
  "type": "Reading Question",
  "number": "9.3.4.1",
  "title": "<em class=\"emphasis\">The Laplace transform of <span class=\"process-math\">\\(\\ds t^2 f(t) \\)<\/span> is equal to <span class=\"fillin underline\" role=\"img\" aria-label=\"10-character blank\" style=\"width: 4.545454545454546em;\" \/> derivative of the Laplace transform of <span class=\"process-math\">\\(\\ds f(t) \\)<\/span> with respect to <span class=\"process-math\">\\(\\ds s \\)<\/span><\/em>.",
  "body": " The Laplace transform of is equal to derivative of the Laplace transform of with respect to    second   Correct! The Laplace transform of is equal to the second derivative of with respect to .     first   Incorrect. The Laplace transform of involves the second derivative, not the first.     third   Incorrect. The Laplace transform of involves the second derivative, not the third.     fourth   Incorrect. The Laplace transform of involves the second derivative, not the fourth.    "
},
{
  "id": "p4-c1-s3-4-rq2",
  "level": "2",
  "url": "main-8-3-5-6.html#p4-c1-s3-4-rq2",
  "type": "Reading Question",
  "number": "9.3.4.2",
  "title": "<em class=\"emphasis\">What is the Laplace transform of <span class=\"process-math\">\\(\\ds t^3 f(t) \\)<\/span> in terms of <span class=\"process-math\">\\(\\ds \\lap{ f(t) } \\text{?}\\)<\/span><\/em>",
  "body": " What is the Laplace transform of in terms of ?      Correct! The Laplace transform of is .       Incorrect. The correct expression includes a factor of .       Incorrect. This would be the transform for , not .       Incorrect. The correct transform involves a third derivative, not the second.    "
},
{
  "id": "p4-c1-s3-4-rq3",
  "level": "2",
  "url": "main-8-3-5-6.html#p4-c1-s3-4-rq3",
  "type": "Reading Question",
  "number": "9.3.4.3",
  "title": "<em class=\"emphasis\">Hypothetically, if <span class=\"process-math\">\\(\\ds \\lap{f(t)} = \\cos(2s) \\)<\/span> then <span class=\"process-math\">\\(\\ds \\lap{ tf(t) } = \\)<\/span> <span class=\"fillin underline\" role=\"img\" aria-label=\"10-character blank\" style=\"width: 4.545454545454546em;\" \/><\/em>.",
  "body": " Hypothetically, if then        Incorrect. The correct answer should involve a derivative of .       Correct!        Incorrect. The Laplace transform of is .       Incorrect. The correct answer should involve a factor of in the transform.    "
},
{
  "id": "main-8-3-6",
  "level": "1",
  "url": "main-8-3-6.html",
  "type": "Section",
  "number": "9.4",
  "title": "Forward Transforming Equations",
  "body": "Forward Transforming Equations  In the previous sections, we've focused on applying Laplace transforms to individual functions. Now, we shift our focus to solving differential equations by transforming the entire equation, along with its initial conditions. This process brings us back to the first step of the Laplace Transform Method roadmap.    Step 1: The Forward Laplace Transform    To solve a differential equation using Laplace transforms, we apply the Laplace transform to both sides of the equation, leveraging the common transforms and properties we've discussed so far. Applying the transform to a function can be thought of as multiplying the function by and integrating with respect to . However, instead of rewriting this process for each term, we simply apply the Laplace operator, , to both sides of the equation. Let's illustrate this with an example.   Apply the Laplace Transform to the initial-value problem:   First, we apply to both sides: Using the linearity property P 1 , we break this into four separate transforms:   Now, let's compute each transform:   Substituting these results back into the equation, we get:     Let's look at one more example for additional clarity.   Apply the Laplace Transform to the initial-value problem:   Applying the Laplace transform to both sides:     In both examples, the differential equations have been transformed into algebraic equations. Solving for is the next step in the Laplace Transform Roadmap.  Check-Point Questions   Applying the Laplace transform to a differential equation transforms the equation into an algebraic equation involving functions of   True. The Laplace transform converts a differential equation into an algebraic equation in .    Which of the following represents the correct Laplace transform of the equation ?      No, this is incorrect. Where are the initial conditions?       Correct! This is the correct transformation of the given differential equation.       No, this is close to the answer, but it is off by a sign.       Incorrect, look closely at the initial conditions.      Which of the following represents the correct Laplace transform of the equation ?      No, this is incorrect. You are missing a term.       No, this is close to the answer. Double check the signs of the initial conditions.       No, this is incorrect. You are missing a term.       Correct! This is the correct transformation using the Laplace transform and applying initial conditions.      What is the Laplace transform of the initial-value problem ?      No, this is incorrect. Double-check the signs and the initial condition terms.       Correct! This is the correct transformation of the initial-value problem.       No, this is incorrect. You are missing the initial condition terms on the left-hand side.       No, this is incorrect. This only represents the transform of and does not account for the left-hand side of the equation.      "
},
{
  "id": "main-8-3-6-5",
  "level": "2",
  "url": "main-8-3-6.html#main-8-3-6-5",
  "type": "Example",
  "number": "13",
  "title": "",
  "body": " Apply the Laplace Transform to the initial-value problem:   First, we apply to both sides: Using the linearity property P 1 , we break this into four separate transforms:   Now, let's compute each transform:   Substituting these results back into the equation, we get:    "
},
{
  "id": "main-8-3-6-7",
  "level": "2",
  "url": "main-8-3-6.html#main-8-3-6-7",
  "type": "Example",
  "number": "14",
  "title": "",
  "body": " Apply the Laplace Transform to the initial-value problem:   Applying the Laplace transform to both sides:    "
},
{
  "id": "p4-c1-s4-1-rq1",
  "level": "2",
  "url": "main-8-3-6-9.html#p4-c1-s4-1-rq1",
  "type": "Reading Question",
  "number": "9.4.1",
  "title": "<em class=\"emphasis\">Applying the Laplace transform to a differential equation transforms the equation into an algebraic equation involving functions of <span class=\"process-math\">\\(s\\)<\/span><\/em>.",
  "body": " Applying the Laplace transform to a differential equation transforms the equation into an algebraic equation involving functions of   True. The Laplace transform converts a differential equation into an algebraic equation in .  "
},
{
  "id": "p4-c1-s4-1-rq2",
  "level": "2",
  "url": "main-8-3-6-9.html#p4-c1-s4-1-rq2",
  "type": "Reading Question",
  "number": "9.4.2",
  "title": "<em class=\"emphasis\">Which of the following represents the correct Laplace transform of the equation<div class=\"displaymath process-math\">\n\\begin{equation*}\ny'' + 3y' + 2y = -40e^{3t}, \\quad y(0) = 1, \\quad y'(0) = 0\\text{?}\n\\end{equation*}\n<\/div><\/em>",
  "body": " Which of the following represents the correct Laplace transform of the equation ?      No, this is incorrect. Where are the initial conditions?       Correct! This is the correct transformation of the given differential equation.       No, this is close to the answer, but it is off by a sign.       Incorrect, look closely at the initial conditions.    "
},
{
  "id": "p4-c1-s4-1-rq3",
  "level": "2",
  "url": "main-8-3-6-9.html#p4-c1-s4-1-rq3",
  "type": "Reading Question",
  "number": "9.4.3",
  "title": "<em class=\"emphasis\">Which of the following represents the correct Laplace transform of the equation<div class=\"displaymath process-math\">\n\\begin{equation*}\ny'' - 4y' + 6y = t^2, \\quad y(0) = 2, \\quad y'(0) = -1\\text{?}\n\\end{equation*}\n<\/div><\/em>",
  "body": " Which of the following represents the correct Laplace transform of the equation ?      No, this is incorrect. You are missing a term.       No, this is close to the answer. Double check the signs of the initial conditions.       No, this is incorrect. You are missing a term.       Correct! This is the correct transformation using the Laplace transform and applying initial conditions.    "
},
{
  "id": "p4-c1-s4-1-rq4",
  "level": "2",
  "url": "main-8-3-6-9.html#p4-c1-s4-1-rq4",
  "type": "Reading Question",
  "number": "9.4.4",
  "title": "<em class=\"emphasis\">What is the Laplace transform of the initial-value problem<div class=\"displaymath process-math\">\n\\begin{equation*}\ny'' - 4y' + 6y = \\sin t, \\quad y(0) = 2, \\quad y'(0) = 0\\text{?}\n\\end{equation*}\n<\/div><\/em>",
  "body": " What is the Laplace transform of the initial-value problem ?      No, this is incorrect. Double-check the signs and the initial condition terms.       Correct! This is the correct transformation of the initial-value problem.       No, this is incorrect. You are missing the initial condition terms on the left-hand side.       No, this is incorrect. This only represents the transform of and does not account for the left-hand side of the equation.    "
},
{
  "id": "main-8-3-7",
  "level": "1",
  "url": "main-8-3-7.html",
  "type": "Section",
  "number": "9.5",
  "title": "Summary &amp; Exercises",
  "body": "Summary & Exercises   In this section, we introduced the concept of the forward Laplace transform and derived some common Laplace transforms that we will use throughtout this chapter. The following points summarize the essential concepts from the forward Laplace transform section:   Summary of the Key Ideas     Differential Algebraic Equations . The Laplace transform converts a differential equation into an algebraic equation, simplifying the solution process by eliminating derivatives.   Laplace Transform Concept . Applying the Laplace transform to a differential equation involves transforming each term by multiplying by and integrating with respect to from to , but is often simplified by directly applying the Laplace operator, .   Linearity Property . The Laplace transform is linear, meaning it distributes across addition and subtraction, and allows for constants to be factored out. This property is essential for transforming complex equations.   Transforming Initial Conditions . Initial conditions are incorporated directly into the Laplace-transformed equation, modifying the transformed terms to include initial values, making it easier to solve the resulting algebraic equation.   Common Function Transforms . The Laplace transforms of common functions, such as exponentials, sines, cosines, and polynomials, are essential tools in transforming differential equations and are summarized in the provided table.   Transforming Derivatives . The Laplace transform of a derivative, or higher, transfers the derivative onto the Laplace variable , reducing the order of the equation while introducing initial condition terms.   Multiplication by and . When multiplying a function by an exponential , the Laplace transform shifts by in the -domain, and multiplying by corresponds to differentiating the transform times with respect to , introducing a sign change.   Transforming the Entire Equation . The process of applying the Laplace transform to an entire differential equation with initial conditions involves systematically transforming each term and leads to a simplified algebraic equation in the -domain, ready for solving.      The table below summarizes the common Laplace transforms that we derived in this section.  Common Laplace Transforms  Let and be constant.                             Laplace Transform Property  Let and .   are constants   is a constant                   Definition of the Laplace Transform   Use the definition to compute each of the following Laplace Transforms.       In order to evaluate this integral, we will need to compute an integration by parts. When that time comes, we will choose an Then we take the derivative o to fin and the antiderivative o to fin , as follows. Note also that we will use L'Hospital's Rule when we have a limit of for         \\\\ We will use the results from the previous two questions. Notice that what we showed in the middle of all this is that This is an example of the linearity property of Laplace Transforms.      \\\\       To compute this, we use the definition of the Laplace transform.          By the above definition, we have At this point, we need to assume that in order to continue. If you are curious as to why, see this note for an explanation. Next, we integrate using the substitution .             We use the definition of Laplace transform to get us started. As before, we need restrict some values of in order for this improper integral to exist . In this case, we will need , in the exponent, to be non-zero and negative. That is, we need Hence, we move forward with the assumption that . Thus, .          Let's use the definition of Laplace transform to get us going.    Hence, we have , under the condition that .    Forward Transform   Compute the forward Laplace Transforms using the common Laplace transform table .                                                    Exploring the Forward Laplace Transform   Use the concepts discussed in the section to solve the following exercises.   Answer the following questions related to the Laplace transform of .   Show that .   This follows directly from the definition of the Laplace transform. .     Use integration by parts to show that .   Select and . Then      Plug from (b) into the limit from (a) to show that .   Substitute from (b) into the limit from (a).      In order for to exist, what must be true?   The limit, , must converge. That is, as gets large, the ratio, , flattens out to some number. In order to maintain this ratio, growth rate of must be less than or equal to .       Forward Transform   Compute the forward Laplace Transforms using the common transform table and properties .            Use the first shifting theorem: .      Use the integration by parts method: .      Apply the second shifting theorem: .                    For this solution, we will need to use property L14 wit We will need to know the Laplace transform for this function, so let's do that now. Then we have the following. Note that when we use the quotient rule to take the derivative o .       For this solution, we will need to use property L14 wit We will need to know the Laplace transform for this function, so let's do that now. In using L14, we will also need the second derivative o so we work to compute that now. Note that we will use the chain rule when we take the derivative o . Then we have the following.    Forward Transforming Equations   Use the forward Laplace transform to solve the following differential equations.   Solve the differential equation given the initial conditions and .   Apply the Laplace transform to both sides of the equation: . Using the properties of the Laplace transform for derivatives, we have: . Substitute the initial conditions and : . Combine like terms: . Solve for : . Factor the denominator: . Use partial fraction decomposition to find the inverse Laplace transform: . Solve for and : . Finally, take the inverse Laplace transform to find : .  Solve the differential equation with the initial condition .   Apply the Laplace transform to both sides: . Use the properties of the Laplace transform: . Substitute the initial condition : . Solve for : . Use partial fraction decomposition: . Find and : . Inverse Laplace transform gives: .    "
},
{
  "id": "main-8-3-7-2-2",
  "level": "2",
  "url": "main-8-3-7.html#main-8-3-7-2-2",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Differential Algebraic Equations Laplace Transform Concept Linearity Property Transforming Initial Conditions Common Function Transforms Transforming Derivatives Multiplication by and Transforming the Entire Equation "
},
{
  "id": "main-8-3-7-3-1-3",
  "level": "2",
  "url": "main-8-3-7-3.html#main-8-3-7-3-1-3",
  "type": "Exercise",
  "number": "9.5.1",
  "title": "",
  "body": "    In order to evaluate this integral, we will need to compute an integration by parts. When that time comes, we will choose an Then we take the derivative o to fin and the antiderivative o to fin , as follows. Note also that we will use L'Hospital's Rule when we have a limit of for    "
},
{
  "id": "main-8-3-7-3-1-4",
  "level": "2",
  "url": "main-8-3-7-3.html#main-8-3-7-3-1-4",
  "type": "Exercise",
  "number": "9.5.2",
  "title": "",
  "body": "    \\\\ We will use the results from the previous two questions. Notice that what we showed in the middle of all this is that This is an example of the linearity property of Laplace Transforms. "
},
{
  "id": "main-8-3-7-3-1-5",
  "level": "2",
  "url": "main-8-3-7-3.html#main-8-3-7-3-1-5",
  "type": "Exercise",
  "number": "9.5.3",
  "title": "",
  "body": "    \\\\  "
},
{
  "id": "main-8-3-7-3-1-6",
  "level": "2",
  "url": "main-8-3-7-3.html#main-8-3-7-3-1-6",
  "type": "Exercise",
  "number": "9.5.4",
  "title": "",
  "body": "    To compute this, we use the definition of the Laplace transform.  "
},
{
  "id": "main-8-3-7-3-1-7",
  "level": "2",
  "url": "main-8-3-7-3.html#main-8-3-7-3-1-7",
  "type": "Exercise",
  "number": "9.5.5",
  "title": "",
  "body": "       By the above definition, we have At this point, we need to assume that in order to continue. If you are curious as to why, see this note for an explanation. Next, we integrate using the substitution .     "
},
{
  "id": "main-8-3-7-3-1-8",
  "level": "2",
  "url": "main-8-3-7-3.html#main-8-3-7-3-1-8",
  "type": "Exercise",
  "number": "9.5.6",
  "title": "",
  "body": "       We use the definition of Laplace transform to get us started. As before, we need restrict some values of in order for this improper integral to exist . In this case, we will need , in the exponent, to be non-zero and negative. That is, we need Hence, we move forward with the assumption that . Thus, .  "
},
{
  "id": "main-8-3-7-3-1-9",
  "level": "2",
  "url": "main-8-3-7-3.html#main-8-3-7-3-1-9",
  "type": "Exercise",
  "number": "9.5.7",
  "title": "",
  "body": "       Let's use the definition of Laplace transform to get us going.    Hence, we have , under the condition that .  "
},
{
  "id": "main-8-3-7-3-2-3",
  "level": "2",
  "url": "main-8-3-7-3.html#main-8-3-7-3-2-3",
  "type": "Exercise",
  "number": "9.5.8",
  "title": "",
  "body": "     "
},
{
  "id": "main-8-3-7-3-2-4",
  "level": "2",
  "url": "main-8-3-7-3.html#main-8-3-7-3-2-4",
  "type": "Exercise",
  "number": "9.5.9",
  "title": "",
  "body": "     "
},
{
  "id": "main-8-3-7-3-2-5",
  "level": "2",
  "url": "main-8-3-7-3.html#main-8-3-7-3-2-5",
  "type": "Exercise",
  "number": "9.5.10",
  "title": "",
  "body": "     "
},
{
  "id": "main-8-3-7-3-2-6",
  "level": "2",
  "url": "main-8-3-7-3.html#main-8-3-7-3-2-6",
  "type": "Exercise",
  "number": "9.5.11",
  "title": "",
  "body": "     "
},
{
  "id": "main-8-3-7-3-2-7",
  "level": "2",
  "url": "main-8-3-7-3.html#main-8-3-7-3-2-7",
  "type": "Exercise",
  "number": "9.5.12",
  "title": "",
  "body": "     "
},
{
  "id": "main-8-3-7-3-2-8",
  "level": "2",
  "url": "main-8-3-7-3.html#main-8-3-7-3-2-8",
  "type": "Exercise",
  "number": "9.5.13",
  "title": "",
  "body": "     "
},
{
  "id": "main-8-3-7-3-2-9",
  "level": "2",
  "url": "main-8-3-7-3.html#main-8-3-7-3-2-9",
  "type": "Exercise",
  "number": "9.5.14",
  "title": "",
  "body": "     "
},
{
  "id": "main-8-3-7-3-2-10",
  "level": "2",
  "url": "main-8-3-7-3.html#main-8-3-7-3-2-10",
  "type": "Exercise",
  "number": "9.5.15",
  "title": "",
  "body": "     "
},
{
  "id": "main-8-3-7-3-3-3",
  "level": "2",
  "url": "main-8-3-7-3.html#main-8-3-7-3-3-3",
  "type": "Exercise",
  "number": "9.5.16",
  "title": "",
  "body": "Answer the following questions related to the Laplace transform of .   Show that .   This follows directly from the definition of the Laplace transform. .     Use integration by parts to show that .   Select and . Then      Plug from (b) into the limit from (a) to show that .   Substitute from (b) into the limit from (a).      In order for to exist, what must be true?   The limit, , must converge. That is, as gets large, the ratio, , flattens out to some number. In order to maintain this ratio, growth rate of must be less than or equal to .     "
},
{
  "id": "main-8-3-7-3-4-3",
  "level": "2",
  "url": "main-8-3-7-3.html#main-8-3-7-3-4-3",
  "type": "Exercise",
  "number": "9.5.17",
  "title": "",
  "body": "    "
},
{
  "id": "main-8-3-7-3-4-4",
  "level": "2",
  "url": "main-8-3-7-3.html#main-8-3-7-3-4-4",
  "type": "Exercise",
  "number": "9.5.18",
  "title": "",
  "body": "    Use the first shifting theorem: . "
},
{
  "id": "main-8-3-7-3-4-5",
  "level": "2",
  "url": "main-8-3-7-3.html#main-8-3-7-3-4-5",
  "type": "Exercise",
  "number": "9.5.19",
  "title": "",
  "body": "    Use the integration by parts method: . "
},
{
  "id": "main-8-3-7-3-4-6",
  "level": "2",
  "url": "main-8-3-7-3.html#main-8-3-7-3-4-6",
  "type": "Exercise",
  "number": "9.5.20",
  "title": "",
  "body": "    Apply the second shifting theorem: . "
},
{
  "id": "main-8-3-7-3-4-7",
  "level": "2",
  "url": "main-8-3-7-3.html#main-8-3-7-3-4-7",
  "type": "Exercise",
  "number": "9.5.21",
  "title": "",
  "body": "    "
},
{
  "id": "main-8-3-7-3-4-8",
  "level": "2",
  "url": "main-8-3-7-3.html#main-8-3-7-3-4-8",
  "type": "Exercise",
  "number": "9.5.22",
  "title": "",
  "body": "       "
},
{
  "id": "main-8-3-7-3-4-9",
  "level": "2",
  "url": "main-8-3-7-3.html#main-8-3-7-3-4-9",
  "type": "Exercise",
  "number": "9.5.23",
  "title": "",
  "body": "     For this solution, we will need to use property L14 wit We will need to know the Laplace transform for this function, so let's do that now. Then we have the following. Note that when we use the quotient rule to take the derivative o .  "
},
{
  "id": "main-8-3-7-3-4-10",
  "level": "2",
  "url": "main-8-3-7-3.html#main-8-3-7-3-4-10",
  "type": "Exercise",
  "number": "9.5.24",
  "title": "",
  "body": "    For this solution, we will need to use property L14 wit We will need to know the Laplace transform for this function, so let's do that now. In using L14, we will also need the second derivative o so we work to compute that now. Note that we will use the chain rule when we take the derivative o . Then we have the following.  "
},
{
  "id": "main-8-3-7-3-5-3",
  "level": "2",
  "url": "main-8-3-7-3.html#main-8-3-7-3-5-3",
  "type": "Exercise",
  "number": "9.5.25",
  "title": "",
  "body": "Solve the differential equation given the initial conditions and .   Apply the Laplace transform to both sides of the equation: . Using the properties of the Laplace transform for derivatives, we have: . Substitute the initial conditions and : . Combine like terms: . Solve for : . Factor the denominator: . Use partial fraction decomposition to find the inverse Laplace transform: . Solve for and : . Finally, take the inverse Laplace transform to find : . "
},
{
  "id": "main-8-3-7-3-5-4",
  "level": "2",
  "url": "main-8-3-7-3.html#main-8-3-7-3-5-4",
  "type": "Exercise",
  "number": "9.5.26",
  "title": "",
  "body": "Solve the differential equation with the initial condition .   Apply the Laplace transform to both sides: . Use the properties of the Laplace transform: . Substitute the initial condition : . Solve for : . Use partial fraction decomposition: . Find and : . Inverse Laplace transform gives: . "
},
{
  "id": "main-8-4-3-3",
  "level": "1",
  "url": "main-8-4-3-3.html",
  "type": "Subsection",
  "number": "10.1.1",
  "title": "Matched Forms",
  "body": "Matched Forms  The Laplace Transform Method begins with the forward Laplace transform of a differential equation with an unknown function into an algebraic equation involving the transformed function . Once we have solved for , the final step is to recover the original function, , by applying the backward (inverse) Laplace transform, denoted as .  Much like how reverses the cosine function, applying to both sides of a Laplace-transformed expression brings us back to the original function. For example, if then, applying the inverse Laplace transform gives: To identify the appropriate inverse Laplace transform, we rely on the common transforms in the table below, where we match the function of on the right and the inverse is the function of on the left.   Common Laplace Transforms. are constant,      -functions  -functions                                                                Many functions can be matched by simply observing the denominator. The following table summarizes common patterns for matching denominators with their associated inverse transforms:  Matching Guide: -function Inverse Transform    Denominator   in Numerator?  Transform     -      -      -      -       no  yes           no  yes          Now, let's look at some examples.   Find the inverse Laplace transforms of each function.        This matches the form with . So,            This matches the L_7 form with and . So, .           This matches the L_3 with .        These examples demonstrate how to find the inverse Laplace Transform when the -function matches a form on the right side of the common transforms table. However, not all functions will align perfectly with the table, and additional adjustments are needed to match the forms. In the next discussion, we will explore how to modify the -function to match the common forms in the table.  Check-Point Questions   The table of common forward Laplace transforms can also be used to find inverse Laplace transforms   True. The same table used for forward transforms is used for backward transforms, but in reverse order.    The inverse Laplace transform undoes the effect of the forward Laplace transform, allowing us to recover the original function from   True. The inverse Laplace transform reverses the forward transformation, converting back into .    In the Laplace Transform Method, the backward transform    converts a differential equation into an algebraic equation.   No, this describes the forward Laplace transform.     solves the algebraic equation for .   No, solving for happens after applying the forward transform.     recovers the original function from .   Correct! The inverse Laplace transform brings us back to the original function .     eliminates initial conditions from the equation.   No, initial conditions are incorporated into the transformed equation, not eliminated.           Correct! The inverse Laplace transform of is .       No, the correct transform for is , not .       No, this is not the correct inverse transform for the given expression.       No, this is not an inverse transform expression.           Correct! The inverse Laplace transform of is indeed .       No, the correct answer is , not .       No, the exponent should be , not .       No, this is not the correct inverse Laplace transform.           No, this is incorrect. The correct answer is .       Correct! The inverse Laplace transform of is .       No, the correct answer is , not .       No, this is the original function in the -domain, not its inverse transform.           Correct! The inverse Laplace transform of is .       No, the correct inverse Laplace transform is , not .       No, the correct inverse transform is , not .       No, the correct answer is , not .           Correct! The inverse Laplace transform of is .       No, the correct answer is , not .       No, this is not the correct inverse transform for the given expression.       No, the correct inverse transform for is .           Correct! The inverse Laplace transform of is .       No, the correct answer is , not .       No, the correct inverse transform is , not .       No, the correct answer is , not .      "
},
{
  "id": "common-lt-table",
  "level": "2",
  "url": "main-8-4-3-3.html#common-lt-table",
  "type": "Table",
  "number": "16",
  "title": "<em class=\"emphasis\">Common Laplace Transforms. <span class=\"process-math\">\\(a, b\\)<\/span> are constant, <span class=\"process-math\">\\(n = 1, 2, \\ldots\\)<\/span><\/em>",
  "body": " Common Laplace Transforms. are constant,      -functions  -functions                                                               "
},
{
  "id": "backward-lt-rules-of-thumb",
  "level": "2",
  "url": "main-8-4-3-3.html#backward-lt-rules-of-thumb",
  "type": "Table",
  "number": "17",
  "title": "Matching Guide: <span class=\"process-math\">\\(s\\)<\/span>-function <span class=\"process-math\">\\(\\rightarrow\\)<\/span> Inverse Transform",
  "body": "Matching Guide: -function Inverse Transform    Denominator   in Numerator?  Transform     -      -      -      -       no  yes           no  yes         "
},
{
  "id": "main-8-4-3-3-8",
  "level": "2",
  "url": "main-8-4-3-3.html#main-8-4-3-3-8",
  "type": "Example",
  "number": "18",
  "title": "",
  "body": " Find the inverse Laplace transforms of each function.        This matches the form with . So,            This matches the L_7 form with and . So, .           This matches the L_3 with .       "
},
{
  "id": "p4-c2-s1-1-rq1",
  "level": "2",
  "url": "main-8-4-3-3.html#p4-c2-s1-1-rq1",
  "type": "Reading Question",
  "number": "10.1.1.1",
  "title": "<em class=\"emphasis\">The table of common forward Laplace transforms can also be used to find inverse Laplace transforms<\/em>.",
  "body": " The table of common forward Laplace transforms can also be used to find inverse Laplace transforms   True. The same table used for forward transforms is used for backward transforms, but in reverse order.  "
},
{
  "id": "p4-c2-s1-1-rq2",
  "level": "2",
  "url": "main-8-4-3-3.html#p4-c2-s1-1-rq2",
  "type": "Reading Question",
  "number": "10.1.1.2",
  "title": "<em class=\"emphasis\">The inverse Laplace transform undoes the effect of the forward Laplace transform, allowing us to recover the original function <span class=\"process-math\">\\(y(t)\\)<\/span> from <span class=\"process-math\">\\(Y(s)\\)<\/span><\/em>.",
  "body": " The inverse Laplace transform undoes the effect of the forward Laplace transform, allowing us to recover the original function from   True. The inverse Laplace transform reverses the forward transformation, converting back into .  "
},
{
  "id": "p4-c2-s1-1-rq3",
  "level": "2",
  "url": "main-8-4-3-3.html#p4-c2-s1-1-rq3",
  "type": "Reading Question",
  "number": "10.1.1.3",
  "title": "<em class=\"emphasis\">In the Laplace Transform Method, the backward transform <span class=\"process-math\">\\(\\fillinmath{XXXXX}\\)<\/span><\/em>.",
  "body": " In the Laplace Transform Method, the backward transform    converts a differential equation into an algebraic equation.   No, this describes the forward Laplace transform.     solves the algebraic equation for .   No, solving for happens after applying the forward transform.     recovers the original function from .   Correct! The inverse Laplace transform brings us back to the original function .     eliminates initial conditions from the equation.   No, initial conditions are incorporated into the transformed equation, not eliminated.    "
},
{
  "id": "p4-c2-s1-1-rq4",
  "level": "2",
  "url": "main-8-4-3-3.html#p4-c2-s1-1-rq4",
  "type": "Reading Question",
  "number": "10.1.1.4",
  "title": "<em class=\"emphasis\"><span class=\"process-math\">\\(\\ds\\quad \\ilap{\\frac{3}{s^2 + 9}} = \\fillinmath{XXXXXX}\\)<\/span><\/em>.",
  "body": "      Correct! The inverse Laplace transform of is .       No, the correct transform for is , not .       No, this is not the correct inverse transform for the given expression.       No, this is not an inverse transform expression.    "
},
{
  "id": "p4-c2-s1-1-rq6",
  "level": "2",
  "url": "main-8-4-3-3.html#p4-c2-s1-1-rq6",
  "type": "Reading Question",
  "number": "10.1.1.5",
  "title": "<em class=\"emphasis\"><span class=\"process-math\">\\(\\ds\\quad \\ilap{\\frac{1}{s+3}} = \\fillinmath{XXXXXX}\\)<\/span><\/em>.",
  "body": "      Correct! The inverse Laplace transform of is indeed .       No, the correct answer is , not .       No, the exponent should be , not .       No, this is not the correct inverse Laplace transform.    "
},
{
  "id": "p4-c2-s1-1-rq7",
  "level": "2",
  "url": "main-8-4-3-3.html#p4-c2-s1-1-rq7",
  "type": "Reading Question",
  "number": "10.1.1.6",
  "title": "<em class=\"emphasis\"><span class=\"process-math\">\\(\\ds\\quad \\ilap{\\frac{24}{s^5}} = \\fillinmath{XXXXXX}\\)<\/span><\/em>.",
  "body": "      No, this is incorrect. The correct answer is .       Correct! The inverse Laplace transform of is .       No, the correct answer is , not .       No, this is the original function in the -domain, not its inverse transform.    "
},
{
  "id": "p4-c2-s1-1-rq8",
  "level": "2",
  "url": "main-8-4-3-3.html#p4-c2-s1-1-rq8",
  "type": "Reading Question",
  "number": "10.1.1.7",
  "title": "<em class=\"emphasis\"><span class=\"process-math\">\\(\\ds\\quad \\ilap{\\frac{2}{s^2 + 4}} = \\fillinmath{XXXXXX}\\)<\/span><\/em>.",
  "body": "      Correct! The inverse Laplace transform of is .       No, the correct inverse Laplace transform is , not .       No, the correct inverse transform is , not .       No, the correct answer is , not .    "
},
{
  "id": "p4-c2-s1-1-rq9",
  "level": "2",
  "url": "main-8-4-3-3.html#p4-c2-s1-1-rq9",
  "type": "Reading Question",
  "number": "10.1.1.8",
  "title": "<em class=\"emphasis\"><span class=\"process-math\">\\(\\ds\\quad \\ilap{\\frac{1}{s - 5}} = \\fillinmath{XXXXXX}\\)<\/span><\/em>.",
  "body": "      Correct! The inverse Laplace transform of is .       No, the correct answer is , not .       No, this is not the correct inverse transform for the given expression.       No, the correct inverse transform for is .    "
},
{
  "id": "p4-c2-s1-1-rq10",
  "level": "2",
  "url": "main-8-4-3-3.html#p4-c2-s1-1-rq10",
  "type": "Reading Question",
  "number": "10.1.1.9",
  "title": "<em class=\"emphasis\"><span class=\"process-math\">\\(\\ds\\quad \\ilap{\\frac{1}{(s+4)^2}} = \\fillinmath{XXXXXX}\\)<\/span><\/em>.",
  "body": "      Correct! The inverse Laplace transform of is .       No, the correct answer is , not .       No, the correct inverse transform is , not .       No, the correct answer is , not .    "
},
{
  "id": "main-8-4-3-4",
  "level": "1",
  "url": "main-8-4-3-4.html",
  "type": "Subsection",
  "number": "10.1.2",
  "title": "Mismatched Forms",
  "body": "Mismatched Forms  When working with Laplace transforms, it's common to encounter algebraic expressions that don't perfectly match the standard forms we use for the inverse Laplace transform. In these cases, we need to manipulate the expression to make it fit one of the known forms.  For example, consider the expression: While it's not an exact match, we can observe from the denominator that   However, the numerator doesn't match yet. To correct this, we need a 5 in the numerator. We can't just multiply the numerator by 5 without changing the value, so instead, we multiply the entire expression by , which is equivalent to multiplying by 1: Multiplying by doesn’t change the value of the expression, but it allows us to match the standard form.  One of the most common adjustments is introducing a missing constant in the numerator, as we did earlier. By multiplying both the numerator and denominator by this constant, we maintain the expression's value while transforming it into a recognizable form. Let’s look at some examples:   Compute the inverse Laplace transforms for each.          The in the denominator tells us that we need . Before we do, let's factor out : .            Since the denominator has the form, , and there is no in the numerator, we should apply . As before, it is helpful to first factor out the constant , . According to , we are missing in the numerator. Let's put it there by multiplying by , like so             This denominator has the form , which matches with . . In this case, the numerator is missing a . We can introduce it by multiplying by , like so             The denominator here is , which matches with . Therefore, .            The form of this denominator is and has no in the numerator. This matches with and . Therefore,             The denominator, , matches with and . Therefore,         Check-Point Questions   The most challenging part of the Laplace transform method is preparing the -function for the backward Laplace transform   True. Preparing the s-function to match a known form in the backward Laplace transform table can be the most challenging step in the Laplace transform method.          Incorrect.       Incorrect.       Correct!       Incorrect.      Fill-in-the-blank.      Incorrect.       Incorrect.       Incorrect.       Correct!      Which of the following -functions require adjustment to match one of the common inverse Laplace transforms?      Incorrect. This function already matches a known cosine form and does not require any missing constants.       Correct! This function would require a missing constant adjustment to match the sine form, with the numerator needing to be .       Incorrect. This function already matches a known form and does not require any missing constants.            Correct! Factoring out and placing the missing constant gives the correct form: .       Incorrect. The correct answer requires factoring and rebalancing, giving .       Incorrect. The sine form, not cosine, matches this function.      Fill-in-the-blank.      Correct!       Incorrect.       Incorrect.       Incorrect.      "
},
{
  "id": "main-8-4-3-4-6",
  "level": "2",
  "url": "main-8-4-3-4.html#main-8-4-3-4-6",
  "type": "Example",
  "number": "19",
  "title": "",
  "body": " Compute the inverse Laplace transforms for each.          The in the denominator tells us that we need . Before we do, let's factor out : .            Since the denominator has the form, , and there is no in the numerator, we should apply . As before, it is helpful to first factor out the constant , . According to , we are missing in the numerator. Let's put it there by multiplying by , like so             This denominator has the form , which matches with . . In this case, the numerator is missing a . We can introduce it by multiplying by , like so             The denominator here is , which matches with . Therefore, .            The form of this denominator is and has no in the numerator. This matches with and . Therefore,             The denominator, , matches with and . Therefore,        "
},
{
  "id": "p4-c2-s1-2-rq1",
  "level": "2",
  "url": "main-8-4-3-4.html#p4-c2-s1-2-rq1",
  "type": "Reading Question",
  "number": "10.1.2.1",
  "title": "<em class=\"emphasis\">The most challenging part of the Laplace transform method is preparing the <span class=\"process-math\">\\(s\\)<\/span>-function for the backward Laplace transform<\/em>.",
  "body": " The most challenging part of the Laplace transform method is preparing the -function for the backward Laplace transform   True. Preparing the s-function to match a known form in the backward Laplace transform table can be the most challenging step in the Laplace transform method.  "
},
{
  "id": "p4-c2-s1-2-rq2",
  "level": "2",
  "url": "main-8-4-3-4.html#p4-c2-s1-2-rq2",
  "type": "Reading Question",
  "number": "10.1.2.2",
  "title": "<em class=\"emphasis\"><span class=\"process-math\">\\(\\ds\\quad \\ilap{\\frac{7}{s^2}} = \\)<\/span> <span class=\"fillin underline\" role=\"img\" aria-label=\"15-character blank\" style=\"width: 6.818181818181818em;\" \/><\/em>.",
  "body": "       Incorrect.       Incorrect.       Correct!       Incorrect.    "
},
{
  "id": "p4-c2-s1-2-rq3",
  "level": "2",
  "url": "main-8-4-3-4.html#p4-c2-s1-2-rq3",
  "type": "Reading Question",
  "number": "10.1.2.3",
  "title": "<em class=\"emphasis\">Fill-in-the-blank. <span class=\"process-math\">\\(\\ds\\quad \\ilap{\\frac{5}{s^4}} = \\frac{5}{6}\\ilap{\\frac{\\fillinmath{X}}{s^4}} \\)<\/span><\/em>.",
  "body": " Fill-in-the-blank.      Incorrect.       Incorrect.       Incorrect.       Correct!    "
},
{
  "id": "p4-c2-s1-2-rq4",
  "level": "2",
  "url": "main-8-4-3-4.html#p4-c2-s1-2-rq4",
  "type": "Reading Question",
  "number": "10.1.2.4",
  "title": "<em class=\"emphasis\">Which of the following <span class=\"process-math\">\\(s\\)<\/span>-functions require adjustment to match one of the common inverse Laplace transforms?<\/em>",
  "body": " Which of the following -functions require adjustment to match one of the common inverse Laplace transforms?      Incorrect. This function already matches a known cosine form and does not require any missing constants.       Correct! This function would require a missing constant adjustment to match the sine form, with the numerator needing to be .       Incorrect. This function already matches a known form and does not require any missing constants.    "
},
{
  "id": "p4-c2-s1-2-rq5",
  "level": "2",
  "url": "main-8-4-3-4.html#p4-c2-s1-2-rq5",
  "type": "Reading Question",
  "number": "10.1.2.5",
  "title": "<em class=\"emphasis\"><span class=\"process-math\">\\(\\ds\\quad \\ilap{\\frac{10}{(s - 2)^2 + 25}} = \\)<\/span> <span class=\"fillin underline\" role=\"img\" aria-label=\"15-character blank\" style=\"width: 6.818181818181818em;\" \/><\/em>.",
  "body": "       Correct! Factoring out and placing the missing constant gives the correct form: .       Incorrect. The correct answer requires factoring and rebalancing, giving .       Incorrect. The sine form, not cosine, matches this function.    "
},
{
  "id": "p4-c2-s1-2-rq6",
  "level": "2",
  "url": "main-8-4-3-4.html#p4-c2-s1-2-rq6",
  "type": "Reading Question",
  "number": "10.1.2.6",
  "title": "<em class=\"emphasis\">Fill-in-the-blank. <span class=\"process-math\">\\(\\ds\\quad \\ilap{\\frac{10}{s^2 + 25}} = \\frac{\\fillinmath{X}}{5}\\ilap{\\frac{5}{s^2 + 25}} \\)<\/span><\/em>.",
  "body": " Fill-in-the-blank.      Correct!       Incorrect.       Incorrect.       Incorrect.    "
},
{
  "id": "main-8-4-4-3",
  "level": "1",
  "url": "main-8-4-4-3.html",
  "type": "Subsection",
  "number": "10.2.1",
  "title": "Splitting Fractions",
  "body": "Splitting Fractions  One useful algebraic manipulation in preparing for the inverse Laplace transform is splitting a rational function that has a sum or difference in the numerator. This technique simplifies the expression into recognizable forms, making it easier to apply known Laplace transform pairs. Let's explore two examples where splitting fractions proves useful.   Compute the inverse Laplace transforms for each.        The key to solving this problem is to split the fraction into two simpler terms: Now, we can apply the inverse Laplace transform to each term separately. The first term matches the Laplace transform of ( ), and the second term corresponds to the Laplace transform of ( ):            We can split the fraction into the terms, and apply the inverse Laplace transform ( ) to each        This section demonstrates how relatively simple modifications, such as splitting fractions, can make it easier to find the inverse Laplace transform. However, some functions of may require more advanced techniques. In the next section, we will explore how completing the square can help match the forms needed for a backward transform when the -variable is shifted.  Check-Point Questions   The function can be split into separate terms that match the forms for sine and cosine inverse Laplace transforms    True   Incorrect. To match with the forms for sine and cosine inverse Laplace transforms, the denominator should have the form .     False   Correct! The denominator should have the form , not .      Which of the following functions can be split into separate terms that match known inverse Laplace transforms?      Incorrect. This function already matches a known sine form and doesn't require splitting.       Correct! This function can be split as , matching cosine and sine forms.       Incorrect. This function matches with the and doesn't require splitting.            Correct! Splitting the function into these two terms allows you to use cosine and sine inverse Laplace transforms on each.       Incorrect. The second term should be subtracted, not added.       Incorrect.       Incorrect.            Correct! The function can be split as , which corresponds to and .       Incorrect.       Incorrect.       Incorrect.      "
},
{
  "id": "main-8-4-4-3-3",
  "level": "2",
  "url": "main-8-4-4-3.html#main-8-4-4-3-3",
  "type": "Example",
  "number": "20",
  "title": "",
  "body": " Compute the inverse Laplace transforms for each.        The key to solving this problem is to split the fraction into two simpler terms: Now, we can apply the inverse Laplace transform to each term separately. The first term matches the Laplace transform of ( ), and the second term corresponds to the Laplace transform of ( ):            We can split the fraction into the terms, and apply the inverse Laplace transform ( ) to each       "
},
{
  "id": "p4-c2-s2-1-rq1",
  "level": "2",
  "url": "main-8-4-4-3.html#p4-c2-s2-1-rq1",
  "type": "Reading Question",
  "number": "10.2.1.1",
  "title": "<em class=\"emphasis\">The function <span class=\"process-math\">\\(\\ds \\frac{s - 4}{s^2 - 16}\\)<\/span> can be split into separate terms that match the forms for sine and cosine inverse Laplace transforms<\/em>.",
  "body": " The function can be split into separate terms that match the forms for sine and cosine inverse Laplace transforms    True   Incorrect. To match with the forms for sine and cosine inverse Laplace transforms, the denominator should have the form .     False   Correct! The denominator should have the form , not .    "
},
{
  "id": "p4-c2-s2-1-rq2",
  "level": "2",
  "url": "main-8-4-4-3.html#p4-c2-s2-1-rq2",
  "type": "Reading Question",
  "number": "10.2.1.2",
  "title": "<em class=\"emphasis\">Which of the following functions can be split into separate terms that match known inverse Laplace transforms?<\/em>",
  "body": " Which of the following functions can be split into separate terms that match known inverse Laplace transforms?      Incorrect. This function already matches a known sine form and doesn't require splitting.       Correct! This function can be split as , matching cosine and sine forms.       Incorrect. This function matches with the and doesn't require splitting.    "
},
{
  "id": "p4-c2-s2-1-rq3",
  "level": "2",
  "url": "main-8-4-4-3.html#p4-c2-s2-1-rq3",
  "type": "Reading Question",
  "number": "10.2.1.3",
  "title": "<em class=\"emphasis\"><span class=\"process-math\">\\(\\quad\\ds \\frac{s - 6}{s^2 - 36} = \\)<\/span> <span class=\"fillin underline\" role=\"img\" aria-label=\"12-character blank\" style=\"width: 5.454545454545454em;\" \/><\/em>.",
  "body": "       Correct! Splitting the function into these two terms allows you to use cosine and sine inverse Laplace transforms on each.       Incorrect. The second term should be subtracted, not added.       Incorrect.       Incorrect.    "
},
{
  "id": "p4-c2-s2-1-rq4",
  "level": "2",
  "url": "main-8-4-4-3.html#p4-c2-s2-1-rq4",
  "type": "Reading Question",
  "number": "10.2.1.4",
  "title": "<em class=\"emphasis\"><span class=\"process-math\">\\(\\quad\\ds \\ilap{\\frac{s + 2}{s^2 + 1}} = \\)<\/span>  <span class=\"fillin underline\" role=\"img\" aria-label=\"12-character blank\" style=\"width: 5.454545454545454em;\" \/><\/em>.",
  "body": "       Correct! The function can be split as , which corresponds to and .       Incorrect.       Incorrect.       Incorrect.    "
},
{
  "id": "main-8-4-4-4",
  "level": "1",
  "url": "main-8-4-4-4.html",
  "type": "Subsection",
  "number": "10.2.2",
  "title": "Completing the Square",
  "body": "Completing the Square  As you progress through the Laplace Transform Method, you will often encounter rational functions that do not immediately match any known form in the table of Laplace transforms . For example, the function does not align with standard forms. A common approach is to rewrite the denominator in the form , allowing it to match known transforms like or . This technique, called completing the square, is essential for converting quadratic expressions into forms that are easier to work with in inverse Laplace computations.  Completing the square is particularly useful when the quadratic expression in the denominator has complex roots. As a quick check, recall from solving quadratic equations that if the discriminant is negative, the quadratic function has complex roots. This indicates that completing the square is the correct approach, as the following examples will demonstrate.   Compute the inverse Laplace transforms of the following functions:   The discriminant of the denominator is , which is negative. Therefore, completing the square is necessary: . Rewriting gives: which matches ( ). Therefore,     The discriminant of the denominator is: , indicating that completing the square is necessary: . Rewriting as: . Therefore, .    Completing the square for the denominator of gives: . However, the numerator does not match . To resolve this, we rewrite as and group terms: , Now, apply the inverse Laplace transform:     Completing the square is a crucial technique when working with quadratic expressions in the denominator of Laplace transforms. It allows for the backward transformations by rewriting the -function in a form that aligns with known inverse Laplace transforms. In the next subsection, we will explore another technique: partial fraction decomposition, which helps break down more complex rational functions into simpler parts that can be easily matched to common inverse transforms.  Check-Point Questions   To complete the square:  missing number      Correct!      Please review the reading.       After completing the square of the denominator:  missing number       Correct!      Incorrect. Write it down carefully      Please review the reading.       Completing the square is used when the discriminant of the quadratic expression in the denominator is positive   False. Completing the square is used when the discriminant is negative, indicating complex roots.    The discriminant of the denominator of is  discriminant      Correct!      Please review the reading.       After completing the square of the denominator,      Incorrect. This is not the correct result after completing the square.       Incorrect. This is not the correct result after completing the square.       Correct! This is the correct result after completing the square.       Incorrect. This is not the correct result after completing the square.      What is the next step to compute ?    Factor the denominator   Incorrect. Factoring the denominator is not applicable in this case.     Complete the square in the denominator   Correct! Completing the square is necessary to match the form in the Laplace transform table.     Cancel out the in the numerator and denominator.   No, canceling out the in the the function is not a valid operation.     Differentiate the entire function   Incorrect. Differentiation is not needed for this problem.      What is the next step needed to compute ?    Look-up the inverse Laplace transform in the table.   Incorrect. This function is not directly in the table.     Factor the denominator.   Incorrect. Factoring the denominator is not necessary at this stage.     Rewrite the numerator, then split the fraction like so: .   Correct! The numerator needs an to match with .     Split the fraction directly, like so:   Incorrect. The next step is to decompose the function into simpler forms.      "
},
{
  "id": "main-8-4-4-4-4",
  "level": "2",
  "url": "main-8-4-4-4.html#main-8-4-4-4-4",
  "type": "Example",
  "number": "21",
  "title": "",
  "body": " Compute the inverse Laplace transforms of the following functions:   The discriminant of the denominator is , which is negative. Therefore, completing the square is necessary: . Rewriting gives: which matches ( ). Therefore,     The discriminant of the denominator is: , indicating that completing the square is necessary: . Rewriting as: . Therefore, .    Completing the square for the denominator of gives: . However, the numerator does not match . To resolve this, we rewrite as and group terms: , Now, apply the inverse Laplace transform:    "
},
{
  "id": "p4-c2-s2-2-rq1",
  "level": "2",
  "url": "main-8-4-4-4.html#p4-c2-s2-2-rq1",
  "type": "Reading Question",
  "number": "10.2.2.1",
  "title": "<em class=\"emphasis\">To complete the square: <span class=\"process-math\">\\(\\quad s^2-s+1 = s^2-s+\\fillinmath{X}-\\fillinmath{X} + 1\\)<\/span><\/em>.",
  "body": " To complete the square:  missing number      Correct!      Please review the reading.     "
},
{
  "id": "p4-c2-s2-2-rq2",
  "level": "2",
  "url": "main-8-4-4-4.html#p4-c2-s2-2-rq2",
  "type": "Reading Question",
  "number": "10.2.2.2",
  "title": "<em class=\"emphasis\">After completing the square of the denominator: <span class=\"process-math\">\\(\\ds\\frac{11}{s^2 + 18s + 400} = \\frac{11}{(s + 9)^2 + \\fillinmath{X}} \\)<\/span><\/em>.",
  "body": " After completing the square of the denominator:  missing number       Correct!      Incorrect. Write it down carefully      Please review the reading.     "
},
{
  "id": "p4-c2-s2-2-rq3",
  "level": "2",
  "url": "main-8-4-4-4.html#p4-c2-s2-2-rq3",
  "type": "Reading Question",
  "number": "10.2.2.3",
  "title": "<em class=\"emphasis\">Completing the square is used when the discriminant of the quadratic expression in the denominator is positive<\/em>.",
  "body": " Completing the square is used when the discriminant of the quadratic expression in the denominator is positive   False. Completing the square is used when the discriminant is negative, indicating complex roots.  "
},
{
  "id": "p4-c2-s2-2-rq4",
  "level": "2",
  "url": "main-8-4-4-4.html#p4-c2-s2-2-rq4",
  "type": "Reading Question",
  "number": "10.2.2.4",
  "title": "<em class=\"emphasis\">The discriminant of the denominator of <span class=\"process-math\">\\(\\ds\\frac{-19}{s^2-3s+1}\\)<\/span> is <span class=\"process-math\">\\(\\fillinmath{X}\\)<\/span><\/em>.",
  "body": " The discriminant of the denominator of is  discriminant      Correct!      Please review the reading.     "
},
{
  "id": "p4-c2-s2-2-rq5",
  "level": "2",
  "url": "main-8-4-4-4.html#p4-c2-s2-2-rq5",
  "type": "Reading Question",
  "number": "10.2.2.5",
  "title": "<em class=\"emphasis\">After completing the square of the denominator, <span class=\"process-math\">\\(\\ds\\frac{11}{s^2 - 6s + 14} = \\fillinmath{XXXXX}\\)<\/span><\/em>.",
  "body": " After completing the square of the denominator,      Incorrect. This is not the correct result after completing the square.       Incorrect. This is not the correct result after completing the square.       Correct! This is the correct result after completing the square.       Incorrect. This is not the correct result after completing the square.    "
},
{
  "id": "p4-c2-s2-2-rq6",
  "level": "2",
  "url": "main-8-4-4-4.html#p4-c2-s2-2-rq6",
  "type": "Reading Question",
  "number": "10.2.2.6",
  "title": "<em class=\"emphasis\">What is the next step to compute <span class=\"process-math\">\\(\\ds\\ilap{\\frac{s-1}{s^2 - 2s + 5}}\\text{?}\\)<\/span><\/em>",
  "body": " What is the next step to compute ?    Factor the denominator   Incorrect. Factoring the denominator is not applicable in this case.     Complete the square in the denominator   Correct! Completing the square is necessary to match the form in the Laplace transform table.     Cancel out the in the numerator and denominator.   No, canceling out the in the the function is not a valid operation.     Differentiate the entire function   Incorrect. Differentiation is not needed for this problem.    "
},
{
  "id": "p4-c2-s2-2-rq7",
  "level": "2",
  "url": "main-8-4-4-4.html#p4-c2-s2-2-rq7",
  "type": "Reading Question",
  "number": "10.2.2.7",
  "title": "<em class=\"emphasis\">What is the next step needed to compute <span class=\"process-math\">\\(\\ds\\ilap{\\frac{s+3}{(s - 1)^2 + 9}}\\text{?}\\)<\/span><\/em>",
  "body": " What is the next step needed to compute ?    Look-up the inverse Laplace transform in the table.   Incorrect. This function is not directly in the table.     Factor the denominator.   Incorrect. Factoring the denominator is not necessary at this stage.     Rewrite the numerator, then split the fraction like so: .   Correct! The numerator needs an to match with .     Split the fraction directly, like so:   Incorrect. The next step is to decompose the function into simpler forms.    "
},
{
  "id": "main-8-4-4-5",
  "level": "1",
  "url": "main-8-4-4-5.html",
  "type": "Subsection",
  "number": "10.2.3",
  "title": "Partial Fraction Decomposition",
  "body": "Partial Fraction Decomposition  In the Laplace Transform Method, we often encounter rational functions with polynomial denominators that can be factored into simpler linear or quadratic terms. In such cases, partial fraction decomposition becomes a powerful technique. By breaking the original rational function into simpler fractions, each corresponding to a known form in the Laplace Transform Table, we can efficiently compute the inverse Laplace transform.  The key idea is to express a complex rational function as a sum of simpler fractions, each with a simpler denominator. For example, if the denominator can be factored as , we can rewrite the function as: Once expressed in this way, we can directly apply the inverse Laplace transform to each term. Let’s explore a series of examples to demonstrate this approach.   Find the inverse Laplace transforms of each function.   First, decompose into partial fractions: Multiply both sides by and solve for and : Expanding both sides: Comparing coefficients, we have: Solving this system of equations gives and .  Therefore, the partial fraction decomposition is: Applying the inverse Laplace transform to each term:     First, factor the quadratic denominator: Now decompose into partial fractions: Multiply both sides by and solve for and : Expanding and comparing coefficients: Solving the system yields and .  The partial fraction decomposition is: Therefore:     Factor the quadratic denominator: Decompose into partial fractions: Multiply both sides by and solve for and : Expanding and comparing coefficients: Solving gives and .  The partial fraction decomposition is: Therefore:     Partial fraction decomposition also works for more complex rational functions with higher-degree polynomials in the denominator. The key is to factor the denominator as much as possible, then apply the decomposition to each term. Let's examine a more complex case involving cubic and quartic denominators.   Find the inverse Laplace transforms of each function.   First, factor the cubic denominator: Now decompose into partial fractions: Solving for , , and gives: Therefore:     Factor the quartic denominator: Decompose into partial fractions: Solving gives: Therefore:     Partial fraction decomposition simplifies complex rational functions, breaking them into manageable terms that correspond to known inverse Laplace transforms. In the next section, we will explore advanced techniques, including handling repeated roots and higher-order polynomials.  Check-Point Questions   Partial fraction decomposition can only be used for quadratic denominators   False. Partial fraction decomposition can be used for any polynomial denominator, including linear, quadratic, cubic, and higher degrees.    The purpose of partial fraction decomposition is to break down complex rational functions into __________ that can be easily matched to known inverse Laplace transforms    simpler fractions   Correct! Partial fraction decomposition simplifies the rational function into fractions that match known Laplace forms.     more complex fractions   No, the goal is to simplify the function, not to make it more complex.     linear equations   No, the decomposition simplifies fractions, not into linear equations.      What is the first step in computing ?    Find a common denominator.   No, you need to factor the denominator first before any further decomposition.     Factor the denominator.   Correct! The first step is to factor the quadratic denominator .     Cancel out the in the numerator and denominator.   No, canceling out the in the the function is not a valid operation.     Cancel out the in the numerator and denominator.   No, canceling out the in the the function is not a valid operation.      The partial fraction decomposition of is +    1, 1   Correct! The partial fraction decomposition is .     2, 3   Incorrect. The correct coefficients for the partial fraction decomposition are both 1.     0, 1   No, the coefficients should be 1 for both terms in the decomposition.      When using partial fraction decomposition for a cubic denominator, the function is always decomposed into three terms   False. The number of terms in the decomposition depends on the factorization of the denominator, not just its degree.    Which of the following is the correct partial fraction decomposition of ?      No, this decomposition is incomplete. It should also include a term with .       No, this is incorrect. The correct decomposition involves instead of .       Correct! The correct decomposition includes terms with both and .       No, this decomposition is incorrect. The correct decomposition should have instead of .      In partial fraction decomposition, the numerator of each term must have a degree less than the denominator   True. In partial fraction decomposition, each term's numerator must have a lower degree than the corresponding denominator.    "
},
{
  "id": "main-8-4-4-5-4",
  "level": "2",
  "url": "main-8-4-4-5.html#main-8-4-4-5-4",
  "type": "Example",
  "number": "22",
  "title": "",
  "body": " Find the inverse Laplace transforms of each function.   First, decompose into partial fractions: Multiply both sides by and solve for and : Expanding both sides: Comparing coefficients, we have: Solving this system of equations gives and .  Therefore, the partial fraction decomposition is: Applying the inverse Laplace transform to each term:     First, factor the quadratic denominator: Now decompose into partial fractions: Multiply both sides by and solve for and : Expanding and comparing coefficients: Solving the system yields and .  The partial fraction decomposition is: Therefore:     Factor the quadratic denominator: Decompose into partial fractions: Multiply both sides by and solve for and : Expanding and comparing coefficients: Solving gives and .  The partial fraction decomposition is: Therefore:    "
},
{
  "id": "main-8-4-4-5-6",
  "level": "2",
  "url": "main-8-4-4-5.html#main-8-4-4-5-6",
  "type": "Example",
  "number": "23",
  "title": "",
  "body": " Find the inverse Laplace transforms of each function.   First, factor the cubic denominator: Now decompose into partial fractions: Solving for , , and gives: Therefore:     Factor the quartic denominator: Decompose into partial fractions: Solving gives: Therefore:    "
},
{
  "id": "p4-c2-s2-3-rq1",
  "level": "2",
  "url": "main-8-4-4-5.html#p4-c2-s2-3-rq1",
  "type": "Reading Question",
  "number": "10.2.3.1",
  "title": "<em class=\"emphasis\">Partial fraction decomposition can only be used for quadratic denominators<\/em>.",
  "body": " Partial fraction decomposition can only be used for quadratic denominators   False. Partial fraction decomposition can be used for any polynomial denominator, including linear, quadratic, cubic, and higher degrees.  "
},
{
  "id": "p4-c2-s2-3-rq2",
  "level": "2",
  "url": "main-8-4-4-5.html#p4-c2-s2-3-rq2",
  "type": "Reading Question",
  "number": "10.2.3.2",
  "title": "<em class=\"emphasis\">The purpose of partial fraction decomposition is to break down complex rational functions into __________ that can be easily matched to known inverse Laplace transforms<\/em>.",
  "body": " The purpose of partial fraction decomposition is to break down complex rational functions into __________ that can be easily matched to known inverse Laplace transforms    simpler fractions   Correct! Partial fraction decomposition simplifies the rational function into fractions that match known Laplace forms.     more complex fractions   No, the goal is to simplify the function, not to make it more complex.     linear equations   No, the decomposition simplifies fractions, not into linear equations.    "
},
{
  "id": "p4-c2-s2-3-rq3",
  "level": "2",
  "url": "main-8-4-4-5.html#p4-c2-s2-3-rq3",
  "type": "Reading Question",
  "number": "10.2.3.3",
  "title": "<em class=\"emphasis\">What is the first step in computing <span class=\"process-math\">\\(\\ds\\ilap{\\frac{s + 6}{s^2 + 7s + 6}}\\text{?}\\)<\/span><\/em>",
  "body": " What is the first step in computing ?    Find a common denominator.   No, you need to factor the denominator first before any further decomposition.     Factor the denominator.   Correct! The first step is to factor the quadratic denominator .     Cancel out the in the numerator and denominator.   No, canceling out the in the the function is not a valid operation.     Cancel out the in the numerator and denominator.   No, canceling out the in the the function is not a valid operation.    "
},
{
  "id": "p4-c2-s2-3-rq4",
  "level": "2",
  "url": "main-8-4-4-5.html#p4-c2-s2-3-rq4",
  "type": "Reading Question",
  "number": "10.2.3.4",
  "title": "<em class=\"emphasis\">The partial fraction decomposition of <span class=\"process-math\">\\(\\ds\\frac{2s + 3}{(s + 2)(s + 3)}\\)<\/span> is <span class=\"process-math\">\\(\\ds\\frac{\\fillinmath{XX}}{s + 2}\\)<\/span> + <span class=\"process-math\">\\(\\ds\\frac{\\fillinmath{XX}}{s + 3}\\)<\/span><\/em>.",
  "body": " The partial fraction decomposition of is +    1, 1   Correct! The partial fraction decomposition is .     2, 3   Incorrect. The correct coefficients for the partial fraction decomposition are both 1.     0, 1   No, the coefficients should be 1 for both terms in the decomposition.    "
},
{
  "id": "p4-c2-s2-3-rq5",
  "level": "2",
  "url": "main-8-4-4-5.html#p4-c2-s2-3-rq5",
  "type": "Reading Question",
  "number": "10.2.3.5",
  "title": "<em class=\"emphasis\">When using partial fraction decomposition for a cubic denominator, the function is always decomposed into three terms<\/em>.",
  "body": " When using partial fraction decomposition for a cubic denominator, the function is always decomposed into three terms   False. The number of terms in the decomposition depends on the factorization of the denominator, not just its degree.  "
},
{
  "id": "p4-c2-s2-3-rq6",
  "level": "2",
  "url": "main-8-4-4-5.html#p4-c2-s2-3-rq6",
  "type": "Reading Question",
  "number": "10.2.3.6",
  "title": "<em class=\"emphasis\">Which of the following is the correct partial fraction decomposition of <span class=\"process-math\">\\(\\ds\\frac{3s + 4}{(s - 1)^2}\\text{?}\\)<\/span><\/em>",
  "body": " Which of the following is the correct partial fraction decomposition of ?      No, this decomposition is incomplete. It should also include a term with .       No, this is incorrect. The correct decomposition involves instead of .       Correct! The correct decomposition includes terms with both and .       No, this decomposition is incorrect. The correct decomposition should have instead of .    "
},
{
  "id": "p4-c2-s2-3-rq7",
  "level": "2",
  "url": "main-8-4-4-5.html#p4-c2-s2-3-rq7",
  "type": "Reading Question",
  "number": "10.2.3.7",
  "title": "<em class=\"emphasis\">In partial fraction decomposition, the numerator of each term must have a degree less than the denominator<\/em>.",
  "body": " In partial fraction decomposition, the numerator of each term must have a degree less than the denominator   True. In partial fraction decomposition, each term's numerator must have a lower degree than the corresponding denominator.  "
},
{
  "id": "main-8-4-5",
  "level": "1",
  "url": "main-8-4-5.html",
  "type": "Section",
  "number": "10.3",
  "title": "Summary &amp; Exercises",
  "body": "Summary & Exercises   This section covers the final step in solving differential equations using the Laplace Transform Method: finding the inverse Laplace transform. The focus is on converting the algebraic equation with unknown function back to the original function . Several methods and techniques are introduced to handle different cases where direct computation isn't possible.   Summary of the Key Ideas    Common Forms: A table of common Laplace transforms is provided, which doubles as a reference for inverse transforms. The focus is on recognizing forms that match the table entries for functions like , and others.   Direct Computation: When the function of directly matches a form in the common Laplace transform table, the inverse Laplace transform can be easily computed.   Modifying Functions: When a function doesn't match a known form, minor modifications, such as multiplying by missing constants or splitting fractions, can help.   Completing the Square: When dealing with quadratic expressions in the denominator, especially when the discriminant is negative, completing the square can transform the expression into a form that matches known inverse Laplace transforms. Several examples demonstrate this technique.   Partial Fraction Decomposition: For more complex rational functions, partial fraction decomposition breaks down the function into simpler fractions that match the common transform forms.             Correct! The inverse Laplace transform matches the forms in the table.       No, this does not match the correct inverse Laplace transform.       Incorrect. This does not account for all terms in the inverse Laplace transform.     What is the Laplace transform of ?               In the equation , what is the Laplace transform of the right-hand side?                The expression matches the form required to apply the inverse Laplace transform found in the common transform table   True. This expression matches the form in the table and can be directly transformed.   Match the Sine Form   Rewrite each of the following into the form , by filling in the appropriate values in the boxes.             Match the Cosine Form   Rewrite each of the following into the form , by filling in the appropriate values in the boxes.          Match the Power Form   Rewrite each of the following into the form , by filling in the appropriate values in the boxes.             Backward Transforms- Level 1                                             Backward Transforms- Level 2                                                   Backward Transforms- Level 3                     Steps 3 & 4               Inverse Laplace Transforms   Determine the original time-domain functions from the given Laplace-transformed functions.       Decompose into partial fractions: . Find and : . Use the inverse Laplace transform: .      Decompose into partial fractions: . Find and : . Use the inverse Laplace transform: .     Find the inverse Laplace transforms of each function.              Conceptual Questions   True or False: The inverse Laplace transform is always a unique function.   True    Which of the following is true about the inverse Laplace transform?   It converts a function from the frequency domain to the time domain.  It is a method to solve algebraic equations.  It is used to differentiate a function with respect to time.  It only works for polynomials.    It converts a function from the frequency domain to the time domain.    Explain the significance of completing the square in finding inverse Laplace transforms.   Completing the square is a technique used to transform quadratic expressions in the denominator into a form that matches known inverse Laplace transforms, particularly those involving sine and cosine functions.    Why is partial fraction decomposition helpful in finding inverse Laplace transforms?   Partial fraction decomposition breaks down complex rational functions into simpler fractions that correspond to known inverse Laplace transforms, making the transformation process easier.    Computational Problems   Find the inverse Laplace transform of .   This expression matches the form with , so the inverse Laplace transform is .    Compute the inverse Laplace transform of .   This expression can be split into two parts: and . The first part corresponds to and the second part corresponds to , so the inverse Laplace transform is .    Use partial fraction decomposition to find the inverse Laplace transform of .   First, factor the denominator as . Then, decompose the expression into . Solving for and , you get the inverse Laplace transform as .    Application-Based Problems   Given the function , describe the behavior of the corresponding time-domain function.   The inverse Laplace transform is , which indicates a sinusoidal function modulated by an exponential growth factor.    Find the inverse Laplace transform of the function using partial fraction decomposition.   Decompose the function into . Solving for the constants , , and , the inverse Laplace transform will be a combination of exponential and sinusoidal functions.          Correct! The inverse Laplace transform is .       Incorrect. This does not match the correct inverse Laplace transform.       Incorrect. This does not include the full inverse Laplace transform.           Correct! The inverse Laplace transform of this expression is .       Incorrect. The correct inverse Laplace transform is .       Incorrect. The correct inverse Laplace transform is .      , which matches the form in the table when      Correct! The correct value for is .       Incorrect. The correct value is , not 5.       Incorrect. The correct value is , not 3.      "
},
{
  "id": "main-8-4-5-2-2",
  "level": "2",
  "url": "main-8-4-5.html#main-8-4-5-2-2",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Common Forms: Direct Computation: Modifying Functions: Completing the Square: Partial Fraction Decomposition: "
},
{
  "id": "main-8-4-5-3-1",
  "level": "2",
  "url": "main-8-4-5-3.html#main-8-4-5-3-1",
  "type": "Exercise",
  "number": "10.3.1",
  "title": "<em class=\"emphasis\"><span class=\"process-math\">\\(\\ds \\ilap{\\frac{1}{s - 1} - \\frac{1}{s + 1} + \\frac{4s + 3}{s^2 + 1}} = \\fillinmath{XXXXXXXXXX}\\)<\/span><\/em>.",
  "body": "      Correct! The inverse Laplace transform matches the forms in the table.       No, this does not match the correct inverse Laplace transform.       Incorrect. This does not account for all terms in the inverse Laplace transform.    "
},
{
  "id": "p4-c1-s1-1-rq11",
  "level": "2",
  "url": "main-8-4-5-3.html#p4-c1-s1-1-rq11",
  "type": "Exercise",
  "number": "10.3.2",
  "title": "What is the Laplace transform of <span class=\"process-math\">\\(e^{3t}\\text{?}\\)<\/span>",
  "body": "What is the Laplace transform of ?              "
},
{
  "id": "p4-c1-s1-1-rq12",
  "level": "2",
  "url": "main-8-4-5-3.html#p4-c1-s1-1-rq12",
  "type": "Exercise",
  "number": "10.3.3",
  "title": "In the equation <span class=\"process-math\">\\(y'' + 4y = \\cos(2t)\\text{,}\\)<\/span> what is the Laplace transform of the right-hand side?",
  "body": "In the equation , what is the Laplace transform of the right-hand side?              "
},
{
  "id": "p4-c1-s1-1-rq13",
  "level": "2",
  "url": "main-8-4-5-3.html#p4-c1-s1-1-rq13",
  "type": "Exercise",
  "number": "10.3.4",
  "title": "<em class=\"emphasis\">The expression <span class=\"process-math\">\\(\\ds\\frac{s-1}{(s-1)^2 + 4}\\)<\/span> matches the form required to apply the inverse Laplace transform found in the common transform table<\/em>.",
  "body": " The expression matches the form required to apply the inverse Laplace transform found in the common transform table   True. This expression matches the form in the table and can be directly transformed.  "
},
{
  "id": "main-8-4-5-3-5-3",
  "level": "2",
  "url": "main-8-4-5-3.html#main-8-4-5-3-5-3",
  "type": "Exercise",
  "number": "10.3.5",
  "title": "",
  "body": "  "
},
{
  "id": "main-8-4-5-3-5-4",
  "level": "2",
  "url": "main-8-4-5-3.html#main-8-4-5-3-5-4",
  "type": "Exercise",
  "number": "10.3.6",
  "title": "",
  "body": "  "
},
{
  "id": "main-8-4-5-3-5-5",
  "level": "2",
  "url": "main-8-4-5-3.html#main-8-4-5-3-5-5",
  "type": "Exercise",
  "number": "10.3.7",
  "title": "",
  "body": "  "
},
{
  "id": "main-8-4-5-3-6-3",
  "level": "2",
  "url": "main-8-4-5-3.html#main-8-4-5-3-6-3",
  "type": "Exercise",
  "number": "10.3.8",
  "title": "",
  "body": "  "
},
{
  "id": "main-8-4-5-3-6-4",
  "level": "2",
  "url": "main-8-4-5-3.html#main-8-4-5-3-6-4",
  "type": "Exercise",
  "number": "10.3.9",
  "title": "",
  "body": "  "
},
{
  "id": "main-8-4-5-3-7-3",
  "level": "2",
  "url": "main-8-4-5-3.html#main-8-4-5-3-7-3",
  "type": "Exercise",
  "number": "10.3.10",
  "title": "",
  "body": "  "
},
{
  "id": "main-8-4-5-3-7-4",
  "level": "2",
  "url": "main-8-4-5-3.html#main-8-4-5-3-7-4",
  "type": "Exercise",
  "number": "10.3.11",
  "title": "",
  "body": "  "
},
{
  "id": "main-8-4-5-3-7-5",
  "level": "2",
  "url": "main-8-4-5-3.html#main-8-4-5-3-7-5",
  "type": "Exercise",
  "number": "10.3.12",
  "title": "",
  "body": "  "
},
{
  "id": "main-8-4-5-3-8-2",
  "level": "2",
  "url": "main-8-4-5-3.html#main-8-4-5-3-8-2",
  "type": "Exercise",
  "number": "10.3.13",
  "title": "",
  "body": "     "
},
{
  "id": "main-8-4-5-3-8-3",
  "level": "2",
  "url": "main-8-4-5-3.html#main-8-4-5-3-8-3",
  "type": "Exercise",
  "number": "10.3.14",
  "title": "",
  "body": "     "
},
{
  "id": "main-8-4-5-3-8-4",
  "level": "2",
  "url": "main-8-4-5-3.html#main-8-4-5-3-8-4",
  "type": "Exercise",
  "number": "10.3.15",
  "title": "",
  "body": "     "
},
{
  "id": "main-8-4-5-3-8-5",
  "level": "2",
  "url": "main-8-4-5-3.html#main-8-4-5-3-8-5",
  "type": "Exercise",
  "number": "10.3.16",
  "title": "",
  "body": "     "
},
{
  "id": "main-8-4-5-3-8-6",
  "level": "2",
  "url": "main-8-4-5-3.html#main-8-4-5-3-8-6",
  "type": "Exercise",
  "number": "10.3.17",
  "title": "",
  "body": "     "
},
{
  "id": "main-8-4-5-3-8-7",
  "level": "2",
  "url": "main-8-4-5-3.html#main-8-4-5-3-8-7",
  "type": "Exercise",
  "number": "10.3.18",
  "title": "",
  "body": "     "
},
{
  "id": "main-8-4-5-3-8-8",
  "level": "2",
  "url": "main-8-4-5-3.html#main-8-4-5-3-8-8",
  "type": "Exercise",
  "number": "10.3.19",
  "title": "",
  "body": "     "
},
{
  "id": "main-8-4-5-3-9-2",
  "level": "2",
  "url": "main-8-4-5-3.html#main-8-4-5-3-9-2",
  "type": "Exercise",
  "number": "10.3.20",
  "title": "",
  "body": "     "
},
{
  "id": "main-8-4-5-3-9-3",
  "level": "2",
  "url": "main-8-4-5-3.html#main-8-4-5-3-9-3",
  "type": "Exercise",
  "number": "10.3.21",
  "title": "",
  "body": "     "
},
{
  "id": "main-8-4-5-3-9-4",
  "level": "2",
  "url": "main-8-4-5-3.html#main-8-4-5-3-9-4",
  "type": "Exercise",
  "number": "10.3.22",
  "title": "",
  "body": "     "
},
{
  "id": "main-8-4-5-3-9-5",
  "level": "2",
  "url": "main-8-4-5-3.html#main-8-4-5-3-9-5",
  "type": "Exercise",
  "number": "10.3.23",
  "title": "",
  "body": "     "
},
{
  "id": "main-8-4-5-3-9-6",
  "level": "2",
  "url": "main-8-4-5-3.html#main-8-4-5-3-9-6",
  "type": "Exercise",
  "number": "10.3.24",
  "title": "",
  "body": "     "
},
{
  "id": "main-8-4-5-3-9-7",
  "level": "2",
  "url": "main-8-4-5-3.html#main-8-4-5-3-9-7",
  "type": "Exercise",
  "number": "10.3.25",
  "title": "",
  "body": "     "
},
{
  "id": "main-8-4-5-3-9-8",
  "level": "2",
  "url": "main-8-4-5-3.html#main-8-4-5-3-9-8",
  "type": "Exercise",
  "number": "10.3.26",
  "title": "",
  "body": "     "
},
{
  "id": "main-8-4-5-3-9-9",
  "level": "2",
  "url": "main-8-4-5-3.html#main-8-4-5-3-9-9",
  "type": "Exercise",
  "number": "10.3.27",
  "title": "",
  "body": "     "
},
{
  "id": "main-8-4-5-3-10-2",
  "level": "2",
  "url": "main-8-4-5-3.html#main-8-4-5-3-10-2",
  "type": "Exercise",
  "number": "10.3.28",
  "title": "",
  "body": "     "
},
{
  "id": "main-8-4-5-3-10-3",
  "level": "2",
  "url": "main-8-4-5-3.html#main-8-4-5-3-10-3",
  "type": "Exercise",
  "number": "10.3.29",
  "title": "",
  "body": "     "
},
{
  "id": "main-8-4-5-3-10-4",
  "level": "2",
  "url": "main-8-4-5-3.html#main-8-4-5-3-10-4",
  "type": "Exercise",
  "number": "10.3.30",
  "title": "",
  "body": "     "
},
{
  "id": "main-8-4-5-3-11-2",
  "level": "2",
  "url": "main-8-4-5-3.html#main-8-4-5-3-11-2",
  "type": "Exercise",
  "number": "10.3.31",
  "title": "",
  "body": "     "
},
{
  "id": "main-8-4-5-3-11-3",
  "level": "2",
  "url": "main-8-4-5-3.html#main-8-4-5-3-11-3",
  "type": "Exercise",
  "number": "10.3.32",
  "title": "",
  "body": "     "
},
{
  "id": "main-8-4-5-3-12-3",
  "level": "2",
  "url": "main-8-4-5-3.html#main-8-4-5-3-12-3",
  "type": "Exercise",
  "number": "10.3.33",
  "title": "",
  "body": "    Decompose into partial fractions: . Find and : . Use the inverse Laplace transform: . "
},
{
  "id": "main-8-4-5-3-12-4",
  "level": "2",
  "url": "main-8-4-5-3.html#main-8-4-5-3-12-4",
  "type": "Exercise",
  "number": "10.3.34",
  "title": "",
  "body": "    Decompose into partial fractions: . Find and : . Use the inverse Laplace transform: . "
},
{
  "id": "main-8-4-5-3-13-2",
  "level": "2",
  "url": "main-8-4-5-3.html#main-8-4-5-3-13-2",
  "type": "Exercise",
  "number": "10.3.35",
  "title": "",
  "body": "    "
},
{
  "id": "main-8-4-5-3-13-3",
  "level": "2",
  "url": "main-8-4-5-3.html#main-8-4-5-3-13-3",
  "type": "Exercise",
  "number": "10.3.36",
  "title": "",
  "body": "    "
},
{
  "id": "main-8-4-5-3-14-2",
  "level": "2",
  "url": "main-8-4-5-3.html#main-8-4-5-3-14-2",
  "type": "Exercise",
  "number": "10.3.37",
  "title": "",
  "body": " True or False: The inverse Laplace transform is always a unique function.   True  "
},
{
  "id": "main-8-4-5-3-14-3",
  "level": "2",
  "url": "main-8-4-5-3.html#main-8-4-5-3-14-3",
  "type": "Exercise",
  "number": "10.3.38",
  "title": "",
  "body": " Which of the following is true about the inverse Laplace transform?   It converts a function from the frequency domain to the time domain.  It is a method to solve algebraic equations.  It is used to differentiate a function with respect to time.  It only works for polynomials.    It converts a function from the frequency domain to the time domain.  "
},
{
  "id": "main-8-4-5-3-14-4",
  "level": "2",
  "url": "main-8-4-5-3.html#main-8-4-5-3-14-4",
  "type": "Exercise",
  "number": "10.3.39",
  "title": "",
  "body": " Explain the significance of completing the square in finding inverse Laplace transforms.   Completing the square is a technique used to transform quadratic expressions in the denominator into a form that matches known inverse Laplace transforms, particularly those involving sine and cosine functions.  "
},
{
  "id": "main-8-4-5-3-14-5",
  "level": "2",
  "url": "main-8-4-5-3.html#main-8-4-5-3-14-5",
  "type": "Exercise",
  "number": "10.3.40",
  "title": "",
  "body": " Why is partial fraction decomposition helpful in finding inverse Laplace transforms?   Partial fraction decomposition breaks down complex rational functions into simpler fractions that correspond to known inverse Laplace transforms, making the transformation process easier.  "
},
{
  "id": "main-8-4-5-3-15-2",
  "level": "2",
  "url": "main-8-4-5-3.html#main-8-4-5-3-15-2",
  "type": "Exercise",
  "number": "10.3.41",
  "title": "",
  "body": " Find the inverse Laplace transform of .   This expression matches the form with , so the inverse Laplace transform is .  "
},
{
  "id": "main-8-4-5-3-15-3",
  "level": "2",
  "url": "main-8-4-5-3.html#main-8-4-5-3-15-3",
  "type": "Exercise",
  "number": "10.3.42",
  "title": "",
  "body": " Compute the inverse Laplace transform of .   This expression can be split into two parts: and . The first part corresponds to and the second part corresponds to , so the inverse Laplace transform is .  "
},
{
  "id": "main-8-4-5-3-15-4",
  "level": "2",
  "url": "main-8-4-5-3.html#main-8-4-5-3-15-4",
  "type": "Exercise",
  "number": "10.3.43",
  "title": "",
  "body": " Use partial fraction decomposition to find the inverse Laplace transform of .   First, factor the denominator as . Then, decompose the expression into . Solving for and , you get the inverse Laplace transform as .  "
},
{
  "id": "main-8-4-5-3-16-2",
  "level": "2",
  "url": "main-8-4-5-3.html#main-8-4-5-3-16-2",
  "type": "Exercise",
  "number": "10.3.44",
  "title": "",
  "body": " Given the function , describe the behavior of the corresponding time-domain function.   The inverse Laplace transform is , which indicates a sinusoidal function modulated by an exponential growth factor.  "
},
{
  "id": "main-8-4-5-3-16-3",
  "level": "2",
  "url": "main-8-4-5-3.html#main-8-4-5-3-16-3",
  "type": "Exercise",
  "number": "10.3.45",
  "title": "",
  "body": " Find the inverse Laplace transform of the function using partial fraction decomposition.   Decompose the function into . Solving for the constants , , and , the inverse Laplace transform will be a combination of exponential and sinusoidal functions.  "
},
{
  "id": "main-8-4-5-3-17",
  "level": "2",
  "url": "main-8-4-5-3.html#main-8-4-5-3-17",
  "type": "Exercise",
  "number": "10.3.46",
  "title": "<em class=\"emphasis\"><span class=\"process-math\">\\(\\ds \\ilap{\\frac{4s^3 + 3s^2 - 2s + 1}{(s - 1)(s + 1)(s^2 + 1)}} = \\fillinmath{XXXXXX}\\)<\/span><\/em>.",
  "body": "      Correct! The inverse Laplace transform is .       Incorrect. This does not match the correct inverse Laplace transform.       Incorrect. This does not include the full inverse Laplace transform.    "
},
{
  "id": "main-8-4-5-3-18",
  "level": "2",
  "url": "main-8-4-5-3.html#main-8-4-5-3-18",
  "type": "Exercise",
  "number": "10.3.47",
  "title": "<em class=\"emphasis\"><span class=\"process-math\">\\(\\ds \\ilap{\\frac{s-1}{(s-1)^2 + 4}} = \\fillinmath{XXXXXX}\\)<\/span><\/em>.",
  "body": "      Correct! The inverse Laplace transform of this expression is .       Incorrect. The correct inverse Laplace transform is .       Incorrect. The correct inverse Laplace transform is .    "
},
{
  "id": "main-8-4-5-3-19",
  "level": "2",
  "url": "main-8-4-5-3.html#main-8-4-5-3-19",
  "type": "Exercise",
  "number": "10.3.48",
  "title": "<em class=\"emphasis\"><span class=\"process-math\">\\(\\ds \\ilap{\\frac{11}{(s - 3)^2 + 5}} = \\frac{11}{\\sqrt{5}}e^{3t}\\sin(\\sqrt{5}t)\\text{,}\\)<\/span> which matches the form in the table when <span class=\"process-math\">\\(b = \\fillinmath{X}\\)<\/span><\/em>.",
  "body": " , which matches the form in the table when      Correct! The correct value for is .       Incorrect. The correct value is , not 5.       Incorrect. The correct value is , not 3.    "
},
{
  "id": "main-8-5",
  "level": "1",
  "url": "main-8-5.html",
  "type": "Chapter",
  "number": "11",
  "title": "Solving Equations",
  "body": "Solving Equations   "
},
{
  "id": "main-8-6",
  "level": "1",
  "url": "main-8-6.html",
  "type": "Chapter",
  "number": "12",
  "title": "Piecewise Forcing Functions",
  "body": "Piecewise Forcing Functions   "
},
{
  "id": "main-9-3",
  "level": "1",
  "url": "main-9-3.html",
  "type": "Chapter",
  "number": "13",
  "title": "Linear Systems",
  "body": "Linear Systems  "
},
{
  "id": "main-9-4",
  "level": "1",
  "url": "main-9-4.html",
  "type": "Chapter",
  "number": "14",
  "title": "Nonlinear Systems",
  "body": "Nonlinear Systems  "
},
{
  "id": "main-9-5",
  "level": "1",
  "url": "main-9-5.html",
  "type": "Chapter",
  "number": "15",
  "title": "Applications",
  "body": "Applications  "
},
{
  "id": "main-10-3",
  "level": "1",
  "url": "main-10-3.html",
  "type": "Chapter",
  "number": "16",
  "title": "Euler’s Method",
  "body": "Euler's Method  "
},
{
  "id": "main-10-4",
  "level": "1",
  "url": "main-10-4.html",
  "type": "Chapter",
  "number": "17",
  "title": "Runge-Kutta Methods",
  "body": "Runge-Kutta Methods  "
},
{
  "id": "main-10-5",
  "level": "1",
  "url": "main-10-5.html",
  "type": "Chapter",
  "number": "18",
  "title": "Error Analysis",
  "body": "Error Analysis  "
},
{
  "id": "main-11-2",
  "level": "1",
  "url": "main-11-2.html",
  "type": "Chapter",
  "number": "19",
  "title": "Miscellaneous Exercises",
  "body": "Miscellaneous Exercises   "
},
{
  "id": "main-12-3",
  "level": "1",
  "url": "main-12-3.html",
  "type": "Chapter",
  "number": "20",
  "title": "Intro Modeling",
  "body": "Intro Modeling   "
},
{
  "id": "main-12-4",
  "level": "1",
  "url": "main-12-4.html",
  "type": "Chapter",
  "number": "21",
  "title": "SOV Modeling",
  "body": "SOV Modeling   "
},
{
  "id": "main-12-5",
  "level": "1",
  "url": "main-12-5.html",
  "type": "Chapter",
  "number": "22",
  "title": "IF Modeling",
  "body": "IF Modeling   "
},
{
  "id": "main-12-6",
  "level": "1",
  "url": "main-12-6.html",
  "type": "Chapter",
  "number": "23",
  "title": "UC Modeling",
  "body": "UC Modeling   "
},
{
  "id": "review-exp-and-logs",
  "level": "1",
  "url": "review-exp-and-logs.html",
  "type": "Section",
  "number": "A.1",
  "title": "Exponential and Logarithmic Functions",
  "body": "Exponential and Logarithmic Functions  Recall the following rules for exponential and logarithmic functions. Exponential Rules        General   Natural ( )                                               Logarithmic Rules        General   Natural ( )                                                        Let's look at a couple of examples, starting with an equation containing exponentials.   Solve for :    If you prefer to see a video of this example, click here   We might begin by isolating the exponential that contains and then taking the natural log of both sides.   It's worth noting that we cannot break up that log on the right hand side. There's no \"rule\" that helps when we have addition inside a logarithm.  There is another way to approach this if notice that appears inside both exponential terms. The answers may look different, but they are equivalent and both are correct.    Now let's look at an example involving logarithms.   Solve for :    If you prefer to see a video of this example, click here   We'll carefully apply the rules above. We want to get our hands on , and right now its inside a logarithm. In order to undo that, we'll exponentiate both sides.     Now you should try. Be careful!   Use algebra and the rules above to solve for in each of the following equations.                                                                   Euler's Formula        "
},
{
  "id": "r-01-04-exp_logs_ex_01",
  "level": "2",
  "url": "review-exp-and-logs.html#r-01-04-exp_logs_ex_01",
  "type": "Example",
  "number": "A.1",
  "title": "",
  "body": " Solve for :    If you prefer to see a video of this example, click here   We might begin by isolating the exponential that contains and then taking the natural log of both sides.   It's worth noting that we cannot break up that log on the right hand side. There's no \"rule\" that helps when we have addition inside a logarithm.  There is another way to approach this if notice that appears inside both exponential terms. The answers may look different, but they are equivalent and both are correct.   "
},
{
  "id": "r-01-04-exp_logs_ex_02",
  "level": "2",
  "url": "review-exp-and-logs.html#r-01-04-exp_logs_ex_02",
  "type": "Example",
  "number": "A.2",
  "title": "",
  "body": " Solve for :    If you prefer to see a video of this example, click here   We'll carefully apply the rules above. We want to get our hands on , and right now its inside a logarithm. In order to undo that, we'll exponentiate both sides.    "
},
{
  "id": "review-exp-and-logs-9",
  "level": "2",
  "url": "review-exp-and-logs.html#review-exp-and-logs-9",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Use algebra and the rules above to solve for in each of the following equations. "
},
{
  "id": "eulers-formula",
  "level": "2",
  "url": "review-exp-and-logs.html#eulers-formula",
  "type": "Definition",
  "number": "A.3",
  "title": "Euler’s Formula.",
  "body": "Euler's Formula       "
},
{
  "id": "main-13-3",
  "level": "1",
  "url": "main-13-3.html",
  "type": "Section",
  "number": "A.2",
  "title": "Rational Functions",
  "body": "Rational Functions  Rational functions are a fundamental concept in algebra and calculus, and they play a significant role in differential equations. A rational function is defined as the ratio of two polynomials.  Rational Function  A rational function is a function that is the division of two polynomials.  For example, the following are rational functions: .   "
},
{
  "id": "rational-function",
  "level": "2",
  "url": "main-13-3.html#rational-function",
  "type": "Definition",
  "number": "A.4",
  "title": "Rational Function.",
  "body": "Rational Function  A rational function is a function that is the division of two polynomials.  For example, the following are rational functions: .  "
},
{
  "id": "main-13-4",
  "level": "1",
  "url": "main-13-4.html",
  "type": "Section",
  "number": "A.3",
  "title": "Quadratic equations",
  "body": "Quadratic equations  We will be solving quadratic equations as we solve differential equations. If we want to solve a quadratic equation like there are several different methods we might use, including:  factoring  quadratic formula,   completing the square  Most students prefer the first two methods, which is fine. We will end up completing the square later in the semester, so if you want to review that method now, you'll reap the benefits later!   Solve the following quadratic equations. Note: It's OK if the solutions are complex or imaginary.     You might solve via factoring: Alternately, you might use the quadratic formula: You could even complete the square:         You might solve via factoring: Alternately, you might use the quadratic formula: You could even complete the square:         This one doesn't factor easily... You might use the quadratic formula: You could even complete the square:        Name at least two methods for solving quadratic equations. factoring, using the quadratic formula, completing the square   How many solutions does a quadratic equation have? There are three possible outcomes when solving a quadratic equation:  two distinct real roots  one repeated real root (i.e., a double root)  complex conjugate roots       Solving Quadratic Equations  The solution to the quadratic equation is given by the quadratic formula: . Notes:   The gives two solutions, say and .     and are also known as the roots of .    The value, , under the root in is called the discriminant .    Equation can be written as .    If , then and are different real numbers.    If , then and are the same real number (repeated).    If , then and are complex and can be written as .       "
},
{
  "id": "main-13-4-3",
  "level": "2",
  "url": "main-13-4.html#main-13-4-3",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Solve the following quadratic equations. Note: It's OK if the solutions are complex or imaginary. "
},
{
  "id": "solving-the-quadratic-equation-2",
  "level": "2",
  "url": "main-13-4.html#solving-the-quadratic-equation-2",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "roots discriminant "
},
{
  "id": "main-13-5",
  "level": "1",
  "url": "main-13-5.html",
  "type": "Section",
  "number": "A.4",
  "title": "Trigonometric Identities",
  "body": "Trigonometric Identities  Pythagorean Identities  The following trigonometric identities are useful in solving differential equations:                Even and Odd Properties                                     "
},
{
  "id": "main-13-6",
  "level": "1",
  "url": "main-13-6.html",
  "type": "Section",
  "number": "A.5",
  "title": "Solving Polynomial Equations",
  "body": "Solving Polynomial Equations  Higher-degree polynomial equations have the form and it turns out that these equations can always be factored into simpler polynomials. In particular, a polynomial of degree can always be factored into linear factors: where are the solutions and can be real or complex. This fact is known as the Fundamental Theorem of Algebra.   A \"complex\" solution is one that can contain (imaginary part).  For example, the equation has two complex solutions since   While knowing this is powerful, the process of factoring them can be quite challenging. However, there are some special forms and strategies that can help. A few are summarized below.  Techniques for Solving Higher-Degree Polynomials    Recognizing Special Forms  Some polynomials can be factored using special patterns. Common forms include:  Common Factoring:  Difference of Squares:  Sum\/Difference of Cubes:  Recognizing these forms can help simplify the factorization process.   Known Factors  If you know one factor, then you can divide-out the polynomial by this factor. For example, suppose we know that is a root of the polynomial . Then, we know that is a factor, so where is some second-degree polynomial you multiply by to get our original polynomial. We can find by dividing both sides by , like so Therefore,    Possible Rational Roots  There is a theorem that tells us potential fractional roots of the polynomial. If is a solution, then must be of the form . This gives us a list of possible solutions to test. For example, if we have the polynomial then the possible factors of are and the possible factors of are . Therefore, the possible fractional solutions are We can test each of these values to find up to 3 solutions. Once we find one, we can use the previous technique to help find more.   Use Technology  Factoring higher-order polynomials can be very difficult to do by and this is one skill that may be better suited for a computer. There are many software packages that can factor polynomials for you. For example, the Wolfram Alpha website will do it with ease.        Completely factor and solve the following characteristic equations                           The degree of each equation tells you how many factors you should have.            difference of squares     set each factor to 0     solutions                difference of squares     solutions                common factor      standard quadratic factoring     solutions                common factor     solutions      Technically, and represents 4 repeated factors.              common factor      difference of squares     solutions                common factor      difference of squares     solutions                difference of squares      difference of squares     set each factor to 0     solutions          An important concept to remember is that any polynomial can be factored into the product of linear factors, allowing for complex solutions. This is known as the Fundamental Theorem of Algebra. However, factoring higher-degree polynomials can sometimes be challenging and may require the use of technology, such as computer algebra systems or graphing calculators, to find complex or irrational roots.  By combining these techniques, we can solve for the roots of any higher-degree polynomial. Once we have the roots, we can construct the general solution to the higher-order LHCC equation.  For a higher-order LHCC equation like: , the characteristic equation is the polynomial equation we just discussed. Finding the roots of this polynomial gives us the general solution: , where are constants determined by initial conditions.  Let's see an example to solidify these concepts.  Solving a Third-Degree Polynomial Equation   Find the general solution to the third-order LHCC equation:       First, write down the characteristic equation: . Factoring the polynomial, we get: . Therefore, the roots are .  Since we have three distinct real roots, the general solution to the LHCC equation is: , where are constants determined by initial conditions.    Polynomail Division  Use polynomial divison to compute                                                                                     Therefore, .   "
},
{
  "id": "main-13-6-4",
  "level": "2",
  "url": "main-13-6.html#main-13-6-4",
  "type": "Example",
  "number": "A.5",
  "title": "",
  "body": "  Completely factor and solve the following characteristic equations                           The degree of each equation tells you how many factors you should have.            difference of squares     set each factor to 0     solutions                difference of squares     solutions                common factor      standard quadratic factoring     solutions                common factor     solutions      Technically, and represents 4 repeated factors.              common factor      difference of squares     solutions                common factor      difference of squares     solutions                difference of squares      difference of squares     set each factor to 0     solutions         "
},
{
  "id": "main-13-6-9",
  "level": "2",
  "url": "main-13-6.html#main-13-6-9",
  "type": "Example",
  "number": "A.6",
  "title": "Solving a Third-Degree Polynomial Equation.",
  "body": "Solving a Third-Degree Polynomial Equation   Find the general solution to the third-order LHCC equation:       First, write down the characteristic equation: . Factoring the polynomial, we get: . Therefore, the roots are .  Since we have three distinct real roots, the general solution to the LHCC equation is: , where are constants determined by initial conditions.   "
},
{
  "id": "r-01-10",
  "level": "1",
  "url": "r-01-10.html",
  "type": "Section",
  "number": "A.6",
  "title": "Partial Fraction Decomposition",
  "body": "Partial Fraction Decomposition  Partial fraction decomposition is a method used to express a rational function as a sum of simpler fractions. This process is especially useful when solving integrals and applying inverse Laplace transforms. The following steps outline the process to find the partial fraction decomposition of a rational function.   Check the Degree of the Numerator and Denominator  Ensure the degree of the numerator is less than the degree of the denominator. If the numerator has a degree greater than or equal to the denominator, first perform polynomial long division to reduce the degree of the numerator.   Factor the Denominator  Factor the denominator into irreducible linear or quadratic factors.   Linear factors: Expressions of the form .   Irreducible quadratic factors: Expressions of the form where the discriminant is negative.     Set up the Partial Fraction Decomposition  Based on the factors of the denominator, write the decomposition:  For each linear factor , include a term of the form .  For repeated linear factors , include terms like:   For irreducible quadratic factors , include a term of the form .  For repeated quadratic factors , include terms like:      Solve for the Constants  Multiply both sides of the equation by the common denominator and expand to eliminate fractions. Group terms by powers of and set up a system of equations to solve for the unknown constants , , and .   Final Result  Once the constants are found, write the final partial fraction decomposition. This decomposition can now be used for further calculations such as integrals or inverse Laplace transforms.    Reference: Partial Fraction General Form Terms  For each type of factor in the denominator, add the following terms to the partial fraction decomposition:    Factor Type  Factor  Term(s) In General Form    Linear      Repeated Linear      Irreducible Quadratic      Repeated Quadratic        Find the partial fraction decomposition form for each.     First, factor the denominator: The denominator has the following factors:   (linear, single)   (linear, single)  Hence, the FORM of the partial fraction decomposition is:       Since the denominator is already factored, we see that the denominator has the following factors:   (linear, double)   (linear, distinct)  Hence, the FORM of the partial fraction decomposition is:      Here we need to finish factoring the denominator: Now we see that the denominator has the following factors:   (linear, double)   (linear, double)  Hence, the FORM of the partial fraction decomposition is:      Here we need to finish factoring the denominator: Now we see that (which is linear), is a factor (three times) of the denominator. Hence, the FORM of the partial fraction decomposition is:       Find the partial fraction decomposition of .  Factor the denominator as . The partial fraction decomposition is:   Multiply through by and solve for , , and .   Expanding and comparing coefficients, we find:   Therefore, the partial fraction decomposition is:      General Form   Find the FORM of the partial fraction decomposition for each of the following. Make sure you completely factor each denominator before determining the decomposition. You need not find the values of the coefficients  etc.         Since the denominator is already factored, we see that the denominator has the following factors:   (linear, double)   (linear, distinct)  Hence, the FORM of the partial fraction decomposition is:         Here we need to finish factoring the denominator: Now we see that the denominator has the following factors:   (linear, double)   (linear, double)  Hence, the FORM of the partial fraction decomposition is:         Here we need to finish factoring the denominator: Now we see that (which is linear), is a factor (three times) of the denominator. Hence, the FORM of the partial fraction decomposition is:         Here we need to finish factoring the denominator: Now we see that the denominator has the following factors:   (linear, single)   (linear, single)   (irreducible quadratic, single)  Hence, the FORM of the partial fraction decomposition is:         Here we need to finish factoring the denominator: Now we see that the denominator has the following factors:   (linear, single)   (linear, single)   (irreducible quadratic, single)  Hence, the FORM of the partial fraction decomposition is:         Here we need to finish factoring the denominator: Now we see that the denominator has the following factors:   (linear, single)   (linear, single)   (irreducible quadratic, single)  Hence, the FORM of the partial fraction decomposition is:         Here we need to finish factoring the denominator: Now we see that the denominator has the following factors:   (linear, double)   (linear, double)  Hence, the FORM of the partial fraction decomposition is:         Here we need to finish factoring the denominator: Now we see that the denominator has the following factors:   (linear, single)   (linear, single)   (irreducible quadratic, single)  Hence, the FORM of the partial fraction decomposition is:           First, factor the denominator: The denominator has the following factors:   (linear, single)   (linear, single)   (linear, single)  Hence, the FORM of the partial fraction decomposition is:           First, factor the denominator: The denominator has the following factors:   (linear, single)   (linear, single)  Hence, the FORM of the partial fraction decomposition is:    Partial Fraction Decomposition   Find the partial fraction decomposition for each of the following rational functions.           First, factor the denominator: The denominator has the following factors:   (linear, single)   (linear, single)   (linear, single)  Hence, the FORM of the partial fraction decomposition is: Multiply both sides by the common denominator and solve for  and         Since the denominator is already factored, we see that the denominator has the following factors:   (linear, double)   (linear, distinct)  Hence, the FORM of the partial fraction decomposition is: Multiply both sides by the common denominator and solve for  and         Here we need to finish factoring the denominator: Now we see that the denominator has the following factors:   (linear, double)   (linear, double)  Hence, the FORM of the partial fraction decomposition is: Multiply both sides by the common denominator and solve for   and         Here we need to finish factoring the denominator: Now we see that (which is linear), is a factor (three times) of the denominator. Hence, the FORM of the partial fraction decomposition is: Multiply both sides by the common denominator and solve for  and         Here we need to finish factoring the denominator: Now we see that the denominator has the following factors:   (linear, single)   (linear, single)   (irreducible quadratic, single)  Hence, the FORM of the partial fraction decomposition is: Multiply both sides by the common denominator and solve for   and         Here we need to finish factoring the denominator: Now we see that the denominator has the following factors:   (linear, single)   (linear, single)   (irreducible quadratic, single)  Hence, the FORM of the partial fraction decomposition is: Multiply both sides by the common denominator and solve for   and         Here we need to finish factoring the denominator: Now we see that the denominator has the following factors:   (linear, single)   (linear, single)   (irreducible quadratic, single)  Hence, the FORM of the partial fraction decomposition is: Multiply both sides by the common denominator and solve for   and         Here we need to finish factoring the denominator: Now we see that the denominator has the following factors:   (linear, double)   (linear, double)  Hence, the FORM of the partial fraction decomposition is: Multiply both sides by the common denominator and solve for   and         Here we need to finish factoring the denominator: Now we see that the denominator has the following factors:   (linear, single)   (linear, single)   (irreducible quadratic, single)  Hence, the FORM of the partial fraction decomposition is: Multiply both sides by the common denominator and solve for   and                and                                                       "
},
{
  "id": "r-01-10-3-2-2",
  "level": "2",
  "url": "r-01-10.html#r-01-10-3-2-2",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Linear factors: Irreducible quadratic factors: "
},
{
  "id": "partial-fraction-table-3",
  "level": "2",
  "url": "r-01-10.html#partial-fraction-table-3",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Factor Type Factor Term(s) In General Form Linear Repeated Linear Irreducible Quadratic Repeated Quadratic "
},
{
  "id": "r-01-10-5",
  "level": "2",
  "url": "r-01-10.html#r-01-10-5",
  "type": "Example",
  "number": "A.7",
  "title": "",
  "body": " Find the partial fraction decomposition form for each.     First, factor the denominator: The denominator has the following factors:   (linear, single)   (linear, single)  Hence, the FORM of the partial fraction decomposition is:       Since the denominator is already factored, we see that the denominator has the following factors:   (linear, double)   (linear, distinct)  Hence, the FORM of the partial fraction decomposition is:      Here we need to finish factoring the denominator: Now we see that the denominator has the following factors:   (linear, double)   (linear, double)  Hence, the FORM of the partial fraction decomposition is:      Here we need to finish factoring the denominator: Now we see that (which is linear), is a factor (three times) of the denominator. Hence, the FORM of the partial fraction decomposition is:     "
},
{
  "id": "r-01-10-6",
  "level": "2",
  "url": "r-01-10.html#r-01-10-6",
  "type": "Example",
  "number": "A.8",
  "title": "",
  "body": " Find the partial fraction decomposition of .  Factor the denominator as . The partial fraction decomposition is:   Multiply through by and solve for , , and .   Expanding and comparing coefficients, we find:   Therefore, the partial fraction decomposition is:    "
},
{
  "id": "r-01-10-7-1-3",
  "level": "2",
  "url": "r-01-10-7.html#r-01-10-7-1-3",
  "type": "Exercise",
  "number": "A.6.1",
  "title": "",
  "body": "      Since the denominator is already factored, we see that the denominator has the following factors:   (linear, double)   (linear, distinct)  Hence, the FORM of the partial fraction decomposition is:  "
},
{
  "id": "r-01-10-7-1-4",
  "level": "2",
  "url": "r-01-10-7.html#r-01-10-7-1-4",
  "type": "Exercise",
  "number": "A.6.2",
  "title": "",
  "body": "      Here we need to finish factoring the denominator: Now we see that the denominator has the following factors:   (linear, double)   (linear, double)  Hence, the FORM of the partial fraction decomposition is:  "
},
{
  "id": "r-01-10-7-1-5",
  "level": "2",
  "url": "r-01-10-7.html#r-01-10-7-1-5",
  "type": "Exercise",
  "number": "A.6.3",
  "title": "",
  "body": "      Here we need to finish factoring the denominator: Now we see that (which is linear), is a factor (three times) of the denominator. Hence, the FORM of the partial fraction decomposition is:  "
},
{
  "id": "r-01-10-7-1-6",
  "level": "2",
  "url": "r-01-10-7.html#r-01-10-7-1-6",
  "type": "Exercise",
  "number": "A.6.4",
  "title": "",
  "body": "      Here we need to finish factoring the denominator: Now we see that the denominator has the following factors:   (linear, single)   (linear, single)   (irreducible quadratic, single)  Hence, the FORM of the partial fraction decomposition is:  "
},
{
  "id": "r-01-10-7-1-7",
  "level": "2",
  "url": "r-01-10-7.html#r-01-10-7-1-7",
  "type": "Exercise",
  "number": "A.6.5",
  "title": "",
  "body": "      Here we need to finish factoring the denominator: Now we see that the denominator has the following factors:   (linear, single)   (linear, single)   (irreducible quadratic, single)  Hence, the FORM of the partial fraction decomposition is:  "
},
{
  "id": "r-01-10-7-1-8",
  "level": "2",
  "url": "r-01-10-7.html#r-01-10-7-1-8",
  "type": "Exercise",
  "number": "A.6.6",
  "title": "",
  "body": "      Here we need to finish factoring the denominator: Now we see that the denominator has the following factors:   (linear, single)   (linear, single)   (irreducible quadratic, single)  Hence, the FORM of the partial fraction decomposition is:  "
},
{
  "id": "r-01-10-7-1-9",
  "level": "2",
  "url": "r-01-10-7.html#r-01-10-7-1-9",
  "type": "Exercise",
  "number": "A.6.7",
  "title": "",
  "body": "      Here we need to finish factoring the denominator: Now we see that the denominator has the following factors:   (linear, double)   (linear, double)  Hence, the FORM of the partial fraction decomposition is:  "
},
{
  "id": "r-01-10-7-1-10",
  "level": "2",
  "url": "r-01-10-7.html#r-01-10-7-1-10",
  "type": "Exercise",
  "number": "A.6.8",
  "title": "",
  "body": "      Here we need to finish factoring the denominator: Now we see that the denominator has the following factors:   (linear, single)   (linear, single)   (irreducible quadratic, single)  Hence, the FORM of the partial fraction decomposition is:  "
},
{
  "id": "r-01-10-7-1-11",
  "level": "2",
  "url": "r-01-10-7.html#r-01-10-7-1-11",
  "type": "Exercise",
  "number": "A.6.9",
  "title": "",
  "body": "        First, factor the denominator: The denominator has the following factors:   (linear, single)   (linear, single)   (linear, single)  Hence, the FORM of the partial fraction decomposition is:  "
},
{
  "id": "r-01-10-7-1-12",
  "level": "2",
  "url": "r-01-10-7.html#r-01-10-7-1-12",
  "type": "Exercise",
  "number": "A.6.10",
  "title": "",
  "body": "        First, factor the denominator: The denominator has the following factors:   (linear, single)   (linear, single)  Hence, the FORM of the partial fraction decomposition is:  "
},
{
  "id": "r-01-10-7-2-3",
  "level": "2",
  "url": "r-01-10-7.html#r-01-10-7-2-3",
  "type": "Exercise",
  "number": "A.6.11",
  "title": "",
  "body": "        First, factor the denominator: The denominator has the following factors:   (linear, single)   (linear, single)   (linear, single)  Hence, the FORM of the partial fraction decomposition is: Multiply both sides by the common denominator and solve for  and  "
},
{
  "id": "r-01-10-7-2-4",
  "level": "2",
  "url": "r-01-10-7.html#r-01-10-7-2-4",
  "type": "Exercise",
  "number": "A.6.12",
  "title": "",
  "body": "      Since the denominator is already factored, we see that the denominator has the following factors:   (linear, double)   (linear, distinct)  Hence, the FORM of the partial fraction decomposition is: Multiply both sides by the common denominator and solve for  and  "
},
{
  "id": "r-01-10-7-2-5",
  "level": "2",
  "url": "r-01-10-7.html#r-01-10-7-2-5",
  "type": "Exercise",
  "number": "A.6.13",
  "title": "",
  "body": "      Here we need to finish factoring the denominator: Now we see that the denominator has the following factors:   (linear, double)   (linear, double)  Hence, the FORM of the partial fraction decomposition is: Multiply both sides by the common denominator and solve for   and  "
},
{
  "id": "r-01-10-7-2-6",
  "level": "2",
  "url": "r-01-10-7.html#r-01-10-7-2-6",
  "type": "Exercise",
  "number": "A.6.14",
  "title": "",
  "body": "      Here we need to finish factoring the denominator: Now we see that (which is linear), is a factor (three times) of the denominator. Hence, the FORM of the partial fraction decomposition is: Multiply both sides by the common denominator and solve for  and  "
},
{
  "id": "r-01-10-7-2-7",
  "level": "2",
  "url": "r-01-10-7.html#r-01-10-7-2-7",
  "type": "Exercise",
  "number": "A.6.15",
  "title": "",
  "body": "      Here we need to finish factoring the denominator: Now we see that the denominator has the following factors:   (linear, single)   (linear, single)   (irreducible quadratic, single)  Hence, the FORM of the partial fraction decomposition is: Multiply both sides by the common denominator and solve for   and  "
},
{
  "id": "r-01-10-7-2-8",
  "level": "2",
  "url": "r-01-10-7.html#r-01-10-7-2-8",
  "type": "Exercise",
  "number": "A.6.16",
  "title": "",
  "body": "      Here we need to finish factoring the denominator: Now we see that the denominator has the following factors:   (linear, single)   (linear, single)   (irreducible quadratic, single)  Hence, the FORM of the partial fraction decomposition is: Multiply both sides by the common denominator and solve for   and  "
},
{
  "id": "r-01-10-7-2-9",
  "level": "2",
  "url": "r-01-10-7.html#r-01-10-7-2-9",
  "type": "Exercise",
  "number": "A.6.17",
  "title": "",
  "body": "      Here we need to finish factoring the denominator: Now we see that the denominator has the following factors:   (linear, single)   (linear, single)   (irreducible quadratic, single)  Hence, the FORM of the partial fraction decomposition is: Multiply both sides by the common denominator and solve for   and  "
},
{
  "id": "r-01-10-7-2-10",
  "level": "2",
  "url": "r-01-10-7.html#r-01-10-7-2-10",
  "type": "Exercise",
  "number": "A.6.18",
  "title": "",
  "body": "      Here we need to finish factoring the denominator: Now we see that the denominator has the following factors:   (linear, double)   (linear, double)  Hence, the FORM of the partial fraction decomposition is: Multiply both sides by the common denominator and solve for   and  "
},
{
  "id": "r-01-10-7-2-11",
  "level": "2",
  "url": "r-01-10-7.html#r-01-10-7-2-11",
  "type": "Exercise",
  "number": "A.6.19",
  "title": "",
  "body": "      Here we need to finish factoring the denominator: Now we see that the denominator has the following factors:   (linear, single)   (linear, single)   (irreducible quadratic, single)  Hence, the FORM of the partial fraction decomposition is: Multiply both sides by the common denominator and solve for   and  "
},
{
  "id": "r-01-10-7-2-12",
  "level": "2",
  "url": "r-01-10-7.html#r-01-10-7-2-12",
  "type": "Exercise",
  "number": "A.6.20",
  "title": "",
  "body": "             and        "
},
{
  "id": "r-01-10-7-2-13",
  "level": "2",
  "url": "r-01-10-7.html#r-01-10-7-2-13",
  "type": "Exercise",
  "number": "A.6.21",
  "title": "",
  "body": "          "
},
{
  "id": "r-01-10-7-2-14",
  "level": "2",
  "url": "r-01-10-7.html#r-01-10-7-2-14",
  "type": "Exercise",
  "number": "A.6.22",
  "title": "",
  "body": "          "
},
{
  "id": "r-01-10-7-2-15",
  "level": "2",
  "url": "r-01-10-7.html#r-01-10-7-2-15",
  "type": "Exercise",
  "number": "A.6.23",
  "title": "",
  "body": "          "
},
{
  "id": "r-01-10-7-2-16",
  "level": "2",
  "url": "r-01-10-7.html#r-01-10-7-2-16",
  "type": "Exercise",
  "number": "A.6.24",
  "title": "",
  "body": "          "
},
{
  "id": "calculus-review-product-rule",
  "level": "1",
  "url": "calculus-review-product-rule.html",
  "type": "Section",
  "number": "B.1",
  "title": "Product Rule",
  "body": " Product Rule  The next technique for solving DEs we will study relies heavily on you knowing the Product Rule for differentiation inside and out, forward and backward (literally!). These problems are intended to help you review the Product Rule. (Don't forget about the chain rule, too!) Let's warm up by practicing using the product rule.   Write down the product rule.   Evaluate the following derivatives.                              Suppose is a function of and use the product rule to rewrite the following:          Suppose is a function of and use the product rule to rewrite the following:          Now let's look at the product rule \"in the other direction\"... Or we can think about this as \"un-doing\" the product rule.  For example, if we have the expression then we can see that if we think identify as then Then we might label the expression as follows: This now looks like the result of having taken the derivative of a product. That is:   Now you try some.  Rewrite each of the following as the derivative of a product:                      "
},
{
  "id": "breakdown-of-formula",
  "level": "1",
  "url": "breakdown-of-formula.html",
  "type": "Subsection",
  "number": "B.2.1",
  "title": "Breaking Down the Integration by Parts Formula",
  "body": " Breaking Down the Integration by Parts Formula  Let's break down the formula for integration by parts: .  Here’s how it works:   is a function that you choose to differentiate (it should get simpler when differentiated).  is a part of the integrand that you choose to integrate (it should get easier when integrated).  is the new term after applying the product of and the integral of .  is the remaining integral, now simpler than the original.   "
},
{
  "id": "integration-by-parts-example",
  "level": "1",
  "url": "integration-by-parts-example.html",
  "type": "Subsection",
  "number": "B.2.2",
  "title": "Example: Applying Integration by Parts",
  "body": " Example: Applying Integration by Parts  Consider the integral: .  We'll apply integration by parts, following these steps:    Step 1: Identify and . In this case, we choose and . This makes and .    Step 2: Substitute into the integration by parts formula:  .   Step 3: Solve the remaining integral:  .   Step 4: Combine the results:  .   And that’s the final result: .  "
},
{
  "id": "analogy-for-laplace",
  "level": "1",
  "url": "analogy-for-laplace.html",
  "type": "Subsection",
  "number": "B.2.3",
  "title": "Laplace Transform and Integration by Parts: An Analogy",
  "body": " Laplace Transform and Integration by Parts: An Analogy  When applying the Laplace Transform, think of it as a way of \"unwrapping\" the derivatives of a function. Just like how you can redistribute \"work\" between functions using integration by parts, the Laplace Transform temporarily converts a differential equation into an algebraic one, allowing you to solve it more easily.  Once the problem is solved in the transformed space, we can \"repackage\" the function by applying the inverse Laplace Transform, revealing the solution in its original form.  "
},
{
  "id": "main-15-2",
  "level": "1",
  "url": "main-15-2.html",
  "type": "Section",
  "number": "C.1",
  "title": "Direct Integration",
  "body": "Direct Integration  "
},
{
  "id": "main-15-3",
  "level": "1",
  "url": "main-15-3.html",
  "type": "Section",
  "number": "C.2",
  "title": "Visualizing Solutions",
  "body": "Visualizing Solutions  Verification Details for Visualization DE  To verify that is a solution, we move all terms to one side of the equation to get Now, substitute it into the differential equation: This shows that satisfies and is, thus, a solution to    "
},
{
  "id": "main-15-4",
  "level": "1",
  "url": "main-15-4.html",
  "type": "Section",
  "number": "C.3",
  "title": "Integrating Factor",
  "body": "Integrating Factor  Standard Form Every linear differential equation looks like . The first-order version of this is , but we can divide both sides of this equation by , like so . Since every first-order linear differential equations can always be written as , we call this the first-order linear standard form .  Integrating Factor Calculation Details  Since we only need one integrating factor, we are free to pick any value of .  "
},
{
  "id": "main-15-5",
  "level": "1",
  "url": "main-15-5.html",
  "type": "Section",
  "number": "C.4",
  "title": "Linear Homogeneous Constant Coefficients",
  "body": "Linear Homogeneous Constant Coefficients  N-th Derivative of  Each derivative of adds a multiple of , so .  2nd Order LHCC Complex Case 3  The following explains how comes directly from .  Since and are complex, they can be written as . Substituting these into , using , the even property of cosine and odd property of sine , we can rewrite the general solution as .   Like Terms  Terms are called like terms if they have identical variable parts. That is, they differ only by a coefficient. Like terms can be combined via addition and subtraction. For example, the and terms below are pairs of like terms, which can be combined as follows: .   Polynomial Factoring Calculator   Type in any polynomial of . Use for multiplication. If the polynomial has rational roots, it will show the factors.      To find the characteristic equation, we substitute into the -th order LHCC equation and solve for . Doing this gives us . Since is never zero, we must have which is an -th order polynomial in .   "
},
{
  "id": "like-terms-2",
  "level": "2",
  "url": "main-15-5.html#like-terms-2",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "like terms "
},
{
  "id": "figure-pp",
  "level": "2",
  "url": "main-15-5.html#figure-pp",
  "type": "Figure",
  "number": "C.10",
  "title": "",
  "body": " Type in any polynomial of . Use for multiplication. If the polynomial has rational roots, it will show the factors.   "
},
{
  "id": "main-15-6",
  "level": "1",
  "url": "main-15-6.html",
  "type": "Section",
  "number": "C.5",
  "title": "Laplace Transforms",
  "body": "Laplace Transforms   Notice that when , the term in the integral becomes and we, instead, would get This shows that when , the integral does not converge ( does not exist ) as required by the definition of the Laplace Transform. Therefore, when working with Laplace transforms, it is common restrict some values of .   When , the the integral becomes Therefore, we must have for this integral to be finite.   If , then as , we would have and so This shows the Laplace transform would not exist if . Therefore, we must require .   Since the limit only controls , we treat as a constant, hence is also a constant that can be pulled out of the limit.   Since , then and therefore,      Key Steps         Key Steps         Key Steps      Key Steps  Integration by parts with and    is a constant in this integral, so we can bring it out.   must go to zero.     Yes, good job!   No, that's incorrect. The dependent variable is always the variable with the derivative.     L1.    L2.    L3.    L4.    L5.    L6.    L7.    L8.    L9.    L10.    L11.    L12.    L13.    L14.    L15.    L16.       graph of vs.                Equating coefficients gives us four equations in four unknowns.      Partial fraction decomposition has the form, and we find , , and by           We also verify the initial conditions:    Details  Using the definition of the Laplace transform: For the integral to converge, the exponent must be negative, leading to the condition . Proceeding with the integration: Thus, the Laplace transform of is:    Details  Using the definition of the Laplace transform:  Integration by parts on , gives us  L'Hopital's Rule shows and is known. Therefore, .       Since is the limit variable, we must take derivatives with respect to (where is constant). Assuming ,   Details  Using the definition of the Laplace transform:  Integration by parts on , gives us  L'Hopital's Rule shows and . Therefore, .       This time we apply L'Hopital's rule twice. Assuming ,   factorial The factorial of , denoted , is the product of all positive integers less than or equal to . For example, .  "
},
{
  "id": "main-16-2",
  "level": "1",
  "url": "main-16-2.html",
  "type": "Section",
  "number": "D.1",
  "title": "Orphaned Content",
  "body": "Orphaned Content   This is just a place to put content that was written and may or not be used.   Additional Narrative  So far, we have seen three examples of how to find a Laplace transform of a given function, but we have not discussed why this idea is relevant to differential equations. In the next section, we will tie these two concepts together and illustrate how Laplace transform can be used to solve a differential equation.   Additional Examples   Find the Laplace transform of the function    We will use properties in the table as follows.      Find    We will use properties in the table as follows.      Find the Laplace transform of the function    Before we begin, we note that it's very tempting to think that because we know the Laplace transforms of both and we can simply multiply those together to get the desired Laplace transform. However, this is not the case, just as similar statements were not true for finding the derivatives and integrals of the products of functions. Rather, we will need to use property , with and    We need to know what is before we can proceed. Let's go back to the naming system we have instituted. If we have a capital that is the Laplace transform of a function lower case We identified that function previously: We use to find its Laplace transform. Then we continue finding by taking two derivatives (using the quotient rule for derivatives; details are omitted here).      Additional Practice   "
},
{
  "id": "main-16-2-4-2",
  "level": "2",
  "url": "main-16-2.html#main-16-2-4-2",
  "type": "Example",
  "number": "D.11",
  "title": "",
  "body": " Find the Laplace transform of the function    We will use properties in the table as follows.    "
},
{
  "id": "main-16-2-4-3",
  "level": "2",
  "url": "main-16-2.html#main-16-2-4-3",
  "type": "Example",
  "number": "D.12",
  "title": "",
  "body": " Find    We will use properties in the table as follows.    "
},
{
  "id": "main-16-2-4-4",
  "level": "2",
  "url": "main-16-2.html#main-16-2-4-4",
  "type": "Example",
  "number": "D.13",
  "title": "",
  "body": " Find the Laplace transform of the function    Before we begin, we note that it's very tempting to think that because we know the Laplace transforms of both and we can simply multiply those together to get the desired Laplace transform. However, this is not the case, just as similar statements were not true for finding the derivatives and integrals of the products of functions. Rather, we will need to use property , with and    We need to know what is before we can proceed. Let's go back to the naming system we have instituted. If we have a capital that is the Laplace transform of a function lower case We identified that function previously: We use to find its Laplace transform. Then we continue finding by taking two derivatives (using the quotient rule for derivatives; details are omitted here).    "
},
{
  "id": "main-16-3",
  "level": "1",
  "url": "main-16-3.html",
  "type": "Section",
  "number": "D.2",
  "title": "Orphaned Content",
  "body": "Orphaned Content   This is just a place to put content that was written and may or not be used.   Additional Narrative  Before diving into specifics, we need to mention the linearity property of the inverse Laplace transform, which will be crucial in this discussion. Inverse Laplace Transform Property  For any constants and and functions of  and ,           Common Laplace Transforms. are constant,      -functions  -functions                                                                   Laplace Transforms Properties,      Properties                              Completing the square is an essential technique for transforming quadratic expressions that don't directly match a form in the table of common Laplace transforms. However, it's not the only strategy available. In this section, we'll explore another important technique: partial fraction decomposition. This method is useful for breaking down complex fractions into simpler components that can each be matched with forms in the Laplace transform table.  Two other forms we may wish to match when we study Laplace transforms are As before, we work toward making the denominator match first , and then we sort out the numerator second.   Find    As in the previous examples, the denominator is a second-degree polynomial; therefore it is sensible for us to begin by completing the square in the denominator as we did in the previous two examples.   Take a careful look at the denominator here. It's really close to matching or , but it is not a match because of the negative sign in front of the We need to change course when this happens. Another algebraic manipulation that we might consider is a partial fraction decomposition.   Margin note: If you need to review partial fraction decomposition, go HERE.    We revert to the original expression, but this time, instead of completing the square, we factor the denominator.   Since each of the factors in the denominator is a distinct linear factor, we know that the form of the partial fraction decomposition is   Our next goal is to determine the coefficients and in this equations. There are multiple ways to achieve this and we demonstrate just one here. We multiply both sides of the equation by the least common denominator, , and then expand and collect like terms, as shown.   At this point, we have a polynomial on the left hand side and a polynomial on the right hand side. The only way these can be equal to each other is if the corresponding coefficients are equal. That is, the coefficient on on the left hand side is 1, while the coefficient on on the right hand side of the equation is . Since the polynomials are equal, we know that these are equal. That is, Similarly, if we equate the constants, we have Thus, we have the following system of two linear equations in terms of two unknown variables, and .   There are many ways to solve such an equation, and you are encouraged to choose the solution technique you like the most. Here we will solve the first equation for , and then substitute into the second equation, hence we have   Remember that our goal is to take the inverse Laplace transform. Our algebraic manipulation was helpful because we took a more complex expression and rewrote it as two simpler fractions. We can now use to find the inverse Laplace transform as follows.      Write in the form      Since has a quadratic function in the denominator, it makes sense that we would try to match it with one of the forms above, however, the form of the numerator suggests matching it with the second expression.  As we mentioned earlier, we'll try to make the denominator match first. Since both of the forms we're trying to match are of the form we will complete the square first: (If you still don't remember how to complete the square, look up that primer and do the previous exercises in that section above.)  Let's rewrite the given expression as follows.   We've got the denominator in exactly the right form--it looks just like with and . As in the previous section, once we've gotten the denominator in shape, we turn our attention to the numerator. If we look back at the two forms we are trying to match, we see that our expression has an in the numerator, so it's more like . It would be exactly right if we had in the numerator, which in this case would be .  What we do have in the numerator is ; and we would like it to be which means if we added 4, we'd have exactly the right thing. If we want to add 4, we'll need to compensate by also subtracting 4, like this:   Great! Now we can split this single fraction into two separate fractions: We're almost there! The first fraction is a perfect match for the form (with and ); but we still have another expression that is not yet a match. The remaining fraction looks like it could eventually match the form . We would need to have a 5 in the numerator, and we currently have a 4. But we can fix that as we did in the previous section: Now let's put it all together. Here's everything we did:   As mentioned before, being able to use appropriate algebra to \"match\" forms is really important when we work with Laplace Transforms. Since it's really just algebra, now is a great time to practice that skill--so when we are in the middle of studying Laplace Transforms, you can just focus on the \"new\" stuff.    Now you try some!   Manipulate each of the following expressions to make it match the form and\/or                                           Now that's you've been practicing manipulating expressions to get them to match a particular, specific form, it's time to practice picking out which form an expression is most like. Find the form(s) on the right that best match the expression on the left. It may not be a perfect match, but could be manipulated (as we did above) to get into the correct form(s).  (EXAMPLE)  This best matches form F.    %D   %B   %A   %forms G and H   %C   %forms D and E                               This best matches form F.  This best matches form D.  This best matches form B.  This best matches form A.  This best matches form forms G and H.  This best matches form C.  This best matches form forms D and E.        If you have a rational function where the denominator is of higher degree, then partial fraction decomposition should be used to break the single fraction into several simpler fractions.   Find the inverse Laplace transform of    Note that as the quadratic term in the denominator does not factor, the denominator contains an irreducible quadratic factor and a repeated linear factor. We'll proceed by simplifying this complicated fraction with a Partial Fraction Decomposition of the form   You may also consider using technology to find a partial fraction decomposition. You should get  Click here for the details.   With the partial fraction decomposition in hand, we are prepared to take the inverse Laplace transform, using the same types of algebraic manipulations demonstrated in the previous examples.     In summary, when we want to take the inverse Laplace transform of a rational function with a second-degree polynomial in the denominator, we may complete the square or we may do a partial fraction decomposition. How will we know which is appropriate? Here are a few guidelines for you to consider.  Does the denominator factor in an obvious way? If so, factor the denominator and do a partial fraction decomposition if necessary.  If the denominator does not factor in an obvious way, try completing the square.  If you end up with addition outside of the parentheses, as in then you should aim to match and\/or .  If instead you end up with subtraction outside the parentheses, as in then you should factor and do a partial fraction decomposition. You may consider using the quadratic formula if the factorization is not obvious to you.  If you end up with no terms outside the parentheses, as in then use .     Additional Examples   Additional Practice   "
},
{
  "id": "common-lt-table-copy",
  "level": "2",
  "url": "main-16-3.html#common-lt-table-copy",
  "type": "Table",
  "number": "D.14",
  "title": "<em class=\"emphasis\">Common Laplace Transforms. <span class=\"process-math\">\\(a, b\\)<\/span> are constant, <span class=\"process-math\">\\(n = 1, 2, \\ldots\\)<\/span><\/em>",
  "body": " Common Laplace Transforms. are constant,      -functions  -functions                                                               "
},
{
  "id": "main-16-3-3-4",
  "level": "2",
  "url": "main-16-3.html#main-16-3-3-4",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Properties "
},
{
  "id": "main-16-3-3-7",
  "level": "2",
  "url": "main-16-3.html#main-16-3-3-7",
  "type": "Example",
  "number": "D.16",
  "title": "",
  "body": " Find    As in the previous examples, the denominator is a second-degree polynomial; therefore it is sensible for us to begin by completing the square in the denominator as we did in the previous two examples.   Take a careful look at the denominator here. It's really close to matching or , but it is not a match because of the negative sign in front of the We need to change course when this happens. Another algebraic manipulation that we might consider is a partial fraction decomposition.   Margin note: If you need to review partial fraction decomposition, go HERE.    We revert to the original expression, but this time, instead of completing the square, we factor the denominator.   Since each of the factors in the denominator is a distinct linear factor, we know that the form of the partial fraction decomposition is   Our next goal is to determine the coefficients and in this equations. There are multiple ways to achieve this and we demonstrate just one here. We multiply both sides of the equation by the least common denominator, , and then expand and collect like terms, as shown.   At this point, we have a polynomial on the left hand side and a polynomial on the right hand side. The only way these can be equal to each other is if the corresponding coefficients are equal. That is, the coefficient on on the left hand side is 1, while the coefficient on on the right hand side of the equation is . Since the polynomials are equal, we know that these are equal. That is, Similarly, if we equate the constants, we have Thus, we have the following system of two linear equations in terms of two unknown variables, and .   There are many ways to solve such an equation, and you are encouraged to choose the solution technique you like the most. Here we will solve the first equation for , and then substitute into the second equation, hence we have   Remember that our goal is to take the inverse Laplace transform. Our algebraic manipulation was helpful because we took a more complex expression and rewrote it as two simpler fractions. We can now use to find the inverse Laplace transform as follows.    "
},
{
  "id": "main-16-3-3-8",
  "level": "2",
  "url": "main-16-3.html#main-16-3-3-8",
  "type": "Example",
  "number": "D.17",
  "title": "",
  "body": " Write in the form      Since has a quadratic function in the denominator, it makes sense that we would try to match it with one of the forms above, however, the form of the numerator suggests matching it with the second expression.  As we mentioned earlier, we'll try to make the denominator match first. Since both of the forms we're trying to match are of the form we will complete the square first: (If you still don't remember how to complete the square, look up that primer and do the previous exercises in that section above.)  Let's rewrite the given expression as follows.   We've got the denominator in exactly the right form--it looks just like with and . As in the previous section, once we've gotten the denominator in shape, we turn our attention to the numerator. If we look back at the two forms we are trying to match, we see that our expression has an in the numerator, so it's more like . It would be exactly right if we had in the numerator, which in this case would be .  What we do have in the numerator is ; and we would like it to be which means if we added 4, we'd have exactly the right thing. If we want to add 4, we'll need to compensate by also subtracting 4, like this:   Great! Now we can split this single fraction into two separate fractions: We're almost there! The first fraction is a perfect match for the form (with and ); but we still have another expression that is not yet a match. The remaining fraction looks like it could eventually match the form . We would need to have a 5 in the numerator, and we currently have a 4. But we can fix that as we did in the previous section: Now let's put it all together. Here's everything we did:   As mentioned before, being able to use appropriate algebra to \"match\" forms is really important when we work with Laplace Transforms. Since it's really just algebra, now is a great time to practice that skill--so when we are in the middle of studying Laplace Transforms, you can just focus on the \"new\" stuff.   "
},
{
  "id": "main-16-3-3-11",
  "level": "2",
  "url": "main-16-3.html#main-16-3-3-11",
  "type": "Example",
  "number": "D.18",
  "title": "",
  "body": " Find the inverse Laplace transform of    Note that as the quadratic term in the denominator does not factor, the denominator contains an irreducible quadratic factor and a repeated linear factor. We'll proceed by simplifying this complicated fraction with a Partial Fraction Decomposition of the form   You may also consider using technology to find a partial fraction decomposition. You should get  Click here for the details.   With the partial fraction decomposition in hand, we are prepared to take the inverse Laplace transform, using the same types of algebraic manipulations demonstrated in the previous examples.    "
},
{
  "id": "main-16-4",
  "level": "1",
  "url": "main-16-4.html",
  "type": "Section",
  "number": "D.3",
  "title": "Orphaned Content",
  "body": "Orphaned Content   This is just a place to put content that was written and may or not be used.   Additional Narrative   Additional Examples   Example 1: Solving a First-Order Linear Differential Equation  Consider the differential equation:   Applying the Laplace transform to both sides, we get:   Substituting the initial condition , the equation becomes:   Rearranging and solving for :    We can now decompose the second term using partial fractions:   Solving for and , we get and . Therefore:    Taking the inverse Laplace transform, we obtain the solution:     Example 2: Second-Order Differential Equation  Consider the second-order differential equation:   Applying the Laplace transform:   Substituting the initial conditions:   Solving for :   After rearranging and solving, the inverse Laplace transform gives:     Additional Practice   "
},
{
  "id": "main-16-4-4-2",
  "level": "2",
  "url": "main-16-4.html#main-16-4-4-2",
  "type": "Example",
  "number": "D.19",
  "title": "Example 1: Solving a First-Order Linear Differential Equation.",
  "body": " Example 1: Solving a First-Order Linear Differential Equation  Consider the differential equation:   Applying the Laplace transform to both sides, we get:   Substituting the initial condition , the equation becomes:   Rearranging and solving for :    We can now decompose the second term using partial fractions:   Solving for and , we get and . Therefore:    Taking the inverse Laplace transform, we obtain the solution:   "
},
{
  "id": "main-16-4-4-3",
  "level": "2",
  "url": "main-16-4.html#main-16-4-4-3",
  "type": "Example",
  "number": "D.20",
  "title": "Example 2: Second-Order Differential Equation.",
  "body": " Example 2: Second-Order Differential Equation  Consider the second-order differential equation:   Applying the Laplace transform:   Substituting the initial conditions:   Solving for :   After rearranging and solving, the inverse Laplace transform gives:   "
},
{
  "id": "main-16-5",
  "level": "1",
  "url": "main-16-5.html",
  "type": "Section",
  "number": "D.4",
  "title": "Orphaned Content",
  "body": "Orphaned Content   This is just a place to put content that was written and may or not be used.   Additional Narrative   Additional Examples   Additional Practice   "
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
