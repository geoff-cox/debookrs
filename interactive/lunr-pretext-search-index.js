var ptx_lunr_search_style = "textbook";
var ptx_lunr_docs = [
{
  "id": "preface",
  "level": "1",
  "url": "preface.html",
  "type": "Preface",
  "number": "",
  "title": "Preface",
  "body": "  This book was written with a simple goal: to help you learn differential equations in a way that feels approachable, logical, and connected to the real world. Too often, students encounter differential equations as a blur of techniques and formulas, each with its own quirks and conditions, without seeing the bigger picture. I wanted to write something different—a book that explains not only how the methods work, but also why they exist, when to use them, and what they tell us about the systems they describe.  From the start, we take the time to answer the deceptively simple question: what is a differential equation? We build up the vocabulary—order, linearity, coefficients—that you'll need to make sense of every chapter that follows. Then we move step by step through the main families of techniques: separation of variables, integrating factors, and methods for solving linear equations with constant coefficients. Each method is introduced in context, not just as a recipe, so you understand the logic behind the steps rather than memorizing them blindly.  But this book isn't only about solutions you can write down neatly. Some of the most interesting and important differential equations can't be solved with a clean formula. That's where we shift focus to qualitative methods —tools like slope fields, phase lines, and equilibrium analysis that reveal how solutions behave without ever finding them explicitly. Later, we introduce numerical methods like Euler's method, showing how computers approximate solutions when analytic methods run out. These chapters are as much about mindset as they are about mechanics.  As we move into higher-order equations, Laplace transforms, and systems of differential equations, the narrative grows but the tone stays the same: conversational, patient, and realistic about what's challenging. Each topic is broken into digestible parts, with worked examples, quick-reference summaries, and guiding comments that aim to make the path through this subject a little clearer.  This book is not meant to overwhelm you with theory, nor to flatten the subject into a list of disconnected tricks. Instead, it aims to be a tour guide —helping you see the terrain of differential equations, pointing out landmarks, and showing you where different paths lead. If you are an engineer, physicist, mathematician, or simply curious about how we model the world, I hope this book helps you not just do differential equations, but genuinely understand them.    Textbook Aim & Scope  This book is designed to provide a comprehensive introduction to ordinary differential equations (ODEs) and their applications. It covers the fundamental concepts, methods, and techniques used to solve ODEs, with a focus on both theoretical understanding and practical problem-solving skills.  This interactive online text is intended to be used to learn the introductory concepts of ordinary differential equations. The book is designed for students who have completed single-variable calculus and is suitable for a one semester course in differential equations. The book is written in a straightforward, readable style and has a large number of worked examples and exercises.    Intended Audience  This book is intended for undergraduate students who are studying differential equations for the first time. It is designed to be accessible to students with a background in single-variable calculus, and it assumes no prior knowledge of differential equations. The book is suitable for use in a one-semester course on ordinary differential equations.    Philosophy  We believe that the best way to learn differential equations is to work through examples and exercises. This book is designed to be interactive, allowing you to explore the concepts and methods of differential equations in a hands-on way. We encourage you to work through the examples and exercises, and to use the interactive features of the book to deepen your understanding.  We also believe that it is important to understand the underlying concepts and methods of differential equations, rather than just memorizing formulas and techniques. This book is designed to help you develop a deep understanding of the subject, so that you can apply the concepts and methods to a wide range of problems.  We hope that this book will be a valuable resource for you as you learn differential equations, and that it will help you develop the skills and understanding you need to succeed in your studies and future career.    Textbook Structure and Approach  The book is structured to guide you through the process of solving differential equations, starting with the basic concepts and building up to more advanced techniques. Each section includes examples and exercises that illustrate the concepts and methods, and we encourage you to work through these examples and exercises to gain a deeper understanding of the material.  Solving these equations often involves using concepts from various mathematical disciplines, including calculus, algebra, and trigonometry. To simplify the process, we break down each technique into smaller, manageable parts and then assemble them step by step to obtain the complete solution.  When appropriate, we will go over the details of the integration and algebra steps, but it is assumed that you are already familiar with these topics. If not, we encourage you to seek out resources to brush up on these skills.    "
},
{
  "id": "connection-to-alg-calc",
  "level": "1",
  "url": "connection-to-alg-calc.html",
  "type": "Section",
  "number": "1.1",
  "title": "Connection to Algebra &amp; Calculus",
  "body": " Connection to Algebra & Calculus  🎧 Listen  To learn something new, it helps to connect it to something you already know. So let's begin by linking differential equations to algebra.  Suppose you're asked to solve each of the equations for : The goal of algebra is to determine what goes in place of to make both sides equal. Instead of guessing, you learned rules for isolating . Applying those rules, we find:   Now suppose you're asked to solve a new equation: As before, we isolate : So what function has a derivative of ? In other words, what goes in place of to make this equation true?  From calculus, you might recognize this as an anti-derivative problem. So the we seek is   Finding this is exactly what solving a differential equation aims to do. Most problems won't be quite that straightforward, but the goal is the same: find a function that fits in place of and makes the equation true.    📖❓ Solving for an Unknown   How are differential equations related to equations from algebra?      You are solving an equation for an unknown.    Correct! When you solve a differential equation, the unknown is a function rather than a number.      You are only evaluating derivatives at a single point.    A differential equation is not about evaluating a derivative at a point, but about finding a function that satisfies an equation.      You are checking whether a given function is differentiable.    Differentiability may matter, but the main goal is to determine the unknown function.      You are simplifying an expression without solving for a variable.    Simplification alone is not enough; solving a differential equation means finding what function belongs in place of the unknown.       📖❓ Role of Derivatives   How are differential equations related to calculus?      Differential equations are equations containing derivatives of the unknown function.    Correct! Differential equations rely on derivatives, which are a central topic in calculus.      Differential equations contain integrals.    While integrals may appear when solving them, differential equations are defined by the presence of derivatives, not integrals.      Differential equations find derivates of a function.    Actually, differential equations involve finding the function itself, not just its derivatives.      The limit of a differential equation is an algebraic equation.    Please reread this section.       "
},
{
  "id": "whats-a-de-cyu-1",
  "level": "2",
  "url": "connection-to-alg-calc.html#whats-a-de-cyu-1",
  "type": "Checkpoint",
  "number": "1",
  "title": "",
  "body": "  📖❓ Solving for an Unknown   How are differential equations related to equations from algebra?      You are solving an equation for an unknown.    Correct! When you solve a differential equation, the unknown is a function rather than a number.      You are only evaluating derivatives at a single point.    A differential equation is not about evaluating a derivative at a point, but about finding a function that satisfies an equation.      You are checking whether a given function is differentiable.    Differentiability may matter, but the main goal is to determine the unknown function.      You are simplifying an expression without solving for a variable.    Simplification alone is not enough; solving a differential equation means finding what function belongs in place of the unknown.       📖❓ Role of Derivatives   How are differential equations related to calculus?      Differential equations are equations containing derivatives of the unknown function.    Correct! Differential equations rely on derivatives, which are a central topic in calculus.      Differential equations contain integrals.    While integrals may appear when solving them, differential equations are defined by the presence of derivatives, not integrals.      Differential equations find derivates of a function.    Actually, differential equations involve finding the function itself, not just its derivatives.      The limit of a differential equation is an algebraic equation.    Please reread this section.      "
},
{
  "id": "de-defn",
  "level": "1",
  "url": "de-defn.html",
  "type": "Section",
  "number": "1.2",
  "title": "Differential Equation Definition",
  "body": " Differential Equation Definition  Essentially, a differential equation is any equation where the unknown has a derivative applied to it. Here's the formal definition.   Differential Equation   A differential equation (DE) is an equation that involves one or more derivatives of an unknown function. If the function depends on a single variable, it's called an ordinary differential equation (ODE) . If the function depends on more than one variable, it's called a partial differential equation (PDE) .    DE ODE  📌 Since this course only covers ordinary differential equations , any time we say differential equation or DE , we mean ODE .   So, for an equation to qualify as a differential equation, it must include two things: First, it needs a derivative—something like or . Second, it must have an equals sign.  That means all of the following are differential equations: On the other hand, these are not differential equations—either because they don't contain a derivative, or because they don't include an equals sign:     📖❓Not Required for a DE   Which of the following is NOT required for an equation to be classified as a differential equation?     A -variable  Correct! A -variable is not a requirement for a differential equation.    An unknown function  Incorrect. A differential equation does include an unknown function, which we are solving for.    One or more derivatives of an unknown function  Incorrect. The presence of at least one derivative is essential to define a differential equation.    An equal sign, \"=\"  Incorrect. An equality sign is required for an equation to be classified as a differential equation.      📖❓ Identifying the Differential Equation  Which of the following equations is a differential equation.     Correct! This equation involves a derivative, making it a differential equation.     Incorrect. This equation does not contain any derivatives, so it is not a differential equation.     Incorrect. This equation does not contain any derivatives, so it is not a differential equation.     Incorrect. This equation does not contain any derivatives, so it is not a differential equation.       Common Derivative Notations  In this text, we'll use several common notations for derivatives. These include prime notation, like or ; Leibniz notation, using ; and dot notation, which is typically reserved for derivatives with respect to time.   Notation   📌 Be careful not to mistake as raised to the power of 4.   📌 Dot notation is normally reserved for derivatives with respect to time.    Common Derivative Notations        st nd rd th th    Prime          Leibniz    Dot       The expression is the same as to the power of 18.     True  Incorrect. Please read the note on derivative notation.    False  Correct!      "
},
{
  "id": "def-diff-eq",
  "level": "2",
  "url": "de-defn.html#def-diff-eq",
  "type": "📙 Definition",
  "number": "2",
  "title": "Differential Equation.",
  "body": " Differential Equation   A differential equation (DE) is an equation that involves one or more derivatives of an unknown function. If the function depends on a single variable, it's called an ordinary differential equation (ODE) . If the function depends on more than one variable, it's called a partial differential equation (PDE) .   "
},
{
  "id": "whats-a-de-cyu-2",
  "level": "2",
  "url": "de-defn.html#whats-a-de-cyu-2",
  "type": "Checkpoint",
  "number": "3",
  "title": "",
  "body": "  📖❓Not Required for a DE   Which of the following is NOT required for an equation to be classified as a differential equation?     A -variable  Correct! A -variable is not a requirement for a differential equation.    An unknown function  Incorrect. A differential equation does include an unknown function, which we are solving for.    One or more derivatives of an unknown function  Incorrect. The presence of at least one derivative is essential to define a differential equation.    An equal sign, \"=\"  Incorrect. An equality sign is required for an equation to be classified as a differential equation.      📖❓ Identifying the Differential Equation  Which of the following equations is a differential equation.     Correct! This equation involves a derivative, making it a differential equation.     Incorrect. This equation does not contain any derivatives, so it is not a differential equation.     Incorrect. This equation does not contain any derivatives, so it is not a differential equation.     Incorrect. This equation does not contain any derivatives, so it is not a differential equation.     "
},
{
  "id": "derivative-notation-4",
  "level": "2",
  "url": "de-defn.html#derivative-notation-4",
  "type": "Table",
  "number": "4",
  "title": "Common Derivative Notations",
  "body": " Common Derivative Notations        st nd rd th th    Prime          Leibniz    Dot    "
},
{
  "id": "whats-a-de-cyu-3",
  "level": "2",
  "url": "de-defn.html#whats-a-de-cyu-3",
  "type": "Checkpoint",
  "number": "5",
  "title": "",
  "body": "  The expression is the same as to the power of 18.     True  Incorrect. Please read the note on derivative notation.    False  Correct!    "
},
{
  "id": "variables",
  "level": "1",
  "url": "variables.html",
  "type": "Section",
  "number": "1.3",
  "title": "Dependent &amp; Independent Variables",
  "body": " Dependent & Independent Variables  Every differential equation involves two kinds of variables: a dependent variable and an independent variable . The dependent variable is the unknown function we're solving for. It depends on the independent variable and always has derivatives applied to it with respect to that independent variable.  For example, consider the equation: Here, we're solving for , which makes it the dependent variable. Since we're taking the derivative of with respect to , is the independent variable.  Identifying the dependent variable not only tells us what we're solving for, but it will also help determine which methods we can use to solve the equation.   Identify the Variables   Identify the dependent and independent variable in each equation:     The first equation contains and , but the presence of implies changes as changes. So,  is the unknown function we solve for that depends on .  dependent variable  , independent variable  .    The middle equation contains and , but is the second derivative of . So, must change as changes and  is the unknown function we solve for that depends on .  dependent variable  , independent variable  .    Only appears in the last equation, but indicates that is changing and so it must be the dependent variable . Typically, the independent variable will be clear from context of the problem, but in this case just assume whatever variable you like.      📖❓ Which Variable has the Derivative   In a differential equation, you would expect to see a derivative applied to the dependent variable.      True    Correct! The dependent variable in a differential equation always has a derivative applied to it.      False    Incorrect. By definition, a differential equation involves derivatives of the dependent variable.       📖❓ Dependent vs. Independent   Which variable in the differential equation, , represents the unknown function we would like to find?     dependent variable,    Incorrect. is neither the dependent variable, nor what we are solving for.     independent variable,    Incorrect! is the independent variable, but it is not what we are solving for.     dependent variable,    Yes! We are solving for the unknown, which is the dependent variable in this equation.     independent variable,    Incorrect. We are solving for , but it is not the independent variable.       📖❓ Identify the Unknown   For each differential equation, identify the variable that represents the unknown solution      Answer:       Answer:       Answer:         \\s*m\\s*  Yes, the solution to the differential equation is the dependent variable .    \\s*M\\s*  No, is not the same as .    \\s*t\\s*  No, is what the solution depends on, but it is not the solution itself.    .*  Incorrect. Carefully review the reading and try again.      \\s*P\\s*  Yes, the solution to the differential equation is the dependent variable .    \\s*p\\s*  No, is not the same as .    \\s*Q\\s*  No. Carefully look at which variable has the derivative applied to it.    .*  Incorrect. That's not a variable in the equation.      \\s*x\\s*  Yes, the solution to the differential equation is the dependent variable .    \\s*X\\s*  No, is not the same as .    \\s*y\\s*  No. Carefully look at which variable has the derivative applied to it.    .*  Incorrect. That's not a variable in the equation.       "
},
{
  "id": "variables-2",
  "level": "2",
  "url": "variables.html#variables-2",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "dependent variable independent variable "
},
{
  "id": "variables-5",
  "level": "2",
  "url": "variables.html#variables-5",
  "type": "🌌 Example",
  "number": "6",
  "title": "Identify the Variables.",
  "body": " Identify the Variables   Identify the dependent and independent variable in each equation:     The first equation contains and , but the presence of implies changes as changes. So,  is the unknown function we solve for that depends on .  dependent variable  , independent variable  .    The middle equation contains and , but is the second derivative of . So, must change as changes and  is the unknown function we solve for that depends on .  dependent variable  , independent variable  .    Only appears in the last equation, but indicates that is changing and so it must be the dependent variable . Typically, the independent variable will be clear from context of the problem, but in this case just assume whatever variable you like.   "
},
{
  "id": "components-cyu-1",
  "level": "2",
  "url": "variables.html#components-cyu-1",
  "type": "Checkpoint",
  "number": "7",
  "title": "",
  "body": "  📖❓ Which Variable has the Derivative   In a differential equation, you would expect to see a derivative applied to the dependent variable.      True    Correct! The dependent variable in a differential equation always has a derivative applied to it.      False    Incorrect. By definition, a differential equation involves derivatives of the dependent variable.       📖❓ Dependent vs. Independent   Which variable in the differential equation, , represents the unknown function we would like to find?     dependent variable,    Incorrect. is neither the dependent variable, nor what we are solving for.     independent variable,    Incorrect! is the independent variable, but it is not what we are solving for.     dependent variable,    Yes! We are solving for the unknown, which is the dependent variable in this equation.     independent variable,    Incorrect. We are solving for , but it is not the independent variable.       📖❓ Identify the Unknown   For each differential equation, identify the variable that represents the unknown solution      Answer:       Answer:       Answer:         \\s*m\\s*  Yes, the solution to the differential equation is the dependent variable .    \\s*M\\s*  No, is not the same as .    \\s*t\\s*  No, is what the solution depends on, but it is not the solution itself.    .*  Incorrect. Carefully review the reading and try again.      \\s*P\\s*  Yes, the solution to the differential equation is the dependent variable .    \\s*p\\s*  No, is not the same as .    \\s*Q\\s*  No. Carefully look at which variable has the derivative applied to it.    .*  Incorrect. That's not a variable in the equation.      \\s*x\\s*  Yes, the solution to the differential equation is the dependent variable .    \\s*X\\s*  No, is not the same as .    \\s*y\\s*  No. Carefully look at which variable has the derivative applied to it.    .*  Incorrect. That's not a variable in the equation.      "
},
{
  "id": "terms-coeffs",
  "level": "1",
  "url": "terms-coeffs.html",
  "type": "Section",
  "number": "1.4",
  "title": "Terms, &amp; Coefficients",
  "body": " Terms, & Coefficients   Terms   In math, the word term usually refers to a part of an expression that's separated by plus or minus signs. The same idea applies to differential equations.  So, a term in a differential equation is just any piece of the equation separated by addition or subtraction. For example, we might have something like: This example has three terms on the left-hand side and two on the right.   Free terms   📌 Think of a free term as being free of the dependent variable.   📌 These are often called constant terms , but this can be misleading since they are allowed to contain independent variables.   Terms in a differential equation can include the dependent variable, its derivatives, constants, or other functions of the independent variable. If a term doesn't involve the dependent variable or its derivatives, we'll call it a free term .  For example, consider the five-term differential equation with dependent variable, : . It is common to break the terms down based on the form of the dependent variable they contain. So, in terms of , we have the following terms:                           Every differential equation has a free term, even if it's not written explicitly. For example, can be rewritten as , where the free term is .  In general, any missing term can be interpreted as a zero term.    Identify the free term in the differential equation         Incorrect. This term contains a derivative of the dependent variable , so it is not a free term.       Incorrect. This term involves the dependent variable , so it is not a free term.       Correct! is the free term because it does not contain the dependent variable .       Coefficients   A coefficient in a differential equation is a constant or a function that depends only on the independent variable, and it multiplies the dependent variable or one of its derivatives. Coefficients help determine the structure of the equation and influence which solution methods are possible.  For example, take the equation: the coefficients of , , and are the constants , , and , respectively.  Now, coefficients don't always have to be constants. They can also be functions of the independent variable. For instance, in the equation: the coefficients are the following functions of :              In general, for something to be considered a coefficient, it must not involve the dependent variable.     Identify the coefficient of in the differential equation         Incorrect, is only part of the coefficient of .       Correct! is the coefficient of the term involving .       Incorrect, is only part of the coefficient of .       Incorrect. is the constant on the right-hand side of the equation.       Click on each of the coefficients in the differential equation below.                                      Look for the dependent variable in each term. The coefficient is the constant or function that multiplies the dependent variable.      "
},
{
  "id": "terms-3",
  "level": "2",
  "url": "terms-coeffs.html#terms-3",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "term "
},
{
  "id": "free-terms-2",
  "level": "2",
  "url": "terms-coeffs.html#free-terms-2",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "free term "
},
{
  "id": "terms-5",
  "level": "2",
  "url": "terms-coeffs.html#terms-5",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "free term "
},
{
  "id": "components-cyu-2",
  "level": "2",
  "url": "terms-coeffs.html#components-cyu-2",
  "type": "Checkpoint",
  "number": "8",
  "title": "",
  "body": "  Identify the free term in the differential equation         Incorrect. This term contains a derivative of the dependent variable , so it is not a free term.       Incorrect. This term involves the dependent variable , so it is not a free term.       Correct! is the free term because it does not contain the dependent variable .    "
},
{
  "id": "coefficients-2",
  "level": "2",
  "url": "terms-coeffs.html#coefficients-2",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "coefficient "
},
{
  "id": "components-cyu-3",
  "level": "2",
  "url": "terms-coeffs.html#components-cyu-3",
  "type": "Checkpoint",
  "number": "9",
  "title": "",
  "body": "   Identify the coefficient of in the differential equation         Incorrect, is only part of the coefficient of .       Correct! is the coefficient of the term involving .       Incorrect, is only part of the coefficient of .       Incorrect. is the constant on the right-hand side of the equation.       Click on each of the coefficients in the differential equation below.                                      Look for the dependent variable in each term. The coefficient is the constant or function that multiplies the dependent variable.    "
},
{
  "id": "wad-concept-quiz",
  "level": "1",
  "url": "wad-concept-quiz.html",
  "type": "Subsection",
  "number": "",
  "title": "💡 Conceptual Quiz",
  "body": " 💡 Conceptual Quiz    True or False   An equation that contains an \"=\" sign and at least one derivative is called a derivative equation.    True  Incorrect, derivative equation is not a standard term in mathematics.    False  Correct!      The expression is the same as to the power of 18.    True  Incorrect. Please read the note on derivative notation.    False  Correct!      In a differential equation, the dependent variable always has at least one derivative applied to it.    True  Correct! The dependent variable in a differential equation always has a derivative applied to it.    False  Incorrect. By definition, a differential equation involves derivatives of the dependent variable.      Select All the TRUE statements    For an equation to be a differential equation, it must contain a first-order derivative.  A differential equation must contain a derivative of any order.    The dependent variable is a function of the independent varaible.  Incorrect. Please review the definition of ODEs and PDEs.    The independent variable is a function of the dependent varaible.  The dependent variable is the function, which depends on the independent variable.    An ordinary differential equation (ODE) contains exactly one independent variable.  An ordinary differential equation (ODE) contains exactly one independent variable. If it contained more than one, it would be a partial differential equation (PDE).       Multiple Choice   Differential equations differ from algebraic equations in that they contain .    solutions  Incorrect. While this statement is generally true, it is not what makes it different from any other equation.     variables  Incorrect. Any equation could contain a variable.    unknowns  Incorrect. Most equations contain an unknown.    derivatives  Correct! If an equation contains a derivative, it is a differential equation.      What distinguishes an ordinary differential equation (ODE) from a partial differential equation (PDE)?    The number of variables the unknown function depends on.  Correct! An ODE has derivatives with respect to a single variable, while a PDE involves multiple variables.    The number of derivatives in the equation.  Incorrect. Please review the definition of ODEs and PDEs.    The number of solutions the equation has.  Incorrect. Please review the definition of ODEs and PDEs.    The number of hours it takes to solve the equation.  Incorrect. Please review the definition of ODEs and PDEs.      What makes differential equations different from other equations?    They involve derivatives of an unknown function.  Correct! Differential equations are defined by their inclusion of derivatives.    They have many solutions.  Incorrect. While many differential equations can have multiple solutions, this is not what makes them unique.    They involve variables.  Incorrect. Any equation could contain as a variable.    There solutions are always functions.  Incorrect. While the solutions to differential equations are often functions, this is not what makes them unique.      Which of the following is NOT required for an equation to be classified as a differential equation?    An unknown function.  Incorrect. A differential equation does include an unknown function, which we are solving for.    An -variable.  Correct! An -variable is not a requirement for a differential equation.    A derivative.  Incorrect. The presence of at least one derivative is essential to define a differential equation.    An \"=\" sign.  Incorrect. An equality sign is required for an equation to be classified as a differential equation.       Which variable in the differential equation, , represents the unknown function we would like to find?     dependent variable,   Incorrect. is neither the dependent variable, nor what we are solving for.    independent variable,   Incorrect! is the independent variable, but it is not what we are solving for.    dependent variable,   Yes! We are solving for the unknown, which is the dependent variable in this equation.    independent variable,   Incorrect. We are solving for , but it is not the independent variable.       Which variable, in the differential equation below, does the solution of this equation depend on?      The solution, , depends on the dependent variable,  Incorrect. The solution depends on , but is not a dependent variable.    The solution, , depends on the independent variable,  Yes! the solution, , depends on the independent variable .    The solution, , depends on the dependent variable,  Incorrect. is the solution, so it does not depend on .    The solution, , depends on the independent variable,  Incorrect. The variable is not the independent variable.       Identify the free term of the differential equation         Incorrect. This term involves the dependent variable , so it is not a free term.       Incorrect. This term involves the dependent variable , so it is not a free term.       Correct! The free term is because we can rewrite the equation as .    This equation does not have a free term.  Incorrect. Every DE has a least one free term.       "
},
{
  "id": "wad-cq-tf",
  "level": "2",
  "url": "wad-concept-quiz.html#wad-cq-tf",
  "type": "Exercise",
  "number": "1",
  "title": "True or False.",
  "body": " True or False   An equation that contains an \"=\" sign and at least one derivative is called a derivative equation.    True  Incorrect, derivative equation is not a standard term in mathematics.    False  Correct!      The expression is the same as to the power of 18.    True  Incorrect. Please read the note on derivative notation.    False  Correct!      In a differential equation, the dependent variable always has at least one derivative applied to it.    True  Correct! The dependent variable in a differential equation always has a derivative applied to it.    False  Incorrect. By definition, a differential equation involves derivatives of the dependent variable.      Select All the TRUE statements    For an equation to be a differential equation, it must contain a first-order derivative.  A differential equation must contain a derivative of any order.    The dependent variable is a function of the independent varaible.  Incorrect. Please review the definition of ODEs and PDEs.    The independent variable is a function of the dependent varaible.  The dependent variable is the function, which depends on the independent variable.    An ordinary differential equation (ODE) contains exactly one independent variable.  An ordinary differential equation (ODE) contains exactly one independent variable. If it contained more than one, it would be a partial differential equation (PDE).     "
},
{
  "id": "wad-cq-mc",
  "level": "2",
  "url": "wad-concept-quiz.html#wad-cq-mc",
  "type": "Exercise",
  "number": "2",
  "title": "Multiple Choice.",
  "body": " Multiple Choice   Differential equations differ from algebraic equations in that they contain .    solutions  Incorrect. While this statement is generally true, it is not what makes it different from any other equation.     variables  Incorrect. Any equation could contain a variable.    unknowns  Incorrect. Most equations contain an unknown.    derivatives  Correct! If an equation contains a derivative, it is a differential equation.      What distinguishes an ordinary differential equation (ODE) from a partial differential equation (PDE)?    The number of variables the unknown function depends on.  Correct! An ODE has derivatives with respect to a single variable, while a PDE involves multiple variables.    The number of derivatives in the equation.  Incorrect. Please review the definition of ODEs and PDEs.    The number of solutions the equation has.  Incorrect. Please review the definition of ODEs and PDEs.    The number of hours it takes to solve the equation.  Incorrect. Please review the definition of ODEs and PDEs.      What makes differential equations different from other equations?    They involve derivatives of an unknown function.  Correct! Differential equations are defined by their inclusion of derivatives.    They have many solutions.  Incorrect. While many differential equations can have multiple solutions, this is not what makes them unique.    They involve variables.  Incorrect. Any equation could contain as a variable.    There solutions are always functions.  Incorrect. While the solutions to differential equations are often functions, this is not what makes them unique.      Which of the following is NOT required for an equation to be classified as a differential equation?    An unknown function.  Incorrect. A differential equation does include an unknown function, which we are solving for.    An -variable.  Correct! An -variable is not a requirement for a differential equation.    A derivative.  Incorrect. The presence of at least one derivative is essential to define a differential equation.    An \"=\" sign.  Incorrect. An equality sign is required for an equation to be classified as a differential equation.       Which variable in the differential equation, , represents the unknown function we would like to find?     dependent variable,   Incorrect. is neither the dependent variable, nor what we are solving for.    independent variable,   Incorrect! is the independent variable, but it is not what we are solving for.    dependent variable,   Yes! We are solving for the unknown, which is the dependent variable in this equation.    independent variable,   Incorrect. We are solving for , but it is not the independent variable.       Which variable, in the differential equation below, does the solution of this equation depend on?      The solution, , depends on the dependent variable,  Incorrect. The solution depends on , but is not a dependent variable.    The solution, , depends on the independent variable,  Yes! the solution, , depends on the independent variable .    The solution, , depends on the dependent variable,  Incorrect. is the solution, so it does not depend on .    The solution, , depends on the independent variable,  Incorrect. The variable is not the independent variable.       Identify the free term of the differential equation         Incorrect. This term involves the dependent variable , so it is not a free term.       Incorrect. This term involves the dependent variable , so it is not a free term.       Correct! The free term is because we can rewrite the equation as .    This equation does not have a free term.  Incorrect. Every DE has a least one free term.     "
},
{
  "id": "wad-practice-drills",
  "level": "1",
  "url": "wad-practice-drills.html",
  "type": "Subsection",
  "number": "",
  "title": "🏋️‍♂️ Practice Drills",
  "body": " 🏋️‍♂️ Practice Drills    Identify the Differential Equations    Select all the expressions that are Differential Equations.                                There are only 5 Differential Equations in this set.     Select the differential equation.       Correct! This equation involves a derivative, making it a differential equation.       Incorrect. This equation does not contain any derivatives, so it is not a differential equation.       Incorrect. This equation does not contain any derivatives, so it is not a differential equation.       Incorrect. This equation does not contain any derivatives, so it is not a differential equation.       Dependent & Independent Variables    Identify the independent variable of the differential equation         Yes! is the independent variable.       Incorrect. Review the examples.       Incorrect. Review the examples.       Identify the dependent variable of the differential equation         Incorrect. represents the derivative of the dependent variable with respect to the independent variable.       Incorrect. The dependent variable is the one being differentiated.       Correct! is the dependent variable in this equation.       If a differential equation has the general solution , then the dependent variable of this equation is and the independent variable is .       Dependent variable: Correct!    .*  Dependent variable: Incorrect.       Independent variable: Correct!    .*  Independent variable: Incorrect.        For the differential equation , complete the statement below with the correct variable.   The unknown function is given by the variable , which is a function of the variable         Correct! The unknown function is .    .*  Incorrect. Review the examples of this section.       Correct! The unknown function is a function of .    .*  Incorrect. Review the examples of this section.        Identify the variable that represents the solution to the equation Answer:       \\s*u\\s*  Yes, the solution to the differential equation is the dependent variable .    \\s*t\\s*  No, is what the solution depends on, but it is not the solution itself.    .*  Incorrect. Carefully review the section and try again.        Identify the Coefficients    Identify the coefficient of in the differential equation         Incorrect, is only part of the coefficient of .       Correct! is the coefficient of the term involving .       Incorrect, is only part of the coefficient of .       Incorrect. is the constant on the right-hand side of the equation.      Select each of the coefficients in the differential equation below.                            Look for the dependent variable in each term. The coefficient is the constant or function that multiplies the dependent variable.      "
},
{
  "id": "wad-drills-01",
  "level": "2",
  "url": "wad-practice-drills.html#wad-drills-01",
  "type": "Exercise",
  "number": "1",
  "title": "Identify the Differential Equations.",
  "body": " Identify the Differential Equations    Select all the expressions that are Differential Equations.                                There are only 5 Differential Equations in this set.     Select the differential equation.       Correct! This equation involves a derivative, making it a differential equation.       Incorrect. This equation does not contain any derivatives, so it is not a differential equation.       Incorrect. This equation does not contain any derivatives, so it is not a differential equation.       Incorrect. This equation does not contain any derivatives, so it is not a differential equation.     "
},
{
  "id": "wad-drills-02",
  "level": "2",
  "url": "wad-practice-drills.html#wad-drills-02",
  "type": "Exercise",
  "number": "2",
  "title": "Dependent &amp; Independent Variables.",
  "body": " Dependent & Independent Variables    Identify the independent variable of the differential equation         Yes! is the independent variable.       Incorrect. Review the examples.       Incorrect. Review the examples.       Identify the dependent variable of the differential equation         Incorrect. represents the derivative of the dependent variable with respect to the independent variable.       Incorrect. The dependent variable is the one being differentiated.       Correct! is the dependent variable in this equation.       If a differential equation has the general solution , then the dependent variable of this equation is and the independent variable is .       Dependent variable: Correct!    .*  Dependent variable: Incorrect.       Independent variable: Correct!    .*  Independent variable: Incorrect.        For the differential equation , complete the statement below with the correct variable.   The unknown function is given by the variable , which is a function of the variable         Correct! The unknown function is .    .*  Incorrect. Review the examples of this section.       Correct! The unknown function is a function of .    .*  Incorrect. Review the examples of this section.        Identify the variable that represents the solution to the equation Answer:       \\s*u\\s*  Yes, the solution to the differential equation is the dependent variable .    \\s*t\\s*  No, is what the solution depends on, but it is not the solution itself.    .*  Incorrect. Carefully review the section and try again.      "
},
{
  "id": "wad-drills-03",
  "level": "2",
  "url": "wad-practice-drills.html#wad-drills-03",
  "type": "Exercise",
  "number": "3",
  "title": "Identify the Coefficients.",
  "body": " Identify the Coefficients    Identify the coefficient of in the differential equation         Incorrect, is only part of the coefficient of .       Correct! is the coefficient of the term involving .       Incorrect, is only part of the coefficient of .       Incorrect. is the constant on the right-hand side of the equation.      Select each of the coefficients in the differential equation below.                            Look for the dependent variable in each term. The coefficient is the constant or function that multiplies the dependent variable.    "
},
{
  "id": "order",
  "level": "1",
  "url": "order.html",
  "type": "Section",
  "number": "2.1",
  "title": "Order",
  "body": " Order  A differential equation must contain at least one derivative, but there's no limit on how many derivatives can appear. Some equations involve just a first derivative, while others include higher-order derivatives like , , or beyond.  To capture this idea, we define the order of a differential equation as the highest derivative of the dependent variable that appears in the equation.    The order of a differential equation is determined by the number of terms it contains      True    Incorrect. The order is based on the highest derivative, regardless of the number of terms.      False    Correct! The order is determined by the highest derivative, not the number of terms.      For example, the equation is a first-order differential equation because the highest derivative is . On the other hand, the differential equation is third-order because it contains up to three derivatives in the term.    Which of the following equations is a third-order differential equation?           Correct! The highest derivative here is the third derivative, making it a third-order differential equation.           Incorrect. This is a second-order differential equation.           Incorrect. This is a second-order differential equation.           Incorrect. This is a first-order differential equation.       Identify the Order   For each of the following differential equations, identify the order:     The first equation is second-order because the highest derivative of is .  A common pitfall for beginners is to confuse exponents with derivatives. In the second equation, the exponent in the term refers to raised to the sixth power, not a sixth derivative. Only derivatives affect the order.  So, the second equation is fifth-order . The fact that it appears inside a sine function makes no difference to the order.      Give the order of each differential equation as a numeric value:      Differential Equation  Order                    \\s*(2|two|second|second order|second\\-order)\\s*  Correct! The highest derivative is .    \\s*(5|five|fifth)\\s*  Incorrect. Carefully review the definition of order and do not confuse the power of a variable with the order.    .*  Carefully review the definition of order.      \\s*(3|three|third|third order|third-order)\\s*  Correct! The highest derivative is .    .*  Carefully review the definition of order.      \\s*(5|five|fifth|fifth order|fifth\\-order)\\s*  Correct! The highest derivative is .    \\s*(2|two|second)\\s*  Incorrect. Carefully review the definition of order and do not confuse the power of a variable with the order.    .*  Carefully review the definition of order.      "
},
{
  "id": "order-3",
  "level": "2",
  "url": "order.html#order-3",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "order "
},
{
  "id": "order-linearity-cyu-1",
  "level": "2",
  "url": "order.html#order-linearity-cyu-1",
  "type": "Checkpoint",
  "number": "10",
  "title": "",
  "body": "  The order of a differential equation is determined by the number of terms it contains      True    Incorrect. The order is based on the highest derivative, regardless of the number of terms.      False    Correct! The order is determined by the highest derivative, not the number of terms.     "
},
{
  "id": "order-linearity-cyu-2",
  "level": "2",
  "url": "order.html#order-linearity-cyu-2",
  "type": "Checkpoint",
  "number": "11",
  "title": "",
  "body": "  Which of the following equations is a third-order differential equation?           Correct! The highest derivative here is the third derivative, making it a third-order differential equation.           Incorrect. This is a second-order differential equation.           Incorrect. This is a second-order differential equation.           Incorrect. This is a first-order differential equation.     "
},
{
  "id": "order-7",
  "level": "2",
  "url": "order.html#order-7",
  "type": "🌌 Example",
  "number": "12",
  "title": "Identify the Order.",
  "body": " Identify the Order   For each of the following differential equations, identify the order:     The first equation is second-order because the highest derivative of is .  A common pitfall for beginners is to confuse exponents with derivatives. In the second equation, the exponent in the term refers to raised to the sixth power, not a sixth derivative. Only derivatives affect the order.  So, the second equation is fifth-order . The fact that it appears inside a sine function makes no difference to the order.   "
},
{
  "id": "order-linearity-cyu-3",
  "level": "2",
  "url": "order.html#order-linearity-cyu-3",
  "type": "Checkpoint",
  "number": "13",
  "title": "",
  "body": "  Give the order of each differential equation as a numeric value:      Differential Equation  Order                    \\s*(2|two|second|second order|second\\-order)\\s*  Correct! The highest derivative is .    \\s*(5|five|fifth)\\s*  Incorrect. Carefully review the definition of order and do not confuse the power of a variable with the order.    .*  Carefully review the definition of order.      \\s*(3|three|third|third order|third-order)\\s*  Correct! The highest derivative is .    .*  Carefully review the definition of order.      \\s*(5|five|fifth|fifth order|fifth\\-order)\\s*  Correct! The highest derivative is .    \\s*(2|two|second)\\s*  Incorrect. Carefully review the definition of order and do not confuse the power of a variable with the order.    .*  Carefully review the definition of order.     "
},
{
  "id": "linear-terms",
  "level": "1",
  "url": "linear-terms.html",
  "type": "Section",
  "number": "2.2",
  "title": "Linear &amp; Nonlinear Terms",
  "body": " Linear & Nonlinear Terms   Linear Terms  To decide whether a differential equation is linear, we first need to understand what it means for a term to be linear. In this context, linearity refers to how the dependent variable and its derivatives appear in each term.  Let be the dependent variable. A term is linear if it appears as either: where the coefficient, , can be a constant or a function of the independent variable only, and is the -th derivative of .  For example, the following terms are linear:   The coefficient of the term actually has no affect on whether it's linear, regardless of how complicated appears.    Each of the following terms is linear. Identify the coefficient in each term:                        \\s*(2t|2\\s*t|2\\s*\\*\\s*t|2\\(t\\))\\s*  Correct! .    \\s*(2|two)\\s*  Incorrect. The coefficient is more than just .    \\s*(y|Y)\\s*  Incorrect. should not contain .   \\s* Type in something ...  .* Incorrect     \\s*(sin\\(\\s*t\\s*\\)|sin\\s*t|sine\\s*t)\\s*  Correct! .    \\s*(y|Y)\\s*  Incorrect. should not contain .   \\s* Type in something ...  .* Incorrect     \\s*(1|one)\\s*  Correct! .    \\s*(y|Y)\\s*  Incorrect. should not contain .   \\s* Type in something ...  .* Incorrect       Nonlinear Terms  A term is nonlinear if it not in one of the forms in . Assuming is the dependent variable, some telltale signs that a term is nonlinear include:  or are raised to a power other than 1 .  or appear inside a nonlinear function .  or are multiplied or divided by each other .    Let's apply these strategies by breaking down the linearity of each term in the following differential equation:   The terms are:    Nonlinear. This term involves a product of the dependent variable and its derivative, violating the rule that only one can appear in a term.     Linear. The derivative appears by itself and to the first power. The coefficient does not affect linearity.     Nonlinear. The derivative appears inside a nonlinear function, the natural logarithm.     Nonlinear. The dependent variable appears raised to a power other than one.     Linear. This term doesn't involve the dependent variable or any of its derivatives.          Directions:    🔹  Match (by dragging) each term (on the left) to either Linear or Nonlinear.    🔹  Assume the dependent variable is and the independent variable is .           Linear      Non-Linear Term     See if you can identify the linearity of the terms in the following examples, before looking at the solutions.   Identify the Linearity of the Terms   Determine whether each term in the equation is linear or nonlinear:      Focus on the dependent variable, , and its derivatives.        Focus on the dependent variable, , and its derivatives.          For each differential equation, click on all of the nonlinear terms .                                           "
},
{
  "id": "de-linear-terms-3",
  "level": "2",
  "url": "linear-terms.html#de-linear-terms-3",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "linear "
},
{
  "id": "order-linearity-cyu-4",
  "level": "2",
  "url": "linear-terms.html#order-linearity-cyu-4",
  "type": "Checkpoint",
  "number": "14",
  "title": "",
  "body": "  Each of the following terms is linear. Identify the coefficient in each term:                        \\s*(2t|2\\s*t|2\\s*\\*\\s*t|2\\(t\\))\\s*  Correct! .    \\s*(2|two)\\s*  Incorrect. The coefficient is more than just .    \\s*(y|Y)\\s*  Incorrect. should not contain .   \\s* Type in something ...  .* Incorrect     \\s*(sin\\(\\s*t\\s*\\)|sin\\s*t|sine\\s*t)\\s*  Correct! .    \\s*(y|Y)\\s*  Incorrect. should not contain .   \\s* Type in something ...  .* Incorrect     \\s*(1|one)\\s*  Correct! .    \\s*(y|Y)\\s*  Incorrect. should not contain .   \\s* Type in something ...  .* Incorrect    "
},
{
  "id": "nonlinear-terms-2",
  "level": "2",
  "url": "linear-terms.html#nonlinear-terms-2",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "nonlinear "
},
{
  "id": "order-linearity-cyu-5",
  "level": "2",
  "url": "linear-terms.html#order-linearity-cyu-5",
  "type": "Checkpoint",
  "number": "15",
  "title": "",
  "body": "     Directions:    🔹  Match (by dragging) each term (on the left) to either Linear or Nonlinear.    🔹  Assume the dependent variable is and the independent variable is .           Linear      Non-Linear Term    "
},
{
  "id": "nonlinear-terms-7",
  "level": "2",
  "url": "linear-terms.html#nonlinear-terms-7",
  "type": "🌌 Example",
  "number": "16",
  "title": "Identify the Linearity of the Terms.",
  "body": " Identify the Linearity of the Terms   Determine whether each term in the equation is linear or nonlinear:      Focus on the dependent variable, , and its derivatives.        Focus on the dependent variable, , and its derivatives.       "
},
{
  "id": "order-linearity-cyu-6",
  "level": "2",
  "url": "linear-terms.html#order-linearity-cyu-6",
  "type": "Checkpoint",
  "number": "17",
  "title": "",
  "body": "  For each differential equation, click on all of the nonlinear terms .                                         "
},
{
  "id": "linearity",
  "level": "1",
  "url": "linearity.html",
  "type": "Section",
  "number": "2.3",
  "title": "Linearity",
  "body": " Linearity  Now that we've defined what it means for a term to be linear, we can describe what it means for an entire differential equation to be linear.  Essentially, a differential equation is linear if every term in the equation is linear . If just one term is nonlinear, the entire equation is nonlinear . We formally define linear differential equations as follows:    Select the true statement.     An equation is nonlinear if at least one of its terms are nonlinear.  Correct! A differential equation is nonlinear if any of its terms are nonlinear.    An equation is linear if at least one of its terms are linear.  Incorrect. A differential equation needs all of its terms to be linear.    As long as there are more linear terms than nonlinear terms, the equation is linear.  Incorrect.      Linear Differential Equations   A differential equation is linear if it can be written as a sum of linear terms involving the dependent variable and its derivatives: This structure is known as a linear combination of the dependent variable and its derivatives.  where each is a function of the independent variable only, and is the input or forcing term.    For example, the following differential equations are linear:   Each term involving the dependent variable or its derivatives is linear, none appear raised to a power, inside a function, or multiplied together.  In contrast, the following equations are nonlinear because they include at least one nonlinear term (✷):   In each case, it only took one term to violate the definition of a linear differential equation.  Let's practice identifying the linearty of entire equations with a few examples.   Identify the Linearity of the Equation   Determine whether each of the following differential equations is linear:     In the first equation, all terms involving or its derivatives appear linearly: So the equation is linear.  In the second equation, the term is nonlinear, since appears in both the numerator and denominator: This makes the entire equation nonlinear.      Identify the Linear Equations   Click-on all the linear differential equations.                          Remember that a linear differential equation contains only linear terms. Four of these equations are linear.    Linear equations only involve the dependent variable and its derivatives to the first power, and they won't be inside nonlinear functions like sine or multiplied by each other.     Identify the Nonlinear Equations   Click-on all the nonlinear differential equations                          First identify the dependent variable, then carefully look at each term to determine if it is nonlinear. There are six nonlinear equations here.    Nonlinear equations often have terms where the dependent variable or its derivatives are raised to powers other than one, or are inside functions like sine, logarithms, or are multiplied by each other.     "
},
{
  "id": "linearity-3",
  "level": "2",
  "url": "linearity.html#linearity-3",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "linear nonlinear "
},
{
  "id": "order-linearity-cyu-7",
  "level": "2",
  "url": "linearity.html#order-linearity-cyu-7",
  "type": "Checkpoint",
  "number": "18",
  "title": "",
  "body": "  Select the true statement.     An equation is nonlinear if at least one of its terms are nonlinear.  Correct! A differential equation is nonlinear if any of its terms are nonlinear.    An equation is linear if at least one of its terms are linear.  Incorrect. A differential equation needs all of its terms to be linear.    As long as there are more linear terms than nonlinear terms, the equation is linear.  Incorrect.    "
},
{
  "id": "def-linear",
  "level": "2",
  "url": "linearity.html#def-linear",
  "type": "📙 Definition",
  "number": "19",
  "title": "Linear Differential Equations.",
  "body": " Linear Differential Equations   A differential equation is linear if it can be written as a sum of linear terms involving the dependent variable and its derivatives: This structure is known as a linear combination of the dependent variable and its derivatives.  where each is a function of the independent variable only, and is the input or forcing term.   "
},
{
  "id": "linearity-11",
  "level": "2",
  "url": "linearity.html#linearity-11",
  "type": "🌌 Example",
  "number": "20",
  "title": "Identify the Linearity of the Equation.",
  "body": " Identify the Linearity of the Equation   Determine whether each of the following differential equations is linear:     In the first equation, all terms involving or its derivatives appear linearly: So the equation is linear.  In the second equation, the term is nonlinear, since appears in both the numerator and denominator: This makes the entire equation nonlinear.   "
},
{
  "id": "order-linearity-cyu-8",
  "level": "2",
  "url": "linearity.html#order-linearity-cyu-8",
  "type": "Checkpoint",
  "number": "21",
  "title": "",
  "body": "  Identify the Linear Equations   Click-on all the linear differential equations.                          Remember that a linear differential equation contains only linear terms. Four of these equations are linear.    Linear equations only involve the dependent variable and its derivatives to the first power, and they won't be inside nonlinear functions like sine or multiplied by each other.     Identify the Nonlinear Equations   Click-on all the nonlinear differential equations                          First identify the dependent variable, then carefully look at each term to determine if it is nonlinear. There are six nonlinear equations here.    Nonlinear equations often have terms where the dependent variable or its derivatives are raised to powers other than one, or are inside functions like sine, logarithms, or are multiplied by each other.    "
},
{
  "id": "class-concept-quiz",
  "level": "1",
  "url": "class-concept-quiz.html",
  "type": "Subsection",
  "number": "",
  "title": "💡 Conceptual Quiz",
  "body": " 💡 Conceptual Quiz    True or False   In a differential equation, the dependent variable always has at least one derivative applied to it.    True  Correct! The dependent variable in a differential equation always has a derivative applied to it.    False  Incorrect. By definition, a differential equation involves derivatives of the dependent variable.      A linear term can contain the dependent variable multiplied by the independent variable.    True  Correct! For example, is a linear term.    False  Incorrect. Carefully review the examples above.       Multiple Choice   Which of the following equations is a third-order differential equation?     Correct! The highest derivative here is the third derivative, making it a third-order differential equation.     Incorrect. This is a second-order differential equation.     Incorrect. This is a second-order differential equation.     Incorrect. This is a first-order differential equation.      Which term is an example of a nonlinear term?     Incorrect. is linear because it is a constant.     Incorrect. is linear because it is a function of the independent variable only.     Correct! is nonlinear because the dependent variable is squared.     Incorrect. is linear because it is a function of the independent variable multiplied by the dependent variable.      Which term makes the equation nonlinear?     Correct! The term is nonlinear because the dependent variable is raised to the second power.     Incorrect. While this term includes a function of , it is still linear because appears to the first power.     Incorrect. The term is linear because and its derivatives are to the first power.      Which of the following describes an example of a nonlinear term?    A dependent variable inside another function.  Correct! This is would be an example of a nonlinear term.    A dependent variable raised to the first power.  Incorrect. This is a characteristic of a linear term.    A dependent variable multiplied by a constant.  Incorrect. This is a characteristic of a linear term.    An independent variable squared.  Incorrect. The linearity of a term only depends on the dependent variable.       Matching    Consider the differential equation Drag each expression (left), to the appropriate label (right).      Dependent Variable     Independent Variable     Linear Term     Non-Linear Term     Order of the DE     Coefficient of     Coefficient of       "
},
{
  "id": "class-cq-tf",
  "level": "2",
  "url": "class-concept-quiz.html#class-cq-tf",
  "type": "Exercise",
  "number": "1",
  "title": "True or False.",
  "body": " True or False   In a differential equation, the dependent variable always has at least one derivative applied to it.    True  Correct! The dependent variable in a differential equation always has a derivative applied to it.    False  Incorrect. By definition, a differential equation involves derivatives of the dependent variable.      A linear term can contain the dependent variable multiplied by the independent variable.    True  Correct! For example, is a linear term.    False  Incorrect. Carefully review the examples above.     "
},
{
  "id": "class-cq-mc",
  "level": "2",
  "url": "class-concept-quiz.html#class-cq-mc",
  "type": "Exercise",
  "number": "2",
  "title": "Multiple Choice.",
  "body": " Multiple Choice   Which of the following equations is a third-order differential equation?     Correct! The highest derivative here is the third derivative, making it a third-order differential equation.     Incorrect. This is a second-order differential equation.     Incorrect. This is a second-order differential equation.     Incorrect. This is a first-order differential equation.      Which term is an example of a nonlinear term?     Incorrect. is linear because it is a constant.     Incorrect. is linear because it is a function of the independent variable only.     Correct! is nonlinear because the dependent variable is squared.     Incorrect. is linear because it is a function of the independent variable multiplied by the dependent variable.      Which term makes the equation nonlinear?     Correct! The term is nonlinear because the dependent variable is raised to the second power.     Incorrect. While this term includes a function of , it is still linear because appears to the first power.     Incorrect. The term is linear because and its derivatives are to the first power.      Which of the following describes an example of a nonlinear term?    A dependent variable inside another function.  Correct! This is would be an example of a nonlinear term.    A dependent variable raised to the first power.  Incorrect. This is a characteristic of a linear term.    A dependent variable multiplied by a constant.  Incorrect. This is a characteristic of a linear term.    An independent variable squared.  Incorrect. The linearity of a term only depends on the dependent variable.     "
},
{
  "id": "class-cq-match",
  "level": "2",
  "url": "class-concept-quiz.html#class-cq-match",
  "type": "Exercise",
  "number": "3",
  "title": "Matching.",
  "body": " Matching    Consider the differential equation Drag each expression (left), to the appropriate label (right).      Dependent Variable     Independent Variable     Linear Term     Non-Linear Term     Order of the DE     Coefficient of     Coefficient of     "
},
{
  "id": "class-practice-drills",
  "level": "1",
  "url": "class-practice-drills.html",
  "type": "Subsection",
  "number": "",
  "title": "🏋️‍♂️ Practice Drills",
  "body": " 🏋️‍♂️ Practice Drills    Identify the Linear & Nonlinear Terms   Click on all of the linear terms in the differential equation.                             Identify the nonlinear terms in the differential equation:       Selected     Selected     Selected     Selected       Select the linear terms in the differential equation:       Selected     Selected     Selected     Selected      Which of the following terms is linear?     Correct! is linear because it is a function of the independent variable multiplied by the second derivative of the dependent variable.     Incorrect. is nonlinear because the dependent variable is raised to a power other than one.     Incorrect. is nonlinear because the dependent variable is squared.     Incorrect. is nonlinear because it involves the product of the dependent variable and a function of the dependent variable.      Click on all of the nonlinear terms in the differential equation.                              Review    In this equation, and are nonlinear terms.     Identify the Linear & Nonlinear Differential Equations    Identify the linearity of the differential equation .     Linear   No, this is nonlinear. Looking carefully at each term, we see:   Since one term is not linear, the entire differential equation is nonlinear.     Nonlinear  Correct! This DE is nonlinear since is a nonlinear term.       Identify the linearity of the differential equation .     Linear  Correct! This equation is linear because each term is linear.    Nonlinear   No, this is linear. Looking carefully at each term, we see:   Since every term is linear, this differential equation is linear.        Identify the linearity of the differential equation      Linear  Correct! Since each term is linear, the differential equation is linear.    Nonlinear  Incorrect. Each term is linear since a single dependent variable or its derivative appears to the first power and is not inside a function.       Identify the linearity of the differential equation .     Linear  Incorrect. The term makes this equation nonlinear, as it involves the exponential function of the dependent variable.    Nonlinear  Correct! The term introduces nonlinearity into the equation, as it involves the dependent variable inside an exponential function.      Select the linear differential equation.     Incorrect. The term is nonlinear, making the equation nonlinear.     Incorrect. The term is nonlinear, making the equation nonlinear.     Correct! All terms are linear in this equation, making it a linear differential equation.     Incorrect. The term is nonlinear, making the equation nonlinear.      Click-on all the linear differential equations.                    Remember that a linear differential equation contains only linear terms. Four of these equations are linear.   Linear equations only involve the dependent variable and its derivatives to the first power, and they won't be inside nonlinear functions like sine or multiplied by each other.    Click-on all the nonlinear differential equations                                   First identify the dependent variable, then carefully look at each term to determine if it is nonlinear.   Nonlinear equations often have terms where the dependent variable or its derivatives are raised to powers other than one, or are inside functions like sine, logarithms, or are multiplied by each other.     "
},
{
  "id": "class-drills-01",
  "level": "2",
  "url": "class-practice-drills.html#class-drills-01",
  "type": "Exercise",
  "number": "1",
  "title": "Identify the Linear &amp; Nonlinear Terms.",
  "body": " Identify the Linear & Nonlinear Terms   Click on all of the linear terms in the differential equation.                             Identify the nonlinear terms in the differential equation:       Selected     Selected     Selected     Selected       Select the linear terms in the differential equation:       Selected     Selected     Selected     Selected      Which of the following terms is linear?     Correct! is linear because it is a function of the independent variable multiplied by the second derivative of the dependent variable.     Incorrect. is nonlinear because the dependent variable is raised to a power other than one.     Incorrect. is nonlinear because the dependent variable is squared.     Incorrect. is nonlinear because it involves the product of the dependent variable and a function of the dependent variable.      Click on all of the nonlinear terms in the differential equation.                              Review    In this equation, and are nonlinear terms.   "
},
{
  "id": "class-drills-02",
  "level": "2",
  "url": "class-practice-drills.html#class-drills-02",
  "type": "Exercise",
  "number": "2",
  "title": "Identify the Linear &amp; Nonlinear Differential Equations.",
  "body": " Identify the Linear & Nonlinear Differential Equations    Identify the linearity of the differential equation .     Linear   No, this is nonlinear. Looking carefully at each term, we see:   Since one term is not linear, the entire differential equation is nonlinear.     Nonlinear  Correct! This DE is nonlinear since is a nonlinear term.       Identify the linearity of the differential equation .     Linear  Correct! This equation is linear because each term is linear.    Nonlinear   No, this is linear. Looking carefully at each term, we see:   Since every term is linear, this differential equation is linear.        Identify the linearity of the differential equation      Linear  Correct! Since each term is linear, the differential equation is linear.    Nonlinear  Incorrect. Each term is linear since a single dependent variable or its derivative appears to the first power and is not inside a function.       Identify the linearity of the differential equation .     Linear  Incorrect. The term makes this equation nonlinear, as it involves the exponential function of the dependent variable.    Nonlinear  Correct! The term introduces nonlinearity into the equation, as it involves the dependent variable inside an exponential function.      Select the linear differential equation.     Incorrect. The term is nonlinear, making the equation nonlinear.     Incorrect. The term is nonlinear, making the equation nonlinear.     Correct! All terms are linear in this equation, making it a linear differential equation.     Incorrect. The term is nonlinear, making the equation nonlinear.      Click-on all the linear differential equations.                    Remember that a linear differential equation contains only linear terms. Four of these equations are linear.   Linear equations only involve the dependent variable and its derivatives to the first power, and they won't be inside nonlinear functions like sine or multiplied by each other.    Click-on all the nonlinear differential equations                                   First identify the dependent variable, then carefully look at each term to determine if it is nonlinear.   Nonlinear equations often have terms where the dependent variable or its derivatives are raised to powers other than one, or are inside functions like sine, logarithms, or are multiplied by each other.   "
},
{
  "id": "class-problems-main",
  "level": "1",
  "url": "class-problems-main.html",
  "type": "Subsection",
  "number": "",
  "title": "✍🏻 Problems",
  "body": " ✍🏻 Problems    Determine the Dependent Variable & Order                  (a)         (b)         (c)         (f)             Dependent Variable: Correct!    .*  Dependent Variable: Incorrect.       Order: Correct!    .*  Order: Incorrect.       Dependent Variable: Correct!    .*  Dependent Variable: Incorrect.       Order: Correct!    .*  Order: Incorrect.       Dependent Variable: Correct!    .*  Dependent Variable: Incorrect.       Order: Correct!    .*  Order: Incorrect.       Dependent Variable: Correct!    .*  Dependent Variable: Incorrect.       Order: Correct!    .*  Order: Incorrect.       Determine the Differential Equation is Linear   For each differential equation, identify the dependent variable and determine if it is linear.                Differenential Equation  Dependent Variable?  Linear?    (a)             yes  no    (b)             yes  no    (c)             yes  no    (d)             yes  no    (e)             yes  no    (f)             yes  no         Classify Each Differential Equation   For each differential equation, determine the following:  the variable that you are solving for,  the order of the differential equation,  the linear terms, and  the linearity of the equation.              Select the Correct Answer   (a) Solves for:        (b) Order:   1st   2nd   3rd   4th   5th     (c) Linear terms:                     (d) Linearity:   Linear   Nonlinear                Select the Correct Answer   (a) Solves for:             (b) Order:   1st   2nd   3rd   4th   5th     (c) Linear terms:                     (d) Linearity:   Linear   Nonlinear                Select the Correct Answer   (a) Solves for:             (b) Order:   1st   2nd   3rd   4th   5th     (c) Linear terms:                     (d) Linearity:   Linear   Nonlinear                Select the Correct Answer   (a) Solves for:             (b) Order:   1st   2nd   3rd   4th   5th     (c) Linear terms:                  (d) Linearity:   Linear   Nonlinear                Select the Correct Answer   (a) Solves for:             (b) Order:   1st   2nd   3rd   4th   5th     (c) Linear terms:             (d) Linearity:   Linear   Nonlinear                Select the Correct Answer   (a) Solves for:             (b) Order:   1st   2nd   3rd   4th   5th     (c) Linear terms:             (d) Linearity:   Linear   Nonlinear                Select the Correct Answer   (a) Solves for:             (b) Order:   1st   2nd   3rd   4th   5th     (c) Linear terms:                 (d) Linearity:   Linear   Nonlinear                Select the Correct Answer   (a) Solves for:             (b) Order:   1st   2nd   3rd   4th   5th     (c) Linear terms:                 (d) Linearity:   Linear   Nonlinear                Select the Correct Answer   (a) Solves for:             (b) Order:   1st   2nd   3rd   4th   5th     (c) Linear terms:                 (d) Linearity:   Linear   Nonlinear                Select the Correct Answer   (a) Solves for:             (b) Order:   1st   2nd   3rd   4th   5th     (c) Linear terms:                     (d) Linearity:   Linear   Nonlinear                Select the Correct Answer   (a) Solves for:             (b) Order:   1st   2nd   3rd   4th   5th     (c) Linear terms:                 (d) Linearity:   Linear   Nonlinear                Select the Correct Answer   (a) Solves for:             (b) Order:   1st   2nd   3rd   4th   5th     (c) Linear terms:                 (d) Linearity:   Linear   Nonlinear          Determine the Linearity of Each Term   Determine the linearity of each term in the differential equation: .    To classify terms, focus on the dependent variable and its derivatives. The table below summarizes the linearity of each term:        Term  Coefficient  Dependent Variable  Linearity       Linear       Nonlinear       Nonlinear       Linear       Nonlinear       Nonlinear       Linear    Note the last term, , is a free term since it does not involve the dependent variable or its derivatives. These terms are always linear in the context of differential equations.     "
},
{
  "id": "class-problems-01",
  "level": "2",
  "url": "class-problems-main.html#class-problems-01",
  "type": "Exercise",
  "number": "1",
  "title": "Determine the Dependent Variable &amp; Order.",
  "body": " Determine the Dependent Variable & Order                  (a)         (b)         (c)         (f)             Dependent Variable: Correct!    .*  Dependent Variable: Incorrect.       Order: Correct!    .*  Order: Incorrect.       Dependent Variable: Correct!    .*  Dependent Variable: Incorrect.       Order: Correct!    .*  Order: Incorrect.       Dependent Variable: Correct!    .*  Dependent Variable: Incorrect.       Order: Correct!    .*  Order: Incorrect.       Dependent Variable: Correct!    .*  Dependent Variable: Incorrect.       Order: Correct!    .*  Order: Incorrect.     "
},
{
  "id": "class-problems-02",
  "level": "2",
  "url": "class-problems-main.html#class-problems-02",
  "type": "Exercise",
  "number": "2",
  "title": "Determine the Differential Equation is Linear.",
  "body": " Determine the Differential Equation is Linear   For each differential equation, identify the dependent variable and determine if it is linear.                Differenential Equation  Dependent Variable?  Linear?    (a)             yes  no    (b)             yes  no    (c)             yes  no    (d)             yes  no    (e)             yes  no    (f)             yes  no       "
},
{
  "id": "class-problems-03",
  "level": "2",
  "url": "class-problems-main.html#class-problems-03",
  "type": "Exercise",
  "number": "3",
  "title": "Classify Each Differential Equation.",
  "body": " Classify Each Differential Equation   For each differential equation, determine the following:  the variable that you are solving for,  the order of the differential equation,  the linear terms, and  the linearity of the equation.              Select the Correct Answer   (a) Solves for:        (b) Order:   1st   2nd   3rd   4th   5th     (c) Linear terms:                     (d) Linearity:   Linear   Nonlinear                Select the Correct Answer   (a) Solves for:             (b) Order:   1st   2nd   3rd   4th   5th     (c) Linear terms:                     (d) Linearity:   Linear   Nonlinear                Select the Correct Answer   (a) Solves for:             (b) Order:   1st   2nd   3rd   4th   5th     (c) Linear terms:                     (d) Linearity:   Linear   Nonlinear                Select the Correct Answer   (a) Solves for:             (b) Order:   1st   2nd   3rd   4th   5th     (c) Linear terms:                  (d) Linearity:   Linear   Nonlinear                Select the Correct Answer   (a) Solves for:             (b) Order:   1st   2nd   3rd   4th   5th     (c) Linear terms:             (d) Linearity:   Linear   Nonlinear                Select the Correct Answer   (a) Solves for:             (b) Order:   1st   2nd   3rd   4th   5th     (c) Linear terms:             (d) Linearity:   Linear   Nonlinear                Select the Correct Answer   (a) Solves for:             (b) Order:   1st   2nd   3rd   4th   5th     (c) Linear terms:                 (d) Linearity:   Linear   Nonlinear                Select the Correct Answer   (a) Solves for:             (b) Order:   1st   2nd   3rd   4th   5th     (c) Linear terms:                 (d) Linearity:   Linear   Nonlinear                Select the Correct Answer   (a) Solves for:             (b) Order:   1st   2nd   3rd   4th   5th     (c) Linear terms:                 (d) Linearity:   Linear   Nonlinear                Select the Correct Answer   (a) Solves for:             (b) Order:   1st   2nd   3rd   4th   5th     (c) Linear terms:                     (d) Linearity:   Linear   Nonlinear                Select the Correct Answer   (a) Solves for:             (b) Order:   1st   2nd   3rd   4th   5th     (c) Linear terms:                 (d) Linearity:   Linear   Nonlinear                Select the Correct Answer   (a) Solves for:             (b) Order:   1st   2nd   3rd   4th   5th     (c) Linear terms:                 (d) Linearity:   Linear   Nonlinear        "
},
{
  "id": "class-problems-04",
  "level": "2",
  "url": "class-problems-main.html#class-problems-04",
  "type": "Exercise",
  "number": "4",
  "title": "Determine the Linearity of Each Term.",
  "body": " Determine the Linearity of Each Term   Determine the linearity of each term in the differential equation: .    To classify terms, focus on the dependent variable and its derivatives. The table below summarizes the linearity of each term:        Term  Coefficient  Dependent Variable  Linearity       Linear       Nonlinear       Nonlinear       Linear       Nonlinear       Nonlinear       Linear    Note the last term, , is a free term since it does not involve the dependent variable or its derivatives. These terms are always linear in the context of differential equations.   "
},
{
  "id": "solns-to-eqns",
  "level": "1",
  "url": "solns-to-eqns.html",
  "type": "Section",
  "number": "3.1",
  "title": "Solutions to Equations",
  "body": " Solutions to Equations   Solutions to Algebraic Equations  In algebra, we say that a value satisfies an equation if, when we substitute that value in place of the variable, it makes both sides of the equation equal. This gives a true statement, like or .  For example, consider the equation:   Let's check whether and are solutions by substituting them into the equation. plugging them in we get:          Since is a true statement, satisfies the equation and is a solution. On the other hand, leads to a false statement ( ), showing that it is not a solution.    Solutions to Differential Equations  In differential equations, solutions are functions rather than single values. To verify a solution, we substitute the function into the dependent variable in the equation. If both sides simplify to the same expression, then the function is a solution.  For instance, consider the differential equation:   To check whether or is a solution, we substitute each into the equation and compare both sides. In this case, we get:          For differential equations, a solution satisfies the equation if both sides simplfy to the exact same function. Since this only happened for the second function, we can conclude that is a solution, while is not.     To verify that a function satisfies a differential equation, you  plug the function into the equation,  simplify both sides of the equation, and  solve the simplified equation for .      Statements (1) and (2) are true, but (3) is not. Statement (3) should instead read:  (3) compare the functions on the left and right-hand sides of the simplified equation.      The function, , is a solution to the equation .    The function is not a solution since       "
},
{
  "id": "whats-a-soln-cyu-1",
  "level": "2",
  "url": "solns-to-eqns.html#whats-a-soln-cyu-1",
  "type": "Checkpoint",
  "number": "22",
  "title": "",
  "body": "   To verify that a function satisfies a differential equation, you  plug the function into the equation,  simplify both sides of the equation, and  solve the simplified equation for .      Statements (1) and (2) are true, but (3) is not. Statement (3) should instead read:  (3) compare the functions on the left and right-hand sides of the simplified equation.      The function, , is a solution to the equation .    The function is not a solution since     "
},
{
  "id": "verifying-solutions",
  "level": "1",
  "url": "verifying-solutions.html",
  "type": "Section",
  "number": "3.2",
  "title": "Verifying Solutions",
  "body": " Verifying Solutions  Verifying that a given function is a solution to a differential equation amounts to showing that it satisfies the equation. This typically involves taking any necessary derivatives of the function, substituting it into the equation, and simplifying both sides to see if they match. Here are some examples to illustrate this process.    Verify that is a solution to .    First, compute and plug both and into the equation: This shows that satisfies the equation and proves it is a solution.      Verify that is a solution to .    Since appears, compute the derivatives first:   Now substitute in the dependent variable along with its derivatives: Since the function on the left is different than the function on the right, does not satisfy the equation and is not a solution.    As you will soon learn, differential equations have many solutions and each of them share a common form, as the next example shows.    Show that the functions are all solutions to the differential equation .    Rather than verify each function separately, notice that they all are of the form , where is a constant. Let's verify the general case.  Substitute into the equation: So is a solution for any constant . In particular, this includes the functions for the constants respectively.    As you saw in the previous example, solutions can differ by a constant. Some solutions even involve multiple constants, as the next example shows.    Verify that is a solution to .    Compute needed derivatives and substitute into the equation: Thus, is a solution to .    "
},
{
  "id": "verifying-solutions-3",
  "level": "2",
  "url": "verifying-solutions.html#verifying-solutions-3",
  "type": "🌌 Example",
  "number": "23",
  "title": "",
  "body": "  Verify that is a solution to .    First, compute and plug both and into the equation: This shows that satisfies the equation and proves it is a solution.   "
},
{
  "id": "verifying-solutions-4",
  "level": "2",
  "url": "verifying-solutions.html#verifying-solutions-4",
  "type": "🌌 Example",
  "number": "24",
  "title": "",
  "body": "  Verify that is a solution to .    Since appears, compute the derivatives first:   Now substitute in the dependent variable along with its derivatives: Since the function on the left is different than the function on the right, does not satisfy the equation and is not a solution.   "
},
{
  "id": "example-whats-a-soln-1",
  "level": "2",
  "url": "verifying-solutions.html#example-whats-a-soln-1",
  "type": "🌌 Example",
  "number": "25",
  "title": "",
  "body": "  Show that the functions are all solutions to the differential equation .    Rather than verify each function separately, notice that they all are of the form , where is a constant. Let's verify the general case.  Substitute into the equation: So is a solution for any constant . In particular, this includes the functions for the constants respectively.   "
},
{
  "id": "example-whats-a-soln-2",
  "level": "2",
  "url": "verifying-solutions.html#example-whats-a-soln-2",
  "type": "🌌 Example",
  "number": "26",
  "title": "",
  "body": "  Verify that is a solution to .    Compute needed derivatives and substitute into the equation: Thus, is a solution to .   "
},
{
  "id": "general-particular-solutions",
  "level": "1",
  "url": "general-particular-solutions.html",
  "type": "Section",
  "number": "3.3",
  "title": "General, Particular &amp; Family of Solutions",
  "body": " General, Particular & Family of Solutions  You know that a solution to a differential equation is a function that satisfies the equation. But shows that the differential equation has multiple solutions, all which differ by a constant factor: Rather than listing all possible solutions, we can express them all at once using a formula that includes an arbitrary constant: where can be any real number. This formula is called the general solution of the differential equation, and each choice of gives a different particular solution .    A particular solution is a specific function that satisfies a differential equation. A general solution is the most general form (i.e., a formula) that represents all possible particular solutions. A family of solutions is the complete set of all particular solutions.    In , we also verified that the function, was a solution to the differential equation . In this case, the general solution contains two arbtrary constants. To get a particular solution, we need to assign specific values to both and . shows how some particular solutions are generated from the general solution by selecting different values for the constants.   Generating particular solutions from the general solution          General Solution   Particular Solutions                              If we could somehow list every possible combination of and , we'd have the full family of solutions to the differential equation.   Not all solutions with constants are general solutions  Keep in mind, solutions with arbitrary constants are not general solutions by default. For example, both of the functions are solutions to the equation , but only the second is general solution. The first is a special case of the second, obtained when .    Check your Understanding   📖❓ Find the Solutions from the General Solution   Given that the differential equation has the general solution select all the solutions to this equation.                         📖❓ General or Particular   Fill in the following blanks, below, with one of the following terms:  general  particular     Tip: Double-click a term above to quickly highlight it for copying.      A family of solutions is the collection of all solutions.    A solution is a template for each solution.    A solution can generate a family of solutions.    A solution contains one or more arbitrary constants.    A solution is a function that results from assigning specific values to the constants in the solution.         general  .* There are only two possible answers, did you spell it incorrectly?     particular  .* There are only two possible answers, did you spell it incorrectly?     general  .* There are only two possible answers, did you spell it incorrectly?     particular  .* There are only two possible answers, did you spell it incorrectly?     particular  .* There are only two possible answers, did you spell it incorrectly?     general  .* There are only two possible answers, did you spell it incorrectly?     particular  .* There are only two possible answers, did you spell it incorrectly?      📖❓ Describe a Family of Solutions   If a solution to a differential equation contains an arbitrary constant, it is a general solution.    True   Keep in mind, solutions with arbitrary constants are not general solutions by default. For example, both of the functions are solutions to the equation , but only the second is general solution. The first is a special case of the second, obtained when .    False   Correct!       📖❓ Find the Solutions   Match the word that best describes each type of solution.     Formula  General Solution    Specific  Particular Solution    Collection  Family of Solutions      "
},
{
  "id": "def-",
  "level": "2",
  "url": "general-particular-solutions.html#def-",
  "type": "📙 Definition",
  "number": "27",
  "title": "",
  "body": "  A particular solution is a specific function that satisfies a differential equation. A general solution is the most general form (i.e., a formula) that represents all possible particular solutions. A family of solutions is the complete set of all particular solutions.   "
},
{
  "id": "general-to-particular-solutions",
  "level": "2",
  "url": "general-particular-solutions.html#general-to-particular-solutions",
  "type": "Table",
  "number": "28",
  "title": "Generating particular solutions from the general solution",
  "body": " Generating particular solutions from the general solution          General Solution   Particular Solutions                             "
},
{
  "id": "general-solution-warning",
  "level": "2",
  "url": "general-particular-solutions.html#general-solution-warning",
  "type": "⚠️",
  "number": "29",
  "title": "Not all solutions with constants are general solutions.",
  "body": " Not all solutions with constants are general solutions  Keep in mind, solutions with arbitrary constants are not general solutions by default. For example, both of the functions are solutions to the equation , but only the second is general solution. The first is a special case of the second, obtained when .  "
},
{
  "id": "c2-2-cyu-1",
  "level": "2",
  "url": "general-particular-solutions.html#c2-2-cyu-1",
  "type": "Checkpoint",
  "number": "30",
  "title": "Check your Understanding.",
  "body": " Check your Understanding   📖❓ Find the Solutions from the General Solution   Given that the differential equation has the general solution select all the solutions to this equation.                         📖❓ General or Particular   Fill in the following blanks, below, with one of the following terms:  general  particular     Tip: Double-click a term above to quickly highlight it for copying.      A family of solutions is the collection of all solutions.    A solution is a template for each solution.    A solution can generate a family of solutions.    A solution contains one or more arbitrary constants.    A solution is a function that results from assigning specific values to the constants in the solution.         general  .* There are only two possible answers, did you spell it incorrectly?     particular  .* There are only two possible answers, did you spell it incorrectly?     general  .* There are only two possible answers, did you spell it incorrectly?     particular  .* There are only two possible answers, did you spell it incorrectly?     particular  .* There are only two possible answers, did you spell it incorrectly?     general  .* There are only two possible answers, did you spell it incorrectly?     particular  .* There are only two possible answers, did you spell it incorrectly?      📖❓ Describe a Family of Solutions   If a solution to a differential equation contains an arbitrary constant, it is a general solution.    True   Keep in mind, solutions with arbitrary constants are not general solutions by default. For example, both of the functions are solutions to the equation , but only the second is general solution. The first is a special case of the second, obtained when .    False   Correct!       📖❓ Find the Solutions   Match the word that best describes each type of solution.     Formula  General Solution    Specific  Particular Solution    Collection  Family of Solutions     "
},
{
  "id": "initial-valued-problems",
  "level": "1",
  "url": "initial-valued-problems.html",
  "type": "Section",
  "number": "3.4",
  "title": "Initial-Value Problems (IVPs)",
  "body": " Initial-Value Problems (IVPs)   illustrates how particular solutions can be generated from the general solution. However, in real-world problems, these constants are not selected. Instead, they are determined from known or assumed information about the initial state of the problem. These known values are called initial conditions and when a differential equation is paired with initial conditions that equation becomes an initial-value problem (IVP).  For example, suppose you are modeling an object in free fall and you know the following about the object:  The object falls under constant acceleration .  The object is dropped from .  The object is dropped from rest with an initial velocity of zero.    If is its height above the ground, then the information above can be translated into an IVP since (1) gives the differential equation: and (2) - (3) give the initial conditions:   The general solution can be found by integrating twice:   Applying the initial conditions to and allows us to solve for the constants and :      Using these values, we get the particular solution:   To summarize, solutions to differential equations lead to general solutions, whereas solutions to initial-value problems lead to particular solutions.    Find the particular solution to the initial value problem: given that the general solution is:     The initial condition tells us that must equal 2 when . Substituting into the general solution:   Thus, the particular solution is:     The next example shows why multiple initial conditions are needed when a general solution contains more than one constant.    Verify that the function is a solution to and then find the particular solution satisfying:    Verifying the General Solution  Compute the derivatives:   Substitute into the equation: So is indeed a solution.   Finding the Particular Solution  Apply the initial conditions:          Solve the system: Substituting and solving yields:   The particular solution is:      Check your Understanding   📖❓ Initial Condition Meaning   Assume we have a differential equation with dependent variable and independent variable .  What is an initial condition?      A known value of or a known value of 's derivatives.    Correct! An initial condition specifies the value of the solution or its derivative at a particular point.      The starting value of .    Incorrect. The initial condition is related to the solution or its derivatives at a specific point.      Any point in the -plane.    Incorrect. An initial condition is not just any point; it's a specific point referring to a known value of or one of it's derivatives      The first step in solving a differential equation.    Incorrect. The initial condition is not the initial step for solving a differential equation.       📖❓ Is it an IVP   The differential equation is an example of an initial-value problem.     True   Incorrect. An initial-value problem must include initial conditions, which are missing here.     False   Correct! This is just a differential equation, without initial conditions, it is not an initial-value problem.       📖❓ When is your Answer a Particular Solution   In which case would you need to find a particular solution rather than just a general solution?      When the differential equation is linear.    Incorrect. Linearity doesn't determine whether you need a particular solution.      When initial conditions are provided.    Correct! A particular solution is found when you need to satisfy initial conditions.      When the differential equation is has a general solution.    Incorrect. The existence of a general solution doesn't determine whether you need a particular solution.      When the function depends on more than one variable.    Incorrect. Multivariable functions are not the reason for finding a particular solution.       "
},
{
  "id": "initial-valued-problems-2",
  "level": "2",
  "url": "initial-valued-problems.html#initial-valued-problems-2",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "initial conditions initial-value problem "
},
{
  "id": "solving-for-a-constant",
  "level": "2",
  "url": "initial-valued-problems.html#solving-for-a-constant",
  "type": "🌌 Example",
  "number": "31",
  "title": "",
  "body": "  Find the particular solution to the initial value problem: given that the general solution is:     The initial condition tells us that must equal 2 when . Substituting into the general solution:   Thus, the particular solution is:    "
},
{
  "id": "Two-Initial-Conditions",
  "level": "2",
  "url": "initial-valued-problems.html#Two-Initial-Conditions",
  "type": "🌌 Example",
  "number": "32",
  "title": "",
  "body": "  Verify that the function is a solution to and then find the particular solution satisfying:    Verifying the General Solution  Compute the derivatives:   Substitute into the equation: So is indeed a solution.   Finding the Particular Solution  Apply the initial conditions:          Solve the system: Substituting and solving yields:   The particular solution is:    "
},
{
  "id": "c2-3-cyu-1",
  "level": "2",
  "url": "initial-valued-problems.html#c2-3-cyu-1",
  "type": "Checkpoint",
  "number": "33",
  "title": "Check your Understanding.",
  "body": " Check your Understanding   📖❓ Initial Condition Meaning   Assume we have a differential equation with dependent variable and independent variable .  What is an initial condition?      A known value of or a known value of 's derivatives.    Correct! An initial condition specifies the value of the solution or its derivative at a particular point.      The starting value of .    Incorrect. The initial condition is related to the solution or its derivatives at a specific point.      Any point in the -plane.    Incorrect. An initial condition is not just any point; it's a specific point referring to a known value of or one of it's derivatives      The first step in solving a differential equation.    Incorrect. The initial condition is not the initial step for solving a differential equation.       📖❓ Is it an IVP   The differential equation is an example of an initial-value problem.     True   Incorrect. An initial-value problem must include initial conditions, which are missing here.     False   Correct! This is just a differential equation, without initial conditions, it is not an initial-value problem.       📖❓ When is your Answer a Particular Solution   In which case would you need to find a particular solution rather than just a general solution?      When the differential equation is linear.    Incorrect. Linearity doesn't determine whether you need a particular solution.      When initial conditions are provided.    Correct! A particular solution is found when you need to satisfy initial conditions.      When the differential equation is has a general solution.    Incorrect. The existence of a general solution doesn't determine whether you need a particular solution.      When the function depends on more than one variable.    Incorrect. Multivariable functions are not the reason for finding a particular solution.      "
},
{
  "id": "visualizing-solutions",
  "level": "1",
  "url": "visualizing-solutions.html",
  "type": "Section",
  "number": "3.5",
  "title": "Visualizing Solutions",
  "body": " Visualizing Solutions  🎧 Listen  An effective way to deepen your understanding of solutions is through visualization. Even though a family of solutions includes infinitely many curves, plotting just a few helps reveal how the general solution, particular solutions, and initial conditions are related.  Think of a family of solutions like a map full of side-by-side paths. The map shows all possible routes a traveler could take, each one representing a particular solution. The general solution defines the layout of all these paths, and choosing an initial condition is like dropping a pin on the map: the curve that passes through that point is the specific path (or solution) you follow.   📈 Interactive: Visualizing Solutions  Consider the differential equation: which has the general solution:   Since the constant can take any value, there are many possible solutions (green curves in ). Adjust the initial condition (i.e., point on the -axis) to see the specific solutions it corresponds to (blue curve).   Particular solutions with different initial conditions.           Interactive Follow-up Questions   Adjust the initial condition in the interactive to help you answer the following:    Find the particular solution   Find the particular solution that satisfies .      Incorrect. The value of must make the solution pass through . Hover over the curve in the figure that passes through .     Incorrect. Remember that at , the exponential term equals 1, so . What value of gives ? Hover over the curve in the figure that passes through .     Correct! The value ensures that , so this solution passes through .     Incorrect. The general solution would pass through if . Hover over the curve in the figure that passes through .      Find the initial condition   What is the initial condition for the particular solution ?      Correct! Moving to this point gives the particular solution above.     Incorrect. Hint: move around until you see the particular solution above. .     Incorrect. Hint: move around until you see the particular solution above. .     Incorrect. Hint: move around until you see the particular solution above. .      Find the constant .   Find the -value for the particular solution that approximately satisfies .      Correct! Moving to gives a blue curve that nearly passes through the point .     Incorrect. Hint: identify the point and move until the blue curve intersect with this point.     Incorrect. Hint: identify the point and move until the blue curve intersect with this point.     Incorrect. Hint: identify the point and move until the blue curve intersect with this point.      Role of Initial Conditions  What role do initial conditions play in solving differential equations?    They determine the general form of the solution.  Incorrect. Initial conditions are not used to find the general solution.    They used to determine the constants in the general solution.  Correct! Initial conditions are used to find specific values for constants in the general solution.    They are used to find the particular solution.  Correct! Initial conditions are used to find the specific solution that applies to a particular scenario.    They are not needed if the general solution is already known.  Incorrect. If provided, initial conditions are always needed to get the particular solution from the general solution.    C     "
},
{
  "id": "visualizing-solutions-fig",
  "level": "2",
  "url": "visualizing-solutions.html#visualizing-solutions-fig",
  "type": "Figure",
  "number": "34",
  "title": "",
  "body": " Particular solutions with different initial conditions.       "
},
{
  "id": "c2-4-cyu-1",
  "level": "2",
  "url": "visualizing-solutions.html#c2-4-cyu-1",
  "type": "Checkpoint",
  "number": "35",
  "title": "Interactive Follow-up Questions.",
  "body": " Interactive Follow-up Questions   Adjust the initial condition in the interactive to help you answer the following:    Find the particular solution   Find the particular solution that satisfies .      Incorrect. The value of must make the solution pass through . Hover over the curve in the figure that passes through .     Incorrect. Remember that at , the exponential term equals 1, so . What value of gives ? Hover over the curve in the figure that passes through .     Correct! The value ensures that , so this solution passes through .     Incorrect. The general solution would pass through if . Hover over the curve in the figure that passes through .      Find the initial condition   What is the initial condition for the particular solution ?      Correct! Moving to this point gives the particular solution above.     Incorrect. Hint: move around until you see the particular solution above. .     Incorrect. Hint: move around until you see the particular solution above. .     Incorrect. Hint: move around until you see the particular solution above. .      Find the constant .   Find the -value for the particular solution that approximately satisfies .      Correct! Moving to gives a blue curve that nearly passes through the point .     Incorrect. Hint: identify the point and move until the blue curve intersect with this point.     Incorrect. Hint: identify the point and move until the blue curve intersect with this point.     Incorrect. Hint: identify the point and move until the blue curve intersect with this point.      Role of Initial Conditions  What role do initial conditions play in solving differential equations?    They determine the general form of the solution.  Incorrect. Initial conditions are not used to find the general solution.    They used to determine the constants in the general solution.  Correct! Initial conditions are used to find specific values for constants in the general solution.    They are used to find the particular solution.  Correct! Initial conditions are used to find the specific solution that applies to a particular scenario.    They are not needed if the general solution is already known.  Incorrect. If provided, initial conditions are always needed to get the particular solution from the general solution.    C   "
},
{
  "id": "c2-concept-quiz",
  "level": "1",
  "url": "c2-concept-quiz.html",
  "type": "Subsection",
  "number": "",
  "title": "💡 Conceptual Quiz",
  "body": " 💡 Conceptual Quiz    Abbreviations      DE  Differential Equation    IVP  Initial Value Problem      True or False    In general, differential equations have more than one solution.    True. In general, differential equations have infinitely-many solutions.      The function, , satisfies the differential equation .    False. is not a solution since       A single initial condition always gives you a particular solution?    False. This would only be true when there is one constant in the general solution. When there is more than one constant, then you need multiple initial conditions.  It does, however, limit the possible values of the constants.         is a solution to the differential equation .      True    Incorrect. is not a solution since       False    Correct! is not a solution since         The differential equation, , is an example of an initial-value problem.      True    Incorrect. An initial value problem includes specific initial conditions, which are not provided in this equation.      False    Correct! The equation is a differential equation without initial conditions, so it is not an initial value problem.        Suppose that for some differential equation,  is the family of solutions.  is the general solution.  and are two different particular solutions.    Select all the true statements.       is the collection of all particular solutions.    Correct! A family of solutions includes all possible particular solutions.      Applying one or more initial conditions to gives .    Correct! A particular solution is found by applying initial conditions to the general solution.       is a member of .    Incorrect. The general solution is a form that represents the family of solutions, but it is not itself a member of the family.       & are particular solutions to the same IVP.    Incorrect. Different particular solutions correspond to different initial conditions, so they cannot both be solutions to the same IVP.        Multiple Choice   Select-the-Best-Answer   Which statement best describes a solution to a differential equation?      A function of the dependent variable.    While the solution is a function, it is not a function of the dependent variable.      A function of the independent variable.    Yes, when you solve a differential equation, you are finding a function of the independent variable.      A numerical value.    It is possible for a solution to be a number, but not in general.      A derivative of the dependent variable.    While derivatives of the dependent variable are involved, they do not describe solutions in general.       Select-the-Best-Answer   Consider the differential equation with missing right side: . If is a solution to this equation, what must the right side be?       Incorrect. Try plugging into the visible parts and simplify.       Incorrect. Try plugging into the visible parts and simplify.       Correct! Plugging and into the left-side gives Therefore, the only way satisfies the equation is if the missing right side is .       Select-the-Best-Answer   What is a family of solutions?      A collection of all possible solutions to a differential equation.    Correct! The family of solutions includes every possible particular solution.      The general solution to a differential equation.    Incorrect. The general solution represents a form of the family of solutions, not the entire set.      A single specific solution to a differential equation.    Incorrect. This describes a particular solution, not the family of solutions.      A solution without any constants.    Incorrect. A solution without constants is typically a particular solution, not the entire family.       Select-the-Best-Answer   What does it mean to solve a differential equation?      To find an unknown function that satisfies the equation.    Correct! The goal of solving a differential equation is to find the function that meets the equation's conditions.      To find the derivative of a function.    Incorrect. While derivatives are involved, the goal is to find the function, not just its derivative.      To identify the constants in an equation.    Incorrect. Identifying constants might be part of the process, but it is not the primary goal.      To determine the independent variable.    Incorrect. The independent variable is usually known; we solve for the dependent variable.       Select-the-Best-Answer   Which task is fundamentally different from the others?      Solving a differential equation.    Incorrect. Solving a differential equation is very similar to two other tasks in this list.      Finding the general solution to a differential equation.    Incorrect. Finding the general solution is very similar to two other tasks in this list.      Finding a family of solutions to a differential equation.    Incorrect. Finding a family of solutions is very similar to two other tasks in this list.      Verifying a solution to a differential equation.    Correct! Verifying a solution is much different than the other tasks that seek to find a solution.        Matching   Fill in the Blanks   The words, on the left, have been removed from the statements, on the right.  Drag each word to the panel that contains the statement it was removed from.     dependent   The solution is represented by the  variable.     general  particular   The solution represents all  possible solutions.     independent   The solution depends on the  variable.     satisfies  function   For a to be a solution to a  differential equation, it must  the equation.        Short-Answer Questions   Algebraic vs. Differential Equation Solutions   Consider the algebraic equation .     State what it means for to be a solution to this equation.    Show how you would verify that is a solution. Do not solve for .     Show how you would verify that is a solution.    Are there any differences in how you verify solutions to differentials equations compared to algebraic equations? Explain.         Explain the Difference   In few sentences, explain the difference between a general solution, family of solutions, and a particualr solution.       Explain the Significance   Explain the significance of initial condition(s) as they relate to the particular and general solution of a differential equation.        (a)    To be a solution to the equation, must satisfy the equation. That is, when we substitute into the equation, the result simplifies to a true statement.    Substituting into the equation, we get Since is an undeniably true statement, we have confirmed that is a solution to the equation.    Substituting into the equation, we get Since is not true, so is not a solution to the equation.    The process of verifying solutions to differential equations is exactly the same. However, with differential equations, we have to be more careful about confirming a true statement . With numbers, it is easy to see if is true, but with functions, its a bit more tricky. We have to be sure that the functions are equal for all values of (or the independent variable). For example, the statement is true since . In contrast, the statement is not true since for all values of . It only takes one value of to make the statement false. Let's try a few values of to see this.                                The fact that the statement is not true for is enough to show that this is not a true statement and would not correspond to a solution to a differential equation.     (b)  A general solution represents the form of all possible solutions to a differential equation, typically with one or more arbitrary constants. A family of solutions is an infinite set of solutions, one for each possible combination of constant values in the general solution. A particular solution is a single solution that satisfies the differential equation with specific values for the constants.   (c)  The initial condition(s) specify one or more points that the graph of the solution must pass through. This often allows one to solve for the constants in the general solution. Therefore, the initial condition(s) act to reduce the family of solutions down to a smaller set of solutions or, ideally, a single particular solution.   (d)  Integrating both sides gives Without knowing , we cannot simplify . So the obstacle is that we are unable to combine these variables into a single on the left side.       "
},
{
  "id": "c2-cq-tf",
  "level": "2",
  "url": "c2-concept-quiz.html#c2-cq-tf",
  "type": "Exercise",
  "number": "1",
  "title": "True or False.",
  "body": " True or False    In general, differential equations have more than one solution.    True. In general, differential equations have infinitely-many solutions.      The function, , satisfies the differential equation .    False. is not a solution since       A single initial condition always gives you a particular solution?    False. This would only be true when there is one constant in the general solution. When there is more than one constant, then you need multiple initial conditions.  It does, however, limit the possible values of the constants.         is a solution to the differential equation .      True    Incorrect. is not a solution since       False    Correct! is not a solution since         The differential equation, , is an example of an initial-value problem.      True    Incorrect. An initial value problem includes specific initial conditions, which are not provided in this equation.      False    Correct! The equation is a differential equation without initial conditions, so it is not an initial value problem.        Suppose that for some differential equation,  is the family of solutions.  is the general solution.  and are two different particular solutions.    Select all the true statements.       is the collection of all particular solutions.    Correct! A family of solutions includes all possible particular solutions.      Applying one or more initial conditions to gives .    Correct! A particular solution is found by applying initial conditions to the general solution.       is a member of .    Incorrect. The general solution is a form that represents the family of solutions, but it is not itself a member of the family.       & are particular solutions to the same IVP.    Incorrect. Different particular solutions correspond to different initial conditions, so they cannot both be solutions to the same IVP.      "
},
{
  "id": "c2-cq-mc",
  "level": "2",
  "url": "c2-concept-quiz.html#c2-cq-mc",
  "type": "Exercise",
  "number": "2",
  "title": "Multiple Choice.",
  "body": " Multiple Choice   Select-the-Best-Answer   Which statement best describes a solution to a differential equation?      A function of the dependent variable.    While the solution is a function, it is not a function of the dependent variable.      A function of the independent variable.    Yes, when you solve a differential equation, you are finding a function of the independent variable.      A numerical value.    It is possible for a solution to be a number, but not in general.      A derivative of the dependent variable.    While derivatives of the dependent variable are involved, they do not describe solutions in general.       Select-the-Best-Answer   Consider the differential equation with missing right side: . If is a solution to this equation, what must the right side be?       Incorrect. Try plugging into the visible parts and simplify.       Incorrect. Try plugging into the visible parts and simplify.       Correct! Plugging and into the left-side gives Therefore, the only way satisfies the equation is if the missing right side is .       Select-the-Best-Answer   What is a family of solutions?      A collection of all possible solutions to a differential equation.    Correct! The family of solutions includes every possible particular solution.      The general solution to a differential equation.    Incorrect. The general solution represents a form of the family of solutions, not the entire set.      A single specific solution to a differential equation.    Incorrect. This describes a particular solution, not the family of solutions.      A solution without any constants.    Incorrect. A solution without constants is typically a particular solution, not the entire family.       Select-the-Best-Answer   What does it mean to solve a differential equation?      To find an unknown function that satisfies the equation.    Correct! The goal of solving a differential equation is to find the function that meets the equation's conditions.      To find the derivative of a function.    Incorrect. While derivatives are involved, the goal is to find the function, not just its derivative.      To identify the constants in an equation.    Incorrect. Identifying constants might be part of the process, but it is not the primary goal.      To determine the independent variable.    Incorrect. The independent variable is usually known; we solve for the dependent variable.       Select-the-Best-Answer   Which task is fundamentally different from the others?      Solving a differential equation.    Incorrect. Solving a differential equation is very similar to two other tasks in this list.      Finding the general solution to a differential equation.    Incorrect. Finding the general solution is very similar to two other tasks in this list.      Finding a family of solutions to a differential equation.    Incorrect. Finding a family of solutions is very similar to two other tasks in this list.      Verifying a solution to a differential equation.    Correct! Verifying a solution is much different than the other tasks that seek to find a solution.      "
},
{
  "id": "c2-cq-match",
  "level": "2",
  "url": "c2-concept-quiz.html#c2-cq-match",
  "type": "Exercise",
  "number": "3",
  "title": "Matching.",
  "body": " Matching   Fill in the Blanks   The words, on the left, have been removed from the statements, on the right.  Drag each word to the panel that contains the statement it was removed from.     dependent   The solution is represented by the  variable.     general  particular   The solution represents all  possible solutions.     independent   The solution depends on the  variable.     satisfies  function   For a to be a solution to a  differential equation, it must  the equation.      "
},
{
  "id": "c2-cq-sa",
  "level": "2",
  "url": "c2-concept-quiz.html#c2-cq-sa",
  "type": "Exercise",
  "number": "4",
  "title": "Short-Answer Questions.",
  "body": " Short-Answer Questions   Algebraic vs. Differential Equation Solutions   Consider the algebraic equation .     State what it means for to be a solution to this equation.    Show how you would verify that is a solution. Do not solve for .     Show how you would verify that is a solution.    Are there any differences in how you verify solutions to differentials equations compared to algebraic equations? Explain.         Explain the Difference   In few sentences, explain the difference between a general solution, family of solutions, and a particualr solution.       Explain the Significance   Explain the significance of initial condition(s) as they relate to the particular and general solution of a differential equation.        (a)    To be a solution to the equation, must satisfy the equation. That is, when we substitute into the equation, the result simplifies to a true statement.    Substituting into the equation, we get Since is an undeniably true statement, we have confirmed that is a solution to the equation.    Substituting into the equation, we get Since is not true, so is not a solution to the equation.    The process of verifying solutions to differential equations is exactly the same. However, with differential equations, we have to be more careful about confirming a true statement . With numbers, it is easy to see if is true, but with functions, its a bit more tricky. We have to be sure that the functions are equal for all values of (or the independent variable). For example, the statement is true since . In contrast, the statement is not true since for all values of . It only takes one value of to make the statement false. Let's try a few values of to see this.                                The fact that the statement is not true for is enough to show that this is not a true statement and would not correspond to a solution to a differential equation.     (b)  A general solution represents the form of all possible solutions to a differential equation, typically with one or more arbitrary constants. A family of solutions is an infinite set of solutions, one for each possible combination of constant values in the general solution. A particular solution is a single solution that satisfies the differential equation with specific values for the constants.   (c)  The initial condition(s) specify one or more points that the graph of the solution must pass through. This often allows one to solve for the constants in the general solution. Therefore, the initial condition(s) act to reduce the family of solutions down to a smaller set of solutions or, ideally, a single particular solution.   (d)  Integrating both sides gives Without knowing , we cannot simplify . So the obstacle is that we are unable to combine these variables into a single on the left side.     "
},
{
  "id": "c2-practice-drills",
  "level": "1",
  "url": "c2-practice-drills.html",
  "type": "Subsection",
  "number": "",
  "title": "🏋️‍♂️ Practice Drills",
  "body": " 🏋️‍♂️ Practice Drills    Matching Each Function to the Equation it Satisfies   Drag each particular solution, on the left, to the differential equation it satisfies.    Carefully take the derivative of each function separately, then see if the function satisfies one of the equations.                                       Select the Solutions   For each differential equation, select the functions that are solution to that equation.          a.   b.   c.     d.   e.   f.     g.   h.   i.           a. No  b. Yes  c. Yes    d. No  e. No  f. No    g. Yes  h. Yes  i. Yes              a.   b.   c.     d.   e.   f.     g.   h.   i.            a. Yes  b. No  c. Yes    d. No  e. Yes  f. Yes    g. No  h. No  i. Yes          Find the Hidden Right-Hand Side   For each given , assume it is a solution to the differential equation with hidden right side. Give the function that must be on the right for to be a solution to the equation.                                     Find and : and plug them in: Therefore, the differential equation must be .      "
},
{
  "id": "c2-drills-01",
  "level": "2",
  "url": "c2-practice-drills.html#c2-drills-01",
  "type": "Exercise",
  "number": "1",
  "title": "Matching Each Function to the Equation it Satisfies.",
  "body": " Matching Each Function to the Equation it Satisfies   Drag each particular solution, on the left, to the differential equation it satisfies.    Carefully take the derivative of each function separately, then see if the function satisfies one of the equations.                                     "
},
{
  "id": "c2-drills-02",
  "level": "2",
  "url": "c2-practice-drills.html#c2-drills-02",
  "type": "Exercise",
  "number": "2",
  "title": "<span class=\"process-math\">\\(y''-9y = 0\\)<\/span>.",
  "body": "       a.   b.   c.     d.   e.   f.     g.   h.   i.           a. No  b. Yes  c. Yes    d. No  e. No  f. No    g. Yes  h. Yes  i. Yes      "
},
{
  "id": "c2-drills-03",
  "level": "2",
  "url": "c2-practice-drills.html#c2-drills-03",
  "type": "Exercise",
  "number": "3",
  "title": "<span class=\"process-math\">\\(y'' - 10y' + 25y = 0\\)<\/span>.",
  "body": "       a.   b.   c.     d.   e.   f.     g.   h.   i.            a. Yes  b. No  c. Yes    d. No  e. Yes  f. Yes    g. No  h. No  i. Yes       "
},
{
  "id": "c2-drills-04",
  "level": "2",
  "url": "c2-practice-drills.html#c2-drills-04",
  "type": "Exercise",
  "number": "4",
  "title": "<span class=\"process-math\">\\(\\ y(t) = 2e^{-3t}\\)<\/span>.",
  "body": "                "
},
{
  "id": "c2-drills-05",
  "level": "2",
  "url": "c2-practice-drills.html#c2-drills-05",
  "type": "Exercise",
  "number": "5",
  "title": "<span class=\"process-math\">\\(\\ y(t) = 3\\sin(t^2)\\)<\/span>.",
  "body": "                 Find and : and plug them in: Therefore, the differential equation must be .   "
},
{
  "id": "c2-problems-main",
  "level": "1",
  "url": "c2-problems-main.html",
  "type": "Subsection",
  "number": "",
  "title": "✍🏻 Problems",
  "body": " ✍🏻 Problems    Verifying Solutions   For each, verify if the given function, , is a solution to the differential equation.    ,     is a solution to the differential equation .    We need to substitute into the differential equation. In order to substitute into the left hand side, we need to know the second derivative. So we begin by finding that. Now we can substitute into the differential equation: Since when we substitute in to the differential equation, we find that the LHS is equal to the RHS, we have verified that is a solution to the differential equation       ,    It is a solution.    The function is a solution to the differential equation since plugging it in gives        ,    ?    Find and since they appear in the equation and move all terms to the left-side.   Plug in and and simplify. Therefore, is a solution to       ,    ?    Working out the left and right hand sides of this DE, we have:          Since , we have verified that is a solution to        Find the value of   Each of the following differential equations has one or more solutions of the form , for different values of constant, . Find all the values of so that is a solution to the equation.            First we take derivatives so that we can substitute into the differential equation. Now we can substitute into the equation and solve for : Recall that no matter the value of or Thus we have: So the two solutions are                                Find the value of   Each of the following differential equations has one or more solutions of the form , for different values of constant, . Find all the values of so that is a solution to the equation.      We proceed as in the previous question. First we take derivatives so that we can substitute into the differential equation. Now we can substitute into the differential equation: Note that there is no value of that can guarantee that is 0. Hence we have So the two solutions are               Find the value of   Find the all the values of that makes a solution to the given equation.                             Solutions to Initial-Valued Problems   Answer the following      Show that is a solution to the differential equation .    Find corresponding to the initial condition.         Yes   , so is the particular solution         To show this, let's first move all terms to one side of the equation, so     Now, we will compute and plug it and into the left hand side (LHS) of the equation to see if it simplifies to zero.     Applying gives and so the particular solution is         Verifying Particular Solutions of Initial-Valued Problems Takes 2-Steps   To verifying that a function (e.g., ) is a particular solution to an initial-value problem, there is an extra step beyond showing that it satisfies the differential equation. What else must this function satisfy?    To verify that the function is a particular solution to the initial-value problem , we must show the following two things:     satisfies the differential equation.     satisfies the initial condition.    Let's start by showing that the function satisfies the differential equation.     Now, let's show that the function satisfies the initial condition .          Show is a particular solution to .    Yes    We must show that satisfies both the differential equation and the initial condition.  First, we check if satisfies the differential equation.     Now, we check if satisfies the initial condition .     Since satisfies both the differential equation and the initial condition, it is a particular solution to the initial-valued problem.      Show is a particular solution to .    ?    To verify that the function is a particular solution to the initial-value problem , we must show the following two things:     satisfies the differential equation.     satisfies the initial condition.    Let's start by showing that the function satisfies the differential equation.     Now, let's show that the function satisfies the initial condition .        Find the Correct Solution  Consider the differential equation and the following three functions .   Determine which, if any, of or are solutions to this equation.    For any of the solutions found in (a), find the particular solution that corresponds to the initial condition.        b.   , so is the particular solution       To show this, let's first move all terms to one side of the equation, so     For each of the functions above, we will compute and plug it and into the left hand side (LHS) of the equation to see if it simplifies to zero.        It can be difficult to see why this doesn't simplify to zero. However, if we assume it does, then plugging any into this expression must also give you zero. So, if you can find one value where this doesn't happen, then this function cannot be a solution.  Letting gives , but can be any constant, so is not a solution.          Letting gives , but since can be any constant, is not a solution.          So is a solution.      Setting we get     So the particular solution for this initial condition is          "
},
{
  "id": "c2-problems-verification-01",
  "level": "2",
  "url": "c2-problems-main.html#c2-problems-verification-01",
  "type": "Exercise",
  "number": "1",
  "title": "",
  "body": " ,     is a solution to the differential equation .    We need to substitute into the differential equation. In order to substitute into the left hand side, we need to know the second derivative. So we begin by finding that. Now we can substitute into the differential equation: Since when we substitute in to the differential equation, we find that the LHS is equal to the RHS, we have verified that is a solution to the differential equation     "
},
{
  "id": "c2-problems-verification-02",
  "level": "2",
  "url": "c2-problems-main.html#c2-problems-verification-02",
  "type": "Exercise",
  "number": "2",
  "title": "",
  "body": " ,    It is a solution.    The function is a solution to the differential equation since plugging it in gives      "
},
{
  "id": "c2-problems-verification-03",
  "level": "2",
  "url": "c2-problems-main.html#c2-problems-verification-03",
  "type": "Exercise",
  "number": "3",
  "title": "",
  "body": " ,    ?    Find and since they appear in the equation and move all terms to the left-side.   Plug in and and simplify. Therefore, is a solution to     "
},
{
  "id": "c2-problems-verification-04",
  "level": "2",
  "url": "c2-problems-main.html#c2-problems-verification-04",
  "type": "Exercise",
  "number": "4",
  "title": "",
  "body": " ,    ?    Working out the left and right hand sides of this DE, we have:          Since , we have verified that is a solution to     "
},
{
  "id": "c2-problems-find-r-01",
  "level": "2",
  "url": "c2-problems-main.html#c2-problems-find-r-01",
  "type": "Exercise",
  "number": "5",
  "title": "",
  "body": "         First we take derivatives so that we can substitute into the differential equation. Now we can substitute into the equation and solve for : Recall that no matter the value of or Thus we have: So the two solutions are     "
},
{
  "id": "c2-problems-find-r-02",
  "level": "2",
  "url": "c2-problems-main.html#c2-problems-find-r-02",
  "type": "Exercise",
  "number": "6",
  "title": "",
  "body": "       "
},
{
  "id": "c2-problems-find-r-03",
  "level": "2",
  "url": "c2-problems-main.html#c2-problems-find-r-03",
  "type": "Exercise",
  "number": "7",
  "title": "",
  "body": "       "
},
{
  "id": "c2-problems-find-r-04",
  "level": "2",
  "url": "c2-problems-main.html#c2-problems-find-r-04",
  "type": "Exercise",
  "number": "8",
  "title": "",
  "body": "       "
},
{
  "id": "c2-problems-find-k-01",
  "level": "2",
  "url": "c2-problems-main.html#c2-problems-find-k-01",
  "type": "Exercise",
  "number": "9",
  "title": "",
  "body": "   We proceed as in the previous question. First we take derivatives so that we can substitute into the differential equation. Now we can substitute into the differential equation: Note that there is no value of that can guarantee that is 0. Hence we have So the two solutions are    "
},
{
  "id": "c2-problems-find-k-02",
  "level": "2",
  "url": "c2-problems-main.html#c2-problems-find-k-02",
  "type": "Exercise",
  "number": "10",
  "title": "",
  "body": "       "
},
{
  "id": "c2-problems-find-m-01",
  "level": "2",
  "url": "c2-problems-main.html#c2-problems-find-m-01",
  "type": "Exercise",
  "number": "11",
  "title": "",
  "body": "       "
},
{
  "id": "c2-problems-find-m-02",
  "level": "2",
  "url": "c2-problems-main.html#c2-problems-find-m-02",
  "type": "Exercise",
  "number": "12",
  "title": "",
  "body": "       "
},
{
  "id": "c2-problems-find-m-03",
  "level": "2",
  "url": "c2-problems-main.html#c2-problems-find-m-03",
  "type": "Exercise",
  "number": "13",
  "title": "",
  "body": "       "
},
{
  "id": "c2-ex-ivp-01",
  "level": "2",
  "url": "c2-problems-main.html#c2-ex-ivp-01",
  "type": "Exercise",
  "number": "14",
  "title": "Answer the following.",
  "body": " Answer the following      Show that is a solution to the differential equation .    Find corresponding to the initial condition.         Yes   , so is the particular solution         To show this, let's first move all terms to one side of the equation, so     Now, we will compute and plug it and into the left hand side (LHS) of the equation to see if it simplifies to zero.     Applying gives and so the particular solution is       "
},
{
  "id": "c2-ex-ivp-02",
  "level": "2",
  "url": "c2-problems-main.html#c2-ex-ivp-02",
  "type": "Exercise",
  "number": "15",
  "title": "Verifying Particular Solutions of Initial-Valued Problems Takes 2-Steps.",
  "body": " Verifying Particular Solutions of Initial-Valued Problems Takes 2-Steps   To verifying that a function (e.g., ) is a particular solution to an initial-value problem, there is an extra step beyond showing that it satisfies the differential equation. What else must this function satisfy?    To verify that the function is a particular solution to the initial-value problem , we must show the following two things:     satisfies the differential equation.     satisfies the initial condition.    Let's start by showing that the function satisfies the differential equation.     Now, let's show that the function satisfies the initial condition .       "
},
{
  "id": "c2-ex-ivp-03",
  "level": "2",
  "url": "c2-problems-main.html#c2-ex-ivp-03",
  "type": "Exercise",
  "number": "16",
  "title": "",
  "body": "  Show is a particular solution to .    Yes    We must show that satisfies both the differential equation and the initial condition.  First, we check if satisfies the differential equation.     Now, we check if satisfies the initial condition .     Since satisfies both the differential equation and the initial condition, it is a particular solution to the initial-valued problem.   "
},
{
  "id": "c2-ex-ivp-04",
  "level": "2",
  "url": "c2-problems-main.html#c2-ex-ivp-04",
  "type": "Exercise",
  "number": "17",
  "title": "",
  "body": "  Show is a particular solution to .    ?    To verify that the function is a particular solution to the initial-value problem , we must show the following two things:     satisfies the differential equation.     satisfies the initial condition.    Let's start by showing that the function satisfies the differential equation.     Now, let's show that the function satisfies the initial condition .      "
},
{
  "id": "c2-ex-ivp-05",
  "level": "2",
  "url": "c2-problems-main.html#c2-ex-ivp-05",
  "type": "Exercise",
  "number": "18",
  "title": "Find the Correct Solution.",
  "body": " Find the Correct Solution  Consider the differential equation and the following three functions .   Determine which, if any, of or are solutions to this equation.    For any of the solutions found in (a), find the particular solution that corresponds to the initial condition.        b.   , so is the particular solution       To show this, let's first move all terms to one side of the equation, so     For each of the functions above, we will compute and plug it and into the left hand side (LHS) of the equation to see if it simplifies to zero.        It can be difficult to see why this doesn't simplify to zero. However, if we assume it does, then plugging any into this expression must also give you zero. So, if you can find one value where this doesn't happen, then this function cannot be a solution.  Letting gives , but can be any constant, so is not a solution.          Letting gives , but since can be any constant, is not a solution.          So is a solution.      Setting we get     So the particular solution for this initial condition is       "
},
{
  "id": "antiderivatives",
  "level": "1",
  "url": "antiderivatives.html",
  "type": "Section",
  "number": "4.1",
  "title": "Antiderivatives as Solutions",
  "body": " Antiderivatives as Solutions  You might not realize it, but every time you find an antiderivative of a function you are actually solving a differential equation! To clarify, suppose you are asked to compute the antiderivative of .  By the definition of antiderivative, you want a function whose derivative is . In other words:    Find such that or    However, this is precisely what it means to solve a differential equation and since the antiderivative of is , we can conclude that the family of functions that satisfy the differential equation is given by the general solution: where is any constant.     Finding   Solving for in the equation amounts to finding the antiderivative of .     True   Correct, integrating both sides gives .     False  Incorrect.      Give the Solution   Give the general solution to the differential equation:     You are finding the antiderivative.      Correct!      This answer does not satify the differential equation. When you take the derivative of , you get , which is not equal to .       This answer is missing the integration constant.       Double check your antiderivative calculation. The antiderivative of is , not .       Recall from Calculus..   Suppose you saw the following expression from calculus: Select all of the true statements.     is the derivative of  Saying is the derivative of , is the same as    is the derivative of  Yes, this is exactly how the antiderivative of a function is defined.    is the antiderivative of  Saying is the antiderivative of is the same thing as saying when you take the derivative of you shoud get    is the antiderivative of  Saying is the antiderivative of is the same as saying when you take the derivative of you should get , which is not true.      "
},
{
  "id": "c3-1-cyu-1",
  "level": "2",
  "url": "antiderivatives.html#c3-1-cyu-1",
  "type": "Checkpoint",
  "number": "36",
  "title": "",
  "body": "  Finding   Solving for in the equation amounts to finding the antiderivative of .     True   Correct, integrating both sides gives .     False  Incorrect.      Give the Solution   Give the general solution to the differential equation:     You are finding the antiderivative.      Correct!      This answer does not satify the differential equation. When you take the derivative of , you get , which is not equal to .       This answer is missing the integration constant.       Double check your antiderivative calculation. The antiderivative of is , not .       Recall from Calculus..   Suppose you saw the following expression from calculus: Select all of the true statements.     is the derivative of  Saying is the derivative of , is the same as    is the derivative of  Yes, this is exactly how the antiderivative of a function is defined.    is the antiderivative of  Saying is the antiderivative of is the same thing as saying when you take the derivative of you shoud get    is the antiderivative of  Saying is the antiderivative of is the same as saying when you take the derivative of you should get , which is not true.     "
},
{
  "id": "di-method",
  "level": "1",
  "url": "di-method.html",
  "type": "Section",
  "number": "4.2",
  "title": "Solutions by Direct Integration",
  "body": " Solutions by Direct Integration  In the previous section, we saw how finding the antiderivative of can be rephrased as solving the differential equation    Link to Algebra  Just as taking the square root of both sides of the equation helps isolate , integrating both sides of helps isolate the unknown function, .   To find , we would like a way to remove the derivative from . The fundamental theorem of calculus tells us that this is possible by integrating both sides with respect to .   Solving  Let's use integration to solve the following equation: .  We begin by isolating : .  Now we integrate both sides with respect to to leave us with :   The constants of integration are combined into a single constant . This merging constants like this is standard way to simplify the solution.    Solving  Let's extend this idea to solve the equation: .  Currently, is trapped inside a derivative, but perhaps integration could release it. Start by isolating this derivative:   To remove this derivative, we must integrate with respect to :   With now free, we can isolate it to obtain the solution: where is the combined arbitrary constant.    Direct Integration  If a differential equation can be expressed in one of the forms: , then the general solution can be found by  integrating both sides with respect to , and  solving for .       Find the general solution to the differential equation     First, we get the derivative by itself on the left-hand side ☝️ Recall the Identity        Now, we integrate by sides with respect to , releasing from the derivative and allowing us to isolate the general solution. .      Show why direct integration doesn't apply to the equation:     Isolating the derivative gives: Since the derivative is with respect to , we must integrate both sides with respect to as well: .  The integral left behind cannot be computed because we are integrating with respect to , not . We know that is a function of , but we don't know which one (if we did then we would already have the solution!)    Direct integration is a simple way of solving differential equations, provided the structure allows it. If your equation can be written as , you're in business. Just integrate both sides and solve for .    How could you Find ?   How could you solve for in the equation ?     Isolate & integrate both sides with respect to .  Correct!    Differentiate both sides with respect to .  Incorrect, differentiating both sides only puts another derivative on .    Isolate & integrate both sides with respect to .  Incorrect, the integration is not with respect to .    Find the antiderivative of .  Incorrect, the solution is the antiderivative of , not just .      Solution ⇄ Antiderivative   The solution to the differential equation is the integral of which function?      Incorrect. is the solution to the differential equation.     Incorrect, perhaps check your algebra.     Incorrect, perhaps check your algebra.      Correct! Isolating gives , so the solution is .       Does Direct Integration Apply?   Direct integration could be used to solve the equation .     True  Correct!    False  Incorrect. This equation is in the form .      Why Doesn't Direct Integration Apply Here?   Give the reason direct integration cannot be applied to the equation .     There is a fraction in the derivative.  Incorrect, direct integration doesn't care about fractions.    The term is squared.  Incorrect, direct integration can handle this.    There is a sine term on the right side of the equation.  Incorrect, the sine is not the issue here.    The right-hand side contains .  Correct! Direct integration only works when the right-hand side contains only the independent variable, in this case .      Combining Constants  Combining constants is a common practice in differential equations.    True  Correct! Combining constants is an easy way to simplify a solution and is a standard practice in differential equations.    False  Incorrect, revisit the examples above.      "
},
{
  "id": "direct-integration-example-2",
  "level": "2",
  "url": "di-method.html#direct-integration-example-2",
  "type": "🌌 Example",
  "number": "37",
  "title": "",
  "body": "  Find the general solution to the differential equation     First, we get the derivative by itself on the left-hand side ☝️ Recall the Identity        Now, we integrate by sides with respect to , releasing from the derivative and allowing us to isolate the general solution. .   "
},
{
  "id": "direct-integration-example-3",
  "level": "2",
  "url": "di-method.html#direct-integration-example-3",
  "type": "🌌 Example",
  "number": "38",
  "title": "",
  "body": "  Show why direct integration doesn't apply to the equation:     Isolating the derivative gives: Since the derivative is with respect to , we must integrate both sides with respect to as well: .  The integral left behind cannot be computed because we are integrating with respect to , not . We know that is a function of , but we don't know which one (if we did then we would already have the solution!)   "
},
{
  "id": "c3-2-cyu-1",
  "level": "2",
  "url": "di-method.html#c3-2-cyu-1",
  "type": "Checkpoint",
  "number": "39",
  "title": "",
  "body": "  How could you Find ?   How could you solve for in the equation ?     Isolate & integrate both sides with respect to .  Correct!    Differentiate both sides with respect to .  Incorrect, differentiating both sides only puts another derivative on .    Isolate & integrate both sides with respect to .  Incorrect, the integration is not with respect to .    Find the antiderivative of .  Incorrect, the solution is the antiderivative of , not just .      Solution ⇄ Antiderivative   The solution to the differential equation is the integral of which function?      Incorrect. is the solution to the differential equation.     Incorrect, perhaps check your algebra.     Incorrect, perhaps check your algebra.      Correct! Isolating gives , so the solution is .       Does Direct Integration Apply?   Direct integration could be used to solve the equation .     True  Correct!    False  Incorrect. This equation is in the form .      Why Doesn't Direct Integration Apply Here?   Give the reason direct integration cannot be applied to the equation .     There is a fraction in the derivative.  Incorrect, direct integration doesn't care about fractions.    The term is squared.  Incorrect, direct integration can handle this.    There is a sine term on the right side of the equation.  Incorrect, the sine is not the issue here.    The right-hand side contains .  Correct! Direct integration only works when the right-hand side contains only the independent variable, in this case .      Combining Constants  Combining constants is a common practice in differential equations.    True  Correct! Combining constants is an easy way to simplify a solution and is a standard practice in differential equations.    False  Incorrect, revisit the examples above.     "
},
{
  "id": "c3-concept-quiz",
  "level": "1",
  "url": "c3-concept-quiz.html",
  "type": "Subsection",
  "number": "",
  "title": "💡 Conceptual Quiz",
  "body": " 💡 Conceptual Quiz    True or False   True-or-False   We can solve for by differentiating both sides with respect to .      True    Incorrect, taking a derivative of both sides will result in a second derivative on the left side of the equation.      False    Correct! We should integrate both sides to solve for , not differentiate.       True-or-False   Solving for in the equation amounts to finding the antiderivative of .      True    Correct, integrating both sides gives .      False    Incorrect.       True-or-False   Combining constants is a common practice in differential equations.      True    Correct!      False    Incorrect, revisit the examples above.       True-or-False   Solving a differential equation by direct integration involves computing a derivative.      True    Incorrect, review .      False    Correct! Direct integration involves integrating both sides of the equation, not computing a derivative.       True-or-False   Direct integration could be used to solve the equation .      True    Correct!      False    Incorrect. This equation is in the form .        Multiple Choice   Select-the-Best-Answer   How could you solve for in the equation ?      Differentiating both sides with respect to .    Incorrect, differentiating both sides only puts another derivative on .      Isolate and integrating both sides with respect to .    Correct!      Isolate and integrating both sides with respect to .    Incorrect, the integration is not with respect to .      Find the antiderivative of .    Incorrect, the solution is the antiderivative of , not just .       Select-the-Best-Answer   The solution to the differential equation is the antiderivative of which function?           Incorrect. is the solution to the differential equation.           Incorrect, perhaps check your algebra.           Incorrect, perhaps check your algebra.           Correct! Isolating gives , so the solution is the antiderivative of .       Select-the-Best-Answer   Give the reason direct integration cannot be applied to the equation .      There is a fraction in the derivative.    Incorrect, direct integration doesn't care about fractions.      The term is squared.    Incorrect, direct integration can handle this.      There is a sine term on the right side of the equation.    Incorrect, the sine is not the issue here.      The right-hand side contains .    Correct! Direct integration only works when the right-hand side contains only the independent variable, in this case .       Select-the-Best-Answer   In the differential equation , what is the first step in solving for ?      Release by integrating both sides with respect to .    Correct! Integrating both sides is the first step in solving for .      Release and by integrating both sides with respect to .    Incorrect. Integrating both sides with respect to would not eliminate the derivative since the derivative is with respect to .      Compute the derivative of using the product rule.    Incorrect. This would actually make the equation more complicated.      Isolate .    Incorrect. This would not help solve for .        Short-Answer Questions    Attempt to apply direct integration to the differential equation . Get to the point where it becomes clear that you cannot solve for directly. What is the obstacle?       (a)    To be a solution to the equation, must satisfy the equation. That is, when we substitute into the equation, the result simplifies to a true statement.    Substituting into the equation, we get Since is an undeniably true statement, we have confirmed that is a solution to the equation.    Substituting into the equation, we get Since is not true, so is not a solution to the equation.    The process of verifying solutions to differential equations is exactly the same. However, with differential equations, we have to be more careful about confirming a true statement . With numbers, it is easy to see if is true, but with functions, its a bit more tricky. We have to be sure that the functions are equal for all values of (or the independent variable). For example, the statement is true since . In contrast, the statement is not true since for all values of . It only takes one value of to make the statement false. Let's try a few values of to see this.                                The fact that the statement is not true for is enough to show that this is not a true statement and would not correspond to a solution to a differential equation.     (b)  A general solution represents the form of all possible solutions to a differential equation, typically with one or more arbitrary constants. A family of solutions is an infinite set of solutions, one for each possible combination of constant values in the general solution. A particular solution is a single solution that satisfies the differential equation with specific values for the constants.   (c)  The initial condition(s) specify one or more points that the graph of the solution must pass through. This often allows one to solve for the constants in the general solution. Therefore, the initial condition(s) act to reduce the family of solutions down to a smaller set of solutions or, ideally, a single particular solution.   (d)  Integrating both sides gives Without knowing , we cannot simplify . So the obstacle is that we are unable to combine these variables into a single on the left side.       "
},
{
  "id": "c3-cq-tf",
  "level": "2",
  "url": "c3-concept-quiz.html#c3-cq-tf",
  "type": "Exercise",
  "number": "1",
  "title": "True or False.",
  "body": " True or False   True-or-False   We can solve for by differentiating both sides with respect to .      True    Incorrect, taking a derivative of both sides will result in a second derivative on the left side of the equation.      False    Correct! We should integrate both sides to solve for , not differentiate.       True-or-False   Solving for in the equation amounts to finding the antiderivative of .      True    Correct, integrating both sides gives .      False    Incorrect.       True-or-False   Combining constants is a common practice in differential equations.      True    Correct!      False    Incorrect, revisit the examples above.       True-or-False   Solving a differential equation by direct integration involves computing a derivative.      True    Incorrect, review .      False    Correct! Direct integration involves integrating both sides of the equation, not computing a derivative.       True-or-False   Direct integration could be used to solve the equation .      True    Correct!      False    Incorrect. This equation is in the form .      "
},
{
  "id": "c3-cq-mc",
  "level": "2",
  "url": "c3-concept-quiz.html#c3-cq-mc",
  "type": "Exercise",
  "number": "2",
  "title": "Multiple Choice.",
  "body": " Multiple Choice   Select-the-Best-Answer   How could you solve for in the equation ?      Differentiating both sides with respect to .    Incorrect, differentiating both sides only puts another derivative on .      Isolate and integrating both sides with respect to .    Correct!      Isolate and integrating both sides with respect to .    Incorrect, the integration is not with respect to .      Find the antiderivative of .    Incorrect, the solution is the antiderivative of , not just .       Select-the-Best-Answer   The solution to the differential equation is the antiderivative of which function?           Incorrect. is the solution to the differential equation.           Incorrect, perhaps check your algebra.           Incorrect, perhaps check your algebra.           Correct! Isolating gives , so the solution is the antiderivative of .       Select-the-Best-Answer   Give the reason direct integration cannot be applied to the equation .      There is a fraction in the derivative.    Incorrect, direct integration doesn't care about fractions.      The term is squared.    Incorrect, direct integration can handle this.      There is a sine term on the right side of the equation.    Incorrect, the sine is not the issue here.      The right-hand side contains .    Correct! Direct integration only works when the right-hand side contains only the independent variable, in this case .       Select-the-Best-Answer   In the differential equation , what is the first step in solving for ?      Release by integrating both sides with respect to .    Correct! Integrating both sides is the first step in solving for .      Release and by integrating both sides with respect to .    Incorrect. Integrating both sides with respect to would not eliminate the derivative since the derivative is with respect to .      Compute the derivative of using the product rule.    Incorrect. This would actually make the equation more complicated.      Isolate .    Incorrect. This would not help solve for .      "
},
{
  "id": "c3-cq-sa",
  "level": "2",
  "url": "c3-concept-quiz.html#c3-cq-sa",
  "type": "Exercise",
  "number": "3",
  "title": "Short-Answer Questions.",
  "body": " Short-Answer Questions    Attempt to apply direct integration to the differential equation . Get to the point where it becomes clear that you cannot solve for directly. What is the obstacle?       (a)    To be a solution to the equation, must satisfy the equation. That is, when we substitute into the equation, the result simplifies to a true statement.    Substituting into the equation, we get Since is an undeniably true statement, we have confirmed that is a solution to the equation.    Substituting into the equation, we get Since is not true, so is not a solution to the equation.    The process of verifying solutions to differential equations is exactly the same. However, with differential equations, we have to be more careful about confirming a true statement . With numbers, it is easy to see if is true, but with functions, its a bit more tricky. We have to be sure that the functions are equal for all values of (or the independent variable). For example, the statement is true since . In contrast, the statement is not true since for all values of . It only takes one value of to make the statement false. Let's try a few values of to see this.                                The fact that the statement is not true for is enough to show that this is not a true statement and would not correspond to a solution to a differential equation.     (b)  A general solution represents the form of all possible solutions to a differential equation, typically with one or more arbitrary constants. A family of solutions is an infinite set of solutions, one for each possible combination of constant values in the general solution. A particular solution is a single solution that satisfies the differential equation with specific values for the constants.   (c)  The initial condition(s) specify one or more points that the graph of the solution must pass through. This often allows one to solve for the constants in the general solution. Therefore, the initial condition(s) act to reduce the family of solutions down to a smaller set of solutions or, ideally, a single particular solution.   (d)  Integrating both sides gives Without knowing , we cannot simplify . So the obstacle is that we are unable to combine these variables into a single on the left side.     "
},
{
  "id": "c3-practice-drills",
  "level": "1",
  "url": "c3-practice-drills.html",
  "type": "Subsection",
  "number": "",
  "title": "🏋️‍♂️ Practice Drills",
  "body": " 🏋️‍♂️ Practice Drills    Select the Solutions   For each differential equation, select the functions that are solution to that equation.         a.   b.   c.     d.   e.   f.     g.   h.   i.           a. No  b. Yes  c. Yes    d. No  e. No  f. No    g. Yes  h. Yes  i. Yes             a.   b.   c.     d.   e.   f.     g.   h.   i.            a. Yes  b. No  c. Yes    d. No  e. Yes  f. Yes    g. No  h. No  i. Yes          Find the Hidden Right-Hand Side   For each given , assume it is a solution to the differential equation with hidden right side. Give the function that must be on the right for to be a solution to the equation.    🕸️                  🕸️                 Find and : and plug them in: Therefore, the differential equation must be .      "
},
{
  "id": "c3-warm-ups-click-01",
  "level": "2",
  "url": "c3-practice-drills.html#c3-warm-ups-click-01",
  "type": "Exercise",
  "number": "1",
  "title": "<span class=\"process-math\">\\(y''-9y = 0\\)<\/span>.",
  "body": "      a.   b.   c.     d.   e.   f.     g.   h.   i.           a. No  b. Yes  c. Yes    d. No  e. No  f. No    g. Yes  h. Yes  i. Yes      "
},
{
  "id": "c3-warm-ups-click-02",
  "level": "2",
  "url": "c3-practice-drills.html#c3-warm-ups-click-02",
  "type": "Exercise",
  "number": "2",
  "title": "<span class=\"process-math\">\\(y'' - 10y' + 25y = 0\\)<\/span>.",
  "body": "      a.   b.   c.     d.   e.   f.     g.   h.   i.            a. Yes  b. No  c. Yes    d. No  e. Yes  f. Yes    g. No  h. No  i. Yes       "
},
{
  "id": "c3-warm-ups-ww-01",
  "level": "2",
  "url": "c3-practice-drills.html#c3-warm-ups-ww-01",
  "type": "Exercise",
  "number": "3",
  "title": "🕸️ <span class=\"process-math\">\\(\\ y(t) = 2e^{-3t}\\)<\/span>.",
  "body": " 🕸️                "
},
{
  "id": "c3-warm-ups-ww-02",
  "level": "2",
  "url": "c3-practice-drills.html#c3-warm-ups-ww-02",
  "type": "Exercise",
  "number": "4",
  "title": "🕸️ <span class=\"process-math\">\\(\\ y(t) = 3\\sin(t^2)\\)<\/span>.",
  "body": " 🕸️                 Find and : and plug them in: Therefore, the differential equation must be .   "
},
{
  "id": "c3-problems-main",
  "level": "1",
  "url": "c3-problems-main.html",
  "type": "Subsection",
  "number": "",
  "title": "✍🏻 Problems",
  "body": " ✍🏻 Problems    General Solution   Find the general solution for each of the following differential equations. Combine constants where appropriate.                                                                     Particular Solution   Find the particular solution for each of the following differential equations with the given initial condition.                                                              Start by isolating the derivative, , on one side of the equation Integrate both sides with respect to to leave us with on the left side   Finally, apply the initial condition to find  Thus, the solution to the differential equation is .               🕸️ Compute the General Solution   Given the differential equation Find the general solution.   Press  Activate  to submit your answer.        Don t forget the constant of integration. Do not use scripts on the constant (e.g., ).              Solve the Equation   Solve the initial-value problem .    Start by isolating the derivative, , on one side of the equation Integrate both sides with respect to to leave us with on the left side   Finally, apply the initial condition to find  Thus, the solution to the differential equation is .     Preview of a Future Method  At this point, you should be comfortable solving an equation such as . The problem is that most equations do not start in this form. Instead, they start in another form and then, after some algebra, are put into this nice form and solved. The process off rewriting an equation in this way is the basis for another technique called the integrating factor method. The question we want to answer here is what type of equations can be written in this form?   Give the equation that can be rewritten in the form   To understand which equation can be rewritten in the form , we will work backwards and expand the derivative on the left side using the product rule from calculus to turn our equation into     Fill in             Next, rewrite the expanded equation into the form     Fill in             The above equation is the exact same equation as !     x^7    7x^6    7\/x    e^x\/x^7                           Rewrite and Solve   For each equation below, complete the following:   Use the product rule to rewrite each differential equation in the form .    Solve the equation.                 "
},
{
  "id": "c3-problems-1-3",
  "level": "2",
  "url": "c3-problems-main.html#c3-problems-1-3",
  "type": "Exercise",
  "number": "1",
  "title": "",
  "body": "       "
},
{
  "id": "c3-problems-1-4",
  "level": "2",
  "url": "c3-problems-main.html#c3-problems-1-4",
  "type": "Exercise",
  "number": "2",
  "title": "",
  "body": "       "
},
{
  "id": "c3-problems-1-5",
  "level": "2",
  "url": "c3-problems-main.html#c3-problems-1-5",
  "type": "Exercise",
  "number": "3",
  "title": "",
  "body": "       "
},
{
  "id": "c3-problems-1-6",
  "level": "2",
  "url": "c3-problems-main.html#c3-problems-1-6",
  "type": "Exercise",
  "number": "4",
  "title": "",
  "body": "       "
},
{
  "id": "c3-problems-1-7",
  "level": "2",
  "url": "c3-problems-main.html#c3-problems-1-7",
  "type": "Exercise",
  "number": "5",
  "title": "",
  "body": "       "
},
{
  "id": "c3-problems-1-8",
  "level": "2",
  "url": "c3-problems-main.html#c3-problems-1-8",
  "type": "Exercise",
  "number": "6",
  "title": "",
  "body": "       "
},
{
  "id": "c3-problems-1-9",
  "level": "2",
  "url": "c3-problems-main.html#c3-problems-1-9",
  "type": "Exercise",
  "number": "7",
  "title": "",
  "body": "       "
},
{
  "id": "c3-problems-1-10",
  "level": "2",
  "url": "c3-problems-main.html#c3-problems-1-10",
  "type": "Exercise",
  "number": "8",
  "title": "",
  "body": "       "
},
{
  "id": "c3-problems-2-3",
  "level": "2",
  "url": "c3-problems-main.html#c3-problems-2-3",
  "type": "Exercise",
  "number": "9",
  "title": "",
  "body": "       "
},
{
  "id": "c3-problems-2-4",
  "level": "2",
  "url": "c3-problems-main.html#c3-problems-2-4",
  "type": "Exercise",
  "number": "10",
  "title": "",
  "body": "       "
},
{
  "id": "c3-problems-2-5",
  "level": "2",
  "url": "c3-problems-main.html#c3-problems-2-5",
  "type": "Exercise",
  "number": "11",
  "title": "",
  "body": "       "
},
{
  "id": "c3-problems-2-6",
  "level": "2",
  "url": "c3-problems-main.html#c3-problems-2-6",
  "type": "Exercise",
  "number": "12",
  "title": "",
  "body": "       "
},
{
  "id": "c3-problems-2-7",
  "level": "2",
  "url": "c3-problems-main.html#c3-problems-2-7",
  "type": "Exercise",
  "number": "13",
  "title": "",
  "body": "       "
},
{
  "id": "c3-problems-2-8",
  "level": "2",
  "url": "c3-problems-main.html#c3-problems-2-8",
  "type": "Exercise",
  "number": "14",
  "title": "",
  "body": "       "
},
{
  "id": "c3-problems-2-9",
  "level": "2",
  "url": "c3-problems-main.html#c3-problems-2-9",
  "type": "Exercise",
  "number": "15",
  "title": "",
  "body": "       "
},
{
  "id": "c3-problems-2-10",
  "level": "2",
  "url": "c3-problems-main.html#c3-problems-2-10",
  "type": "Exercise",
  "number": "16",
  "title": "",
  "body": "   Start by isolating the derivative, , on one side of the equation Integrate both sides with respect to to leave us with on the left side   Finally, apply the initial condition to find  Thus, the solution to the differential equation is .    "
},
{
  "id": "c3-problems-2-11",
  "level": "2",
  "url": "c3-problems-main.html#c3-problems-2-11",
  "type": "Exercise",
  "number": "17",
  "title": "",
  "body": "       "
},
{
  "id": "c3-problems-01",
  "level": "2",
  "url": "c3-problems-main.html#c3-problems-01",
  "type": "Exercise",
  "number": "18",
  "title": "🕸️  Compute the General Solution.",
  "body": " 🕸️ Compute the General Solution   Given the differential equation Find the general solution.   Press  Activate  to submit your answer.        Don t forget the constant of integration. Do not use scripts on the constant (e.g., ).            "
},
{
  "id": "c3-problems-02",
  "level": "2",
  "url": "c3-problems-main.html#c3-problems-02",
  "type": "Exercise",
  "number": "19",
  "title": "Solve the Equation.",
  "body": " Solve the Equation   Solve the initial-value problem .    Start by isolating the derivative, , on one side of the equation Integrate both sides with respect to to leave us with on the left side   Finally, apply the initial condition to find  Thus, the solution to the differential equation is .   "
},
{
  "id": "c3-piss-medium",
  "level": "2",
  "url": "c3-problems-main.html#c3-piss-medium",
  "type": "Exercise",
  "number": "1",
  "title": "Give the equation that can be rewritten in the form <span class=\"process-math\">\\(\\ds\\left[x^7 y \\right]^{\\prime} = e^x\\)<\/span>.",
  "body": "Give the equation that can be rewritten in the form   To understand which equation can be rewritten in the form , we will work backwards and expand the derivative on the left side using the product rule from calculus to turn our equation into     Fill in             Next, rewrite the expanded equation into the form     Fill in             The above equation is the exact same equation as !     x^7    7x^6    7\/x    e^x\/x^7                          "
},
{
  "id": "c3-problems-main-3-4-3",
  "level": "2",
  "url": "c3-problems-main.html#c3-problems-main-3-4-3",
  "type": "Exercise",
  "number": "2",
  "title": "",
  "body": "  "
},
{
  "id": "c3-problems-main-3-4-4",
  "level": "2",
  "url": "c3-problems-main.html#c3-problems-main-3-4-4",
  "type": "Exercise",
  "number": "3",
  "title": "",
  "body": "  "
},
{
  "id": "c3-problems-main-3-4-5",
  "level": "2",
  "url": "c3-problems-main.html#c3-problems-main-3-4-5",
  "type": "Exercise",
  "number": "4",
  "title": "",
  "body": "  "
},
{
  "id": "chpt-separable-variables",
  "level": "1",
  "url": "chpt-separable-variables.html",
  "type": "Chapter",
  "number": "5",
  "title": "Separation of Variables",
  "body": " Separation of Variables   When a differential equation is both first-order and separable , we can reliably find its general solution using the separation of variables method. At its core, this technique involves rewriting the equation so that all terms are grouped on one side and all terms on the other. Once separated, integrating both sides reveals the general solution that needs a bit of clean-up.  The separation of variables strategy can be summarized by a 3-step workflow:   Verify Separable & Separate Variables ➜ Integrate ➜ Isolate .   This chapter guides you through this process, starting with what it means for an equation to be separable and finishing with how to find the general solution.          A first-order differential equation is Separable when the right-hand side is a product of an -only part and a -only part: .  The separation of variables (SOV) method applies only to differential equations.   Method Workflow:  verify separability and separate variables,  integrate,  solve for (if possible) and combine constants.      It can be helpful to apply initial conditions to find the constant before any step that introduces .    Absolute values often arise from logarithms; resolve by introducing and then absorbing the sign into the constant when appropriate.     "
},
{
  "id": "separable-variables-takeaways",
  "level": "2",
  "url": "chpt-separable-variables.html#separable-variables-takeaways",
  "type": "🗝️ Key Takeaways ...",
  "number": "5",
  "title": "",
  "body": "  A first-order differential equation is Separable when the right-hand side is a product of an -only part and a -only part: .  The separation of variables (SOV) method applies only to differential equations.   Method Workflow:  verify separability and separate variables,  integrate,  solve for (if possible) and combine constants.      It can be helpful to apply initial conditions to find the constant before any step that introduces .    Absolute values often arise from logarithms; resolve by introducing and then absorbing the sign into the constant when appropriate.    "
},
{
  "id": "chpt-integrating-factor",
  "level": "1",
  "url": "chpt-integrating-factor.html",
  "type": "Chapter",
  "number": "6",
  "title": "Integrating Factor",
  "body": " Integrating Factor   Not every differential equation will politely separate its variables for us. For first-order linear equations, there's another powerful tool: the integrating factor method . This method works by multiplying the entire equation by a carefully chosen function—an “integrating factor”—that transforms the left side into something much easier to handle: the derivative of a single product.  Here's the intuition: if you start with an equation like there's a function you can multiply through by to make the left-hand side “collapse” into That small algebraic trick opens the door to solving the equation directly by integration.  In this chapter, we'll learn where this mysterious integrating factor comes from, how to find it every time, and how to use it to solve any first-order linear differential equation. By the end, you'll have a systematic three-step process for tackling a huge class of problems.     "
},
{
  "id": "chpt-qualitative",
  "level": "1",
  "url": "chpt-qualitative.html",
  "type": "Chapter",
  "number": "7",
  "title": "Qualitative Methods",
  "body": " Qualitative Methods   Finding a neat formula-like solution to a differential equation feels like the ultimate goal. But in reality, many important equations simply can't be solved that way. The solutions may be too complicated, or they don't exist at all. That doesn't mean we're stuck. Instead, we turn to qualitative methods , a collection of tools for understanding how solutions behave without solving for them explicitly.  Qualitative methods change the question. Instead of asking, What's the exact formula? we ask, What does the solution actually do ? These methods help us see whether solutions rise or fall, where they level off, and how they respond to different initial conditions—just by examining the equation's structure.  An analytic solution gives a precise expression, like . A qualitative approach, by contrast, describes the shape, tendencies, and long-term trends of the solution without pinning it down to an exact formula. Both perspectives are valuable, but qualitative tools become essential when analytic methods hit their limits.  In this chapter, you'll learn to read the behavior of solutions from the equation itself using slope fields, phase lines, and bifurcation diagrams. By the end, you'll be able to look at a differential equation like and describe what's happening—even if you never write down a single solution formula.     "
},
{
  "id": "chpt-qualitative-2-1",
  "level": "2",
  "url": "chpt-qualitative.html#chpt-qualitative-2-1",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "qualitative methods "
},
{
  "id": "chpt-eulers-method",
  "level": "1",
  "url": "chpt-eulers-method.html",
  "type": "Chapter",
  "number": "8",
  "title": "Numerical Methods",
  "body": " Numerical Methods   Not every differential equation gives up its secrets to pencil-and-paper methods. Some are too complicated to solve exactly; others have solutions so messy they're practically useless. That's where numerical methods come in—techniques for building approximate solutions when analytic ones aren't possible.  To give you an idea of how easily solutions get out of hand, meet the riccati equation: . It seems relatively tame, but the nonlinear term, , makes solving it substantially more challenging. An exact solution to exists, but it ain't pretty as you can see below.  🫣 Solution to the Riccati Equation  The solution to is described by where denotes a Bessel function defined as    In this chapter, we'll explore what it means to approximate a solution and why doing so is often the only practical choice. We'll start with Euler's method, a simple but powerful idea that moves step by step along the solution curve. From there, we'll peek ahead to more advanced algorithms, like the Runge–Kutta methods, which computers use to tackle even tougher problems.  Along the way, we'll confront an important truth: many differential equations simply cannot be expressed in neat “closed form.” But we're not helpless—we can trade the exact solution for an approximate one that's good enough for analysis, prediction, and real-world applications. By the end of this chapter, you'll understand the thinking behind numerical methods and be ready to start building these approximations yourself.     "
},
{
  "id": "chpt-eulers-method-2-3",
  "level": "2",
  "url": "chpt-eulers-method.html#chpt-eulers-method-2-3",
  "type": "Proof",
  "number": "1",
  "title": "🫣 Solution to the Riccati Equation.",
  "body": "🫣 Solution to the Riccati Equation  The solution to is described by where denotes a Bessel function defined as   "
},
{
  "id": "chpt-homogeneous-eqns",
  "level": "1",
  "url": "chpt-homogeneous-eqns.html",
  "type": "Chapter",
  "number": "9",
  "title": "Homogeneous Equations",
  "body": " Homogeneous Equations   Stepping beyond first-order problems, we turn to equations involving higher derivatives—especially the important class of linear equations with constant coefficients. This part shows why these equations are so useful, and how systematic methods lead to powerful, general solutions.  Up to this point, we've focused mostly on first-order equations. Now it's time to take the next step: equations involving second derivatives and beyond. Among these, one class stands out for its importance and simplicity—the linear homogeneous differential equations with constant coefficients (often shortened to LHCC equations).  In this chapter, we'll pin down exactly what those words mean: linear , homogeneous , and constant coefficient . Then we'll discover why exponential functions are the natural “building blocks” for their solutions, and how the characteristic equation turns a differential equation into an algebra problem we can solve systematically.  By the end, you'll have a clear strategy for solving LHCC equations of any order—a foundation that will carry directly into the next chapter, where we'll look at what happens when these equations are no longer homogeneous.     "
},
{
  "id": "chpt-undetermined-coefficients",
  "level": "1",
  "url": "chpt-undetermined-coefficients.html",
  "type": "Chapter",
  "number": "10",
  "title": "Nonhomogeneous Equations",
  "body": " Nonhomogeneous Equations   In the last chapter, we studied linear homogeneous constant coefficient (LHCC) equations—problems where the right-hand side was always zero. Their solutions came entirely from exponential functions uncovered by the characteristic equation.  Now we take the next step: linear nonhomogeneous constant coefficient (LNCC) equations. These look similar, but with one crucial change—there's a non-zero function on the right-hand side, called the forcing function . This function represents whatever is driving or influencing the system: an external force, an input, a signal, or some other effect.  Solving these equations involves blending two ideas. First, we find the homogeneous solution , which behaves just like the solutions from the previous chapter. Then we construct a particular solution that accounts for the forcing function. Add them together, and you have the general solution .  In this chapter, we'll learn how to recognize that structure and then develop a powerful tool—the Method of Undetermined Coefficients —to systematically build the particular solution. This will open the door to solving a huge range of real-world problems.     "
},
{
  "id": "chpt-laplace-transforms",
  "level": "1",
  "url": "chpt-laplace-transforms.html",
  "type": "Chapter",
  "number": "11",
  "title": "Laplace Transforms",
  "body": " Laplace Transforms   The Laplace transform opens a new path for solving differential equations: it turns calculus problems into algebra problems, handles initial conditions seamlessly, and works beautifully with inputs that turn on, off, or switch over time. This part builds the method step by step.  The Laplace transform is one of the most powerful tools for solving differential equations—and one of the most surprising. Instead of wrestling with derivatives directly, we temporarily move the problem into a new setting called the Laplace domain . In that space, derivatives turn into algebraic terms, and the differential equation becomes something much friendlier: an algebraic equation for a new unknown, .  The real magic is that once we solve for , we can “come back” by applying the inverse Laplace transform and recover , the solution to the original problem. Along the way, initial conditions fold neatly into the process, and tricky features like discontinuous inputs become far easier to handle.  This chapter lays the foundation for everything Laplace-related. We'll define the Laplace transform from scratch, explore why it works, and build a library of key transforms and properties. With those tools in hand, we'll be ready to use the Laplace method to solve differential equations in the chapters ahead.     "
},
{
  "id": "chpt-laplace-transform-method",
  "level": "1",
  "url": "chpt-laplace-transform-method.html",
  "type": "Chapter",
  "number": "12",
  "title": "Laplace Transform Method",
  "body": " Laplace Transform Method   Imagine turning a differential equation into an algebra problem instead. That's exactly what the Laplace transform method does. It unfolds in the same three steps:   Forward transform. Apply the Laplace transform (term-by-term) to a differential equation and get an algebraic equation in .  Algebra in the Laplace domain. Isolate and prepare it for next step.  Backward transform. Apply the inverse Laplace transform to the prepared to turn it back into as the solution to the origianl differential equation.   Throughout the chapter, we will zoom in on each step and guide you with a roadmap like the one below.   Laplace Transform Method Slideshow. Press Next to take a step!             "
},
{
  "id": "lt-slideshow-fig",
  "level": "2",
  "url": "chpt-laplace-transform-method.html#lt-slideshow-fig",
  "type": "Figure",
  "number": "40",
  "title": "",
  "body": " Laplace Transform Method Slideshow. Press Next to take a step!         "
},
{
  "id": "chpt-piecewise-forcing-functions",
  "level": "1",
  "url": "chpt-piecewise-forcing-functions.html",
  "type": "Chapter",
  "number": "13",
  "title": "Piecewise Forcing Functions",
  "body": " Piecewise Forcing Functions   Real-world systems rarely behave in one smooth, unbroken motion. Machines switch on, circuits reset, and forces might act for only a moment before stopping. These situations call for piecewise functions —functions defined by different rules over different time intervals.  When piecewise functions appear as the “inputs” or forcing terms in a differential equation, the Laplace transform method is still up to the task—but we need one more tool: the unit step function . This mathematical ON–OFF switch lets us rewrite piecewise functions into a single, clean expression.  In this chapter, you'll learn how to express any piecewise function using unit step notation, how to handle different types of switches (turning on, turning off, or staying on for just a window of time), and how to apply special Laplace transform rules for step functions. By the end, you'll be able to solve differential equations with inputs that start, stop, and change just like the systems they model.     "
},
{
  "id": "chpt-1st-order-linear-systems",
  "level": "1",
  "url": "chpt-1st-order-linear-systems.html",
  "type": "Chapter",
  "number": "14",
  "title": "First-Order Linear Systems",
  "body": " First-Order Linear Systems   Many real-world problems involve several quantities changing together. This part introduces systems of differential equations, starting with linear systems and moving toward nonlinear ones, giving you tools to understand and analyze how multiple variables interact dynamically.  Up to now, we've mostly dealt with differential equations one at a time—one equation, one unknown function. But many real-world situations don't work that way. Populations interact, chemicals react, and mechanical parts move together. To describe these systems, we need more than a single equation—we need a system of differential equations.  A system is simply a collection of differential equations that must be solved together because their unknowns are linked. Some systems are “uncoupled,” meaning each equation can be solved on its own. Others are “coupled,” where the variables feed into each other's equations and evolve together.  In this chapter, we'll build the foundations for working with systems. We'll start by looking at simple cases, then move into coupled systems and see how tools like the phase plane help us visualize the relationships between variables. By the end, you'll have the groundwork needed to understand and solve first-order linear systems.     "
},
{
  "id": "chpt-nonlinear-systems",
  "level": "1",
  "url": "chpt-nonlinear-systems.html",
  "type": "Chapter",
  "number": "15",
  "title": "Nonlinear Systems",
  "body": " Nonlinear Systems      Linear systems give us a structured, predictable world—but the real world is rarely that neat. Most systems in nature are nonlinear : predator and prey populations affect each other in complex ways, economic models spiral or stabilize depending on feedback loops, and mechanical systems exhibit unexpected behavior when forces get too large.  Nonlinear systems bring both challenges and fascination. They can behave in ways linear systems never will—showing sudden jumps, oscillations, or even chaotic motion. Traditional algebraic tools often fall short here, so we rely more heavily on qualitative analysis, numerical methods, and geometric thinking to make sense of what's happening.  This chapter introduces the core ideas you'll need to begin exploring nonlinear systems. While the techniques are more limited and the solutions less tidy, the insights they reveal are essential for understanding the complex, interconnected systems that define much of the world around us.     "
},
{
  "id": "review-like-terms",
  "level": "1",
  "url": "review-like-terms.html",
  "type": "Section",
  "number": "A.1",
  "title": "Like-Terms",
  "body": " Like-Terms  Terms are called like-terms if they have identical variable parts. That is, they differ only by a coefficient. like-terms can be combined via addition and subtraction. For example, the and terms below are pairs of like-terms, which can be combined as follows: .  "
},
{
  "id": "review-like-terms-2",
  "level": "2",
  "url": "review-like-terms.html#review-like-terms-2",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "like-terms "
},
{
  "id": "review-quadratic-eqns",
  "level": "1",
  "url": "review-quadratic-eqns.html",
  "type": "Section",
  "number": "A.2",
  "title": "Quadratic Equations",
  "body": " Quadratic Equations  Quadratic equations appear frequently in differential equations, especially when solving second-order equations with constant coefficients. For example, the characteristic equation associated with a linear differential equation like is a quadratic. Understanding how to solve quadratics is essential for finding solutions to these types of problems.  A quadratic equation has the general form , where . There are several common techniques to solve such equations:   Factoring : Try to express the quadratic as a product of two binomials.  Quadratic formula : Use the general formula .  Completing the square : Rewrite the quadratic to form a perfect square trinomial.   Each method has its advantages. Factoring is often the quickest when possible. The quadratic formula works for all cases and is especially useful when the equation doesn't factor easily. Completing the square is less commonly used early on, but becomes more important in later topics, such as solving differential equations by variation of parameters or Laplace transforms.  Let's look at a few examples that illustrate all three methods.   Repeated Root  Solve .    Factoring: Try factoring directly:   This gives a repeated root, also called a double root.  Quadratic formula:   Completing the square:          Two Real Roots  Solve .    Factoring:   Quadratic formula:          Complex Roots  Solve .    Quadratic formula:   Completing the square:          Name at least two methods for solving quadratic equations.  Factoring, using the quadratic formula, completing the square.    How many solutions does a quadratic equation have?  A quadratic equation has two solutions. These may be:   Two distinct real roots  One repeated real root (double root)  Two complex conjugate roots       ✳️ Solving Quadratic Equations  The solution to the quadratic equation is given by the quadratic formula: . Notes:   The gives two solutions, say and .     and are also known as the roots of .    The value, , under the root in is called the discriminant .    Equation can be written as .    If , then and are different real numbers.    If , then and are the same real number (repeated).    If , then and are complex and can be written as .      "
},
{
  "id": "quad-example-double-root",
  "level": "2",
  "url": "review-quadratic-eqns.html#quad-example-double-root",
  "type": "🌌 Example",
  "number": "41",
  "title": "Repeated Root.",
  "body": " Repeated Root  Solve .    Factoring: Try factoring directly:   This gives a repeated root, also called a double root.  Quadratic formula:   Completing the square:        "
},
{
  "id": "quad-example-real-roots",
  "level": "2",
  "url": "review-quadratic-eqns.html#quad-example-real-roots",
  "type": "🌌 Example",
  "number": "42",
  "title": "Two Real Roots.",
  "body": " Two Real Roots  Solve .    Factoring:   Quadratic formula:        "
},
{
  "id": "quad-example-complex-roots",
  "level": "2",
  "url": "review-quadratic-eqns.html#quad-example-complex-roots",
  "type": "🌌 Example",
  "number": "43",
  "title": "Complex Roots.",
  "body": " Complex Roots  Solve .    Quadratic formula:   Completing the square:        "
},
{
  "id": "solving-the-quadratic-equation-2",
  "level": "2",
  "url": "review-quadratic-eqns.html#solving-the-quadratic-equation-2",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "roots discriminant "
},
{
  "id": "review-completing-the-sqr",
  "level": "1",
  "url": "review-completing-the-sqr.html",
  "type": "Section",
  "number": "A.3",
  "title": "Completing the Square",
  "body": " Completing the Square  Completing the square is a powerful algebraic tool for rewriting a quadratic expression in a form that reveals key structure. While often introduced in algebra courses, the technique becomes especially important when solving differential equations using the Laplace transform. For example, when taking an inverse Laplace transform, it’s common to encounter expressions like . Recognizing this as a completed square helps identify the corresponding time-domain function.  The idea is to transform an expression like into a perfect square plus or minus a constant. That is, This form makes it easier to recognize shifted squares and simplify square roots or integrals.   ✳️ Completing the Square  Completing the square is a tool to rewrite a quadratic expression like into the form:   The strategy is as follows:    Let’s walk through a few examples to get a feel for how this works, especially for later use in Laplace problems.   Complete the Square of each Quadratic   (a)   Since , we add and substract .     (b)   Since , we add and substract .     (c)   Since , we add and substract .         Practice completing the square for each expression below. You can verify your answer by expanding it.                                              "
},
{
  "id": "review-completing-the-sqr-6",
  "level": "2",
  "url": "review-completing-the-sqr.html#review-completing-the-sqr-6",
  "type": "🌌 Example",
  "number": "44",
  "title": "<em class=\"emphasis\">Complete the Square of each Quadratic<\/em>.",
  "body": " Complete the Square of each Quadratic   (a)   Since , we add and substract .     (b)   Since , we add and substract .     (c)   Since , we add and substract .      "
},
{
  "id": "review-completing-the-sqr-7-1-2",
  "level": "2",
  "url": "review-completing-the-sqr-7.html#review-completing-the-sqr-7-1-2",
  "type": "Exercise",
  "number": "A.3.1",
  "title": "",
  "body": "      "
},
{
  "id": "review-completing-the-sqr-7-1-3",
  "level": "2",
  "url": "review-completing-the-sqr-7.html#review-completing-the-sqr-7-1-3",
  "type": "Exercise",
  "number": "A.3.2",
  "title": "",
  "body": "      "
},
{
  "id": "review-completing-the-sqr-7-1-4",
  "level": "2",
  "url": "review-completing-the-sqr-7.html#review-completing-the-sqr-7-1-4",
  "type": "Exercise",
  "number": "A.3.3",
  "title": "",
  "body": "      "
},
{
  "id": "review-completing-the-sqr-7-1-5",
  "level": "2",
  "url": "review-completing-the-sqr-7.html#review-completing-the-sqr-7-1-5",
  "type": "Exercise",
  "number": "A.3.4",
  "title": "",
  "body": "      "
},
{
  "id": "review-completing-the-sqr-7-1-6",
  "level": "2",
  "url": "review-completing-the-sqr-7.html#review-completing-the-sqr-7-1-6",
  "type": "Exercise",
  "number": "A.3.5",
  "title": "",
  "body": "      "
},
{
  "id": "review-completing-the-sqr-7-1-7",
  "level": "2",
  "url": "review-completing-the-sqr-7.html#review-completing-the-sqr-7-1-7",
  "type": "Exercise",
  "number": "A.3.6",
  "title": "",
  "body": "      "
},
{
  "id": "review-point-slope",
  "level": "1",
  "url": "review-point-slope.html",
  "type": "Section",
  "number": "A.4",
  "title": "Equation of a Line in Point-Slope Form",
  "body": " Equation of a Line in Point-Slope Form  You’ve likely encountered the familiar slope-intercept form for the equation of a line. While this form is helpful, there’s another version that plays a more direct role in differential equations: the point-slope form . It’s especially useful when we know a point on the line and the slope, which is exactly the situation we encounter in slope fields and Euler’s method.  Recall the formula for the slope between two points, and : Rearranging this gives the point-slope form of a line:   This form is powerful when modeling rates of change. For instance, when approximating solutions to differential equations numerically, each step follows the slope of a tangent line—exactly what this formula captures. You can also solve for if needed:    Writing a Line from Two Points   Given the points and :  Write the equation of the line in point-slope form.  Solve the equation for .      First, find the slope:   Now plug into the point-slope form using either point:   Solving for gives:      Practice Writing Equations of Lines   For each pair of points below:  Write the equation of the line in point-slope form.  Solve the equation for .      and   Find the slope:   (i) Point-slope form using (6, -1):   (ii) Solve for :      and   Find the slope:   (i) Point-slope form using (5, 0):   (ii) Solve for :      and   Find the slope:   (i) Point-slope form using (-3, -7):   (ii) Solve for :      "
},
{
  "id": "review-point-slope-2",
  "level": "2",
  "url": "review-point-slope.html#review-point-slope-2",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "point-slope form "
},
{
  "id": "review-point-slope-5",
  "level": "2",
  "url": "review-point-slope.html#review-point-slope-5",
  "type": "🌌 Example",
  "number": "45",
  "title": "Writing a Line from Two Points.",
  "body": " Writing a Line from Two Points   Given the points and :  Write the equation of the line in point-slope form.  Solve the equation for .      First, find the slope:   Now plug into the point-slope form using either point:   Solving for gives:    "
},
{
  "id": "review-point-slope-6-3",
  "level": "2",
  "url": "review-point-slope-6.html#review-point-slope-6-3",
  "type": "Exercise",
  "number": "A.4.1",
  "title": "",
  "body": " and   Find the slope:   (i) Point-slope form using (6, -1):   (ii) Solve for :    "
},
{
  "id": "review-point-slope-6-4",
  "level": "2",
  "url": "review-point-slope-6.html#review-point-slope-6-4",
  "type": "Exercise",
  "number": "A.4.2",
  "title": "",
  "body": " and   Find the slope:   (i) Point-slope form using (5, 0):   (ii) Solve for :    "
},
{
  "id": "review-point-slope-6-5",
  "level": "2",
  "url": "review-point-slope-6.html#review-point-slope-6-5",
  "type": "Exercise",
  "number": "A.4.3",
  "title": "",
  "body": " and   Find the slope:   (i) Point-slope form using (-3, -7):   (ii) Solve for :    "
},
{
  "id": "review-point-on-a-line",
  "level": "1",
  "url": "review-point-on-a-line.html",
  "type": "Section",
  "number": "A.5",
  "title": "Finding a Point on a Line",
  "body": " Finding a Point on a Line  Once we have an equation for a line—especially in point-slope form—we can easily find any point on that line by substituting in a value for and solving for . This is a basic but important skill when working with solutions to differential equations. For example, when using Euler’s method or interpreting a slope field, we often want to know the value of the solution at a particular -value.   Finding a Point Given   The line is given by the equation: Find the coordinates of the point on with .    Substitute into the equation and solve for :   So the desired point is .     Use the given equation of a line in point-slope form to find the point on the line with the specified -value.     ,      Substitute :   So the point is .       ,      Substitute :   So the point is .       ,      Substitute :   So the point is .      "
},
{
  "id": "review-point-on-a-line-3",
  "level": "2",
  "url": "review-point-on-a-line.html#review-point-on-a-line-3",
  "type": "🌌 Example",
  "number": "46",
  "title": "Finding a Point Given <span class=\"process-math\">\\(x\\)<\/span>.",
  "body": " Finding a Point Given   The line is given by the equation: Find the coordinates of the point on with .    Substitute into the equation and solve for :   So the desired point is .    "
},
{
  "id": "review-point-on-a-line-5-1",
  "level": "2",
  "url": "review-point-on-a-line-5.html#review-point-on-a-line-5-1",
  "type": "Exercise",
  "number": "A.5.1",
  "title": "",
  "body": "  ,      Substitute :   So the point is .    "
},
{
  "id": "review-point-on-a-line-5-2",
  "level": "2",
  "url": "review-point-on-a-line-5.html#review-point-on-a-line-5-2",
  "type": "Exercise",
  "number": "A.5.2",
  "title": "",
  "body": "  ,      Substitute :   So the point is .    "
},
{
  "id": "review-point-on-a-line-5-3",
  "level": "2",
  "url": "review-point-on-a-line-5.html#review-point-on-a-line-5-3",
  "type": "Exercise",
  "number": "A.5.3",
  "title": "",
  "body": "  ,      Substitute :   So the point is .    "
},
{
  "id": "review-trig-identities",
  "level": "1",
  "url": "review-trig-identities.html",
  "type": "Section",
  "number": "A.6",
  "title": "Trigonometric Identities",
  "body": " Trigonometric Identities  Trigonometric identities appear frequently in differential equations, especially when working with oscillatory solutions like . Knowing a few core identities helps simplify expressions, evaluate integrals, and recognize equivalent forms—whether you're solving second-order linear equations or analyzing Laplace transforms.   ✳️ Pythagorean Identities  These identities are derived from the unit circle and are often used to simplify squared trigonometric terms. They are especially useful when converting between forms or integrating expressions:                     ✳️ Even and Odd Properties  These identities help you simplify expressions involving negative angles. They’re especially important when analyzing symmetry in solutions or applying inverse Laplace transforms:                   "
},
{
  "id": "review-exponents-logarithms",
  "level": "1",
  "url": "review-exponents-logarithms.html",
  "type": "Section",
  "number": "A.7",
  "title": "Exponential and Logarithmic Functions",
  "body": " Exponential and Logarithmic Functions  Exponential and logarithmic expressions appear constantly in differential equations. They arise in the solutions of linear equations, in the Laplace transform and its inverse, and in modeling exponential growth, decay, and oscillation. This review gathers the essential algebraic rules you’ll use throughout the course.   ✳️ Exponential Rules        General   Natural ( )                                              ✳️ Logarithmic Rules        General   Natural ( )                                                       These identities will help you solve equations involving exponentials or logarithms—common in modeling growth and decay, solving linear ODEs, and interpreting Laplace transforms.   Solve for :    We might begin by isolating the exponential that contains and then taking the natural log of both sides.   It's worth noting that we cannot break up that log on the right hand side. There's no \"rule\" that helps when we have addition inside a logarithm.  There is another way to approach this if notice that appears inside both exponential terms. The answers may look different, but they are equivalent and both are correct.     Solve for :    We'll carefully apply the rules above. We want to get our hands on , and right now its inside a logarithm. In order to undo that, we'll exponentiate both sides.     Now you try. Solve for in each of the following equations using the rules above.                                        Euler's Formula   Euler’s formula relates complex exponentials to trigonometric functions. For any real number :   As a result, we also have:   This identity is fundamental in solving linear differential equations with complex roots.    "
},
{
  "id": "r-01-04-exp_logs_ex_01",
  "level": "2",
  "url": "review-exponents-logarithms.html#r-01-04-exp_logs_ex_01",
  "type": "🌌 Example",
  "number": "47",
  "title": "",
  "body": " Solve for :    We might begin by isolating the exponential that contains and then taking the natural log of both sides.   It's worth noting that we cannot break up that log on the right hand side. There's no \"rule\" that helps when we have addition inside a logarithm.  There is another way to approach this if notice that appears inside both exponential terms. The answers may look different, but they are equivalent and both are correct.   "
},
{
  "id": "r-01-04-exp_logs_ex_02",
  "level": "2",
  "url": "review-exponents-logarithms.html#r-01-04-exp_logs_ex_02",
  "type": "🌌 Example",
  "number": "48",
  "title": "",
  "body": " Solve for :    We'll carefully apply the rules above. We want to get our hands on , and right now its inside a logarithm. In order to undo that, we'll exponentiate both sides.    "
},
{
  "id": "eulers-formula",
  "level": "2",
  "url": "review-exponents-logarithms.html#eulers-formula",
  "type": "📙 Definition",
  "number": "49",
  "title": "Euler’s Formula.",
  "body": " Euler's Formula   Euler’s formula relates complex exponentials to trigonometric functions. For any real number :   As a result, we also have:   This identity is fundamental in solving linear differential equations with complex roots.   "
},
{
  "id": "review-script-notation",
  "level": "1",
  "url": "review-script-notation.html",
  "type": "Section",
  "number": "A.8",
  "title": "Subscript Notation",
  "body": " Subscript Notation  In calculus and differential equations, functions are usually written using parentheses. For example:   These definitions tell us how to evaluate the function for different inputs. We can plug in any real number:    Subscript notation  When the inputs to a function are restricted to whole numbers like , we often use subscript notation . This is especially common when working with sequences or numerical methods that step through time.  For example, suppose we define a function using subscript notation:   This behaves similarly to , except that must be a nonnegative integer. We would not evaluate at a value like .  Here are some values of the sequence:   You’ll see subscript notation again when we use Euler’s method later in this course, where we write approximations as to represent the values of a function at evenly spaced time steps.    Practice   Practice evaluating each subscripted expression using the given rule.   If , evaluate      If , evaluate .      If , evaluate .       "
},
{
  "id": "review-script-notation-7-2-2",
  "level": "2",
  "url": "review-script-notation-7.html#review-script-notation-7-2-2",
  "type": "Exercise",
  "number": "A.8.1",
  "title": "",
  "body": " If , evaluate    "
},
{
  "id": "review-script-notation-7-2-3",
  "level": "2",
  "url": "review-script-notation-7.html#review-script-notation-7-2-3",
  "type": "Exercise",
  "number": "A.8.2",
  "title": "",
  "body": " If , evaluate .    "
},
{
  "id": "review-script-notation-7-2-4",
  "level": "2",
  "url": "review-script-notation-7.html#review-script-notation-7-2-4",
  "type": "Exercise",
  "number": "A.8.3",
  "title": "",
  "body": " If , evaluate .    "
},
{
  "id": "review-function-notation",
  "level": "1",
  "url": "review-function-notation.html",
  "type": "Section",
  "number": "A.9",
  "title": "Function Notation",
  "body": " Function Notation  Function notation is a cornerstone of modern mathematics and science. It allows us to describe relationships between variables in a compact, precise, and flexible way. While the concept may seem familiar, mastering its nuances is essential for understanding differential equations and the systems they model.  A function is a rule that assigns exactly one output value to each input. For example, takes an input , squares it, and returns the result. The notation not only names the function but also reminds us which variable it depends on.  In the context of differential equations, function notation frequently appears with derivatives—expressions like or describe how a quantity changes. These are the building blocks for modeling motion, population growth, heat flow, electrical current, and countless other processes.   Evaluating a Function  Suppose . To find , substitute :   This tells us that when the input is 4, the function outputs 11.   Function notation also makes it easy to represent more complex relationships. For instance, in the differential equation , we describe how the rate of change of depends both on the independent variable and the dependent variable through two separate functions.   Function Composition  Consider and . The composition means we evaluate first, then plug the result into :   This compact notation is especially useful in modeling layered or dependent processes.   Initial conditions often appear alongside function notation in differential equations. For example, if and , the function must satisfy both the differential equation and this initial value.   Function Notation in Initial Value Problems  Solve the initial value problem: First, find the general solution: Now use the initial condition: So the particular solution is:    Function notation also plays a central role in the structure of higher-order differential equations, where derivatives and coefficients are expressed using functional relationships.  Consider the general form: This describes how a function evolves over time, incorporating both its derivatives and time-dependent coefficients. Let’s break down the components.   Key Components of Function Notation  1. The Function : indicates that is a function of time . For example, might represent the temperature at time , or the position of an object in motion.  2. Derivatives : The term refers to the th derivative of with respect to . Derivatives describe how a quantity changes. For example:  is the rate of change (velocity).  is the second derivative (acceleration).    3. Coefficients and Forcing Terms : The functions and modify the behavior of the system. For example:  scales the function based on time.  represents an external input or forcing term.      Interpreting an Equation  Let’s analyze this second-order differential equation:   is the second derivative—how fast the rate of change is changing.  is a damping term proportional to velocity.  scales the function itself.  is a forcing term that decays over time.  These components together describe a system with internal resistance and an external influence.  When interpreting a differential equation, ask:  What is the order of the highest derivative?  Are the coefficients constant or variable?  Is there a forcing term (like ) driving the system?  These questions help you understand the system’s structure and behavior.    Breaking Down an Equation  Consider: This is a first-order differential equation. The rate of change of depends on both and . We can separate the variables: Recognizing this structure makes it easier to solve.   In summary, function notation is more than a way to write formulas—it’s a powerful language for describing change. It allows us to interpret, analyze, and solve differential equations across a wide range of applications.  "
},
{
  "id": "function-notation-example-1",
  "level": "2",
  "url": "review-function-notation.html#function-notation-example-1",
  "type": "🌌 Example",
  "number": "50",
  "title": "Evaluating a Function.",
  "body": " Evaluating a Function  Suppose . To find , substitute :   This tells us that when the input is 4, the function outputs 11.  "
},
{
  "id": "function-notation-example-2",
  "level": "2",
  "url": "review-function-notation.html#function-notation-example-2",
  "type": "🌌 Example",
  "number": "51",
  "title": "Function Composition.",
  "body": " Function Composition  Consider and . The composition means we evaluate first, then plug the result into :   This compact notation is especially useful in modeling layered or dependent processes.  "
},
{
  "id": "function-notation-example-3",
  "level": "2",
  "url": "review-function-notation.html#function-notation-example-3",
  "type": "🌌 Example",
  "number": "52",
  "title": "Function Notation in Initial Value Problems.",
  "body": " Function Notation in Initial Value Problems  Solve the initial value problem: First, find the general solution: Now use the initial condition: So the particular solution is:   "
},
{
  "id": "function-notation-components-2",
  "level": "2",
  "url": "review-function-notation.html#function-notation-components-2",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "The Function "
},
{
  "id": "function-notation-components-3",
  "level": "2",
  "url": "review-function-notation.html#function-notation-components-3",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Derivatives "
},
{
  "id": "function-notation-components-4",
  "level": "2",
  "url": "review-function-notation.html#function-notation-components-4",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Coefficients and Forcing Terms "
},
{
  "id": "function-notation-example-4",
  "level": "2",
  "url": "review-function-notation.html#function-notation-example-4",
  "type": "🌌 Example",
  "number": "53",
  "title": "Breaking Down an Equation.",
  "body": " Breaking Down an Equation  Consider: This is a first-order differential equation. The rate of change of depends on both and . We can separate the variables: Recognizing this structure makes it easier to solve.  "
},
{
  "id": "review-polynomial-eqns",
  "level": "1",
  "url": "review-polynomial-eqns.html",
  "type": "Section",
  "number": "A.10",
  "title": "Solving Polynomial Equations",
  "body": " Solving Polynomial Equations  Solving polynomial equations is a foundational skill in mathematics, and it plays a critical role in differential equations—particularly when solving linear differential equations with constant coefficients. In that context, we transform the differential equation into a polynomial equation, known as the characteristic equation, and solve it to find exponential solutions.  Higher-degree polynomial equations have the form and it turns out that these equations can always be factored into simpler polynomials. In particular, a polynomial of degree can always be factored into linear factors: where are the solutions and can be real or complex. This fact is known as the Fundamental Theorem of Algebra.   A \"complex\" solution is one that can contain (imaginary part).  For example, the equation has two complex solutions since   While knowing this is powerful, the process of factoring them can be quite challenging. However, there are some special forms and strategies that can help. A few are summarized below.  ✳️ Techniques for Solving Higher-Degree Polynomials    Recognizing Special Forms  Some polynomials can be factored using special patterns. Common forms include:  Common Factoring:  Difference of Squares:  Sum\/Difference of Cubes:  Recognizing these forms can help simplify the factorization process.   Known Factors  If you know one factor, then you can divide-out the polynomial by this factor. For example, suppose we know that is a root of the polynomial . Then, we know that is a factor, so where is some second-degree polynomial you multiply by to get our original polynomial. We can find by dividing both sides by , like so   How?  Use polynomial divison to compute                                                                                     Therefore, .    Therefore,     Rational Root Theorem  If a polynomial has rational roots, they must be of the form:   This gives us a list of possible solutions to test. For example, if we have the polynomial then the possible factors of are and the possible factors of are . Therefore, the possible fractional solutions are We can test each of these values to find up to 3 solutions. Once we find one, we can use the previous technique to help find more.   Use Technology  Factoring higher-order polynomials can be very difficult to do by and this is one skill that may be better suited for a computer. There are many software packages that can factor polynomials for you. For example, the Wolfram Alpha website will do it with ease.       Example: Solving a Polynomial Equation   Solve the equation:     Try rational roots. Testing gives: So is a factor. Divide the polynomial to find: Factoring the quadratic: The roots are .    Here are a few quick examples. These illustrate techniques like factoring out common terms, recognizing perfect squares, or applying the Rational Root Theorem. All of these help us find roots that lead to solutions of linear homogeneous equations.     Factor and solve the following polynomial equations:                            The degree of each equation tells you how many factors you should have.            difference of squares     set each factor to 0     solutions                difference of squares     solutions                common factor      standard quadratic factoring     solutions                common factor     solutions      Technically, and represents 4 repeated factors.              common factor      difference of squares     solutions                common factor      difference of squares     solutions                difference of squares      difference of squares     set each factor to 0     solutions          An important concept to remember is that any polynomial can be factored into the product of linear factors, allowing for complex solutions. This is known as the Fundamental Theorem of Algebra. However, factoring higher-degree polynomials can sometimes be challenging and may require the use of technology, such as computer algebra systems or graphing calculators, to find complex or irrational roots.  "
},
{
  "id": "technique-2-2-11",
  "level": "2",
  "url": "review-polynomial-eqns.html#technique-2-2-11",
  "type": "Proof",
  "number": "1",
  "title": "How?",
  "body": " How?  Use polynomial divison to compute                                                                                     Therefore, .  "
},
{
  "id": "review-polynomial-eqns-5",
  "level": "2",
  "url": "review-polynomial-eqns.html#review-polynomial-eqns-5",
  "type": "🌌 Example",
  "number": "54",
  "title": "Example: Solving a Polynomial Equation.",
  "body": " Example: Solving a Polynomial Equation   Solve the equation:     Try rational roots. Testing gives: So is a factor. Divide the polynomial to find: Factoring the quadratic: The roots are .   "
},
{
  "id": "review-polynomial-eqns-7",
  "level": "2",
  "url": "review-polynomial-eqns.html#review-polynomial-eqns-7",
  "type": "🌌 Example",
  "number": "55",
  "title": "",
  "body": "   Factor and solve the following polynomial equations:                            The degree of each equation tells you how many factors you should have.            difference of squares     set each factor to 0     solutions                difference of squares     solutions                common factor      standard quadratic factoring     solutions                common factor     solutions      Technically, and represents 4 repeated factors.              common factor      difference of squares     solutions                common factor      difference of squares     solutions                difference of squares      difference of squares     set each factor to 0     solutions         "
},
{
  "id": "review-rational-functions",
  "level": "1",
  "url": "review-rational-functions.html",
  "type": "Section",
  "number": "A.11",
  "title": "Rational Functions",
  "body": " Rational Functions   Rational functions are a fundamental concept in algebra and calculus, and they play a significant role in differential equations. A rational function is defined as the ratio of two polynomials.  Rational Function  A rational function is a function that is the division of two polynomials.  For example, the following are rational functions in the variables , , and , respectively: .   "
},
{
  "id": "rational-function",
  "level": "2",
  "url": "review-rational-functions.html#rational-function",
  "type": "📙 Definition",
  "number": "56",
  "title": "Rational Function.",
  "body": "Rational Function  A rational function is a function that is the division of two polynomials.  For example, the following are rational functions in the variables , , and , respectively: .  "
},
{
  "id": "review-pfd",
  "level": "1",
  "url": "review-pfd.html",
  "type": "Section",
  "number": "A.12",
  "title": "Partial Fraction Decomposition",
  "body": " Partial Fraction Decomposition   Partial fraction decomposition is a method used to express a rational function as a sum of simpler fractions. This process is especially useful when solving integrals and applying inverse Laplace transforms. The following steps outline the process to find the partial fraction decomposition of a rational function.   Check the Degree of the Numerator and Denominator  Ensure the degree of the numerator is less than the degree of the denominator. If the numerator has a degree greater than or equal to the denominator, first perform polynomial long division to reduce the degree of the numerator.   Factor the Denominator  Factor the denominator into irreducible linear or quadratic factors.   Linear factors: Expressions of the form .   Irreducible quadratic factors: Expressions of the form where the discriminant is negative.     Set up the Partial Fraction Decomposition  Based on the factors of the denominator, write the decomposition:  For each linear factor , include a term of the form .  For repeated linear factors , include terms like:   For irreducible quadratic factors , include a term of the form .  For repeated quadratic factors , include terms like:      Solve for the Constants  Multiply both sides of the equation by the common denominator and expand to eliminate fractions. Group terms by powers of and set up a system of equations to solve for the unknown constants , , and .   Final Result  Once the constants are found, write the final partial fraction decomposition. This decomposition can now be used for further calculations such as integrals or inverse Laplace transforms.    ✳️ Reference: Partial Fraction General Form Terms  For each type of factor in the denominator, add the following terms to the partial fraction decomposition:    Factor Type  Factor  Term(s) In General Form    Linear      Repeated Linear      Irreducible Quadratic      Repeated Quadratic        Find the partial fraction decomposition form for each.      First, factor the denominator: The denominator has the following factors:   (linear, single)   (linear, single)  Hence, the FORM of the partial fraction decomposition is:        Since the denominator is already factored, we see that the denominator has the following factors:   (linear, double)   (linear, distinct)  Hence, the FORM of the partial fraction decomposition is:        Here we need to finish factoring the denominator: Now we see that the denominator has the following factors:   (linear, double)   (linear, double)  Hence, the FORM of the partial fraction decomposition is:        Here we need to finish factoring the denominator: Now we see that (which is linear), is a factor (three times) of the denominator. Hence, the FORM of the partial fraction decomposition is:        Find the partial fraction decomposition of .   Factor the denominator as . The partial fraction decomposition is:   Multiply through by and solve for , , and .   Expanding and comparing coefficients, we find:   Therefore, the partial fraction decomposition is:      General Form   Find the FORM of the partial fraction decomposition for each of the following. Make sure you completely factor each denominator before determining the decomposition. You need not find the values of the coefficients  etc.          Since the denominator is already factored, we see that the denominator has the following factors:   (linear, double)   (linear, distinct)  Hence, the FORM of the partial fraction decomposition is:                 Here we need to finish factoring the denominator: Now we see that the denominator has the following factors:   (linear, double)   (linear, double)  Hence, the FORM of the partial fraction decomposition is:                 Here we need to finish factoring the denominator: Now we see that (which is linear), is a factor (three times) of the denominator. Hence, the FORM of the partial fraction decomposition is:                 Here we need to finish factoring the denominator: Now we see that the denominator has the following factors:   (linear, single)   (linear, single)   (irreducible quadratic, single)  Hence, the FORM of the partial fraction decomposition is:                 Here we need to finish factoring the denominator: Now we see that the denominator has the following factors:   (linear, single)   (linear, single)   (irreducible quadratic, single)  Hence, the FORM of the partial fraction decomposition is:                 Here we need to finish factoring the denominator: Now we see that the denominator has the following factors:   (linear, single)   (linear, single)   (irreducible quadratic, single)  Hence, the FORM of the partial fraction decomposition is:                 Here we need to finish factoring the denominator: Now we see that the denominator has the following factors:   (linear, double)   (linear, double)  Hence, the FORM of the partial fraction decomposition is:                 Here we need to finish factoring the denominator: Now we see that the denominator has the following factors:   (linear, single)   (linear, single)   (irreducible quadratic, single)  Hence, the FORM of the partial fraction decomposition is:                 First, factor the denominator: The denominator has the following factors:   (linear, single)   (linear, single)   (linear, single)  Hence, the FORM of the partial fraction decomposition is:                   First, factor the denominator: The denominator has the following factors:   (linear, single)   (linear, single)  Hence, the FORM of the partial fraction decomposition is:             Partial Fraction Decomposition   Find the partial fraction decomposition for each of the following rational functions.          First, factor the denominator: The denominator has the following factors:   (linear, single)   (linear, single)   (linear, single)  Hence, the FORM of the partial fraction decomposition is: Multiply both sides by the common denominator and solve for  and                   Since the denominator is already factored, we see that the denominator has the following factors:   (linear, double)   (linear, distinct)  Hence, the FORM of the partial fraction decomposition is: Multiply both sides by the common denominator and solve for  and                 Here we need to finish factoring the denominator: Now we see that the denominator has the following factors:   (linear, double)   (linear, double)  Hence, the FORM of the partial fraction decomposition is: Multiply both sides by the common denominator and solve for   and                 Here we need to finish factoring the denominator: Now we see that (which is linear), is a factor (three times) of the denominator. Hence, the FORM of the partial fraction decomposition is: Multiply both sides by the common denominator and solve for  and                 Here we need to finish factoring the denominator: Now we see that the denominator has the following factors:   (linear, single)   (linear, single)   (irreducible quadratic, single)  Hence, the FORM of the partial fraction decomposition is: Multiply both sides by the common denominator and solve for   and                 Here we need to finish factoring the denominator: Now we see that the denominator has the following factors:   (linear, single)   (linear, single)   (irreducible quadratic, single)  Hence, the FORM of the partial fraction decomposition is: Multiply both sides by the common denominator and solve for   and                 Here we need to finish factoring the denominator: Now we see that the denominator has the following factors:   (linear, single)   (linear, single)   (irreducible quadratic, single)  Hence, the FORM of the partial fraction decomposition is: Multiply both sides by the common denominator and solve for   and                 Here we need to finish factoring the denominator: Now we see that the denominator has the following factors:   (linear, double)   (linear, double)  Hence, the FORM of the partial fraction decomposition is: Multiply both sides by the common denominator and solve for   and                 Here we need to finish factoring the denominator: Now we see that the denominator has the following factors:   (linear, single)   (linear, single)   (irreducible quadratic, single)  Hence, the FORM of the partial fraction decomposition is: Multiply both sides by the common denominator and solve for   and                        and                                                                                              "
},
{
  "id": "review-pfd-4-2-2",
  "level": "2",
  "url": "review-pfd.html#review-pfd-4-2-2",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Linear factors: Irreducible quadratic factors: "
},
{
  "id": "partial-fraction-table-3",
  "level": "2",
  "url": "review-pfd.html#partial-fraction-table-3",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Factor Type Factor Term(s) In General Form Linear Repeated Linear Irreducible Quadratic Repeated Quadratic "
},
{
  "id": "review-pfd-6",
  "level": "2",
  "url": "review-pfd.html#review-pfd-6",
  "type": "🌌 Example",
  "number": "57",
  "title": "",
  "body": " Find the partial fraction decomposition form for each.      First, factor the denominator: The denominator has the following factors:   (linear, single)   (linear, single)  Hence, the FORM of the partial fraction decomposition is:        Since the denominator is already factored, we see that the denominator has the following factors:   (linear, double)   (linear, distinct)  Hence, the FORM of the partial fraction decomposition is:        Here we need to finish factoring the denominator: Now we see that the denominator has the following factors:   (linear, double)   (linear, double)  Hence, the FORM of the partial fraction decomposition is:        Here we need to finish factoring the denominator: Now we see that (which is linear), is a factor (three times) of the denominator. Hence, the FORM of the partial fraction decomposition is:      "
},
{
  "id": "review-pfd-7",
  "level": "2",
  "url": "review-pfd.html#review-pfd-7",
  "type": "🌌 Example",
  "number": "58",
  "title": "",
  "body": " Find the partial fraction decomposition of .   Factor the denominator as . The partial fraction decomposition is:   Multiply through by and solve for , , and .   Expanding and comparing coefficients, we find:   Therefore, the partial fraction decomposition is:    "
},
{
  "id": "review-pfd-8-1-3",
  "level": "2",
  "url": "review-pfd-8.html#review-pfd-8-1-3",
  "type": "Exercise",
  "number": "A.12.1",
  "title": "",
  "body": "       Since the denominator is already factored, we see that the denominator has the following factors:   (linear, double)   (linear, distinct)  Hence, the FORM of the partial fraction decomposition is:         "
},
{
  "id": "review-pfd-8-1-4",
  "level": "2",
  "url": "review-pfd-8.html#review-pfd-8-1-4",
  "type": "Exercise",
  "number": "A.12.2",
  "title": "",
  "body": "       Here we need to finish factoring the denominator: Now we see that the denominator has the following factors:   (linear, double)   (linear, double)  Hence, the FORM of the partial fraction decomposition is:         "
},
{
  "id": "review-pfd-8-1-5",
  "level": "2",
  "url": "review-pfd-8.html#review-pfd-8-1-5",
  "type": "Exercise",
  "number": "A.12.3",
  "title": "",
  "body": "       Here we need to finish factoring the denominator: Now we see that (which is linear), is a factor (three times) of the denominator. Hence, the FORM of the partial fraction decomposition is:         "
},
{
  "id": "review-pfd-8-1-6",
  "level": "2",
  "url": "review-pfd-8.html#review-pfd-8-1-6",
  "type": "Exercise",
  "number": "A.12.4",
  "title": "",
  "body": "       Here we need to finish factoring the denominator: Now we see that the denominator has the following factors:   (linear, single)   (linear, single)   (irreducible quadratic, single)  Hence, the FORM of the partial fraction decomposition is:         "
},
{
  "id": "review-pfd-8-1-7",
  "level": "2",
  "url": "review-pfd-8.html#review-pfd-8-1-7",
  "type": "Exercise",
  "number": "A.12.5",
  "title": "",
  "body": "       Here we need to finish factoring the denominator: Now we see that the denominator has the following factors:   (linear, single)   (linear, single)   (irreducible quadratic, single)  Hence, the FORM of the partial fraction decomposition is:         "
},
{
  "id": "review-pfd-8-1-8",
  "level": "2",
  "url": "review-pfd-8.html#review-pfd-8-1-8",
  "type": "Exercise",
  "number": "A.12.6",
  "title": "",
  "body": "       Here we need to finish factoring the denominator: Now we see that the denominator has the following factors:   (linear, single)   (linear, single)   (irreducible quadratic, single)  Hence, the FORM of the partial fraction decomposition is:         "
},
{
  "id": "review-pfd-8-1-9",
  "level": "2",
  "url": "review-pfd-8.html#review-pfd-8-1-9",
  "type": "Exercise",
  "number": "A.12.7",
  "title": "",
  "body": "       Here we need to finish factoring the denominator: Now we see that the denominator has the following factors:   (linear, double)   (linear, double)  Hence, the FORM of the partial fraction decomposition is:         "
},
{
  "id": "review-pfd-8-1-10",
  "level": "2",
  "url": "review-pfd-8.html#review-pfd-8-1-10",
  "type": "Exercise",
  "number": "A.12.8",
  "title": "",
  "body": "       Here we need to finish factoring the denominator: Now we see that the denominator has the following factors:   (linear, single)   (linear, single)   (irreducible quadratic, single)  Hence, the FORM of the partial fraction decomposition is:         "
},
{
  "id": "review-pfd-8-1-11",
  "level": "2",
  "url": "review-pfd-8.html#review-pfd-8-1-11",
  "type": "Exercise",
  "number": "A.12.9",
  "title": "",
  "body": "       First, factor the denominator: The denominator has the following factors:   (linear, single)   (linear, single)   (linear, single)  Hence, the FORM of the partial fraction decomposition is:           "
},
{
  "id": "review-pfd-8-1-12",
  "level": "2",
  "url": "review-pfd-8.html#review-pfd-8-1-12",
  "type": "Exercise",
  "number": "A.12.10",
  "title": "",
  "body": "       First, factor the denominator: The denominator has the following factors:   (linear, single)   (linear, single)  Hence, the FORM of the partial fraction decomposition is:           "
},
{
  "id": "review-pfd-8-2-3",
  "level": "2",
  "url": "review-pfd-8.html#review-pfd-8-2-3",
  "type": "Exercise",
  "number": "A.12.11",
  "title": "",
  "body": "       First, factor the denominator: The denominator has the following factors:   (linear, single)   (linear, single)   (linear, single)  Hence, the FORM of the partial fraction decomposition is: Multiply both sides by the common denominator and solve for  and           "
},
{
  "id": "review-pfd-8-2-4",
  "level": "2",
  "url": "review-pfd-8.html#review-pfd-8-2-4",
  "type": "Exercise",
  "number": "A.12.12",
  "title": "",
  "body": "       Since the denominator is already factored, we see that the denominator has the following factors:   (linear, double)   (linear, distinct)  Hence, the FORM of the partial fraction decomposition is: Multiply both sides by the common denominator and solve for  and         "
},
{
  "id": "review-pfd-8-2-5",
  "level": "2",
  "url": "review-pfd-8.html#review-pfd-8-2-5",
  "type": "Exercise",
  "number": "A.12.13",
  "title": "",
  "body": "       Here we need to finish factoring the denominator: Now we see that the denominator has the following factors:   (linear, double)   (linear, double)  Hence, the FORM of the partial fraction decomposition is: Multiply both sides by the common denominator and solve for   and         "
},
{
  "id": "review-pfd-8-2-6",
  "level": "2",
  "url": "review-pfd-8.html#review-pfd-8-2-6",
  "type": "Exercise",
  "number": "A.12.14",
  "title": "",
  "body": "       Here we need to finish factoring the denominator: Now we see that (which is linear), is a factor (three times) of the denominator. Hence, the FORM of the partial fraction decomposition is: Multiply both sides by the common denominator and solve for  and         "
},
{
  "id": "review-pfd-8-2-7",
  "level": "2",
  "url": "review-pfd-8.html#review-pfd-8-2-7",
  "type": "Exercise",
  "number": "A.12.15",
  "title": "",
  "body": "       Here we need to finish factoring the denominator: Now we see that the denominator has the following factors:   (linear, single)   (linear, single)   (irreducible quadratic, single)  Hence, the FORM of the partial fraction decomposition is: Multiply both sides by the common denominator and solve for   and         "
},
{
  "id": "review-pfd-8-2-8",
  "level": "2",
  "url": "review-pfd-8.html#review-pfd-8-2-8",
  "type": "Exercise",
  "number": "A.12.16",
  "title": "",
  "body": "       Here we need to finish factoring the denominator: Now we see that the denominator has the following factors:   (linear, single)   (linear, single)   (irreducible quadratic, single)  Hence, the FORM of the partial fraction decomposition is: Multiply both sides by the common denominator and solve for   and         "
},
{
  "id": "review-pfd-8-2-9",
  "level": "2",
  "url": "review-pfd-8.html#review-pfd-8-2-9",
  "type": "Exercise",
  "number": "A.12.17",
  "title": "",
  "body": "       Here we need to finish factoring the denominator: Now we see that the denominator has the following factors:   (linear, single)   (linear, single)   (irreducible quadratic, single)  Hence, the FORM of the partial fraction decomposition is: Multiply both sides by the common denominator and solve for   and         "
},
{
  "id": "review-pfd-8-2-10",
  "level": "2",
  "url": "review-pfd-8.html#review-pfd-8-2-10",
  "type": "Exercise",
  "number": "A.12.18",
  "title": "",
  "body": "       Here we need to finish factoring the denominator: Now we see that the denominator has the following factors:   (linear, double)   (linear, double)  Hence, the FORM of the partial fraction decomposition is: Multiply both sides by the common denominator and solve for   and         "
},
{
  "id": "review-pfd-8-2-11",
  "level": "2",
  "url": "review-pfd-8.html#review-pfd-8-2-11",
  "type": "Exercise",
  "number": "A.12.19",
  "title": "",
  "body": "       Here we need to finish factoring the denominator: Now we see that the denominator has the following factors:   (linear, single)   (linear, single)   (irreducible quadratic, single)  Hence, the FORM of the partial fraction decomposition is: Multiply both sides by the common denominator and solve for   and         "
},
{
  "id": "review-pfd-8-2-12",
  "level": "2",
  "url": "review-pfd-8.html#review-pfd-8-2-12",
  "type": "Exercise",
  "number": "A.12.20",
  "title": "",
  "body": "              and               "
},
{
  "id": "review-pfd-8-2-13",
  "level": "2",
  "url": "review-pfd-8.html#review-pfd-8-2-13",
  "type": "Exercise",
  "number": "A.12.21",
  "title": "",
  "body": "                  "
},
{
  "id": "review-pfd-8-2-14",
  "level": "2",
  "url": "review-pfd-8.html#review-pfd-8-2-14",
  "type": "Exercise",
  "number": "A.12.22",
  "title": "",
  "body": "                  "
},
{
  "id": "review-pfd-8-2-15",
  "level": "2",
  "url": "review-pfd-8.html#review-pfd-8-2-15",
  "type": "Exercise",
  "number": "A.12.23",
  "title": "",
  "body": "                  "
},
{
  "id": "review-pfd-8-2-16",
  "level": "2",
  "url": "review-pfd-8.html#review-pfd-8-2-16",
  "type": "Exercise",
  "number": "A.12.24",
  "title": "",
  "body": "                  "
},
{
  "id": "review-piecewise-functions",
  "level": "1",
  "url": "review-piecewise-functions.html",
  "type": "Section",
  "number": "A.13",
  "title": "Piecewise Defined Functions",
  "body": " Piecewise Defined Functions   We will encounter piecewise defined functions in differential equations when we think about some physical phenomenon. For example, we might consider the vibration of an airplane wing that is struck by some external object or a circuit that is initially open and then we close the circuit and the current immediately starts flowing. Both of these scenarios would require a piecewise defined function because there is a moment in time when something about the physical system changes.  As such, we need to remember how piecewise defined functions work. Consider the function   If we want to evaluate the function at a particular -value, we use the restrictions on the right to point us to which piece of the function definition we should use. For example, if we want to know , then we look over at that right side and see that 3 falls into the interval so we use the corresponding function, . Thus,   If we want to graph, we also use those restrictions. When , or equivalently when is in the interval we know that the graph of will look like the horizontal line ; on the interval the graph will look like the graph of the parabola ; etc.  In the plots below you can see the entire graphs of the functions, dotted, with a solid segment that will be part of the piecewise function .          Now we are prepared to assemble the pieces and generate the graph of the piecewise-defined function .                     If you'd like more of a review feel free to look at VMI's precalculus text, here   Now you try some.   Sketch each of the following piecewise defined functions.                                   "
},
{
  "id": "review-piecewise-functions-14",
  "level": "2",
  "url": "review-piecewise-functions.html#review-piecewise-functions-14",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Sketch each of the following piecewise defined functions. "
},
{
  "id": "review-recursive-functions",
  "level": "1",
  "url": "review-recursive-functions.html",
  "type": "Section",
  "number": "A.14",
  "title": "Recursive functions",
  "body": " Recursive functions   We often use subscript notation when the function is a recursive function, where we rely on knowing previous values in order to compute the next value, as in the example below. Example: Suppose and   Find the value of  One way to read this definition is: ``To get the next value of --the value at we take 3 times the previous value of --the value at --and then add two. In this example, we know the value of at because we are given that Then we can find the next value of --the value at --as follows:    Find the value of  If we use the formula above, with then we have It looks like we actually need to know the value of ...and it turns out that in order to know the value of we actually need to know the value of ...which requires that we know the value of --which we already found. So here goes:      The bottom line with recursive functions is that if we know we can find and then we can find and so on. But if we want to know for example, we need to know ALL of the previous -values . Side note: You may recall some of this from studying sequences and series in calculus. In calculus we sometimes looked for a pattern so we could avoid having to compute all previous values. That's a great skill, and it might even work for the examples below, but we won't generally be able to do that in differential equations.   Now you try:   Given the definition of a recursive function in subscript notation, find the value of the given term.   If and evaluate         If and evaluate         If and evaluate           "
},
{
  "id": "review-interrelated-functions",
  "level": "1",
  "url": "review-interrelated-functions.html",
  "type": "Section",
  "number": "A.15",
  "title": "Interrelated functions",
  "body": " Interrelated functions   In differential equations, we will encounter functions involving subscripts that are interrelated. Let's look at an example like that.   Example: Suppose: Find the values of and   First we would try to find Notice that when we use the formula, we have   While we do have the values of and we don't yet have the value of So we'll find that first:   Now we have all the information we need to find    Now we proceed in the same manner. First we find    Then we find        Find given the following information about and          Find given the following information about and          Find given the following information about and            "
},
{
  "id": "review-units",
  "level": "1",
  "url": "review-units.html",
  "type": "Section",
  "number": "A.16",
  "title": "Units, Mass, Volume, Concentration",
  "body": " Units, Mass, Volume, Concentration   We're about to start working on applications involving mixing solutions in tanks. That means we need to be mindful of units (for example--we can't add miles and kilograms), mass balance, and volumes. We also can develop some intuition that will be helpful when we tackle more complicated questions.     Consider the equation where is a speed and has units of miles\/hour. The variable represents distance and has units miles. What units must the variable have?   In order to make the unit analysis work, we would need to have units of hours .    hours     Consider the equation where has units of moles\/hour and has units of gallons\/hour. What must the units of be?   In order to make the unit analysis work, we would need to have units of moles\/gallon .    moles\/gallon     Consider the equation where has units of ft lb\/sec, has units of ft, has units of lb\/sec. What must the units of be?   In order to make the unit analysis work, we would need to have units of ft lb\/sec .    ft lb\/sec     Consider the tank below, which has salt water solutions (also called brines) entering via two input lines (A and B) and has one output line (C).       If the tank level does not change, what volumetric flow rate must be leaving via the output line C?   Brine is entering the tank at volumetric flow rate Since the tank level does not change, brine must leave at the same rate, 14 L\/min .    14 L\/min     The concentration (in kg\/L) of salt in each brine solution is shown in the figure. At what rate (in kg\/min) is salt entering the tank?   Salt is entering the tank via inlet A at a rate Similarly, salt enters via inlet B at a rate Altogether, then, salt enters at a rate of 64 kg\/min .    64 kg\/min     Consider the tank below, which has liquid entering via two input lines (A and B) and has one output line (C).       If the tank level does not change, what volumetric flow rate must be entering via the input line B?   Brine is leaving the tank at volumetric flow rate 10 gal\/sec. Inlet A contributes 4 gal\/sec, which means that if the tank level is to remain constant, inlet B must contribute 6 gal\/sec .    6 gal\/sec     The concentration (in lb\/gal) of salt in each brine solution is shown in the figure. Assuming the tank level doesn't change, at what rate (in lb\/sec) is salt entering the tank?   Salt is entering the tank via inlet A at a rate Similarly, salt enters via inlet B at a rate Altogether, then, salt enters at a rate of 26 lb\/sec .    26 lb\/sec     Consider the tank below, which has liquid entering via two input lines (A and B) and has one output line (C).       What happens to the level of the tank over time? Be specific.   Liquid is entering at a rate of 7+10 = 17 L\/min. It leaves at a rate of 12 L\/min. That means that the amount of liquid in the tank increases at a rate of 5 L\/min.    increases (volume increases at a rate of 5 L\/min)     If the tank has a capacity of 1500 L, and is empty at time minutes, write a function for volume of liquid in the tank at time minutes.   Since the amount of liquid in the tank increases at a rate of 5 L\/min, we have Since the capacity of the tank is 1500 L, this equation only works for minutes.          Consider the tank below, which has liquid entering via one input line (A) and is drained via one output line (B).       Suppose the tank initially contains 50 L of water that is dark red due to food coloring and that the liquid entering the tank is pure water. Imagine that we allow the pure water to enter the tank and the mixed solution to drain out of the tank for a really long time; you can think about it happening for years, if it helps. What color would you expect the water in the tank to be after a really long time?   Over time we would expect that the water in the tank is almost identical to the incoming fluid. Therefore, we expect the tank be clear (i.e., pure water).    clear (i.e., pure water)     Suppose the tank initially contains 50 L of pure water and that the liquid entering the tank is water that is dark red due to food coloring. Imagine that we allow the dark red water to enter the tank and the mixed solution to drain out of the tank for a really long time; you can think about it happening for years, if it helps. What color would you expect the water in the tank to be after a really long time?   Over time we would expect that the water in the tank is almost identical to the incoming fluid. Therefore, we expect the tank to have dark red water--the same as the incoming water.    dark red (same as incoming water)     Consider the tank below, which has liquid entering via an input line (A) and is drained via one output line (B).   Suppose the tank initially contains 50 gallons of a salt water solution (also called a brine) with concentration 6 lb\/gal, and that the liquid entering the tank is pure water.    How much salt is initially in the tank?   Initially we have     300 lb     Imagine that we allow the pure water to enter the tank and the mixed solution to drain out of the tank for a really long time; you can think about it happening for years, if it helps. What concentration of salt do you expect there to be in the tank after a long time?   Initially we have salt in the tank, but over time, no salt is added but the solution is drained, so more and more salt leaves the tank. Over time we would expect that the concentration of salt would decrease to 0 lb\/gal .    0 lb\/gal     How much salt do you expect to be in the tank after a long time? (Note that this is a slightly different question than the previous question.)    Consider the tank below, which has liquid entering via one input line (A) and is drained via one output line (B).   Suppose the tank initially contains 50 L of a brine with concentration 6 kg\/L, and that the liquid entering the tank is a brine with concentration 8 kg\/L.    Imagine that we allow the brine to enter the tank and the mixed solution to drain out of the tank for a really long time; you can think about it happening for years, if it helps. What concentration of salt do you expect there to be in the tank after a long time?   Over time we would expect that the fluid in the tank is almost identical to the incoming fluid. Therefore, we expect the concentration of salt to be 8 kg\/L .    8 kg\/L     How much salt do you expect to be in the tank after a long time? (Note that this is a slightly different than asking about the concentration of salt. Hint: use units!)   Since we expect the concentration to be 8 kg\/L, and there are 50 L of solution in the tank (which doesn't change because the volumetric flow rate in is equal to the volumetric flow rate out), then we expect there will be     400 kg      "
},
{
  "id": "review-units-4",
  "level": "2",
  "url": "review-units.html#review-units-4",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "hours moles\/gallon ft lb\/sec 14 L\/min 64 kg\/min 6 gal\/sec 26 lb\/sec really really 0 lb\/gal 8 kg\/L "
},
{
  "id": "calculus-review-limts",
  "level": "1",
  "url": "calculus-review-limts.html",
  "type": "Section",
  "number": "B.1",
  "title": "Limits at infinity",
  "body": " Limits at infinity   I know. You thought your Calculus 1 instructor was crazy for spending sooooooo long on limits, especially when you were convinced you would never, ever use them, and now here they are again!   In this section, we'll focus our attention on limits at infinity. If you want a refresher, check out your Calculus 1 book (available online--just search for \"APEX calculus\".   Evaluate each of the following limits.    The limit of a constant is the constant, so          where is a constant  The limit of a constant is the constant, so            As increases to large positive values, the value of also increases to large positive values. Therefore            As increases to large positive values, the value of also increases to large positive values. Therefore            As increases to large positive values, the value of decreases to zero. Therefore             For what values of is the limit finite?  Hopefully you thought a little bit about this as you answered the previous question. If you think about it for a little bit, you'll come to realize that:  If then so .  If is negative, then as increases to large positive values, the value of decreases to zero. Therefore   Hence, the limit finite when .          Evaluate each of the following limits.                 where is a constant and                 where is a constant and .                where is a constant and .                where is a constant and                 where is a constant and                 where is a constant and .                  "
},
{
  "id": "calculus-review-lhopitals-rule",
  "level": "1",
  "url": "calculus-review-lhopitals-rule.html",
  "type": "Section",
  "number": "B.2",
  "title": "L’Hospital’s Rule",
  "body": " L'Hospital's Rule  Consider the following three limits. Typically when we evaluate limits, we first attempt a direct substitution. Note that all three evaluate to the indeterminant form . Since these are all rational functions, we have some algebraic techniques we can try. Here's one way each can be evaluated.  Is this result surprising to you? Each had the same value, , when we did direct substitution, but each has a different final answer. That's what it means to be indeterminant. we can't tell what the answer is just based on knowing that direct substitution yields .  We can do algebra when we have rational functions, but that doesn't work as well when we have exponential and trig functions. One technique you might consider using when you have indeterminant forms like or is L'Hospital's Rule. Here's a reminder.   L'Hospital's Rule. Suppose and are differentiable functions and we want to evaluate If direct substitution yields an indeterminant form or then assuming that the limit exists.    Here's how it works for one of the limits above. Recall that we MUST check to make sure that the limit is one of those indeterminant forms before we use L'Hospital's Rule. (And note that we did get the same answer we got before...which is good!)  If you want a more complete discussion and some examples, you can find more in your Calculus 1 book, which is available for free online (just search for \"APEX calculus\").   Evaluate each of the following limits. Use L'Hospital's Rule only if it applies.                                           where is a constant and               "
},
{
  "id": "calculus-review-lhopitals-rule-6",
  "level": "2",
  "url": "calculus-review-lhopitals-rule.html#calculus-review-lhopitals-rule-6",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Evaluate each of the following limits. Use L'Hospital's Rule only if it applies. "
},
{
  "id": "calculus-review-differentiation",
  "level": "1",
  "url": "calculus-review-differentiation.html",
  "type": "Section",
  "number": "B.3",
  "title": "Differentiation",
  "body": " Differentiation  Throughout the DEs course, we will be differentiating AND integrating. Let's review a few common rules used for differentiation.  Product Rule:    Quotient Rule:    Chain Rule:     Consider the following example.   Find the derivative of  We have a product of functions, so we will need to use the product rule. We also have a composition of functions because is inside of an sine function, so we will need to use the chain rule. Here's how it works.    Now you try.   Find the indicated derivatives.       Solution                                    "
},
{
  "id": "rr_derivative_review",
  "level": "2",
  "url": "calculus-review-differentiation.html#rr_derivative_review",
  "type": "🌌 Example",
  "number": "59",
  "title": "Find the derivative of <span class=\"process-math\">\\(h(x) = (x^5 + 4)\\sin(e^x)\\)<\/span>.",
  "body": " Find the derivative of  We have a product of functions, so we will need to use the product rule. We also have a composition of functions because is inside of an sine function, so we will need to use the chain rule. Here's how it works.   "
},
{
  "id": "calculus-review-differentiation-6",
  "level": "2",
  "url": "calculus-review-differentiation.html#calculus-review-differentiation-6",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Find the indicated derivatives. "
},
{
  "id": "calculus-review-product-rule",
  "level": "1",
  "url": "calculus-review-product-rule.html",
  "type": "Section",
  "number": "B.4",
  "title": "Product Rule",
  "body": " Product Rule  The next technique for solving DEs we will study relies heavily on you knowing the Product Rule for differentiation inside and out, forward and backward (literally!). These problems are intended to help you review the Product Rule. (Don't forget about the chain rule, too!) Let's warm up by practicing using the product rule.   Write down the product rule.   Evaluate the following derivatives.                                          Suppose is a function of and use the product rule to rewrite the following:            Suppose is a function of and use the product rule to rewrite the following:            Now let's look at the product rule \"in the other direction\"... Or we can think about this as \"un-doing\" the product rule.  For example, if we have the expression then we can see that if we think identify as then Then we might label the expression as follows: This now looks like the result of having taken the derivative of a product. That is:   Now you try some.  Rewrite each of the following as the derivative of a product:                             Compute the derivative of the function         "
},
{
  "id": "calculus-review-product-rule-8",
  "level": "2",
  "url": "calculus-review-product-rule.html#calculus-review-product-rule-8",
  "type": "Checkpoint",
  "number": "60",
  "title": "",
  "body": " Compute the derivative of the function        "
},
{
  "id": "calculus-review-usub",
  "level": "1",
  "url": "calculus-review-usub.html",
  "type": "Section",
  "number": "B.5",
  "title": "<span class=\"process-math\">\\(u\\)<\/span>-substitution",
  "body": " -substitution  When an antiderivative is not immediately obvious, we sometimes use a substitution. Substitution is a good choice when we have one part of the integrand \"looks like\" the derivative of another part of the integrand.  Here, \"looks like\" means equal, except for a multiplication of a constant. For example, we might say   \"looks like\" or  \"looks like\"     Let's look a a few examples   Compute  Since the derivative of is which \"looks like\" , then -substitution (with ) works well. Note, would also work.               Compute  Substitution is a good choice here because we have a natural log function and we have which is the derivative of natural log. So we would choose          We usually pause to confirm that the new integral is simpler than the original. In this case it certainly is, so we proceed to integrate and then change back to the original variable, .   Now you try some.  Evaluate each of the following integrals. Use proper notation.     We will choose Then Therefore we have:            We will choose Then and therefore Thus we have:            We will choose Then and therefore Thus we have:            "
},
{
  "id": "r-01-02-usub_ex_01",
  "level": "2",
  "url": "calculus-review-usub.html#r-01-02-usub_ex_01",
  "type": "🌌 Example",
  "number": "61",
  "title": "Compute <span class=\"process-math\">\\(\\ds \\int \\, \\cos x\\sin x \\ dx\\)<\/span>.",
  "body": " Compute  Since the derivative of is which \"looks like\" , then -substitution (with ) works well. Note, would also work.             "
},
{
  "id": "r-01-02-usub_ex_02",
  "level": "2",
  "url": "calculus-review-usub.html#r-01-02-usub_ex_02",
  "type": "🌌 Example",
  "number": "62",
  "title": "Compute <span class=\"process-math\">\\(\\ds \\int \\frac{1}{x}\\cdot \\ln(15x) dx\\)<\/span>.",
  "body": " Compute  Substitution is a good choice here because we have a natural log function and we have which is the derivative of natural log. So we would choose          We usually pause to confirm that the new integral is simpler than the original. In this case it certainly is, so we proceed to integrate and then change back to the original variable, .  "
},
{
  "id": "calculus-review-usub-8",
  "level": "2",
  "url": "calculus-review-usub.html#calculus-review-usub-8",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Evaluate each of the following integrals. Use proper notation. "
},
{
  "id": "breakdown-of-formula",
  "level": "1",
  "url": "breakdown-of-formula.html",
  "type": "Subsubsection",
  "number": "",
  "title": "Breaking Down the Integration by Parts Formula",
  "body": " Breaking Down the Integration by Parts Formula  Let's break down the formula for integration by parts: .  Here's how it works:   is a function that you choose to differentiate (it should get simpler when differentiated).  is a part of the integrand that you choose to integrate (it should get easier when integrated).  is the new term after applying the product of and the integral of .  is the remaining integral, now simpler than the original.   "
},
{
  "id": "integration-by-parts-example",
  "level": "1",
  "url": "integration-by-parts-example.html",
  "type": "Subsubsection",
  "number": "",
  "title": "Example: Applying Integration by Parts",
  "body": " Example: Applying Integration by Parts  Consider the integral: .  We'll apply integration by parts, following these steps:    Step 1:  Identify and . In this case, we choose and . This makes and .    Step 2:  Step 2: Substitute into the integration by parts formula: .    Step 3:  Step 3: Solve the remaining integral: .    Step 4:  Step 4: Combine the results: .    And that's the final result: .  "
},
{
  "id": "analogy-for-laplace",
  "level": "1",
  "url": "analogy-for-laplace.html",
  "type": "Subsubsection",
  "number": "",
  "title": "Laplace Transform and Integration by Parts: An Analogy",
  "body": " Laplace Transform and Integration by Parts: An Analogy  When applying the Laplace Transform, think of it as a way of \"unwrapping\" the derivatives of a function. Just like how you can redistribute \"work\" between functions using integration by parts, the Laplace Transform temporarily converts a differential equation into an algebraic one, allowing you to solve it more easily.  Once the problem is solved in the transformed space, we can \"repackage\" the function by applying the inverse Laplace Transform, revealing the solution in its original form.  "
},
{
  "id": "calculus-review-improper-integrals",
  "level": "1",
  "url": "calculus-review-improper-integrals.html",
  "type": "Section",
  "number": "B.7",
  "title": "Improper Integrals",
  "body": " Improper Integrals  There are two types of improper integrals; the only type we'll be looking at in differential equations are the type where the upper limit of the integral is infinity. When we see improper integrals, we re-write the integral as a limit as follows. We don't have to use for the placeholder in the limit, but we shouldn't use any of the variables that is already in the integrand; in the above, we should not use or . Once we've written the improper integral as a limit, we integrate and use the fundamental theorem of calculus, keeping the limit as we go, and we evaluate the limit at the very end. Here's an example.   Compute      If you want more of a refresher, check out your Calculus 2 book (available online-- just search for \"APEX calculus\").   Evaluate the following integrals. Use proper limit notation.                 , where is a constant and               "
},
{
  "id": "ex_improper_integral_01",
  "level": "2",
  "url": "calculus-review-improper-integrals.html#ex_improper_integral_01",
  "type": "🌌 Example",
  "number": "64",
  "title": "Compute <span class=\"process-math\">\\(\\int_1^{\\infty} \\frac{1}{x^2}dx\\)<\/span>.",
  "body": " Compute     "
},
{
  "id": "backmatter-4",
  "level": "1",
  "url": "backmatter-4.html",
  "type": "Appendix",
  "number": "C",
  "title": "Notation",
  "body": " Notation   The following table defines the notation used in this book. Page numbers or references refer to the first appearance of each symbol.   "
},
{
  "id": "backmatter-5",
  "level": "1",
  "url": "backmatter-5.html",
  "type": "Appendix",
  "number": "D",
  "title": "Solutions to Selected Exercises",
  "body": " Solutions to Selected Exercises   "
},
{
  "id": "quick-ref-basics",
  "level": "1",
  "url": "quick-ref-basics.html",
  "type": "Subsubsection",
  "number": "",
  "title": "Basics",
  "body": "Basics  Key Terms & Concepts   ✳️ Differential Equations and their Components    Differential Equation (DE)  An equation that involves one or more derivatives of an unknown function.   Variables  The dependent variable represents the unknown function that you are solving for and always has derivatives applied to it. The dependent variable is a function of the independent variable . In , dependent & independent .   Terms & Free Terms  Parts of an equation separated by , , or and each containing a different form of the dependent variable. The collection of all terms without a dependent variable is referred to as a free term .    Coefficients  The part of a term multiplied by the dependent variable or its derivatives.        ✳️ Order & Linearity    Order  The highest order derivative present in a DE.   Linear Term  A term of the form:   ,  where is the dependent variable, and is a coefficient that depends only on the independent variable .   Linear DE  A DE composed entirely of linear terms.   Nonlinear DE  A DE that contains at least one nonlinear term.       "
},
{
  "id": "quick-ref-basics-2-2-2",
  "level": "2",
  "url": "quick-ref-basics.html#quick-ref-basics-2-2-2",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "dependent variable independent variable free term "
},
{
  "id": "formula-sheets",
  "level": "1",
  "url": "formula-sheets.html",
  "type": "Section",
  "number": "E.2",
  "title": "Formula Sheets",
  "body": " Formula Sheets  "
},
{
  "id": "backmatter-7",
  "level": "1",
  "url": "backmatter-7.html",
  "type": "Appendix",
  "number": "F",
  "title": "Selected Hints",
  "body": " Selected Hints  "
},
{
  "id": "backmatter-8",
  "level": "1",
  "url": "backmatter-8.html",
  "type": "Appendix",
  "number": "G",
  "title": "Selected Solutions",
  "body": " Selected Solutions  "
},
{
  "id": "backmatter-9",
  "level": "1",
  "url": "backmatter-9.html",
  "type": "Appendix",
  "number": "H",
  "title": "List of Symbols",
  "body": " List of Symbols    DE implies ODE  Since this text only covers ordinary differential equations, any use of DE will always imply ODE .   Derivative Notation  We will use the following notations for derivatives:     Derivative Order     1st  2nd  3rd  4th   nth    Prime          Leibniz            "
},
{
  "id": "backmatter-10",
  "level": "1",
  "url": "backmatter-10.html",
  "type": "Index",
  "number": "",
  "title": "Index",
  "body": " Index   "
},
{
  "id": "backmatter-11",
  "level": "1",
  "url": "backmatter-11.html",
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
