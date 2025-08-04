var ptx_lunr_search_style = "textbook";
var ptx_lunr_docs = [
{
  "id": "whats-a-de",
  "level": "1",
  "url": "whats-a-de.html",
  "type": "Section",
  "number": "",
  "title": "What is a Differential Equation?",
  "body": " What is a Differential Equation?     🎧 Listen In this section, we'll explore what a differential equation is, starting with an analogy, and then moving to a formal definition.     Connection to Algebra and Calculus  To learn something new, it helps to connect it to something you already know. So let's begin by linking differential equations to algebra.  Suppose you're asked to solve each of the following equations for :   The goal of algebra is to figure out what number or function goes in place of to make both sides equal. Instead of guessing, you learned rules for isolating . If we apply those rules, we get:   Now suppose you're asked to solve a new equation:   As before, we isolate , giving:   So what function has a derivative of ? In other words, what goes in place of to make this equation true?  From calculus, you might recognize this as an anti-derivative problem. So the solution is:   Believe it or not, you just solved a differential equation using algebra and calculus! Most problems won't be quite that straightforward, but the goal is the same: find a function that fits in place of and makes the equation true.    Definition    🎧 Listen Essentially, a differential equation is any equation where the unknown has a derivative applied to it. The formal definition is as follows:    Differential Equation      📝 Note: DE ODE  📌 Since this text only covers ODEs, any use of DE will mean ODE .  A differential equation (DE) is an equation that involves one or more derivatives of an unknown function. If the function depends on a single variable, the equation is an ordinary differential equation (ODE) . Otherwise, it is called a partial differential equation (PDE) .     For an equation to qualify as a differential equation, it must include both a derivative (like or ) and an equals sign. This helps us identify the following as differential equations:    📖❓ Not Required for a DE  Which of the following is NOT required for an equation to be classified as a differential equation?    A -variable  Correct! A -variable is not a requirement for a differential equation.    An unknown function  Incorrect. A differential equation does include an unknown function, which we are solving for.    One or more derivatives of an unknown function  Incorrect. The presence of at least one derivative is essential to define a differential equation.    An equal sign, \"=\"  Incorrect. An equality sign is required for an equation to be classified as a differential equation.     In contrast, these are not differential equations, they either lack a derivative or an equals sign:    📖❓ Identifying the Differential Equation  Which of the following equations is a differential equation.     Correct! This equation involves a derivative, making it a differential equation.     Incorrect. This equation does not contain any derivatives, so it is not a differential equation.     Incorrect. This equation does not contain any derivatives, so it is not a differential equation.     Incorrect. This equation does not contain any derivatives, so it is not a differential equation.       Common Derivative Notations  In this text, we will use the following notations for derivatives:   📝 Note: Notation  📌 Be careful not to mistake as raised to the power of 4.  📌 Dot Notation is normally reserved for derivatives with respect to time.                                             📖❓ Understanding Derivative Notation  The expression is the same as to the power of 18.    True  Incorrect. Please read the note on derivative notation.    False  Correct!            📤 Wrap-Up    🗝️ Key Takeaways..  🎧 Listen   A differential equation involves an unknown function and at least one of its derivatives.  It must contain an equals sign to be considered an equation.  Differential equations are a natural extension of algebra and calculus.  Notation varies by context but generally falls into prime, Leibniz, or dot notation.      "
},
{
  "id": "def-diff-eq",
  "level": "2",
  "url": "whats-a-de.html#def-diff-eq",
  "type": "📙 Definition",
  "number": "1",
  "title": "Differential Equation.",
  "body": " Differential Equation      📝 Note: DE ODE  📌 Since this text only covers ODEs, any use of DE will mean ODE .  A differential equation (DE) is an equation that involves one or more derivatives of an unknown function. If the function depends on a single variable, the equation is an ordinary differential equation (ODE) . Otherwise, it is called a partial differential equation (PDE) .    "
},
{
  "id": "chkpt-whats-a-de-1",
  "level": "2",
  "url": "whats-a-de.html#chkpt-whats-a-de-1",
  "type": "Checkpoint",
  "number": "2",
  "title": "📖❓ Not Required for a DE.",
  "body": " 📖❓ Not Required for a DE  Which of the following is NOT required for an equation to be classified as a differential equation?    A -variable  Correct! A -variable is not a requirement for a differential equation.    An unknown function  Incorrect. A differential equation does include an unknown function, which we are solving for.    One or more derivatives of an unknown function  Incorrect. The presence of at least one derivative is essential to define a differential equation.    An equal sign, \"=\"  Incorrect. An equality sign is required for an equation to be classified as a differential equation.    "
},
{
  "id": "chkpt-whats-a-de-2",
  "level": "2",
  "url": "whats-a-de.html#chkpt-whats-a-de-2",
  "type": "Checkpoint",
  "number": "3",
  "title": "📖❓ Identifying the Differential Equation.",
  "body": " 📖❓ Identifying the Differential Equation  Which of the following equations is a differential equation.     Correct! This equation involves a derivative, making it a differential equation.     Incorrect. This equation does not contain any derivatives, so it is not a differential equation.     Incorrect. This equation does not contain any derivatives, so it is not a differential equation.     Incorrect. This equation does not contain any derivatives, so it is not a differential equation.    "
},
{
  "id": "rq-whats-a-de-2",
  "level": "2",
  "url": "whats-a-de.html#rq-whats-a-de-2",
  "type": "Checkpoint",
  "number": "4",
  "title": "📖❓ Understanding Derivative Notation.",
  "body": " 📖❓ Understanding Derivative Notation  The expression is the same as to the power of 18.    True  Incorrect. Please read the note on derivative notation.    False  Correct!      "
},
{
  "id": "de-components",
  "level": "1",
  "url": "de-components.html",
  "type": "Section",
  "number": "",
  "title": "Differential Equation Components",
  "body": " Differential Equation Components   Now that you can recognize a differential equation, it's time to look more closely at what it's made of. In this section, we'll break down the core components of a differential equation and explain the role each one plays in shaping it.    Dependent and Independent Variables  Every differential equation involves dependent and independent variables. The dependent variable is a function that depends on the independent variable and is the unknown function we're solving for. Because of this, the dependent variable always has derivatives applied to it, with respect to the independent variable.  📖❓ Which Variable has the Derivative   In a differential equation, you would expect to see a derivative applied to the dependent variable.      True    Correct! The dependent variable in a differential equation always has a derivative applied to it.      False    Incorrect. By definition, a differential equation involves derivatives of the dependent variable.      For example, the differential equation: has as the dependent variable, it's the unknown function. Since the equation includes , that tells us is changing with respect to , making the independent variable.  📖❓ Dependent vs. Independent   Which variable in the differential equation, , represents the unknown function we would like to find?     dependent variable,    Incorrect. is neither the dependent variable, nor what we are solving for.     independent variable,    Incorrect! is the independent variable, but it is not what we are solving for.     dependent variable,    Yes! We are solving for the unknown, which is the dependent variable in this equation.     independent variable,    Incorrect. We are solving for , but it is not the independent variable.      Identifying the dependent variable not only tells us what we're solving for, but it will also be an important part of determining which methods can be used to solve a differential equation.   Identify the Variables   Identify the dependent and independent variable in each equation:     The first equation contains and , but the presence of implies changes as changes. So,  is the unknown function we solve for that depends on .  dependent variable  , independent variable  .    The middle equation contains and , but is the second derivative of . So, must change as changes and  is the unknown function we solve for that depends on .  dependent variable  , independent variable  .    Only appears in the last equation, but indicates that is changing and so it must be the dependent variable . Typically, the independent variable will be clear from context of the problem, but in this case just assume whatever variable you like.     📖❓ Identify the Unknown   For each differential equation, identify the variable that represents the solution      Answer:        Answer:        Answer:        \\s*m\\s*  Yes, the solution to the differential equation is the dependent variable .    \\s*M\\s*  No, is not the same as .    \\s*t\\s*  No, is what the solution depends on, but it is not the solution itself.    .*  Incorrect. Carefully review the reading and try again.      \\s*P\\s*  Yes, the solution to the differential equation is the dependent variable .    \\s*p\\s*  No, is not the same as .    \\s*Q\\s*  No. Carefully look at which variable has the derivative applied to it.    .*  Incorrect. That's not a variable in the equation.      \\s*x\\s*  Yes, the solution to the differential equation is the dependent variable .    \\s*X\\s*  No, is not the same as .    \\s*y\\s*  No. Carefully look at which variable has the derivative applied to it.    .*  Incorrect. That's not a variable in the equation.        Terms of a Differential Equation  The word term is commonly used to describe a part of a mathematical expression. In a differential equation, a term refers to any part of the expression separated by plus ( ) or minus ( ) signs. For example, an equation might be structured like this: This equation has three terms on the left-hand side and two on the right.  Terms may include the dependent variable, its derivatives, constants, or other functions of the independent variable. If a term does not include the dependent variable or its derivatives, it is called a constant term . For instance, in the differential equation:   the terms break down as follows:     term   term   term   term   constant term                  📖❓ What is the Constant Term?   Identify the constant term in the differential equation         Incorrect. This term contains a derivative of the dependent variable , so it is not a constant term.       Incorrect. This term involves the dependent variable , so it is not a constant term.       Correct! is the constant term because it does not contain the dependent variable .     Every differential equation has a constant term, even if it's not written explicitly. For example, can be rewritten as , where the constant term is . In general, any missing term can always be interpreted as a zero term.   📖❓ Hidden Constant Term   Identify the constant term of the differential equation         Incorrect. This term involves the dependent variable , so it is not a constant term.       Incorrect. This term involves the dependent variable , so it is not a constant term.       Correct! The constant term is because we can rewrite the equation as .    This equation does not have a constant term.  Incorrect. Every DE has a least one constant term.       Coefficients of a Differential Equation  A coefficient in a differential equation is a constant or function (depending only on the independent variable) that multiplies the dependent variable or one of its derivatives. Coefficients help determine the structure of the equation and what solution methods are possible.  For example, in the equation: the coefficients of , , and are the constants , , and , respectively.  Coefficients can also be functions of the independent variable. In the equation: the coefficients are the functions of the independent variable :                📖❓ Coefficient of   Identify the coefficient of in the differential equation         Incorrect, is only part of the coefficient of .       Correct! is the coefficient of the term involving .       Incorrect, is only part of the coefficient of .       Incorrect. is the constant on the right-hand side of the equation.     In general, for something to be considered a coefficient, it must not involve the dependent variable. If it does, the equation is nonlinear, and the notion of a \"coefficient\" becomes less useful. We'll explore this idea further when we study linear and nonlinear equations.       📤 Wrap-Up   🎧 Listen   🗝️ Key Takeaways..   Every differential equation involves two variables: a dependent variable (the unknown function we're solving for) and an independent variable (the variable it depends on).  A term is any part of a differential equation separated by plus or minus signs. Terms can include derivatives, the dependent variable, constants, or other functions of the independent variable.  A constant term is any term that doesn't involve the dependent variable or its derivatives, even a hidden on one side of the equation counts.  A coefficient is a constant or function of the independent variable that multiplies the dependent variable or its derivatives. In nonlinear equations, this idea may not apply in a meaningful way.     Check Your Understanding   📖❓ Identify the Coefficients   Click on each of the coefficients in the differential equation below.                                Look for the dependent variable in each term. The coefficient is the constant or function that multiplies the dependent variable.       "
},
{
  "id": "variables-2",
  "level": "2",
  "url": "de-components.html#variables-2",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "dependent variable independent variable "
},
{
  "id": "chkpt-variables-1",
  "level": "2",
  "url": "de-components.html#chkpt-variables-1",
  "type": "Checkpoint",
  "number": "5",
  "title": "📖❓ Which Variable has the Derivative.",
  "body": "📖❓ Which Variable has the Derivative   In a differential equation, you would expect to see a derivative applied to the dependent variable.      True    Correct! The dependent variable in a differential equation always has a derivative applied to it.      False    Incorrect. By definition, a differential equation involves derivatives of the dependent variable.     "
},
{
  "id": "chkpt-variables-2",
  "level": "2",
  "url": "de-components.html#chkpt-variables-2",
  "type": "Checkpoint",
  "number": "6",
  "title": "📖❓ Dependent vs. Independent.",
  "body": "📖❓ Dependent vs. Independent   Which variable in the differential equation, , represents the unknown function we would like to find?     dependent variable,    Incorrect. is neither the dependent variable, nor what we are solving for.     independent variable,    Incorrect! is the independent variable, but it is not what we are solving for.     dependent variable,    Yes! We are solving for the unknown, which is the dependent variable in this equation.     independent variable,    Incorrect. We are solving for , but it is not the independent variable.     "
},
{
  "id": "variables-7",
  "level": "2",
  "url": "de-components.html#variables-7",
  "type": "🌌 Example",
  "number": "7",
  "title": "Identify the Variables.",
  "body": " Identify the Variables   Identify the dependent and independent variable in each equation:     The first equation contains and , but the presence of implies changes as changes. So,  is the unknown function we solve for that depends on .  dependent variable  , independent variable  .    The middle equation contains and , but is the second derivative of . So, must change as changes and  is the unknown function we solve for that depends on .  dependent variable  , independent variable  .    Only appears in the last equation, but indicates that is changing and so it must be the dependent variable . Typically, the independent variable will be clear from context of the problem, but in this case just assume whatever variable you like.   "
},
{
  "id": "chkpt-variables-3",
  "level": "2",
  "url": "de-components.html#chkpt-variables-3",
  "type": "Checkpoint",
  "number": "8",
  "title": "📖❓ Identify the Unknown.",
  "body": " 📖❓ Identify the Unknown   For each differential equation, identify the variable that represents the solution      Answer:        Answer:        Answer:        \\s*m\\s*  Yes, the solution to the differential equation is the dependent variable .    \\s*M\\s*  No, is not the same as .    \\s*t\\s*  No, is what the solution depends on, but it is not the solution itself.    .*  Incorrect. Carefully review the reading and try again.      \\s*P\\s*  Yes, the solution to the differential equation is the dependent variable .    \\s*p\\s*  No, is not the same as .    \\s*Q\\s*  No. Carefully look at which variable has the derivative applied to it.    .*  Incorrect. That's not a variable in the equation.      \\s*x\\s*  Yes, the solution to the differential equation is the dependent variable .    \\s*X\\s*  No, is not the same as .    \\s*y\\s*  No. Carefully look at which variable has the derivative applied to it.    .*  Incorrect. That's not a variable in the equation.     "
},
{
  "id": "terms-2",
  "level": "2",
  "url": "de-components.html#terms-2",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "term "
},
{
  "id": "terms-3",
  "level": "2",
  "url": "de-components.html#terms-3",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "constant term "
},
{
  "id": "chkpt-terms-1",
  "level": "2",
  "url": "de-components.html#chkpt-terms-1",
  "type": "Checkpoint",
  "number": "9",
  "title": "📖❓ What is the Constant Term?",
  "body": " 📖❓ What is the Constant Term?   Identify the constant term in the differential equation         Incorrect. This term contains a derivative of the dependent variable , so it is not a constant term.       Incorrect. This term involves the dependent variable , so it is not a constant term.       Correct! is the constant term because it does not contain the dependent variable .    "
},
{
  "id": "chkpt-terms-2",
  "level": "2",
  "url": "de-components.html#chkpt-terms-2",
  "type": "Checkpoint",
  "number": "10",
  "title": "📖❓ Hidden Constant Term.",
  "body": " 📖❓ Hidden Constant Term   Identify the constant term of the differential equation         Incorrect. This term involves the dependent variable , so it is not a constant term.       Incorrect. This term involves the dependent variable , so it is not a constant term.       Correct! The constant term is because we can rewrite the equation as .    This equation does not have a constant term.  Incorrect. Every DE has a least one constant term.    "
},
{
  "id": "coefficients-2",
  "level": "2",
  "url": "de-components.html#coefficients-2",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "coefficient "
},
{
  "id": "chkpt-terms-coeffs-1a",
  "level": "2",
  "url": "de-components.html#chkpt-terms-coeffs-1a",
  "type": "Checkpoint",
  "number": "11",
  "title": "📖❓ Coefficient of <span class=\"process-math\">\\(y'\\)<\/span>.",
  "body": "📖❓ Coefficient of   Identify the coefficient of in the differential equation         Incorrect, is only part of the coefficient of .       Correct! is the coefficient of the term involving .       Incorrect, is only part of the coefficient of .       Incorrect. is the constant on the right-hand side of the equation.    "
},
{
  "id": "de-components-wrap-up-2",
  "level": "2",
  "url": "de-components.html#de-components-wrap-up-2",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "dependent variable independent variable term constant term coefficient "
},
{
  "id": "order-linearity",
  "level": "1",
  "url": "order-linearity.html",
  "type": "Section",
  "number": "",
  "title": "Order &amp; Linearity",
  "body": " Order & Linearity   So far, we've learned how to identify the core parts of a differential equation, its variables, terms, and coefficients. Now we'll turn to how differential equations are classified based on how these components appear. In this section, we'll focus on two of the most important classifications: the equation's order , which tells us the highest derivative involved, and its linearity , which depends on how the dependent variable and its derivatives appear in each term. Both properties play a central role in determining what kinds of solution methods apply.    Order  A differential equation must contain at least one derivative, but there's no limit on how many derivatives can appear. Some equations involve just a first derivative, while others include higher-order derivatives like , , or beyond.  To capture this idea, we define the order of a differential equation as the highest derivative of the dependent variable that appears in the equation.   📖❓ What is the Order   The order of a differential equation is determined by the number of terms it contains      True    Incorrect. The order is based on the highest derivative, regardless of the number of terms.      False    Correct! The order is determined by the highest derivative, not the number of terms.      For example, the equation is a first-order differential equation because the highest derivative is . On the other hand, the differential equation is third-order because it contains up to three derivatives in the term.   📖❓ Select the Third-Order Equation   Which of the following equations is a third-order differential equation?           Correct! The highest derivative here is the third derivative, making it a third-order differential equation.           Incorrect. This is a second-order differential equation.           Incorrect. This is a second-order differential equation.           Incorrect. This is a first-order differential equation.       Identify the Order   For each of the following differential equations, identify the order:     The first equation is second-order because the highest derivative of is .  A common pitfall for beginners is to confuse exponents with derivatives. In the second equation, the exponent in the term refers to raised to the sixth power, not a sixth derivative. Only derivatives affect the order.  So, the second equation is fifth-order . The fact that it appears inside a sine function makes no difference to the order.     📖❓ Give the Order of Each Differential Equation   Give the order of each differential equation:      Order:        Order:        Order:        \\s*(2|two|second|second order|second\\-order)\\s*  Correct! The highest derivative is .    \\s*(5|five|fifth)\\s*  Incorrect. Carefully review the definition of order and do not confuse the power of a variable with the order.    .*  Carefully review the definition of order.      \\s*(3|three|third|third order|third-order)\\s*  Correct! The highest derivative is .    .*  Carefully review the definition of order.      \\s*(5|five|fifth|fifth order|fifth\\-order)\\s*  Correct! The highest derivative is .    \\s*(2|two|second)\\s*  Incorrect. Carefully review the definition of order and do not confuse the power of a variable with the order.    .*  Carefully review the definition of order.        Linear Terms  To decide whether a differential equation is linear, we first need to understand what it means for a term to be linear. In this context, linearity refers to how the dependent variable and its derivatives appear in each term.  Let be the dependent variable. A term is linear if it appears as either: where the coefficient, , can be a constant or a function of the independent variable only, and is the -th derivative of .  For example, the following terms are linear:   The coefficient of the term actually has no affect on whether it's linear, regardless of how complicated appears.   📖❓ Identify the Coefficient   Each of the following terms is linear. Identify the coefficient in each term:                              \\s*(2t|2\\s*t|2\\s*\\*\\s*t|2\\(t\\))\\s*  Correct! .    \\s*(2|two)\\s*  Incorrect. The coefficient is more than just .    \\s*(y|Y)\\s*  Incorrect. should not contain .   \\s* Type in something ...  .* Incorrect     \\s*(sin\\(\\s*t\\s*\\)|sin\\s*t|sine\\s*t)\\s*  Correct! .    \\s*(y|Y)\\s*  Incorrect. should not contain .   \\s* Type in something ...  .* Incorrect     \\s*(1|one)\\s*  Correct! .    \\s*(y|Y)\\s*  Incorrect. should not contain .   \\s* Type in something ...  .* Incorrect       Nonlinear Terms  A term is nonlinear if it not in one of the forms in . Assuming is the dependent variable, some telltale signs that a term is nonlinear include:    or are raised to a power other than 1     e.g.,      or appear inside a nonlinear function     e.g.,       or are multiplied or divided by each other     e.g.,    Let's apply these strategies by breaking down the linearity of each term in the following differential equation:   The terms are:     Nonlinear. This term involves a product of the dependent variable and its derivative, violating the rule that only one can appear in a term.     Linear. The derivative appears by itself and to the first power. The coefficient does not affect linearity.     Nonlinear. The derivative appears inside a nonlinear function, the natural logarithm.     Nonlinear. The dependent variable appears raised to a power other than one.     Linear. This term doesn't involve the dependent variable or any of its derivatives.     📖❓ Match Each Terms with its Linearity      Directions:    🔹  Match (by dragging) each term (on the left) to either Linear or Nonlinear.    🔹  Assume the dependent variable is and the independent variable is .           Linear      Non-Linear Term      See if you can identify the linearity of the terms in the following examples, before looking at the solutions.   Identify the Linearity of the Terms   Determine whether each term in the equation is linear or nonlinear:      Focus on the dependent variable, , and its derivatives.        Focus on the dependent variable, , and its derivatives.         📖❓ Identify the Nonlinear Terms    For each differential equation, click on all of the nonlinear terms .                                           Linearity  Now that we've defined what it means for a term to be linear, we can describe what it means for an entire differential equation to be linear.  Essentially, a differential equation is linear if every term in the equation is linear . If just one term is nonlinear, the entire equation is nonlinear . We formally define linear differential equations as follows:   📖❓ What Makes an Equation Linear of Nonlinear   Select the true statement.     An equation is nonlinear if at least one of its terms are nonlinear.  Correct! A differential equation is nonlinear if any of its terms are nonlinear.    An equation is linear if at least one of its terms are linear.  Incorrect. A differential equation needs all of its terms to be linear.    As long as there are more linear terms than nonlinear terms, the equation is linear.  Incorrect.      Linear Differential Equations   A differential equation is linear if it can be written as a sum of linear terms involving the dependent variable and its derivatives:  This structure is known as a linear combination of the dependent variable and its derivatives.   where each is a function of the independent variable only, and is the input or forcing term.    For example, the following differential equations are linear:   Each term involving the dependent variable or its derivatives is linear, none appear raised to a power, inside a function, or multiplied together.  In contrast, the following equations are nonlinear because they include at least one nonlinear term (✷):   In each case, it only took one term to violate the definition of a linear differential equation.  Let's practice identifying the linearty of entire equations with a few examples.   Identify the Linearity of the Equation   Determine whether each of the following differential equations is linear:     In the first equation, all terms involving or its derivatives appear linearly: So the equation is linear.  In the second equation, the term is nonlinear, since appears in both the numerator and denominator: This makes the entire equation nonlinear.         📤 Wrap-Up    🗝️ Key Takeaways..  🎧 Listen   The order of a differential equation is the highest derivative of the dependent variable that appears. Only derivatives, not exponents, affect the order.  A linear term includes exactly one occurrence of the dependent variable or one of its derivatives, raised to the first power and not inside another function. Coefficients do not affect linearity.  A nonlinear term involves a product, quotient, exponent, or function of the dependent variable or its derivatives.  A differential equation is linear if all terms involving the dependent variable are linear. If even one is nonlinear, the entire equation is classified as nonlinear .     Check Your Understanding   📖❓ Linear System Basics   Identify the Linear Equations   Click-on all the linear differential equations.                   Remember that a linear differential equation contains only linear terms. Four of these equations are linear.    Linear equations only involve the dependent variable and its derivatives to the first power, and they won't be inside nonlinear functions like sine or multiplied by each other.     Identify the Nonlinear Equations   Click-on all the nonlinear differential equations                                  First identify the dependent variable, then carefully look at each term to determine if it is nonlinear. There are six nonlinear equations here.    Nonlinear equations often have terms where the dependent variable or its derivatives are raised to powers other than one, or are inside functions like sine, logarithms, or are multiplied by each other.        "
},
{
  "id": "order-linearity-intro-1",
  "level": "2",
  "url": "order-linearity.html#order-linearity-intro-1",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "order linearity "
},
{
  "id": "order-3",
  "level": "2",
  "url": "order-linearity.html#order-3",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "order "
},
{
  "id": "chkpt-order-1",
  "level": "2",
  "url": "order-linearity.html#chkpt-order-1",
  "type": "Checkpoint",
  "number": "13",
  "title": "📖❓ What is the Order.",
  "body": " 📖❓ What is the Order   The order of a differential equation is determined by the number of terms it contains      True    Incorrect. The order is based on the highest derivative, regardless of the number of terms.      False    Correct! The order is determined by the highest derivative, not the number of terms.     "
},
{
  "id": "chkpt-order-2",
  "level": "2",
  "url": "order-linearity.html#chkpt-order-2",
  "type": "Checkpoint",
  "number": "14",
  "title": "📖❓ Select the Third-Order Equation.",
  "body": " 📖❓ Select the Third-Order Equation   Which of the following equations is a third-order differential equation?           Correct! The highest derivative here is the third derivative, making it a third-order differential equation.           Incorrect. This is a second-order differential equation.           Incorrect. This is a second-order differential equation.           Incorrect. This is a first-order differential equation.     "
},
{
  "id": "order-7",
  "level": "2",
  "url": "order-linearity.html#order-7",
  "type": "🌌 Example",
  "number": "15",
  "title": "Identify the Order.",
  "body": " Identify the Order   For each of the following differential equations, identify the order:     The first equation is second-order because the highest derivative of is .  A common pitfall for beginners is to confuse exponents with derivatives. In the second equation, the exponent in the term refers to raised to the sixth power, not a sixth derivative. Only derivatives affect the order.  So, the second equation is fifth-order . The fact that it appears inside a sine function makes no difference to the order.   "
},
{
  "id": "chkpt-order-3",
  "level": "2",
  "url": "order-linearity.html#chkpt-order-3",
  "type": "Checkpoint",
  "number": "16",
  "title": "📖❓ Give the Order of Each Differential Equation.",
  "body": " 📖❓ Give the Order of Each Differential Equation   Give the order of each differential equation:      Order:        Order:        Order:        \\s*(2|two|second|second order|second\\-order)\\s*  Correct! The highest derivative is .    \\s*(5|five|fifth)\\s*  Incorrect. Carefully review the definition of order and do not confuse the power of a variable with the order.    .*  Carefully review the definition of order.      \\s*(3|three|third|third order|third-order)\\s*  Correct! The highest derivative is .    .*  Carefully review the definition of order.      \\s*(5|five|fifth|fifth order|fifth\\-order)\\s*  Correct! The highest derivative is .    \\s*(2|two|second)\\s*  Incorrect. Carefully review the definition of order and do not confuse the power of a variable with the order.    .*  Carefully review the definition of order.     "
},
{
  "id": "linear-terms-3",
  "level": "2",
  "url": "order-linearity.html#linear-terms-3",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "linear "
},
{
  "id": "chkpt-linear-terms-1",
  "level": "2",
  "url": "order-linearity.html#chkpt-linear-terms-1",
  "type": "Checkpoint",
  "number": "17",
  "title": "📖❓ Identify the Coefficient.",
  "body": " 📖❓ Identify the Coefficient   Each of the following terms is linear. Identify the coefficient in each term:                              \\s*(2t|2\\s*t|2\\s*\\*\\s*t|2\\(t\\))\\s*  Correct! .    \\s*(2|two)\\s*  Incorrect. The coefficient is more than just .    \\s*(y|Y)\\s*  Incorrect. should not contain .   \\s* Type in something ...  .* Incorrect     \\s*(sin\\(\\s*t\\s*\\)|sin\\s*t|sine\\s*t)\\s*  Correct! .    \\s*(y|Y)\\s*  Incorrect. should not contain .   \\s* Type in something ...  .* Incorrect     \\s*(1|one)\\s*  Correct! .    \\s*(y|Y)\\s*  Incorrect. should not contain .   \\s* Type in something ...  .* Incorrect    "
},
{
  "id": "nonlinear-terms-2",
  "level": "2",
  "url": "order-linearity.html#nonlinear-terms-2",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "nonlinear "
},
{
  "id": "chkpt-nonlinear-terms-1",
  "level": "2",
  "url": "order-linearity.html#chkpt-nonlinear-terms-1",
  "type": "Checkpoint",
  "number": "18",
  "title": "📖❓ Match Each Terms with its Linearity.",
  "body": " 📖❓ Match Each Terms with its Linearity      Directions:    🔹  Match (by dragging) each term (on the left) to either Linear or Nonlinear.    🔹  Assume the dependent variable is and the independent variable is .           Linear      Non-Linear Term     "
},
{
  "id": "nonlinear-terms-8",
  "level": "2",
  "url": "order-linearity.html#nonlinear-terms-8",
  "type": "🌌 Example",
  "number": "19",
  "title": "Identify the Linearity of the Terms.",
  "body": " Identify the Linearity of the Terms   Determine whether each term in the equation is linear or nonlinear:      Focus on the dependent variable, , and its derivatives.        Focus on the dependent variable, , and its derivatives.       "
},
{
  "id": "chkpts-linear-terms",
  "level": "2",
  "url": "order-linearity.html#chkpts-linear-terms",
  "type": "Checkpoint",
  "number": "20",
  "title": "📖❓ Identify the Nonlinear Terms.",
  "body": " 📖❓ Identify the Nonlinear Terms    For each differential equation, click on all of the nonlinear terms .                                        "
},
{
  "id": "linearity-3",
  "level": "2",
  "url": "order-linearity.html#linearity-3",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "linear nonlinear "
},
{
  "id": "chkpt-linearity-1",
  "level": "2",
  "url": "order-linearity.html#chkpt-linearity-1",
  "type": "Checkpoint",
  "number": "21",
  "title": "📖❓ What Makes an Equation Linear of Nonlinear.",
  "body": " 📖❓ What Makes an Equation Linear of Nonlinear   Select the true statement.     An equation is nonlinear if at least one of its terms are nonlinear.  Correct! A differential equation is nonlinear if any of its terms are nonlinear.    An equation is linear if at least one of its terms are linear.  Incorrect. A differential equation needs all of its terms to be linear.    As long as there are more linear terms than nonlinear terms, the equation is linear.  Incorrect.    "
},
{
  "id": "def-linear",
  "level": "2",
  "url": "order-linearity.html#def-linear",
  "type": "📙 Definition",
  "number": "22",
  "title": "Linear Differential Equations.",
  "body": " Linear Differential Equations   A differential equation is linear if it can be written as a sum of linear terms involving the dependent variable and its derivatives:  This structure is known as a linear combination of the dependent variable and its derivatives.   where each is a function of the independent variable only, and is the input or forcing term.   "
},
{
  "id": "linearity-13",
  "level": "2",
  "url": "order-linearity.html#linearity-13",
  "type": "🌌 Example",
  "number": "23",
  "title": "Identify the Linearity of the Equation.",
  "body": " Identify the Linearity of the Equation   Determine whether each of the following differential equations is linear:     In the first equation, all terms involving or its derivatives appear linearly: So the equation is linear.  In the second equation, the term is nonlinear, since appears in both the numerator and denominator: This makes the entire equation nonlinear.   "
},
{
  "id": "order-linearity-wrap-up-2",
  "level": "2",
  "url": "order-linearity.html#order-linearity-wrap-up-2",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "order linear term nonlinear term linear nonlinear linear nonlinear "
},
{
  "id": "de-basics-6",
  "level": "1",
  "url": "de-basics-6.html",
  "type": "Section",
  "number": "",
  "title": "Chapter 1 Exercises",
  "body": " Chapter 1 Exercises   ᯓ★❓Quick-Answer Questions    True or False  True-or-False  An equation that contains an \"=\" sign and at least one derivative is called a derivative equation.    True  Incorrect, derivative equation is not a standard term in mathematics.    False  Correct!       True-or-False  The expression is the same as to the power of 18.    True  Incorrect. Please read the note on derivative notation.    False  Correct!       True-or-False  The order of a differential equation is determined by the number of terms it contains    True  Incorrect. The order is based on the highest derivative, regardless of the number of terms.    False  Correct! The order is determined by the highest derivative, not the number of terms.     True-or-False  In a differential equation, the dependent variable always has at least one derivative applied to it.    True  Correct! The dependent variable in a differential equation always has a derivative applied to it.    False  Incorrect. By definition, a differential equation involves derivatives of the dependent variable.     True-or-False  A linear term can contain the dependent variable multiplied by the independent variable.    True  Correct! For example, is a linear term.    False  Incorrect. Carefully review the examples above.     Select All the TRUE statements  Select All the TRUE statements    For an equation to be a differential equation, it must contain a first-order derivative.  A differential equation must contain a derivative of any order.    The dependent variable is a function of the independent varaible.  Incorrect. Please review the definition of ODEs and PDEs.    The independent variable is a function of the dependent varaible.  The dependent variable is the function, which depends on the independent variable.    An ordinary differential equation (ODE) contains exactly one independent variable.  An ordinary differential equation (ODE) contains exactly one independent variable. If it contained more than one, it would be a partial differential equation (PDE).       Differential Equations  Click-Answer  Click on all the expressions that are Differential Equations.                                             There are only 5 Differential Equations in this set.    Fill-in-the-Blank  Differential equations differ from algebraic equations in that they contain .    solutions  Incorrect. While this statement is generally true, it is not what makes it different from any other equation.     variables  Incorrect. Any equation could contain a variable.    unknowns  Incorrect. Most equations contain an unknown.    derivatives  Correct! If an equation contains a derivative, it is a differential equation.     Select-the-Best-Answer  Identify the differential equation.       Correct! This equation involves a derivative, making it a differential equation.       Incorrect. This equation does not contain any derivatives, so it is not a differential equation.       Incorrect. This equation does not contain any derivatives, so it is not a differential equation.       Incorrect. This equation does not contain any derivatives, so it is not a differential equation.     Select-the-best-Answer  What distinguishes an ordinary differential equation (ODE) from a partial differential equation (PDE)?    The number of variables the unknown function depends on.  Correct! An ODE has derivatives with respect to a single variable, while a PDE involves multiple variables.    The number of derivatives in the equation.  Incorrect. Please review the definition of ODEs and PDEs.    The number of solutions the equation has.  Incorrect. Please review the definition of ODEs and PDEs.    The number of hours it takes to solve the equation.  Incorrect. Please review the definition of ODEs and PDEs.     What makes Differential Equations Unique?  What makes differential equations different from other equations?    They involve derivatives of an unknown function.  Correct! Differential equations are defined by their inclusion of derivatives.    They have many solutions.  Incorrect. While many differential equations can have multiple solutions, this is not what makes them unique.    They involve variables.  Incorrect. Any equation could contain as a variable.    There solutions are always functions.  Incorrect. While the solutions to differential equations are often functions, this is not what makes them unique.     Select-the-Best-Answer  Which of the following is NOT required for an equation to be classified as a differential equation?    An unknown function.  Incorrect. A differential equation does include an unknown function, which we are solving for.    An -variable.  Correct! An -variable is not a requirement for a differential equation.    A derivative.  Incorrect. The presence of at least one derivative is essential to define a differential equation.    An \"=\" sign.  Incorrect. An equality sign is required for an equation to be classified as a differential equation.     Select-the-Best-Answer  Which of the following equations is a third-order differential equation?     Correct! The highest derivative here is the third derivative, making it a third-order differential equation.     Incorrect. This is a second-order differential equation.     Incorrect. This is a second-order differential equation.     Incorrect. This is a first-order differential equation.     Select-the-Best-Answer   Identify the independent variable of the differential equation         Yes! is the independent variable.       Incorrect. Review the examples.       Incorrect. Review the examples.     Select-the-Best-Answer   Identify the dependent variable of the differential equation         Incorrect. represents the derivative of the dependent variable with respect to the independent variable.       Incorrect. The dependent variable is the one being differentiated.       Correct! is the dependent variable in this equation.     Select-the-Best-Answer   Which variable in the differential equation, , represents the unknown function we would like to find?     dependent variable,   Incorrect. is neither the dependent variable, nor what we are solving for.    independent variable,   Incorrect! is the independent variable, but it is not what we are solving for.    dependent variable,   Yes! We are solving for the unknown, which is the dependent variable in this equation.    independent variable,   Incorrect. We are solving for , but it is not the independent variable.     Select-the-Best-Answer   Which variable, in the differential equation below, does the solution of this equation depend on?      The solution, , depends on the dependent variable,  Incorrect. The solution depends on , but is not a dependent variable.    The solution, , depends on the independent variable,  Yes! the solution, , depends on the independent variable .    The solution, , depends on the dependent variable,  Incorrect. is the solution, so it does not depend on .    The solution, , depends on the independent variable,  Incorrect. The variable is not the independent variable.     Fill-in-the-Blank   Identify the coefficient of in the differential equation         Incorrect, is only part of the coefficient of .       Correct! is the coefficient of the term involving .       Incorrect, is only part of the coefficient of .       Incorrect. is the constant on the right-hand side of the equation.     Click-on-the-Answer  Click on each of the coefficients in the differential equation below.                               Look for the dependent variable in each term. The coefficient is the constant or function that multiplies the dependent variable.    Select-the-Best-Answer   Identify the constant term in the differential equation         Incorrect. This term contains a derivative of the dependent variable , so it is not a constant term.       Incorrect. This term involves the dependent variable , so it is not a constant term.       Correct! is the constant term because it does not contain the dependent variable .     Select-the-Best-Answer   Identify the constant term of the differential equation         Incorrect. This term involves the dependent variable , so it is not a constant term.       Incorrect. This term involves the dependent variable , so it is not a constant term.       Correct! The constant term is because we can rewrite the equation as .    This equation does not have a constant term.  Incorrect. Every DE has a least one constant term.       Linear Terms & Linearity  Select-the-Best-Answer   Identify the nonlinear terms in the differential equation:       Selected     Selected     Selected     Selected     Select-all-that-Apply   Select the linear terms in the differential equation:       Selected     Selected     Selected     Selected     Select-the-Best-Answer  Which of the following terms is linear?     Correct! is linear because it is a function of the independent variable multiplied by the second derivative of the dependent variable.     Incorrect. is nonlinear because the dependent variable is raised to a power other than one.     Incorrect. is nonlinear because the dependent variable is squared.     Incorrect. is nonlinear because it involves the product of the dependent variable and a function of the dependent variable.     Select-the-Best-Answer  Which term is an example of a nonlinear term?     Incorrect. is linear because it is a constant.     Incorrect. is linear because it is a function of the independent variable only.     Correct! is nonlinear because the dependent variable is squared.     Incorrect. is linear because it is a function of the independent variable multiplied by the dependent variable.     Select-the-Best-Answer  Which term makes the equation nonlinear?     Correct! The term is nonlinear because the dependent variable is raised to the second power.     Incorrect. While this term includes a function of , it is still linear because appears to the first power.     Incorrect. The term is linear because and its derivatives are to the first power.     Select-the-Best-Answer  Which of the following describes an example of a nonlinear term?    A dependent variable inside another function.  Correct! This is would be an example of a nonlinear term.    A dependent variable raised to the first power.  Incorrect. This is a characteristic of a linear term.    A dependent variable multiplied by a constant.  Incorrect. This is a characteristic of a linear term.    An independent variable squared.  Incorrect. The linearity of a term only depends on the dependent variable.     Click-on-the-Answer  Click on all of the linear terms in the differential equation.                           Click-on-the-Answer  Click on all of the nonlinear terms in the differential equation.                              Review    In this equation, and are nonlinear terms.   Select-the-Best-Answer   Identify the linearity of the differential equation .     Linear   No, this is nonlinear. Looking carefully at each term, we see:   Since one term is not linear, the entire differential equation is nonlinear.     Nonlinear  Correct! This DE is nonlinear since is a nonlinear term.     Select-the-Best-Answer   Identify the linearity of the differential equation .     Linear  Correct! This equation is linear because each term is linear.    Nonlinear   No, this is linear. Looking carefully at each term, we see:   Since every term is linear, this differential equation is linear.      Select-the-Best-Answer   Identify the linearity of the differential equation      Linear  Correct! Since each term is linear, the differential equation is linear.    Nonlinear  Incorrect. Each term is linear since a single dependent variable or its derivative appears to the first power and is not inside a function.     Select-the-Best-Answer   Identify the linearity of the differential equation .     Linear  Incorrect. The term makes this equation nonlinear, as it involves the exponential function of the dependent variable.    Nonlinear  Correct! The term introduces nonlinearity into the equation, as it involves the dependent variable inside an exponential function.     Select-the-Best-Answer  Select the linear differential equation.     Incorrect. The term is nonlinear, making the equation nonlinear.     Incorrect. The term is nonlinear, making the equation nonlinear.     Correct! All terms are linear in this equation, making it a linear differential equation.     Incorrect. The term is nonlinear, making the equation nonlinear.     Click-on-the-Answer  Click-on all the linear differential equations.                  Remember that a linear differential equation contains only linear terms. Four of these equations are linear.   Linear equations only involve the dependent variable and its derivatives to the first power, and they won't be inside nonlinear functions like sine or multiplied by each other.   Click-on-the-Answer  Click-on all the nonlinear differential equations                                 First identify the dependent variable, then carefully look at each term to determine if it is nonlinear.   Nonlinear equations often have terms where the dependent variable or its derivatives are raised to powers other than one, or are inside functions like sine, logarithms, or are multiplied by each other.   Click-On Answer  For each differential equation, identify the dependent variable and determine if it is linear.               Differenential Equation  Dependent Variable?  Linear?    (a)             yes  no    (b)             yes  no    (c)             yes  no    (d)             yes  no    (e)             yes  no    (f)             yes  no          Fill-In & Drag-N-Drop    If a differential equation has the general solution , then the dependent variable of this equation is and the independent variable is .       Dependent variable: Correct!    .*  Dependent variable: Incorrect.       Independent variable: Correct!    .*  Independent variable: Incorrect.      Determine the Dependent Variable & Order     Give the variable as a single-letter (case-sensitive), and  Give the order as a single-digit number.                  (a)         (b)         (c)         (f)              Dependent Variable: Correct!    .*  Dependent Variable: Incorrect.       Order: Correct!    .*  Order: Incorrect.       Dependent Variable: Correct!    .*  Dependent Variable: Incorrect.       Order: Correct!    .*  Order: Incorrect.       Dependent Variable: Correct!    .*  Dependent Variable: Incorrect.       Order: Correct!    .*  Order: Incorrect.       Dependent Variable: Correct!    .*  Dependent Variable: Incorrect.       Order: Correct!    .*  Order: Incorrect.      Fill-in-the-Blank   For the differential equation , complete the statement below with the correct variable.   The unknown function is given by the variable , which is a function of the variable         Correct! The unknown function is .    .*  Incorrect. Review the examples of this section.       Correct! The unknown function is a function of .    .*  Incorrect. Review the examples of this section.      Fill-in-the-Blank   Identify the variable that represents the solution to the equation Answer:       \\s*u\\s*  Yes, the solution to the differential equation is the dependent variable .    \\s*t\\s*  No, is what the solution depends on, but it is not the solution itself.    .*  Incorrect. Carefully review the section and try again.      Fill-in-the-Blank   Give the order of each differential equation as a single-digit number.    order:     order:      order:          Correct! The most derivatives applied are two in .    5  Incorrect. Carefully review the definition of order and do not confuse the power of a variable with the order.    .*  Carefully review the definition of order.       Correct! The highest derivative is the third derivative .    2  Incorrect. The highest derivative is the third derivative, not the second.    .*  Carefully review the definition of order.       Correct! The highest derivative is the fifth derivative .    2  Incorrect. There is a higher derivative in this equation.    3  Incorrect. The third derivative does not appear in this equation.    .*  Carefully review the definition of order.      Drag-and-Drop   Consider the differential equation Drag each expression (left), to the appropriate label (right).      Dependent Variable     Independent Variable     Linear Term     Non-Linear Term     Order of the DE     Coefficient of     Coefficient of         ✍🏻 Basic Classification   Classification Drills   For differential equation, select  the variable that you are solving for,  the order of the differential equation,  the linear terms, and  the linearity of the equation.             Select the Correct Answer    (a) Solves for:         (b) Order:   1st   2nd   3rd   4th   5th      (c) Linear terms:                      (d) Linearity:   Linear   Nonlinear                Select the Correct Answer    (a) Solves for:              (b) Order:   1st   2nd   3rd   4th   5th      (c) Linear terms:                      (d) Linearity:   Linear   Nonlinear                Select the Correct Answer    (a) Solves for:              (b) Order:   1st   2nd   3rd   4th   5th      (c) Linear terms:                      (d) Linearity:   Linear   Nonlinear                Select the Correct Answer    (a) Solves for:              (b) Order:   1st   2nd   3rd   4th   5th      (c) Linear terms:                   (d) Linearity:   Linear   Nonlinear                Select the Correct Answer    (a) Solves for:              (b) Order:   1st   2nd   3rd   4th   5th      (c) Linear terms:              (d) Linearity:   Linear   Nonlinear                Select the Correct Answer    (a) Solves for:              (b) Order:   1st   2nd   3rd   4th   5th      (c) Linear terms:              (d) Linearity:   Linear   Nonlinear                Select the Correct Answer    (a) Solves for:              (b) Order:   1st   2nd   3rd   4th   5th      (c) Linear terms:                  (d) Linearity:   Linear   Nonlinear                Select the Correct Answer    (a) Solves for:              (b) Order:   1st   2nd   3rd   4th   5th      (c) Linear terms:                  (d) Linearity:   Linear   Nonlinear                Select the Correct Answer    (a) Solves for:              (b) Order:   1st   2nd   3rd   4th   5th      (c) Linear terms:                  (d) Linearity:   Linear   Nonlinear                Select the Correct Answer    (a) Solves for:              (b) Order:   1st   2nd   3rd   4th   5th      (c) Linear terms:                      (d) Linearity:   Linear   Nonlinear                Select the Correct Answer    (a) Solves for:              (b) Order:   1st   2nd   3rd   4th   5th      (c) Linear terms:                  (d) Linearity:   Linear   Nonlinear                Select the Correct Answer    (a) Solves for:              (b) Order:   1st   2nd   3rd   4th   5th      (c) Linear terms:                  (d) Linearity:   Linear   Nonlinear          Determine the Linearity of Each Term   Determine the linearity of each term in the differential equation: .    To classify terms, focus on the dependent variable and its derivatives. The table below summarizes the linearity of each term:        Term  Coefficient  Dependent Variable  Linearity       Linear       Nonlinear       Nonlinear       Linear       Nonlinear       Nonlinear       Linear    Note the last term, , is a constant term since it does not involve the dependent variable or its derivatives. These terms are always linear in the context of differential equations.     "
},
{
  "id": "c1-quick-answer-2",
  "level": "2",
  "url": "de-basics-6.html#c1-quick-answer-2",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "nonlinear "
},
{
  "id": "c1-exgrp-classification-practice-1",
  "level": "2",
  "url": "de-basics-6.html#c1-exgrp-classification-practice-1",
  "type": "Reading Question",
  "number": "1",
  "title": "<span class=\"process-math\">\\(\\dfrac{d^2u}{dr^2} + \\dfrac{du}{dr} + u = \\cos(r)\\)<\/span>.",
  "body": "        Select the Correct Answer    (a) Solves for:         (b) Order:   1st   2nd   3rd   4th   5th      (c) Linear terms:                      (d) Linearity:   Linear   Nonlinear       "
},
{
  "id": "c1-exgrp-classification-practice-2",
  "level": "2",
  "url": "de-basics-6.html#c1-exgrp-classification-practice-2",
  "type": "Reading Question",
  "number": "2",
  "title": "<span class=\"process-math\">\\(\\ds (1 - x)y'' - 4xy' + 5y = \\cos x\\)<\/span>.",
  "body": "        Select the Correct Answer    (a) Solves for:              (b) Order:   1st   2nd   3rd   4th   5th      (c) Linear terms:                      (d) Linearity:   Linear   Nonlinear       "
},
{
  "id": "c1-exgrp-classification-practice-3",
  "level": "2",
  "url": "de-basics-6.html#c1-exgrp-classification-practice-3",
  "type": "Reading Question",
  "number": "3",
  "title": "<span class=\"process-math\">\\(\\ds x \\frac{d^3y}{dx^3} - \\left( \\frac{dy}{dx} \\right)^4 + y = 0\\)<\/span>.",
  "body": "        Select the Correct Answer    (a) Solves for:              (b) Order:   1st   2nd   3rd   4th   5th      (c) Linear terms:                      (d) Linearity:   Linear   Nonlinear       "
},
{
  "id": "c1-exgrp-classification-practice-4",
  "level": "2",
  "url": "de-basics-6.html#c1-exgrp-classification-practice-4",
  "type": "Reading Question",
  "number": "4",
  "title": "<span class=\"process-math\">\\(\\ds t^5 y^{(4)} - t^3 y'' = 6y\\)<\/span>.",
  "body": "        Select the Correct Answer    (a) Solves for:              (b) Order:   1st   2nd   3rd   4th   5th      (c) Linear terms:                   (d) Linearity:   Linear   Nonlinear       "
},
{
  "id": "c1-exgrp-classification-practice-5",
  "level": "2",
  "url": "de-basics-6.html#c1-exgrp-classification-practice-5",
  "type": "Reading Question",
  "number": "5",
  "title": "<span class=\"process-math\">\\(\\ds \\frac{d^2x}{dr^2} = \\sqrt{1 + \\left(\\ds \\frac{dx}{dr} \\right)^2}\\)<\/span>.",
  "body": "        Select the Correct Answer    (a) Solves for:              (b) Order:   1st   2nd   3rd   4th   5th      (c) Linear terms:              (d) Linearity:   Linear   Nonlinear       "
},
{
  "id": "c1-exgrp-classification-practice-6",
  "level": "2",
  "url": "de-basics-6.html#c1-exgrp-classification-practice-6",
  "type": "Reading Question",
  "number": "6",
  "title": "<span class=\"process-math\">\\(\\ds \\frac{d^2R}{dt^2} = -\\frac{k}{R}\\)<\/span>.",
  "body": "        Select the Correct Answer    (a) Solves for:              (b) Order:   1st   2nd   3rd   4th   5th      (c) Linear terms:              (d) Linearity:   Linear   Nonlinear       "
},
{
  "id": "c1-exgrp-classification-practice-7",
  "level": "2",
  "url": "de-basics-6.html#c1-exgrp-classification-practice-7",
  "type": "Reading Question",
  "number": "7",
  "title": "<span class=\"process-math\">\\(\\ds (\\sin \\theta)y''' - (\\cos \\theta)y' = 2\\)<\/span>.",
  "body": "        Select the Correct Answer    (a) Solves for:              (b) Order:   1st   2nd   3rd   4th   5th      (c) Linear terms:                  (d) Linearity:   Linear   Nonlinear       "
},
{
  "id": "c1-exgrp-classification-practice-8",
  "level": "2",
  "url": "de-basics-6.html#c1-exgrp-classification-practice-8",
  "type": "Reading Question",
  "number": "8",
  "title": "<span class=\"process-math\">\\(\\ds y\\frac{dy}{dx} + 4y = x^6e^x\\)<\/span>.",
  "body": "        Select the Correct Answer    (a) Solves for:              (b) Order:   1st   2nd   3rd   4th   5th      (c) Linear terms:                  (d) Linearity:   Linear   Nonlinear       "
},
{
  "id": "c1-exgrp-classification-practice-9",
  "level": "2",
  "url": "de-basics-6.html#c1-exgrp-classification-practice-9",
  "type": "Reading Question",
  "number": "9",
  "title": "<span class=\"process-math\">\\(\\ds \\sin(x)\\frac{dy}{dx} + 3y = 0\\)<\/span>.",
  "body": "        Select the Correct Answer    (a) Solves for:              (b) Order:   1st   2nd   3rd   4th   5th      (c) Linear terms:                  (d) Linearity:   Linear   Nonlinear       "
},
{
  "id": "c1-exgrp-classification-practice-10",
  "level": "2",
  "url": "de-basics-6.html#c1-exgrp-classification-practice-10",
  "type": "Reading Question",
  "number": "10",
  "title": "<span class=\"process-math\">\\(\\ds \\frac{dP}{dt}+2tP = P + 4t -2\\)<\/span>.",
  "body": "        Select the Correct Answer    (a) Solves for:              (b) Order:   1st   2nd   3rd   4th   5th      (c) Linear terms:                      (d) Linearity:   Linear   Nonlinear       "
},
{
  "id": "c1-exgrp-classification-practice-11",
  "level": "2",
  "url": "de-basics-6.html#c1-exgrp-classification-practice-11",
  "type": "Reading Question",
  "number": "11",
  "title": "<span class=\"process-math\">\\(\\ds x''' = x^2 - 3x'\\)<\/span>.",
  "body": "        Select the Correct Answer    (a) Solves for:              (b) Order:   1st   2nd   3rd   4th   5th      (c) Linear terms:                  (d) Linearity:   Linear   Nonlinear       "
},
{
  "id": "c1-exgrp-classification-practice-12",
  "level": "2",
  "url": "de-basics-6.html#c1-exgrp-classification-practice-12",
  "type": "Reading Question",
  "number": "12",
  "title": "<span class=\"process-math\">\\(\\ds r''' + p^2 r^{(5)} = r\\ln(p)\\)<\/span>.",
  "body": "        Select the Correct Answer    (a) Solves for:              (b) Order:   1st   2nd   3rd   4th   5th      (c) Linear terms:                  (d) Linearity:   Linear   Nonlinear       "
},
{
  "id": "c1-exercises-3",
  "level": "2",
  "url": "de-basics-6.html#c1-exercises-3",
  "type": "Reading Question",
  "number": "13",
  "title": "Determine the Linearity of Each Term.",
  "body": " Determine the Linearity of Each Term   Determine the linearity of each term in the differential equation: .    To classify terms, focus on the dependent variable and its derivatives. The table below summarizes the linearity of each term:        Term  Coefficient  Dependent Variable  Linearity       Linear       Nonlinear       Nonlinear       Linear       Nonlinear       Nonlinear       Linear    Note the last term, , is a constant term since it does not involve the dependent variable or its derivatives. These terms are always linear in the context of differential equations.   "
},
{
  "id": "whats-a-soln",
  "level": "1",
  "url": "whats-a-soln.html",
  "type": "Section",
  "number": "",
  "title": "What is a Solution?",
  "body": " What is a Solution?     🎧 Listen A central goal in differential equations is learning how to find their solutions. In fact, most problems you'll encounter begin with a familiar prompt:     Find the solution to the following differential equation.  This \"solve and move on\" mindset can sometimes obscure a deeper, more important question:  What does it actually mean to be a solution to a differential equation?    A solution to a differential equation is not just the outcome of a sequence of mathematical steps; it is a function that fulfills all the criteria of the equation. This section aims to provide a clearer understanding of what it means to be a solution to a differential equation, as well as methods for verifying and visualizing them.    🎧 Listen In algebra, a solution is any value that satisfies the algebraic equation. In contrast, a solution to a differential equation is any function that satisfies the differential equation. So, understanding what it means to satisfy a differential equation is the first step toward understanding its solutions.     📖❓ What Kind of Mathematical Object is a Solution?   In general, a solution to a differential equation is any that satisfies it.     function   Yes, when you solve a differential equation, you are finding a function.     derivative   While derivatives are involved in differential equations, they do not describe solutions in general.     number   It is possible for a solution to be a number, but not in general.     exponential   Exponential functions are common solutions, but they do not represent all solutions in general.       Satisfying an Algebraic Equation    🎧 Listen In algebra, we say that a value satisfies an equation if, when we substitute that value in place of the variable, it makes both sides of the equation equal. This gives a true statement, like or .   For example, consider the equation:   Let's check whether and are solutions by substituting them into the equation.  First, try . That's a true statement, so satisfies the equation.  Now check . This is false, so does not satisfy the equation.  To summarize: is a solution to the equation, while is not.    Satisfying a Differential Equation    🎧 Listen In differential equations, solutions are functions rather than single values. To verify a solution, we substitute the function into the dependent variable in the equation. If both sides simplify to the same expression, then the function is a solution.   For instance, consider the differential equation:   To check whether or is a solution, we substitute each into the equation and compare both sides.  First, try .   Since these are not the same, does not satisfy the equation.  Now try .   Since both sides match, this is a true statement and is a solution.  Here, a true statement means both sides simplify to the same function. When we substitute , we get different expressions. But when we substitute , both sides match. Technically, we could rewrite as by subtracting one side from the other, but it's enough to see that the functions match directly.   📖❓ Quick Verification    is a solution to the differential equation .      True    Incorrect. is not a solution since       False    Correct! is not a solution since         Verifying Solutions  A Warm-Up   Verify if is a solution to .    We'll move all terms to the left side to simplify the process: .  Now substitute in to the left and show that it simplies to : So is a solution to .    A Second Order Equation   Verify if is a solution to .    Since appears, compute the derivatives first:   Now rewrite the equation with all terms on one side and substitute: So is not a solution to .    You can also verify solutions that include constants, as the next examples show.  Verifying Solutions with a Common Form     Show that the functions are all solutions to the differential equation .      Rather than verify each function separately, notice that they all are of the form , where is a constant. Let's verify the general case.  Substitute into the equation: So is a solution for any constant . In particular, this includes the functions for the constants respectively.    Verifying a Solution with Two Constants    Verify that is a solution to .      Move all terms to one side:   Now substitute : Thus, is a solution to .          📤 Wrap-Up   🎧 Listen   🗝️ Key Takeaways..   In differential equations, a solution is a function that satisfies the equation. This means that when you plug it into the dependent variable, both sides simplify to the same expression.  To verify a solution, take any necessary derivatives, substitute into the equation, and simplify. If both sides match, or reduce to something like , then the function is a solution.      "
},
{
  "id": "chkpt-whats-a-soln-1",
  "level": "2",
  "url": "whats-a-soln.html#chkpt-whats-a-soln-1",
  "type": "Checkpoint",
  "number": "25",
  "title": "📖❓ What Kind of Mathematical Object is a Solution?",
  "body": " 📖❓ What Kind of Mathematical Object is a Solution?   In general, a solution to a differential equation is any that satisfies it.     function   Yes, when you solve a differential equation, you are finding a function.     derivative   While derivatives are involved in differential equations, they do not describe solutions in general.     number   It is possible for a solution to be a number, but not in general.     exponential   Exponential functions are common solutions, but they do not represent all solutions in general.     "
},
{
  "id": "chkpt-whats-a-soln-2",
  "level": "2",
  "url": "whats-a-soln.html#chkpt-whats-a-soln-2",
  "type": "Checkpoint",
  "number": "26",
  "title": "📖❓ Quick Verification.",
  "body": " 📖❓ Quick Verification    is a solution to the differential equation .      True    Incorrect. is not a solution since       False    Correct! is not a solution since      "
},
{
  "id": "Verifying-Solutions-2",
  "level": "2",
  "url": "whats-a-soln.html#Verifying-Solutions-2",
  "type": "🌌 Example",
  "number": "27",
  "title": "A Warm-Up.",
  "body": "A Warm-Up   Verify if is a solution to .    We'll move all terms to the left side to simplify the process: .  Now substitute in to the left and show that it simplies to : So is a solution to .   "
},
{
  "id": "Verifying-Solutions-3",
  "level": "2",
  "url": "whats-a-soln.html#Verifying-Solutions-3",
  "type": "🌌 Example",
  "number": "28",
  "title": "A Second Order Equation.",
  "body": "A Second Order Equation   Verify if is a solution to .    Since appears, compute the derivatives first:   Now rewrite the equation with all terms on one side and substitute: So is not a solution to .   "
},
{
  "id": "example-whats-a-soln-1",
  "level": "2",
  "url": "whats-a-soln.html#example-whats-a-soln-1",
  "type": "🌌 Example",
  "number": "29",
  "title": "Verifying Solutions with a Common Form.",
  "body": "Verifying Solutions with a Common Form     Show that the functions are all solutions to the differential equation .      Rather than verify each function separately, notice that they all are of the form , where is a constant. Let's verify the general case.  Substitute into the equation: So is a solution for any constant . In particular, this includes the functions for the constants respectively.   "
},
{
  "id": "example-whats-a-soln-2",
  "level": "2",
  "url": "whats-a-soln.html#example-whats-a-soln-2",
  "type": "🌌 Example",
  "number": "30",
  "title": "Verifying a Solution with Two Constants.",
  "body": "Verifying a Solution with Two Constants    Verify that is a solution to .      Move all terms to one side:   Now substitute : Thus, is a solution to .    "
},
{
  "id": "solution-types-initial-conditions",
  "level": "1",
  "url": "solution-types-initial-conditions.html",
  "type": "Section",
  "number": "",
  "title": "Solution Types &amp; Initial Conditions",
  "body": " Solution Types & Initial Conditions     🎧 Listen You now know that a solution to a differential equation is a function that satisfies the equation. But shows that a single differential equation can actually have many solutions. That example shows there can be infinitely many solutions, one for each value of the constant in .   To make sense of all these solutions, we classify solutions into three key categories: general solution , particular solution , and family of solutions . Understanding the distinctions between these types is an important part of solving differential equations.    An Analogy  To help clarify the differences between these types of solutions, let's use an analogy.  Imagine a family of solutions as a collection of all possible dates in a year. The general solution is like the format for writing dates, such as mm\/dd\/yyyy . Each particular solution is like a specific date, such as 10\/04\/2039 . The family of solutions would be the entire list of all dates in this format.  Of course, solutions to differential equations aren't dates, but the analogy highlights the idea: the general solution gives the structure, particular solutions are specific instances, and the family includes them all.   📖❓ Describe the Different Solution Types   Match the word that best describes each type of solution.     Template  General Solution    Specific  Particular Solution    Collection  Family of Solutions       Solution Types  To make sense of all the possible solutions, we classify solutions into three key categories:   General solution:  This includes one or more arbitrary constants, like in . You can think of it as a template from which specific solutions can be generated.   Particular solution:  A particular solution results from assigning a specific value to each arbitrary constant in the general solution. For example, if , then .   Family of solutions:  A family of solutions is the complete collection of particular solutions generated by varying the constants in the general solution.     📖❓ Describe a Family of Solutions   What is a family of solutions?      A collection of all possible solutions to a differential equation.    Correct! The family of solutions includes every possible particular solution.      The general solution to a differential equation.    Incorrect. The general solution represents a form of the family of solutions, not the entire set.      A single specific solution to a differential equation.    Incorrect. This describes a particular solution, not the family of solutions.      A solution without any constants.    Incorrect. A solution without constants is typically a particular solution, not the entire family.      Consider the equation . The general solution is , and some particular solutions are corresponding to , , and . If we could list every possible value of , we'd have the full family of solutions.   📖❓ General or Particular   Fill in the following blanks, below, with one of the following terms:  general  particular     Tip: Double-click a term above to quickly highlight it for copying.      A family of solutions is the collection of all solutions.    A solution is a template for each solution.    A solution can generate a family of solutions.    A solution contains one or more arbitrary constants.    A solution is a function that results from assigning specific values to the constants in the solution.         general  .* There are only two possible answers, did you spell it incorrectly?     particular  .* There are only two possible answers, did you spell it incorrectly?     general  .* There are only two possible answers, did you spell it incorrectly?     particular  .* There are only two possible answers, did you spell it incorrectly?     particular  .* There are only two possible answers, did you spell it incorrectly?     general  .* There are only two possible answers, did you spell it incorrectly?     particular  .* There are only two possible answers, did you spell it incorrectly?     Solving a differential equation usually starts with the general solution , which includes one or more arbitrary constants. Remember, each constant can take on any value, which leads to infinitely many possible particular solutions .   Not All Solutions with Constants Are General Solutions ⚠️  Keep in mind, solutions with arbitrary constants are not general solutions by default. For example, both of the functions are solutions to the equation , but only the second is general solution. The first is a special case of the second, obtained when , so it can be the general solution.     Initial Conditions & Initial-Value Problems (IVPs)  In real-world problems, we often narrow down the set of possible solutions by specifying initial conditions , known values of the solution or its derivatives at a specific point. A differential equation paired with initial conditions is called an initial-value problem (IVP). If enough information is provided, the IVP gives a unique particular solution that satisfies both the equation and the conditions.    📖❓ Initial Condition Meaning   Assume we have a differential equation with dependent variable and independent variable .  What is an initial condition?      A known value of or a known value of 's derivatives.    Correct! An initial condition specifies the value of the solution or its derivative at a particular point.      The starting value of .    Incorrect. The initial condition is related to the solution or its derivatives at a specific point.      Any point in the -plane.    Incorrect. An initial condition is not just any point; it's a specific point referring to a known value of or one of it's derivatives      The first step in solving a differential equation.    Incorrect. The initial condition is not the initial step for solving a differential equation.       📖❓ Is it an IVP   The differential equation is an example of an initial-value problem.     True   Incorrect. An initial-value problem must include initial conditions, which are missing here.     False   Correct! This is just a differential equation, without initial conditions, it is not an initial-value problem.       For example, suppose an object is in free fall under constant acceleration . If is its height above the ground, then: The general solution is:   This solution models any object falling under gravity. To describe a specific situation, we apply two initial conditions:   The object is dropped from .  It is dropped from rest with an initial velocity of zero.   In terms of , these conditions become:   Now we substitute the first condition into and the second into :            The resulting particular solution is: which models an object dropped specifically from with no initial velocity.    From General Solutions to Particular Solutions  To find a particular solution, we start with a general solution and apply given initial conditions to determine the values of any constants. The following examples illustrate this process.   Solving for a Constant   Find the particular solution to the initial value problem: given that the general solution is:     The initial condition tells us that must equal 2 when . Substituting into the general solution:   Thus, the particular solution is:      📖❓ When is your Answer a Particular Solution   In which case would you need to find a particular solution rather than just a general solution?      When the differential equation is linear.    Incorrect. Linearity doesn't determine whether you need a particular solution.      When initial conditions are provided.    Correct! A particular solution is found when you need to satisfy initial conditions.      When the differential equation is has a general solution.    Incorrect. The existence of a general solution doesn't determine whether you need a particular solution.      When the function depends on more than one variable.    Incorrect. Multivariable functions are not the reason for finding a particular solution.      When a general solution contains more than one constant, we need multiple initial conditions to determine them, as the next example shows.   Two Initial Conditions   Verify that the function is a solution to and then find the particular solution satisfying:    Verifying the General Solution  Compute the derivatives:   Substitute into the equation: So is indeed a solution.   Finding the Particular Solution  Apply the initial conditions:          Solve the system: Substituting and solving yields:   The particular solution is:          📤 Wrap-Up   🎧 Listen   🗝️ Key Takeaways..   A differential equation can have many solutions, often infinitely many, because the constants in the solution can take on any value.  A general solution includes one or more arbitrary constants and captures all possible solutions in a single form.  A particular solution comes from assigning specific values to those constants.  A family of solutions is the complete set of particular solutions generated by varying the constants in the general solution.   Initial conditions give known values for the solution or its derivatives.  When a differential equation is paired with initial conditions, we call it an initial value problem (IVP).  When we apply these conditions, we can determine the constants in the general solution, resulting in a unique particular solution .      "
},
{
  "id": "solution-types-initial-conditions-2-2",
  "level": "2",
  "url": "solution-types-initial-conditions.html#solution-types-initial-conditions-2-2",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "general solution particular solution family of solutions "
},
{
  "id": "chkpt-solution-type-analogy-1",
  "level": "2",
  "url": "solution-types-initial-conditions.html#chkpt-solution-type-analogy-1",
  "type": "Checkpoint",
  "number": "31",
  "title": "📖❓ Describe the Different Solution Types.",
  "body": " 📖❓ Describe the Different Solution Types   Match the word that best describes each type of solution.     Template  General Solution    Specific  Particular Solution    Collection  Family of Solutions    "
},
{
  "id": "chkpt-solution-types-1",
  "level": "2",
  "url": "solution-types-initial-conditions.html#chkpt-solution-types-1",
  "type": "Checkpoint",
  "number": "32",
  "title": "📖❓ Describe a Family of Solutions.",
  "body": " 📖❓ Describe a Family of Solutions   What is a family of solutions?      A collection of all possible solutions to a differential equation.    Correct! The family of solutions includes every possible particular solution.      The general solution to a differential equation.    Incorrect. The general solution represents a form of the family of solutions, not the entire set.      A single specific solution to a differential equation.    Incorrect. This describes a particular solution, not the family of solutions.      A solution without any constants.    Incorrect. A solution without constants is typically a particular solution, not the entire family.     "
},
{
  "id": "chkpt-solution-types-2",
  "level": "2",
  "url": "solution-types-initial-conditions.html#chkpt-solution-types-2",
  "type": "Checkpoint",
  "number": "33",
  "title": "📖❓ General or Particular.",
  "body": " 📖❓ General or Particular   Fill in the following blanks, below, with one of the following terms:  general  particular     Tip: Double-click a term above to quickly highlight it for copying.      A family of solutions is the collection of all solutions.    A solution is a template for each solution.    A solution can generate a family of solutions.    A solution contains one or more arbitrary constants.    A solution is a function that results from assigning specific values to the constants in the solution.         general  .* There are only two possible answers, did you spell it incorrectly?     particular  .* There are only two possible answers, did you spell it incorrectly?     general  .* There are only two possible answers, did you spell it incorrectly?     particular  .* There are only two possible answers, did you spell it incorrectly?     particular  .* There are only two possible answers, did you spell it incorrectly?     general  .* There are only two possible answers, did you spell it incorrectly?     particular  .* There are only two possible answers, did you spell it incorrectly?    "
},
{
  "id": "not-all-solutions-with-constants-are-general-solutions",
  "level": "2",
  "url": "solution-types-initial-conditions.html#not-all-solutions-with-constants-are-general-solutions",
  "type": "⚠️",
  "number": "34",
  "title": "Not All Solutions with Constants Are General Solutions ⚠️.",
  "body": " Not All Solutions with Constants Are General Solutions ⚠️  Keep in mind, solutions with arbitrary constants are not general solutions by default. For example, both of the functions are solutions to the equation , but only the second is general solution. The first is a special case of the second, obtained when , so it can be the general solution.  "
},
{
  "id": "initial-conditions-ivps-2",
  "level": "2",
  "url": "solution-types-initial-conditions.html#initial-conditions-ivps-2",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "initial conditions initial-value problem "
},
{
  "id": "initial-conditions-ivps-chkpt-bundle",
  "level": "2",
  "url": "solution-types-initial-conditions.html#initial-conditions-ivps-chkpt-bundle",
  "type": "Checkpoint",
  "number": "35",
  "title": "",
  "body": "  📖❓ Initial Condition Meaning   Assume we have a differential equation with dependent variable and independent variable .  What is an initial condition?      A known value of or a known value of 's derivatives.    Correct! An initial condition specifies the value of the solution or its derivative at a particular point.      The starting value of .    Incorrect. The initial condition is related to the solution or its derivatives at a specific point.      Any point in the -plane.    Incorrect. An initial condition is not just any point; it's a specific point referring to a known value of or one of it's derivatives      The first step in solving a differential equation.    Incorrect. The initial condition is not the initial step for solving a differential equation.       📖❓ Is it an IVP   The differential equation is an example of an initial-value problem.     True   Incorrect. An initial-value problem must include initial conditions, which are missing here.     False   Correct! This is just a differential equation, without initial conditions, it is not an initial-value problem.      "
},
{
  "id": "solving-for-a-constant",
  "level": "2",
  "url": "solution-types-initial-conditions.html#solving-for-a-constant",
  "type": "🌌 Example",
  "number": "36",
  "title": "Solving for a Constant.",
  "body": " Solving for a Constant   Find the particular solution to the initial value problem: given that the general solution is:     The initial condition tells us that must equal 2 when . Substituting into the general solution:   Thus, the particular solution is:    "
},
{
  "id": "chkpt-from-general-to-particular-1",
  "level": "2",
  "url": "solution-types-initial-conditions.html#chkpt-from-general-to-particular-1",
  "type": "Checkpoint",
  "number": "37",
  "title": "📖❓ When is your Answer a Particular Solution.",
  "body": " 📖❓ When is your Answer a Particular Solution   In which case would you need to find a particular solution rather than just a general solution?      When the differential equation is linear.    Incorrect. Linearity doesn't determine whether you need a particular solution.      When initial conditions are provided.    Correct! A particular solution is found when you need to satisfy initial conditions.      When the differential equation is has a general solution.    Incorrect. The existence of a general solution doesn't determine whether you need a particular solution.      When the function depends on more than one variable.    Incorrect. Multivariable functions are not the reason for finding a particular solution.     "
},
{
  "id": "Two-Initial-Conditions",
  "level": "2",
  "url": "solution-types-initial-conditions.html#Two-Initial-Conditions",
  "type": "🌌 Example",
  "number": "38",
  "title": "Two Initial Conditions.",
  "body": " Two Initial Conditions   Verify that the function is a solution to and then find the particular solution satisfying:    Verifying the General Solution  Compute the derivatives:   Substitute into the equation: So is indeed a solution.   Finding the Particular Solution  Apply the initial conditions:          Solve the system: Substituting and solving yields:   The particular solution is:    "
},
{
  "id": "visualizing-solutions",
  "level": "1",
  "url": "visualizing-solutions.html",
  "type": "Section",
  "number": "",
  "title": "Visualizing Solutions",
  "body": " Visualizing Solutions    🎧 Listen An effective way to deepen your understanding of solutions is through visualization. Even though a family of solutions includes infinitely many curves, plotting just a few helps reveal how the general solution, particular solutions, and initial conditions are related.   Think of a family of solutions like a map full of side-by-side paths. The map shows all possible routes a traveler could take, each one representing a particular solution. The general solution defines the layout of all these paths, and choosing an initial condition is like dropping a pin on the map: the curve that passes through that point is the specific path (or solution) you follow.   📈 Interactive: Visualizing Solutions  Consider the differential equation: which has the general solution:   Here, the constant can be any real number. That gives us a family of solutions, one curve for each value of . To see this, check out the following interactive figure.   🎮 Particular Solutions in a Family      This figure is interactive. You can drag the initial condition up and down the -axis to change the value of .   The figure shows the family of solutions for . Each green curve is a particular solution in the family with a different value of .  The blue curve represents the particular solution that passes through the point, , for the selected initial condition .      Family of solutions for .       Follow-up Questions  Adjust the initial condition in the interactive figure to help you answer the following:    Find the particular solution that passes through  Use the figure to determine the particular solution of that passes through the point ?     Incorrect. The value of must make the solution pass through . Hover over the curve in the figure that passes through .     Incorrect. Remember that at , the exponential term equals 1, so . What value of gives ? Hover over the curve in the figure that passes through .     Correct! The value ensures that , so this solution passes through .     Incorrect. The general solution would pass through if . Hover over the curve in the figure that passes through .      Find for the particular solution that passes through  Adjust the initial condition to determine the value of that corresponds to the particular solution that passes through the point ?     Incorrect. Hover over the curve in the figure that passes through and look at the coefficient on .     Incorrect. Hover over the curve in the figure that passes through and look at the coefficient on .     Incorrect. Hover over the curve in the figure that passes through and look at the coefficient on .     Correct! Hovering over the curve passing through shows the particular solution , so .      Does the solution with pass through the origin?   Does the particular solution corresponding to pass through the origin, ?   You can answer this with or without adjusting the figure.      Yes  Incorrect. Try recalculating when . Which point does it pass through on the -axis?    No  Correct. If , then , which passes through .      A solution that satisfies also satisfies which condition?  A solution that satisfies also satisfies which condition?     Correct! The graph of the solution that satisfies is a horizontal line at so it satisfies .     Incorrect. The solution does not satisfy .     Incorrect. The solution does not satisfy .     Incorrect. The solution does not satisfy .      Role of Initial Conditions  What role do initial conditions play in solving differential equations?    They determine the general form of the solution.  Incorrect. Initial conditions are not used to find the general solution.    They used to determine the constants in the general solution.  Correct! Initial conditions are used to find specific values for constants in the general solution.    They are used to find the particular solution.  Correct! Initial conditions are used to find the specific solution that applies to a particular scenario.    They are not needed if the general solution is already known.  Incorrect. If provided, initial conditions are always needed to get the particular solution from the general solution.    C          📤 Wrap-Up   🎧 Listen   🗝️ Key Takeaways..   A family of solutions is like a map showing every possible path. Each path corresponds to a different value of in the general solution.  Choosing an initial condition is like dropping a pin on the map. The curve that passes through that point is the particular solution.  Even though we can't draw infinitely many paths, seeing a few of them helps us understand how the general and particular solutions are connected.      "
},
{
  "id": "fig-visualizing-solutions-1",
  "level": "2",
  "url": "visualizing-solutions.html#fig-visualizing-solutions-1",
  "type": "Figure",
  "number": "39",
  "title": "",
  "body": "  Family of solutions for .  "
},
{
  "id": "visualizing-solutions-interactive-5-3",
  "level": "2",
  "url": "visualizing-solutions.html#visualizing-solutions-interactive-5-3",
  "type": "Checkpoint",
  "number": "40",
  "title": "",
  "body": "  Find the particular solution that passes through  Use the figure to determine the particular solution of that passes through the point ?     Incorrect. The value of must make the solution pass through . Hover over the curve in the figure that passes through .     Incorrect. Remember that at , the exponential term equals 1, so . What value of gives ? Hover over the curve in the figure that passes through .     Correct! The value ensures that , so this solution passes through .     Incorrect. The general solution would pass through if . Hover over the curve in the figure that passes through .      Find for the particular solution that passes through  Adjust the initial condition to determine the value of that corresponds to the particular solution that passes through the point ?     Incorrect. Hover over the curve in the figure that passes through and look at the coefficient on .     Incorrect. Hover over the curve in the figure that passes through and look at the coefficient on .     Incorrect. Hover over the curve in the figure that passes through and look at the coefficient on .     Correct! Hovering over the curve passing through shows the particular solution , so .      Does the solution with pass through the origin?   Does the particular solution corresponding to pass through the origin, ?   You can answer this with or without adjusting the figure.      Yes  Incorrect. Try recalculating when . Which point does it pass through on the -axis?    No  Correct. If , then , which passes through .      A solution that satisfies also satisfies which condition?  A solution that satisfies also satisfies which condition?     Correct! The graph of the solution that satisfies is a horizontal line at so it satisfies .     Incorrect. The solution does not satisfy .     Incorrect. The solution does not satisfy .     Incorrect. The solution does not satisfy .      Role of Initial Conditions  What role do initial conditions play in solving differential equations?    They determine the general form of the solution.  Incorrect. Initial conditions are not used to find the general solution.    They used to determine the constants in the general solution.  Correct! Initial conditions are used to find specific values for constants in the general solution.    They are used to find the particular solution.  Correct! Initial conditions are used to find the specific solution that applies to a particular scenario.    They are not needed if the general solution is already known.  Incorrect. If provided, initial conditions are always needed to get the particular solution from the general solution.    C   "
},
{
  "id": "direct-integration",
  "level": "1",
  "url": "direct-integration.html",
  "type": "Section",
  "number": "",
  "title": "Direct Integration",
  "body": " Direct Integration   Solving a differential equation might sound like a new challenge, but you've actually done it before, in calculus! Any time you find an antiderivative, you're solving a differential equation.  In this section, we'll reframe antiderivatives as solutions to differential equations and use this perspective to introduce our first method: direct integration. By the end, you'll be able to find general and particular solutions to simple differential equations using integration.    🤔💭 Review Question: Recall from Calculus..   Suppose you saw the following expression from calculus: Select all of the true statements.     is the derivative of  Saying is the derivative of , is the same as    is the derivative of  This one should be the most straight forward.    is the antiderivative of  Saying is the antiderivative of is the same thing as saying when you take the derivative of you shoud get    is the antiderivative of  Saying is the antiderivative of is the same as saying when you take the derivative of you should get , which is not true.      📰 Antiderivatives  You might not realize it, but solving some differential equations is a skill you already have! For instance, computing the antiderivative of means you're finding a function whose derivative is . In other words:    Find such that the derivative of is .    This is exactly the same as solving the differential equation:    Find such that .    To solve this, we integrate both sides with respect to :   The constant absorbs the difference between the two integration constants. This is a standard simplification when solving differential equations.    📖❓ When it Comes to Constants, Less is More  Combining constants is a common practice in differential equations.    True  Correct! Combining constants is an easy way to simplify a solution and is a standard practice in differential equations.    False  Incorrect, revisit the examples above.     Now let's look at a slightly more involved example.  Isolate    Find the function, , such that .     This is another antiderivative problem where we first have to isolate before integrating, like so  . This equation now says The unknown is the function whose derivative is or, in other words,    The unknown is the antiderivative of .   Instead of writing down the antiderivative as our solution, let's take the differential equations approach and integrate both sides of the equation with respect to    As before, the constants of integration are combined into a single constant . This practice of merging constants is standard in solving differential equations and simplifies the final result.     📖❓ Finding   Solving for in the equation amounts to finding the antiderivative of .     True   Correct, integrating both sides gives .     False  Incorrect.     In summary, solving simple differential equations often reduces to finding the antiderivative of a function. By integrating both sides and simplifying constants, you can find the general solution.    🤔💭 Check Your Understanding   🤔💭❓ How could you Find ?   How could you solve for in the equation ?     Differentiating both sides with respect to .  Incorrect, differentiating both sides only puts another derivative on .    Isolate and integrating both sides with respect to .  Correct!    Isolate and integrating both sides with respect to .  Incorrect, the integration is not with respect to .    Find the antiderivative of .  Incorrect, the solution is the antiderivative of , not just .      🤔💭❓ Solution ⇄ Antiderivative   The solution to the differential equation is the antiderivative of which function?      Incorrect. is the solution to the differential equation.     Incorrect, perhaps check your algebra.     Incorrect, perhaps check your algebra.      Correct! Isolating gives , so the solution is the antiderivative of .        📰 Solving Differential Equations via Direct Integration  We've seen that when you can isolate the derivative of in the form: you can solve the equation by integrating both sides. This idea also applies to more general equations where the derivative involves both and :   Here, must depend only on , and may involve both variables. This structure allows us to apply our first solution technique: direct integration .   Direct Integration  To solve a differential equation of the form , follow these steps:  Integrate Both Sides  Apply integration with respect to to eliminate the derivative.   Solve for  After integration, isolate to get the general solution.        📖❓ Does Direct Integration Apply?   Direct integration could be used to solve the equation .     True  Correct!    False  Incorrect. This equation is in the form .      📖❓ Why Doesn't Direct Integration Apply Here?   Give the reason direct integration cannot be applied to the equation .     There is a fraction in the derivative.  Incorrect, direct integration doesn't care about fractions.    The term is squared.  Incorrect, direct integration can handle this.    There is a sine term on the right side of the equation.  Incorrect, the sine is not the issue here.    The right-hand side contains .  Correct! Direct integration only works when the right-hand side contains only the independent variable, in this case .      Consider the following examples to see how this approach applies to some more interesting problems.   Integrate both sides to Recover    Find the particular solution to the differential equation .     First, observe that this problem is in the form where .  So, we can solve for using direct integration:    Step 1: Integrate both Sides    Integrating both sides with respect to , we get     Step 2: Isolate the Solution    Now that the dependent variable is free from the derivative, we can isolate it to find the general solution, as follows   Since we are given the condition , we need to find . Therefore, the particular solution (for ) is .     📖❓ First Step   In the differential equation , what is the first step in solving for ?     Release by integrating both sides with respect to .  Correct! Integrating both sides is the first step in solving for .    Release and by integrating both sides with respect to .  Incorrect. Integrating both sides with respect to would not eliminate the derivative since the derivative is with respect to .    Compute the derivative of using the product rule.  Incorrect. This would actually make the equation more complicated.    Isolate .  Incorrect. This would not help solve for .      Isolate the Derivative before Integrating    Compute the general solution of the differential equation      First, we get the derivative by itself on the left-hand side ☝️ Recall the Identity      Now, we integrate by sides with respect to , releasing from the derivative and allowing us to isolate the general solution. .    Direct integration is one of the simplest techniques for solving differential equations, provided the structure allows it. If you can isolate a derivative of or an expression involving and the right-hand side depends only on , you're in business. Just integrate both sides and solve for .  This approach highlights how closely tied differential equations are to the core ideas of calculus.       📤 Wrap-Up    🗝️ Key Takeaways..    When you can rearrange a differential equation so that a derivative is isolated on one side and equals a function of the independent variable, like the next step is to integrate both sides of the equation.    Doing so removes the derivative and allows you to isolate the unknown function .    This process is called direct integration . It's the simplest method for solving differential equations, and it lays the foundation for many techniques you'll learn later.      Check Your Understanding   📖❓ Compute the General Solution   Given the differential equation Find the general solution.   Press  Activate  to submit your answer.        Don t forget the constant of integration. Do not use scripts on the constant (e.g., ).                "
},
{
  "id": "review-direct-integration-1",
  "level": "2",
  "url": "direct-integration.html#review-direct-integration-1",
  "type": "Checkpoint",
  "number": "41",
  "title": "🤔💭 Review Question: Recall from Calculus...",
  "body": " 🤔💭 Review Question: Recall from Calculus..   Suppose you saw the following expression from calculus: Select all of the true statements.     is the derivative of  Saying is the derivative of , is the same as    is the derivative of  This one should be the most straight forward.    is the antiderivative of  Saying is the antiderivative of is the same thing as saying when you take the derivative of you shoud get    is the antiderivative of  Saying is the antiderivative of is the same as saying when you take the derivative of you should get , which is not true.    "
},
{
  "id": "antiderivatives-chkpt-2",
  "level": "2",
  "url": "direct-integration.html#antiderivatives-chkpt-2",
  "type": "Checkpoint",
  "number": "42",
  "title": "📖❓ When it Comes to Constants, Less is More.",
  "body": " 📖❓ When it Comes to Constants, Less is More  Combining constants is a common practice in differential equations.    True  Correct! Combining constants is an easy way to simplify a solution and is a standard practice in differential equations.    False  Incorrect, revisit the examples above.    "
},
{
  "id": "antiderivatives-12",
  "level": "2",
  "url": "direct-integration.html#antiderivatives-12",
  "type": "🌌 Example",
  "number": "43",
  "title": "Isolate <span class=\"process-math\">\\(y\\)<\/span>.",
  "body": "Isolate    Find the function, , such that .     This is another antiderivative problem where we first have to isolate before integrating, like so  . This equation now says The unknown is the function whose derivative is or, in other words,    The unknown is the antiderivative of .   Instead of writing down the antiderivative as our solution, let's take the differential equations approach and integrate both sides of the equation with respect to    As before, the constants of integration are combined into a single constant . This practice of merging constants is standard in solving differential equations and simplifies the final result.   "
},
{
  "id": "antiderivatives-chkpt-3",
  "level": "2",
  "url": "direct-integration.html#antiderivatives-chkpt-3",
  "type": "Checkpoint",
  "number": "44",
  "title": "📖❓ Finding <span class=\"process-math\">\\(y\\)<\/span>.",
  "body": " 📖❓ Finding   Solving for in the equation amounts to finding the antiderivative of .     True   Correct, integrating both sides gives .     False  Incorrect.    "
},
{
  "id": "antiderivatives-chkpt-bundle",
  "level": "2",
  "url": "direct-integration.html#antiderivatives-chkpt-bundle",
  "type": "Checkpoint",
  "number": "45",
  "title": "🤔💭 Check Your Understanding.",
  "body": " 🤔💭 Check Your Understanding   🤔💭❓ How could you Find ?   How could you solve for in the equation ?     Differentiating both sides with respect to .  Incorrect, differentiating both sides only puts another derivative on .    Isolate and integrating both sides with respect to .  Correct!    Isolate and integrating both sides with respect to .  Incorrect, the integration is not with respect to .    Find the antiderivative of .  Incorrect, the solution is the antiderivative of , not just .      🤔💭❓ Solution ⇄ Antiderivative   The solution to the differential equation is the antiderivative of which function?      Incorrect. is the solution to the differential equation.     Incorrect, perhaps check your algebra.     Incorrect, perhaps check your algebra.      Correct! Isolating gives , so the solution is the antiderivative of .      "
},
{
  "id": "direct-integration",
  "level": "2",
  "url": "direct-integration.html#direct-integration",
  "type": "✍🏻 Method",
  "number": "1",
  "title": "Direct Integration.",
  "body": " Direct Integration  To solve a differential equation of the form , follow these steps:  Integrate Both Sides  Apply integration with respect to to eliminate the derivative.   Solve for  After integration, isolate to get the general solution.     "
},
{
  "id": "direct-integration-chkpt-bundle",
  "level": "2",
  "url": "direct-integration.html#direct-integration-chkpt-bundle",
  "type": "Checkpoint",
  "number": "46",
  "title": "",
  "body": "  📖❓ Does Direct Integration Apply?   Direct integration could be used to solve the equation .     True  Correct!    False  Incorrect. This equation is in the form .      📖❓ Why Doesn't Direct Integration Apply Here?   Give the reason direct integration cannot be applied to the equation .     There is a fraction in the derivative.  Incorrect, direct integration doesn't care about fractions.    The term is squared.  Incorrect, direct integration can handle this.    There is a sine term on the right side of the equation.  Incorrect, the sine is not the issue here.    The right-hand side contains .  Correct! Direct integration only works when the right-hand side contains only the independent variable, in this case .     "
},
{
  "id": "direct-integration-example-1",
  "level": "2",
  "url": "direct-integration.html#direct-integration-example-1",
  "type": "🌌 Example",
  "number": "47",
  "title": "Integrate both sides to Recover <span class=\"process-math\">\\(y\\)<\/span>.",
  "body": " Integrate both sides to Recover    Find the particular solution to the differential equation .     First, observe that this problem is in the form where .  So, we can solve for using direct integration:    Step 1: Integrate both Sides    Integrating both sides with respect to , we get     Step 2: Isolate the Solution    Now that the dependent variable is free from the derivative, we can isolate it to find the general solution, as follows   Since we are given the condition , we need to find . Therefore, the particular solution (for ) is .   "
},
{
  "id": "chkpt-direct-integration-4",
  "level": "2",
  "url": "direct-integration.html#chkpt-direct-integration-4",
  "type": "Checkpoint",
  "number": "48",
  "title": "📖❓ First Step.",
  "body": " 📖❓ First Step   In the differential equation , what is the first step in solving for ?     Release by integrating both sides with respect to .  Correct! Integrating both sides is the first step in solving for .    Release and by integrating both sides with respect to .  Incorrect. Integrating both sides with respect to would not eliminate the derivative since the derivative is with respect to .    Compute the derivative of using the product rule.  Incorrect. This would actually make the equation more complicated.    Isolate .  Incorrect. This would not help solve for .    "
},
{
  "id": "direct-integration-example-2",
  "level": "2",
  "url": "direct-integration.html#direct-integration-example-2",
  "type": "🌌 Example",
  "number": "49",
  "title": "Isolate the Derivative before Integrating.",
  "body": " Isolate the Derivative before Integrating    Compute the general solution of the differential equation      First, we get the derivative by itself on the left-hand side ☝️ Recall the Identity      Now, we integrate by sides with respect to , releasing from the derivative and allowing us to isolate the general solution. .   "
},
{
  "id": "direct-integration-cyu-1",
  "level": "2",
  "url": "direct-integration.html#direct-integration-cyu-1",
  "type": "Checkpoint",
  "number": "50",
  "title": "📖❓ Compute the General Solution.",
  "body": " 📖❓ Compute the General Solution   Given the differential equation Find the general solution.   Press  Activate  to submit your answer.        Don t forget the constant of integration. Do not use scripts on the constant (e.g., ).            "
},
{
  "id": "solns-to-des-7",
  "level": "1",
  "url": "solns-to-des-7.html",
  "type": "Section",
  "number": "",
  "title": "Chapter 2 Exercises",
  "body": " Chapter 2 Exercises   ᯓ★❓Quick-Answer Questions   True-False  True or False   In general, differential equations have more than one solution.    True. In general, differential equations have infinitely-many solutions.    True or False   The function, , satisfies the differential equation .    False. is not a solution since     True or False   The differential equation , is an initial value problem.    False. This differential equation is not an initial value problem because it does not include any known values of the solution. An example of an initial value problem would be , since it specifies that must be when .    True or False   A single initial condition always gives you a particular solution?    False. This would only be true when there is one constant in the general solution. When there is more than one constant, then you need multiple initial conditions.  It does, however, limit the possible values of the constants.      True-or-False    is a solution to the differential equation .      True    Incorrect. is not a solution since       False    Correct! is not a solution since       True-or-False   A family of solutions can be viewed as the collection of all particular solutions.      True    Correct! A family of solutions includes all possible particular solutions.      False    Incorrect. A family of solutions is a set of all possible solutions, not just one particular solution.      True-or-False   A particular solution can be viewed as a member of the family of solutions.      True    Correct! A particular solution is one of the many solutions in the family of solutions.      False    Incorrect. A particular solution is a specific member of the family of solutions.      True-or-False   The differential equation, , is an example of an initial-value problem.      True    Incorrect. An initial value problem includes specific initial conditions, which are not provided in this equation.      False    Correct! The equation is a differential equation without initial conditions, so it is not an initial value problem.      True-or-False   A family of solutions is the collection of all general solutions.    This statement is false . A family of solutions includes all particular solutions, which are derived from the general solution by assigning specific values to the constants. The general solution itself is a single form that represents many solutions, not a collection of them.     Short-Answer Questions  Algebraic vs. Differential Equation Solutions   Consider the algebraic equation .     State what it means for to be a solution to this equation.    Show how you would verify that is a solution. Do not solve for .     Show how you would verify that is a solution.    Are there any differences in how you verify solutions to differentials equations compared to algebraic equations? Explain.        Explain the Difference..   In few sentences, explain the difference between a general solution, family of solutions, and a particualr solution.      Explain the Significance..   Explain the significance of initial condition(s) as they relate to the particular and general solution of a differential equation.        Attempt to apply direct integration to the differential equation . Get to the point where it becomes clear that you cannot solve for directly. What is the obstacle?       (a)    To be a solution to the equation, must satisfy the equation. That is, when we substitute into the equation, the result simplifies to a true statement.    Substituting into the equation, we get Since is an undeniably true statement, we have confirmed that is a solution to the equation.    Substituting into the equation, we get Since is not true, so is not a solution to the equation.    The process of verifying solutions to differential equations is exactly the same. However, with differential equations, we have to be more careful about confirming a true statement . With numbers, it is easy to see if is true, but with functions, its a bit more tricky. We have to be sure that the functions are equal for all values of (or the independent variable). For example, the statement is true since . In contrast, the statement is not true since for all values of . It only takes one value of to make the statement false. Let's try a few values of to see this.                                The fact that the statement is not true for is enough to show that this is not a true statement and would not correspond to a solution to a differential equation.     (b)  A general solution represents the form of all possible solutions to a differential equation, typically with one or more arbitrary constants. A family of solutions is an infinite set of solutions, one for each possible combination of constant values in the general solution. A particular solution is a single solution that satisfies the differential equation with specific values for the constants.   (c)  The initial condition(s) specify one or more points that the graph of the solution must pass through. This often allows one to solve for the constants in the general solution. Therefore, the initial condition(s) act to reduce the family of solutions down to a smaller set of solutions or, ideally, a single particular solution.   (d)  Integrating both sides gives Without knowing , we cannot simplify . So the obstacle is that we are unable to combine these variables into a single on the left side.      Solutions  Select-the-Best-Answer   In general, what is a solution to a differential equation?      function of the dependent variable.    While the solution is a function, it is not a function of the dependent variable.      function of the independent variable.    Yes, when you solve a differential equation, you are finding a function of the independent variable.      number    It is possible for a solution to be a number, but not in general.      derivatives of the dependent variable.    While derivatives of the dependent variable are involved, they do not describe solutions in general.      Drag-and-Drop-Answer   The tasks needed to verify that is a solution to are given on the cards to the left.   Drag each task to the order it should be performed on the right.     Review the examples above to see the steps in verifying a solution.                      📖❓ Select-the-Best-Answer   Consider the differential equation with the right-hand side covered: . If is a solution to this equation, what is the right-hand side?           Incorrect. Plug and into the left-side and simplify.           Incorrect. Plug and into the left-side and simplify.           Correct! Plugging and into the left-side gives and to get a true statement, the right-hand side must be .      Select-the-Best-Answer   Consider the differential equation with missing right-hand side: . Assuming is a solution to this equation, which of the following is a possible right-hand side?           Incorrect. Plug and into the left-side and simplify.           Incorrect. Plug and into the left-side and simplify.           Correct! Plugging and into the left-side gives and to get a true statement, the right-hand side must be .      Select-the-Best-Answer   What is a family of solutions?      A collection of all possible solutions to a differential equation.    Correct! The family of solutions includes every possible particular solution.      The general solution to a differential equation.    Incorrect. The general solution represents a form of the family of solutions, not the entire set.      A single specific solution to a differential equation.    Incorrect. This describes a particular solution, not the family of solutions.      A solution without any constants.    Incorrect. A solution without constants is typically a particular solution, not the entire family.      Select-the-Best-Answer   Assume we have a differential equation with dependent variable and independent variable .  What is an initial condition?      The starting value of the independent variable.    Incorrect. The initial condition is related to the solution or its derivatives at a specific point.      A known value of the solution or its derivatives.    Correct! An initial condition specifies the value of the solution or its derivative at a particular point.      Some point in the -plane.    Incorrect. The initial condition is at the starting point, not the end.      The first step in solving a differential equation.    Incorrect. The initial condition is not the initial step for solving a differential equation.      Select-the-Best-Answer   In which case would you need to find a particular solution rather than just a general solution?      When the differential equation is linear.    Incorrect. Linearity doesn't determine whether you need a particular solution.      When initial conditions are provided.    Correct! A particular solution is found when you need to satisfy initial conditions.      When the differential equation is has a general solution.    Incorrect. The existence of a general solution doesn't determine whether you need a particular solution.      When the function depends on more than one variable.    Incorrect. Multivariable functions are not the reason for finding a particular solution.      Select-the-Best-Answer   What does it mean to solve a differential equation?      To find an unknown function that satisfies the equation.    Correct! The goal of solving a differential equation is to find the function that meets the equation's conditions.      To find the derivative of a function.    Incorrect. While derivatives are involved, the goal is to find the function, not just its derivative.      To identify the constants in an equation.    Incorrect. Identifying constants might be part of the process, but it is not the primary goal.      To determine the independent variable.    Incorrect. The independent variable is usually known; we solve for the dependent variable.      Select-the-Best-Answer   Which task is fundamentally different from the others?      Solving a differential equation.    Incorrect. Solving a differential equation is very similar to two other tasks in this list.      Finding the general solution to a differential equation.    Incorrect. Finding the general solution is very similar to two other tasks in this list.      Finding a family of solutions to a differential equation.    Incorrect. Finding a family of solutions is very similar to two other tasks in this list.      Verifying a solution to a differential equation.    Correct! Verifying a solution is much different than the other tasks that seek to find a solution.      Select-the-Best-Answer   Which statement is the best visual description of a particular solution to a differential equation?      The graph of a solution that passes through one or more specific points.    Correct! A particular solution is a single curve that satisfies the differential equation with a specific constant value, distinguishing it from the general solution.      The graph of multiple solutions to the equation.    Incorrect. This description fits a general solution, which encompasses all particular solutions by varying the parameter.      The intersection of all possible solutions to the equation.    Incorrect. This is not a visual representation of a particular solution.      A green curve.    Incorrect. The color of the curve does not define a particular solution.       Antiderivatives & Direct Integration  True-or-False   We can solve for by differentiating both sides with respect to .      True    Incorrect, taking a derivative of both sides will result in a second derivative on the left side of the equation.      False    Correct! We should integrate both sides to solve for , not differentiate.      True-or-False   Solving for in the equation amounts to finding the antiderivative of .      True    Correct, integrating both sides gives .      False    Incorrect.      True-or-False   Combining constants is a common practice in differential equations.      True    Correct!      False    Incorrect, revisit the examples above.      Select-the-Best-Answer   How could you solve for in the equation ?      Differentiating both sides with respect to .    Incorrect, differentiating both sides only puts another derivative on .      Isolate and integrating both sides with respect to .    Correct!      Isolate and integrating both sides with respect to .    Incorrect, the integration is not with respect to .      Find the antiderivative of .    Incorrect, the solution is the antiderivative of , not just .      Select-the-Best-Answer   The solution to the differential equation is the antiderivative of which function?           Incorrect. is the solution to the differential equation.           Incorrect, perhaps check your algebra.           Incorrect, perhaps check your algebra.           Correct! Isolating gives , so the solution is the antiderivative of .      True-or-False   Solving a differential equation by direct integration involves computing a derivative.      True    Incorrect, review .      False    Correct! Direct integration involves integrating both sides of the equation, not computing a derivative.      True-or-False   Direct integration could be used to solve the equation .      True    Correct!      False    Incorrect. This equation is in the form .      Select-the-Best-Answer   Give the reason direct integration cannot be applied to the equation .      There is a fraction in the derivative.    Incorrect, direct integration doesn't care about fractions.      The term is squared.    Incorrect, direct integration can handle this.      There is a sine term on the right side of the equation.    Incorrect, the sine is not the issue here.      The right-hand side contains .    Correct! Direct integration only works when the right-hand side contains only the independent variable, in this case .      Select-the-Best-Answer   In the differential equation , what is the first step in solving for ?      Release by integrating both sides with respect to .    Correct! Integrating both sides is the first step in solving for .      Release and by integrating both sides with respect to .    Incorrect. Integrating both sides with respect to would not eliminate the derivative since the derivative is with respect to .      Compute the derivative of using the product rule.    Incorrect. This would actually make the equation more complicated.      Isolate .    Incorrect. This would not help solve for .       Fill in the Blanks   The words, on the left, have been removed from the statements, on the right.  Drag each word to the panel that contains the statement it was removed from.     dependent  The solution is represented by the variable.    general  particular  The solution represents all possible solutions.    independent  The solution depends on the variable.    satisfies  function  For a to be a solution to a differential equation, it must the equation.      Matching Each Function to the Equation it Satisfies   Drag each particular solution, on the left, to the differential equation it satisfies.    Carefully take the derivative of each function separately, then see if the function satisfies one of the equations.                                         🏗️ Warm-ups & Drills   Select the Solutions   For each differential equation, select the functions that are solution to that equation.         a.   b.   c.     d.   e.   f.     g.   h.   i.           a. No  b. Yes  c. Yes    d. No  e. No  f. No    g. Yes  h. Yes  i. Yes             a.   b.   c.     d.   e.   f.     g.   h.   i.            a. Yes  b. No  c. Yes    d. No  e. Yes  f. Yes    g. No  h. No  i. Yes          Find the Hidden Right-Hand Side   For each given , assume it is a solution to the differential equation with hidden right side. Give the function that must be on the right for to be a solution to the equation.                                   Find and : and plug them in: Therefore, the differential equation must be .       🕹️ Solutions to Differential Equations   Verifying Solutions   For each, verify if the given function, , is a solution to the differential equation.    ,     is a solution to the differential equation .    We need to substitute into the differential equation. In order to substitute into the left hand side, we need to know the second derivative. So we begin by finding that. Now we can substitute into the differential equation: Since when we substitute in to the differential equation, we find that the LHS is equal to the RHS, we have verified that is a solution to the differential equation       ,    It is a solution.    The function is a solution to the differential equation since plugging it in gives        ,    ?    Find and since they appear in the equation and move all terms to the left-side.   Plug in and and simplify. Therefore, is a solution to       ,    ?    Working out the left and right hand sides of this DE, we have:          Since , we have verified that is a solution to        Find the value of .   Each of the following differential equations has one or more solutions of the form , for different values of constant, . Find all the values of so that is a solution to the equation.            First we take derivatives so that we can substitute into the differential equation. Now we can substitute into the equation and solve for : Recall that no matter the value of or Thus we have: So the two solutions are                                Find the value of .   Each of the following differential equations has one or more solutions of the form , for different values of constant, . Find all the values of so that is a solution to the equation.      We proceed as in the previous question. First we take derivatives so that we can substitute into the differential equation. Now we can substitute into the differential equation: Note that there is no value of that can guarantee that is 0. Hence we have So the two solutions are               Find the value of .   Find the value of in or the differential equation such that is a solution to the equation.                            Solutions to Initial-Valued Problems  Answer the following      Show that is a solution to the differential equation .    Find corresponding to the initial condition.         Yes   , so is the particular solution         To show this, let's first move all terms to one side of the equation, so     Now, we will compute and plug it and into the left hand side (LHS) of the equation to see if it simplifies to zero.     Applying gives and so the particular solution is        Verifying Particular Solutions of Initial-Valued Problems Takes 2-Steps   To verifying that a function (e.g., ) is a particular solution to an initial-value problem, there is an extra step beyond showing that it satisfies the differential equation. What else must this function satisfy?    To verify that the function is a particular solution to the initial-value problem , we must show the following two things:     satisfies the differential equation.     satisfies the initial condition.    Let's start by showing that the function satisfies the differential equation.     Now, let's show that the function satisfies the initial condition .          Show is a particular solution to .    Yes    We must show that satisfies both the differential equation and the initial condition.  First, we check if satisfies the differential equation.     Now, we check if satisfies the initial condition .     Since satisfies both the differential equation and the initial condition, it is a particular solution to the initial-valued problem.      Show is a particular solution to .    ?    To verify that the function is a particular solution to the initial-value problem , we must show the following two things:     satisfies the differential equation.     satisfies the initial condition.    Let's start by showing that the function satisfies the differential equation.     Now, let's show that the function satisfies the initial condition .       Find the Correct Solution  Consider the differential equation and the following three functions .   Determine which, if any, of or are solutions to this equation.    For any of the solutions found in (a), find the particular solution that corresponds to the initial condition.        b.   , so is the particular solution       To show this, let's first move all terms to one side of the equation, so     For each of the functions above, we will compute and plug it and into the left hand side (LHS) of the equation to see if it simplifies to zero.        It can be difficult to see why this doesn't simplify to zero. However, if we assume it does, then plugging any into this expression must also give you zero. So, if you can find one value where this doesn't happen, then this function cannot be a solution.  Letting gives , but can be any constant, so is not a solution.          Letting gives , but since can be any constant, is not a solution.          So is a solution.      Setting we get     So the particular solution for this initial condition is           ✍🏻 Solving Differential Equations   General Solution   Find the general solution for each of the following differential equations. Combine constants where appropriate.                                                                     Particular Solution   Find the particular solution for each of the following differential equations with the given initial condition.                                                              Start by isolating the derivative, , on one side of the equation Integrate both sides with respect to to leave us with on the left side   Finally, apply the initial condition to find  Thus, the solution to the differential equation is .               Solve the Equation   Solve the initial-value problem .    Start by isolating the derivative, , on one side of the equation Integrate both sides with respect to to leave us with on the left side   Finally, apply the initial condition to find  Thus, the solution to the differential equation is .     Preview of a Future Method  At this point, you should be comfortable solving an equation such as . The problem is that most equations do not start in this form. Instead, they start in another form and then, after some algebra, are put into this nice form and solved. The process off rewriting an equation in this way is the basis for another technique called the integrating factor method. The question we want to answer here is what type of equations can be written in this form?   Give the equation that can be rewritten in the form   To understand which equation can be rewritten in the form , we will work backwards and expand the derivative on the left side using the product rule from calculus to turn our equation into     Fill in             Next, rewrite the expanded equation into the form     Fill in             The above equation is the exact same equation as !     x^7    7x^6    7\/x    e^x\/x^7                           Rewrite and Solve   For each equation below, complete the following:   Use the product rule to rewrite each differential equation in the form .    Solve the equation.                 "
},
{
  "id": "c2-concept-review-tf-mc",
  "level": "2",
  "url": "solns-to-des-7.html#c2-concept-review-tf-mc",
  "type": "Reading Question",
  "number": "1",
  "title": "True-False.",
  "body": "True-False  True or False   In general, differential equations have more than one solution.    True. In general, differential equations have infinitely-many solutions.    True or False   The function, , satisfies the differential equation .    False. is not a solution since     True or False   The differential equation , is an initial value problem.    False. This differential equation is not an initial value problem because it does not include any known values of the solution. An example of an initial value problem would be , since it specifies that must be when .    True or False   A single initial condition always gives you a particular solution?    False. This would only be true when there is one constant in the general solution. When there is more than one constant, then you need multiple initial conditions.  It does, however, limit the possible values of the constants.      True-or-False    is a solution to the differential equation .      True    Incorrect. is not a solution since       False    Correct! is not a solution since       True-or-False   A family of solutions can be viewed as the collection of all particular solutions.      True    Correct! A family of solutions includes all possible particular solutions.      False    Incorrect. A family of solutions is a set of all possible solutions, not just one particular solution.      True-or-False   A particular solution can be viewed as a member of the family of solutions.      True    Correct! A particular solution is one of the many solutions in the family of solutions.      False    Incorrect. A particular solution is a specific member of the family of solutions.      True-or-False   The differential equation, , is an example of an initial-value problem.      True    Incorrect. An initial value problem includes specific initial conditions, which are not provided in this equation.      False    Correct! The equation is a differential equation without initial conditions, so it is not an initial value problem.      True-or-False   A family of solutions is the collection of all general solutions.    This statement is false . A family of solutions includes all particular solutions, which are derived from the general solution by assigning specific values to the constants. The general solution itself is a single form that represents many solutions, not a collection of them.    "
},
{
  "id": "c2-concept-review-sa",
  "level": "2",
  "url": "solns-to-des-7.html#c2-concept-review-sa",
  "type": "Reading Question",
  "number": "2",
  "title": "Short-Answer Questions.",
  "body": "Short-Answer Questions  Algebraic vs. Differential Equation Solutions   Consider the algebraic equation .     State what it means for to be a solution to this equation.    Show how you would verify that is a solution. Do not solve for .     Show how you would verify that is a solution.    Are there any differences in how you verify solutions to differentials equations compared to algebraic equations? Explain.        Explain the Difference..   In few sentences, explain the difference between a general solution, family of solutions, and a particualr solution.      Explain the Significance..   Explain the significance of initial condition(s) as they relate to the particular and general solution of a differential equation.        Attempt to apply direct integration to the differential equation . Get to the point where it becomes clear that you cannot solve for directly. What is the obstacle?       (a)    To be a solution to the equation, must satisfy the equation. That is, when we substitute into the equation, the result simplifies to a true statement.    Substituting into the equation, we get Since is an undeniably true statement, we have confirmed that is a solution to the equation.    Substituting into the equation, we get Since is not true, so is not a solution to the equation.    The process of verifying solutions to differential equations is exactly the same. However, with differential equations, we have to be more careful about confirming a true statement . With numbers, it is easy to see if is true, but with functions, its a bit more tricky. We have to be sure that the functions are equal for all values of (or the independent variable). For example, the statement is true since . In contrast, the statement is not true since for all values of . It only takes one value of to make the statement false. Let's try a few values of to see this.                                The fact that the statement is not true for is enough to show that this is not a true statement and would not correspond to a solution to a differential equation.     (b)  A general solution represents the form of all possible solutions to a differential equation, typically with one or more arbitrary constants. A family of solutions is an infinite set of solutions, one for each possible combination of constant values in the general solution. A particular solution is a single solution that satisfies the differential equation with specific values for the constants.   (c)  The initial condition(s) specify one or more points that the graph of the solution must pass through. This often allows one to solve for the constants in the general solution. Therefore, the initial condition(s) act to reduce the family of solutions down to a smaller set of solutions or, ideally, a single particular solution.   (d)  Integrating both sides gives Without knowing , we cannot simplify . So the obstacle is that we are unable to combine these variables into a single on the left side.     "
},
{
  "id": "chkpts-solns-to-des",
  "level": "2",
  "url": "solns-to-des-7.html#chkpts-solns-to-des",
  "type": "Reading Question",
  "number": "3",
  "title": "Solutions.",
  "body": "Solutions  Select-the-Best-Answer   In general, what is a solution to a differential equation?      function of the dependent variable.    While the solution is a function, it is not a function of the dependent variable.      function of the independent variable.    Yes, when you solve a differential equation, you are finding a function of the independent variable.      number    It is possible for a solution to be a number, but not in general.      derivatives of the dependent variable.    While derivatives of the dependent variable are involved, they do not describe solutions in general.      Drag-and-Drop-Answer   The tasks needed to verify that is a solution to are given on the cards to the left.   Drag each task to the order it should be performed on the right.     Review the examples above to see the steps in verifying a solution.                      📖❓ Select-the-Best-Answer   Consider the differential equation with the right-hand side covered: . If is a solution to this equation, what is the right-hand side?           Incorrect. Plug and into the left-side and simplify.           Incorrect. Plug and into the left-side and simplify.           Correct! Plugging and into the left-side gives and to get a true statement, the right-hand side must be .      Select-the-Best-Answer   Consider the differential equation with missing right-hand side: . Assuming is a solution to this equation, which of the following is a possible right-hand side?           Incorrect. Plug and into the left-side and simplify.           Incorrect. Plug and into the left-side and simplify.           Correct! Plugging and into the left-side gives and to get a true statement, the right-hand side must be .      Select-the-Best-Answer   What is a family of solutions?      A collection of all possible solutions to a differential equation.    Correct! The family of solutions includes every possible particular solution.      The general solution to a differential equation.    Incorrect. The general solution represents a form of the family of solutions, not the entire set.      A single specific solution to a differential equation.    Incorrect. This describes a particular solution, not the family of solutions.      A solution without any constants.    Incorrect. A solution without constants is typically a particular solution, not the entire family.      Select-the-Best-Answer   Assume we have a differential equation with dependent variable and independent variable .  What is an initial condition?      The starting value of the independent variable.    Incorrect. The initial condition is related to the solution or its derivatives at a specific point.      A known value of the solution or its derivatives.    Correct! An initial condition specifies the value of the solution or its derivative at a particular point.      Some point in the -plane.    Incorrect. The initial condition is at the starting point, not the end.      The first step in solving a differential equation.    Incorrect. The initial condition is not the initial step for solving a differential equation.      Select-the-Best-Answer   In which case would you need to find a particular solution rather than just a general solution?      When the differential equation is linear.    Incorrect. Linearity doesn't determine whether you need a particular solution.      When initial conditions are provided.    Correct! A particular solution is found when you need to satisfy initial conditions.      When the differential equation is has a general solution.    Incorrect. The existence of a general solution doesn't determine whether you need a particular solution.      When the function depends on more than one variable.    Incorrect. Multivariable functions are not the reason for finding a particular solution.      Select-the-Best-Answer   What does it mean to solve a differential equation?      To find an unknown function that satisfies the equation.    Correct! The goal of solving a differential equation is to find the function that meets the equation's conditions.      To find the derivative of a function.    Incorrect. While derivatives are involved, the goal is to find the function, not just its derivative.      To identify the constants in an equation.    Incorrect. Identifying constants might be part of the process, but it is not the primary goal.      To determine the independent variable.    Incorrect. The independent variable is usually known; we solve for the dependent variable.      Select-the-Best-Answer   Which task is fundamentally different from the others?      Solving a differential equation.    Incorrect. Solving a differential equation is very similar to two other tasks in this list.      Finding the general solution to a differential equation.    Incorrect. Finding the general solution is very similar to two other tasks in this list.      Finding a family of solutions to a differential equation.    Incorrect. Finding a family of solutions is very similar to two other tasks in this list.      Verifying a solution to a differential equation.    Correct! Verifying a solution is much different than the other tasks that seek to find a solution.      Select-the-Best-Answer   Which statement is the best visual description of a particular solution to a differential equation?      The graph of a solution that passes through one or more specific points.    Correct! A particular solution is a single curve that satisfies the differential equation with a specific constant value, distinguishing it from the general solution.      The graph of multiple solutions to the equation.    Incorrect. This description fits a general solution, which encompasses all particular solutions by varying the parameter.      The intersection of all possible solutions to the equation.    Incorrect. This is not a visual representation of a particular solution.      A green curve.    Incorrect. The color of the curve does not define a particular solution.      "
},
{
  "id": "chkpts-antiderivatives",
  "level": "2",
  "url": "solns-to-des-7.html#chkpts-antiderivatives",
  "type": "Reading Question",
  "number": "5",
  "title": "Antiderivatives &amp; Direct Integration.",
  "body": "Antiderivatives & Direct Integration  True-or-False   We can solve for by differentiating both sides with respect to .      True    Incorrect, taking a derivative of both sides will result in a second derivative on the left side of the equation.      False    Correct! We should integrate both sides to solve for , not differentiate.      True-or-False   Solving for in the equation amounts to finding the antiderivative of .      True    Correct, integrating both sides gives .      False    Incorrect.      True-or-False   Combining constants is a common practice in differential equations.      True    Correct!      False    Incorrect, revisit the examples above.      Select-the-Best-Answer   How could you solve for in the equation ?      Differentiating both sides with respect to .    Incorrect, differentiating both sides only puts another derivative on .      Isolate and integrating both sides with respect to .    Correct!      Isolate and integrating both sides with respect to .    Incorrect, the integration is not with respect to .      Find the antiderivative of .    Incorrect, the solution is the antiderivative of , not just .      Select-the-Best-Answer   The solution to the differential equation is the antiderivative of which function?           Incorrect. is the solution to the differential equation.           Incorrect, perhaps check your algebra.           Incorrect, perhaps check your algebra.           Correct! Isolating gives , so the solution is the antiderivative of .      True-or-False   Solving a differential equation by direct integration involves computing a derivative.      True    Incorrect, review .      False    Correct! Direct integration involves integrating both sides of the equation, not computing a derivative.      True-or-False   Direct integration could be used to solve the equation .      True    Correct!      False    Incorrect. This equation is in the form .      Select-the-Best-Answer   Give the reason direct integration cannot be applied to the equation .      There is a fraction in the derivative.    Incorrect, direct integration doesn't care about fractions.      The term is squared.    Incorrect, direct integration can handle this.      There is a sine term on the right side of the equation.    Incorrect, the sine is not the issue here.      The right-hand side contains .    Correct! Direct integration only works when the right-hand side contains only the independent variable, in this case .      Select-the-Best-Answer   In the differential equation , what is the first step in solving for ?      Release by integrating both sides with respect to .    Correct! Integrating both sides is the first step in solving for .      Release and by integrating both sides with respect to .    Incorrect. Integrating both sides with respect to would not eliminate the derivative since the derivative is with respect to .      Compute the derivative of using the product rule.    Incorrect. This would actually make the equation more complicated.      Isolate .    Incorrect. This would not help solve for .      "
},
{
  "id": "c2-cr-fillin-01-mediumcard",
  "level": "2",
  "url": "solns-to-des-7.html#c2-cr-fillin-01-mediumcard",
  "type": "Reading Question",
  "number": "6",
  "title": "Fill in the Blanks.",
  "body": "Fill in the Blanks   The words, on the left, have been removed from the statements, on the right.  Drag each word to the panel that contains the statement it was removed from.     dependent  The solution is represented by the variable.    general  particular  The solution represents all possible solutions.    independent  The solution depends on the variable.    satisfies  function  For a to be a solution to a differential equation, it must the equation.    "
},
{
  "id": "c2-warm-ups-matching-01",
  "level": "2",
  "url": "solns-to-des-7.html#c2-warm-ups-matching-01",
  "type": "Reading Question",
  "number": "7",
  "title": "Matching Each Function to the Equation it Satisfies.",
  "body": " Matching Each Function to the Equation it Satisfies   Drag each particular solution, on the left, to the differential equation it satisfies.    Carefully take the derivative of each function separately, then see if the function satisfies one of the equations.                                     "
},
{
  "id": "c2-warm-ups-click-1",
  "level": "2",
  "url": "solns-to-des-7.html#c2-warm-ups-click-1",
  "type": "Exercise",
  "number": "1",
  "title": "<span class=\"process-math\">\\(y''-9y = 0\\)<\/span>.",
  "body": "      a.   b.   c.     d.   e.   f.     g.   h.   i.           a. No  b. Yes  c. Yes    d. No  e. No  f. No    g. Yes  h. Yes  i. Yes      "
},
{
  "id": "c2-warm-ups-click-2",
  "level": "2",
  "url": "solns-to-des-7.html#c2-warm-ups-click-2",
  "type": "Exercise",
  "number": "2",
  "title": "<span class=\"process-math\">\\(y'' - 10y' + 25y = 0\\)<\/span>.",
  "body": "      a.   b.   c.     d.   e.   f.     g.   h.   i.            a. Yes  b. No  c. Yes    d. No  e. Yes  f. Yes    g. No  h. No  i. Yes       "
},
{
  "id": "c2-warm-ups-ww-1",
  "level": "2",
  "url": "solns-to-des-7.html#c2-warm-ups-ww-1",
  "type": "Exercise",
  "number": "3",
  "title": "<span class=\"process-math\">\\(\\ y(t) = 2e^{-3t}\\)<\/span>.",
  "body": "               "
},
{
  "id": "c2-warm-ups-ww-2",
  "level": "2",
  "url": "solns-to-des-7.html#c2-warm-ups-ww-2",
  "type": "Exercise",
  "number": "4",
  "title": "<span class=\"process-math\">\\(\\ y(t) = 3\\sin(t^2)\\)<\/span>.",
  "body": "                Find and : and plug them in: Therefore, the differential equation must be .   "
},
{
  "id": "c2-exercises-solutions-to-DEs-2-3",
  "level": "2",
  "url": "solns-to-des-7.html#c2-exercises-solutions-to-DEs-2-3",
  "type": "Exercise",
  "number": "1",
  "title": "",
  "body": " ,     is a solution to the differential equation .    We need to substitute into the differential equation. In order to substitute into the left hand side, we need to know the second derivative. So we begin by finding that. Now we can substitute into the differential equation: Since when we substitute in to the differential equation, we find that the LHS is equal to the RHS, we have verified that is a solution to the differential equation     "
},
{
  "id": "c2-exercises-solutions-to-DEs-2-4",
  "level": "2",
  "url": "solns-to-des-7.html#c2-exercises-solutions-to-DEs-2-4",
  "type": "Exercise",
  "number": "2",
  "title": "",
  "body": " ,    It is a solution.    The function is a solution to the differential equation since plugging it in gives      "
},
{
  "id": "c2-exercises-solutions-to-DEs-2-5",
  "level": "2",
  "url": "solns-to-des-7.html#c2-exercises-solutions-to-DEs-2-5",
  "type": "Exercise",
  "number": "3",
  "title": "",
  "body": " ,    ?    Find and since they appear in the equation and move all terms to the left-side.   Plug in and and simplify. Therefore, is a solution to     "
},
{
  "id": "c2-exercises-solutions-to-DEs-2-6",
  "level": "2",
  "url": "solns-to-des-7.html#c2-exercises-solutions-to-DEs-2-6",
  "type": "Exercise",
  "number": "4",
  "title": "",
  "body": " ,    ?    Working out the left and right hand sides of this DE, we have:          Since , we have verified that is a solution to     "
},
{
  "id": "c2-exercises-solutions-to-DEs-3-3",
  "level": "2",
  "url": "solns-to-des-7.html#c2-exercises-solutions-to-DEs-3-3",
  "type": "Exercise",
  "number": "5",
  "title": "",
  "body": "         First we take derivatives so that we can substitute into the differential equation. Now we can substitute into the equation and solve for : Recall that no matter the value of or Thus we have: So the two solutions are     "
},
{
  "id": "c2-exercises-solutions-to-DEs-3-4",
  "level": "2",
  "url": "solns-to-des-7.html#c2-exercises-solutions-to-DEs-3-4",
  "type": "Exercise",
  "number": "6",
  "title": "",
  "body": "       "
},
{
  "id": "c2-exercises-solutions-to-DEs-3-5",
  "level": "2",
  "url": "solns-to-des-7.html#c2-exercises-solutions-to-DEs-3-5",
  "type": "Exercise",
  "number": "7",
  "title": "",
  "body": "       "
},
{
  "id": "c2-exercises-solutions-to-DEs-3-6",
  "level": "2",
  "url": "solns-to-des-7.html#c2-exercises-solutions-to-DEs-3-6",
  "type": "Exercise",
  "number": "8",
  "title": "",
  "body": "       "
},
{
  "id": "c2-exercises-solutions-to-DEs-4-3",
  "level": "2",
  "url": "solns-to-des-7.html#c2-exercises-solutions-to-DEs-4-3",
  "type": "Exercise",
  "number": "9",
  "title": "",
  "body": "   We proceed as in the previous question. First we take derivatives so that we can substitute into the differential equation. Now we can substitute into the differential equation: Note that there is no value of that can guarantee that is 0. Hence we have So the two solutions are    "
},
{
  "id": "c2-exercises-solutions-to-DEs-4-4",
  "level": "2",
  "url": "solns-to-des-7.html#c2-exercises-solutions-to-DEs-4-4",
  "type": "Exercise",
  "number": "10",
  "title": "",
  "body": "       "
},
{
  "id": "c2-exercises-solutions-to-DEs-5-3",
  "level": "2",
  "url": "solns-to-des-7.html#c2-exercises-solutions-to-DEs-5-3",
  "type": "Exercise",
  "number": "11",
  "title": "",
  "body": "       "
},
{
  "id": "c2-exercises-solutions-to-DEs-5-4",
  "level": "2",
  "url": "solns-to-des-7.html#c2-exercises-solutions-to-DEs-5-4",
  "type": "Exercise",
  "number": "12",
  "title": "",
  "body": "       "
},
{
  "id": "c2-exercises-solutions-to-DEs-5-5",
  "level": "2",
  "url": "solns-to-des-7.html#c2-exercises-solutions-to-DEs-5-5",
  "type": "Exercise",
  "number": "13",
  "title": "",
  "body": "       "
},
{
  "id": "ex-c2-ivp-1a",
  "level": "2",
  "url": "solns-to-des-7.html#ex-c2-ivp-1a",
  "type": "Exercise",
  "number": "14",
  "title": "Answer the following.",
  "body": "Answer the following      Show that is a solution to the differential equation .    Find corresponding to the initial condition.         Yes   , so is the particular solution         To show this, let's first move all terms to one side of the equation, so     Now, we will compute and plug it and into the left hand side (LHS) of the equation to see if it simplifies to zero.     Applying gives and so the particular solution is       "
},
{
  "id": "ex-c2-ivp-2a",
  "level": "2",
  "url": "solns-to-des-7.html#ex-c2-ivp-2a",
  "type": "Exercise",
  "number": "15",
  "title": "Verifying Particular Solutions of Initial-Valued Problems Takes 2-Steps.",
  "body": "Verifying Particular Solutions of Initial-Valued Problems Takes 2-Steps   To verifying that a function (e.g., ) is a particular solution to an initial-value problem, there is an extra step beyond showing that it satisfies the differential equation. What else must this function satisfy?    To verify that the function is a particular solution to the initial-value problem , we must show the following two things:     satisfies the differential equation.     satisfies the initial condition.    Let's start by showing that the function satisfies the differential equation.     Now, let's show that the function satisfies the initial condition .       "
},
{
  "id": "ex-c2-ivp-2b",
  "level": "2",
  "url": "solns-to-des-7.html#ex-c2-ivp-2b",
  "type": "Exercise",
  "number": "16",
  "title": "",
  "body": "  Show is a particular solution to .    Yes    We must show that satisfies both the differential equation and the initial condition.  First, we check if satisfies the differential equation.     Now, we check if satisfies the initial condition .     Since satisfies both the differential equation and the initial condition, it is a particular solution to the initial-valued problem.   "
},
{
  "id": "ex-c2-ivp-2c",
  "level": "2",
  "url": "solns-to-des-7.html#ex-c2-ivp-2c",
  "type": "Exercise",
  "number": "17",
  "title": "",
  "body": "  Show is a particular solution to .    ?    To verify that the function is a particular solution to the initial-value problem , we must show the following two things:     satisfies the differential equation.     satisfies the initial condition.    Let's start by showing that the function satisfies the differential equation.     Now, let's show that the function satisfies the initial condition .      "
},
{
  "id": "c2-exercises-solutions-to-DEs-6-6",
  "level": "2",
  "url": "solns-to-des-7.html#c2-exercises-solutions-to-DEs-6-6",
  "type": "Exercise",
  "number": "18",
  "title": "Find the Correct Solution.",
  "body": "Find the Correct Solution  Consider the differential equation and the following three functions .   Determine which, if any, of or are solutions to this equation.    For any of the solutions found in (a), find the particular solution that corresponds to the initial condition.        b.   , so is the particular solution       To show this, let's first move all terms to one side of the equation, so     For each of the functions above, we will compute and plug it and into the left hand side (LHS) of the equation to see if it simplifies to zero.        It can be difficult to see why this doesn't simplify to zero. However, if we assume it does, then plugging any into this expression must also give you zero. So, if you can find one value where this doesn't happen, then this function cannot be a solution.  Letting gives , but can be any constant, so is not a solution.          Letting gives , but since can be any constant, is not a solution.          So is a solution.      Setting we get     So the particular solution for this initial condition is       "
},
{
  "id": "c2-exercises-2-3",
  "level": "2",
  "url": "solns-to-des-7.html#c2-exercises-2-3",
  "type": "Exercise",
  "number": "1",
  "title": "",
  "body": "       "
},
{
  "id": "c2-exercises-2-4",
  "level": "2",
  "url": "solns-to-des-7.html#c2-exercises-2-4",
  "type": "Exercise",
  "number": "2",
  "title": "",
  "body": "       "
},
{
  "id": "c2-exercises-2-5",
  "level": "2",
  "url": "solns-to-des-7.html#c2-exercises-2-5",
  "type": "Exercise",
  "number": "3",
  "title": "",
  "body": "       "
},
{
  "id": "c2-exercises-2-6",
  "level": "2",
  "url": "solns-to-des-7.html#c2-exercises-2-6",
  "type": "Exercise",
  "number": "4",
  "title": "",
  "body": "       "
},
{
  "id": "c2-exercises-2-7",
  "level": "2",
  "url": "solns-to-des-7.html#c2-exercises-2-7",
  "type": "Exercise",
  "number": "5",
  "title": "",
  "body": "       "
},
{
  "id": "c2-exercises-2-8",
  "level": "2",
  "url": "solns-to-des-7.html#c2-exercises-2-8",
  "type": "Exercise",
  "number": "6",
  "title": "",
  "body": "       "
},
{
  "id": "c2-exercises-2-9",
  "level": "2",
  "url": "solns-to-des-7.html#c2-exercises-2-9",
  "type": "Exercise",
  "number": "7",
  "title": "",
  "body": "       "
},
{
  "id": "c2-exercises-2-10",
  "level": "2",
  "url": "solns-to-des-7.html#c2-exercises-2-10",
  "type": "Exercise",
  "number": "8",
  "title": "",
  "body": "       "
},
{
  "id": "c2-exercises-3-3",
  "level": "2",
  "url": "solns-to-des-7.html#c2-exercises-3-3",
  "type": "Exercise",
  "number": "9",
  "title": "",
  "body": "       "
},
{
  "id": "c2-exercises-3-4",
  "level": "2",
  "url": "solns-to-des-7.html#c2-exercises-3-4",
  "type": "Exercise",
  "number": "10",
  "title": "",
  "body": "       "
},
{
  "id": "c2-exercises-3-5",
  "level": "2",
  "url": "solns-to-des-7.html#c2-exercises-3-5",
  "type": "Exercise",
  "number": "11",
  "title": "",
  "body": "       "
},
{
  "id": "c2-exercises-3-6",
  "level": "2",
  "url": "solns-to-des-7.html#c2-exercises-3-6",
  "type": "Exercise",
  "number": "12",
  "title": "",
  "body": "       "
},
{
  "id": "c2-exercises-3-7",
  "level": "2",
  "url": "solns-to-des-7.html#c2-exercises-3-7",
  "type": "Exercise",
  "number": "13",
  "title": "",
  "body": "       "
},
{
  "id": "c2-exercises-3-8",
  "level": "2",
  "url": "solns-to-des-7.html#c2-exercises-3-8",
  "type": "Exercise",
  "number": "14",
  "title": "",
  "body": "       "
},
{
  "id": "c2-exercises-3-9",
  "level": "2",
  "url": "solns-to-des-7.html#c2-exercises-3-9",
  "type": "Exercise",
  "number": "15",
  "title": "",
  "body": "       "
},
{
  "id": "c2-exercises-3-10",
  "level": "2",
  "url": "solns-to-des-7.html#c2-exercises-3-10",
  "type": "Exercise",
  "number": "16",
  "title": "",
  "body": "   Start by isolating the derivative, , on one side of the equation Integrate both sides with respect to to leave us with on the left side   Finally, apply the initial condition to find  Thus, the solution to the differential equation is .    "
},
{
  "id": "c2-exercises-3-11",
  "level": "2",
  "url": "solns-to-des-7.html#c2-exercises-3-11",
  "type": "Exercise",
  "number": "17",
  "title": "",
  "body": "       "
},
{
  "id": "c2-warm-ups-ww-3",
  "level": "2",
  "url": "solns-to-des-7.html#c2-warm-ups-ww-3",
  "type": "Exercise",
  "number": "18",
  "title": "Solve the Equation.",
  "body": " Solve the Equation   Solve the initial-value problem .    Start by isolating the derivative, , on one side of the equation Integrate both sides with respect to to leave us with on the left side   Finally, apply the initial condition to find  Thus, the solution to the differential equation is .   "
},
{
  "id": "c2-piss-medium",
  "level": "2",
  "url": "solns-to-des-7.html#c2-piss-medium",
  "type": "Exercise",
  "number": "1",
  "title": "Give the equation that can be rewritten in the form <span class=\"process-math\">\\(\\ds\\left[x^7 y \\right]^{\\prime} = e^x\\)<\/span>.",
  "body": "Give the equation that can be rewritten in the form   To understand which equation can be rewritten in the form , we will work backwards and expand the derivative on the left side using the product rule from calculus to turn our equation into     Fill in             Next, rewrite the expanded equation into the form     Fill in             The above equation is the exact same equation as !     x^7    7x^6    7\/x    e^x\/x^7                          "
},
{
  "id": "solns-to-des-7-6-4-3",
  "level": "2",
  "url": "solns-to-des-7.html#solns-to-des-7-6-4-3",
  "type": "Exercise",
  "number": "2",
  "title": "",
  "body": "  "
},
{
  "id": "solns-to-des-7-6-4-4",
  "level": "2",
  "url": "solns-to-des-7.html#solns-to-des-7-6-4-4",
  "type": "Exercise",
  "number": "3",
  "title": "",
  "body": "  "
},
{
  "id": "solns-to-des-7-6-4-5",
  "level": "2",
  "url": "solns-to-des-7.html#solns-to-des-7-6-4-5",
  "type": "Exercise",
  "number": "4",
  "title": "",
  "body": "  "
},
{
  "id": "separable-des",
  "level": "1",
  "url": "separable-des.html",
  "type": "Section",
  "number": "",
  "title": "Separable Differential Equations",
  "body": " Separable Differential Equations   The method of separation of variables applies only to a special class of first-order differential equations, those that can be written in a particular form. When an equation has this form, it can be rearranged so that integration leads directly to its general solution. So before we can use this powerful method, we first need to learn how to recognize when an equation is separable.    Separable Form  Some differential equations can be rewritten so that all the terms are on one side and all the terms are on the other. These equations are called separable . Let's make that idea precise.  Separable Form   A first-order differential equation is separable if it can be written in following separable form  .    Select-the-Best-Answer   The term separable refers to the idea that the dependent and independent variables can be separated by .      multiplication    Correct!      addition    Read the first sentence of this page.      integration    Read the first sentence of this page.      gender    Really?        What Does Separable Mean?  The notation can be intimidating at first. It compresses a lot of ideas into a small expression. But don't worry, we'll break it down.  In the definition, is just a stand-in for any expression that only involves the variable . For example, it might be:   Likewise, stands for any expression involving only and constants:   So when we say , we just mean any product where one factor depends only on and the other only on . Here are a few made-up examples:     Recognizing Separable Forms  Since the separation of variables method can only be applied to differential equations in separable form, it is crucial to be able to recognize this structure.  Examples of separable differential equations include: Non-separable equations include:   Select-the-Best-Answer   Which of the following differential equations is not separable?           Incorrect. This equation is separable because it can be expressed as a product of functions involving only and .           Incorrect. This equation is separable as the variables are already separated by multiplication.           Correct! This equation is not separable because the terms involving and are added together, not multiplied.           Incorrect. This equation is separable because the variables are divided, which can still be separated into a product of functions.        A Special Separable Form  As a special case, a differential equation can still be separable even if one or both variables do not explicitly appear. For example, the equations , are all separable since they can be written as .  While all three of these are in separable form and can be solved with the separation of variables method, the first and third equations are better suited for direct integration.  True-or-False   The differential equation, , is separable    We can show it is separable by rewriting it as         Click-Answer   Click on each of the separable differential equations below.                                 Remember, a differential equation is separable if you can express it as a product of functions of and separately. Look for equations where the variables are separated by multiplication, not addition or other operations.        Showing An Equation is Separable  Separable equations are often not presented in a separable form . In such cases, you'll need to rewrite the equation to verify it's separable. This process typically involves two main steps:    Isolate the derivative on one side of the equation ,    Then form the product on the other side of the equation . Common algebra techniques to achieve this product include:  Factoring out common terms:  Exponential sums to products :  Rearranging fractions: and        To illustrate this, consider the equation   Here, we isolate and factor out : which shows the differential equation is separable .   Isolate & Rearrange the Fraction   Show that the differential equation is separable.     Since the variables in this equation are and , the separable form will look like .  To get there, we isolate first:   Now, we split the fraction so that and can be separated: So, the equation is separable .     Splitting an Exponential   Show that the differential equation is separable. .    Isolating the derivative and applying leads to the separable form:     Select the Separable Form   How can the equation, below, be rewritten in separable form?       None of the above.    Correct! This equation is not separable, so it is impossible to write it in separable form.           Incorrect. This rewriting does not separate the variables effectively.           Incorrect. This form still combines and terms in a way that is not separable.           Correct! This form separates the variables, making it possible to identify whether the equation is separable.      Flexing Algebra Skills   Show the differential equation is separable.     This example uses a little of everything we discussed, so strap in.  Noticing that the equation is first-order, we start by isolating    Next, we can rewrite the exponent in the numerator as a product and recognize that there is a common factor in the numerator .  From here, we write the result as a product of fractions, , and the equation is now clearly separable .     Drag-N-Drop   Suppose you want to show that the differential equation, below, is separable. .  Match the scrambled tasks (on the left) to the task order (on the right) that it should be performed to show it is separable.     Check that the equation is first-order.               Drag-N-Drop   Suppose you want to show that the differential equation, below, is separable. .  Match the scrambled tasks (on the left) to the task order (on the right) that it should be performed to show it is separable.                                          Matching-Question   Match the technique needed to show each equation is separable.  Drag the technique, on the left, to the equation, on the right.    Review it                                                                   As important as it is to show an equation is separable, it is equally important to identify when it is not.  Non-Separable Equations   Show the differential equations are NOT separable.     The first equation is a bit of a trick question to remind you of the first-order requirement of a separable equation. Since this equation is second-order, separability does not apply .  This equation is first-order, but it is not separable. To see this, we can rearrange the equation to isolate the derivative: . Since there is no common factor of or in the numerator, the variables cannot be separated and the equation is not separable.        Click-Answer   Click on each of the separable differential equations below.                                                A differential equation is separable if you can rearrange it to express it as a product of functions involving only and separately. Look for equations that can be manipulated into this form, even if they do not initially appear separable.       Learning to recognize when an equation is separable is the first and most important step in applying the method of separation of variables. In the next section, we'll see how this recognition leads to actual solutions.  "
},
{
  "id": "separable",
  "level": "2",
  "url": "separable-des.html#separable",
  "type": "📙 Definition",
  "number": "51",
  "title": "Separable Form.",
  "body": "Separable Form   A first-order differential equation is separable if it can be written in following separable form  .   "
},
{
  "id": "separable-des-cyu-1",
  "level": "2",
  "url": "separable-des.html#separable-des-cyu-1",
  "type": "🤔💭 Check Your Understanding",
  "number": "52",
  "title": "",
  "body": "   Click-Answer   Click on each of the separable differential equations below.                                 Remember, a differential equation is separable if you can express it as a product of functions of and separately. Look for equations where the variables are separated by multiplication, not addition or other operations.      "
},
{
  "id": "showing-separable-forms-2",
  "level": "2",
  "url": "separable-des.html#showing-separable-forms-2",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Isolate the derivative "
},
{
  "id": "example-show-separable-1",
  "level": "2",
  "url": "separable-des.html#example-show-separable-1",
  "type": "🌌 Example",
  "number": "53",
  "title": "Isolate <span class=\"process-math\">\\(dP\/dt\\)<\/span> &amp; Rearrange the Fraction.",
  "body": " Isolate & Rearrange the Fraction   Show that the differential equation is separable.     Since the variables in this equation are and , the separable form will look like .  To get there, we isolate first:   Now, we split the fraction so that and can be separated: So, the equation is separable .   "
},
{
  "id": "example-show-separable-22",
  "level": "2",
  "url": "separable-des.html#example-show-separable-22",
  "type": "🌌 Example",
  "number": "54",
  "title": "Splitting an Exponential.",
  "body": " Splitting an Exponential   Show that the differential equation is separable. .    Isolating the derivative and applying leads to the separable form:    "
},
{
  "id": "example-show-separable-4",
  "level": "2",
  "url": "separable-des.html#example-show-separable-4",
  "type": "🌌 Example",
  "number": "55",
  "title": "Flexing Algebra Skills.",
  "body": "Flexing Algebra Skills   Show the differential equation is separable.     This example uses a little of everything we discussed, so strap in.  Noticing that the equation is first-order, we start by isolating    Next, we can rewrite the exponent in the numerator as a product and recognize that there is a common factor in the numerator .  From here, we write the result as a product of fractions, , and the equation is now clearly separable .   "
},
{
  "id": "example-show-separable-2",
  "level": "2",
  "url": "separable-des.html#example-show-separable-2",
  "type": "🌌 Example",
  "number": "56",
  "title": "Non-Separable Equations.",
  "body": "Non-Separable Equations   Show the differential equations are NOT separable.     The first equation is a bit of a trick question to remind you of the first-order requirement of a separable equation. Since this equation is second-order, separability does not apply .  This equation is first-order, but it is not separable. To see this, we can rearrange the equation to isolate the derivative: . Since there is no common factor of or in the numerator, the variables cannot be separated and the equation is not separable.   "
},
{
  "id": "separable-des-cyu-2",
  "level": "2",
  "url": "separable-des.html#separable-des-cyu-2",
  "type": "🤔💭 Check Your Understanding",
  "number": "57",
  "title": "",
  "body": "   Click-Answer   Click on each of the separable differential equations below.                                                A differential equation is separable if you can rearrange it to express it as a product of functions involving only and separately. Look for equations that can be manipulated into this form, even if they do not initially appear separable.      "
},
{
  "id": "sec-sov-method",
  "level": "1",
  "url": "sec-sov-method.html",
  "type": "Section",
  "number": "",
  "title": "Separation of Variables (SOV) Method",
  "body": " Separation of Variables (SOV) Method   When a differential equation is both first-order and separable , we can reliably find its general solution using the separation of variables method. At its core, this technique involves rewriting the equation so that all terms are grouped on one side and all terms on the other. Once separated, integrating both sides reveals the general solution that needs a bit of clean-up.  The primary challenge in applying this method is often the algebraic steps before and after the integration. First, to get the equation separable form and then isolating the dependent variable down to a clean solution.  This section lays out the general steps of the method and provides several examples to help you master the process, as well as the algebraic and calculus skills that go with it.    Separation of Variable Method Steps  Once you've verified that an equation is separable, solving it becomes a systematic process. Here's the step-by-step outline to follow:   Steps for Using Separation of Variables   Step 1: Verify Separability  (i) Check that your equation is first-order and (ii) can be rearranged into the form    Step 2: Separate and Integrate  (i) Rearrange so that all terms are on one side (with ) and terms are on the other (with ), then (ii) integrate:   (iii) Compute the integrals on both sides.   Step 3: Solve for  If possible, explicitly solve the resulting equation for . If not, leave the solution in implicit form. Remember to combine integration constants when appropriate.       🤔💭 When Does SOV Apply?   Which two properties must a differential equation satisfy in order to solve it using the separation of variables method?      The equation must be linear and separable.    Incorrect. Separable is required, but the equation does not need to be linear.      The equation must be first-order and linear.    Incorrect. First-order is required, but the equation does not need to be linear for the separation of variables method to be applied.      The equation must be second-order and separable.    Incorrect. Separable is required, but the equation cannot be second-order for the separation of variables method to be applied.      The equation must be first-order and separable.    Correct! The separation of variables method applies only to first-order differential equations thatare separable.       🤔💭 Place the SOV Tasks in the Correct Order   Place the tasks in the order that they should be performed to find the general solution using separation of variables.  Drag each task on the left to the correct step order on the right.    Review the SOV Method .     Check the DE is first-order  Step 1 (i)    Write DE in separable form:  Step 1 (ii)      Step 2 (i)     Step 2 (ii)    Compute &  Step 2 (iii)    If possible, solve for & combine constants along the way  Step 3      A common practice when using separation of variables is to treat like a fraction, moving and around as if they separate objects. Although not strictly rigorous, this practice is often justified and consistently leads to valid results.  Specifically, when we present the separated integrals in Step 2 as , where it appears as though we integrate one side with respect to and the other with respect to . But more accurately, we are integrating both sides with respect to , using the substitution .  To see this clearly, start from the separable form: Divide both sides by to obtain: Integrating both sides with respect to gives: This justifies the informal integration with respect to different variables.   🤔💭 Integrating Both Sides   Part of the separation of variables method involves integrating each side of the equation with respect to a different variable.    This is false. Although it looks like this is true in SOV: Step 2 , both sides are actually integrated with respect to the same variable, or whatever the independent variable happens to be in the context of the problem.      Basic Examples  Let's begin with a few warm-up problems to build confidence in using separation of variables. The examples that follow are intentionally straightforward, each equation is either already separable or requires minimal algebraic manipulation. As you work through them, keep your focus on identifying the separable form, carefully separating variables, integrating both sides, and explicitly solving for when possible.   🤔💭 Review Separability   Which of the following differential equations are separable?       Is this the product of a function of and ?       Note: .       Moving over you get . Can a sum like this be converted into the form ?       Note, this is a second-order differential equation...       Warm-Up: Basic Separable Equations   Find the general solution to each of the following differential equations using the separation of variables method.     We'll first solve equations (1) and (2) side-by-side to clearly demonstrate each step of the separation of variables method .            Step 1 – Verify separability:            Step 2 – Separate and integrate:            Step 3 – Solve for and combine constants:              Step 1 – Rewrite clearly:   Check separability explicitly:    Step 2 – Separate variables and integrate:    Step 3 – Combine constants and solve explicitly for :        Initial-Value Problems  After finding a general solution to a separable equation, you often need to use an initial condition to identify a specific, or particular , solution. The next example demonstrates clearly how initial conditions help determine the integration constant after applying separation of variables.   Finding a Particular Solution   Find the particular solution to the initial-value problem     This differential equation is first order and separable since So separation of variables applies.    Separate     Integrate       So, the general solution is .  Substituting, , into the general solution, we get   Therefore, the solution to the intial-valued problem is   Be cautious about rewriting constants in decimal form. For instance, if you approximate , the solution becomes: which may not exactly satisfy the original initial condition due to rounding errors. It's usually better to leave constants in exact form.      Implicit Solutions  Sometimes, after integration, it may not be possible or practical to isolate explicitly. Solutions presented in such forms are known as implicit solutions . Although they don't isolate one variable completely, implicit solutions still provide a complete description of the relationship between variables. Let's look at a few examples demonstrating how to handle these situations clearly.   An Implicit Solution   Solve the initial-value problem     Notice the equation already separates naturally once we factor out : .    Separate variables     Integrate       Combine constants   The general implicit solution is:   Although we can't isolate neatly, we can still find the particular constant using the initial condition . Substitute and :   Thus, the particular implicit solution is:      in the Solution   Using separation of variables, solve the differential equation  .   The given equation is clearly separable, as we can rewrite it in product form:     Separate variables     Integrate       Combine constants   This yields the implicit general solution:   Before explicitly solving for , it's simpler to use the initial condition to find the constant first:   Thus, the implicit particular solution is:   Solving explicitly for , we introduce a :   To determine the correct sign, apply the initial condition again: Since we know , the solution must take the negative branch:      🤔💭 Select the Implicit Solutions    Let be a function of the independent variable, , and is an integration constant. If each expression below is a general solution to some DE, Click on the implicit solutions .                            Absolute Values in General Solutions   🤔💭 Solutions to an Equation with an Absolute Value   Select the solutions to the equation .      If you plug into the equation, do you get a true statement?     If you plug into the equation, do you get a true statement?     If you plug into the equation, do you get a true statement?     If you plug into the equation, do you get a true statement?     If you plug into the equation, do you get a true statement?     When solving differential equations, it's common to encounter absolute values, particularly when integrating expressions involving the natural logarithm. For instance, you might arrive at a step like:   To isolate fully, you need to carefully address the absolute value. This is typically handled by rewriting the equation as: But why introduce the ? Think about a simpler example: Clearly, this equation has two possible solutions: and . The same logic gives the possible solutions to equation : We use as a shorthand in equation to represent both solutions.   Absolute Value from Algebra   Find the general solution to the differential equation     Start by checking that the equation is separable. First, simplify the given equation: Now, we apply the separation of variables method.    Separate variables         Integrate       Isolate up to   Here is where we resolve the absolute value by converting it to , then absorbing the into the integration constant. This is ok since multiplying a constant by just creates another constant.       Introduce  & absorb it into    We are now ready to solve explicitly for :       Isolate &  combine  constants       The separation of variables method is a flexible and powerful tool for solving a wide range of differential equations, including nonlinear ones. As you've seen, the method is systematic: separate, integrate, and isolate. While the mechanics of the method are straightforward, the complexity often lies in the algebraic manipulation and integration.    Answer the following questions:  🤔💭 SOV and Nonlinear Equations   The separation of variables method cannot be applied to non-linear differential equations.    Being able to solve non-linear differential equations is one of the strengths of the separation of variables method.     🤔💭 Sort the Steps in Order   CONVERT TO PARSONS.. Suppose you want to use separation of variables method to determine the general solution of the differential equation .  Match the scrambled tasks (on the left) to the task order (on the right) that it should be performed to use this method.    Review the SOV Method .      Equation is 1st-order ✅                                                                        🤔💭 Combining Constants   Which of the following are valid ways to combine constants when finalizing your solution? Select ALL that apply.      where .   Correct, since       where .   Correct, since       where .   Incorrect, you should not combine constants here since .  Your solution should be written as       where .   Incorrect, you should not combine constants here since .  Your solution should be       where .   Incorrect, you should not combine constants here since is not constant. Instead your solution should be left as       where .   Correct, since          "
},
{
  "id": "sov-method",
  "level": "2",
  "url": "sec-sov-method.html#sov-method",
  "type": "✍🏻 Method",
  "number": "2",
  "title": "Steps for Using Separation of Variables.",
  "body": " Steps for Using Separation of Variables   Step 1: Verify Separability  (i) Check that your equation is first-order and (ii) can be rearranged into the form    Step 2: Separate and Integrate  (i) Rearrange so that all terms are on one side (with ) and terms are on the other (with ), then (ii) integrate:   (iii) Compute the integrals on both sides.   Step 3: Solve for  If possible, explicitly solve the resulting equation for . If not, leave the solution in implicit form. Remember to combine integration constants when appropriate.    "
},
{
  "id": "sov-method-basic-examples",
  "level": "2",
  "url": "sec-sov-method.html#sov-method-basic-examples",
  "type": "🌌 Example",
  "number": "58",
  "title": "Warm-Up: Basic Separable Equations.",
  "body": " Warm-Up: Basic Separable Equations   Find the general solution to each of the following differential equations using the separation of variables method.     We'll first solve equations (1) and (2) side-by-side to clearly demonstrate each step of the separation of variables method .            Step 1 – Verify separability:            Step 2 – Separate and integrate:            Step 3 – Solve for and combine constants:              Step 1 – Rewrite clearly:   Check separability explicitly:    Step 2 – Separate variables and integrate:    Step 3 – Combine constants and solve explicitly for :     "
},
{
  "id": "sov-method-initial-value-problem",
  "level": "2",
  "url": "sec-sov-method.html#sov-method-initial-value-problem",
  "type": "🌌 Example",
  "number": "59",
  "title": "Finding a Particular Solution.",
  "body": " Finding a Particular Solution   Find the particular solution to the initial-value problem     This differential equation is first order and separable since So separation of variables applies.    Separate     Integrate       So, the general solution is .  Substituting, , into the general solution, we get   Therefore, the solution to the intial-valued problem is   Be cautious about rewriting constants in decimal form. For instance, if you approximate , the solution becomes: which may not exactly satisfy the original initial condition due to rounding errors. It's usually better to leave constants in exact form.   "
},
{
  "id": "sov-method-implicit-solution",
  "level": "2",
  "url": "sec-sov-method.html#sov-method-implicit-solution",
  "type": "🌌 Example",
  "number": "60",
  "title": "An Implicit Solution.",
  "body": " An Implicit Solution   Solve the initial-value problem     Notice the equation already separates naturally once we factor out : .    Separate variables     Integrate       Combine constants   The general implicit solution is:   Although we can't isolate neatly, we can still find the particular constant using the initial condition . Substitute and :   Thus, the particular implicit solution is:    "
},
{
  "id": "implicit-solution-with-initial-condition",
  "level": "2",
  "url": "sec-sov-method.html#implicit-solution-with-initial-condition",
  "type": "🌌 Example",
  "number": "61",
  "title": "“<span class=\"process-math\">\\(\\pm\\)<\/span>” in the Solution.",
  "body": " in the Solution   Using separation of variables, solve the differential equation  .   The given equation is clearly separable, as we can rewrite it in product form:     Separate variables     Integrate       Combine constants   This yields the implicit general solution:   Before explicitly solving for , it's simpler to use the initial condition to find the constant first:   Thus, the implicit particular solution is:   Solving explicitly for , we introduce a :   To determine the correct sign, apply the initial condition again: Since we know , the solution must take the negative branch:    "
},
{
  "id": "sov-method-examples-absolute-values-5",
  "level": "2",
  "url": "sec-sov-method.html#sov-method-examples-absolute-values-5",
  "type": "🌌 Example",
  "number": "62",
  "title": "Absolute Value from Algebra.",
  "body": " Absolute Value from Algebra   Find the general solution to the differential equation     Start by checking that the equation is separable. First, simplify the given equation: Now, we apply the separation of variables method.    Separate variables         Integrate       Isolate up to   Here is where we resolve the absolute value by converting it to , then absorbing the into the integration constant. This is ok since multiplying a constant by just creates another constant.       Introduce  & absorb it into    We are now ready to solve explicitly for :       Isolate &  combine  constants     "
},
{
  "id": "sov-method-cyu",
  "level": "2",
  "url": "sec-sov-method.html#sov-method-cyu",
  "type": "🤔💭 Check Your Understanding",
  "number": "63",
  "title": "",
  "body": "  Answer the following questions:  🤔💭 SOV and Nonlinear Equations   The separation of variables method cannot be applied to non-linear differential equations.    Being able to solve non-linear differential equations is one of the strengths of the separation of variables method.     🤔💭 Sort the Steps in Order   CONVERT TO PARSONS.. Suppose you want to use separation of variables method to determine the general solution of the differential equation .  Match the scrambled tasks (on the left) to the task order (on the right) that it should be performed to use this method.    Review the SOV Method .      Equation is 1st-order ✅                                                                        🤔💭 Combining Constants   Which of the following are valid ways to combine constants when finalizing your solution? Select ALL that apply.      where .   Correct, since       where .   Correct, since       where .   Incorrect, you should not combine constants here since .  Your solution should be written as       where .   Incorrect, you should not combine constants here since .  Your solution should be       where .   Incorrect, you should not combine constants here since is not constant. Instead your solution should be left as       where .   Correct, since         "
},
{
  "id": "separable-variables-method-5",
  "level": "1",
  "url": "separable-variables-method-5.html",
  "type": "Section",
  "number": "",
  "title": "Chapter 3 Exercises",
  "body": " Chapter 3 Exercises   ᯓ★❓Quick-Answer Questions    True-False   👍👎   Every first-order ordinary differential equation can be solved using the method of separation of variables.    False. Only first-order ordinary differential equation that are separable can be solved using the method of separation of variables.     👍👎   If a differential equation is separable, its solution will always be an explicit function of .    False. The solution to a separable differential equation is sometimes implicit function of the independent variable.     👍👎   The method of separation of variables can be applied to some second order differential equations, but not all of them.    False. The method of separation of variables is only applicable to first-order separable differential equations.     👍👎   Any differential equation that can be written in the form , is separable.    True. Any differential equation that can be written in the form can also be rewritten in the separable form .     👍👎   The differential equation, below, is separable .    The correct answer is:  A. It is always separable.  This differential equation is the same as , which shows that the equation is separable since the function of can be constant.   The equation is separable because it is first-order and can be written in the separable form .     👍👎   The differential equation, below, is separable .     The equation is separable because it is first-order and can be written in the separable form .     👍👎   The differential equation, below, is separable .     The equation is separable because it is first-order and can be written in the separable form      👍👎   The differential equation, below, is separable .     The equation is separable because it is first-order and can be written in the separable form      👍👎   The differential equation, , can be solved using the separation of variables method.    The differential equation is first order, but it is equivalent to , which can not be written in the form .    Check to see that the differential equation is first order and separable.     👍👎   The differential equation, , can be solved using the separation of variables method.    The differential equation is not first order, so it is not separable and cannot be solved using the separation of variables method.    Check to see that the differential equation is first order and separable.      Additional Practice   Initial Step   What is the first step to verify the differential equation below is separable?       Integrating both sides with respect to .    Incorrect. Integration should come after the equation is verified to be separable.      Check to make sure the equation is first order.    Correct! The first step to verify the equation is separable is to make sure it is first order.      Combine the fractions on the left-side of the equation.    Incorrect. First of all, is not a fraction. Even if it was this would not be the first step to verify separability.      Isolate on one side of the equation.    Incorrect. Isolating is required to verify the equation is separable, but there is one other detail to check first.       ᯓ★❓Select the Separable Equations   Click on each of the separable differential equations below.                                      A differential equation is separable if you can rearrange it to express it as a product of functions involving only and separately. Look for equations that can be manipulated into this form, even if they do not initially appear separable.     ᯓ★❓When is it Separable?   What can you say about any differential equation that can be written in the form ?      It is always separable.      It is never separable.      It might be separable, depending on .      It is not a valid equation because it does have a term.       ᯓ★❓Explicit or Implicit?   Which of the following equations represent an implicit solution to a differential equation?   Assume is the dependent variable and is the independent variable.       No, this is an explicit solution since is written as a function of .     Correct. You can't isolate without solving a nonlinear equation, so this is an implicit solution.     Yes, this matches the example you just saw and defines only implicitly.     No, this is an explicit expression for as a function of .       Short-Answer Questions   🤔💭 Not Separable   Give an example of a differential equation that is not separable.     An example of a differential equation that is not separable is . This equation is not separable because the terms involving and are not easily separable onto different sides of the equation. In this case, the method of separation of variables cannot be applied because the terms involving and are not easily separable.     🤔💭 Where Does Separation of Variables Come From?   Explain why you think separation of variables is an appropriate name for the method in this chapter.     The method of separation of variables is named as such because it involves isolating all terms involving to one side and all terms involving to the other. This effectively separates the variables and onto different sides of the equation, allowing for the integration of each side independently. The name \"separation of variables\" reflects the process of isolating the variables onto different sides of the equation.     🤔💭 What Could go Wrong?   Ignoring the fact that the following equation is not separable, suppose we applied the separation of variables process to . What breaks down leading up to the divide & integrate step ?     The next step in the process says to divide both sides by the function of . In our case, this is , so we would get . Now, multiplying both sides by and integrating would yield . The integral on the left side is fine, but the integral on the right side is where the process breaks down since the integral wants to integrate with respect to . Therefore, you are stuck unless you knew as a function of . However, if this were the case, you would have already solved the problem!     🤔💭 Implicit vs. Explicit   Some differential equations solved using separation of variables yield explicit solutions, while others yield implicit solutions. Give your interpretation of the difference between an implicit and explicit solution. Provide an example of an implicitly and explicitly defined function.     An implicit solution is one where the relationship between and is not explicitly defined. For example, the solution is an implicit solution. An explicit solution, on the other hand, is one where is defined explicitly as a function of . For example, the solution is an explicit solution.     🤔💭 Thinking in Cases   All first order linear differential equations with dependent variable, , can be written in the form where and are known functions of . What must be true about and for a first-order linear differential equation to be separable?   Make some general assumptions about and and think about how you could break this question into different cases about what and could be to guarantee separability.      Attempting to isolate the derivative on the left, we get: Since, and can only contain the variable or constants, then this form is only separable in the following cases:  Both and are constant. Then    and is anything. Then    is anything and . Then       Attempting to isolate the derivative on the left, we get: Since, and can only contain the variable or constants, then this form is only separable in the following cases:  Both and are constant. Then    and is anything. Then    is anything and . Then           🏗️ Warm-ups & Drills   Verify the solution   Verify that is a solution to the initial value problem then find the paticular solution.       Now, let's find with the initial condition :   So the (approximate) particular solution is:      Show the differential equations is separable        To see that this equation is separable, we need to check that it can be rearranged in separable form . Isolating we get and it should be clear that there is no way to separate and by multiplication in the numerator, so this equation is not separable .    Separable Form   Determine whether the given differential equation is separable or not. As demonstrated in the examples, if the equation is separable, use parentheses to explicitly show the separable form.      not separable; there's no way to separate th an inside the sine term.     not separable      This doesn't look separable; but if we use a property of logarithms we can re-write as follows. Hence, this DE is separable .     separable       We can rearrange as follows. Hence, this DE is separable .     separable       We can rearrange as follows. Hence, this DE is separable .     separable        not separable; there's no way to separate and via multiplication\/division     not separable       not separable; this DE is second order, and DEs must be first order to be separable     not separable       Solve the Differential Equations (Step-By-Step)   Solve each of the following differential equations using the separation of variables method. Press Activate to submit your answers and get instant feedback.    Determine the Separable Form   Write each differential equation in the separable form .   Type your answer for into the left box and into the right box.                                                             Move the term to the right and factor out .     Isolate the derivative and group the terms as shown below.     We isolate the derivative and group the terms as shown below. .        Reorder the Steps   Reorder the steps required to solve the differential equation, , using the separation of variables method.    Check for 1st-order.                        Step-By-Step Initial-Valued Problem   Use separation of variables to solve the initial value problem  .     Select the variable that you are solving for:            Select the order of the equation:                    Select the correct separable form:                           Select the next step following the correct answer to (c).                       Select the result after integrating correct answer to (d).                       Select the correct general solution.                       Select the correct particular solution.                             Step 1: Verify Separability. Give the order and separable form:                              Step 2: Separate and Integrate. Divide both sides of the separable form by and apply the integral to both sides:                 Now, compute the integrals (we have provided the constants):               Don t forget the absolute value on the left antiderivative.  Step 3: Solve for . Combine constants as far as possible and use for the final combined constant.                                                        Use the property to obtain the final combined constant.        Step 1: Verify Separability. Give the order and separable form:                              Step 2: Separate and Integrate. Divide both sides of the separable form by and apply the integral to both sides:                 Now, compute the integrals (we have provided the constants):               Don t forget the absolute value on the left antiderivative.  Step 3: Solve for . Combine constants as far as possible and use for the final combined constant.                                                        Use the property to obtain the final combined constant.        Step 1: Verify Separability. Give the order and separable form:                              Step 2: Separate and Integrate. Divide both sides of the separable form by and apply the integral to both sides:                 Now, compute the integrals (we have provided the constants):               Don t forget the absolute value on the left antiderivative.  Step 3: Solve for . Combine constants as far as possible and use for the final combined constant.                                                        Use the property to obtain the final combined constant.       ✍🏻 Solve the Differential Equations  Level 1   Solve using separation of variables, if possible.              This equation is not obviously separable as written, so we begin by solving for : This is now in separable form.  We now separate and integrate: Multiplying through and isolating gives the general solution:                                  Level 2   Solve using separation of variables, if possible.                                  Note: since, in general , we CANNOT simplify the solution to                            For the integral on the left hand side, we will need to do a substitution. If we le the and therefor Then we have the following:              When we separate the variables and integrate both sides, we get  Since the equation cannot readily be solved for as an explicit function of , we are done.            Separation of variables gives:           Initial Value Problems   Solve each of the following initial value problems using separation of variables, if possible.      Informally, we divide both side of the differential equation by and multiply each side by to get      and hence The condition yields , so the desired solution is             First we find the general solution: Using the initial condition : So the solution to the initial value problem is:             First we find the general solution: Then we use the initial conditio . Hence, the solution i , or .     , or        First we find the general solution: Then we use the initial conditio . Hence, the solution i , or .     , or      Nested Differential Equations   Find a non-zero function that satisfies each of the following differential equations.   For each equation, expand the derivative on the left side using the product rule. Then use algebra to find another differential equation nested within the original one.       We want to find a non-zero function such that Applying the product rule to the left side of this equation gives Subtracting from both sides gives , which implies that This is a separable differential equation that we can solve with separation of variables: But, is just a constant, so we can write this as Since the question asks for a non-zero function, we can take . Thus, satisfies the given differential equation.       We want to find a non-zero function such that Applying the product rule to the left side of this equation gives Subtracting from both sides gives , which implies that This is a separable differential equation that we can solve with separation of variables: But, is just a constant, so we can write this as Since the question asks for a non-zero function, we can take . Thus, satisfies the given differential equation.     ( is some function of )   We want to find a non-zero function such that Applying the product rule to the left side of this equation gives Subtracting from both sides gives , which implies that This is a separable differential equation that we can solve with separation of variables: But, is just a constant, so we can write this as Since the question asks for a non-zero function, we can take . Thus, satisfies the given differential equation.     Applications   Cooking Temperature  A 4-lb roast, initially at , is placed in a oven at 5:00 PM After 75 minutes it is found that the temperature of the roast is F. When will the roast be (medium rate)?   We take time in minutes, with corresponding to 5:00 PM We also assume (somewhat unrealistically) that at any instant the temperature of the roast is uniform throughout. We have , , and . Hence Now , implies that , so . We also know that when . Substitution of these values in the preceding equation yields Hence we finally solve the equation for (min), the total cooking time required.Because the roast was placed in the oven at 5:00 PM, it it should be removed at about 6:45 PM           "
},
{
  "id": "c3-quick-answer-2",
  "level": "2",
  "url": "separable-variables-method-5.html#c3-quick-answer-2",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "separable first-order implicit "
},
{
  "id": "separable-variables-method-5-3-2",
  "level": "2",
  "url": "separable-variables-method-5.html#separable-variables-method-5-3-2",
  "type": "Exercise",
  "number": "1",
  "title": "Verify the solution.",
  "body": " Verify the solution   Verify that is a solution to the initial value problem then find the paticular solution.       Now, let's find with the initial condition :   So the (approximate) particular solution is:    "
},
{
  "id": "separable-variables-method-5-3-3",
  "level": "2",
  "url": "separable-variables-method-5.html#separable-variables-method-5-3-3",
  "type": "Exercise",
  "number": "2",
  "title": "Show the differential equations is separable.",
  "body": " Show the differential equations is separable        To see that this equation is separable, we need to check that it can be rearranged in separable form . Isolating we get and it should be clear that there is no way to separate and by multiplication in the numerator, so this equation is not separable .   "
},
{
  "id": "separable-variables-method-5-3-4-3",
  "level": "2",
  "url": "separable-variables-method-5.html#separable-variables-method-5-3-4-3",
  "type": "Exercise",
  "number": "3",
  "title": "",
  "body": "   not separable; there's no way to separate th an inside the sine term.     not separable   "
},
{
  "id": "separable-variables-method-5-3-4-4",
  "level": "2",
  "url": "separable-variables-method-5.html#separable-variables-method-5-3-4-4",
  "type": "Exercise",
  "number": "4",
  "title": "",
  "body": "  This doesn't look separable; but if we use a property of logarithms we can re-write as follows. Hence, this DE is separable .     separable    "
},
{
  "id": "separable-variables-method-5-3-4-5",
  "level": "2",
  "url": "separable-variables-method-5.html#separable-variables-method-5-3-4-5",
  "type": "Exercise",
  "number": "5",
  "title": "",
  "body": "  We can rearrange as follows. Hence, this DE is separable .     separable    "
},
{
  "id": "separable-variables-method-5-3-4-6",
  "level": "2",
  "url": "separable-variables-method-5.html#separable-variables-method-5-3-4-6",
  "type": "Exercise",
  "number": "6",
  "title": "",
  "body": "  We can rearrange as follows. Hence, this DE is separable .     separable    "
},
{
  "id": "separable-variables-method-5-3-4-7",
  "level": "2",
  "url": "separable-variables-method-5.html#separable-variables-method-5-3-4-7",
  "type": "Exercise",
  "number": "7",
  "title": "",
  "body": "   not separable; there's no way to separate and via multiplication\/division     not separable   "
},
{
  "id": "separable-variables-method-5-3-4-8",
  "level": "2",
  "url": "separable-variables-method-5.html#separable-variables-method-5-3-4-8",
  "type": "Exercise",
  "number": "8",
  "title": "",
  "body": "   not separable; this DE is second order, and DEs must be first order to be separable     not separable   "
},
{
  "id": "c3-warm-ups-ww-1",
  "level": "2",
  "url": "separable-variables-method-5.html#c3-warm-ups-ww-1",
  "type": "Reading Question",
  "number": "1",
  "title": "Determine the Separable Form.",
  "body": "Determine the Separable Form   Write each differential equation in the separable form .   Type your answer for into the left box and into the right box.                                                             Move the term to the right and factor out .     Isolate the derivative and group the terms as shown below.     We isolate the derivative and group the terms as shown below. .     "
},
{
  "id": "c3-warm-ups-ordering-1",
  "level": "2",
  "url": "separable-variables-method-5.html#c3-warm-ups-ordering-1",
  "type": "Reading Question",
  "number": "2",
  "title": "Reorder the Steps.",
  "body": "Reorder the Steps   Reorder the steps required to solve the differential equation, , using the separation of variables method.    Check for 1st-order.                     "
},
{
  "id": "c3-warm-ups-click-2",
  "level": "2",
  "url": "separable-variables-method-5.html#c3-warm-ups-click-2",
  "type": "Reading Question",
  "number": "3",
  "title": "Step-By-Step Initial-Valued Problem.",
  "body": "Step-By-Step Initial-Valued Problem   Use separation of variables to solve the initial value problem  .     Select the variable that you are solving for:            Select the order of the equation:                    Select the correct separable form:                           Select the next step following the correct answer to (c).                       Select the result after integrating correct answer to (d).                       Select the correct general solution.                       Select the correct particular solution.                        "
},
{
  "id": "c3-warm-ups-ww-2",
  "level": "2",
  "url": "separable-variables-method-5.html#c3-warm-ups-ww-2",
  "type": "Reading Question",
  "number": "4",
  "title": "<span class=\"process-math\">\\(\\ds y'= e^{2x} - 5x\\)<\/span>.",
  "body": "    Step 1: Verify Separability. Give the order and separable form:                              Step 2: Separate and Integrate. Divide both sides of the separable form by and apply the integral to both sides:                 Now, compute the integrals (we have provided the constants):               Don t forget the absolute value on the left antiderivative.  Step 3: Solve for . Combine constants as far as possible and use for the final combined constant.                                                        Use the property to obtain the final combined constant.   "
},
{
  "id": "c3-warm-ups-ww-3",
  "level": "2",
  "url": "separable-variables-method-5.html#c3-warm-ups-ww-3",
  "type": "Reading Question",
  "number": "5",
  "title": "<span class=\"process-math\">\\(\\dfrac{dy}{dx} = xy^2\\)<\/span>.",
  "body": "    Step 1: Verify Separability. Give the order and separable form:                              Step 2: Separate and Integrate. Divide both sides of the separable form by and apply the integral to both sides:                 Now, compute the integrals (we have provided the constants):               Don t forget the absolute value on the left antiderivative.  Step 3: Solve for . Combine constants as far as possible and use for the final combined constant.                                                        Use the property to obtain the final combined constant.   "
},
{
  "id": "c3-warm-ups-ww-4",
  "level": "2",
  "url": "separable-variables-method-5.html#c3-warm-ups-ww-4",
  "type": "Reading Question",
  "number": "6",
  "title": "<span class=\"process-math\">\\(\\ds\\frac{dy}{dx} - y\\cos(x) = y\\)<\/span>.",
  "body": "    Step 1: Verify Separability. Give the order and separable form:                              Step 2: Separate and Integrate. Divide both sides of the separable form by and apply the integral to both sides:                 Now, compute the integrals (we have provided the constants):               Don t forget the absolute value on the left antiderivative.  Step 3: Solve for . Combine constants as far as possible and use for the final combined constant.                                                        Use the property to obtain the final combined constant.   "
},
{
  "id": "separable-variables-method-5-5-2-3",
  "level": "2",
  "url": "separable-variables-method-5.html#separable-variables-method-5-5-2-3",
  "type": "Exercise",
  "number": "1",
  "title": "",
  "body": "       "
},
{
  "id": "separable-variables-method-5-5-2-4",
  "level": "2",
  "url": "separable-variables-method-5.html#separable-variables-method-5-5-2-4",
  "type": "Exercise",
  "number": "2",
  "title": "",
  "body": "   This equation is not obviously separable as written, so we begin by solving for : This is now in separable form.  We now separate and integrate: Multiplying through and isolating gives the general solution:     "
},
{
  "id": "separable-variables-method-5-5-2-5",
  "level": "2",
  "url": "separable-variables-method-5.html#separable-variables-method-5-5-2-5",
  "type": "Exercise",
  "number": "3",
  "title": "",
  "body": "  "
},
{
  "id": "separable-variables-method-5-5-2-6",
  "level": "2",
  "url": "separable-variables-method-5.html#separable-variables-method-5-5-2-6",
  "type": "Exercise",
  "number": "4",
  "title": "",
  "body": "  "
},
{
  "id": "separable-variables-method-5-5-2-7",
  "level": "2",
  "url": "separable-variables-method-5.html#separable-variables-method-5-5-2-7",
  "type": "Exercise",
  "number": "5",
  "title": "",
  "body": "  "
},
{
  "id": "separable-variables-method-5-5-2-8",
  "level": "2",
  "url": "separable-variables-method-5.html#separable-variables-method-5-5-2-8",
  "type": "Exercise",
  "number": "6",
  "title": "",
  "body": "  "
},
{
  "id": "separable-variables-method-5-5-2-9",
  "level": "2",
  "url": "separable-variables-method-5.html#separable-variables-method-5-5-2-9",
  "type": "Exercise",
  "number": "7",
  "title": "",
  "body": "  "
},
{
  "id": "separable-variables-method-5-5-2-10",
  "level": "2",
  "url": "separable-variables-method-5.html#separable-variables-method-5-5-2-10",
  "type": "Exercise",
  "number": "8",
  "title": "",
  "body": "  "
},
{
  "id": "separable-variables-method-5-5-2-11",
  "level": "2",
  "url": "separable-variables-method-5.html#separable-variables-method-5-5-2-11",
  "type": "Exercise",
  "number": "9",
  "title": "",
  "body": "  "
},
{
  "id": "separable-variables-method-5-5-2-12",
  "level": "2",
  "url": "separable-variables-method-5.html#separable-variables-method-5-5-2-12",
  "type": "Exercise",
  "number": "10",
  "title": "",
  "body": "  "
},
{
  "id": "separable-variables-method-5-5-2-13",
  "level": "2",
  "url": "separable-variables-method-5.html#separable-variables-method-5-5-2-13",
  "type": "Exercise",
  "number": "11",
  "title": "",
  "body": "  "
},
{
  "id": "separable-variables-method-5-5-3-3",
  "level": "2",
  "url": "separable-variables-method-5.html#separable-variables-method-5-5-3-3",
  "type": "Exercise",
  "number": "12",
  "title": "",
  "body": "            "
},
{
  "id": "separable-variables-method-5-5-3-4",
  "level": "2",
  "url": "separable-variables-method-5.html#separable-variables-method-5-5-3-4",
  "type": "Exercise",
  "number": "13",
  "title": "",
  "body": "            "
},
{
  "id": "separable-variables-method-5-5-3-5",
  "level": "2",
  "url": "separable-variables-method-5.html#separable-variables-method-5-5-3-5",
  "type": "Exercise",
  "number": "14",
  "title": "",
  "body": "     Note: since, in general , we CANNOT simplify the solution to          "
},
{
  "id": "separable-variables-method-5-5-3-6",
  "level": "2",
  "url": "separable-variables-method-5.html#separable-variables-method-5-5-3-6",
  "type": "Exercise",
  "number": "15",
  "title": "",
  "body": "            "
},
{
  "id": "separable-variables-method-5-5-3-7",
  "level": "2",
  "url": "separable-variables-method-5.html#separable-variables-method-5-5-3-7",
  "type": "Exercise",
  "number": "16",
  "title": "",
  "body": "    For the integral on the left hand side, we will need to do a substitution. If we le the and therefor Then we have the following:          "
},
{
  "id": "separable-variables-method-5-5-3-8",
  "level": "2",
  "url": "separable-variables-method-5.html#separable-variables-method-5-5-3-8",
  "type": "Exercise",
  "number": "17",
  "title": "",
  "body": "   When we separate the variables and integrate both sides, we get  Since the equation cannot readily be solved for as an explicit function of , we are done.        "
},
{
  "id": "separable-variables-method-5-5-3-9",
  "level": "2",
  "url": "separable-variables-method-5.html#separable-variables-method-5-5-3-9",
  "type": "Exercise",
  "number": "18",
  "title": "",
  "body": "   Separation of variables gives:         "
},
{
  "id": "separable-variables-method-5-5-4-3",
  "level": "2",
  "url": "separable-variables-method-5.html#separable-variables-method-5-5-4-3",
  "type": "Exercise",
  "number": "19",
  "title": "",
  "body": "   Informally, we divide both side of the differential equation by and multiply each side by to get      and hence The condition yields , so the desired solution is         "
},
{
  "id": "separable-variables-method-5-5-4-4",
  "level": "2",
  "url": "separable-variables-method-5.html#separable-variables-method-5-5-4-4",
  "type": "Exercise",
  "number": "20",
  "title": "",
  "body": "   First we find the general solution: Using the initial condition : So the solution to the initial value problem is:         "
},
{
  "id": "separable-variables-method-5-5-4-5",
  "level": "2",
  "url": "separable-variables-method-5.html#separable-variables-method-5-5-4-5",
  "type": "Exercise",
  "number": "21",
  "title": "",
  "body": "   First we find the general solution: Then we use the initial conditio . Hence, the solution i , or .     , or    "
},
{
  "id": "separable-variables-method-5-5-4-6",
  "level": "2",
  "url": "separable-variables-method-5.html#separable-variables-method-5-5-4-6",
  "type": "Exercise",
  "number": "22",
  "title": "",
  "body": "   First we find the general solution: Then we use the initial conditio . Hence, the solution i , or .     , or    "
},
{
  "id": "separable-variables-method-5-5-5-3",
  "level": "2",
  "url": "separable-variables-method-5.html#separable-variables-method-5-5-5-3",
  "type": "Exercise",
  "number": "23",
  "title": "",
  "body": "   We want to find a non-zero function such that Applying the product rule to the left side of this equation gives Subtracting from both sides gives , which implies that This is a separable differential equation that we can solve with separation of variables: But, is just a constant, so we can write this as Since the question asks for a non-zero function, we can take . Thus, satisfies the given differential equation.   "
},
{
  "id": "separable-variables-method-5-5-5-4",
  "level": "2",
  "url": "separable-variables-method-5.html#separable-variables-method-5-5-5-4",
  "type": "Exercise",
  "number": "24",
  "title": "",
  "body": "   We want to find a non-zero function such that Applying the product rule to the left side of this equation gives Subtracting from both sides gives , which implies that This is a separable differential equation that we can solve with separation of variables: But, is just a constant, so we can write this as Since the question asks for a non-zero function, we can take . Thus, satisfies the given differential equation.   "
},
{
  "id": "separable-variables-method-5-5-5-5",
  "level": "2",
  "url": "separable-variables-method-5.html#separable-variables-method-5-5-5-5",
  "type": "Exercise",
  "number": "25",
  "title": "",
  "body": " ( is some function of )   We want to find a non-zero function such that Applying the product rule to the left side of this equation gives Subtracting from both sides gives , which implies that This is a separable differential equation that we can solve with separation of variables: But, is just a constant, so we can write this as Since the question asks for a non-zero function, we can take . Thus, satisfies the given differential equation.   "
},
{
  "id": "separable-variables-method-5-5-6-2",
  "level": "2",
  "url": "separable-variables-method-5.html#separable-variables-method-5-5-6-2",
  "type": "Exercise",
  "number": "26",
  "title": "",
  "body": " Cooking Temperature  A 4-lb roast, initially at , is placed in a oven at 5:00 PM After 75 minutes it is found that the temperature of the roast is F. When will the roast be (medium rate)?   We take time in minutes, with corresponding to 5:00 PM We also assume (somewhat unrealistically) that at any instant the temperature of the roast is uniform throughout. We have , , and . Hence Now , implies that , so . We also know that when . Substitution of these values in the preceding equation yields Hence we finally solve the equation for (min), the total cooking time required.Because the roast was placed in the oven at 5:00 PM, it it should be removed at about 6:45 PM        "
},
{
  "id": "if-completing-derivative",
  "level": "1",
  "url": "if-completing-derivative.html",
  "type": "Section",
  "number": "",
  "title": "Completing the Product Rule",
  "body": " Completing the Product Rule   In algebra, a clever rearrangement of terms can make an equation easier to solve. For instance, consider the quadratic:   Factoring the left-hand side gives:   This grouping is helpful because taking the square root immediately reveals the solution.  Some first-order differential equations benefit from a similar idea. Instead of forming a single perfect square, we aim to group the left-hand side as a single derivative .  For example, take the equation:  . It can be rewritten as:  . Just like factoring helped earlier, this new form makes solving easier, only now we integrate instead of take square roots.  We'll call this process completing the product rule . It's based on reversing the product rule from calculus and serves as the foundation of the integrating factor method .    The Product Rule, A Quick Review  Before we reverse the product rule, let's make sure we remember how it works in the forward direction.  In calculus, the product rule tells us how to take the derivative of two multiplied functions. If and are differentiable, then  . To refresh your memory of how it works, try the following practice problems.   📖❓ Remembering the Product Rule   Compute each of the derivatives below. Assume is a function of .                Use y' for the derivative of in question 2.                  Using the product rule:              The Product Rule in Reverse  Now that we've recalled how the product rule works, let's try running it in reverse.  Suppose you're given the expression:  . Can this be written as the derivative of a product? That is, can you find functions and so that   Here's a tip: the product rule always combines four pieces, two functions and their derivatives. If you can spot and in the terms, the rest should fall into place. In this case, trying and works out perfectly.  Let's get some practice with this reverse thinking.   Basic Reverse Product Rule   Rewrite each expression as a derivative of a product:       First, select an and in different terms, like so   .  For this to work, should be , next to our chosen . However,   So this labeling doesn't work and we instead try the labels   .  Noting that is next to and is next to confirms this is a valid product rule. Therefore, we can reverse the product rule as  .   To make this easier, let's separate the terms as .  So, as before, we first set and   , then verify the derivatives of and are in the other terms,  . Therefore,  .     Let's now try expressions involving a variable function, like . These are the ones we'll actually encounter when solving differential equations.   Reversed Product Rule with a Variable   Rewrite each expression in the form .       Since and are in separate terms, setting to gives you and for free since  . The only thing you need to check is which is sitting right next to . Therefore, we have  .   Again, set to and the rest fall into place as  . The only thing left to do is verify the derivative of : .  So, we can reverse the product rule as  .      📖❓ What's Missing in the Product Rule   Fill in the missing parts of each product rule below.                                Correct!        Incorrect, try again.          Correct!        Incorrect, try again.          Correct!        Incorrect, expecting to see the independent variable .        Incorrect, use the natural log instead.        Incorrect, try again.          Correct!        Incorrect, don't forget the chain rule.          Correct!        Put in the other blank!        The variable should be a capitol .        Incorrect, try again.          Correct!        Put in the other blank!        Incorrect, try again.        While reversing the product rule isn't a standard technique, practicing it a few times helps build the intuition you'll need when working with integrating factors.     Completing the Product Rule: An Analogy and a Method  Completing the square is a classic strategy from algebra: by adding just the right constant, we can turn a messy quadratic into something easily solvable.  For example, to solve  , we complete the square by adding (since ) to both sides:  , which gives a perfect square:   and from here we solve by taking square roots. Simple and neat.   📖❓ Purpose of Adding   In the analogy, what role does the number play in the quadratic equation?      The missing piece that allows the quadratic expression to be rewritten as a perfect square.    Correct! The number 9 completes the square, making it factorable.      The solution to the quadratic equation.    Incorrect. The number 9 is introduced to complete the square, not as a solution.      The coefficient of the linear term.    Incorrect. The coefficient of the linear term in the quadratic equation is 6, not 9.      A randomly chosen constant added to balance the equation.    Incorrect. The number 9 is carefully selected to form a perfect square trinomial.      Now let's look at a differential equation that behaves almost exactly the same way:  . The left-hand side looks like it wants to be the result of a product rule. And it could be, if we multiply both sides by :  . That multiplication completes the product rule the same way adding completed the square. Now, the left-hand side is exactly:    📖❓ Purpose of Multiply   Why do we multiply both sides of by ?      To complete a product rule within this equation.    Correct! Multiplying by allows us to rewrite the left-hand side as a perfect derivative.      To eliminate the derivative term entirely.    Incorrect. The goal is not to eliminate the derivative, but to structure the equation so it can be integrated directly.      To make the right-hand side equal to zero.    Incorrect. The right-hand side is transformed, but it does not become zero.      It makes the equation linear.    Incorrect. The equation already linear. Moreover, multiplying by any function of will not change the equation's linearity.      And just like we took a square root to solve a completed square, here we integrate both sides to solve a completed product rule:   So what's the big idea here? Just as completing the square gives us a clean square to work with, completing the product rule gives us a clean product rule, one we can reverse and integrate.   Completing the Square vs Completing the Product Rule   Here's how the two processes line up:      Completing the Square  Completing the Product Rule   Goal  Solve for  Solve for  Equation     Missing Piece  (added)  (multiplied)    Completed Form      Grouped Form      Solution Step  Take square root  Integrate       This technique, multiplying by the right function to complete the product rule, is the heart of the integrating factor method . And it raises an important question:   How do we know what function to multiply by?   That's what we'll figure out in the next section.      🎧 Listen Completing the square transforms a quadratic into a perfect square to make it easier to solve.  A similar idea applies to differential equations: we can complete the product rule by multiplying both sides of the equation by a carefully chosen function.  This multiplication turns the left-hand side into the derivative of a product, making the equation easier to solve through direct integration.  Completing the product rule is conceptually similar to completing the square, both introduce a missing piece that simplifies the structure of the equation.  This technique is the core of the integrating factor method, which is used to solve first-order linear differential equations.  The big question now is: how do we systematically choose the right function to multiply by? That's the focus of the next section.      Answer the following questions:  Recognizing an Incomplete Product Rule   Why do we say the differential equation contains an incomplete product rule?      It lacks a function needed to reverse a product rule.    Correct! The equation is missing an essential function that would allow it to be rewritten using the product rule.      Because we haven't used the product rule yet.    Incorrect. The issue is not that the product rule hasn't been applied, but that the equation is not structured as a product rule.      It has a constant term of .    Incorrect. While the constant term is , the issue is related to the structure of the left-hand side.      It is not in standard form.    Incorrect. The equation actually is in standard form.       Equivalent Equations   The differential equation,   is equivalent to which of the following equations? Hint: use the forward product rule in the answer choices.          Incorrect. This equation does not account for the logarithmic term in the original differential equation.         Incorrect. This equation does not account for the logarithmic term in the original differential equation.         Correct! Applying the product rule to the left side of the equation yields the original differential equation.         Incorrect. This equation does not account for the logarithmic term in the original differential equation.       Goal of Completing the Product Rule   How does reversing the product rule help solve this equation? .     It groups terms on one side of the equation into a single derivative.  Correct! The product rule combines terms on the left side of the equation into a single derivative.    It computes the derivative of a product of two functions.  Incorrect. In this situation, the product rule is not used to take a derivative of a product of two functions.    It solves the differential equation directly.  Incorrect. The product rule can help solve some differential equations, but it does not solve them alone.    It allows it to be easily solved by direct integration.  Correct! Recognizing a perfect derivative lets us solve the equation by integration.    It converts a nonlinear equation into a linear one.  Incorrect. The equation is already linear; reversing the product rule does not change its nature.      Seeing the Pattern   Given that you can multiply the equation   by the function to transform it into   What function would you think to multiply onto the equation   to accomplish the same goal?           Incorrect. Review the example carefully.           Incorrect. Review the example carefully.           That's correct! Multiplying by will allow you to complete the product rule on the left side of the equation.           Incorrect. Review the example carefully.         "
},
{
  "id": "if-completing-derivative-2-6",
  "level": "2",
  "url": "if-completing-derivative.html#if-completing-derivative-2-6",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "first-order differential equations "
},
{
  "id": "if-completing-derivative-2-12",
  "level": "2",
  "url": "if-completing-derivative.html#if-completing-derivative-2-12",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "integrating factor method "
},
{
  "id": "product-rule-review-3",
  "level": "2",
  "url": "if-completing-derivative.html#product-rule-review-3",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "product rule "
},
{
  "id": "product-rule-in-reverse-9",
  "level": "2",
  "url": "if-completing-derivative.html#product-rule-in-reverse-9",
  "type": "🌌 Example",
  "number": "64",
  "title": "Basic Reverse Product Rule.",
  "body": " Basic Reverse Product Rule   Rewrite each expression as a derivative of a product:       First, select an and in different terms, like so   .  For this to work, should be , next to our chosen . However,   So this labeling doesn't work and we instead try the labels   .  Noting that is next to and is next to confirms this is a valid product rule. Therefore, we can reverse the product rule as  .   To make this easier, let's separate the terms as .  So, as before, we first set and   , then verify the derivatives of and are in the other terms,  . Therefore,  .    "
},
{
  "id": "reversed-product-rule-example",
  "level": "2",
  "url": "if-completing-derivative.html#reversed-product-rule-example",
  "type": "🌌 Example",
  "number": "65",
  "title": "Reversed Product Rule with a Variable.",
  "body": " Reversed Product Rule with a Variable   Rewrite each expression in the form .       Since and are in separate terms, setting to gives you and for free since  . The only thing you need to check is which is sitting right next to . Therefore, we have  .   Again, set to and the rest fall into place as  . The only thing left to do is verify the derivative of : .  So, we can reverse the product rule as  .    "
},
{
  "id": "analogy-summary",
  "level": "2",
  "url": "if-completing-derivative.html#analogy-summary",
  "type": "🗺️ Summary",
  "number": "66",
  "title": "Completing the Square vs Completing the Product Rule.",
  "body": " Completing the Square vs Completing the Product Rule   Here's how the two processes line up:      Completing the Square  Completing the Product Rule   Goal  Solve for  Solve for  Equation     Missing Piece  (added)  (multiplied)    Completed Form      Grouped Form      Solution Step  Take square root  Integrate      "
},
{
  "id": "completing-derivative-analogy-method-22",
  "level": "2",
  "url": "if-completing-derivative.html#completing-derivative-analogy-method-22",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "integrating factor method "
},
{
  "id": "if-completing-derivative-wrapup",
  "level": "2",
  "url": "if-completing-derivative.html#if-completing-derivative-wrapup",
  "type": "🗝️ Key Takeaways...",
  "number": "",
  "title": "",
  "body": "   🎧 Listen Completing the square transforms a quadratic into a perfect square to make it easier to solve.  A similar idea applies to differential equations: we can complete the product rule by multiplying both sides of the equation by a carefully chosen function.  This multiplication turns the left-hand side into the derivative of a product, making the equation easier to solve through direct integration.  Completing the product rule is conceptually similar to completing the square, both introduce a missing piece that simplifies the structure of the equation.  This technique is the core of the integrating factor method, which is used to solve first-order linear differential equations.  The big question now is: how do we systematically choose the right function to multiply by? That's the focus of the next section.   "
},
{
  "id": "if-completing-derivative-cyu",
  "level": "2",
  "url": "if-completing-derivative.html#if-completing-derivative-cyu",
  "type": "🤔💭 Check Your Understanding",
  "number": "67",
  "title": "",
  "body": "  Answer the following questions:  Recognizing an Incomplete Product Rule   Why do we say the differential equation contains an incomplete product rule?      It lacks a function needed to reverse a product rule.    Correct! The equation is missing an essential function that would allow it to be rewritten using the product rule.      Because we haven't used the product rule yet.    Incorrect. The issue is not that the product rule hasn't been applied, but that the equation is not structured as a product rule.      It has a constant term of .    Incorrect. While the constant term is , the issue is related to the structure of the left-hand side.      It is not in standard form.    Incorrect. The equation actually is in standard form.       Equivalent Equations   The differential equation,   is equivalent to which of the following equations? Hint: use the forward product rule in the answer choices.          Incorrect. This equation does not account for the logarithmic term in the original differential equation.         Incorrect. This equation does not account for the logarithmic term in the original differential equation.         Correct! Applying the product rule to the left side of the equation yields the original differential equation.         Incorrect. This equation does not account for the logarithmic term in the original differential equation.       Goal of Completing the Product Rule   How does reversing the product rule help solve this equation? .     It groups terms on one side of the equation into a single derivative.  Correct! The product rule combines terms on the left side of the equation into a single derivative.    It computes the derivative of a product of two functions.  Incorrect. In this situation, the product rule is not used to take a derivative of a product of two functions.    It solves the differential equation directly.  Incorrect. The product rule can help solve some differential equations, but it does not solve them alone.    It allows it to be easily solved by direct integration.  Correct! Recognizing a perfect derivative lets us solve the equation by integration.    It converts a nonlinear equation into a linear one.  Incorrect. The equation is already linear; reversing the product rule does not change its nature.      Seeing the Pattern   Given that you can multiply the equation   by the function to transform it into   What function would you think to multiply onto the equation   to accomplish the same goal?           Incorrect. Review the example carefully.           Incorrect. Review the example carefully.           That's correct! Multiplying by will allow you to complete the product rule on the left side of the equation.           Incorrect. Review the example carefully.        "
},
{
  "id": "if-integrating-factor",
  "level": "1",
  "url": "if-integrating-factor.html",
  "type": "Section",
  "number": "",
  "title": "The Integrating Factor",
  "body": " The Integrating Factor   In the last section, we explored how rewriting the left-hand side of a differential equation as a single derivative (i.e., completing the product rule ) made it easier to solve. But here's the catch: most equations aren't initially set-up for this.  For example, take the equation   As it is, it's not a complete product rule, but it can be if we multiply both sides by :  . Now, we can reverse product rule on the left, giving us  , which is just one integration away from the solution. The function, , that we multiplied onto the equation is known as the integrating factor . And the natural question is:   Where did come from? Can we always find such a function? How?  This section answers these questions and prepares you for next solution technique, the integrating factor method .    Finding the Right Function to Multiply  To figure out where came from, let's return to our example:   To complete the product rule, we need to multiply the equation by a function. We don't yet know what that function is, so let's call it and multiply both sides of the equation by it:   If completes a product rule on the left, then if should match the form . Setting the labels: , so , and looking for functions and that complete the pattern, we match as follows:  . This suggests that  , and taking the derivative of the first of these means we also have .  Setting the two versions of equal, an interesting equation emerges:  . That's a differential equation. And since it's separable, we know exactly how to solve it:  📌 Note  The absolute value disappears because any sign change is absorbed into the constant .   . When selecting an integrating factor, we are free to choose any nonzero value for . However, we usually choose to keep things simple, so, our integrating factor is:   This is the function we were looking for. It completes the product rule, allowing us to write the left-hand side of the equation as a single derivative and solve by integration.    📖❓ Integrating Factor Dependence   In the example above, we derived the integrating factor for the equation . Based on this derivation, select the correct ending to the statement:  Of the values in the equation, the integrating factor depends on .       only the value .   Correct! The integrating factor depends only on the coefficient of , which is .     only the value .   Incorrect. The integrating factor does not depend on the constant term , but rather on the coefficient of , which is .     both and .   Incorrect. The integrating factor does not depend on the constant term , but rather only on the coefficient of , which is .     neither nor .   Incorrect. The integrating factor does depend on the coefficient of , which is .       📖❓ Integrating Factor Equation   To solve the differential equation , you multiply both sides by the integrating factor, , to get Which separable differential equation do you solve to find ?      Correct!     Incorrect     Incorrect. This is not a separable equation.     Incorrect. This equation has too many variables.        A Formula for Any Equation  In the last example, we figured out the integrating factor by treating the left-hand side as a product rule and labeling the parts. Let's now extend that reasoning to any first-order linear differential equation.  We'll start with defining the standard form for these equations:   Standard Form (First-Order, Linear)   A differential equation is said to be in standard form if it can be written as:   where and are known functions of the independent variable , and is the unknown function (dependent variable) we want to find.  Where does the Standard Form come from?   All first-order linear differential equations have a , , and constant term. Therefore, they can be written as . Dividing both sides by the leading coefficient, , and renaming the and constant coefficients as and , gives the standard form .      Our goal is to multiply both sides of a standard-form equation by a function so that the left-hand side becomes the derivative of a product.  Just like before, we assume that multiplying by gives us something that matches the product rule. So we try:   For the left-hand side to be a product rule, we need it to match: .  As before, we set and . Then the rest of the labels follow:   Since , we also know . Setting these equal gives the condition:   This is exactly the same kind of differential equation we solved earlier, just with a general function instead of a constant. It's still separable, and solving it gives us the general formula for the integrating factor:   Just like before, any nonzero constant works, but we typically choose to simplify our computations. This gives us a general formula for the integrating factor:  ✳️ Integrating Factor: General Formula  For a first-order linear equation written in standard form the integrating factor is given by .     Try Out the Formula  With the integrating formula in hand, let's practice finding a few with some examples. Remember, the formula assumes the equation is in standard form . Once in this form, it is easy to identify as the coefficient of and apply it to the formula.   Constant Coefficient   Find the integrating factor for     The equation is in standard form and the coefficient of is , so and the integrating factor is:      Logarithmic Result   Find the integrating factor for .    This equation is not in standard form because of in the coefficient of . Dividing through by (since ) puts it in standard form:   Now, we can easily see that . Plugging this into the formula:      Non-Standard Form   Find the integrating factor for .    The variables in this equation are and , so the formula adjusts accordingly: .  Also, this equation is not in standard form, so move the term to the left:  . Then divide through by and note as the coefficient of :   Using , calculate the integral of used in the formula:   To integrate this, we can split the fraction and integrate each term:  📌 Note  Remember, constants of integration are omitted for integrating factors.    Thus, the integrating factor is simplified and given as follows:       🗝️ Key Takeaways   🎧 Listen   The integrating factor is the function we multiply onto the entire equation to complete the product rule.   For an equation in standard form, , a valid integrating factor, , can be found by solving the separable differential equation: .   Solving gives the general formula: .       Answer the following questions:  Integrating Factor Dependence   Suppose you want to compute integrating factor for the differential equation . After rewriting it in standard form, which parts of the equation does the integrating factor depend on?       Correct! The integrating factor depends on the coefficient of , which is .       Correct! To put the equation in standard form, we divide by , so the integrating factor will depend on this coefficient.       Incorrect. The integrating factor does not depend on the constant term.       Incorrect. The integrating factor does not depend on , but it does depend on the coefficient of .       Give the Integrating Factor   What is the integrating factor for the equation ?           Incorrect. This is not the correct expression for the integrating factor.           Correct! The integrating factor is .           Incorrect. The correct integrating factor should involve the integral of the coefficient of , which is , not .           Incorrect. This is not the correct form for the integrating factor.       Find the Integrating Factor (WebWorK Here For Mathquill?)   The integrating factor for the equation     is given by the function      e^(x^3)        Correct! For this equation, , therefore the integrating factor is .        Fill-In the Integrating Factor 1 (WebWorK Here For Mathquill?)   Rewrite the differential equation     in the standard first-order linear form and identify , and the integrating factor, .                        1\/x  2+1\/x  x        Correct! The equation is rearranged as showing that .         Correct! .         Correct! The integrating factor is .        Fill-In the Integrating Factor 2 (WebWorK Here For Mathquill?)   Rewrite the differential equation     in the standard first-order linear form and identify , and the integrating factor, .                        2*x  2  e^(x^2)        Correct! The equation is rearranged as showing that .         Incorrect. Double-check your algebra when rearranging the equation.         Correct! The integrating factor is .          "
},
{
  "id": "if-integrating-factor-2-8",
  "level": "2",
  "url": "if-integrating-factor.html#if-integrating-factor-2-8",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "integrating factor "
},
{
  "id": "if-integrating-factor-2-10",
  "level": "2",
  "url": "if-integrating-factor.html#if-integrating-factor-2-10",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "integrating factor method "
},
{
  "id": "if-standard-form",
  "level": "2",
  "url": "if-integrating-factor.html#if-standard-form",
  "type": "📙 Definition",
  "number": "68",
  "title": "Standard Form (First-Order, Linear).",
  "body": " Standard Form (First-Order, Linear)   A differential equation is said to be in standard form if it can be written as:   where and are known functions of the independent variable , and is the unknown function (dependent variable) we want to find.  Where does the Standard Form come from?   All first-order linear differential equations have a , , and constant term. Therefore, they can be written as . Dividing both sides by the leading coefficient, , and renaming the and constant coefficients as and , gives the standard form .     "
},
{
  "id": "integrating-factor-general-formula-2",
  "level": "2",
  "url": "if-integrating-factor.html#integrating-factor-general-formula-2",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "integrating factor "
},
{
  "id": "if-formula-examples-3",
  "level": "2",
  "url": "if-integrating-factor.html#if-formula-examples-3",
  "type": "🌌 Example",
  "number": "70",
  "title": "Constant Coefficient.",
  "body": " Constant Coefficient   Find the integrating factor for     The equation is in standard form and the coefficient of is , so and the integrating factor is:    "
},
{
  "id": "if-formula-examples-4",
  "level": "2",
  "url": "if-integrating-factor.html#if-formula-examples-4",
  "type": "🌌 Example",
  "number": "71",
  "title": "Logarithmic Result.",
  "body": " Logarithmic Result   Find the integrating factor for .    This equation is not in standard form because of in the coefficient of . Dividing through by (since ) puts it in standard form:   Now, we can easily see that . Plugging this into the formula:    "
},
{
  "id": "if-formula-examples-5",
  "level": "2",
  "url": "if-integrating-factor.html#if-formula-examples-5",
  "type": "🌌 Example",
  "number": "72",
  "title": "Non-Standard Form.",
  "body": " Non-Standard Form   Find the integrating factor for .    The variables in this equation are and , so the formula adjusts accordingly: .  Also, this equation is not in standard form, so move the term to the left:  . Then divide through by and note as the coefficient of :   Using , calculate the integral of used in the formula:   To integrate this, we can split the fraction and integrate each term:  📌 Note  Remember, constants of integration are omitted for integrating factors.    Thus, the integrating factor is simplified and given as follows:    "
},
{
  "id": "if-integrating-factor-wrapup",
  "level": "2",
  "url": "if-integrating-factor.html#if-integrating-factor-wrapup",
  "type": "🗝️ Key Takeaways...",
  "number": "",
  "title": "🗝️ Key Takeaways",
  "body": " 🗝️ Key Takeaways   🎧 Listen   The integrating factor is the function we multiply onto the entire equation to complete the product rule.   For an equation in standard form, , a valid integrating factor, , can be found by solving the separable differential equation: .   Solving gives the general formula: .    "
},
{
  "id": "if-integrating-factor-cyu",
  "level": "2",
  "url": "if-integrating-factor.html#if-integrating-factor-cyu",
  "type": "🤔💭 Check Your Understanding",
  "number": "73",
  "title": "",
  "body": "  Answer the following questions:  Integrating Factor Dependence   Suppose you want to compute integrating factor for the differential equation . After rewriting it in standard form, which parts of the equation does the integrating factor depend on?       Correct! The integrating factor depends on the coefficient of , which is .       Correct! To put the equation in standard form, we divide by , so the integrating factor will depend on this coefficient.       Incorrect. The integrating factor does not depend on the constant term.       Incorrect. The integrating factor does not depend on , but it does depend on the coefficient of .       Give the Integrating Factor   What is the integrating factor for the equation ?           Incorrect. This is not the correct expression for the integrating factor.           Correct! The integrating factor is .           Incorrect. The correct integrating factor should involve the integral of the coefficient of , which is , not .           Incorrect. This is not the correct form for the integrating factor.       Find the Integrating Factor (WebWorK Here For Mathquill?)   The integrating factor for the equation     is given by the function      e^(x^3)        Correct! For this equation, , therefore the integrating factor is .        Fill-In the Integrating Factor 1 (WebWorK Here For Mathquill?)   Rewrite the differential equation     in the standard first-order linear form and identify , and the integrating factor, .                        1\/x  2+1\/x  x        Correct! The equation is rearranged as showing that .         Correct! .         Correct! The integrating factor is .        Fill-In the Integrating Factor 2 (WebWorK Here For Mathquill?)   Rewrite the differential equation     in the standard first-order linear form and identify , and the integrating factor, .                        2*x  2  e^(x^2)        Correct! The equation is rearranged as showing that .         Incorrect. Double-check your algebra when rearranging the equation.         Correct! The integrating factor is .         "
},
{
  "id": "if-method",
  "level": "1",
  "url": "if-method.html",
  "type": "Section",
  "number": "",
  "title": "Integrating Factor Method",
  "body": " Integrating Factor Method   Let's now bring everything together into a clear, repeatable process. First with a recap, then a step-by-step guide to the Integrating Factor Method and finally, a series of examples that show how to apply this method to solve first-order linear differential equations.    Method Steps  Before jumping into the official method, let's recap the story so far ...    📌  All first-order linear differential equation have a standard form .    📌  Once in standard form, the equation can be multiplied by an integrating factor to complete a product rule on the left-hand side.    📌  A Complete product rule is a sum of two terms that can be grouped inside a single derivative via a reversed product rule.    More concretely, the process was broken down in a previous example as follows:    Standard Form:   Find & Multiply by    Complete Product Rule:   Reverse Product Rule    Grouped Derivative:   Direct Integration    This essentially outlines the complete the complete integrating factor method process.   Integrating Factor (IF) Method  Given a first-order linear equation in standard form:   the general solution can be found through the following three-step process :   Step 1: Find the Integrating Factor  Identify and compute the integrating factor :   .   Step 2: Multiply by to Complete the Product Rule  Multiply both sides of equation by and reverse the product rule on the left side.   .   Step 3: Solve Using Direct Integration  Integrate both sides of equation and solve for to find the general solution.     Answer the general questions about the integrating factor method:  📖❓ Checking When the Method Applies   Which type of equations can always be solved using the IF method?     First-order linear equations.  Correct! That's the specific class this method is designed for.    First-order separable equations.  Incorrect. This method only applies to first-order equations.    Any linear equation.  Incorrect. This method only applies to first-order equations.    Any differential equation that contains .  Too broad. The method is specific to first-order linear equations.      📖❓ Before Finding the Integrating Factor   Suppose you're given the equation: . What should you do before computing an integrating factor?     Rewrite the equation in standard form by dividing through by .  Correct! Standard form is required before identifying .    Group the left side as a single derivative using the product rule.  Not quite. Grouping comes after multiplying by the integrating factor.     Compute the integrating factor.    Incorrect. The integrating factor depends on , which must first be identified in standard form.      Integrate both sides of the equation.    Incorrect. Integration comes after multiplying by the integrating factor.       📖❓ Multiplying by the Integrating Factor   Imagine you multiplied this differential equation by its integrating factor. . Which of the following statements is true?     The and terms can now be grouped as a single derivative.   Correct! Multiplying by the integrating factor allows us to rewrite the left-hand side as a single derivative, completing the product rule.     The integrating factor is .   Incorrect. comes from , so it is part of the integrating factor, but not the entire integrating factor.     The solution is equal to the integrating factor.   Incorrect. The solution is not equal to the integrating factor, but rather, the integrating factor is used to help find the solution.     The integrating factor is .   Correct! The integrating factor is .       📖❓ Purpose of the Integrating Factor   Which statement describes the purpose of the multiplying both sides of a differential equation by an integrating factor?      To eliminate the dependent variable.      To convert the equation into a separable form.      To solve for the constant of integration.      To transform the equation into a direct integration problem.         Full Solutions Using the Method  With the three-step method in hand, we're ready to solve some full equations from start to finish. These examples show how the integrating factor method handles a variety of situations, from clean equations already in standard form to messy ones that need rearranging.   Already in Standard Form   Find the general solution to the equation   .    It is already in standard form, so we proceed with the integrating factor method.   Step 1 . Identify and compute  📌 Note  Recall, we ignore the integration constant for the integrating factor.      Step 2 . Multiply both sides by to complete the product rule on the left.    Step 3 , Finally, we integrate:      Rearranging to Standard Form   Solve the equation   .    This equation is first-order and linear, but not in standard form, so we divide both sides by and move the to the same side as the term: . Now the IF method applies.   Step 1 . Identify and compute : .   Step 2 . Multiply by to complete the product rule on the left: .   Step 3 . Here, the integral on the right is computed with -substitution:          Verify the Solution  We have found the general solution, but it is worth remembering that we can verify our solution by substituting back into the original equation.          The same result on the left & right confirms our solution.      Requires Integration by Parts   Solve the equation: .    Put the equation in standard form, identify , and compute :   Multiply by and reverse the product rule on the left side.   Now, integrate both sides and use integration by parts on the right.              Finally, solve for :      An Initial-Valued Problem   Solve the initial value problem. .    Put the equation in standard form by replacing with and moving the term to the left:  . Multiplying this by allows us to identify and compute :   Multiply by and complete the product rule on the left side. .  Integrate both sides and use -substitution:              Finally, we apply the initial condition to determine the constant .   We can then write the particular solution to the initial value problem.     These examples demonstrate the versatility of the Integrating Factor Method . Regardless of the complexity of the given equation, this three-step approach provides a reliable solution strategy for any first-order linear differential equation.    🗝️ Key Takeaways   🎧 Listen   The integrating factor method is a structured process for solving first-order linear differential equations of the form .   The method involves three steps:  compute the integrating factor and multiply onto the equation,  this completes the product rule for reversal back into its pre-applied form,  integrate both sides to find the solution .     Multiplying by the integrating factor allows the left-hand side to be written as a single derivative, which can be easily solved by integration.  The process always works on first-order linear equations, regardless of how messy the original equation looks, as long as it can be rewritten in standard form.     "
},
{
  "id": "if-method-2-1",
  "level": "2",
  "url": "if-method.html#if-method-2-1",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Integrating Factor Method "
},
{
  "id": "if-integrating-factor-recap-3",
  "level": "2",
  "url": "if-method.html#if-integrating-factor-recap-3",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "standard form integrating factor "
},
{
  "id": "if-method",
  "level": "2",
  "url": "if-method.html#if-method",
  "type": "✍🏻 Method",
  "number": "3",
  "title": "Integrating Factor (IF) Method.",
  "body": " Integrating Factor (IF) Method  Given a first-order linear equation in standard form:   the general solution can be found through the following three-step process :   Step 1: Find the Integrating Factor  Identify and compute the integrating factor :   .   Step 2: Multiply by to Complete the Product Rule  Multiply both sides of equation by and reverse the product rule on the left side.   .   Step 3: Solve Using Direct Integration  Integrate both sides of equation and solve for to find the general solution.    "
},
{
  "id": "if-method-example-1",
  "level": "2",
  "url": "if-method.html#if-method-example-1",
  "type": "🌌 Example",
  "number": "74",
  "title": "Already in Standard Form.",
  "body": " Already in Standard Form   Find the general solution to the equation   .    It is already in standard form, so we proceed with the integrating factor method.   Step 1 . Identify and compute  📌 Note  Recall, we ignore the integration constant for the integrating factor.      Step 2 . Multiply both sides by to complete the product rule on the left.    Step 3 , Finally, we integrate:    "
},
{
  "id": "if-method-example-2",
  "level": "2",
  "url": "if-method.html#if-method-example-2",
  "type": "🌌 Example",
  "number": "75",
  "title": "Rearranging to Standard Form.",
  "body": " Rearranging to Standard Form   Solve the equation   .    This equation is first-order and linear, but not in standard form, so we divide both sides by and move the to the same side as the term: . Now the IF method applies.   Step 1 . Identify and compute : .   Step 2 . Multiply by to complete the product rule on the left: .   Step 3 . Here, the integral on the right is computed with -substitution:          Verify the Solution  We have found the general solution, but it is worth remembering that we can verify our solution by substituting back into the original equation.          The same result on the left & right confirms our solution.    "
},
{
  "id": "if-method-example-3",
  "level": "2",
  "url": "if-method.html#if-method-example-3",
  "type": "🌌 Example",
  "number": "76",
  "title": "Requires Integration by Parts.",
  "body": " Requires Integration by Parts   Solve the equation: .    Put the equation in standard form, identify , and compute :   Multiply by and reverse the product rule on the left side.   Now, integrate both sides and use integration by parts on the right.              Finally, solve for :    "
},
{
  "id": "if-method-example-4",
  "level": "2",
  "url": "if-method.html#if-method-example-4",
  "type": "🌌 Example",
  "number": "77",
  "title": "An Initial-Valued Problem.",
  "body": " An Initial-Valued Problem   Solve the initial value problem. .    Put the equation in standard form by replacing with and moving the term to the left:  . Multiplying this by allows us to identify and compute :   Multiply by and complete the product rule on the left side. .  Integrate both sides and use -substitution:              Finally, we apply the initial condition to determine the constant .   We can then write the particular solution to the initial value problem.    "
},
{
  "id": "integrating-factor-method-6",
  "level": "1",
  "url": "integrating-factor-method-6.html",
  "type": "Section",
  "number": "",
  "title": "Chapter 4 Exercises",
  "body": " Chapter 4 Exercises   ᯓ★❓Quick-Answer Questions    True-False   👍👎   The differential equation, below, is in standard form.     This differential equation is not in the form .    Check to see that the differential equation is in the form .     👍👎  The integrating factor method can be applied to the differential equation .  Since the term, , is nonlinear, the differential equation is nonlinear and the integrating factor method does not apply here.     Multiple-Choice   Integration Technique Used   What integration technique is used to evaluate ?     Substitution.  Substitution isn't the best choice for this integral.    Integration by parts.  Correct! Integration by parts handles products like .    Partial fraction decomposition.  Partial fractions don't apply here.    The product rule.  The product rule is for differentiation, not integration.      When to Use Direct Integration   What method is used to solve a differential equation of the form ?     Direct integration.  Correct! Integrate both sides with respect to .    Separation of variables.  Separation isn't needed—the equation integrates directly.    Substitution.  Substitution isn't the primary method here.    Partial fractions.  Partial fractions are sometimes used inside integration, but the method here is simply direct integration.      Conditions for Using the Integrating Factor Method   What properties must a differential equation have for the integrating factor method to apply?     First order.  Correct! IF method is for first-order equations.    Separable.  Separable equations don't require the integrating factor method.    Linear.  Correct! The IF method works only for linear equations.    Quadratic.  “Quadratic” refers to algebraic equations, not differential equations.      Choosing the Integrating Factor   For the linear equation , what is the integrating factor?      Correct! The integrating factor is built from .     This would come from , not —wrong choice.     Watch the sign—the integrating factor has .     The integrating factor isn't just an arbitrary exponential—it comes from integrating .      Purpose of Multiplying by the Integrating Factor   Why do we multiply a first-order linear equation by its integrating factor?     To rewrite the equation so it can be integrated directly.  Correct! The integrating factor allows the left-hand side to become , which is integrable.    To convert the equation into a separable equation.  Not quite—although integration becomes possible, the equation doesn't become separable.    To set up the product rule for solving the equation.  The product rule is reversed here, not applied to expand further.    To make the equation factorable.  The integrating factor rewrites the equation into an integrable form, not just a “factorable” one.      Next Step After Using the Integrating Factor   You rewrote as . What should you do next?     Apply the product rule to expand the left-hand side.  The product rule was already reversed to reach this form; expanding again would undo progress.    Integrate both sides to solve for .  Correct! Once the left-hand side is a single derivative, integration gives the solution for .    Multiply by another integrating factor.  Only one integrating factor is needed. Multiplying by another one is unnecessary.    Differentiate both sides to simplify the expression.  Further differentiation is not needed; integration is the next step.      Choosing the IF for a Given Equation   Find the integrating factor for .      Not quite—check the exponent carefully.     This is not the exponential integrating factor needed.     Correct! The integrating factor comes from .     This is not the correct integrating factor.      Sequence of IF Method Steps   Which of the following best represents a succinct version of the integrating factor method? Let be the integrating factor.     standard form—compute —multiply —integrate—isolate  Correct! That's the sequence every time.    compute —multiply —differentiate—isolate  Differentiation is not used.    integrate—compute —multiply —standard form—isolate.  Correct steps, wrong order.    isolate—standard form—compute —multiply —integrate.  Correct steps, wrong order.       Short-Answer   Classification of DEs for the Integrating Factor Method   What type of differential equations can be solved using the integrating factor method?     The integrating factor method applies to first-order linear differential equations.     Equations Outside Separation and IF Methods   Classify all first-order differential equations that cannot be solved by either separation of variables or the integrating factor method. Provide an example of such an equation.    These are nonlinear and non-separable first-order equations. They fall outside both common solution techniques.  Examples include:       Rewrite into Standard Linear Form   Rewrite the differential equation below in the standard form . Identify and , state its order, and determine whether it is linear.          Order: first  Classification: linear         Other   Identifying Equations for the IF Method   Which of the following differential equations can be solved using the integrating factor method?                       A first-order linear equation has and only to the first power and not inside nonlinear functions.    Four of these equations are linear and first-order—they can be solved by the integrating factor method.        🏗️ Warm-ups & Drills   Which Method Applies   For each differential equation below, identify which statement applies and explain how you know. You do not need to solve any of the equations.    Can be solved by separating variables, but not using an integrating factor.  Can be solved using an integrating factor, but not by separating variables.  Can be solved both by using an integrating factor and by separating variables.  Cannot be solved using either technique.         This DE is first order and linear, so it can be solved using an integrating factor.  It is not separable. After isolating the derivative: we see that and cannot be separated by multiplication or division.  Therefore, this DE can be solved using an integrating factor, but not by separating variables.    b. Can be solved using an integrating factor, but not by separating variables.         This DE is first order but not linear because the dependent variable appears inside the nonlinear term .  It is also not separable. After isolating the derivative: there's no way to write the right-hand side as a product of a function of and a function of .  Therefore, this DE cannot be solved using either technique.    d. Cannot be solved using either technique.         This DE is first order and linear, so it can be solved using an integrating factor.  It is also separable. Solving for the derivative: Here, we can separate the variables: .  Therefore, this DE can be solved both by using an integrating factor and by separating variables.    c. Can be solved both by using integrating factor and by separating variables.         This DE is first order but not linear because the dependent variable is raised to a power ( ).  It is separable. Solving for the derivative: allows us to separate variables: .  Therefore, this DE can be solved by separating variables, but not using an integrating factor.    a. Can be solved by separating variables, but not using an integrating factor.         This DE is first order and linear, so it can be solved using an integrating factor.  It is not separable. Solving for the derivative: shows no way to separate and into separate multiplicative terms.  Therefore, this DE can be solved using an integrating factor, but not by separating variables.    b. Can be solved using an integrating factor, but not by separating variables.       ✍🏻 Solve the Differential Equations   General Solution   Use an integrating factor to find the general solution to each equation.      Standard form: , so . Integrating factor: .   Integrate:           Standard form: . Integrating factor: .    (detailed)  We put the equation in standard form to identify and compute the integrating factor.     Multiply by and reverse the product rule on the left side.   Next, integrate both sides and use -substitution on the right side.          Finally, solve for :           Already in standard form: . Integrating factor: .           Standard form: . Integrating factor: .           Treat as dependent: with . Integrating factor: .           Rewrite: with . Integrating factor: .    (detailed)  As always, start by putting the equation in standard form: .   Find Integrating Factor,       Multiply by       Complete the Product Rule       Integrate Both Sides       Isolate       General Solution   .           Standard form with . Integrating factor: .           Standard form: with . Integrating factor: .          Initial-Value Problems   Solve each initial value problem.        Standard form: . Integrating factor: .   Apply :   Final solution:             Divide by : . Integrating factor: .   Apply :   Final solution:             Standard form with . Integrating factor: .   Apply :   Final solution:          "
},
{
  "id": "c4-quick-answer-tf",
  "level": "2",
  "url": "integrating-factor-method-6.html#c4-quick-answer-tf",
  "type": "Reading Question",
  "number": "1",
  "title": "True-False.",
  "body": " True-False   👍👎   The differential equation, below, is in standard form.     This differential equation is not in the form .    Check to see that the differential equation is in the form .     👍👎  The integrating factor method can be applied to the differential equation .  Since the term, , is nonlinear, the differential equation is nonlinear and the integrating factor method does not apply here.   "
},
{
  "id": "c4-quick-answer-mc",
  "level": "2",
  "url": "integrating-factor-method-6.html#c4-quick-answer-mc",
  "type": "Reading Question",
  "number": "2",
  "title": "Multiple-Choice.",
  "body": " Multiple-Choice   Integration Technique Used   What integration technique is used to evaluate ?     Substitution.  Substitution isn't the best choice for this integral.    Integration by parts.  Correct! Integration by parts handles products like .    Partial fraction decomposition.  Partial fractions don't apply here.    The product rule.  The product rule is for differentiation, not integration.      When to Use Direct Integration   What method is used to solve a differential equation of the form ?     Direct integration.  Correct! Integrate both sides with respect to .    Separation of variables.  Separation isn't needed—the equation integrates directly.    Substitution.  Substitution isn't the primary method here.    Partial fractions.  Partial fractions are sometimes used inside integration, but the method here is simply direct integration.      Conditions for Using the Integrating Factor Method   What properties must a differential equation have for the integrating factor method to apply?     First order.  Correct! IF method is for first-order equations.    Separable.  Separable equations don't require the integrating factor method.    Linear.  Correct! The IF method works only for linear equations.    Quadratic.  “Quadratic” refers to algebraic equations, not differential equations.      Choosing the Integrating Factor   For the linear equation , what is the integrating factor?      Correct! The integrating factor is built from .     This would come from , not —wrong choice.     Watch the sign—the integrating factor has .     The integrating factor isn't just an arbitrary exponential—it comes from integrating .      Purpose of Multiplying by the Integrating Factor   Why do we multiply a first-order linear equation by its integrating factor?     To rewrite the equation so it can be integrated directly.  Correct! The integrating factor allows the left-hand side to become , which is integrable.    To convert the equation into a separable equation.  Not quite—although integration becomes possible, the equation doesn't become separable.    To set up the product rule for solving the equation.  The product rule is reversed here, not applied to expand further.    To make the equation factorable.  The integrating factor rewrites the equation into an integrable form, not just a “factorable” one.      Next Step After Using the Integrating Factor   You rewrote as . What should you do next?     Apply the product rule to expand the left-hand side.  The product rule was already reversed to reach this form; expanding again would undo progress.    Integrate both sides to solve for .  Correct! Once the left-hand side is a single derivative, integration gives the solution for .    Multiply by another integrating factor.  Only one integrating factor is needed. Multiplying by another one is unnecessary.    Differentiate both sides to simplify the expression.  Further differentiation is not needed; integration is the next step.      Choosing the IF for a Given Equation   Find the integrating factor for .      Not quite—check the exponent carefully.     This is not the exponential integrating factor needed.     Correct! The integrating factor comes from .     This is not the correct integrating factor.      Sequence of IF Method Steps   Which of the following best represents a succinct version of the integrating factor method? Let be the integrating factor.     standard form—compute —multiply —integrate—isolate  Correct! That's the sequence every time.    compute —multiply —differentiate—isolate  Differentiation is not used.    integrate—compute —multiply —standard form—isolate.  Correct steps, wrong order.    isolate—standard form—compute —multiply —integrate.  Correct steps, wrong order.     "
},
{
  "id": "c4-quick-answer-sa",
  "level": "2",
  "url": "integrating-factor-method-6.html#c4-quick-answer-sa",
  "type": "Reading Question",
  "number": "3",
  "title": "Short-Answer.",
  "body": " Short-Answer   Classification of DEs for the Integrating Factor Method   What type of differential equations can be solved using the integrating factor method?     The integrating factor method applies to first-order linear differential equations.     Equations Outside Separation and IF Methods   Classify all first-order differential equations that cannot be solved by either separation of variables or the integrating factor method. Provide an example of such an equation.    These are nonlinear and non-separable first-order equations. They fall outside both common solution techniques.  Examples include:       Rewrite into Standard Linear Form   Rewrite the differential equation below in the standard form . Identify and , state its order, and determine whether it is linear.          Order: first  Classification: linear       "
},
{
  "id": "c4-quick-answer-other",
  "level": "2",
  "url": "integrating-factor-method-6.html#c4-quick-answer-other",
  "type": "Reading Question",
  "number": "4",
  "title": "Other.",
  "body": " Other   Identifying Equations for the IF Method   Which of the following differential equations can be solved using the integrating factor method?                       A first-order linear equation has and only to the first power and not inside nonlinear functions.    Four of these equations are linear and first-order—they can be solved by the integrating factor method.    "
},
{
  "id": "which-method-1",
  "level": "2",
  "url": "integrating-factor-method-6.html#which-method-1",
  "type": "Exercise",
  "number": "1",
  "title": "",
  "body": "     This DE is first order and linear, so it can be solved using an integrating factor.  It is not separable. After isolating the derivative: we see that and cannot be separated by multiplication or division.  Therefore, this DE can be solved using an integrating factor, but not by separating variables.    b. Can be solved using an integrating factor, but not by separating variables.   "
},
{
  "id": "which-method-2",
  "level": "2",
  "url": "integrating-factor-method-6.html#which-method-2",
  "type": "Exercise",
  "number": "2",
  "title": "",
  "body": "     This DE is first order but not linear because the dependent variable appears inside the nonlinear term .  It is also not separable. After isolating the derivative: there's no way to write the right-hand side as a product of a function of and a function of .  Therefore, this DE cannot be solved using either technique.    d. Cannot be solved using either technique.   "
},
{
  "id": "which-method-3",
  "level": "2",
  "url": "integrating-factor-method-6.html#which-method-3",
  "type": "Exercise",
  "number": "3",
  "title": "",
  "body": "     This DE is first order and linear, so it can be solved using an integrating factor.  It is also separable. Solving for the derivative: Here, we can separate the variables: .  Therefore, this DE can be solved both by using an integrating factor and by separating variables.    c. Can be solved both by using integrating factor and by separating variables.   "
},
{
  "id": "which-method-4",
  "level": "2",
  "url": "integrating-factor-method-6.html#which-method-4",
  "type": "Exercise",
  "number": "4",
  "title": "",
  "body": "     This DE is first order but not linear because the dependent variable is raised to a power ( ).  It is separable. Solving for the derivative: allows us to separate variables: .  Therefore, this DE can be solved by separating variables, but not using an integrating factor.    a. Can be solved by separating variables, but not using an integrating factor.   "
},
{
  "id": "which-method-5",
  "level": "2",
  "url": "integrating-factor-method-6.html#which-method-5",
  "type": "Exercise",
  "number": "5",
  "title": "",
  "body": "     This DE is first order and linear, so it can be solved using an integrating factor.  It is not separable. Solving for the derivative: shows no way to separate and into separate multiplicative terms.  Therefore, this DE can be solved using an integrating factor, but not by separating variables.    b. Can be solved using an integrating factor, but not by separating variables.   "
},
{
  "id": "gen-sol-1",
  "level": "2",
  "url": "integrating-factor-method-6.html#gen-sol-1",
  "type": "Exercise",
  "number": "1",
  "title": "",
  "body": "   Standard form: , so . Integrating factor: .   Integrate:       "
},
{
  "id": "gen-sol-2",
  "level": "2",
  "url": "integrating-factor-method-6.html#gen-sol-2",
  "type": "Exercise",
  "number": "2",
  "title": "",
  "body": "   Standard form: . Integrating factor: .    (detailed)  We put the equation in standard form to identify and compute the integrating factor.     Multiply by and reverse the product rule on the left side.   Next, integrate both sides and use -substitution on the right side.          Finally, solve for :       "
},
{
  "id": "gen-sol-3",
  "level": "2",
  "url": "integrating-factor-method-6.html#gen-sol-3",
  "type": "Exercise",
  "number": "3",
  "title": "",
  "body": "   Already in standard form: . Integrating factor: .       "
},
{
  "id": "gen-sol-4",
  "level": "2",
  "url": "integrating-factor-method-6.html#gen-sol-4",
  "type": "Exercise",
  "number": "4",
  "title": "",
  "body": "   Standard form: . Integrating factor: .       "
},
{
  "id": "gen-sol-5",
  "level": "2",
  "url": "integrating-factor-method-6.html#gen-sol-5",
  "type": "Exercise",
  "number": "5",
  "title": "",
  "body": "   Treat as dependent: with . Integrating factor: .       "
},
{
  "id": "gen-sol-6",
  "level": "2",
  "url": "integrating-factor-method-6.html#gen-sol-6",
  "type": "Exercise",
  "number": "6",
  "title": "",
  "body": "   Rewrite: with . Integrating factor: .    (detailed)  As always, start by putting the equation in standard form: .   Find Integrating Factor,       Multiply by       Complete the Product Rule       Integrate Both Sides       Isolate       General Solution   .       "
},
{
  "id": "gen-sol-7",
  "level": "2",
  "url": "integrating-factor-method-6.html#gen-sol-7",
  "type": "Exercise",
  "number": "7",
  "title": "",
  "body": "   Standard form with . Integrating factor: .       "
},
{
  "id": "gen-sol-8",
  "level": "2",
  "url": "integrating-factor-method-6.html#gen-sol-8",
  "type": "Exercise",
  "number": "8",
  "title": "",
  "body": "   Standard form: with . Integrating factor: .       "
},
{
  "id": "c4-ivp-1",
  "level": "2",
  "url": "integrating-factor-method-6.html#c4-ivp-1",
  "type": "Exercise",
  "number": "9",
  "title": "",
  "body": "     Standard form: . Integrating factor: .   Apply :   Final solution:       "
},
{
  "id": "c4-ivp-2",
  "level": "2",
  "url": "integrating-factor-method-6.html#c4-ivp-2",
  "type": "Exercise",
  "number": "10",
  "title": "",
  "body": "     Divide by : . Integrating factor: .   Apply :   Final solution:       "
},
{
  "id": "c4-ivp-3",
  "level": "2",
  "url": "integrating-factor-method-6.html#c4-ivp-3",
  "type": "Exercise",
  "number": "11",
  "title": "",
  "body": "     Standard form with . Integrating factor: .   Apply :   Final solution:       "
},
{
  "id": "slope-fields",
  "level": "1",
  "url": "slope-fields.html",
  "type": "Section",
  "number": "",
  "title": "Slope Fields",
  "body": " Slope Fields   When working with first-order differential equations, you can gain insight into solutions without fully solving them. By focusing on how the solutions change, you can use a slope field to visualize the path of any potential solution.  A slope field visually represents the slopes that a solution curve must follow at each point in the plane, shown as short arrows pointing the way a solution would travel—like a leaf carried by a stream.  The pattern created by a slope field provides a visual representation of the family of solutions to the differential equation. A slope field doesn't show just one solution—it shows them all. From any starting point, a unique curve threads through, always guided by the tiny arrows.   From Equation to Slope  Every first-order differential equation combines , , and . By rearranging terms, we can always write it as: where collects all terms. For example:   When it is possible to isolate , we write:   Here is the slope generator : give it any point and it outputs the slope the solution must have there. For instance, if and ,   Since is the tangent slope of at , this number tells you the direction the graph is heading at .   Quick Slope Check   For , find the slope at .    Rearranging gives , so . Substitute:   Any solution through leaves that point with slope .     📖❓ Using the slope generator   Suppose we have the differential equation . What is the slope of any solution curve passing through ?      Substitute into : . That's the tangent slope there.     This would be the slope if y were positive, but here y = -2 changes the result.     Check your math—substitute carefully into .     This would only account for the term—don't forget the part.      Sketching a Slope Field  To sketch a slope field by hand:   Select a small grid of points in the -plane.  Compute at each point.  Draw a short line segment at the point with that slope.   For example, take Computing nine slopes on a grid yields:                     Sketching by hand is great for intuition but tedious when you need more points. Computer-generated slope fields fill in the gaps, revealing a dense web of arrows that paints the full picture. In , the solution curve through flows smoothly along the arrows, like an object carried by a current.       Slope field for    A slope field turns an equation into a navigational chart. Each arrow is an instruction every solution must obey. The entire field represents the whole family of solutions, letting you spot patterns in how solutions behave, without ever solving for explicitly. Next, we'll look at autonomous equations , whose slope fields reveal even more structure.   📤 Wrap-Up   🗝️ Key Takeaways..   A slope field shows the flow that any solution curve must follow.  The function acts as a slope generator for at any point .  To sketch a slope field: pick points, compute slopes, and draw short segments.  Computer-generated slope fields provide a fuller, denser map and make solution behavior clear even without a formula.    Check Your Understanding   📖❓ What does a slope field represent?   Which statement best describes what a slope field shows for a first-order differential equation?     It shows the general flow pattern of any solution.  A slope field visualizes the slope each solution must take through every point—like a map of directional instructions for all solutions.    It shows the general flow pattern of a specific solution.  A slope field doesn't display one solution—it encodes the entire family of solutions.    It gives the formulas for all solutions to the equation.  No formulas appear in a slope field; it's a picture of slopes, not algebraic expressions.    It plots the solution curve for any solution.  A slope field shows the direction a solution must go, not the actual solution curve.        "
},
{
  "id": "slope-fields-2-1",
  "level": "2",
  "url": "slope-fields.html#slope-fields-2-1",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "slope field "
},
{
  "id": "slope-fields-eqn-to-slope-6",
  "level": "2",
  "url": "slope-fields.html#slope-fields-eqn-to-slope-6",
  "type": "🌌 Example",
  "number": "78",
  "title": "Quick Slope Check.",
  "body": " Quick Slope Check   For , find the slope at .    Rearranging gives , so . Substitute:   Any solution through leaves that point with slope .   "
},
{
  "id": "slope-fields-cyu-2",
  "level": "2",
  "url": "slope-fields.html#slope-fields-cyu-2",
  "type": "Checkpoint",
  "number": "79",
  "title": "📖❓ Using the slope generator.",
  "body": " 📖❓ Using the slope generator   Suppose we have the differential equation . What is the slope of any solution curve passing through ?      Substitute into : . That's the tangent slope there.     This would be the slope if y were positive, but here y = -2 changes the result.     Check your math—substitute carefully into .     This would only account for the term—don't forget the part.    "
},
{
  "id": "y-t-slope-field-16x16",
  "level": "2",
  "url": "slope-fields.html#y-t-slope-field-16x16",
  "type": "Figure",
  "number": "80",
  "title": "",
  "body": "    Slope field for  "
},
{
  "id": "slope-fields-cyu-1",
  "level": "2",
  "url": "slope-fields.html#slope-fields-cyu-1",
  "type": "Checkpoint",
  "number": "81",
  "title": "📖❓ What does a slope field represent?",
  "body": " 📖❓ What does a slope field represent?   Which statement best describes what a slope field shows for a first-order differential equation?     It shows the general flow pattern of any solution.  A slope field visualizes the slope each solution must take through every point—like a map of directional instructions for all solutions.    It shows the general flow pattern of a specific solution.  A slope field doesn't display one solution—it encodes the entire family of solutions.    It gives the formulas for all solutions to the equation.  No formulas appear in a slope field; it's a picture of slopes, not algebraic expressions.    It plots the solution curve for any solution.  A slope field shows the direction a solution must go, not the actual solution curve.    "
},
{
  "id": "autonomous-eqns",
  "level": "1",
  "url": "autonomous-eqns.html",
  "type": "Section",
  "number": "",
  "title": "Autonomous Equations",
  "body": " Autonomous Equations   When the first-order differential equation contains no explicit terms, it reduces to: This is called an autonomous differential equation .   Autonomous means self-governing. In these equations, the rate of change of depends only on itself, not on time . The system's behavior is determined entirely by its current state. Think of a spring: it pushes back the same way no matter the time of day. Only how far it's compressed matters, not what time it is.    Slope Fields of Autonomous Equations  Autonomous equations have a distinctive look in their slope fields. Consider:  . Here, the slope at any point depends only on . Moving up or down (changing ) changes the slope, but sliding left or right (changing ) does not. The result is a striped slope field—each horizontal line has the same slope pattern all the way across.   illustrates this. As you go up the plane, the slope segments gradually rotate, reflecting how changes with . But moving sideways leaves the segments fixed—the slopes don't shift with .   Symmetry in the slope field for        Rotating slope segments for changing and fixed slope segments for changing         Horizontal shift symmetry of solutions to autonomous differential equations     This symmetry isn't just in the slope field, it shows up in the solutions themselves. As seen in , if you know one solution curve for an autonomous equation, you can create others simply by shifting that solution horizontally. That's because the equation doesn't know what time it is; it only cares about .    📤 Wrap-Up    🗝️ Key Takeaways..   A first-order autonomous equation has the form  Its slope field forms horizontal stripes : the slope is constant along each horizontal line because it depends only on .  Solutions show horizontal shift symmetry: if is a solution, so is for any constant .     Check Your Understanding   📖❓Autonomous Equations   📖❓ What does a slope field represent?   Suppose you compute the slope of an autonomous differential equation be at the point . What is the slope at ?      This is incorrect. The slope depends only on , not on .     This is incorrect. The slope function is , so doesn't affect the result.     No, remember that the slope at a point depends solely on .     Correct. Since at both points, the slope is the same: , regardless of .    Impossible to answer.  This is incorrect. The value of is determined entirely by , so this is answerable.      📖❓ Shifting Solutions   Suppose is a solution to the autonomous equation . Which of the following must also be a solution?      Exactly—autonomous equations ignore the clock. Shifting in time just slides the solution along the -axis.     Adding to changes the function itself—this doesn't preserve the solution.     Scaling is not guaranteed to produce another solution unless the DE is linear, which this one may not be.     Flipping time is not generally a symmetry—it changes how evolves.         "
},
{
  "id": "autonomous-eqns-2-1",
  "level": "2",
  "url": "autonomous-eqns.html#autonomous-eqns-2-1",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "autonomous differential equation "
},
{
  "id": "autonomous-slope-symmetry",
  "level": "2",
  "url": "autonomous-eqns.html#autonomous-slope-symmetry",
  "type": "Figure",
  "number": "82",
  "title": "",
  "body": " Symmetry in the slope field for        Rotating slope segments for changing and fixed slope segments for changing         Horizontal shift symmetry of solutions to autonomous differential equations    "
},
{
  "id": "autonomous-eqns-cyu-bundle",
  "level": "2",
  "url": "autonomous-eqns.html#autonomous-eqns-cyu-bundle",
  "type": "Checkpoint",
  "number": "83",
  "title": "📖❓Autonomous Equations.",
  "body": " 📖❓Autonomous Equations   📖❓ What does a slope field represent?   Suppose you compute the slope of an autonomous differential equation be at the point . What is the slope at ?      This is incorrect. The slope depends only on , not on .     This is incorrect. The slope function is , so doesn't affect the result.     No, remember that the slope at a point depends solely on .     Correct. Since at both points, the slope is the same: , regardless of .    Impossible to answer.  This is incorrect. The value of is determined entirely by , so this is answerable.      📖❓ Shifting Solutions   Suppose is a solution to the autonomous equation . Which of the following must also be a solution?      Exactly—autonomous equations ignore the clock. Shifting in time just slides the solution along the -axis.     Adding to changes the function itself—this doesn't preserve the solution.     Scaling is not guaranteed to produce another solution unless the DE is linear, which this one may not be.     Flipping time is not generally a symmetry—it changes how evolves.     "
},
{
  "id": "equilibrium-solns",
  "level": "1",
  "url": "equilibrium-solns.html",
  "type": "Section",
  "number": "",
  "title": "Equilibrium Solutions",
  "body": " Equilibrium Solutions   Autonomous equations tell us that the direction of change depends only on the current state, not the current time. That pattern shows up in their slope fields as horizontal stripes of identical slope behavior. Now we'll focus on one especially important feature of those fields: the horizontal lines where the slope is zero. Along those lines, the system simply stops changing. These constant solutions are called equilibrium solutions .    Flat Lines and Fixed Behavior  Consider the slope field for the autonomous equation:  . Since this is autonomous, the slope depends only on . At certain -values, something special happens: the slope becomes exactly zero.       Slope field for    In the slope field, those points appear as rows of perfectly horizontal segments . That's no accident—where , the solution curve doesn't move. If a solution starts there, it stays there forever. These flat lines are the equilibrium solutions .  To find them, we set (the slope) to zero and solve for . In this example: So the equilibrium solutions are the constant functions and .  These constant solutions act like anchors in the system: other solutions either drift toward them or get pushed away. We'll explore that stability behavior in the next section.   📖❓ Observing the Slope Field   Look at the slope field below. Which constant solutions do you see? In other words, what -values have perfectly horizontal segments?                    What the Slope Field Tells You  What about the other values of ? Between the equilibria at and , the slopes are positive. For example: so the slope is positive and solutions rise. The slope field shows this: between and , the little segments tilt upward.  Above , things flip. Try : which is negative, so solutions decrease. The slope field confirms it—segments tilt downward. The same downward pull appears below .  The slope field acts like a behavior map : equilibrium solutions mark where the system is still, while the tilts around them reveal which way nearby solutions move.    How to Find Equilibrium Solutions  Finding equilibrium solutions is always the same quick process:   Assuming is constant and , then and so: .  The equation is algebraic. Solve it for .  For each you found, is an equilibrium solution.   Let's do a quick example. Consider: Assuming , thenthis equation becaomes: So, and the equilibrium solutions are:   Mark these on the slope field with horizontal lines. Then check the arrows just above and below each line to see how other solutions evolve—whether they're pulled in or pushed away. We will build more on this in the next section.   📖❓ Select the Equilibrium Solutions   Determine the equilibrium solutions for the equation: . Select all that apply.    Yes! ✅  ❌  Yes! ✅  ❌  ❌     📤 Wrap-Up   🗝️ Key Takeaways..   Equilibrium solutions are constant solutions where .  In the slope field, they appear as rows of horizontal segments.  To find them, just solve .      "
},
{
  "id": "equilibrium-solns-2-1",
  "level": "2",
  "url": "equilibrium-solns.html#equilibrium-solns-2-1",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "equilibrium solutions "
},
{
  "id": "slope-field-1-ysqrd",
  "level": "2",
  "url": "equilibrium-solns.html#slope-field-1-ysqrd",
  "type": "Figure",
  "number": "84",
  "title": "",
  "body": "    Slope field for  "
},
{
  "id": "equilibrium-solns-behavior-6",
  "level": "2",
  "url": "equilibrium-solns.html#equilibrium-solns-behavior-6",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "equilibrium solutions "
},
{
  "id": "equilibrium-solutions-chkpt-1",
  "level": "2",
  "url": "equilibrium-solns.html#equilibrium-solutions-chkpt-1",
  "type": "Checkpoint",
  "number": "85",
  "title": "📖❓ Observing the Slope Field.",
  "body": " 📖❓ Observing the Slope Field   Look at the slope field below. Which constant solutions do you see? In other words, what -values have perfectly horizontal segments?                 "
},
{
  "id": "equilibrium-solns-chkpt-2",
  "level": "2",
  "url": "equilibrium-solns.html#equilibrium-solns-chkpt-2",
  "type": "Checkpoint",
  "number": "86",
  "title": "📖❓ Select the Equilibrium Solutions.",
  "body": " 📖❓ Select the Equilibrium Solutions   Determine the equilibrium solutions for the equation: . Select all that apply.    Yes! ✅  ❌  Yes! ✅  ❌  ❌   "
},
{
  "id": "classifying-equilibria",
  "level": "1",
  "url": "classifying-equilibria.html",
  "type": "Section",
  "number": "",
  "title": "Classifying Equilibrium Solutions",
  "body": " Classifying Equilibrium Solutions   Equilibrium solutions mark the places where a system comes to rest. But not all equilibrium solutions are alike, some attract nearby solutions, others repel them, and some do a bit of both. In this section, we'll learn how to classify these points by examining the slope field, the sign of , and a tool called a phase line .    Types of Equilibria  Suppose is an equilibrium solution of an autonomous equation . If you nudge a solution slightly above or below , it might drift back, move away, or react differently on each side. What it does determines the type of equilibrium it is.  There are three common types:   Stable (sink): Solutions move toward the equilibrium from both sides.  Unstable (source): Solutions move away from the equilibrium on both sides.  Semi-stable (node): Solutions move toward the equilibrium on one side and away from it on the other.   In a slope field, a sink looks like arrows converging toward a horizontal line, a source shows arrows diverging away, and a node is a mix: converging on one side, diverging on the other. Next, we'll look at different ways to determine these behaviors.    Classification via the Phase Line  Slope fields show a lot of information at once, but for autonomous equations we can simplify. Since the slope depends only on , we can compress the slope field into a simple vertical diagram of just -values. This is called a phase line .  On a phase line:   Equilibria are marked with solid dots.  Regions where get upward arrows.  Regions where get downward arrows.   The arrows summarize how changes: whether solutions are rising or falling. Follow the arrows up or down and you'll see where solutions eventually settle—or whether they're pushed away.   Slope Field (left) and Phase Line (right) for             Growth and Decay   Find and classify the equilibrium solutions of the autonomous equation:     First, set : giving equilibrium solutions at and .  These values split the -axis into three regions. We test the sign of in each:          Region  Test Point   Sign of       Positive       Negative       Positive              Now we can classify the equilibria based on the phase line:  Solutions move away from , so it is a source .  Solutions move toward , so it is a sink .       📖❓ Match the Equilibria     Suppose an autonomous equation has three equilibrium solutions at .  Based on the provided phase line, drag each equilibrium solution to its corresponding classification type.    Phase Line              Sink     Source     Node    None of these       Classification via the Linearization Method  There's another way to classify equilibria: use a quick calculus check on .  Notice in that the sign of flips as you pass through an equilibrium. The pattern of that flip tells you what kind of point it is:   At the source , , goes from negative → positive (increases).  At the sink , , goes from positive → negative (decreases).   The important observation is that increases through sources and decreases through sinks. This is true in general, so we can classify equilibrium solutions by looking at the sign of at the equilibrium points.                 If , then is an equilibrium. To classify it:   If , it's a sink (stable).  If , it's a source (unstable).  If , the test is inconclusive—you'll need more investigation.   This is called the linearization method , because it looks at the linear (slope) behavior of near the equilibrium.    Consider the autonomous equation: Find and classify the equilibrium solutions using linearization.    First, solve : so and are equilibria.  Then compute the derivative: At each equilibrium:  → sink (stable).  → source (unstable).        📤 Wrap-Up    🗝️ Key Takeaways..   Equilibrium solutions occur where .  Sinks pull solutions in, sources push them out, and nodes do one of each.  Phase lines show this behavior simply and clearly.  The derivative can classify stability quickly via the linearization method.     Check Your Understanding   📖❓Classifying Equilibrium Solutions   📖❓Stability Check   The autonomous equation has equilibrium solutions at and . Create a simple phase line to classify these equilibria.    is a sink, source  is a source, sink  Both are sinks  Both are sources  is a node, sink  is a source, node     📖❓ Comparing Equilibria   The equation has equilibrium solutions at and .  Compute and use the linearization method to determine which of these equilibria pulls nearby solutions toward it .      Correct. Since and , then is a sink and pulls solutions toward it.     Incorrect. Since and , then is a source and repels solutions.         "
},
{
  "id": "classifying-equilibria-2-1",
  "level": "2",
  "url": "classifying-equilibria.html#classifying-equilibria-2-1",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "phase line "
},
{
  "id": "classifying-equilibria-phase-line-2",
  "level": "2",
  "url": "classifying-equilibria.html#classifying-equilibria-phase-line-2",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "phase line "
},
{
  "id": "phase-line-plot",
  "level": "2",
  "url": "classifying-equilibria.html#phase-line-plot",
  "type": "Figure",
  "number": "87",
  "title": "",
  "body": " Slope Field (left) and Phase Line (right) for           "
},
{
  "id": "classifying-equilibria-phase-line-ex-1",
  "level": "2",
  "url": "classifying-equilibria.html#classifying-equilibria-phase-line-ex-1",
  "type": "🌌 Example",
  "number": "88",
  "title": "Growth and Decay.",
  "body": " Growth and Decay   Find and classify the equilibrium solutions of the autonomous equation:     First, set : giving equilibrium solutions at and .  These values split the -axis into three regions. We test the sign of in each:          Region  Test Point   Sign of       Positive       Negative       Positive              Now we can classify the equilibria based on the phase line:  Solutions move away from , so it is a source .  Solutions move toward , so it is a sink .     "
},
{
  "id": "classifying-equilibria-chkpt-1",
  "level": "2",
  "url": "classifying-equilibria.html#classifying-equilibria-chkpt-1",
  "type": "Checkpoint",
  "number": "89",
  "title": "📖❓ Match the Equilibria.",
  "body": " 📖❓ Match the Equilibria     Suppose an autonomous equation has three equilibrium solutions at .  Based on the provided phase line, drag each equilibrium solution to its corresponding classification type.    Phase Line              Sink     Source     Node    None of these    "
},
{
  "id": "linearization-figure",
  "level": "2",
  "url": "classifying-equilibria.html#linearization-figure",
  "type": "Figure",
  "number": "90",
  "title": "",
  "body": "     "
},
{
  "id": "classifying-equilibria-linearization-6-3",
  "level": "2",
  "url": "classifying-equilibria.html#classifying-equilibria-linearization-6-3",
  "type": "Figure",
  "number": "91",
  "title": "",
  "body": "     "
},
{
  "id": "classifying-equilibria-linearization-9",
  "level": "2",
  "url": "classifying-equilibria.html#classifying-equilibria-linearization-9",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "linearization method "
},
{
  "id": "classifying-equilibria-linearization-ex-1",
  "level": "2",
  "url": "classifying-equilibria.html#classifying-equilibria-linearization-ex-1",
  "type": "🌌 Example",
  "number": "92",
  "title": "",
  "body": "  Consider the autonomous equation: Find and classify the equilibrium solutions using linearization.    First, solve : so and are equilibria.  Then compute the derivative: At each equilibrium:  → sink (stable).  → source (unstable).     "
},
{
  "id": "classifying-equilibria-wrap-up-2",
  "level": "2",
  "url": "classifying-equilibria.html#classifying-equilibria-wrap-up-2",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "pulls nearby solutions toward it "
},
{
  "id": "parameter-analysis",
  "level": "1",
  "url": "parameter-analysis.html",
  "type": "Section",
  "number": "",
  "title": "Parameter Analysis",
  "body": " Parameter Analysis      Many mathematical models include one or more parameters —constants that represent things like birth rates, drug dosage, resource limits, or physical constants. These parameters aren't just placeholders—they often control the qualitative behavior of the system. Small changes in a parameter's value can cause major shifts in the solution's behavior. Understanding those changes is the goal of parameter analysis .  In this section, we focus on the most important modeling insight: how equilibria and their stability depend on parameters . When a parameter crosses a critical threshold, the model's behavior can shift dramatically—this is called a bifurcation .    Bifurcation Analysis  A bifurcation is a qualitative change in the system's dynamics caused by varying a parameter. In the context of differential equations, it usually means that the number or stability of equilibrium solutions changes at certain critical values.  Consider the one-parameter system: where is a parameter. As changes:   Existing equilibria may change from stable to unstable (or vice versa).  New equilibria may appear or disappear altogether.  In some cases, the long-term behavior of the entire system changes.   The basic workflow for bifurcation analysis is:   Find equilibria: Solve for in terms of the parameter .  Classify stability: Compute at each equilibrium. The sign determines whether the equilibrium is a sink (stable) or a source (unstable).  Track changes: See how the equilibria and their stability change as varies. Identify critical values where the behavior flips.   Consider the parameterized system: .  First, we find the equilibria: .  To see how the equilibria depend on , solve for equilibrium:  For : two equilibria exist ( ).  For : a single equilibrium ( ).  For : no real equilibria.    Stability analysis shows that one branch is stable and the other is unstable when . The bifurcation diagram reveals a collision of equilibria at , called a saddle-node bifurcation .  The results are often summarized in a bifurcation diagram —a picture showing:  The equilibria plotted against .  Solid lines for stable equilibria, dashed lines for unstable ones.  Critical parameter values where the diagram changes shape.     shows the bifurcation diagram for the previous example.   Bifurcation diagram for      Bifurcation diagrams are a cornerstone of modeling—they show, at a glance, how a system's behavior shifts as conditions change.    Why Parameter Analysis Matters in Modeling  Why should we care about bifurcations? Because in applied problems, parameters represent real things : a harvest rate in an ecology model, a dosage in a drug model, or an investment threshold in an economics model. Changing those parameters changes the system.  The most important modeling insight:   Stable equilibria correspond to long-term states the system will settle into.  Bifurcation points are thresholds where those long-term states shift—suddenly and sometimes irreversibly.   For example:   In epidemiology, there's often a threshold vaccination rate: below it, disease spreads (unstable equilibrium); above it, the disease dies out (stable equilibrium).  In ecology, a critical harvest rate might push a fish population from stable sustainability to collapse.     📤 Wrap-Up    🗝️ Key Takeaways..   Parameters control behavior: Changing them can add, remove, or flip the stability of equilibria.  Bifurcation diagrams show where those changes occur and summarize the system's response to parameter variation.  Critical parameter values in a model often correspond to real-world thresholds—places where just a little more or just a little less has huge consequences.     Check Your Understanding   📖❓ Parameter Analysis   Spot the Bifurcation   The model changes behavior as varies. What happens when crosses zero?     Two equilibria collide and disappear.  Correct—this is the hallmark of a saddle-node bifurcation.    The system gains an oscillation.  This model is one-dimensional; it cannot generate oscillations.    The system's slope changes sign but equilibria stay the same.  No—the set of equilibria itself changes.         "
},
{
  "id": "parameter-analysis-2-2",
  "level": "2",
  "url": "parameter-analysis.html#parameter-analysis-2-2",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "parameters parameter analysis "
},
{
  "id": "parameter-analysis-2-3",
  "level": "2",
  "url": "parameter-analysis.html#parameter-analysis-2-3",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "bifurcation "
},
{
  "id": "parameter-analysis-bifurcation-2",
  "level": "2",
  "url": "parameter-analysis.html#parameter-analysis-bifurcation-2",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "bifurcation "
},
{
  "id": "parameter-analysis-bifurcation-10",
  "level": "2",
  "url": "parameter-analysis.html#parameter-analysis-bifurcation-10",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "saddle-node bifurcation "
},
{
  "id": "parameter-analysis-bifurcation-11",
  "level": "2",
  "url": "parameter-analysis.html#parameter-analysis-bifurcation-11",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "bifurcation diagram "
},
{
  "id": "saddle-node-bifurcation-diagram",
  "level": "2",
  "url": "parameter-analysis.html#saddle-node-bifurcation-diagram",
  "type": "Figure",
  "number": "94",
  "title": "",
  "body": " Bifurcation diagram for     "
},
{
  "id": "parameter-analysis-wrap-up-2",
  "level": "2",
  "url": "parameter-analysis.html#parameter-analysis-wrap-up-2",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Parameters control behavior: Bifurcation diagrams "
},
{
  "id": "logistical-models",
  "level": "1",
  "url": "logistical-models.html",
  "type": "Section",
  "number": "",
  "title": "Logistical Models",
  "body": " Logistical Models       The Logistic Model  One of the most famous autonomous differential equations is the logistic model , which describes population growth when there are limited resources. The equation is:   where is the population at time , is the growth rate, and is the carrying capacity , the maximum population that the environment can sustain.  This equation has two equilibrium points:   (extinction),  (population stabilizes at carrying capacity).   The phase line for this model shows:   At , the equilibrium is unstable, any small population increase leads to growth.  At , the equilibrium is stable, populations near this value settle toward it.  When , populations increase.  When , populations decrease.   This model captures how populations grow rapidly when small, slow down as they approach the carrying capacity, and eventually level off.   Logistic Model Analysis   Consider the logistic equation .  Identify the equilibrium points.  Sketch the phase line and classify the stability of each equilibrium.  Explain how this model describes long-term population behavior.      The equilibrium points are and .  On the phase line:   is a source (unstable).  is a sink (stable).   Populations grow when between and , and shrink when above . The model predicts eventual stabilization at the carrying capacity.    The logistic model is sometimes written in a slightly different form:   where is the carrying capacity and is the growth-rate constant. This form emphasizes that growth is proportional to both the current population and the remaining resource capacity .  This is still a first-order autonomous differential equation, but unlike the exponential model, it is nonlinear since the right-hand side is not a linear function of .  The analysis is the same: the equilibria are and . The phase line tells us their stability, just like before.   A Modified Logistic Model  Let's now consider a variation on the logistic model that includes an important ecological detail, what happens to very small populations. The standard logistic model assumes that populations always grow when small, but in reality, sparse populations can have difficulty finding mates, making growth negative at low levels.  As an example, consider pine squirrels in the Rocky Mountains. These animals are territorial, and both overcrowding and underpopulation can limit their growth:   If the population is too large , territorial conflict slows growth or even causes decline.  If the population is too small , individuals may not find mates, also resulting in decline.  If the population is exactly zero, it stays at zero forever.   Let's model this situation. We define:   = time,  = squirrel population at time ,  = growth-rate coefficient,  = carrying capacity (too large),  = sparsity threshold (too small).   We want the growth rate to satisfy the following:   if or ,  if ,  .   A function with this behavior might look like:   This is the modified logistic model . It adjusts the standard model to account for low-population risks.  Let's analyze it. The equilibrium points occur where the right-hand side equals zero:   (extinction),  (sparsity threshold),  (carrying capacity).   The phase line tells us:   is a stable equilibrium (a sink).  is an unstable equilibrium (a source).  is a stable equilibrium (a sink).   This model better captures real-world behavior by showing that small populations might go extinct if they fall below the sparsity threshold.   Modified Logistic Model Analysis  Consider the differential equation:   Find all equilibrium solutions.  Sketch the phase line and label the stability of each equilibrium.  Explain how this model improves on the standard logistic model.     Equilibrium points: , , .  Phase line summary:   is a sink (stable).  is a source (unstable).  is a sink (stable).   Between and , populations decrease. Between and , populations increase. Above , populations decrease. This reflects the idea that populations only grow when they're within a safe range, not too small and not too large.      📤 Wrap-Up    🗝️ Key Takeaways..       Check Your Understanding   📖❓Logistical Models      "
},
{
  "id": "the-logistical-model-10",
  "level": "2",
  "url": "logistical-models.html#the-logistical-model-10",
  "type": "🌌 Example",
  "number": "96",
  "title": "Logistic Model Analysis.",
  "body": " Logistic Model Analysis   Consider the logistic equation .  Identify the equilibrium points.  Sketch the phase line and classify the stability of each equilibrium.  Explain how this model describes long-term population behavior.      The equilibrium points are and .  On the phase line:   is a source (unstable).  is a sink (stable).   Populations grow when between and , and shrink when above . The model predicts eventual stabilization at the carrying capacity.   "
},
{
  "id": "modified-logistical-model-17",
  "level": "2",
  "url": "logistical-models.html#modified-logistical-model-17",
  "type": "Checkpoint",
  "number": "97",
  "title": "Modified Logistic Model Analysis.",
  "body": " Modified Logistic Model Analysis  Consider the differential equation:   Find all equilibrium solutions.  Sketch the phase line and label the stability of each equilibrium.  Explain how this model improves on the standard logistic model.     Equilibrium points: , , .  Phase line summary:   is a sink (stable).  is a source (unstable).  is a sink (stable).   Between and , populations decrease. Between and , populations increase. Above , populations decrease. This reflects the idea that populations only grow when they're within a safe range, not too small and not too large.   "
},
{
  "id": "logistical-models-cyu-bundle",
  "level": "2",
  "url": "logistical-models.html#logistical-models-cyu-bundle",
  "type": "Checkpoint",
  "number": "98",
  "title": "📖❓Logistical Models.",
  "body": " 📖❓Logistical Models  "
},
{
  "id": "qualitative-methods-9",
  "level": "1",
  "url": "qualitative-methods-9.html",
  "type": "Section",
  "number": "",
  "title": "Chapter 5 Exercises",
  "body": " Chapter 5 Exercises   ᯓ★❓Quick-Answer Questions   Multiple-Choice   Does time matter here?   For the autonomous equation , the slope field shows a slope of at . What is the slope at ?      The slope doesn't magically flatten; it's determined by .     The sign doesn't flip when changes—time isn't part of the slope function.     Correct! Autonomous equations ignore entirely. If , the slope is always , no matter the time.    Impossible to know  It's absolutely possible—you just evaluate at .      Horizontal Shift Symmetry   Fill in the blank: If is a solution to an autonomous equation, then _______ is also guaranteed to be a solution.      Correct—autonomous equations allow time-shifted versions of any solution.     No—scaling the solution doesn't necessarily work unless the equation is linear.     No—adding a constant changes in a way that won't satisfy the DE.     Raising the solution to a power doesn't preserve the equation's behavior.      Time Shifts in Practice   A biologist models population growth with the autonomous equation They find a solution curve that fits data collected in spring. Which of the following will always produce another valid solution?      Yes! Sliding the solution along the t-axis still solves the equation.     Scaling won't necessarily satisfy the same DE.     Adding to changes the values in a way that usually breaks the equation.     Reversing time is not the same as sliding it—it usually won't satisfy the DE.     Equilibrium Identification   For the equation which of the following is an equilibrium solution?          Stability Classification   For the same equation which of the following best describes the equilibrium at ?    Stable (sink)  Unstable (source)  Semi-stable (node)  Not an equilibrium point     Short-Answer   📖❓Phase Line Practice    Sketch a phase line for the equation Then classify each equilibrium solution as a sink, source, or node.    Review Questions    What is an autonomous differential equation?  How do you find equilibrium solutions for an autonomous equation?  What does the phase line represent, and how is it useful?  How can you determine the stability of an equilibrium solution using the phase line?   Answer each question briefly:         Exercises  Practice Problems  Try these problems to reinforce your understanding:  Sketch the slope field for .  Identify the equilibrium solutions and their stability.  Draw the phase line for the equation and describe the long-term behavior of solutions.     Exploring Nonlinear Dynamics  Consider the nonlinear equation .  Find the equilibrium solutions.  Sketch the phase line and indicate the stability of each equilibrium.  Discuss how this equation might model a system with multiple stable states.      Exploring Chaos in Autonomous Systems  Consider the equation .  Identify the equilibrium solutions.  Discuss whether this system exhibits chaotic behavior or not.  Sketch the phase line and describe the long-term behavior of solutions.      Exploring Real-World Applications  Consider a population of rabbits modeled by the equation , where is the growth rate and is the carrying capacity.  Identify the equilibrium solutions.  Sketch the phase line and describe the stability of each equilibrium.  Discuss how this model can help predict population dynamics over time.      Find the Equilibrium Solution   Find the equilibrium solutions for the autonomous differential equation .    To find equilibrium solutions, we set . This gives us the solution . So, is the only equilibrium solution for this equation.  This means that if the solution starts at , it will remain at zero for all time. If it starts anywhere else, it will either increase or decrease away from zero.    Finding Equilibrium Points   Find all equilibrium solutions of the autonomous differential equation .    To find the equilibrium solutions, we set the right-hand side equal to zero:   Factoring gives us:   This has solutions:       These are the equilibrium solutions where the slope is zero. At these points, the solution does not change over time.    Phase Line Sketching   Sketch a phase line for the equation Then classify each equilibrium point as a sink, source, or node.     "
},
{
  "id": "c5-quick-answer-2-1",
  "level": "2",
  "url": "qualitative-methods-9.html#c5-quick-answer-2-1",
  "type": "Reading Question",
  "number": "1",
  "title": "Multiple-Choice.",
  "body": "Multiple-Choice   Does time matter here?   For the autonomous equation , the slope field shows a slope of at . What is the slope at ?      The slope doesn't magically flatten; it's determined by .     The sign doesn't flip when changes—time isn't part of the slope function.     Correct! Autonomous equations ignore entirely. If , the slope is always , no matter the time.    Impossible to know  It's absolutely possible—you just evaluate at .      Horizontal Shift Symmetry   Fill in the blank: If is a solution to an autonomous equation, then _______ is also guaranteed to be a solution.      Correct—autonomous equations allow time-shifted versions of any solution.     No—scaling the solution doesn't necessarily work unless the equation is linear.     No—adding a constant changes in a way that won't satisfy the DE.     Raising the solution to a power doesn't preserve the equation's behavior.      Time Shifts in Practice   A biologist models population growth with the autonomous equation They find a solution curve that fits data collected in spring. Which of the following will always produce another valid solution?      Yes! Sliding the solution along the t-axis still solves the equation.     Scaling won't necessarily satisfy the same DE.     Adding to changes the values in a way that usually breaks the equation.     Reversing time is not the same as sliding it—it usually won't satisfy the DE.     Equilibrium Identification   For the equation which of the following is an equilibrium solution?          Stability Classification   For the same equation which of the following best describes the equilibrium at ?    Stable (sink)  Unstable (source)  Semi-stable (node)  Not an equilibrium point    "
},
{
  "id": "c5-quick-answer-2-2",
  "level": "2",
  "url": "qualitative-methods-9.html#c5-quick-answer-2-2",
  "type": "Reading Question",
  "number": "2",
  "title": "Short-Answer.",
  "body": "Short-Answer   📖❓Phase Line Practice    Sketch a phase line for the equation Then classify each equilibrium solution as a sink, source, or node.    Review Questions    What is an autonomous differential equation?  How do you find equilibrium solutions for an autonomous equation?  What does the phase line represent, and how is it useful?  How can you determine the stability of an equilibrium solution using the phase line?   Answer each question briefly:     "
},
{
  "id": "qualitative-methods-9-3-2",
  "level": "2",
  "url": "qualitative-methods-9.html#qualitative-methods-9-3-2",
  "type": "Exercise",
  "number": "1",
  "title": "Practice Problems.",
  "body": "Practice Problems  Try these problems to reinforce your understanding:  Sketch the slope field for .  Identify the equilibrium solutions and their stability.  Draw the phase line for the equation and describe the long-term behavior of solutions.    "
},
{
  "id": "qualitative-methods-9-3-3",
  "level": "2",
  "url": "qualitative-methods-9.html#qualitative-methods-9-3-3",
  "type": "Exercise",
  "number": "2",
  "title": "Exploring Nonlinear Dynamics.",
  "body": "Exploring Nonlinear Dynamics  Consider the nonlinear equation .  Find the equilibrium solutions.  Sketch the phase line and indicate the stability of each equilibrium.  Discuss how this equation might model a system with multiple stable states.     "
},
{
  "id": "qualitative-methods-9-3-4",
  "level": "2",
  "url": "qualitative-methods-9.html#qualitative-methods-9-3-4",
  "type": "Exercise",
  "number": "3",
  "title": "Exploring Chaos in Autonomous Systems.",
  "body": "Exploring Chaos in Autonomous Systems  Consider the equation .  Identify the equilibrium solutions.  Discuss whether this system exhibits chaotic behavior or not.  Sketch the phase line and describe the long-term behavior of solutions.     "
},
{
  "id": "qualitative-methods-9-3-5",
  "level": "2",
  "url": "qualitative-methods-9.html#qualitative-methods-9-3-5",
  "type": "Exercise",
  "number": "4",
  "title": "Exploring Real-World Applications.",
  "body": "Exploring Real-World Applications  Consider a population of rabbits modeled by the equation , where is the growth rate and is the carrying capacity.  Identify the equilibrium solutions.  Sketch the phase line and describe the stability of each equilibrium.  Discuss how this model can help predict population dynamics over time.     "
},
{
  "id": "qualitative-methods-9-3-6",
  "level": "2",
  "url": "qualitative-methods-9.html#qualitative-methods-9-3-6",
  "type": "Exercise",
  "number": "5",
  "title": "Find the Equilibrium Solution.",
  "body": "Find the Equilibrium Solution   Find the equilibrium solutions for the autonomous differential equation .    To find equilibrium solutions, we set . This gives us the solution . So, is the only equilibrium solution for this equation.  This means that if the solution starts at , it will remain at zero for all time. If it starts anywhere else, it will either increase or decrease away from zero.   "
},
{
  "id": "qualitative-methods-9-3-7",
  "level": "2",
  "url": "qualitative-methods-9.html#qualitative-methods-9-3-7",
  "type": "Exercise",
  "number": "6",
  "title": "Finding Equilibrium Points.",
  "body": "Finding Equilibrium Points   Find all equilibrium solutions of the autonomous differential equation .    To find the equilibrium solutions, we set the right-hand side equal to zero:   Factoring gives us:   This has solutions:       These are the equilibrium solutions where the slope is zero. At these points, the solution does not change over time.   "
},
{
  "id": "qualitative-methods-9-3-8",
  "level": "2",
  "url": "qualitative-methods-9.html#qualitative-methods-9-3-8",
  "type": "Exercise",
  "number": "7",
  "title": "Phase Line Sketching.",
  "body": "Phase Line Sketching   Sketch a phase line for the equation Then classify each equilibrium point as a sink, source, or node.   "
},
{
  "id": "whats-a-numerical-soln",
  "level": "1",
  "url": "whats-a-numerical-soln.html",
  "type": "Section",
  "number": "",
  "title": "What is a Numerical Solution?",
  "body": " What is a Numerical Solution?  Most of what we've done, so far, has been focused on finding exact solutions to differential equations, like . This kind of solution is called an analytic solution , or sometimes a closed-form solution . It is valuable because it expresses as a formula-like structure that you can plug in any value of and instantly get the exact -value.  However, many differential equations, such as   simply don't have a tidy closed-form solution. In those cases, we switch tools. Instead of searching for an exact formula, we use a numerical method . A numerical method doesn't hand you as a formula—it builds an approximation , one step at a time, starting from what you know and using the differential equation to predict what happens next. The result is a numerical solution .   📖❓Analytic Solution, AKA …  What is another name for an analytic solution?    Closed-form solution  Yes , a closed-form solution is another name for an analytic solution.    Approximate solution  No , an approximate solution refers to a numerical solution.    Continuous solution  Not all analytic solutions are continuous , and not all continuous solutions are analytic.    Systematic solution  While you may solve analytically using a systematic process, this is not a name for an analytic solution.    Analytic means a symbolic expression using functions, not a numerical approximation or a rule.    Analytic vs. Numerical Solutions  To see the difference between analytic and numerical solutions, consider the initial value problem:   Analytically, this equation has the elegant solution:    . With this formula, you can calculate the exact value at any time. For example, gives .          The same equation can also be solved numerically. Instead of a formula, we produce a table of -values and approximate -values:      (approx)  0.00 1.0000  0.25 1.2500  0.50 1.5625  0.75 1.9531  … …     Plot the  points           📖❓Recognizing a Numerical Solution  When you say you've found a numerical solution to an initial value problem, what do you actually have?    A list of values approximating at specific times  Correct—numerical solutions are tables of approximate values, not formulas.    A formula expressing using functions like or  No, that describes an analytic solution.    An exact solution valid for all  No, numerical solutions are approximations.    A graph showing all possible solutions  No, that describes a slope field, not a numerical solution.     The analytic solution gives a smooth curve for every . The numerical solution gives dots —a sequence of approximations. Connect those dots and you get a picture of the solution's shape, even though no formula was found.   Precision vs Practicality  Numerical solutions are approximations . They carry small errors, but in exchange, they let us handle equations that analytic methods can't touch. This trade-off between perfect precision and practical usefulness is at the heart of numerical methods.    Analytic vs. Numerical Solution Summary                   Closed-form solutions  Approximate solutions        formula in   Table of & values       Exact  Approximate       Curve  Points       Why Do We Need Numerical Methods?  At first glance, analytic solutions might seem better than numerical ones. But there are important reasons why numerical methods aren't just useful—they're essential:   Many equations simply don't have a closed-form solution.  Even when they do, the formula might be so complicated it's impractical.  Numerical methods are easier to tweak if the model or data changes.    📖❓Why use numerical methods?  Which of the following are good reasons to use a numerical method?    They can approximate a solution when no closed-form solution exists.  True—sometimes they're the only option.    They can be automated on a computer.  True—they're ideal for computer simulations.    They are easier to adjust when the equation changes.  True—numerical methods adapt easily to model tweaks.    They produce more accurate solutions than analytic methods.  No—analytic solutions are exact when they exist.       📤 Wrap-Up    🗝️ Key Takeaways..   Analytic solutions give formulas; numerical solutions give a list of values.  Analytic solutions are exact; numerical solutions are approximate.  Numerical solutions are essential when analytic solutions are too complicated or don't exist.      "
},
{
  "id": "whats-a-numerical-soln-2",
  "level": "2",
  "url": "whats-a-numerical-soln.html#whats-a-numerical-soln-2",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "analytic solution closed-form solution "
},
{
  "id": "whats-a-numerical-soln-5",
  "level": "2",
  "url": "whats-a-numerical-soln.html#whats-a-numerical-soln-5",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "numerical method approximation numerical solution "
},
{
  "id": "whats-a-numerical-soln-chkpt-1",
  "level": "2",
  "url": "whats-a-numerical-soln.html#whats-a-numerical-soln-chkpt-1",
  "type": "Checkpoint",
  "number": "99",
  "title": "📖❓Analytic Solution, AKA ….",
  "body": " 📖❓Analytic Solution, AKA …  What is another name for an analytic solution?    Closed-form solution  Yes , a closed-form solution is another name for an analytic solution.    Approximate solution  No , an approximate solution refers to a numerical solution.    Continuous solution  Not all analytic solutions are continuous , and not all continuous solutions are analytic.    Systematic solution  While you may solve analytically using a systematic process, this is not a name for an analytic solution.    Analytic means a symbolic expression using functions, not a numerical approximation or a rule.  "
},
{
  "id": "whats-a-numerical-soln-chkpt-2",
  "level": "2",
  "url": "whats-a-numerical-soln.html#whats-a-numerical-soln-chkpt-2",
  "type": "Checkpoint",
  "number": "100",
  "title": "📖❓Recognizing a Numerical Solution.",
  "body": " 📖❓Recognizing a Numerical Solution  When you say you've found a numerical solution to an initial value problem, what do you actually have?    A list of values approximating at specific times  Correct—numerical solutions are tables of approximate values, not formulas.    A formula expressing using functions like or  No, that describes an analytic solution.    An exact solution valid for all  No, numerical solutions are approximations.    A graph showing all possible solutions  No, that describes a slope field, not a numerical solution.    "
},
{
  "id": "whats-a-numerical-soln-process-precision-v-practical",
  "level": "2",
  "url": "whats-a-numerical-soln.html#whats-a-numerical-soln-process-precision-v-practical",
  "type": "📝",
  "number": "101",
  "title": "Precision vs Practicality.",
  "body": " Precision vs Practicality  Numerical solutions are approximations . They carry small errors, but in exchange, they let us handle equations that analytic methods can't touch. This trade-off between perfect precision and practical usefulness is at the heart of numerical methods.  "
},
{
  "id": "whats-a-numerical-soln-analytic-v-numerical-note",
  "level": "2",
  "url": "whats-a-numerical-soln.html#whats-a-numerical-soln-analytic-v-numerical-note",
  "type": "Table",
  "number": "102",
  "title": "Analytic vs. Numerical Solution Summary",
  "body": " Analytic vs. Numerical Solution Summary                   Closed-form solutions  Approximate solutions        formula in   Table of & values       Exact  Approximate       Curve  Points    "
},
{
  "id": "whats-a-numerical-soln-chkpt-3",
  "level": "2",
  "url": "whats-a-numerical-soln.html#whats-a-numerical-soln-chkpt-3",
  "type": "Checkpoint",
  "number": "103",
  "title": "📖❓Why use numerical methods?",
  "body": " 📖❓Why use numerical methods?  Which of the following are good reasons to use a numerical method?    They can approximate a solution when no closed-form solution exists.  True—sometimes they're the only option.    They can be automated on a computer.  True—they're ideal for computer simulations.    They are easier to adjust when the equation changes.  True—numerical methods adapt easily to model tweaks.    They produce more accurate solutions than analytic methods.  No—analytic solutions are exact when they exist.    "
},
{
  "id": "eulers-method-one-step",
  "level": "1",
  "url": "eulers-method-one-step.html",
  "type": "Section",
  "number": "",
  "title": "Thinking in Steps: How Euler’s Method Works One Step at a Time",
  "body": " Thinking in Steps: How Euler's Method Works One Step at a Time   This shift towards numerical approximation is not just a workaround but a powerful approach that expands our capacity to solve differential equations arising in complex systems where exact solutions are not readily derivable. Euler's method, as we will see, is the entry point into this expansive field of computational mathematics, demonstrating how straightforward concepts can approximate solutions to complex problems.    Iterative Methods—Thinking in Steps  Most numerical methods are iterative , which means they don't try to solve the whole problem at once. Instead, they repeat the same small task again and again.  That task is simple: use the information you already have to generate new information. Do it once, you get the next step. Do it a hundred times, you build a whole solution.  So, the key to understanding an iterative method is by learning its task.   📖❓ What does iterative mean?   Euler's method (and most numerical methods) are described as iterative . What does that mean in practice?     It repeats a single simple step many times to build up a solution.  Correct — iterative methods loop the same calculation to generate new information.    It always produces the exact solution in one step.  No — that's the opposite of iterative thinking. Iteration builds up an approximate solution step by step.    It skips steps and jumps straight to the final answer.  No — iterative methods never skip. They accumulate results step by step.    It uses only algebra, not calculus, to solve equations.  Not quite — Euler's method uses the slope from calculus, but applies it in a repetitive way.       Euler's Method Task  For Euler's method, the repeated task can be summed up like this:   from a known point, move to a nearby point along the direction of the slope.   Think of following a hiking trail using only a compass—you don't know exactly where the trail ends, but if you keep stepping in the right direction, you'll trace the path. In Euler's method, that direction is the slope from the differential equation.  More precisely, if is a point on the solution and you know the slope there, you can predict where the next point will be.  To understand this one step, we'll answer two guiding questions:   What does it mean to move in the direction of a slope?  Given a point, slope, and step size, what is the formula for the next point?     Moving in the Direction of a Slope  First question: What does it mean to move in the direction of a slope? Suppose you're at the point and the slope there is .  Slope is rise over run : for every unit you move horizontally ( run ), you move a certain amount vertically ( rise ). From , a slope of means that for every 2 units of run, you rise 3 units, like so: .  So moving from in a direction with slope , lands you at . See .   Rise Clarification   Rise doesn't always mean up —if the slope is negative, rise is actually a fall. We'll keep calling it rise for simplicity, but remember it might point downward.   Of course, there's nothing special about using a run of 2. We could have used (rise would then be 6) or even (rise would be ). All of the following fractions   describe the same slope, which can be visualized in .  In Euler's method, we intentionally choose a small run called the step size, . Therefore, for a small run, , you get the corresponding rise by:   So given a direction (slope) to move and the step size ( ) to take, this formula gives you the rise. Next, we'll see how this simple relationship is the core of Euler's one-step move.    Same Slope, Different Rise and Runs    Rise , run       Rise , run       Rise , run          📖❓ Calculating the Rise   Suppose the slope at a point is and you take a step size of . What is the rise over that step?      Yes — rise = slope × step size = .     That's the slope itself, not the rise for the small step.     That's the step size (run), not the rise.     Double-check the multiplication — slope × step size is much smaller.       The Movement Rule  Now that we've decided how to take a step, we can write it as a formula.  From basic geometry, a new point is just the old point plus the changes:  . Euler's method sets the run to the step size and the rise to . Substituting those gives the update rule:  . This single equation captures the whole one-step task: start at the current point, find the slope, take a step of size in that direction, and you land at the next point. Euler's method is simply this step repeated many times.   📖❓ Understanding the Movement Formula   What does the term represent in Euler's movement rule?     The change in over the chosen step.  Correct — the slope tells the direction, and scales it into a small rise.    The next value.  No — the update is handled separately as .    The slope of the entire solution curve.  Careful — this is the slope at a single point, not the whole curve.    The error made by Euler's method in each step.  Not true — is the predicted rise, not the error.       📤 Wrap-Up    🗝️ Key Takeaways..   Numerical methods like Euler's are iterative: they repeat one simple step to build a full solution.  Euler's one-step task is move from where you are in the direction of the slope.  Choosing a step size sets the run, and the rise is just .  Euler's method is based on the movement rule .     Check Your Understanding   📖❓ Big Picture of Euler's Step   Which statement best describes what Euler's method does one step at a time ?     From a current point, it uses the slope to predict the next point.  Correct — Euler's method is nothing more than this step, done over and over.    It finds one term of the exact general solution.  No — finding terms of the solution would be an analytic method.    It moves to a nearby point on the solution curve.  No — if you knew where the solution curve was, you would already have the solution to the equation.    It approximates the roots of the characteristic equation.  No — Euler's approximates points of the solution, not the roots of the characteristic equation.        "
},
{
  "id": "eulers-method-one-step-cyu-iterative",
  "level": "2",
  "url": "eulers-method-one-step.html#eulers-method-one-step-cyu-iterative",
  "type": "Checkpoint",
  "number": "104",
  "title": "📖❓ What does “iterative” mean?",
  "body": " 📖❓ What does iterative mean?   Euler's method (and most numerical methods) are described as iterative . What does that mean in practice?     It repeats a single simple step many times to build up a solution.  Correct — iterative methods loop the same calculation to generate new information.    It always produces the exact solution in one step.  No — that's the opposite of iterative thinking. Iteration builds up an approximate solution step by step.    It skips steps and jumps straight to the final answer.  No — iterative methods never skip. They accumulate results step by step.    It uses only algebra, not calculus, to solve equations.  Not quite — Euler's method uses the slope from calculus, but applies it in a repetitive way.    "
},
{
  "id": "eulers-method-one-step-direction-5",
  "level": "2",
  "url": "eulers-method-one-step.html#eulers-method-one-step-direction-5",
  "type": "📝",
  "number": "105",
  "title": "“Rise” Clarification.",
  "body": " Rise Clarification   Rise doesn't always mean up —if the slope is negative, rise is actually a fall. We'll keep calling it rise for simplicity, but remember it might point downward.  "
},
{
  "id": "multiple-rise-run",
  "level": "2",
  "url": "eulers-method-one-step.html#multiple-rise-run",
  "type": "Figure",
  "number": "106",
  "title": "",
  "body": " Same Slope, Different Rise and Runs    Rise , run       Rise , run       Rise , run        "
},
{
  "id": "eulers-method-one-step-cyu-rise-calc",
  "level": "2",
  "url": "eulers-method-one-step.html#eulers-method-one-step-cyu-rise-calc",
  "type": "Checkpoint",
  "number": "107",
  "title": "📖❓ Calculating the Rise.",
  "body": " 📖❓ Calculating the Rise   Suppose the slope at a point is and you take a step size of . What is the rise over that step?      Yes — rise = slope × step size = .     That's the slope itself, not the rise for the small step.     That's the step size (run), not the rise.     Double-check the multiplication — slope × step size is much smaller.    "
},
{
  "id": "eulers-method-one-step-cyu-rule-concept",
  "level": "2",
  "url": "eulers-method-one-step.html#eulers-method-one-step-cyu-rule-concept",
  "type": "Checkpoint",
  "number": "108",
  "title": "📖❓ Understanding the Movement Formula.",
  "body": " 📖❓ Understanding the Movement Formula   What does the term represent in Euler's movement rule?     The change in over the chosen step.  Correct — the slope tells the direction, and scales it into a small rise.    The next value.  No — the update is handled separately as .    The slope of the entire solution curve.  Careful — this is the slope at a single point, not the whole curve.    The error made by Euler's method in each step.  Not true — is the predicted rise, not the error.    "
},
{
  "id": "eulers-method-one-step-cyu-summary",
  "level": "2",
  "url": "eulers-method-one-step.html#eulers-method-one-step-cyu-summary",
  "type": "Checkpoint",
  "number": "109",
  "title": "📖❓ Big Picture of Euler’s Step.",
  "body": " 📖❓ Big Picture of Euler's Step   Which statement best describes what Euler's method does one step at a time ?     From a current point, it uses the slope to predict the next point.  Correct — Euler's method is nothing more than this step, done over and over.    It finds one term of the exact general solution.  No — finding terms of the solution would be an analytic method.    It moves to a nearby point on the solution curve.  No — if you knew where the solution curve was, you would already have the solution to the equation.    It approximates the roots of the characteristic equation.  No — Euler's approximates points of the solution, not the roots of the characteristic equation.    "
},
{
  "id": "eulers-method-full",
  "level": "1",
  "url": "eulers-method-full.html",
  "type": "Section",
  "number": "",
  "title": "Euler’s Method: The Full Process",
  "body": " Euler's Method: The Full Process   In the previous section, we zoomed in on the single step at the heart of Euler's method: move forward by a small amount in , and adjust by times the slope. Now we'll zoom out. By repeating that step again and again, we can march across an interval, building an approximate solution point by point.    A Concrete Step Through Euler's Method  Before writing any formulas, it helps to see what Euler's Method feels like. Think of Euler's method like crossing a landscape with only a compass. You know where you start. At each step, you check your direction (the slope from the differential equation), take a small stride that way, then check again. That back-and-forth of step, check, adjust is the rhythm of the method.   The Goal  Suppose we have the initial value problem . Let's approximate the solution at the equally-spaced -values: . This tells us that our goal is to approximate the -values at the following points:  . Luckily, the first value is just the initial condition, , so we add it to the list: . Starting at , Euler's method finds the rest of the points, one-by-one.    Approximating the Next Point  From , we need to get to . Clearly, the run is , but we also need the slope for our movement direction. This comes directly from the differential equation: .  Moving from with a slope of and a run of is given by: .  Therefore, the next point is and our approximation list becomes: .    Approximating the Rest of the Points  To get the third and fourth point, we just repeat what we just did.  At , we get the slope from: .  Using this slope and the same run, we get the third point: .  Now we are at and the slope we move this time is: .  and our final point is given by: .  With this, our approximation is now complete: .  A plot of the process is given in .   (left) Euler's method approximation of the solution to with step size . (right) Plot of each point in the approximation.         (approx)                                        Euler's Method  Now let's generalize the concrete example. As we do, check the footnotes for the concrete version of each equation and step.  Consider an initial value problem:  .  We divide into equally spaced values (a distance apart):      Using the shorthand , our goal is to approximate the points:      The first point, , is known since it is the initial condition. The remaining points are approximated using the movement rule , where cur is and new is :  . The slope is found from in the differential equation, so the rule becomes:   Extracting just the -coordinate, gives the update rule for Euler's method:   That's it. All of the values in the table of can be found with this formula.   Match Euler's Method Parts to their Meaning   Assume the current approximation using Euler's Method is denoted by . In this context, match the mathematical expression with its meaning.    These pairings are essential when converting a piecewise function into unit step form. The form you choose depends entirely on where each piece is active.      The value of the next approximation.     The value of the previous approximation.     The distance between and .     The slope of the solution at the current approximation.     The value of the current approximation.     The rise (or fall) in the value from the current approximation to the next approximation.      Euler's Method  Given an initial value problem   approximate the solution with the following steps:   Select step size  Choosing a step size determines where for .   Apply Euler's update rule  For to , compute      Desipte being based on relatively simple idea, Euler's method reveals something profound: with nothing more than a starting point and slope formula, you can approximate a solution that no closed-form equation could describe.    Examples   Euler's Method Example   Use Euler's method to approximate the solution to the differential equation over the interval with a step size of .     . The step size is , so the approximation locations are .   . The initial condition gives the first value in our approximation, .  Now, we can use the formula to find , and as follows:            The simplified calculations are summarized in the following table:                                Thus, the approximate solution to the initial-value problem is   We can visualize the approximation by plotting the points and connecting them with line segments. The exact solution to the initial-value problem is given by   The following plot shows the approximation and the exact solution.     The red curve is the exact solution, while the green points are the approximated values at . The blue line segments connect the points in the approximation, showing how Euler's method steps through the solution.  The following plot shows the approximation and the exact solution, with a grid for better visualization.                Analytical and Numerical Solutions   Consider the differential equation .   Find the analytical solution to this equation using the method of separation of variables.    Use Euler's method with a step size of to approximate the solution at .    Compare the analytical solution with the numerical approximation obtained from Euler's method.       To solve the differential equation using the method of separation of variables, we separate the variables as follows: Integrating both sides gives: Exponentiating both sides results in: Since the initial condition, , gives , the analytical solution is:   Next, we apply Euler's method to approximate the solution at . The general formula for Euler's method is: where and . So, we can update the formula as:   For , we contruct the following table:                                            Since , the approximation we are looking for is .  Comparing this with the analytical solution at , we see the true value is: Although there is some error between the two values, it is more due to the step size we chose, rather than the method itself. A smaller step size would yield a more accurate approximation. For example, using gives the approximation: .     Example: Euler's Method with   Use Euler's method to approximate the solution to over to using step size .    The formula is:            0 0.0 -2.0 -3.0    1 0.5 -3.0 -3.0    2 1.0 -3.0 -1.5    Thus, the approximate values are:      Euler's method runs on an intuitive idea: use the slope at each point to predict the next point. It's simple, but that simplicity is its strength. This method is often the first stepping stone into the world of numerical methods and the same pattern of predict, step, repeat forms the backbone of many other techniques.   📤 Wrap-Up    🗝️ Key Takeaways..   Euler's Method turns slope information into a sequence of small steps forward.  Each step uses the simple rule: .  Smaller step sizes usually mean better accuracy — but more steps.  This method is the foundation for more advanced numerical techniques.      "
},
{
  "id": "eulers-method-concrete-table-plot",
  "level": "2",
  "url": "eulers-method-full.html#eulers-method-concrete-table-plot",
  "type": "Figure",
  "number": "110",
  "title": "",
  "body": " (left) Euler's method approximation of the solution to with step size . (right) Plot of each point in the approximation.         (approx)                           "
},
{
  "id": "eulers-method-concrete-6",
  "level": "2",
  "url": "eulers-method-full.html#eulers-method-concrete-6",
  "type": "🎮 Interactive",
  "number": "111",
  "title": "<code class=\"code-inline tex2jax_ignore\">[provisional cross-reference: WORK-IN-PROGRESS]<\/code>.",
  "body": "        "
},
{
  "id": "eulers-method-chkpt-1",
  "level": "2",
  "url": "eulers-method-full.html#eulers-method-chkpt-1",
  "type": "Checkpoint",
  "number": "112",
  "title": "Match Euler’s Method Parts to their Meaning.",
  "body": " Match Euler's Method Parts to their Meaning   Assume the current approximation using Euler's Method is denoted by . In this context, match the mathematical expression with its meaning.    These pairings are essential when converting a piecewise function into unit step form. The form you choose depends entirely on where each piece is active.      The value of the next approximation.     The value of the previous approximation.     The distance between and .     The slope of the solution at the current approximation.     The value of the current approximation.     The rise (or fall) in the value from the current approximation to the next approximation.    "
},
{
  "id": "euler-method",
  "level": "2",
  "url": "eulers-method-full.html#euler-method",
  "type": "✍🏻 Method",
  "number": "4",
  "title": "Euler’s Method.",
  "body": " Euler's Method  Given an initial value problem   approximate the solution with the following steps:   Select step size  Choosing a step size determines where for .   Apply Euler's update rule  For to , compute     "
},
{
  "id": "eulers-method-example-1",
  "level": "2",
  "url": "eulers-method-full.html#eulers-method-example-1",
  "type": "🌌 Example",
  "number": "113",
  "title": "Euler’s Method Example.",
  "body": " Euler's Method Example   Use Euler's method to approximate the solution to the differential equation over the interval with a step size of .     . The step size is , so the approximation locations are .   . The initial condition gives the first value in our approximation, .  Now, we can use the formula to find , and as follows:            The simplified calculations are summarized in the following table:                                Thus, the approximate solution to the initial-value problem is   We can visualize the approximation by plotting the points and connecting them with line segments. The exact solution to the initial-value problem is given by   The following plot shows the approximation and the exact solution.     The red curve is the exact solution, while the green points are the approximated values at . The blue line segments connect the points in the approximation, showing how Euler's method steps through the solution.  The following plot shows the approximation and the exact solution, with a grid for better visualization.              "
},
{
  "id": "eulers-method-example-2",
  "level": "2",
  "url": "eulers-method-full.html#eulers-method-example-2",
  "type": "🌌 Example",
  "number": "114",
  "title": "Analytical and Numerical Solutions.",
  "body": " Analytical and Numerical Solutions   Consider the differential equation .   Find the analytical solution to this equation using the method of separation of variables.    Use Euler's method with a step size of to approximate the solution at .    Compare the analytical solution with the numerical approximation obtained from Euler's method.       To solve the differential equation using the method of separation of variables, we separate the variables as follows: Integrating both sides gives: Exponentiating both sides results in: Since the initial condition, , gives , the analytical solution is:   Next, we apply Euler's method to approximate the solution at . The general formula for Euler's method is: where and . So, we can update the formula as:   For , we contruct the following table:                                            Since , the approximation we are looking for is .  Comparing this with the analytical solution at , we see the true value is: Although there is some error between the two values, it is more due to the step size we chose, rather than the method itself. A smaller step size would yield a more accurate approximation. For example, using gives the approximation: .   "
},
{
  "id": "eulers-method-example-3",
  "level": "2",
  "url": "eulers-method-full.html#eulers-method-example-3",
  "type": "🌌 Example",
  "number": "115",
  "title": "Example: Euler’s Method with <span class=\"process-math\">\\(h = 0.5\\)<\/span>.",
  "body": " Example: Euler's Method with   Use Euler's method to approximate the solution to over to using step size .    The formula is:            0 0.0 -2.0 -3.0    1 0.5 -3.0 -3.0    2 1.0 -3.0 -1.5    Thus, the approximate values are:    "
},
{
  "id": "numerical-methods-6",
  "level": "1",
  "url": "numerical-methods-6.html",
  "type": "Section",
  "number": "",
  "title": "Chapter 6 Exercises",
  "body": " Chapter 6 Exercises    Euler's Method   Approximate the solution to the differential equation  over the interval with a step size of .    fd     Use Euler's Method to approximate the solution to the initial-value problem,  at the -values (spaced 0.5 apart).    Euler's method works by replacing in with it's forward-difference approximation, giving us and if we let be the space between the -values (0.5), then we have   To see how this is helpful, we isolate as follows and the final step gives the approximation formula   Note that we already know from , so to find the rest of the approximation points, we plug into , as shown below.           Approximation Formula   Approximation                                                            Basic Euler's Method   Consider the initial-valued problem and answer the following:    Compute 2 iterations of Euler's method using step size .   %         What is the meaning of your answer in part (a)?  What is the meaning of your answer in part \\ref{Q1a}?        Compute 2 iterations of Euler's method using step size .            What is the meaning of your answer in part (b)?  What is the meaning of your answer in part \\ref{Q1b}?        Find the analytic solution to the IVP. Use your solution to compare the exact value of with and your answers from parts (a) and (b).  This DE is first order and linear, so we can solve it using an integrating factor. (There are other solution techniques, as well.)\\\\ We begin by putting the DE in the standard form for a first-order linear DE so that we can identif . We can see tha Then we can find the integrating facto  Now we multiply both sides of the DE by the integrating factor. Now we recall the product rule for derivatives: We note that the two terms on the left hand side of equation (\\ref{eq14-1}) are the result of taking the derivative of the product. Hence we can undo the product rule as follows: We would like to integrate both sides of the equation so we can isolat . On the right hand side, we will need to use integration by parts. We choos an as follows: by taking the derivative o an by taking the antiderivative o : Now we proceed by integrating as follows. Now we use the initial condition to find the value o . Hence, the solution is We can use this to fin  Note that the two numerical approximations wer (found using ) an (found using ). Both are reasonable approximations, but the approximation using the smaller step size is closer to the exact answer.            Basic Euler's Method   Consider the initial-valued problem and answer the following:    Use Euler's method to approximate using step size .   Hence          Use Euler's method to approximate using step size .   Hence          Which of the approximations above do you trust more?  Which of the approximations above do you trust more?        Find the analytic solution to the IVP. Use it to compute the exact value of and compare with your answers from parts (a) and (b).  There are multiple solution techniques that will work to solve this DE. We will separate variables here. Now we can apply the initial condition to find the value of the constant . Therefore the solution is We can use this to find  Note that the two numerical approximations wer (found usin ) an (found usin ). Both are reasonable approximations, but the approximation using the smaller step size is closer to the exact answer.            "
},
{
  "id": "numerical-methods-6-2-2",
  "level": "2",
  "url": "numerical-methods-6.html#numerical-methods-6-2-2",
  "type": "Exercise",
  "number": "1",
  "title": "",
  "body": " Approximate the solution to the differential equation  over the interval with a step size of .    fd   "
},
{
  "id": "numerical-methods-6-2-3",
  "level": "2",
  "url": "numerical-methods-6.html#numerical-methods-6-2-3",
  "type": "Exercise",
  "number": "2",
  "title": "",
  "body": " Use Euler's Method to approximate the solution to the initial-value problem,  at the -values (spaced 0.5 apart).    Euler's method works by replacing in with it's forward-difference approximation, giving us and if we let be the space between the -values (0.5), then we have   To see how this is helpful, we isolate as follows and the final step gives the approximation formula   Note that we already know from , so to find the rest of the approximation points, we plug into , as shown below.           Approximation Formula   Approximation                                                          "
},
{
  "id": "numerical-methods-6-2-4",
  "level": "2",
  "url": "numerical-methods-6.html#numerical-methods-6-2-4",
  "type": "Exercise",
  "number": "3",
  "title": "Basic Euler’s Method.",
  "body": " Basic Euler's Method   Consider the initial-valued problem and answer the following:    Compute 2 iterations of Euler's method using step size .   %         What is the meaning of your answer in part (a)?  What is the meaning of your answer in part \\ref{Q1a}?        Compute 2 iterations of Euler's method using step size .            What is the meaning of your answer in part (b)?  What is the meaning of your answer in part \\ref{Q1b}?        Find the analytic solution to the IVP. Use your solution to compare the exact value of with and your answers from parts (a) and (b).  This DE is first order and linear, so we can solve it using an integrating factor. (There are other solution techniques, as well.)\\\\ We begin by putting the DE in the standard form for a first-order linear DE so that we can identif . We can see tha Then we can find the integrating facto  Now we multiply both sides of the DE by the integrating factor. Now we recall the product rule for derivatives: We note that the two terms on the left hand side of equation (\\ref{eq14-1}) are the result of taking the derivative of the product. Hence we can undo the product rule as follows: We would like to integrate both sides of the equation so we can isolat . On the right hand side, we will need to use integration by parts. We choos an as follows: by taking the derivative o an by taking the antiderivative o : Now we proceed by integrating as follows. Now we use the initial condition to find the value o . Hence, the solution is We can use this to fin  Note that the two numerical approximations wer (found using ) an (found using ). Both are reasonable approximations, but the approximation using the smaller step size is closer to the exact answer.          "
},
{
  "id": "numerical-methods-6-2-5",
  "level": "2",
  "url": "numerical-methods-6.html#numerical-methods-6-2-5",
  "type": "Exercise",
  "number": "4",
  "title": "Basic Euler’s Method.",
  "body": " Basic Euler's Method   Consider the initial-valued problem and answer the following:    Use Euler's method to approximate using step size .   Hence          Use Euler's method to approximate using step size .   Hence          Which of the approximations above do you trust more?  Which of the approximations above do you trust more?        Find the analytic solution to the IVP. Use it to compute the exact value of and compare with your answers from parts (a) and (b).  There are multiple solution techniques that will work to solve this DE. We will separate variables here. Now we can apply the initial condition to find the value of the constant . Therefore the solution is We can use this to find  Note that the two numerical approximations wer (found usin ) an (found usin ). Both are reasonable approximations, but the approximation using the smaller step size is closer to the exact answer.          "
},
{
  "id": "linear-constant-coeffs",
  "level": "1",
  "url": "linear-constant-coeffs.html",
  "type": "Section",
  "number": "",
  "title": "The LHCC Equation",
  "body": " The LHCC Equation   Before learning how to solve Linear Homogeneous Constant Coefficient (LHCC) differential equations, it's important to identify these equations and understand the nature of their structure. In this section, we'll define what it means for a differential equation to be homogeneous, review how constant coefficients affect the form of the equation, and formally define what qualifies as an LHCC equation.    Linear Differential Equations & Forcing Functions  Recall that a differential equation is called linear if it only contains linear terms, meaning the dependent variable and its derivatives appear to the first power without multiplication or composed with one another.  An equation is nonlinear nonlinear if it includes terms like , , , or , where the dependent variable is raised to a power or multiplied by one of its derivatives.  A general -th order linear differential equation looks like this:   The coefficients and the right-hand side depend only on the independent variable, which we're calling . While we previously referred to as a constant term, in this context, it is known as the forcing function .  Forcing functions are not always easily identifiable on the right-hand side of a differential equation. Sometimes, terms and their derivatives may be mixed in, or parts of the forcing function may appear on the left.  For example, the equation the forcing function is not immediately clear. Rearranging it into standard form: reveals that the forcing function is .   📖❓ Identifying the Forcing Function   What is the forcing function in the differential equation?       Correct! The forcing function is the entire right-hand side of the equation.  `   This is the coefficient of the term, not the forcing function.     This is only part of the forcing function.     This is only part of the forcing function.       Constant Coefficients  A linear differential equation has constant coefficients if all the coefficients are constants rather than functions of the independent variable .  So, a linear differential equation with constant coefficients looks like:  . Here are a few examples of linear equations with constant coefficients:  , And here are some that do not have constant coefficients:  .  📖❓ Identifying Constant Coefficient Equations   Select all the linear differential equations that have constant coefficients.           Correct! All coefficients are constant.           Incorrect. The coefficient of is , which is not constant.           Correct! All coefficients are constant.           Incorrect. The coefficient is not a constant.        Homogeneous  A linear differential equation is homogeneous if the right-hand side is zero—that is, there is no forcing term. Otherwise, it is nonhomogeneous .  For example, the following equations are homogeneous:   These are nonhomogeneous because of the (boxed) right-hand side:    📖❓ Identifying Homogeneous Equations   Which of the following equations is homogeneous?         Correct! The right-hand side is zero, so the equation is homogeneous.         Incorrect. This equation looks homogeneous, but homogeneity only applies to linear equations.         Incorrect. The equation has a non-zero constant term, making it non-homogeneous.         Incorrect. The right-hand side has a non-zero function of , so this is non-homogeneous.        The LHCC Equation  Putting it all together, we arrive at the definition of an LHCC equation.    A linear homogeneous differential equation with constant coefficients (LHCC) has the form:   where all coefficients are constants.    The following equations are examples of LHCC equations:  .    The forcing function is the collection of all terms that are not multiplied by the dependent variable, typically written on the right-side.  An equation has constant coefficients when all the coefficients multiplying and its derivatives are fixed constants (not functions of ).  A differential equation is homogeneous if the forcing function is zero.  An equation is a inear omogeneous onstant oefficient equation.     📖❓ Matching Equations with Properties   Match each differential equation to its correct classification.    Good work! Recognizing equation types helps determine the best solution method.      Linear, Homogeneous, Constant Coefficients     Linear, Homogeneous, Nonconstant Coefficient      Linear, Nonhomogeneous, Constant Coefficient      Nonlinear     "
},
{
  "id": "forcing-functions-on-linear-eqns-2",
  "level": "2",
  "url": "linear-constant-coeffs.html#forcing-functions-on-linear-eqns-2",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "linear "
},
{
  "id": "forcing-functions-on-linear-eqns-3",
  "level": "2",
  "url": "linear-constant-coeffs.html#forcing-functions-on-linear-eqns-3",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "nonlinear "
},
{
  "id": "forcing-functions-on-linear-eqns-6",
  "level": "2",
  "url": "linear-constant-coeffs.html#forcing-functions-on-linear-eqns-6",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "forcing function "
},
{
  "id": "constant-coefficients-2",
  "level": "2",
  "url": "linear-constant-coeffs.html#constant-coefficients-2",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "constant coefficients "
},
{
  "id": "homogeneous-2",
  "level": "2",
  "url": "linear-constant-coeffs.html#homogeneous-2",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "homogeneous nonhomogeneous "
},
{
  "id": "def-lhcc-eqn",
  "level": "2",
  "url": "linear-constant-coeffs.html#def-lhcc-eqn",
  "type": "📙 Definition",
  "number": "116",
  "title": "",
  "body": "  A linear homogeneous differential equation with constant coefficients (LHCC) has the form:   where all coefficients are constants.   "
},
{
  "id": "linear-constant-coeffs-wrapup",
  "level": "2",
  "url": "linear-constant-coeffs.html#linear-constant-coeffs-wrapup",
  "type": "🗝️ Key Takeaways...",
  "number": "",
  "title": "",
  "body": "  The forcing function is the collection of all terms that are not multiplied by the dependent variable, typically written on the right-side.  An equation has constant coefficients when all the coefficients multiplying and its derivatives are fixed constants (not functions of ).  A differential equation is homogeneous if the forcing function is zero.  An equation is a inear omogeneous onstant oefficient equation.   "
},
{
  "id": "exponential-solns",
  "level": "1",
  "url": "exponential-solns.html",
  "type": "Section",
  "number": "",
  "title": "Exponential Solutions",
  "body": " Exponential Solutions   Now that we can identify LHCC equations, it's time to ask a deeper question: what kinds of functions satisfy these equations? As it turns out, exponential functions are not just one possible answer, they are the natural solution.  In this section, we'll explore what makes exponentials so special. You'll see why other functions fail to work, why exponentials succeed, and how this leads us to a powerful tool called the characteristic equation .   Derivatives & Like-Terms   ↩️☝ Recall: Functions that are their own derivatives   What is the only function that is equal to its own derivative?      Correct!     Incorrect. , not .     Incorrect. , not .     Incorrect. , not .      ↩️☝ Recall: Like Terms   Terms are like-terms if they differ only by a coefficient and can be combined via addition and subtraction.  For example, the pairs and are like-terms and can be combined\/simplifed as shown here: .  Which of the following are like-terms with ?      Correct! is a like-term with and .     Correct! is a like-term with and .     Incorrect. is not a like-term with .     Incorrect. is not a like-term with .     Incorrect. is not a like-term with .      ↩️☝ Recall: Functions that are like terms with their own derivatives   Which of the functions is a like-term with its own derivative?      Correct! & ARE like terms and can be combined by addition.     Incorrect. & ARE NOT like terms and cannot be combined by addition.     Incorrect. & ARE NOT like terms and cannot be combined by addition.     Incorrect. & ARE NOT like terms and cannot be combined by addition.        Motivating the Exponential Solution  Consider the simple linear homogeneous constant coefficient differential equation: .  For the moment, forget that it is a differential equation and imagine that it is just two functions that simplify to zero after subtraction. That is, they cancelled out with each other. Algebra tells you that only like-terms simplify via subtraction. For example, since all three are like-terms. However, does not simplify at all since none are like-terms.   Logically, if is the solution, then this equation says and must be like-terms since they subtract to zero. This leads to the next big question:   What function is a like-term with its derivative?   You may recall from calculus that the derivative of an exponential function is another exponential function. For example, if , then , which are like-terms. This unique property makes exponentials ideal candidates for solutions.  To illustrate this, let's substitute different functions into a first-order LHCC equation and see which ones cancel.    Case 1:       Case 2:       Case 3:      Only the exponential function produces like-terms that cancel perfectly. Again, suggesting that exponential functions are ideal solutions to LHCC equations.   📖❓ Valid Function Choices   Consider the differential equation, where is a constant.  Logically explain why it is impossible for to be a solution to this equation no matter what value takes.      Multiple Exponential Solutions   Verify that and are solutions to the differential equation   but that , , and are not.    First, let's check the first two exponential functions:                  As you can see, the exponential functions produce like-terms that cancel out and simplify to zero.  Let's see what happens when we plug in non-exponential functions:                  In this case, the non-exponential functions produce non-like-terms that cannot be simplified and are not solutions.  Finally, let's check the exponential function, :          In this case, we get like-terms, but the coefficients do not sum to zero and the terms do not cancel. Therefore, is not a solution.    These examples show that exponentials are the only functions that reliably cancel out to yield zero when substituted into an LHCC equation. Even among exponentials, only those with specific exponents will satisfy a given equation. Next, we'll introduce the characteristic equation, an algebraic tool that helps us identify exactly which exponential functions will work.    The Characteristic Equation   We now know that exponential functions are strong candidates for solutions to LHCC equations. But how do we find the values of that work? The answer lies in forming a polynomial equation called the characteristic equation .   Let's try this with a few concrete examples. First, suppose  . Substituting gives   Since , the equation reduces to   This algebraic equation, , is the characteristic equation . It tells us that is a solution.  For second-order equations, we follow the same substitution process. For example, for   we substitute into , , and , resulting in   Setting the polynomial equal to zero gives the characteristic equation:   Solving this gives   so the general solution is    📖❓ Match the Characteristic Equation   Match each characteristic equation to its differential equation.                             Characteristic Equation & Exponential Solutions   For each of the following equations, determine the characteristic equation and the exponential solutions that satisfy it.     1.         Assuming , we have  . Thus, the characteristic equation is  , and the only exponential solution is        2.         Assuming , we have   Thus, the characteristic equation is   and the exponential solutions are            The derivative properties of exponential functions make them natural solutions for LHCC equations.  Substituting into an LHCC equation leads to a polynomial equation in called the characteristic equation .  For each solution, , that comes from the characteristic equation, you get a fundamental solution, , that satisfies the LHCC equation.      Answer the following questions: Exponential Like Terms   The functions are all like-terms, which if added together, would simplify to one term.     True  Correct! Computing the derivatives, you get , which are all like-terms.   False Incorrect.    Select the Exponential Solutions   The differential equation , has which of the following exponential solutions? (Select all that Apply)                  Hint: The characteristic equation is .       "
},
{
  "id": "exponential-solns-2-3",
  "level": "2",
  "url": "exponential-solns.html#exponential-solns-2-3",
  "type": "👀 Quick Review",
  "number": "117",
  "title": "<em class=\"emphasis\">Derivatives &amp; Like-Terms<\/em>.",
  "body": " Derivatives & Like-Terms   ↩️☝ Recall: Functions that are their own derivatives   What is the only function that is equal to its own derivative?      Correct!     Incorrect. , not .     Incorrect. , not .     Incorrect. , not .      ↩️☝ Recall: Like Terms   Terms are like-terms if they differ only by a coefficient and can be combined via addition and subtraction.  For example, the pairs and are like-terms and can be combined\/simplifed as shown here: .  Which of the following are like-terms with ?      Correct! is a like-term with and .     Correct! is a like-term with and .     Incorrect. is not a like-term with .     Incorrect. is not a like-term with .     Incorrect. is not a like-term with .      ↩️☝ Recall: Functions that are like terms with their own derivatives   Which of the functions is a like-term with its own derivative?      Correct! & ARE like terms and can be combined by addition.     Incorrect. & ARE NOT like terms and cannot be combined by addition.     Incorrect. & ARE NOT like terms and cannot be combined by addition.     Incorrect. & ARE NOT like terms and cannot be combined by addition.     "
},
{
  "id": "motivating-exponentials-3",
  "level": "2",
  "url": "exponential-solns.html#motivating-exponentials-3",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "like-terms "
},
{
  "id": "lhcc-soln-example-1",
  "level": "2",
  "url": "exponential-solns.html#lhcc-soln-example-1",
  "type": "🌌 Example",
  "number": "118",
  "title": "Multiple Exponential Solutions.",
  "body": " Multiple Exponential Solutions   Verify that and are solutions to the differential equation   but that , , and are not.    First, let's check the first two exponential functions:                  As you can see, the exponential functions produce like-terms that cancel out and simplify to zero.  Let's see what happens when we plug in non-exponential functions:                  In this case, the non-exponential functions produce non-like-terms that cannot be simplified and are not solutions.  Finally, let's check the exponential function, :          In this case, we get like-terms, but the coefficients do not sum to zero and the terms do not cancel. Therefore, is not a solution.   "
},
{
  "id": "characteristic-equation-9",
  "level": "2",
  "url": "exponential-solns.html#characteristic-equation-9",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "characteristic equation "
},
{
  "id": "characteristic-equation-21",
  "level": "2",
  "url": "exponential-solns.html#characteristic-equation-21",
  "type": "🌌 Example",
  "number": "119",
  "title": "Characteristic Equation &amp; Exponential Solutions.",
  "body": "Characteristic Equation & Exponential Solutions   For each of the following equations, determine the characteristic equation and the exponential solutions that satisfy it.     1.         Assuming , we have  . Thus, the characteristic equation is  , and the only exponential solution is        2.         Assuming , we have   Thus, the characteristic equation is   and the exponential solutions are        "
},
{
  "id": "exponential-solns-wrapup",
  "level": "2",
  "url": "exponential-solns.html#exponential-solns-wrapup",
  "type": "🗝️ Key Takeaways...",
  "number": "",
  "title": "",
  "body": "  The derivative properties of exponential functions make them natural solutions for LHCC equations.  Substituting into an LHCC equation leads to a polynomial equation in called the characteristic equation .  For each solution, , that comes from the characteristic equation, you get a fundamental solution, , that satisfies the LHCC equation.   "
},
{
  "id": "exponential-solns-cyu",
  "level": "2",
  "url": "exponential-solns.html#exponential-solns-cyu",
  "type": "🤔💭 Check Your Understanding",
  "number": "120",
  "title": "",
  "body": "  Answer the following questions: Exponential Like Terms   The functions are all like-terms, which if added together, would simplify to one term.     True  Correct! Computing the derivatives, you get , which are all like-terms.   False Incorrect.    Select the Exponential Solutions   The differential equation , has which of the following exponential solutions? (Select all that Apply)                  Hint: The characteristic equation is .      "
},
{
  "id": "second-order-lhcc-eqns",
  "level": "1",
  "url": "second-order-lhcc-eqns.html",
  "type": "Section",
  "number": "",
  "title": "Second-Order Equations",
  "body": " Second-Order Equations   Second-order linear homogeneous constant coefficient (LHCC) equations appear in many applications across physics, engineering, and applied mathematics. These equations have the general form:   where , , and are constants. In this section, we'll explore how the solutions depend on the roots of the associated characteristic equation, and how different types of roots give rise to different forms of the general solution.   📖❓ Classifying Characteristic Equations   Review quadratic equations and answer the following question.  Match the type of roots with the corresponding quadratic equation.    Good work! The discriminant helps classify root types.     Real unequal roots     Real repeated roots     Complex roots        Fundamental Solutions  To solve , we begin by forming the characteristic equation as we did in the previous section. For this case, the characteristic equation is the quadratic    Solving this equation using the quadratic formula yields:   Each root corresponds to an exponential solution—either or . These are called the fundamental solutions of the differential equation.    The General Solution  Once we have the fundamental solutions, the superposition principle tells us that   is a solution to for any constants and .  However, if the roots and are equal, then and are like-terms. In that case, the expression above collapses into a single term, and the solution is incomplete. This issue relates to linear dependence , which also depends on the interval where the solutions are defined.   To create a second, independent solution, we multiply the second term by , giving:   This guarantees complete general solution with independent terms. There are three distinct scenarios to consider, based on the discriminant of the characteristic equation:   Each case leads to a different form of the solution, broken down as follows.    Case 1 : Real, Non-Repeating Solutions  If is positive, then characteristic equation has the two unequal real solutions:  , so the general solution is  .   Case 2 : Two Complex Solutions  If is negative, the characteristic equation has two complex conjugate solutions:   The corresponding general solution is:   However, it is common to express this using sine and cosine (via ):     Case 3 : Real, Repeating Solutions  If is zero, then the characteristic equation has a repeated root:   In this case, the general solution is:     Summary & Examples  The form of the general solution to a second-order LHCC equation depends entirely on the roots of its characteristic equation. Here's a summary of the three cases.   ✳️ 2nd-Order LHCC General Solution Cases  Let , be the roots of the characteristic equation for a nd-order LHCC equation .   Case 1         Case 2         Case 3            📖❓ Match the Characteristic & General Solutions   Match the characteristic solutions to the corresponding general solution.                              Case 1 Examples   Find the general solution to each second-order LHCC equation.      The characteristic equation is:   Factoring gives:   So the roots are and , giving the general solution:        The characteristic equation is:   Using the quadratic formula:   Since the roots are unequal and real, the general solution is:   where and .       Case 2 Examples   Find the general solution to each second-order LHCC equation.      The characteristic equation is:   Applying the quadratic formula:   So , , and the general solution is:        The characteristic equation is:   This gives , so and . The general solution is:   or simply:        Case 3 Examples   Find the general solution to each second-order LHCC equation.      The characteristic equation is:   Factoring gives:   So is a repeated root, and the general solution is:        The characteristic equation is:   Using the quadratic formula:   This is a repeated root, so the general solution is:        These examples illustrate how second-order LHCC equations are solved using the standard , repeating , and complex cases discussed above. In the next section, we will see that a similar process can be generalized to higher-order LHCC equations.     Second-order LHCC equations have the form , where , , and are constants.  The solution process begins by forming the characteristic equation .  The roots of the characteristic equation determines the form of the general solution as outlined in .      Answer the following questions:  Solving the characteristic equation   If the characteristic equation for an LHCC equation is , what is the general solution?          Correct! The solution has a multiplicity of 2.         Incorrect. The solution has a multiplicity of 2.         Incorrect. Ensure you solve the charactistic equation correctly.         Incorrect. The characteristic equation does not have complex solutions.      Purely Imaginary Characteristic Solutions   If a characteristic equation has roots , the general solution is .    Correct! The complex exponentials transform into sine and cosine terms.     Matching Equations to Solutions   Match each characteristic equation to its corresponding general solution.    Great work! The general solution is based on the characteristic solutions.                        "
},
{
  "id": "second-order-lhcc-fundamental-solns-6",
  "level": "2",
  "url": "second-order-lhcc-eqns.html#second-order-lhcc-fundamental-solns-6",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "fundamental solutions "
},
{
  "id": "second-order-lhcc-general-soln-2",
  "level": "2",
  "url": "second-order-lhcc-eqns.html#second-order-lhcc-general-soln-2",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "superposition principle "
},
{
  "id": "second-order-lhcc-general-soln-5",
  "level": "2",
  "url": "second-order-lhcc-eqns.html#second-order-lhcc-general-soln-5",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "linear dependence "
},
{
  "id": "second-order-lhcc-examples-5",
  "level": "2",
  "url": "second-order-lhcc-eqns.html#second-order-lhcc-examples-5",
  "type": "🌌 Example",
  "number": "121",
  "title": "Case 1 Examples.",
  "body": "Case 1 Examples   Find the general solution to each second-order LHCC equation.      The characteristic equation is:   Factoring gives:   So the roots are and , giving the general solution:        The characteristic equation is:   Using the quadratic formula:   Since the roots are unequal and real, the general solution is:   where and .      "
},
{
  "id": "second-order-lhcc-examples-6",
  "level": "2",
  "url": "second-order-lhcc-eqns.html#second-order-lhcc-examples-6",
  "type": "🌌 Example",
  "number": "122",
  "title": "Case 2 Examples.",
  "body": "Case 2 Examples   Find the general solution to each second-order LHCC equation.      The characteristic equation is:   Applying the quadratic formula:   So , , and the general solution is:        The characteristic equation is:   This gives , so and . The general solution is:   or simply:       "
},
{
  "id": "second-order-lhcc-examples-7",
  "level": "2",
  "url": "second-order-lhcc-eqns.html#second-order-lhcc-examples-7",
  "type": "🌌 Example",
  "number": "123",
  "title": "Case 3 Examples.",
  "body": "Case 3 Examples   Find the general solution to each second-order LHCC equation.      The characteristic equation is:   Factoring gives:   So is a repeated root, and the general solution is:        The characteristic equation is:   Using the quadratic formula:   This is a repeated root, so the general solution is:       "
},
{
  "id": "second-order-lhcc-eqns-wrapup",
  "level": "2",
  "url": "second-order-lhcc-eqns.html#second-order-lhcc-eqns-wrapup",
  "type": "🗝️ Key Takeaways...",
  "number": "",
  "title": "",
  "body": "  Second-order LHCC equations have the form , where , , and are constants.  The solution process begins by forming the characteristic equation .  The roots of the characteristic equation determines the form of the general solution as outlined in .   "
},
{
  "id": "second-order-lhcc-eqns-cyu",
  "level": "2",
  "url": "second-order-lhcc-eqns.html#second-order-lhcc-eqns-cyu",
  "type": "🤔💭 Check Your Understanding",
  "number": "124",
  "title": "",
  "body": "  Answer the following questions:  Solving the characteristic equation   If the characteristic equation for an LHCC equation is , what is the general solution?          Correct! The solution has a multiplicity of 2.         Incorrect. The solution has a multiplicity of 2.         Incorrect. Ensure you solve the charactistic equation correctly.         Incorrect. The characteristic equation does not have complex solutions.      Purely Imaginary Characteristic Solutions   If a characteristic equation has roots , the general solution is .    Correct! The complex exponentials transform into sine and cosine terms.     Matching Equations to Solutions   Match each characteristic equation to its corresponding general solution.    Great work! The general solution is based on the characteristic solutions.                       "
},
{
  "id": "higher-order-lhcc",
  "level": "1",
  "url": "higher-order-lhcc.html",
  "type": "Section",
  "number": "",
  "title": "Higher-Order Equations",
  "body": " Higher-Order Equations   Like second-order linear homogeneous constant coefficient (LHCC) equations, we solve higher-order equations by finding the roots of a characteristic equation. However, with higher-order comes higher-degree characteristic polynomials and an increased number of roots. While this results in additional terms, determining which ones go into in the general solution is similar to the second-order case.   📖❓ Just One Root   Suppose the characteristic equation of an LHCC equation has a single root, . Select the correct statement.      The equation is st order with general solution .  Correct! The order of the equation is because there is only one root, and the general solution is given by the exponential function with that root.    The equation is st order with general solution .  Incorrect. The root is negative, so the general solution should involve , not .    The equation is nd order with general solution .  Incorrect. The order of the equation is determined by the number of roots, which is in this case, not .    The equation can have any order with general solution .  Incorrect. The order of the equation is determined by the number of roots, which is in this case, not .       The Characteristic Equation  The standard th-order LHCC equation has the form:   To find solutions, we assume . Substituting this into the equation yields:   Since , we obtain the characteristic equation :   This is a polynomial of degree , and solving it gives us the roots that define the structure of the general solution. Similar to second-order equations, each root contributes a different term in the general solution, as detailed next.   📖❓ Degree of the Characteristic Equation   The order of an LHCC differential equation is equal to the degree of its characteristic equation    This is true, since the order of each derivative in the differential equation translates directly to a corresponding power of in the characteristic equation.      Real and Distinct Roots  Every real root that is distinct from others contributes a single term of the form to the general solution, where is a constant.  For example, if the characteristic equation has roots , & that only appear once, then part of the general solution is: .    Repeated Roots  Every root that repeats times (multiplicity ) contributes to the general solution.  For example, if is a triple root, then part of the general solution will be:   Note: If the repeated root is , then , and reduces to: .    Complex Roots  Every complex root, (conjugate pair), contributes to the general solution. There may be multiple pairs, each contributing their own term.    From Characteristic Roots to General Solution  For a general th-order LHCC equation, the full general solution includes exactly terms—one for each root of the characteristic polynomial. The form of each term depends on the type of root (real or complex) and whether it repeats. These rules are summarized in .   Characteristic Root Contribution to the General Solution      root type  contribution to general solution    real (multiplicity )     real (multiplicity )     complex ( )      Let's practice building general solutions from the roots of the characteristic equation.   From Charateristic Roots to General Solution   For each set of characteristic roots, write the general solution of the LHCC equation.            Three different real roots:     A complex conjugate pair and a double real root at :     A triple root and single root:     Two complex conjugate pairs:          Answer the following questions:  3rd-Order General Solution   Give the general solution for a 3rd-order LHCC equation whose characteristic equation has the solutions: .          Correct! This is the form when there are three distinct real roots.         Incorrect.         Incorrect.         Incorrect.      Two Complex Pair Roots   Give the general solution for a 4th-order LHCC equation whose characteristic equation has the solutions: .        Correct! This is the form when the characteristic equation has complex roots.       Incorrect.       Incorrect. Not enough constants.       Incorrect.      All Three Root Types   Suppose the characteristic equation of a fifth-order LHCC equation has the following roots:   Which of the following correctly represents the structure of the general solution?         Correct! The triple root at contributes three terms, ; the single real root contributes ; and the complex conjugate pair gives rise to the sinusoidal term multiplied by .         Incorrect. The triple root at should contribute three terms, not just one.         Incorrect. This only includes two of the three terms needed for the triple root at .         Incorrect. The complex roots must be expressed as , not as standalone sine and cosine terms.       Multiple Repeating Roots   Give the general solution for a 5th-order LHCC equation whose characteristic equation has the solutions: .          Incorrect. This form does not account for the multiplicity of the roots.         Incorrect. The multiplicity should be reflected for each root.         Correct! This is the form when there are repeated real roots with appropriate multiplicity.         Incorrect. Make sure to account for the cubic multiplicity for .           Knowing that an LHCC equation has order tells you that:  The characteristic polynomial will have degree .  There will be characteristic roots.  There will be terms to in general solution.     The terms that are included in the general solution depend on the characteristic root type, as summarized in .    "
},
{
  "id": "characteristic-equation-6",
  "level": "2",
  "url": "higher-order-lhcc.html#characteristic-equation-6",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "characteristic equation "
},
{
  "id": "lhcc-contribution-to-general-solution",
  "level": "2",
  "url": "higher-order-lhcc.html#lhcc-contribution-to-general-solution",
  "type": "Table",
  "number": "125",
  "title": "Characteristic Root Contribution to the General Solution",
  "body": " Characteristic Root Contribution to the General Solution      root type  contribution to general solution    real (multiplicity )     real (multiplicity )     complex ( )     "
},
{
  "id": "lhcc-roots-to-general-solution",
  "level": "2",
  "url": "higher-order-lhcc.html#lhcc-roots-to-general-solution",
  "type": "🌌 Example",
  "number": "126",
  "title": "From Charateristic Roots to General Solution.",
  "body": " From Charateristic Roots to General Solution   For each set of characteristic roots, write the general solution of the LHCC equation.            Three different real roots:     A complex conjugate pair and a double real root at :     A triple root and single root:     Two complex conjugate pairs:      "
},
{
  "id": "higher-order-lhcc-cyu",
  "level": "2",
  "url": "higher-order-lhcc.html#higher-order-lhcc-cyu",
  "type": "🤔💭 Check Your Understanding",
  "number": "127",
  "title": "",
  "body": "  Answer the following questions:  3rd-Order General Solution   Give the general solution for a 3rd-order LHCC equation whose characteristic equation has the solutions: .          Correct! This is the form when there are three distinct real roots.         Incorrect.         Incorrect.         Incorrect.      Two Complex Pair Roots   Give the general solution for a 4th-order LHCC equation whose characteristic equation has the solutions: .        Correct! This is the form when the characteristic equation has complex roots.       Incorrect.       Incorrect. Not enough constants.       Incorrect.      All Three Root Types   Suppose the characteristic equation of a fifth-order LHCC equation has the following roots:   Which of the following correctly represents the structure of the general solution?         Correct! The triple root at contributes three terms, ; the single real root contributes ; and the complex conjugate pair gives rise to the sinusoidal term multiplied by .         Incorrect. The triple root at should contribute three terms, not just one.         Incorrect. This only includes two of the three terms needed for the triple root at .         Incorrect. The complex roots must be expressed as , not as standalone sine and cosine terms.       Multiple Repeating Roots   Give the general solution for a 5th-order LHCC equation whose characteristic equation has the solutions: .          Incorrect. This form does not account for the multiplicity of the roots.         Incorrect. The multiplicity should be reflected for each root.         Correct! This is the form when there are repeated real roots with appropriate multiplicity.         Incorrect. Make sure to account for the cubic multiplicity for .       "
},
{
  "id": "higher-order-lhcc-9",
  "level": "2",
  "url": "higher-order-lhcc.html#higher-order-lhcc-9",
  "type": "🗝️ Key Takeaways...",
  "number": "",
  "title": "",
  "body": "   Knowing that an LHCC equation has order tells you that:  The characteristic polynomial will have degree .  There will be characteristic roots.  There will be terms to in general solution.     The terms that are included in the general solution depend on the characteristic root type, as summarized in .   "
},
{
  "id": "solving-high-order-lhccs",
  "level": "1",
  "url": "solving-high-order-lhccs.html",
  "type": "Section",
  "number": "",
  "title": "Solving High-Order LHCC Equations",
  "body": "Solving High-Order LHCC Equations   As the previous section demonstrated, constructing the general solution of a LHCC equation is fairly straightforward given the roots of the characteristic equation. However, solving high-degree polynomial equations can be quite challenging. While there are strategies to tackle this by hand, sometimes computational tools are necessary to obtain the solutions. Below, we will outline some common approaches    Factoring  Some high-degree characteristic polynomials can be factored by hand using classic algebraic techniques. Factoring is the fastest way to solve these problems when it works. We'll start by reviewing common methods of factoring and apply them to characteristic equations that appear in LHCC differential equations.  Here are a few algebraic strategies you may find helpful:  🧮 Factoring Techniques                                Let's now apply these tools to solve higher-order LHCC equations by factoring their characteristic equations.   Solving LHCC Equations by Factoring the Characteristic Equation   These examples show how to find the general solution to higher-order LHCC equations using a variety of factoring techniques to find the roots of the characteristic equation.   1.     The characteristic equation is:   Applying the difference of squares:       2.    The characteristic equation is:   Factoring out the common term , followed by a differences of squares gives:         3.     This factors as a difference of squares twice:         4.    The characteristic equation is:   Use the substitution, , to reveal a quadratic in disguise:   Reverse the substitution, , back into :         5.    The characteristic equation is:   Take out and use standard factoring:         6.    The characteristic equation is:   We can factor this by grouping and recognizing a sum of cubes:            Rational Root Theorem  When the characteristic polynomial is hard to factor by inspection, the Rational Root Theorem provides a systematic way to search for rational (fractional) solutions. Once you find a root, you can use polynomial division to reduce the polynomial to a lower degree. From there, you can repeat the process or apply other factoring techniques.  While this method is reliable, it can be tedious by hand and prone to errors. That's why technology often comes in handy.    Using Technology: Factoring High-Degree Polynomials  Not all characteristic polynomials can be factored easily — and some can't be factored at all using simple algebra. In these cases, it's perfectly reasonable to turn to technology.  Computer algebra systems (CAS), online factoring tools, and symbolic solvers can quickly find the roots of even complicated polynomials. Once you have the roots, you can build the general solution using the framework you learned earlier.  For example, suppose you want to solve the following LHCC equation:  . The first step is to write down the characteristic equation:   This is challenging to solve by hand, but we can use the tool below to factor it.  Type 2*r^4 + 9*r^3 + r^2 - 21*r + 9 into the text box and press enter.   Polynomial Factoring Calculator Directions   Directions:  Enter a polynomial in the box below.  Use r for the variable, * for multiplication, and ^ for exponents.  Press enter to see the factored form and approximate values.  Note: It only factors polynomials with fractional (rational) roots.       After entering the polynomial, you should see the factored form:   From here the roots are easily identified as:   Therefore, the general solution is:    📖❓ Solving a High-Order LHCC Equation With a Factoring Tool   Find the general solution to the LHCC equation by using the factoring tool to find the characteristic roots.      Characteristic Roots:   General Solution:   Use c1 , c2 , c3 as the arbitrary constants of integration.                  First, write down the characteristic equation: . Plugging this into to the factoring tool shows that it factors as . Solving for , we get . Therefore, the general solution is: .       Using Technology: Approximating Roots  Some characteristic equations are too messy to factor, even with software. When this happens, a numerical root finder can provide decimal approximations of the roots, allowing us to write down the structure of the general solution.  Consider the fifth-order LHCC equation:   The characteristic equation is: This polynomial has no obvious factoring pattern, and standard techniques fail. Fortunately, numerical approximation tools can help.  Try entering r^5 - 4*r^3 + 3*r^2 - 1 into the same factoring tool above. You should get the following approximations for three real roots:   and the complex pair:   using the standard root-to-solution rules, the general solution is:    📖❓ Decimal Roots in the General Solution   Suppose you find the characteristic roots are approximately .  Which of the following best describes the general solution?        Correct! The real root gives a standalone exponential, and the complex pair contributes an oscillatory term with the same .       Incorrect. The sine and cosine must be multiplied by .       Incorrect. This would be appropriate if were a triple root.       This mixes formats and includes a non-real exponential.      Regardless of the method you choose to find the roots, the general solution is relatively easy to construct once you have them.    If the characteristic polynomial factors easily, use algebraic techniques like grouping, factoring by common terms, or recognizing patterns such as difference of squares or cubes.  When factoring is hard or impossible by hand, use a factoring tool or numerical solver to find the roots.  Once the roots are known, constructing the full general solution is mechanical and follows a predictable structure.    "
},
{
  "id": "factoring-6",
  "level": "2",
  "url": "solving-high-order-lhccs.html#factoring-6",
  "type": "🌌 Example",
  "number": "128",
  "title": "Solving LHCC Equations by Factoring the Characteristic Equation.",
  "body": " Solving LHCC Equations by Factoring the Characteristic Equation   These examples show how to find the general solution to higher-order LHCC equations using a variety of factoring techniques to find the roots of the characteristic equation.   1.     The characteristic equation is:   Applying the difference of squares:       2.    The characteristic equation is:   Factoring out the common term , followed by a differences of squares gives:         3.     This factors as a difference of squares twice:         4.    The characteristic equation is:   Use the substitution, , to reveal a quadratic in disguise:   Reverse the substitution, , back into :         5.    The characteristic equation is:   Take out and use standard factoring:         6.    The characteristic equation is:   We can factor this by grouping and recognizing a sum of cubes:         "
},
{
  "id": "factoring-tool",
  "level": "2",
  "url": "solving-high-order-lhccs.html#factoring-tool",
  "type": "🎮 Interactive",
  "number": "129",
  "title": "Polynomial Factoring Calculator Directions.",
  "body": " Polynomial Factoring Calculator Directions   Directions:  Enter a polynomial in the box below.  Use r for the variable, * for multiplication, and ^ for exponents.  Press enter to see the factored form and approximate values.  Note: It only factors polynomials with fractional (rational) roots.     "
},
{
  "id": "solving-high-order-lhccs-8",
  "level": "2",
  "url": "solving-high-order-lhccs.html#solving-high-order-lhccs-8",
  "type": "🗝️ Key Takeaways...",
  "number": "",
  "title": "",
  "body": "  If the characteristic polynomial factors easily, use algebraic techniques like grouping, factoring by common terms, or recognizing patterns such as difference of squares or cubes.  When factoring is hard or impossible by hand, use a factoring tool or numerical solver to find the roots.  Once the roots are known, constructing the full general solution is mechanical and follows a predictable structure.   "
},
{
  "id": "homogeneous-eqns-8",
  "level": "1",
  "url": "homogeneous-eqns-8.html",
  "type": "Section",
  "number": "",
  "title": "Chapter 7 Exercises",
  "body": " Chapter 7 Exercises   ᯓ★❓Quick-Answer Questions    True-False  Select all the true statements below   Select all the true statements below.      An LHCC equation must have constant coefficients.    Correct! Constant coefficients are one of the defining features of LHCC equations.      An LHCC equation could contain the independent variable, .    Incorrect, LHCC equations are linear, meaning they cannot contain non-linear terms like .      is an LHCC equation.    Correct! This is a first-order linear homogeneous differential equation.      A non-homogeneous equation has a non-zero constant term.    Correct! If the constant term is not zero, the equation is non-homogeneous.      Linear or Nonlinear   The equation is linear.    Incorrect. The term makes this equation nonlinear because the function and its derivative are multiplied together.    Polynomial Solutions   Polynomial functions are commonly solutions to LHCC equations.    Incorrect. Polynomial functions do not satisfy LHCC equations because their derivatives do not remain proportional to the original function.    Understanding Second-Order LHCC Equations   A second-order LHCC equation has the form , where and are constants.    Correct! Second-order LHCC equations involve a second derivative and have constant coefficients.      Multiple-Choice   True-or-False   The hundredth derivative of is a like-term with .    True Correct!  False Incorrect.    Building Solutions   If and are solutions to a second-order LHCC equation, then is also a solution.    Correct! By the superposition principle, this combination is also a solution.    Match the Label to the DE   Match each label on the left to an appropriate DE on the right.  Key: L = linear, H = homogeneous, CC = constant coefficient   Note: Multiple matches can be correct, but there is only one perfect matching where all are correct.      CC     LH, order 1     LHCC     LH, order 2     LCC     L      Select the LHCC Equations  Select all of the LHCC Differential Equations.                                        There are only 4 LHCC equations in this set.    Identifying Homogeneous Equations   Which of the following equations is homogeneous?           Incorrect. The right-hand side is , which makes the equation nonhomogeneous.           Incorrect. The term on the right-hand side makes the equation nonhomogeneous.           Correct! The equation is homogeneous because the right-hand side is zero.           Incorrect. The term on the right-hand side makes the equation nonhomogeneous.      Characteristic equation for first-order LHCC   What is the characteristic equation for ?           Correct! The characteristic equation is .           Incorrect. Check the sign of the coefficient of .           Incorrect. The characteristic equation for a first-order LHCC is linear, not quadratic.           Incorrect. Make sure to use the correct coefficients from the original equation.      Identify the first-order LHCC equation   Which of the following is a first-order LHCC equation?           Incorrect. This is a second-order equation.           Correct! This is a first-order linear homogeneous equation with constant coefficients.           Incorrect. This equation is not homogeneous.           Incorrect. This is not a constant coefficient equation.      Match the DE to Its Characteristic Equation   Match each LHCC differential equation on the left to its corresponding characteristic equation on the right.   Note: Each DE has a unique characteristic equation.                       The Characteristic Equation   What is the characteristic equation of the differential equation ?           Incorrect. Check the coefficients in the original equation.           Correct! The characteristic equation is formed by replacing with , with , and with 1.           Incorrect. Be careful with the sign of the constant term.      Give the general form  Give the general form of a second-order LHCC equation if the characteristic equation has the solution: .     Incorrect. Complex roots require both cosine and sine terms.     Incorrect. This form is used for repeated real roots.     Incorrect. This form is used for distinct real roots.     Correct! This form is used when the roots are complex.     Give the general form  Give the general form of a second-order LHCC equation if the characteristic equation has the solutions and .     Correct! This form is used when the characteristic equation has distinct real roots.     Incorrect. This form is used for repeated real roots.     Incorrect. This form is also used for repeated real roots.     Incorrect. This form is used for complex roots.     Roots of the characteristic equation  What are the roots of the characteristic equation ?    and  Correct! The roots are and .    and  Incorrect. Check the signs of the roots.    and  Incorrect. Ensure you solve the quadratic equation correctly.    and  Incorrect. Revisit the quadratic formula to solve for the roots.     General solution for second-order LHCC  What is the general solution for ?     Correct! The general solution is .     Incorrect. Check the signs of the exponents.     Incorrect. Make sure to use the correct roots.     Incorrect. Revisit the roots of the characteristic equation.     Classifying Practice   Select each classification label that applies to the equation      Linear  Correct, each of the terms are linear.    Homogeneous  Correct, the constant term is zero.    Constant Coefficients  Correct, each coefficient is constant.    LHCC  Correct!     Classifying Practice   Select each classification label that applies to the equation      Linear  Incorrect, is a nonlinear term.    Homogeneous  Technically, only linear equations can be labeled as homogeneous or not. Since the equation is nonlinear, we do not select it.    Constant Coefficients  Technically, only linear equations can be labeled as having constant coefficients or not. Since the equation is nonlinear, we do not select it.    LHCC  Incorrect.     Classifying Practice   Select each classification label that applies to the equation      Linear  Correct, both terms are linear.    Homogeneous  Incorrect, the constant term, , is non-zero.    Constant Coefficients  Correct, each coefficient is constant.    LHCC  Incorrect.     Classifying Practice   Select each classification label that applies to the equation      Linear  Correct, all terms are linear.    Homogeneous  Correct, the constant term is zero.    Constant Coefficients  Incorrect, the term coefficient, , is not constant.    LHCC  Incorrect.     Natural Solutions   Why do exponentials naturally arise as solutions to LHCC equations?     Because their derivatives preserve the same functional form.  Correct! Exponentials are eigenfunctions of the derivative operator.    Because polynomial solutions cannot satisfy these equations.  Incorrect. Polynomial solutions can satisfy LHCC equations.    Because sine and cosine functions do not work.  Incorrect. Sine and cosine functions are also solutions to LHCC equations.    Because they minimize the characteristic equation.  Incorrect. Exponentials are not solutions because they minimize the characteristic equation.      What exponential term is in the solution   What is the fundamental exponential solution for the equation ?           Correct! Solving gives . So is the exponential term in the solution.           Incorrect. Check the signs when solving the characteristic equation.           Incorrect. Ensure you are solving the characteristic equation correctly.           Incorrect. Write down the characteristic equation and solve for .      Structure of the General Solution   What is the general solution of a second-order LHCC equation if the characteristic equation has unequal real solutions and ?           Incorrect. The constants must be different for each term.           Correct! Each fundamental solution is multiplied by an arbitrary constant.           Incorrect. The general solution includes arbitrary constants.      Differential & Characteristic Equation Mathching   Match characteristic solution to the term it would correspond to in the general solution of an LHCC equation.     ( repeats 2 times )            ( repeats 4 times )                    📖❓ General Solution from Repeated Roots   Suppose the characteristic equation has a triple root at . What is the corresponding part of the general solution?        Correct! Each repeated root contributes an extra power of .       Incorrect. These are distinct roots, not repeated instances of .       Incorrect. The powers should stop at for a triple root.       This form is correct for a root at , not .      📖❓ When to Use a Factoring Tool   Which of the following is the best reason to use a factoring tool or computer algebra system when solving an LHCC equation?     The characteristic equation is high degree and does not factor easily by hand.  Correct! Technology saves time and avoids algebraic errors.    You already know all the roots from memory.  Then you wouldn't need to factor at all.    You want to verify that exponentials are like-terms.  That's a useful idea, but not the purpose of a factoring tool.    The roots are all real and distinct.  That makes constructing the solution easier—but you still need the roots first.      📖❓ Interpreting Mixed Roots   A characteristic equation has the following roots: . What is the correct form of the general solution?        Correct! The double root at 0 gives and , and the complex pair gives the oscillatory exponential term.       Incorrect. The sine and cosine terms must be multiplied by .       While technically valid, this form is not simplified. Use real-valued functions.       These roots do not match the ones given.       Short-Answer   Definition of Homogeneity   What makes a differential equation homogeneous?       Other    Select the linear differential equations that have constant coefficients .   Identify and ignore the constant term when determining if the coefficients are constant.                                    Select the linear homogeneous differential equations with constant coefficients .                                                   🏗️ Warm-ups & Drills  Identifying LHCC Equations  Identify the Linear Equations   Click on the equations that are linear.                                            Remember, a linear equation cannot contain products or compositions of and its derivatives.    Identify the Linear Homogeneous Equations   Click on the linear and homogeneous equations.                                            Remember, a linear equation cannot contain products or compositions of and its derivatives.    Identify the Linear Constant Coefficient Equations   Click on the linear equations with constant coefficients.                                            Remember, a linear equation cannot contain products or compositions of and its derivatives.    Identify the LHCC Equations   Click on the LHCC equations.                                            Remember, a linear equation cannot contain products or compositions of and its derivatives.      Differential Equation Characteristic Equation   Give the characteristic equation corresponding to each differential equation below.   Use for the variable in your answer. Don't forget the sign.         characteristic equation:                  characteristic equation:                  characteristic equation:               Factor the Characteristic Equation   Fully factor each characteristic equation.  ⚠️ Warning: The numbers on these problems are randomly generated when you press Activate . So, click Activate before you start!     nd Degree                  rd Degree                  th Degree                  rd Degree                    Charateristic Polynomials   From Charateristic Roots General Solution   Suppose the solutions to a characteristic equation for an LHCC equation are given below. In each case, find the corresponding general solution.      Since we have three different real numbers, we use the standard case to get the general solution as        A complex conjugate pair and a single solutions, means we use a combination of the complex and standard cases .        The solution repeats three times and the single gives the general solution        The two separate complex conjugate pairs implies we use the complex case for both to get        Two 's and five 's means the general solution is        One complex pair, two 's, and a single , gives us        ✍🏻 Solve the Differential Equations  Verifying Superposition    Consider the second-order LHCC equation:   Suppose we have already determined that and are solutions. Show that their linear combination   is also a solution for arbitrary constants and .     Differentiating :   Substituting into :   Since the equation holds for all values of and , this confirms that their linear combination is also a solution.     Find the general solution for a linear, homogeneous DEwith constant coefficients which has the given characteristic equation                                The characteristic equation is: . Let , then we can rewrite the equation as: . Solving for , we get: . Thus, gives , and gives . The general solution is: .      The characteristic equation is: . Let , then we can rewrite the equation as: . Solving for , we get: . Thus, gives , and gives . The general solution is: .                                  General Solution                                                         LHCC Equation General Solution   Find the general solution to each of the equations below.      The characteristic equation is:   Solving gives . Since this is a first-order equation, the general solution is:        The characteristic equation is:   Factoring gives:   So the roots are and . Thus:        The characteristic equation is:   Factoring gives:   So the roots are , , and . Therefore:        LHCC Equation General Solution   Find the general solution to each of the equations below.      The characteristic equation is:   Solving gives . Since this is a first-order equation, the general solution is:        The characteristic equation is:   Factoring gives:   So the roots are and . Thus:        The characteristic equation is:   Factoring gives:   So the roots are , , and . Therefore:                                                                                                                           The characteristic equation is:   Solving for , we get . Therefore, the general solution is:            The characteristic equation is:   Factoring out an from the equation, we get:   Therefore, the roots are and . The general solution is:            The characteristic equation is:   Solving for , we get . Therefore, the general solution is:            The characteristic equation is:   Solving for , we get . Therefore, the general solution is:            The characteristic equation is:   Solving for , we get and . Therefore, the general solution is:            The characteristic equation is:   Solving for , we get . Therefore, the general solution is:            The characteristic equation is:   Solving for , we get . Therefore, the general solution is:            The characteristic equation is:   Solving for , we get . Therefore, the general solution is:            The characteristic equation is:   Solving for , we get . Therefore, the general solution is:            The characteristic equation is:   Solving for , we get . Therefore, the general solution is:            The characteristic equation is:   Solving for , we get . Therefore, the general solution is:            The characteristic equation is:   Solving for , we get and . Therefore, the general solution is:           Solve the following initial value problems    an that satisfy thegiven initial conditions.   We already have the general solution . In order to use the initial conditions, we will eventually need the first derivative, so let's find that now. Now we can see what comes of the first initial condition  Now we can use the other initial condition  Notice that the resulting equations, (\\ref{eq7}) and (\\ref{eq8}) constitute a system of two linear equations in two unknowns, and we should be able to solve for the unknown an . There are multiple ways to achieve this. One possibility is to solve for in equation (\\ref{eq7}) and then substitute into equation (\\ref{eq8}) as follows. Hence, we have the solution  Note: it's not clear whether the independent variable i o , so you could replace th 's wit 's.      o                   Solve the following initial value problem.    We begin by verifying the following: the DE is linear,  the DE is homogeneous, and  the DE has constant coefficients. Since all of the conditions are true, we can safely proceed by writing the characteristic equation and then solving it (either by factoring or using the quadratic equation). Sinc is a repeated real root, the general solution is In order to use the initial conditions, we will eventually need the first derivative, so let's find that now. Note that we will use the product rule to take the derivative. Now we can see what comes of the first initial condition  Now we can use the other initial condition  Notice that the resulting equations, (\\ref{eq13}) and (\\ref{eq14}) constitute a system of two linear equations in two unknowns, and we should be able to solve for the unknown and . There are multiple ways to achieve this. One possibility is to solve for in equation (\\ref{eq13}) and then substitute into equation (\\ref{eq14}) as follows. Hence, we have the solution      or        We already have the general solution . In order to use the initial conditions, we will eventually need the first derivative, so let's find that now. Now we can see what comes of the first initial condition    Now we can use the other initial condition    Notice that the resulting equations, (\\ref{eq15}) and (\\ref{eq16}) constitute a system of two linear equations in two unknowns, and we should be able to solve for the unknown and . There are multiple ways to achieve this. One possibility is to solve for in equation (\\ref{eq15}) and then substitute into equation (\\ref{eq16}) as follows.   Hence, we have the solution  Note: it's not clear whether the independent variable i o , so you could replace th 's wit 's.      o         We already have the general solution . In order to use the initial conditions, we will eventually need the first derivative, so let's find that now. Now we can see what comes of the first initial condition    Now we can use the other initial condition    Notice that the resulting equations, (\\ref{eq17}) and (\\ref{eq18}) constitute a system of two linear equations in two unknowns, and we should be able to solve for the unknown and . There are multiple ways to achieve this. One possibility is to solve for in equation (\\ref{eq17}) and then substitute into equation (\\ref{eq18}) as follows.   Hence, we have the solution  Note: it's not clear whether the independent variable i o , so you could replace th 's wit 's.            We begin by verifying the following: the DE is linear,  the DE is homogeneous, and  the DE has constant coefficients. Since all of the conditions are true, we can safely proceed by writing the characteristic equation and then solving it (either by factoring or using the quadratic equation).   Sinc is a repeated real root, the general solution is   In order to use the initial conditions, we will eventually need the first derivative, so let's find that now. Note that we will use the product rule to take the derivative.   Now we can see what comes of the first initial condition    Now we can use the other initial condition    Notice that the resulting equations, (\\ref{eq13}) and (\\ref{eq14}) constitute a system of two linear equations in two unknowns, and we should be able to solve for the unknown and . There are multiple ways to achieve this. One possibility is to solve for in equation (\\ref{eq13}) and then substitute into equation (\\ref{eq14}) as follows.     We begin by verifying the following: the DE is linear,  the DE is homogeneous, and  the DE has constant coefficients. Since all of the conditions are true, we can safely proceed by writing the characteristic equation and then solving it (either by factoring or using the quadratic equation). Sinc is a repeated real root, the general solution is In order to use the initial conditions, we will eventually need the first derivative, so let's find that now. Note that we will use the product rule to take the derivative. Now we can see what comes of the first initial condition  Now we can use the other initial condition  Notice that the resulting equations, (\\ref{eq13}) and (\\ref{eq14}) constitute a system of two linear equations in two unknowns, and we should be able to solve for the unknown and . There are multiple ways to achieve this. One possibility is to solve for in equation (\\ref{eq13}) and then substitute into equation (\\ref{eq14}) as follows. Hence, we have the solution           or         Beyond the Basics  The General Solution to First-Order LHCC Equations   Derive the general solution to a first order linear homogeneous constant coefficient (LHCC) equation of the form: , where are constants.    The characteristic equation this equation is .  So, the only fundamental solution to this equation is: .  Therefore, the general solution must be where is an arbitrary constant.     Suppose an LHCC equation has as a solution. Can you conclude anything specific about the structure of such an LHCC equation?    Boundary Value Problems   Solve the following boundary value problems. Explain whetheryou found a unique solution, an infinite number of solutions, or no solution.     Consider the following differential equation: .  Notice that instead of initial conditions at only, there is one at . This is call a boundary-valued problem (BVP) because it has conditions over two different -values. Now, for this equation find the following, if possible:    General solution.  This DE is linear, homogeneous, and has constant coefficients, so we can start by solving the characteristic equation. Thus, the general solution is      (o )      The solution with boundary conditions: and .  We can begin with the general solution we found previously. When we apply the first condition we have the following. And using the second condition yields the following. Hence, the (unique) particular solution is     the unique solution i       The solution with boundary conditions: and .  We can begin with the general solution we found previously. When we apply the first condition we have the following. And using the second condition yields the following. In this case, the first condition leads t while the second condition leads t These cannot both be true, so there is no solution .    no solution      The solution with boundary conditions: and .  We can begin with the general solution we found previously. When we apply the first condition we have the following. And using the second condition yields the following. In this case, both of the conditions lead t and we don't learn anything abou Thus could still take on any value, and therefore there are an infinite number of solutions of the form     there are an infinite number of solutions of the for          If possible, solve the following boundary value problem:    We begin by verifying the following: the DE is linear,  the DE is homogeneous, and  the DE has constant coefficients. Since all of the conditions are true, we can safely proceed to find the general solution. We write down and then solve the characteristic equation, as follows. Since an are distinct, real roots, the general solution is given by Now we can see what comes of the first boundary condition  Now we can use the other boundary condition  Notice that the resulting equations, (\\ref{eq11}) and (\\ref{eq12}) constitute a system of two linear equations in two unknowns, and we should be able to solve for the unknown an . There are multiple ways to achieve this. One possibility is to solve for in equation (\\ref{eq11}) and then substitute into equation (\\ref{eq12}) as follows. Hence, we have the solution             Show why is needed in the general solution for repeated roots of the CE             "
},
{
  "id": "c7-quick-answer-2",
  "level": "2",
  "url": "homogeneous-eqns-8.html#c7-quick-answer-2",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "L H CC "
},
{
  "id": "drill-identifying-lhcc",
  "level": "2",
  "url": "homogeneous-eqns-8.html#drill-identifying-lhcc",
  "type": "Reading Question",
  "number": "1",
  "title": "Identifying LHCC Equations.",
  "body": "Identifying LHCC Equations  Identify the Linear Equations   Click on the equations that are linear.                                            Remember, a linear equation cannot contain products or compositions of and its derivatives.    Identify the Linear Homogeneous Equations   Click on the linear and homogeneous equations.                                            Remember, a linear equation cannot contain products or compositions of and its derivatives.    Identify the Linear Constant Coefficient Equations   Click on the linear equations with constant coefficients.                                            Remember, a linear equation cannot contain products or compositions of and its derivatives.    Identify the LHCC Equations   Click on the LHCC equations.                                            Remember, a linear equation cannot contain products or compositions of and its derivatives.    "
},
{
  "id": "drill-give-characteristic-eqn-1",
  "level": "2",
  "url": "homogeneous-eqns-8.html#drill-give-characteristic-eqn-1",
  "type": "Reading Question",
  "number": "2",
  "title": "<span class=\"process-math\">\\(y'' + 5y' - y = 0\\)<\/span>.",
  "body": "     characteristic equation:            "
},
{
  "id": "drill-give-characteristic-eqn-2",
  "level": "2",
  "url": "homogeneous-eqns-8.html#drill-give-characteristic-eqn-2",
  "type": "Reading Question",
  "number": "3",
  "title": "<span class=\"process-math\">\\(w''' - 7.1w'' + 0.1w = 0\\)<\/span>.",
  "body": "     characteristic equation:            "
},
{
  "id": "drill-give-characteristic-eqn-3",
  "level": "2",
  "url": "homogeneous-eqns-8.html#drill-give-characteristic-eqn-3",
  "type": "Reading Question",
  "number": "4",
  "title": "<span class=\"process-math\">\\(2 p'' + 5p' = 0\\)<\/span>.",
  "body": "     characteristic equation:            "
},
{
  "id": "drill-factor-characteristic-eqn-1",
  "level": "2",
  "url": "homogeneous-eqns-8.html#drill-factor-characteristic-eqn-1",
  "type": "Reading Question",
  "number": "5",
  "title": "<span class=\"process-math\">\\(2\\)<\/span>nd Degree.",
  "body": " nd Degree                "
},
{
  "id": "drill-factor-characteristic-eqn-2",
  "level": "2",
  "url": "homogeneous-eqns-8.html#drill-factor-characteristic-eqn-2",
  "type": "Reading Question",
  "number": "6",
  "title": "<span class=\"process-math\">\\(3\\)<\/span>rd Degree.",
  "body": " rd Degree                "
},
{
  "id": "drill-factor-characteristic-eqn-3",
  "level": "2",
  "url": "homogeneous-eqns-8.html#drill-factor-characteristic-eqn-3",
  "type": "Reading Question",
  "number": "7",
  "title": "<span class=\"process-math\">\\(4\\)<\/span>th Degree.",
  "body": " th Degree                "
},
{
  "id": "drill-factor-characteristic-eqn-4",
  "level": "2",
  "url": "homogeneous-eqns-8.html#drill-factor-characteristic-eqn-4",
  "type": "Reading Question",
  "number": "8",
  "title": "<span class=\"process-math\">\\(3\\)<\/span>rd Degree.",
  "body": " rd Degree                "
},
{
  "id": "lhcc-from-char-roots-to-general-solution-3",
  "level": "2",
  "url": "homogeneous-eqns-8.html#lhcc-from-char-roots-to-general-solution-3",
  "type": "Exercise",
  "number": "1",
  "title": "",
  "body": "   Since we have three different real numbers, we use the standard case to get the general solution as    "
},
{
  "id": "lhcc-from-char-roots-to-general-solution-4",
  "level": "2",
  "url": "homogeneous-eqns-8.html#lhcc-from-char-roots-to-general-solution-4",
  "type": "Exercise",
  "number": "2",
  "title": "",
  "body": "   A complex conjugate pair and a single solutions, means we use a combination of the complex and standard cases .    "
},
{
  "id": "lhcc-from-char-roots-to-general-solution-5",
  "level": "2",
  "url": "homogeneous-eqns-8.html#lhcc-from-char-roots-to-general-solution-5",
  "type": "Exercise",
  "number": "3",
  "title": "",
  "body": "   The solution repeats three times and the single gives the general solution    "
},
{
  "id": "lhcc-from-char-roots-to-general-solution-6",
  "level": "2",
  "url": "homogeneous-eqns-8.html#lhcc-from-char-roots-to-general-solution-6",
  "type": "Exercise",
  "number": "4",
  "title": "",
  "body": "   The two separate complex conjugate pairs implies we use the complex case for both to get    "
},
{
  "id": "lhcc-from-char-roots-to-general-solution-7",
  "level": "2",
  "url": "homogeneous-eqns-8.html#lhcc-from-char-roots-to-general-solution-7",
  "type": "Exercise",
  "number": "5",
  "title": "",
  "body": "   Two 's and five 's means the general solution is    "
},
{
  "id": "lhcc-from-char-roots-to-general-solution-8",
  "level": "2",
  "url": "homogeneous-eqns-8.html#lhcc-from-char-roots-to-general-solution-8",
  "type": "Exercise",
  "number": "6",
  "title": "",
  "body": "   One complex pair, two 's, and a single , gives us    "
},
{
  "id": "homogeneous-eqns-8-5-2",
  "level": "2",
  "url": "homogeneous-eqns-8.html#homogeneous-eqns-8-5-2",
  "type": "Exercise",
  "number": "1",
  "title": "Verifying Superposition.",
  "body": "Verifying Superposition    Consider the second-order LHCC equation:   Suppose we have already determined that and are solutions. Show that their linear combination   is also a solution for arbitrary constants and .     Differentiating :   Substituting into :   Since the equation holds for all values of and , this confirms that their linear combination is also a solution.   "
},
{
  "id": "homogeneous-eqns-8-5-3-2",
  "level": "2",
  "url": "homogeneous-eqns-8.html#homogeneous-eqns-8-5-3-2",
  "type": "Exercise",
  "number": "2",
  "title": "",
  "body": "             "
},
{
  "id": "homogeneous-eqns-8-5-3-3",
  "level": "2",
  "url": "homogeneous-eqns-8.html#homogeneous-eqns-8-5-3-3",
  "type": "Exercise",
  "number": "3",
  "title": "",
  "body": "             "
},
{
  "id": "homogeneous-eqns-8-5-3-4",
  "level": "2",
  "url": "homogeneous-eqns-8.html#homogeneous-eqns-8-5-3-4",
  "type": "Exercise",
  "number": "4",
  "title": "<span class=\"process-math\">\\(\\ds y^{(4)} - 5y'' + 4y = 0\\)<\/span>.",
  "body": "  The characteristic equation is: . Let , then we can rewrite the equation as: . Solving for , we get: . Thus, gives , and gives . The general solution is: .   "
},
{
  "id": "homogeneous-eqns-8-5-3-5",
  "level": "2",
  "url": "homogeneous-eqns-8.html#homogeneous-eqns-8-5-3-5",
  "type": "Exercise",
  "number": "5",
  "title": "<span class=\"process-math\">\\(\\ds y^{(4)} - 5y'' + 4y = 0\\)<\/span>.",
  "body": "  The characteristic equation is: . Let , then we can rewrite the equation as: . Solving for , we get: . Thus, gives , and gives . The general solution is: .   "
},
{
  "id": "homogeneous-eqns-8-5-3-6",
  "level": "2",
  "url": "homogeneous-eqns-8.html#homogeneous-eqns-8-5-3-6",
  "type": "Exercise",
  "number": "6",
  "title": "",
  "body": "             "
},
{
  "id": "homogeneous-eqns-8-5-3-7",
  "level": "2",
  "url": "homogeneous-eqns-8.html#homogeneous-eqns-8-5-3-7",
  "type": "Exercise",
  "number": "7",
  "title": "",
  "body": "             "
},
{
  "id": "homogeneous-eqns-8-5-4-2",
  "level": "2",
  "url": "homogeneous-eqns-8.html#homogeneous-eqns-8-5-4-2",
  "type": "Exercise",
  "number": "8",
  "title": "",
  "body": "             "
},
{
  "id": "homogeneous-eqns-8-5-4-3",
  "level": "2",
  "url": "homogeneous-eqns-8.html#homogeneous-eqns-8-5-4-3",
  "type": "Exercise",
  "number": "9",
  "title": "",
  "body": "             "
},
{
  "id": "homogeneous-eqns-8-5-4-4",
  "level": "2",
  "url": "homogeneous-eqns-8.html#homogeneous-eqns-8-5-4-4",
  "type": "Exercise",
  "number": "10",
  "title": "",
  "body": "             "
},
{
  "id": "homogeneous-eqns-8-5-4-5",
  "level": "2",
  "url": "homogeneous-eqns-8.html#homogeneous-eqns-8-5-4-5",
  "type": "Exercise",
  "number": "11",
  "title": "",
  "body": "            "
},
{
  "id": "homogeneous-eqns-8-5-4-6",
  "level": "2",
  "url": "homogeneous-eqns-8.html#homogeneous-eqns-8-5-4-6",
  "type": "Exercise",
  "number": "12",
  "title": "LHCC Equation General Solution.",
  "body": "LHCC Equation General Solution   Find the general solution to each of the equations below.      The characteristic equation is:   Solving gives . Since this is a first-order equation, the general solution is:        The characteristic equation is:   Factoring gives:   So the roots are and . Thus:        The characteristic equation is:   Factoring gives:   So the roots are , , and . Therefore:       "
},
{
  "id": "homogeneous-eqns-8-5-4-7",
  "level": "2",
  "url": "homogeneous-eqns-8.html#homogeneous-eqns-8-5-4-7",
  "type": "Exercise",
  "number": "13",
  "title": "LHCC Equation General Solution.",
  "body": "LHCC Equation General Solution   Find the general solution to each of the equations below.      The characteristic equation is:   Solving gives . Since this is a first-order equation, the general solution is:        The characteristic equation is:   Factoring gives:   So the roots are and . Thus:        The characteristic equation is:   Factoring gives:   So the roots are , , and . Therefore:       "
},
{
  "id": "homogeneous-eqns-8-5-4-8",
  "level": "2",
  "url": "homogeneous-eqns-8.html#homogeneous-eqns-8-5-4-8",
  "type": "Exercise",
  "number": "14",
  "title": "",
  "body": "             "
},
{
  "id": "homogeneous-eqns-8-5-4-9",
  "level": "2",
  "url": "homogeneous-eqns-8.html#homogeneous-eqns-8-5-4-9",
  "type": "Exercise",
  "number": "15",
  "title": "",
  "body": "             "
},
{
  "id": "homogeneous-eqns-8-5-4-10",
  "level": "2",
  "url": "homogeneous-eqns-8.html#homogeneous-eqns-8-5-4-10",
  "type": "Exercise",
  "number": "16",
  "title": "",
  "body": "             "
},
{
  "id": "homogeneous-eqns-8-5-4-11",
  "level": "2",
  "url": "homogeneous-eqns-8.html#homogeneous-eqns-8-5-4-11",
  "type": "Exercise",
  "number": "17",
  "title": "",
  "body": "             "
},
{
  "id": "homogeneous-eqns-8-5-4-12",
  "level": "2",
  "url": "homogeneous-eqns-8.html#homogeneous-eqns-8-5-4-12",
  "type": "Exercise",
  "number": "18",
  "title": "",
  "body": "             "
},
{
  "id": "homogeneous-eqns-8-5-4-13",
  "level": "2",
  "url": "homogeneous-eqns-8.html#homogeneous-eqns-8-5-4-13",
  "type": "Exercise",
  "number": "19",
  "title": "",
  "body": "             "
},
{
  "id": "homogeneous-eqns-8-5-4-14",
  "level": "2",
  "url": "homogeneous-eqns-8.html#homogeneous-eqns-8-5-4-14",
  "type": "Exercise",
  "number": "20",
  "title": "",
  "body": "             "
},
{
  "id": "homogeneous-eqns-8-5-4-15",
  "level": "2",
  "url": "homogeneous-eqns-8.html#homogeneous-eqns-8-5-4-15",
  "type": "Exercise",
  "number": "21",
  "title": "",
  "body": "             "
},
{
  "id": "homogeneous-eqns-8-5-4-16",
  "level": "2",
  "url": "homogeneous-eqns-8.html#homogeneous-eqns-8-5-4-16",
  "type": "Exercise",
  "number": "22",
  "title": "<span class=\"process-math\">\\(\\quad\\ds 9y' + 2y = 0\\)<\/span>.",
  "body": "   The characteristic equation is:   Solving for , we get . Therefore, the general solution is:        "
},
{
  "id": "homogeneous-eqns-8-5-4-17",
  "level": "2",
  "url": "homogeneous-eqns-8.html#homogeneous-eqns-8-5-4-17",
  "type": "Exercise",
  "number": "23",
  "title": "<span class=\"process-math\">\\(\\quad\\ds 3y'' + 4y' = 0\\)<\/span>.",
  "body": "   The characteristic equation is:   Factoring out an from the equation, we get:   Therefore, the roots are and . The general solution is:        "
},
{
  "id": "homogeneous-eqns-8-5-4-18",
  "level": "2",
  "url": "homogeneous-eqns-8.html#homogeneous-eqns-8-5-4-18",
  "type": "Exercise",
  "number": "24",
  "title": "<span class=\"process-math\">\\(\\quad\\ds 4y'' -36y = 0\\)<\/span>.",
  "body": "   The characteristic equation is:   Solving for , we get . Therefore, the general solution is:        "
},
{
  "id": "homogeneous-eqns-8-5-4-19",
  "level": "2",
  "url": "homogeneous-eqns-8.html#homogeneous-eqns-8-5-4-19",
  "type": "Exercise",
  "number": "25",
  "title": "<span class=\"process-math\">\\(\\quad\\ds y''- y' - 11y = 0\\)<\/span>.",
  "body": "   The characteristic equation is:   Solving for , we get . Therefore, the general solution is:        "
},
{
  "id": "homogeneous-eqns-8-5-4-20",
  "level": "2",
  "url": "homogeneous-eqns-8.html#homogeneous-eqns-8-5-4-20",
  "type": "Exercise",
  "number": "26",
  "title": "<span class=\"process-math\">\\(\\quad\\ds 2\\frac{d^2 \\theta}{dt^2} -6\\frac{d\\theta}{dt} - 8\\theta = 0\\)<\/span>.",
  "body": "   The characteristic equation is:   Solving for , we get and . Therefore, the general solution is:        "
},
{
  "id": "homogeneous-eqns-8-5-4-21",
  "level": "2",
  "url": "homogeneous-eqns-8.html#homogeneous-eqns-8-5-4-21",
  "type": "Exercise",
  "number": "27",
  "title": "<span class=\"process-math\">\\(\\quad\\ds w'' + 6w' + 9w = 0\\)<\/span>.",
  "body": "   The characteristic equation is:   Solving for , we get . Therefore, the general solution is:        "
},
{
  "id": "homogeneous-eqns-8-5-4-22",
  "level": "2",
  "url": "homogeneous-eqns-8.html#homogeneous-eqns-8-5-4-22",
  "type": "Exercise",
  "number": "28",
  "title": "<span class=\"process-math\">\\(\\quad\\ds m'' = 2m' - m\\)<\/span>.",
  "body": "   The characteristic equation is:   Solving for , we get . Therefore, the general solution is:        "
},
{
  "id": "homogeneous-eqns-8-5-4-23",
  "level": "2",
  "url": "homogeneous-eqns-8.html#homogeneous-eqns-8-5-4-23",
  "type": "Exercise",
  "number": "29",
  "title": "<span class=\"process-math\">\\(\\quad\\ds y'' + 4y' + 53y = 0\\)<\/span>.",
  "body": "   The characteristic equation is:   Solving for , we get . Therefore, the general solution is:        "
},
{
  "id": "homogeneous-eqns-8-5-4-24",
  "level": "2",
  "url": "homogeneous-eqns-8.html#homogeneous-eqns-8-5-4-24",
  "type": "Exercise",
  "number": "30",
  "title": "<span class=\"process-math\">\\(\\quad\\ds z''=-36z\\)<\/span>.",
  "body": "   The characteristic equation is:   Solving for , we get . Therefore, the general solution is:        "
},
{
  "id": "homogeneous-eqns-8-5-4-25",
  "level": "2",
  "url": "homogeneous-eqns-8.html#homogeneous-eqns-8-5-4-25",
  "type": "Exercise",
  "number": "31",
  "title": "<span class=\"process-math\">\\(\\quad\\ds y'' = -24y' - 144y\\)<\/span>.",
  "body": "   The characteristic equation is:   Solving for , we get . Therefore, the general solution is:        "
},
{
  "id": "homogeneous-eqns-8-5-4-26",
  "level": "2",
  "url": "homogeneous-eqns-8.html#homogeneous-eqns-8-5-4-26",
  "type": "Exercise",
  "number": "32",
  "title": "<span class=\"process-math\">\\(\\quad\\ds \\frac{d^2w}{dx^2} - 49w = 0\\)<\/span>.",
  "body": "   The characteristic equation is:   Solving for , we get . Therefore, the general solution is:        "
},
{
  "id": "homogeneous-eqns-8-5-4-27",
  "level": "2",
  "url": "homogeneous-eqns-8.html#homogeneous-eqns-8-5-4-27",
  "type": "Exercise",
  "number": "33",
  "title": "<span class=\"process-math\">\\(\\quad\\ds z''- z' - 42z = 0\\)<\/span>.",
  "body": "   The characteristic equation is:   Solving for , we get and . Therefore, the general solution is:        "
},
{
  "id": "homogeneous-eqns-8-5-5-2",
  "level": "2",
  "url": "homogeneous-eqns-8.html#homogeneous-eqns-8-5-5-2",
  "type": "Exercise",
  "number": "34",
  "title": "",
  "body": "  an that satisfy thegiven initial conditions.   We already have the general solution . In order to use the initial conditions, we will eventually need the first derivative, so let's find that now. Now we can see what comes of the first initial condition  Now we can use the other initial condition  Notice that the resulting equations, (\\ref{eq7}) and (\\ref{eq8}) constitute a system of two linear equations in two unknowns, and we should be able to solve for the unknown an . There are multiple ways to achieve this. One possibility is to solve for in equation (\\ref{eq7}) and then substitute into equation (\\ref{eq8}) as follows. Hence, we have the solution  Note: it's not clear whether the independent variable i o , so you could replace th 's wit 's.      o    "
},
{
  "id": "homogeneous-eqns-8-5-5-3",
  "level": "2",
  "url": "homogeneous-eqns-8.html#homogeneous-eqns-8-5-5-3",
  "type": "Exercise",
  "number": "35",
  "title": "",
  "body": "            "
},
{
  "id": "homogeneous-eqns-8-5-5-4",
  "level": "2",
  "url": "homogeneous-eqns-8.html#homogeneous-eqns-8-5-5-4",
  "type": "Exercise",
  "number": "36",
  "title": "",
  "body": " Solve the following initial value problem.    We begin by verifying the following: the DE is linear,  the DE is homogeneous, and  the DE has constant coefficients. Since all of the conditions are true, we can safely proceed by writing the characteristic equation and then solving it (either by factoring or using the quadratic equation). Sinc is a repeated real root, the general solution is In order to use the initial conditions, we will eventually need the first derivative, so let's find that now. Note that we will use the product rule to take the derivative. Now we can see what comes of the first initial condition  Now we can use the other initial condition  Notice that the resulting equations, (\\ref{eq13}) and (\\ref{eq14}) constitute a system of two linear equations in two unknowns, and we should be able to solve for the unknown and . There are multiple ways to achieve this. One possibility is to solve for in equation (\\ref{eq13}) and then substitute into equation (\\ref{eq14}) as follows. Hence, we have the solution      or    "
},
{
  "id": "homogeneous-eqns-8-5-5-5",
  "level": "2",
  "url": "homogeneous-eqns-8.html#homogeneous-eqns-8-5-5-5",
  "type": "Exercise",
  "number": "37",
  "title": "<span class=\"process-math\">\\(\\quad\\ds 4y'' -36y = 0, \\quad y(0) = 4, \\quad y'(0) = -6\\)<\/span>.",
  "body": "   We already have the general solution . In order to use the initial conditions, we will eventually need the first derivative, so let's find that now. Now we can see what comes of the first initial condition    Now we can use the other initial condition    Notice that the resulting equations, (\\ref{eq15}) and (\\ref{eq16}) constitute a system of two linear equations in two unknowns, and we should be able to solve for the unknown and . There are multiple ways to achieve this. One possibility is to solve for in equation (\\ref{eq15}) and then substitute into equation (\\ref{eq16}) as follows.   Hence, we have the solution  Note: it's not clear whether the independent variable i o , so you could replace th 's wit 's.      o     "
},
{
  "id": "homogeneous-eqns-8-5-5-6",
  "level": "2",
  "url": "homogeneous-eqns-8.html#homogeneous-eqns-8-5-5-6",
  "type": "Exercise",
  "number": "38",
  "title": "<span class=\"process-math\">\\(\\quad\\ds 2\\frac{d^2 \\theta}{dt^2} -6\\frac{d\\theta}{dt} - 8\\theta = 0,\\quad \\theta(0) = 12, \\quad \\theta'(0) = -2\\)<\/span>.",
  "body": "   We already have the general solution . In order to use the initial conditions, we will eventually need the first derivative, so let's find that now. Now we can see what comes of the first initial condition    Now we can use the other initial condition    Notice that the resulting equations, (\\ref{eq17}) and (\\ref{eq18}) constitute a system of two linear equations in two unknowns, and we should be able to solve for the unknown and . There are multiple ways to achieve this. One possibility is to solve for in equation (\\ref{eq17}) and then substitute into equation (\\ref{eq18}) as follows.   Hence, we have the solution  Note: it's not clear whether the independent variable i o , so you could replace th 's wit 's.        "
},
{
  "id": "homogeneous-eqns-8-5-5-7",
  "level": "2",
  "url": "homogeneous-eqns-8.html#homogeneous-eqns-8-5-5-7",
  "type": "Exercise",
  "number": "39",
  "title": "<span class=\"process-math\">\\(\\quad\\ds \\frac{d^2z}{dx^2} - 4\\frac{dz}{dx} + 4z = 0,\\quad z(1) = 1,\\quad z'(1) = 1\\)<\/span>.",
  "body": "   We begin by verifying the following: the DE is linear,  the DE is homogeneous, and  the DE has constant coefficients. Since all of the conditions are true, we can safely proceed by writing the characteristic equation and then solving it (either by factoring or using the quadratic equation).   Sinc is a repeated real root, the general solution is   In order to use the initial conditions, we will eventually need the first derivative, so let's find that now. Note that we will use the product rule to take the derivative.   Now we can see what comes of the first initial condition    Now we can use the other initial condition    Notice that the resulting equations, (\\ref{eq13}) and (\\ref{eq14}) constitute a system of two linear equations in two unknowns, and we should be able to solve for the unknown and . There are multiple ways to achieve this. One possibility is to solve for in equation (\\ref{eq13}) and then substitute into equation (\\ref{eq14}) as follows.     We begin by verifying the following: the DE is linear,  the DE is homogeneous, and  the DE has constant coefficients. Since all of the conditions are true, we can safely proceed by writing the characteristic equation and then solving it (either by factoring or using the quadratic equation). Sinc is a repeated real root, the general solution is In order to use the initial conditions, we will eventually need the first derivative, so let's find that now. Note that we will use the product rule to take the derivative. Now we can see what comes of the first initial condition  Now we can use the other initial condition  Notice that the resulting equations, (\\ref{eq13}) and (\\ref{eq14}) constitute a system of two linear equations in two unknowns, and we should be able to solve for the unknown and . There are multiple ways to achieve this. One possibility is to solve for in equation (\\ref{eq13}) and then substitute into equation (\\ref{eq14}) as follows. Hence, we have the solution           or     "
},
{
  "id": "exercises--2",
  "level": "2",
  "url": "homogeneous-eqns-8.html#exercises--2",
  "type": "Exercise",
  "number": "1",
  "title": "The General Solution to First-Order LHCC Equations.",
  "body": "The General Solution to First-Order LHCC Equations   Derive the general solution to a first order linear homogeneous constant coefficient (LHCC) equation of the form: , where are constants.    The characteristic equation this equation is .  So, the only fundamental solution to this equation is: .  Therefore, the general solution must be where is an arbitrary constant.   "
},
{
  "id": "exercises--3",
  "level": "2",
  "url": "homogeneous-eqns-8.html#exercises--3",
  "type": "Exercise",
  "number": "2",
  "title": "",
  "body": " Suppose an LHCC equation has as a solution. Can you conclude anything specific about the structure of such an LHCC equation?   "
},
{
  "id": "exercises--4-3",
  "level": "2",
  "url": "homogeneous-eqns-8.html#exercises--4-3",
  "type": "Exercise",
  "number": "3",
  "title": "",
  "body": "  Consider the following differential equation: .  Notice that instead of initial conditions at only, there is one at . This is call a boundary-valued problem (BVP) because it has conditions over two different -values. Now, for this equation find the following, if possible:    General solution.  This DE is linear, homogeneous, and has constant coefficients, so we can start by solving the characteristic equation. Thus, the general solution is      (o )      The solution with boundary conditions: and .  We can begin with the general solution we found previously. When we apply the first condition we have the following. And using the second condition yields the following. Hence, the (unique) particular solution is     the unique solution i       The solution with boundary conditions: and .  We can begin with the general solution we found previously. When we apply the first condition we have the following. And using the second condition yields the following. In this case, the first condition leads t while the second condition leads t These cannot both be true, so there is no solution .    no solution      The solution with boundary conditions: and .  We can begin with the general solution we found previously. When we apply the first condition we have the following. And using the second condition yields the following. In this case, both of the conditions lead t and we don't learn anything abou Thus could still take on any value, and therefore there are an infinite number of solutions of the form     there are an infinite number of solutions of the for        "
},
{
  "id": "exercises--4-4",
  "level": "2",
  "url": "homogeneous-eqns-8.html#exercises--4-4",
  "type": "Exercise",
  "number": "4",
  "title": "",
  "body": " If possible, solve the following boundary value problem:    We begin by verifying the following: the DE is linear,  the DE is homogeneous, and  the DE has constant coefficients. Since all of the conditions are true, we can safely proceed to find the general solution. We write down and then solve the characteristic equation, as follows. Since an are distinct, real roots, the general solution is given by Now we can see what comes of the first boundary condition  Now we can use the other boundary condition  Notice that the resulting equations, (\\ref{eq11}) and (\\ref{eq12}) constitute a system of two linear equations in two unknowns, and we should be able to solve for the unknown an . There are multiple ways to achieve this. One possibility is to solve for in equation (\\ref{eq11}) and then substitute into equation (\\ref{eq12}) as follows. Hence, we have the solution         "
},
{
  "id": "tba",
  "level": "2",
  "url": "homogeneous-eqns-8.html#tba",
  "type": "Exercise",
  "number": "5",
  "title": "",
  "body": "  Show why is needed in the general solution for repeated roots of the CE           "
},
{
  "id": "lncc-equation",
  "level": "1",
  "url": "lncc-equation.html",
  "type": "Section",
  "number": "",
  "title": "The LNCC Equation",
  "body": " The LNCC Equation   You already know that a linear homogeneous constant coefficient (LHCC) equation has the form:   All the terms are on the left, and the right-hand side is zero. This equation is called homogeneous because the solution only includes terms that cancel each other out.  A linear nonhomogeneous constant coefficient (LNCC) equation looks almost the same, except the right-hand side is now a function:   The function is called the forcing function because it introduces an external input that forces the system to respond in a particular way.   📖❓ Homogeneous vs Nonhomogeneous   Which structure or property of a differential equation separates homogeneous from nonhomogeneous equations?      The presence of a non-zero forcing function.    Correct! A non-zero constant term on the right-hand side of the equation indicates a nonhomogeneous equation.      The dependent variable.    Incorrect. The dependent variable is present in both homogeneous and nonhomogeneous equations.      The order of the equation.    Incorrect. Both homogeneous and nonhomogeneous equations can have the same order.      The linearity of the equation.    Incorrect. Both homogeneous and nonhomogeneous equations can be linear.        Guessing a Solution that Accounts for the Forcing Function   Note: For brevity, we will refer to the left side of equation as 🍄. Also, when we say plug into 🍄 , we mean calculate and substitute , , into , then simplify.   Imagine you had to make your best guess as to which function, , satisfies the equation  . Remember, after differentiating your guess and plugging it into 🍄, all terms must simplify to . That is,  . Logically, for the sum of three terms to simplify to , they must share a similar structure as (i.e., a degree polynomial). or contain terms that completely cancel out, but we will ignore these for now.    📖❓ Select the most appropriate solution   Based on this logic, which function is the only possible candidate for the solution to the LNCC equation?  .  Hint: Think about the type of functions you need to add together to get .            Incorrect. This function does not resemble the forcing function.           Incorrect. Plugging into will not give you an term you need to match the forcing function, .           Correct! This 3rd degree polynomial has the same polynomial structure as the forcing function, .           Incorrect. Plugging into will leave you with an term that does not exist in the forcing function, .      In this context, a similar function-type to means our guess should also be a degree polynomial. Since we don't know which one, we use the general degree form:   Plugging this into 🍄 and taking some derivatives, we get   This is not , but maybe we can find and values that get us there. Setting the expression equal to , we have   Matching the and , gives us the system:   Substituting and into completes the solution:     Confirming our Guess  Let's double-check that the function, , we found really satisfies the equation.   This confirms as a solution. In fact, it is the most important solution because it accounts for the specific forcing function and must be included in every solution to equation . Such solutions are called particular solutions , but they are only part of the whole story.    The Hidden Parts of Nonhomogeneous Solutions  We established that the particular solution, , is what you plug into 🍄 to get . However, there could be additional terms you can plug into 🍄 that cancel out after taking derivatives and simplifying. Specifically,   We already know how to find these functions since they are just the solutions to the homogeneous version of the same equation:   This LHCC equation is solved using its characteristic equation:   This homogeneous solution, we'll call , is given by   and is the other half of LNCC solution. They provide the terms that cancel out when plugged into 🍄 and have no impact on the forcing function at all.    Combining the Parts Into a General Solution  To summarize, the general solution of equation consists of two parts:  The homogeneous part: (canceling terms), and  The particular part: (account for )  and we write it as the sum of these parts:  . Finally, let's see how the different parts of the general solution behave when plugged into the left side of the equation. First, let's plug in    and regroup the and terms:   Now, we will now show that the homogeneous terms, 1️⃣, simplify to zero:  Next, we will show that the particular terms, 2️⃣, simplify to :   So, adding the results of 1️⃣ and 2️⃣, leaves us with the forcing function, .     The General Solution to LNCC Equations  Let's summarize what we've learned so far:   ✳️ LNCC General Solution Structure   A linear nonhomogeneous constant coefficient (LNCC) equation has the form:   Its general solution is built from two parts:      is the solution to the corresponding homogeneous (LHCC) equation:    the particular solution that produces the forcing function .      📖❓ Contructing the General Solution   Suppose the homogeneous and particular solutions of an LNCC equation are given by . Select the general solution for such an equation.       .    Incorrect. This is only the particular solution, not the complete general solution.       .    Incorrect. One of the terms in this expression is incorrect.       .    Correct! The general solution is the sum of the homogeneous and particular solutions.       .    Incorrect. You do not multiply the particular solution by a constant.      Here's a quick example to help solidify this concept.  Finding the general solution, given    Find the general solution to the differential equation given that the particular solution is known to be .     The general solution has the form:   Since is given, we only need to solve the homogeneous equation:   Using the characteristic equation:   The homogeneous solution is:   Therefore, the general solution is:     While the structure of LNCC solutions is now clear, actually determining requires a systematic approach. The next section introduces the Method of Undetermined Coefficients, a technique for efficiently constructing when has a specific form.     A linear differential equation is nonhomogeneous if the right-hand side is not zero—it includes a forcing function , .  You can often guess a particular solution that matches the structural forms of the forcing function.  The general solution is .      Answer the following questions related to LNCC equations and their solutions.   Role of the Particular Solution   Which statement best describes the role of the particular solution to an LNCC equation?      Part of the general solution that accounts for the forcing function.    Correct! The particular solution is chosen to match the form of and account for its influence in the equation.      General solution of the LNCC equation.    Incorrect. The general solution of the homogeneous equation is called the complementary solution, not the particular solution.      Roots of the characteristic equation.    Incorrect. The characteristic equation is related to the complementary solution and does not involve the particular solution.      Coefficients of the differential equation.    Incorrect. The particular solution addresses the specific form of and is part of solving the non-homogeneous equation, but its purpose isn't simplification.      Particular Solution Properties   Which statements are true about the particular solution, , of       It is part of the general solution.   selected.     All of its terms simplify to when plugged into the equation.   selected.     It is constructed from the roots of a characteristic equation.   selected.     It mimics the structure of the forcing function, .   selected.     It contains constants of integration (e.g., , , etc.).   selected.     Homogeneous Solution Properties   Which statements are true about the homogeneous solution, , of       It is part of the general solution.   selected.     All of its terms simplify to when plugged into the equation.   selected.     It is constructed from the roots of a characteristic equation.   selected.     It mimics the structure of the forcing function, .   selected.     It contains constants of integration (e.g., , , etc.).   selected.        "
},
{
  "id": "lncc-equation-2-6",
  "level": "2",
  "url": "lncc-equation.html#lncc-equation-2-6",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "forcing function "
},
{
  "id": "particular-check-4",
  "level": "2",
  "url": "lncc-equation.html#particular-check-4",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "particular solutions "
},
{
  "id": "lncc-general-solution-6",
  "level": "2",
  "url": "lncc-equation.html#lncc-general-solution-6",
  "type": "🌌 Example",
  "number": "130",
  "title": "Finding the general solution, given <span class=\"process-math\">\\(y_p\\)<\/span>.",
  "body": "Finding the general solution, given    Find the general solution to the differential equation given that the particular solution is known to be .     The general solution has the form:   Since is given, we only need to solve the homogeneous equation:   Using the characteristic equation:   The homogeneous solution is:   Therefore, the general solution is:    "
},
{
  "id": "lncc-equation-8",
  "level": "2",
  "url": "lncc-equation.html#lncc-equation-8",
  "type": "🗝️ Key Takeaways...",
  "number": "",
  "title": "",
  "body": "  A linear differential equation is nonhomogeneous if the right-hand side is not zero—it includes a forcing function , .  You can often guess a particular solution that matches the structural forms of the forcing function.  The general solution is .   "
},
{
  "id": "lncc-forcing-functions-cyu",
  "level": "2",
  "url": "lncc-equation.html#lncc-forcing-functions-cyu",
  "type": "🤔💭 Check Your Understanding",
  "number": "131",
  "title": "",
  "body": "  Answer the following questions related to LNCC equations and their solutions.   Role of the Particular Solution   Which statement best describes the role of the particular solution to an LNCC equation?      Part of the general solution that accounts for the forcing function.    Correct! The particular solution is chosen to match the form of and account for its influence in the equation.      General solution of the LNCC equation.    Incorrect. The general solution of the homogeneous equation is called the complementary solution, not the particular solution.      Roots of the characteristic equation.    Incorrect. The characteristic equation is related to the complementary solution and does not involve the particular solution.      Coefficients of the differential equation.    Incorrect. The particular solution addresses the specific form of and is part of solving the non-homogeneous equation, but its purpose isn't simplification.      Particular Solution Properties   Which statements are true about the particular solution, , of       It is part of the general solution.   selected.     All of its terms simplify to when plugged into the equation.   selected.     It is constructed from the roots of a characteristic equation.   selected.     It mimics the structure of the forcing function, .   selected.     It contains constants of integration (e.g., , , etc.).   selected.     Homogeneous Solution Properties   Which statements are true about the homogeneous solution, , of       It is part of the general solution.   selected.     All of its terms simplify to when plugged into the equation.   selected.     It is constructed from the roots of a characteristic equation.   selected.     It mimics the structure of the forcing function, .   selected.     It contains constants of integration (e.g., , , etc.).   selected.       "
},
{
  "id": "selecting-the-particular-soln",
  "level": "1",
  "url": "selecting-the-particular-soln.html",
  "type": "Section",
  "number": "",
  "title": "Selecting the Particular Solution Form",
  "body": " Selecting the Particular Solution Form   In the previous section, we saw that the general solution to a linear nonhomogeneous constant coefficient (LNCC) equation has two parts: the homogeneous solution  and the particular solution  . The homogeneous solution is found using the characteristic equation, while the particular solution is constructed by (1) selecting a form similar to the forcing function, , and (2) determining the coefficients of that form.  In this section, we focus on selecting a form for . The key idea is to match the structural form of the forcing function , so that when it is substituted into the differential equation, all the resulting terms simplify to .    Selecting Basic Forms  The first step in choosing is recognizing the structure of . Since and its derivatives must eventually simplify to match , should have a similar form. If is a polynomial, exponential, sine, or cosine function, then should be too.   provides a guide for selecting an initial form of based on the type of . In each case, represent the undetermined coefficients we'll solve for later.    forms based on , where are known constants. must be determined. Degree 4+ polynomials follow a similar pattern.        Forcing Function Type,  Particular Solution Form,    1  (constant)     2      3      4      5      6       One important note: even if a term is missing in , you should still include it in if it's part of the general form. For example:   🔸  If , the term is missing, but must still include it: .    🔸  If , then . Even though isn't in , it's needed because its derivative produces cosine terms.    Selecting Basic Forms of   Use to determine the appropriate form of in each case.      Since is exponential, we use : .         This matches . Even though doesn't appear in , we include it: .          is a degree 2 polynomial, so from : .         Move the constant to the right side: . Now is constant ( ): .         4th degree polynomials are not represented in the table, but follow a similar pattern: .        📖❓ Matching single term forcing functions to the particular form   Drag each forcing function on the left to the initial selection of on the right.                                                When Guessing Works (and When It Doesn't)  This method of guessing the particular solution based on the forcing function is very effective. However, it does have its limitations. In particular, it only applies when can be written as a sum or product of:   Polynomials, like  Exponentials, like  Sine and cosine functions, like  Any sum or product of these function types   Functions such as , , or fall outside this category. For those, we'll need a different method entirely. But for the allowed types, this method offers a fast and reliable way to select .   📖❓ When to Guess   Which types of forcing functions are suitable for the Method of Undetermined Coefficients?      Polynomial functions like  Correct! Polynomial functions are suitable for this method.    Exponential functions like  Correct! Exponential functions are also suitable.    Sine or cosine functions like or  Correct! Sine and cosine functions are suitable as well.    Functions like or  Not quite. The method does not apply to logarithmic or tangent functions.       Combining Basic Forms via Addition  If is a sum of different function types, say a polynomial plus an exponential, then should be a sum of the corresponding matching forms.   Initial form of   Use to identify the appropriate form of in each case.      This matches is exponential plus constant, so: .         Both terms have the same argument, , the form is the standard  .         This combines exponential and sine, so we need: .         Cosines with different arguments requires the sum of two forms:         📖❓ Sum of particular solution forms   Select the initial form of the particular solution for an LNCC equation with forcing function: .      Incorrect. Derivatives of this form will not yield a term.     Incorrect. This form is missing a term.     Incorrect. This form is inappropriate since the forcing function is not a product of an exponential function and sine or cosine functions.     Correct! Although the forcing function does not contain a cosine term, the derivatives of cosine terms can still produce sine terms.       Combining Basic Forms via Multiplication  If the forcing function is a product of basic function types—such as a polynomial times an exponential—then the particular solution must also be a product of their matching forms. For example, the differential equation  , has a forcing function that is a quadratic times an exponential, so we start with: .  However, be careful: multiplying by just makes new coefficients:   Since each pair can be merged as single coefficient, we just relabel them:   We'll use this simplification trick often. It keeps the form of clean and will make solving for , and much easier later.   📖❓ Product of particular solution forms   Select the initial form of the particular solution for an LNCC equation with forcing function: .      Correct! The forcing function is the product of a 2nd degree polynomial and an exponential function, so the particular solution should be the product the most general 2nd degree polynomial and an exponential function.     Incorrect. Although this form perfectly matches the form of the forcing function, the solution could potentially include and constant terms.     Incorrect. The term also needs a coefficient.     Incorrect. The extra coefficient is unnecessary, as it can be absorbed into the constants and .     Initial form of - Products of Forms   For each of the following forcing functions, select an appropriate initial form of . Simplify by combining or eliminating any redundant constants.      This is an exponential times a cosine: . However, distributing shows that it is redundant and we relabel as: .         The forcing function simplifies: , so:          This is a 3rd degree polynomial times a cosine. So, initially we set: .  Multiplying the polynomial onto sine and cosine, gives us .  Distributing and shows that they are redundant, so we relabel as follows:          Here, both terms involve powers of times trig functions. But we don't need separate guesses—one form covers both:   This form includes the term and also handles automatically.       With these examples and the table as a guide, you're now equipped to handle both additive and multiplicative combinations in . Next, we'll deal with one last wrinkle: what to do if accidentally overlaps with the homogeneous solution .   📖❓ Matching Forcing Function (with Products) to   By dragging from left to right, match the forcing functions to the appropriate initial form of .                                             Modifying Particular Solutions  We now know how to choose a form for based on the structure of , but there's one final complication: If a term in a term in the homogeneous solution , then that term cannot contribute to generating . Instead, it will give zero, since that is what terms in do when substituted into the differential equation.  To fix this, we multiply the overlapping part of by . If there's still overlap, we multiply by again—repeating until shares no like-terms with .  For example, consider: The homogeneous solution and the initial particular solution are: .  Notice that and in contain the like terms: and . This means that plugging into the left side of the equation will simplify to , not , as required.  So we modify by multiplying the conflicting term by :   Now, has no terms in common with , ensuring that they are independent.   Modification Rule for the Particular Solution  If any term in your guess for also appears in , multiply that term by the independent variable . Repeat as needed until all overlapping terms are eliminated.    📖❓ Handling Like Terms   What should you do if contains a term also present in ?     Multiply the term in by the independent variable.    Delete the term from .    Multiply the term in by the independent variable.    Use integration to eliminate the term.     Let's work through some examples where modification is required, and see how this rule plays out.  Modifying the Initial Form of   For each LNCC equation below:  Find the homogeneous solution .  Select the initial form of .  Modify to ensure it has no overlap with .            The characteristic equation is , which has a repeated root: . So, .     The natural guess for to match is .    Since is in , we multiply by :   But, is still in , so we repeat: .              Since the characteristic equation is , the roots are: and .    The guess for is .    Only the and terms conflict. Modify them: .              The characteristic equation , has roots: , leading to .    The initial guess for is .    No modification is needed since doesn't appear in .               The characteristic equation , has the repeated solution , so .    The initial guess for is: .    Multiplying out and helps show that and are conflicting terms. Multiplying all terms by gives the correct form: .          Now that we know how to construct an appropriate and independent form for , the last step is to determine the values of the unknown coefficients.   📖❓ Select the Correct Form of   Consider the linear non-homogeneous constant coefficient equation . Given that the homogeneous solution is , select the form of the particular solution after any necessary modifications.       Incorrect. This would be the correct initial form for the particular solution, but not the final form.      Incorrect. Don't create the particular solution form based on the homogeneous solution.      Incorrect. This form indicates the forcing function contains the product of a first degree polynomial and an exponential function.      Correct! The initial form would be , but a like-term is also in . One multiplication by resolves this.        To choose , match its structure to the form of (polynomial, exponential, sine, cosine, or combinations).  For sums like , build as the sum of matching forms.  For products like , multiply the forms, but look out for redundant constants.  If overlaps with , multiply the conflicting terms in by until they are independent.      Answer the following questions related to LNCC equations.    Match Forcing Function to Form   Match each forcing function to its correct initial form of .                                   What is the Next Move?   Which statement best describes the next action you should take when the particular solution, , has a like-term with the homogeneous solution, ?     This is normal, move on.  Incorrect. The cannot have terms in common with .    Remove the like-term from .  Incorrect. No terms in should ever be removed.    Multiply the like-term in by .  Correct!    Multiply the like-term in by .  Incorrect. The particular solution should be modified, not the homogeneous solution.      Modify   If an equation has the forcing function and homogeneous solution, , select the correct modified form of ?      Incorrect. The form of should be modified until there are no terms in common with .     Correct! The modified form of is .     Incorrect. The form of should be modified until there are no terms in common with .     Incorrect. The form of should be modified until there are no terms in common with .      Match the Scenario to the Correct Action   The homogeneous solution to the LNCC equation is given by .  On the left side are initial forms for various forcing functions, .  Drag each initial form to its correct modified form on the right.       No modification needed                          REVIEW: Valid Forcing Functions for Undetermined Coefficients   Which of the following are valid types of forcing functions for the Method of Undetermined Coefficients?              "
},
{
  "id": "yp-forms-table",
  "level": "2",
  "url": "selecting-the-particular-soln.html#yp-forms-table",
  "type": "Table",
  "number": "132",
  "title": "<span class=\"process-math\">\\(y_p\\)<\/span> forms based on <span class=\"process-math\">\\(f(x)\\text{,}\\)<\/span> where <span class=\"process-math\">\\(a, b, c, d, \\alpha, \\beta\\)<\/span> are known constants. <span class=\"process-math\">\\(A, B, C, D\\)<\/span> must be determined. Degree 4+ polynomials follow a similar pattern.",
  "body": "  forms based on , where are known constants. must be determined. Degree 4+ polynomials follow a similar pattern.        Forcing Function Type,  Particular Solution Form,    1  (constant)     2      3      4      5      6      "
},
{
  "id": "selecting-basic-forms-for-yp-8",
  "level": "2",
  "url": "selecting-the-particular-soln.html#selecting-basic-forms-for-yp-8",
  "type": "🌌 Example",
  "number": "133",
  "title": "Selecting Basic Forms of <span class=\"process-math\">\\(y_p\\)<\/span>.",
  "body": " Selecting Basic Forms of   Use to determine the appropriate form of in each case.      Since is exponential, we use : .         This matches . Even though doesn't appear in , we include it: .          is a degree 2 polynomial, so from : .         Move the constant to the right side: . Now is constant ( ): .         4th degree polynomials are not represented in the table, but follow a similar pattern: .      "
},
{
  "id": "adding-yp-forms-3",
  "level": "2",
  "url": "selecting-the-particular-soln.html#adding-yp-forms-3",
  "type": "🌌 Example",
  "number": "134",
  "title": "Initial form of <span class=\"process-math\">\\(y_p\\)<\/span>.",
  "body": " Initial form of   Use to identify the appropriate form of in each case.      This matches is exponential plus constant, so: .         Both terms have the same argument, , the form is the standard  .         This combines exponential and sine, so we need: .         Cosines with different arguments requires the sum of two forms:       "
},
{
  "id": "product-forms-simplifying-9",
  "level": "2",
  "url": "selecting-the-particular-soln.html#product-forms-simplifying-9",
  "type": "🌌 Example",
  "number": "135",
  "title": "Initial form of <span class=\"process-math\">\\(y_p\\)<\/span> - Products of Forms.",
  "body": "Initial form of - Products of Forms   For each of the following forcing functions, select an appropriate initial form of . Simplify by combining or eliminating any redundant constants.      This is an exponential times a cosine: . However, distributing shows that it is redundant and we relabel as: .         The forcing function simplifies: , so:          This is a 3rd degree polynomial times a cosine. So, initially we set: .  Multiplying the polynomial onto sine and cosine, gives us .  Distributing and shows that they are redundant, so we relabel as follows:          Here, both terms involve powers of times trig functions. But we don't need separate guesses—one form covers both:   This form includes the term and also handles automatically.      "
},
{
  "id": "modifying-yp-11",
  "level": "2",
  "url": "selecting-the-particular-soln.html#modifying-yp-11",
  "type": "🌌 Example",
  "number": "136",
  "title": "Modifying the Initial Form of <span class=\"process-math\">\\(y_p\\)<\/span>.",
  "body": "Modifying the Initial Form of   For each LNCC equation below:  Find the homogeneous solution .  Select the initial form of .  Modify to ensure it has no overlap with .            The characteristic equation is , which has a repeated root: . So, .     The natural guess for to match is .    Since is in , we multiply by :   But, is still in , so we repeat: .              Since the characteristic equation is , the roots are: and .    The guess for is .    Only the and terms conflict. Modify them: .              The characteristic equation , has roots: , leading to .    The initial guess for is .    No modification is needed since doesn't appear in .               The characteristic equation , has the repeated solution , so .    The initial guess for is: .    Multiplying out and helps show that and are conflicting terms. Multiplying all terms by gives the correct form: .         "
},
{
  "id": "selecting-the-particular-soln-wrapup",
  "level": "2",
  "url": "selecting-the-particular-soln.html#selecting-the-particular-soln-wrapup",
  "type": "🗝️ Key Takeaways...",
  "number": "",
  "title": "",
  "body": "  To choose , match its structure to the form of (polynomial, exponential, sine, cosine, or combinations).  For sums like , build as the sum of matching forms.  For products like , multiply the forms, but look out for redundant constants.  If overlaps with , multiply the conflicting terms in by until they are independent.   "
},
{
  "id": "selecting-the-particular-soln-cyu",
  "level": "2",
  "url": "selecting-the-particular-soln.html#selecting-the-particular-soln-cyu",
  "type": "🤔💭 Check Your Understanding",
  "number": "137",
  "title": "",
  "body": "  Answer the following questions related to LNCC equations.    Match Forcing Function to Form   Match each forcing function to its correct initial form of .                                   What is the Next Move?   Which statement best describes the next action you should take when the particular solution, , has a like-term with the homogeneous solution, ?     This is normal, move on.  Incorrect. The cannot have terms in common with .    Remove the like-term from .  Incorrect. No terms in should ever be removed.    Multiply the like-term in by .  Correct!    Multiply the like-term in by .  Incorrect. The particular solution should be modified, not the homogeneous solution.      Modify   If an equation has the forcing function and homogeneous solution, , select the correct modified form of ?      Incorrect. The form of should be modified until there are no terms in common with .     Correct! The modified form of is .     Incorrect. The form of should be modified until there are no terms in common with .     Incorrect. The form of should be modified until there are no terms in common with .      Match the Scenario to the Correct Action   The homogeneous solution to the LNCC equation is given by .  On the left side are initial forms for various forcing functions, .  Drag each initial form to its correct modified form on the right.       No modification needed                          REVIEW: Valid Forcing Functions for Undetermined Coefficients   Which of the following are valid types of forcing functions for the Method of Undetermined Coefficients?             "
},
{
  "id": "uc-method",
  "level": "1",
  "url": "uc-method.html",
  "type": "Section",
  "number": "",
  "title": "Undetermined Coefficients Method",
  "body": " Undetermined Coefficients Method   In the last sections, we learned how to choose a form for the particular solution by matching it to the forcing function , and how to modify when it overlaps with the homogeneous solution .  Now, we'll finish the process by finding the exact values of the unknown coefficients in . This final step is called the Method of Undetermined Coefficients , and it uses substitution and simplification to solve for the unknowns.    Determining the Coefficients  With properly chosen and modified, the final step is to determine the values of the unknown coefficients. This step is purely algebraic: we plug into the differential equation, simplify, and match coefficients to solve for the unknowns.  We will walk through this process using a concrete example. To solve we first find by solving the homogeneous equation .  The characteristic equation is which factors as . This gives a repeated root , so   Now, pick to match . Since is a quadratic polynomial, we guess  Since has no terms in common with , no modification is needed.   Substituting and its derivatives, , into the equation and collecting like-terms gives .  Matching the underlined coefficients leads to the following system of equations and solution for , , and :                Therefore, and we can now write the general solution as .  Assuming the forcing function is of the type found in , this process should always lead to a single solution. If not, then double check your work and make sure the form of was selected and modified correctly.   📖❓ Not A Step in Finding   Which of the following is NOT a step in finding the undetermined coefficients of the particular solution?     Applying the initial conditions.  Correct! The initial conditions are used to solve for the unknown constants in the general solution, not the particular solution.    Plugging into the differential equation.  Incorrect. This is the first step in determining the coefficients.    Collecting and matching like-terms.  Incorrect. This is a crucial step for setting up the system of equations used to find the undetermined coefficients: , , ...    Solving a system of equations.  Incorrect. This is the final step in finding the coefficients.       Undetermined Coefficient Method Steps  Let's summarize the entire process of using the Method of Undetermined Coefficients. Your goal is to find the full general solution by first solving the homogeneous equation and then selecting, modifying, and finding .  Undetermined Coefficients  The general solution for the linear nonhomogeneous constant coefficient equation, , is determined from the following steps:    Step 1: Solve the homogeneous equation to get  Find the homogeneous solution by solving the characteristic equation from .    Step 2: Select the form of  Use to select a starting form for based on . The constants , , , ... are the undetermined coefficients .    Step 3: Modify if it conflicts with  Check for conflicting terms already in . If present, multiply these terms by . Repeat until no terms are shared.    Step 4: Find the Undetermined Coefficients of  Substitute and its derivatives into . Simplify and match coefficients of like terms to set up a system of equations. Solving this system gives the coefficients, , , , ....    Step 5: Give the Solution  Write the general solution as and apply any initial conditions, if given.     You'll follow these same five steps for any forcing function that fits the method. Now let's apply this process to some worked examples to see how it all comes together.    📖❓ Not A Step in the Undetermined Coefficient Method   What are the main steps for finding using the method of undetermined coefficients?     Select a form ➜ modify it, if necessary ➜ find its coefficients.  Correct! The process involves making an educated guess, substituting it, and solving for unknown coefficients.    Select a form ➜ integrate it ➜ find its coefficients.  Incorrect. Integration is not a part of the method of undetermined coefficients.    Select a form ➜ find its coefficients ➜ differentiate it.  Incorrect. The focus is on selecting and solving for , not guessing the homogeneous solution.    Select a form ➜ differentiate it ➜ verify the solution.  Incorrect. Integration is not a step in this method; it's about solving for coefficients of .      📖❓ Final Step of the Method   In the final step of the method, after substituting and simplifying, what do you do next?    Graph and to verify behavior.  Use initial conditions to determine integration constants.  Match coefficients of like terms and solve for unknown constants in .  Integrate to eliminate forcing terms.       Worked Examples  Apply the method of undetermined coefficients to find the general solution of the following linear nonhomogeneous differential equations.   First-Order LNCC with an Initial Condition   Find the general solution of        characteristic equation:     homogeneous solution:        initial :     ➜ No modification needed.     compute :     substitute , :     group powers of :     Match coefficients:                   particular solution:        general solution:     apply :     final solution:        Exponential Forcing Function   Find the general solution of        characteristic equation:       homogeneous solution:        initial :      Since and are like terms, we modify :    modified :        compute , :       substitute , , :     group like terms:       match coefficients:     particular solution:        general solution:        Trigonometric Forcing Function   Find the general solution of        characteristic equation:     homogeneous solution:        initial :      and are not like terms ➜ No modification needed.     compute and :       substitute , :        group like-terms:     Match coefficients:                   particular solution:          Second-Order LNCC with Modification   Find the general solution of        characteristic equation:       homogeneous solution:        initial :      Since and share an term, we modify this term in :    modified :        compute , :       substitute , , :     The terms cancel, but you can group the , , and constant terms:       match coefficients:                     particular solution:        general solution:        Forcing Function as a Product   Find the general solution of        characteristic equation:     homogeneous solution:        initial :     ➜ No modification needed.    Note: This part can be a bit intense. The product rule is used multiple times and after each step, we regroup the , , , and terms.   compute and :   substitute , :   group like-terms:     Match coefficients:                     Substituting and into the first two equations gives:                   particular solution:    General solution:     These examples illustrate the systematic nature of this method. No matter how complex the forcing function, the steps remain consistent: identify the homogeneous solution, propose a form for the particular solution, modify it if necessary, compute derivatives, substitute into the differential equation, and match coefficients to solve for unknowns.     The general solution to a nonhomogeneous differential equation is , where solves the homogeneous equation and accounts for the forcing function.  The Method of Undetermined Coefficients provides a systematic way to find when consists of polynomials, exponentials, sines, cosines, or their combinations.  Choose by matching the form of and modify it by multiplying by when necessary to avoid overlap with .  Substitute and its derivatives into the differential equation, simplify, and match like terms to solve for unknown coefficients.    "
},
{
  "id": "uc-method-2-2",
  "level": "2",
  "url": "uc-method.html#uc-method-2-2",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Method of Undetermined Coefficients "
},
{
  "id": "uc-method",
  "level": "2",
  "url": "uc-method.html#uc-method",
  "type": "✍🏻 Method",
  "number": "5",
  "title": "Undetermined Coefficients.",
  "body": "Undetermined Coefficients  The general solution for the linear nonhomogeneous constant coefficient equation, , is determined from the following steps:    Step 1: Solve the homogeneous equation to get  Find the homogeneous solution by solving the characteristic equation from .    Step 2: Select the form of  Use to select a starting form for based on . The constants , , , ... are the undetermined coefficients .    Step 3: Modify if it conflicts with  Check for conflicting terms already in . If present, multiply these terms by . Repeat until no terms are shared.    Step 4: Find the Undetermined Coefficients of  Substitute and its derivatives into . Simplify and match coefficients of like terms to set up a system of equations. Solving this system gives the coefficients, , , , ....    Step 5: Give the Solution  Write the general solution as and apply any initial conditions, if given.    "
},
{
  "id": "uc-method-examples-3",
  "level": "2",
  "url": "uc-method.html#uc-method-examples-3",
  "type": "🌌 Example",
  "number": "138",
  "title": "First-Order LNCC with an Initial Condition.",
  "body": " First-Order LNCC with an Initial Condition   Find the general solution of        characteristic equation:     homogeneous solution:        initial :     ➜ No modification needed.     compute :     substitute , :     group powers of :     Match coefficients:                   particular solution:        general solution:     apply :     final solution:      "
},
{
  "id": "uc-method-examples-4",
  "level": "2",
  "url": "uc-method.html#uc-method-examples-4",
  "type": "🌌 Example",
  "number": "139",
  "title": "Exponential Forcing Function.",
  "body": " Exponential Forcing Function   Find the general solution of        characteristic equation:       homogeneous solution:        initial :      Since and are like terms, we modify :    modified :        compute , :       substitute , , :     group like terms:       match coefficients:     particular solution:        general solution:      "
},
{
  "id": "uc-method-examples-5",
  "level": "2",
  "url": "uc-method.html#uc-method-examples-5",
  "type": "🌌 Example",
  "number": "140",
  "title": "Trigonometric Forcing Function.",
  "body": " Trigonometric Forcing Function   Find the general solution of        characteristic equation:     homogeneous solution:        initial :      and are not like terms ➜ No modification needed.     compute and :       substitute , :        group like-terms:     Match coefficients:                   particular solution:        "
},
{
  "id": "uc-method-examples-6",
  "level": "2",
  "url": "uc-method.html#uc-method-examples-6",
  "type": "🌌 Example",
  "number": "141",
  "title": "Second-Order LNCC with <span class=\"process-math\">\\(y_p\\)<\/span> Modification.",
  "body": " Second-Order LNCC with Modification   Find the general solution of        characteristic equation:       homogeneous solution:        initial :      Since and share an term, we modify this term in :    modified :        compute , :       substitute , , :     The terms cancel, but you can group the , , and constant terms:       match coefficients:                     particular solution:        general solution:      "
},
{
  "id": "uc-method-examples-7",
  "level": "2",
  "url": "uc-method.html#uc-method-examples-7",
  "type": "🌌 Example",
  "number": "142",
  "title": "Forcing Function as a Product.",
  "body": " Forcing Function as a Product   Find the general solution of        characteristic equation:     homogeneous solution:        initial :     ➜ No modification needed.    Note: This part can be a bit intense. The product rule is used multiple times and after each step, we regroup the , , , and terms.   compute and :   substitute , :   group like-terms:     Match coefficients:                     Substituting and into the first two equations gives:                   particular solution:    General solution:    "
},
{
  "id": "uc-method-wrapup",
  "level": "2",
  "url": "uc-method.html#uc-method-wrapup",
  "type": "🗝️ Key Takeaways...",
  "number": "",
  "title": "",
  "body": "  The general solution to a nonhomogeneous differential equation is , where solves the homogeneous equation and accounts for the forcing function.  The Method of Undetermined Coefficients provides a systematic way to find when consists of polynomials, exponentials, sines, cosines, or their combinations.  Choose by matching the form of and modify it by multiplying by when necessary to avoid overlap with .  Substitute and its derivatives into the differential equation, simplify, and match like terms to solve for unknown coefficients.   "
},
{
  "id": "undetermined-coefficients-6",
  "level": "1",
  "url": "undetermined-coefficients-6.html",
  "type": "Section",
  "number": "",
  "title": "Chapter 8 Exercises",
  "body": " Chapter 8 Exercises   ᯓ★❓Quick-Answer Questions    Multiple-Choice  Modifying the Initial Guess  When solving , the initial guess for is modified to because overlaps with .                 Purpose of the Method   What is the main purpose of the Method of Undetermined Coefficients?    To solve the homogeneous solution directly.  To determine the coefficients in the particular solution .  To find the characteristic equation roots.  To verify initial conditions are satisfied.    When It Works   The Method of Undetermined Coefficients applies when is:    A polynomial, exponential, sine, or cosine function.  A logarithmic function like .  A tangent function like .  A sum or product of polynomials, exponentials, and trig functions.    Choose   Suppose . Which of the following is the correct selection for ?      Incorrect. Remember to consider whether overlaps with any terms in .     Correct! Since is a term in , we need to multiply the particular solution by to ensure independence.     Incorrect. This form is more suited for a polynomial right-hand side like .     Incorrect. A constant form of would only be appropriate if were a constant.     Selecting the particular form   Select the initial form of the particular solution for an LNCC equation with forcing function: .      Correct! Since the forcing function is a 2nd degree polynomial, the particular solution should be the most general 2nd degree polynomial.     Incorrect. The forcing function does not contain an exponential function, so neither should the particular solution.     Incorrect. This form is missing a constant term.     Incorrect. While this form technically works, the term is unnecessary and makes the problem more difficult.     Select the correct form   What is the most appropriate form for the particular solution to ?           Correct! The forcing function is a first degree polynomial, so the particular solution should generalize this form as .           Incorrect. The forcing function is a polynomial, not an exponential function.           Incorrect. The forcing function is a polynomial, not a trigonometric function.           Incorrect. The forcing function is not a constant.      Classifying Practice   Select each classification label that applies to the equation      Linear  Correct, each of the terms are linear.    Homogeneous  Correct, the constant term is zero.    Constant Coefficients  Correct, each coefficient is constant.    LHCC  Correct!     Classifying Practice   Select each classification label that applies to the equation      Linear  Incorrect, is a nonlinear term.    Homogeneous  Technically, only linear equations can be labeled as homogeneous or not. Since the equation is nonlinear, we do not select it.    Constant Coefficients  Technically, only linear equations can be labeled as having constant coefficients or not. Since the equation is nonlinear, we do not select it.    LHCC  Incorrect.     Classifying Practice   Select each classification label that applies to the equation      Linear  Correct, both terms are linear.    Homogeneous  Incorrect, the constant term, , is non-zero.    Constant Coefficients  Correct, each coefficient is constant.    LHCC  Incorrect.     Classifying Practice   Select each classification label that applies to the equation      Linear  Correct, all terms are linear.    Homogeneous  Correct, the constant term is zero.    Constant Coefficients  Incorrect, the term coefficient, , is not constant.    LHCC  Incorrect.       Short-Answer    Suppose you knew that the final form of the particular solution of an LHCC equation was . Using only this information, list out everything you can deduce about the differential equation.     Why do we modify the particular solution by multiplying it by when solving LNCC equations?  Why do we modify the particular solution by multiplying it by when solving LNCC equations?    We modify by multiplying it by to ensure that the particular solution does not share any terms with the homogeneous solution . This adjustment makes and independent, ensuring that the general solution properly represents the nonhomogeneous term of the differential equation.    In the general solution of an LNCC equation, what roles do and play, and why is it important that they are independent?  In the general solution of an LNCC equation, what roles do and play, and why is it important that they are independent?      represents the solution to the homogeneous equation (where the nonhomogeneous term is zero), while represents a particular solution that accounts for the nonhomogeneous term. It is important that they are independent so that their combined terms accurately reflect the behavior of both the homogeneous and nonhomogeneous parts of the original differential equation.      Describe the difference between a homogeneous and a non-homogeneous differential equation.    A differential equation is termed \"homogeneous\" if all the terms of the equation are either derivatives of the unknown function or multiples of the unknown function itself, and the equation can be set equal to zero. In other words, there are no terms in the equation that are solely functions of the independent variable or constants. For example, the equation is homogeneous because all its terms involve or its derivatives and the equation is set equal to zero. A differential equation is termed \"non-homogeneous\" if it contains terms that are solely functions of the independent variable or constants which are not multiples of the unknown function or its derivatives. For example, the equation is non-homogeneous because of the term on the right side, which is not a derivative or multiple of . The distinction between homogeneous and non-homogeneous differential equations is crucial as the methods used to solve them can differ.        🏗️ Warm-ups & Drills   Write Down the Form of    For each forcing function , write down the correct form of the particular solution . Don't solve for coefficients, just show the form of .                            Drop the redundant guess that would duplicate another term. Final form:          Only need the highest-degree polynomial guess:          Ignore the exponential, guess for , then tack the exponential back on:          Product of a quadratic polynomial and cosine. Write separate polynomials for sine and cosine:          Exponential times linear polynomial times cosine. Separate terms for sine and cosine:                            Distinct terms (plain exponential, exponential times trig, and plain trig):       Find the Initial Form of   For each differential equation below, determine the correct form of the particular solution . Do NOT solve for coefficients like .        First, solve the homogeneous equation to find . The characteristic equation is: Since the roots are distinct and real, .  The forcing term is , a constant plus a trig function. Our initial guess is: No duplicates with occur, so this guess stands.             Solve the homogeneous equation . Distinct real roots give .  The forcing term is a 2nd-degree polynomial plus a cosine. Our guess is: None of these terms repeat .             Solve . So, .  The forcing term has and . Our first guess is: Since appears in , we multiply that term by :              Solve . Distinct real roots give .  The forcing term is (a first-degree polynomial) and . Guess: No repeats with .             Solve . Complex roots give .  The forcing term has and . Guess: None of these terms appear in .             Solve . Double root gives .  Forcing term: . First guess: .  Since appears in , modify → . But is also in , so we multiply again: .             Solve . Complex roots give .  Forcing term: . First guess: The and terms duplicate , so we multiply that piece by :              Particular Solution   In these exercises, go one step beyond identifying the form of and actually solve for the coefficients and write down a particular solution.  Remember:  Find first, to identify duplicates.  Guess based on the forcing term.  Modify if there's overlap with .  Plug into the DE, solve for the coefficients, and write the final .         First solve the homogeneous equation . Thus, .  The forcing term is . Guess .  Substitute into the DE: Matching coefficients gives .  Therefore:         The homogeneous equation is the same as above: .  Since the forcing term is , try .  Differentiate and substitute into the DE, collecting coefficients of and . Solve for and . The system yields:   Thus:         Again, .  The forcing term is a cubic polynomial. Guess: .  Differentiate, substitute into the DE, and match coefficients. Solving yields: .  So:         The homogeneous solution is .  A naive guess would be , but already appears in .  Modify guess to .  Substitute into the DE, solve for , and find .  Therefore:        ✍🏻 Solve the Differential Equations   General Solutions – Method of Undetermined Coefficients   Find the general solution to each differential equation using the five-step Method of Undetermined Coefficients:   Find the homogeneous solution .  Guess a form for based on the forcing function.  Modify if it overlaps with .  Substitute into the DE and solve for coefficients.  Write the general solution .       Step 1. Solve the homogeneous equation : So .  Step 2. The forcing function is a polynomial of degree 2. Guess .  Step 3. No overlap with , so no modification needed.  Step 4. Substitute into the DE:  Matching coefficients: , , . So . Step 5. Write the general solution:        Step 1: Since the right-hand side is a polynomial of degree 1, we guess: .  Step 2: Differentiate the guessed solution:   Step 3: Substitute into the original equation:   Step 4: Collect like-terms and solve for and :   Step 5: Write the particular solution: .          Step 1. Solve the homogeneous equation : So .  Step 2. The forcing function is . Guess .  Step 3. Because appears in , multiply by : .  Step 4. Substitute into the DE:  Plugging in and matching coefficients gives: , , . Step 5. Write the general solution:            Step 1. Solve the homogeneous equation : So .  Step 2. The forcing function is . Guess .  Step 3. No overlap with , so no modification needed.  Step 4. Substitute into the DE:  Matching coefficients from the DE gives and . Step 5. Write the general solution:            Step 1. Solve the homogeneous equation : So .  Step 2. The forcing function is . Guess .  Step 3. Because appears in , multiply by , then check again. . Still overlap (the term is also in ), so multiply by another : .  Step 4. Substitute into the DE, collect terms, and match coefficients:  Solve: , , . So . Step 5. Write the general solution:            Step 1. Solve the homogeneous equation : So .  Step 2. The forcing function is . Guess .  Step 3. Both and appear in , so multiply those terms by : .  Step 4. Substitute into the DE, collect terms, and match coefficients:  So . Step 5. Write the general solution:            Step 1. Solve the homogeneous equation : So .  Step 2. Forcing function is . Guess .  Step 3. No overlap with , so no modification is needed.  Step 4. Substitute into the DE:  So . Step 5. General solution:            Step 1. Solve the homogeneous equation : So .  Step 2. Forcing function is a degree‑2 polynomial. Guess .  Step 3. No overlap with , so no modification needed.  Step 4. Substitute into the DE and match coefficients:  Compare coefficients: , , . So . Step 5. General solution:            Step 1. Solve the homogeneous equation : So .  Step 2. Forcing function is . Guess .  Step 3. No overlap with since is not in .  Step 4. Substitute into the DE:  Collect like terms, match coefficients, and solve to find: , . So . Step 5. General solution:            Step 1. Solve the homogeneous equation : So .  Step 2. Forcing function is . Guess .  Step 3. Both and appear in , so multiply guess by : .  Step 4. Substitute into the DE and match coefficients to find: , .  Step 5. General solution:            Step 1. Solve the homogeneous equation : So .  Step 2. Forcing function is . Guess .  Step 3. Because appears in , multiply that term by : .  Step 4. Substitute into the DE, collect terms, and solve for coefficients: , , .  Step 5. General solution:            Step 1. Solve the homogeneous equation : So .  Step 2. The forcing function is a combination:  (poly × exponential)  (trig)  (poly × trig)  We guess each piece separately and combine: Then form .  Step 3. Adjustments already applied: term multiplied by to avoid overlap.  Step 4. Substitute into the DE. Match coefficients for each independent function:  From , solve for .  From and , solve for .  (Algebra omitted for brevity here but systematically done.)  Step 5. General solution:      (Coefficients determined by straightforward substitution.)          Step 1. Homogeneous equation: . So .  Step 2. Forcing has two pieces:  → guess  → guess    Step 3. No overlap with because those terms include or polynomials in front.  Step 4. Substitute all into the DE, match coefficients for each independent function, and solve for .  Step 5. General solution:            Step 1. Homogeneous equation: . So .  Step 2. Forcing has two pieces, same type as previous problem. Guess terms similar to uc-gen-12 but multiply by if overlap occurs:   Step 3. Adjustment made for overlap: multiplied terms by .  Step 4. Substitute and match coefficients for all six unknowns.  Step 5. General solution:            Step 1. Solve homogeneous equation : So .  Step 2. Forcing function is . Guess because of double overlap (every term has ).  Step 3. Multiplied guess by (since and are in ).  Step 4. Substitute, match coefficients for , , and , and solve for .  Step 5. General solution:         Initial Value Problems – Easy to Moderate   These IVPs involve either first-order linear DEs or simpler second-order equations with single forcing terms. Follow the UC workflow:   Find (the homogeneous solution).  Guess (the particular solution).  Adjust if it overlaps with .  Substitute and solve for coefficients.  Write .  Apply initial condition(s) to find the specific solution.       Step 1. Homogeneous: .  Step 2. Forcing is constant 6 → guess .  Step 3. No overlap.  Step 4. Substitute: .  Step 5. General: .  Step 6. Use : . .        Step 1. Homog: .  Step 2. Guess (poly deg 2).  Step 3. No overlap.  Step 4. Sub in: match coefficients → , , .  Step 5. General: .  Step 6. Use : . .        Step 1. Rewrite: , homog: .  Step 2. Guess .  Step 3. No overlap.  Step 4. Substitute: .  Step 5. General: .  Step 6. Apply : . .        Step 1. Homog: . .  Step 2. Guess .  Step 3. No overlap.  Step 4. Substitute: .  Step 5. General: .  Step 6. Apply ICs: So .       Initial Value Problems – Advanced   These IVPs involve second-order DEs with multi-term forcing functions (polynomials, exponentials, trig). They require careful handling of overlaps and sometimes multiple adjustments to .      Step 1. Homog: .  Step 2. Guess .  Step 3. No overlap.  Step 4. Substitute: .  Step 5. General: .  Step 6. Apply ICs: Solve → . .         Will involve guessing a composite = (At+B) + C t e^{3t} + D t e^{-2t}. (Detailed algebra mirrors earlier UC workflow.)            Harder forcing combo. Guess: Steps follow the same UC workflow; coefficients solved systematically.           "
},
{
  "id": "c8-quick-answer-mc",
  "level": "2",
  "url": "undetermined-coefficients-6.html#c8-quick-answer-mc",
  "type": "Reading Question",
  "number": "1",
  "title": "Multiple-Choice.",
  "body": " Multiple-Choice  Modifying the Initial Guess  When solving , the initial guess for is modified to because overlaps with .                 Purpose of the Method   What is the main purpose of the Method of Undetermined Coefficients?    To solve the homogeneous solution directly.  To determine the coefficients in the particular solution .  To find the characteristic equation roots.  To verify initial conditions are satisfied.    When It Works   The Method of Undetermined Coefficients applies when is:    A polynomial, exponential, sine, or cosine function.  A logarithmic function like .  A tangent function like .  A sum or product of polynomials, exponentials, and trig functions.    Choose   Suppose . Which of the following is the correct selection for ?      Incorrect. Remember to consider whether overlaps with any terms in .     Correct! Since is a term in , we need to multiply the particular solution by to ensure independence.     Incorrect. This form is more suited for a polynomial right-hand side like .     Incorrect. A constant form of would only be appropriate if were a constant.     Selecting the particular form   Select the initial form of the particular solution for an LNCC equation with forcing function: .      Correct! Since the forcing function is a 2nd degree polynomial, the particular solution should be the most general 2nd degree polynomial.     Incorrect. The forcing function does not contain an exponential function, so neither should the particular solution.     Incorrect. This form is missing a constant term.     Incorrect. While this form technically works, the term is unnecessary and makes the problem more difficult.     Select the correct form   What is the most appropriate form for the particular solution to ?           Correct! The forcing function is a first degree polynomial, so the particular solution should generalize this form as .           Incorrect. The forcing function is a polynomial, not an exponential function.           Incorrect. The forcing function is a polynomial, not a trigonometric function.           Incorrect. The forcing function is not a constant.      Classifying Practice   Select each classification label that applies to the equation      Linear  Correct, each of the terms are linear.    Homogeneous  Correct, the constant term is zero.    Constant Coefficients  Correct, each coefficient is constant.    LHCC  Correct!     Classifying Practice   Select each classification label that applies to the equation      Linear  Incorrect, is a nonlinear term.    Homogeneous  Technically, only linear equations can be labeled as homogeneous or not. Since the equation is nonlinear, we do not select it.    Constant Coefficients  Technically, only linear equations can be labeled as having constant coefficients or not. Since the equation is nonlinear, we do not select it.    LHCC  Incorrect.     Classifying Practice   Select each classification label that applies to the equation      Linear  Correct, both terms are linear.    Homogeneous  Incorrect, the constant term, , is non-zero.    Constant Coefficients  Correct, each coefficient is constant.    LHCC  Incorrect.     Classifying Practice   Select each classification label that applies to the equation      Linear  Correct, all terms are linear.    Homogeneous  Correct, the constant term is zero.    Constant Coefficients  Incorrect, the term coefficient, , is not constant.    LHCC  Incorrect.     "
},
{
  "id": "c8-quick-answer-sa",
  "level": "2",
  "url": "undetermined-coefficients-6.html#c8-quick-answer-sa",
  "type": "Reading Question",
  "number": "2",
  "title": "Short-Answer.",
  "body": " Short-Answer    Suppose you knew that the final form of the particular solution of an LHCC equation was . Using only this information, list out everything you can deduce about the differential equation.     Why do we modify the particular solution by multiplying it by when solving LNCC equations?  Why do we modify the particular solution by multiplying it by when solving LNCC equations?    We modify by multiplying it by to ensure that the particular solution does not share any terms with the homogeneous solution . This adjustment makes and independent, ensuring that the general solution properly represents the nonhomogeneous term of the differential equation.    In the general solution of an LNCC equation, what roles do and play, and why is it important that they are independent?  In the general solution of an LNCC equation, what roles do and play, and why is it important that they are independent?      represents the solution to the homogeneous equation (where the nonhomogeneous term is zero), while represents a particular solution that accounts for the nonhomogeneous term. It is important that they are independent so that their combined terms accurately reflect the behavior of both the homogeneous and nonhomogeneous parts of the original differential equation.      Describe the difference between a homogeneous and a non-homogeneous differential equation.    A differential equation is termed \"homogeneous\" if all the terms of the equation are either derivatives of the unknown function or multiples of the unknown function itself, and the equation can be set equal to zero. In other words, there are no terms in the equation that are solely functions of the independent variable or constants. For example, the equation is homogeneous because all its terms involve or its derivatives and the equation is set equal to zero. A differential equation is termed \"non-homogeneous\" if it contains terms that are solely functions of the independent variable or constants which are not multiples of the unknown function or its derivatives. For example, the equation is non-homogeneous because of the term on the right side, which is not a derivative or multiple of . The distinction between homogeneous and non-homogeneous differential equations is crucial as the methods used to solve them can differ.    "
},
{
  "id": "undetermined-coefficients-6-3-2-3",
  "level": "2",
  "url": "undetermined-coefficients-6.html#undetermined-coefficients-6-3-2-3",
  "type": "Exercise",
  "number": "1",
  "title": "",
  "body": "         "
},
{
  "id": "undetermined-coefficients-6-3-2-4",
  "level": "2",
  "url": "undetermined-coefficients-6.html#undetermined-coefficients-6-3-2-4",
  "type": "Exercise",
  "number": "2",
  "title": "",
  "body": "         "
},
{
  "id": "undetermined-coefficients-6-3-2-5",
  "level": "2",
  "url": "undetermined-coefficients-6.html#undetermined-coefficients-6-3-2-5",
  "type": "Exercise",
  "number": "3",
  "title": "",
  "body": "     Drop the redundant guess that would duplicate another term. Final form:    "
},
{
  "id": "undetermined-coefficients-6-3-2-6",
  "level": "2",
  "url": "undetermined-coefficients-6.html#undetermined-coefficients-6-3-2-6",
  "type": "Exercise",
  "number": "4",
  "title": "",
  "body": "     Only need the highest-degree polynomial guess:    "
},
{
  "id": "undetermined-coefficients-6-3-2-7",
  "level": "2",
  "url": "undetermined-coefficients-6.html#undetermined-coefficients-6-3-2-7",
  "type": "Exercise",
  "number": "5",
  "title": "",
  "body": "     Ignore the exponential, guess for , then tack the exponential back on:    "
},
{
  "id": "undetermined-coefficients-6-3-2-8",
  "level": "2",
  "url": "undetermined-coefficients-6.html#undetermined-coefficients-6-3-2-8",
  "type": "Exercise",
  "number": "6",
  "title": "",
  "body": "     Product of a quadratic polynomial and cosine. Write separate polynomials for sine and cosine:    "
},
{
  "id": "undetermined-coefficients-6-3-2-9",
  "level": "2",
  "url": "undetermined-coefficients-6.html#undetermined-coefficients-6-3-2-9",
  "type": "Exercise",
  "number": "7",
  "title": "",
  "body": "     Exponential times linear polynomial times cosine. Separate terms for sine and cosine:    "
},
{
  "id": "undetermined-coefficients-6-3-2-10",
  "level": "2",
  "url": "undetermined-coefficients-6.html#undetermined-coefficients-6-3-2-10",
  "type": "Exercise",
  "number": "8",
  "title": "",
  "body": "         "
},
{
  "id": "undetermined-coefficients-6-3-2-11",
  "level": "2",
  "url": "undetermined-coefficients-6.html#undetermined-coefficients-6-3-2-11",
  "type": "Exercise",
  "number": "9",
  "title": "",
  "body": "         "
},
{
  "id": "undetermined-coefficients-6-3-2-12",
  "level": "2",
  "url": "undetermined-coefficients-6.html#undetermined-coefficients-6-3-2-12",
  "type": "Exercise",
  "number": "10",
  "title": "",
  "body": "   Distinct terms (plain exponential, exponential times trig, and plain trig):    "
},
{
  "id": "undetermined-coefficients-6-3-3-3",
  "level": "2",
  "url": "undetermined-coefficients-6.html#undetermined-coefficients-6-3-3-3",
  "type": "Exercise",
  "number": "11",
  "title": "",
  "body": "   First, solve the homogeneous equation to find . The characteristic equation is: Since the roots are distinct and real, .  The forcing term is , a constant plus a trig function. Our initial guess is: No duplicates with occur, so this guess stands.      "
},
{
  "id": "undetermined-coefficients-6-3-3-4",
  "level": "2",
  "url": "undetermined-coefficients-6.html#undetermined-coefficients-6-3-3-4",
  "type": "Exercise",
  "number": "12",
  "title": "",
  "body": "     Solve the homogeneous equation . Distinct real roots give .  The forcing term is a 2nd-degree polynomial plus a cosine. Our guess is: None of these terms repeat .      "
},
{
  "id": "undetermined-coefficients-6-3-3-5",
  "level": "2",
  "url": "undetermined-coefficients-6.html#undetermined-coefficients-6-3-3-5",
  "type": "Exercise",
  "number": "13",
  "title": "",
  "body": "     Solve . So, .  The forcing term has and . Our first guess is: Since appears in , we multiply that term by :       "
},
{
  "id": "undetermined-coefficients-6-3-3-6",
  "level": "2",
  "url": "undetermined-coefficients-6.html#undetermined-coefficients-6-3-3-6",
  "type": "Exercise",
  "number": "14",
  "title": "",
  "body": "     Solve . Distinct real roots give .  The forcing term is (a first-degree polynomial) and . Guess: No repeats with .      "
},
{
  "id": "undetermined-coefficients-6-3-3-7",
  "level": "2",
  "url": "undetermined-coefficients-6.html#undetermined-coefficients-6-3-3-7",
  "type": "Exercise",
  "number": "15",
  "title": "",
  "body": "     Solve . Complex roots give .  The forcing term has and . Guess: None of these terms appear in .      "
},
{
  "id": "undetermined-coefficients-6-3-3-8",
  "level": "2",
  "url": "undetermined-coefficients-6.html#undetermined-coefficients-6-3-3-8",
  "type": "Exercise",
  "number": "16",
  "title": "",
  "body": "     Solve . Double root gives .  Forcing term: . First guess: .  Since appears in , modify → . But is also in , so we multiply again: .      "
},
{
  "id": "undetermined-coefficients-6-3-3-9",
  "level": "2",
  "url": "undetermined-coefficients-6.html#undetermined-coefficients-6-3-3-9",
  "type": "Exercise",
  "number": "17",
  "title": "",
  "body": "     Solve . Complex roots give .  Forcing term: . First guess: The and terms duplicate , so we multiply that piece by :       "
},
{
  "id": "undetermined-coefficients-6-3-3-10",
  "level": "2",
  "url": "undetermined-coefficients-6.html#undetermined-coefficients-6-3-3-10",
  "type": "Exercise",
  "number": "18",
  "title": "",
  "body": "   "
},
{
  "id": "undetermined-coefficients-6-3-4-3",
  "level": "2",
  "url": "undetermined-coefficients-6.html#undetermined-coefficients-6-3-4-3",
  "type": "Exercise",
  "number": "19",
  "title": "",
  "body": "   First solve the homogeneous equation . Thus, .  The forcing term is . Guess .  Substitute into the DE: Matching coefficients gives .  Therefore:    "
},
{
  "id": "undetermined-coefficients-6-3-4-4",
  "level": "2",
  "url": "undetermined-coefficients-6.html#undetermined-coefficients-6-3-4-4",
  "type": "Exercise",
  "number": "20",
  "title": "",
  "body": "   The homogeneous equation is the same as above: .  Since the forcing term is , try .  Differentiate and substitute into the DE, collecting coefficients of and . Solve for and . The system yields:   Thus:    "
},
{
  "id": "undetermined-coefficients-6-3-4-5",
  "level": "2",
  "url": "undetermined-coefficients-6.html#undetermined-coefficients-6-3-4-5",
  "type": "Exercise",
  "number": "21",
  "title": "",
  "body": "   Again, .  The forcing term is a cubic polynomial. Guess: .  Differentiate, substitute into the DE, and match coefficients. Solving yields: .  So:    "
},
{
  "id": "undetermined-coefficients-6-3-4-6",
  "level": "2",
  "url": "undetermined-coefficients-6.html#undetermined-coefficients-6-3-4-6",
  "type": "Exercise",
  "number": "22",
  "title": "",
  "body": "   The homogeneous solution is .  A naive guess would be , but already appears in .  Modify guess to .  Substitute into the DE, solve for , and find .  Therefore:    "
},
{
  "id": "uc-gen-1",
  "level": "2",
  "url": "undetermined-coefficients-6.html#uc-gen-1",
  "type": "Exercise",
  "number": "1",
  "title": "",
  "body": "   Step 1. Solve the homogeneous equation : So .  Step 2. The forcing function is a polynomial of degree 2. Guess .  Step 3. No overlap with , so no modification needed.  Step 4. Substitute into the DE:  Matching coefficients: , , . So . Step 5. Write the general solution:    "
},
{
  "id": "uc-gen-2",
  "level": "2",
  "url": "undetermined-coefficients-6.html#uc-gen-2",
  "type": "Exercise",
  "number": "2",
  "title": "",
  "body": "   Step 1: Since the right-hand side is a polynomial of degree 1, we guess: .  Step 2: Differentiate the guessed solution:   Step 3: Substitute into the original equation:   Step 4: Collect like-terms and solve for and :   Step 5: Write the particular solution: .    "
},
{
  "id": "uc-gen-3",
  "level": "2",
  "url": "undetermined-coefficients-6.html#uc-gen-3",
  "type": "Exercise",
  "number": "3",
  "title": "",
  "body": "     Step 1. Solve the homogeneous equation : So .  Step 2. The forcing function is . Guess .  Step 3. Because appears in , multiply by : .  Step 4. Substitute into the DE:  Plugging in and matching coefficients gives: , , . Step 5. Write the general solution:      "
},
{
  "id": "uc-gen-4",
  "level": "2",
  "url": "undetermined-coefficients-6.html#uc-gen-4",
  "type": "Exercise",
  "number": "4",
  "title": "",
  "body": "     Step 1. Solve the homogeneous equation : So .  Step 2. The forcing function is . Guess .  Step 3. No overlap with , so no modification needed.  Step 4. Substitute into the DE:  Matching coefficients from the DE gives and . Step 5. Write the general solution:      "
},
{
  "id": "uc-gen-5",
  "level": "2",
  "url": "undetermined-coefficients-6.html#uc-gen-5",
  "type": "Exercise",
  "number": "5",
  "title": "",
  "body": "     Step 1. Solve the homogeneous equation : So .  Step 2. The forcing function is . Guess .  Step 3. Because appears in , multiply by , then check again. . Still overlap (the term is also in ), so multiply by another : .  Step 4. Substitute into the DE, collect terms, and match coefficients:  Solve: , , . So . Step 5. Write the general solution:      "
},
{
  "id": "uc-gen-6",
  "level": "2",
  "url": "undetermined-coefficients-6.html#uc-gen-6",
  "type": "Exercise",
  "number": "6",
  "title": "",
  "body": "     Step 1. Solve the homogeneous equation : So .  Step 2. The forcing function is . Guess .  Step 3. Both and appear in , so multiply those terms by : .  Step 4. Substitute into the DE, collect terms, and match coefficients:  So . Step 5. Write the general solution:      "
},
{
  "id": "uc-gen-7",
  "level": "2",
  "url": "undetermined-coefficients-6.html#uc-gen-7",
  "type": "Exercise",
  "number": "7",
  "title": "",
  "body": "     Step 1. Solve the homogeneous equation : So .  Step 2. Forcing function is . Guess .  Step 3. No overlap with , so no modification is needed.  Step 4. Substitute into the DE:  So . Step 5. General solution:      "
},
{
  "id": "uc-gen-8",
  "level": "2",
  "url": "undetermined-coefficients-6.html#uc-gen-8",
  "type": "Exercise",
  "number": "8",
  "title": "",
  "body": "     Step 1. Solve the homogeneous equation : So .  Step 2. Forcing function is a degree‑2 polynomial. Guess .  Step 3. No overlap with , so no modification needed.  Step 4. Substitute into the DE and match coefficients:  Compare coefficients: , , . So . Step 5. General solution:      "
},
{
  "id": "uc-gen-9",
  "level": "2",
  "url": "undetermined-coefficients-6.html#uc-gen-9",
  "type": "Exercise",
  "number": "9",
  "title": "",
  "body": "     Step 1. Solve the homogeneous equation : So .  Step 2. Forcing function is . Guess .  Step 3. No overlap with since is not in .  Step 4. Substitute into the DE:  Collect like terms, match coefficients, and solve to find: , . So . Step 5. General solution:      "
},
{
  "id": "uc-gen-10",
  "level": "2",
  "url": "undetermined-coefficients-6.html#uc-gen-10",
  "type": "Exercise",
  "number": "10",
  "title": "",
  "body": "     Step 1. Solve the homogeneous equation : So .  Step 2. Forcing function is . Guess .  Step 3. Both and appear in , so multiply guess by : .  Step 4. Substitute into the DE and match coefficients to find: , .  Step 5. General solution:      "
},
{
  "id": "uc-gen-11",
  "level": "2",
  "url": "undetermined-coefficients-6.html#uc-gen-11",
  "type": "Exercise",
  "number": "11",
  "title": "",
  "body": "     Step 1. Solve the homogeneous equation : So .  Step 2. Forcing function is . Guess .  Step 3. Because appears in , multiply that term by : .  Step 4. Substitute into the DE, collect terms, and solve for coefficients: , , .  Step 5. General solution:      "
},
{
  "id": "uc-gen-12",
  "level": "2",
  "url": "undetermined-coefficients-6.html#uc-gen-12",
  "type": "Exercise",
  "number": "12",
  "title": "",
  "body": "     Step 1. Solve the homogeneous equation : So .  Step 2. The forcing function is a combination:  (poly × exponential)  (trig)  (poly × trig)  We guess each piece separately and combine: Then form .  Step 3. Adjustments already applied: term multiplied by to avoid overlap.  Step 4. Substitute into the DE. Match coefficients for each independent function:  From , solve for .  From and , solve for .  (Algebra omitted for brevity here but systematically done.)  Step 5. General solution:      (Coefficients determined by straightforward substitution.)    "
},
{
  "id": "uc-gen-13",
  "level": "2",
  "url": "undetermined-coefficients-6.html#uc-gen-13",
  "type": "Exercise",
  "number": "13",
  "title": "",
  "body": "     Step 1. Homogeneous equation: . So .  Step 2. Forcing has two pieces:  → guess  → guess    Step 3. No overlap with because those terms include or polynomials in front.  Step 4. Substitute all into the DE, match coefficients for each independent function, and solve for .  Step 5. General solution:      "
},
{
  "id": "uc-gen-14",
  "level": "2",
  "url": "undetermined-coefficients-6.html#uc-gen-14",
  "type": "Exercise",
  "number": "14",
  "title": "",
  "body": "     Step 1. Homogeneous equation: . So .  Step 2. Forcing has two pieces, same type as previous problem. Guess terms similar to uc-gen-12 but multiply by if overlap occurs:   Step 3. Adjustment made for overlap: multiplied terms by .  Step 4. Substitute and match coefficients for all six unknowns.  Step 5. General solution:      "
},
{
  "id": "uc-gen-15",
  "level": "2",
  "url": "undetermined-coefficients-6.html#uc-gen-15",
  "type": "Exercise",
  "number": "15",
  "title": "",
  "body": "     Step 1. Solve homogeneous equation : So .  Step 2. Forcing function is . Guess because of double overlap (every term has ).  Step 3. Multiplied guess by (since and are in ).  Step 4. Substitute, match coefficients for , , and , and solve for .  Step 5. General solution:      "
},
{
  "id": "c8-ivp-1",
  "level": "2",
  "url": "undetermined-coefficients-6.html#c8-ivp-1",
  "type": "Exercise",
  "number": "16",
  "title": "",
  "body": "   Step 1. Homogeneous: .  Step 2. Forcing is constant 6 → guess .  Step 3. No overlap.  Step 4. Substitute: .  Step 5. General: .  Step 6. Use : . .    "
},
{
  "id": "c8-ivp-2",
  "level": "2",
  "url": "undetermined-coefficients-6.html#c8-ivp-2",
  "type": "Exercise",
  "number": "17",
  "title": "",
  "body": "   Step 1. Homog: .  Step 2. Guess (poly deg 2).  Step 3. No overlap.  Step 4. Sub in: match coefficients → , , .  Step 5. General: .  Step 6. Use : . .    "
},
{
  "id": "c8-ivp-3",
  "level": "2",
  "url": "undetermined-coefficients-6.html#c8-ivp-3",
  "type": "Exercise",
  "number": "18",
  "title": "",
  "body": "   Step 1. Rewrite: , homog: .  Step 2. Guess .  Step 3. No overlap.  Step 4. Substitute: .  Step 5. General: .  Step 6. Apply : . .    "
},
{
  "id": "c8-ivp-4",
  "level": "2",
  "url": "undetermined-coefficients-6.html#c8-ivp-4",
  "type": "Exercise",
  "number": "19",
  "title": "",
  "body": "   Step 1. Homog: . .  Step 2. Guess .  Step 3. No overlap.  Step 4. Substitute: .  Step 5. General: .  Step 6. Apply ICs: So .    "
},
{
  "id": "ivp-5",
  "level": "2",
  "url": "undetermined-coefficients-6.html#ivp-5",
  "type": "Exercise",
  "number": "20",
  "title": "",
  "body": "   Step 1. Homog: .  Step 2. Guess .  Step 3. No overlap.  Step 4. Substitute: .  Step 5. General: .  Step 6. Apply ICs: Solve → . .    "
},
{
  "id": "ivp-6",
  "level": "2",
  "url": "undetermined-coefficients-6.html#ivp-6",
  "type": "Exercise",
  "number": "21",
  "title": "",
  "body": "    Will involve guessing a composite = (At+B) + C t e^{3t} + D t e^{-2t}. (Detailed algebra mirrors earlier UC workflow.)        "
},
{
  "id": "ivp-7",
  "level": "2",
  "url": "undetermined-coefficients-6.html#ivp-7",
  "type": "Exercise",
  "number": "22",
  "title": "",
  "body": "   Harder forcing combo. Guess: Steps follow the same UC workflow; coefficients solved systematically.        "
},
{
  "id": "lt-derivative-transfer",
  "level": "1",
  "url": "lt-derivative-transfer.html",
  "type": "Section",
  "number": "",
  "title": "Derivative Transfer via Integration by Parts",
  "body": " Derivative Transfer via Integration by Parts   Before we apply the Laplace transform to solve differential equations, we need to understand its foundational mechanism: transferring derivatives within an integral. This section begins with a quick refresher on integration by parts (IBP), emphasizing how derivatives applied to one function can be shifted to another. This transfer process is the key that unlocks the Laplace transform method.   Differentiation and Integration Essentials  Let's quickly review two essential tools: how exponentials behave under differentiation, and the integration by parts formula we will use throughout this chapter.    📖❓ Exponential Derivatives   Match each exponential function with its derivative with respect to . Assume is constant.                           📖❓ Integration by Parts   Click on the correct integration by parts formula.                          Review of Integration by Parts (IBP)  Integration by parts is a core calculus technique that allows us to transfer derivatives from one function to another inside an integral. Its most common form is: .  When and are functions of , we get a version of IBP which makes the transfer of derivatives more clear:   This simple idea of shifting derivatives is the basis for the Laplace transform method. We'll see it in action when one of the functions is .   📖❓ Derivative Transfer Technique   Which concept from calculus allows you to transfer the derivative of one function to another inside an integral?     Chain Rule   Incorrect. The chain rule is used for function compositions, not transferring derivatives within an integral.     L'Hôpital's Rule   Incorrect. L'Hôpital's Rule helps evaluate indeterminate limits, not manipulate derivatives inside integrals.     Integration by Parts   Correct! Integration by parts is the key tool that shifts derivatives between functions inside integrals.     Implicit Differentiation   Incorrect. Implicit differentiation helps with equations where the dependent variable isn't isolated.        Using Exponentials to Transfer Derivatives   👀 Review: Derivative of   Let be a constant. Which function is equal to the derivative ?       Correct! The derivative of with respect to is by the chain rule.       Incorrect. You're missing the from the chain rule.       Incorrect. The sign should be negative because the exponent is .       Incorrect. This form appears when integrating, not differentiating. Try applying the chain rule.      Let's now see why exponentials make this derivative transfer especially useful. Suppose we choose and . Differentiating gives and . Applying integration by parts yields:   Notice the key point: the derivative on has been completely removed. Instead, we get two terms: a boundary term and a new integral without .  This trade is usually worth it since in the context of Laplace transforms, the term will often vanish and is the given initial condition.     Integration by parts lets you shift derivatives from one function to another within an integral.  Choosing causes derivatives on to transfer onto the exponential, producing a simple factor of .  Understanding this transfer mechanism explains where the variable comes from and why it appears in Laplace transform formulas.        📖❓ Key Concepts Behind Laplace Transforms   Which two core mathematical ideas does the Laplace transform method rely on to solve differential equations?     Chain Rule   Incorrect. The chain rule is not central to the Laplace transform method. Think about a process that lets you transfer derivatives.     Product Rule   No, the product rule is not a key idea in the Laplace transform method. Consider an integration-based technique.     Integration by Parts   Correct! Integration by parts allows derivatives to be transferred between functions inside an integral, a foundational technique in the Laplace method.     Properties of Exponential Functions   Correct! The method uses properties of exponential functions, especially their predictable behavior under differentiation and integration.       📖❓ IBP on   Select the result of applying integration by parts to .   Don't think of this as a Calculus exercise. Instead, try to think about transferring derivatives.        Incorrect. A correct application of integration by parts must include the right choice of and . Try again.       Incorrect. Be sure you're transferring the derivative and integrating the right part.       Incorrect. This result skips important parts of the integration by parts formula.       Correct! Integration by parts with and gives this result.         "
},
{
  "id": "lt-derivative-transfer-2-2",
  "level": "2",
  "url": "lt-derivative-transfer.html#lt-derivative-transfer-2-2",
  "type": "👀 Quick Review",
  "number": "143",
  "title": "Differentiation and Integration Essentials.",
  "body": " Differentiation and Integration Essentials  Let's quickly review two essential tools: how exponentials behave under differentiation, and the integration by parts formula we will use throughout this chapter.    📖❓ Exponential Derivatives   Match each exponential function with its derivative with respect to . Assume is constant.                           📖❓ Integration by Parts   Click on the correct integration by parts formula.                       "
},
{
  "id": "lt-derivative-transfer-wrapup",
  "level": "2",
  "url": "lt-derivative-transfer.html#lt-derivative-transfer-wrapup",
  "type": "🗝️ Key Takeaways...",
  "number": "",
  "title": "",
  "body": "  Integration by parts lets you shift derivatives from one function to another within an integral.  Choosing causes derivatives on to transfer onto the exponential, producing a simple factor of .  Understanding this transfer mechanism explains where the variable comes from and why it appears in Laplace transform formulas.   "
},
{
  "id": "lt-derivative-transfer-cyu",
  "level": "2",
  "url": "lt-derivative-transfer.html#lt-derivative-transfer-cyu",
  "type": "🤔💭 Check Your Understanding",
  "number": "144",
  "title": "",
  "body": "    📖❓ Key Concepts Behind Laplace Transforms   Which two core mathematical ideas does the Laplace transform method rely on to solve differential equations?     Chain Rule   Incorrect. The chain rule is not central to the Laplace transform method. Think about a process that lets you transfer derivatives.     Product Rule   No, the product rule is not a key idea in the Laplace transform method. Consider an integration-based technique.     Integration by Parts   Correct! Integration by parts allows derivatives to be transferred between functions inside an integral, a foundational technique in the Laplace method.     Properties of Exponential Functions   Correct! The method uses properties of exponential functions, especially their predictable behavior under differentiation and integration.       📖❓ IBP on   Select the result of applying integration by parts to .   Don't think of this as a Calculus exercise. Instead, try to think about transferring derivatives.        Incorrect. A correct application of integration by parts must include the right choice of and . Try again.       Incorrect. Be sure you're transferring the derivative and integrating the right part.       Incorrect. This result skips important parts of the integration by parts formula.       Correct! Integration by parts with and gives this result.        "
},
{
  "id": "lt-definition",
  "level": "1",
  "url": "lt-definition.html",
  "type": "Section",
  "number": "",
  "title": "Defining the Laplace Transform",
  "body": " Defining the Laplace Transform   We've seen how integration by parts transfers derivatives from one function to another inside an integral. Now we take the next step: defining a transform that systematically applies this principle.  In this section, we'll see how this transform is constructed and how it converts functions of into functions of . You'll also see how to compute Laplace transforms from the definition.    Why Use the Laplace Transform?  To see where we're headed, imagine you need to solve the differential equation   Suppose you multiply both sides by and integrate with respect to :   The left-hand side contains a derivative inside the integral. From the previous section, you know we can transfer this derivative to the exponential function. Doing so removes the derivative from , essentially allowing you to use algebra to isolate it.  This is the idea behind the Laplace transform and the motivation for its definition.    Definition of the Laplace Transform  Laplace Transform   Given a function defined for , its Laplace transform, denoted , is defined by provided the integral converges. The result is a new function, typically written as a capitalized version of the variable you are transforming. In this case:      📖❓ Spot the Error in the Definition   Click on the incorrect part of the Laplace transform definition.                       Working with Improper Integrals  Notice that the Laplace transform involves an improper integral: the upper limit is . In calculus, we handle this by replacing with a variable , computing the definite integral, and then taking the limit as : .  When calculating Laplace transforms, you first compute the integral with respect to , treating as a constant. Then you compute the limit of the result as approaches .  The Laplace transform exists if this limit produces a finite value. Often, exponential decay from guarantees convergence when is large enough.   📖❓ Convergence Requirement for Laplace Transforms   To compute an improper integral, you write it as a limit of a definite integral. For example, .  Select variables\/constants would you expect to see after computing the integral, , but before taking the limit.       The variable is a constant in so it will also appear in the antiderivative.     The variable gets plugged into after you find the antiderivative.     Since the variable of integration is , you plug the limits of integration, and , into once you have the antiderivative.    (integration constant)  We are computing a definite integral, not an indefinite one.        👀 Quick Review: Exponential Properties  To get through the transform rule derivations, you'll need to be familiar with some key exponential properties that will appear throughtout this chapter.   Exponential Antiderivative  For any constant , we have: . While this can be found by substituting , it is such a common antiderivative that you should just know it without this extra step.    Exponential End Behavior  The end behavior can be seen from the most basic exponential function:             In general, the end behavior depends on whether the power goes to or :      In this section, we will take limits as . Your goal will be to figure out if causes the power to go to or . Only then will you know where goes.   📖❓ Checkpoint: Exponential Properties   Exponential Antiderivative   Evaluate:            Exponential End Behavior   Determine if each limit is -ထ, , or ထ.  Click on one of the three options next to each limit to select your answer.  Assume is a positive constant.                                                                          Figure out the Limits   Give each limit by filling in one of the following: 0 , inf ( ), -inf ( ).    If then  and    Assume that is a positive constant.  If then  and    Assume that is a negative constant.  If then  and         -\\s*inf  .*  Incorrect. Where would times something that goes to must go?      .*  Incorrect. Think about where goes as goes to , then decide where should go.     -\\s*inf  .*  Incorrect. If is positive, then is a negative number times something that goes to .      .*  Incorrect. Think about where goes as goes to , then decide where should go.     inf  .*  Incorrect. If is negative, then is a positive number times something that goes to .     inf  .*  Incorrect. Think about where goes as goes to , then decide where should go.         First Examples of Laplace Transforms  Let's see how the definition works by computing Laplace transforms for simple functions. We'll start with a constant function and a linear function.   First Look at Laplace Transforms  Find the Laplace transform of    (constant function)     By the definition above, we have the improper integral .  Assuming and are constant, we integrate with respect to : .  🔍 Next, we compute the limit of as (with constant):  🔍 Since the limit only controls , we can think of as a number (like ). This means that is also a number that can be pulled out of the limit using the limit property from calculus:     We find the limit using the end behavior of the exponential . There are two possiblities:  is excluded since it would lead to    is positive:    is negative:     Since we only get convergence when is positive, we must require in the Laplace transform of : .         Applying the definition and writing the integral as a limit, we have .   🔍 Computing with integration by parts, gives us  🔍 Choosing integration by parts gives      Next, we compute the limit of as :   🔍 As long as , both and go to zero  🔍 Assuming , the limits are computed by:            where denotes L'Hôpital's Rule was applied to the limit.   Therefore, the Laplace transform of is .       These examples show the typical process: set up the improper integral, compute it as a definite integral, then take the limit as . You'll see how emerges naturally from this process.  In upcoming sections, we'll build a library of Laplace transforms for the most common functions and learn properties that make these computations even faster.     The Laplace transform converts a function of into a function of using  The Laplace transform is an improper integral evaluated by rewriting it as .  The result is a function of and exists only when the integral converges.    "
},
{
  "id": "laplace-transform-definition",
  "level": "2",
  "url": "lt-definition.html#laplace-transform-definition",
  "type": "📙 Definition",
  "number": "145",
  "title": "Laplace Transform.",
  "body": "Laplace Transform   Given a function defined for , its Laplace transform, denoted , is defined by provided the integral converges. The result is a new function, typically written as a capitalized version of the variable you are transforming. In this case:    "
},
{
  "id": "lt-definition-chkpt-1",
  "level": "2",
  "url": "lt-definition.html#lt-definition-chkpt-1",
  "type": "Checkpoint",
  "number": "146",
  "title": "📖❓ Spot the Error in the Definition.",
  "body": " 📖❓ Spot the Error in the Definition   Click on the incorrect part of the Laplace transform definition.                     "
},
{
  "id": "lt-definition-chkpt-2",
  "level": "2",
  "url": "lt-definition.html#lt-definition-chkpt-2",
  "type": "Checkpoint",
  "number": "147",
  "title": "📖❓ Convergence Requirement for Laplace Transforms.",
  "body": " 📖❓ Convergence Requirement for Laplace Transforms   To compute an improper integral, you write it as a limit of a definite integral. For example, .  Select variables\/constants would you expect to see after computing the integral, , but before taking the limit.       The variable is a constant in so it will also appear in the antiderivative.     The variable gets plugged into after you find the antiderivative.     Since the variable of integration is , you plug the limits of integration, and , into once you have the antiderivative.    (integration constant)  We are computing a definite integral, not an indefinite one.    "
},
{
  "id": "lt-definition-5-5",
  "level": "2",
  "url": "lt-definition.html#lt-definition-5-5",
  "type": "Reading Question",
  "number": "1",
  "title": "📖❓ Checkpoint: Exponential Properties.",
  "body": "📖❓ Checkpoint: Exponential Properties   Exponential Antiderivative   Evaluate:            Exponential End Behavior   Determine if each limit is -ထ, , or ထ.  Click on one of the three options next to each limit to select your answer.  Assume is a positive constant.                                                                          Figure out the Limits   Give each limit by filling in one of the following: 0 , inf ( ), -inf ( ).    If then  and    Assume that is a positive constant.  If then  and    Assume that is a negative constant.  If then  and         -\\s*inf  .*  Incorrect. Where would times something that goes to must go?      .*  Incorrect. Think about where goes as goes to , then decide where should go.     -\\s*inf  .*  Incorrect. If is positive, then is a negative number times something that goes to .      .*  Incorrect. Think about where goes as goes to , then decide where should go.     inf  .*  Incorrect. If is negative, then is a positive number times something that goes to .     inf  .*  Incorrect. Think about where goes as goes to , then decide where should go.      "
},
{
  "id": "laplace-first-examples",
  "level": "2",
  "url": "lt-definition.html#laplace-first-examples",
  "type": "🌌 Example",
  "number": "148",
  "title": "First Look at Laplace Transforms.",
  "body": " First Look at Laplace Transforms  Find the Laplace transform of    (constant function)     By the definition above, we have the improper integral .  Assuming and are constant, we integrate with respect to : .  🔍 Next, we compute the limit of as (with constant):  🔍 Since the limit only controls , we can think of as a number (like ). This means that is also a number that can be pulled out of the limit using the limit property from calculus:     We find the limit using the end behavior of the exponential . There are two possiblities:  is excluded since it would lead to    is positive:    is negative:     Since we only get convergence when is positive, we must require in the Laplace transform of : .         Applying the definition and writing the integral as a limit, we have .   🔍 Computing with integration by parts, gives us  🔍 Choosing integration by parts gives      Next, we compute the limit of as :   🔍 As long as , both and go to zero  🔍 Assuming , the limits are computed by:            where denotes L'Hôpital's Rule was applied to the limit.   Therefore, the Laplace transform of is .      "
},
{
  "id": "lt-definition-wrapup",
  "level": "2",
  "url": "lt-definition.html#lt-definition-wrapup",
  "type": "🗝️ Key Takeaways...",
  "number": "",
  "title": "",
  "body": "  The Laplace transform converts a function of into a function of using  The Laplace transform is an improper integral evaluated by rewriting it as .  The result is a function of and exists only when the integral converges.   "
},
{
  "id": "common-transforms",
  "level": "1",
  "url": "common-transforms.html",
  "type": "Section",
  "number": "",
  "title": "Common Transforms",
  "body": " Common Transforms   Now that we've defined the Laplace transform, the next step is to build a basic toolkit of common transforms. These are formulas for frequently encountered functions like constants, exponentials, powers of , and trigonometric functions. Learning these transforms will allow you to compute Laplace transforms quickly, without evaluating integrals from scratch each time.  We'll derive these formulas using straightforward examples and then generalize the results. You'll see how the Laplace transform simplifies when applied to each type of function and how certain patterns repeat across different cases.  Exponential Functions   Exponential Integration Rules   Match each exponential integrand with its antiderivative. Assume is a constant.                      How is Treated During Integration?   In the Laplace transform integral, the variable is treated as a during the integration process.     constant   Correct! When evaluating the integral, is treated as a constant, since the integration is with respect to .     variable   No, even though is a variable overall, it is treated as a constant during the integration.     coefficient   No, while acts like a coefficient in , it's conceptually treated as a constant in the integration.     limit   No, is not a limit of integration, it appears inside the integrand.      Choosing and in   Which functions should you choose as and when applying integration by parts to ?       Correct! This choice simplifies with each integration by parts.       No, this makes integration more difficult. We want to differentiate and integrate the exponential.       These choices are not aligned with the integrand .          Laplace Transform of a Constant  We begin with the simplest case: the constant function . By the definition of the Laplace transform,   This integral converges when and leads to our first Laplace transform rule:    📜 Laplace Transform of     💡 Derivation of L  By definition, we have .  Assuming and are constant, we integrate with respect to : .  Next, we compute the limit of as (with constant):   Taking , must go to if is positive, leaving us with the transform of : .     Although this transform is specific to the contant function , we will see later that it will serve as the transform formula for all constant functions.    Laplace Transform of Exponentials  To get the transform formula for exponentials of the form , where is a constant, we will first find it for :     Using the definition of the Laplace transform we get .   🔍 Focusing just on the integral, we let and apply -substitution:  👉 Using -substitution with the integral is compute as .     Now, we compute the limit of this expression as : .  As before, goes to if the power of the exponential function goes to . This only happens if is negative. That is, or .  So, as long as , then and the transform becomes .    Replacing with an in this solution leads to the general formula:  For any constant , the Laplace transform of is given by:   📜 Laplace Transform of     💡Derivation of L  By definition, .  For the integral, let and apply -substitution:   Now, we compute the limit of this expression as : .  As before, goes to if is negative. That is, or .  So, as long as , then and the transform becomes .      📖❓ Give the Transform         Correct! The Laplace transform of is .       No, this would be the transform of . Double-check the sign of the exponent.       No, should not appear in the final expression, only .       No, the numerator should be 1, not 3. This is not a scaled exponential.        Laplace Transform of Powers of  Now let's consider power functions, where is a non-negative integer.   We already found the transforms for and since    We could find next, but it is more instructive to show following relationship:     Applying the definition and writing the integral as a limit, we have .   Applying integration by parts to shows:   integration by parts gives      Noticing that the improper integral is just , we have , but if , so we have the relationship  Again, if , the limit goes to . So we must have . Applying L'Hôpital's rule twice, we get     .   You can use this work as a template for a general recursive relationship:     Replacing with in the previous solution, we have .   🔍 Apply integration by parts to   integration by parts gives      Noticing that the improper integral is just , we have .   🔍 Since if , we have  The reasoning is the same as in previous solution except we apply L'Hôpital's rule n times. So we have     .   To get the general formula we apply this relationship repeatedly for increasing :   This pattern suggests that, in general, we have  , which can be summarized as follows   📜 Laplace Transform of     💡Derivation of L  Most of the ideas were described above, but the formal derivation follows by induction on , which we will not cover here.       Laplace Transforms of Sine and Cosine  Finally, we derive the Laplace transforms of and .  To make the derivation easier, we will find the transform of first.     Applying the definition and writing the integral as a limit, we have .  Treating constant, we apply integration by parts to as follows:  , Integration by Parts  1st Integration by Parts 2nd Integration by Parts    but this requires a second integration by parts: .  Since the integral reappeared, we actually have . Evaluating the limits of integration and solving for , we find   Finally, the limit of as is the sum of the limits    🔍 Since & if , we can conclude that  👉 If , then we know that as and both and oscillate between and , Thus, their product must approach zero. That is,    .    leads to the following general formula:   📜 Laplace Transform of      💡Derivation of L & L  The derivation of L mirrors the solution to . Just swap with and with .  The derivation of L follows a similar approach to L and is left as exercise for you to try on your own.         We now have the following common Laplace transforms:  ,  ,  ,  ,  .       "
},
{
  "id": "common-transforms-2-3",
  "level": "2",
  "url": "common-transforms.html#common-transforms-2-3",
  "type": "👀 Quick Review",
  "number": "149",
  "title": "Exponential Functions.",
  "body": "Exponential Functions   Exponential Integration Rules   Match each exponential integrand with its antiderivative. Assume is a constant.                      How is Treated During Integration?   In the Laplace transform integral, the variable is treated as a during the integration process.     constant   Correct! When evaluating the integral, is treated as a constant, since the integration is with respect to .     variable   No, even though is a variable overall, it is treated as a constant during the integration.     coefficient   No, while acts like a coefficient in , it's conceptually treated as a constant in the integration.     limit   No, is not a limit of integration, it appears inside the integrand.      Choosing and in   Which functions should you choose as and when applying integration by parts to ?       Correct! This choice simplifies with each integration by parts.       No, this makes integration more difficult. We want to differentiate and integrate the exponential.       These choices are not aligned with the integrand .       "
},
{
  "id": "lap-L1-2-2",
  "level": "2",
  "url": "common-transforms.html#lap-L1-2-2",
  "type": "Proof",
  "number": "1",
  "title": "💡 Derivation of L<span class=\"process-math\">\\(_1\\)<\/span>.",
  "body": " 💡 Derivation of L  By definition, we have .  Assuming and are constant, we integrate with respect to : .  Next, we compute the limit of as (with constant):   Taking , must go to if is positive, leaving us with the transform of : .  "
},
{
  "id": "exponential-function-transform-3",
  "level": "2",
  "url": "common-transforms.html#exponential-function-transform-3",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "power of the exponential function "
},
{
  "id": "lap-L2-2-2",
  "level": "2",
  "url": "common-transforms.html#lap-L2-2-2",
  "type": "Proof",
  "number": "1",
  "title": "💡Derivation of L<span class=\"process-math\">\\(_2\\)<\/span>.",
  "body": " 💡Derivation of L  By definition, .  For the integral, let and apply -substitution:   Now, we compute the limit of this expression as : .  As before, goes to if is negative. That is, or .  So, as long as , then and the transform becomes .  "
},
{
  "id": "common-t-sqrd-details-2-1",
  "level": "2",
  "url": "common-transforms.html#common-t-sqrd-details-2-1",
  "type": "Proof",
  "number": "1",
  "title": "Applying integration by parts to <span class=\"process-math\">\\(I\\)<\/span> shows:.",
  "body": "Applying integration by parts to shows:   integration by parts gives   "
},
{
  "id": "lt-example-tsqrd-LH-details",
  "level": "2",
  "url": "common-transforms.html#lt-example-tsqrd-LH-details",
  "type": "Proof",
  "number": "1",
  "title": "but <span class=\"process-math\">\\(L=0\\)<\/span> if <span class=\"process-math\">\\(s \\gt 0\\text{,}\\)<\/span> so we have the relationship.",
  "body": "but if , so we have the relationship  Again, if , the limit goes to . So we must have . Applying L'Hôpital's rule twice, we get   "
},
{
  "id": "lt-example-tnth-IVP-details",
  "level": "2",
  "url": "common-transforms.html#lt-example-tnth-IVP-details",
  "type": "Proof",
  "number": "1",
  "title": "🔍 Apply integration by parts to <span class=\"process-math\">\\(I\\)<\/span>.",
  "body": "🔍 Apply integration by parts to   integration by parts gives   "
},
{
  "id": "lt-example-tnth-LH-details",
  "level": "2",
  "url": "common-transforms.html#lt-example-tnth-LH-details",
  "type": "Proof",
  "number": "1",
  "title": "🔍 Since <span class=\"process-math\">\\(L=0\\)<\/span> if <span class=\"process-math\">\\(s \\gt 0\\text{,}\\)<\/span> we have.",
  "body": "🔍 Since if , we have  The reasoning is the same as in previous solution except we apply L'Hôpital's rule n times. So we have   "
},
{
  "id": "lap-L3-2-2",
  "level": "2",
  "url": "common-transforms.html#lap-L3-2-2",
  "type": "Proof",
  "number": "1",
  "title": "💡Derivation of L<span class=\"process-math\">\\(_3\\)<\/span>.",
  "body": " 💡Derivation of L  Most of the ideas were described above, but the formal derivation follows by induction on , which we will not cover here.  "
},
{
  "id": "lt-example-4-details",
  "level": "2",
  "url": "common-transforms.html#lt-example-4-details",
  "type": "Proof",
  "number": "1",
  "title": "🔍 Since <span class=\"process-math\">\\(L_1 \\to 0\\)<\/span> &amp; <span class=\"process-math\">\\(L_2 \\to 0\\)<\/span> if <span class=\"process-math\">\\(s \\gt 0\\text{,}\\)<\/span> we can conclude that.",
  "body": "🔍 Since & if , we can conclude that  👉 If , then we know that as and both and oscillate between and , Thus, their product must approach zero. That is,   "
},
{
  "id": "lap-L4-L5-2-3",
  "level": "2",
  "url": "common-transforms.html#lap-L4-L5-2-3",
  "type": "Proof",
  "number": "1",
  "title": "💡Derivation of L<span class=\"process-math\">\\(_4\\)<\/span> &amp; L<span class=\"process-math\">\\(_5\\)<\/span>.",
  "body": " 💡Derivation of L & L  The derivation of L mirrors the solution to . Just swap with and with .  The derivation of L follows a similar approach to L and is left as exercise for you to try on your own.  "
},
{
  "id": "common-transforms-wrapup",
  "level": "2",
  "url": "common-transforms.html#common-transforms-wrapup",
  "type": "🗝️ Key Takeaways...",
  "number": "",
  "title": "",
  "body": "   We now have the following common Laplace transforms:  ,  ,  ,  ,  .      "
},
{
  "id": "lt-properties",
  "level": "1",
  "url": "lt-properties.html",
  "type": "Section",
  "number": "",
  "title": "Transform Properties and Rules",
  "body": " Transform Properties and Rules   So far, we've built a small library of Laplace transforms for basic functions. But how do we handle functions that are combinations of these basic functions? This is where the properties of Laplace transform comes in.  In this section, we'll learn how the Laplace transform interacts with sums, products, exponentials, derivatives, and powers of . Each property gives us a shortcut: a way to break down complex functions into simpler parts using the transforms we already know.  These properties will be your main tools for solving differential equations quickly and efficiently.   👀❓ Integral Properties   Select all the true statements related to properties of indefinite integrals.      This is the linearity property of integrals.     Since we are integrating with respect to , we can treat as a constant.     In calculus, you had to integrate this using integration by parts.     Be careful, .       Linearity: Sums and Constant Multiples  Like integrals, the Laplace transform is linear. This means we can take apart sums and pull out constant multiples. In particular, if the Laplace transforms of and exist, then we have the following linearity property:   This property allows us to break complex expressions into smaller pieces, each of which can be transformed using our basic table.   Transforming a Sum of Functions   Compute the Laplace transform .    We apply the linearity property to break the transform down as follows:   Then, using the common transforms, L , L ( ) , and L ( ) , we get   We use , because it guarantees that is also true.      📖❓ Invalid Uses of Linearity   Which of the following are NOT correct applications of the linearity property?       Linearity does not apply to a product of functions.     The linearity property does not extend to powers of functions.     This is a correct use of the linearity property.     This is correct since .      📖❓ Transform of            Correct! Use linearity: transform each term individually and add them together.       No, the transform of includes in the numerator, and the constant should be added.       No, the frequency of is 1, not 7, and the constant term transforms to .       No, the constant term should yield , and it should be added.         Derivatives of Functions (Derivative Transfer)  One of the most powerful features of the Laplace transform is its ability to transform differential equations into algebraic equations. This means we need a way to remove the derivatives from the unknown in our differential equation. The following property perfectly encapsulates this idea:   In short, this property uses integration by parts to transfer the derivative from to . This results in a factor of (chain rule on ) and as follows:  .  Click here for more details   To show that , we start with the definition of the Laplace transform:   .  Applying integration by parts to once in with integration by parts gives   Recall that a requirement for the Laplace transform of to exist is that .  Thus, setting the limit to zero gives us the desired result .     📖❓ Fill-In the Missing Number   Give the number that goes into the blank.            An integer variable may be initialized to a value.     .*  Try to figure out the function in this case.      Notice that this property is also recursive, meaning it shows us how to handle higher-order derivatives as well. For example,   To summarize, we now have the following new properties:   where .    📖❓ Transform of with an Initial Condition   What is the Laplace transform of given that ?      The Laplace transform of with is .     This is missing the initial condition .     This answer is missing a factor of .     This answer appears to have a sign error.      📖❓ Transform of with Initial Conditions   What is the Laplace transform of given that and ?       The Laplace transform of is .      Careful, use .      No, the subtraction term is , not .       No, the sign should be negative already in the formula; the constant subtracted is .         Multiplication by (Exponential Shifting)  It turns out that as long as we know the Laplace transform of , , then we also know the Laplace transform of since  . So multiplying a function by shifts its Laplace transform horizontally by .   Laplace Transform of an Exponential Function  Use the exponential shifting property to compute the following           To apply the shifting property , we identify and as follows:   By definition, , so .  Finally, substituting for in the formula for , we have .               In this case, and . For , we have .  By definition, , so .  Substituting for in , we have , where .               In this case, and . So .  By definition, , so .  Substituting for in gives .       By applying a similar strategy to the functions , , and , we can add the following three Laplace transforms to our list of common transforms:     📖❓ Shifting a Transform of Sine            Correct! The translation property shifts the transform of by 5, giving .       No, the frequency is 2, not 5, and the shift should be by 5, not 2.       No, the shift should be , not .       No, this has both the wrong frequency and an incorrect value in the denominator.       📖❓ Shifting a Transform of a Power Function            Correct! First use the rule , then apply the translation property to shift to .       No, the correct shift is , not .       No, check both the coefficient and exponent, leads to in the numerator and in the denominator.       No, this expression is incorrect both in sign and power.       📖❓ Shifting a Transform of Cosine            Correct! The Laplace transform of is , and the translation property shifts to .       No, the shift should be . This answer incorrectly uses .       No, the cosine frequency is 5, but the exponential shift is , not . Also, is , not .       No, the correct frequency is 5, so the denominator should be .       📖❓ Shifted Transform of Some Function   Hypothetically, if , then ?       No, the translation property requires replacing with , not .       No, the shift must be applied to every instance of in the original transform.       No, the original expression has and . Shift both to and respectively.       Correct! Apply the translation property by shifting each in the original transform to .         Multiplication by (Derivatives in )  When a function is multiplied by , its Laplace transform becomes the -th derivative of the original transform (up to a sign): .  Click here for a derivation   To show that , we start on the right side and show that it leads to the left side.        If , then this property becomes    📖❓ Apply the Laplace Derivative Rule   Hypothetically, if , then         Incorrect. You forgot to apply the negative from the derivative rule properly.       Correct!        Incorrect. The Laplace transform of should be the negative derivative of , not this combination.       Incorrect. The rule gives only a sine term, no cosine remains after differentiation.       Examples of the Laplace Derivative Property  Use the Laplace derivative property to compute           To apply the Laplace derivative property , we identify and :   By definition, , so and the quotient rule gives us   Therefore, .               In this case, and , so   By definition, , so and two derivatives of this function gives us   Therefore, .       This property lets us handle polynomial factors in without integrating directly. Instead, we differentiate the Laplace transform with respect to .     Linearity allows us to separate sums and pull out constants.  Multiplying by shifts the variable in a Laplace transform by .  A derivative in becomes multiplication by in the transform (minus an initial condition).  Multiplying by corresponds to differentiating the transform times with respect to .    "
},
{
  "id": "lt-linearity-property-example",
  "level": "2",
  "url": "lt-properties.html#lt-linearity-property-example",
  "type": "🌌 Example",
  "number": "150",
  "title": "Transforming a Sum of Functions.",
  "body": " Transforming a Sum of Functions   Compute the Laplace transform .    We apply the linearity property to break the transform down as follows:   Then, using the common transforms, L , L ( ) , and L ( ) , we get   We use , because it guarantees that is also true.   "
},
{
  "id": "lt-derivative-transfer-details",
  "level": "2",
  "url": "lt-properties.html#lt-derivative-transfer-details",
  "type": "Proof",
  "number": "1",
  "title": "Click here for more details.",
  "body": " Click here for more details   To show that , we start with the definition of the Laplace transform:   .  Applying integration by parts to once in with integration by parts gives   Recall that a requirement for the Laplace transform of to exist is that .  Thus, setting the limit to zero gives us the desired result .   "
},
{
  "id": "lt-exp-shifting-property-example",
  "level": "2",
  "url": "lt-properties.html#lt-exp-shifting-property-example",
  "type": "🌌 Example",
  "number": "151",
  "title": "Laplace Transform of an Exponential Function.",
  "body": " Laplace Transform of an Exponential Function  Use the exponential shifting property to compute the following           To apply the shifting property , we identify and as follows:   By definition, , so .  Finally, substituting for in the formula for , we have .               In this case, and . For , we have .  By definition, , so .  Substituting for in , we have , where .               In this case, and . So .  By definition, , so .  Substituting for in gives .      "
},
{
  "id": "lt-laplace-derivatives-details",
  "level": "2",
  "url": "lt-properties.html#lt-laplace-derivatives-details",
  "type": "Proof",
  "number": "1",
  "title": "Click here for a derivation.",
  "body": " Click here for a derivation   To show that , we start on the right side and show that it leads to the left side.      "
},
{
  "id": "lt-laplace-derivatives-examples",
  "level": "2",
  "url": "lt-properties.html#lt-laplace-derivatives-examples",
  "type": "🌌 Example",
  "number": "152",
  "title": "Examples of the Laplace Derivative Property.",
  "body": " Examples of the Laplace Derivative Property  Use the Laplace derivative property to compute           To apply the Laplace derivative property , we identify and :   By definition, , so and the quotient rule gives us   Therefore, .               In this case, and , so   By definition, , so and two derivatives of this function gives us   Therefore, .      "
},
{
  "id": "lt-properties-wrapup",
  "level": "2",
  "url": "lt-properties.html#lt-properties-wrapup",
  "type": "🗝️ Key Takeaways...",
  "number": "",
  "title": "",
  "body": "  Linearity allows us to separate sums and pull out constants.  Multiplying by shifts the variable in a Laplace transform by .  A derivative in becomes multiplication by in the transform (minus an initial condition).  Multiplying by corresponds to differentiating the transform times with respect to .   "
},
{
  "id": "lt-reference-guide",
  "level": "1",
  "url": "lt-reference-guide.html",
  "type": "Section",
  "number": "",
  "title": "The Laplace Transform Reference Guide",
  "body": " The Laplace Transform Reference Guide   In this final section, we summarize everything we've done. Below, you will find tables for the most common Laplace transforms and the properties used to combine and manipulate them. These will provide a useful resource in the next chapter where we begin solving differential equations using the Laplace transform method.    Laplace Transform Tables  We have done a lot of work computing common transforms and deriving the properties of the Laplace transform. Now, we can summarize all of this information in tables for quick reference.  We begin with the specific transforms of exponentials, polynomial terms, sine\/cosine, and the products of these functions. In later chapters, we will encounter new types of functions that we need to transform, so this table will continue to grow as we go.     Table of Common Laplace Transforms          Function  ( -Domain)     Laplace Transform  ( -Domain)      Existence  Condition     L       L       L       L       L       L       L       L           📖❓ What's Missing in each Transform?   Select the missing piece from each Laplace transform.                                                The next set of transforms are more general rules you can apply in different situations.     Table of Laplace Transform Rules         Function ( -Domain)  Laplace Transform ( -Domain)  Existence       Condition    R       R       R       R       R          Finally, we list the Laplace transform properties. It is short for now, but we will add more to this table later.     Table of Laplace Transform Properties         Property Type  Property    P  Linearity          Next Step: Solving Differential Equations  Everything you've learned in this chapter prepares you to solve differential equations using the Laplace transform. In the next chapter, you will see how these tools turn the process of solving differential equations into solving simple algebraic equations, especially when initial conditions are involved.     Answer the following questions. 📖❓ Transform of    ?       Correct! This follows the formula with .       Incorrect. That's the transform of , not .       Incorrect. The frequency coefficient must appear in the numerator.       This is mathematically correct but not simplified. Choose the version with in the denominator.      📖❓ Transform of    ?       Incorrect. The numerator for cosine should be , not the frequency.       Incorrect. The denominator should be , not .       Correct! Cosine is even, so = , and its transform is .       Incorrect. Both the numerator and denominator are wrong for cosine transforms.         "
},
{
  "id": "lt-table-common",
  "level": "2",
  "url": "lt-reference-guide.html#lt-table-common",
  "type": "Table",
  "number": "153",
  "title": "Table of Common Laplace Transforms",
  "body": " Table of Common Laplace Transforms          Function  ( -Domain)     Laplace Transform  ( -Domain)      Existence  Condition     L       L       L       L       L       L       L       L       "
},
{
  "id": "lt-table-rules",
  "level": "2",
  "url": "lt-reference-guide.html#lt-table-rules",
  "type": "Table",
  "number": "154",
  "title": "Table of Laplace Transform Rules",
  "body": " Table of Laplace Transform Rules         Function ( -Domain)  Laplace Transform ( -Domain)  Existence       Condition    R       R       R       R       R       "
},
{
  "id": "lt-table-properties",
  "level": "2",
  "url": "lt-reference-guide.html#lt-table-properties",
  "type": "Table",
  "number": "155",
  "title": "Table of Laplace Transform Properties",
  "body": " Table of Laplace Transform Properties         Property Type  Property    P  Linearity     "
},
{
  "id": "using-the-lt-table-cyu",
  "level": "2",
  "url": "lt-reference-guide.html#using-the-lt-table-cyu",
  "type": "🤔💭 Check Your Understanding",
  "number": "156",
  "title": "",
  "body": "  Answer the following questions. 📖❓ Transform of    ?       Correct! This follows the formula with .       Incorrect. That's the transform of , not .       Incorrect. The frequency coefficient must appear in the numerator.       This is mathematically correct but not simplified. Choose the version with in the denominator.      📖❓ Transform of    ?       Incorrect. The numerator for cosine should be , not the frequency.       Incorrect. The denominator should be , not .       Correct! Cosine is even, so = , and its transform is .       Incorrect. Both the numerator and denominator are wrong for cosine transforms.        "
},
{
  "id": "laplace-transforms-8",
  "level": "1",
  "url": "laplace-transforms-8.html",
  "type": "Section",
  "number": "",
  "title": "Chapter 9 Exercises",
  "body": " Chapter 9 Exercises   ᯓ★❓Quick-Answer Questions    Multiple-Choice  Key Concepts Behind Laplace Transforms   Which two core mathematical ideas does the Laplace transform method rely on to solve differential equations?     Chain Rule   Incorrect. The chain rule is not central to the Laplace transform method. Think about a process that lets you transfer derivatives.     Product Rule   No, the product rule is not a key idea in the Laplace transform method. Consider an integration-based technique.     Integration by Parts   Correct! Integration by parts allows derivatives to be transferred between functions inside an integral, a foundational technique in the Laplace method.     Properties of Exponential Functions   Correct! The method uses properties of exponential functions, especially their predictable behavior under differentiation and integration.       📖❓ Limit of   What is the value of ?       No, exponential growth ( ) grows faster than polynomial growth ( ) as . This pulls the ratio, , to zero.       Correct, exponential growth ( ) grows faster than polynomial growth ( ) as . This pulls the ratio, , to zero. This can also be verified with L'Hôpital's rule.       No, goes to . So the limit cannot have in its value.       No, exponential growth ( ) grows faster than polynomial growth ( ) as . This pulls the ratio, , to zero.       📖❓ Fill in the Missing Value         3   Correct! The Laplace transform of is .     1   No, the exponent of is 3, not 1.     0   No, would imply a transform of 1, not .     -3   No, that would correspond to . Watch the sign.       📖❓ Laplace Transform of           Correct! This matches the rule: with .       No, that's the transform of , not .       No, the transform of is not a constant.       No, the numerator should be , not .       📖❓ Laplace Transform of           Correct! The Laplace transform of is .       No, that's the transform of , not .       No, is not a constant.       No, double-check the exponent in the denominator, it should be , not .          🏗️ Drill: Forward Transforms   Transforming Single Functions   Compute each Laplace Transform using the .                                                                                             Transforming Combined Functions   Compute each Laplace Transform using the and\/or .      We will use properties in the table as follows.        We will use properties in the table as follows.        Before we begin, we note that it's very tempting to think that because we know the Laplace transforms of both and we can simply multiply those together to get the desired Laplace transform. However, this is not the case, just as similar statements were not true for finding the derivatives and integrals of the products of functions. Rather, we will need to use property , with and    We need to know what is before we can proceed. Let's go back to the naming system we have instituted. If we have a capital that is the Laplace transform of a function lower case We identified that function previously: We use to find its Laplace transform. Then we continue finding by taking two derivatives (using the quotient rule for derivatives; details are omitted here).                Use the first shifting theorem: .            Use the integration by parts method: .            Apply the second shifting theorem: .                                  For this solution, we will need to use property L14 wit We will need to know the Laplace transform for this function, so let's do that now. Then we have the following. Note that when we use the quotient rule to take the derivative o .              For this solution, we will need to use property L14 wit We will need to know the Laplace transform for this function, so let's do that now. In using L14, we will also need the second derivative o so we work to compute that now. Note that we will use the chain rule when we take the derivative o . Then we have the following.             Definition of the Laplace Transform  Using the Definition   Use to compute each of the following Laplace Transforms.        Let's use the definition:  Note: cannot be   When , the integral becomes Therefore, we must have for this integral to be finite.    By Integration by parts :   As long as , the limit becomes:  If , then as , we would have and so This shows the Laplace transform would not exist if . Therefore, we must require .   Hence, we have , under the condition that .                                          To compute this, we use the definition of the Laplace transform.             By the above definition, we have At this point, we need to assume that . .  Next, we integrate using the substitution .               We use the definition of Laplace transform to get us started. As before, we need restrict some values of in order for this improper integral to exist . In this case, we will need , in the exponent, to be non-zero and negative. That is, we need  Thus, .             Use the properties of the Laplace transform the fact that to show that .   We start by applying the definition of the Laplace transform: . Rather than directly integrating, we will use a modified to express cosine in terms of  Substituting this into the integral gives: Therefore, the Laplace transform of is:      Answer the following:  Compute the Laplace transform of .  Use (a) as a guide to show , for any constant .     As with cosine, we begin with the definition of the Laplace transform, and rewrite sine using Euler's formula, Substituting this into the integral, we get: Thus, the Laplace transform of is:      By the definition of the Laplace transform: . Answer the following questions related to the Laplace transform of .   Use integration by parts to show that .   Select and . Then      Use this to show that .   Substitute from (b) into the limit from (a).      In order for to exist, what must be true?    The limit, , must converge. That is, as gets large, the ratio, , flattens out to some number. In order to maintain this ratio, growth rate of must be less than or equal to .         "
},
{
  "id": "c9-quick-answer-2-1",
  "level": "2",
  "url": "laplace-transforms-8.html#c9-quick-answer-2-1",
  "type": "Reading Question",
  "number": "1",
  "title": "Multiple-Choice.",
  "body": " Multiple-Choice  Key Concepts Behind Laplace Transforms   Which two core mathematical ideas does the Laplace transform method rely on to solve differential equations?     Chain Rule   Incorrect. The chain rule is not central to the Laplace transform method. Think about a process that lets you transfer derivatives.     Product Rule   No, the product rule is not a key idea in the Laplace transform method. Consider an integration-based technique.     Integration by Parts   Correct! Integration by parts allows derivatives to be transferred between functions inside an integral, a foundational technique in the Laplace method.     Properties of Exponential Functions   Correct! The method uses properties of exponential functions, especially their predictable behavior under differentiation and integration.       📖❓ Limit of   What is the value of ?       No, exponential growth ( ) grows faster than polynomial growth ( ) as . This pulls the ratio, , to zero.       Correct, exponential growth ( ) grows faster than polynomial growth ( ) as . This pulls the ratio, , to zero. This can also be verified with L'Hôpital's rule.       No, goes to . So the limit cannot have in its value.       No, exponential growth ( ) grows faster than polynomial growth ( ) as . This pulls the ratio, , to zero.       📖❓ Fill in the Missing Value         3   Correct! The Laplace transform of is .     1   No, the exponent of is 3, not 1.     0   No, would imply a transform of 1, not .     -3   No, that would correspond to . Watch the sign.       📖❓ Laplace Transform of           Correct! This matches the rule: with .       No, that's the transform of , not .       No, the transform of is not a constant.       No, the numerator should be , not .       📖❓ Laplace Transform of           Correct! The Laplace transform of is .       No, that's the transform of , not .       No, is not a constant.       No, double-check the exponent in the denominator, it should be , not .      "
},
{
  "id": "laplace-transforms-8-3-2-3",
  "level": "2",
  "url": "laplace-transforms-8.html#laplace-transforms-8-3-2-3",
  "type": "Exercise",
  "number": "1",
  "title": "",
  "body": "          "
},
{
  "id": "laplace-transforms-8-3-2-4",
  "level": "2",
  "url": "laplace-transforms-8.html#laplace-transforms-8-3-2-4",
  "type": "Exercise",
  "number": "2",
  "title": "",
  "body": "          "
},
{
  "id": "laplace-transforms-8-3-2-5",
  "level": "2",
  "url": "laplace-transforms-8.html#laplace-transforms-8-3-2-5",
  "type": "Exercise",
  "number": "3",
  "title": "",
  "body": "          "
},
{
  "id": "laplace-transforms-8-3-2-6",
  "level": "2",
  "url": "laplace-transforms-8.html#laplace-transforms-8-3-2-6",
  "type": "Exercise",
  "number": "4",
  "title": "",
  "body": "          "
},
{
  "id": "laplace-transforms-8-3-2-7",
  "level": "2",
  "url": "laplace-transforms-8.html#laplace-transforms-8-3-2-7",
  "type": "Exercise",
  "number": "5",
  "title": "",
  "body": "          "
},
{
  "id": "laplace-transforms-8-3-2-8",
  "level": "2",
  "url": "laplace-transforms-8.html#laplace-transforms-8-3-2-8",
  "type": "Exercise",
  "number": "6",
  "title": "",
  "body": "          "
},
{
  "id": "laplace-transforms-8-3-2-9",
  "level": "2",
  "url": "laplace-transforms-8.html#laplace-transforms-8-3-2-9",
  "type": "Exercise",
  "number": "7",
  "title": "",
  "body": "          "
},
{
  "id": "laplace-transforms-8-3-2-10",
  "level": "2",
  "url": "laplace-transforms-8.html#laplace-transforms-8-3-2-10",
  "type": "Exercise",
  "number": "8",
  "title": "",
  "body": "          "
},
{
  "id": "laplace-transforms-8-3-3-3",
  "level": "2",
  "url": "laplace-transforms-8.html#laplace-transforms-8-3-3-3",
  "type": "Exercise",
  "number": "9",
  "title": "",
  "body": "   We will use properties in the table as follows.    "
},
{
  "id": "laplace-transforms-8-3-3-4",
  "level": "2",
  "url": "laplace-transforms-8.html#laplace-transforms-8-3-3-4",
  "type": "Exercise",
  "number": "10",
  "title": "",
  "body": "   We will use properties in the table as follows.    "
},
{
  "id": "laplace-transforms-8-3-3-5",
  "level": "2",
  "url": "laplace-transforms-8.html#laplace-transforms-8-3-3-5",
  "type": "Exercise",
  "number": "11",
  "title": "",
  "body": "   Before we begin, we note that it's very tempting to think that because we know the Laplace transforms of both and we can simply multiply those together to get the desired Laplace transform. However, this is not the case, just as similar statements were not true for finding the derivatives and integrals of the products of functions. Rather, we will need to use property , with and    We need to know what is before we can proceed. Let's go back to the naming system we have instituted. If we have a capital that is the Laplace transform of a function lower case We identified that function previously: We use to find its Laplace transform. Then we continue finding by taking two derivatives (using the quotient rule for derivatives; details are omitted here).    "
},
{
  "id": "laplace-transforms-8-3-3-6",
  "level": "2",
  "url": "laplace-transforms-8.html#laplace-transforms-8-3-3-6",
  "type": "Exercise",
  "number": "12",
  "title": "",
  "body": "       "
},
{
  "id": "laplace-transforms-8-3-3-7",
  "level": "2",
  "url": "laplace-transforms-8.html#laplace-transforms-8-3-3-7",
  "type": "Exercise",
  "number": "13",
  "title": "",
  "body": "   Use the first shifting theorem: .        "
},
{
  "id": "laplace-transforms-8-3-3-8",
  "level": "2",
  "url": "laplace-transforms-8.html#laplace-transforms-8-3-3-8",
  "type": "Exercise",
  "number": "14",
  "title": "",
  "body": "   Use the integration by parts method: .        "
},
{
  "id": "laplace-transforms-8-3-3-9",
  "level": "2",
  "url": "laplace-transforms-8.html#laplace-transforms-8-3-3-9",
  "type": "Exercise",
  "number": "15",
  "title": "",
  "body": "   Apply the second shifting theorem: .        "
},
{
  "id": "laplace-transforms-8-3-3-10",
  "level": "2",
  "url": "laplace-transforms-8.html#laplace-transforms-8-3-3-10",
  "type": "Exercise",
  "number": "16",
  "title": "",
  "body": "       "
},
{
  "id": "laplace-transforms-8-3-3-11",
  "level": "2",
  "url": "laplace-transforms-8.html#laplace-transforms-8-3-3-11",
  "type": "Exercise",
  "number": "17",
  "title": "",
  "body": "             "
},
{
  "id": "laplace-transforms-8-3-3-12",
  "level": "2",
  "url": "laplace-transforms-8.html#laplace-transforms-8-3-3-12",
  "type": "Exercise",
  "number": "18",
  "title": "",
  "body": "   For this solution, we will need to use property L14 wit We will need to know the Laplace transform for this function, so let's do that now. Then we have the following. Note that when we use the quotient rule to take the derivative o .          "
},
{
  "id": "laplace-transforms-8-3-3-13",
  "level": "2",
  "url": "laplace-transforms-8.html#laplace-transforms-8-3-3-13",
  "type": "Exercise",
  "number": "19",
  "title": "",
  "body": "   For this solution, we will need to use property L14 wit We will need to know the Laplace transform for this function, so let's do that now. In using L14, we will also need the second derivative o so we work to compute that now. Note that we will use the chain rule when we take the derivative o . Then we have the following.         "
},
{
  "id": "laplace-transforms-8-4-2-3",
  "level": "2",
  "url": "laplace-transforms-8.html#laplace-transforms-8-4-2-3",
  "type": "Exercise",
  "number": "1",
  "title": "",
  "body": "     Let's use the definition:  Note: cannot be   When , the integral becomes Therefore, we must have for this integral to be finite.    By Integration by parts :   As long as , the limit becomes:  If , then as , we would have and so This shows the Laplace transform would not exist if . Therefore, we must require .   Hence, we have , under the condition that .          "
},
{
  "id": "laplace-transforms-8-4-2-4",
  "level": "2",
  "url": "laplace-transforms-8.html#laplace-transforms-8-4-2-4",
  "type": "Exercise",
  "number": "2",
  "title": "",
  "body": "              "
},
{
  "id": "laplace-transforms-8-4-2-5",
  "level": "2",
  "url": "laplace-transforms-8.html#laplace-transforms-8-4-2-5",
  "type": "Exercise",
  "number": "3",
  "title": "",
  "body": "          "
},
{
  "id": "laplace-transforms-8-4-2-6",
  "level": "2",
  "url": "laplace-transforms-8.html#laplace-transforms-8-4-2-6",
  "type": "Exercise",
  "number": "4",
  "title": "",
  "body": "     To compute this, we use the definition of the Laplace transform.         "
},
{
  "id": "laplace-transforms-8-4-2-7",
  "level": "2",
  "url": "laplace-transforms-8.html#laplace-transforms-8-4-2-7",
  "type": "Exercise",
  "number": "5",
  "title": "",
  "body": "   By the above definition, we have At this point, we need to assume that . .  Next, we integrate using the substitution .           "
},
{
  "id": "laplace-transforms-8-4-2-8",
  "level": "2",
  "url": "laplace-transforms-8.html#laplace-transforms-8-4-2-8",
  "type": "Exercise",
  "number": "6",
  "title": "",
  "body": "   We use the definition of Laplace transform to get us started. As before, we need restrict some values of in order for this improper integral to exist . In this case, we will need , in the exponent, to be non-zero and negative. That is, we need  Thus, .          "
},
{
  "id": "laplace-transforms-8-4-3",
  "level": "2",
  "url": "laplace-transforms-8.html#laplace-transforms-8-4-3",
  "type": "Exercise",
  "number": "7",
  "title": "",
  "body": " Use the properties of the Laplace transform the fact that to show that .   We start by applying the definition of the Laplace transform: . Rather than directly integrating, we will use a modified to express cosine in terms of  Substituting this into the integral gives: Therefore, the Laplace transform of is:    "
},
{
  "id": "laplace-transforms-8-4-4",
  "level": "2",
  "url": "laplace-transforms-8.html#laplace-transforms-8-4-4",
  "type": "Exercise",
  "number": "8",
  "title": "",
  "body": " Answer the following:  Compute the Laplace transform of .  Use (a) as a guide to show , for any constant .     As with cosine, we begin with the definition of the Laplace transform, and rewrite sine using Euler's formula, Substituting this into the integral, we get: Thus, the Laplace transform of is:    "
},
{
  "id": "laplace-transforms-8-4-5",
  "level": "2",
  "url": "laplace-transforms-8.html#laplace-transforms-8-4-5",
  "type": "Exercise",
  "number": "9",
  "title": "",
  "body": " By the definition of the Laplace transform: . Answer the following questions related to the Laplace transform of .   Use integration by parts to show that .   Select and . Then      Use this to show that .   Substitute from (b) into the limit from (a).      In order for to exist, what must be true?    The limit, , must converge. That is, as gets large, the ratio, , flattens out to some number. In order to maintain this ratio, growth rate of must be less than or equal to .       "
},
{
  "id": "lt-method-step1",
  "level": "1",
  "url": "lt-method-step1.html",
  "type": "Section",
  "number": "",
  "title": "Step 1 — Into the Laplace Domain",
  "body": " Step 1 — Into the Laplace Domain   The first step of the Laplace transform method is to convert a differential equation—where the unknown appears through derivatives—into an algebraic equation in the Laplace domain. This transformation makes it easier to isolate the unknown and move toward a solution.    Crossing Into the Laplace Domain  In terms of the roadmap, we can visualize this first step as follows:  Step 1️⃣: Into the Laplace Domain (Forward Transform)                             Simply put, forward transforming a differential equation into the Laplace domain means applying the Laplace transform to both sides of the equation. The result is an algebraic equation where the derivatives have been converted into powers of and the new unknown is .    Basic Mechanics of the Forward Transform  Symbolically, applying the forward Laplace transform to the differential equation amounts to applying it to both sides of the equation as follows: .  Using the linearity property we can see that the transform applies to each term:  . Letting and applying rule R for and common transform L , we get:  . This is where the initial conditions come into play. Substituting the initial conditions and simplifying gives the desired Laplace domain equation:  . Our new unknown is and since the derivatives have been eliminated, we can use algebra to solve for it. In fact, the solution to our differential equation is actually hiding inside . So, by solving for you are also solving for at the same time!  Let's practice this with a one more example.   Forward Transforming Equations   Forward transform the following equations into the Laplace domain:     First applying the Laplace transform to both sides:  . Now, use the linearity property :  . Let , and apply rule R & R and common transform L   . Finally, plug in the initial conditions, and clean up:  .    📖❓Select the Forward Transform   Which of the following represents the correct Laplace transform of the equation ?      This is the correct transformation using the Laplace transform and applying initial conditions.     This answer is missing a term.     Double check the signs of the initial conditions.     This answer is missing a term.     Now that you've seen the mechanical steps involved with applying the Laplace transform to a differential equation, it is important to take a moment to see what's happening behind the scenes during this process.    What is Going on Behind the Scenes?   📖❓Applying the Laplace Transform to an Equation    Fill-in-the-blanks:   The process of applying a Laplace transform to a differential equation involves multiplying the equation by and with respect to .      integrating   No, this misses the parameter in the exponential. It should be .     integrating   Correct! The Laplace transform involves multiplying the original function by and then integrating with respect to .     integrating   No, the exponent should have a negative sign: .     differentiating   No, the Laplace transform requires integration, not differentiation.     differentiating   No, the transform uses and integration, not the variable directly or differentiation.      Since the Laplace transform only applies to functions, applying a forward transform to a differential equation , really means we are taking the Laplace transform to both sides of that equation. So, applying a forward transformation to the initial-value problem implies that we multiply both sides of the equation by and integrate from to :              Next, we use the linearity of the integral:      After applying integration by parts to , the derivative is transferred from to , resulting in a factor of and an evaluation of at and :              The details for computing are given here .  Since the two integrals are , the symbolic and mathematical paths come back together as .  By transforming our equation into this new form, we have momentarily stored inside the function . Therefore, solving for indirectly also solves for .    Step 1 — Into the Laplace Domain Summary  Apply to each term of the differential equation; derivatives become powers of and initial conditions drop in as constants, leaving an algebraic equation in .     The Laplace transform method begins by converting a differential equation into an algebraic equation in the Laplace domain.  Applying a Laplace transform to a differential equation means applying it to both sides, then term by term, using linearity.  Derivatives of become powers of multiplied by , along with terms involving initial conditions.  The right-hand side of the equation is transformed using the known transforms from the table of common Laplace transforms .  Once in the Laplace domain, the function is stored inside , setting the stage for solving algebraically.    "
},
{
  "id": "lt-forward-lt-example",
  "level": "2",
  "url": "lt-method-step1.html#lt-forward-lt-example",
  "type": "🌌 Example",
  "number": "158",
  "title": "Forward Transforming Equations.",
  "body": " Forward Transforming Equations   Forward transform the following equations into the Laplace domain:     First applying the Laplace transform to both sides:  . Now, use the linearity property :  . Let , and apply rule R & R and common transform L   . Finally, plug in the initial conditions, and clean up:  .  "
},
{
  "id": "lt-method-step1-wrapup",
  "level": "2",
  "url": "lt-method-step1.html#lt-method-step1-wrapup",
  "type": "🗝️ Key Takeaways...",
  "number": "",
  "title": "",
  "body": "  The Laplace transform method begins by converting a differential equation into an algebraic equation in the Laplace domain.  Applying a Laplace transform to a differential equation means applying it to both sides, then term by term, using linearity.  Derivatives of become powers of multiplied by , along with terms involving initial conditions.  The right-hand side of the equation is transformed using the known transforms from the table of common Laplace transforms .  Once in the Laplace domain, the function is stored inside , setting the stage for solving algebraically.   "
},
{
  "id": "lt-method-step2",
  "level": "1",
  "url": "lt-method-step2.html",
  "type": "Section",
  "number": "",
  "title": "Step 2 — Solving in the Laplace Domain",
  "body": " Step 2 — Solving in the Laplace Domain   Once we've applied the Laplace transform to a differential equation, we're left with a new algebraic equation involving . Solving this equation is usually easier than solving the original differential equation, but we still need to work carefully. In this section, you'll learn how to isolate , clean it up using algebra, and get it into a form that matches the inverse transform table.    What It Means to Solve in the Laplace Domain  After transforming a differential equation into the Laplace domain, you're left with an algebraic equation involving . We will call this the Laplace-domain equation. In this setting, your new unknown is now represented by its Laplace transform, .  Your goal is twofold: first, solve for using algebra, and second, rewrite so it matches known inverse transform forms. That prepares it for the final step of returning to the original domain.  Step 2️⃣: Solve for & Prepare it for an Inverse Transform                  📖❓What are we solving for?   What variable do you solve for in the Laplace-domain equation?      , the Laplace transform of   Exactly! You're solving for , which represents the Laplace transform of .     , the dependent variable of the differential equation  Not yet. You'll get by inverting later.     , the Laplace-domain variable  Nope. is a variable, not the unknown you're solving for.     , the independent variable of the differential equation  🥺       Solving for  The first step after transforming your differential equation into a Laplace-domain equation is to solve for . This means using standard algebra to isolate on one side of the equation. Here is a quick example.   Solving a Laplace-Domain Equation   Solve the Laplace-domain equation for :     Start by moving all non- terms to the right-hand side:   Now, factor from the remaining terms on the left-hand side:   Finally, divide both sides by the quadratic expression to isolate :       Preparing for the Inverse Transform   Once you've solved for , the next step is to prepare it for returning to the original domain. This means rewriting as a combination of expressions that match known Laplace transforms, so we can use the inverse transform to find .  The inverse Laplace transform works by reversing the process of the forward transform. This can be done using the same table of transforms —but in reverse. Our goal is to express as a sum of terms that match entries in the -domain column.    Preparation Guidelines  After isolating from the transformed equation, you typically are left with a messy combination of rational functions in the variable .  Since we can only invert functions in the -domain column of the table of common Laplace transforms , it helps to list them out to guide us on how to prepare .                      To invert , it must first be written as the sum of one or more of these terms. However, since the first row is a special case of the second when , we can reduce the list down to the following function types:   Fortunately, there is a technique that was designed for this exact task. Recall that partial fraction decomposition (PFD) guarantees that any rational function can be written as the sum of rational terms with linear or quadratic factors in the denominator.  Therefore, if the denominator of has degree three or higher, PFD will always be your first step toward preparing for a backward transform out of the Laplace domain.    Dealing with Quadratic Denominators  After partial fraction decomposition, will be the sum of rational terms with either a linear or quadratic factor in the denominator. If they are all linear then you are done and you can move on to inverting . In contrast, if at least one term has a quadratic denominator then it will be of the form . where we have omitted the numerator since will be not be important to this discussion.  Notice that the denominator is not nicely factored like you see in the transform table. To achieve this, we need to complete the square .  Note that if the quadratic denominator term was the result of partial fraction decomposition, then it cannot be reduced further and you should skip directly to completing the square of the denominator. However, if started with this form, then you should first check to see if the denominator is factorable. If so, then use PFD. Otherwise, complete the square of the denominator so that it resembles the form in the table:    📖❓Complete the Square   Give the correct form after completing the square of the denominator:       Correct     Incorrect     Incorrect     Incorrect        Preparation Examples  In the following examples, we prepare for an inverse Laplace transform by writing it as the sum of the following types of terms: .   Partial Fraction Decomposition Examples   Distinct Linear Factors    Since the denominator can be factored as , we apply partial fraction decomposition:   To find and , we multiply both sides by the common denominator, , eliminating all the fractions and leaving us with .  Strategically selecting as and leads directly to and :             This completes the preparation of for an inverse transform. .     Repeated Linear Factor    Factor the quadratic denominator:  . Decompose into partial fractions:   Multiply both sides by , and solve for and by selecting convenient values for :          The prepared form of is      Three Linear Factors    Since the degree of the denominator is greater than , we use PFD and we factor the denominator as so that has the form .  Multiply both sides by to get and choose convenient values for so that             Therefore, the prepared form of is       📖❓Partial Fraction Decomposition   Complete the partial fraction decomposition:       Correct!     Incorrect     Incorrect     Incorrect      Completing the Square Examples   Completing the Square Example    A quick calculation of the discriminant shows the denominator is not factorable: .  So we complete the square of the denominator: .  Substituting this into gives the prepared form , which is a perfect match with L with .      Mixed Technique Examples   Completing the Square Example    Since the degree of the denominator is greater than , we use PFD and factor the denominator: .  Decompose into partial fractions: and multiply both sides by to get .  Strategically selecting values for , we get                                    Therefore, the prepared Laplace domain solution is .     Completing the Square Example    Partial fraction decomposition gives: .  Multiply both sides by to get .  When you have multiple quadratic terms involved, it is usually easier to match coefficients rather than choosing values of . So let's multiply out the right and match the corresponding terms to find , , , and :   Matching the coefficients leads to the following system: which has the solution: , , and .  Therefore, the prepared Laplace domain solution is given by: .      📖❓Preparing   What should be done to prepare for an inverse? ?     Complete the square of the denominator  Correct!    Partial fraction decomposition  Is the denominator factorable?    Cancel out the in the numerator and denominator.  Canceling out the in the function is not a valid operation.    Cancel out the in the numerator and denominator.  Canceling out the in the function is not a valid operation.       Step 2 — Solving in the Laplace Domain Summary  Treat the transformed equation as pure algebra: isolate , then reshape it so every term matches an entry in the inverse-transform table.     Once you have a Laplace-domain equation, your goal is to isolate .  After solving for , you need to rewrite it in a form that matches known inverse transforms.  Partial fraction decomposition helps split complicated rational expressions into easier pieces.  Quadratic terms in the denominator often require completing the square.    "
},
{
  "id": "lt-solve-basic-example",
  "level": "2",
  "url": "lt-method-step2.html#lt-solve-basic-example",
  "type": "🌌 Example",
  "number": "159",
  "title": "Solving a Laplace-Domain Equation.",
  "body": " Solving a Laplace-Domain Equation   Solve the Laplace-domain equation for :     Start by moving all non- terms to the right-hand side:   Now, factor from the remaining terms on the left-hand side:   Finally, divide both sides by the quadratic expression to isolate :    "
},
{
  "id": "lt-laplace-preparing-for-inverse-3-7",
  "level": "2",
  "url": "lt-method-step2.html#lt-laplace-preparing-for-inverse-3-7",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "partial fraction decomposition (PFD) "
},
{
  "id": "lt-example-pfd-1",
  "level": "2",
  "url": "lt-method-step2.html#lt-example-pfd-1",
  "type": "🌌 Example",
  "number": "160",
  "title": "Distinct Linear Factors.",
  "body": " Distinct Linear Factors    Since the denominator can be factored as , we apply partial fraction decomposition:   To find and , we multiply both sides by the common denominator, , eliminating all the fractions and leaving us with .  Strategically selecting as and leads directly to and :             This completes the preparation of for an inverse transform. .   "
},
{
  "id": "lt-example-pfd-2",
  "level": "2",
  "url": "lt-method-step2.html#lt-example-pfd-2",
  "type": "🌌 Example",
  "number": "161",
  "title": "Repeated Linear Factor.",
  "body": " Repeated Linear Factor    Factor the quadratic denominator:  . Decompose into partial fractions:   Multiply both sides by , and solve for and by selecting convenient values for :          The prepared form of is    "
},
{
  "id": "lt-example-pfd-3",
  "level": "2",
  "url": "lt-method-step2.html#lt-example-pfd-3",
  "type": "🌌 Example",
  "number": "162",
  "title": "Three Linear Factors.",
  "body": " Three Linear Factors    Since the degree of the denominator is greater than , we use PFD and we factor the denominator as so that has the form .  Multiply both sides by to get and choose convenient values for so that             Therefore, the prepared form of is    "
},
{
  "id": "lt-completing-square-example-1",
  "level": "2",
  "url": "lt-method-step2.html#lt-completing-square-example-1",
  "type": "🌌 Example",
  "number": "163",
  "title": "Completing the Square Example.",
  "body": " Completing the Square Example    A quick calculation of the discriminant shows the denominator is not factorable: .  So we complete the square of the denominator: .  Substituting this into gives the prepared form , which is a perfect match with L with .   "
},
{
  "id": "lt-mixed-examples-1",
  "level": "2",
  "url": "lt-method-step2.html#lt-mixed-examples-1",
  "type": "🌌 Example",
  "number": "164",
  "title": "Completing the Square Example.",
  "body": " Completing the Square Example    Since the degree of the denominator is greater than , we use PFD and factor the denominator: .  Decompose into partial fractions: and multiply both sides by to get .  Strategically selecting values for , we get                                    Therefore, the prepared Laplace domain solution is .   "
},
{
  "id": "lt-mixed-examples-2",
  "level": "2",
  "url": "lt-method-step2.html#lt-mixed-examples-2",
  "type": "🌌 Example",
  "number": "165",
  "title": "Completing the Square Example.",
  "body": " Completing the Square Example    Partial fraction decomposition gives: .  Multiply both sides by to get .  When you have multiple quadratic terms involved, it is usually easier to match coefficients rather than choosing values of . So let's multiply out the right and match the corresponding terms to find , , , and :   Matching the coefficients leads to the following system: which has the solution: , , and .  Therefore, the prepared Laplace domain solution is given by: .   "
},
{
  "id": "lt-method-step2-wrapup",
  "level": "2",
  "url": "lt-method-step2.html#lt-method-step2-wrapup",
  "type": "🗝️ Key Takeaways...",
  "number": "",
  "title": "",
  "body": "  Once you have a Laplace-domain equation, your goal is to isolate .  After solving for , you need to rewrite it in a form that matches known inverse transforms.  Partial fraction decomposition helps split complicated rational expressions into easier pieces.  Quadratic terms in the denominator often require completing the square.   "
},
{
  "id": "lt-method-step3",
  "level": "1",
  "url": "lt-method-step3.html",
  "type": "Section",
  "number": "",
  "title": "Step 3 — Leaving the Laplace Domain",
  "body": " Step 3 — Leaving the Laplace Domain   Up to this point, we've been working inside the Laplace domain — a mathematical space where differential equations are replaced by algebraic ones. We used forward Laplace transforms to move from to , solved for , and simplified it to match known inverse forms.  Now, it's time to take the final step: returning to the original domain where the solution is a function of time. To do this, we apply the inverse Laplace transform , denoted , which undoes the effect of the forward transform.    What Is the Inverse Laplace Transform?  Symbolically, the inverse Laplace transform works much like the inverse of a standard function. For example, we can release from inside the cosine by applying the inverse cosine:   Similarly, we can release from inside a Laplace transform by applying its inverse:   This is the idea behind the final step of the Laplace transform method as it takes us back into the original domain by releasing the contained inside . Visually, this looks like:  Step 3️⃣: Out of the Laplace Domain (Backward Transform)                              📖❓ What does the inverse transform do?   What is the purpose of the inverse Laplace transform in solving a differential equation?     It recovers the original function from its Laplace-transformed version .  Correct! The inverse transform brings us back to the time domain.    It rewrites a differential equation using algebra.  That's what the forward transform does.    It simplifies partial fractions.  Partial fraction decomposition helps prepare for the inverse, but isn't the transform itself.    It evaluates the Laplace transform of .  This describes the forward transform, not the inverse.       Using the Table to Invert  During the forward step, we used the table to map functions of in the -domain column, like or , into functions of in the -domain column. Now, we'll do the opposite: match terms in to the forms in the -domain column and map them back to functions in the -domain column.  For example, suppose we have the following in the Laplace domain:   To return back this to the original domain we apply the inverse to both sides:   We have , but it needs to be a function of . For that, we match to one of the forms in the -domain column of the table .  We see the best match is L with , so we get:   Inverses using the Laplace Transform Table   Apply the inverse transform to reveal the solution, , in the original domain.         This matches L with . So, .           This matches L with and . So, .           Noting that and using L with , we get .          📖❓ Use the Transform Table   For each , use the table of transforms to determine .                                           📖❓Table Matching Checkpoint  Which of the following is the correct inverse Laplace transform of ?     Correct! This matches L 6 with , .     This is missing the exponential factor .     This flips and . Be careful when matching the form.     This would require in the numerator and instead of .      So far, we've only dealt with expressions that match a single row in the transform table. But most Laplace domain solutions are a sum of multiple terms. Fortunately, we don't need to invert the entire thing at once. We'll use linearity to handle those in the next section.    Linearity of the Inverse Laplace Transform  Most Laplace-domain solutions are not single terms. Instead, they're sums of several expressions. Fortunately, like the forward transform, the inverse Laplace transform is also linear. This means that inverse transforms of sums and constant multiples of functions can be broken down into smaller, more manageable steps.  Assuming and are functions in the Laplace domain, then we have:   Here's an example of this linearity property in action.   Inverse Transform of a Sum   Find if .    We break this into two parts and use the transform table to invert each one.   The first term matches L and gives . The second term matches L with , giving . So the solution is:      📖❓ Apply Linearity  Suppose . What is ?     Perfect! The first term matches and the second is a sine with .     Double check the sign in . It corresponds to , not .     The second term matches a sine form, not cosine.     corresponds to , not a polynomial term.     Linearity makes inverting multi-term expressions much more manageable. Sometimes you'll run into expressions that don't quite match anything in the table. They're close—but not perfect. In the next section, we'll look at how to make small algebraic adjustments that bring those expressions into a form we can invert.    Minor Adjustments for a Perfect Match   Sometimes, the Laplace-domain function is close to a known table form—but not quite there. In these cases, a few algebraic adjustments will help reveal the match. These are not major rewrites, just small nudges: splitting a numerator, factoring out constants, or rewriting terms to expose a recognizable pattern.    Separate Fractions to Match Multiple Forms  Suppose your function has a sum in the numerator, like . The denominator matches both sine and cosine forms in the table, but the numerator doesn't match any of the entries. The fix? Separate the addition in the numerator:  . Then factor constants and attempt to match with the table again:  . The first term perfectly matches, the second term needs in the numerator. Missing numbers in the numerator is common with inverse transforms, but there is an easy fix. We multiply numerator and denominator by the missing number:  🚩 Multiplying by   is just a special form of ; multiplying by it doesn't change the fraction.   . With these minor adjustments, the inverse transform becomes straightforward: .   📖❓Splitting to Match Table Forms   Which of the following functions can be split into separate terms that match known inverse Laplace transforms?       Incorrect. This function already matches a known sine form and doesn't require splitting.       Correct! This function can be split as , matching cosine and sine forms.       Incorrect. This function already matches and does not require splitting.        Adding and Subtracting to Match Shifts  Some forms contain a shift, like . For example, the form looks similar to L , but the numerator should be . This can be fixed by subtracting and adding , like so:  🚩 Adding   is just a special form of ; adding it to the numerator doesn't change the fraction.    Now you can separate the fraction as before:   These can be a little tricky so here's a few additional examples to prepare you for what you may encounter.  Handling Coefficients on   Find if     The first term needs in the numerator, but before adding and subtracting , let's get out of the way by factoring it out:  . Now, splitting the fraction inside the parentheses and distributing the gives us  . Finally, the backward transform is given by  .    📖❓Give the Numerator of the Split Fractions   After adjusting the numerator to match L and separating the fractions, type-in the numerators of the separated fractions?                          The answers you enter should be fully simplified.      s\\s*-\\s*1|-1\\s*\\+\\s*s  .*  Incorrect     2|-\\s*1\\s*\\+\\s*3  .*  Incorrect      Complete the Square First   Find if     Completing the square for the denominator of gives: .  The form of the denominator and the in the numerator indicates that we are trying to match L ( , ), but we need in the numerator. So we add and subtract , then split the fraction:  . Since the second term needs a in the numerator, we multiply it by :  . From here, the inverse transform comes from the table:  .    📖❓Give the Next Step   What is the next step toward finding the inverse of ?      Factor the denominator   Incorrect. The quadratic cannot be factored; try something else.     Complete the square in the denominator   Correct! Completing the square helps you match the form needed to invert with L .     Cancel out the in the numerator and denominator.   Canceling parts of rational expressions like this isn't valid.     Differentiate the entire function   Nope—this isn't a derivative problem.       With practice, these adjustments become intuitive, greatly simplifying the process of leaving the Laplace domain to recover the solution to the original differential equation.    Step 3 — Leaving the Laplace Domain Summary  Apply the inverse transform term-by-term to , converting the algebraic answer back into the time-domain solution .     The inverse Laplace transform recovers the solution to the differential equation you are trying to solve. .  Once the terms of match the forms in the transform table, the inverse is the function of in the same row.  If is a sum of terms, use linearity to invert each part separately.  If is close but doesn't match a table entry, try splitting the numerator, factoring constants, or completing the square.  Always look at the denominator when matching forms in the table, they provide the best way to identify the correct form to match.        📖❓Adjusting the Numerator   Select the number that belongs in both blanks to directly apply the inverse.       Correct!     Incorrect.     Incorrect.     Incorrect.      📖❓Find the Inverse Transform         Correct! The function can be split as , which corresponds to and .       Incorrect.       Incorrect.       Incorrect.         "
},
{
  "id": "lt-method-step3-2-2",
  "level": "2",
  "url": "lt-method-step3.html#lt-method-step3-2-2",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "inverse Laplace transform "
},
{
  "id": "lt-inverse-table-usage-10",
  "level": "2",
  "url": "lt-method-step3.html#lt-inverse-table-usage-10",
  "type": "🌌 Example",
  "number": "166",
  "title": "Inverses using the Laplace Transform Table.",
  "body": "Inverses using the Laplace Transform Table   Apply the inverse transform to reveal the solution, , in the original domain.         This matches L with . So, .           This matches L with and . So, .           Noting that and using L with , we get .       "
},
{
  "id": "lt-inverse-linearity-example",
  "level": "2",
  "url": "lt-method-step3.html#lt-inverse-linearity-example",
  "type": "🌌 Example",
  "number": "167",
  "title": "Inverse Transform of a Sum.",
  "body": " Inverse Transform of a Sum   Find if .    We break this into two parts and use the transform table to invert each one.   The first term matches L and gives . The second term matches L with , giving . So the solution is:    "
},
{
  "id": "lt-inverse-minor-adjustments-4-8",
  "level": "2",
  "url": "lt-method-step3.html#lt-inverse-minor-adjustments-4-8",
  "type": "🌌 Example",
  "number": "168",
  "title": "Handling Coefficients on <span class=\"process-math\">\\(s\\)<\/span>.",
  "body": "Handling Coefficients on   Find if     The first term needs in the numerator, but before adding and subtracting , let's get out of the way by factoring it out:  . Now, splitting the fraction inside the parentheses and distributing the gives us  . Finally, the backward transform is given by  .  "
},
{
  "id": "lt-inverse-minor-adjustments-4-10",
  "level": "2",
  "url": "lt-method-step3.html#lt-inverse-minor-adjustments-4-10",
  "type": "🌌 Example",
  "number": "169",
  "title": "Complete the Square First.",
  "body": "Complete the Square First   Find if     Completing the square for the denominator of gives: .  The form of the denominator and the in the numerator indicates that we are trying to match L ( , ), but we need in the numerator. So we add and subtract , then split the fraction:  . Since the second term needs a in the numerator, we multiply it by :  . From here, the inverse transform comes from the table:  .  "
},
{
  "id": "lt-method-step3-wrapup",
  "level": "2",
  "url": "lt-method-step3.html#lt-method-step3-wrapup",
  "type": "🗝️ Key Takeaways...",
  "number": "",
  "title": "",
  "body": "  The inverse Laplace transform recovers the solution to the differential equation you are trying to solve. .  Once the terms of match the forms in the transform table, the inverse is the function of in the same row.  If is a sum of terms, use linearity to invert each part separately.  If is close but doesn't match a table entry, try splitting the numerator, factoring constants, or completing the square.  Always look at the denominator when matching forms in the table, they provide the best way to identify the correct form to match.   "
},
{
  "id": "lt-method-step3-cyu",
  "level": "2",
  "url": "lt-method-step3.html#lt-method-step3-cyu",
  "type": "🤔💭 Check Your Understanding",
  "number": "170",
  "title": "",
  "body": "    📖❓Adjusting the Numerator   Select the number that belongs in both blanks to directly apply the inverse.       Correct!     Incorrect.     Incorrect.     Incorrect.      📖❓Find the Inverse Transform         Correct! The function can be split as , which corresponds to and .       Incorrect.       Incorrect.       Incorrect.        "
},
{
  "id": "lt-method-steps-examples",
  "level": "1",
  "url": "lt-method-steps-examples.html",
  "type": "Section",
  "number": "",
  "title": "Summary &amp; Worked Examples",
  "body": " Summary & Worked Examples   This closing section is where the entire Laplace transform method comes together. You have already practiced each of the three steps in isolation. Now we will zoom out, remind ourselves of the big picture, and then run walk through a variety of examples that illustrate how the method is applied from start to finish. These examples are meant to reinforce the process and highlight common patterns, strategies, and adjustments along the way.    Laplace Transform Method— Quick Recap  Here is a visual of the full Laplace transform method. Each step corresponds to a move in the roadmap , and together they form a complete strategy for solving initial value problems. Notice that every arrow answers one of three guiding questions:   How do we translate the differential equation into the Laplace domain?  How do we isolate and tidy up so it matches the inverse table?  How do we return to the original time domain to reveal ?    Laplace Method Roadmap                              Laplace Transform Method (Three-Step Roadmap)  Given an -th-order IVP the particular solution is obtained through the following workflow:    Step 1— Forward Transform  Apply term-by-term. Powers of replace derivatives, and the initial conditions drop in automatically. The result is a single algebraic (Laplace-domain) equation.    Step 2— Solve & Prepare  Isolate , then reshape it so every term matches an entry in the transform table. This may require tools like partial-fraction decomposition and completing the square.    Step 3— Inverse Transform  Apply term-by-term. The hidden original-domain solution is released, and the IVP is solved.      Answer the following questions referring to the steps above.    📖❓Laplace Method Snapshot   Which option best represents the Laplace transform process?     Forward Transform → Find → Prepare → Apply Inverse   Correct! The Laplace Transform Method involves applying the forward transform, solving for , preparing for the backward transform, and applying the inverse transform to find .     Differentiate → Forward Transform → Find → Verify Solution   Not quite. The Laplace Transform Method does not involve differentiating the equation but rather applying the forward transform to convert it into an algebraic form.     Forward Transform → Integrate → Verify Solution   Incorrect. The Laplace Transform Method involves applying the forward transform to simplify the differential equation, not to verify the solution.     Forward Transform → Apply Inverse → Apply Initial Conditions   Incorrect. The Laplace Transform Method involves applying the forward transform to simplify the differential equation, not to check the solution.       📖❓Match Each Move  Drag each task to the step it belongs to.    Apply initial conditions  Match terms of the table  Step 1 — Forward Transform    Isolate  Partial-fraction decomposition  Step 2 — Solve & Prepare    Match terms of the table  Step 3 — Inverse Transform      📖❓Algebra Tools Checklist  Select every technique that may appear in Step 2 .   Completing the square  Partial-fraction decomposition  Integration by parts  Chain Rule   Step 2 is 100 % algebra; no calculus needed.     The three-step outline provides the general strategy. If you ever feel lost, come back to this outline and roadmap. Regardless of the equation, the steps you take to navigate them will always follow one of these three lines.    Worked Examples  The examples below walk through the full process, showing how to transform a differential equation, solve in the Laplace domain, and recover the final solution using the inverse transform. Each is annotated to show where each step begins and ends, so you can clearly see the roadmap in action. Here is a break down of what to expect:   Examples 1–2 ⟶ pure practice: constant-coefficient, homogeneous equations.  Examples 3–4 ⟶ common forcing terms: exponentials, polynomials, and sines\/cosines.  Examples 5–6 ⟶ algebra heavyweights: repeated roots, mixed techniques, and higher order.   Basic Second-Order, Homogeneous   Solve the initial value problem using the Laplace transform:     Specific-Roadmap                              Laplace Domain Equation    First, isolate using algebra:      Isolated   Factor the denominator:   Use partial fraction decomposition:   Multiply through by the denominator:   Strategically selecting -values gives and :    :      :      Updating the Laplace solution, we have      Prepared     Using the table, the solution is:     Nonhomogeneous Forcing Function    Solve the initial value problem:      Specific-Roadmap                              Laplace Domain Equation    Isolate :      Isolated    Notice each term of is already in the transform table form:   Take the inverse Laplace transform:   Therefore, the solution is:      📖❓Order the Steps  Put these phrases in the order they occur when you solved Example 2.   Rewrite as table terms 3  Isolate 2  Transform the differential equation 1  Apply 4    Forcing with a Polynomial   Solve the initial value problem:     Specific-Roadmap                              Laplace Domain Equation    Isolate :      Isolated    Break into recognizable pieces:   Each term now matches an entry in the Laplace transform table.   Take the inverse Laplace transform term by term:   Therefore, the solution is:     Repeated Root in the Characteristic Equation   Solve the initial value problem using the Laplace transform:     Specific-Roadmap                              Laplace Domain Equation    Isolate :      Isolated    Separate the numerator:   Now each term matches an entry in the Laplace table.   Take the inverse Laplace transform term by term:   So     Third-Order Equation   Solve the initial value problem using the Laplace transform:     Specific-Roadmap                              Isolate :      This denominator factors by grouping:   Before jumping to PFD, simplify as much as possible first:   Now PFD is a little easier. Here is the general form:   Applying the standard process gives: ,   So the prepared is:    Take the inverse Laplace transform term by term:   giving us the solution:     Sinusoidal Forcing with Exponential Growth   Solve the initial value problem using the Laplace transform:     Specific-Roadmap                              Laplace Domain Equation    Isolate :      Isolated    Rewrite into pieces that match table entries:   Each piece is now recognizable for inverse transforming.   Take the inverse Laplace transform of each term:   Therefore, the solution is:     These examples highlight how the Laplace Transform Method simplifies solving differential equations by converting them into algebraic equations and then back into the time domain. By mastering these steps, you can tackle a wide range of initial-value problems with ease and precision.     The three-step Laplace roadmap never changes; the variety comes from the algebra you need in Step 2.  Forward transform ⟶ algebra-only world ⟶ isolate ⟶ prepare ⟶ inverse transform.      Check Your Understanding:  📖❓Who Does What?  Match each step with its primary role.   Turns the DE into an algebra problem Step 1 — Forward Transform  Makes every term inverse-friendly Step 2 — Solve & Prepare  Reveals Step 3 — Inverse Transform     📖❓Where Do ICs Appear?  Initial conditions influence only Step 1.   True Right — after Step 1 they are baked into .  False       "
},
{
  "id": "lt-method",
  "level": "2",
  "url": "lt-method-steps-examples.html#lt-method",
  "type": "✍🏻 Method",
  "number": "6",
  "title": "Laplace Transform Method (Three-Step Roadmap).",
  "body": " Laplace Transform Method (Three-Step Roadmap)  Given an -th-order IVP the particular solution is obtained through the following workflow:    Step 1— Forward Transform  Apply term-by-term. Powers of replace derivatives, and the initial conditions drop in automatically. The result is a single algebraic (Laplace-domain) equation.    Step 2— Solve & Prepare  Isolate , then reshape it so every term matches an entry in the transform table. This may require tools like partial-fraction decomposition and completing the square.    Step 3— Inverse Transform  Apply term-by-term. The hidden original-domain solution is released, and the IVP is solved.    "
},
{
  "id": "lt-method-steps-examples-3-6",
  "level": "2",
  "url": "lt-method-steps-examples.html#lt-method-steps-examples-3-6",
  "type": "🤔💭 Check Your Understanding",
  "number": "171",
  "title": "",
  "body": " Answer the following questions referring to the steps above.    📖❓Laplace Method Snapshot   Which option best represents the Laplace transform process?     Forward Transform → Find → Prepare → Apply Inverse   Correct! The Laplace Transform Method involves applying the forward transform, solving for , preparing for the backward transform, and applying the inverse transform to find .     Differentiate → Forward Transform → Find → Verify Solution   Not quite. The Laplace Transform Method does not involve differentiating the equation but rather applying the forward transform to convert it into an algebraic form.     Forward Transform → Integrate → Verify Solution   Incorrect. The Laplace Transform Method involves applying the forward transform to simplify the differential equation, not to verify the solution.     Forward Transform → Apply Inverse → Apply Initial Conditions   Incorrect. The Laplace Transform Method involves applying the forward transform to simplify the differential equation, not to check the solution.       📖❓Match Each Move  Drag each task to the step it belongs to.    Apply initial conditions  Match terms of the table  Step 1 — Forward Transform    Isolate  Partial-fraction decomposition  Step 2 — Solve & Prepare    Match terms of the table  Step 3 — Inverse Transform      📖❓Algebra Tools Checklist  Select every technique that may appear in Step 2 .   Completing the square  Partial-fraction decomposition  Integration by parts  Chain Rule   Step 2 is 100 % algebra; no calculus needed.    "
},
{
  "id": "lt-method-steps-examples-4-4",
  "level": "2",
  "url": "lt-method-steps-examples.html#lt-method-steps-examples-4-4",
  "type": "🌌 Example",
  "number": "172",
  "title": "Basic Second-Order, Homogeneous.",
  "body": "Basic Second-Order, Homogeneous   Solve the initial value problem using the Laplace transform:     Specific-Roadmap                              Laplace Domain Equation    First, isolate using algebra:      Isolated   Factor the denominator:   Use partial fraction decomposition:   Multiply through by the denominator:   Strategically selecting -values gives and :    :      :      Updating the Laplace solution, we have      Prepared     Using the table, the solution is:    "
},
{
  "id": "lt-method-steps-examples-4-5",
  "level": "2",
  "url": "lt-method-steps-examples.html#lt-method-steps-examples-4-5",
  "type": "🌌 Example",
  "number": "173",
  "title": "Nonhomogeneous Forcing Function.",
  "body": "Nonhomogeneous Forcing Function    Solve the initial value problem:      Specific-Roadmap                              Laplace Domain Equation    Isolate :      Isolated    Notice each term of is already in the transform table form:   Take the inverse Laplace transform:   Therefore, the solution is:    "
},
{
  "id": "lt-method-steps-examples-4-7",
  "level": "2",
  "url": "lt-method-steps-examples.html#lt-method-steps-examples-4-7",
  "type": "🌌 Example",
  "number": "174",
  "title": "Forcing with a Polynomial.",
  "body": "Forcing with a Polynomial   Solve the initial value problem:     Specific-Roadmap                              Laplace Domain Equation    Isolate :      Isolated    Break into recognizable pieces:   Each term now matches an entry in the Laplace transform table.   Take the inverse Laplace transform term by term:   Therefore, the solution is:    "
},
{
  "id": "lt-method-steps-examples-4-8",
  "level": "2",
  "url": "lt-method-steps-examples.html#lt-method-steps-examples-4-8",
  "type": "🌌 Example",
  "number": "175",
  "title": "Repeated Root in the Characteristic Equation.",
  "body": "Repeated Root in the Characteristic Equation   Solve the initial value problem using the Laplace transform:     Specific-Roadmap                              Laplace Domain Equation    Isolate :      Isolated    Separate the numerator:   Now each term matches an entry in the Laplace table.   Take the inverse Laplace transform term by term:   So    "
},
{
  "id": "lt-method-steps-examples-4-9",
  "level": "2",
  "url": "lt-method-steps-examples.html#lt-method-steps-examples-4-9",
  "type": "🌌 Example",
  "number": "176",
  "title": "Third-Order Equation.",
  "body": "Third-Order Equation   Solve the initial value problem using the Laplace transform:     Specific-Roadmap                              Isolate :      This denominator factors by grouping:   Before jumping to PFD, simplify as much as possible first:   Now PFD is a little easier. Here is the general form:   Applying the standard process gives: ,   So the prepared is:    Take the inverse Laplace transform term by term:   giving us the solution:    "
},
{
  "id": "lt-method-steps-examples-4-10",
  "level": "2",
  "url": "lt-method-steps-examples.html#lt-method-steps-examples-4-10",
  "type": "🌌 Example",
  "number": "177",
  "title": "Sinusoidal Forcing with Exponential Growth.",
  "body": "Sinusoidal Forcing with Exponential Growth   Solve the initial value problem using the Laplace transform:     Specific-Roadmap                              Laplace Domain Equation    Isolate :      Isolated    Rewrite into pieces that match table entries:   Each piece is now recognizable for inverse transforming.   Take the inverse Laplace transform of each term:   Therefore, the solution is:    "
},
{
  "id": "lt-method-steps-examples-wrapup",
  "level": "2",
  "url": "lt-method-steps-examples.html#lt-method-steps-examples-wrapup",
  "type": "🗝️ Key Takeaways...",
  "number": "",
  "title": "",
  "body": "  The three-step Laplace roadmap never changes; the variety comes from the algebra you need in Step 2.  Forward transform ⟶ algebra-only world ⟶ isolate ⟶ prepare ⟶ inverse transform.   "
},
{
  "id": "lt-method-steps-examples-cyu",
  "level": "2",
  "url": "lt-method-steps-examples.html#lt-method-steps-examples-cyu",
  "type": "🤔💭 Check Your Understanding",
  "number": "178",
  "title": "",
  "body": "  Check Your Understanding:  📖❓Who Does What?  Match each step with its primary role.   Turns the DE into an algebra problem Step 1 — Forward Transform  Makes every term inverse-friendly Step 2 — Solve & Prepare  Reveals Step 3 — Inverse Transform     📖❓Where Do ICs Appear?  Initial conditions influence only Step 1.   True Right — after Step 1 they are baked into .  False      "
},
{
  "id": "applying-the-laplace-transform-method-7",
  "level": "1",
  "url": "applying-the-laplace-transform-method-7.html",
  "type": "Section",
  "number": "",
  "title": "Chapter 10 Exercises",
  "body": " Chapter 10 Exercises   ᯓ★❓Quick-Answer Questions   True-False  Which of the following is NOT a technique mentioned for preparing for the backward transform?    Which of the following is NOT a technique mentioned for preparing for the backward transform?      Completing the square   Incorrect. Completing the square is a technique used to rewrite as a sum of known Laplace transforms.     Partial fraction decomposition   Incorrect. Partial fraction decomposition is another technique used to prepare for the inverse transform.     Integration by Parts   Correct! Integration by parts is not a technique used to prepare for the backward transform.     Rewriting as a sum of -functions   Incorrect. Rewriting is a technique used in Step 2b.      Which of the statements are true?    Which of the statements are true?       The forward Laplace transform converts a differential equation into an algebraic equation    This statement is true. The forward Laplace transform simplifies the differential equation by converting it into an algebraic equation in terms of .      In Step 2, you isolate .    This statement is false. In Step 2, you solve for , not .       Step 2 involves applying the backward Laplace transform     This statement is false. Step 2 involves solving for as a function of .       Step 2 involves rewriting to match forms in the common Laplace transform table     This statement is true. Step 2 prepares for the backward transform by breaking it into known forms found in the table of common Laplace transforms.       The final step involves applying the inverse Laplace transform to recover the solution     This statement is true. The final step of the Laplace Transform Method involves applying the inverse Laplace transform to recover the solution .      Similar to other methods, this method applies the initial conditions to the general solution to find a particular solution    Similar to other methods, this method applies the initial conditions to the general solution to find a particular solution      True   Incorrect.     False   Correct! The Laplace Transform Method accounts for initial conditions in Step 1.      The expression matches the form required to apply the inverse Laplace transform found in the common transform table    True. This expression matches the form in the table and can be directly transformed.      True or False: The inverse Laplace transform is always a unique function.     True      Multiple-Choice  What is the goal of Step 2 in the Laplace Transform Method?    What is the goal of Step 2 in the Laplace Transform Method?      To apply the forward Laplace transform   Incorrect. Applying the forward transform is done in Step 1.     To solve for   Incorrect. Solving for is not the goal of Step 2.     To rewrite as a sum of -functions found in the table of common transforms   Correct! Step 2 involves breaking down into simpler components that match known Laplace transforms.     To find the particular solution to the differential equation   Incorrect. Finding the particular solution is the ultimate goal of the Laplace Transform Method, not just Step 2.      Which of the following is the main purpose of Step 2 in the Laplace Transform Method?    Which of the following is the main purpose of Step 2 in the Laplace Transform Method?      To solve the algebraic equation for   Incorrect. Solving for happens in Step 2.     To prepare for the inverse Laplace transform by rewriting it as a sum of known forms   Correct! Step 2 involves breaking down into simpler components that match known Laplace transforms.     To apply the forward Laplace transform   Incorrect. Applying the forward transform happens in Step 1.     To account for initial conditions   Incorrect. Initial conditions are accounted for in Step 1.      Which step is likely to involve completing the square?    Which step is likely to involve completing the square?      Step 1: Apply the Forward Transform   Incorrect. Completing the square is not part of applying the forward transform.     Step 2: Solve for   Incorrect. Completing the square typically happens in Step 2.     Step 2: Prepare for the Backward Transform   Correct! Completing the square is a technique used in Step 2 to simplify .     Step 3: Apply the Backward Transform   Incorrect. Completing the square should be done before applying the backward transform.       📖❓Select the Forward Transform  Which of the following represents the correct Laplace transform of the equation ?     This is the correct transformation of the given differential equation.     Where are the initial conditions?     Close, but this answer is off by a sign.     Look closely at the initial conditions.      📖❓Select the Forward Transform    What is the Laplace transform of the initial-value problem ?       This is the correct transformation of the initial-value problem.     Double-check the signs and the initial condition terms.     This answer is missing the initial condition terms on the left-hand side.     This only represents the transform of and does not account for the left-hand side of the equation.      📖❓Splitting Fractions   Which expression helps reveal the table match for ?      Yes! Now each term matches a separate entry in the Laplace table.     This doesn't help you match any table entries more clearly.     This breaks the numerator improperly.     This has an incorrect decomposition.      📖❓   In the Laplace Transform Method, the inverse transform      converts a differential equation into an algebraic equation.   No, this describes the forward Laplace transform.     solves the algebraic equation for .   No, solving for happens after applying the forward transform.     recovers the original function from .   Correct! The inverse Laplace transform brings us back to the original function .     eliminates initial conditions from the equation.   No, initial conditions are incorporated into the transformed equation, not eliminated.       📖❓  What is the next step needed to compute ?    Look-up the inverse Laplace transform in the table.   Incorrect. This function is not directly in the table.     Factor the denominator.   Incorrect. Factoring the denominator is not necessary at this stage.     Rewrite the numerator, then split the fraction like so: .   Correct! The numerator needs an to match with L .     Split the fraction directly, like so:   Incorrect. The next step is to decompose the function into simpler forms.       📖❓   Which of the following -functions require adjustment to match one of the common inverse Laplace transforms?       Incorrect. This function already matches a known cosine form and does not require any missing constants.       Correct! This function would require a missing constant adjustment to match the sine form, with the numerator needing to be .       Incorrect. This function already matches a known form and does not require any missing constants.       📖❓            Correct! Factoring out and placing the missing constant gives the correct form: .       Incorrect. The correct answer requires factoring and rebalancing, giving .       Incorrect. The sine form, not cosine, matches this function.       📖❓         Incorrect.       Incorrect.       Correct!       Incorrect.            Correct! The inverse Laplace transform matches the forms in the table.       No, this does not match the correct inverse Laplace transform.       Incorrect. This does not account for all terms in the inverse Laplace transform.      What is the Laplace transform of ?                  In the equation , what is the Laplace transform of the right-hand side?                  📖❓ Direct Inverse           Correct! The inverse Laplace transform of is .       No, the correct transform for is , not .       No, this is not the correct inverse transform for the given expression.       No, this is not an inverse transform expression.      📖❓           Correct! The inverse Laplace transform of is indeed .       No, the correct answer is , not .       No, the exponent should be , not .       No, this is not the correct inverse Laplace transform.      📖❓           No, this is incorrect. The correct answer is .       Correct! The inverse Laplace transform of is .       No, the correct answer is , not .       No, this is the original function in the -domain, not its inverse transform.      📖❓           Correct! The inverse Laplace transform of is .       No, the correct inverse Laplace transform is , not .       No, the correct inverse transform is , not .       No, the correct answer is , not .      📖❓           Correct! The inverse Laplace transform of is .       No, the correct answer is , not .       No, this is not the correct inverse transform for the given expression.       No, the correct inverse transform for is .      📖❓         Correct! The inverse Laplace transform of is .       No, the correct answer is , not .       No, the correct inverse transform is , not .       No, the correct answer is , not .            Correct! The inverse Laplace transform is .       Incorrect. This does not match the correct inverse Laplace transform.       Incorrect. This does not include the full inverse Laplace transform.            Correct! The inverse Laplace transform of this expression is .       Incorrect. The correct inverse Laplace transform is .       Incorrect. The correct inverse Laplace transform is .      , which matches the form in the table when       Correct! The correct value for is .       Incorrect. The correct value is , not 5.       Incorrect. The correct value is , not 3.        Which of the following is true about the inverse Laplace transform?     It converts a function from the frequency domain to the time domain.     It is a method to solve algebraic equations.     It is used to differentiate a function with respect to time.     It only works for polynomials.       Other    After applying the backward Laplace transform in Step 3, you obtain , the to the differential equation        Correct! The backward Laplace transform reverts back to the solution .      Remember that the inverse Laplace transform recovers the solution from .        ?   After completing the square of the denominator: missing number         Correct!      Incorrect. Write it down carefully      Please review the reading.        📖❓Match the Next Step in the Method  Drag the task, on the left, that directly follows the task on the right.   Review the Steps.     ... The result is your solution.  After applying the inverse laplace transform to ...    ... Use algebra to isolate it.  A forward transform you get an algebraic equation involving ...    ... Rewrite it as a sum of expressions resembling common Laplace transforms.  Once you have isolated ...    ... Apply the Laplace Transform to it  Given an initial-valued problem ...       Explain the significance of completing the square in finding inverse Laplace transforms.     Completing the square is a technique used to transform quadratic expressions in the denominator into a form that matches known inverse Laplace transforms, particularly those involving sine and cosine functions.      Why is partial fraction decomposition helpful in finding inverse Laplace transforms?     Partial fraction decomposition breaks down complex rational functions into simpler fractions that correspond to known inverse Laplace transforms, making the transformation process easier.    Why is the Laplace Transform Method considered a powerful tool for solving differential equations?     What role does the table of common Laplace transforms play in the Laplace Transform Method?      Explain how the Laplace transform simplifies solving linear differential equations. Include a discussion of how initial conditions are incorporated into the transformed equation.    The Laplace transform converts a linear differential equation into an algebraic equation in the -domain. This simplification occurs because the transform converts derivatives into polynomials of , reducing the differential equation to a solvable algebraic equation. Initial conditions are directly incorporated into the transformed equation, modifying the transformed terms to include constants that reflect the initial values of the function and its derivatives. This allows the solution of the equation to be found more easily in the -domain, before applying the inverse Laplace transform to return to the time domain.     Multiple Choice: Which of the following is NOT a property of the Laplace transform?  The Laplace transform is linear.  The Laplace transform converts a derivative into a polynomial in .  The Laplace transform can only be applied to functions defined for all time.  The Laplace transform of shifts by in the -domain.      The correct answer is: \"The Laplace transform can only be applied to functions defined for all time.\" The Laplace transform can be applied to functions defined for .     Fill in the blank: The Laplace transform of the second derivative is given by .    The Laplace transform of the second derivative is given by .        🏗️ Warm-ups & Drills  Forward Transform the Equation   Forward transform the following initial-value problem into the Laplace Domain. Don't Solve for .      Applying the Laplace Transform to both sides:      Match the Sine Form   Rewrite each of the following into the form , by filling in the appropriate values in the boxes.                          Match the Cosine Form   Rewrite each of the following into the form , by filling in the appropriate values in the boxes.                    Match the Power Form   Rewrite each of the following into the form , by filling in the appropriate values in the boxes.                            Inverse Transforms   Apply the inverse transform to revert each Laplace solution back into a function of .      The in the denominator tells us that we need . Before we do, let's factor out : .       Since the denominator has the form, , and there is no in the numerator, we should apply . As before, it is helpful to first factor out the constant , . According to , we are missing in the numerator. Let's put it there by multiplying by , like so        This denominator has the form , which matches with . . In this case, the numerator is missing a . We can introduce it by multiplying by , like so                 The form of this denominator is and has no in the numerator. Therefore,        The denominator, , indicates an and a term. Therefore,        The in the denominator tells us that we need . Before we do, let's factor out : .           The form of this denominator is and has no in the numerator. Therefore,   The denominator, , indicates an and a term. Therefore,        Rewrite as to get:   The first term matches L with , , and the second term matches L after multiplying by :        🏗️ Drill: Preparing & Invert   Prepare each Laplace-domain solution for an inverse transformation, then transform it back into a function of .   Backward Transforms- Level 1                                                                                                            This expression matches the form with , so the inverse Laplace transform is .     Backward Transforms- Level 2                   This expression can be split into two parts: and . The first part corresponds to and the second part corresponds to , so the inverse Laplace transform is .                                                 The discriminant of the denominator is: , indicating that completing the square is necessary: . Rewriting as: . Therefore, .       Completing the square for the denominator of gives: . However, the numerator does not match . To resolve this, we rewrite as and group terms: , Now, apply the inverse Laplace transform:        First, factor the quadratic denominator: Now decompose into partial fractions: Multiply both sides by , and solve for and by selecting convenient values for :        The partial fraction decomposition is: Therefore:                      Decompose into partial fractions: . Find and : . Use the inverse Laplace transform: .            Decompose into partial fractions: . Find and : . Use the inverse Laplace transform: .            As in the previous examples, the denominator is a second-degree polynomial; therefore it is sensible for us to begin by completing the square in the denominator as we did in the previous two examples.   Take a careful look at the denominator here. It's really close to matching or , but it is not a match because of the negative sign in front of the We need to change course when this happens. Another algebraic manipulation that we might consider is a partial fraction decomposition.   Margin note: If you need to review partial fraction decomposition, go HERE.    We revert to the original expression, but this time, instead of completing the square, we factor the denominator.   Since each of the factors in the denominator is a distinct linear factor, we know that the form of the partial fraction decomposition is   Our next goal is to determine the coefficients and in this equations. There are multiple ways to achieve this and we demonstrate just one here. We multiply both sides of the equation by the least common denominator, , and then expand and collect like-terms, as shown.   At this point, we have a polynomial on the left hand side and a polynomial on the right hand side. The only way these can be equal to each other is if the corresponding coefficients are equal. That is, the coefficient on on the left hand side is 1, while the coefficient on on the right hand side of the equation is . Since the polynomials are equal, we know that these are equal. That is, Similarly, if we equate the constants, we have Thus, we have the following system of two linear equations in terms of two unknown variables, and .   There are many ways to solve such an equation, and you are encouraged to choose the solution technique you like the most. Here we will solve the first equation for , and then substitute into the second equation, hence we have   Remember that our goal is to take the inverse Laplace transform. Our algebraic manipulation was helpful because we took a more complex expression and rewrote it as two simpler fractions. We can now use to find the inverse Laplace transform as follows.          Since has a quadratic function in the denominator, it makes sense that we would try to match it with one of the forms above, however, the form of the numerator suggests matching it with the second expression.  As we mentioned earlier, we'll try to make the denominator match first. Since both of the forms we're trying to match are of the form we will complete the square first: (If you still don't remember how to complete the square, look up that primer and do the previous exercises in that section above.)  Let's rewrite the given expression as follows.   We've got the denominator in exactly the right form, it looks just like with and . As in the previous section, once we've gotten the denominator in shape, we turn our attention to the numerator. If we look back at the two forms we are trying to match, we see that our expression has an in the numerator, so it's more like . It would be exactly right if we had in the numerator, which in this case would be .  What we do have in the numerator is ; and we would like it to be which means if we added 4, we'd have exactly the right thing. If we want to add 4, we'll need to compensate by also subtracting 4, like this:   Great! Now we can split this single fraction into two separate fractions: We're almost there! The first fraction is a perfect match for the form (with and ); but we still have another expression that is not yet a match. The remaining fraction looks like it could eventually match the form . We would need to have a 5 in the numerator, and we currently have a 4. But we can fix that as we did in the previous section: Now let's put it all together. Here's everything we did:   As mentioned before, being able to use appropriate algebra to \"match\" forms is really important when we work with Laplace Transforms. Since it's really just algebra, now is a great time to practice that skill, so when we are in the middle of studying Laplace Transforms, you can just focus on the \"new\" stuff.                                               Backward Transforms- Level 3                   First, factor the denominator as . Then, decompose the expression into . Solving for and , you get the inverse Laplace transform as .                                   Note that as the quadratic term in the denominator does not factor, the denominator contains an irreducible quadratic factor and a repeated linear factor. We'll proceed by simplifying this complicated fraction with a Partial Fraction Decomposition of the form   You may also consider using technology to find a partial fraction decomposition. You should get  Click here for the details     Equating coefficients gives us four equations in four unknowns.     With the partial fraction decomposition in hand, we are prepared to take the inverse Laplace transform, using the same types of algebraic manipulations demonstrated in the previous examples.      In the Laplace Domain: Isolate, Prepare & Invert   Isolate , prepare it for inversion, and invert it.                       Solving Differential Equations   Solve each of the following initial-value problems using Laplace Transforms.      We begin by taking the Laplace transform and substituting in the initial conditions. Now we aim to solve for so we use algebra to rearrange as follows. We need to do a partial fraction decomposition before we can take the inverse LT. Equating the coefficients of like-terms yields, we can solve for  , an . Hence we have Now we need only take the inverse LT to find the solution.             We begin by taking the Laplace transform and substituting in the initial conditions. Now we aim to solve for so we use algebra to rearrange as follows. We need to do a partial fraction decomposition before we can take the inverse LT. Equating the coefficients of like-terms yields, we can solve for  , an . Hence, we have \\begin{equation} Y(s) = \\dfrac{-1}{s+1} + \\dfrac{3s+5}{s^2 - 2s + 5}. \\label{Y_of_s} \\end{equation} We need to take the inverse Laplace Transform to fin We need to complete the square on the irreducible quadratic term as follows. We need to transform the second term, as follows, so we can use L8 and L7 on the Laplace transform table. We are now prepared to take the inverse LT of equation \\ref{Y_of_s} to get the solution to the IVP.             Apply the Laplace transform to both sides of the equation: . Using the properties of the Laplace transform for derivatives, we have: . Substitute the initial conditions and : . Combine like-terms: . Solve for : . Factor the denominator: . Use partial fraction decomposition to find the inverse Laplace transform: . Solve for and : . Finally, take the inverse Laplace transform to find : .            Apply the Laplace transform to both sides: . Use the properties of the Laplace transform: . Substitute the initial condition : . Solve for : . Use partial fraction decomposition: . Find and : . Inverse Laplace transform gives: .            Applying the Laplace transform to both sides, we get:   Substituting the initial condition , the equation becomes:   Rearranging and solving for :    We can now decompose the second term using partial fractions:   Solving for and , we get and . Therefore:    Taking the inverse Laplace transform, we obtain the solution:        Applying the Laplace transform:   Substituting the initial conditions:   Solving for :   After rearranging and solving, the inverse Laplace transform gives:        Applying the Laplace transform:   Solving for and then applying the inverse Laplace transform gives the solution.       Applying the Laplace transform and solving the algebraic equation will yield the solution in the -domain, which can then be inverted to find .       We intend to use Laplace transforms to solve this IVP, but we need to verify that this is an appropriate technique. We can verify that this is  the DE is linear,  the DE has constant coefficients, and  initial conditions are provided.    Hence, it is appropriate to proceed with the Laplace transform solution technique. We also note that is the dependent variable and is the independent variable, so our goal is to find a function that satisfies the DE and the initial conditions.   Margin note: We could actually use the method of undetermined coefficients. You are encouraged to do this and verify that the solution is the same.   We begin by taking the Laplace transform of both sides of the DE, using linearity as needed.   Now we use the provided initial conditions.   Next we will use algebra to solve for    We need to find the inverse Laplace transform of both sides of the equation. In order to do that, we apply partial fraction decomposition to the rational function on the right hand side, giving   We have a repeated linear factor, , and two other linear factors, so the form of the partial fraction decomposition can be written as   (PFD details...can be omitted?)    Hence, we have   Now we are prepared to take the inverse Laplace transform.   Thus, we have found the desired unknown function   Optional: verify the solution    We also verify the initial conditions:        *       *        . Applying to both sides:    . Next, we isolate on one side of the equation:    . We need to express as a sum of functions that match known forms in the Laplace transform table. We see from the last equation, is ready to go, but requires partial fraction decomposition. We start by writing down the form of the decomposition,  Now, we find and by plugging in values of :        :             :             Thus, the prepared is    . Finally, we apply the backward step to get the solution:         . Applying to both sides: where and  ,  .  So the complete forward transform is    . Next, we isolate on one side of the equation:    . Now, we need to express as a sum of functions that match known forms in the Laplace transform table. This can be simplified slightly by first combining the terms in as a single fraction, like so . Plugging this back into the equation for gives the new , and we are ready to apply partial fraction decomposition. The form of the decomposition is Now, we find and by plugging in values of ,        :             :             :                   Thus, the prepared is    . Finally, we perform the backward step to get the solution:         . Applying to both sides: where and  ,  .  So the complete forward transform is:    . Next, we isolate on one side of the equation:    . Now, we need to express as a sum of functions that match known forms in the Laplace transform table, which requires partial fraction decomposition. We start by writing down the form of the decomposition, Now, we find and by plugging in values of ,    :            :            :            So the updated is . Note, the second term is not yet ready and we need to complete the square of its denominator before we can do the backward step.    . Now for the backward step to get the solution:       "
},
{
  "id": "c10-quick-answer-tf",
  "level": "2",
  "url": "applying-the-laplace-transform-method-7.html#c10-quick-answer-tf",
  "type": "Reading Question",
  "number": "1",
  "title": "True-False.",
  "body": "True-False  Which of the following is NOT a technique mentioned for preparing for the backward transform?    Which of the following is NOT a technique mentioned for preparing for the backward transform?      Completing the square   Incorrect. Completing the square is a technique used to rewrite as a sum of known Laplace transforms.     Partial fraction decomposition   Incorrect. Partial fraction decomposition is another technique used to prepare for the inverse transform.     Integration by Parts   Correct! Integration by parts is not a technique used to prepare for the backward transform.     Rewriting as a sum of -functions   Incorrect. Rewriting is a technique used in Step 2b.      Which of the statements are true?    Which of the statements are true?       The forward Laplace transform converts a differential equation into an algebraic equation    This statement is true. The forward Laplace transform simplifies the differential equation by converting it into an algebraic equation in terms of .      In Step 2, you isolate .    This statement is false. In Step 2, you solve for , not .       Step 2 involves applying the backward Laplace transform     This statement is false. Step 2 involves solving for as a function of .       Step 2 involves rewriting to match forms in the common Laplace transform table     This statement is true. Step 2 prepares for the backward transform by breaking it into known forms found in the table of common Laplace transforms.       The final step involves applying the inverse Laplace transform to recover the solution     This statement is true. The final step of the Laplace Transform Method involves applying the inverse Laplace transform to recover the solution .      Similar to other methods, this method applies the initial conditions to the general solution to find a particular solution    Similar to other methods, this method applies the initial conditions to the general solution to find a particular solution      True   Incorrect.     False   Correct! The Laplace Transform Method accounts for initial conditions in Step 1.      The expression matches the form required to apply the inverse Laplace transform found in the common transform table    True. This expression matches the form in the table and can be directly transformed.      True or False: The inverse Laplace transform is always a unique function.     True     "
},
{
  "id": "c10-quick-answer-mc",
  "level": "2",
  "url": "applying-the-laplace-transform-method-7.html#c10-quick-answer-mc",
  "type": "Reading Question",
  "number": "2",
  "title": "Multiple-Choice.",
  "body": "Multiple-Choice  What is the goal of Step 2 in the Laplace Transform Method?    What is the goal of Step 2 in the Laplace Transform Method?      To apply the forward Laplace transform   Incorrect. Applying the forward transform is done in Step 1.     To solve for   Incorrect. Solving for is not the goal of Step 2.     To rewrite as a sum of -functions found in the table of common transforms   Correct! Step 2 involves breaking down into simpler components that match known Laplace transforms.     To find the particular solution to the differential equation   Incorrect. Finding the particular solution is the ultimate goal of the Laplace Transform Method, not just Step 2.      Which of the following is the main purpose of Step 2 in the Laplace Transform Method?    Which of the following is the main purpose of Step 2 in the Laplace Transform Method?      To solve the algebraic equation for   Incorrect. Solving for happens in Step 2.     To prepare for the inverse Laplace transform by rewriting it as a sum of known forms   Correct! Step 2 involves breaking down into simpler components that match known Laplace transforms.     To apply the forward Laplace transform   Incorrect. Applying the forward transform happens in Step 1.     To account for initial conditions   Incorrect. Initial conditions are accounted for in Step 1.      Which step is likely to involve completing the square?    Which step is likely to involve completing the square?      Step 1: Apply the Forward Transform   Incorrect. Completing the square is not part of applying the forward transform.     Step 2: Solve for   Incorrect. Completing the square typically happens in Step 2.     Step 2: Prepare for the Backward Transform   Correct! Completing the square is a technique used in Step 2 to simplify .     Step 3: Apply the Backward Transform   Incorrect. Completing the square should be done before applying the backward transform.       📖❓Select the Forward Transform  Which of the following represents the correct Laplace transform of the equation ?     This is the correct transformation of the given differential equation.     Where are the initial conditions?     Close, but this answer is off by a sign.     Look closely at the initial conditions.      📖❓Select the Forward Transform    What is the Laplace transform of the initial-value problem ?       This is the correct transformation of the initial-value problem.     Double-check the signs and the initial condition terms.     This answer is missing the initial condition terms on the left-hand side.     This only represents the transform of and does not account for the left-hand side of the equation.      📖❓Splitting Fractions   Which expression helps reveal the table match for ?      Yes! Now each term matches a separate entry in the Laplace table.     This doesn't help you match any table entries more clearly.     This breaks the numerator improperly.     This has an incorrect decomposition.      📖❓   In the Laplace Transform Method, the inverse transform      converts a differential equation into an algebraic equation.   No, this describes the forward Laplace transform.     solves the algebraic equation for .   No, solving for happens after applying the forward transform.     recovers the original function from .   Correct! The inverse Laplace transform brings us back to the original function .     eliminates initial conditions from the equation.   No, initial conditions are incorporated into the transformed equation, not eliminated.       📖❓  What is the next step needed to compute ?    Look-up the inverse Laplace transform in the table.   Incorrect. This function is not directly in the table.     Factor the denominator.   Incorrect. Factoring the denominator is not necessary at this stage.     Rewrite the numerator, then split the fraction like so: .   Correct! The numerator needs an to match with L .     Split the fraction directly, like so:   Incorrect. The next step is to decompose the function into simpler forms.       📖❓   Which of the following -functions require adjustment to match one of the common inverse Laplace transforms?       Incorrect. This function already matches a known cosine form and does not require any missing constants.       Correct! This function would require a missing constant adjustment to match the sine form, with the numerator needing to be .       Incorrect. This function already matches a known form and does not require any missing constants.       📖❓            Correct! Factoring out and placing the missing constant gives the correct form: .       Incorrect. The correct answer requires factoring and rebalancing, giving .       Incorrect. The sine form, not cosine, matches this function.       📖❓         Incorrect.       Incorrect.       Correct!       Incorrect.            Correct! The inverse Laplace transform matches the forms in the table.       No, this does not match the correct inverse Laplace transform.       Incorrect. This does not account for all terms in the inverse Laplace transform.      What is the Laplace transform of ?                  In the equation , what is the Laplace transform of the right-hand side?                  📖❓ Direct Inverse           Correct! The inverse Laplace transform of is .       No, the correct transform for is , not .       No, this is not the correct inverse transform for the given expression.       No, this is not an inverse transform expression.      📖❓           Correct! The inverse Laplace transform of is indeed .       No, the correct answer is , not .       No, the exponent should be , not .       No, this is not the correct inverse Laplace transform.      📖❓           No, this is incorrect. The correct answer is .       Correct! The inverse Laplace transform of is .       No, the correct answer is , not .       No, this is the original function in the -domain, not its inverse transform.      📖❓           Correct! The inverse Laplace transform of is .       No, the correct inverse Laplace transform is , not .       No, the correct inverse transform is , not .       No, the correct answer is , not .      📖❓           Correct! The inverse Laplace transform of is .       No, the correct answer is , not .       No, this is not the correct inverse transform for the given expression.       No, the correct inverse transform for is .      📖❓         Correct! The inverse Laplace transform of is .       No, the correct answer is , not .       No, the correct inverse transform is , not .       No, the correct answer is , not .            Correct! The inverse Laplace transform is .       Incorrect. This does not match the correct inverse Laplace transform.       Incorrect. This does not include the full inverse Laplace transform.            Correct! The inverse Laplace transform of this expression is .       Incorrect. The correct inverse Laplace transform is .       Incorrect. The correct inverse Laplace transform is .      , which matches the form in the table when       Correct! The correct value for is .       Incorrect. The correct value is , not 5.       Incorrect. The correct value is , not 3.        Which of the following is true about the inverse Laplace transform?     It converts a function from the frequency domain to the time domain.     It is a method to solve algebraic equations.     It is used to differentiate a function with respect to time.     It only works for polynomials.      "
},
{
  "id": "c10-quick-answer-other",
  "level": "2",
  "url": "applying-the-laplace-transform-method-7.html#c10-quick-answer-other",
  "type": "Reading Question",
  "number": "3",
  "title": "Other.",
  "body": "Other    After applying the backward Laplace transform in Step 3, you obtain , the to the differential equation        Correct! The backward Laplace transform reverts back to the solution .      Remember that the inverse Laplace transform recovers the solution from .        ?   After completing the square of the denominator: missing number         Correct!      Incorrect. Write it down carefully      Please review the reading.        📖❓Match the Next Step in the Method  Drag the task, on the left, that directly follows the task on the right.   Review the Steps.     ... The result is your solution.  After applying the inverse laplace transform to ...    ... Use algebra to isolate it.  A forward transform you get an algebraic equation involving ...    ... Rewrite it as a sum of expressions resembling common Laplace transforms.  Once you have isolated ...    ... Apply the Laplace Transform to it  Given an initial-valued problem ...       Explain the significance of completing the square in finding inverse Laplace transforms.     Completing the square is a technique used to transform quadratic expressions in the denominator into a form that matches known inverse Laplace transforms, particularly those involving sine and cosine functions.      Why is partial fraction decomposition helpful in finding inverse Laplace transforms?     Partial fraction decomposition breaks down complex rational functions into simpler fractions that correspond to known inverse Laplace transforms, making the transformation process easier.    Why is the Laplace Transform Method considered a powerful tool for solving differential equations?     What role does the table of common Laplace transforms play in the Laplace Transform Method?      Explain how the Laplace transform simplifies solving linear differential equations. Include a discussion of how initial conditions are incorporated into the transformed equation.    The Laplace transform converts a linear differential equation into an algebraic equation in the -domain. This simplification occurs because the transform converts derivatives into polynomials of , reducing the differential equation to a solvable algebraic equation. Initial conditions are directly incorporated into the transformed equation, modifying the transformed terms to include constants that reflect the initial values of the function and its derivatives. This allows the solution of the equation to be found more easily in the -domain, before applying the inverse Laplace transform to return to the time domain.     Multiple Choice: Which of the following is NOT a property of the Laplace transform?  The Laplace transform is linear.  The Laplace transform converts a derivative into a polynomial in .  The Laplace transform can only be applied to functions defined for all time.  The Laplace transform of shifts by in the -domain.      The correct answer is: \"The Laplace transform can only be applied to functions defined for all time.\" The Laplace transform can be applied to functions defined for .     Fill in the blank: The Laplace transform of the second derivative is given by .    The Laplace transform of the second derivative is given by .    "
},
{
  "id": "applying-the-laplace-transform-method-7-3-2",
  "level": "2",
  "url": "applying-the-laplace-transform-method-7.html#applying-the-laplace-transform-method-7-3-2",
  "type": "Exercise",
  "number": "1",
  "title": "Forward Transform the Equation.",
  "body": "Forward Transform the Equation   Forward transform the following initial-value problem into the Laplace Domain. Don't Solve for .      Applying the Laplace Transform to both sides:     "
},
{
  "id": "applying-the-laplace-transform-method-7-3-3-3",
  "level": "2",
  "url": "applying-the-laplace-transform-method-7.html#applying-the-laplace-transform-method-7-3-3-3",
  "type": "Exercise",
  "number": "2",
  "title": "",
  "body": "     "
},
{
  "id": "applying-the-laplace-transform-method-7-3-3-4",
  "level": "2",
  "url": "applying-the-laplace-transform-method-7.html#applying-the-laplace-transform-method-7-3-3-4",
  "type": "Exercise",
  "number": "3",
  "title": "",
  "body": "       "
},
{
  "id": "applying-the-laplace-transform-method-7-3-3-5",
  "level": "2",
  "url": "applying-the-laplace-transform-method-7.html#applying-the-laplace-transform-method-7-3-3-5",
  "type": "Exercise",
  "number": "4",
  "title": "",
  "body": "       "
},
{
  "id": "applying-the-laplace-transform-method-7-3-4-3",
  "level": "2",
  "url": "applying-the-laplace-transform-method-7.html#applying-the-laplace-transform-method-7-3-4-3",
  "type": "Exercise",
  "number": "5",
  "title": "",
  "body": "       "
},
{
  "id": "applying-the-laplace-transform-method-7-3-4-4",
  "level": "2",
  "url": "applying-the-laplace-transform-method-7.html#applying-the-laplace-transform-method-7-3-4-4",
  "type": "Exercise",
  "number": "6",
  "title": "",
  "body": "       "
},
{
  "id": "applying-the-laplace-transform-method-7-3-5-3",
  "level": "2",
  "url": "applying-the-laplace-transform-method-7.html#applying-the-laplace-transform-method-7-3-5-3",
  "type": "Exercise",
  "number": "7",
  "title": "",
  "body": "       "
},
{
  "id": "applying-the-laplace-transform-method-7-3-5-4",
  "level": "2",
  "url": "applying-the-laplace-transform-method-7.html#applying-the-laplace-transform-method-7-3-5-4",
  "type": "Exercise",
  "number": "8",
  "title": "",
  "body": "       "
},
{
  "id": "applying-the-laplace-transform-method-7-3-5-5",
  "level": "2",
  "url": "applying-the-laplace-transform-method-7.html#applying-the-laplace-transform-method-7-3-5-5",
  "type": "Exercise",
  "number": "9",
  "title": "",
  "body": "       "
},
{
  "id": "applying-the-laplace-transform-method-7-3-6-3",
  "level": "2",
  "url": "applying-the-laplace-transform-method-7.html#applying-the-laplace-transform-method-7-3-6-3",
  "type": "Exercise",
  "number": "10",
  "title": "",
  "body": "   The in the denominator tells us that we need . Before we do, let's factor out : .   "
},
{
  "id": "applying-the-laplace-transform-method-7-3-6-4",
  "level": "2",
  "url": "applying-the-laplace-transform-method-7.html#applying-the-laplace-transform-method-7-3-6-4",
  "type": "Exercise",
  "number": "11",
  "title": "",
  "body": "   Since the denominator has the form, , and there is no in the numerator, we should apply . As before, it is helpful to first factor out the constant , . According to , we are missing in the numerator. Let's put it there by multiplying by , like so    "
},
{
  "id": "applying-the-laplace-transform-method-7-3-6-5",
  "level": "2",
  "url": "applying-the-laplace-transform-method-7.html#applying-the-laplace-transform-method-7-3-6-5",
  "type": "Exercise",
  "number": "12",
  "title": "",
  "body": "   This denominator has the form , which matches with . . In this case, the numerator is missing a . We can introduce it by multiplying by , like so    "
},
{
  "id": "applying-the-laplace-transform-method-7-3-6-6",
  "level": "2",
  "url": "applying-the-laplace-transform-method-7.html#applying-the-laplace-transform-method-7-3-6-6",
  "type": "Exercise",
  "number": "13",
  "title": "",
  "body": "        "
},
{
  "id": "applying-the-laplace-transform-method-7-3-6-7",
  "level": "2",
  "url": "applying-the-laplace-transform-method-7.html#applying-the-laplace-transform-method-7-3-6-7",
  "type": "Exercise",
  "number": "14",
  "title": "",
  "body": "   The form of this denominator is and has no in the numerator. Therefore,    "
},
{
  "id": "applying-the-laplace-transform-method-7-3-6-8",
  "level": "2",
  "url": "applying-the-laplace-transform-method-7.html#applying-the-laplace-transform-method-7-3-6-8",
  "type": "Exercise",
  "number": "15",
  "title": "",
  "body": "   The denominator, , indicates an and a term. Therefore,    "
},
{
  "id": "applying-the-laplace-transform-method-7-3-6-9",
  "level": "2",
  "url": "applying-the-laplace-transform-method-7.html#applying-the-laplace-transform-method-7-3-6-9",
  "type": "Exercise",
  "number": "16",
  "title": "",
  "body": "   The in the denominator tells us that we need . Before we do, let's factor out : .       "
},
{
  "id": "applying-the-laplace-transform-method-7-3-6-10",
  "level": "2",
  "url": "applying-the-laplace-transform-method-7.html#applying-the-laplace-transform-method-7-3-6-10",
  "type": "Exercise",
  "number": "17",
  "title": "",
  "body": "   The form of this denominator is and has no in the numerator. Therefore,   The denominator, , indicates an and a term. Therefore,    "
},
{
  "id": "applying-the-laplace-transform-method-7-3-6-11",
  "level": "2",
  "url": "applying-the-laplace-transform-method-7.html#applying-the-laplace-transform-method-7-3-6-11",
  "type": "Exercise",
  "number": "18",
  "title": "",
  "body": "   Rewrite as to get:   The first term matches L with , , and the second term matches L after multiplying by :    "
},
{
  "id": "applying-the-laplace-transform-method-7-4-3-2",
  "level": "2",
  "url": "applying-the-laplace-transform-method-7.html#applying-the-laplace-transform-method-7-4-3-2",
  "type": "Exercise",
  "number": "1",
  "title": "",
  "body": "        "
},
{
  "id": "applying-the-laplace-transform-method-7-4-3-3",
  "level": "2",
  "url": "applying-the-laplace-transform-method-7.html#applying-the-laplace-transform-method-7-4-3-3",
  "type": "Exercise",
  "number": "2",
  "title": "",
  "body": "        "
},
{
  "id": "applying-the-laplace-transform-method-7-4-3-4",
  "level": "2",
  "url": "applying-the-laplace-transform-method-7.html#applying-the-laplace-transform-method-7-4-3-4",
  "type": "Exercise",
  "number": "3",
  "title": "",
  "body": "             "
},
{
  "id": "applying-the-laplace-transform-method-7-4-3-5",
  "level": "2",
  "url": "applying-the-laplace-transform-method-7.html#applying-the-laplace-transform-method-7-4-3-5",
  "type": "Exercise",
  "number": "4",
  "title": "",
  "body": "             "
},
{
  "id": "applying-the-laplace-transform-method-7-4-3-6",
  "level": "2",
  "url": "applying-the-laplace-transform-method-7.html#applying-the-laplace-transform-method-7-4-3-6",
  "type": "Exercise",
  "number": "5",
  "title": "",
  "body": "             "
},
{
  "id": "applying-the-laplace-transform-method-7-4-3-7",
  "level": "2",
  "url": "applying-the-laplace-transform-method-7.html#applying-the-laplace-transform-method-7-4-3-7",
  "type": "Exercise",
  "number": "6",
  "title": "",
  "body": "        "
},
{
  "id": "applying-the-laplace-transform-method-7-4-3-8",
  "level": "2",
  "url": "applying-the-laplace-transform-method-7.html#applying-the-laplace-transform-method-7-4-3-8",
  "type": "Exercise",
  "number": "7",
  "title": "",
  "body": "             "
},
{
  "id": "applying-the-laplace-transform-method-7-4-3-9",
  "level": "2",
  "url": "applying-the-laplace-transform-method-7.html#applying-the-laplace-transform-method-7-4-3-9",
  "type": "Exercise",
  "number": "8",
  "title": "",
  "body": "         "
},
{
  "id": "applying-the-laplace-transform-method-7-4-3-10",
  "level": "2",
  "url": "applying-the-laplace-transform-method-7.html#applying-the-laplace-transform-method-7-4-3-10",
  "type": "Exercise",
  "number": "9",
  "title": "",
  "body": "         "
},
{
  "id": "applying-the-laplace-transform-method-7-4-3-11",
  "level": "2",
  "url": "applying-the-laplace-transform-method-7.html#applying-the-laplace-transform-method-7-4-3-11",
  "type": "Exercise",
  "number": "10",
  "title": "",
  "body": "   This expression matches the form with , so the inverse Laplace transform is .   "
},
{
  "id": "applying-the-laplace-transform-method-7-4-4-2",
  "level": "2",
  "url": "applying-the-laplace-transform-method-7.html#applying-the-laplace-transform-method-7-4-4-2",
  "type": "Exercise",
  "number": "11",
  "title": "",
  "body": "             "
},
{
  "id": "applying-the-laplace-transform-method-7-4-4-3",
  "level": "2",
  "url": "applying-the-laplace-transform-method-7.html#applying-the-laplace-transform-method-7-4-4-3",
  "type": "Exercise",
  "number": "12",
  "title": "",
  "body": "   This expression can be split into two parts: and . The first part corresponds to and the second part corresponds to , so the inverse Laplace transform is .   "
},
{
  "id": "applying-the-laplace-transform-method-7-4-4-4",
  "level": "2",
  "url": "applying-the-laplace-transform-method-7.html#applying-the-laplace-transform-method-7-4-4-4",
  "type": "Exercise",
  "number": "13",
  "title": "",
  "body": "             "
},
{
  "id": "applying-the-laplace-transform-method-7-4-4-5",
  "level": "2",
  "url": "applying-the-laplace-transform-method-7.html#applying-the-laplace-transform-method-7-4-4-5",
  "type": "Exercise",
  "number": "14",
  "title": "",
  "body": "             "
},
{
  "id": "applying-the-laplace-transform-method-7-4-4-6",
  "level": "2",
  "url": "applying-the-laplace-transform-method-7.html#applying-the-laplace-transform-method-7-4-4-6",
  "type": "Exercise",
  "number": "15",
  "title": "",
  "body": "             "
},
{
  "id": "applying-the-laplace-transform-method-7-4-4-7",
  "level": "2",
  "url": "applying-the-laplace-transform-method-7.html#applying-the-laplace-transform-method-7-4-4-7",
  "type": "Exercise",
  "number": "16",
  "title": "",
  "body": "   The discriminant of the denominator is: , indicating that completing the square is necessary: . Rewriting as: . Therefore, .   "
},
{
  "id": "applying-the-laplace-transform-method-7-4-4-8",
  "level": "2",
  "url": "applying-the-laplace-transform-method-7.html#applying-the-laplace-transform-method-7-4-4-8",
  "type": "Exercise",
  "number": "17",
  "title": "",
  "body": "   Completing the square for the denominator of gives: . However, the numerator does not match . To resolve this, we rewrite as and group terms: , Now, apply the inverse Laplace transform:    "
},
{
  "id": "applying-the-laplace-transform-method-7-4-4-9",
  "level": "2",
  "url": "applying-the-laplace-transform-method-7.html#applying-the-laplace-transform-method-7-4-4-9",
  "type": "Exercise",
  "number": "18",
  "title": "",
  "body": "   First, factor the quadratic denominator: Now decompose into partial fractions: Multiply both sides by , and solve for and by selecting convenient values for :        The partial fraction decomposition is: Therefore:    "
},
{
  "id": "applying-the-laplace-transform-method-7-4-4-10",
  "level": "2",
  "url": "applying-the-laplace-transform-method-7.html#applying-the-laplace-transform-method-7-4-4-10",
  "type": "Exercise",
  "number": "19",
  "title": "",
  "body": "             "
},
{
  "id": "applying-the-laplace-transform-method-7-4-4-11",
  "level": "2",
  "url": "applying-the-laplace-transform-method-7.html#applying-the-laplace-transform-method-7-4-4-11",
  "type": "Exercise",
  "number": "20",
  "title": "",
  "body": "   Decompose into partial fractions: . Find and : . Use the inverse Laplace transform: .        "
},
{
  "id": "applying-the-laplace-transform-method-7-4-4-12",
  "level": "2",
  "url": "applying-the-laplace-transform-method-7.html#applying-the-laplace-transform-method-7-4-4-12",
  "type": "Exercise",
  "number": "21",
  "title": "",
  "body": "   Decompose into partial fractions: . Find and : . Use the inverse Laplace transform: .        "
},
{
  "id": "applying-the-laplace-transform-method-7-4-4-13",
  "level": "2",
  "url": "applying-the-laplace-transform-method-7.html#applying-the-laplace-transform-method-7-4-4-13",
  "type": "Exercise",
  "number": "22",
  "title": "",
  "body": "   As in the previous examples, the denominator is a second-degree polynomial; therefore it is sensible for us to begin by completing the square in the denominator as we did in the previous two examples.   Take a careful look at the denominator here. It's really close to matching or , but it is not a match because of the negative sign in front of the We need to change course when this happens. Another algebraic manipulation that we might consider is a partial fraction decomposition.   Margin note: If you need to review partial fraction decomposition, go HERE.    We revert to the original expression, but this time, instead of completing the square, we factor the denominator.   Since each of the factors in the denominator is a distinct linear factor, we know that the form of the partial fraction decomposition is   Our next goal is to determine the coefficients and in this equations. There are multiple ways to achieve this and we demonstrate just one here. We multiply both sides of the equation by the least common denominator, , and then expand and collect like-terms, as shown.   At this point, we have a polynomial on the left hand side and a polynomial on the right hand side. The only way these can be equal to each other is if the corresponding coefficients are equal. That is, the coefficient on on the left hand side is 1, while the coefficient on on the right hand side of the equation is . Since the polynomials are equal, we know that these are equal. That is, Similarly, if we equate the constants, we have Thus, we have the following system of two linear equations in terms of two unknown variables, and .   There are many ways to solve such an equation, and you are encouraged to choose the solution technique you like the most. Here we will solve the first equation for , and then substitute into the second equation, hence we have   Remember that our goal is to take the inverse Laplace transform. Our algebraic manipulation was helpful because we took a more complex expression and rewrote it as two simpler fractions. We can now use to find the inverse Laplace transform as follows.    "
},
{
  "id": "applying-the-laplace-transform-method-7-4-4-14",
  "level": "2",
  "url": "applying-the-laplace-transform-method-7.html#applying-the-laplace-transform-method-7-4-4-14",
  "type": "Exercise",
  "number": "23",
  "title": "",
  "body": "     Since has a quadratic function in the denominator, it makes sense that we would try to match it with one of the forms above, however, the form of the numerator suggests matching it with the second expression.  As we mentioned earlier, we'll try to make the denominator match first. Since both of the forms we're trying to match are of the form we will complete the square first: (If you still don't remember how to complete the square, look up that primer and do the previous exercises in that section above.)  Let's rewrite the given expression as follows.   We've got the denominator in exactly the right form, it looks just like with and . As in the previous section, once we've gotten the denominator in shape, we turn our attention to the numerator. If we look back at the two forms we are trying to match, we see that our expression has an in the numerator, so it's more like . It would be exactly right if we had in the numerator, which in this case would be .  What we do have in the numerator is ; and we would like it to be which means if we added 4, we'd have exactly the right thing. If we want to add 4, we'll need to compensate by also subtracting 4, like this:   Great! Now we can split this single fraction into two separate fractions: We're almost there! The first fraction is a perfect match for the form (with and ); but we still have another expression that is not yet a match. The remaining fraction looks like it could eventually match the form . We would need to have a 5 in the numerator, and we currently have a 4. But we can fix that as we did in the previous section: Now let's put it all together. Here's everything we did:   As mentioned before, being able to use appropriate algebra to \"match\" forms is really important when we work with Laplace Transforms. Since it's really just algebra, now is a great time to practice that skill, so when we are in the middle of studying Laplace Transforms, you can just focus on the \"new\" stuff.   "
},
{
  "id": "applying-the-laplace-transform-method-7-4-4-15",
  "level": "2",
  "url": "applying-the-laplace-transform-method-7.html#applying-the-laplace-transform-method-7-4-4-15",
  "type": "Exercise",
  "number": "24",
  "title": "",
  "body": "             "
},
{
  "id": "applying-the-laplace-transform-method-7-4-4-16",
  "level": "2",
  "url": "applying-the-laplace-transform-method-7.html#applying-the-laplace-transform-method-7-4-4-16",
  "type": "Exercise",
  "number": "25",
  "title": "",
  "body": "             "
},
{
  "id": "applying-the-laplace-transform-method-7-4-4-17",
  "level": "2",
  "url": "applying-the-laplace-transform-method-7.html#applying-the-laplace-transform-method-7-4-4-17",
  "type": "Exercise",
  "number": "26",
  "title": "",
  "body": "             "
},
{
  "id": "applying-the-laplace-transform-method-7-4-5-2",
  "level": "2",
  "url": "applying-the-laplace-transform-method-7.html#applying-the-laplace-transform-method-7-4-5-2",
  "type": "Exercise",
  "number": "27",
  "title": "",
  "body": "             "
},
{
  "id": "applying-the-laplace-transform-method-7-4-5-3",
  "level": "2",
  "url": "applying-the-laplace-transform-method-7.html#applying-the-laplace-transform-method-7-4-5-3",
  "type": "Exercise",
  "number": "28",
  "title": "",
  "body": "   First, factor the denominator as . Then, decompose the expression into . Solving for and , you get the inverse Laplace transform as .   "
},
{
  "id": "applying-the-laplace-transform-method-7-4-5-4",
  "level": "2",
  "url": "applying-the-laplace-transform-method-7.html#applying-the-laplace-transform-method-7-4-5-4",
  "type": "Exercise",
  "number": "29",
  "title": "",
  "body": "             "
},
{
  "id": "applying-the-laplace-transform-method-7-4-5-5",
  "level": "2",
  "url": "applying-the-laplace-transform-method-7.html#applying-the-laplace-transform-method-7-4-5-5",
  "type": "Exercise",
  "number": "30",
  "title": "",
  "body": "             "
},
{
  "id": "applying-the-laplace-transform-method-7-4-5-6",
  "level": "2",
  "url": "applying-the-laplace-transform-method-7.html#applying-the-laplace-transform-method-7-4-5-6",
  "type": "Exercise",
  "number": "31",
  "title": "",
  "body": "   Note that as the quadratic term in the denominator does not factor, the denominator contains an irreducible quadratic factor and a repeated linear factor. We'll proceed by simplifying this complicated fraction with a Partial Fraction Decomposition of the form   You may also consider using technology to find a partial fraction decomposition. You should get  Click here for the details     Equating coefficients gives us four equations in four unknowns.     With the partial fraction decomposition in hand, we are prepared to take the inverse Laplace transform, using the same types of algebraic manipulations demonstrated in the previous examples.    "
},
{
  "id": "applying-the-laplace-transform-method-7-4-6-3",
  "level": "2",
  "url": "applying-the-laplace-transform-method-7.html#applying-the-laplace-transform-method-7-4-6-3",
  "type": "Exercise",
  "number": "32",
  "title": "",
  "body": "        "
},
{
  "id": "applying-the-laplace-transform-method-7-4-6-4",
  "level": "2",
  "url": "applying-the-laplace-transform-method-7.html#applying-the-laplace-transform-method-7-4-6-4",
  "type": "Exercise",
  "number": "33",
  "title": "",
  "body": "        "
},
{
  "id": "applying-the-laplace-transform-method-7-5-3",
  "level": "2",
  "url": "applying-the-laplace-transform-method-7.html#applying-the-laplace-transform-method-7-5-3",
  "type": "Exercise",
  "number": "1",
  "title": "",
  "body": "   We begin by taking the Laplace transform and substituting in the initial conditions. Now we aim to solve for so we use algebra to rearrange as follows. We need to do a partial fraction decomposition before we can take the inverse LT. Equating the coefficients of like-terms yields, we can solve for  , an . Hence we have Now we need only take the inverse LT to find the solution.         "
},
{
  "id": "applying-the-laplace-transform-method-7-5-4",
  "level": "2",
  "url": "applying-the-laplace-transform-method-7.html#applying-the-laplace-transform-method-7-5-4",
  "type": "Exercise",
  "number": "2",
  "title": "",
  "body": "   We begin by taking the Laplace transform and substituting in the initial conditions. Now we aim to solve for so we use algebra to rearrange as follows. We need to do a partial fraction decomposition before we can take the inverse LT. Equating the coefficients of like-terms yields, we can solve for  , an . Hence, we have \\begin{equation} Y(s) = \\dfrac{-1}{s+1} + \\dfrac{3s+5}{s^2 - 2s + 5}. \\label{Y_of_s} \\end{equation} We need to take the inverse Laplace Transform to fin We need to complete the square on the irreducible quadratic term as follows. We need to transform the second term, as follows, so we can use L8 and L7 on the Laplace transform table. We are now prepared to take the inverse LT of equation \\ref{Y_of_s} to get the solution to the IVP.         "
},
{
  "id": "applying-the-laplace-transform-method-7-5-5",
  "level": "2",
  "url": "applying-the-laplace-transform-method-7.html#applying-the-laplace-transform-method-7-5-5",
  "type": "Exercise",
  "number": "3",
  "title": "",
  "body": "   Apply the Laplace transform to both sides of the equation: . Using the properties of the Laplace transform for derivatives, we have: . Substitute the initial conditions and : . Combine like-terms: . Solve for : . Factor the denominator: . Use partial fraction decomposition to find the inverse Laplace transform: . Solve for and : . Finally, take the inverse Laplace transform to find : .        "
},
{
  "id": "applying-the-laplace-transform-method-7-5-6",
  "level": "2",
  "url": "applying-the-laplace-transform-method-7.html#applying-the-laplace-transform-method-7-5-6",
  "type": "Exercise",
  "number": "4",
  "title": "",
  "body": "   Apply the Laplace transform to both sides: . Use the properties of the Laplace transform: . Substitute the initial condition : . Solve for : . Use partial fraction decomposition: . Find and : . Inverse Laplace transform gives: .        "
},
{
  "id": "applying-the-laplace-transform-method-7-5-7",
  "level": "2",
  "url": "applying-the-laplace-transform-method-7.html#applying-the-laplace-transform-method-7-5-7",
  "type": "Exercise",
  "number": "5",
  "title": "",
  "body": "   Applying the Laplace transform to both sides, we get:   Substituting the initial condition , the equation becomes:   Rearranging and solving for :    We can now decompose the second term using partial fractions:   Solving for and , we get and . Therefore:    Taking the inverse Laplace transform, we obtain the solution:    "
},
{
  "id": "applying-the-laplace-transform-method-7-5-8",
  "level": "2",
  "url": "applying-the-laplace-transform-method-7.html#applying-the-laplace-transform-method-7-5-8",
  "type": "Exercise",
  "number": "6",
  "title": "",
  "body": "   Applying the Laplace transform:   Substituting the initial conditions:   Solving for :   After rearranging and solving, the inverse Laplace transform gives:    "
},
{
  "id": "applying-the-laplace-transform-method-7-5-9",
  "level": "2",
  "url": "applying-the-laplace-transform-method-7.html#applying-the-laplace-transform-method-7-5-9",
  "type": "Exercise",
  "number": "7",
  "title": "",
  "body": "   Applying the Laplace transform:   Solving for and then applying the inverse Laplace transform gives the solution.   "
},
{
  "id": "applying-the-laplace-transform-method-7-5-10",
  "level": "2",
  "url": "applying-the-laplace-transform-method-7.html#applying-the-laplace-transform-method-7-5-10",
  "type": "Exercise",
  "number": "8",
  "title": "",
  "body": "   Applying the Laplace transform and solving the algebraic equation will yield the solution in the -domain, which can then be inverted to find .   "
},
{
  "id": "applying-the-laplace-transform-method-7-5-11",
  "level": "2",
  "url": "applying-the-laplace-transform-method-7.html#applying-the-laplace-transform-method-7-5-11",
  "type": "Exercise",
  "number": "9",
  "title": "",
  "body": "   We intend to use Laplace transforms to solve this IVP, but we need to verify that this is an appropriate technique. We can verify that this is  the DE is linear,  the DE has constant coefficients, and  initial conditions are provided.    Hence, it is appropriate to proceed with the Laplace transform solution technique. We also note that is the dependent variable and is the independent variable, so our goal is to find a function that satisfies the DE and the initial conditions.   Margin note: We could actually use the method of undetermined coefficients. You are encouraged to do this and verify that the solution is the same.   We begin by taking the Laplace transform of both sides of the DE, using linearity as needed.   Now we use the provided initial conditions.   Next we will use algebra to solve for    We need to find the inverse Laplace transform of both sides of the equation. In order to do that, we apply partial fraction decomposition to the rational function on the right hand side, giving   We have a repeated linear factor, , and two other linear factors, so the form of the partial fraction decomposition can be written as   (PFD details...can be omitted?)    Hence, we have   Now we are prepared to take the inverse Laplace transform.   Thus, we have found the desired unknown function   Optional: verify the solution    We also verify the initial conditions:    "
},
{
  "id": "applying-the-laplace-transform-method-7-5-12",
  "level": "2",
  "url": "applying-the-laplace-transform-method-7.html#applying-the-laplace-transform-method-7-5-12",
  "type": "Exercise",
  "number": "10",
  "title": "",
  "body": "   *   "
},
{
  "id": "applying-the-laplace-transform-method-7-5-13",
  "level": "2",
  "url": "applying-the-laplace-transform-method-7.html#applying-the-laplace-transform-method-7-5-13",
  "type": "Exercise",
  "number": "11",
  "title": "",
  "body": "   *   "
},
{
  "id": "applying-the-laplace-transform-method-7-5-14",
  "level": "2",
  "url": "applying-the-laplace-transform-method-7.html#applying-the-laplace-transform-method-7-5-14",
  "type": "Exercise",
  "number": "12",
  "title": "",
  "body": "    . Applying to both sides:    . Next, we isolate on one side of the equation:    . We need to express as a sum of functions that match known forms in the Laplace transform table. We see from the last equation, is ready to go, but requires partial fraction decomposition. We start by writing down the form of the decomposition,  Now, we find and by plugging in values of :        :             :             Thus, the prepared is    . Finally, we apply the backward step to get the solution:    "
},
{
  "id": "applying-the-laplace-transform-method-7-5-15",
  "level": "2",
  "url": "applying-the-laplace-transform-method-7.html#applying-the-laplace-transform-method-7-5-15",
  "type": "Exercise",
  "number": "13",
  "title": "",
  "body": "    . Applying to both sides: where and  ,  .  So the complete forward transform is    . Next, we isolate on one side of the equation:    . Now, we need to express as a sum of functions that match known forms in the Laplace transform table. This can be simplified slightly by first combining the terms in as a single fraction, like so . Plugging this back into the equation for gives the new , and we are ready to apply partial fraction decomposition. The form of the decomposition is Now, we find and by plugging in values of ,        :             :             :                   Thus, the prepared is    . Finally, we perform the backward step to get the solution:    "
},
{
  "id": "applying-the-laplace-transform-method-7-5-16",
  "level": "2",
  "url": "applying-the-laplace-transform-method-7.html#applying-the-laplace-transform-method-7-5-16",
  "type": "Exercise",
  "number": "14",
  "title": "",
  "body": "    . Applying to both sides: where and  ,  .  So the complete forward transform is:    . Next, we isolate on one side of the equation:    . Now, we need to express as a sum of functions that match known forms in the Laplace transform table, which requires partial fraction decomposition. We start by writing down the form of the decomposition, Now, we find and by plugging in values of ,    :            :            :            So the updated is . Note, the second term is not yet ready and we need to complete the square of its denominator before we can do the backward step.    . Now for the backward step to get the solution:    "
},
{
  "id": "basic-unit-step-function",
  "level": "1",
  "url": "basic-unit-step-function.html",
  "type": "Section",
  "number": "",
  "title": "The Basic Unit Step Function",
  "body": " The Basic Unit Step Function   In differential equations, we often need a simple mathematical switch that can turn a function on or off at a specific time. The simplest of these is the unit step function Also called the Heaviside function. , which jumps from to at a chosen point.    📖❓ Function Output   Consider the functions defined by            Give the output of and for the following values of .                                            Unit Step Function    The unit step function is denoted and is defined as: This function flips on at .            Think of the unit step function as an ON–OFF switch. Before , the switch is (OFF); after , it is (ON). When you multiply another function by , that function is either turned OFF (multiplied by 0) or turned ON (multiplied by 1).   📖❓ Unit Step Function Outputs   The unit step function accepts any real number as input. Which of the following best describes its possible outputs?    Only 0  Only 1  Only 0 and 1  Any positive number  Any real number     Switching ON a Parabola at   Consider the function . Describe the difference between and and give a graph of both.    The function, , is a parabola defined for all .  Because when and otherwise, multiplying by  switches off the parabola for and switches it on at . In piecewise form:   and here are the graphs:  Graph of ( left ) and ( right ).                 This example shows how multiplying by acts like a switch: the parabola is OFF for , then instantly turns ON at .   📖❓ Output of   Let . Find the value of at each point:         (a)       (b)       (c)       (d)       Remember: is before and afterward.           Saying that a Function is ON or OFF  Throughout this chapter, we'll often refer to a function as ON or OFF . Here's what we mean:  The unit step function itself is ON when it equals and OFF when it equals .  A function multiplied by the unit step is ON when multiplied by and OFF when multiplied by .     The unit step function is the foundation for all step function work in this chapter. Next, we'll see how to shift the step so it can turn things on at times other than .    The unit step function jumps from to at .  Multiplying by  turns off a function before and turns it on after.      Check your understanding with these questions on unit step functions.    "
},
{
  "id": "prereading-1-unit-step",
  "level": "2",
  "url": "basic-unit-step-function.html#prereading-1-unit-step",
  "type": "Checkpoint",
  "number": "179",
  "title": "📖❓ Function Output.",
  "body": " 📖❓ Function Output   Consider the functions defined by            Give the output of and for the following values of .                                          "
},
{
  "id": "def-unit-step",
  "level": "2",
  "url": "basic-unit-step-function.html#def-unit-step",
  "type": "📙 Definition",
  "number": "180",
  "title": "Unit Step Function.",
  "body": " Unit Step Function    The unit step function is denoted and is defined as: This function flips on at .           "
},
{
  "id": "chkpt-1-unit-step",
  "level": "2",
  "url": "basic-unit-step-function.html#chkpt-1-unit-step",
  "type": "Checkpoint",
  "number": "181",
  "title": "📖❓ Unit Step Function Outputs.",
  "body": " 📖❓ Unit Step Function Outputs   The unit step function accepts any real number as input. Which of the following best describes its possible outputs?    Only 0  Only 1  Only 0 and 1  Any positive number  Any real number   "
},
{
  "id": "basic-unit-step-function-7",
  "level": "2",
  "url": "basic-unit-step-function.html#basic-unit-step-function-7",
  "type": "🌌 Example",
  "number": "182",
  "title": "Switching ON a Parabola at <span class=\"process-math\">\\(t = 0\\)<\/span>.",
  "body": " Switching ON a Parabola at   Consider the function . Describe the difference between and and give a graph of both.    The function, , is a parabola defined for all .  Because when and otherwise, multiplying by  switches off the parabola for and switches it on at . In piecewise form:   and here are the graphs:  Graph of ( left ) and ( right ).                "
},
{
  "id": "chkpt-2-unit-step",
  "level": "2",
  "url": "basic-unit-step-function.html#chkpt-2-unit-step",
  "type": "Checkpoint",
  "number": "184",
  "title": "📖❓ Output of <span class=\"process-math\">\\(f(t) \\cdot u_c(t)\\)<\/span>.",
  "body": " 📖❓ Output of   Let . Find the value of at each point:         (a)       (b)       (c)       (d)       Remember: is before and afterward.         "
},
{
  "id": "note-on-off-language",
  "level": "2",
  "url": "basic-unit-step-function.html#note-on-off-language",
  "type": "📝",
  "number": "185",
  "title": "Saying that a Function is ON or OFF.",
  "body": " Saying that a Function is ON or OFF  Throughout this chapter, we'll often refer to a function as ON or OFF . Here's what we mean:  The unit step function itself is ON when it equals and OFF when it equals .  A function multiplied by the unit step is ON when multiplied by and OFF when multiplied by .    "
},
{
  "id": "basic-unit-step-function-wrapup",
  "level": "2",
  "url": "basic-unit-step-function.html#basic-unit-step-function-wrapup",
  "type": "🗝️ Key Takeaways...",
  "number": "",
  "title": "",
  "body": "  The unit step function jumps from to at .  Multiplying by  turns off a function before and turns it on after.   "
},
{
  "id": "basic-unit-step-function-check",
  "level": "2",
  "url": "basic-unit-step-function.html#basic-unit-step-function-check",
  "type": "🤔💭 Check Your Understanding",
  "number": "186",
  "title": "",
  "body": "  Check your understanding with these questions on unit step functions.   "
},
{
  "id": "unit-step-functions",
  "level": "1",
  "url": "unit-step-functions.html",
  "type": "Section",
  "number": "",
  "title": "Unit Step Function Variants",
  "body": " Unit Step Function Variants   The basic unit step switches a function on at . But what if you need the switch to flip later, flip off, or even turn on for just a short while? This subsection introduces three key variants:   — switches ON at a chosen time .  — switches OFF at time .  — switches ON for a window from to .   Together, these act like a complete toolkit for modeling stepwise ON\/OFF behavior in real systems.    Shifted Unit Step Function  Prep-Questions   📖❓True or False: Shifting a Function   The graph of is the same as the graph of shifted right units.    Replacing with in shifts the graph of ANY function 3 units to the right, not just .     📖❓When Does It Switch?   The unit step function jumps from (OFF) to (ON) at  .        Sometimes you need the step to turn ON at a different time. The shifted unit step function , written , is simply the basic step shifted right (if ) or left (if ):   📜 Shifted Unit Step Function     Before , is OFF; after , it turns ON. is not a new function, it is just the shorthand for a shifted version of .              Exploring the Effect of  Consider the product of the parabolic function and the shifted unit step function . Use the tool to see how changing affects the ON\/OFF behavior of the parabola. Instructions   Hover over the labels , and to highlight its graph.  Drag the value of , initially at , along the axis.         📖❓ Effect of on a Function   What does multiplying a function by do?     It forces OFF before , then switches it ON at .  Exactly! Multiplying by means the function is 0 before and normal after.    It multiplies by .  Not quite. is not a scaling factor, it's a switching function.    It adds to .  Nope, does not alter the function's output directly. It controls when it turns on.    It delays by 5 seconds.  Close, but that's what happens when you write . Multiplying by just turns it ON at .      So, to activate a function at , simply multiply it by . This switch-like behavior will be useful later when we write piecewise functions in terms of .    Reversed Unit Step Function  Prep-Questions   📖❓ When Does It Switch?   Recall that   Complete the logical statement by filling-in the missing numbers.  Since    before , and  after ,  then, the expression    before , and  after ,           📖❓ Understanding ON\/OFF Language   What does it mean when we say a function is \"OFF\" for ?      That becomes negative for .    OFF doesn't mean negative. It means the function is multiplied by , it's gone.      That stops increasing after .    Not quite. Saying a function is OFF means it's zeroed out, not just leveled off.      That is multiplied by 0 for all .    Exactly. OFF means the function is inactive, because it's being multiplied by 0.      That is undefined for .    Nope, OFF doesn't mean undefined. The function is still defined, but turned off by multiplication with .       What if you need the opposite behavior — a switch that turns a function OFF at ?  This reverse behavior can be built using the unit step function itself. Since jumps from 0 to 1 at , we can reverse the switch with the subtraction: .   📜 Reversed Unit Step Function    Before , is ON; after , it turns OFF.           Switching OFF an Exponential   Describe the product, below, and express it in piecewise form.      Here, the exponential function is ON before and switches OFF afterward. In piecewise form, this looks like:             📖❓Reversed Switch Logic   Which of the following is equivalent to the function        This would turn ON at , but here we want it to turn OFF there.       Correct! is ON before and OFF afterward, matching the piecewise definition.       This starts a different function at . It's neither nor OFF before then.       This is just a shifted version of , not a piecewise function that shuts off.      With both and in hand, you can now switch functions ON or OFF exactly when you need. Next, we will cover the last switch that turns ON functions for a limited window of time, over a finite interval.    Windowed Unit Step Function  Prep-Questions   📖❓ True or False: Interval Notation   The interval includes but not .    The square bracket means included and the parenthesis means excluded , so is in the interval, but is not.     📖❓ When Is the Window ON?   Let's compare two unit step functions:   Fill in the blanks with the value of and for the following intervals:                          Now use these values to fill in the values for the expression .                                  The final variant combines the first two ideas to create a time window where a function is ON for a limited interval, then turns OFF again.  We can build this behavior by subtracting two step functions:  turns ON at .  turns ON at , flipping us back to OFF since we are subtracting.  So the difference is the ON-window we need.   📜 Windowed Unit Step Function    Between and , is ON and OFF otherwise.          This windowed switch models limited bursts of activity — like a force that acts for a few seconds, then disappears.   Exploring the Effect of and                           📖❓ Selecting the ON-Interval Expression   Which expression represents a function, , that is active (ON) on the interval and elsewhere?      Correct!     Incorrect     Incorrect     Incorrect      As with previous step functions, this step function switches ON any function over the interval and OFF everywhere else.   Switching ON a Sine Wave for a While   Write the function that equals only on and is elsewhere, using step functions.    Since this function is only on a finite window, we multiply it by the following difference of shifted unit step functions: .  In piecewise form, this function is   and its graph is given by          Explore the Product   Instructions:   Hover over to hightlight the graph of .  Hovering over or highlights their individual graph.  Drag the value of and along the axis.         Together, these three step function variants give you complete control over when a function is active. In the next section, we'll combine them to rewrite entire piecewise functions in a single, neat formula.     What Does Do?   The unit step function is multiplied by another function . What does do in this context?     It switches ON at and keeps it ON forever.  Correct — equals 0 before and 1 afterward.    It switches OFF at .  Not quite — that would be .    It reverses the direction of at .  No — there's no reverse here, just ON\/OFF switching.    It multiplies by after .  No — is either 0 or 1; it doesn't add factors of .       "
},
{
  "id": "shifted-step-2",
  "level": "2",
  "url": "unit-step-functions.html#shifted-step-2",
  "type": "Checkpoint",
  "number": "187",
  "title": "Prep-Questions.",
  "body": "Prep-Questions   📖❓True or False: Shifting a Function   The graph of is the same as the graph of shifted right units.    Replacing with in shifts the graph of ANY function 3 units to the right, not just .     📖❓When Does It Switch?   The unit step function jumps from (OFF) to (ON) at  .       "
},
{
  "id": "shifted-step-3",
  "level": "2",
  "url": "unit-step-functions.html#shifted-step-3",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "shifted unit step function "
},
{
  "id": "shifted-step-5",
  "level": "2",
  "url": "unit-step-functions.html#shifted-step-5",
  "type": "🎮❓Interactive Question",
  "number": "188",
  "title": "Exploring the Effect of <span class=\"process-math\">\\(c\\)<\/span>.",
  "body": " Exploring the Effect of  Consider the product of the parabolic function and the shifted unit step function . Use the tool to see how changing affects the ON\/OFF behavior of the parabola. Instructions   Hover over the labels , and to highlight its graph.  Drag the value of , initially at , along the axis.         📖❓ Effect of on a Function   What does multiplying a function by do?     It forces OFF before , then switches it ON at .  Exactly! Multiplying by means the function is 0 before and normal after.    It multiplies by .  Not quite. is not a scaling factor, it's a switching function.    It adds to .  Nope, does not alter the function's output directly. It controls when it turns on.    It delays by 5 seconds.  Close, but that's what happens when you write . Multiplying by just turns it ON at .     "
},
{
  "id": "reversed-step-2",
  "level": "2",
  "url": "unit-step-functions.html#reversed-step-2",
  "type": "Checkpoint",
  "number": "189",
  "title": "Prep-Questions.",
  "body": "Prep-Questions   📖❓ When Does It Switch?   Recall that   Complete the logical statement by filling-in the missing numbers.  Since    before , and  after ,  then, the expression    before , and  after ,           📖❓ Understanding ON\/OFF Language   What does it mean when we say a function is \"OFF\" for ?      That becomes negative for .    OFF doesn't mean negative. It means the function is multiplied by , it's gone.      That stops increasing after .    Not quite. Saying a function is OFF means it's zeroed out, not just leveled off.      That is multiplied by 0 for all .    Exactly. OFF means the function is inactive, because it's being multiplied by 0.      That is undefined for .    Nope, OFF doesn't mean undefined. The function is still defined, but turned off by multiplication with .      "
},
{
  "id": "reversed-step-6",
  "level": "2",
  "url": "unit-step-functions.html#reversed-step-6",
  "type": "🌌 Example",
  "number": "190",
  "title": "Switching OFF an Exponential.",
  "body": " Switching OFF an Exponential   Describe the product, below, and express it in piecewise form.      Here, the exponential function is ON before and switches OFF afterward. In piecewise form, this looks like:           "
},
{
  "id": "chkpt-1-reversed-unit-step",
  "level": "2",
  "url": "unit-step-functions.html#chkpt-1-reversed-unit-step",
  "type": "Checkpoint",
  "number": "191",
  "title": "📖❓Reversed Switch Logic.",
  "body": " 📖❓Reversed Switch Logic   Which of the following is equivalent to the function        This would turn ON at , but here we want it to turn OFF there.       Correct! is ON before and OFF afterward, matching the piecewise definition.       This starts a different function at . It's neither nor OFF before then.       This is just a shifted version of , not a piecewise function that shuts off.     "
},
{
  "id": "windowed-step-2",
  "level": "2",
  "url": "unit-step-functions.html#windowed-step-2",
  "type": "Checkpoint",
  "number": "192",
  "title": "Prep-Questions.",
  "body": "Prep-Questions   📖❓ True or False: Interval Notation   The interval includes but not .    The square bracket means included and the parenthesis means excluded , so is in the interval, but is not.     📖❓ When Is the Window ON?   Let's compare two unit step functions:   Fill in the blanks with the value of and for the following intervals:                          Now use these values to fill in the values for the expression .                                 "
},
{
  "id": "windowed-step-7",
  "level": "2",
  "url": "unit-step-functions.html#windowed-step-7",
  "type": "🎮❓Interactive Question",
  "number": "193",
  "title": "Exploring the Effect of <span class=\"process-math\">\\(c\\)<\/span> and <span class=\"process-math\">\\(d\\)<\/span>.",
  "body": " Exploring the Effect of and                           📖❓ Selecting the ON-Interval Expression   Which expression represents a function, , that is active (ON) on the interval and elsewhere?      Correct!     Incorrect     Incorrect     Incorrect     "
},
{
  "id": "windowed-step-9",
  "level": "2",
  "url": "unit-step-functions.html#windowed-step-9",
  "type": "🌌 Example",
  "number": "194",
  "title": "Switching ON a Sine Wave for a While.",
  "body": " Switching ON a Sine Wave for a While   Write the function that equals only on and is elsewhere, using step functions.    Since this function is only on a finite window, we multiply it by the following difference of shifted unit step functions: .  In piecewise form, this function is   and its graph is given by        "
},
{
  "id": "windowed-step-10",
  "level": "2",
  "url": "unit-step-functions.html#windowed-step-10",
  "type": "🎮 Interactive",
  "number": "195",
  "title": "Explore the Product <span class=\"process-math\">\\(f(t) \\cdot (u_c(t)-u_d(t))\\)<\/span>.",
  "body": " Explore the Product   Instructions:   Hover over to hightlight the graph of .  Hovering over or highlights their individual graph.  Drag the value of and along the axis.       "
},
{
  "id": "chkpt-uc-concept",
  "level": "2",
  "url": "unit-step-functions.html#chkpt-uc-concept",
  "type": "Reading Question",
  "number": "1",
  "title": "What Does <span class=\"process-math\">\\(u_c(t)\\)<\/span> Do?",
  "body": " What Does Do?   The unit step function is multiplied by another function . What does do in this context?     It switches ON at and keeps it ON forever.  Correct — equals 0 before and 1 afterward.    It switches OFF at .  Not quite — that would be .    It reverses the direction of at .  No — there's no reverse here, just ON\/OFF switching.    It multiplies by after .  No — is either 0 or 1; it doesn't add factors of .    "
},
{
  "id": "piecewise-functions",
  "level": "1",
  "url": "piecewise-functions.html",
  "type": "Section",
  "number": "",
  "title": "Piecewise Functions",
  "body": " Piecewise Functions   Piecewise functions can feel disorganized at first since they are defined in separate chunks across different intervals. But there's a powerful way to express them as a clean formula: by using step functions to switch each piece ON or OFF at the right time.    What Makes a Function Piecewise?  A piecewise function is any function built from different parts over specific regions of its domain. For example:            Each piece has its own behavior, but together they create the entire function. The question is: can we rewrite these separate pieces so that the whole function is described with one equation, instead of a case-by-case breakdown?    Thinking in Terms of Switches   📖❓ Match Step Functions to Their Piecewise Definitions   By dragging from left to right, match the function on the left to the equivalent piecewise function on the right. Note that, .                       Every step function you've seen can be thought of as a simple ON–OFF switch:   With these step functions, you can literally program when each part of a function is ON and when it is OFF.  For example, the three pieces of above can be controlled like this:    Three pieces of                       Rewriting a Piecewise Function in Step Form   📖❓ Matching Step Types to Intervals   Match each time interval to the type of unit step expression that would activate a function over that range.    These pairings are essential when converting a piecewise function into unit step form. The form you choose depends entirely on where each piece is active.                       shows three non-overlapping regions. That means for any value of , only one piece of the function is active. Because of this, we can write as a single sum:  . Let's test this step-function version by plugging in a few values and seeing which terms turn ON and which turn OFF.   Like the piecewise form, plugging a specific value into was the same as plugging it into just one of its three pieces. This observation highlights why the unit step form is equivalent to the piecewise form.   📜 Converting Piecewise Form to Unit Step Form  Here's a strategy for converting any piecewise function into step form:  Find the intervals where each piece is active.  Match the active interval for each piece to its step function switch:     Piece  Active Interval  Step Function Switch                    Multiply the piece by its switch, then add them all together.      📖❓ Which Term Matches the Interval?   You're converting a piecewise function into step form. Which term below correctly captures a piece of the function that is active only for ?       This turns ON before and OFF after. We want something that activates at and deactivates at .       This starts at and keeps going. It doesn't define an interval, it defines a forever switch.       Exactly. This is the window function that's ON from to and OFF otherwise.       Close, but this would result in on , not . Try reversing the order of the terms.      Now you're ready to try a few full conversions yourself.   Using to Turn ON Sine    Rewrite the function using a unit step function.     Since turns ON at , we multiply it by :   Plugging in , confirms we arrived at the correct piecewise function: and has the following graph    Graph of            Converting to Unit Step Form   Rewrite the following piecewise functions using unit step notation:            The first piece is active before , so we use . The second piece starts at , so we use . So:   We can also combine terms with the same step: .    There are three pieces:  is ON from → use  is ON from → use  is ON for → use , though it contributes nothing    Putting it together:   Distribute and combine like unit step terms:     From here on out, we'll use this compact step-function form whenever we need to handle piecewise forcing functions. This also unlocks the Laplace transform method for problems that contain piecewise forcing functions.     Step functions are mathematical ON\/OFF switches that let you control which piece is active.  By multiplying each piece by the right step expression, you can combine them into one neat formula.     Check Your Understanding    Piecewise to Laplace   Match each unit-step form to its corresponding piecewise form.                                "
},
{
  "id": "unit-step-switch-mindset-2",
  "level": "2",
  "url": "piecewise-functions.html#unit-step-switch-mindset-2",
  "type": "Checkpoint",
  "number": "196",
  "title": "📖❓ Match Step Functions to Their Piecewise Definitions.",
  "body": " 📖❓ Match Step Functions to Their Piecewise Definitions   By dragging from left to right, match the function on the left to the equivalent piecewise function on the right. Note that, .                      "
},
{
  "id": "intro-piecewise-function-pieces",
  "level": "2",
  "url": "piecewise-functions.html#intro-piecewise-function-pieces",
  "type": "Figure",
  "number": "197",
  "title": "",
  "body": " Three pieces of                    "
},
{
  "id": "prep-1-piecewise-to-step",
  "level": "2",
  "url": "piecewise-functions.html#prep-1-piecewise-to-step",
  "type": "Checkpoint",
  "number": "198",
  "title": "📖❓ Matching Step Types to Intervals.",
  "body": " 📖❓ Matching Step Types to Intervals   Match each time interval to the type of unit step expression that would activate a function over that range.    These pairings are essential when converting a piecewise function into unit step form. The form you choose depends entirely on where each piece is active.                     "
},
{
  "id": "chkpt-1-piecewise-to-step",
  "level": "2",
  "url": "piecewise-functions.html#chkpt-1-piecewise-to-step",
  "type": "Checkpoint",
  "number": "199",
  "title": "📖❓ Which Term Matches the Interval?",
  "body": " 📖❓ Which Term Matches the Interval?   You're converting a piecewise function into step form. Which term below correctly captures a piece of the function that is active only for ?       This turns ON before and OFF after. We want something that activates at and deactivates at .       This starts at and keeps going. It doesn't define an interval, it defines a forever switch.       Exactly. This is the window function that's ON from to and OFF otherwise.       Close, but this would result in on , not . Try reversing the order of the terms.     "
},
{
  "id": "piecewise-rewriting-11",
  "level": "2",
  "url": "piecewise-functions.html#piecewise-rewriting-11",
  "type": "🌌 Example",
  "number": "200",
  "title": "Using <span class=\"process-math\">\\(u_c(t)\\)<\/span> to Turn ON Sine.",
  "body": " Using to Turn ON Sine    Rewrite the function using a unit step function.     Since turns ON at , we multiply it by :   Plugging in , confirms we arrived at the correct piecewise function: and has the following graph    Graph of          "
},
{
  "id": "piecewise-to-step-ex-1",
  "level": "2",
  "url": "piecewise-functions.html#piecewise-to-step-ex-1",
  "type": "🌌 Example",
  "number": "202",
  "title": "Converting to Unit Step Form.",
  "body": " Converting to Unit Step Form   Rewrite the following piecewise functions using unit step notation:            The first piece is active before , so we use . The second piece starts at , so we use . So:   We can also combine terms with the same step: .    There are three pieces:  is ON from → use  is ON from → use  is ON for → use , though it contributes nothing    Putting it together:   Distribute and combine like unit step terms:    "
},
{
  "id": "piecewise-functions-wrapup",
  "level": "2",
  "url": "piecewise-functions.html#piecewise-functions-wrapup",
  "type": "🗝️ Key Takeaways...",
  "number": "",
  "title": "",
  "body": "  Step functions are mathematical ON\/OFF switches that let you control which piece is active.  By multiplying each piece by the right step expression, you can combine them into one neat formula.   "
},
{
  "id": "piecewise-functions-cyu-1",
  "level": "2",
  "url": "piecewise-functions.html#piecewise-functions-cyu-1",
  "type": "Reading Question",
  "number": "1",
  "title": "Piecewise to Laplace.",
  "body": " Piecewise to Laplace   Match each unit-step form to its corresponding piecewise form.                             "
},
{
  "id": "laplace-step-rules",
  "level": "1",
  "url": "laplace-step-rules.html",
  "type": "Section",
  "number": "",
  "title": "Laplace Transform Rules for Step Functions",
  "body": " Laplace Transform Rules for Step Functions   Up to this point, you've seen how unit step functions can switch pieces of a function ON and OFF at the right times. But to actually use these functions in solving differential equations, we need to understand how they behave when we take their Laplace transform.  This section develops the Laplace transform rules for unit step functions:   – how to transform a single step switch.  – how to transform a function that is switched ON at .  – how to transform a shifted function that starts at .   These rules are the backbone for handling piecewise functions with Laplace methods.    📖❓ How Do Inputs Shift?   The function is the same as shifted left by 2 units.    Replacing with shifts the graph to the left by units. This is the opposite direction compared to .     Transform of  We begin with the Laplace transform of a single shifted unit step switch, . Finding its transform lays the groundwork for the more general rules that follow.  The Laplace transform of a shifted unit step function is as follows:   📜 Laplace Transform of     💡 Derivation of  Start with the definition of the Laplace transform:   Recall that: which means the integrand is zero until and equals afterward.  That trims our integral down since:   Evaluate the improper integral as a limit:   As long as , the term goes to zero as , leaving:      This result shows that the shifted unit step function introduces an exponential factor in the Laplace domain. You will use it to transform terms of the form , where is a constant. For example,    📖❓Finding the Laplace Transform of   What is the Laplace transform of ?       Close, but is a variable in the Laplace domain, it doesn't get replaced by a number here.       That's the formula: , and here .       That's the transform of , not a step function. The exponential in appears in the numerator, not the exponent of the input.       That's an incorrect inversion of the formula. The exponential should be in the numerator, and in the denominator.        Transform of  The next rule provides a formula for the product of a step function and a function of and will be the primary tool used when forward transforming a piecewise function.   📜 Laplace Transform of    💡 Derivation of  Start with the Laplace transform definition:   Since for , the integral simplifies to:   This new integral looks a lot like the Laplace transform of , but it starts at instead of . Luckily, we can shift the graph of to the left units to force the integral start back at .  Note: Shifting a function units to the left means adding to all of the inputs:   Using this idea, leads to the desired transform:   Details   : Shifting to the left units makes it and starts the integral at .   : Exponential Property    : Factor out the constant, , as we are integrating in .   Therefore,      Let's try this on a few examples to see how the rule works in practice.   Transform of   Compute the Laplace transform of .    For this problem, we have . So the rule becomes: , where, in our case, , so .  Plugging and into the rule shows us that   So all we have left to do is compute : and plug it into (⭐), to complete the transform:     Check Your Understanding   📖❓Apply the Rule for   What is the Laplace transform of ?       Close, but we must shift the input inside the function, not leave it as .       Correct. The shift rule says to replace with inside the function and multiply by .       Be careful, shifts the function right, but the rule calls for when we delay the function using .       This uses the right format, but doesn't evaluate the Laplace transform. We're looking for a formula that includes the exponential shift.       📖❓Next Step for the Rule   Suppose you want use L to find . You note that and update the rule as follows: . What's the best next step from here?     Identify , find .  Correct — you need to compute .    Find .  Finding isn't needed for this rule.    Find .  This does not help you compute .    Rewrite the rule by moving to the denominator as .  You could do this, but there is a better answer.        Transform of  Finally, we cover the last rule that will be particularly useful for inverting expressions in the Laplace domain (i.e., step 3 ) that are associated with step functions.   📜 Laplace Transform of     Derivation of  In terms of the definition of the Laplace transform, we want to show:   To show this, we will start with the integral on the left and show it leads to the integral on the right.   Details   : on makes the lower limit of the integral .   : Shifting to the left units makes it and starts the integral at .   : Use the exponential property and factor out the constant, , as we are integrating in .   Thus, we have shown where .     Although you can use this for forward transforms, its main utility is for backward transforms since it only requires you to match terms that look like where is one of the common Laplace transforms from the same table. We will explore later when we invert terms in the Laplace domain containing .   📖❓Identify the Shifted Input   Select the expression that goes in the blank.       Good! The rule requires replacing with when multiplying by .     Not quite — you need to shift the input to because the step turns ON at .     Incorrect, try again.     Incorrect, try again.      With these three rules, we can now transform any piecewise function both into and out of the Laplace domain. In the next section, we'll begin applying these rules to solve differential equations with piecewise forcing functions.  Check Your Understanding    📖❓Match the -Domain Function  Which function goes into the blank?      Yes!     No — try again.     No — try again.     No — try again.       "
},
{
  "id": "prep-3-lap-uc-ftuc",
  "level": "2",
  "url": "laplace-step-rules.html#prep-3-lap-uc-ftuc",
  "type": "Checkpoint",
  "number": "203",
  "title": "📖❓ How Do Inputs Shift?",
  "body": " 📖❓ How Do Inputs Shift?   The function is the same as shifted left by 2 units.    Replacing with shifts the graph to the left by units. This is the opposite direction compared to .   "
},
{
  "id": "lap-uc-2-2",
  "level": "2",
  "url": "laplace-step-rules.html#lap-uc-2-2",
  "type": "Proof",
  "number": "1",
  "title": "💡 Derivation of <span class=\"process-math\">\\(\\lap{u_c(t)}\\)<\/span>.",
  "body": " 💡 Derivation of  Start with the definition of the Laplace transform:   Recall that: which means the integrand is zero until and equals afterward.  That trims our integral down since:   Evaluate the improper integral as a limit:   As long as , the term goes to zero as , leaving:   "
},
{
  "id": "chkpt-1-lap-uc",
  "level": "2",
  "url": "laplace-step-rules.html#chkpt-1-lap-uc",
  "type": "Checkpoint",
  "number": "204",
  "title": "📖❓Finding the Laplace Transform of <span class=\"process-math\">\\(u_c(t)\\)<\/span>.",
  "body": " 📖❓Finding the Laplace Transform of   What is the Laplace transform of ?       Close, but is a variable in the Laplace domain, it doesn't get replaced by a number here.       That's the formula: , and here .       That's the transform of , not a step function. The exponential in appears in the numerator, not the exponent of the input.       That's an incorrect inversion of the formula. The exponential should be in the numerator, and in the denominator.     "
},
{
  "id": "laplace-ft-uc-2",
  "level": "2",
  "url": "laplace-step-rules.html#laplace-ft-uc-2",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": ""
},
{
  "id": "laplace-ft-uc-5",
  "level": "2",
  "url": "laplace-step-rules.html#laplace-ft-uc-5",
  "type": "🌌 Example",
  "number": "205",
  "title": "Transform of <span class=\"process-math\">\\((2 - t)\\cdot u_3(t)\\)<\/span>.",
  "body": " Transform of   Compute the Laplace transform of .    For this problem, we have . So the rule becomes: , where, in our case, , so .  Plugging and into the rule shows us that   So all we have left to do is compute : and plug it into (⭐), to complete the transform:    "
},
{
  "id": "laplace-ft-uc-6",
  "level": "2",
  "url": "laplace-step-rules.html#laplace-ft-uc-6",
  "type": "Checkpoint",
  "number": "206",
  "title": "Check Your Understanding.",
  "body": "Check Your Understanding   📖❓Apply the Rule for   What is the Laplace transform of ?       Close, but we must shift the input inside the function, not leave it as .       Correct. The shift rule says to replace with inside the function and multiply by .       Be careful, shifts the function right, but the rule calls for when we delay the function using .       This uses the right format, but doesn't evaluate the Laplace transform. We're looking for a formula that includes the exponential shift.       📖❓Next Step for the Rule   Suppose you want use L to find . You note that and update the rule as follows: . What's the best next step from here?     Identify , find .  Correct — you need to compute .    Find .  Finding isn't needed for this rule.    Find .  This does not help you compute .    Rewrite the rule by moving to the denominator as .  You could do this, but there is a better answer.     "
},
{
  "id": "laplace-ftc-uc-2",
  "level": "2",
  "url": "laplace-step-rules.html#laplace-ftc-uc-2",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": ""
},
{
  "id": "laplace-ftc-uc-5",
  "level": "2",
  "url": "laplace-step-rules.html#laplace-ftc-uc-5",
  "type": "Checkpoint",
  "number": "207",
  "title": "📖❓Identify the Shifted Input.",
  "body": " 📖❓Identify the Shifted Input   Select the expression that goes in the blank.       Good! The rule requires replacing with when multiplying by .     Not quite — you need to shift the input to because the step turns ON at .     Incorrect, try again.     Incorrect, try again.    "
},
{
  "id": "laplace-piecewise-check-2-1",
  "level": "2",
  "url": "laplace-step-rules.html#laplace-piecewise-check-2-1",
  "type": "Reading Question",
  "number": "1",
  "title": "📖❓Match the <span class=\"process-math\">\\(t\\)<\/span>-Domain Function.",
  "body": " 📖❓Match the -Domain Function  Which function goes into the blank?      Yes!     No — try again.     No — try again.     No — try again.    "
},
{
  "id": "transforming-piecewise-functions",
  "level": "1",
  "url": "transforming-piecewise-functions.html",
  "type": "Section",
  "number": "",
  "title": "Transforming Piecewise Functions",
  "body": " Transforming Piecewise Functions   Until now, you've learned how step functions act like ON–OFF switches, and you've built the three key Laplace rules (L , L , and L ) that describe how those switches behave under the Laplace transform. With these tools, we're ready for the real payoff: transforming entire piecewise functions .    General Strategy  The game plan for handling a piecewise function in the Laplace domain is always the same three steps.   📜 Laplace Transform of a Piecewise Function  To find for a piecewise function:  Rewrite using unit step functions.  Combine and simplify terms so you have the fewest possible -switches.  Apply the Laplace rules ( L , L , L ) one piece at a time.     That's it. Once each term is transformed, you can add them up thanks to linearity. You'll be left with a fully transformed piecewise function living in the Laplace domain.  📖❓ Strategy for Transforming a Piecewise Function  What's Should you do First?   To take the Laplace transform of a piecewise function, you should first rewrite it in terms of unit step functions.    That's the foundation of this method! Once a piecewise function is rewritten using step functions, you can apply the shift rule to each piece.    Matching Activation Intervals to Switches   On the left are activation intervals for a piecewise function. Drag each interval to the unit step switch that activates it.    These patterns should be second nature now, this matching is what allows us to build the step-based expression for the Laplace transform.                         Piecewise Functions in the Laplace Domain  Let's apply this strategy to the forcing function of our model problem, :   Write using step functions. The pieces, intervals and switches for are:      Piece  Active Interval  Step Function Switch                   Multiply each piece by its switch, then sum:  . Combine like switch terms:  . Now, we are ready to find the Laplace transform of . Taking the Laplace transform of both sides and using linearity, we get transforms: .  1️⃣ Apply L with: & :   2️⃣ Apply L with: & :   3️⃣ Apply L with: :   Writing these together under one sum completes the Laplace transform:     Examples  These worked examples illustrate how the three step-function Laplace rules combine into one powerful method for handling any piecewise function you might encounter.   Transforming a 2-Part Piecewise Function   Find the Laplace transform of     First, determine the step function switches   Now, contruct and combine the terms:   Apply the Laplace transform to both terms:          Simplifying completes the transform: .     Transforming a 3-Part Piecewise Function   Find the Laplace transform of     Write each piece using step functions:   Combine like terms:   Transform each term:   Term 1: Apply L 10 with and . Then , so: .  Term 2: Apply L 10 with and . Then , so: .   Combine the pieces: .       Rewrite piecewise functions in step form before doing anything else — this unifies the cases into one formula.  Combine like step terms to minimize how many Laplace transforms you have to compute.  Apply L 9 , L 10 , and L 11 term by term, using the linearity property.    "
},
{
  "id": "transforming-piecewise-functions-3-5",
  "level": "2",
  "url": "transforming-piecewise-functions.html#transforming-piecewise-functions-3-5",
  "type": "Checkpoint",
  "number": "208",
  "title": "📖❓ Strategy for Transforming a Piecewise Function.",
  "body": "📖❓ Strategy for Transforming a Piecewise Function  What's Should you do First?   To take the Laplace transform of a piecewise function, you should first rewrite it in terms of unit step functions.    That's the foundation of this method! Once a piecewise function is rewritten using step functions, you can apply the shift rule to each piece.    Matching Activation Intervals to Switches   On the left are activation intervals for a piecewise function. Drag each interval to the unit step switch that activates it.    These patterns should be second nature now, this matching is what allows us to build the step-based expression for the Laplace transform.                      "
},
{
  "id": "transforming-piecewise-functions-5-3",
  "level": "2",
  "url": "transforming-piecewise-functions.html#transforming-piecewise-functions-5-3",
  "type": "🌌 Example",
  "number": "209",
  "title": "Transforming a 2-Part Piecewise Function.",
  "body": " Transforming a 2-Part Piecewise Function   Find the Laplace transform of     First, determine the step function switches   Now, contruct and combine the terms:   Apply the Laplace transform to both terms:          Simplifying completes the transform: .   "
},
{
  "id": "transforming-piecewise-functions-5-4",
  "level": "2",
  "url": "transforming-piecewise-functions.html#transforming-piecewise-functions-5-4",
  "type": "🌌 Example",
  "number": "210",
  "title": "Transforming a 3-Part Piecewise Function.",
  "body": " Transforming a 3-Part Piecewise Function   Find the Laplace transform of     Write each piece using step functions:   Combine like terms:   Transform each term:   Term 1: Apply L 10 with and . Then , so: .  Term 2: Apply L 10 with and . Then , so: .   Combine the pieces: .   "
},
{
  "id": "transforming-piecewise-functions-wrapup",
  "level": "2",
  "url": "transforming-piecewise-functions.html#transforming-piecewise-functions-wrapup",
  "type": "🗝️ Key Takeaways...",
  "number": "",
  "title": "",
  "body": "  Rewrite piecewise functions in step form before doing anything else — this unifies the cases into one formula.  Combine like step terms to minimize how many Laplace transforms you have to compute.  Apply L 9 , L 10 , and L 11 term by term, using the linearity property.   "
},
{
  "id": "piecewise-laplace-method",
  "level": "1",
  "url": "piecewise-laplace-method.html",
  "type": "Section",
  "number": "",
  "title": "Laplace Method with Piecewise Forcing Terms",
  "body": " Laplace Method with Piecewise Forcing Terms   This is the moment where everything you've learned about Laplace transforms, step functions, and piecewise rewriting comes together. We'll now use the Laplace method to solve differential equations whose forcing terms switch ON and OFF across time.  The big picture is the same familiar three-step Laplace method you already know:  Step 1: Forward transform the differential equation into the Laplace domain.  Step 2: Solve for algebraically and prepare it for inversion.  Step 3: Apply the inverse Laplace transform to recover .  The only twist is that our forcing term is now piecewise, so the process begins with a setup step of rewriting the forcing term using step functions.    A Model Problem  Let's solve this initial value problem to see the full method in action: where the forcing term switches ON for just one second:   You'll recognize the roadmap: forward transform → solve in the Laplace domain → inverse transform. But watch how the step function representation drives every stage of the solution.  🗺️ A Roadmap Overview                          Setup: Piecewise Form to Step Form  The piecewise function, , must be expressed in step function form before we can take its transform. Since has only one non-zero piece on the activation interval, , the only switch we need is :     Step 1 — Into the Laplace Domain  We are now ready to apply to both sides, term-by-term, using linearity:   Using rules R with and L , gives the Laplace-domain equation:  .   Step 2 — Solving in the Laplace Domain  Factor out from the left side and divide to isolate it:   This is the Laplace-domain solution. Next, we rewrite into a form that matches the inverse Laplace table.  In general, any exponential terms in (i.e., and ) will return to the original domain as unit step functions using L . Therefore, you should prioritize collecting exponentials whenever you see them. For our equation, this looks like:   📖❓ Matching Exponential Factors   What do exponential terms in the Laplace domain, like , correspond to in the original-domain solution, ?     A term with the step function switch, .  Correct — always brings in and a shift by .    A term with a coefficient of .  No — the exponential doesn't change coefficients like that.    An exponential term .  No — doesn't translate to .    A term containing .  No — perhaps you thought this looked like the forward transform ?      To match the form in L , its a good habit to define the shorthand: so that our prepared becomes: .  Since we'll also need in step 3, let's compute it now:   🔎 Here are the Details  Decompose: .  Multiply by and collect the , , and constant terms: .  Matching coefficients gives the system: which has solution . Thus: and so the inverse is: .     Step 3 — Leaving the Laplace Domain  We now apply to both sides of the prepared  :   Applying L , our solution becomes: .  We use (from step 2) to plug in and , leading to the solution:    This problem demonstrates how the same Laplace method process can be applied to equations with piecewise forcing terms. With practice, you'll see that problems with piecewise forcing terms are no different from any other Laplace method problem.    Additional Examples  To cement the idea, here are a few more examples. Notice in each, that the three-step strategy stays exactly the same.    Solve the initial value problem where the forcing term is given by:      Setup: Piecewise Form to Step Form  Since the only nonzero piece of is on , the equation becomes: .    Step 1 — Into the Laplace Domain  Take the Laplace transform of both sides: .  Using the initial conditions with R and L we get: .    Step 2 — Solve for  Next, we isolate : .  and prepare for inversion by collecting the exponential terms: .  Lastly, we compute so it will be ready for step 3: ,  🔎 Here are the details  Decompose: .  Multiply through and collect the , , and constant terms: .  Matching coefficients gives the system: which has solution . Thus: and .     Step 3 — Leave the Laplace Domain  Apply to each term of the prepared :   Substituting in , gives the final solution:        Let's solve this initial value problem: with a piecewise forcing term:     We'll follow the Laplace roadmap: forward transform → solve in the Laplace domain → inverse transform . The step function form of will guide us.   Setup — Write g(t) Using Step Functions  First, express the piecewise forcing term in step function form:     Step 1 — Into the Laplace Domain  Apply to both sides:   With and the derivative rule:   Transforming each piece of :   The Laplace-domain equation becomes:     Step 2 — Solve in the Laplace Domain  Isolate :   Distribute and write as pieces of the form : .  Identify the rational parts: , which completes the prepared : .  The partial fractions decomposition of and needed for step 3 are:   🔎 Partial Fraction Details   Multiplying through and grouping terms:   Leads to:   and so    Multiplying through and grouping terms:   Leads to:   Thus,      Step 3 — Leave the Laplace Domain  Apply to both sides of the prepared  :   Using L updates our solution to:   Inverting each gives :   Plugging in the 's, we get the final solution:        Consider the initial value problem:     The forcing function starts as and then abruptly switches to a constant at . We'll lean on the Laplace roadmap: forward transform → solve for → return to .   Setup — Step Function Form  First, we rewrite the forcing term with step functions so we can apply Laplace rules directly:   Combine the terms grouped by their switches:     Step 1 — Into the Laplace Domain  Apply to both sides:   Use the derivative rules with on the left, and the step\/exponential rules on the right:     Step 2 — Solve in the Laplace Domain  Factor and isolate :   Since , distribute and reorganize:   Separate the terms into rational pieces to prepare for the inverse transform:   Now .  Both and need partial fraction decomposition.  🔎 Partial Fraction Details  For , the general form is:   Multiplying through:   Selecting values of finds , , and :                                With these constants, we can write as:   Now, for , we have:   Multiplying through:   Selecting values of finds , , , and :                                To find , we plug in the values of , , and :   With these constants, we can write as:      Step 3 — Leave the Laplace Domain  Apply to both sides of the prepared  :   Using L updates our solution to:   Inverting and gives:   Finally, substitute and to get the final solution:       📤 Wrap-Up   🗝️ Key Takeaways..   When there is a piecewise forcing term, always start the Laplace method process by rewriting it using step functions.  Use the same three Laplace steps you already know: forward transform, solve for , and invert.  Look for and combine exponential factors like in ; they signal pieces that will map back to terms in .      "
},
{
  "id": "piecewise-laplace-method-2-2",
  "level": "2",
  "url": "piecewise-laplace-method.html#piecewise-laplace-method-2-2",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Step 1: Step 2: Step 3: "
},
{
  "id": "piecewise-laplace-method-model-roadmap",
  "level": "2",
  "url": "piecewise-laplace-method.html#piecewise-laplace-method-model-roadmap",
  "type": "Proof",
  "number": "1",
  "title": "🗺️ A Roadmap Overview.",
  "body": "🗺️ A Roadmap Overview                        "
},
{
  "id": "chkpt-piecewise-laplace-2",
  "level": "2",
  "url": "piecewise-laplace-method.html#chkpt-piecewise-laplace-2",
  "type": "Checkpoint",
  "number": "211",
  "title": "📖❓ Matching Exponential Factors.",
  "body": " 📖❓ Matching Exponential Factors   What do exponential terms in the Laplace domain, like , correspond to in the original-domain solution, ?     A term with the step function switch, .  Correct — always brings in and a shift by .    A term with a coefficient of .  No — the exponential doesn't change coefficients like that.    An exponential term .  No — doesn't translate to .    A term containing .  No — perhaps you thought this looked like the forward transform ?    "
},
{
  "id": "piecewise-laplace-method-model-step-2-10",
  "level": "2",
  "url": "piecewise-laplace-method.html#piecewise-laplace-method-model-step-2-10",
  "type": "Proof",
  "number": "1",
  "title": "🔎 Here are the Details.",
  "body": "🔎 Here are the Details  Decompose: .  Multiply by and collect the , , and constant terms: .  Matching coefficients gives the system: which has solution . Thus: and so the inverse is: .  "
},
{
  "id": "piecewise-laplace-method-example-1",
  "level": "2",
  "url": "piecewise-laplace-method.html#piecewise-laplace-method-example-1",
  "type": "🌌 Example",
  "number": "212",
  "title": "",
  "body": "  Solve the initial value problem where the forcing term is given by:      Setup: Piecewise Form to Step Form  Since the only nonzero piece of is on , the equation becomes: .    Step 1 — Into the Laplace Domain  Take the Laplace transform of both sides: .  Using the initial conditions with R and L we get: .    Step 2 — Solve for  Next, we isolate : .  and prepare for inversion by collecting the exponential terms: .  Lastly, we compute so it will be ready for step 3: ,  🔎 Here are the details  Decompose: .  Multiply through and collect the , , and constant terms: .  Matching coefficients gives the system: which has solution . Thus: and .     Step 3 — Leave the Laplace Domain  Apply to each term of the prepared :   Substituting in , gives the final solution:     "
},
{
  "id": "piecewise-laplace-method-example-2",
  "level": "2",
  "url": "piecewise-laplace-method.html#piecewise-laplace-method-example-2",
  "type": "🌌 Example",
  "number": "213",
  "title": "",
  "body": "  Let's solve this initial value problem: with a piecewise forcing term:     We'll follow the Laplace roadmap: forward transform → solve in the Laplace domain → inverse transform . The step function form of will guide us.   Setup — Write g(t) Using Step Functions  First, express the piecewise forcing term in step function form:     Step 1 — Into the Laplace Domain  Apply to both sides:   With and the derivative rule:   Transforming each piece of :   The Laplace-domain equation becomes:     Step 2 — Solve in the Laplace Domain  Isolate :   Distribute and write as pieces of the form : .  Identify the rational parts: , which completes the prepared : .  The partial fractions decomposition of and needed for step 3 are:   🔎 Partial Fraction Details   Multiplying through and grouping terms:   Leads to:   and so    Multiplying through and grouping terms:   Leads to:   Thus,      Step 3 — Leave the Laplace Domain  Apply to both sides of the prepared  :   Using L updates our solution to:   Inverting each gives :   Plugging in the 's, we get the final solution:     "
},
{
  "id": "piecewise-laplace-method-example-3",
  "level": "2",
  "url": "piecewise-laplace-method.html#piecewise-laplace-method-example-3",
  "type": "🌌 Example",
  "number": "214",
  "title": "",
  "body": "  Consider the initial value problem:     The forcing function starts as and then abruptly switches to a constant at . We'll lean on the Laplace roadmap: forward transform → solve for → return to .   Setup — Step Function Form  First, we rewrite the forcing term with step functions so we can apply Laplace rules directly:   Combine the terms grouped by their switches:     Step 1 — Into the Laplace Domain  Apply to both sides:   Use the derivative rules with on the left, and the step\/exponential rules on the right:     Step 2 — Solve in the Laplace Domain  Factor and isolate :   Since , distribute and reorganize:   Separate the terms into rational pieces to prepare for the inverse transform:   Now .  Both and need partial fraction decomposition.  🔎 Partial Fraction Details  For , the general form is:   Multiplying through:   Selecting values of finds , , and :                                With these constants, we can write as:   Now, for , we have:   Multiplying through:   Selecting values of finds , , , and :                                To find , we plug in the values of , , and :   With these constants, we can write as:      Step 3 — Leave the Laplace Domain  Apply to both sides of the prepared  :   Using L updates our solution to:   Inverting and gives:   Finally, substitute and to get the final solution:     "
},
{
  "id": "laplace-method-piecewise-forcing-9",
  "level": "1",
  "url": "laplace-method-piecewise-forcing-9.html",
  "type": "Section",
  "number": "",
  "title": "Chapter 11 Exercises",
  "body": " Chapter 11 Exercises   ᯓ★❓Quick-Answer Questions   True-False  Key Strategy Summary   When applying the Laplace transform to a piecewise function, the key strategy is to rewrite each piece using unit step functions and then apply the shift rule.    This strategy allows you to use a single formula for the entire function and apply Laplace transforms systematically.     Multiple-Choice  Choosing the Right Switch   Suppose a function is ON for . Which expression correctly switches it ON at that point?       This turns OFF at , which is the opposite of what we want.       That's right, flips ON at and stays ON from there.       Close! This is also correct, but we prefer to write it as for clarity in this context.       This turns ON from to , then OFF. Not what we want here.      Unit Step Behavior   What is the only possible set of values that any unit step function can take?     {1 only}  Unit step functions are OFF before , so they can also be 0.    {0, 1}  Correct! Unit step functions are always either 0 (OFF) or 1 (ON).    {any real number}  No, unit step functions are discrete switches, not continuous functions.    {any nonnegative number}  Even though the values are nonnegative, only 0 and 1 are ever used.     Rewriting an ON Interval   Which expression represents a function that is ON from to and OFF otherwise?      This expression turns ON at and back OFF at .     This stays ON after , but never switches OFF at .     This is ON before , but never turns ON at .     That would actually be negative during the interval from to , not what we want.     Multiplying by a Step Function   What is the effect of multiplying a function by ?     It shifts 6 units to the left.  Shifting the input would require , not multiplication by .    It keeps OFF before and turns it ON at .  Correct. acts as a switch that activates at .    It subtracts 6 from the output of .  Step functions don't affect the output directly, they control when the function is active.    It delays by 6 units.  Delaying would require rewriting the input as , not just multiplying by .     Equivalent to Piecewise Form   Which step-function expression is equivalent to the piecewise function       This turns 3 ON at and OFF again at .     This turns ON at , not .     This would be ON before , but it wouldn't stop at , it's ON too early.     This is ON at , but it stays ON forever, it doesn't turn OFF at .     Reading a Step Expression   Which interval does activate over?      is ON before and OFF afterward.     That would be true of , not its reversal.    only  This is a step function, not a spike, it applies to intervals, not points.     Again, that's when turns ON, not when its complement is active.     Laplace of a Shifted Step   What is ?      This is the standard formula for the Laplace transform of .     This is the transform of , not a step function.     This isn't a correct transformation of a step function, it doesn't match the form.     This inverts the formula incorrectly, look carefully at the units and exponents.     Using the Shift Rule   Suppose . What is ?      This is the shift rule in action: delay the function, then shift its input left.     The exponent should be negative, delaying adds .     This shifts the function right but doesn't match the form used in the shift rule.     The Laplace transform applies to the whole product, you can't apply it to one piece separately.     Shifting Inside the Transform   Which of the following is equal to ?      This follows directly from the shift rule, replace with .     We must shift the input, becomes .     You can't break apart the transform like this, it applies to the whole product.     That's the shifted polynomial, but we want the Laplace transform of that expression, not the polynomial itself.     Interpreting a Full Step Form   The function is written as: What can you infer about the original piecewise function?      It had three intervals: , , and .   Each change in step function corresponds to a new piece of the function.    It is active only for .  No, activates the function at .    It is always equal to .  Only the first term is , and it gets overridden by the later terms.    The function turns off completely at .  It doesn't turn OFF at , it switches to a new expression.     Transform of a function that turns off  Which of the following expressions is equivalent to the Laplace transform of ?                                         Compute: step function activation  Compute .                                         Compute: step-off function  Compute .                                         Compute: windowed linear function  What is ?                                          Piecewise to Laplace   A function is defined as: What is in terms of step functions?      Perfect. This captures ON from to and turning ON at .      Incorrect. This function corresponds to        Incorrect. This function corresponds to        Incorrect. This function corresponds to         Other  Matching Shifts of   Consider the function . Match each of the shifted versions of with the correct description of how its graph is affected.      Horizontal shift by 1 (→)    Vertical shift by -1 (↓)     Horizontal shift by -1 (←)     Vertical shift by 1 (↑)     Horizontal & vertical shift by 1 (↗)     Shifted Unit-Step Function   The unit step function, defined by jumps from to at  .  Now consider the shifted version of the unit step function and give the output of this function for the following values of .         (a)        (b)        (c)        (d)        So jumps from to at  .            Multiplying a Function by   Consider the parabola multiplied by two different shifted unit step functions: . Describe the ON\/OFF behavior of the parabola in each case.     Multiplying the parabola by forces it OFF before , and ON after . Whereas, multiplying by forces it OFF before , and ON after .        🏗️ Unit Step Functions    Let be the shifted unit step function and . Then compute the following values      Since (positive), .       Since (negative), .        .        .     , where   Since we know that so .     , where   Since we know that so .     Sketch & Transform the Step Functions   Sketch the graph of the given function and determine its Laplacetransform.      Since is shifted to the right by , the jump in the graph occurs at (see below). Additionally, multiplying by reflects the graph about the -axis and scales it by , as shown below.            Use the shifting property of the unit step function: .                    We start by distributing: .  Applying the Laplace transform to this gives us .  The first term uses a standard Laplace transform: .  The second term requires the new rule with , which gives us            Putting it all together, we arrive at the desired transformation:        🏗️ Piecewise Functions    Rewrite the step function forms in piecewise form.      Since switches OFF at , this function is ON before and OFF afterward:         turns ON at , so:        Express each function below in terms of unit step functions and then compute its Laplace transform.        Since this piecewise function is of the form .  To compute using the transform rule with , we first label :   Since , then and we have .         We can rewrite this function as .  Now we compute         Computing each of the common Laplace transforms, we get         The function is initially and then becomes at . So the piecewise function, , is equivalent to and therefore, the piecewise function, , can be written as , and has the following graph     Graph of                           Piecewise Inverse Transforms    Find the inverse Laplace transform of each function.      This is already in the form with and .  The inverse transform of is , since this matches the standard form: .  Applying the shift rule:        We identify this as , where This matches the form for :   So the inverse is:                                             vspace{1cm}          Solving Differential Equations   Solve each of the following initial-value problems using Laplace Transforms.       Roadmap-Summary               2️⃣ Solve for                  3️⃣ Prepare for                Step 1: Apply the Laplace Transform .            Step 2: Solve for .             Step 3: Prepare for the Inverse Transform .  The exponential factor indicates a delay. Focus on the base transform:  From the table, this matches the transform of . Therefore:   The delay is applied using the shift theorem.   Step 4: Take the Inverse Transform .     Therefore, the solution is:                             where    Roadmap-Summary               2️⃣ Solve for                 3️⃣ Prepare for              Prepare the Forcing Function for Step 1  We begin by rewriting using unit step functions. Since equals 1 on and 0 elsewhere, we express it as: This transforms the differential equation into:    Step 1: Apply the Laplace Transform to Both Sides  Apply the Laplace transform to both sides: Using standard rules:    Step 2: Solve for  Factor out : Then divide:    Step 3: Prepare for an Inverse Transform  Step 3 focuses on rewriting to match inverse Laplace rules. We separate the exponentials:   Let the rational part be: Then:   This means the inverse will take the form: but we must first identify using partial fractions. The details are shown below:  Partial Fraction Decomposition of  Write: Multiply by and group: Match coefficients:          So:     This completes Step 3. We'll now apply the inverse transform.   Step 4: Invert to Recover  We now compute: By rule , this gives: where:   Substitute:   This is the complete solution for all .       where     Step 1 — Into the Laplace Domain  Recall that our first step is to apply the Laplace transform of both sides:   It's clear how to handle the left-side, but the right-side requires the transform of a piecewise function. Before we can use the rules we derived in this chapter, we first need to write in unit step form.  Apply the Laplace transform to both sides of the differential equation:   The forcing function is active only from to , so we rewrite it using a unit step window:   Apply the Laplace transform to both sides of the DE: On the left-hand side, using , we have:   On the right-hand side, distribute the Laplace transform: Use the shift rule for each term: Now apply linearity and known transforms: So:   Combining both sides, we arrive at the Laplace equation: This completes Step 1.  Now that we've built the Laplace equation, the remaining steps are familiar. We'll solve for , simplify, and invert. But there's one twist: the presence of terms means we'll need special care when taking the inverse Laplace transform. Let's explore that next.    Step 2 — Solving in the Laplace Domain    Step 3 — Leaving the Laplace Domain  Once we've solved for in the Laplace domain, the final challenge is to take the inverse Laplace transform. When the forcing function was continuous, this step relied on partial fractions and matching terms from the Laplace table. That still works here, but now we'll also see terms involving exponentials like .  These exponentials come directly from transforming unit step expressions. To move back to the -domain, we need a new tool: a rule that undoes the exponential shift.       where    Roadmap-Summary               2️⃣ Solve for                 3️⃣ Prepare for               Preparation — Forcing Function in Step Form  We begin by rewriting with unit step functions. Since it equals on , on , and after :   which simplifies to:     Step 1 — Into the Laplace Domain  Take the Laplace transform of both sides: Using the initial conditions and , the left side becomes: Apply L to each step term: This gives the Laplace-domain equation:     Step 2 — Solve for  Factor out and divide through by :   To prepare for inversion, write:  where  We'll find so we can invert .   Partial Fraction Decomposition of  Decompose: Multiply through: Sub in convenient -values:  At : →  At : →  Thus:   Take the inverse Laplace:      Step 3 — Back to the Time Domain  Each exponential factor in corresponds to a shifted version of multiplied by the appropriate step function using L .   Substitute into each term:   This simplifies to the complete solution for all . It clearly shows how each piece of the forcing term triggers its own shifted response in the solution.       Using the Definition of the Laplace Transform   Use the definition of Laplace Transform to find the Laplace Transform of :               "
},
{
  "id": "c11-quick-answer-tf",
  "level": "2",
  "url": "laplace-method-piecewise-forcing-9.html#c11-quick-answer-tf",
  "type": "Reading Question",
  "number": "1",
  "title": "True-False.",
  "body": "True-False  Key Strategy Summary   When applying the Laplace transform to a piecewise function, the key strategy is to rewrite each piece using unit step functions and then apply the shift rule.    This strategy allows you to use a single formula for the entire function and apply Laplace transforms systematically.    "
},
{
  "id": "c11-quick-answer-mc",
  "level": "2",
  "url": "laplace-method-piecewise-forcing-9.html#c11-quick-answer-mc",
  "type": "Reading Question",
  "number": "2",
  "title": "Multiple-Choice.",
  "body": "Multiple-Choice  Choosing the Right Switch   Suppose a function is ON for . Which expression correctly switches it ON at that point?       This turns OFF at , which is the opposite of what we want.       That's right, flips ON at and stays ON from there.       Close! This is also correct, but we prefer to write it as for clarity in this context.       This turns ON from to , then OFF. Not what we want here.      Unit Step Behavior   What is the only possible set of values that any unit step function can take?     {1 only}  Unit step functions are OFF before , so they can also be 0.    {0, 1}  Correct! Unit step functions are always either 0 (OFF) or 1 (ON).    {any real number}  No, unit step functions are discrete switches, not continuous functions.    {any nonnegative number}  Even though the values are nonnegative, only 0 and 1 are ever used.     Rewriting an ON Interval   Which expression represents a function that is ON from to and OFF otherwise?      This expression turns ON at and back OFF at .     This stays ON after , but never switches OFF at .     This is ON before , but never turns ON at .     That would actually be negative during the interval from to , not what we want.     Multiplying by a Step Function   What is the effect of multiplying a function by ?     It shifts 6 units to the left.  Shifting the input would require , not multiplication by .    It keeps OFF before and turns it ON at .  Correct. acts as a switch that activates at .    It subtracts 6 from the output of .  Step functions don't affect the output directly, they control when the function is active.    It delays by 6 units.  Delaying would require rewriting the input as , not just multiplying by .     Equivalent to Piecewise Form   Which step-function expression is equivalent to the piecewise function       This turns 3 ON at and OFF again at .     This turns ON at , not .     This would be ON before , but it wouldn't stop at , it's ON too early.     This is ON at , but it stays ON forever, it doesn't turn OFF at .     Reading a Step Expression   Which interval does activate over?      is ON before and OFF afterward.     That would be true of , not its reversal.    only  This is a step function, not a spike, it applies to intervals, not points.     Again, that's when turns ON, not when its complement is active.     Laplace of a Shifted Step   What is ?      This is the standard formula for the Laplace transform of .     This is the transform of , not a step function.     This isn't a correct transformation of a step function, it doesn't match the form.     This inverts the formula incorrectly, look carefully at the units and exponents.     Using the Shift Rule   Suppose . What is ?      This is the shift rule in action: delay the function, then shift its input left.     The exponent should be negative, delaying adds .     This shifts the function right but doesn't match the form used in the shift rule.     The Laplace transform applies to the whole product, you can't apply it to one piece separately.     Shifting Inside the Transform   Which of the following is equal to ?      This follows directly from the shift rule, replace with .     We must shift the input, becomes .     You can't break apart the transform like this, it applies to the whole product.     That's the shifted polynomial, but we want the Laplace transform of that expression, not the polynomial itself.     Interpreting a Full Step Form   The function is written as: What can you infer about the original piecewise function?      It had three intervals: , , and .   Each change in step function corresponds to a new piece of the function.    It is active only for .  No, activates the function at .    It is always equal to .  Only the first term is , and it gets overridden by the later terms.    The function turns off completely at .  It doesn't turn OFF at , it switches to a new expression.     Transform of a function that turns off  Which of the following expressions is equivalent to the Laplace transform of ?                                         Compute: step function activation  Compute .                                         Compute: step-off function  Compute .                                         Compute: windowed linear function  What is ?                                          Piecewise to Laplace   A function is defined as: What is in terms of step functions?      Perfect. This captures ON from to and turning ON at .      Incorrect. This function corresponds to        Incorrect. This function corresponds to        Incorrect. This function corresponds to       "
},
{
  "id": "c11-quick-answer-other",
  "level": "2",
  "url": "laplace-method-piecewise-forcing-9.html#c11-quick-answer-other",
  "type": "Reading Question",
  "number": "3",
  "title": "Other.",
  "body": " Other  Matching Shifts of   Consider the function . Match each of the shifted versions of with the correct description of how its graph is affected.      Horizontal shift by 1 (→)    Vertical shift by -1 (↓)     Horizontal shift by -1 (←)     Vertical shift by 1 (↑)     Horizontal & vertical shift by 1 (↗)     Shifted Unit-Step Function   The unit step function, defined by jumps from to at  .  Now consider the shifted version of the unit step function and give the output of this function for the following values of .         (a)        (b)        (c)        (d)        So jumps from to at  .            Multiplying a Function by   Consider the parabola multiplied by two different shifted unit step functions: . Describe the ON\/OFF behavior of the parabola in each case.     Multiplying the parabola by forces it OFF before , and ON after . Whereas, multiplying by forces it OFF before , and ON after .    "
},
{
  "id": "laplace-method-piecewise-forcing-9-3-2-2",
  "level": "2",
  "url": "laplace-method-piecewise-forcing-9.html#laplace-method-piecewise-forcing-9-3-2-2",
  "type": "Exercise",
  "number": "1",
  "title": "",
  "body": "   Since (positive), .   "
},
{
  "id": "laplace-method-piecewise-forcing-9-3-2-3",
  "level": "2",
  "url": "laplace-method-piecewise-forcing-9.html#laplace-method-piecewise-forcing-9-3-2-3",
  "type": "Exercise",
  "number": "2",
  "title": "",
  "body": "   Since (negative), .   "
},
{
  "id": "laplace-method-piecewise-forcing-9-3-2-4",
  "level": "2",
  "url": "laplace-method-piecewise-forcing-9.html#laplace-method-piecewise-forcing-9-3-2-4",
  "type": "Exercise",
  "number": "3",
  "title": "",
  "body": "    .   "
},
{
  "id": "laplace-method-piecewise-forcing-9-3-2-5",
  "level": "2",
  "url": "laplace-method-piecewise-forcing-9.html#laplace-method-piecewise-forcing-9-3-2-5",
  "type": "Exercise",
  "number": "4",
  "title": "",
  "body": "    .   "
},
{
  "id": "laplace-method-piecewise-forcing-9-3-2-6",
  "level": "2",
  "url": "laplace-method-piecewise-forcing-9.html#laplace-method-piecewise-forcing-9-3-2-6",
  "type": "Exercise",
  "number": "5",
  "title": "",
  "body": " , where   Since we know that so .   "
},
{
  "id": "laplace-method-piecewise-forcing-9-3-2-7",
  "level": "2",
  "url": "laplace-method-piecewise-forcing-9.html#laplace-method-piecewise-forcing-9-3-2-7",
  "type": "Exercise",
  "number": "6",
  "title": "",
  "body": " , where   Since we know that so .   "
},
{
  "id": "laplace-method-piecewise-forcing-9-3-3-3",
  "level": "2",
  "url": "laplace-method-piecewise-forcing-9.html#laplace-method-piecewise-forcing-9-3-3-3",
  "type": "Exercise",
  "number": "7",
  "title": "",
  "body": "   Since is shifted to the right by , the jump in the graph occurs at (see below). Additionally, multiplying by reflects the graph about the -axis and scales it by , as shown below.        "
},
{
  "id": "laplace-method-piecewise-forcing-9-3-3-4",
  "level": "2",
  "url": "laplace-method-piecewise-forcing-9.html#laplace-method-piecewise-forcing-9-3-3-4",
  "type": "Exercise",
  "number": "8",
  "title": "",
  "body": "   Use the shifting property of the unit step function: .    "
},
{
  "id": "laplace-method-piecewise-forcing-9-3-3-5",
  "level": "2",
  "url": "laplace-method-piecewise-forcing-9.html#laplace-method-piecewise-forcing-9-3-3-5",
  "type": "Exercise",
  "number": "9",
  "title": "",
  "body": "   "
},
{
  "id": "laplace-method-piecewise-forcing-9-3-3-6",
  "level": "2",
  "url": "laplace-method-piecewise-forcing-9.html#laplace-method-piecewise-forcing-9-3-3-6",
  "type": "Exercise",
  "number": "10",
  "title": "",
  "body": "   "
},
{
  "id": "laplace-method-piecewise-forcing-9-3-3-7",
  "level": "2",
  "url": "laplace-method-piecewise-forcing-9.html#laplace-method-piecewise-forcing-9-3-3-7",
  "type": "Exercise",
  "number": "11",
  "title": "",
  "body": "   "
},
{
  "id": "laplace-method-piecewise-forcing-9-3-3-8",
  "level": "2",
  "url": "laplace-method-piecewise-forcing-9.html#laplace-method-piecewise-forcing-9-3-3-8",
  "type": "Exercise",
  "number": "12",
  "title": "",
  "body": "   We start by distributing: .  Applying the Laplace transform to this gives us .  The first term uses a standard Laplace transform: .  The second term requires the new rule with , which gives us            Putting it all together, we arrive at the desired transformation:    "
},
{
  "id": "laplace-method-piecewise-forcing-9-4-2-2",
  "level": "2",
  "url": "laplace-method-piecewise-forcing-9.html#laplace-method-piecewise-forcing-9-4-2-2",
  "type": "Exercise",
  "number": "1",
  "title": "",
  "body": "   Since switches OFF at , this function is ON before and OFF afterward:    "
},
{
  "id": "laplace-method-piecewise-forcing-9-4-2-3",
  "level": "2",
  "url": "laplace-method-piecewise-forcing-9.html#laplace-method-piecewise-forcing-9-4-2-3",
  "type": "Exercise",
  "number": "2",
  "title": "",
  "body": "    turns ON at , so:    "
},
{
  "id": "laplace-method-piecewise-forcing-9-4-3-2",
  "level": "2",
  "url": "laplace-method-piecewise-forcing-9.html#laplace-method-piecewise-forcing-9-4-3-2",
  "type": "Exercise",
  "number": "3",
  "title": "",
  "body": "     Since this piecewise function is of the form .  To compute using the transform rule with , we first label :   Since , then and we have .   "
},
{
  "id": "laplace-method-piecewise-forcing-9-4-3-3",
  "level": "2",
  "url": "laplace-method-piecewise-forcing-9.html#laplace-method-piecewise-forcing-9-4-3-3",
  "type": "Exercise",
  "number": "4",
  "title": "",
  "body": "     We can rewrite this function as .  Now we compute         Computing each of the common Laplace transforms, we get   "
},
{
  "id": "laplace-method-piecewise-forcing-9-4-3-4",
  "level": "2",
  "url": "laplace-method-piecewise-forcing-9.html#laplace-method-piecewise-forcing-9-4-3-4",
  "type": "Exercise",
  "number": "5",
  "title": "",
  "body": "     The function is initially and then becomes at . So the piecewise function, , is equivalent to and therefore, the piecewise function, , can be written as , and has the following graph     Graph of          "
},
{
  "id": "laplace-method-piecewise-forcing-9-4-3-5",
  "level": "2",
  "url": "laplace-method-piecewise-forcing-9.html#laplace-method-piecewise-forcing-9-4-3-5",
  "type": "Exercise",
  "number": "6",
  "title": "",
  "body": "            "
},
{
  "id": "laplace-method-piecewise-forcing-9-5-2-2",
  "level": "2",
  "url": "laplace-method-piecewise-forcing-9.html#laplace-method-piecewise-forcing-9-5-2-2",
  "type": "Exercise",
  "number": "1",
  "title": "",
  "body": "   This is already in the form with and .  The inverse transform of is , since this matches the standard form: .  Applying the shift rule:    "
},
{
  "id": "laplace-method-piecewise-forcing-9-5-2-3",
  "level": "2",
  "url": "laplace-method-piecewise-forcing-9.html#laplace-method-piecewise-forcing-9-5-2-3",
  "type": "Exercise",
  "number": "2",
  "title": "",
  "body": "   We identify this as , where This matches the form for :   So the inverse is:    "
},
{
  "id": "laplace-method-piecewise-forcing-9-5-2-4",
  "level": "2",
  "url": "laplace-method-piecewise-forcing-9.html#laplace-method-piecewise-forcing-9-5-2-4",
  "type": "Exercise",
  "number": "3",
  "title": "",
  "body": "           "
},
{
  "id": "laplace-method-piecewise-forcing-9-5-2-5",
  "level": "2",
  "url": "laplace-method-piecewise-forcing-9.html#laplace-method-piecewise-forcing-9-5-2-5",
  "type": "Exercise",
  "number": "4",
  "title": "",
  "body": "           "
},
{
  "id": "laplace-method-piecewise-forcing-9-5-2-6",
  "level": "2",
  "url": "laplace-method-piecewise-forcing-9.html#laplace-method-piecewise-forcing-9-5-2-6",
  "type": "Exercise",
  "number": "5",
  "title": "",
  "body": "           "
},
{
  "id": "laplace-method-piecewise-forcing-9-5-2-7",
  "level": "2",
  "url": "laplace-method-piecewise-forcing-9.html#laplace-method-piecewise-forcing-9-5-2-7",
  "type": "Exercise",
  "number": "6",
  "title": "",
  "body": "    vspace{1cm}       "
},
{
  "id": "laplace-method-piecewise-forcing-9-6-3",
  "level": "2",
  "url": "laplace-method-piecewise-forcing-9.html#laplace-method-piecewise-forcing-9-6-3",
  "type": "Exercise",
  "number": "1",
  "title": "",
  "body": "    Roadmap-Summary               2️⃣ Solve for                  3️⃣ Prepare for                Step 1: Apply the Laplace Transform .            Step 2: Solve for .             Step 3: Prepare for the Inverse Transform .  The exponential factor indicates a delay. Focus on the base transform:  From the table, this matches the transform of . Therefore:   The delay is applied using the shift theorem.   Step 4: Take the Inverse Transform .     Therefore, the solution is:    "
},
{
  "id": "laplace-method-piecewise-forcing-9-6-4",
  "level": "2",
  "url": "laplace-method-piecewise-forcing-9.html#laplace-method-piecewise-forcing-9-6-4",
  "type": "Exercise",
  "number": "2",
  "title": "",
  "body": "          "
},
{
  "id": "laplace-method-piecewise-forcing-9-6-5",
  "level": "2",
  "url": "laplace-method-piecewise-forcing-9.html#laplace-method-piecewise-forcing-9-6-5",
  "type": "Exercise",
  "number": "3",
  "title": "",
  "body": "          "
},
{
  "id": "laplace-method-piecewise-forcing-9-6-6",
  "level": "2",
  "url": "laplace-method-piecewise-forcing-9.html#laplace-method-piecewise-forcing-9-6-6",
  "type": "Exercise",
  "number": "4",
  "title": "",
  "body": "  where    Roadmap-Summary               2️⃣ Solve for                 3️⃣ Prepare for              Prepare the Forcing Function for Step 1  We begin by rewriting using unit step functions. Since equals 1 on and 0 elsewhere, we express it as: This transforms the differential equation into:    Step 1: Apply the Laplace Transform to Both Sides  Apply the Laplace transform to both sides: Using standard rules:    Step 2: Solve for  Factor out : Then divide:    Step 3: Prepare for an Inverse Transform  Step 3 focuses on rewriting to match inverse Laplace rules. We separate the exponentials:   Let the rational part be: Then:   This means the inverse will take the form: but we must first identify using partial fractions. The details are shown below:  Partial Fraction Decomposition of  Write: Multiply by and group: Match coefficients:          So:     This completes Step 3. We'll now apply the inverse transform.   Step 4: Invert to Recover  We now compute: By rule , this gives: where:   Substitute:   This is the complete solution for all .    "
},
{
  "id": "laplace-method-piecewise-forcing-9-6-7",
  "level": "2",
  "url": "laplace-method-piecewise-forcing-9.html#laplace-method-piecewise-forcing-9-6-7",
  "type": "Exercise",
  "number": "5",
  "title": "",
  "body": "  where     Step 1 — Into the Laplace Domain  Recall that our first step is to apply the Laplace transform of both sides:   It's clear how to handle the left-side, but the right-side requires the transform of a piecewise function. Before we can use the rules we derived in this chapter, we first need to write in unit step form.  Apply the Laplace transform to both sides of the differential equation:   The forcing function is active only from to , so we rewrite it using a unit step window:   Apply the Laplace transform to both sides of the DE: On the left-hand side, using , we have:   On the right-hand side, distribute the Laplace transform: Use the shift rule for each term: Now apply linearity and known transforms: So:   Combining both sides, we arrive at the Laplace equation: This completes Step 1.  Now that we've built the Laplace equation, the remaining steps are familiar. We'll solve for , simplify, and invert. But there's one twist: the presence of terms means we'll need special care when taking the inverse Laplace transform. Let's explore that next.    Step 2 — Solving in the Laplace Domain    Step 3 — Leaving the Laplace Domain  Once we've solved for in the Laplace domain, the final challenge is to take the inverse Laplace transform. When the forcing function was continuous, this step relied on partial fractions and matching terms from the Laplace table. That still works here, but now we'll also see terms involving exponentials like .  These exponentials come directly from transforming unit step expressions. To move back to the -domain, we need a new tool: a rule that undoes the exponential shift.    "
},
{
  "id": "laplace-method-piecewise-forcing-9-6-8",
  "level": "2",
  "url": "laplace-method-piecewise-forcing-9.html#laplace-method-piecewise-forcing-9-6-8",
  "type": "Exercise",
  "number": "6",
  "title": "",
  "body": "  where    Roadmap-Summary               2️⃣ Solve for                 3️⃣ Prepare for               Preparation — Forcing Function in Step Form  We begin by rewriting with unit step functions. Since it equals on , on , and after :   which simplifies to:     Step 1 — Into the Laplace Domain  Take the Laplace transform of both sides: Using the initial conditions and , the left side becomes: Apply L to each step term: This gives the Laplace-domain equation:     Step 2 — Solve for  Factor out and divide through by :   To prepare for inversion, write:  where  We'll find so we can invert .   Partial Fraction Decomposition of  Decompose: Multiply through: Sub in convenient -values:  At : →  At : →  Thus:   Take the inverse Laplace:      Step 3 — Back to the Time Domain  Each exponential factor in corresponds to a shifted version of multiplied by the appropriate step function using L .   Substitute into each term:   This simplifies to the complete solution for all . It clearly shows how each piece of the forcing term triggers its own shifted response in the solution.    "
},
{
  "id": "laplace-method-piecewise-forcing-9-7-2",
  "level": "2",
  "url": "laplace-method-piecewise-forcing-9.html#laplace-method-piecewise-forcing-9-7-2",
  "type": "Exercise",
  "number": "1",
  "title": "",
  "body": " Use the definition of Laplace Transform to find the Laplace Transform of :             "
},
{
  "id": "intro-systems",
  "level": "1",
  "url": "intro-systems.html",
  "type": "Section",
  "number": "",
  "title": "Introducing Systems of Differential Equations",
  "body": " Introducing Systems of Differential Equations   When we first started studying differential equations, we focused on one equation and one dependent variable . But the real world is rarely that simple. Populations of predators and prey change together, chemical reactions involve several substances interacting, and mechanical systems often involve multiple moving parts.  In this chapter, we'll explore what happens when more than one quantity is changing at once — and how we can describe that with systems of differential equations .    What Are Systems?  A system of differential equations is exactly what it sounds like: a collection of differential equations that must be solved together . Instead of tracking a single unknown function, we track several unknowns — and they may influence each other.  For example, consider two unknown functions, and , governed by:   Here and describe how each quantity changes over time — possibly depending on the other quantity. This setup is common in science and engineering because many real-world situations involve several connected variables evolving at the same time.   How Are They Different?  Unlike single equations, systems can include interaction . One variable might depend on another — or they might depend on each other. This can produce richer behaviors like oscillations, balance points, or feedback loops. Solving systems sometimes calls for new tools, like matrix methods, but the ideas will still build on what you already know.  For example, here are some linear systems that have varying levels of dependency between the equations.                         The uncoupled system is no more than two independent differential equations that you have solved before. Far more interesting are the coupled systems, where changes in one variable directly influence changes in the other.     Uncoupled Systems  Let's start simple. Suppose we have two unknowns, and , but they don't influence each other:   These are called uncoupled because the -equation has no and the -equation has no . There's no interaction — they're basically two separate problems packaged together.   📖❓ Example of an Uncoupled System   Solve the uncoupled system:     Each equation can be solved on its own:   Even though they evolve separately, we think of the combined solution as a pair :   You might imagine describing a cup of coffee cooling while describes a soda warming up — two unrelated processes happening side by side.   Solution trajectories in the phase plane for the uncoupled system , . Arrows indicate the direction of motion as time increases.         📖❓ Uncoupled or Not?   The following system is uncoupled:       📤 Wrap-Up    🗝️ Key Takeaways..   Uncoupled systems have no interaction between equations: each variable evolves independently.  You solve each equation on its own, then pair the solutions as .  These are the simplest systems — but they're still systems!      "
},
{
  "id": "ex-uncoupled",
  "level": "2",
  "url": "intro-systems.html#ex-uncoupled",
  "type": "🌌 Example",
  "number": "218",
  "title": "📖❓ Example of an Uncoupled System.",
  "body": " 📖❓ Example of an Uncoupled System   Solve the uncoupled system:     Each equation can be solved on its own:   Even though they evolve separately, we think of the combined solution as a pair :   You might imagine describing a cup of coffee cooling while describes a soda warming up — two unrelated processes happening side by side.   Solution trajectories in the phase plane for the uncoupled system , . Arrows indicate the direction of motion as time increases.       "
},
{
  "id": "intro-systems-chkpt-1",
  "level": "2",
  "url": "intro-systems.html#intro-systems-chkpt-1",
  "type": "Checkpoint",
  "number": "220",
  "title": "📖❓ Uncoupled or Not?",
  "body": " 📖❓ Uncoupled or Not?   The following system is uncoupled:    "
},
{
  "id": "variable-interactions",
  "level": "1",
  "url": "variable-interactions.html",
  "type": "Section",
  "number": "",
  "title": "Interactions Between Variables",
  "body": " Interactions Between Variables   In the last section, we saw uncoupled systems , where each equation evolved completely on its own. But many real-world systems aren't so tidy. Often one quantity affects another — or they push on each other in both directions.  In this section, we'll step up the complexity: first looking at systems where one variable drives another, and then meeting the case where both variables interact fully.       Partially Coupled Systems  Suppose we have two variables, and , but this time depends on . In other words, evolves independently, while  listens to .  Here's an example:   Notice what's happening: follows a simple exponential decay. Meanwhile, is influenced by two things — its own decay and whatever value has at the time. This is called a partially coupled system: one-way interaction.   Solving a Partially Coupled System   Solve the system:      Step 1: Solve the independent equation for . This is a familiar exponential decay:    Step 2: Substitute into the -equation:   This is a linear first-order equation. Use an integrating factor to solve:   Multiply by and rewrite the left side as a derivative:   Integrate:   Solve for :   Use the initial condition :   So the solution is:    decays smoothly, while rises briefly (pulled by ) before eventually decaying as well. This one-way influence is the hallmark of a partially coupled system.     📖❓ Partially Coupled Equations   📖❓ Partial Coupling is One-Way   In a partially coupled system, one variable affects the other, but not vice versa.    Exactly. In these systems, one equation is independent and can be solved first. The second equation depends on the first.     📖❓ Which Should You Solve First?   You are given the system: Which equation should you solve first?     , because it depends on both variables.  Not quite. You need to know before you can solve for .    It doesn't matter, either can be solved independently.  Actually, only evolves independently. depends on it.    , because it is independent of .  Correct. Solve the independent equation for first, then use that in the equation for .    Neither equation can be solved until both are known.  Actually, this is a one-way system, drives , not the other way around.           Fully Coupled Systems (Conceptual)  We've seen systems where nothing interacts (uncoupled) and where one quantity drives another (partially coupled). Now we reach the most intricate case: fully coupled systems .  In a fully coupled system, both variables affect each other. Neither equation stands alone — any change in alters 's future, and feeds back into .  Consider:   Here, and are fully entangled — you can't solve one without the other. Instead of peeling off one equation at a time, we'll eventually treat the system as a single object.   📖❓ What Makes It Fully Coupled ?   What must be true for a system to be fully coupled?     Both equations involve both variables.    Each equation has only one variable.  That would actually make the system uncoupled.    One equation is independent, and the other depends on it.  That's partially coupled, not fully coupled.       📤 Wrap-Up    🗝️ Key Takeaways..   In a partially coupled system, one equation is independent and the other depends on it.  You can solve these without any new ideas by solving independent equation first, then substitute its solution into the dependent equation.  These systems model one-way influences, like a light level driving plant growth.  In fully coupled systems, both variables influence each other. Neither equation can be solved in isolation. That is, the system must be treated as a whole.     Check Your Understanding   📖❓ Understanding Partially Coupled Systems   📖❓ Identify the Coupling   Consider the system: Which of the following statements are true?     evolves independently of .    is influenced by .    Both variables depend on each other equally.    This is a partially coupled system.    You must solve the equation first.      📖❓ Solving Strategy   What is the best way to solve a partially coupled system?     Solve the independent equation first, then substitute into the other equation.    Solve both equations at the same time using elimination.  You could do that, but it's much simpler to solve the independent one first.    Write the system as one second-order DE before solving.  That's unnecessary for partially coupled systems — keep it simple.      📖❓ Spot the Coupling   Consider the system:   Which of these statements are true?     depends on .    depends on .    This is a partially coupled system.  Not quite — both equations are entangled, which makes it fully coupled.    You can solve for first, then plug into .  Because depends on as well, you can't isolate them that easily.         "
},
{
  "id": "ex-partially-coupled",
  "level": "2",
  "url": "variable-interactions.html#ex-partially-coupled",
  "type": "🌌 Example",
  "number": "221",
  "title": "Solving a Partially Coupled System.",
  "body": " Solving a Partially Coupled System   Solve the system:      Step 1: Solve the independent equation for . This is a familiar exponential decay:    Step 2: Substitute into the -equation:   This is a linear first-order equation. Use an integrating factor to solve:   Multiply by and rewrite the left side as a derivative:   Integrate:   Solve for :   Use the initial condition :   So the solution is:    decays smoothly, while rises briefly (pulled by ) before eventually decaying as well. This one-way influence is the hallmark of a partially coupled system.   "
},
{
  "id": "variable-interactions-partially-coupled-chkpt-bundle",
  "level": "2",
  "url": "variable-interactions.html#variable-interactions-partially-coupled-chkpt-bundle",
  "type": "Checkpoint",
  "number": "222",
  "title": "📖❓ Partially Coupled Equations.",
  "body": " 📖❓ Partially Coupled Equations   📖❓ Partial Coupling is One-Way   In a partially coupled system, one variable affects the other, but not vice versa.    Exactly. In these systems, one equation is independent and can be solved first. The second equation depends on the first.     📖❓ Which Should You Solve First?   You are given the system: Which equation should you solve first?     , because it depends on both variables.  Not quite. You need to know before you can solve for .    It doesn't matter, either can be solved independently.  Actually, only evolves independently. depends on it.    , because it is independent of .  Correct. Solve the independent equation for first, then use that in the equation for .    Neither equation can be solved until both are known.  Actually, this is a one-way system, drives , not the other way around.     "
},
{
  "id": "fully-coupled-conceptual-3",
  "level": "2",
  "url": "variable-interactions.html#fully-coupled-conceptual-3",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "both "
},
{
  "id": "variable-interactions-chkpt-3",
  "level": "2",
  "url": "variable-interactions.html#variable-interactions-chkpt-3",
  "type": "Checkpoint",
  "number": "223",
  "title": "📖❓ What Makes It “Fully Coupled”?",
  "body": " 📖❓ What Makes It Fully Coupled ?   What must be true for a system to be fully coupled?     Both equations involve both variables.    Each equation has only one variable.  That would actually make the system uncoupled.    One equation is independent, and the other depends on it.  That's partially coupled, not fully coupled.    "
},
{
  "id": "variable-interactions-cyu-bundle",
  "level": "2",
  "url": "variable-interactions.html#variable-interactions-cyu-bundle",
  "type": "Checkpoint",
  "number": "224",
  "title": "📖❓ Understanding Partially Coupled Systems.",
  "body": " 📖❓ Understanding Partially Coupled Systems   📖❓ Identify the Coupling   Consider the system: Which of the following statements are true?     evolves independently of .    is influenced by .    Both variables depend on each other equally.    This is a partially coupled system.    You must solve the equation first.      📖❓ Solving Strategy   What is the best way to solve a partially coupled system?     Solve the independent equation first, then substitute into the other equation.    Solve both equations at the same time using elimination.  You could do that, but it's much simpler to solve the independent one first.    Write the system as one second-order DE before solving.  That's unnecessary for partially coupled systems — keep it simple.      📖❓ Spot the Coupling   Consider the system:   Which of these statements are true?     depends on .    depends on .    This is a partially coupled system.  Not quite — both equations are entangled, which makes it fully coupled.    You can solve for first, then plug into .  Because depends on as well, you can't isolate them that easily.     "
},
{
  "id": "linear-systems-basics",
  "level": "1",
  "url": "linear-systems-basics.html",
  "type": "Section",
  "number": "",
  "title": "Linear System Basics",
  "body": " Linear System Basics      After exploring uncoupled, partially coupled, and fully coupled systems, we now turn to the most tractable and widely used class: linear systems with constant coefficients .  Their algebraic form is simple enough for exact analysis, yet flexible enough to model everything from harmonic oscillators to interacting populations. Our first task is to define what “linear” means and show how a short piece of matrix notation can replace a page-full of equations.       What Makes a System Linear?  A system is linear if every equation is linear with respect to its dependent variables (all to the power of one). For two variables and general form is   where , , , and are constants. The system is therefore autonomous (no explicit ) and planar (two-dimensional).    Select of linearity of each equation, then select the linearity of the system.       linear — nonlinear    linear — nonlinear      The system as a whole is: linear — nonlinear            The Matrix Formulation  Writing the same system once more,   define the coefficient matrix and state vector   Matrix multiplication then packages both equations into the single vector equation   This compact format presents the system as a single equation, linking directly to linear algebra tools like eigenvalues, which we will explore later.       From Two to Dimensions  For variables a constant-coefficient linear system reads   The dimension of the system equals the length of . Our focus this chapter remains on the planar case ( ) where geometry and algebra meet most clearly.  The number of dependent variables is called the dimension of the system. For example, the three-dimensional system:    Give the coefficient matrix, , for the following system:                                3  \\-\\s*2  0  0  0  1  3  \\-\\s*1  2         📤 Wrap-Up    🗝️ Key Takeaways..   A system is linear if its unknowns appear without products, powers, or nonlinear functions.  We'll focus on constant-coefficient linear systems, where the coefficients don't change over time.  These systems can be written in vector form: .     Check Your Understanding   📖❓ Linear System Basics   📖❓ Linear or Not?   Decide whether each system is linear or nonlinear.         The product and the square make this nonlinear.        The term makes this nonlinear.      📖❓ Identify Each System   Select the linear systems.                   📖❓ Benefits   Choose all advantages of writing .     It condenses multiple equations into one.    It links the system to eigenvalues and eigenvectors.    It turns any nonlinear system into a linear one.    It eliminates the need for initial conditions.         "
},
{
  "id": "linear-definition-5",
  "level": "2",
  "url": "linear-systems-basics.html#linear-definition-5",
  "type": "Checkpoint",
  "number": "225",
  "title": "",
  "body": "  Select of linearity of each equation, then select the linearity of the system.       linear — nonlinear    linear — nonlinear      The system as a whole is: linear — nonlinear      "
},
{
  "id": "coeff-matrix-chkpt-1",
  "level": "2",
  "url": "linear-systems-basics.html#coeff-matrix-chkpt-1",
  "type": "Checkpoint",
  "number": "226",
  "title": "",
  "body": "  Give the coefficient matrix, , for the following system:                                3  \\-\\s*2  0  0  0  1  3  \\-\\s*1  2   "
},
{
  "id": "linear-systems-cyu-bundle",
  "level": "2",
  "url": "linear-systems-basics.html#linear-systems-cyu-bundle",
  "type": "Checkpoint",
  "number": "227",
  "title": "📖❓ Linear System Basics.",
  "body": " 📖❓ Linear System Basics   📖❓ Linear or Not?   Decide whether each system is linear or nonlinear.         The product and the square make this nonlinear.        The term makes this nonlinear.      📖❓ Identify Each System   Select the linear systems.                   📖❓ Benefits   Choose all advantages of writing .     It condenses multiple equations into one.    It links the system to eigenvalues and eigenvectors.    It turns any nonlinear system into a linear one.    It eliminates the need for initial conditions.     "
},
{
  "id": "solving-linear-systems",
  "level": "1",
  "url": "solving-linear-systems.html",
  "type": "Section",
  "number": "",
  "title": "Solving Linear Systems",
  "body": " Solving Linear Systems    We've explored what linear systems are, how to visualize their behavior, and how to write them in compact matrix form. Now it's time to actually solve them.  We'll start with a method that mirrors how we solved single constant-coefficient equations: we guess exponential solutions. This guess transforms the differential system into an algebra problem — one that will lead naturally to eigenvalues and eigenvectors.       Guessing Exponential Solutions  Recall how we solved single first-order linear equations like by guessing solutions of the form . We'll try the same idea for systems.  Consider the system:   Let's guess that and share the same exponential rate :    Clearly, if , then we would have the trivial solution, so let's assume and are not both zero.   Differentiating gives:   Substituting into the system:   Divide through by (which is never zero):   This leaves an algebraic system involving the unknowns: , , and . It turns out that these unknowns have a very special relationship. To see this, flip the system around:   Now, convert this into a matrix system:   This is the eigenvalue equation  for the coefficient matrix   This tells us something powerful:  Linear systems often have solutions made of exponentials.  The allowed exponential rates are the eigenvalues of .  The corresponding coefficients and form the eigenvectors .     Solving a Simple Linear System   Solve the system:     Write in matrix form with .  Guess . Substituting gives .  Find eigenvalues of by solving .   Set equal to zero: . Factor:   Find eigenvectors for each eigenvalue.   For r = 3: Solve . From the first row: . Choose , giving eigenvector .  For r = -1: Solve . From the first row: . Choose , giving eigenvector .   Write the general solution.   Substitute the eigenvectors:   Or written componentwise:   The constants and will be found from initial conditions.     Complex Eigenvalues and Spirals   Consider the system:   Solve the system and describe the behavior of solutions.    Write .  Find eigenvalues by solving .   Set equal to zero: . Using the quadratic formula:   The eigenvalues are — complex conjugates. The real part ( ) means solutions grow exponentially; the imaginary part ( ) means they also rotate: the system's trajectories spiral outward.  Find an eigenvector for (the other is its conjugate). Solving gives an eigenvector .  Write the solution.  We form the real solution by taking the real and imaginary parts:   The exponential factor causes growth; the sine and cosine produce rotation. The system's phase portrait shows spirals moving outward from the origin.         📤 Wrap-Up    🗝️ Key Takeaways..   For constant-coefficient linear systems, guessing exponential solutions reduces the DE to an eigenvalue problem  Eigenvalues, , tell us whether solutions decay, grow, or spiral.     Check Your Understanding   📖❓Eigenvalues and Behavior   Suppose the eigenvalues of a system are . What does this tell you about the solutions?     They spiral inward toward the origin.    They spiral outward away from the origin.  The negative real part means decay, not growth.    They move straight toward the origin with no oscillation.  The imaginary part implies rotation (spiraling).        "
},
{
  "id": "ex-worked-linear-system",
  "level": "2",
  "url": "solving-linear-systems.html#ex-worked-linear-system",
  "type": "🌌 Example",
  "number": "228",
  "title": "Solving a Simple Linear System.",
  "body": " Solving a Simple Linear System   Solve the system:     Write in matrix form with .  Guess . Substituting gives .  Find eigenvalues of by solving .   Set equal to zero: . Factor:   Find eigenvectors for each eigenvalue.   For r = 3: Solve . From the first row: . Choose , giving eigenvector .  For r = -1: Solve . From the first row: . Choose , giving eigenvector .   Write the general solution.   Substitute the eigenvectors:   Or written componentwise:   The constants and will be found from initial conditions.   "
},
{
  "id": "ex-complex-eigenvalues",
  "level": "2",
  "url": "solving-linear-systems.html#ex-complex-eigenvalues",
  "type": "🌌 Example",
  "number": "229",
  "title": "Complex Eigenvalues and Spirals.",
  "body": " Complex Eigenvalues and Spirals   Consider the system:   Solve the system and describe the behavior of solutions.    Write .  Find eigenvalues by solving .   Set equal to zero: . Using the quadratic formula:   The eigenvalues are — complex conjugates. The real part ( ) means solutions grow exponentially; the imaginary part ( ) means they also rotate: the system's trajectories spiral outward.  Find an eigenvector for (the other is its conjugate). Solving gives an eigenvector .  Write the solution.  We form the real solution by taking the real and imaginary parts:   The exponential factor causes growth; the sine and cosine produce rotation. The system's phase portrait shows spirals moving outward from the origin.   "
},
{
  "id": "solving-linear-systems-cyu-1",
  "level": "2",
  "url": "solving-linear-systems.html#solving-linear-systems-cyu-1",
  "type": "Checkpoint",
  "number": "230",
  "title": "📖❓Eigenvalues and Behavior.",
  "body": " 📖❓Eigenvalues and Behavior   Suppose the eigenvalues of a system are . What does this tell you about the solutions?     They spiral inward toward the origin.    They spiral outward away from the origin.  The negative real part means decay, not growth.    They move straight toward the origin with no oscillation.  The imaginary part implies rotation (spiraling).    "
},
{
  "id": "second-order-to-system",
  "level": "1",
  "url": "second-order-to-system.html",
  "type": "Section",
  "number": "",
  "title": "Second-Order Equations to First-Order Systems",
  "body": " Second-Order Equations to First-Order Systems   So far, we've looked at systems that involve multiple variables like and . But what if you start with just a single second-order differential equation? It turns out you can rewrite it as a system of first-order equations.    Turning a Second-Order Equation into a System  For example, consider the second-order equation:   This equation involves only one dependent variable, , but it's second-order. To convert it into a system, we introduce a new variable:   That means . And since , we can rewrite the original equation as:   Now we have a system of two first-order equations:    📖❓Derivative Substitution   In order to rewrite a second-order equation as a system, we can replace with a new variable and then express as the derivative of that new variable.    Correct. Introducing and allows us to write as and form a system.         📤 Wrap-Up    🗝️ Key Takeaways..   You can convert a second-order linear differential equation into a system of first-order linear system of equations.     Check Your Understanding   📖❓Second-Order Equations to First-Order Systems   📖❓Understanding Converted Systems   When you convert a second-order equation into a first-order system, which of the following are always true?     The system has two first-order equations.  Yes. One for and one for .    The system involves two new variables: one for , one for .  Exactly. This substitution is the key step.    The resulting system is always uncoupled.  Not true. The new variables often depend on each other.    The system represents the same solutions as the original equation.  Correct. It's just a different form of the same information.    You can only use this method for linear equations.  This method also works for nonlinear second-order equations.      📖❓Match Equations to Their Systems   Match each second-order differential equation to the correct system using and .    Each system reflects and an expression for based on .                       📖❓From Second Order to System   What is the correct system corresponding to if we define , ?     ,  That would be true if the original equation were . Double-check which variable is being multiplied by 4.    ,  Too many terms, there's no in the original equation.    ,  Yes! is exactly what we want.    ,  This system doesn't reflect the original equation at all.         "
},
{
  "id": "second-order-to-system-chkpt-1",
  "level": "2",
  "url": "second-order-to-system.html#second-order-to-system-chkpt-1",
  "type": "Checkpoint",
  "number": "231",
  "title": "📖❓Derivative Substitution.",
  "body": " 📖❓Derivative Substitution   In order to rewrite a second-order equation as a system, we can replace with a new variable and then express as the derivative of that new variable.    Correct. Introducing and allows us to write as and form a system.   "
},
{
  "id": "second-order-to-system-cyu-bundle",
  "level": "2",
  "url": "second-order-to-system.html#second-order-to-system-cyu-bundle",
  "type": "Checkpoint",
  "number": "232",
  "title": "📖❓Second-Order Equations to First-Order Systems.",
  "body": " 📖❓Second-Order Equations to First-Order Systems   📖❓Understanding Converted Systems   When you convert a second-order equation into a first-order system, which of the following are always true?     The system has two first-order equations.  Yes. One for and one for .    The system involves two new variables: one for , one for .  Exactly. This substitution is the key step.    The resulting system is always uncoupled.  Not true. The new variables often depend on each other.    The system represents the same solutions as the original equation.  Correct. It's just a different form of the same information.    You can only use this method for linear equations.  This method also works for nonlinear second-order equations.      📖❓Match Equations to Their Systems   Match each second-order differential equation to the correct system using and .    Each system reflects and an expression for based on .                       📖❓From Second Order to System   What is the correct system corresponding to if we define , ?     ,  That would be true if the original equation were . Double-check which variable is being multiplied by 4.    ,  Too many terms, there's no in the original equation.    ,  Yes! is exactly what we want.    ,  This system doesn't reflect the original equation at all.     "
},
{
  "id": "systems-of-des-3-8",
  "level": "1",
  "url": "systems-of-des-3-8.html",
  "type": "Section",
  "number": "",
  "title": "Chapter 12 Exercises",
  "body": " Chapter 12 Exercises   ᯓ★❓Quick-Answer Questions    True-False   📖❓ Which Variable Drives Which?   Consider the system:   Select all true statements:     evolves independently of .    depends on .    This is an uncoupled system.  Not quite — notice that shows up in the equation.    You must solve for before you can solve for .  Actually, you can solve first since it's independent.      Interdependence  What makes a system fully coupled? How does that affect how we approach the problem?    📖❓ Classify the System   Match each system to the correct classification.   Assume both and are functions of .     Systems are classified by whether variables influence each other and how. Look for dependencies in the right-hand sides.       Uncoupled      Partially Coupled     Fully Coupled      📖❓ Identifying Features   Select all statements that are true about partially coupled systems.     One equation is independent and can be solved first.  Yes, this is a defining feature of partial coupling.    Both equations must be solved simultaneously.  No, only fully coupled systems require that.    The dependent equation uses the solution of the independent one.  Exactly. You substitute into the second equation to solve for .    Partial coupling means both variables evolve independently.  That describes an uncoupled system, not a partially coupled one.    Only one of the equations involves both variables.  Correct. The coupling only appears in one direction.    The second variable can be solved without knowing the first.  Nope, you need to solve for .      📖❓ Select the True Statements   Which of the following statements are true for the system:      The rate of change of depends on .    The variable has no effect on how changes.    The rate of change of depends only on .    This is an example of a coupled system.    This system has two independent variables.      📖❓ Independent Solutions   In an uncoupled system, how do we find the solution for the whole system?     Solve each equation separately, then combine the answers into a pair .    Rewrite the system as a second-order equation for just one variable.  You could do this in some cases, but for uncoupled systems it's simpler to solve each one directly.    Use Euler's Method only — they cannot be solved exactly.  Uncoupled systems are straightforward to solve exactly.         Exercises    Solve the following systems of differential equations.        We can take the LT of each DE. The result is two algebraic equations in two unknowns an We will solve the equations simultaneously as shown below. We need only take the inverse LT of each function in order to solve for the desired function an This means we will need to find a partial fraction decomposition for each.  Hence, Similarly, we will find a partial fraction decomposition for   Hence, Now we need only find the inverse LT of equations. This, the solution to this system is We can verify our solution. Hence, the solution satisfies both DEs and both initial conditions.              We can take the LT of each DE, starting with the first DE. We will then solve for  Now we take the LT of the second DE. We will substitute in for using the result we found above. We now substitute this back into equation. We need only take the inverse LT of each function in order to solve for the desired functions an   Thus, the solution to this system is We can verify our solution. Hence, the solution satisfies both DEs and both initial conditions.              We can take the LT of each DE, starting with the first DE. We will then solve for  Now we take the LT of the second DE. We will substitute in for using the result we found above. We now substitute this back into equation. We need only take the inverse LT of each function in order to solve for the desired function an This means we will need to find a partial fraction decomposition for each.  Hence, Similarly, we will find a partial fraction decomposition for   Hence, Now we need only find the inverse LT of equations. Thus, the solution to this system is We can verify that this is the solution. Hence, the solution satisfies both DEs and both initial conditions.            Suppose a mixture containing 0.3 kg of sugar per liter runs into a tank initially filled with 400 L of water containing 2 kg of sugar. The liquid enters at 10 L\/min,the mixture is kept uniform by stirring, and the mixture flows out at the same rate.    Find the mass of sugar in the tank afte minutes.   Find the mass of sugar in the tank afte minutes.         Find the concentration of sugar in the tank after 10 minutes.   Find the concentration of sugar in the tank after 10 minutes.         Use your answer to question to determine the concentration of sugar in the tank after a long time. Does your answer make sensein terms of the physical scenario? Explain.                  A brine solution of salt flows at a constant rate of 4 L\/min into a large tank that initially he of pure water. The solution inside the tank is kept well-stirred and flows out of the tank at a rate of 3 L\/min. If the concentration of salt in the brine entering the tank is 0.2 kg\/L: Determine the mass of the salt in the tank afte minutes.  What is the concentration of salt after one hour?              From a Second-Order Equation to a System   Rewrite the second-order equation as a system of first-order equations.    Let and . Then:   and   So the system becomes:         "
},
{
  "id": "c12-quick-answer-tf",
  "level": "2",
  "url": "systems-of-des-3-8.html#c12-quick-answer-tf",
  "type": "Reading Question",
  "number": "1",
  "title": "True-False.",
  "body": " True-False   📖❓ Which Variable Drives Which?   Consider the system:   Select all true statements:     evolves independently of .    depends on .    This is an uncoupled system.  Not quite — notice that shows up in the equation.    You must solve for before you can solve for .  Actually, you can solve first since it's independent.      Interdependence  What makes a system fully coupled? How does that affect how we approach the problem?    📖❓ Classify the System   Match each system to the correct classification.   Assume both and are functions of .     Systems are classified by whether variables influence each other and how. Look for dependencies in the right-hand sides.       Uncoupled      Partially Coupled     Fully Coupled      📖❓ Identifying Features   Select all statements that are true about partially coupled systems.     One equation is independent and can be solved first.  Yes, this is a defining feature of partial coupling.    Both equations must be solved simultaneously.  No, only fully coupled systems require that.    The dependent equation uses the solution of the independent one.  Exactly. You substitute into the second equation to solve for .    Partial coupling means both variables evolve independently.  That describes an uncoupled system, not a partially coupled one.    Only one of the equations involves both variables.  Correct. The coupling only appears in one direction.    The second variable can be solved without knowing the first.  Nope, you need to solve for .      📖❓ Select the True Statements   Which of the following statements are true for the system:      The rate of change of depends on .    The variable has no effect on how changes.    The rate of change of depends only on .    This is an example of a coupled system.    This system has two independent variables.      📖❓ Independent Solutions   In an uncoupled system, how do we find the solution for the whole system?     Solve each equation separately, then combine the answers into a pair .    Rewrite the system as a second-order equation for just one variable.  You could do this in some cases, but for uncoupled systems it's simpler to solve each one directly.    Use Euler's Method only — they cannot be solved exactly.  Uncoupled systems are straightforward to solve exactly.     "
},
{
  "id": "systems-of-des-3-8-3-2-2",
  "level": "2",
  "url": "systems-of-des-3-8.html#systems-of-des-3-8-3-2-2",
  "type": "Exercise",
  "number": "1",
  "title": "",
  "body": "     We can take the LT of each DE. The result is two algebraic equations in two unknowns an We will solve the equations simultaneously as shown below. We need only take the inverse LT of each function in order to solve for the desired function an This means we will need to find a partial fraction decomposition for each.  Hence, Similarly, we will find a partial fraction decomposition for   Hence, Now we need only find the inverse LT of equations. This, the solution to this system is We can verify our solution. Hence, the solution satisfies both DEs and both initial conditions.        "
},
{
  "id": "systems-of-des-3-8-3-2-3",
  "level": "2",
  "url": "systems-of-des-3-8.html#systems-of-des-3-8-3-2-3",
  "type": "Exercise",
  "number": "2",
  "title": "",
  "body": "     We can take the LT of each DE, starting with the first DE. We will then solve for  Now we take the LT of the second DE. We will substitute in for using the result we found above. We now substitute this back into equation. We need only take the inverse LT of each function in order to solve for the desired functions an   Thus, the solution to this system is We can verify our solution. Hence, the solution satisfies both DEs and both initial conditions.        "
},
{
  "id": "systems-of-des-3-8-3-2-4",
  "level": "2",
  "url": "systems-of-des-3-8.html#systems-of-des-3-8-3-2-4",
  "type": "Exercise",
  "number": "3",
  "title": "",
  "body": "     We can take the LT of each DE, starting with the first DE. We will then solve for  Now we take the LT of the second DE. We will substitute in for using the result we found above. We now substitute this back into equation. We need only take the inverse LT of each function in order to solve for the desired function an This means we will need to find a partial fraction decomposition for each.  Hence, Similarly, we will find a partial fraction decomposition for   Hence, Now we need only find the inverse LT of equations. Thus, the solution to this system is We can verify that this is the solution. Hence, the solution satisfies both DEs and both initial conditions.        "
},
{
  "id": "systems-of-des-3-8-3-3-2",
  "level": "2",
  "url": "systems-of-des-3-8.html#systems-of-des-3-8-3-3-2",
  "type": "Exercise",
  "number": "4",
  "title": "",
  "body": " Find the mass of sugar in the tank afte minutes.   Find the mass of sugar in the tank afte minutes.       "
},
{
  "id": "systems-of-des-3-8-3-3-3",
  "level": "2",
  "url": "systems-of-des-3-8.html#systems-of-des-3-8-3-3-3",
  "type": "Exercise",
  "number": "5",
  "title": "",
  "body": " Find the concentration of sugar in the tank after 10 minutes.   Find the concentration of sugar in the tank after 10 minutes.       "
},
{
  "id": "systems-of-des-3-8-3-3-4",
  "level": "2",
  "url": "systems-of-des-3-8.html#systems-of-des-3-8-3-3-4",
  "type": "Exercise",
  "number": "6",
  "title": "",
  "body": " Use your answer to question to determine the concentration of sugar in the tank after a long time. Does your answer make sensein terms of the physical scenario? Explain.          "
},
{
  "id": "systems-of-des-3-8-3-4-2",
  "level": "2",
  "url": "systems-of-des-3-8.html#systems-of-des-3-8-3-4-2",
  "type": "Exercise",
  "number": "7",
  "title": "",
  "body": " A brine solution of salt flows at a constant rate of 4 L\/min into a large tank that initially he of pure water. The solution inside the tank is kept well-stirred and flows out of the tank at a rate of 3 L\/min. If the concentration of salt in the brine entering the tank is 0.2 kg\/L: Determine the mass of the salt in the tank afte minutes.  What is the concentration of salt after one hour?           "
},
{
  "id": "ex-second-order-to-system",
  "level": "2",
  "url": "systems-of-des-3-8.html#ex-second-order-to-system",
  "type": "Exercise",
  "number": "8",
  "title": "From a Second-Order Equation to a System.",
  "body": " From a Second-Order Equation to a System   Rewrite the second-order equation as a system of first-order equations.    Let and . Then:   and   So the system becomes:    "
},
{
  "id": "systems-of-des-4-3",
  "level": "1",
  "url": "systems-of-des-4-3.html",
  "type": "Section",
  "number": "",
  "title": "Nonlinear Systems",
  "body": "Nonlinear Systems     "
},
{
  "id": "backmatter-2",
  "level": "1",
  "url": "backmatter-2.html",
  "type": "Appendix",
  "number": "A",
  "title": "Notation",
  "body": " Notation  The following table defines the notation used in this book. Page numbers or references refer to the first appearance of each symbol.   "
},
{
  "id": "backmatter-3",
  "level": "1",
  "url": "backmatter-3.html",
  "type": "Appendix",
  "number": "B",
  "title": "Hints and Solutions to Selected Exercises",
  "body": " Hints and Solutions to Selected Exercises  "
},
{
  "id": "algebra-review",
  "level": "1",
  "url": "algebra-review.html",
  "type": "Chapter",
  "number": "",
  "title": "Algebra",
  "body": " Algebra   Like-Terms  like-terms   Terms are called like-terms if they have identical variable parts. That is, they differ only by a coefficient. like-terms can be combined via addition and subtraction. For example, the and terms below are pairs of like-terms, which can be combined as follows: .      Quadratic equations  We will be solving quadratic equations as we solve differential equations. If we want to solve a quadratic equation like there are several different methods we might use, including:  factoring  quadratic formula,   completing the square  Most students prefer the first two methods, which is fine. We will end up completing the square later in the semester, so if you want to review that method now, you'll reap the benefits later!   Solve the following quadratic equations. Note: It's OK if the solutions are complex or imaginary.      You might solve via factoring: Alternately, you might use the quadratic formula: You could even complete the square:             You might solve via factoring: Alternately, you might use the quadratic formula: You could even complete the square:             This one doesn't factor easily... You might use the quadratic formula: You could even complete the square:          Name at least two methods for solving quadratic equations.  factoring, using the quadratic formula, completing the square    How many solutions does a quadratic equation have?  There are three possible outcomes when solving a quadratic equation:  two distinct real roots  one repeated real root (i.e., a double root)  complex conjugate roots        ✳️ Solving Quadratic Equations  The solution to the quadratic equation is given by the quadratic formula: . Notes:   The gives two solutions, say and .     and are also known as the roots of .    The value, , under the root in is called the discriminant .    Equation can be written as .    If , then and are different real numbers.    If , then and are the same real number (repeated).    If , then and are complex and can be written as .        Completing the Square  ✳️ Completing the Square  Completing the square is a tool to rewrite a quadratic expression like into the form:   The strategy is as follows:     .  Let's walk through a few examples to illustrate how completing the square can simplify the inverse Laplace transform process.  Complete the Square of each Quadratic   Since , we add and substract .     Since , we add and substract .     Since , we add and substract .      Complete the square for each of the following expressions. Verify by expanding your expression.                                             (Needs to be written)             (Needs to be written)                           Writing the Equation of a Line in Point-Slope Form  When asked for the general form for the equation of a line, most people give the familiar —the slope-intercept form. This is a great form, but there is another equally useful one, easy to remember if we recall the slope formula. Given two points and , the slope of the line between them is: Rearranging gives: or, more commonly written: Sometimes it's useful to go one step further and solve for by adding to both sides:    Writing a Line from Two Points  Given the points and , (i) write the equation of the line through the points in point-slope form, and then (ii) solve for the dependent variable .   First, compute the slope:   Now write the point-slope form:   (i) Using either point:   (ii) Solve for :      Practice Writing Equations of Lines  Use the given points to: (i) write the equation, in point-slope form, of the line through the points, and then (ii) solve for the dependent variable .    and    Find the slope: (i) Write the point-slope form: (ii) Solve for :       and    Find the slope: (i) Write the point-slope form: (ii) Solve for :       and    Find the slope: (i) Write the point-slope form: (ii) Solve for :        Finding a point on a line   Example: Consider the line with equation Find the coordinates of the point that lies on and that has -value  Here we can simply substitute in and then solve for the -coordinate: So the desired point is .    Use the given equation of the line in point slope form to find the point on that line with the given $x$-value.        We simply substitute in and then solve for the -coordinate: So the desired point is .               We simply substitute in and then solve for the -coordinate: So the desired point is .               We simply substitute in and then solve for the -coordinate: So the desired point is .             Trigonometric Identities  ✳️ Pythagorean Identities  The following trigonometric identities are useful in solving differential equations:                ✳️ Even and Odd Properties                                      Exponential and Logarithmic Functions  Recall the following rules for exponential and logarithmic functions. ✳️ Exponential Rules        General   Natural ( )                                               ✳️ Logarithmic Rules        General   Natural ( )                                                        Let's look at a couple of examples, starting with an equation containing exponentials.   Solve for :    We might begin by isolating the exponential that contains and then taking the natural log of both sides.   It's worth noting that we cannot break up that log on the right hand side. There's no \"rule\" that helps when we have addition inside a logarithm.  There is another way to approach this if notice that appears inside both exponential terms. The answers may look different, but they are equivalent and both are correct.    Now let's look at an example involving logarithms.   Solve for :    We'll carefully apply the rules above. We want to get our hands on , and right now its inside a logarithm. In order to undo that, we'll exponentiate both sides.     Now you should try. Be careful!   Use algebra and the rules above to solve for in each of the following equations.                                                                                               Euler's Formula   For any real number , we have   where is the imaginary unit, defined as .  As a result of this formula, we also have       Subscript Notation  We usually use parentheses to indicate a function, as we see in the examples below: Recall that we can use that rule on things other than just For example,   Subscript notation   Subscript notation is just an alternate notation we use for functions when the input values (i.e. the domain ) consists of numbers like Here's an example of subscript notation:  Suppose   Notice that this is much like the function except we would never evaluate this function at (because -1.3 is negative and is not an integer).  We can evaluate this function at any nonnegative integer, though, as below:     Given the definition of a function in subscript notation, find the value of the given term.   If evaluate       If evaluate             If evaluate                Function Notation  Function notation is a cornerstone of mathematics and science because it allows us to describe relationships between variables in a compact and precise way. While seemingly simple, its power lies in its flexibility and depth. If you've studied calculus, you're familiar with the concept of a function, but reviewing its nuances can help unlock a deeper understanding of differential equations and mathematical modeling.  A function, in essence, is a rule that assigns to each input value exactly one output value. For example, the function takes any input , squares it, and returns the result. The notation doesn't just give the value of the function for a specific ; it also reminds us of the relationship between the input and output.  In the context of differential equations, function notation often appears alongside derivatives, such as or . These expressions indicate the rate of change of a function and are critical for describing real-world phenomena like motion, population growth, or heat transfer.  Simple Function Example  Suppose . What is ?  To evaluate, substitute into the function: This tells us that when the input is 4, the output of the function is 11.   Function notation also allows us to describe more complex relationships. For instance, in the differential equation , we use functions and to represent how the rate of change of depends separately on and . Each function is flexible enough to represent anything from a simple polynomial to a more intricate expression involving trigonometric or exponential terms.  Function Composition and Relationships  Consider two functions: and . The composition of these functions, written as , represents the output of when is used as its input. That is: This compact notation conveys a lot of information and is frequently used in modeling.   Function notation is especially powerful when combined with initial conditions in differential equations. For example, if we know that and , we can interpret as a function that satisfies both the differential equation and the initial condition. Here, tells us that when , the output of the function is 5.  Function Notation in Initial Value Problems  Solve the initial value problem:   Start by finding the general solution: Then, use the initial condition to determine : Thus, the particular solution is:    To summarize, function notation is not just a way to write formulas, it is a powerful language for describing relationships, modeling systems, and solving problems. Mastering function notation ensures a smoother understanding of differential equations and opens the door to a deeper appreciation of how mathematics connects to the real world.  Function notation is a critical tool in mathematics, especially when working with differential equations. It allows us to concisely express relationships between variables, their rates of change, and how these relationships evolve over time or in different contexts. However, interpreting function notation requires careful attention to what each part of the equation represents.  Consider the following equation: At first glance, this equation may seem intimidating, but it is simply a mathematical way to describe how a function behaves. Let's break it down piece by piece.   Key Components of Function Notation  1. The Function : In this equation, is a function of , meaning its value depends on the variable . For instance, might represent a population at time , the temperature at a certain moment, or the position of an object.  2. Derivatives : The term represents the th derivative of with respect to . Derivatives measure how changes as changes. For example:  is the first derivative and represents the rate of change of .  is the second derivative and measures how the rate of change itself is changing.    3. Coefficients and Functions : The terms and are functions of . They act as \"modifiers\" that influence the behavior of . For example:  scales by a factor that depends on .  represents an external input or forcing term that drives the system.  These terms make the equation more flexible and realistic for modeling real-world systems.    Interpreting an Equation  To better understand function notation, let's examine an example: This is a second-order differential equation where:  is the second derivative of , representing acceleration or curvature in the system.  adds a damping term proportional to the first derivative (rate of change).  scales the function by a constant factor.  is an external input that decays over time, influencing .  Together, these terms describe a system whose behavior depends on how and its derivatives interact with both internal factors (like ) and external forces ( ).  When you encounter equations like this, focus on identifying the structure:  What is the highest-order derivative? This tells you the order of the equation.  Are there any coefficients (like or ) or functions (like ) that modify the behavior of ?  Is there an external forcing term (e.g., ) driving the system?  By answering these questions, you can build an intuition for how the equation models a real-world phenomenon.    Breaking Down an Equation  Let's analyze: This is a first-order differential equation where:  represents how changes with respect to .  is a coefficient that depends on , scaling .  The product shows that the rate of change of depends on both and the current value of .  This form is separable, as we can rewrite it as: Recognizing this structure helps us know how to approach solving the equation.   Understanding function notation is key to reading, interpreting, and solving differential equations. By breaking down each term and identifying its role, you can gain a clear picture of how an equation models a system's behavior. Whether you're dealing with a simple equation like or a complex one like , function notation provides a powerful framework for understanding and solving mathematical problems.   Solving Polynomial Equations  Higher-degree polynomial equations have the form and it turns out that these equations can always be factored into simpler polynomials. In particular, a polynomial of degree can always be factored into linear factors: where are the solutions and can be real or complex. This fact is known as the Fundamental Theorem of Algebra.   A \"complex\" solution is one that can contain (imaginary part).  For example, the equation has two complex solutions since   While knowing this is powerful, the process of factoring them can be quite challenging. However, there are some special forms and strategies that can help. A few are summarized below.  ✳️ Techniques for Solving Higher-Degree Polynomials    Recognizing Special Forms  Some polynomials can be factored using special patterns. Common forms include:  Common Factoring:  Difference of Squares:  Sum\/Difference of Cubes:  Recognizing these forms can help simplify the factorization process.   Known Factors  If you know one factor, then you can divide-out the polynomial by this factor. For example, suppose we know that is a root of the polynomial . Then, we know that is a factor, so where is some second-degree polynomial you multiply by to get our original polynomial. We can find by dividing both sides by , like so Therefore,    Possible Rational Roots  There is a theorem that tells us potential fractional roots of the polynomial. If is a solution, then must be of the form . This gives us a list of possible solutions to test. For example, if we have the polynomial then the possible factors of are and the possible factors of are . Therefore, the possible fractional solutions are We can test each of these values to find up to 3 solutions. Once we find one, we can use the previous technique to help find more.   Use Technology  Factoring higher-order polynomials can be very difficult to do by and this is one skill that may be better suited for a computer. There are many software packages that can factor polynomials for you. For example, the Wolfram Alpha website will do it with ease.        Completely factor and solve the following characteristic equations                           The degree of each equation tells you how many factors you should have.            difference of squares     set each factor to 0     solutions                difference of squares     solutions                common factor      standard quadratic factoring     solutions                common factor     solutions      Technically, and represents 4 repeated factors.              common factor      difference of squares     solutions                common factor      difference of squares     solutions                difference of squares      difference of squares     set each factor to 0     solutions          An important concept to remember is that any polynomial can be factored into the product of linear factors, allowing for complex solutions. This is known as the Fundamental Theorem of Algebra. However, factoring higher-degree polynomials can sometimes be challenging and may require the use of technology, such as computer algebra systems or graphing calculators, to find complex or irrational roots.  By combining these techniques, we can solve for the roots of any higher-degree polynomial. Once we have the roots, we can construct the general solution to the higher-order LHCC equation.  For a higher-order LHCC equation like: , the characteristic equation is the polynomial equation we just discussed. Finding the roots of this polynomial gives us the general solution: , where are constants determined by initial conditions.  Let's see an example to solidify these concepts.  Solving a Third-Degree Polynomial Equation   Find the general solution to the third-order LHCC equation:       First, write down the characteristic equation: . Factoring the polynomial, we get: . Therefore, the roots are .  Since we have three distinct real roots, the general solution to the LHCC equation is: , where are constants determined by initial conditions.    Polynomail Division  Use polynomial divison to compute                                                                                     Therefore, .    Rational Functions  Rational functions are a fundamental concept in algebra and calculus, and they play a significant role in differential equations. A rational function is defined as the ratio of two polynomials.  Rational Function  A rational function is a function that is the division of two polynomials.  For example, the following are rational functions in the variables , , and , respectively: .    Partial Fraction Decomposition  Partial fraction decomposition is a method used to express a rational function as a sum of simpler fractions. This process is especially useful when solving integrals and applying inverse Laplace transforms. The following steps outline the process to find the partial fraction decomposition of a rational function.   Check the Degree of the Numerator and Denominator  Ensure the degree of the numerator is less than the degree of the denominator. If the numerator has a degree greater than or equal to the denominator, first perform polynomial long division to reduce the degree of the numerator.   Factor the Denominator  Factor the denominator into irreducible linear or quadratic factors.   Linear factors: Expressions of the form .   Irreducible quadratic factors: Expressions of the form where the discriminant is negative.     Set up the Partial Fraction Decomposition  Based on the factors of the denominator, write the decomposition:  For each linear factor , include a term of the form .  For repeated linear factors , include terms like:   For irreducible quadratic factors , include a term of the form .  For repeated quadratic factors , include terms like:      Solve for the Constants  Multiply both sides of the equation by the common denominator and expand to eliminate fractions. Group terms by powers of and set up a system of equations to solve for the unknown constants , , and .   Final Result  Once the constants are found, write the final partial fraction decomposition. This decomposition can now be used for further calculations such as integrals or inverse Laplace transforms.    ✳️ Reference: Partial Fraction General Form Terms  For each type of factor in the denominator, add the following terms to the partial fraction decomposition:    Factor Type  Factor  Term(s) In General Form    Linear      Repeated Linear      Irreducible Quadratic      Repeated Quadratic        Find the partial fraction decomposition form for each.      First, factor the denominator: The denominator has the following factors:   (linear, single)   (linear, single)  Hence, the FORM of the partial fraction decomposition is:        Since the denominator is already factored, we see that the denominator has the following factors:   (linear, double)   (linear, distinct)  Hence, the FORM of the partial fraction decomposition is:        Here we need to finish factoring the denominator: Now we see that the denominator has the following factors:   (linear, double)   (linear, double)  Hence, the FORM of the partial fraction decomposition is:        Here we need to finish factoring the denominator: Now we see that (which is linear), is a factor (three times) of the denominator. Hence, the FORM of the partial fraction decomposition is:        Find the partial fraction decomposition of .   Factor the denominator as . The partial fraction decomposition is:   Multiply through by and solve for , , and .   Expanding and comparing coefficients, we find:   Therefore, the partial fraction decomposition is:      General Form   Find the FORM of the partial fraction decomposition for each of the following. Make sure you completely factor each denominator before determining the decomposition. You need not find the values of the coefficients  etc.          Since the denominator is already factored, we see that the denominator has the following factors:   (linear, double)   (linear, distinct)  Hence, the FORM of the partial fraction decomposition is:                 Here we need to finish factoring the denominator: Now we see that the denominator has the following factors:   (linear, double)   (linear, double)  Hence, the FORM of the partial fraction decomposition is:                 Here we need to finish factoring the denominator: Now we see that (which is linear), is a factor (three times) of the denominator. Hence, the FORM of the partial fraction decomposition is:                 Here we need to finish factoring the denominator: Now we see that the denominator has the following factors:   (linear, single)   (linear, single)   (irreducible quadratic, single)  Hence, the FORM of the partial fraction decomposition is:                 Here we need to finish factoring the denominator: Now we see that the denominator has the following factors:   (linear, single)   (linear, single)   (irreducible quadratic, single)  Hence, the FORM of the partial fraction decomposition is:                 Here we need to finish factoring the denominator: Now we see that the denominator has the following factors:   (linear, single)   (linear, single)   (irreducible quadratic, single)  Hence, the FORM of the partial fraction decomposition is:                 Here we need to finish factoring the denominator: Now we see that the denominator has the following factors:   (linear, double)   (linear, double)  Hence, the FORM of the partial fraction decomposition is:                 Here we need to finish factoring the denominator: Now we see that the denominator has the following factors:   (linear, single)   (linear, single)   (irreducible quadratic, single)  Hence, the FORM of the partial fraction decomposition is:                 First, factor the denominator: The denominator has the following factors:   (linear, single)   (linear, single)   (linear, single)  Hence, the FORM of the partial fraction decomposition is:                   First, factor the denominator: The denominator has the following factors:   (linear, single)   (linear, single)  Hence, the FORM of the partial fraction decomposition is:             Partial Fraction Decomposition   Find the partial fraction decomposition for each of the following rational functions.          First, factor the denominator: The denominator has the following factors:   (linear, single)   (linear, single)   (linear, single)  Hence, the FORM of the partial fraction decomposition is: Multiply both sides by the common denominator and solve for  and                   Since the denominator is already factored, we see that the denominator has the following factors:   (linear, double)   (linear, distinct)  Hence, the FORM of the partial fraction decomposition is: Multiply both sides by the common denominator and solve for  and                 Here we need to finish factoring the denominator: Now we see that the denominator has the following factors:   (linear, double)   (linear, double)  Hence, the FORM of the partial fraction decomposition is: Multiply both sides by the common denominator and solve for   and                 Here we need to finish factoring the denominator: Now we see that (which is linear), is a factor (three times) of the denominator. Hence, the FORM of the partial fraction decomposition is: Multiply both sides by the common denominator and solve for  and                 Here we need to finish factoring the denominator: Now we see that the denominator has the following factors:   (linear, single)   (linear, single)   (irreducible quadratic, single)  Hence, the FORM of the partial fraction decomposition is: Multiply both sides by the common denominator and solve for   and                 Here we need to finish factoring the denominator: Now we see that the denominator has the following factors:   (linear, single)   (linear, single)   (irreducible quadratic, single)  Hence, the FORM of the partial fraction decomposition is: Multiply both sides by the common denominator and solve for   and                 Here we need to finish factoring the denominator: Now we see that the denominator has the following factors:   (linear, single)   (linear, single)   (irreducible quadratic, single)  Hence, the FORM of the partial fraction decomposition is: Multiply both sides by the common denominator and solve for   and                 Here we need to finish factoring the denominator: Now we see that the denominator has the following factors:   (linear, double)   (linear, double)  Hence, the FORM of the partial fraction decomposition is: Multiply both sides by the common denominator and solve for   and                 Here we need to finish factoring the denominator: Now we see that the denominator has the following factors:   (linear, single)   (linear, single)   (irreducible quadratic, single)  Hence, the FORM of the partial fraction decomposition is: Multiply both sides by the common denominator and solve for   and                        and                                                                                               Piecewise Defined Functions  We will encounter piecewise defined functions in differential equations when we think about some physical phenomenon. For example, we might consider the vibration of an airplane wing that is struck by some external object or a circuit that is initially open and then we close the circuit and the current immediately starts flowing. Both of these scenarios would require a piecewise defined function because there is a moment in time when something about the physical system changes.  As such, we need to remember how piecewise defined functions work. Consider the function   If we want to evaluate the function at a particular -value, we use the restrictions on the right to point us to which piece of the function definition we should use. For example, if we want to know , then we look over at that right side and see that 3 falls into the interval so we use the corresponding function, . Thus,   If we want to graph, we also use those restrictions. When , or equivalently when is in the interval we know that the graph of will look like the horizontal line ; on the interval the graph will look like the graph of the parabola ; etc.  In the plots below you can see the entire graphs of the functions, dotted, with a solid segment that will be part of the piecewise function .          Now we are prepared to assemble the pieces and generate the graph of the piecewise-defined function .                     If you'd like more of a review feel free to look at VMI's precalculus text, here   Now you try some.   Sketch each of the following piecewise defined functions.                                     Recursive functions  We often use subscript notation when the function is a recursive function, where we rely on knowing previous values in order to compute the next value, as in the example below. Example: Suppose and   [(a)] Find the value of  Answer: One way to read this definition is: ``To get the next value of --the value at we take 3 times the previous value of --the value at --and then add two. In this example, we know the value of at because we are given that Then we can find the next value of --the value at --as follows:    [(b)] Find the value of  Answer: If we use the formula above, with then we have It looks like we actually need to know the value of ...and it turns out that in order to know the value of we actually need to know the value of ...which requires that we know the value of --which we already found. So here goes:   The bottom line with recursive functions is that if we know we can find and then we can find and so on. But if we want to know for example, we need to know ALL of the previous -values . Side note: You may recall some of this from studying sequences and series in calculus. In calculus we sometimes looked for a pattern so we could avoid having to compute all previous values. That's a great skill, and it might even work for the examples below, but we won't generally be able to do that in differential equations.   Now you try:   Given the definition of a recursive function in subscript notation, find the value of the given term.   If and evaluate             If and evaluate             If and evaluate                Interrelated functions  In differential equations, we will encounter functions involving subscripts that are interrelated. Let's look at an example like that. Example: Suppose: Find the values of and  First we would try to find Notice that when we use the formula, we have While we do have the values of and we don't yet have the value of So we'll find that first: Now we have all the information we need to find  Now we proceed in the same manner. First we find  Then we find     Find given the following information about and              Find given the following information about and              Find given the following information about and                Units, Mass, Volume, Concentration  We're about to start working on applications involving mixing solutions in tanks. That means we need to be mindful of units (for example--we can't add miles and kilograms), mass balance, and volumes. We also can develop some intuition that will be helpful when we tackle more complicated questions.   Consider the equation where is a speed and has units of miles\/hour. The variable represents distance and has units miles. What units must the variable have?   In order to make the unit analysis work, we would need to have units of hours .    hours     Consider the equation where has units of moles\/hour and has units of gallons\/hour. What must the units of be?   In order to make the unit analysis work, we would need to have units of moles\/gallon .    moles\/gallon     Consider the equation where has units of ft lb\/sec, has units of ft, has units of lb\/sec. What must the units of be?   In order to make the unit analysis work, we would need to have units of ft lb\/sec .    ft lb\/sec     Consider the tank below, which has salt water solutions (also called brines) entering via two input lines (A and B) and has one output line (C).       If the tank level does not change, what volumetric flow rate must be leaving via the output line C?   Brine is entering the tank at volumetric flow rate Since the tank level does not change, brine must leave at the same rate, 14 L\/min .    14 L\/min     The concentration (in kg\/L) of salt in each brine solution is shown in the figure. At what rate (in kg\/min) is salt entering the tank?   Salt is entering the tank via inlet A at a rate Similarly, salt enters via inlet B at a rate Altogether, then, salt enters at a rate of 64 kg\/min .    64 kg\/min     Consider the tank below, which has liquid entering via two input lines (A and B) and has one output line (C).       If the tank level does not change, what volumetric flow rate must be entering via the input line B?   Brine is leaving the tank at volumetric flow rate 10 gal\/sec. Inlet A contributes 4 gal\/sec, which means that if the tank level is to remain constant, inlet B must contribute 6 gal\/sec .    6 gal\/sec     The concentration (in lb\/gal) of salt in each brine solution is shown in the figure. Assuming the tank level doesn't change, at what rate (in lb\/sec) is salt entering the tank?   Salt is entering the tank via inlet A at a rate Similarly, salt enters via inlet B at a rate Altogether, then, salt enters at a rate of 26 lb\/sec .    26 lb\/sec     Consider the tank below, which has liquid entering via two input lines (A and B) and has one output line (C).       What happens to the level of the tank over time? Be specific.   Liquid is entering at a rate of 7+10 = 17 L\/min. It leaves at a rate of 12 L\/min. That means that the amount of liquid in the tank increases at a rate of 5 L\/min.    increases (volume increases at a rate of 5 L\/min)     If the tank has a capacity of 1500 L, and is empty at time minutes, write a function for volume of liquid in the tank at time minutes.   Since the amount of liquid in the tank increases at a rate of 5 L\/min, we have Since the capacity of the tank is 1500 L, this equation only works for minutes.          Consider the tank below, which has liquid entering via one input line (A) and is drained via one output line (B).       Suppose the tank initially contains 50 L of water that is dark red due to food coloring and that the liquid entering the tank is pure water. Imagine that we allow the pure water to enter the tank and the mixed solution to drain out of the tank for a really long time; you can think about it happening for years, if it helps. What color would you expect the water in the tank to be after a really long time?   Over time we would expect that the water in the tank is almost identical to the incoming fluid. Therefore, we expect the tank be clear (i.e., pure water).    clear (i.e., pure water)     Suppose the tank initially contains 50 L of pure water and that the liquid entering the tank is water that is dark red due to food coloring. Imagine that we allow the dark red water to enter the tank and the mixed solution to drain out of the tank for a really long time; you can think about it happening for years, if it helps. What color would you expect the water in the tank to be after a really long time?   Over time we would expect that the water in the tank is almost identical to the incoming fluid. Therefore, we expect the tank to have dark red water--the same as the incoming water.    dark red (same as incoming water)     Consider the tank below, which has liquid entering via an input line (A) and is drained via one output line (B).   Suppose the tank initially contains 50 gallons of a salt water solution (also called a brine) with concentration 6 lb\/gal, and that the liquid entering the tank is pure water.    How much salt is initially in the tank?   Initially we have     300 lb     Imagine that we allow the pure water to enter the tank and the mixed solution to drain out of the tank for a really long time; you can think about it happening for years, if it helps. What concentration of salt do you expect there to be in the tank after a long time?   Initially we have salt in the tank, but over time, no salt is added but the solution is drained, so more and more salt leaves the tank. Over time we would expect that the concentration of salt would decrease to 0 lb\/gal .    0 lb\/gal     How much salt do you expect to be in the tank after a long time? (Note that this is a slightly different question than the previous question.)    Consider the tank below, which has liquid entering via one input line (A) and is drained via one output line (B).   Suppose the tank initially contains 50 L of a brine with concentration 6 kg\/L, and that the liquid entering the tank is a brine with concentration 8 kg\/L.    Imagine that we allow the brine to enter the tank and the mixed solution to drain out of the tank for a really long time; you can think about it happening for years, if it helps. What concentration of salt do you expect there to be in the tank after a long time?   Over time we would expect that the fluid in the tank is almost identical to the incoming fluid. Therefore, we expect the concentration of salt to be 8 kg\/L .    8 kg\/L     How much salt do you expect to be in the tank after a long time? (Note that this is a slightly different than asking about the concentration of salt. Hint: use units!)   Since we expect the concentration to be 8 kg\/L, and there are 50 L of solution in the tank (which doesn't change because the volumetric flow rate in is equal to the volumetric flow rate out), then we expect there will be     400 kg       "
},
{
  "id": "like-terms",
  "level": "2",
  "url": "algebra-review.html#like-terms",
  "type": "🧠 Derivation",
  "number": "233",
  "title": "like-terms.",
  "body": "like-terms   Terms are called like-terms if they have identical variable parts. That is, they differ only by a coefficient. like-terms can be combined via addition and subtraction. For example, the and terms below are pairs of like-terms, which can be combined as follows: .   "
},
{
  "id": "review-quadratic-eqns-3",
  "level": "2",
  "url": "algebra-review.html#review-quadratic-eqns-3",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Solve the following quadratic equations. Note: It's OK if the solutions are complex or imaginary. "
},
{
  "id": "solving-the-quadratic-equation-2",
  "level": "2",
  "url": "algebra-review.html#solving-the-quadratic-equation-2",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "roots discriminant "
},
{
  "id": "review-completing-the-sqr-5",
  "level": "2",
  "url": "algebra-review.html#review-completing-the-sqr-5",
  "type": "🌌 Example",
  "number": "234",
  "title": "<em class=\"emphasis\">Complete the Square of each Quadratic<\/em>.",
  "body": "Complete the Square of each Quadratic   Since , we add and substract .     Since , we add and substract .     Since , we add and substract .    "
},
{
  "id": "review-completing-the-sqr-6",
  "level": "2",
  "url": "algebra-review.html#review-completing-the-sqr-6",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Complete the square for each of the following expressions. Verify by expanding your expression. "
},
{
  "id": "review-point-slope-3",
  "level": "2",
  "url": "algebra-review.html#review-point-slope-3",
  "type": "🌌 Example",
  "number": "235",
  "title": "Writing a Line from Two Points.",
  "body": " Writing a Line from Two Points  Given the points and , (i) write the equation of the line through the points in point-slope form, and then (ii) solve for the dependent variable .   First, compute the slope:   Now write the point-slope form:   (i) Using either point:   (ii) Solve for :    "
},
{
  "id": "review-point-slope-4",
  "level": "2",
  "url": "algebra-review.html#review-point-slope-4",
  "type": "🌌 Example",
  "number": "236",
  "title": "Practice Writing Equations of Lines.",
  "body": " Practice Writing Equations of Lines  Use the given points to: (i) write the equation, in point-slope form, of the line through the points, and then (ii) solve for the dependent variable .    and    Find the slope: (i) Write the point-slope form: (ii) Solve for :       and    Find the slope: (i) Write the point-slope form: (ii) Solve for :       and    Find the slope: (i) Write the point-slope form: (ii) Solve for :     "
},
{
  "id": "r-01-04-exp_logs_ex_01",
  "level": "2",
  "url": "algebra-review.html#r-01-04-exp_logs_ex_01",
  "type": "🌌 Example",
  "number": "237",
  "title": "",
  "body": " Solve for :    We might begin by isolating the exponential that contains and then taking the natural log of both sides.   It's worth noting that we cannot break up that log on the right hand side. There's no \"rule\" that helps when we have addition inside a logarithm.  There is another way to approach this if notice that appears inside both exponential terms. The answers may look different, but they are equivalent and both are correct.   "
},
{
  "id": "r-01-04-exp_logs_ex_02",
  "level": "2",
  "url": "algebra-review.html#r-01-04-exp_logs_ex_02",
  "type": "🌌 Example",
  "number": "238",
  "title": "",
  "body": " Solve for :    We'll carefully apply the rules above. We want to get our hands on , and right now its inside a logarithm. In order to undo that, we'll exponentiate both sides.    "
},
{
  "id": "review-exponents-logarithms-9",
  "level": "2",
  "url": "algebra-review.html#review-exponents-logarithms-9",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Use algebra and the rules above to solve for in each of the following equations. "
},
{
  "id": "eulers-formula",
  "level": "2",
  "url": "algebra-review.html#eulers-formula",
  "type": "📙 Definition",
  "number": "239",
  "title": "Euler’s Formula.",
  "body": "Euler's Formula   For any real number , we have   where is the imaginary unit, defined as .  As a result of this formula, we also have    "
},
{
  "id": "function-notation-example-1",
  "level": "2",
  "url": "algebra-review.html#function-notation-example-1",
  "type": "🌌 Example",
  "number": "240",
  "title": "Simple Function Example.",
  "body": "Simple Function Example  Suppose . What is ?  To evaluate, substitute into the function: This tells us that when the input is 4, the output of the function is 11.  "
},
{
  "id": "function-notation-example-2",
  "level": "2",
  "url": "algebra-review.html#function-notation-example-2",
  "type": "🌌 Example",
  "number": "241",
  "title": "Function Composition and Relationships.",
  "body": "Function Composition and Relationships  Consider two functions: and . The composition of these functions, written as , represents the output of when is used as its input. That is: This compact notation conveys a lot of information and is frequently used in modeling.  "
},
{
  "id": "function-notation-example-3",
  "level": "2",
  "url": "algebra-review.html#function-notation-example-3",
  "type": "🌌 Example",
  "number": "242",
  "title": "Function Notation in Initial Value Problems.",
  "body": "Function Notation in Initial Value Problems  Solve the initial value problem:   Start by finding the general solution: Then, use the initial condition to determine : Thus, the particular solution is:   "
},
{
  "id": "function-notation-components-2",
  "level": "2",
  "url": "algebra-review.html#function-notation-components-2",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "The Function "
},
{
  "id": "function-notation-components-3",
  "level": "2",
  "url": "algebra-review.html#function-notation-components-3",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Derivatives "
},
{
  "id": "function-notation-components-4",
  "level": "2",
  "url": "algebra-review.html#function-notation-components-4",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Coefficients and Functions "
},
{
  "id": "function-notation-example-4",
  "level": "2",
  "url": "algebra-review.html#function-notation-example-4",
  "type": "🌌 Example",
  "number": "243",
  "title": "Breaking Down an Equation.",
  "body": " Breaking Down an Equation  Let's analyze: This is a first-order differential equation where:  represents how changes with respect to .  is a coefficient that depends on , scaling .  The product shows that the rate of change of depends on both and the current value of .  This form is separable, as we can rewrite it as: Recognizing this structure helps us know how to approach solving the equation.  "
},
{
  "id": "review-polynomial-eqns-4",
  "level": "2",
  "url": "algebra-review.html#review-polynomial-eqns-4",
  "type": "🌌 Example",
  "number": "244",
  "title": "",
  "body": "  Completely factor and solve the following characteristic equations                           The degree of each equation tells you how many factors you should have.            difference of squares     set each factor to 0     solutions                difference of squares     solutions                common factor      standard quadratic factoring     solutions                common factor     solutions      Technically, and represents 4 repeated factors.              common factor      difference of squares     solutions                common factor      difference of squares     solutions                difference of squares      difference of squares     set each factor to 0     solutions         "
},
{
  "id": "review-polynomial-eqns-9",
  "level": "2",
  "url": "algebra-review.html#review-polynomial-eqns-9",
  "type": "🌌 Example",
  "number": "245",
  "title": "Solving a Third-Degree Polynomial Equation.",
  "body": "Solving a Third-Degree Polynomial Equation   Find the general solution to the third-order LHCC equation:       First, write down the characteristic equation: . Factoring the polynomial, we get: . Therefore, the roots are .  Since we have three distinct real roots, the general solution to the LHCC equation is: , where are constants determined by initial conditions.   "
},
{
  "id": "rational-function",
  "level": "2",
  "url": "algebra-review.html#rational-function",
  "type": "📙 Definition",
  "number": "246",
  "title": "Rational Function.",
  "body": "Rational Function  A rational function is a function that is the division of two polynomials.  For example, the following are rational functions in the variables , , and , respectively: .  "
},
{
  "id": "review-pfd-3-2-2",
  "level": "2",
  "url": "algebra-review.html#review-pfd-3-2-2",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Linear factors: Irreducible quadratic factors: "
},
{
  "id": "partial-fraction-table-3",
  "level": "2",
  "url": "algebra-review.html#partial-fraction-table-3",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Factor Type Factor Term(s) In General Form Linear Repeated Linear Irreducible Quadratic Repeated Quadratic "
},
{
  "id": "review-pfd-5",
  "level": "2",
  "url": "algebra-review.html#review-pfd-5",
  "type": "🌌 Example",
  "number": "247",
  "title": "",
  "body": " Find the partial fraction decomposition form for each.      First, factor the denominator: The denominator has the following factors:   (linear, single)   (linear, single)  Hence, the FORM of the partial fraction decomposition is:        Since the denominator is already factored, we see that the denominator has the following factors:   (linear, double)   (linear, distinct)  Hence, the FORM of the partial fraction decomposition is:        Here we need to finish factoring the denominator: Now we see that the denominator has the following factors:   (linear, double)   (linear, double)  Hence, the FORM of the partial fraction decomposition is:        Here we need to finish factoring the denominator: Now we see that (which is linear), is a factor (three times) of the denominator. Hence, the FORM of the partial fraction decomposition is:      "
},
{
  "id": "review-pfd-6",
  "level": "2",
  "url": "algebra-review.html#review-pfd-6",
  "type": "🌌 Example",
  "number": "248",
  "title": "",
  "body": " Find the partial fraction decomposition of .   Factor the denominator as . The partial fraction decomposition is:   Multiply through by and solve for , , and .   Expanding and comparing coefficients, we find:   Therefore, the partial fraction decomposition is:    "
},
{
  "id": "review-pfd-7-1-3",
  "level": "2",
  "url": "algebra-review.html#review-pfd-7-1-3",
  "type": "Exercise",
  "number": "1",
  "title": "",
  "body": "       Since the denominator is already factored, we see that the denominator has the following factors:   (linear, double)   (linear, distinct)  Hence, the FORM of the partial fraction decomposition is:         "
},
{
  "id": "review-pfd-7-1-4",
  "level": "2",
  "url": "algebra-review.html#review-pfd-7-1-4",
  "type": "Exercise",
  "number": "2",
  "title": "",
  "body": "       Here we need to finish factoring the denominator: Now we see that the denominator has the following factors:   (linear, double)   (linear, double)  Hence, the FORM of the partial fraction decomposition is:         "
},
{
  "id": "review-pfd-7-1-5",
  "level": "2",
  "url": "algebra-review.html#review-pfd-7-1-5",
  "type": "Exercise",
  "number": "3",
  "title": "",
  "body": "       Here we need to finish factoring the denominator: Now we see that (which is linear), is a factor (three times) of the denominator. Hence, the FORM of the partial fraction decomposition is:         "
},
{
  "id": "review-pfd-7-1-6",
  "level": "2",
  "url": "algebra-review.html#review-pfd-7-1-6",
  "type": "Exercise",
  "number": "4",
  "title": "",
  "body": "       Here we need to finish factoring the denominator: Now we see that the denominator has the following factors:   (linear, single)   (linear, single)   (irreducible quadratic, single)  Hence, the FORM of the partial fraction decomposition is:         "
},
{
  "id": "review-pfd-7-1-7",
  "level": "2",
  "url": "algebra-review.html#review-pfd-7-1-7",
  "type": "Exercise",
  "number": "5",
  "title": "",
  "body": "       Here we need to finish factoring the denominator: Now we see that the denominator has the following factors:   (linear, single)   (linear, single)   (irreducible quadratic, single)  Hence, the FORM of the partial fraction decomposition is:         "
},
{
  "id": "review-pfd-7-1-8",
  "level": "2",
  "url": "algebra-review.html#review-pfd-7-1-8",
  "type": "Exercise",
  "number": "6",
  "title": "",
  "body": "       Here we need to finish factoring the denominator: Now we see that the denominator has the following factors:   (linear, single)   (linear, single)   (irreducible quadratic, single)  Hence, the FORM of the partial fraction decomposition is:         "
},
{
  "id": "review-pfd-7-1-9",
  "level": "2",
  "url": "algebra-review.html#review-pfd-7-1-9",
  "type": "Exercise",
  "number": "7",
  "title": "",
  "body": "       Here we need to finish factoring the denominator: Now we see that the denominator has the following factors:   (linear, double)   (linear, double)  Hence, the FORM of the partial fraction decomposition is:         "
},
{
  "id": "review-pfd-7-1-10",
  "level": "2",
  "url": "algebra-review.html#review-pfd-7-1-10",
  "type": "Exercise",
  "number": "8",
  "title": "",
  "body": "       Here we need to finish factoring the denominator: Now we see that the denominator has the following factors:   (linear, single)   (linear, single)   (irreducible quadratic, single)  Hence, the FORM of the partial fraction decomposition is:         "
},
{
  "id": "review-pfd-7-1-11",
  "level": "2",
  "url": "algebra-review.html#review-pfd-7-1-11",
  "type": "Exercise",
  "number": "9",
  "title": "",
  "body": "       First, factor the denominator: The denominator has the following factors:   (linear, single)   (linear, single)   (linear, single)  Hence, the FORM of the partial fraction decomposition is:           "
},
{
  "id": "review-pfd-7-1-12",
  "level": "2",
  "url": "algebra-review.html#review-pfd-7-1-12",
  "type": "Exercise",
  "number": "10",
  "title": "",
  "body": "       First, factor the denominator: The denominator has the following factors:   (linear, single)   (linear, single)  Hence, the FORM of the partial fraction decomposition is:           "
},
{
  "id": "review-pfd-7-2-3",
  "level": "2",
  "url": "algebra-review.html#review-pfd-7-2-3",
  "type": "Exercise",
  "number": "11",
  "title": "",
  "body": "       First, factor the denominator: The denominator has the following factors:   (linear, single)   (linear, single)   (linear, single)  Hence, the FORM of the partial fraction decomposition is: Multiply both sides by the common denominator and solve for  and           "
},
{
  "id": "review-pfd-7-2-4",
  "level": "2",
  "url": "algebra-review.html#review-pfd-7-2-4",
  "type": "Exercise",
  "number": "12",
  "title": "",
  "body": "       Since the denominator is already factored, we see that the denominator has the following factors:   (linear, double)   (linear, distinct)  Hence, the FORM of the partial fraction decomposition is: Multiply both sides by the common denominator and solve for  and         "
},
{
  "id": "review-pfd-7-2-5",
  "level": "2",
  "url": "algebra-review.html#review-pfd-7-2-5",
  "type": "Exercise",
  "number": "13",
  "title": "",
  "body": "       Here we need to finish factoring the denominator: Now we see that the denominator has the following factors:   (linear, double)   (linear, double)  Hence, the FORM of the partial fraction decomposition is: Multiply both sides by the common denominator and solve for   and         "
},
{
  "id": "review-pfd-7-2-6",
  "level": "2",
  "url": "algebra-review.html#review-pfd-7-2-6",
  "type": "Exercise",
  "number": "14",
  "title": "",
  "body": "       Here we need to finish factoring the denominator: Now we see that (which is linear), is a factor (three times) of the denominator. Hence, the FORM of the partial fraction decomposition is: Multiply both sides by the common denominator and solve for  and         "
},
{
  "id": "review-pfd-7-2-7",
  "level": "2",
  "url": "algebra-review.html#review-pfd-7-2-7",
  "type": "Exercise",
  "number": "15",
  "title": "",
  "body": "       Here we need to finish factoring the denominator: Now we see that the denominator has the following factors:   (linear, single)   (linear, single)   (irreducible quadratic, single)  Hence, the FORM of the partial fraction decomposition is: Multiply both sides by the common denominator and solve for   and         "
},
{
  "id": "review-pfd-7-2-8",
  "level": "2",
  "url": "algebra-review.html#review-pfd-7-2-8",
  "type": "Exercise",
  "number": "16",
  "title": "",
  "body": "       Here we need to finish factoring the denominator: Now we see that the denominator has the following factors:   (linear, single)   (linear, single)   (irreducible quadratic, single)  Hence, the FORM of the partial fraction decomposition is: Multiply both sides by the common denominator and solve for   and         "
},
{
  "id": "review-pfd-7-2-9",
  "level": "2",
  "url": "algebra-review.html#review-pfd-7-2-9",
  "type": "Exercise",
  "number": "17",
  "title": "",
  "body": "       Here we need to finish factoring the denominator: Now we see that the denominator has the following factors:   (linear, single)   (linear, single)   (irreducible quadratic, single)  Hence, the FORM of the partial fraction decomposition is: Multiply both sides by the common denominator and solve for   and         "
},
{
  "id": "review-pfd-7-2-10",
  "level": "2",
  "url": "algebra-review.html#review-pfd-7-2-10",
  "type": "Exercise",
  "number": "18",
  "title": "",
  "body": "       Here we need to finish factoring the denominator: Now we see that the denominator has the following factors:   (linear, double)   (linear, double)  Hence, the FORM of the partial fraction decomposition is: Multiply both sides by the common denominator and solve for   and         "
},
{
  "id": "review-pfd-7-2-11",
  "level": "2",
  "url": "algebra-review.html#review-pfd-7-2-11",
  "type": "Exercise",
  "number": "19",
  "title": "",
  "body": "       Here we need to finish factoring the denominator: Now we see that the denominator has the following factors:   (linear, single)   (linear, single)   (irreducible quadratic, single)  Hence, the FORM of the partial fraction decomposition is: Multiply both sides by the common denominator and solve for   and         "
},
{
  "id": "review-pfd-7-2-12",
  "level": "2",
  "url": "algebra-review.html#review-pfd-7-2-12",
  "type": "Exercise",
  "number": "20",
  "title": "",
  "body": "              and               "
},
{
  "id": "review-pfd-7-2-13",
  "level": "2",
  "url": "algebra-review.html#review-pfd-7-2-13",
  "type": "Exercise",
  "number": "21",
  "title": "",
  "body": "                  "
},
{
  "id": "review-pfd-7-2-14",
  "level": "2",
  "url": "algebra-review.html#review-pfd-7-2-14",
  "type": "Exercise",
  "number": "22",
  "title": "",
  "body": "                  "
},
{
  "id": "review-pfd-7-2-15",
  "level": "2",
  "url": "algebra-review.html#review-pfd-7-2-15",
  "type": "Exercise",
  "number": "23",
  "title": "",
  "body": "                  "
},
{
  "id": "review-pfd-7-2-16",
  "level": "2",
  "url": "algebra-review.html#review-pfd-7-2-16",
  "type": "Exercise",
  "number": "24",
  "title": "",
  "body": "                  "
},
{
  "id": "review-piecewise-functions-13",
  "level": "2",
  "url": "algebra-review.html#review-piecewise-functions-13",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Sketch each of the following piecewise defined functions. "
},
{
  "id": "review-units-2",
  "level": "2",
  "url": "algebra-review.html#review-units-2",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "hours moles\/gallon ft lb\/sec 14 L\/min 64 kg\/min 6 gal\/sec 26 lb\/sec really really 0 lb\/gal 8 kg\/L "
},
{
  "id": "calculus-review",
  "level": "1",
  "url": "calculus-review.html",
  "type": "Chapter",
  "number": "",
  "title": "Calculus",
  "body": " Calculus   Limits at infinity  I know. You thought your Calculus 1 instructor was crazy for spending sooooooo long on limits, especially when you were convinced you would never, ever use them, and now here they are again!  In this section, we'll focus our attention on limits at infinity. If you want a refresher, check out your Calculus 1 book (available online--just search for \"APEX calculus\".   Evaluate each of the following limits.    The limit of a constant is the constant, so          where is a constant  The limit of a constant is the constant, so            As increases to large positive values, the value of also increases to large positive values. Therefore            As increases to large positive values, the value of also increases to large positive values. Therefore            As increases to large positive values, the value of decreases to zero. Therefore             For what values of is the limit finite?  Hopefully you thought a little bit about this as you answered the previous question. If you think about it for a little bit, you'll come to realize that:  If then so .  If is negative, then as increases to large positive values, the value of decreases to zero. Therefore   Hence, the limit finite when .          Evaluate each of the following limits.                 where is a constant and                 where is a constant and .                where is a constant and .                where is a constant and                 where is a constant and                 where is a constant and .                    L'Hospital's Rule  Consider the following three limits. Typically when we evaluate limits, we first attempt a direct substitution. Note that all three evaluate to the indeterminant form . Since these are all rational functions, we have some algebraic techniques we can try. Here's one way each can be evaluated.  Is this result surprising to you? Each had the same value, , when we did direct substitution, but each has a different final answer. That's what it means to be indeterminant. we can't tell what the answer is just based on knowing that direct substitution yields .  We can do algebra when we have rational functions, but that doesn't work as well when we have exponential and trig functions. One technique you might consider using when you have indeterminant forms like or is L'Hospital's Rule. Here's a reminder.   L'Hospital's Rule. Suppose and are differentiable functions and we want to evaluate If direct substitution yields an indeterminant form or then assuming that the limit exists.    Here's how it works for one of the limits above. Recall that we MUST check to make sure that the limit is one of those indeterminant forms before we use L'Hospital's Rule. (And note that we did get the same answer we got before...which is good!)  If you want a more complete discussion and some examples, you can find more in your Calculus 1 book, which is available for free online (just search for \"APEX calculus\").   Evaluate each of the following limits. Use L'Hospital's Rule only if it applies.                                           where is a constant and                 Differentiation  Throughout the DEs course, we will be differentiating AND integrating. Let's review a few common rules used for differentiation.  Product Rule:    Quotient Rule:    Chain Rule:     Consider the following example.   Find the derivative of  We have a product of functions, so we will need to use the product rule. We also have a composition of functions because is inside of an sine function, so we will need to use the chain rule. Here's how it works.    Now you try.   Find the indicated derivatives.       Solution                                      Product Rule  The next technique for solving DEs we will study relies heavily on you knowing the Product Rule for differentiation inside and out, forward and backward (literally!). These problems are intended to help you review the Product Rule. (Don't forget about the chain rule, too!) Let's warm up by practicing using the product rule.   Write down the product rule.   Evaluate the following derivatives.                                          Suppose is a function of and use the product rule to rewrite the following:            Suppose is a function of and use the product rule to rewrite the following:            Now let's look at the product rule \"in the other direction\"... Or we can think about this as \"un-doing\" the product rule.  For example, if we have the expression then we can see that if we think identify as then Then we might label the expression as follows: This now looks like the result of having taken the derivative of a product. That is:   Now you try some.  Rewrite each of the following as the derivative of a product:                             Compute the derivative of the function           -substitution  When an antiderivative is not immediately obvious, we sometimes use a substitution. Substitution is a good choice when we have one part of the integrand \"looks like\" the derivative of another part of the integrand.  Here, \"looks like\" means equal, except for a multiplication of a constant. For example, we might say   \"looks like\" or  \"looks like\"     Let's look a a few examples   Compute  Since the derivative of is which \"looks like\" , then -substitution (with ) works well. Note, would also work.               Compute  Substitution is a good choice here because we have a natural log function and we have which is the derivative of natural log. So we would choose          We usually pause to confirm that the new integral is simpler than the original. In this case it certainly is, so we proceed to integrate and then change back to the original variable, .   Now you try some.  Evaluate each of the following integrals. Use proper notation.     We will choose Then Therefore we have:            We will choose Then and therefore Thus we have:            We will choose Then and therefore Thus we have:             Integration by parts  Integration by parts may be a good choice when the integrand contains a product. Recall the formula for integration by parts.   Let's consider the following example.  Evaluate  We choose and as follows: Then we find by taking the derivative of and by taking the antiderivative of : Thus we have:    Now you try some.   Evaluate each of the following integrals. Use proper notation.      We choose and as follows: Then we find by taking the derivative of and by taking the antiderivative of : Thus we have:           We choose and as follows: Then we find by taking the derivative of and by taking the antiderivative of : Thus we have: The remaining integral, is simpler than the one we started with, but we will need to do another integration by parts in order to evaluate it. Here we choose Then we find by taking the derivative of and by taking the antiderivative of : Now we pick up where we left off:          Integration by parts is a technique for transforming integrals in a way that makes them easier to solve. A good way to think about it is like redistributing \"work\" between two functions. One function takes on the derivative, while the other gets simplified through integration.  Imagine you have two workers. One is skilled at hard, repetitive tasks (like differentiating), and the other is better at creative problem-solving (like integrating). Integration by parts is like swapping their roles so that the right person handles the right task.   Breaking Down the Integration by Parts Formula  Let's break down the formula for integration by parts: .  Here's how it works:   is a function that you choose to differentiate (it should get simpler when differentiated).  is a part of the integrand that you choose to integrate (it should get easier when integrated).  is the new term after applying the product of and the integral of .  is the remaining integral, now simpler than the original.     Example: Applying Integration by Parts  Consider the integral: .  We'll apply integration by parts, following these steps:    Step 1:  Identify and . In this case, we choose and . This makes and .    Step 2:  Step 2: Substitute into the integration by parts formula: .    Step 3:  Step 3: Solve the remaining integral: .    Step 4:  Step 4: Combine the results: .    And that's the final result: .    Laplace Transform and Integration by Parts: An Analogy  When applying the Laplace Transform, think of it as a way of \"unwrapping\" the derivatives of a function. Just like how you can redistribute \"work\" between functions using integration by parts, the Laplace Transform temporarily converts a differential equation into an algebraic one, allowing you to solve it more easily.  Once the problem is solved in the transformed space, we can \"repackage\" the function by applying the inverse Laplace Transform, revealing the solution in its original form.     Improper Integrals  There are two types of improper integrals; the only type we'll be looking at in differential equations are the type where the upper limit of the integral is infinity. When we see improper integrals, we re-write the integral as a limit as follows. We don't have to use for the placeholder in the limit, but we shouldn't use any of the variables that is already in the integrand; in the above, we should not use or . Once we've written the improper integral as a limit, we integrate and use the fundamental theorem of calculus, keeping the limit as we go, and we evaluate the limit at the very end. Here's an example.   Compute      If you want more of a refresher, check out your Calculus 2 book (available online-- just search for \"APEX calculus\").   Evaluate the following integrals. Use proper limit notation.                 , where is a constant and                "
},
{
  "id": "r-01-12-6",
  "level": "2",
  "url": "calculus-review.html#r-01-12-6",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Evaluate each of the following limits. Use L'Hospital's Rule only if it applies. "
},
{
  "id": "rr_derivative_review",
  "level": "2",
  "url": "calculus-review.html#rr_derivative_review",
  "type": "🌌 Example",
  "number": "249",
  "title": "Find the derivative of <span class=\"process-math\">\\(h(x) = (x^5 + 4)\\sin(e^x)\\)<\/span>.",
  "body": " Find the derivative of  We have a product of functions, so we will need to use the product rule. We also have a composition of functions because is inside of an sine function, so we will need to use the chain rule. Here's how it works.   "
},
{
  "id": "r-01-01-6",
  "level": "2",
  "url": "calculus-review.html#r-01-01-6",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Find the indicated derivatives. "
},
{
  "id": "calculus-review-product-rule-8",
  "level": "2",
  "url": "calculus-review.html#calculus-review-product-rule-8",
  "type": "Checkpoint",
  "number": "250",
  "title": "",
  "body": " Compute the derivative of the function        "
},
{
  "id": "r-01-02-usub_ex_01",
  "level": "2",
  "url": "calculus-review.html#r-01-02-usub_ex_01",
  "type": "🌌 Example",
  "number": "251",
  "title": "Compute <span class=\"process-math\">\\(\\ds \\int \\, \\cos x\\sin x \\ dx\\)<\/span>.",
  "body": " Compute  Since the derivative of is which \"looks like\" , then -substitution (with ) works well. Note, would also work.             "
},
{
  "id": "r-01-02-usub_ex_02",
  "level": "2",
  "url": "calculus-review.html#r-01-02-usub_ex_02",
  "type": "🌌 Example",
  "number": "252",
  "title": "Compute <span class=\"process-math\">\\(\\ds \\int \\frac{1}{x}\\cdot \\ln(15x) dx\\)<\/span>.",
  "body": " Compute  Substitution is a good choice here because we have a natural log function and we have which is the derivative of natural log. So we would choose          We usually pause to confirm that the new integral is simpler than the original. In this case it certainly is, so we proceed to integrate and then change back to the original variable, .  "
},
{
  "id": "r-01-02-8",
  "level": "2",
  "url": "calculus-review.html#r-01-02-8",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Evaluate each of the following integrals. Use proper notation. "
},
{
  "id": "r-01-03-IBP_ex_01",
  "level": "2",
  "url": "calculus-review.html#r-01-03-IBP_ex_01",
  "type": "🌌 Example",
  "number": "253",
  "title": "Evaluate <span class=\"process-math\">\\(\\ds \\int t^3 \\ln t \\ dt \\)<\/span>.",
  "body": "Evaluate  We choose and as follows: Then we find by taking the derivative of and by taking the antiderivative of : Thus we have:   "
},
{
  "id": "r-01-03-6",
  "level": "2",
  "url": "calculus-review.html#r-01-03-6",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Evaluate each of the following integrals. Use proper notation. "
},
{
  "id": "ex_improper_integral_01",
  "level": "2",
  "url": "calculus-review.html#ex_improper_integral_01",
  "type": "🌌 Example",
  "number": "254",
  "title": "Compute <span class=\"process-math\">\\(\\int_1^{\\infty} \\frac{1}{x^2}dx\\)<\/span>.",
  "body": " Compute     "
},
{
  "id": "quick-references",
  "level": "1",
  "url": "quick-references.html",
  "type": "Section",
  "number": "",
  "title": "Quick References",
  "body": " Quick References   ℹ️ Clicking on A4 or US , will open a printer-friendly version of this resource.   Basics  Key Terms & Concepts   ✳️ Differential Equations and their Components    Differential Equation (DE)  An equation that involves one or more derivatives of an unknown function.   Variables  The dependent variable represents the unknown function that you are solving for and always has derivatives applied to it. The dependent variable is a function of the independent variable . In , dependent & independent .   Terms & Constant Terms  Parts of an equation separated by , , or and each containing a different form of the dependent variable. The collection of all terms without a dependent variable is referred to as a constant term .    Coefficients  The part of a term multiplied by the dependent variable or its derivatives.         ✳️ Order & Linearity    Order  The highest order derivative present in a DE.   Linear Term  A term of the form:   ,  where is the dependent variable, and is a coefficient that depends only on the independent variable .   Linear DE  A DE composed entirely of linear terms.   Nonlinear DE  A DE that contains at least one nonlinear term.         Solutions to Differential Equations  Key Terms & Concepts   ✳️ Solutions & Initial Conditions    Satisfying a DE  A function satisfies a DE if substituting it into the dependent variable results in the equation simplifying to a true statement (e.g., ).    A function that satisfies the DE.   General Solution  The common form (template) of all the solutions in the family. It contains constants that can take any value.   Particular Solution  A single solution obtained by assigning specific values to the constants in the general solution.   Family of Solutions  The collection of all possible particular solutions.   Initial Conditions  Known values of the solution or its derivatives at a specific point, used to determine a particular solution from the general solution.        ✳️ Direct Integration    Direct Integration  A method to solve differential equations of the form: by integrating both sides with respect to the independent variable .         Separation of Variables  Key Terms & Concepts   ✳️ First-Order Differential Equations    First-Order Differential Equation  Every first-order differential equation can be written in the form . This just means that all the terms in the equation have been moved to the left-hand side, which can only contain the independent variable, , the dependent variable, , and its derivative, .        ✳️ Separation of Variables    First-Order Separable Differential Equation  These equations can be written as:    Separation of Variables Method  A solution technique for separable equations. It involves isolating and terms on opposite sides, followed by integration.         Integrating Factor  Key Terms & Concepts   ✳️ Integrating Factor    First-Order Linear Differential Equation  These equations take the standard form:    Integrating Factor  A function, , multiplied onto the standard form, above, to reverse the product rule, leading to the equation, , with the solution    Integrating Factor Method  A solution method for first-order linear equations that uses an integrating factor to convert the equation into a form solvable by direct integration.         Qualitative Methods  Key Terms & Concepts    Numerical Methods  Key Terms & Concepts    Linear Homogeneous Differential Equations with Constant Coefficients   The LHCC chapter (Linear Homogeneous Differential Equations with Constant Coefficients) in \"Linear Constant Coefficient Methods\" introduces a systematic method to solve higher-order linear differential equations. Here's a summary based on the content:   Key Terms & Concepts   ✳️ Summary of the Key Ideas     Linear Homogeneous Differential Equations with Constant Coefficients (LHCC)   These are differential equations where each term consists of a derivative of the unknown function multiplied by a constant.  The general form of an LHCC equation is: .     The Characteristic Equation   By assuming a solution of the form , an LHCC can be reduced to a characteristic polynomial in .  The solutions to the characteristic equation determine the form of the general solution.     Solution Types   Let be a solution to the characteristic equation (CE).  If is different from all other solutions of the CE, then is a term of the general solution.  If is equal to, say, three other solutions of the CE, then are terms of the general solution.  If or , then the general solution contains .        LHCC Method  The general solution to a linear homogeneous differential equation with constant coefficients (LHCC) of the form can be found through the following steps...   Step 1: Solve the Characteristic Equation  Solve the characteristic equation (CE)    Step 2: Write Down the General Solution     Real & Different:   .   Real & Repeated:  (multiplicity ) .   Complex:   .   For mixed root types , combine the corresponding terms to form the complete general solution.         Substituting transforms the differential equation into an algebraic equation for .  The characteristic equation is a polynomial equation whose roots determine the fundamental solutions.  An n -th order LHCC equation always has n solutions, corresponding to the n roots of its characteristic equation.  Each real root leads to a solution of the form .   In the next subsection, we will explore how to construct the general solution by combining these exponential solutions appropriately.  The key ideas are:   The superposition principle allows us to sum independent solutions to form the general solution.  The number of fundamental solutions matches the order of the differential equation.  The general solution consists of all fundamental solutions, each multiplied by an arbitrary constant.   ✳️ Properties of LHCC Solutions  The solutions to any -th order linear homogeneous differential equation, have the following properties:    ✏️    Exponential Solutions . The order of equation tells us that it has exactly solutions, each assuming the form, , where and are numbers specific to this equation.     ✏️    Linearly Independent . The solutions to an -th order LHCC equation are linearly independent, meaning no two solutions can be combined into a single term.     ✏️    General Solution . Let be the linearly independent exponential solutions, then the general solution is formed by for any constants .      ✳️ Key Takeaways    If and are solutions to an LHCC equation, then is also a solution for any constants and .  The general solution to an LHCC equation consists of a linear combination of all its independent solutions.  The number of independent solutions corresponds to the order of the equation.  An LHCC equation often has multiple exponential solutions, determined by solving the characteristic equation.  The principle of superposition states that any linear combination of these solutions is also a solution.  The general solution is formed by summing all independent exponential solutions with arbitrary coefficients.  The solutions to LHCC equations are exponential functions because their derivatives preserve the same functional form.  The concept of like-terms helps explain why other function types (polynomials, trigonometric functions) do not work.  By substituting an exponential into the equation, we obtain a polynomial equation for , which determines the general solution.     In this subsection, we developed a framework for solving Linear Homogeneous Constant Coefficient (LHCC) equations . We began by exploring why exponential functions serve as the fundamental solutions to these equations, using the concept of like-terms to justify their role.  We then introduced the characteristic equation , which transforms the problem of solving a differential equation into solving a polynomial equation. This method allows us to systematically determine the correct set of fundamental solutions for any LHCC equation.  With this foundation in place, we are now ready to introduce a powerful tool for systematically finding these solutions: the characteristic equation . This algebraic approach allows us to determine the exponential solutions efficiently and will serve as the backbone of our solution methods moving forward.  To build intuition, we will carefully examine the three defining properties of LHCC equations: linearity , homogeneity , and constant coefficients . Each of these characteristics influences the types of solutions that emerge and dictates the methods we use to solve them. By clearly defining and identifying LHCC equations, we lay the groundwork for developing powerful solution techniques in the sections that follow.  Unlike many other types of differential equations, LHCC equations have a highly structured solution method. Their solutions take on a predictable form, allowing us to develop a systematic approach for solving them. Through examples and analysis, we will discover that exponential functions play a central role in solving LHCC equations. By assuming solutions of the form and substituting into the equation, we obtain an algebraic equation for , the characteristic equation . The solutions to this characteristic equation directly determine the general solution to the differential equation.  Unlike many other types of differential equations, LHCC equations have a highly structured solution method. Their solutions take on a predictable form, allowing us to develop a systematic approach for solving them. Through examples and analysis, we will discover that exponential functions play a central role in solving LHCC equations. By assuming solutions of the form and substituting into the equation, we obtain an algebraic equation for , the characteristic equation . The solutions to this characteristic equation directly determine the general solution to the differential equation.  Examples of LHCC General Solutions     Characteristic Equation  Solutions   General Solution      (3rd order)        (3rd order)        (4th order)        (4th order)        (7th order)        (5th order)       The key takeaways from this subsection are:    Exponential functions naturally emerge as solutions to LHCC equations due to their unique differentiation properties.  The characteristic equation provides a systematic way to determine the fundamental solutions.  The general solution consists of all independent exponential solutions, each multiplied by an arbitrary constant.  The number of solutions matches the order of the differential equation.   In summary, a differential equation is classified as an LHCC equation if it satisfies three criteria:   It is linear : each term involves or its derivatives to the first power only.  It is homogeneous : the right-hand side is zero.  It has constant coefficients : the coefficients of and its derivatives do not depend on .    Undermined Coefficients  Key Terms & Concepts   ✳️ Summary of the Key Ideas    The method of undetermined coefficients is used to solve non-homogeneous linear differential equations.  The general solution to a non-homogeneous equation is the sum of the general solution to the corresponding homogeneous equation and a particular solution.  The method involves guessing the form of the particular solution based on the form of the non-homogeneous term and solving for the coefficients.  The method is applicable when the non-homogeneous term can be expressed as a linear combination of known functions.        LHCC Equation  An LHCC equation is a Linear Homogeneous Differential Equations with Constant Coefficients and have the form .   Characteristic Equation     LHCC General Solutions         LNCC Equation  An LNCC equation is a Linear Nonhomogeneous Differential Equations with Constant Coefficients and have the form .   Forcing Function  A forcing function is the constant term in , denoted by .   Particular Solution  A particular solution, , is a function that can be plugged into and all the terms combine to give the forcing function, .   Homogeneous Solution  A homogeneous solution, , is a function such that, when it is plugged into all the terms cancel to zero. That is, is the solution to the homogeneous version of ( ).   General Solutions  The general solution to is the sum of the homogeneous and particular solutions, that is .               LHS  LHS    1     No    2     No    3     No    4     No    5     No    6     Yes    Based on this table, we note that the correct solution is and   Row 1 shows that a constant term alone could never produce an term.    Derivatives reduce the power of a polynomial, so the highest power term (highlighted in blue) comes from the term.       Rows 3 & 4 illustrate the solution can't have a or higher-degree term.    Row 6 shows the solution ( ) needed an term and constant term even though the right-hand side, , has only an term.     LNCC Equations   Comparison of a homogeneous equation ( left ) and a nonhomogeneous equation ( right ). In both, the solutions must simplify in a specific way when substituted into the equation.               row 1        type  Form    1  (constant)      row 2        type  Form    2       row 3        type  Form    3       row 4        type  Form    4       row 5        type  Form    5       row 6        type  Form    6         Laplace Transforms  Key Terms & Concepts  In this section, we introduced the concept of the forward Laplace transform and derived some common Laplace transforms that we will use throughtout this chapter. The following points summarize the essential concepts from the forward Laplace transform section:   ✳️ Summary of the Key Ideas     Differential Algebraic Equations . The Laplace transform converts a differential equation into an algebraic equation, simplifying the solution process by eliminating derivatives.   Laplace Transform Concept . Applying the Laplace transform to a differential equation involves transforming each term by multiplying by and integrating with respect to from to , but is often simplified by directly applying the Laplace operator, .   Linearity Property . The Laplace transform is linear, meaning it distributes across addition and subtraction, and allows for constants to be factored out. This property is essential for transforming complex equations.   Transforming Initial Conditions . Initial conditions are incorporated directly into the Laplace-transformed equation, modifying the transformed terms to include initial values, making it easier to solve the resulting algebraic equation.   Common Function Transforms . The Laplace transforms of common functions, such as exponentials, sines, cosines, and polynomials, are essential tools in transforming differential equations and are summarized in the provided table.   Transforming Derivatives . The Laplace transform of a derivative, or higher, transfers the derivative onto the Laplace variable , reducing the order of the equation while introducing initial condition terms.   Multiplication by and . When multiplying a function by an exponential , the Laplace transform shifts by in the -domain, and multiplying by corresponds to differentiating the transform times with respect to , introducing a sign change.   Transforming the Entire Equation . The process of applying the Laplace transform to an entire differential equation with initial conditions involves systematically transforming each term and leads to a simplified algebraic equation in the -domain, ready for solving.      Assume , , are constant, and  Common Laplace Transforms  L  L  L  L  L  L  L  L  Laplace Transform of Derivatives  L  L  L  L   Common Laplace Transforms. are constant,     -functions  -functions                                                                Laplace Transforms Properties,     Properties                               Table of Common Laplace Transforms          Function  ( -Domain)     Laplace Transform  ( -Domain)      Existence  Condition     L       L       L       L       L       L       L       L       R       R       R       R       R         L        L         L        L         L        L         L        L         L        L         L        L         L        L         L        L         L          Function  ( -Domain)     Laplace Transform  ( -Domain)      Existence  Condition     L         L          Function  ( -Domain)     Laplace Transform  ( -Domain)      Existence  Condition     L         L          Function  ( -Domain)     Laplace Transform  ( -Domain)      Existence  Condition     L         L          Function  ( -Domain)     Laplace Transform  ( -Domain)      Existence  Condition     L         L          Function  ( -Domain)     Laplace Transform  ( -Domain)      Existence  Condition     L         L          Function  ( -Domain)     Laplace Transform  ( -Domain)      Existence  Condition     L         L          Function  ( -Domain)     Laplace Transform  ( -Domain)      Existence  Condition     L         L          Function  ( -Domain)     Laplace Transform  ( -Domain)      Existence  Condition     L         R         Function ( -Domain)  Laplace Transform ( -Domain)  Existence       Condition    R         R         Function ( -Domain)  Laplace Transform ( -Domain)  Existence       Condition    R         R         Function ( -Domain)  Laplace Transform ( -Domain)  Existence       Condition    R         R         Function ( -Domain)  Laplace Transform ( -Domain)  Existence       Condition    R         R         Function ( -Domain)  Laplace Transform ( -Domain)  Existence       Condition    R         Laplace Transforms  Key Terms & Concepts  In this section, we introduced the concept of the forward Laplace transform and derived some common Laplace transforms that we will use throughtout this chapter. The following points summarize the essential concepts from the forward Laplace transform section:   ✳️ Summary of the Key Ideas   Laplace Transform Method    Common Forms: A table of common Laplace transforms is provided, which doubles as a reference for inverse transforms. The focus is on recognizing forms that match the table entries for functions like , and others.   Direct Computation: When the function of directly matches a form in the common Laplace transform table, the inverse Laplace transform can be easily computed.   Modifying Functions: When a function doesn't match a known form, minor modifications, such as multiplying by missing constants or splitting fractions, can help.   Completing the Square: When dealing with quadratic expressions in the denominator, especially when the discriminant is negative, completing the square can transform the expression into a form that matches known inverse Laplace transforms. Several examples demonstrate this technique.   Partial Fraction Decomposition: For more complex rational functions, partial fraction decomposition breaks down the function into simpler fractions that match the common transform forms.     Matching Guide: -function Inverse Transform      Denominator Form  Example  Transform           L            L            L            L            L            L            L            L      Tips for Preparing the Backward Transform  Completing the square is an essential technique for transforming quadratic expressions that don't directly match a form in the table of common Laplace transforms. However, it's not the only strategy available. In this section, we'll explore another important technique: partial fraction decomposition. This method is useful for breaking down complex fractions into simpler components that can each be matched with forms in the Laplace transform table.  Two other forms we may wish to match when we study Laplace transforms are As before, we work toward making the denominator match first , and then we sort out the numerator second.  When we want to take the inverse Laplace transform of a rational function with a second-degree polynomial in the denominator, we may complete the square or we may do a partial fraction decomposition. How will we know which is appropriate? Here are a few guidelines for you to consider.  Does the denominator factor in an obvious way? If so, factor the denominator and do a partial fraction decomposition if necessary.  If the denominator does not factor in an obvious way, try completing the square.  If you end up with addition outside of the parentheses, as in then you should aim to match and\/or .  If instead you end up with subtraction outside the parentheses, as in then you should factor and do a partial fraction decomposition. You may consider using the quadratic formula if the factorization is not obvious to you.  If you end up with no terms outside the parentheses, as in then use .        Laplace Transforms   ✳️ Summary of the Key Ideas    PIECEWISE AND UNIT STEP STUFF       First-Order Linear Systems  Key Terms & Concepts    "
},
{
  "id": "quick-ref-basics-2-2",
  "level": "2",
  "url": "quick-references.html#quick-ref-basics-2-2",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "dependent variable independent variable constant term "
},
{
  "id": "quick-ref-lhcc-3-2",
  "level": "2",
  "url": "quick-references.html#quick-ref-lhcc-3-2",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Linear Homogeneous Differential Equations with Constant Coefficients (LHCC) The Characteristic Equation Solution Types "
},
{
  "id": "lhcc-method",
  "level": "2",
  "url": "quick-references.html#lhcc-method",
  "type": "✍🏻 Method",
  "number": "7",
  "title": "LHCC Method.",
  "body": "LHCC Method  The general solution to a linear homogeneous differential equation with constant coefficients (LHCC) of the form can be found through the following steps...   Step 1: Solve the Characteristic Equation  Solve the characteristic equation (CE)    Step 2: Write Down the General Solution     Real & Different:   .   Real & Repeated:  (multiplicity ) .   Complex:   .   For mixed root types , combine the corresponding terms to form the complete general solution.      "
},
{
  "id": "lhcc-soln-properties-3",
  "level": "2",
  "url": "quick-references.html#lhcc-soln-properties-3",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Exponential Solutions Linearly Independent General Solution "
},
{
  "id": "quick-ref-lhcc-13",
  "level": "2",
  "url": "quick-references.html#quick-ref-lhcc-13",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "linearity homogeneity constant coefficients "
},
{
  "id": "higher-order-lhcc-general-solution-examples",
  "level": "2",
  "url": "quick-references.html#higher-order-lhcc-general-solution-examples",
  "type": "Table",
  "number": "255",
  "title": "Examples of LHCC General Solutions",
  "body": "Examples of LHCC General Solutions     Characteristic Equation  Solutions   General Solution      (3rd order)        (3rd order)        (4th order)        (4th order)        (7th order)        (5th order)      "
},
{
  "id": "lhcc-vs-lcc-solution-type",
  "level": "2",
  "url": "quick-references.html#lhcc-vs-lcc-solution-type",
  "type": "Figure",
  "number": "256",
  "title": "",
  "body": " Comparison of a homogeneous equation ( left ) and a nonhomogeneous equation ( right ). In both, the solutions must simplify in a specific way when substituted into the equation.             "
},
{
  "id": "yp-forms-table-row-1",
  "level": "2",
  "url": "quick-references.html#yp-forms-table-row-1",
  "type": "Table",
  "number": "257",
  "title": "row 1",
  "body": "row 1        type  Form    1  (constant)     "
},
{
  "id": "yp-forms-table-row-2",
  "level": "2",
  "url": "quick-references.html#yp-forms-table-row-2",
  "type": "Table",
  "number": "258",
  "title": "row 2",
  "body": "row 2        type  Form    2      "
},
{
  "id": "yp-forms-table-row-3",
  "level": "2",
  "url": "quick-references.html#yp-forms-table-row-3",
  "type": "Table",
  "number": "259",
  "title": "row 3",
  "body": "row 3        type  Form    3      "
},
{
  "id": "yp-forms-table-row-4",
  "level": "2",
  "url": "quick-references.html#yp-forms-table-row-4",
  "type": "Table",
  "number": "260",
  "title": "row 4",
  "body": "row 4        type  Form    4      "
},
{
  "id": "yp-forms-table-row-5",
  "level": "2",
  "url": "quick-references.html#yp-forms-table-row-5",
  "type": "Table",
  "number": "261",
  "title": "row 5",
  "body": "row 5        type  Form    5      "
},
{
  "id": "yp-forms-table-row-6",
  "level": "2",
  "url": "quick-references.html#yp-forms-table-row-6",
  "type": "Table",
  "number": "262",
  "title": "row 6",
  "body": "row 6        type  Form    6      "
},
{
  "id": "quick-ref-lt-2-3",
  "level": "2",
  "url": "quick-references.html#quick-ref-lt-2-3",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Differential Algebraic Equations Laplace Transform Concept Linearity Property Transforming Initial Conditions Common Function Transforms Transforming Derivatives Multiplication by and Transforming the Entire Equation "
},
{
  "id": "lt-table-common-rules-merged0",
  "level": "2",
  "url": "quick-references.html#lt-table-common-rules-merged0",
  "type": "Table",
  "number": "263",
  "title": "<em class=\"emphasis\">Common Laplace Transforms. <span class=\"process-math\">\\(a, b\\)<\/span> are constant, <span class=\"process-math\">\\(n = 1, 2, \\ldots\\)<\/span><\/em>",
  "body": "Common Laplace Transforms. are constant,     -functions  -functions                                                               "
},
{
  "id": "lt-properties-table",
  "level": "2",
  "url": "quick-references.html#lt-properties-table",
  "type": "Table",
  "number": "264",
  "title": "<em class=\"emphasis\">Laplace Transforms Properties, <span class=\"process-math\">\\({\\small \\lap{ y(t) } = Y(t), \\ \\lap{ z(t) } = Z(t)}\\)<\/span><\/em>",
  "body": "Laplace Transforms Properties,     Properties                            "
},
{
  "id": "lt-table-common-rules-merged",
  "level": "2",
  "url": "quick-references.html#lt-table-common-rules-merged",
  "type": "Table",
  "number": "265",
  "title": "Table of Common Laplace Transforms",
  "body": " Table of Common Laplace Transforms          Function  ( -Domain)     Laplace Transform  ( -Domain)      Existence  Condition     L       L       L       L       L       L       L       L       R       R       R       R       R       "
},
{
  "id": "lt-L1-table",
  "level": "2",
  "url": "quick-references.html#lt-L1-table",
  "type": "Table",
  "number": "266",
  "title": "L<span class=\"process-math\">\\(_1\\)<\/span>",
  "body": " L        L       "
},
{
  "id": "lt-L2-table",
  "level": "2",
  "url": "quick-references.html#lt-L2-table",
  "type": "Table",
  "number": "267",
  "title": "L<span class=\"process-math\">\\(_2\\)<\/span>",
  "body": " L        L       "
},
{
  "id": "lt-L3-table",
  "level": "2",
  "url": "quick-references.html#lt-L3-table",
  "type": "Table",
  "number": "268",
  "title": "L<span class=\"process-math\">\\(_3\\)<\/span>",
  "body": " L        L       "
},
{
  "id": "lt-L4-table",
  "level": "2",
  "url": "quick-references.html#lt-L4-table",
  "type": "Table",
  "number": "269",
  "title": "L<span class=\"process-math\">\\(_4\\)<\/span>",
  "body": " L        L       "
},
{
  "id": "lt-L5-table",
  "level": "2",
  "url": "quick-references.html#lt-L5-table",
  "type": "Table",
  "number": "270",
  "title": "L<span class=\"process-math\">\\(_5\\)<\/span>",
  "body": " L        L       "
},
{
  "id": "lt-L6-table",
  "level": "2",
  "url": "quick-references.html#lt-L6-table",
  "type": "Table",
  "number": "271",
  "title": "L<span class=\"process-math\">\\(_6\\)<\/span>",
  "body": " L        L       "
},
{
  "id": "lt-L7-table",
  "level": "2",
  "url": "quick-references.html#lt-L7-table",
  "type": "Table",
  "number": "272",
  "title": "L<span class=\"process-math\">\\(_7\\)<\/span>",
  "body": " L        L       "
},
{
  "id": "lt-L8-table",
  "level": "2",
  "url": "quick-references.html#lt-L8-table",
  "type": "Table",
  "number": "273",
  "title": "L<span class=\"process-math\">\\(_8\\)<\/span>",
  "body": " L        L       "
},
{
  "id": "lt-L1-header-table",
  "level": "2",
  "url": "quick-references.html#lt-L1-header-table",
  "type": "Table",
  "number": "274",
  "title": "L<span class=\"process-math\">\\(_1\\)<\/span>",
  "body": " L          Function  ( -Domain)     Laplace Transform  ( -Domain)      Existence  Condition     L       "
},
{
  "id": "lt-L2-header-table",
  "level": "2",
  "url": "quick-references.html#lt-L2-header-table",
  "type": "Table",
  "number": "275",
  "title": "L<span class=\"process-math\">\\(_2\\)<\/span>",
  "body": " L          Function  ( -Domain)     Laplace Transform  ( -Domain)      Existence  Condition     L       "
},
{
  "id": "lt-L3-header-table",
  "level": "2",
  "url": "quick-references.html#lt-L3-header-table",
  "type": "Table",
  "number": "276",
  "title": "L<span class=\"process-math\">\\(_3\\)<\/span>",
  "body": " L          Function  ( -Domain)     Laplace Transform  ( -Domain)      Existence  Condition     L       "
},
{
  "id": "lt-L4-header-table",
  "level": "2",
  "url": "quick-references.html#lt-L4-header-table",
  "type": "Table",
  "number": "277",
  "title": "L<span class=\"process-math\">\\(_4\\)<\/span>",
  "body": " L          Function  ( -Domain)     Laplace Transform  ( -Domain)      Existence  Condition     L       "
},
{
  "id": "lt-L5-header-table",
  "level": "2",
  "url": "quick-references.html#lt-L5-header-table",
  "type": "Table",
  "number": "278",
  "title": "L<span class=\"process-math\">\\(_5\\)<\/span>",
  "body": " L          Function  ( -Domain)     Laplace Transform  ( -Domain)      Existence  Condition     L       "
},
{
  "id": "lt-L6-header-table",
  "level": "2",
  "url": "quick-references.html#lt-L6-header-table",
  "type": "Table",
  "number": "279",
  "title": "L<span class=\"process-math\">\\(_6\\)<\/span>",
  "body": " L          Function  ( -Domain)     Laplace Transform  ( -Domain)      Existence  Condition     L       "
},
{
  "id": "lt-L7-header-table",
  "level": "2",
  "url": "quick-references.html#lt-L7-header-table",
  "type": "Table",
  "number": "280",
  "title": "L<span class=\"process-math\">\\(_7\\)<\/span>",
  "body": " L          Function  ( -Domain)     Laplace Transform  ( -Domain)      Existence  Condition     L       "
},
{
  "id": "lt-L8-header-table",
  "level": "2",
  "url": "quick-references.html#lt-L8-header-table",
  "type": "Table",
  "number": "281",
  "title": "L<span class=\"process-math\">\\(_8\\)<\/span>",
  "body": " L          Function  ( -Domain)     Laplace Transform  ( -Domain)      Existence  Condition     L       "
},
{
  "id": "lt-R1-table",
  "level": "2",
  "url": "quick-references.html#lt-R1-table",
  "type": "Table",
  "number": "282",
  "title": "R<span class=\"process-math\">\\(_1\\)<\/span>",
  "body": " R         Function ( -Domain)  Laplace Transform ( -Domain)  Existence       Condition    R       "
},
{
  "id": "lt-R2-table",
  "level": "2",
  "url": "quick-references.html#lt-R2-table",
  "type": "Table",
  "number": "283",
  "title": "R<span class=\"process-math\">\\(_1\\)<\/span>",
  "body": " R         Function ( -Domain)  Laplace Transform ( -Domain)  Existence       Condition    R       "
},
{
  "id": "lt-R3-table",
  "level": "2",
  "url": "quick-references.html#lt-R3-table",
  "type": "Table",
  "number": "284",
  "title": "R<span class=\"process-math\">\\(_1\\)<\/span>",
  "body": " R         Function ( -Domain)  Laplace Transform ( -Domain)  Existence       Condition    R       "
},
{
  "id": "lt-R4-table",
  "level": "2",
  "url": "quick-references.html#lt-R4-table",
  "type": "Table",
  "number": "285",
  "title": "R<span class=\"process-math\">\\(_1\\)<\/span>",
  "body": " R         Function ( -Domain)  Laplace Transform ( -Domain)  Existence       Condition    R       "
},
{
  "id": "lt-R5-table",
  "level": "2",
  "url": "quick-references.html#lt-R5-table",
  "type": "Table",
  "number": "286",
  "title": "R<span class=\"process-math\">\\(_1\\)<\/span>",
  "body": " R         Function ( -Domain)  Laplace Transform ( -Domain)  Existence       Condition    R       "
},
{
  "id": "quick-ref-ltm-2-3",
  "level": "2",
  "url": "quick-references.html#quick-ref-ltm-2-3",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": " Laplace Transform Method  Common Forms: Direct Computation: Modifying Functions: Completing the Square: Partial Fraction Decomposition: "
},
{
  "id": "backward-lt-rules-of-thumb",
  "level": "2",
  "url": "quick-references.html#backward-lt-rules-of-thumb",
  "type": "Table",
  "number": "287",
  "title": "Matching Guide: <span class=\"process-math\">\\(s\\)<\/span>-function <span class=\"process-math\">\\(\\rightarrow\\)<\/span> Inverse Transform",
  "body": " Matching Guide: -function Inverse Transform      Denominator Form  Example  Transform           L            L            L            L            L            L            L            L     "
},
{
  "id": "quick-ref-ltp-2",
  "level": "2",
  "url": "quick-references.html#quick-ref-ltp-2",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": " PIECEWISE AND UNIT STEP STUFF  "
},
{
  "id": "formula-sheets",
  "level": "1",
  "url": "formula-sheets.html",
  "type": "Section",
  "number": "",
  "title": "Formula Sheets",
  "body": " Formula Sheets  "
},
{
  "id": "backmatter-6",
  "level": "1",
  "url": "backmatter-6.html",
  "type": "Appendix",
  "number": "E",
  "title": "Selected Hints",
  "body": " Selected Hints  "
},
{
  "id": "backmatter-7",
  "level": "1",
  "url": "backmatter-7.html",
  "type": "Appendix",
  "number": "F",
  "title": "Selected Solutions",
  "body": " Selected Solutions  "
},
{
  "id": "backmatter-8",
  "level": "1",
  "url": "backmatter-8.html",
  "type": "Appendix",
  "number": "G",
  "title": "List of Symbols",
  "body": " List of Symbols    DE implies ODE  Since this text only covers ordinary differential equations, any use of DE will always imply ODE .   Derivative Notation  We will use the following notations for derivatives:     Derivative Order     1st  2nd  3rd  4th   nth    Prime          Leibniz            "
},
{
  "id": "backmatter-9",
  "level": "1",
  "url": "backmatter-9.html",
  "type": "Index",
  "number": "",
  "title": "Index",
  "body": " Index   "
},
{
  "id": "backmatter-10",
  "level": "1",
  "url": "backmatter-10.html",
  "type": "Colophon",
  "number": "",
  "title": "Colophon",
  "body": " This book was authored in PreTeXt .  "
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
