var ptx_lunr_search_style = "textbook";
var ptx_lunr_docs = [
{
  "id": "main-3-3-2",
  "level": "1",
  "url": "main-3-3-2.html",
  "type": "Subsection",
  "number": "1.1.1",
  "title": "Linearity",
  "body": "Linearity  Recognizing the distinction between linear and nonlinear differential equations is crucial. The linearity of terms naturally leads to the general concept of linearity, and the previous section has equipped us well for this important task.   A differential equation is linear if it contains only linear terms. That is, it can be written as If one of the terms is not linear, then the differential equation is nonlinear .   This definition may seem a bit overwhelming, but it is intended to represent all possible linear differential equations. As the examples will show, most equations you encounter will only have a few terms and our approach will be to find just one of them that is not linear. If we can't, then the equation is linear.   Determine if the following differential equation is linear.  .  To answer this question, we need either to verify that all the terms are linear or find one term that is not linear. Let's rewrite this equation like and check each term one-by-one. Since every term is linear, this differential equation is linear.    Check your Understanding   Linear or Nonlinear?   The differential equation, , is    Linear   Yes! This DE is linear.    Non-Linear  No, this is linear. Looking carefully at each term, we see Since every term is linear, this differential equation is linear.     Linear or Nonlinear?   The differential equation, , is    Linear  No, this is nonlinear. Looking carefully at each term, we see Since one term is not linear, this differential equation is nonlinear.   Non-Linear  Yes! This DE is nonlinear since the term is not linear.     Select the Linear Differential Equations (part 1)  Click on all of the linear differential equations.                 Remember that a linear differential equation contains only linear terms. Four of these equations are linear.    Select the Linear Differential Equations (part 2)  Click on all of the linear differential equations.                       First identify the dependent variable, then carefully look at each term to determine if it is linear.    "
},
{
  "id": "def-linear",
  "level": "2",
  "url": "main-3-3-2.html#def-linear",
  "type": "Definition",
  "number": "1.1",
  "title": "",
  "body": " A differential equation is linear if it contains only linear terms. That is, it can be written as If one of the terms is not linear, then the differential equation is nonlinear .  "
},
{
  "id": "main-3-3-2-5",
  "level": "2",
  "url": "main-3-3-2.html#main-3-3-2-5",
  "type": "Example",
  "number": "1.2",
  "title": "",
  "body": " Determine if the following differential equation is linear.  .  To answer this question, we need either to verify that all the terms are linear or find one term that is not linear. Let's rewrite this equation like and check each term one-by-one. Since every term is linear, this differential equation is linear.   "
},
{
  "id": "main-3-3-2-6-2",
  "level": "2",
  "url": "main-3-3-2.html#main-3-3-2-6-2",
  "type": "Reading Question",
  "number": "1.1.1.1",
  "title": "<em class=\"emphasis\">Linear or Nonlinear?<\/em>",
  "body": " Linear or Nonlinear?   The differential equation, , is    Linear   Yes! This DE is linear.    Non-Linear  No, this is linear. Looking carefully at each term, we see Since every term is linear, this differential equation is linear.   "
},
{
  "id": "main-3-3-2-6-3",
  "level": "2",
  "url": "main-3-3-2.html#main-3-3-2-6-3",
  "type": "Reading Question",
  "number": "1.1.1.2",
  "title": "<em class=\"emphasis\">Linear or Nonlinear?<\/em>",
  "body": " Linear or Nonlinear?   The differential equation, , is    Linear  No, this is nonlinear. Looking carefully at each term, we see Since one term is not linear, this differential equation is nonlinear.   Non-Linear  Yes! This DE is nonlinear since the term is not linear.   "
},
{
  "id": "main-3-3-2-6-4",
  "level": "2",
  "url": "main-3-3-2.html#main-3-3-2-6-4",
  "type": "Reading Question",
  "number": "1.1.1.3",
  "title": "<em class=\"emphasis\">Select the Linear Differential Equations (part 1)<\/em>.",
  "body": " Select the Linear Differential Equations (part 1)  Click on all of the linear differential equations.                 Remember that a linear differential equation contains only linear terms. Four of these equations are linear.  "
},
{
  "id": "main-3-3-2-6-5",
  "level": "2",
  "url": "main-3-3-2.html#main-3-3-2-6-5",
  "type": "Reading Question",
  "number": "1.1.1.4",
  "title": "<em class=\"emphasis\">Select the Linear Differential Equations (part 2)<\/em>.",
  "body": " Select the Linear Differential Equations (part 2)  Click on all of the linear differential equations.                       First identify the dependent variable, then carefully look at each term to determine if it is linear.  "
},
{
  "id": "main-3-4",
  "level": "1",
  "url": "main-3-4.html",
  "type": "Section",
  "number": "1.2",
  "title": "Solutions",
  "body": "Solutions   "
},
{
  "id": "main-4-3",
  "level": "1",
  "url": "main-4-3.html",
  "type": "Section",
  "number": "2.1",
  "title": "Direct Integration",
  "body": "Direct Integration   "
},
{
  "id": "main-4-4",
  "level": "1",
  "url": "main-4-4.html",
  "type": "Section",
  "number": "2.2",
  "title": "Separation of Variables",
  "body": "Separation of Variables   "
},
{
  "id": "main-4-5",
  "level": "1",
  "url": "main-4-5.html",
  "type": "Section",
  "number": "2.3",
  "title": "Integrating Factor",
  "body": "Integrating Factor   "
},
{
  "id": "main-5-3-3",
  "level": "1",
  "url": "main-5-3-3.html",
  "type": "Subsection",
  "number": "3.1.1",
  "title": "Classification",
  "body": "Classification  As mentioned earlier, LHCC equations are linear homogeneous differential equations with constant coefficients. To keep things simple, we call them LHCC equations. But how do we recognize them? Let's break down the tags: linear , homogeneous , and constant coefficients .  A linear differential equation looks like this: If the constant term is zero, then the equation is homogeneous . If all the coefficients are constants (i.e., numbers), then it has constant coefficients . Let's combine these ideas in a formal definition.  LHCC Equation   A linear homogeneous differential equation with constant coefficients (LHCC) has the form   where are constants.    Let's practice identifying these equations with a few examples.    Which of the linear differential equations below are homogeneous?     The trick is to check if the constant term is zero. Rewrite each equation with the constant term on the right:   . The first and last equations are homogeneous.      Which of the linear differential equations have constant coefficients?     Check if each coefficient is constant:   . Only the second equation has constant coefficients.    Check your Understanding  Match the Label to the DE  Match each label on the left to an appropriate DE on the right.  Key: L = linear, H = homogeneous, CC = constant coefficient    CC     LH, order 1     LHCC     LH, order 2     LCC     L     Multiple matches can be correct, but there is only one perfect matching where all are correct.   Select the LHCC Equations  Select all of the linear homogeneous differential equations with constant coefficients.                                       There are only 4 LHCC equations in this set.    "
},
{
  "id": "main-5-3-3-3",
  "level": "2",
  "url": "main-5-3-3.html#main-5-3-3-3",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "homogeneous constant coefficients "
},
{
  "id": "def-lhcc",
  "level": "2",
  "url": "main-5-3-3.html#def-lhcc",
  "type": "Definition",
  "number": "3.1",
  "title": "LHCC Equation.",
  "body": "LHCC Equation   A linear homogeneous differential equation with constant coefficients (LHCC) has the form   where are constants.   "
},
{
  "id": "main-5-3-3-6",
  "level": "2",
  "url": "main-5-3-3.html#main-5-3-3-6",
  "type": "Example",
  "number": "3.2",
  "title": "",
  "body": "  Which of the linear differential equations below are homogeneous?     The trick is to check if the constant term is zero. Rewrite each equation with the constant term on the right:   . The first and last equations are homogeneous.   "
},
{
  "id": "main-5-3-3-7",
  "level": "2",
  "url": "main-5-3-3.html#main-5-3-3-7",
  "type": "Example",
  "number": "3.3",
  "title": "",
  "body": "  Which of the linear differential equations have constant coefficients?     Check if each coefficient is constant:   . Only the second equation has constant coefficients.   "
},
{
  "id": "label-matching",
  "level": "2",
  "url": "main-5-3-3.html#label-matching",
  "type": "Reading Question",
  "number": "3.1.1.1",
  "title": "Match the Label to the DE.",
  "body": "Match the Label to the DE  Match each label on the left to an appropriate DE on the right.  Key: L = linear, H = homogeneous, CC = constant coefficient    CC     LH, order 1     LHCC     LH, order 2     LCC     L     Multiple matches can be correct, but there is only one perfect matching where all are correct.  "
},
{
  "id": "main-5-3-3-8-3",
  "level": "2",
  "url": "main-5-3-3.html#main-5-3-3-8-3",
  "type": "Reading Question",
  "number": "3.1.1.2",
  "title": "Select the LHCC Equations.",
  "body": "Select the LHCC Equations  Select all of the linear homogeneous differential equations with constant coefficients.                                       There are only 4 LHCC equations in this set.  "
},
{
  "id": "main-5-3-4",
  "level": "1",
  "url": "main-5-3-4.html",
  "type": "Subsection",
  "number": "3.1.2",
  "title": "General Solutions",
  "body": "General Solutions  Our goal is to solve LHCC equations . Before diving into solutions, let's develop some intuition.  Recall from calculus the function whose derivative is itself. If you thought of , you're right! This can be framed as a differential equation: find the function such that . The solution is , but it's also true that for any constant . Now, consider a function whose derivative is a multiple of itself, like . You might think of . If this isn't obvious, you can solve using separation of variables to find .  This leads us to an important concept: Property of the Exponential Function     is the only function whose derivative is a multiple of itself.   and its derivatives are like terms that can be combined.    Most functions change fundamentally when differentiated and do not yield like terms that can be combined. For example, the derivative of is , which cannot be combined or simplified in the same way. However, and its derivative can be added together as .  Going back to the LHCC equation, , the right-hand side is zero, so the left-hand side must sum to zero after substituting . This can only happen if the solution and its derivatives combine to cancel each other out. However, the only possible functions that can be substituted for are ones that contain .  Let's look at a concrete example to illustrate why simplifies nicely in these equations, while other functions may not.    Consider the LHCC equation:   Verify that is a solution, but and are not.    Let's check each function:             Of these three, only is a solution.    This example shows that is best suited for LHCC equations, but it doesn't tell the whole story. In some cases, if is a solution, then it is possible that could also be a solution.  The takeaway from this section should be that solutions to LHCC equations must involve , but not every value of works. In the next section, we will see that the key to finding the general solution lies in finding the values of that correspond to solutions.  Check your Understanding  is the only function whose derivative is a multiple of itself  True Correct!  False Incorrect.   and its derivatives are \"like terms\" that can be combined  True Correct!  False Incorrect.   The hundredth derivative of is equal to a constant times   True Correct!  False Incorrect.   Without solving it, which function satisfies the property ?      Incorrect.       Correct! The derivative of is times itself.       Incorrect.       Incorrect.     "
},
{
  "id": "main-5-3-4-7",
  "level": "2",
  "url": "main-5-3-4.html#main-5-3-4-7",
  "type": "Example",
  "number": "3.4",
  "title": "",
  "body": "  Consider the LHCC equation:   Verify that is a solution, but and are not.    Let's check each function:             Of these three, only is a solution.   "
},
{
  "id": "main-5-3-4-10-2",
  "level": "2",
  "url": "main-5-3-4.html#main-5-3-4-10-2",
  "type": "Reading Question",
  "number": "3.1.2.1",
  "title": "<span class=\"process-math\">\\(e^{rx} \\)<\/span> is the only function whose derivative is a multiple of itself.",
  "body": "is the only function whose derivative is a multiple of itself  True Correct!  False Incorrect.  "
},
{
  "id": "main-5-3-4-10-3",
  "level": "2",
  "url": "main-5-3-4.html#main-5-3-4-10-3",
  "type": "Reading Question",
  "number": "3.1.2.2",
  "title": "<span class=\"process-math\">\\(e^{rx} \\)<\/span> and its derivatives are \"like terms\" that can be combined.",
  "body": "and its derivatives are \"like terms\" that can be combined  True Correct!  False Incorrect.  "
},
{
  "id": "main-5-3-4-10-4",
  "level": "2",
  "url": "main-5-3-4.html#main-5-3-4-10-4",
  "type": "Reading Question",
  "number": "3.1.2.3",
  "title": "The hundredth derivative of <span class=\"process-math\">\\(e^{7x} \\)<\/span> is equal to a constant times <span class=\"process-math\">\\(e^{7x} \\)<\/span>.",
  "body": "The hundredth derivative of is equal to a constant times   True Correct!  False Incorrect.  "
},
{
  "id": "main-5-3-4-10-5",
  "level": "2",
  "url": "main-5-3-4.html#main-5-3-4-10-5",
  "type": "Reading Question",
  "number": "3.1.2.4",
  "title": "Without solving it, which function satisfies the property <span class=\"process-math\">\\(y' = -2y \\text{?}\\)<\/span>",
  "body": "Without solving it, which function satisfies the property ?      Incorrect.       Correct! The derivative of is times itself.       Incorrect.       Incorrect.   "
},
{
  "id": "main-5-3-5",
  "level": "1",
  "url": "main-5-3-5.html",
  "type": "Subsection",
  "number": "3.1.3",
  "title": "Characteristic Equation",
  "body": "Characteristic Equation  The previous section showed us that solutions to LHCC equations involve terms. We will now build on this idea by showing that every LHCC equation is associated with another equation that allows us to find the specific -values that give us our solutions. Let's explore this by looking at a few concrete examples, starting the equation , Now, imagine we wanted verify that is a solution to this equation. To do this, we plug it into the equation and see if it leads to . In this case, we get , which shows that the left-side must also be , but this only happens for specific -values. To find them, we note that is never zero, and solve , showing that is a solution.  Now, let's consider a second order equation, say . Plugging into this equation, we have Again, is never zero, so we must have . Solving this quadratic equation gives and , yielding the solutions and .  Regardless of the order, every LHCC equation can be approached in a similar way. To help us with the general equation, observe how each derivative of adds a multiple of (by the chain rule). In particular, . We are now ready to plug into the general LHCC equation : . Following the same pattern as before, we get the -values we need by solving . This polynomial equation that gives us the -values we need to write down our solutions is referred to as the characteristic equation .   LHCC Characteristic Equation    The characteristic equation of a linear homogeneous differential equations with constant coefficients is given by the -th degree polynomial equation  .    Give the characteristic equation of the differential equation         Check your Understanding  Verifying as a solution True or False: To verify that is a solution to , we substitute it into the differential equation and simplify.   True  Correct! Substituting into the differential equation helps verify the solution.    False  Incorrect. This is the correct method to verify the solution.    Characteristic equation for first-order LHCC What is the characteristic equation for ?    Correct! The characteristic equation is .     Incorrect. Check the sign of the coefficient of .     Incorrect. The characteristic equation for a first-order LHCC is linear, not quadratic.     Incorrect. Make sure to use the correct coefficients from the original equation.    Characteristic equation for second-order LHCC What is the characteristic equation for ?    Correct! The characteristic equation is .     Incorrect. Ensure the correct coefficients are used.     Incorrect. Check the signs of the coefficients.     Incorrect. Make sure to include all terms.    Roots of the characteristic equation What are the roots of the characteristic equation ?   and  Correct! The roots are and .    and  Incorrect. Check the signs of the roots.    and  Incorrect. Ensure you solve the quadratic equation correctly.    and  Incorrect. Revisit the quadratic formula to solve for the roots.    General solution for second-order LHCC What is the general solution for ?    Correct! The general solution is .     Incorrect. Check the signs of the exponents.     Incorrect. Make sure to use the correct roots.     Incorrect. Revisit the roots of the characteristic equation.    Understanding the characteristic equation True or False: The characteristic equation is a polynomial equation whose roots give the -values for the solutions of the LHCC equation.   True  Correct! The roots of the characteristic equation provide the -values for the solutions.    False  Incorrect. This statement is true.    General form of the characteristic equation What is the general form of the characteristic equation for an -th order LHCC equation?    Incorrect. Ensure the highest power of is correct.     Correct! The characteristic equation is a polynomial equation of degree .     Incorrect. Ensure all terms involving are included.     Incorrect. Ensure the powers of decrease correctly.    Match the Differential Equation to its Characteristic Equation  Match each differential equation on the left to its characteristic equation on the right.                        Characteristic equation for third-order LHCC What is the characteristic equation for ?    Correct! The characteristic equation is .     Incorrect. Check the signs of the coefficients.     Incorrect. Ensure all terms are included correctly.     Incorrect. Make sure to include all terms.    Solving the characteristic equation If the characteristic equation for an LHCC equation is , what are the roots?   (double root)  Correct! The root has a multiplicity of 2.     Incorrect. Check the quadratic equation carefully.    and  Incorrect. Ensure you solve the quadratic equation correctly.     Incorrect. These are not the correct roots for this equation.     "
},
{
  "id": "def-characteristic-equation",
  "level": "2",
  "url": "main-5-3-5.html#def-characteristic-equation",
  "type": "Definition",
  "number": "3.5",
  "title": "<em class=\"emphasis\">LHCC Characteristic Equation<\/em>.",
  "body": " LHCC Characteristic Equation    The characteristic equation of a linear homogeneous differential equations with constant coefficients is given by the -th degree polynomial equation  .  "
},
{
  "id": "main-5-3-5-6",
  "level": "2",
  "url": "main-5-3-5.html#main-5-3-5-6",
  "type": "Example",
  "number": "3.6",
  "title": "",
  "body": " Give the characteristic equation of the differential equation        "
},
{
  "id": "main-5-3-5-7-2",
  "level": "2",
  "url": "main-5-3-5.html#main-5-3-5-7-2",
  "type": "Reading Question",
  "number": "3.1.3.1",
  "title": "Verifying <span class=\"process-math\">\\(y = e^{rx}\\)<\/span> as a solution.",
  "body": "Verifying as a solution True or False: To verify that is a solution to , we substitute it into the differential equation and simplify.   True  Correct! Substituting into the differential equation helps verify the solution.    False  Incorrect. This is the correct method to verify the solution.   "
},
{
  "id": "main-5-3-5-7-3",
  "level": "2",
  "url": "main-5-3-5.html#main-5-3-5-7-3",
  "type": "Reading Question",
  "number": "3.1.3.2",
  "title": "Characteristic equation for first-order LHCC.",
  "body": "Characteristic equation for first-order LHCC What is the characteristic equation for ?    Correct! The characteristic equation is .     Incorrect. Check the sign of the coefficient of .     Incorrect. The characteristic equation for a first-order LHCC is linear, not quadratic.     Incorrect. Make sure to use the correct coefficients from the original equation.   "
},
{
  "id": "main-5-3-5-7-4",
  "level": "2",
  "url": "main-5-3-5.html#main-5-3-5-7-4",
  "type": "Reading Question",
  "number": "3.1.3.3",
  "title": "Characteristic equation for second-order LHCC.",
  "body": "Characteristic equation for second-order LHCC What is the characteristic equation for ?    Correct! The characteristic equation is .     Incorrect. Ensure the correct coefficients are used.     Incorrect. Check the signs of the coefficients.     Incorrect. Make sure to include all terms.   "
},
{
  "id": "main-5-3-5-7-5",
  "level": "2",
  "url": "main-5-3-5.html#main-5-3-5-7-5",
  "type": "Reading Question",
  "number": "3.1.3.4",
  "title": "Roots of the characteristic equation.",
  "body": "Roots of the characteristic equation What are the roots of the characteristic equation ?   and  Correct! The roots are and .    and  Incorrect. Check the signs of the roots.    and  Incorrect. Ensure you solve the quadratic equation correctly.    and  Incorrect. Revisit the quadratic formula to solve for the roots.   "
},
{
  "id": "main-5-3-5-7-6",
  "level": "2",
  "url": "main-5-3-5.html#main-5-3-5-7-6",
  "type": "Reading Question",
  "number": "3.1.3.5",
  "title": "General solution for second-order LHCC.",
  "body": "General solution for second-order LHCC What is the general solution for ?    Correct! The general solution is .     Incorrect. Check the signs of the exponents.     Incorrect. Make sure to use the correct roots.     Incorrect. Revisit the roots of the characteristic equation.   "
},
{
  "id": "main-5-3-5-7-7",
  "level": "2",
  "url": "main-5-3-5.html#main-5-3-5-7-7",
  "type": "Reading Question",
  "number": "3.1.3.6",
  "title": "Understanding the characteristic equation.",
  "body": "Understanding the characteristic equation True or False: The characteristic equation is a polynomial equation whose roots give the -values for the solutions of the LHCC equation.   True  Correct! The roots of the characteristic equation provide the -values for the solutions.    False  Incorrect. This statement is true.   "
},
{
  "id": "main-5-3-5-7-8",
  "level": "2",
  "url": "main-5-3-5.html#main-5-3-5-7-8",
  "type": "Reading Question",
  "number": "3.1.3.7",
  "title": "General form of the characteristic equation.",
  "body": "General form of the characteristic equation What is the general form of the characteristic equation for an -th order LHCC equation?    Incorrect. Ensure the highest power of is correct.     Correct! The characteristic equation is a polynomial equation of degree .     Incorrect. Ensure all terms involving are included.     Incorrect. Ensure the powers of decrease correctly.   "
},
{
  "id": "characteristic-equation-label-matching",
  "level": "2",
  "url": "main-5-3-5.html#characteristic-equation-label-matching",
  "type": "Reading Question",
  "number": "3.1.3.8",
  "title": "Match the Differential Equation to its Characteristic Equation.",
  "body": "Match the Differential Equation to its Characteristic Equation  Match each differential equation on the left to its characteristic equation on the right.                       "
},
{
  "id": "main-5-3-5-7-10",
  "level": "2",
  "url": "main-5-3-5.html#main-5-3-5-7-10",
  "type": "Reading Question",
  "number": "3.1.3.9",
  "title": "Characteristic equation for third-order LHCC.",
  "body": "Characteristic equation for third-order LHCC What is the characteristic equation for ?    Correct! The characteristic equation is .     Incorrect. Check the signs of the coefficients.     Incorrect. Ensure all terms are included correctly.     Incorrect. Make sure to include all terms.   "
},
{
  "id": "main-5-3-5-7-11",
  "level": "2",
  "url": "main-5-3-5.html#main-5-3-5-7-11",
  "type": "Reading Question",
  "number": "3.1.3.10",
  "title": "Solving the characteristic equation.",
  "body": "Solving the characteristic equation If the characteristic equation for an LHCC equation is , what are the roots?   (double root)  Correct! The root has a multiplicity of 2.     Incorrect. Check the quadratic equation carefully.    and  Incorrect. Ensure you solve the quadratic equation correctly.     Incorrect. These are not the correct roots for this equation.   "
},
{
  "id": "main-5-3-6",
  "level": "1",
  "url": "main-5-3-6.html",
  "type": "Subsection",
  "number": "3.1.4",
  "title": "First-Order Equations",
  "body": "First-Order Equations  Now that we've learned about characteristic equations, let's dive into solving some of these equations. We'll begin with first-order equations as a starting point for the higher-order equations. Recall, a first-order linear homogeneous differential equation with constant coefficients takes the form: . Since each term of the solution has the form , we can substitute this into our differential equation to identify the specific -values for each term.   Solving for gives the single value, , resulting in just one term in the general solution, given as follows . Now, for a few examples.    Find the general solution of the equation            Always begin by rewriting and confirming the class of the equations,        Now, solve the characteristic equations for         Therefore, the single term general solutions are            By following these steps, we can solve any first-order LHCC equation using the characteristic equation. This method is not only straightforward but also powerful, extending nicely to higher-order equations.  Check your Understanding  Select the characteristic equation .. Select the characteristic equation for the first-order LHCC equation ?    Incorrect. Remember, the characteristic equation should be formed by setting the equation to zero.     Correct! The characteristic equation is found by substituting into the differential equation.     Incorrect. Check the signs of the coefficients.     Incorrect. Ensure you have used the correct coefficients from the original equation.    Select the general solution .. Give the general solution for the first-order LHCC equation ?    Incorrect. Check the sign of the exponent.     Correct! The solution has the form , where is found from the characteristic equation.     Incorrect. Make sure to solve the characteristic equation correctly.     Incorrect. Check the coefficient of in the original equation.    Identify the first-order LHCC equation ..  Which of the following is a first-order LHCC equation?     Incorrect. This is a second-order equation.     Correct! This is a first-order linear homogeneous equation with constant coefficients.     Incorrect. This equation is not homogeneous.     Incorrect. This is not a constant coefficient equation.    What exponential term is in the solution ..  What exponential term in the solution of the equation ?     Correct! Solving gives . So is the exponential term in the solution.     Incorrect. Check the signs when solving the characteristic equation.     Incorrect. Ensure you are solving the characteristic equation correctly.     Incorrect. Revisit the steps to solve the characteristic equation.     "
},
{
  "id": "main-5-3-6-4",
  "level": "2",
  "url": "main-5-3-6.html#main-5-3-6-4",
  "type": "Example",
  "number": "3.7",
  "title": "",
  "body": "  Find the general solution of the equation            Always begin by rewriting and confirming the class of the equations,        Now, solve the characteristic equations for         Therefore, the single term general solutions are           "
},
{
  "id": "main-5-3-6-6-2",
  "level": "2",
  "url": "main-5-3-6.html#main-5-3-6-6-2",
  "type": "Reading Question",
  "number": "3.1.4.1",
  "title": "Select the characteristic equation ...",
  "body": "Select the characteristic equation .. Select the characteristic equation for the first-order LHCC equation ?    Incorrect. Remember, the characteristic equation should be formed by setting the equation to zero.     Correct! The characteristic equation is found by substituting into the differential equation.     Incorrect. Check the signs of the coefficients.     Incorrect. Ensure you have used the correct coefficients from the original equation.   "
},
{
  "id": "main-5-3-6-6-3",
  "level": "2",
  "url": "main-5-3-6.html#main-5-3-6-6-3",
  "type": "Reading Question",
  "number": "3.1.4.2",
  "title": "Select the general solution ...",
  "body": "Select the general solution .. Give the general solution for the first-order LHCC equation ?    Incorrect. Check the sign of the exponent.     Correct! The solution has the form , where is found from the characteristic equation.     Incorrect. Make sure to solve the characteristic equation correctly.     Incorrect. Check the coefficient of in the original equation.   "
},
{
  "id": "main-5-3-6-6-4",
  "level": "2",
  "url": "main-5-3-6.html#main-5-3-6-6-4",
  "type": "Reading Question",
  "number": "3.1.4.3",
  "title": "Identify the first-order LHCC equation ...",
  "body": "Identify the first-order LHCC equation ..  Which of the following is a first-order LHCC equation?     Incorrect. This is a second-order equation.     Correct! This is a first-order linear homogeneous equation with constant coefficients.     Incorrect. This equation is not homogeneous.     Incorrect. This is not a constant coefficient equation.   "
},
{
  "id": "main-5-3-6-6-5",
  "level": "2",
  "url": "main-5-3-6.html#main-5-3-6-6-5",
  "type": "Reading Question",
  "number": "3.1.4.4",
  "title": "What exponential term is in the solution ...",
  "body": "What exponential term is in the solution ..  What exponential term in the solution of the equation ?     Correct! Solving gives . So is the exponential term in the solution.     Incorrect. Check the signs when solving the characteristic equation.     Incorrect. Ensure you are solving the characteristic equation correctly.     Incorrect. Revisit the steps to solve the characteristic equation.   "
},
{
  "id": "main-5-3-7",
  "level": "1",
  "url": "main-5-3-7.html",
  "type": "Subsection",
  "number": "3.1.5",
  "title": "Second-Order LHCC",
  "body": "Second-Order LHCC  After mastering first-order LHCC equations, we are now ready to tackle second-order LHCC equations. These equations are slightly more complex but follow a similar approach. We'll see how the characteristic equation helps us find solutions and explore the different cases that arise based on its solutions.  A second-order LHCC equation has the form: . The characteristic equation for this is: , a quadratic equation with the unknown . Quadratic equations have two solutions (possibly repeated), leading to a general solution with two terms. The exact form of these terms depends on the solutions to the characteristic equation . To prepare for the next discussion, review .  You might think that if and are the solutions to the characteristic equation, then the general solution is simply: . And you'd be correct most of the time. However, if , the terms combine, giving you: . But the solution must have two non-like terms (i.e., terms that cannot be combined into a single term with addition). Formally, \"like\" and \"non-like\" are related to the concept of linearly dependence. The general solution is corrected by adding an to the second term, like so . The reason for adding is oultined in .  Therefore, depending on whether , the general solution to a second-order LHCC equation is either: With the help of Euler's formula, the first case is often split into real and complex cases. If you are curious about where the complex general form comes from, here are the details . All three cases are summarized below.   Summary of Cases  Let and be the two solutions of the characteristic equation associated with the second-order LHCC equation . Then has one of the following general solutions:  Case 1  are real and not equal   Case 2  are real and equal   Case 3  are complex        Examples of the Different Cases    Find the general solutions to each of these second-order LHCC equations:                        First, write down and solve the characteristic equation: . Since and are real and , we are in Case 1 . Therefore, the general solution is: .    The characteristic equation is: . Therefore, the general solution is: .    The characteristic equation in this problem is: . Here, and . So the general solution is: .     Check your Understanding  Identify the Second-Order LHCC Equation  Identify the second-order LHCC equation.     Incorrect. This is a first-order equation.     Incorrect. This is a third-order equation.     Correct! This is a second-order linear homogeneous differential equation with constant coefficients.     Incorrect. This is not a constant coefficient equation.    Give the characteristic equation ..  Give the characteristic equation for the second-order LHCC equation .     Incorrect. Remember to include terms for , , and the constant.     Correct! The characteristic equation is formed by substituting into the differential equation.     Incorrect. Check the sign of the coefficient of .     Incorrect. Ensure you have the correct coefficients from the original equation.    Give the characteristic equation ..  Give the characteristic equation for the second-order LHCC equation .     Incorrect. Remember to include all terms from the original equation.     Correct! The characteristic equation is formed by substituting into the differential equation.     Incorrect. Make sure the linear term is correctly represented.     Incorrect. Check the signs of the coefficients in the original equation.    Give the general form ..  Give the general form of a second-order LHCC equation if the characteristic equation has the solution: .     Incorrect. Complex roots require both cosine and sine terms.     Incorrect. This form is used for repeated real roots.     Incorrect. This form is used for distinct real roots.     Correct! This form is used when the roots are complex.    Give the general form ..  Give the general form of a second-order LHCC equation if the characteristic equation has the solutions and .     Correct! This form is used when the characteristic equation has distinct real roots.     Incorrect. This form is used for repeated real roots.     Incorrect. This form is also used for repeated real roots.     Incorrect. This form is used for complex roots.    Discriminant of the characteristic equation  If the discriminant of the characteristic equation is , then what kind of solutions does the characteristic equation have?    Real and equal solutions  Incorrect. The discriminant is the number under the square root in the quadratic formula.    Real and unequal solutions  Incorrect. The discriminant is the number under the square root in the quadratic formula.    Complex solutions  Correct! A negative discriminant indicates the square root of a negative number in the quadratic formula, which results in the complex number .     "
},
{
  "id": "main-5-3-7-7",
  "level": "2",
  "url": "main-5-3-7.html#main-5-3-7-7",
  "type": "Example",
  "number": "3.8",
  "title": "<em class=\"emphasis\">Examples of the Different Cases<\/em>.",
  "body": "  Examples of the Different Cases    Find the general solutions to each of these second-order LHCC equations:                        First, write down and solve the characteristic equation: . Since and are real and , we are in Case 1 . Therefore, the general solution is: .    The characteristic equation is: . Therefore, the general solution is: .    The characteristic equation in this problem is: . Here, and . So the general solution is: .    "
},
{
  "id": "main-5-3-7-8-2",
  "level": "2",
  "url": "main-5-3-7.html#main-5-3-7-8-2",
  "type": "Reading Question",
  "number": "3.1.5.1",
  "title": "Identify the Second-Order LHCC Equation.",
  "body": "Identify the Second-Order LHCC Equation  Identify the second-order LHCC equation.     Incorrect. This is a first-order equation.     Incorrect. This is a third-order equation.     Correct! This is a second-order linear homogeneous differential equation with constant coefficients.     Incorrect. This is not a constant coefficient equation.   "
},
{
  "id": "main-5-3-7-8-3",
  "level": "2",
  "url": "main-5-3-7.html#main-5-3-7-8-3",
  "type": "Reading Question",
  "number": "3.1.5.2",
  "title": "Give the characteristic equation ...",
  "body": "Give the characteristic equation ..  Give the characteristic equation for the second-order LHCC equation .     Incorrect. Remember to include terms for , , and the constant.     Correct! The characteristic equation is formed by substituting into the differential equation.     Incorrect. Check the sign of the coefficient of .     Incorrect. Ensure you have the correct coefficients from the original equation.   "
},
{
  "id": "main-5-3-7-8-4",
  "level": "2",
  "url": "main-5-3-7.html#main-5-3-7-8-4",
  "type": "Reading Question",
  "number": "3.1.5.3",
  "title": "Give the characteristic equation ...",
  "body": "Give the characteristic equation ..  Give the characteristic equation for the second-order LHCC equation .     Incorrect. Remember to include all terms from the original equation.     Correct! The characteristic equation is formed by substituting into the differential equation.     Incorrect. Make sure the linear term is correctly represented.     Incorrect. Check the signs of the coefficients in the original equation.   "
},
{
  "id": "main-5-3-7-8-5",
  "level": "2",
  "url": "main-5-3-7.html#main-5-3-7-8-5",
  "type": "Reading Question",
  "number": "3.1.5.4",
  "title": "Give the general form ...",
  "body": "Give the general form ..  Give the general form of a second-order LHCC equation if the characteristic equation has the solution: .     Incorrect. Complex roots require both cosine and sine terms.     Incorrect. This form is used for repeated real roots.     Incorrect. This form is used for distinct real roots.     Correct! This form is used when the roots are complex.   "
},
{
  "id": "main-5-3-7-8-6",
  "level": "2",
  "url": "main-5-3-7.html#main-5-3-7-8-6",
  "type": "Reading Question",
  "number": "3.1.5.5",
  "title": "Give the general form ...",
  "body": "Give the general form ..  Give the general form of a second-order LHCC equation if the characteristic equation has the solutions and .     Correct! This form is used when the characteristic equation has distinct real roots.     Incorrect. This form is used for repeated real roots.     Incorrect. This form is also used for repeated real roots.     Incorrect. This form is used for complex roots.   "
},
{
  "id": "main-5-3-7-8-7",
  "level": "2",
  "url": "main-5-3-7.html#main-5-3-7-8-7",
  "type": "Reading Question",
  "number": "3.1.5.6",
  "title": "Discriminant of the characteristic equation.",
  "body": "Discriminant of the characteristic equation  If the discriminant of the characteristic equation is , then what kind of solutions does the characteristic equation have?    Real and equal solutions  Incorrect. The discriminant is the number under the square root in the quadratic formula.    Real and unequal solutions  Incorrect. The discriminant is the number under the square root in the quadratic formula.    Complex solutions  Correct! A negative discriminant indicates the square root of a negative number in the quadratic formula, which results in the complex number .   "
},
{
  "id": "main-5-3-8",
  "level": "1",
  "url": "main-5-3-8.html",
  "type": "Subsection",
  "number": "3.1.6",
  "title": "Higher-Order LHCC",
  "body": "Higher-Order LHCC  As in the previous section, the approach to solving higher-order linear homogeneous constant coefficient (LHCC) equations is fairly straightforward. Find the solutions to the characteristic equation and use them to write down each term of the general solution. The key difference lies in the fact that you must solve a high-degree polynomial equation, which can be challenging since you no longer have a simple formula to give you the solutions.  To see this, consider the -th order LHCC equation, , which has an -th degree characteristic equation .     Completely factor and solve the following characteristic equations                           The degree of each equation tells you how many factors you should have.            difference of squares     set each factor to 0     solutions                difference of squares     solutions                common factor      standard quadratic factoring     solutions                common factor     solutions      Technically, and represents 4 repeated factors.              common factor      difference of squares     solutions                common factor      difference of squares     solutions                difference of squares      difference of squares     set each factor to 0     solutions            Let's solve a third-order LHCC equation:  .   First, write down the characteristic equation:  . Solving for , we get three distinct real roots:  . Therefore, the general solution is:  .     Consider another example, a fourth-order LHCC equation:  .   The characteristic equation is:  . Let , then we can rewrite the equation as:  . Solving for , we get:  . Thus, gives , and gives . The general solution is:  .   As seen in these examples, solving the characteristic equation for higher-order LHCC equations follows the same principles as for lower-order equations. However, as the degree of the polynomial increases, solving the characteristic equation analytically can become impractical due to the complexity of the roots.  For higher-degree characteristic equations, numerical methods and computer algebra systems are typically employed to find the roots. Software tools like MATLAB, Mathematica, and even graphing calculators can assist in solving these polynomial equations, allowing us to focus on interpreting and utilizing the solutions.    Consider the fifth-order LHCC equation:  .   The characteristic equation is:  . Solving this polynomial equation analytically is challenging, so we use a numerical solver. The roots are found to be approximately:  . The general solution, incorporating these roots, is:  .   By recognizing the type of roots and using technology to solve higher-degree polynomials, we can extend our approach to solve any higher-order LHCC equation effectively.  Polynomial Factoring Calculator    Check your Understanding  Characteristic Equation for Higher-Order LHCC What is the characteristic equation for the third-order LHCC equation ?    Incorrect. Make sure to include the constant term in the characteristic equation.     Correct! The characteristic equation is obtained by substituting into the differential equation.     Incorrect. The characteristic equation should be set to zero.     Incorrect. Ensure all terms from the original equation are included.    Distinct Real Roots in Higher-Order Equations What is the general solution for a third-order LHCC equation with distinct real roots ?    Correct! This is the form when there are three distinct real roots.     Incorrect. This form is used for repeated roots.     Incorrect. Make sure to use distinct roots correctly.     Incorrect. This form is used for complex roots.    Complex Roots in Higher-Order Equations What is the general solution for a fourth-order LHCC equation with complex roots and ?    Incorrect. Complex roots require both cosine and sine terms.     Correct! This is the form when the characteristic equation has complex roots.     Incorrect. This form is used for repeated real roots.     Incorrect. The exponential form should include cosine and sine for complex roots.    Repeated Real Roots in Higher-Order Equations What is the general solution for a fourth-order LHCC equation with repeated real roots and ?    Incorrect. This form does not account for the multiplicity of the roots.     Incorrect. The multiplicity should be reflected for each root.     Correct! This is the form when there are repeated real roots with appropriate multiplicity.     Incorrect. Make sure to account for the cubic multiplicity for .    Using Technology True or False: Solving higher-order characteristic equations typically requires numerical methods or computer algebra systems.   True  Correct! Higher-degree polynomials are often complex, and technology assists in finding their roots.    False  Incorrect. Solving higher-order equations manually is impractical without technology.    Higher-Order LHCC General Form What is the general form of a fifth-order LHCC equation?    Incorrect. Make sure all terms from to are included.     Correct! This includes all terms from to .     Incorrect. Ensure all intermediate terms are included.     Incorrect. Make sure no terms are skipped.    Match the Characteristic Equation to the DE  Match each differential equation on the left to its characteristic equation on the right.                        Discriminant and Roots If the discriminant of the characteristic equation for a fourth-order LHCC equation is zero, what can be said about its roots?   They are distinct real roots.  Incorrect. Distinct real roots occur when the discriminant is positive.    They are repeated real roots.  Correct! A discriminant of zero indicates repeated real roots.    They are complex roots.  Incorrect. Complex roots occur when the discriminant is negative.    They are purely imaginary roots.  Incorrect. Purely imaginary roots are a special case of complex roots.    Forming the Characteristic Equation What is the characteristic equation for the fourth-order LHCC equation ?    Incorrect. The characteristic equation should be set to zero.     Correct! The characteristic equation is formed by substituting into the differential equation.     Incorrect. Ensure all terms from the original equation are included.     Incorrect. Make sure the quadratic term is correctly represented.    Roots of the Characteristic Equation If the characteristic equation of a fifth-order LHCC equation is , what type of roots might you expect to find?   A mixture of real and complex roots  Correct! Higher-degree polynomials often have a combination of real and complex roots.    Only distinct real roots  Incorrect. Higher-degree polynomials can have complex roots as well.    Only repeated real roots  Incorrect. Higher-degree polynomials can have a variety of root types.    Only complex roots  Incorrect. Higher-degree polynomials can have real roots as well.     "
},
{
  "id": "main-5-3-8-5",
  "level": "2",
  "url": "main-5-3-8.html#main-5-3-8-5",
  "type": "Example",
  "number": "3.9",
  "title": "",
  "body": "  Completely factor and solve the following characteristic equations                           The degree of each equation tells you how many factors you should have.            difference of squares     set each factor to 0     solutions                difference of squares     solutions                common factor      standard quadratic factoring     solutions                common factor     solutions      Technically, and represents 4 repeated factors.              common factor      difference of squares     solutions                common factor      difference of squares     solutions                difference of squares      difference of squares     set each factor to 0     solutions         "
},
{
  "id": "main-5-3-8-6",
  "level": "2",
  "url": "main-5-3-8.html#main-5-3-8-6",
  "type": "Example",
  "number": "3.10",
  "title": "",
  "body": "  Let's solve a third-order LHCC equation:  .   First, write down the characteristic equation:  . Solving for , we get three distinct real roots:  . Therefore, the general solution is:  .  "
},
{
  "id": "main-5-3-8-7",
  "level": "2",
  "url": "main-5-3-8.html#main-5-3-8-7",
  "type": "Example",
  "number": "3.11",
  "title": "",
  "body": "  Consider another example, a fourth-order LHCC equation:  .   The characteristic equation is:  . Let , then we can rewrite the equation as:  . Solving for , we get:  . Thus, gives , and gives . The general solution is:  .  "
},
{
  "id": "main-5-3-8-10",
  "level": "2",
  "url": "main-5-3-8.html#main-5-3-8-10",
  "type": "Example",
  "number": "3.12",
  "title": "",
  "body": "  Consider the fifth-order LHCC equation:  .   The characteristic equation is:  . Solving this polynomial equation analytically is challenging, so we use a numerical solver. The roots are found to be approximately:  . The general solution, incorporating these roots, is:  .  "
},
{
  "id": "main-5-3-8-13-2",
  "level": "2",
  "url": "main-5-3-8.html#main-5-3-8-13-2",
  "type": "Reading Question",
  "number": "3.1.6.1",
  "title": "Characteristic Equation for Higher-Order LHCC.",
  "body": "Characteristic Equation for Higher-Order LHCC What is the characteristic equation for the third-order LHCC equation ?    Incorrect. Make sure to include the constant term in the characteristic equation.     Correct! The characteristic equation is obtained by substituting into the differential equation.     Incorrect. The characteristic equation should be set to zero.     Incorrect. Ensure all terms from the original equation are included.   "
},
{
  "id": "main-5-3-8-13-3",
  "level": "2",
  "url": "main-5-3-8.html#main-5-3-8-13-3",
  "type": "Reading Question",
  "number": "3.1.6.2",
  "title": "Distinct Real Roots in Higher-Order Equations.",
  "body": "Distinct Real Roots in Higher-Order Equations What is the general solution for a third-order LHCC equation with distinct real roots ?    Correct! This is the form when there are three distinct real roots.     Incorrect. This form is used for repeated roots.     Incorrect. Make sure to use distinct roots correctly.     Incorrect. This form is used for complex roots.   "
},
{
  "id": "main-5-3-8-13-4",
  "level": "2",
  "url": "main-5-3-8.html#main-5-3-8-13-4",
  "type": "Reading Question",
  "number": "3.1.6.3",
  "title": "Complex Roots in Higher-Order Equations.",
  "body": "Complex Roots in Higher-Order Equations What is the general solution for a fourth-order LHCC equation with complex roots and ?    Incorrect. Complex roots require both cosine and sine terms.     Correct! This is the form when the characteristic equation has complex roots.     Incorrect. This form is used for repeated real roots.     Incorrect. The exponential form should include cosine and sine for complex roots.   "
},
{
  "id": "main-5-3-8-13-5",
  "level": "2",
  "url": "main-5-3-8.html#main-5-3-8-13-5",
  "type": "Reading Question",
  "number": "3.1.6.4",
  "title": "Repeated Real Roots in Higher-Order Equations.",
  "body": "Repeated Real Roots in Higher-Order Equations What is the general solution for a fourth-order LHCC equation with repeated real roots and ?    Incorrect. This form does not account for the multiplicity of the roots.     Incorrect. The multiplicity should be reflected for each root.     Correct! This is the form when there are repeated real roots with appropriate multiplicity.     Incorrect. Make sure to account for the cubic multiplicity for .   "
},
{
  "id": "main-5-3-8-13-6",
  "level": "2",
  "url": "main-5-3-8.html#main-5-3-8-13-6",
  "type": "Reading Question",
  "number": "3.1.6.5",
  "title": "Using Technology.",
  "body": "Using Technology True or False: Solving higher-order characteristic equations typically requires numerical methods or computer algebra systems.   True  Correct! Higher-degree polynomials are often complex, and technology assists in finding their roots.    False  Incorrect. Solving higher-order equations manually is impractical without technology.   "
},
{
  "id": "main-5-3-8-13-7",
  "level": "2",
  "url": "main-5-3-8.html#main-5-3-8-13-7",
  "type": "Reading Question",
  "number": "3.1.6.6",
  "title": "Higher-Order LHCC General Form.",
  "body": "Higher-Order LHCC General Form What is the general form of a fifth-order LHCC equation?    Incorrect. Make sure all terms from to are included.     Correct! This includes all terms from to .     Incorrect. Ensure all intermediate terms are included.     Incorrect. Make sure no terms are skipped.   "
},
{
  "id": "higher-order-LHCC-label-matching",
  "level": "2",
  "url": "main-5-3-8.html#higher-order-LHCC-label-matching",
  "type": "Reading Question",
  "number": "3.1.6.7",
  "title": "Match the Characteristic Equation to the DE.",
  "body": "Match the Characteristic Equation to the DE  Match each differential equation on the left to its characteristic equation on the right.                       "
},
{
  "id": "main-5-3-8-13-9",
  "level": "2",
  "url": "main-5-3-8.html#main-5-3-8-13-9",
  "type": "Reading Question",
  "number": "3.1.6.8",
  "title": "Discriminant and Roots.",
  "body": "Discriminant and Roots If the discriminant of the characteristic equation for a fourth-order LHCC equation is zero, what can be said about its roots?   They are distinct real roots.  Incorrect. Distinct real roots occur when the discriminant is positive.    They are repeated real roots.  Correct! A discriminant of zero indicates repeated real roots.    They are complex roots.  Incorrect. Complex roots occur when the discriminant is negative.    They are purely imaginary roots.  Incorrect. Purely imaginary roots are a special case of complex roots.   "
},
{
  "id": "main-5-3-8-13-10",
  "level": "2",
  "url": "main-5-3-8.html#main-5-3-8-13-10",
  "type": "Reading Question",
  "number": "3.1.6.9",
  "title": "Forming the Characteristic Equation.",
  "body": "Forming the Characteristic Equation What is the characteristic equation for the fourth-order LHCC equation ?    Incorrect. The characteristic equation should be set to zero.     Correct! The characteristic equation is formed by substituting into the differential equation.     Incorrect. Ensure all terms from the original equation are included.     Incorrect. Make sure the quadratic term is correctly represented.   "
},
{
  "id": "main-5-3-8-13-11",
  "level": "2",
  "url": "main-5-3-8.html#main-5-3-8-13-11",
  "type": "Reading Question",
  "number": "3.1.6.10",
  "title": "Roots of the Characteristic Equation.",
  "body": "Roots of the Characteristic Equation If the characteristic equation of a fifth-order LHCC equation is , what type of roots might you expect to find?   A mixture of real and complex roots  Correct! Higher-degree polynomials often have a combination of real and complex roots.    Only distinct real roots  Incorrect. Higher-degree polynomials can have complex roots as well.    Only repeated real roots  Incorrect. Higher-degree polynomials can have a variety of root types.    Only complex roots  Incorrect. Higher-degree polynomials can have real roots as well.   "
},
{
  "id": "main-5-3-9",
  "level": "1",
  "url": "main-5-3-9.html",
  "type": "Subsection",
  "number": "3.1.7",
  "title": "Summary &amp; Exercises",
  "body": "Summary & Exercises    The method discussed in this section does not have a formal name, but it is a common technique with a wide array of applications. For ease of discussion, we will refer to it as the \"LHCC method.\" \"LHCC\" is an acronym indicating the properties of DE it solves. The properties are linear (L), homogeneous (H), and constant coefficients (CC).   LHCC Method  A general solution to the linear homogeneous differential equation with constant coefficients (LHCC), can be found through the following steps...   Step 1: Verify Method  Check that the DE is linear, homogeneous and has constant coefficients.   Step 2: Solve CE  Solve the characteristic equation (CE) corresponding to ?.   Step 3: Give Solution  Write down the general solution and apply initial conditions.     Summary of the Key Ideas    Method           Show why is needed in the general solution for repeated roots of the CE     Find the general solution for each of the following                          Solve the following initial value problems   an that satisfy thegiven initial conditions.  o  We already have the general solution . In order to use the initial conditions, we will eventually need the first derivative, so let's find that now. Now we can see what comes of the first initial condition  Now we can use the other initial condition  Notice that the resulting equations, (\\ref{eq7}) and (\\ref{eq8}) constitute a system of two linear equations in two unknowns, and we should be able to solve for the unknown an . There are multiple ways to achieve this. One possibility is to solve fo in equation (\\ref{eq7}) and then substitute into equation (\\ref{eq8}) as follows. Hence, we have the solution  Note: it's not clear whether the independent variable i o , so you could replace th 's wit 's.         Boundary Value Problems  Solve the following boundary value problem.    We begin by verifying the following: the DE is linear,  the DE is homogeneous, and  the DE has constant coefficients. Since all of the conditions are true, we can safely proceed to find the general solution. We write down and then solve the characteristic equation, as follows. Since an are distinct, real roots, the general solution is given by Now we can see what comes of the first boundary condition  Now we can use the other boundary condition  Notice that the resulting equations, (\\ref{eq11}) and (\\ref{eq12}) constitute a system of two linear equations in two unknowns, and we should be able to solve for the unknown an . There are multiple ways to achieve this. One possibility is to solve fo in equation (\\ref{eq11}) and then substitute into equation (\\ref{eq12}) as follows. Hence, we have the solution    Solve the following DEs               Initial Value Problems  Solve the following initial value problem.   or  We begin by verifying the following: the DE is linear,  the DE is homogeneous, and  the DE has constant coefficients. Since all of the conditions are true, we can safely proceed by writing the characteristic equation and then solving it (either by factoring or using the quadratic equation). Sinc is a repeated real root, the general solution is In order to use the initial conditions, we will eventually need the first derivative, so let's find that now. Note that we will use the product rule to take the derivative. Now we can see what comes of the first initial condition  Now we can use the other initial condition  Notice that the resulting equations, (\\ref{eq13}) and (\\ref{eq14}) constitute a system of two linear equations in two unknowns, and we should be able to solve for the unknown and . There are multiple ways to achieve this. One possibility is to solve for in equation (\\ref{eq13}) and then substitute into equation (\\ref{eq14}) as follows. Hence, we have the solution    Solve the following DEs               Solve the following DEs                           Find the general solution for a linear, homogeneous DEwith constant coefficients which has the given characteristic equation               Compute the derivative of each of the following functions         "
},
{
  "id": "main-5-3-9-2-1",
  "level": "2",
  "url": "main-5-3-9.html#main-5-3-9-2-1",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": " Method  "
},
{
  "id": "tba",
  "level": "2",
  "url": "main-5-3-9.html#tba",
  "type": "Exercise",
  "number": "3.1.7.1",
  "title": "",
  "body": " Show why is needed in the general solution for repeated roots of the CE    "
},
{
  "id": "main-5-3-9-3-2-2",
  "level": "2",
  "url": "main-5-3-9.html#main-5-3-9-3-2-2",
  "type": "Exercise",
  "number": "3.1.7.2",
  "title": "",
  "body": "     "
},
{
  "id": "main-5-3-9-3-2-3",
  "level": "2",
  "url": "main-5-3-9.html#main-5-3-9-3-2-3",
  "type": "Exercise",
  "number": "3.1.7.3",
  "title": "",
  "body": "     "
},
{
  "id": "main-5-3-9-3-2-4",
  "level": "2",
  "url": "main-5-3-9.html#main-5-3-9-3-2-4",
  "type": "Exercise",
  "number": "3.1.7.4",
  "title": "",
  "body": "     "
},
{
  "id": "main-5-3-9-3-2-5",
  "level": "2",
  "url": "main-5-3-9.html#main-5-3-9-3-2-5",
  "type": "Exercise",
  "number": "3.1.7.5",
  "title": "",
  "body": "    "
},
{
  "id": "main-5-3-9-3-3-2",
  "level": "2",
  "url": "main-5-3-9.html#main-5-3-9-3-3-2",
  "type": "Exercise",
  "number": "3.1.7.6",
  "title": "",
  "body": " an that satisfy thegiven initial conditions.  o  We already have the general solution . In order to use the initial conditions, we will eventually need the first derivative, so let's find that now. Now we can see what comes of the first initial condition  Now we can use the other initial condition  Notice that the resulting equations, (\\ref{eq7}) and (\\ref{eq8}) constitute a system of two linear equations in two unknowns, and we should be able to solve for the unknown an . There are multiple ways to achieve this. One possibility is to solve fo in equation (\\ref{eq7}) and then substitute into equation (\\ref{eq8}) as follows. Hence, we have the solution  Note: it's not clear whether the independent variable i o , so you could replace th 's wit 's.  "
},
{
  "id": "main-5-3-9-3-3-3",
  "level": "2",
  "url": "main-5-3-9.html#main-5-3-9-3-3-3",
  "type": "Exercise",
  "number": "3.1.7.7",
  "title": "",
  "body": "    "
},
{
  "id": "main-5-3-9-3-4-2",
  "level": "2",
  "url": "main-5-3-9.html#main-5-3-9-3-4-2",
  "type": "Exercise",
  "number": "3.1.7.8",
  "title": "",
  "body": "Solve the following boundary value problem.    We begin by verifying the following: the DE is linear,  the DE is homogeneous, and  the DE has constant coefficients. Since all of the conditions are true, we can safely proceed to find the general solution. We write down and then solve the characteristic equation, as follows. Since an are distinct, real roots, the general solution is given by Now we can see what comes of the first boundary condition  Now we can use the other boundary condition  Notice that the resulting equations, (\\ref{eq11}) and (\\ref{eq12}) constitute a system of two linear equations in two unknowns, and we should be able to solve for the unknown an . There are multiple ways to achieve this. One possibility is to solve fo in equation (\\ref{eq11}) and then substitute into equation (\\ref{eq12}) as follows. Hence, we have the solution  "
},
{
  "id": "main-5-3-9-3-5-2",
  "level": "2",
  "url": "main-5-3-9.html#main-5-3-9-3-5-2",
  "type": "Exercise",
  "number": "3.1.7.9",
  "title": "",
  "body": "     "
},
{
  "id": "main-5-3-9-3-5-3",
  "level": "2",
  "url": "main-5-3-9.html#main-5-3-9-3-5-3",
  "type": "Exercise",
  "number": "3.1.7.10",
  "title": "",
  "body": "     "
},
{
  "id": "main-5-3-9-3-6-2",
  "level": "2",
  "url": "main-5-3-9.html#main-5-3-9-3-6-2",
  "type": "Exercise",
  "number": "3.1.7.11",
  "title": "",
  "body": "Solve the following initial value problem.   or  We begin by verifying the following: the DE is linear,  the DE is homogeneous, and  the DE has constant coefficients. Since all of the conditions are true, we can safely proceed by writing the characteristic equation and then solving it (either by factoring or using the quadratic equation). Sinc is a repeated real root, the general solution is In order to use the initial conditions, we will eventually need the first derivative, so let's find that now. Note that we will use the product rule to take the derivative. Now we can see what comes of the first initial condition  Now we can use the other initial condition  Notice that the resulting equations, (\\ref{eq13}) and (\\ref{eq14}) constitute a system of two linear equations in two unknowns, and we should be able to solve for the unknown and . There are multiple ways to achieve this. One possibility is to solve for in equation (\\ref{eq13}) and then substitute into equation (\\ref{eq14}) as follows. Hence, we have the solution  "
},
{
  "id": "main-5-3-9-3-7-2",
  "level": "2",
  "url": "main-5-3-9.html#main-5-3-9-3-7-2",
  "type": "Exercise",
  "number": "3.1.7.12",
  "title": "",
  "body": "     "
},
{
  "id": "main-5-3-9-3-7-3",
  "level": "2",
  "url": "main-5-3-9.html#main-5-3-9-3-7-3",
  "type": "Exercise",
  "number": "3.1.7.13",
  "title": "",
  "body": "     "
},
{
  "id": "main-5-3-9-3-8-2",
  "level": "2",
  "url": "main-5-3-9.html#main-5-3-9-3-8-2",
  "type": "Exercise",
  "number": "3.1.7.14",
  "title": "",
  "body": "     "
},
{
  "id": "main-5-3-9-3-8-3",
  "level": "2",
  "url": "main-5-3-9.html#main-5-3-9-3-8-3",
  "type": "Exercise",
  "number": "3.1.7.15",
  "title": "",
  "body": "     "
},
{
  "id": "main-5-3-9-3-8-4",
  "level": "2",
  "url": "main-5-3-9.html#main-5-3-9-3-8-4",
  "type": "Exercise",
  "number": "3.1.7.16",
  "title": "",
  "body": "     "
},
{
  "id": "main-5-3-9-3-8-5",
  "level": "2",
  "url": "main-5-3-9.html#main-5-3-9-3-8-5",
  "type": "Exercise",
  "number": "3.1.7.17",
  "title": "",
  "body": "     "
},
{
  "id": "main-5-3-9-3-9-2",
  "level": "2",
  "url": "main-5-3-9.html#main-5-3-9-3-9-2",
  "type": "Exercise",
  "number": "3.1.7.18",
  "title": "",
  "body": "     "
},
{
  "id": "main-5-3-9-3-9-3",
  "level": "2",
  "url": "main-5-3-9.html#main-5-3-9-3-9-3",
  "type": "Exercise",
  "number": "3.1.7.19",
  "title": "",
  "body": "     "
},
{
  "id": "main-5-3-9-3-10-2",
  "level": "2",
  "url": "main-5-3-9.html#main-5-3-9-3-10-2",
  "type": "Exercise",
  "number": "3.1.7.20",
  "title": "",
  "body": "    "
},
{
  "id": "main-5-3-10",
  "level": "1",
  "url": "main-5-3-10.html",
  "type": "Subsection",
  "number": "3.1.8",
  "title": "Orphaned Content",
  "body": "Orphaned Content   This is just a place to put content that was written and may or not be used.   Additional Examples   Additional Practice   Additional Narrative         (factor out )      (set each factor to 0)         characteristic equation!  no solution      "
},
{
  "id": "main-5-4-3",
  "level": "1",
  "url": "main-5-4-3.html",
  "type": "Subsection",
  "number": "3.2.1",
  "title": "Introduction",
  "body": "Introduction  Verifying that, say , is a solution to the homogeneous equation , involves plugging it into the left-hand side of the equation and simplifying. If it is a solution, then you would expect all the terms to cancel out, leaving you with zero so that the equation is satisfied.  In the case of a nonhomogeneous equation, , you would instead expect the left side to simplify to after plugging in a solution. Let's brainstorm some functions that might simplify to .       Since we need the left side to simplify to , it seems reasonable to consider functions that have terms, such as polynomials. Let's try some below.             LHS  LHS    1     No    2     No    3     No    4     No    5     No    6     Yes     Based on this table, we note that the correct solution is and   Row 1 shows that a constant term alone could never produce an term.    Derivatives reduce the power of a polynomial, so the highest power term (highlighted in blue) comes from the term.       Rows 3 & 4 illustrate the solution can't have a or higher-degree term.    Row 6 shows the solution ( ) needed an term and constant term even though the right-hand side, , has only an term.      Check your Understanding  Select the solution to the equation ..  Select the solution to the equation  .    Incorrect, the particular solution is .     Correct!     Incorrect, the particular solution is .     Incorrect, the particular solution is .    A solution of the equation ..  A solution of the equation  must contain a polynomial of what degree?    Incorrect, review row 1 of the table above.     Incorrect, plugging (degree 1 polynomial) into the LHS would simplify to another degree 1 polynomial, but the RHS is a degree 3 polynomial.     Incorrect, plugging (degree 2 polynomial) into the LHS would simplify to another degree 2 polynomial, but the RHS is a degree 3 polynomial.     Correct! Plugging (degree 3 polynomial) into the LHS would simplify to a degree 3 polynomial, which is the degree of the polynomial on the RHS.     Incorrect, plugging (degree 4 polynomial) into the LHS would leave you with a term, not seen on the RHS.    True or False . If the right-hand side term of LNCC equation is , then the solution only contains an term   True  Incorrect! The solution could contain an term and constant term as well.    False  Correct! The solution could contain an term and constant term as well.     "
},
{
  "id": "main-5-4-3-8-2",
  "level": "2",
  "url": "main-5-4-3.html#main-5-4-3-8-2",
  "type": "Reading Question",
  "number": "3.2.1.1",
  "title": "Select the solution to the equation ...",
  "body": "Select the solution to the equation ..  Select the solution to the equation  .    Incorrect, the particular solution is .     Correct!     Incorrect, the particular solution is .     Incorrect, the particular solution is .   "
},
{
  "id": "main-5-4-3-8-3",
  "level": "2",
  "url": "main-5-4-3.html#main-5-4-3-8-3",
  "type": "Reading Question",
  "number": "3.2.1.2",
  "title": "A solution of the equation ...",
  "body": "A solution of the equation ..  A solution of the equation  must contain a polynomial of what degree?    Incorrect, review row 1 of the table above.     Incorrect, plugging (degree 1 polynomial) into the LHS would simplify to another degree 1 polynomial, but the RHS is a degree 3 polynomial.     Incorrect, plugging (degree 2 polynomial) into the LHS would simplify to another degree 2 polynomial, but the RHS is a degree 3 polynomial.     Correct! Plugging (degree 3 polynomial) into the LHS would simplify to a degree 3 polynomial, which is the degree of the polynomial on the RHS.     Incorrect, plugging (degree 4 polynomial) into the LHS would leave you with a term, not seen on the RHS.   "
},
{
  "id": "main-5-4-3-8-4",
  "level": "2",
  "url": "main-5-4-3.html#main-5-4-3-8-4",
  "type": "Reading Question",
  "number": "3.2.1.3",
  "title": "<em class=\"emphasis\">True or False<\/em>. If the right-hand side term of LNCC equation is <span class=\"process-math\">\\(x^2\\text{,}\\)<\/span> then the solution only contains an <span class=\"process-math\">\\(x^2\\)<\/span> term.",
  "body": "True or False . If the right-hand side term of LNCC equation is , then the solution only contains an term   True  Incorrect! The solution could contain an term and constant term as well.    False  Correct! The solution could contain an term and constant term as well.   "
},
{
  "id": "main-5-4-4",
  "level": "1",
  "url": "main-5-4-4.html",
  "type": "Subsection",
  "number": "3.2.2",
  "title": "General Solution Parts",
  "body": "General Solution Parts  As discussed in the last section, every solution to a nonhomogeneous differential equation must account for the non-zero term on the right-hand side. However, hidden within these solutions could be terms that cancel out with each other instead of contributing to the term on the right-hand side.  To see this, let's bring back the equation from the last section, , which we know has as a solution. Would it still be a solution if we tossed another term, say , onto it so that ? To find out, we plug it in and track this new term (in blue), like so   There is a lot built into this result, so let's carefully break it down.   First, is a solution since it satisfies .    The solution contains the two parts: , where part (1) contains the terms that simplifies to and part (2) contains the terms that simplify to when plugged into .    The third step looks like and were separately plugged into . As long as the equation is linear, this separation can happen.     This example illustrates the following general principle of LNCC equations. Parts of LHCC Equation General Solution  The linear nonhomogeneous constant coefficient equation   has a two-part general solution that can be written as . Plugging this into , we can separate and like so . We call the homogeneous part of and find it by solving . The part, , is the particular solution of , which accounts for .      Give the general solution to the differential equation  .   The general solution has the form where is the particular solution that gives , is already known as . The homogeneous part, , that gives , is found by solving using the characteristic equation, as follows . So the homogeneous part is and the general solution is given by     Before we can start solving these equations, we still need to formulate a strategy for finding the particular solution, . This will be the focus of the next section.  Check your Understanding  Which function did not produce an -term?  In the function column, which function did not produce an -term after plugging it into the equation?     Correct!     Incorrect, it produced which contains the term      Incorrect, it produced which contains the term      Incorrect, it produced which contains the term     Which function produced and terms?  In the function column, which function produced both and terms?     Incorrect, it produced which contains the term      Incorrect, it produced which contains the term      Correct!     Incorrect, it produced which contains the term     Which function satisfied the differential equation?  In the function column, which function satisfied the differential equation?     Incorrect, it produced which is not equal to .     Incorrect, it produced which is not equal to .     Incorrect, it produced which is not equal to .     Incorrect, it produced which is not equal to .     Correct!    True\/False. The correct solution only contained an term   True  Incorrect, the correct solution also contained a constant term.    False  Correct! The correct solution contained both an and a constant term     "
},
{
  "id": "main-5-4-4-4",
  "level": "2",
  "url": "main-5-4-4.html#main-5-4-4-4",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "homogeneous part particular solution "
},
{
  "id": "main-5-4-4-5",
  "level": "2",
  "url": "main-5-4-4.html#main-5-4-4-5",
  "type": "Example",
  "number": "3.13",
  "title": "",
  "body": "  Give the general solution to the differential equation  .   The general solution has the form where is the particular solution that gives , is already known as . The homogeneous part, , that gives , is found by solving using the characteristic equation, as follows . So the homogeneous part is and the general solution is given by    "
},
{
  "id": "main-5-4-4-7-2",
  "level": "2",
  "url": "main-5-4-4.html#main-5-4-4-7-2",
  "type": "Reading Question",
  "number": "3.2.2.1",
  "title": "Which function did not produce an <span class=\"process-math\">\\(x\\)<\/span>-term?",
  "body": "Which function did not produce an -term?  In the function column, which function did not produce an -term after plugging it into the equation?     Correct!     Incorrect, it produced which contains the term      Incorrect, it produced which contains the term      Incorrect, it produced which contains the term    "
},
{
  "id": "main-5-4-4-7-3",
  "level": "2",
  "url": "main-5-4-4.html#main-5-4-4-7-3",
  "type": "Reading Question",
  "number": "3.2.2.2",
  "title": "Which function produced <span class=\"process-math\">\\(x\\)<\/span> and <span class=\"process-math\">\\(x^2\\)<\/span> terms?",
  "body": "Which function produced and terms?  In the function column, which function produced both and terms?     Incorrect, it produced which contains the term      Incorrect, it produced which contains the term      Correct!     Incorrect, it produced which contains the term    "
},
{
  "id": "main-5-4-4-7-4",
  "level": "2",
  "url": "main-5-4-4.html#main-5-4-4-7-4",
  "type": "Reading Question",
  "number": "3.2.2.3",
  "title": "Which function satisfied the differential equation?",
  "body": "Which function satisfied the differential equation?  In the function column, which function satisfied the differential equation?     Incorrect, it produced which is not equal to .     Incorrect, it produced which is not equal to .     Incorrect, it produced which is not equal to .     Incorrect, it produced which is not equal to .     Correct!   "
},
{
  "id": "main-5-4-4-7-5",
  "level": "2",
  "url": "main-5-4-4.html#main-5-4-4-7-5",
  "type": "Reading Question",
  "number": "3.2.2.4",
  "title": "<em class=\"emphasis\">True\/False.<\/em> The correct solution only contained an <span class=\"process-math\">\\(x\\)<\/span> term.",
  "body": "True\/False. The correct solution only contained an term   True  Incorrect, the correct solution also contained a constant term.    False  Correct! The correct solution contained both an and a constant term   "
},
{
  "id": "main-5-4-5",
  "level": "1",
  "url": "main-5-4-5.html",
  "type": "Subsection",
  "number": "3.2.3",
  "title": "Selecting <span class=\"process-math\">\\(y_p\\)<\/span> Forms, Part 1",
  "body": "Selecting Forms, Part 1  At this point, if we are given the nonhomogeneous differential equation, , we know its general solution has a homogeneous part, found by solving and a particular part that is expected to give us the term on the right-hand side of the equation. The aim of this section is to introduce a strategy for predicting the form of the particular solution based on the form of .  When is a polynomial, exponential, sine, cosine, or a combination of these functions, we can safely assume that form of the particular solution should resemble the form of . That is, if is a polynomial, then should also be a polynomial. If is an exponential, then should also be an exponential, and so on. You can use as a guide for selecting .   Selecting given . The same pattern extends to polynomials of degree higher than 3. Assume and are constants.       - Type   - Form    constant       deg 1 polynomial       deg 2 polynomial       deg 3 polynomial       exponential,        sine,        cosine,        sine + cosine,         Check your Understanding  Match the form  Suppose we want the form of particular solution, , for the equation . Drag the form of that you would use for each function, .                                             "
},
{
  "id": "yp-table",
  "level": "2",
  "url": "main-5-4-5.html#yp-table",
  "type": "Table",
  "number": "3.14",
  "title": "Selecting <span class=\"process-math\">\\(y_p\\)<\/span> given <span class=\"process-math\">\\(f(x)\\text{.}\\)<\/span> <details class=\"ptx-footnote\" aria-live=\"polite\" id=\"yp-table-1-3\"><summary class=\"ptx-footnote__number\" title=\"Footnote 4\"><sup> 4 <\/sup><\/summary><div class=\"ptx-footnote__contents\" id=\"yp-table-1-3\">The same pattern extends to polynomials of degree higher than 3.<\/div><\/details> Assume <span class=\"process-math\">\\(\\alpha\\)<\/span> and <span class=\"process-math\">\\(\\beta\\)<\/span> are constants.",
  "body": " Selecting given . The same pattern extends to polynomials of degree higher than 3. Assume and are constants.       - Type   - Form    constant       deg 1 polynomial       deg 2 polynomial       deg 3 polynomial       exponential,        sine,        cosine,        sine + cosine,        "
},
{
  "id": "yp-form-matching-1",
  "level": "2",
  "url": "main-5-4-5.html#yp-form-matching-1",
  "type": "Reading Question",
  "number": "3.2.3.1",
  "title": "Match the <span class=\"process-math\">\\(y_p\\)<\/span> form.",
  "body": "Match the form  Suppose we want the form of particular solution, , for the equation . Drag the form of that you would use for each function, .                                           "
},
{
  "id": "main-5-4-6",
  "level": "1",
  "url": "main-5-4-6.html",
  "type": "Subsection",
  "number": "3.2.4",
  "title": "Selecting <span class=\"process-math\">\\(y_p\\)<\/span> Forms, Part 2",
  "body": "Selecting Forms, Part 2   only lists the choice of when is a single function, but we can apply these rules to find the form of when is a sum or product of the same type of functions. Here are some examples of of both of these situations.    Find the form of for the equation .    We can find the form of by considering each term on the right-hand side of the equation.  For , we use as the form of .  For , we use as the form of .  For , we use as the form of .  For , we use as the form of .       Selecting given as a product of functions. The same pattern extends to polynomials of degree higher than 2.        - Product Type   - Form    (deg 1 polynomial)        (deg 2 polynomial)          (deg 1 polynomial)   or  (deg 1 polynomial)          (deg 2 polynomial)   or  (deg 2 polynomial)                  or            Check your Understanding  Match the form  Suppose we want the form of particular solution, , for the equation . Drag the form of that you would use for each function, .                                                                                     "
},
{
  "id": "main-5-4-6-3",
  "level": "2",
  "url": "main-5-4-6.html#main-5-4-6-3",
  "type": "Example",
  "number": "3.15",
  "title": "",
  "body": "  Find the form of for the equation .    We can find the form of by considering each term on the right-hand side of the equation.  For , we use as the form of .  For , we use as the form of .  For , we use as the form of .  For , we use as the form of .     "
},
{
  "id": "yp-product-table",
  "level": "2",
  "url": "main-5-4-6.html#yp-product-table",
  "type": "Table",
  "number": "3.16",
  "title": "Selecting <span class=\"process-math\">\\(y_p\\)<\/span> given <span class=\"process-math\">\\(f(x)\\)<\/span> as a product of functions. <details class=\"ptx-footnote\" aria-live=\"polite\" id=\"yp-product-table-1-3\"><summary class=\"ptx-footnote__number\" title=\"Footnote 5\"><sup> 5 <\/sup><\/summary><div class=\"ptx-footnote__contents\" id=\"yp-product-table-1-3\">The same pattern extends to polynomials of degree higher than 2.<\/div><\/details>",
  "body": " Selecting given as a product of functions. The same pattern extends to polynomials of degree higher than 2.        - Product Type   - Form    (deg 1 polynomial)        (deg 2 polynomial)          (deg 1 polynomial)   or  (deg 1 polynomial)          (deg 2 polynomial)   or  (deg 2 polynomial)                  or           "
},
{
  "id": "yp-form-matching-2",
  "level": "2",
  "url": "main-5-4-6.html#yp-form-matching-2",
  "type": "Reading Question",
  "number": "3.2.4.1",
  "title": "Match the <span class=\"process-math\">\\(y_p\\)<\/span> form.",
  "body": "Match the form  Suppose we want the form of particular solution, , for the equation . Drag the form of that you would use for each function, .                                                                                   "
},
{
  "id": "main-5-4-7",
  "level": "1",
  "url": "main-5-4-7.html",
  "type": "Subsection",
  "number": "3.2.5",
  "title": "Finding <span class=\"process-math\">\\(y_p\\)<\/span> Coefficients",
  "body": "Finding Coefficients  Selecting the correct form of is just the initial step in finding the particular solution. The next task is computing the value of its coefficients (e.g., , , etc.), which we will cover here.  Let's do this by revisiting the example from the introduction. We now know the particular solution to the differential equation has the form and we would like to find the values of and . This is done by plugging into the differential equation and matching the coefficients of the like-terms on both sides of the equation. Plugging in gives The last equation says The first degree polynomial on the LHS is equal to the first degree polynomial on the RHS and the only way two polynomials can be equal is if the coefficients of the like-terms are equal. Visually, this looks like       Tip  It is worth noting that you should get exactly one value for every coefficient. If you find that it is impossible to find a coefficient or if you find multiple values for the same one, then you should double-check your work.    One of the main advantages of this method is that it reduces the problem down to an algebra problem. The algebra can get messy on occasion, but for most of the problems it will not be terribly difficult. Another nice thing about this method is that the complementary solution will not be explicitly required, although as we will see knowledge of the complementary solution will be needed in some cases and so we'll generally find that as well.  There are two disadvantages to this method. First, it will only work for a fairly small class of 's for which the method works, does include some of the more common functions, however, there are many functions out there for which undetermined coefficients simply won't work. Second, it is generally only useful for constant coefficient differential equations.  The method is quite simple. All that we need to do is look at leaving the coefficient(s) undetermined (and hence the name of the method). Plug the guess into the differential equation and see if we can determine values of the coefficients. If we can determine values for the coefficients then we guessed correctly, if we can't find values for the coefficients then we guessed incorrectly.  It's usually easier to see this method in action rather than to try and describe it, so let's jump into some examples.  Example 1  Determine a particular solution to    The point here is to find a particular solution, however the first thing that we're going to do is find the complementary solution to this differential equation. Recall that the complementary solution comes from solving,   The characteristic equation for this differential equation and its roots are.   The complementary solution is then,   At this point the reason for doing this first will not be apparent, however we want you in the habit of finding it before we start the work to find a particular solution. Eventually, as we'll see, having the complementary solution in hand will be helpful and so it's best to be in the habit of finding it first prior to doing the work for undetermined coefficients.  Now, let's proceed with finding a particular solution. As mentioned prior to the start of this example we need to make a guess as to the form of a particular solution to this differential equation. Since is an exponential and we know that exponentials never just appear or disappear in the differentiation process it seems that a likely form of the particular solution would be   Now, all that we need to do is do a couple of derivatives, plug this into the differential equation and see if we can determine what needs to be.  Plugging into the differential equation gives   So, in order for our guess to be a solution we will need to choose so that, Okay, we found a value for the coefficient. This means that we guessed correctly. A particular solution to the differential equation is then,     Before proceeding any further let's again note that we started off the solution above by finding the complementary solution. This is not technically part the method of Undetermined Coefficients however, as we'll eventually see, having this in hand before we make our guess for the particular solution can save us a lot of work and\/or headache. Finding the complementary solution first is simply a good habit to have so we'll try to get you in the habit over the course of the next few examples. At this point do not worry about why it is a good habit. We'll eventually see why it is a good habit.  Now, back to the work at hand. Notice in the last example that we kept saying a” particular solution, not “the particular solution. This is because there are other possibilities out there for the particular solution we've just managed to find one of them. Any of them will work when it comes to writing down the general solution to the differential equation.  Speaking of which… This section is devoted to finding particular solutions and most of the examples will be finding only the particular solution. However, we should do at least one full blown IVP to make sure that we can say that we've done one.  Example 2  Solve the following IVP    We know that the general solution will be of the form,   and we already have both the complementary and particular solution from the first example so we don't really need to do any extra work for this problem.  One of the more common mistakes in these problems is to find the complementary solution and then, because we're probably in the habit of doing it, apply the initial conditions to the complementary solution to find the constants. This however, is incorrect. The complementary solution is only the solution to the homogeneous differential equation and we are after a solution to the nonhomogeneous differential equation and the initial conditions must satisfy that solution instead of the complementary solution.  So, we need the general solution to the nonhomogeneous differential equation. Taking the complementary solution and the particular solution that we found in the previous example we get the following for a general solution and its derivative.   Now, apply the initial conditions to these.   Solving this system gives . The actual solution is then.     This will be the only IVP in this section so don't forget how these are done for nonhomogeneous differential equations!  Let's take a look at another example that will give the second type of for which undetermined coefficients will work.  Example 3  Find a particular solution for the following differential equation.    Again, let's note that we should probably find the complementary solution before we proceed onto the guess for a particular solution. However, because the homogeneous differential equation for this example is the same as that for the first example we won't bother with that here.  Now, let's take our experience from the first example and apply that here. The first example had an exponential function in the and our guess was an exponential. This differential equation has a sine so let's try the following guess for the particular solution.   Differentiating and plugging into the differential equation gives,   Collecting like terms yields   We need to pick so that we get the same function on both sides of the equal sign. This means that the coefficients of the sines and cosines must be equal. Or,   Notice two things. First, since there is no cosine on the right hand side this means that the coefficient must be zero on that side. More importantly we have a serious problem here. In order for the cosine to drop out, as it must in order for the guess to satisfy the differential equation, we need to set to keep the sine around will also keep the cosine around.  What this means is that our initial guess was wrong. If we get multiple values of the same constant or are unable to find the value of a constant then we have guessed wrong.  One of the nicer aspects of this method is that when we guess wrong our work will often suggest a fix. In this case the problem was the cosine that cropped up. So, to counter this let's add a cosine to our guess. Our new guess is   Plugging this into the differential equation and collecting like terms gives,   Now, set the coefficients equal   Solving this system gives us   We found constants and this time we guessed correctly. A particular solution to the differential equation is then,     Notice that if we had had a cosine instead of a sine in the last example then our guess would have been the same. In fact, if both a sine and a cosine had shown up we will see that the same guess will also work.  Let's take a look at the third and final type of basic that we can have, but as we will see they will all come back to two types that we've already done as well as the next one.  Example 4  Find a particular solution for the following differential equation.    Once, again we will generally want the complementary solution in hand first, but again we're working with the same homogeneous differential equation (you'll eventually see why we keep working with the same homogeneous problem) so we'll again just refer to the first example.  For this example, is a cubic polynomial. For this we will need the following guess for the particular solution.   Notice that even though in it our guess will still need one! So, differentiate and plug into the differential equation.   Now, as we've done in the previous examples we will need the coefficients of the terms on both sides of the equal sign to be the same so set coefficients equal and solve. Notice that in this case it was very easy to solve for the constants. The first equation gave , etc . A particular solution for this differential equation is then     Now that we've gone over the three basic kinds of functions that we can use undetermined coefficients on let's summarize.     guess                        Notice that there are really only three kinds of functions given above. If you think about it the single cosine and single sine functions are really special cases of the case where both the sine and cosine are present. Also, we have not yet justified the guess for the case where both a sine and a cosine show up. We will justify this later.  We now need move on to some more complicated functions. The more complicated functions arise by taking products and sums of the basic kinds of functions. Let's first look at products.  Example 5  Find a particular solution for the following differential equation.    You're probably getting tired of the opening comment, but again finding the complementary solution first really a good idea but again we've already done the work in the first example so we won't do it again here. We promise that eventually you'll see why we keep using the same homogeneous problem and why we say it's a good idea to have the complementary solution in hand first. At this point all we're trying to do is reinforce the habit of finding the complementary solution first.  Okay, let's start off by writing down the guesses for the individual pieces of the function. The guess for the would be   while the guess for the exponential would be   Now, since we've got a product of two functions it seems like taking a product of the guesses for the individual pieces might work. Doing this would give   However, we will have problems with this. As we will see, when we plug our guess into the differential equation we will only get two equations out of this. The problem is that with this guess we've got three unknown constants. With only two equations we won't be able to solve for all the constants.  This is easy to fix however. Let's notice that we could do the following   If we multiply the through, we can see that the guess can be written in such a way that there are really only two constants. So, we will use the following for our guess.   Notice that this is nothing more than the guess for the with an exponential tacked on for good measure.  Now that we've got our guess, let's differentiate, plug into the differential equation and collect like terms.   Note that when we're collecting like terms we want the coefficient of each term to have only constants in it. Following this rule we will get two terms when we collect like terms. Now, set coefficients equal.   A particular solution for this differential equation is then     This last example illustrated the general rule that we will follow when products involve an exponential. When a product involves an exponential we will first strip out the exponential and write down the guess for the portion of the function without the exponential, then we will go back and tack on the exponential without any leading coefficient.  Let's take a look at some more products. In the interest of brevity we will just write down the guess for a particular solution and not go through all the details of finding the constants. Also, because we aren't going to give an actual differential equation we can't deal with finding the complementary solution first.  Example 6  Write down the form of the particular solution to        a g\\left( t \\right) = 16{{\\bf{e}}^{7t}}\\sin \\left( {10t} \\right)  So, we have an exponential in the function. Remember the rule. We will ignore the exponential and write down a guess for then put the exponential back in.  The guess for the sine is   Now, for the actual guess for the particular solution we'll take the above guess and tack an exponential onto it. This gives,   One final note before we move onto the next part. The 16 in front of the function has absolutely no bearing on our guess. Any constants multiplying the whole function are ignored.    b g\\left( t \\right) = \\left( {9{t^2} - 103t} \\right)\\cos t  We will start this one the same way that we initially started the previous example. The guess for the polynomial is   and the guess for the cosine is   If we multiply the two guesses we get.   Let's simplify things up a little. First multiply the polynomial through as follows.   Notice that everywhere one of the unknown constants occurs it is in a product of unknown constants. This means that if we went through and used this as our guess the system of equations that we would need to solve for the unknown constants would have products of the unknowns in them. These types of systems are generally very difficult to solve.  So, to avoid this we will do the same thing that we did in the previous example. Everywhere we see a product of constants we will rename it and call it a single constant. The guess that we'll use for this function will be.   This is a general rule that we will use when faced with a product of a polynomial and a trig function. We write down the guess for the polynomial and then multiply that by a cosine. We then write down the guess for the polynomial again, using different coefficients, and multiply this by a sine.    c g\\left( t \\right) = - {{\\bf{e}}^{ - 2t}}\\left( {3 - 5t} \\right)\\cos \\left( {9t} \\right)  This final part has all three parts to it. First, we will ignore the exponential and write down a guess for.   The minus sign can also be ignored. The guess for this is   Now, tack an exponential back on and we're done.   Notice that we put the exponential on both terms.     There a couple of general rules that you need to remember for products.   If contains an exponential, ignore it and write down the guess for the remainder. Then tack the exponential back on without any leading coefficient.  For products of polynomials and trig functions you first write down the guess for just the polynomial and multiply that by the appropriate cosine. Then add on a new guess for the polynomial with different coefficients and multiply that by the appropriate sine.   If you can remember these two rules you can't go wrong with products. Writing down the guesses for products is usually not that difficult. The difficulty arises when you need to actually find the constants.  Now, let's take a look at sums of the basic components and\/or products of the basic components. To do this we'll need the following fact.   If is a particular solution for   and if is a particular solution for   then is a particular solution for    This fact can be used to both find particular solutions to differential equations that have sums in them and to write down guess for functions that have sums in them.  Example 7  Find a particular solution for the following differential equation.    This example is the reason that we've been using the same homogeneous differential equation for all the previous examples. There is nothing to do with this problem. All that we need to do it go back to the appropriate examples above and get the particular solution from that example and add them all together.  Doing this gives     Let's take a look at a couple of other examples. As with the products we'll just get guesses here and not worry about actually finding the coefficients.  Example 8  Write down the form of the particular solution to  for the following 's.            a g\\left( t \\right) = 4\\cos \\left( {6t} \\right) - 9\\sin \\left( {6t} \\right)  This first one we've actually already told you how to do. This is in the table of the basic functions. However, we wanted to justify the guess that we put down there. Using the fact on sums of function we would be tempted to write down a guess for the cosine and a guess for the sine. This would give.   So, we would get a cosine from each guess and a sine from each guess. The problem with this as a guess is that we are only going to get two equations to solve after plugging into the differential equation and yet we have 4 unknowns. We will never be able to solve for each of the constants.  To fix this notice that we can combine some terms as follows.   Upon doing this we can see that we've really got a single cosine with a coefficient and a single sine with a coefficient and so we may as well just use   The general rule of thumb for writing down guesses for functions that involve sums is to always combine like terms into single terms with single coefficients. This will greatly simplify the work required to find the coefficients.    b g\\left( t \\right) = - 2\\sin t + \\sin \\left( {14t} \\right) - 5\\cos \\left( {14t} \\right)  For this one we will get two sets of sines and cosines. This will arise because we have two different arguments in them. We will get one set for the sine with just a as their arguments.  The guess for this function is     c g\\left( t \\right) = {{\\bf{e}}^{7t}} + 6  The main point of this problem is dealing with the constant. But that isn't too bad. We just wanted to make sure that an example of that is somewhere in the notes. If you recall that a constant is nothing more than a zeroth degree polynomial the guess becomes clear.  The guess for this function is     d g\\left( t \\right) = 6{t^2} - 7\\sin \\left( {3t} \\right) + 9  This one can be a little tricky if you aren't paying attention. Let's first rewrite the function   All we did was move the 9. However, upon doing that we see that the function is really a sum of a quadratic polynomial and a sine. The guess for this is then   If we don't do this and treat the function as the sum of three terms we would get   and as with the first part in this example we would end up with two terms that are essentially the same (the ) and so would need to be combined. An added step that isn't really necessary if we first rewrite the function.  Look for problems where rearranging the function can simplify the initial guess.    e g\\left( t \\right) = 10{{\\bf{e}}^t} - 5t{{\\bf{e}}^{ - 8t}} + 2{{\\bf{e}}^{ - 8t}}  So, this look like we've got a sum of three terms here. Let's write down a guess for that.   Notice however that if we were to multiply the exponential in the second term through we would end up with two terms that are essentially the same and would need to be combined. This is a case where the guess for one term is completely contained in the guess for a different term. When this happens we just drop the guess that's already included in the other term.  So, the guess here is actually.   Notice that this arose because we had two terms in our whose only difference was the polynomial that sat in front of them. When this happens we look at the term that contains the largest degree polynomial, write down the guess for that and don't bother writing down the guess for the other term as that guess will be completely contained in the first guess.    f g\\left( t \\right) = {t^2}\\cos t - 5t\\sin t  In this case we've got two terms whose guess without the polynomials in front of them would be the same. Therefore, we will take the one with the largest degree polynomial in front of it and write down the guess for that one and ignore the other term. So, the guess for the function is     g g\\left( t \\right) = 5{{\\bf{e}}^{ - 3t}} + {{\\bf{e}}^{ - 3t}}\\cos \\left( {6t} \\right) - \\sin \\left( {6t} \\right)  This last part is designed to make sure you understand the general rule that we used in the last two parts. This time there really are three terms and we will need a guess for each term. The guess here is   We can only combine guesses if they are identical up to the constant. So, we can't combine the first exponential with the second because the second is really multiplied by a cosine and a sine and so the two exponentials are in fact different functions. Likewise, the last sine and cosine can't be combined with those in the middle term because the sine and cosine in the middle term are in fact multiplied by an exponential and so are different.     So, when dealing with sums of functions make sure that you look for identical guesses that may or may not be contained in other guesses and combine them. This will simplify your work later on.  We have one last topic in this section that needs to be dealt with. In the first few examples we were constantly harping on the usefulness of having the complementary solution in hand before making the guess for a particular solution. We never gave any reason for this other that trust us . It is now time to see why having the complementary solution in hand first is useful. This is best shown with an example so let's jump into one.  Example 9  Find a particular solution for the following differential equation.    This problem seems almost too simple to be given this late in the section. This is especially true given the ease of finding a particular solution for )'s that are just exponential functions. Also, because the point of this example is to illustrate why it is generally a good idea to have the complementary solution in hand first we'll let's go ahead and recall the complementary solution first. Here it is,   Now, without worrying about the complementary solution for a couple more seconds let's go ahead and get to work on the particular solution. There is not much to the guess here. From our previous work we know that the guess for the particular solution should be,   Plugging this into the differential equation gives,   Hmmmm…. Something seems wrong here. Clearly an exponential can't be zero. So, what went wrong? We finally need the complementary solution. Notice that the second term in the complementary solution (listed above) is exactly our guess for the form of the particular solution and now recall that both portions of the complementary solution are solutions to the homogeneous differential equation,   In other words, we had better have gotten zero by plugging our guess into the differential equation, it is a solution to the homogeneous differential equation!  So, how do we fix this? The way that we fix this is to add a to our guess as follows.   Plugging this into our differential equation gives,   Now, we can set coefficients equal.   So, the particular solution in this case is,     So, what did we learn from this last example. While technically we don't need the complementary solution to do undetermined coefficients, you can go through a lot of work only to figure out at the end that you needed to add in a to the guess because it appeared in the complementary solution. This work is avoidable if we first find the complementary solution and comparing our guess to the complementary solution and seeing if any portion of your guess shows up in the complementary solution.  If a portion of your guess does show up in the complementary solution then we'll need to modify that portion of the guess by adding in a in the correct place however. The following set of examples will show you how to do this.  Example 10  Write down the guess for the particular solution to the given differential equation. Do not find the coefficients.          In these solutions we'll leave the details of checking the complementary solution to you.   a y'' + 3y' - 28y = 7t + {{\\bf{e}}^{ - 7t}} - 1  The complementary solution is   Remembering to put the -1 with the 7 gives a first guess for the particular solution.   Notice that the last term in the guess is the last term in the complementary solution. The first two terms however aren't a problem and don't appear in the complementary solution. Therefore, we will only add a onto the last term.  The correct guess for the form of the particular solution is.     b y'' - 100y = 9{t^2}{{\\bf{e}}^{10t}} + \\cos t - t\\sin t  The complementary solution is   A first guess for the particular solution is   Notice that if we multiplied the exponential term through the parenthesis that we would end up getting part of the complementary solution showing up. Since the problem part arises from the first term the whole first term will get multiplied by . The second and third terms are okay as they are.  The correct guess for the form of the particular solution in this case is.   So, in general, if you were to multiply out a guess and if any term in the result shows up in the complementary solution, then the whole term will get a not just the problem portion of the term.    c    The complementary solution is   A first guess for the particular solution is   In this case both the second and third terms contain portions of the complementary solution. The first term doesn't however, since upon multiplying out, both the sine and the cosine would have an exponential with them and that isn't part of the complementary solution. We only need to worry about terms showing up in the complementary solution if the only difference between the complementary solution term and the particular guess term is the constant in front of them.  So, in this case the second and third terms will get a while the first won't  The correct guess for the form of the particular solution is.     d 4y'' + 16y' + 17y = {{\\bf{e}}^{ - 2t}}\\sin \\left( {\\frac{t}{2}} \\right) + 6t\\cos \\left( {\\frac{t}{2}} \\right)  To get this problem we changed the differential equation from the last example and left the alone. The complementary solution this time is   As with the last part, a first guess for the particular solution is   This time however it is the first term that causes problems and not the second or third. In fact, the first term is exactly the complementary solution and so it will need a . Recall that we will only have a problem with a term in our guess if it only differs from the complementary solution by a constant. The second and third terms in our guess don't have the exponential in them and so they don't differ from the complementary solution by only a constant.  The correct guess for the form of the particular solution is.     e y'' + 8y' + 16y = {{\\bf{e}}^{ - 4t}} + \\left( {{t^2} + 5} \\right){{\\bf{e}}^{ - 4t}}  The complementary solution is   The two terms in are identical with the exception of a polynomial in front of them. So this means that we only need to look at the term with the highest degree polynomial in front of it. A first guess for the particular solution is   Notice that if we multiplied the exponential term through the parenthesis the last two terms would be the complementary solution. Therefore, we will need to multiply this whole thing by a .  The next guess for the particular solution is then.   This still causes problems however. If we multiplied the to our guess.  The correct guess for the form of the particular solution is.   Upon multiplying this out none of the terms are in the complementary solution and so it will be okay.       As this last set of examples has shown, we really should have the complementary solution in hand before even writing down the first guess for the particular solution. By doing this we can compare our guess to the complementary solution and if any of the terms from your particular solution show up we will know that we'll have problems. Once the problem is identified we can add a and compare again.  Can you see a general rule as to when a will be needed and when a t 2 will be needed for second order differential equations?  Check your Understanding   Needs to be written   OK     "
},
{
  "id": "main-5-4-7-10",
  "level": "2",
  "url": "main-5-4-7.html#main-5-4-7-10",
  "type": "Example",
  "number": "3.17",
  "title": "Example 1.",
  "body": "Example 1  Determine a particular solution to    The point here is to find a particular solution, however the first thing that we're going to do is find the complementary solution to this differential equation. Recall that the complementary solution comes from solving,   The characteristic equation for this differential equation and its roots are.   The complementary solution is then,   At this point the reason for doing this first will not be apparent, however we want you in the habit of finding it before we start the work to find a particular solution. Eventually, as we'll see, having the complementary solution in hand will be helpful and so it's best to be in the habit of finding it first prior to doing the work for undetermined coefficients.  Now, let's proceed with finding a particular solution. As mentioned prior to the start of this example we need to make a guess as to the form of a particular solution to this differential equation. Since is an exponential and we know that exponentials never just appear or disappear in the differentiation process it seems that a likely form of the particular solution would be   Now, all that we need to do is do a couple of derivatives, plug this into the differential equation and see if we can determine what needs to be.  Plugging into the differential equation gives   So, in order for our guess to be a solution we will need to choose so that, Okay, we found a value for the coefficient. This means that we guessed correctly. A particular solution to the differential equation is then,    "
},
{
  "id": "main-5-4-7-14",
  "level": "2",
  "url": "main-5-4-7.html#main-5-4-7-14",
  "type": "Example",
  "number": "3.18",
  "title": "Example 2.",
  "body": "Example 2  Solve the following IVP    We know that the general solution will be of the form,   and we already have both the complementary and particular solution from the first example so we don't really need to do any extra work for this problem.  One of the more common mistakes in these problems is to find the complementary solution and then, because we're probably in the habit of doing it, apply the initial conditions to the complementary solution to find the constants. This however, is incorrect. The complementary solution is only the solution to the homogeneous differential equation and we are after a solution to the nonhomogeneous differential equation and the initial conditions must satisfy that solution instead of the complementary solution.  So, we need the general solution to the nonhomogeneous differential equation. Taking the complementary solution and the particular solution that we found in the previous example we get the following for a general solution and its derivative.   Now, apply the initial conditions to these.   Solving this system gives . The actual solution is then.    "
},
{
  "id": "main-5-4-7-17",
  "level": "2",
  "url": "main-5-4-7.html#main-5-4-7-17",
  "type": "Example",
  "number": "3.19",
  "title": "Example 3.",
  "body": "Example 3  Find a particular solution for the following differential equation.    Again, let's note that we should probably find the complementary solution before we proceed onto the guess for a particular solution. However, because the homogeneous differential equation for this example is the same as that for the first example we won't bother with that here.  Now, let's take our experience from the first example and apply that here. The first example had an exponential function in the and our guess was an exponential. This differential equation has a sine so let's try the following guess for the particular solution.   Differentiating and plugging into the differential equation gives,   Collecting like terms yields   We need to pick so that we get the same function on both sides of the equal sign. This means that the coefficients of the sines and cosines must be equal. Or,   Notice two things. First, since there is no cosine on the right hand side this means that the coefficient must be zero on that side. More importantly we have a serious problem here. In order for the cosine to drop out, as it must in order for the guess to satisfy the differential equation, we need to set to keep the sine around will also keep the cosine around.  What this means is that our initial guess was wrong. If we get multiple values of the same constant or are unable to find the value of a constant then we have guessed wrong.  One of the nicer aspects of this method is that when we guess wrong our work will often suggest a fix. In this case the problem was the cosine that cropped up. So, to counter this let's add a cosine to our guess. Our new guess is   Plugging this into the differential equation and collecting like terms gives,   Now, set the coefficients equal   Solving this system gives us   We found constants and this time we guessed correctly. A particular solution to the differential equation is then,    "
},
{
  "id": "main-5-4-7-20",
  "level": "2",
  "url": "main-5-4-7.html#main-5-4-7-20",
  "type": "Example",
  "number": "3.20",
  "title": "Example 4.",
  "body": "Example 4  Find a particular solution for the following differential equation.    Once, again we will generally want the complementary solution in hand first, but again we're working with the same homogeneous differential equation (you'll eventually see why we keep working with the same homogeneous problem) so we'll again just refer to the first example.  For this example, is a cubic polynomial. For this we will need the following guess for the particular solution.   Notice that even though in it our guess will still need one! So, differentiate and plug into the differential equation.   Now, as we've done in the previous examples we will need the coefficients of the terms on both sides of the equal sign to be the same so set coefficients equal and solve. Notice that in this case it was very easy to solve for the constants. The first equation gave , etc . A particular solution for this differential equation is then    "
},
{
  "id": "main-5-4-7-25",
  "level": "2",
  "url": "main-5-4-7.html#main-5-4-7-25",
  "type": "Example",
  "number": "3.21",
  "title": "Example 5.",
  "body": "Example 5  Find a particular solution for the following differential equation.    You're probably getting tired of the opening comment, but again finding the complementary solution first really a good idea but again we've already done the work in the first example so we won't do it again here. We promise that eventually you'll see why we keep using the same homogeneous problem and why we say it's a good idea to have the complementary solution in hand first. At this point all we're trying to do is reinforce the habit of finding the complementary solution first.  Okay, let's start off by writing down the guesses for the individual pieces of the function. The guess for the would be   while the guess for the exponential would be   Now, since we've got a product of two functions it seems like taking a product of the guesses for the individual pieces might work. Doing this would give   However, we will have problems with this. As we will see, when we plug our guess into the differential equation we will only get two equations out of this. The problem is that with this guess we've got three unknown constants. With only two equations we won't be able to solve for all the constants.  This is easy to fix however. Let's notice that we could do the following   If we multiply the through, we can see that the guess can be written in such a way that there are really only two constants. So, we will use the following for our guess.   Notice that this is nothing more than the guess for the with an exponential tacked on for good measure.  Now that we've got our guess, let's differentiate, plug into the differential equation and collect like terms.   Note that when we're collecting like terms we want the coefficient of each term to have only constants in it. Following this rule we will get two terms when we collect like terms. Now, set coefficients equal.   A particular solution for this differential equation is then    "
},
{
  "id": "main-5-4-7-28",
  "level": "2",
  "url": "main-5-4-7.html#main-5-4-7-28",
  "type": "Example",
  "number": "3.22",
  "title": "Example 6.",
  "body": "Example 6  Write down the form of the particular solution to        a g\\left( t \\right) = 16{{\\bf{e}}^{7t}}\\sin \\left( {10t} \\right)  So, we have an exponential in the function. Remember the rule. We will ignore the exponential and write down a guess for then put the exponential back in.  The guess for the sine is   Now, for the actual guess for the particular solution we'll take the above guess and tack an exponential onto it. This gives,   One final note before we move onto the next part. The 16 in front of the function has absolutely no bearing on our guess. Any constants multiplying the whole function are ignored.    b g\\left( t \\right) = \\left( {9{t^2} - 103t} \\right)\\cos t  We will start this one the same way that we initially started the previous example. The guess for the polynomial is   and the guess for the cosine is   If we multiply the two guesses we get.   Let's simplify things up a little. First multiply the polynomial through as follows.   Notice that everywhere one of the unknown constants occurs it is in a product of unknown constants. This means that if we went through and used this as our guess the system of equations that we would need to solve for the unknown constants would have products of the unknowns in them. These types of systems are generally very difficult to solve.  So, to avoid this we will do the same thing that we did in the previous example. Everywhere we see a product of constants we will rename it and call it a single constant. The guess that we'll use for this function will be.   This is a general rule that we will use when faced with a product of a polynomial and a trig function. We write down the guess for the polynomial and then multiply that by a cosine. We then write down the guess for the polynomial again, using different coefficients, and multiply this by a sine.    c g\\left( t \\right) = - {{\\bf{e}}^{ - 2t}}\\left( {3 - 5t} \\right)\\cos \\left( {9t} \\right)  This final part has all three parts to it. First, we will ignore the exponential and write down a guess for.   The minus sign can also be ignored. The guess for this is   Now, tack an exponential back on and we're done.   Notice that we put the exponential on both terms.    "
},
{
  "id": "main-5-4-7-33",
  "level": "2",
  "url": "main-5-4-7.html#main-5-4-7-33",
  "type": "Fact",
  "number": "3.23",
  "title": "",
  "body": " If is a particular solution for   and if is a particular solution for   then is a particular solution for   "
},
{
  "id": "main-5-4-7-35",
  "level": "2",
  "url": "main-5-4-7.html#main-5-4-7-35",
  "type": "Example",
  "number": "3.24",
  "title": "Example 7.",
  "body": "Example 7  Find a particular solution for the following differential equation.    This example is the reason that we've been using the same homogeneous differential equation for all the previous examples. There is nothing to do with this problem. All that we need to do it go back to the appropriate examples above and get the particular solution from that example and add them all together.  Doing this gives    "
},
{
  "id": "main-5-4-7-37",
  "level": "2",
  "url": "main-5-4-7.html#main-5-4-7-37",
  "type": "Example",
  "number": "3.25",
  "title": "Example 8.",
  "body": "Example 8  Write down the form of the particular solution to  for the following 's.            a g\\left( t \\right) = 4\\cos \\left( {6t} \\right) - 9\\sin \\left( {6t} \\right)  This first one we've actually already told you how to do. This is in the table of the basic functions. However, we wanted to justify the guess that we put down there. Using the fact on sums of function we would be tempted to write down a guess for the cosine and a guess for the sine. This would give.   So, we would get a cosine from each guess and a sine from each guess. The problem with this as a guess is that we are only going to get two equations to solve after plugging into the differential equation and yet we have 4 unknowns. We will never be able to solve for each of the constants.  To fix this notice that we can combine some terms as follows.   Upon doing this we can see that we've really got a single cosine with a coefficient and a single sine with a coefficient and so we may as well just use   The general rule of thumb for writing down guesses for functions that involve sums is to always combine like terms into single terms with single coefficients. This will greatly simplify the work required to find the coefficients.    b g\\left( t \\right) = - 2\\sin t + \\sin \\left( {14t} \\right) - 5\\cos \\left( {14t} \\right)  For this one we will get two sets of sines and cosines. This will arise because we have two different arguments in them. We will get one set for the sine with just a as their arguments.  The guess for this function is     c g\\left( t \\right) = {{\\bf{e}}^{7t}} + 6  The main point of this problem is dealing with the constant. But that isn't too bad. We just wanted to make sure that an example of that is somewhere in the notes. If you recall that a constant is nothing more than a zeroth degree polynomial the guess becomes clear.  The guess for this function is     d g\\left( t \\right) = 6{t^2} - 7\\sin \\left( {3t} \\right) + 9  This one can be a little tricky if you aren't paying attention. Let's first rewrite the function   All we did was move the 9. However, upon doing that we see that the function is really a sum of a quadratic polynomial and a sine. The guess for this is then   If we don't do this and treat the function as the sum of three terms we would get   and as with the first part in this example we would end up with two terms that are essentially the same (the ) and so would need to be combined. An added step that isn't really necessary if we first rewrite the function.  Look for problems where rearranging the function can simplify the initial guess.    e g\\left( t \\right) = 10{{\\bf{e}}^t} - 5t{{\\bf{e}}^{ - 8t}} + 2{{\\bf{e}}^{ - 8t}}  So, this look like we've got a sum of three terms here. Let's write down a guess for that.   Notice however that if we were to multiply the exponential in the second term through we would end up with two terms that are essentially the same and would need to be combined. This is a case where the guess for one term is completely contained in the guess for a different term. When this happens we just drop the guess that's already included in the other term.  So, the guess here is actually.   Notice that this arose because we had two terms in our whose only difference was the polynomial that sat in front of them. When this happens we look at the term that contains the largest degree polynomial, write down the guess for that and don't bother writing down the guess for the other term as that guess will be completely contained in the first guess.    f g\\left( t \\right) = {t^2}\\cos t - 5t\\sin t  In this case we've got two terms whose guess without the polynomials in front of them would be the same. Therefore, we will take the one with the largest degree polynomial in front of it and write down the guess for that one and ignore the other term. So, the guess for the function is     g g\\left( t \\right) = 5{{\\bf{e}}^{ - 3t}} + {{\\bf{e}}^{ - 3t}}\\cos \\left( {6t} \\right) - \\sin \\left( {6t} \\right)  This last part is designed to make sure you understand the general rule that we used in the last two parts. This time there really are three terms and we will need a guess for each term. The guess here is   We can only combine guesses if they are identical up to the constant. So, we can't combine the first exponential with the second because the second is really multiplied by a cosine and a sine and so the two exponentials are in fact different functions. Likewise, the last sine and cosine can't be combined with those in the middle term because the sine and cosine in the middle term are in fact multiplied by an exponential and so are different.    "
},
{
  "id": "main-5-4-7-40",
  "level": "2",
  "url": "main-5-4-7.html#main-5-4-7-40",
  "type": "Example",
  "number": "3.26",
  "title": "Example 9.",
  "body": "Example 9  Find a particular solution for the following differential equation.    This problem seems almost too simple to be given this late in the section. This is especially true given the ease of finding a particular solution for )'s that are just exponential functions. Also, because the point of this example is to illustrate why it is generally a good idea to have the complementary solution in hand first we'll let's go ahead and recall the complementary solution first. Here it is,   Now, without worrying about the complementary solution for a couple more seconds let's go ahead and get to work on the particular solution. There is not much to the guess here. From our previous work we know that the guess for the particular solution should be,   Plugging this into the differential equation gives,   Hmmmm…. Something seems wrong here. Clearly an exponential can't be zero. So, what went wrong? We finally need the complementary solution. Notice that the second term in the complementary solution (listed above) is exactly our guess for the form of the particular solution and now recall that both portions of the complementary solution are solutions to the homogeneous differential equation,   In other words, we had better have gotten zero by plugging our guess into the differential equation, it is a solution to the homogeneous differential equation!  So, how do we fix this? The way that we fix this is to add a to our guess as follows.   Plugging this into our differential equation gives,   Now, we can set coefficients equal.   So, the particular solution in this case is,    "
},
{
  "id": "main-5-4-7-43",
  "level": "2",
  "url": "main-5-4-7.html#main-5-4-7-43",
  "type": "Example",
  "number": "3.27",
  "title": "Example 10.",
  "body": "Example 10  Write down the guess for the particular solution to the given differential equation. Do not find the coefficients.          In these solutions we'll leave the details of checking the complementary solution to you.   a y'' + 3y' - 28y = 7t + {{\\bf{e}}^{ - 7t}} - 1  The complementary solution is   Remembering to put the -1 with the 7 gives a first guess for the particular solution.   Notice that the last term in the guess is the last term in the complementary solution. The first two terms however aren't a problem and don't appear in the complementary solution. Therefore, we will only add a onto the last term.  The correct guess for the form of the particular solution is.     b y'' - 100y = 9{t^2}{{\\bf{e}}^{10t}} + \\cos t - t\\sin t  The complementary solution is   A first guess for the particular solution is   Notice that if we multiplied the exponential term through the parenthesis that we would end up getting part of the complementary solution showing up. Since the problem part arises from the first term the whole first term will get multiplied by . The second and third terms are okay as they are.  The correct guess for the form of the particular solution in this case is.   So, in general, if you were to multiply out a guess and if any term in the result shows up in the complementary solution, then the whole term will get a not just the problem portion of the term.    c    The complementary solution is   A first guess for the particular solution is   In this case both the second and third terms contain portions of the complementary solution. The first term doesn't however, since upon multiplying out, both the sine and the cosine would have an exponential with them and that isn't part of the complementary solution. We only need to worry about terms showing up in the complementary solution if the only difference between the complementary solution term and the particular guess term is the constant in front of them.  So, in this case the second and third terms will get a while the first won't  The correct guess for the form of the particular solution is.     d 4y'' + 16y' + 17y = {{\\bf{e}}^{ - 2t}}\\sin \\left( {\\frac{t}{2}} \\right) + 6t\\cos \\left( {\\frac{t}{2}} \\right)  To get this problem we changed the differential equation from the last example and left the alone. The complementary solution this time is   As with the last part, a first guess for the particular solution is   This time however it is the first term that causes problems and not the second or third. In fact, the first term is exactly the complementary solution and so it will need a . Recall that we will only have a problem with a term in our guess if it only differs from the complementary solution by a constant. The second and third terms in our guess don't have the exponential in them and so they don't differ from the complementary solution by only a constant.  The correct guess for the form of the particular solution is.     e y'' + 8y' + 16y = {{\\bf{e}}^{ - 4t}} + \\left( {{t^2} + 5} \\right){{\\bf{e}}^{ - 4t}}  The complementary solution is   The two terms in are identical with the exception of a polynomial in front of them. So this means that we only need to look at the term with the highest degree polynomial in front of it. A first guess for the particular solution is   Notice that if we multiplied the exponential term through the parenthesis the last two terms would be the complementary solution. Therefore, we will need to multiply this whole thing by a .  The next guess for the particular solution is then.   This still causes problems however. If we multiplied the to our guess.  The correct guess for the form of the particular solution is.   Upon multiplying this out none of the terms are in the complementary solution and so it will be okay.      "
},
{
  "id": "main-5-4-7-46-2",
  "level": "2",
  "url": "main-5-4-7.html#main-5-4-7-46-2",
  "type": "Example",
  "number": "3.28",
  "title": "",
  "body": " Needs to be written   OK   "
},
{
  "id": "main-5-5",
  "level": "1",
  "url": "main-5-5.html",
  "type": "Section",
  "number": "3.3",
  "title": "Variation of Parameters",
  "body": "Variation of Parameters   "
},
{
  "id": "main-6-3",
  "level": "1",
  "url": "main-6-3.html",
  "type": "Section",
  "number": "4.1",
  "title": "Definition and Properties",
  "body": "Definition and Properties  "
},
{
  "id": "main-6-4",
  "level": "1",
  "url": "main-6-4.html",
  "type": "Section",
  "number": "4.2",
  "title": "Inverse Transforms",
  "body": "Inverse Transforms  "
},
{
  "id": "main-6-5",
  "level": "1",
  "url": "main-6-5.html",
  "type": "Section",
  "number": "4.3",
  "title": "Solving Initial Value Problems",
  "body": "Solving Initial Value Problems  "
},
{
  "id": "main-7-3",
  "level": "1",
  "url": "main-7-3.html",
  "type": "Section",
  "number": "5.1",
  "title": "Linear Systems",
  "body": "Linear Systems  "
},
{
  "id": "main-7-4",
  "level": "1",
  "url": "main-7-4.html",
  "type": "Section",
  "number": "5.2",
  "title": "Nonlinear Systems",
  "body": "Nonlinear Systems  "
},
{
  "id": "main-7-5",
  "level": "1",
  "url": "main-7-5.html",
  "type": "Section",
  "number": "5.3",
  "title": "Applications",
  "body": "Applications  "
},
{
  "id": "main-8-3",
  "level": "1",
  "url": "main-8-3.html",
  "type": "Section",
  "number": "6.1",
  "title": "Euler’s Method",
  "body": "Euler's Method  "
},
{
  "id": "main-8-4",
  "level": "1",
  "url": "main-8-4.html",
  "type": "Section",
  "number": "6.2",
  "title": "Runge-Kutta Methods",
  "body": "Runge-Kutta Methods  "
},
{
  "id": "main-8-5",
  "level": "1",
  "url": "main-8-5.html",
  "type": "Section",
  "number": "6.3",
  "title": "Error Analysis",
  "body": "Error Analysis  "
},
{
  "id": "review-exp-and-logs",
  "level": "1",
  "url": "review-exp-and-logs.html",
  "type": "Subsection",
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
  "id": "def-eulers-formula",
  "level": "2",
  "url": "review-exp-and-logs.html#def-eulers-formula",
  "type": "Definition",
  "number": "A.3",
  "title": "Euler’s Formula.",
  "body": "Euler's Formula       "
},
{
  "id": "main-9-3",
  "level": "1",
  "url": "main-9-3.html",
  "type": "Subsection",
  "number": "A.2",
  "title": "Quadratic equations",
  "body": "Quadratic equations  We will be solving quadratic equations as we solve differential equations. If we want to solve a quadratic equation like there are several different methods we might use, including:  factoring  quadratic formula,   completing the square  Most students prefer the first two methods, which is fine. We will end up completing the square later in the semester, so if you want to review that method now, you'll reap the benefits later!   Solve the following quadratic equations. Note: It's OK if the solutions are complex or imaginary.     You might solve via factoring: Alternately, you might use the quadratic formula: You could even complete the square:         You might solve via factoring: Alternately, you might use the quadratic formula: You could even complete the square:         This one doesn't factor easily... You might use the quadratic formula: You could even complete the square:        Name at least two methods for solving quadratic equations. factoring, using the quadratic formula, completing the square   How many solutions does a quadratic equation have? There are three possible outcomes when solving a quadratic equation:  two distinct real roots  one repeated real root (i.e., a double root)  complex conjugate roots       Solving Quadratic Equations  The solution to the quadratic equation is given by the quadratic formula: . Let    and be the two solutions from , and     (value under the root in , i.e. discriminant).   Then we know:   Equation can be written as .    If , then and are different real numbers.    If , then and are the same real number (repeated).    If , then and are complex and can be written as .      "
},
{
  "id": "main-9-3-3",
  "level": "2",
  "url": "main-9-3.html#main-9-3-3",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Solve the following quadratic equations. Note: It's OK if the solutions are complex or imaginary. "
},
{
  "id": "main-9-4",
  "level": "1",
  "url": "main-9-4.html",
  "type": "Subsection",
  "number": "A.3",
  "title": "Trigonometric Identities",
  "body": "Trigonometric Identities  Pythagorean Identities  The following trigonometric identities are useful in solving differential equations:                Even and Odd Properties                                     "
},
{
  "id": "main-10-2",
  "level": "1",
  "url": "main-10-2.html",
  "type": "Section",
  "number": "B.1",
  "title": "Linear Homogeneous Constant Coefficients",
  "body": "Linear Homogeneous Constant Coefficients  N-th Derivative of  Each derivative of adds a multiple of , so .  2nd Order LHCC Complex Case Assume that and are complex and so they can be written as . Substituting these into , using , the even property of cosine and odd property of sine , we can rewrite the general solution as .  "
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
