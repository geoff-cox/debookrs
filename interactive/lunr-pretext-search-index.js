var ptx_lunr_search_style = "textbook";
var ptx_lunr_docs = [
{
  "id": "preface",
  "level": "1",
  "url": "preface.html",
  "type": "Preface",
  "number": "",
  "title": "Preface",
  "body": " This interactive online text is intended to be used to learn the introductory concepts of ordinary differential equations. The book is designed for students who have completed single-variable calculus and is suitable for a one semester course in differential equations. The book is written in a straightforward, readable style and has a large number of worked examples and exercises.   DE implies ODE in this Text  Since this text only covers ordinary differential equations, any use of DE will always mean ODE .   Derivative Notation  We will use the following notations for derivatives:     Derivative Order     1st  2nd  3rd  4th   nth    Prime          Leibniz             "
},
{
  "id": "main-5-3-3",
  "level": "1",
  "url": "main-5-3-3.html",
  "type": "Section",
  "number": "1.1",
  "title": "Exercises",
  "body": "Exercises    "
},
{
  "id": "main-5-4-2-3",
  "level": "1",
  "url": "main-5-4-2-3.html",
  "type": "Subsection",
  "number": "",
  "title": "Antiderivatives",
  "body": "Antiderivatives  You might not realize it, but solving some differential equations is a skill you already have! For example, when you compute the antiderivative of , you are finding a function whose derivative is . In other words:    Find such that the derivative of is ?    However, this directly translates into the differential equation problem:    Find such that .    To find , you can integrate both sides of the equation with respect to ,   Here, , which is just another constant. Therefore, the solution is the antiderivative of with a single constant of integration:  . Now, let's look at a slightly more complex example.  Isolate     Find the function, , such that .     This is another antiderivative problem where we first have to isolate before integrating, like so  . This equation now says The unknown is the function whose derivative is or, in other words,    The unknown is the antiderivative of .   Instead of writing down the antiderivative as our solution, let's take the differential equations approach and integrate both sides of the equation with respect to    As before, the constants of integration are combined into a single constant . This practice of merging constants is standard in solving differential equations and simplifies the final result.     Check your Understanding   True-or-False   We can solve for by differentiating both sides with respect to .     True    Incorrect, taking a derivative of both sides will result in a second derivative on the left side of the equation.      False    Correct! We should integrate both sides to solve for , not differentiate.     True-or-False   Solving for in the equation amounts to finding the antiderivative of .     True    Correct, integrating both sides gives .      False    Incorrect.     True-or-False   Combining constants is a common practice in differential equations.     True    Correct!      False    Incorrect, revisit the examples above.     Select-the-Best-Answer   How could you solve for in the equation ?     Differentiating both sides with respect to .    Incorrect, differentiating both sides only puts another derivative on .      Isolate and integrating both sides with respect to .    Correct!      Isolate and integrating both sides with respect to .    Incorrect, the integration is not with respect to .      Find the antiderivative of .    Incorrect, the solution is the antiderivative of , not just .     Select-the-Best-Answer   The solution to the differential equation is the antiderivative of which function?          Incorrect. is the solution to the differential equation.           Incorrect, perhaps check your algebra.           Incorrect, perhaps check your algebra.           Correct! Isolating gives , so the solution is the antiderivative of .     In summary, solving simple differential equations often reduces to finding the antiderivative of a function. By integrating both sides and simplifying constants, you can find the general solution.  "
},
{
  "id": "main-5-4-2-3-11",
  "level": "2",
  "url": "main-5-4-2-3.html#main-5-4-2-3-11",
  "type": "Example",
  "number": "1",
  "title": "Isolate <span class=\"process-math\">\\(y\\)<\/span>.",
  "body": "Isolate     Find the function, , such that .     This is another antiderivative problem where we first have to isolate before integrating, like so  . This equation now says The unknown is the function whose derivative is or, in other words,    The unknown is the antiderivative of .   Instead of writing down the antiderivative as our solution, let's take the differential equations approach and integrate both sides of the equation with respect to    As before, the constants of integration are combined into a single constant . This practice of merging constants is standard in solving differential equations and simplifies the final result.   "
},
{
  "id": "chkpts-antiderivatives",
  "level": "2",
  "url": "main-5-4-2-3.html#chkpts-antiderivatives",
  "type": "Checkpoint",
  "number": "2",
  "title": "<em class=\"emphasis\">Check your Understanding<\/em>.",
  "body": " Check your Understanding   True-or-False   We can solve for by differentiating both sides with respect to .     True    Incorrect, taking a derivative of both sides will result in a second derivative on the left side of the equation.      False    Correct! We should integrate both sides to solve for , not differentiate.     True-or-False   Solving for in the equation amounts to finding the antiderivative of .     True    Correct, integrating both sides gives .      False    Incorrect.     True-or-False   Combining constants is a common practice in differential equations.     True    Correct!      False    Incorrect, revisit the examples above.     Select-the-Best-Answer   How could you solve for in the equation ?     Differentiating both sides with respect to .    Incorrect, differentiating both sides only puts another derivative on .      Isolate and integrating both sides with respect to .    Correct!      Isolate and integrating both sides with respect to .    Incorrect, the integration is not with respect to .      Find the antiderivative of .    Incorrect, the solution is the antiderivative of , not just .     Select-the-Best-Answer   The solution to the differential equation is the antiderivative of which function?          Incorrect. is the solution to the differential equation.           Incorrect, perhaps check your algebra.           Incorrect, perhaps check your algebra.           Correct! Isolating gives , so the solution is the antiderivative of .    "
},
{
  "id": "main-5-4-2-4",
  "level": "1",
  "url": "main-5-4-2-4.html",
  "type": "Subsection",
  "number": "",
  "title": "Direct Integration Method",
  "body": "Direct Integration Method  The previous section showed us that if we can isolate the derivative of the dependent variable, , in the form , then the solution can be found by integrating both sides. This principle extends to more complex equations of the form: .  Here, is a placeholder that indicates that only  variables can appear on the right-hand side of this equation. Similarly, indicates that only  or variables can appear inside the derivative. This leads us to our first method for solving first-order differential equations— direct integration .  Direct Integration  The general solution of a differential equation in the form , can be determined by through the following steps:  Integrate both Sides  Integrate both sides with respect to the independent variable, , to eliminate the derivative containing .   Isolate the Solution  Now, isolate the dependent variable, , to find the general solution.      Consider the following examples to see how this approach applies to some more interesting problems.  Integrate both sides to Recover     Find the particular solution to the differential equation .     First, observe that this problem is in the form where .  So, we can solve for using direct integration:    Step 1: Integrate both Sides    Integrating both sides with respect to , we get     Step 2: Isolate the Solution    Now that the dependent variable is free from the derivative, we can isolate it to find the general solution, as follows   Since we are given the condition , we need to find . Therefore, the particular solution (for ) is .    Isolate the Derivative before Integrating    Compute the general solution of the differential equation      First, we get the derivative by itself on the left-hand side ☝️ Recall the Identity      Now, we integrate by sides with respect to , releasing from the derivative and allowing us to isolate the general solution. .     Check your Understanding   True-or-False   Solving a differential equation by direct integration involves computing a derivative.     True    Incorrect, review .      False    Correct! Direct integration involves integrating both sides of the equation, not computing a derivative.     True-or-False   Direct integration could be used to solve the equation .     True    Correct!      False    Incorrect. This equation is in the form .     Select-the-Best-Answer   Give the reason direct integration cannot be applied to the equation .     There is a fraction in the derivative.    Incorrect, direct integration doesn't care about fractions.      The term is squared.    Incorrect, direct integration can handle this.      There is a sine term on the right side of the equation.    Incorrect, the sine is not the issue here.      The right-hand side contains .    Correct! Direct integration only works when the right-hand side contains only the independent variable, in this case .     Select-the-Best-Answer   In the differential equation , what is the first step in solving for ?     Release by integrating both sides with respect to .    Correct! Integrating both sides is the first step in solving for .      Release and by integrating both sides with respect to .    Incorrect. Integrating both sides with respect to would not eliminate the derivative since the derivative is with respect to .      Compute the derivative of using the product rule.    Incorrect. This would actually make the equation more complicated.      Isolate .    Incorrect. This would not help solve for .     Select-the-Best-Answer   Complete each step below to solve the differential equation       The dependent variable is  The independent variable is    The general solution is   Don t forget the constant of integration.                        The direct integration method is one of the simplest ways to solve a differential equation when the derivative of the dependent variable or an expression involving it is isolated. By integrating both sides and solving for , you can find either the general solution or a particular solution if initial conditions are provided. This method highlights the close relationship between differentiation and integration, making it a natural starting point for understanding how to solve differential equations.  "
},
{
  "id": "direct-integration",
  "level": "2",
  "url": "main-5-4-2-4.html#direct-integration",
  "type": "Method",
  "number": "1",
  "title": "Direct Integration.",
  "body": "Direct Integration  The general solution of a differential equation in the form , can be determined by through the following steps:  Integrate both Sides  Integrate both sides with respect to the independent variable, , to eliminate the derivative containing .   Isolate the Solution  Now, isolate the dependent variable, , to find the general solution.     "
},
{
  "id": "direct-integration-example-1",
  "level": "2",
  "url": "main-5-4-2-4.html#direct-integration-example-1",
  "type": "Example",
  "number": "3",
  "title": "Integrate both sides to Recover <span class=\"process-math\">\\(y\\)<\/span>.",
  "body": "Integrate both sides to Recover     Find the particular solution to the differential equation .     First, observe that this problem is in the form where .  So, we can solve for using direct integration:    Step 1: Integrate both Sides    Integrating both sides with respect to , we get     Step 2: Isolate the Solution    Now that the dependent variable is free from the derivative, we can isolate it to find the general solution, as follows   Since we are given the condition , we need to find . Therefore, the particular solution (for ) is .   "
},
{
  "id": "direct-integration-example-2",
  "level": "2",
  "url": "main-5-4-2-4.html#direct-integration-example-2",
  "type": "Example",
  "number": "4",
  "title": "Isolate the Derivative before Integrating.",
  "body": "Isolate the Derivative before Integrating    Compute the general solution of the differential equation      First, we get the derivative by itself on the left-hand side ☝️ Recall the Identity      Now, we integrate by sides with respect to , releasing from the derivative and allowing us to isolate the general solution. .   "
},
{
  "id": "chkpts-direct-integration",
  "level": "2",
  "url": "main-5-4-2-4.html#chkpts-direct-integration",
  "type": "Checkpoint",
  "number": "5",
  "title": "<em class=\"emphasis\">Check your Understanding<\/em>.",
  "body": " Check your Understanding   True-or-False   Solving a differential equation by direct integration involves computing a derivative.     True    Incorrect, review .      False    Correct! Direct integration involves integrating both sides of the equation, not computing a derivative.     True-or-False   Direct integration could be used to solve the equation .     True    Correct!      False    Incorrect. This equation is in the form .     Select-the-Best-Answer   Give the reason direct integration cannot be applied to the equation .     There is a fraction in the derivative.    Incorrect, direct integration doesn't care about fractions.      The term is squared.    Incorrect, direct integration can handle this.      There is a sine term on the right side of the equation.    Incorrect, the sine is not the issue here.      The right-hand side contains .    Correct! Direct integration only works when the right-hand side contains only the independent variable, in this case .     Select-the-Best-Answer   In the differential equation , what is the first step in solving for ?     Release by integrating both sides with respect to .    Correct! Integrating both sides is the first step in solving for .      Release and by integrating both sides with respect to .    Incorrect. Integrating both sides with respect to would not eliminate the derivative since the derivative is with respect to .      Compute the derivative of using the product rule.    Incorrect. This would actually make the equation more complicated.      Isolate .    Incorrect. This would not help solve for .     Select-the-Best-Answer   Complete each step below to solve the differential equation       The dependent variable is  The independent variable is    The general solution is   Don t forget the constant of integration.                       "
},
{
  "id": "main-5-4-3",
  "level": "1",
  "url": "main-5-4-3.html",
  "type": "Section",
  "number": "2.2",
  "title": "Exercises",
  "body": "Exercises    "
},
{
  "id": "main-6-2-2",
  "level": "1",
  "url": "main-6-2-2.html",
  "type": "Section",
  "number": "3.1",
  "title": "Exercises",
  "body": "Exercises    "
},
{
  "id": "main-6-3-3-3",
  "level": "1",
  "url": "main-6-3-3-3.html",
  "type": "Subsection",
  "number": "",
  "title": "The Product Rule: A Quick Review",
  "body": "The Product Rule: A Quick Review  Recall that the product rule describes how to differentiate a product of two functions. In particular, if and are differentiable, then   To refresh our memory of how it works, let's warm up with a few examples.  Forward Product Rule    Compute each of the derivatives below.      Using the product rule:                 Check your Understanding   Nothin' to see here.   "
},
{
  "id": "main-6-3-3-3-2",
  "level": "2",
  "url": "main-6-3-3-3.html#main-6-3-3-3-2",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "product rule "
},
{
  "id": "main-6-3-3-3-5",
  "level": "2",
  "url": "main-6-3-3-3.html#main-6-3-3-3-5",
  "type": "Example",
  "number": "6",
  "title": "Forward Product Rule.",
  "body": "Forward Product Rule    Compute each of the derivatives below.      Using the product rule:               "
},
{
  "id": "main-6-3-3-4",
  "level": "1",
  "url": "main-6-3-3-4.html",
  "type": "Subsection",
  "number": "",
  "title": "Recognizing and Reversing the Product Rule",
  "body": "Recognizing and Reversing the Product Rule  Normally, we apply the product rule in the forward direction , starting with a product and differentiating it into separate terms. However, when solving differential equations, we often need to work in reverse —that is, given a sum of terms, we determine whether they originate from a product rule derivative. This process is crucial in the integrating factor method, where we aim to rewrite an equation so that one side is a derivative of a product.  For example, the expression:   can be rewritten as:   The process for recognizing when two terms can be bundled into a single derivative via the product rule is outlined in the following examples.  Basic Reverse Product Rule    Rewrite each expression in the form .        First, select an and in different terms, like so   .  For this to work, should be , next to our chosen . However,   So this labeling doesn't work and we instead try the labels   .  Noting that is next to and is next to confirms this is a valid product rule. Therefore, we can reverse the product rule as  .   To make this easier, let's separate the terms as .  So, as before, we first set and   , then verify the derivatives of and are in the other terms,  . Therefore,  .     The next example involves an expression that contains a variable, making it more relevant to differential equations.  Reversed Product Rule with a Variable    Rewrite each expression in the form .        Since and are in separate terms, setting to gives you and for free since  . The only thing you need to check is which is sitting right next to . Therefore, we have  .   Again, set to and the rest fall into place as  . The only thing left to do is verify the derivative of : .  So, we can reverse the product rule as  .     While reversing the product rule is not standard exercise, they are important for developing the intuition needed to understand the integrating factor method, as we will soon see.   Check your Understanding     Select-the-Best-Answer   The differential equation,  , can be rewritten using the product rule. What does the product rule do in this case?     It isolates the dependent variable, .    Incorrect. The product rule does not isolate .      It combines the terms on the left into a single derivative.    Correct! The product rule combines terms on the left side of the equation into a single derivative.      It computes the derivative of a product of two functions.    Incorrect. In this situation, the product rule is not used to take a derivative of a product of two functions.      It solves the differential equation.    Incorrect. The product rule can help solve some differential equations, but it does not solve them alone.      Fill-in-the-Blank   Fill in the missing parts of each product rule below.                               Correct!        Incorrect, try again.          Correct!        Incorrect, try again.          Correct!        Incorrect, expecting to see the independent variable .        Incorrect, use the natural log instead.        Incorrect, try again.          Correct!        Incorrect, don't forget the chain rule.          Correct!        Put in the other blank!        The variable should be a capitol .        Incorrect, try again.          Correct!        Put in the other blank!        Incorrect, try again.         "
},
{
  "id": "main-6-3-3-4-8",
  "level": "2",
  "url": "main-6-3-3-4.html#main-6-3-3-4-8",
  "type": "Example",
  "number": "7",
  "title": "Basic Reverse Product Rule.",
  "body": "Basic Reverse Product Rule    Rewrite each expression in the form .        First, select an and in different terms, like so   .  For this to work, should be , next to our chosen . However,   So this labeling doesn't work and we instead try the labels   .  Noting that is next to and is next to confirms this is a valid product rule. Therefore, we can reverse the product rule as  .   To make this easier, let's separate the terms as .  So, as before, we first set and   , then verify the derivatives of and are in the other terms,  . Therefore,  .    "
},
{
  "id": "reversed-product-rule-example",
  "level": "2",
  "url": "main-6-3-3-4.html#reversed-product-rule-example",
  "type": "Example",
  "number": "8",
  "title": "Reversed Product Rule with a Variable.",
  "body": "Reversed Product Rule with a Variable    Rewrite each expression in the form .        Since and are in separate terms, setting to gives you and for free since  . The only thing you need to check is which is sitting right next to . Therefore, we have  .   Again, set to and the rest fall into place as  . The only thing left to do is verify the derivative of : .  So, we can reverse the product rule as  .    "
},
{
  "id": "chkpt-reversed-product-rule-1",
  "level": "2",
  "url": "main-6-3-3-4.html#chkpt-reversed-product-rule-1",
  "type": "Exercise",
  "number": "1",
  "title": "<em class=\"emphasis\">Select-the-Best-Answer<\/em>.",
  "body": " Select-the-Best-Answer   The differential equation,  , can be rewritten using the product rule. What does the product rule do in this case?     It isolates the dependent variable, .    Incorrect. The product rule does not isolate .      It combines the terms on the left into a single derivative.    Correct! The product rule combines terms on the left side of the equation into a single derivative.      It computes the derivative of a product of two functions.    Incorrect. In this situation, the product rule is not used to take a derivative of a product of two functions.      It solves the differential equation.    Incorrect. The product rule can help solve some differential equations, but it does not solve them alone.    "
},
{
  "id": "chkpt-reversed-product-rule-2",
  "level": "2",
  "url": "main-6-3-3-4.html#chkpt-reversed-product-rule-2",
  "type": "Exercise",
  "number": "2",
  "title": "<em class=\"emphasis\">Fill-in-the-Blank<\/em>.",
  "body": " Fill-in-the-Blank   Fill in the missing parts of each product rule below.                               Correct!        Incorrect, try again.          Correct!        Incorrect, try again.          Correct!        Incorrect, expecting to see the independent variable .        Incorrect, use the natural log instead.        Incorrect, try again.          Correct!        Incorrect, don't forget the chain rule.          Correct!        Put in the other blank!        The variable should be a capitol .        Incorrect, try again.          Correct!        Put in the other blank!        Incorrect, try again.      "
},
{
  "id": "main-6-3-3-5",
  "level": "1",
  "url": "main-6-3-3-5.html",
  "type": "Subsection",
  "number": "",
  "title": "A Perfect Derivative",
  "body": "A Perfect Derivative  Now that you have seen how to combine two terms into a single derivative by reversing the product rule, you are ready to see how this could help you solve a differential equation. Suppose you are given the following equation   Seeing the two terms with a derivative suggests that it may be possible to reverse a product rule. In fact, the left side of is a perfect derivative since it already has all the pieces needed to reverse a product rule, as shown below:   This transformation is powerful because it allows us to solve the equation through direct integration, as illustrated in the next example.  Reversed Product Rule in a Differential Equation    Rewrite the left-side of the equation as a single derivative, then find the general solution by direct integration.      We rewrite the left side as a single derivative by identifying it as a product rule that can be reversed. In the second term, we set to , which automatically determines what and must be in the first term:   and since , the left side is a perfect derivative since it has everything it needs to reverse a product rule and bundle the terms into a single derivative, like so  . Rewriting the left side of equation as this combined derivative allows us to find the general solution using direct integration as follows:  .    This example shows a differential equation that conveniently had all the pieces it needed to reverse the product rule. Unfortunately, equations are rarely presented in such a complete form and an additional component must be provided before an appoach like this will work.  To help us see how adding something to an equation can help us alter its form and solve it, we will first look at an analogy from algebra in the next section.   Check your Understanding    Answer-the-Following  Recognizing a Perfect Derivative  What characteristic makes the left side of the equation a perfect derivative ?    It can be rewritten as a single derivative using the product rule in reverse.  Correct! The left-hand side is the derivative of , making it a perfect derivative.    It contains an exponential function, which always makes a derivative perfect.  Incorrect. While exponentials are useful, they don't always guarantee a perfect derivative.    It has an equal number of terms on both sides.  Incorrect. The number of terms is irrelevant; what matters is the ability to reverse the product rule.    The right-hand side is also an exponential function.  Incorrect. The right-hand side does not determine whether the left is a perfect derivative.   Reverse Product Rule Application  How does reversing the product rule help in solving first-order linear differential equations?    It eliminates the need for integration.  Incorrect. Integration is still required after rewriting the equation.    It rewrites the equation in a form that allows direct integration.  Correct! Recognizing a perfect derivative lets us solve the equation by integration.    It converts a nonlinear equation into a linear one.  Incorrect. The equation is already linear; reversing the product rule does not change its nature.    It simplifies the right-hand side of the equation.  Incorrect. The right-hand side remains the same; the key benefit is rewriting the left-hand side.    Select-the-Best-Answer   The differential equation,   is equivalent to which of the following equations?        Incorrect. This equation does not account for the logarithmic term in the original differential equation.         Incorrect. This equation does not account for the logarithmic term in the original differential equation.         Correct! Applying the product rule to the left side of the equation yields the original differential equation.         Incorrect. This equation does not account for the logarithmic term in the original differential equation.      "
},
{
  "id": "reversing-the-product-rule-in-a-DE-example",
  "level": "2",
  "url": "main-6-3-3-5.html#reversing-the-product-rule-in-a-DE-example",
  "type": "Example",
  "number": "9",
  "title": "Reversed Product Rule in a Differential Equation.",
  "body": "Reversed Product Rule in a Differential Equation    Rewrite the left-side of the equation as a single derivative, then find the general solution by direct integration.      We rewrite the left side as a single derivative by identifying it as a product rule that can be reversed. In the second term, we set to , which automatically determines what and must be in the first term:   and since , the left side is a perfect derivative since it has everything it needs to reverse a product rule and bundle the terms into a single derivative, like so  . Rewriting the left side of equation as this combined derivative allows us to find the general solution using direct integration as follows:  .   "
},
{
  "id": "main-6-3-3-5-10-2",
  "level": "2",
  "url": "main-6-3-3-5.html#main-6-3-3-5-10-2",
  "type": "Exercise",
  "number": "1",
  "title": "<em class=\"emphasis\">Answer-the-Following<\/em>.",
  "body": " Answer-the-Following  Recognizing a Perfect Derivative  What characteristic makes the left side of the equation a perfect derivative ?    It can be rewritten as a single derivative using the product rule in reverse.  Correct! The left-hand side is the derivative of , making it a perfect derivative.    It contains an exponential function, which always makes a derivative perfect.  Incorrect. While exponentials are useful, they don't always guarantee a perfect derivative.    It has an equal number of terms on both sides.  Incorrect. The number of terms is irrelevant; what matters is the ability to reverse the product rule.    The right-hand side is also an exponential function.  Incorrect. The right-hand side does not determine whether the left is a perfect derivative.   Reverse Product Rule Application  How does reversing the product rule help in solving first-order linear differential equations?    It eliminates the need for integration.  Incorrect. Integration is still required after rewriting the equation.    It rewrites the equation in a form that allows direct integration.  Correct! Recognizing a perfect derivative lets us solve the equation by integration.    It converts a nonlinear equation into a linear one.  Incorrect. The equation is already linear; reversing the product rule does not change its nature.    It simplifies the right-hand side of the equation.  Incorrect. The right-hand side remains the same; the key benefit is rewriting the left-hand side.    Select-the-Best-Answer   The differential equation,   is equivalent to which of the following equations?        Incorrect. This equation does not account for the logarithmic term in the original differential equation.         Incorrect. This equation does not account for the logarithmic term in the original differential equation.         Correct! Applying the product rule to the left side of the equation yields the original differential equation.         Incorrect. This equation does not account for the logarithmic term in the original differential equation.    "
},
{
  "id": "main-6-3-3-6",
  "level": "1",
  "url": "main-6-3-3-6.html",
  "type": "Subsection",
  "number": "",
  "title": "Completing the Square: An Analogy",
  "body": "Completing the Square: An Analogy  Suppose you wanted to solve the following quadratic equation   You could solve it using the quadratic formula. However, another approach is to complete the square by strategically placing a number on the left side which turns it into a perfect square. Following the rule from completing the square , we know does the trick, so we add it to both sides to get   Completing the square gets it name because it tells you the missing piece needed to factor our equation into the form   Now, taking a square root releases , leading directly to the solutions   Just as completing the square tells you that is the missing piece that makes a perfect square in a quadratic equation, the integrating factor method tells you the missing piece you need to construct a perfect derivative in a differential equation.   Check your Understanding    Answer-the-Following   Purpose of Completing the Square   What is the primary purpose of completing the square in the given quadratic equation example?     To factor the quadratic equation directly.    Incorrect. Factoring may not always be straightforward, whereas completing the square always works.      To eliminate the quadratic term entirely.    Incorrect. Completing the square does not eliminate the quadratic term; it reorganizes the equation.      To rewrite the quadratic expression as a perfect square, making it easier to solve for x.    Correct! Completing the square allows us to express the quadratic as a perfect square trinomial.      To convert the equation into its derivative form.    Incorrect. Completing the square does not involve differentiation.     Understanding the Number 9   In the analogy presented, what does the number 9 represent in the quadratic equation example?     The missing piece that allows the quadratic expression to be rewritten as a perfect square.    Correct! The number 9 completes the square, making it factorable.      The solution to the quadratic equation.    Incorrect. The number 9 is introduced to complete the square, not as a solution.      The coefficient of the linear term.    Incorrect. The coefficient of the linear term in the quadratic equation is 6, not 9.      A randomly chosen constant added to balance the equation.    Incorrect. The number 9 is carefully selected to form a perfect square trinomial.      "
},
{
  "id": "chkpts-completing-square",
  "level": "2",
  "url": "main-6-3-3-6.html#chkpts-completing-square",
  "type": "Exercise",
  "number": "1",
  "title": "<em class=\"emphasis\">Answer-the-Following<\/em>.",
  "body": " Answer-the-Following   Purpose of Completing the Square   What is the primary purpose of completing the square in the given quadratic equation example?     To factor the quadratic equation directly.    Incorrect. Factoring may not always be straightforward, whereas completing the square always works.      To eliminate the quadratic term entirely.    Incorrect. Completing the square does not eliminate the quadratic term; it reorganizes the equation.      To rewrite the quadratic expression as a perfect square, making it easier to solve for x.    Correct! Completing the square allows us to express the quadratic as a perfect square trinomial.      To convert the equation into its derivative form.    Incorrect. Completing the square does not involve differentiation.     Understanding the Number 9   In the analogy presented, what does the number 9 represent in the quadratic equation example?     The missing piece that allows the quadratic expression to be rewritten as a perfect square.    Correct! The number 9 completes the square, making it factorable.      The solution to the quadratic equation.    Incorrect. The number 9 is introduced to complete the square, not as a solution.      The coefficient of the linear term.    Incorrect. The coefficient of the linear term in the quadratic equation is 6, not 9.      A randomly chosen constant added to balance the equation.    Incorrect. The number 9 is carefully selected to form a perfect square trinomial.    "
},
{
  "id": "main-6-3-3-7",
  "level": "1",
  "url": "main-6-3-3-7.html",
  "type": "Subsection",
  "number": "",
  "title": "Completing An Incomplete Product Rule",
  "body": "Completing An Incomplete Product Rule  As mention to in the previous sections, most first-order linear differential equations must be modified before its terms can be combined into a single derivative. To make sense of this, we will look at a concrete example using the differential equation    incomplete derivative      .    In this form, the left side resembles an expanded product rule, but if you attempt to reverse it you will see that no choice of and will work. However, if you multiply both sides by , the equation becomes    complete derivative      .    The inclusion of provides the missing piece needed to reverse a product rule and update the equation as    perfect derivative      .    With the left side as a single derivative, we can integrate both sides to find .  Analogy: A Side-by-Side Comparison   The table below compares completing the square to the integrating factor method, highlighting their similarities:      Completing the Square   Integrating Factor Method  (Completing the Derivative)       Goal  Solve for  Solve for      Equation         Missing  Piece   (added onto both sides)  (multiplied onto both sides)       Modified  Equation          Completed  Equation           Check your Understanding    Answer-the-Following   Complete the questions on each tab to check your understanding.   Recognizing an Incomplete Product Rule   Why do we say the differential equation contains an incomplete product rule?     It lacks a function needed to reverse a product rule.    Correct! The equation is missing an essential function that would allow it to be rewritten using the product rule.      Because we haven't used the product rule yet.    Incorrect. The issue is not that the product rule hasn't been applied, but that the equation is not structured as a product rule.      It has a constant term of .    Incorrect. While the constant term is , the issue is related to the structure of the left-hand side.      It is not in standard form.    Incorrect. The equation actually is in standard form.     Purpose of Multiplying by   Why do we multiply both sides of by ?     To complete a product rule within this equation.    Correct! Multiplying by allows us to rewrite the left-hand side as a perfect derivative.      To eliminate the derivative term entirely.    Incorrect. The goal is not to eliminate the derivative, but to structure the equation so it can be integrated directly.      To make the right-hand side equal to zero.    Incorrect. The right-hand side is transformed, but it does not become zero.      It makes the equation linear.    Incorrect. The equation already linear. Moreover, multiplying by any function of will not change the equation's linearity.     Final Form of the Equation   After rewriting the left-hand side as a derivative, what is the next step in solving the equation?     Rearrange the terms to isolate before integrating.    Incorrect. We first integrate both sides before solving for .      Differentiate both sides again to simplify the expression.    Incorrect. Differentiation is not needed; we proceed with integration.      Integrate both sides to find .    Correct! Once the left-hand side is a single derivative, we integrate to solve for .      Multiply by another integrating factor to further simplify.    Incorrect. A second integrating factor is unnecessary.     Select-the-Best-Answer   Given that you can multiply the equation   by the function to transform it into   What function would you think to multiply onto the equation   to accomplish the same goal?          Incorrect. Review the example carefully.           Incorrect. Review the example carefully.           That's correct! Multiplying by will allow you to complete the product rule on the left side of the equation.           Incorrect. Review the example carefully.      "
},
{
  "id": "main-6-3-3-7-9",
  "level": "2",
  "url": "main-6-3-3-7.html#main-6-3-3-7-9",
  "type": "Details",
  "number": "10",
  "title": "Analogy: A Side-by-Side Comparison.",
  "body": "Analogy: A Side-by-Side Comparison   The table below compares completing the square to the integrating factor method, highlighting their similarities:      Completing the Square   Integrating Factor Method  (Completing the Derivative)       Goal  Solve for  Solve for      Equation         Missing  Piece   (added onto both sides)  (multiplied onto both sides)       Modified  Equation          Completed  Equation         "
},
{
  "id": "chkpts-completing-the-product-rule",
  "level": "2",
  "url": "main-6-3-3-7.html#chkpts-completing-the-product-rule",
  "type": "Exercise",
  "number": "1",
  "title": "<em class=\"emphasis\">Answer-the-Following<\/em>.",
  "body": " Answer-the-Following   Complete the questions on each tab to check your understanding.   Recognizing an Incomplete Product Rule   Why do we say the differential equation contains an incomplete product rule?     It lacks a function needed to reverse a product rule.    Correct! The equation is missing an essential function that would allow it to be rewritten using the product rule.      Because we haven't used the product rule yet.    Incorrect. The issue is not that the product rule hasn't been applied, but that the equation is not structured as a product rule.      It has a constant term of .    Incorrect. While the constant term is , the issue is related to the structure of the left-hand side.      It is not in standard form.    Incorrect. The equation actually is in standard form.     Purpose of Multiplying by   Why do we multiply both sides of by ?     To complete a product rule within this equation.    Correct! Multiplying by allows us to rewrite the left-hand side as a perfect derivative.      To eliminate the derivative term entirely.    Incorrect. The goal is not to eliminate the derivative, but to structure the equation so it can be integrated directly.      To make the right-hand side equal to zero.    Incorrect. The right-hand side is transformed, but it does not become zero.      It makes the equation linear.    Incorrect. The equation already linear. Moreover, multiplying by any function of will not change the equation's linearity.     Final Form of the Equation   After rewriting the left-hand side as a derivative, what is the next step in solving the equation?     Rearrange the terms to isolate before integrating.    Incorrect. We first integrate both sides before solving for .      Differentiate both sides again to simplify the expression.    Incorrect. Differentiation is not needed; we proceed with integration.      Integrate both sides to find .    Correct! Once the left-hand side is a single derivative, we integrate to solve for .      Multiply by another integrating factor to further simplify.    Incorrect. A second integrating factor is unnecessary.     Select-the-Best-Answer   Given that you can multiply the equation   by the function to transform it into   What function would you think to multiply onto the equation   to accomplish the same goal?          Incorrect. Review the example carefully.           Incorrect. Review the example carefully.           That's correct! Multiplying by will allow you to complete the product rule on the left side of the equation.           Incorrect. Review the example carefully.    "
},
{
  "id": "if-motivating-example",
  "level": "1",
  "url": "if-motivating-example.html",
  "type": "Subsection",
  "number": "",
  "title": "A Motivating Example",
  "body": "A Motivating Example   In the previous section, we saw that certain first-order linear differential equations can be rewritten so that the left-hand side is a single derivative. However, most equations do not initially have this structure. Instead, they are missing a crucial function that allows us to apply the product rule in reverse .  The goal now is to illustrate how to determine this missing function—known as the integrating factor —so that we can rewrite one of the sides as a single derivative.  Consider the equation:   The claim is that the left side of this equation is currently an incomplete product rule that can be completed and reversed by multiplying a function onto both sides of the equation. In short, this allows us to rewrite as   However, the question still remains: Which function, , does this? Let's find out.   Finding : A Step-by-Step Breakdown  The strategy for determining can be seen in the slide show  Finding Slide Show for Equation         Alternatively, a shorter version is displayed here.     1️⃣ Multiply by          3️⃣ Condition on          2️⃣ Product Rule         Each step should be followed in the labeled order, detailed as follows:     1️⃣  Multiply by to get .     2️⃣  Use the product rule on the left side of to get .     3️⃣  In order for and to be equal, and must also be equal. Therefore, we arrive at the following condition on : . Clarifying 3️⃣ Condition on    At the end of the day, all we are saying here is that in order for   to be equivalent to   then .  This is how we get the equation for . In particular, in order for equation to be equivalent to , then  .      This is a separable differential equation , which has the general solution .  Solving Equation with separation of variables        Although, any non-zero choice for will yield a function that converts into , the convention is to chose . Therefore, the integrating factor for equation is .    By multiplying by , we are able to transform it into:   Once in this form, we can solve for using direct integration. This example demonstrates how to find the integrating factor for a specific equation. Next, we will generalize this idea by finding a formula that gives for any first-order linear differential equation.    Check your Understanding    Answer-the-Following   Complete the questions on each tab to check your understanding.   Select-all-that-Apply   In our example, we found as the integrating factor for  . Which part of this equation did the integrating factor depend on?     The constant term on the right side of the equation.    Incorrect. The integrating factor depends on the coefficient of in the original equation.      The coefficient of .    That's correct! The integrating factor depends on the coefficient of in the original equation.      Both the constant term and the coefficient of .    Incorrect. The integrating factor does not depend on both of these, only one.      The dependent variable, .    Incorrect. The variable , itself, is not involved in determining the integrating factor.     Select-the-Best-Answer   When deriving the condition equation (to find ), we multiplied the differential equation by to get What was the purpose of multiplying by ?     To balance the equation.    Remember that the goal is to solve the equation, not to balance it.      To make the equation separable.    Multiplying an non-separable equation by a function will never make it separable.      To verify if the integrating factor method can be used.    Multiplying a differential equation by a function will never help determine which method can be used.      To act as the missing function needed for a product rule.    That's correct! Multiplying by on both sides of the equation allows us to complete the product rule on the left side.     Select-the-Best-Answer   After multiplying the original differential equation by to get  , we jumped down to the last equation (our goal), given by   where we applied the product rule to expand the left side as  . What was the purpose of working backwards from the last equation like this?     To verify that the product rule was applied correctly.    Remember that the goal is to solve the equation, not to verify the product rule.      To simplify the equation.    Working backwards does not simplify the equation, but helps us see how the product rule can be applied.      This was the next logical step in the process.    Working backwards was a deliberate choice to show how the product rule could be applied.      To get an equation that more closely resembles .    That's correct! We wanted a form that we could directly compare to equation .     Select-the-Best-Answer   Suppose our motivating example was the differential equation  . Assuming we multiply both sides of this equation by , what condition equation would we solve to find the integrating factor, , in this case?          Incorrect. Look carefully at to see which equation you would get.           Correct!           Incorrect. Look carefully at to see which equation you would get.           Incorrect. Look carefully at to see which equation you would get.     Understanding the Role of   In this motivating example, what role does play?     It is a function that transforms the left side of our equation into a single derivative.    Correct! The function is chosen so that the left-hand side of the equation becomes a derivative.      It is a solution to the differential equation.    Incorrect. is used to manipulate the equation, not to solve it directly.      It eliminates the need for integration.    Incorrect. While it simplifies the equation, integration is still required to solve for .      It makes our differential equation second-order.    Incorrect. The equation remains first-order throughout the process.      "
},
{
  "id": "if-motivating-example-2-2",
  "level": "2",
  "url": "if-motivating-example.html#if-motivating-example-2-2",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "integrating factor "
},
{
  "id": "if-motivating-example-3-3",
  "level": "2",
  "url": "if-motivating-example.html#if-motivating-example-3-3",
  "type": "Details",
  "number": "11",
  "title": "Finding <span class=\"process-math\">\\(\\mu\\)<\/span> Slide Show for Equation (13).",
  "body": "Finding Slide Show for Equation        "
},
{
  "id": "if-motivating-example-3-7-3-3-7",
  "level": "2",
  "url": "if-motivating-example.html#if-motivating-example-3-7-3-3-7",
  "type": "Details",
  "number": "12",
  "title": "Clarifying “3️⃣ Condition on <span class=\"process-math\">\\(\\mu\\)<\/span>”.",
  "body": "Clarifying 3️⃣ Condition on    At the end of the day, all we are saying here is that in order for   to be equivalent to   then .  This is how we get the equation for . In particular, in order for equation to be equivalent to , then  .  "
},
{
  "id": "if-motivating-example-3-8",
  "level": "2",
  "url": "if-motivating-example.html#if-motivating-example-3-8",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "separable differential equation "
},
{
  "id": "if-motivating-example-3-9",
  "level": "2",
  "url": "if-motivating-example.html#if-motivating-example-3-9",
  "type": "Details",
  "number": "13",
  "title": "Solving Equation (18) with separation of variables.",
  "body": "Solving Equation with separation of variables       "
},
{
  "id": "chkpts-motivating-example",
  "level": "2",
  "url": "if-motivating-example.html#chkpts-motivating-example",
  "type": "Exercise",
  "number": "1",
  "title": "<em class=\"emphasis\">Answer-the-Following<\/em>.",
  "body": " Answer-the-Following   Complete the questions on each tab to check your understanding.   Select-all-that-Apply   In our example, we found as the integrating factor for  . Which part of this equation did the integrating factor depend on?     The constant term on the right side of the equation.    Incorrect. The integrating factor depends on the coefficient of in the original equation.      The coefficient of .    That's correct! The integrating factor depends on the coefficient of in the original equation.      Both the constant term and the coefficient of .    Incorrect. The integrating factor does not depend on both of these, only one.      The dependent variable, .    Incorrect. The variable , itself, is not involved in determining the integrating factor.     Select-the-Best-Answer   When deriving the condition equation (to find ), we multiplied the differential equation by to get What was the purpose of multiplying by ?     To balance the equation.    Remember that the goal is to solve the equation, not to balance it.      To make the equation separable.    Multiplying an non-separable equation by a function will never make it separable.      To verify if the integrating factor method can be used.    Multiplying a differential equation by a function will never help determine which method can be used.      To act as the missing function needed for a product rule.    That's correct! Multiplying by on both sides of the equation allows us to complete the product rule on the left side.     Select-the-Best-Answer   After multiplying the original differential equation by to get  , we jumped down to the last equation (our goal), given by   where we applied the product rule to expand the left side as  . What was the purpose of working backwards from the last equation like this?     To verify that the product rule was applied correctly.    Remember that the goal is to solve the equation, not to verify the product rule.      To simplify the equation.    Working backwards does not simplify the equation, but helps us see how the product rule can be applied.      This was the next logical step in the process.    Working backwards was a deliberate choice to show how the product rule could be applied.      To get an equation that more closely resembles .    That's correct! We wanted a form that we could directly compare to equation .     Select-the-Best-Answer   Suppose our motivating example was the differential equation  . Assuming we multiply both sides of this equation by , what condition equation would we solve to find the integrating factor, , in this case?          Incorrect. Look carefully at to see which equation you would get.           Correct!           Incorrect. Look carefully at to see which equation you would get.           Incorrect. Look carefully at to see which equation you would get.     Understanding the Role of   In this motivating example, what role does play?     It is a function that transforms the left side of our equation into a single derivative.    Correct! The function is chosen so that the left-hand side of the equation becomes a derivative.      It is a solution to the differential equation.    Incorrect. is used to manipulate the equation, not to solve it directly.      It eliminates the need for integration.    Incorrect. While it simplifies the equation, integration is still required to solve for .      It makes our differential equation second-order.    Incorrect. The equation remains first-order throughout the process.    "
},
{
  "id": "main-6-3-4-4",
  "level": "1",
  "url": "main-6-3-4-4.html",
  "type": "Subsection",
  "number": "",
  "title": "The General Integrating Factor Formula",
  "body": "The General Integrating Factor Formula   We are now ready to determine the general formula for given any first-order linear differential equation. Before we can find , we must first put our equation in standard form , given by  . Now, we want the function, , we multiply onto to write it in the form    Why All 1st-Order Linear Equations have a Standard Form    All first-order linear differential equations contain at most, terms, terms, and constant terms, allowing you to organize such an equation as . Dividing both sides by the leading coefficient, , and renaming the and constant coefficients as and , gives the standard form .     Deriving the Formula  As with the motivating example, we start by multiplying both sides of the differential equation by an unknown function :   The left side can only turn into , if it is also equal to this derivative's expanded product rule form. In particular, we need the following to be true:  . As you can see, the two sides are identical, except for the flagged 🚩 expressions. This means, can only be written as if also satisfies    📌 Note. If you are not sure where equation comes from, we encourage you to have another look at and how we get equation .    To find such a function, , we solve equation using separation of variables.    Separate:         Integrate:         📌 Note. The absolute value is dropped since the sign of the integrating factor is taken to be positive by convention.     Solve for :   .    Integrating Factor: General Formula  The integrating factor for a first-order linear differential equation in standard form is given by .   Now that we have derived the general formula, let's apply it to a few examples.   Examples of Integrating Factors  Basic Integrating Factor    Find the integrating factor for the differential equation:      The equation is in standard form with . Using the formula:  . Thus, the integrating factor is .    Integrating Factor with a Log Function    Determine the integrating factor for the differential equation:      The equation is in standard form with . Using the formula:   Evaluating the integral:   Thus, the integrating factor is .    Integrating Factor with a Trigonometric Function    Compute the integrating factor for the differential equation:      The equation is in standard form with . Using the formula:   Evaluating the integral:   Thus, the integrating factor is .      In this section, we derived the general formula for the integrating factor and demonstrated how to compute it with a few examples. The key takeaway is that the integrating factor always takes the form  , and once we have it, we can multiply it onto our equation to rewrite the left-hand side as a single derivative. In the next section, we will apply this approach step-by-step to solve first-order linear differential equations.    Check your Understanding    Answer-the-Following   Complete the questions on each tab to check your understanding.   Effect of Multiplying by the Integrating Factor   What happens when we multiply a first-order linear equation by its integrating factor?     The left-hand side becomes a single derivative of a product.    Correct! Multiplication by allows us to rewrite the left-hand side as .      The equation transforms into a homogeneous equation.    Incorrect. The equation remains nonhomogeneous unless .      The integrating factor cancels out completely.    Incorrect. The integrating factor is essential to rewriting the equation.      The equation always becomes separable.    Incorrect. The equation is rewritten into an integrable form, but it is not necessarily separable.     Standard Form Requirement   Why must a first-order linear differential equation be written in the form before using the integrating factor formula?     Because the formula was derived assuming this form.    Correct! The integrating factor formula is based on the standard form of a first-order linear equation and to compute it, is needed.      Because it ensures that the equation is linear.    No. You can ensure linearity without writing the equation in this form.      Because it guarantees the equation has a unique solution.    Incorrect. Writing the equation in this form does not determine uniqueness.      Because this is the standard form.    Incorrect. It is true that this is the standard form, but there is a better answer choice for this question.     Describing the Integrating Factor   Which of the following is the closest description of an integrating factor?     A particular solution to the differential equation.    Incorrect. The integrating factor is not a solution to the differential equation, but a function that helps solve it.      A function that is multiplied onto both sides of an equation.    Correct! The integrating factor is a function that you multiply both sides of a differential equation by.      A number that converts the equation into a different form.    Incorrect. In general, the integrating factor is a function, not a number.      The anti-derivative of (from the standard form).    Incorrect. The integrating factor is raised to the power of an anti-derivative of , but it is not the anti-derivative of , itself.     Selecting the Integrating Factor   What is the integrating factor for the equation ?          Incorrect. This is not the correct expression for the integrating factor.           Correct! The integrating factor is .           Incorrect. The correct integrating factor should involve the integral of the coefficient of , which is , not .           Incorrect. This is not the correct form for the integrating factor.     Finding the Integrating Factor   The integrating factor for the equation     is given by the function     e^(x^3)       Correct! For this equation, , therefore the integrating factor is .      Standard Form and the Integrating Factor 1   Rewrite the differential equation     in the standard first-order linear form and identify , and the integrating factor, .                       1\/x  2+1\/x  x       Correct! The equation is rearranged as showing that .         Correct! .         Correct! The integrating factor is .      Standard Form and the Integrating Factor 1   Rewrite the differential equation     in the standard first-order linear form and identify , and the integrating factor, .                       2*x  2  e^(x^2)       Correct! The equation is rearranged as showing that .         Incorrect. Double-check your algebra when rearranging the equation.         Correct! The integrating factor is .       "
},
{
  "id": "main-6-3-4-4-2-1",
  "level": "2",
  "url": "main-6-3-4-4.html#main-6-3-4-4-2-1",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "standard form "
},
{
  "id": "std-form-explained0",
  "level": "2",
  "url": "main-6-3-4-4.html#std-form-explained0",
  "type": "Details",
  "number": "14",
  "title": "<em class=\"emphasis\">Why All 1st-Order Linear Equations have a Standard Form<\/em>.",
  "body": " Why All 1st-Order Linear Equations have a Standard Form    All first-order linear differential equations contain at most, terms, terms, and constant terms, allowing you to organize such an equation as . Dividing both sides by the leading coefficient, , and renaming the and constant coefficients as and , gives the standard form .   "
},
{
  "id": "main-6-3-4-4-3-7-1",
  "level": "2",
  "url": "main-6-3-4-4.html#main-6-3-4-4-3-7-1",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "📌 Note. "
},
{
  "id": "main-6-3-4-4-3-12-1",
  "level": "2",
  "url": "main-6-3-4-4.html#main-6-3-4-4-3-12-1",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "📌 Note. "
},
{
  "id": "integrating-factor-general-formula-2",
  "level": "2",
  "url": "main-6-3-4-4.html#integrating-factor-general-formula-2",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "integrating factor "
},
{
  "id": "integrating-factor-basic-example",
  "level": "2",
  "url": "main-6-3-4-4.html#integrating-factor-basic-example",
  "type": "Example",
  "number": "15",
  "title": "Basic Integrating Factor.",
  "body": "Basic Integrating Factor    Find the integrating factor for the differential equation:      The equation is in standard form with . Using the formula:  . Thus, the integrating factor is .   "
},
{
  "id": "integrating-factor-log-example",
  "level": "2",
  "url": "main-6-3-4-4.html#integrating-factor-log-example",
  "type": "Example",
  "number": "16",
  "title": "Integrating Factor with a Log Function.",
  "body": "Integrating Factor with a Log Function    Determine the integrating factor for the differential equation:      The equation is in standard form with . Using the formula:   Evaluating the integral:   Thus, the integrating factor is .   "
},
{
  "id": "integrating-factor-trig-example",
  "level": "2",
  "url": "main-6-3-4-4.html#integrating-factor-trig-example",
  "type": "Example",
  "number": "17",
  "title": "Integrating Factor with a Trigonometric Function.",
  "body": "Integrating Factor with a Trigonometric Function    Compute the integrating factor for the differential equation:      The equation is in standard form with . Using the formula:   Evaluating the integral:   Thus, the integrating factor is .   "
},
{
  "id": "chkpts-general-integrating-factor",
  "level": "2",
  "url": "main-6-3-4-4.html#chkpts-general-integrating-factor",
  "type": "Exercise",
  "number": "1",
  "title": "<em class=\"emphasis\">Answer-the-Following<\/em>.",
  "body": " Answer-the-Following   Complete the questions on each tab to check your understanding.   Effect of Multiplying by the Integrating Factor   What happens when we multiply a first-order linear equation by its integrating factor?     The left-hand side becomes a single derivative of a product.    Correct! Multiplication by allows us to rewrite the left-hand side as .      The equation transforms into a homogeneous equation.    Incorrect. The equation remains nonhomogeneous unless .      The integrating factor cancels out completely.    Incorrect. The integrating factor is essential to rewriting the equation.      The equation always becomes separable.    Incorrect. The equation is rewritten into an integrable form, but it is not necessarily separable.     Standard Form Requirement   Why must a first-order linear differential equation be written in the form before using the integrating factor formula?     Because the formula was derived assuming this form.    Correct! The integrating factor formula is based on the standard form of a first-order linear equation and to compute it, is needed.      Because it ensures that the equation is linear.    No. You can ensure linearity without writing the equation in this form.      Because it guarantees the equation has a unique solution.    Incorrect. Writing the equation in this form does not determine uniqueness.      Because this is the standard form.    Incorrect. It is true that this is the standard form, but there is a better answer choice for this question.     Describing the Integrating Factor   Which of the following is the closest description of an integrating factor?     A particular solution to the differential equation.    Incorrect. The integrating factor is not a solution to the differential equation, but a function that helps solve it.      A function that is multiplied onto both sides of an equation.    Correct! The integrating factor is a function that you multiply both sides of a differential equation by.      A number that converts the equation into a different form.    Incorrect. In general, the integrating factor is a function, not a number.      The anti-derivative of (from the standard form).    Incorrect. The integrating factor is raised to the power of an anti-derivative of , but it is not the anti-derivative of , itself.     Selecting the Integrating Factor   What is the integrating factor for the equation ?          Incorrect. This is not the correct expression for the integrating factor.           Correct! The integrating factor is .           Incorrect. The correct integrating factor should involve the integral of the coefficient of , which is , not .           Incorrect. This is not the correct form for the integrating factor.     Finding the Integrating Factor   The integrating factor for the equation     is given by the function     e^(x^3)       Correct! For this equation, , therefore the integrating factor is .      Standard Form and the Integrating Factor 1   Rewrite the differential equation     in the standard first-order linear form and identify , and the integrating factor, .                       1\/x  2+1\/x  x       Correct! The equation is rearranged as showing that .         Correct! .         Correct! The integrating factor is .      Standard Form and the Integrating Factor 1   Rewrite the differential equation     in the standard first-order linear form and identify , and the integrating factor, .                       2*x  2  e^(x^2)       Correct! The equation is rearranged as showing that .         Incorrect. Double-check your algebra when rearranging the equation.         Correct! The integrating factor is .     "
},
{
  "id": "main-6-3-5-3",
  "level": "1",
  "url": "main-6-3-5-3.html",
  "type": "Subsection",
  "number": "",
  "title": "Method Steps",
  "body": "Method Steps   The integrating factor method is a step-by-step process that works for all first-order linear differential equations and is summarized as follows.     📌 Note. By convention, the integration constant is ignored in the integrating factor since any nonzero multiple of will still work to reverse the product rule.   Integrating Factor (IF)  Given a first-order linear equation in standard form:   the general solution can be found through the following three-step process :   Step 1: Find the Integrating Factor  Identify and compute the integrating factor :   .   Step 2: Multiply by to Complete the Derivative  Multiply both sides of equation by and reverse the product rule on the left side.   .   Step 3: Solve Using Direct Integration  Integrate both sides of equation and solve for to find the general solution.      The integrating factor method provides a structured approach to solving first-order linear equations. The three key steps —finding , transforming the equation, and integrating—apply universally to all such equations.  In the next section, we will apply this process through several worked examples to reinforce understanding.    Check your Understanding    Answer-the-Following   Complete the questions on each tab to check your understanding.   Conditions for the IF Method   What properties must a differential equation satisfy to use the integrating factor technique for finding its solution? Select all that apply.      1st Order.    The integrating factor method can only be applied to first-order differential equations.      Separable.    The integrating factor method is not used for separable differential equations.      Linear.    The integrating factor method can only be applied to linear differential equations.      Quadratic.    Quadratic is a property of algebraic equations.     Select all the equations that can be solved by the IF Method   Which equations can the integrating factor method be applied to?                     Linear equations only involve the dependent variable and its derivatives to the first power, and they won't be inside nonlinear functions like sine or multiplied by each other.   Remember that a linear differential equation contains only linear terms. Four of these equations are linear.   Final Step in the IF Method   What is the final step after multiplying the differential equation by the integrating factor and reversing the product rule?     Find the integrating factor again and repeat the process.    Incorrect. The integrating factor is only found once.      Factor out the integrating factor from the equation.    Incorrect. The integrating factor helps rewrite the equation, but it is not factored out at the final step.      Solve for the integrating factor using initial conditions.    Incorrect. The integrating factor is computed before applying initial conditions.      Apply direct integration to both sides of the equation.    Correct! The final step is to integrate both sides to find the solution.      Substitute into the original equation to check for errors.    Incorrect. Verifying the solution is optional, but the final required step is integration.     Purpose of the Integrating Factor   Which statement describes the purpose of the multiplying both sides of a differential equation by an integrating factor?     To eliminate the dependent variable.      To convert the equation into a separable form.      To solve for the constant of integration.      To transform the equation into a direct integration problem.     What happens when you multiply by the Integrating Factor?   After determining the integration factor, what is the next step in the process?     The original equation is multiplied by the integrating factor.    Incorrect. You should apply the integrating factor to the equation after transforming it into the standard form.      The standard form of the equation is multiplied by the integrating factor.    Correct! Once the equation is in the standard form, you multiply both sides by the integrating factor.      Apply direct integration to solve the equation.    Incorrect. Direct integration is the final step, after applying the integrating factor.      The reverse product rule is used to rewrite the equation.    Incorrect. The reverse product rule is not part of this process. Use the integrating factor first.     First Step in the IF Method   What is the first step in solving a first-order linear differential equation using the integrating factor (IF) method?     Rewrite the equation in the standard form.    Correct! The equation must first be arranged into standard form before applying the integrating factor.      Compute the integrating factor.    Incorrect. The integrating factor depends on , which must first be identified in standard form.      Integrate both sides of the equation.    Incorrect. Integration comes after multiplying by the integrating factor.      Divide by to make the equation separable.    Incorrect. The IF method does not require making the equation separable.      "
},
{
  "id": "main-6-3-5-3-3-1",
  "level": "2",
  "url": "main-6-3-5-3.html#main-6-3-5-3-3-1",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "📌 Note. "
},
{
  "id": "if-method",
  "level": "2",
  "url": "main-6-3-5-3.html#if-method",
  "type": "Method",
  "number": "2",
  "title": "Integrating Factor (IF).",
  "body": "Integrating Factor (IF)  Given a first-order linear equation in standard form:   the general solution can be found through the following three-step process :   Step 1: Find the Integrating Factor  Identify and compute the integrating factor :   .   Step 2: Multiply by to Complete the Derivative  Multiply both sides of equation by and reverse the product rule on the left side.   .   Step 3: Solve Using Direct Integration  Integrate both sides of equation and solve for to find the general solution.    "
},
{
  "id": "chkpts-if-method-steps",
  "level": "2",
  "url": "main-6-3-5-3.html#chkpts-if-method-steps",
  "type": "Exercise",
  "number": "1",
  "title": "<em class=\"emphasis\">Answer-the-Following<\/em>.",
  "body": " Answer-the-Following   Complete the questions on each tab to check your understanding.   Conditions for the IF Method   What properties must a differential equation satisfy to use the integrating factor technique for finding its solution? Select all that apply.      1st Order.    The integrating factor method can only be applied to first-order differential equations.      Separable.    The integrating factor method is not used for separable differential equations.      Linear.    The integrating factor method can only be applied to linear differential equations.      Quadratic.    Quadratic is a property of algebraic equations.     Select all the equations that can be solved by the IF Method   Which equations can the integrating factor method be applied to?                     Linear equations only involve the dependent variable and its derivatives to the first power, and they won't be inside nonlinear functions like sine or multiplied by each other.   Remember that a linear differential equation contains only linear terms. Four of these equations are linear.   Final Step in the IF Method   What is the final step after multiplying the differential equation by the integrating factor and reversing the product rule?     Find the integrating factor again and repeat the process.    Incorrect. The integrating factor is only found once.      Factor out the integrating factor from the equation.    Incorrect. The integrating factor helps rewrite the equation, but it is not factored out at the final step.      Solve for the integrating factor using initial conditions.    Incorrect. The integrating factor is computed before applying initial conditions.      Apply direct integration to both sides of the equation.    Correct! The final step is to integrate both sides to find the solution.      Substitute into the original equation to check for errors.    Incorrect. Verifying the solution is optional, but the final required step is integration.     Purpose of the Integrating Factor   Which statement describes the purpose of the multiplying both sides of a differential equation by an integrating factor?     To eliminate the dependent variable.      To convert the equation into a separable form.      To solve for the constant of integration.      To transform the equation into a direct integration problem.     What happens when you multiply by the Integrating Factor?   After determining the integration factor, what is the next step in the process?     The original equation is multiplied by the integrating factor.    Incorrect. You should apply the integrating factor to the equation after transforming it into the standard form.      The standard form of the equation is multiplied by the integrating factor.    Correct! Once the equation is in the standard form, you multiply both sides by the integrating factor.      Apply direct integration to solve the equation.    Incorrect. Direct integration is the final step, after applying the integrating factor.      The reverse product rule is used to rewrite the equation.    Incorrect. The reverse product rule is not part of this process. Use the integrating factor first.     First Step in the IF Method   What is the first step in solving a first-order linear differential equation using the integrating factor (IF) method?     Rewrite the equation in the standard form.    Correct! The equation must first be arranged into standard form before applying the integrating factor.      Compute the integrating factor.    Incorrect. The integrating factor depends on , which must first be identified in standard form.      Integrate both sides of the equation.    Incorrect. Integration comes after multiplying by the integrating factor.      Divide by to make the equation separable.    Incorrect. The IF method does not require making the equation separable.    "
},
{
  "id": "main-6-3-5-4",
  "level": "1",
  "url": "main-6-3-5-4.html",
  "type": "Subsection",
  "number": "",
  "title": "Examples",
  "body": "Examples   In this section, we apply the Integrating Factor Method to various first-order linear differential equations. These examples will illustrate the full process, from identifying the integrating factor to solving for .  Let's start with a straightforward example to demonstrate how the integrating factor method works in practice. This example requires minimal manipulation since the equation is already in standard form.   A Simple Example    Find the general solution to the equation   .      This is a first-order linear equation and it is already in standard form, so we proceed with the integrating factor method.       Identify and compute   Recall, we can ignore the integration constant for the integrating factor.        Multiply both sides by and reverse the product rule on the left side.              Converting to Standard Form    Solve the equation   .      This equation is first-order and linear, but is not in standard form, so we rewrite it as and now we can apply the integrating factor method.       Identify and compute         Multiply by and reverse the product rule on the left.        Here, the integral on the right is computed with -substitution:          Verify the Solution  We have found the general solution, but it is worth remembering that we can verify our solution by substituting back into the original equation.          The same result on the left & right confirms our solution.      Integrating Factor with Logarithm    Find the general solution to the differential equation         This equation is first-order and linear, but is not in standard form, so we rewrite it as and now we can apply the integrating factor method.    Find Integrating Factor         Multiply by          Complete the Derivative         Integrate Both Sides         Isolate          General Solution   .       An Equation Involving Integration by Parts    Solve the equation: .      We put the equation in standard form to identify and compute the integrating factor.     Multiply by and reverse the product rule on the left side.   Now, integrate both sides and use integration by parts on the right.              Finally, solve for :      An Initial-Valued Problem    Solve the initial value problem. .      Let's put the equation in standard form. After replacing with and moving the term to the left, we have   .  Multiplying this by allows us to identify and compute as   Multiply by and reverse the product rule on the left side. .  Integrate both sides and use -substitution on the right side.              Finally, we apply the initial condition to determine the constant .   We can then write the particular solution to the initial value problem.       These examples demonstrate the versatility of the Integrating Factor Method . Regardless of the complexity of the given equation, the same three-step approach —computing , transforming the equation, and solving via integration—provides a reliable solution strategy.  In the next section, we will explore applications of the integrating factor method in real-world problems.    Check your Understanding    Answer-the-Following   Nothing to see here.    "
},
{
  "id": "if-intro-exercise",
  "level": "2",
  "url": "main-6-3-5-4.html#if-intro-exercise",
  "type": "Example",
  "number": "18",
  "title": "A Simple Example.",
  "body": "A Simple Example    Find the general solution to the equation   .      This is a first-order linear equation and it is already in standard form, so we proceed with the integrating factor method.       Identify and compute   Recall, we can ignore the integration constant for the integrating factor.        Multiply both sides by and reverse the product rule on the left side.             "
},
{
  "id": "if-standard-form-conversion",
  "level": "2",
  "url": "main-6-3-5-4.html#if-standard-form-conversion",
  "type": "Example",
  "number": "19",
  "title": "Converting to Standard Form.",
  "body": "Converting to Standard Form    Solve the equation   .      This equation is first-order and linear, but is not in standard form, so we rewrite it as and now we can apply the integrating factor method.       Identify and compute         Multiply by and reverse the product rule on the left.        Here, the integral on the right is computed with -substitution:          Verify the Solution  We have found the general solution, but it is worth remembering that we can verify our solution by substituting back into the original equation.          The same result on the left & right confirms our solution.     "
},
{
  "id": "if-ln-example",
  "level": "2",
  "url": "main-6-3-5-4.html#if-ln-example",
  "type": "Example",
  "number": "20",
  "title": "Integrating Factor with Logarithm.",
  "body": "Integrating Factor with Logarithm    Find the general solution to the differential equation         This equation is first-order and linear, but is not in standard form, so we rewrite it as and now we can apply the integrating factor method.    Find Integrating Factor         Multiply by          Complete the Derivative         Integrate Both Sides         Isolate          General Solution   .      "
},
{
  "id": "main-6-3-5-4-6",
  "level": "2",
  "url": "main-6-3-5-4.html#main-6-3-5-4-6",
  "type": "Example",
  "number": "21",
  "title": "An Equation Involving Integration by Parts.",
  "body": "An Equation Involving Integration by Parts    Solve the equation: .      We put the equation in standard form to identify and compute the integrating factor.     Multiply by and reverse the product rule on the left side.   Now, integrate both sides and use integration by parts on the right.              Finally, solve for :     "
},
{
  "id": "main-6-3-5-4-7",
  "level": "2",
  "url": "main-6-3-5-4.html#main-6-3-5-4-7",
  "type": "Example",
  "number": "22",
  "title": "An Initial-Valued Problem.",
  "body": "An Initial-Valued Problem    Solve the initial value problem. .      Let's put the equation in standard form. After replacing with and moving the term to the left, we have   .  Multiplying this by allows us to identify and compute as   Multiply by and reverse the product rule on the left side. .  Integrate both sides and use -substitution on the right side.              Finally, we apply the initial condition to determine the constant .   We can then write the particular solution to the initial value problem.     "
},
{
  "id": "chkpts-examples",
  "level": "2",
  "url": "main-6-3-5-4.html#chkpts-examples",
  "type": "Exercise",
  "number": "1",
  "title": "<em class=\"emphasis\">Answer-the-Following<\/em>.",
  "body": " Answer-the-Following   Nothing to see here.  "
},
{
  "id": "main-6-3-6-3",
  "level": "1",
  "url": "main-6-3-6-3.html",
  "type": "Subsubsection",
  "number": "",
  "title": "IF Stuff",
  "body": "IF Stuff   The integrating factor method relies on rewriting a differential equation so that the left-hand side becomes the derivative of a product . To do this, we need to recognize when an expression can be written as a product rule in reverse .  In this subsection, we will:   ✅ Review the product rule from calculus.  ✅ Practice reversing the product rule on different expressions.  ✅ Apply this idea to transform differential equations into a solvable form.     Rewriting a differential equation so that one side is a completed derivative is a crucial step in the integrating factor method . The examples in this section show that when an equation already has the structure of a product rule, it can be solved easily. However, most first-order linear equations are missing a necessary function to complete the derivative.       Completing the square introduces a missing term to rewrite a quadratic equation in a solvable form.    Completing the derivative introduces a missing factor (the integrating factor ) to rewrite a differential equation in a solvable form.    The integrating factor method works by modifying the equation to fit a product rule structure , allowing direct integration.      In the next section, we will introduce the concept of an integrating factor , which allows us to modify a first-order linear equation so that it always fits the product rule structure.      The product rule is not only used to compute derivatives but also to combine multiple functions into a single derivative.     Reversing the product rule within a differential equation is a key step in the integrating factor method .    Once we rewrite one side of a differential equation as a single derivative, it can be solved by direct integration .      . While this integrating factor is specific to , the general integrating factor is found in a similar manner, which we will now show.  Consider the first-order linear equation:  . The left-hand side almost resembles the result of the product rule, but something is missing. If we attempt to rewrite it in the form , we quickly run into a problem. Labeling as and as , we see that no corresponding satisfies:   The left-hand side lacks the function that satisfies both parts of the product rule. To resolve this, let's create our own function by multiplying both sides by it, like so   For this to be a valid product rule, the derivative of must be in the position. Can you think of a function has a derivative that is times itself? There is only one, and that function is , since   Multiplying both sides of the equation by gives us  , but this is the same equation as in , which can be written as   and solved using direct integration.  This example demonstrates that multiplying by the right function can complete a missing derivative , allowing us to solve the equation. This function is called the integrating factor , and in the next section, we will formally define it and derive a general formula.   ---------------------------------------------------------   Now, recall that in order for this to be a valid product rule, we must have  , where is the unknown function we multiply the equation by. Notice that this is a differential equation! In particular, it is separable and we can find with the separation of variables method, as follows   Comparing this with the left-hand side of our given equation,   we see that for these to match, must satisfy the equation:   This is a separable differential equation , which we solve as follows:   Separate Variables:       Integrate Both Sides:        Solve for :      Since is an arbitrary constant, we can choose (since any constant multiple of an integrating factor still works), giving us:   This function is called the integrating factor . It allows us to transform our equation into a perfect derivative, which can then be solved by direct integration.  Every first-order linear differential equation has the form , and the left side is always one piece away from a complete product rule. To find this piece, we multiply both sides by , and label the pieces of the product rule, as before, We reason that in order for this to be a valid product rule, we must have . which is a differential equation that can be solved by separation of variables to find the integrating factor, , as .  "
},
{
  "id": "main-6-3-6-3-4-1",
  "level": "2",
  "url": "main-6-3-6-3.html#main-6-3-6-3-4-1",
  "type": "🗝️ Key Takeaways...",
  "number": "",
  "title": "",
  "body": "   Completing the square introduces a missing term to rewrite a quadratic equation in a solvable form.    Completing the derivative introduces a missing factor (the integrating factor ) to rewrite a differential equation in a solvable form.    The integrating factor method works by modifying the equation to fit a product rule structure , allowing direct integration.    "
},
{
  "id": "main-6-3-6-3-6-1",
  "level": "2",
  "url": "main-6-3-6-3.html#main-6-3-6-3-6-1",
  "type": "🗝️ Key Takeaways...",
  "number": "",
  "title": "",
  "body": "   The product rule is not only used to compute derivatives but also to combine multiple functions into a single derivative.     Reversing the product rule within a differential equation is a key step in the integrating factor method .    Once we rewrite one side of a differential equation as a single derivative, it can be solved by direct integration .    "
},
{
  "id": "main-6-3-6-3-22",
  "level": "2",
  "url": "main-6-3-6-3.html#main-6-3-6-3-22",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "--------------------------------------------------------- "
},
{
  "id": "main-6-3-6-3-37",
  "level": "2",
  "url": "main-6-3-6-3.html#main-6-3-6-3-37",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "integrating factor "
},
{
  "id": "main-6-3-6-4",
  "level": "1",
  "url": "main-6-3-6-4.html",
  "type": "Subsubsection",
  "number": "",
  "title": "Integrating Factor",
  "body": "Integrating Factor  Suppose and are differentiable functions. The product rule states that The forward version goes from left to right, while the backward version, which we'll focus on, goes from right to left. Let's practice applying both versions with a few examples.  Solving   The integrating factor for the first-order linear differential equation is . Multiplying both sides by transforms the equation into: .   Derivation of the Integrating Factor  Note, all first-order linear differential equations can be written in the form , where and are functions of . The goal is to write the left-side as a single derivative. However, backward product rule is missing a piece, , that we still need to find. We find by multiplying it onto , like so            Another Approach to the IF Method..  The integrating factor method uses a three-step strategy to solve first-order linear differential equations in the standard form :  Every linear differential equation looks like . The first-order version of this is , but we can divide both sides of this equation by : . Since every first-order linear differential equation can always be written as , we call this the first-order linear standard form .   . The heart of this method is the first step: finding the correct integrating factor. The second step uses this factor to write the left side as a single derivative. Finally, the last step finds the solution by direct integration .  Step 1: Finding the Integrating Factor  Understanding how to find the integrating factor is crucial. Let's carefully walk through this important process.  Consider the differential equations (specific on the left, general on the right):   ,   .  We would like to rewrite the left side as a single derivative using the backward product rule . However, the alone suggests there is a missing second function that the product rule needs. Maybe there is a function that we can multiply both sides of the equation by to get the desired product rule. Let's call it for now and see if we can find it. We start by multiplying both sides by :   .   .  Notice that the left side almost looks like the product rule , except for the boxed value where should be (see below).   ,   .  This shows that the that works is the one that satisfies      .  Careful inspection shows that these are separable differential equations where the unknown can be found using separation of variables!        Although the solution conatains a constant, we only need one function that works, so we set . The function is called the integrating factor and finding it is the first step toward solving a first order differential equation.   Step 2: Rewriting the Equation With the integrating factor in hand, we are ready to write the left side as a derivative using the backward product rule .  Integrating Factor:    Integrating Factor:  .    Step 3: Solving the Equation  The final step is to apply direct integration . This was covered in a previous section, so we will skip some of the details here.       where .    General Solution  The general solution for the first-order linear differential equation   is given by where is the integrating factor.     In summary, the integrating factor method is a three-step process that utilizes the integrating factor to rewrite the left side of the equation, enabling direct integration and leading to the general solution.   Another Approach to the IF Method..   and then we integrate both sides with respect to to free the unknown from inside the , so that we can solve for it. However, we have not talked about how the integrating factor gets the differential equation into this form. Luckily, the product rule for deriviatives holds the answer. Therefore, let's start this discussing by reminding ourselves that the product rule is given by   Ok, the claim is that after a some math the differential equation can be rewritten as To explain this, it may be easier to work backwards. That is, let's start with and see how it may connect back to . We start by applying the product rule on the left side, At this point stop and compare equation with the last equation . Do you see how the two equations are connected?  You should see that multiplying both sides of by gives you .  In a nutshell, the integrating factor technique attempts to solve by multiplying both sides by an unknown function,  then find a so that the left-hand side can be written as the product rule of and .   To clarify, let's look at an example where we know .  The previous example shows how to solve the equation when you know what is. However, in a real problem, you will have to find first!  Let's build on the previous example to try and understand why worked. It is important to try and think of as the missing part needed to to be consistent with the product rule. That is, the left-side of the equation is missing a second function needed to be consistent with the product rule. So let's fill-in this missing function by multiplying both sides by , Is the left-side, , equal to ? Well, not exactly, since taking this derivative shows the difference between these two, namely                                  difference             left-side           However, what if was chosen so that ? It turns out that this is exactly how we chose . Finding such that is itself a differential equation which can be solved using separation of variables. (You may try it yourself first for practice, then look below to see how to solve this DE.)  Using separation of variables, solve to get the solution    Since, we only need one to work, we choose for convenience, hence Now you see where the came from in part 1 of ??. In fact, this example outlines how is found for any first order linear differential equation of the form    Matching the terms of the top and middle expressions in order to reverse the product rule. Notice the terms are already equal, so we only need to find .       "
},
{
  "id": "main-6-3-6-4-3",
  "level": "2",
  "url": "main-6-3-6-4.html#main-6-3-6-4-3",
  "type": "Details",
  "number": "23",
  "title": "Solving (29).",
  "body": "Solving   The integrating factor for the first-order linear differential equation is . Multiplying both sides by transforms the equation into: .   Derivation of the Integrating Factor  Note, all first-order linear differential equations can be written in the form , where and are functions of . The goal is to write the left-side as a single derivative. However, backward product rule is missing a piece, , that we still need to find. We find by multiplying it onto , like so           "
},
{
  "id": "main-6-3-6-4-5-11",
  "level": "2",
  "url": "main-6-3-6-4.html#main-6-3-6-4-5-11",
  "type": "Figure",
  "number": "24",
  "title": "",
  "body": " Matching the terms of the top and middle expressions in order to reverse the product rule. Notice the terms are already equal, so we only need to find .     "
},
{
  "id": "main-6-3-7-2",
  "level": "1",
  "url": "main-6-3-7-2.html",
  "type": "Exercises",
  "number": "",
  "title": "Warm-ups &amp; Drills",
  "body": "Warm-ups & Drills  Reversed Product Rule in a Differential Equation   Rewrite the left-side of the differential equation as a reversed product rule. Then find the general solution of the equation by direct integration .       To reverse the product rule on the left-side, let's label and as before. This time, we get   which allows us to update the left-side of the equation as .    To solve the differential equation, we can directly integrate both sides of the equation with respect to . This gives us and then divide by to isolate : .       Determine if the integrating factor method can be applied to the differential equation    As always, we start by trying to classify the equation to determine which method applies. A quick observation shows us that we are dealing with a first order, nonlinear differential equation.  The term makes the DE nonlinear.  This leaves separation of variables as the remaining possibility, but it is also easy to see that the and terms cannot be separated by multiplication.  Since the classification falls outside the requirements of any of our known methods, we are not equipped to solve it at this time.   Given that is some unknown function of , compute .      Suppose some product rule produced the following derivative Write down the product rule that this came from. That is, rewrite it in the form   Our goal is to find and so that the product rule gives us . This requires that we match the terms of and .  Observing that , and then it makes sense to match the terms like so   Therefore, we can rewrite like so and we have \"reversed the product rule\".   Suppose the following expression is the derivative of a product of two functions, where is a function of : Find the two functions and write down the derivative of their product, explicitly showing the steps involving the product rule.  We are still trying to identify two functions, and , such that we see each function and its derivative as in the product rule. We may need to rearrange a little bit, but we do in fact have such functions, as shown below. Hence, and and the derivative, using the product rule, is   Warning: You've been looking at a very special class of expressions! Not every sum of terms comes from the product rule. For exercise, we cannot un-do the product rule in the expression because the derivative of is not . You should pay close attention to whether you can or cannot un-do the product rule; this can help confirm if you have or have not made a mistake in solving a DE. We'll discuss this further later.   Rewrite the expression as a \"reversed product rule\" in the form   We will approach this as before and attempt to match the appropriate terms.  The product rule tells us that is the same as   We used the chain rule to compute   After arranging the terms, we match with and see that can only be matched to . So, and this means that is the anti-derivative of , or This shows that there are many possible answers (one for each value of ), but only one is required. So we pick which makes and conclude that    Suppose is a function of . Find one function such that the derivative of has the form   It may be easier to sort this out if we label parts of the equation to align with the product rule, as below.   If we're going to be able to undo the product rule, we will need to find a function such that   This is a first order, separable DE, and we solve it accordingly.   Since we need only one function , we can choose any value we like for . Here we will choose , and therefore the function is . We can check by un-doing the product rule.    Suppose and are functions of . Find one function such that the derivative of has the form   This is a generic version of the previous exercise. If we can draw a conclusion using this generic version, we might be able to use it in future exercises.  As before, it may be easier to sort this out if we label parts of the equation to align with the product rule, as below.   If we're going to be able to undo the product rule, we will need to find a function such that   This is a first order, separable DE, and we solve it accordingly.   Since we need only one function , we usually choose the positive one and therefore we write .  This may not look like much, but let's see if it would work for the previous exercises already did. Recall that we were trying to un-do the product rule in the expression   In this exercise, we would identify the function as . Then the function we desire would be given by   (Notice that we chose because we need only one function , and this is the simplest choice for ).  So our formula does give the same function we found previously. Let's practice one more.   Suppose is a function of . Find one function such that the derivative of has the form   In this exercise, the plays the same role as (in the previous exercise). Thus we can find in a similar way.   As in the previous exercise, we need only one function , so we can simplify this expression. In this case, we can choose , and we can also eliminate the absolute value. This lead us to , which further simplifies to . As in the previous exercises, we can replace in the original expression and then actually un-do the product rule.    An Equation Involving -Substitution   Solve the differential equation: .     We put the equation in standard form to identify and compute the integrating factor.     Multiply by and reverse the product rule on the left side.   Next, integrate both sides and use -substitution on the right side.          Finally, solve for :     "
},
{
  "id": "main-6-3-7-2-2",
  "level": "2",
  "url": "main-6-3-7-2.html#main-6-3-7-2-2",
  "type": "Exercise",
  "number": "1",
  "title": "Reversed Product Rule in a Differential Equation.",
  "body": "Reversed Product Rule in a Differential Equation   Rewrite the left-side of the differential equation as a reversed product rule. Then find the general solution of the equation by direct integration .       To reverse the product rule on the left-side, let's label and as before. This time, we get   which allows us to update the left-side of the equation as .    To solve the differential equation, we can directly integrate both sides of the equation with respect to . This gives us and then divide by to isolate : .     "
},
{
  "id": "main-6-3-7-2-3",
  "level": "2",
  "url": "main-6-3-7-2.html#main-6-3-7-2-3",
  "type": "Exercise",
  "number": "2",
  "title": "",
  "body": " Determine if the integrating factor method can be applied to the differential equation    As always, we start by trying to classify the equation to determine which method applies. A quick observation shows us that we are dealing with a first order, nonlinear differential equation.  The term makes the DE nonlinear.  This leaves separation of variables as the remaining possibility, but it is also easy to see that the and terms cannot be separated by multiplication.  Since the classification falls outside the requirements of any of our known methods, we are not equipped to solve it at this time.  "
},
{
  "id": "main-6-3-7-2-4",
  "level": "2",
  "url": "main-6-3-7-2.html#main-6-3-7-2-4",
  "type": "Exercise",
  "number": "3",
  "title": "",
  "body": "Given that is some unknown function of , compute .     "
},
{
  "id": "main-6-3-7-2-5",
  "level": "2",
  "url": "main-6-3-7-2.html#main-6-3-7-2-5",
  "type": "Exercise",
  "number": "4",
  "title": "",
  "body": "Suppose some product rule produced the following derivative Write down the product rule that this came from. That is, rewrite it in the form   Our goal is to find and so that the product rule gives us . This requires that we match the terms of and .  Observing that , and then it makes sense to match the terms like so   Therefore, we can rewrite like so and we have \"reversed the product rule\".  "
},
{
  "id": "main-6-3-7-2-6",
  "level": "2",
  "url": "main-6-3-7-2.html#main-6-3-7-2-6",
  "type": "Exercise",
  "number": "5",
  "title": "",
  "body": "Suppose the following expression is the derivative of a product of two functions, where is a function of : Find the two functions and write down the derivative of their product, explicitly showing the steps involving the product rule.  We are still trying to identify two functions, and , such that we see each function and its derivative as in the product rule. We may need to rearrange a little bit, but we do in fact have such functions, as shown below. Hence, and and the derivative, using the product rule, is   Warning: You've been looking at a very special class of expressions! Not every sum of terms comes from the product rule. For exercise, we cannot un-do the product rule in the expression because the derivative of is not . You should pay close attention to whether you can or cannot un-do the product rule; this can help confirm if you have or have not made a mistake in solving a DE. We'll discuss this further later.  "
},
{
  "id": "main-6-3-7-2-7",
  "level": "2",
  "url": "main-6-3-7-2.html#main-6-3-7-2-7",
  "type": "Exercise",
  "number": "6",
  "title": "",
  "body": "Rewrite the expression as a \"reversed product rule\" in the form   We will approach this as before and attempt to match the appropriate terms.  The product rule tells us that is the same as   We used the chain rule to compute   After arranging the terms, we match with and see that can only be matched to . So, and this means that is the anti-derivative of , or This shows that there are many possible answers (one for each value of ), but only one is required. So we pick which makes and conclude that   "
},
{
  "id": "main-6-3-7-2-8",
  "level": "2",
  "url": "main-6-3-7-2.html#main-6-3-7-2-8",
  "type": "Exercise",
  "number": "7",
  "title": "",
  "body": "Suppose is a function of . Find one function such that the derivative of has the form   It may be easier to sort this out if we label parts of the equation to align with the product rule, as below.   If we're going to be able to undo the product rule, we will need to find a function such that   This is a first order, separable DE, and we solve it accordingly.   Since we need only one function , we can choose any value we like for . Here we will choose , and therefore the function is . We can check by un-doing the product rule.   "
},
{
  "id": "main-6-3-7-2-9",
  "level": "2",
  "url": "main-6-3-7-2.html#main-6-3-7-2-9",
  "type": "Exercise",
  "number": "8",
  "title": "",
  "body": "Suppose and are functions of . Find one function such that the derivative of has the form   This is a generic version of the previous exercise. If we can draw a conclusion using this generic version, we might be able to use it in future exercises.  As before, it may be easier to sort this out if we label parts of the equation to align with the product rule, as below.   If we're going to be able to undo the product rule, we will need to find a function such that   This is a first order, separable DE, and we solve it accordingly.   Since we need only one function , we usually choose the positive one and therefore we write .  This may not look like much, but let's see if it would work for the previous exercises already did. Recall that we were trying to un-do the product rule in the expression   In this exercise, we would identify the function as . Then the function we desire would be given by   (Notice that we chose because we need only one function , and this is the simplest choice for ).  So our formula does give the same function we found previously. Let's practice one more.  "
},
{
  "id": "main-6-3-7-2-10",
  "level": "2",
  "url": "main-6-3-7-2.html#main-6-3-7-2-10",
  "type": "Exercise",
  "number": "9",
  "title": "",
  "body": "Suppose is a function of . Find one function such that the derivative of has the form   In this exercise, the plays the same role as (in the previous exercise). Thus we can find in a similar way.   As in the previous exercise, we need only one function , so we can simplify this expression. In this case, we can choose , and we can also eliminate the absolute value. This lead us to , which further simplifies to . As in the previous exercises, we can replace in the original expression and then actually un-do the product rule.   "
},
{
  "id": "main-6-3-7-2-11",
  "level": "2",
  "url": "main-6-3-7-2.html#main-6-3-7-2-11",
  "type": "Exercise",
  "number": "10",
  "title": "An Equation Involving <span class=\"process-math\">\\(u\\)<\/span>-Substitution.",
  "body": "An Equation Involving -Substitution   Solve the differential equation: .     We put the equation in standard form to identify and compute the integrating factor.     Multiply by and reverse the product rule on the left side.   Next, integrate both sides and use -substitution on the right side.          Finally, solve for :    "
},
{
  "id": "main-6-3-7-3",
  "level": "1",
  "url": "main-6-3-7-3.html",
  "type": "Subsection",
  "number": "",
  "title": "Exercises",
  "body": "Exercises  Conceptual Review  Conceptual Questions  Answer the following questions.  Write the differential equation below in the form and identify and . Also, state the order and whether it is linear or not.               order is 1  it is linear     What classification of DEs be solved by applying an integrating factor?   We can use an integrating factor to solve DEs that are linear and first order.      Select-the-Best-Answer   In solving the equation , what form does the general solution take after direct integration?      .    Incorrect. This is not the correct form. You need to account for the integrating factor as well.       .    Correct! This is the general solution after applying the integrating factor and performing direct integration.       .    Incorrect. The correct general solution includes the integrating factor in both the exponent and the integral.       .    Incorrect. This form does not represent the general solution to this type of equation.      Select-the-Best-Answer   What technique was used to evaluate the integral ?     Substitution.    Incorrect. Substitution is not the technique used here.      Integration by parts.    Correct! Integration by parts is the appropriate technique for this integral.      Partial fraction decomposition.    Incorrect. Partial fraction decomposition is not useful for this integral.      The Product Rule.    Incorrect. The product rule is a differentiation technique, not an integration technique.      Select-the-Best-Answer   After finding the integrating factor, how is the general solution to the differential equation found?     By directly solving for the constant of integration.      By integrating both sides of the equation with respect to the independent variable.      By factoring the equation.      By solving for the dependent variable directly.      Select-the-Best-Answer   Select the integrating factor for the equation .                                 Short-Answer   Classify all first-order differential equations that CANNOT be solved by neither separation of variables nor integrating factor. Give an example of such a differential equation.   Non-linear and non-separable describe all the first-order differential equations that CANNOT be solved by neither separation of variables nor integrating factor.  Here are a few examples of such differential equations:     Answer   Role of the Integrating Factor   Why is an integrating factor used in solving differential equations?     To modify the equation so that one side becomes a perfect derivative.    Correct! The integrating factor enables us to rewrite the equation in a form that allows direct integration.      To eliminate the derivative term completely.    Incorrect. The integrating factor does not eliminate derivatives but reorganizes the equation.      To factor the differential equation into linear terms.    Incorrect. The integrating factor does not factor the equation in the algebraic sense.      To make the equation homogeneous.    Incorrect. The integrating factor does not necessarily make an equation homogeneous.     Forming a Single Derivative   What condition must hold for the left-hand side of the differential equation to become a single derivative?     The function must satisfy the equation .    Correct! This condition ensures that multiplying by allows the product rule to be reversed.      The function must be a constant.    Incorrect. If were constant, it would not allow the left-hand side to transform into a derivative.      The equation must be rewritten in homogeneous form first.    Incorrect. The integrating factor method applies to nonhomogeneous equations as well.      The right-hand side must be equal to zero.    Incorrect. The right-hand side does not need to be zero for the integrating factor method to work.     Final Step in Solving   After rewriting the equation as , what is the next step?     Apply the product rule to expand the left-hand side.    Incorrect. The product rule was already reversed to reach this form; expanding it again would undo progress.      Integrate both sides to solve for .    Correct! Now that the left-hand side is a derivative, we integrate both sides to solve for .      Multiply by another integrating factor.    Incorrect. A second integrating factor is unnecessary.      Differentiate both sides to simplify the expression.    Incorrect. Further differentiation is not required at this stage.     Effect of Multiplying by the Integrating Factor   What happens when a first-order linear equation is multiplied by its integrating factor?     The left-hand side becomes a single derivative of a product.    Correct! The integrating factor allows the left-hand side to be rewritten as .      The equation transforms into a separable equation.    Incorrect. The equation is rewritten for integration but does not necessarily become separable.      The integrating factor cancels out completely.    Incorrect. The integrating factor is essential to rewriting the equation.      The equation always becomes homogeneous.    Incorrect. The integrating factor method applies to both homogeneous and nonhomogeneous equations.     Effect of Multiplying by   What is the purpose of multiplying both sides of the equation by ?     To rewrite the left-hand side as a single derivative .    Correct! The IF method works by transforming the equation into a form that can be directly integrated.      To eliminate the derivative term entirely.    Incorrect. The derivative remains but is rewritten as a total derivative.      To make the equation separable.    Incorrect. The IF method does not require separability.      To make a constant function.    Incorrect. is still a function of after multiplication.     True-or-False   The differential equation, below, is in standard form.    This differential equation is not in the form .   Check to see that the differential equation is in the form .   Key Steps in the Solution Process   Which of the following is the correct sequence of steps when solving a first-order linear differential equation using the integrating factor method?     Rewrite the equation in standard form, compute the integrating factor, multiply the equation by the integrating factor, integrate both sides, and solve for .    Correct! These are the essential steps in the integrating factor method.      Find the integrating factor, multiply by it, take the second derivative, and solve for .    Incorrect. The second derivative is not needed in this method.      Integrate both sides first, find the integrating factor, then rewrite the equation in standard form.    Incorrect. The integrating factor is computed before integration.      Rewrite the equation in standard form, take the square root of both sides, and integrate.    Incorrect. The square root step is not part of the integrating factor method.     Choosing the Correct Integrating Factor   If a first-order linear equation is written as , what is the appropriate integrating factor?          Correct! The integrating factor is found using .           Incorrect. The integrating factor should be based on , not .           Incorrect. The exponent should be positive, following .           Incorrect. The integrating factor should be based on the integral of , not an arbitrary function.     Final Step in Solving the Equation   Once the equation is rewritten in the form , what is the next step?     Differentiate both sides again.    Incorrect. Further differentiation is not needed at this stage.      Multiply both sides by again.    Incorrect. The equation is already multiplied by the integrating factor.      Integrate both sides to find .    Correct! At this stage, integration is the key step to solving for .      Factor the equation to solve for .    Incorrect. The equation is already structured for integration, not factoring.      Solve the Differential Equations  Forward Product Rule  Compute the derivative of each of the following functions.          The Integrating Factor  Find the integrating factor of each of the following differential equations.          General Solution  Use an integrating factor to find the general solution to each equation.          First we note that this DE is already in standard form for a first-order linear DE, with Then we find the integrating factor  Now we multiply both sides of the DE by the integrating factor. Now we recall the product rule for derivatives: We note that the two terms on the left hand side of equation (\\ref{eq1}) are the result of taking the derivative of the product. Hence we can undo the product rule as follows: Now we can integrate both sides of the equation and then solve for the dependent variable.     , where        First we put DE in standard form for a first-order linear DE so we can identify  Thus, Then we find the integrating factor  Now we multiply both sides of the DE by the integrating factor. Now we recall the product rule for derivatives: We note that the two terms on the left hand side of equation (\\ref{eq2}) are the result of taking the derivative of the product. Hence we can undo the product rule as follows: Now we can integrate both sides of the equation and then solve for the dependent variable.     where        First we put DE in standard form for a first-order linear DE so we can identify Notice that for this DE is the independent variable (i.e., it is like the ) and is the dependent variable (i.e., it is like the ). Hence the standard form we will aim for is and we want to identify  Thus, Then we find the integrating factor  Now we multiply both sides of the DE by the integrating factor. Now we recall the product rule for derivatives: We note that the two terms on the left hand side of equation (\\ref{eq3}) are the result of taking the derivative of the product. Hence we can undo the product rule as follows: Now we can integrate both sides of the equation and then solve for the dependent variable.            First we put DE in standard form for a first-order linear DE so we can identify ...EXCEPT for this DE, the roles of and are switched. Notice that here is the independent variable and is the dependent variable. So we will aim for the standard for and we want to identify  Thus, Then we find the integrating factor  Now we multiply both sides of the DE by the integrating factor. Now we recall the product rule for derivatives: We note that the two terms on the left hand side of equation (\\ref{eq4}) are the result of taking the derivative of the product. Hence we can undo the product rule as follows: Now we can integrate both sides of the equation and then solve for the dependent variable.     Initial-Value Problems  Solve each initial value problem   where and        where and                 Multiple-Choice   What is the method used to solve the differential equation ?    Direct integration.  Correct! The equation is solved by integrating both sides with respect to .    Separation of variables.  Incorrect. Separation of variables is used when the variables can be separated, but here the equation is solved by direct integration.    Substitution.  Incorrect. Substitution is a different method. The correct method here is direct integration.    Partial fractions.  Incorrect. Partial fractions are used to simplify the integration process, but the primary method here is direct integration.     "
},
{
  "id": "main-6-3-7-3-2-2-3",
  "level": "2",
  "url": "main-6-3-7-3.html#main-6-3-7-3-2-2-3",
  "type": "Exercise",
  "number": "1",
  "title": "",
  "body": "Write the differential equation below in the form and identify and . Also, state the order and whether it is linear or not.               order is 1  it is linear    "
},
{
  "id": "main-6-3-7-3-2-2-4",
  "level": "2",
  "url": "main-6-3-7-3.html#main-6-3-7-3-2-2-4",
  "type": "Exercise",
  "number": "2",
  "title": "",
  "body": "What classification of DEs be solved by applying an integrating factor?   We can use an integrating factor to solve DEs that are linear and first order.   "
},
{
  "id": "p2-c3-s4-rq3",
  "level": "2",
  "url": "main-6-3-7-3.html#p2-c3-s4-rq3",
  "type": "Exercise",
  "number": "3",
  "title": "<em class=\"emphasis\">Select-the-Best-Answer<\/em>.",
  "body": " Select-the-Best-Answer   In solving the equation , what form does the general solution take after direct integration?      .    Incorrect. This is not the correct form. You need to account for the integrating factor as well.       .    Correct! This is the general solution after applying the integrating factor and performing direct integration.       .    Incorrect. The correct general solution includes the integrating factor in both the exponent and the integral.       .    Incorrect. This form does not represent the general solution to this type of equation.    "
},
{
  "id": "p2-c3-s4-rq5",
  "level": "2",
  "url": "main-6-3-7-3.html#p2-c3-s4-rq5",
  "type": "Exercise",
  "number": "4",
  "title": "<em class=\"emphasis\">Select-the-Best-Answer<\/em>.",
  "body": " Select-the-Best-Answer   What technique was used to evaluate the integral ?     Substitution.    Incorrect. Substitution is not the technique used here.      Integration by parts.    Correct! Integration by parts is the appropriate technique for this integral.      Partial fraction decomposition.    Incorrect. Partial fraction decomposition is not useful for this integral.      The Product Rule.    Incorrect. The product rule is a differentiation technique, not an integration technique.    "
},
{
  "id": "p2-c3-s4-rq6",
  "level": "2",
  "url": "main-6-3-7-3.html#p2-c3-s4-rq6",
  "type": "Exercise",
  "number": "5",
  "title": "<em class=\"emphasis\">Select-the-Best-Answer<\/em>.",
  "body": " Select-the-Best-Answer   After finding the integrating factor, how is the general solution to the differential equation found?     By directly solving for the constant of integration.      By integrating both sides of the equation with respect to the independent variable.      By factoring the equation.      By solving for the dependent variable directly.    "
},
{
  "id": "p2-c3-s4-rq8",
  "level": "2",
  "url": "main-6-3-7-3.html#p2-c3-s4-rq8",
  "type": "Exercise",
  "number": "6",
  "title": "<em class=\"emphasis\">Select-the-Best-Answer<\/em>.",
  "body": " Select-the-Best-Answer   Select the integrating factor for the equation .                               "
},
{
  "id": "c4-cr-short-ans-1",
  "level": "2",
  "url": "main-6-3-7-3.html#c4-cr-short-ans-1",
  "type": "Exercise",
  "number": "7",
  "title": "<em class=\"emphasis\">Short-Answer<\/em>.",
  "body": " Short-Answer   Classify all first-order differential equations that CANNOT be solved by neither separation of variables nor integrating factor. Give an example of such a differential equation.   Non-linear and non-separable describe all the first-order differential equations that CANNOT be solved by neither separation of variables nor integrating factor.  Here are a few examples of such differential equations:   "
},
{
  "id": "main-6-3-7-3-2-8",
  "level": "2",
  "url": "main-6-3-7-3.html#main-6-3-7-3-2-8",
  "type": "Exercise",
  "number": "8",
  "title": "",
  "body": " Answer   Role of the Integrating Factor   Why is an integrating factor used in solving differential equations?     To modify the equation so that one side becomes a perfect derivative.    Correct! The integrating factor enables us to rewrite the equation in a form that allows direct integration.      To eliminate the derivative term completely.    Incorrect. The integrating factor does not eliminate derivatives but reorganizes the equation.      To factor the differential equation into linear terms.    Incorrect. The integrating factor does not factor the equation in the algebraic sense.      To make the equation homogeneous.    Incorrect. The integrating factor does not necessarily make an equation homogeneous.     Forming a Single Derivative   What condition must hold for the left-hand side of the differential equation to become a single derivative?     The function must satisfy the equation .    Correct! This condition ensures that multiplying by allows the product rule to be reversed.      The function must be a constant.    Incorrect. If were constant, it would not allow the left-hand side to transform into a derivative.      The equation must be rewritten in homogeneous form first.    Incorrect. The integrating factor method applies to nonhomogeneous equations as well.      The right-hand side must be equal to zero.    Incorrect. The right-hand side does not need to be zero for the integrating factor method to work.     Final Step in Solving   After rewriting the equation as , what is the next step?     Apply the product rule to expand the left-hand side.    Incorrect. The product rule was already reversed to reach this form; expanding it again would undo progress.      Integrate both sides to solve for .    Correct! Now that the left-hand side is a derivative, we integrate both sides to solve for .      Multiply by another integrating factor.    Incorrect. A second integrating factor is unnecessary.      Differentiate both sides to simplify the expression.    Incorrect. Further differentiation is not required at this stage.     Effect of Multiplying by the Integrating Factor   What happens when a first-order linear equation is multiplied by its integrating factor?     The left-hand side becomes a single derivative of a product.    Correct! The integrating factor allows the left-hand side to be rewritten as .      The equation transforms into a separable equation.    Incorrect. The equation is rewritten for integration but does not necessarily become separable.      The integrating factor cancels out completely.    Incorrect. The integrating factor is essential to rewriting the equation.      The equation always becomes homogeneous.    Incorrect. The integrating factor method applies to both homogeneous and nonhomogeneous equations.     Effect of Multiplying by   What is the purpose of multiplying both sides of the equation by ?     To rewrite the left-hand side as a single derivative .    Correct! The IF method works by transforming the equation into a form that can be directly integrated.      To eliminate the derivative term entirely.    Incorrect. The derivative remains but is rewritten as a total derivative.      To make the equation separable.    Incorrect. The IF method does not require separability.      To make a constant function.    Incorrect. is still a function of after multiplication.     True-or-False   The differential equation, below, is in standard form.    This differential equation is not in the form .   Check to see that the differential equation is in the form .   Key Steps in the Solution Process   Which of the following is the correct sequence of steps when solving a first-order linear differential equation using the integrating factor method?     Rewrite the equation in standard form, compute the integrating factor, multiply the equation by the integrating factor, integrate both sides, and solve for .    Correct! These are the essential steps in the integrating factor method.      Find the integrating factor, multiply by it, take the second derivative, and solve for .    Incorrect. The second derivative is not needed in this method.      Integrate both sides first, find the integrating factor, then rewrite the equation in standard form.    Incorrect. The integrating factor is computed before integration.      Rewrite the equation in standard form, take the square root of both sides, and integrate.    Incorrect. The square root step is not part of the integrating factor method.     Choosing the Correct Integrating Factor   If a first-order linear equation is written as , what is the appropriate integrating factor?          Correct! The integrating factor is found using .           Incorrect. The integrating factor should be based on , not .           Incorrect. The exponent should be positive, following .           Incorrect. The integrating factor should be based on the integral of , not an arbitrary function.     Final Step in Solving the Equation   Once the equation is rewritten in the form , what is the next step?     Differentiate both sides again.    Incorrect. Further differentiation is not needed at this stage.      Multiply both sides by again.    Incorrect. The equation is already multiplied by the integrating factor.      Integrate both sides to find .    Correct! At this stage, integration is the key step to solving for .      Factor the equation to solve for .    Incorrect. The equation is already structured for integration, not factoring.    "
},
{
  "id": "main-6-3-7-3-3-2-3",
  "level": "2",
  "url": "main-6-3-7-3.html#main-6-3-7-3-3-2-3",
  "type": "Exercise",
  "number": "1",
  "title": "",
  "body": "      "
},
{
  "id": "main-6-3-7-3-3-3-3",
  "level": "2",
  "url": "main-6-3-7-3.html#main-6-3-7-3-3-3-3",
  "type": "Exercise",
  "number": "2",
  "title": "",
  "body": "      "
},
{
  "id": "main-6-3-7-3-3-4-3",
  "level": "2",
  "url": "main-6-3-7-3.html#main-6-3-7-3-3-4-3",
  "type": "Exercise",
  "number": "3",
  "title": "",
  "body": "        First we note that this DE is already in standard form for a first-order linear DE, with Then we find the integrating factor  Now we multiply both sides of the DE by the integrating factor. Now we recall the product rule for derivatives: We note that the two terms on the left hand side of equation (\\ref{eq1}) are the result of taking the derivative of the product. Hence we can undo the product rule as follows: Now we can integrate both sides of the equation and then solve for the dependent variable.   "
},
{
  "id": "main-6-3-7-3-3-4-4",
  "level": "2",
  "url": "main-6-3-7-3.html#main-6-3-7-3-3-4-4",
  "type": "Exercise",
  "number": "4",
  "title": "",
  "body": " , where        First we put DE in standard form for a first-order linear DE so we can identify  Thus, Then we find the integrating factor  Now we multiply both sides of the DE by the integrating factor. Now we recall the product rule for derivatives: We note that the two terms on the left hand side of equation (\\ref{eq2}) are the result of taking the derivative of the product. Hence we can undo the product rule as follows: Now we can integrate both sides of the equation and then solve for the dependent variable.   "
},
{
  "id": "main-6-3-7-3-3-4-5",
  "level": "2",
  "url": "main-6-3-7-3.html#main-6-3-7-3-3-4-5",
  "type": "Exercise",
  "number": "5",
  "title": "",
  "body": " where        First we put DE in standard form for a first-order linear DE so we can identify Notice that for this DE is the independent variable (i.e., it is like the ) and is the dependent variable (i.e., it is like the ). Hence the standard form we will aim for is and we want to identify  Thus, Then we find the integrating factor  Now we multiply both sides of the DE by the integrating factor. Now we recall the product rule for derivatives: We note that the two terms on the left hand side of equation (\\ref{eq3}) are the result of taking the derivative of the product. Hence we can undo the product rule as follows: Now we can integrate both sides of the equation and then solve for the dependent variable.   "
},
{
  "id": "main-6-3-7-3-3-4-6",
  "level": "2",
  "url": "main-6-3-7-3.html#main-6-3-7-3-3-4-6",
  "type": "Exercise",
  "number": "6",
  "title": "",
  "body": "        First we put DE in standard form for a first-order linear DE so we can identify ...EXCEPT for this DE, the roles of and are switched. Notice that here is the independent variable and is the dependent variable. So we will aim for the standard for and we want to identify  Thus, Then we find the integrating factor  Now we multiply both sides of the DE by the integrating factor. Now we recall the product rule for derivatives: We note that the two terms on the left hand side of equation (\\ref{eq4}) are the result of taking the derivative of the product. Hence we can undo the product rule as follows: Now we can integrate both sides of the equation and then solve for the dependent variable.   "
},
{
  "id": "main-6-3-7-3-3-5-3",
  "level": "2",
  "url": "main-6-3-7-3.html#main-6-3-7-3-3-5-3",
  "type": "Exercise",
  "number": "7",
  "title": "",
  "body": " where and        where and   "
},
{
  "id": "main-6-3-7-3-3-5-4",
  "level": "2",
  "url": "main-6-3-7-3.html#main-6-3-7-3-3-5-4",
  "type": "Exercise",
  "number": "8",
  "title": "",
  "body": "          "
},
{
  "id": "main-6-3-7-3-3-6",
  "level": "2",
  "url": "main-6-3-7-3.html#main-6-3-7-3-3-6",
  "type": "Exercise",
  "number": "9",
  "title": "",
  "body": " Multiple-Choice   What is the method used to solve the differential equation ?    Direct integration.  Correct! The equation is solved by integrating both sides with respect to .    Separation of variables.  Incorrect. Separation of variables is used when the variables can be separated, but here the equation is solved by direct integration.    Substitution.  Incorrect. Substitution is a different method. The correct method here is direct integration.    Partial fractions.  Incorrect. Partial fractions are used to simplify the integration process, but the primary method here is direct integration.   "
},
{
  "id": "main-7-2-2",
  "level": "1",
  "url": "main-7-2-2.html",
  "type": "Section",
  "number": "5.1",
  "title": "Exercises",
  "body": "Exercises    "
},
{
  "id": "main-7-3",
  "level": "1",
  "url": "main-7-3.html",
  "type": "Chapter",
  "number": "6",
  "title": "Undetermined Coefficients",
  "body": "Undetermined Coefficients         "
},
{
  "id": "main-7-4",
  "level": "1",
  "url": "main-7-4.html",
  "type": "Chapter",
  "number": "7",
  "title": "Variation of Parameters",
  "body": "Variation of Parameters     "
},
{
  "id": "main-7-5-2",
  "level": "1",
  "url": "main-7-5-2.html",
  "type": "Section",
  "number": "8.1",
  "title": "Forward Transforms",
  "body": "Forward Transforms        "
},
{
  "id": "main-7-5-3",
  "level": "1",
  "url": "main-7-5-3.html",
  "type": "Section",
  "number": "8.2",
  "title": "Backward Transforms",
  "body": "Backward Transforms      "
},
{
  "id": "main-7-5-4",
  "level": "1",
  "url": "main-7-5-4.html",
  "type": "Section",
  "number": "8.3",
  "title": "Solving Equations",
  "body": "Solving Equations       "
},
{
  "id": "main-7-5-5",
  "level": "1",
  "url": "main-7-5-5.html",
  "type": "Section",
  "number": "8.4",
  "title": "Piecewise Forcing Functions",
  "body": "Piecewise Forcing Functions        "
},
{
  "id": "main-8-1-2-2",
  "level": "1",
  "url": "main-8-1-2-2.html",
  "type": "Subsection",
  "number": "",
  "title": "Algebra",
  "body": "Algebra          "
},
{
  "id": "main-8-1-2-3",
  "level": "1",
  "url": "main-8-1-2-3.html",
  "type": "Subsection",
  "number": "",
  "title": "Calculus",
  "body": "Calculus   Product Rule  The next technique for solving DEs we will study relies heavily on you knowing the Product Rule for differentiation inside and out, forward and backward (literally!). These problems are intended to help you review the Product Rule. (Don't forget about the chain rule, too!) Let's warm up by practicing using the product rule.   Write down the product rule.   Evaluate the following derivatives.                                          Suppose is a function of and use the product rule to rewrite the following:            Suppose is a function of and use the product rule to rewrite the following:            Now let's look at the product rule \"in the other direction\"... Or we can think about this as \"un-doing\" the product rule.  For example, if we have the expression then we can see that if we think identify as then Then we might label the expression as follows: This now looks like the result of having taken the derivative of a product. That is:   Now you try some.  Rewrite each of the following as the derivative of a product:                             Integration by parts  Integration by parts may be a good choice when the integrand contains a product. Recall the formula for integration by parts.   Let's consider the following example.  Evaluate  We choose and as follows: Then we find by taking the derivative of and by taking the antiderivative of : Thus we have:    Now you try some.   Evaluate each of the following integrals. Use proper notation.      We choose and as follows: Then we find by taking the derivative of and by taking the antiderivative of : Thus we have:           We choose and as follows: Then we find by taking the derivative of and by taking the antiderivative of : Thus we have: The remaining integral, is simpler than the one we started with, but we will need to do another integration by parts in order to evaluate it. Here we choose Then we find by taking the derivative of and by taking the antiderivative of : Now we pick up where we left off:          Integration by parts is a technique for transforming integrals in a way that makes them easier to solve. A good way to think about it is like redistributing \"work\" between two functions. One function takes on the derivative, while the other gets simplified through integration.  Imagine you have two workers. One is skilled at hard, repetitive tasks (like differentiating), and the other is better at creative problem-solving (like integrating). Integration by parts is like swapping their roles so that the right person handles the right task.   Breaking Down the Integration by Parts Formula  Let's break down the formula for integration by parts: .  Here's how it works:   is a function that you choose to differentiate (it should get simpler when differentiated).  is a part of the integrand that you choose to integrate (it should get easier when integrated).  is the new term after applying the product of and the integral of .  is the remaining integral, now simpler than the original.     Example: Applying Integration by Parts  Consider the integral: .  We'll apply integration by parts, following these steps:    Step 1: Identify and . In this case, we choose and . This makes and .    Step 2: Substitute into the integration by parts formula:  .   Step 3: Solve the remaining integral:  .   Step 4: Combine the results:  .   And that's the final result: .    Laplace Transform and Integration by Parts: An Analogy  When applying the Laplace Transform, think of it as a way of \"unwrapping\" the derivatives of a function. Just like how you can redistribute \"work\" between functions using integration by parts, the Laplace Transform temporarily converts a differential equation into an algebraic one, allowing you to solve it more easily.  Once the problem is solved in the transformed space, we can \"repackage\" the function by applying the inverse Laplace Transform, revealing the solution in its original form.    "
},
{
  "id": "r-01-03-IBP_ex_01",
  "level": "2",
  "url": "main-8-1-2-3.html#r-01-03-IBP_ex_01",
  "type": "Example",
  "number": "25",
  "title": "Evaluate <span class=\"process-math\">\\(\\ds \\int t^3 \\ln t \\ dt \\)<\/span>.",
  "body": "Evaluate  We choose and as follows: Then we find by taking the derivative of and by taking the antiderivative of : Thus we have:   "
},
{
  "id": "r-01-03-6",
  "level": "2",
  "url": "main-8-1-2-3.html#r-01-03-6",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Evaluate each of the following integrals. Use proper notation. "
},
{
  "id": "main-8-1-3",
  "level": "1",
  "url": "main-8-1-3.html",
  "type": "Section",
  "number": "A.9.2",
  "title": "Additional Content",
  "body": "Additional Content       "
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
