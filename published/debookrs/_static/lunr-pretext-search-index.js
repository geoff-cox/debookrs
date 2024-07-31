var ptx_lunr_search_style = "textbook";
var ptx_lunr_docs = [
{
  "id": "main-3-3",
  "level": "1",
  "url": "main-3-3.html",
  "type": "Section",
  "number": "1.1",
  "title": "What’s a Differential Equation?",
  "body": "What's a Differential Equation?           "
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
  "id": "main-5-3",
  "level": "1",
  "url": "main-5-3.html",
  "type": "Section",
  "number": "3.1",
  "title": "Homogeneous",
  "body": "Homogeneous   "
},
{
  "id": "main-5-4",
  "level": "1",
  "url": "main-5-4.html",
  "type": "Section",
  "number": "3.2",
  "title": "Nonhomogeneous",
  "body": "Nonhomogeneous   "
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
  "id": "main-6-3-3",
  "level": "1",
  "url": "main-6-3-3.html",
  "type": "Subsection",
  "number": "4.1.1",
  "title": "Definition",
  "body": "Definition  This section heavily relies on understanding how to compute improper integrals. If you need to review this concept, please go here...  Give some statement leading to the definition....  Laplace Transform  The Laplace Transform of a function is given by given that the integral exists (i.e. the improper integral is finite).   There's a lot to unpack with this definition, but let's begin with a few examples illustrating the definition before diving into the details.As we work through the following examples, we will practice using the definition, as well as gathering facts about how the Laplace transform works. You will no doubt find the solutions to these examples a bit cumbersome We hope to draw some conclusions as we move forward that help us find the Laplace transform quickly without having to use the (admittedly somewhat cumbersome) definition every time.   Find the Laplace transform of the function .   By the above definition, we have At this point, we need to assume that in order to continue. If you are curious as to why, see this note for an explanation. Next, we integrate using the substitution .     Now let's focus on the remaining limit. It turns out that we have to put one more restriction on since the limit will change based on whether is positive or negative. Let's consider both cases.  Case 1: , If , then and so .   Case 2: . If , then and so .   In case 1 ( ), the improper integral is not finite, whereas in case 2 ( ), the integral is finite and is equal to .  In conclusion, we have found that , assuming .     Find the Laplace transform of .   We use the definition of Laplace transform to get us started. As before, we need restrict some values of in order for this improper integral to exist . In this case, we will need , in the exponent, to be non-zero and negative. That is, we need Hence, we move forward with the assumption that . Thus, the Laplace transform of is .     Find the Laplace transform of .   Let's use the definition of Laplace transform to get us going.    Hence, we have , under the condition that .    So far, we have seen three examples of how to find a Laplace transform of a given function, but we have not discussed why this idea is relevant to differential equations. In the next section, we will tie these two concepts together and illustrate how Laplace transform can be used to solve a differential equation.  Before moving forward, let's conclude this section by listing out a few important take-aways from the examples of this section.  In every example, we started with a function of and after computing the Laplace transform, we ended up with a function of a new variable . A common convention is to use upper case function names for the Laplace transform of a given lower case function. For example, In this book, we will often say \" is the Laplace transform of \". This naming convention might seem unimportant, but it will be very helpful when using these Laplace transforms to solve differential equations.  The notation often used for Laplace transform involved the symbol The curly braces that accompany are not optional; they are not just grouping symbols. We use them to indicate we are taking the Laplace transform of the function within the curly braces.  The integral has two variables, and , and we integrate with respect to . You may not have done anything like this before; all we need to do is treat like a constant.  The last couple of words in the definition say, \"given that the integral exists.\" We will end up putting restrictions on the variable that make sure that the integral exists.    Check your Understanding  True\/False  Interactive Question   No   Don't look in here!.    "
},
{
  "id": "main-6-3-3-2",
  "level": "2",
  "url": "main-6-3-3.html#main-6-3-3-2",
  "type": "Remark",
  "number": "4.2",
  "title": "",
  "body": "This section heavily relies on understanding how to compute improper integrals. If you need to review this concept, please go here... "
},
{
  "id": "main-6-3-3-4",
  "level": "2",
  "url": "main-6-3-3.html#main-6-3-3-4",
  "type": "Definition",
  "number": "4.3",
  "title": "Laplace Transform.",
  "body": "Laplace Transform  The Laplace Transform of a function is given by given that the integral exists (i.e. the improper integral is finite).  "
},
{
  "id": "ex_lt_defn_01",
  "level": "2",
  "url": "main-6-3-3.html#ex_lt_defn_01",
  "type": "Example",
  "number": "4.4",
  "title": "",
  "body": " Find the Laplace transform of the function .   By the above definition, we have At this point, we need to assume that in order to continue. If you are curious as to why, see this note for an explanation. Next, we integrate using the substitution .     Now let's focus on the remaining limit. It turns out that we have to put one more restriction on since the limit will change based on whether is positive or negative. Let's consider both cases.  Case 1: , If , then and so .   Case 2: . If , then and so .   In case 1 ( ), the improper integral is not finite, whereas in case 2 ( ), the integral is finite and is equal to .  In conclusion, we have found that , assuming .   "
},
{
  "id": "ex_lt_defn_02",
  "level": "2",
  "url": "main-6-3-3.html#ex_lt_defn_02",
  "type": "Example",
  "number": "4.5",
  "title": "",
  "body": " Find the Laplace transform of .   We use the definition of Laplace transform to get us started. As before, we need restrict some values of in order for this improper integral to exist . In this case, we will need , in the exponent, to be non-zero and negative. That is, we need Hence, we move forward with the assumption that . Thus, the Laplace transform of is .   "
},
{
  "id": "ex_lt_defn_03",
  "level": "2",
  "url": "main-6-3-3.html#ex_lt_defn_03",
  "type": "Example",
  "number": "4.6",
  "title": "",
  "body": " Find the Laplace transform of .   Let's use the definition of Laplace transform to get us going.    Hence, we have , under the condition that .   "
},
{
  "id": "main-6-3-3-11-2",
  "level": "2",
  "url": "main-6-3-3.html#main-6-3-3-11-2",
  "type": "Reading Question",
  "number": "4.1.1.1",
  "title": "True\/False.",
  "body": "True\/False  Interactive Question   No   Don't look in here!.  "
},
{
  "id": "main-6-3-4",
  "level": "1",
  "url": "main-6-3-4.html",
  "type": "Subsection",
  "number": "4.1.2",
  "title": "Properties",
  "body": "Properties   Let's build on what we did in the previous section.  Find a Laplace transform of the sum of functions  Find the Laplace transform of the function    Hopefully those functions look familiar from the previous section. In fact, we can write that   Given that can be written in terms of the functions , and that we examined in the previous section, we might like to take advantage of the results we found. We will, but let's use the definition of the Laplace transform to see exactly how we might incorporate those previous results.   Now we can use properties of integration to rewrite this expression. Recall that we can split the integral up over addition and\/or subtraction and we can pull out coefficients if we like.   The first integral was the integral we evaluated in Example 1 of the previous section; similar with the other two integrals. We can actually write this as:   We need to deal with those conditions on . If we need to make sure that  and that , it's sufficient to say that (because this guarantees that also). So we actually have     We found the desired answer, but now is a good time to step back and see that we just showed something very interesting and useful. We can actually rewrite that last result as the equation below.   It turns out (unsurprisingly) that the Laplace transform has the same properties that integrals do: we can separate over addition and subtraction, and we can pull out coefficients. This is summarized in a single property that is often referred to is the linearity of the Laplace transform.   Property : The Laplace transform is a linear transform. This means that if and are constants, and and are functions that have Laplace transforms and , respectively, then or, equivalently,     We can use this property to actually pull more information out of the results we found in the previous section. In particular, we showed that Since 15 is a constant, we can use the linearity property as follows. Now, if we divide both sides by 15 we have   Similarly, we showed that , and we can use the linearity property to show that Assuming , and using both integration by parts (IBP) and L'Hospital's Rule (LH), we can prove the following.    Show the details.     Show the details.     Show the details.   We organize these in a table.   Based on this, can you identify a pattern? It seems that we may have identified another property.   Property : The Laplace transform of , for , is given by     While we are gleaning information from previous examples, let's recall , from the previous section. There, we showed that What do you suppose is the Laplace transform of the function ? We can surmise another property that shows us how to take Laplace transforms of exponential functions.   Property: The Laplace transform of is given by     We can continue to use the definition to determine the Laplace transform   Check your Understanding  True\/False  Interactive Question   No   Don't look in here!.    "
},
{
  "id": "main-6-3-4-2-2",
  "level": "2",
  "url": "main-6-3-4.html#main-6-3-4-2-2",
  "type": "Example",
  "number": "4.7",
  "title": "Find a Laplace transform of the sum of functions.",
  "body": "Find a Laplace transform of the sum of functions  Find the Laplace transform of the function    Hopefully those functions look familiar from the previous section. In fact, we can write that   Given that can be written in terms of the functions , and that we examined in the previous section, we might like to take advantage of the results we found. We will, but let's use the definition of the Laplace transform to see exactly how we might incorporate those previous results.   Now we can use properties of integration to rewrite this expression. Recall that we can split the integral up over addition and\/or subtraction and we can pull out coefficients if we like.   The first integral was the integral we evaluated in Example 1 of the previous section; similar with the other two integrals. We can actually write this as:   We need to deal with those conditions on . If we need to make sure that  and that , it's sufficient to say that (because this guarantees that also). So we actually have    "
},
{
  "id": "main-6-3-4-2-4",
  "level": "2",
  "url": "main-6-3-4.html#main-6-3-4-2-4",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "linearity Property "
},
{
  "id": "main-6-3-4-2-7",
  "level": "2",
  "url": "main-6-3-4.html#main-6-3-4-2-7",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Property "
},
{
  "id": "main-6-3-4-2-8",
  "level": "2",
  "url": "main-6-3-4.html#main-6-3-4-2-8",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Property: "
},
{
  "id": "main-6-3-4-3-2",
  "level": "2",
  "url": "main-6-3-4.html#main-6-3-4-3-2",
  "type": "Reading Question",
  "number": "4.1.2.1",
  "title": "True\/False.",
  "body": "True\/False  Interactive Question   No   Don't look in here!.  "
},
{
  "id": "main-6-3-5",
  "level": "1",
  "url": "main-6-3-5.html",
  "type": "Subsection",
  "number": "4.1.3",
  "title": "Summary &amp; Exercises",
  "body": "Summary & Exercises    Summary of the Key Ideas    Method         "
},
{
  "id": "main-6-3-5-2-1",
  "level": "2",
  "url": "main-6-3-5.html#main-6-3-5-2-1",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": " Method  "
},
{
  "id": "main-6-3-6",
  "level": "1",
  "url": "main-6-3-6.html",
  "type": "Subsection",
  "number": "4.1.4",
  "title": "Orphaned Content",
  "body": "Orphaned Content   This is just a place to put content that was written and may or not be used.   Additional Examples   Additional Practice   "
},
{
  "id": "main-6-4-3",
  "level": "1",
  "url": "main-6-4-3.html",
  "type": "Subsection",
  "number": "4.2.1",
  "title": "The Big Picture",
  "body": "The Big Picture  The Laplace transform solution technique is less direct than other solution techniques. We typically start with a DE in terms of an independent variable . Let's assume the dependent variable is for now, so our goal is to solve for an unknown function in terms of the independent variable . We take the Laplace transform of the DE, and the result is an algebraic equation in terms of the variable and a function . We then solve for using algebra. Finally, we get our desired solution by taking the inverse Laplace transform, as shown in figure (Figure number).                                     Before we solve any DEs with this new solution technique, we need to practice the pieces of the solution technique. Thus, we dedicate the next couple of sections on learning what the Laplace transform is, how to find the Laplace transform of a function, and how to take the inverse Laplace transform of a function. Then we will finally be solve DEs using this new solution technique.  Check your Understanding  True\/False  Interactive Question   No   Don't look in here!.    "
},
{
  "id": "LT-Diagram",
  "level": "2",
  "url": "main-6-4-3.html#LT-Diagram",
  "type": "Table",
  "number": "4.8",
  "title": "",
  "body": "                               "
},
{
  "id": "main-6-4-3-5-2",
  "level": "2",
  "url": "main-6-4-3.html#main-6-4-3-5-2",
  "type": "Reading Question",
  "number": "4.2.1.1",
  "title": "True\/False.",
  "body": "True\/False  Interactive Question   No   Don't look in here!.  "
},
{
  "id": "main-6-4-4",
  "level": "1",
  "url": "main-6-4-4.html",
  "type": "Subsection",
  "number": "4.2.2",
  "title": "Forward",
  "body": "Forward   We can continue to use the definition to determine the Laplace transform, we notice more and more patterns. We summarize some common properties in the table below.    (Initial) Table of Laplace Transforms                                                  Remove L12, narrow L13, make L9 a property box, move n=1,2,3,... to right column.    This table can be enormously helpful to us as we take Laplace transforms; we save lots of time and effort by using this established table of properties instead of using the (admittedly laborious) definition of Laplace transform. Let's practice this now.    Find the Laplace transform of the function    We will use properties in the table as follows.      Find    We will use properties in the table as follows.      Find the Laplace transform of the function    Before we begin, we note that it's very tempting to think that because we know the Laplace transforms of both and we can simply multiply those together to get the desired Laplace transform. However, this is not the case, just as similar statements were not true for finding the derivatives and integrals of the products of functions. Rather, we will need to use property , with and    We need to know what is before we can proceed. Let's go back to the naming system we have instituted. If we have a capital that is the Laplace transform of a function lower case We identified that function previously: We use to find its Laplace transform. Then we continue finding by taking two derivatives (using the quotient rule for derivatives; details are omitted here).     Check your Understanding   Match each differential equation below,                 with one of the following classifications:  nonlinear w\/ constant coefficients  nonlinear w\/ non-constant coefficients  linear, homogeneous w\/ constant coefficients  linear, homogeneous w\/ non-constant coefficients  linear, non-homogeneous w\/ constant coefficients  linear, non-homogeneous w\/ non-constant coefficients     A Solution?     Compute .   Using the product rule, we have      "
},
{
  "id": "lt_table_L1-L13",
  "level": "2",
  "url": "main-6-4-4.html#lt_table_L1-L13",
  "type": "Table",
  "number": "4.9",
  "title": "<em class=\"emphasis\">(Initial) Table of Laplace Transforms<\/em>",
  "body": " (Initial) Table of Laplace Transforms                                                 "
},
{
  "id": "ex_lt_using_table_01",
  "level": "2",
  "url": "main-6-4-4.html#ex_lt_using_table_01",
  "type": "Example",
  "number": "4.10",
  "title": "",
  "body": " Find the Laplace transform of the function    We will use properties in the table as follows.    "
},
{
  "id": "ex_lt_using_table_02",
  "level": "2",
  "url": "main-6-4-4.html#ex_lt_using_table_02",
  "type": "Example",
  "number": "4.11",
  "title": "",
  "body": " Find    We will use properties in the table as follows.    "
},
{
  "id": "ex_lt_using_table_03",
  "level": "2",
  "url": "main-6-4-4.html#ex_lt_using_table_03",
  "type": "Example",
  "number": "4.12",
  "title": "",
  "body": " Find the Laplace transform of the function    Before we begin, we note that it's very tempting to think that because we know the Laplace transforms of both and we can simply multiply those together to get the desired Laplace transform. However, this is not the case, just as similar statements were not true for finding the derivatives and integrals of the products of functions. Rather, we will need to use property , with and    We need to know what is before we can proceed. Let's go back to the naming system we have instituted. If we have a capital that is the Laplace transform of a function lower case We identified that function previously: We use to find its Laplace transform. Then we continue finding by taking two derivatives (using the quotient rule for derivatives; details are omitted here).    "
},
{
  "id": "main-6-4-4-6-2",
  "level": "2",
  "url": "main-6-4-4.html#main-6-4-4-6-2",
  "type": "Example",
  "number": "4.13",
  "title": "",
  "body": " Match each differential equation below,                 with one of the following classifications:  nonlinear w\/ constant coefficients  nonlinear w\/ non-constant coefficients  linear, homogeneous w\/ constant coefficients  linear, homogeneous w\/ non-constant coefficients  linear, non-homogeneous w\/ constant coefficients  linear, non-homogeneous w\/ non-constant coefficients     A Solution?   "
},
{
  "id": "main-6-4-4-6-3",
  "level": "2",
  "url": "main-6-4-4.html#main-6-4-4-6-3",
  "type": "Example",
  "number": "4.14",
  "title": "",
  "body": " Compute .   Using the product rule, we have    "
},
{
  "id": "r-01-15",
  "level": "1",
  "url": "r-01-15.html",
  "type": "Subsection",
  "number": "4.2.3",
  "title": "Matching Forms, Part 1",
  "body": "Matching Forms, Part 1   Let's review the Laplace transform diagram to remember how we will leverage Laplace transforms to solve differential equations.  The one last piece we need in order to solve DEs is to be able to take inverse Laplace transforms. We will focus on that piece now, and in the next section we will put all of our new skills together to solve DEs using Laplace transforms.  When we take the inverse Laplace transform, we begin with a function of , say , and what we seek is a function of such that if we took the Laplace transform of , we would get . That is, we seek to un-do the the Laplace transform. The notation looks similar:   and, as with the forward Laplace transform, the curly braces are not optional. Like the forward Laplace transform, the inverse Laplace transform is also a linear transform.  In order to take inverse Laplace transforms, we will rely on the table we have been using.    Find the inverse Laplace transform of    We look in the right column of the table and determine which of the forms the given function most closely matches. In this case, the form is like , so we can find the inverse Laplace transform as follows: Thus, we have shown that     In the previous example, the function matched with one of the properties in the table exactly. This is rare, and we need to develop strategies for when the function is not an exact match.   Find the inverse Laplace transform of    When we look in the right column of the table, this one seems to line up best with ...but it's not a perfect match. If we were going to use , then would have to be 3 (because this gives us the that we have). We would have perfectly if we the numerator was but our numerator is 17. Luckily, we can use the linearity property to help. Since the 17 is not helpful to us, we can factor it out.   We have the 17 out of the way, so we are halfway done. Now we need to (carefully) get a 6 in that numerator. We will again lean on linearity, but we will also use a little trick mathematicians use from time to time: multiplying by 1. It's always safe to multiply any expression by 1 because multiplying by 1 doesn't change the value of an expression. The form of 1 that will be useful here is the form as below. Thus, we have shown that      Find    Our first goal is to identify which property in the table is going to be the closest match to the expression we are given. If we look in the right hand column of the Laplace transform table, the right choice seems to be either or . The distinguishing factor between the two is whether or not we have an in the numerator. In this case, we do not, so we aim to drive toward .  Note that we don't have a perfect match with that property, so we will have to do a little manipulation, as we did in the previous example, to get our function to match up perfectly. In order for us to do that manipulation, we do need to have in mind what exactly we are aiming for. That is, do we want to make our expression like with or with ? If we think about the kind of manipulation we did in the previous example, where we multiplied by a form of 1, we might guess that it's easier to manipulate the constant in the numerator. (If we manipulate constants in the denominator, we need to worry about two terms).  If we agree that we would like to match with then we proceed using linearity in much the same way we did the previous example.      Find the inverse Laplace transform of .   We aim to make this function match , as follows.     (Include level 1 exercises here)  We have shown how you can manipulate functions of to match properties in the Laplace transform table by taking advantage of the linearity of the Laplace transform. However, there are other algebraic manipulations you can (and sometimes must!) do, so we look at more examples here.   Find the inverse Laplace transform of .   As a general guideline, you are advised to consider the denominator when determining trying to determine which property or properties in the Laplace transform table might be appropriate. In this case, we have a second-degree polynomial in the denominator. None of the properties in the table looks exactly the same, but and do have second-degree polynomials in the denominator. We just need to make our expression look like the form of those denominators, This entails completing the square.  Margin note: if you need to review completing the square, look HERE.      Margin note: Notice that the sign on the 4 is positive. If the sign had been negative, this would not be a perfect match with the table and we'd have to use a different strategy. See Example (insert number here).   Now that we have changed the way looks, we see that it is a perfect match with , with and Thus, we can take its inverse Laplace transform.      Find the inverse Laplace transform of .   As in the previous example, we have a second-degree polynomial in the denominator, so we might try to make this expression match and\/or in the table. We begin by completing the square.   Now we have the denominator in a format so that it matches with or , but unlike the previous example, the numerator is not an exact match with either or . We note that the numerator does have an in it, so we will start by aiming to see if we can make it a match with . If we did have a perfect match with , then we would have in the numerator. Let's focus on the numerator for a moment and consider the following.   In order to make the expressions equal, what value would the have? If we distribute the three, we would have and thus it's clear that should be equal to . Let's use this to rewrite as follows.   The advantage to writing this way is that the first fraction is now a perfect match for . We need to find a perfect match for that second fraction. It looks close to , but not perfect. In order to be a perfect match for , we would need a 3 in the numerator. Luckily, we can multiply by one (in the form of in order to get a 3 in the numerator, as follows.   Now that we have done some algebraic manipulation, we are now ready to take the inverse Laplace transform.      Find    We complete the square in the denominator in the function   This does not immediately appear to match or , but we can actually write the denominator as and proceed as in the previous examples, working toward matching and .      Find    As in the previous examples, the denominator is a second-degree polynomial; therefore it is sensible for us to begin by completing the square in the denominator as we did in the previous two examples.   Take a careful look at the denominator here. It's really close to matching or , but it is not a match because of the negative sign in front of the We need to change course when this happens. Another algebraic manipulation that we might consider is a partial fraction decomposition.   Margin note: If you need to review partial fraction decomposition, go HERE.    We revert to the original expression, but this time, instead of completing the square, we factor the denominator.   Since each of the factors in the denominator is a distinct linear factor, we know that the form of the partial fraction decomposition is   Our next goal is to determine the coefficients and in this equations. There are multiple ways to achieve this and we demonstrate just one here. We multiply both sides of the equation by the least common denominator, , and then expand and collect like terms, as shown.   At this point, we have a polynomial on the left hand side and a polynomial on the right hand side. The only way these can be equal to each other is if the corresponding coefficients are equal. That is, the coefficient on on the left hand side is 1, while the coefficient on on the right hand side of the equation is . Since the polynomials are equal, we know that these are equal. That is, Similarly, if we equate the constants, we have Thus, we have the following system of two linear equations in terms of two unknown variables, and .   There are many ways to solve such an equation, and you are encouraged to choose the solution technique you like the most. Here we will solve the first equation for , and then substitute into the second equation, hence we have   Remember that our goal is to take the inverse Laplace transform. Our algebraic manipulation was helpful because we took a more complex expression and rewrote it as two simpler fractions. We can now use to find the inverse Laplace transform as follows.     In summary, when we want to take the inverse Laplace transform of a rational function with a second-degree polynomial in the denominator, we may complete the square or we may do a partial fraction decomposition. How will we know which is appropriate? Here are a few guidelines for you to consider.  Does the denominator factor in an obvious way? If so, factor the denominator and do a partial fraction decomposition if necessary.  If the denominator does not factor in an obvious way, try completing the square.  If you end up with addition outside of the parentheses, as in then you should aim to match and\/or .  If instead you end up with subtraction outside the parentheses, as in then you should factor and do a partial fraction decomposition. You may consider using the quadratic formula if the factorization is not obvious to you.  If you end up with no terms outside the parentheses, as in then use .    If you have a rational function where the denominator is of higher degree, then partial fraction decomposition should be used to break the single fraction into several simpler fractions.   Find the inverse Laplace transform of    Note that as the quadratic term in the denominator does not factor, the denominator contains an irreducible quadratic factor and a repeated linear factor. We'll proceed by simplifying this complicated fraction with a Partial Fraction Decomposition of the form   You may also consider using technology to find a partial fraction decomposition. You should get  Click here for the details.   With the partial fraction decomposition in hand, we are prepared to take the inverse Laplace transform, using the same types of algebraic manipulations demonstrated in the previous examples.      Let's review the Laplace transform diagram to remember how we will leverage Laplace transforms to solve differential equations.  The one last piece we need in order to solve DEs is to be able to take inverse Laplace transforms. We will focus on that piece now, and in the next section we will put all of our new skills together to solve DEs using Laplace transforms.  When we take the inverse Laplace transform, we begin with a function of , say , and what we seek is a function of such that if we took the Laplace transform of , we would get . That is, we seek to un-do the the Laplace transform. The notation looks similar:   and, as with the forward Laplace transform, the curly braces are not optional. Like the forward Laplace transform, the inverse Laplace transform is also a linear transform.  In order to take inverse Laplace transforms, we will rely on the table we have been using.    Find the inverse Laplace transform of    We look in the right column of the table and determine which of the forms the given function most closely matches. In this case, the form is like , so we can find the inverse Laplace transform as follows: Thus, we have shown that     In the previous example, the function matched with one of the properties in the table exactly. This is rare, and we need to develop strategies for when the function is not an exact match.   Find the inverse Laplace transform of    When we look in the right column of the table, this one seems to line up best with ...but it's not a perfect match. If we were going to use , then would have to be 3 (because this gives us the that we have). We would have perfectly if we the numerator was but our numerator is 17. Luckily, we can use the linearity property to help. Since the 17 is not helpful to us, we can factor it out.   We have the 17 out of the way, so we are halfway done. Now we need to (carefully) get a 6 in that numerator. We will again lean on linearity, but we will also use a little trick mathematicians use from time to time: multiplying by 1. It's always safe to multiply any expression by 1 because multiplying by 1 doesn't change the value of an expression. The form of 1 that will be useful here is the form as below. Thus, we have shown that      Find    Our first goal is to identify which property in the table is going to be the closest match to the expression we are given. If we look in the right hand column of the Laplace transform table, the right choice seems to be either or . The distinguishing factor between the two is whether or not we have an in the numerator. In this case, we do not, so we aim to drive toward .  Note that we don't have a perfect match with that property, so we will have to do a little manipulation, as we did in the previous example, to get our function to match up perfectly. In order for us to do that manipulation, we do need to have in mind what exactly we are aiming for. That is, do we want to make our expression like with or with ? If we think about the kind of manipulation we did in the previous example, where we multiplied by a form of 1, we might guess that it's easier to manipulate the constant in the numerator. (If we manipulate constants in the denominator, we need to worry about two terms).  If we agree that we would like to match with then we proceed using linearity in much the same way we did the previous example.      Find the inverse Laplace transform of .   We aim to make this function match , as follows.     (Include level 1 exercises here)  We have shown how you can manipulate functions of to match properties in the Laplace transform table by taking advantage of the linearity of the Laplace transform. However, there are other algebraic manipulations you can (and sometimes must!) do, so we look at more examples here.   Find the inverse Laplace transform of .   As a general guideline, you are advised to consider the denominator when determining trying to determine which property or properties in the Laplace transform table might be appropriate. In this case, we have a second-degree polynomial in the denominator. None of the properties in the table looks exactly the same, but and do have second-degree polynomials in the denominator. We just need to make our expression look like the form of those denominators, This entails completing the square.  Margin note: if you need to review completing the square, look HERE.      Margin note: Notice that the sign on the 4 is positive. If the sign had been negative, this would not be a perfect match with the table and we'd have to use a different strategy. See Example (insert number here).   Now that we have changed the way looks, we see that it is a perfect match with , with and Thus, we can take its inverse Laplace transform.      Find the inverse Laplace transform of .   As in the previous example, we have a second-degree polynomial in the denominator, so we might try to make this expression match and\/or in the table. We begin by completing the square.   Now we have the denominator in a format so that it matches with or , but unlike the previous example, the numerator is not an exact match with either or . We note that the numerator does have an in it, so we will start by aiming to see if we can make it a match with . If we did have a perfect match with , then we would have in the numerator. Let's focus on the numerator for a moment and consider the following.   In order to make the expressions equal, what value would the have? If we distribute the three, we would have and thus it's clear that should be equal to . Let's use this to rewrite as follows.   The advantage to writing this way is that the first fraction is now a perfect match for . We need to find a perfect match for that second fraction. It looks close to , but not perfect. In order to be a perfect match for , we would need a 3 in the numerator. Luckily, we can multiply by one (in the form of in order to get a 3 in the numerator, as follows.   Now that we have done some algebraic manipulation, we are now ready to take the inverse Laplace transform.      Find    We complete the square in the denominator in the function   This does not immediately appear to match or , but we can actually write the denominator as and proceed as in the previous examples, working toward matching and .      Find    As in the previous examples, the denominator is a second-degree polynomial; therefore it is sensible for us to begin by completing the square in the denominator as we did in the previous two examples.   Take a careful look at the denominator here. It's really close to matching or , but it is not a match because of the negative sign in front of the We need to change course when this happens. Another algebraic manipulation that we might consider is a partial fraction decomposition.   Margin note: If you need to review partial fraction decomposition, go HERE.    We revert to the original expression, but this time, instead of completing the square, we factor the denominator.   Since each of the factors in the denominator is a distinct linear factor, we know that the form of the partial fraction decomposition is   Our next goal is to determine the coefficients and in this equations. There are multiple ways to achieve this and we demonstrate just one here. We multiply both sides of the equation by the least common denominator, , and then expand and collect like terms, as shown.   At this point, we have a polynomial on the left hand side and a polynomial on the right hand side. The only way these can be equal to each other is if the corresponding coefficients are equal. That is, the coefficient on on the left hand side is 1, while the coefficient on on the right hand side of the equation is . Since the polynomials are equal, we know that these are equal. That is, Similarly, if we equate the constants, we have Thus, we have the following system of two linear equations in terms of two unknown variables, and .   There are many ways to solve such an equation, and you are encouraged to choose the solution technique you like the most. Here we will solve the first equation for , and then substitute into the second equation, hence we have   Remember that our goal is to take the inverse Laplace transform. Our algebraic manipulation was helpful because we took a more complex expression and rewrote it as two simpler fractions. We can now use to find the inverse Laplace transform as follows.     In summary, when we want to take the inverse Laplace transform of a rational function with a second-degree polynomial in the denominator, we may complete the square or we may do a partial fraction decomposition. How will we know which is appropriate? Here are a few guidelines for you to consider.  Does the denominator factor in an obvious way? If so, factor the denominator and do a partial fraction decomposition if necessary.  If the denominator does not factor in an obvious way, try completing the square.  If you end up with addition outside of the parentheses, as in then you should aim to match and\/or .  If instead you end up with subtraction outside the parentheses, as in then you should factor and do a partial fraction decomposition. You may consider using the quadratic formula if the factorization is not obvious to you.  If you end up with no terms outside the parentheses, as in then use .    If you have a rational function where the denominator is of higher degree, then partial fraction decomposition should be used to break the single fraction into several simpler fractions.   Find the inverse Laplace transform of    Note that as the quadratic term in the denominator does not factor, the denominator contains an irreducible quadratic factor and a repeated linear factor. We'll proceed by simplifying this complicated fraction with a Partial Fraction Decomposition of the form   You may also consider using technology to find a partial fraction decomposition. You should get  Click here for the details.   With the partial fraction decomposition in hand, we are prepared to take the inverse Laplace transform, using the same types of algebraic manipulations demonstrated in the previous examples.     When we study Laplace Transforms, we will frequently want to manipulate an algebraic expression to make it match a given form.  If you prefer to see a video of this example, click here   Suppose we have the expression and we think it looks much like the form It's not a perfect match, though. Based on the denominator, we might guess   Notice that this would make the denominator a perfect match, However, the numerator still isn't quite right. It would be correct if we would multiply the numerator by 5. But if we multiply the numerator by 5, we would change the expression. In order to NOT change the expression, we will instead multiply by as follows: Notice that when we multiply by , we are just multiplying by one, so we don't change the value of the expression.  Maybe write now you're wondering what the point is. Being able to use appropriate algebra to \"match\" forms is really important when we work with Laplace Transforms. Since it's really just algebra, now is a great time to practice that skill--so when we are in the middle of studying Laplace Transforms, you can just focus on the \"new\" stuff.   Manipulate each of the following expressions into the form                                  Manipulate each of the following expressions into the form                         Manipulate each of the following expressions into the form                                   Check your Understanding   Compute .   Using the product rule, we have      "
},
{
  "id": "r-01-15-3",
  "level": "2",
  "url": "r-01-15.html#r-01-15-3",
  "type": "Example",
  "number": "4.15",
  "title": "",
  "body": " Find the inverse Laplace transform of    We look in the right column of the table and determine which of the forms the given function most closely matches. In this case, the form is like , so we can find the inverse Laplace transform as follows: Thus, we have shown that    "
},
{
  "id": "r-01-15-5",
  "level": "2",
  "url": "r-01-15.html#r-01-15-5",
  "type": "Example",
  "number": "4.16",
  "title": "",
  "body": " Find the inverse Laplace transform of    When we look in the right column of the table, this one seems to line up best with ...but it's not a perfect match. If we were going to use , then would have to be 3 (because this gives us the that we have). We would have perfectly if we the numerator was but our numerator is 17. Luckily, we can use the linearity property to help. Since the 17 is not helpful to us, we can factor it out.   We have the 17 out of the way, so we are halfway done. Now we need to (carefully) get a 6 in that numerator. We will again lean on linearity, but we will also use a little trick mathematicians use from time to time: multiplying by 1. It's always safe to multiply any expression by 1 because multiplying by 1 doesn't change the value of an expression. The form of 1 that will be useful here is the form as below. Thus, we have shown that    "
},
{
  "id": "r-01-15-6",
  "level": "2",
  "url": "r-01-15.html#r-01-15-6",
  "type": "Example",
  "number": "4.17",
  "title": "",
  "body": " Find    Our first goal is to identify which property in the table is going to be the closest match to the expression we are given. If we look in the right hand column of the Laplace transform table, the right choice seems to be either or . The distinguishing factor between the two is whether or not we have an in the numerator. In this case, we do not, so we aim to drive toward .  Note that we don't have a perfect match with that property, so we will have to do a little manipulation, as we did in the previous example, to get our function to match up perfectly. In order for us to do that manipulation, we do need to have in mind what exactly we are aiming for. That is, do we want to make our expression like with or with ? If we think about the kind of manipulation we did in the previous example, where we multiplied by a form of 1, we might guess that it's easier to manipulate the constant in the numerator. (If we manipulate constants in the denominator, we need to worry about two terms).  If we agree that we would like to match with then we proceed using linearity in much the same way we did the previous example.    "
},
{
  "id": "r-01-15-7",
  "level": "2",
  "url": "r-01-15.html#r-01-15-7",
  "type": "Example",
  "number": "4.18",
  "title": "",
  "body": " Find the inverse Laplace transform of .   We aim to make this function match , as follows.    "
},
{
  "id": "r-01-15-10",
  "level": "2",
  "url": "r-01-15.html#r-01-15-10",
  "type": "Example",
  "number": "4.19",
  "title": "",
  "body": " Find the inverse Laplace transform of .   As a general guideline, you are advised to consider the denominator when determining trying to determine which property or properties in the Laplace transform table might be appropriate. In this case, we have a second-degree polynomial in the denominator. None of the properties in the table looks exactly the same, but and do have second-degree polynomials in the denominator. We just need to make our expression look like the form of those denominators, This entails completing the square.  Margin note: if you need to review completing the square, look HERE.      Margin note: Notice that the sign on the 4 is positive. If the sign had been negative, this would not be a perfect match with the table and we'd have to use a different strategy. See Example (insert number here).   Now that we have changed the way looks, we see that it is a perfect match with , with and Thus, we can take its inverse Laplace transform.    "
},
{
  "id": "r-01-15-11",
  "level": "2",
  "url": "r-01-15.html#r-01-15-11",
  "type": "Example",
  "number": "4.20",
  "title": "",
  "body": " Find the inverse Laplace transform of .   As in the previous example, we have a second-degree polynomial in the denominator, so we might try to make this expression match and\/or in the table. We begin by completing the square.   Now we have the denominator in a format so that it matches with or , but unlike the previous example, the numerator is not an exact match with either or . We note that the numerator does have an in it, so we will start by aiming to see if we can make it a match with . If we did have a perfect match with , then we would have in the numerator. Let's focus on the numerator for a moment and consider the following.   In order to make the expressions equal, what value would the have? If we distribute the three, we would have and thus it's clear that should be equal to . Let's use this to rewrite as follows.   The advantage to writing this way is that the first fraction is now a perfect match for . We need to find a perfect match for that second fraction. It looks close to , but not perfect. In order to be a perfect match for , we would need a 3 in the numerator. Luckily, we can multiply by one (in the form of in order to get a 3 in the numerator, as follows.   Now that we have done some algebraic manipulation, we are now ready to take the inverse Laplace transform.    "
},
{
  "id": "r-01-15-12",
  "level": "2",
  "url": "r-01-15.html#r-01-15-12",
  "type": "Example",
  "number": "4.21",
  "title": "",
  "body": " Find    We complete the square in the denominator in the function   This does not immediately appear to match or , but we can actually write the denominator as and proceed as in the previous examples, working toward matching and .    "
},
{
  "id": "r-01-15-13",
  "level": "2",
  "url": "r-01-15.html#r-01-15-13",
  "type": "Example",
  "number": "4.22",
  "title": "",
  "body": " Find    As in the previous examples, the denominator is a second-degree polynomial; therefore it is sensible for us to begin by completing the square in the denominator as we did in the previous two examples.   Take a careful look at the denominator here. It's really close to matching or , but it is not a match because of the negative sign in front of the We need to change course when this happens. Another algebraic manipulation that we might consider is a partial fraction decomposition.   Margin note: If you need to review partial fraction decomposition, go HERE.    We revert to the original expression, but this time, instead of completing the square, we factor the denominator.   Since each of the factors in the denominator is a distinct linear factor, we know that the form of the partial fraction decomposition is   Our next goal is to determine the coefficients and in this equations. There are multiple ways to achieve this and we demonstrate just one here. We multiply both sides of the equation by the least common denominator, , and then expand and collect like terms, as shown.   At this point, we have a polynomial on the left hand side and a polynomial on the right hand side. The only way these can be equal to each other is if the corresponding coefficients are equal. That is, the coefficient on on the left hand side is 1, while the coefficient on on the right hand side of the equation is . Since the polynomials are equal, we know that these are equal. That is, Similarly, if we equate the constants, we have Thus, we have the following system of two linear equations in terms of two unknown variables, and .   There are many ways to solve such an equation, and you are encouraged to choose the solution technique you like the most. Here we will solve the first equation for , and then substitute into the second equation, hence we have   Remember that our goal is to take the inverse Laplace transform. Our algebraic manipulation was helpful because we took a more complex expression and rewrote it as two simpler fractions. We can now use to find the inverse Laplace transform as follows.    "
},
{
  "id": "r-01-15-16",
  "level": "2",
  "url": "r-01-15.html#r-01-15-16",
  "type": "Example",
  "number": "4.23",
  "title": "",
  "body": " Find the inverse Laplace transform of    Note that as the quadratic term in the denominator does not factor, the denominator contains an irreducible quadratic factor and a repeated linear factor. We'll proceed by simplifying this complicated fraction with a Partial Fraction Decomposition of the form   You may also consider using technology to find a partial fraction decomposition. You should get  Click here for the details.   With the partial fraction decomposition in hand, we are prepared to take the inverse Laplace transform, using the same types of algebraic manipulations demonstrated in the previous examples.    "
},
{
  "id": "r-01-15-18",
  "level": "2",
  "url": "r-01-15.html#r-01-15-18",
  "type": "Example",
  "number": "4.24",
  "title": "",
  "body": " Find the inverse Laplace transform of    We look in the right column of the table and determine which of the forms the given function most closely matches. In this case, the form is like , so we can find the inverse Laplace transform as follows: Thus, we have shown that    "
},
{
  "id": "r-01-15-20",
  "level": "2",
  "url": "r-01-15.html#r-01-15-20",
  "type": "Example",
  "number": "4.25",
  "title": "",
  "body": " Find the inverse Laplace transform of    When we look in the right column of the table, this one seems to line up best with ...but it's not a perfect match. If we were going to use , then would have to be 3 (because this gives us the that we have). We would have perfectly if we the numerator was but our numerator is 17. Luckily, we can use the linearity property to help. Since the 17 is not helpful to us, we can factor it out.   We have the 17 out of the way, so we are halfway done. Now we need to (carefully) get a 6 in that numerator. We will again lean on linearity, but we will also use a little trick mathematicians use from time to time: multiplying by 1. It's always safe to multiply any expression by 1 because multiplying by 1 doesn't change the value of an expression. The form of 1 that will be useful here is the form as below. Thus, we have shown that    "
},
{
  "id": "r-01-15-21",
  "level": "2",
  "url": "r-01-15.html#r-01-15-21",
  "type": "Example",
  "number": "4.26",
  "title": "",
  "body": " Find    Our first goal is to identify which property in the table is going to be the closest match to the expression we are given. If we look in the right hand column of the Laplace transform table, the right choice seems to be either or . The distinguishing factor between the two is whether or not we have an in the numerator. In this case, we do not, so we aim to drive toward .  Note that we don't have a perfect match with that property, so we will have to do a little manipulation, as we did in the previous example, to get our function to match up perfectly. In order for us to do that manipulation, we do need to have in mind what exactly we are aiming for. That is, do we want to make our expression like with or with ? If we think about the kind of manipulation we did in the previous example, where we multiplied by a form of 1, we might guess that it's easier to manipulate the constant in the numerator. (If we manipulate constants in the denominator, we need to worry about two terms).  If we agree that we would like to match with then we proceed using linearity in much the same way we did the previous example.    "
},
{
  "id": "r-01-15-22",
  "level": "2",
  "url": "r-01-15.html#r-01-15-22",
  "type": "Example",
  "number": "4.27",
  "title": "",
  "body": " Find the inverse Laplace transform of .   We aim to make this function match , as follows.    "
},
{
  "id": "r-01-15-25",
  "level": "2",
  "url": "r-01-15.html#r-01-15-25",
  "type": "Example",
  "number": "4.28",
  "title": "",
  "body": " Find the inverse Laplace transform of .   As a general guideline, you are advised to consider the denominator when determining trying to determine which property or properties in the Laplace transform table might be appropriate. In this case, we have a second-degree polynomial in the denominator. None of the properties in the table looks exactly the same, but and do have second-degree polynomials in the denominator. We just need to make our expression look like the form of those denominators, This entails completing the square.  Margin note: if you need to review completing the square, look HERE.      Margin note: Notice that the sign on the 4 is positive. If the sign had been negative, this would not be a perfect match with the table and we'd have to use a different strategy. See Example (insert number here).   Now that we have changed the way looks, we see that it is a perfect match with , with and Thus, we can take its inverse Laplace transform.    "
},
{
  "id": "r-01-15-26",
  "level": "2",
  "url": "r-01-15.html#r-01-15-26",
  "type": "Example",
  "number": "4.29",
  "title": "",
  "body": " Find the inverse Laplace transform of .   As in the previous example, we have a second-degree polynomial in the denominator, so we might try to make this expression match and\/or in the table. We begin by completing the square.   Now we have the denominator in a format so that it matches with or , but unlike the previous example, the numerator is not an exact match with either or . We note that the numerator does have an in it, so we will start by aiming to see if we can make it a match with . If we did have a perfect match with , then we would have in the numerator. Let's focus on the numerator for a moment and consider the following.   In order to make the expressions equal, what value would the have? If we distribute the three, we would have and thus it's clear that should be equal to . Let's use this to rewrite as follows.   The advantage to writing this way is that the first fraction is now a perfect match for . We need to find a perfect match for that second fraction. It looks close to , but not perfect. In order to be a perfect match for , we would need a 3 in the numerator. Luckily, we can multiply by one (in the form of in order to get a 3 in the numerator, as follows.   Now that we have done some algebraic manipulation, we are now ready to take the inverse Laplace transform.    "
},
{
  "id": "r-01-15-27",
  "level": "2",
  "url": "r-01-15.html#r-01-15-27",
  "type": "Example",
  "number": "4.30",
  "title": "",
  "body": " Find    We complete the square in the denominator in the function   This does not immediately appear to match or , but we can actually write the denominator as and proceed as in the previous examples, working toward matching and .    "
},
{
  "id": "r-01-15-28",
  "level": "2",
  "url": "r-01-15.html#r-01-15-28",
  "type": "Example",
  "number": "4.31",
  "title": "",
  "body": " Find    As in the previous examples, the denominator is a second-degree polynomial; therefore it is sensible for us to begin by completing the square in the denominator as we did in the previous two examples.   Take a careful look at the denominator here. It's really close to matching or , but it is not a match because of the negative sign in front of the We need to change course when this happens. Another algebraic manipulation that we might consider is a partial fraction decomposition.   Margin note: If you need to review partial fraction decomposition, go HERE.    We revert to the original expression, but this time, instead of completing the square, we factor the denominator.   Since each of the factors in the denominator is a distinct linear factor, we know that the form of the partial fraction decomposition is   Our next goal is to determine the coefficients and in this equations. There are multiple ways to achieve this and we demonstrate just one here. We multiply both sides of the equation by the least common denominator, , and then expand and collect like terms, as shown.   At this point, we have a polynomial on the left hand side and a polynomial on the right hand side. The only way these can be equal to each other is if the corresponding coefficients are equal. That is, the coefficient on on the left hand side is 1, while the coefficient on on the right hand side of the equation is . Since the polynomials are equal, we know that these are equal. That is, Similarly, if we equate the constants, we have Thus, we have the following system of two linear equations in terms of two unknown variables, and .   There are many ways to solve such an equation, and you are encouraged to choose the solution technique you like the most. Here we will solve the first equation for , and then substitute into the second equation, hence we have   Remember that our goal is to take the inverse Laplace transform. Our algebraic manipulation was helpful because we took a more complex expression and rewrote it as two simpler fractions. We can now use to find the inverse Laplace transform as follows.    "
},
{
  "id": "r-01-15-31",
  "level": "2",
  "url": "r-01-15.html#r-01-15-31",
  "type": "Example",
  "number": "4.32",
  "title": "",
  "body": " Find the inverse Laplace transform of    Note that as the quadratic term in the denominator does not factor, the denominator contains an irreducible quadratic factor and a repeated linear factor. We'll proceed by simplifying this complicated fraction with a Partial Fraction Decomposition of the form   You may also consider using technology to find a partial fraction decomposition. You should get  Click here for the details.   With the partial fraction decomposition in hand, we are prepared to take the inverse Laplace transform, using the same types of algebraic manipulations demonstrated in the previous examples.    "
},
{
  "id": "r-01-15-37-2",
  "level": "2",
  "url": "r-01-15.html#r-01-15-37-2",
  "type": "Example",
  "number": "4.33",
  "title": "",
  "body": " Compute .   Using the product rule, we have    "
},
{
  "id": "main-6-4-6",
  "level": "1",
  "url": "main-6-4-6.html",
  "type": "Subsection",
  "number": "4.2.4",
  "title": "Matching Forms, Part 2",
  "body": "Matching Forms, Part 2  Two other forms we may wish to match when we study Laplace transforms are As before, we work toward making the denominator match first , and then we sort out the numerator second.   Write in the form   If you prefer to see a video of this example, click here    Since has a quadratic function in the denominator, it makes sense that we would try to match it with one of the forms above, however, the form of the numerator suggests matching it with the second expression. As we mentioned earlier, we'll try to make the denominator match first. Since both of the forms we're trying to match are of the form we will complete the square first: (If you still don't remember how to complete the square, look up that primer and do the previous exercises in that section above.)  Let's rewrite the given expression as follows.   We've got the denominator in exactly the right form--it looks just like with and . As in the previous section, once we've gotten the denominator in shape, we turn our attention to the numerator. If we look back at the two forms we are trying to match, we see that our expression has an in the numerator, so it's more like . It would be exactly right if we had in the numerator, which in this case would be .  What we do have in the numerator is ; and we would like it to be which means if we added 4, we'd have exactly the right thing. If we want to add 4, we'll need to compensate by also subtracting 4, like this:   Great! Now we can split this single fraction into two separate fractions: We're almost there! The first fraction is a perfect match for the form (with and ); but we still have another expression that is not yet a match. The remaining fraction looks like it could eventually match the form . We would need to have a 5 in the numerator, and we currently have a 4. But we can fix that as we did in the previous section: Now let's put it all together. Here's everything we did:   As mentioned before, being able to use appropriate algebra to \"match\" forms is really important when we work with Laplace Transforms. Since it's really just algebra, now is a great time to practice that skill--so when we are in the middle of studying Laplace Transforms, you can just focus on the \"new\" stuff.   Now you try some!   Manipulate each of the following expressions to make it match the form and\/or                                           Now that's you've been practicing manipulating expressions to get them to match a particular, specific form, it's time to practice picking out which form an expression is most like. Find the form(s) on the right that best match the expression on the left. It may not be a perfect match, but could be manipulated (as we did above) to get into the correct form(s).  (EXAMPLE)  This best matches form F.    %D   %B   %A   %forms G and H   %C   %forms D and E                               This best matches form F.  This best matches form D.  This best matches form B.  This best matches form A.  This best matches form forms G and H.  This best matches form C.  This best matches form forms D and E.        Check your Understanding   Compute .   Using the product rule, we have      "
},
{
  "id": "ex_matching_forms_part_2",
  "level": "2",
  "url": "main-6-4-6.html#ex_matching_forms_part_2",
  "type": "Example",
  "number": "4.34",
  "title": "Write <span class=\"process-math\">\\(\\ds\\frac{s-6}{s^2 - 4s + 29}\\)<\/span> in the form <span class=\"process-math\">\\(\\ds\\frac{s-a}{(s-a)^2 + b^2}\\)<\/span>.",
  "body": " Write in the form   If you prefer to see a video of this example, click here    Since has a quadratic function in the denominator, it makes sense that we would try to match it with one of the forms above, however, the form of the numerator suggests matching it with the second expression. As we mentioned earlier, we'll try to make the denominator match first. Since both of the forms we're trying to match are of the form we will complete the square first: (If you still don't remember how to complete the square, look up that primer and do the previous exercises in that section above.)  Let's rewrite the given expression as follows.   We've got the denominator in exactly the right form--it looks just like with and . As in the previous section, once we've gotten the denominator in shape, we turn our attention to the numerator. If we look back at the two forms we are trying to match, we see that our expression has an in the numerator, so it's more like . It would be exactly right if we had in the numerator, which in this case would be .  What we do have in the numerator is ; and we would like it to be which means if we added 4, we'd have exactly the right thing. If we want to add 4, we'll need to compensate by also subtracting 4, like this:   Great! Now we can split this single fraction into two separate fractions: We're almost there! The first fraction is a perfect match for the form (with and ); but we still have another expression that is not yet a match. The remaining fraction looks like it could eventually match the form . We would need to have a 5 in the numerator, and we currently have a 4. But we can fix that as we did in the previous section: Now let's put it all together. Here's everything we did:   As mentioned before, being able to use appropriate algebra to \"match\" forms is really important when we work with Laplace Transforms. Since it's really just algebra, now is a great time to practice that skill--so when we are in the middle of studying Laplace Transforms, you can just focus on the \"new\" stuff.  "
},
{
  "id": "main-6-4-6-5-2",
  "level": "2",
  "url": "main-6-4-6.html#main-6-4-6-5-2",
  "type": "Example",
  "number": "4.35",
  "title": "",
  "body": " Compute .   Using the product rule, we have    "
},
{
  "id": "main-6-4-7",
  "level": "1",
  "url": "main-6-4-7.html",
  "type": "Subsection",
  "number": "4.2.5",
  "title": "Summary &amp; Exercises",
  "body": "Summary & Exercises    Summary of the Key Ideas    Method             Use the definition of Laplace Transform (above) to find the Laplace Transform of    \\\\ In order to evaluate this integral, we will need to compute an integration by parts. When that time comes, we will choose an Then we take the derivative o to fin and the antiderivative o to fin , as follows. Note also that we will use L'Hospital's Rule when we have a limit of for         Use the definition of Laplace Transform (above) to find the Laplace Transform of where is some constant.   \\\\       Use the definition of Laplace Transform (above) to find the Laplace Transform of .   \\\\ We will use the results from the previous two questions. Notice that what we showed in the middle of all this is that This is an example of the linearity property of Laplace Transforms.      Use the definition of Laplace Transform (above) to find the Laplace Transform of the function                                                                                  For this solution, we will need to use property L14 wit We will need to know the Laplace transform for this function, so let's do that now. Then we have the following. Note that when we use the quotient rule to take the derivative o .                For this solution, we will need to use property L14 wit We will need to know the Laplace transform for this function, so let's do that now. In using L14, we will also need the second derivative o so we work to compute that now. Note that we will use the chain rule when we take the derivative o . Then we have the following.       (Level 1) Find the inverse Laplace transform of each function.                                                   (Level 2) Find the inverse Laplace transform of each function.                                                         (Level 3) Find the inverse Laplace transform of each function.                           Solve each equation fo then fin                    "
},
{
  "id": "main-6-4-7-2-1",
  "level": "2",
  "url": "main-6-4-7.html#main-6-4-7-2-1",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": " Method  "
},
{
  "id": "main-6-4-7-3-1-2",
  "level": "2",
  "url": "main-6-4-7.html#main-6-4-7-3-1-2",
  "type": "Exercise",
  "number": "4.2.5.1",
  "title": "",
  "body": " Use the definition of Laplace Transform (above) to find the Laplace Transform of    \\\\ In order to evaluate this integral, we will need to compute an integration by parts. When that time comes, we will choose an Then we take the derivative o to fin and the antiderivative o to fin , as follows. Note also that we will use L'Hospital's Rule when we have a limit of for    "
},
{
  "id": "main-6-4-7-3-2-2",
  "level": "2",
  "url": "main-6-4-7.html#main-6-4-7-3-2-2",
  "type": "Exercise",
  "number": "4.2.5.2",
  "title": "",
  "body": " Use the definition of Laplace Transform (above) to find the Laplace Transform of where is some constant.   \\\\  "
},
{
  "id": "main-6-4-7-3-3-2",
  "level": "2",
  "url": "main-6-4-7.html#main-6-4-7-3-3-2",
  "type": "Exercise",
  "number": "4.2.5.3",
  "title": "",
  "body": " Use the definition of Laplace Transform (above) to find the Laplace Transform of .   \\\\ We will use the results from the previous two questions. Notice that what we showed in the middle of all this is that This is an example of the linearity property of Laplace Transforms. "
},
{
  "id": "main-6-4-7-3-4-2",
  "level": "2",
  "url": "main-6-4-7.html#main-6-4-7-3-4-2",
  "type": "Exercise",
  "number": "4.2.5.4",
  "title": "",
  "body": " Use the definition of Laplace Transform (above) to find the Laplace Transform of the function      "
},
{
  "id": "main-6-4-7-3-5-2",
  "level": "2",
  "url": "main-6-4-7.html#main-6-4-7-3-5-2",
  "type": "Exercise",
  "number": "4.2.5.5",
  "title": "",
  "body": "    "
},
{
  "id": "main-6-4-7-3-6-2",
  "level": "2",
  "url": "main-6-4-7.html#main-6-4-7-3-6-2",
  "type": "Exercise",
  "number": "4.2.5.6",
  "title": "",
  "body": "      "
},
{
  "id": "main-6-4-7-3-7-2",
  "level": "2",
  "url": "main-6-4-7.html#main-6-4-7-3-7-2",
  "type": "Exercise",
  "number": "4.2.5.7",
  "title": "",
  "body": "      "
},
{
  "id": "main-6-4-7-3-8-2",
  "level": "2",
  "url": "main-6-4-7.html#main-6-4-7-3-8-2",
  "type": "Exercise",
  "number": "4.2.5.8",
  "title": "",
  "body": "      "
},
{
  "id": "main-6-4-7-3-9-2",
  "level": "2",
  "url": "main-6-4-7.html#main-6-4-7-3-9-2",
  "type": "Exercise",
  "number": "4.2.5.9",
  "title": "",
  "body": "    For this solution, we will need to use property L14 wit We will need to know the Laplace transform for this function, so let's do that now. Then we have the following. Note that when we use the quotient rule to take the derivative o .  "
},
{
  "id": "main-6-4-7-3-10-2",
  "level": "2",
  "url": "main-6-4-7.html#main-6-4-7-3-10-2",
  "type": "Exercise",
  "number": "4.2.5.10",
  "title": "",
  "body": "    For this solution, we will need to use property L14 wit We will need to know the Laplace transform for this function, so let's do that now. In using L14, we will also need the second derivative o so we work to compute that now. Note that we will use the chain rule when we take the derivative o . Then we have the following.  "
},
{
  "id": "main-6-4-7-3-11-2",
  "level": "2",
  "url": "main-6-4-7.html#main-6-4-7-3-11-2",
  "type": "Exercise",
  "number": "4.2.5.11",
  "title": "",
  "body": "     "
},
{
  "id": "main-6-4-7-3-11-3",
  "level": "2",
  "url": "main-6-4-7.html#main-6-4-7-3-11-3",
  "type": "Exercise",
  "number": "4.2.5.12",
  "title": "",
  "body": "     "
},
{
  "id": "main-6-4-7-3-11-4",
  "level": "2",
  "url": "main-6-4-7.html#main-6-4-7-3-11-4",
  "type": "Exercise",
  "number": "4.2.5.13",
  "title": "",
  "body": "     "
},
{
  "id": "main-6-4-7-3-11-5",
  "level": "2",
  "url": "main-6-4-7.html#main-6-4-7-3-11-5",
  "type": "Exercise",
  "number": "4.2.5.14",
  "title": "",
  "body": "     "
},
{
  "id": "main-6-4-7-3-11-6",
  "level": "2",
  "url": "main-6-4-7.html#main-6-4-7-3-11-6",
  "type": "Exercise",
  "number": "4.2.5.15",
  "title": "",
  "body": "     "
},
{
  "id": "main-6-4-7-3-11-7",
  "level": "2",
  "url": "main-6-4-7.html#main-6-4-7-3-11-7",
  "type": "Exercise",
  "number": "4.2.5.16",
  "title": "",
  "body": "     "
},
{
  "id": "main-6-4-7-3-11-8",
  "level": "2",
  "url": "main-6-4-7.html#main-6-4-7-3-11-8",
  "type": "Exercise",
  "number": "4.2.5.17",
  "title": "",
  "body": "     "
},
{
  "id": "main-6-4-7-3-12-2",
  "level": "2",
  "url": "main-6-4-7.html#main-6-4-7-3-12-2",
  "type": "Exercise",
  "number": "4.2.5.18",
  "title": "",
  "body": "     "
},
{
  "id": "main-6-4-7-3-12-3",
  "level": "2",
  "url": "main-6-4-7.html#main-6-4-7-3-12-3",
  "type": "Exercise",
  "number": "4.2.5.19",
  "title": "",
  "body": "     "
},
{
  "id": "main-6-4-7-3-12-4",
  "level": "2",
  "url": "main-6-4-7.html#main-6-4-7-3-12-4",
  "type": "Exercise",
  "number": "4.2.5.20",
  "title": "",
  "body": "     "
},
{
  "id": "main-6-4-7-3-12-5",
  "level": "2",
  "url": "main-6-4-7.html#main-6-4-7-3-12-5",
  "type": "Exercise",
  "number": "4.2.5.21",
  "title": "",
  "body": "     "
},
{
  "id": "main-6-4-7-3-12-6",
  "level": "2",
  "url": "main-6-4-7.html#main-6-4-7-3-12-6",
  "type": "Exercise",
  "number": "4.2.5.22",
  "title": "",
  "body": "     "
},
{
  "id": "main-6-4-7-3-12-7",
  "level": "2",
  "url": "main-6-4-7.html#main-6-4-7-3-12-7",
  "type": "Exercise",
  "number": "4.2.5.23",
  "title": "",
  "body": "     "
},
{
  "id": "main-6-4-7-3-12-8",
  "level": "2",
  "url": "main-6-4-7.html#main-6-4-7-3-12-8",
  "type": "Exercise",
  "number": "4.2.5.24",
  "title": "",
  "body": "     "
},
{
  "id": "main-6-4-7-3-12-9",
  "level": "2",
  "url": "main-6-4-7.html#main-6-4-7-3-12-9",
  "type": "Exercise",
  "number": "4.2.5.25",
  "title": "",
  "body": "     "
},
{
  "id": "main-6-4-7-3-13-2",
  "level": "2",
  "url": "main-6-4-7.html#main-6-4-7-3-13-2",
  "type": "Exercise",
  "number": "4.2.5.26",
  "title": "",
  "body": "     "
},
{
  "id": "main-6-4-7-3-13-3",
  "level": "2",
  "url": "main-6-4-7.html#main-6-4-7-3-13-3",
  "type": "Exercise",
  "number": "4.2.5.27",
  "title": "",
  "body": "     "
},
{
  "id": "main-6-4-7-3-13-4",
  "level": "2",
  "url": "main-6-4-7.html#main-6-4-7-3-13-4",
  "type": "Exercise",
  "number": "4.2.5.28",
  "title": "",
  "body": "     "
},
{
  "id": "main-6-4-7-3-14-2",
  "level": "2",
  "url": "main-6-4-7.html#main-6-4-7-3-14-2",
  "type": "Exercise",
  "number": "4.2.5.29",
  "title": "",
  "body": "     "
},
{
  "id": "main-6-4-7-3-14-3",
  "level": "2",
  "url": "main-6-4-7.html#main-6-4-7-3-14-3",
  "type": "Exercise",
  "number": "4.2.5.30",
  "title": "",
  "body": "     "
},
{
  "id": "main-6-4-8",
  "level": "1",
  "url": "main-6-4-8.html",
  "type": "Subsection",
  "number": "4.2.6",
  "title": "Orphaned Content",
  "body": "Orphaned Content   This is just a place to put content that was written and may or not be used.   Additional Examples   Additional Practice   "
},
{
  "id": "main-6-5-3",
  "level": "1",
  "url": "main-6-5-3.html",
  "type": "Subsection",
  "number": "4.3.1",
  "title": "Pig Bicture Review",
  "body": "Pig Bicture Review    Check your Understanding    What ?    The     "
},
{
  "id": "main-6-5-3-3-2",
  "level": "2",
  "url": "main-6-5-3.html#main-6-5-3-3-2",
  "type": "Example",
  "number": "4.36",
  "title": "",
  "body": "  What ?    The   "
},
{
  "id": "sec-lt-method-pt1",
  "level": "1",
  "url": "sec-lt-method-pt1.html",
  "type": "Section",
  "number": "4.3.1",
  "title": "Solving DEs via Laplace Transforms",
  "body": "Solving DEs via Laplace Transforms  So far we've learned the definition of Laplace transform, developed a table so that we could more easily find Laplace transforms, and then figured out how to use the table to take inverse Laplace transforms. We are finally ready to use all of this to actually solve some DEs. First, let's refer once more to the roadmap we'll use when we solve DEs using this technique.  Before we begin, we should take note of when it's appropriate to use this technique. We can use Laplace transforms to solve DEs that are linear, have constant coefficients, and for which we have initial conditions. (We can relax this last condition if we want to, but for the most part we will focus on solving initial value problems.)   Solve the following initial value problem.    We intend to use Laplace transforms to solve this IVP, but we need to verify that this is an appropriate technique. We can verify that this is  the DE is linear,  the DE has constant coefficients, and  initial conditions are .    Hence, it is appropriate to proceed with the Laplace transform solution technique. We also note that is the dependent variable and is the independent variable, so our goal is to find a function that satisfies the DE and the initial conditions.   Margin note: We could actually use the method of undetermined coefficients. You are encouraged to do this and verify that the solution is the same.   Following the diagram , we begin by taking the Laplace transform of the DE. Let's look at some of the individual pieces.  We will need to take the Laplace transform of . Keep in mind that while it is not explicitly written, we do know that is a function of , so this could be written For the first time, we will use , being careful with our naming convention.   Similarly,   We also need to be careful about taking the Laplace transform of itself. Since is our unknown function, we don't know what we get when we take its Laplace transform, The only thing we can do is use the naming convention we have established: the Laplace transform of a function is the function That is,     With these facts in mind, we proceed to take the Laplace transform of both sides of the DE, using linearity as needed.   We can use the provided initial conditions and then simplify the equation.   Now we are prepared to move on to the second step suggested in the roadmap in ( the figure ): use algebra to solve for    The next step we need to take is to find the inverse Laplace transform of both sides of the equation.   We are almost done! Our goal is to find the unknown function , and we have isolated on the left hand side of the equation. The only thing we have left to do is find the inverse Laplace transform of the right hand side. Here we refer back to the techniques we learned in the previous section. In particular, we are going to need to find the partial fraction decomposition of the rational function. First we note that the quadratic expression is irreducible, confirmed by the addition outside the parentheses when we complete the square (which we will use later).   After applying partial fraction decomposition, we obtain    Now we proceed to do more algebraic manipulation to find the inverse Laplace transform.   Thus, we have found the desired unknown function this isn't correct...?   Optional: verify the solution.   In this example, we used LTs to solve the differential equation with algebra, not integration. We then confirmed our solution was correct by verifying it satisfied both the original DE and the initial conditions.    In summary, if we have a DE that is linear, has constant coefficients, and has initial conditions, we can solve using the Laplace transform solution technique. For the purposes of this discussion, we will assume that is the independent variable and that is the dependent variable. We solve via the Laplace transform as follows.  Take the Laplace transform of the DE. This should yield an algebraic equation that contains , and the initial conditions  etc.  Substitute in the given values for the initial conditions.  Use algebra to solve for   Take the inverse Laplace transform of both sides of the equation to yield the solution   If desired, check that you have the correct solution by verifying that it satisfies the DE and the initial conditions.     Solve    We intend to use Laplace transforms to solve this IVP, but we need to verify that this is an appropriate technique. We can verify that this is  the DE is linear,  the DE has constant coefficients, and  initial conditions are provided.    Hence, it is appropriate to proceed with the Laplace transform solution technique. We also note that is the dependent variable and is the independent variable, so our goal is to find a function that satisfies the DE and the initial conditions.   Margin note: We could actually use the method of undetermined coefficients. You are encouraged to do this and verify that the solution is the same.   We begin by taking the Laplace transform of both sides of the DE, using linearity as needed.   Now we use the provided initial conditions.   Next we will use algebra to solve for    We need to find the inverse Laplace transform of both sides of the equation. In order to do that, we apply partial fraction decomposition to the rational function on the right hand side, giving    Now we are prepared to take the inverse Laplace transform.   Thus, we have found the desired unknown function   Optional: verify the solution    We also verify the initial conditions:     Check your Understanding    What is the first step in the Laplace transform solution technique?    The first step in the Laplace transform solution technique is to take the Laplace transform of the differential equation.     "
},
{
  "id": "sec-lt-method-pt1-4",
  "level": "2",
  "url": "sec-lt-method-pt1.html#sec-lt-method-pt1-4",
  "type": "Example",
  "number": "4.37",
  "title": "",
  "body": " Solve the following initial value problem.    We intend to use Laplace transforms to solve this IVP, but we need to verify that this is an appropriate technique. We can verify that this is  the DE is linear,  the DE has constant coefficients, and  initial conditions are .    Hence, it is appropriate to proceed with the Laplace transform solution technique. We also note that is the dependent variable and is the independent variable, so our goal is to find a function that satisfies the DE and the initial conditions.   Margin note: We could actually use the method of undetermined coefficients. You are encouraged to do this and verify that the solution is the same.   Following the diagram , we begin by taking the Laplace transform of the DE. Let's look at some of the individual pieces.  We will need to take the Laplace transform of . Keep in mind that while it is not explicitly written, we do know that is a function of , so this could be written For the first time, we will use , being careful with our naming convention.   Similarly,   We also need to be careful about taking the Laplace transform of itself. Since is our unknown function, we don't know what we get when we take its Laplace transform, The only thing we can do is use the naming convention we have established: the Laplace transform of a function is the function That is,     With these facts in mind, we proceed to take the Laplace transform of both sides of the DE, using linearity as needed.   We can use the provided initial conditions and then simplify the equation.   Now we are prepared to move on to the second step suggested in the roadmap in ( the figure ): use algebra to solve for    The next step we need to take is to find the inverse Laplace transform of both sides of the equation.   We are almost done! Our goal is to find the unknown function , and we have isolated on the left hand side of the equation. The only thing we have left to do is find the inverse Laplace transform of the right hand side. Here we refer back to the techniques we learned in the previous section. In particular, we are going to need to find the partial fraction decomposition of the rational function. First we note that the quadratic expression is irreducible, confirmed by the addition outside the parentheses when we complete the square (which we will use later).   After applying partial fraction decomposition, we obtain    Now we proceed to do more algebraic manipulation to find the inverse Laplace transform.   Thus, we have found the desired unknown function this isn't correct...?   Optional: verify the solution.   In this example, we used LTs to solve the differential equation with algebra, not integration. We then confirmed our solution was correct by verifying it satisfied both the original DE and the initial conditions.   "
},
{
  "id": "sec-lt-method-pt1-6",
  "level": "2",
  "url": "sec-lt-method-pt1.html#sec-lt-method-pt1-6",
  "type": "Example",
  "number": "4.38",
  "title": "",
  "body": " Solve    We intend to use Laplace transforms to solve this IVP, but we need to verify that this is an appropriate technique. We can verify that this is  the DE is linear,  the DE has constant coefficients, and  initial conditions are provided.    Hence, it is appropriate to proceed with the Laplace transform solution technique. We also note that is the dependent variable and is the independent variable, so our goal is to find a function that satisfies the DE and the initial conditions.   Margin note: We could actually use the method of undetermined coefficients. You are encouraged to do this and verify that the solution is the same.   We begin by taking the Laplace transform of both sides of the DE, using linearity as needed.   Now we use the provided initial conditions.   Next we will use algebra to solve for    We need to find the inverse Laplace transform of both sides of the equation. In order to do that, we apply partial fraction decomposition to the rational function on the right hand side, giving    Now we are prepared to take the inverse Laplace transform.   Thus, we have found the desired unknown function   Optional: verify the solution    We also verify the initial conditions:    "
},
{
  "id": "sec-lt-method-pt1-7-2",
  "level": "2",
  "url": "sec-lt-method-pt1.html#sec-lt-method-pt1-7-2",
  "type": "Example",
  "number": "4.39",
  "title": "",
  "body": "  What is the first step in the Laplace transform solution technique?    The first step in the Laplace transform solution technique is to take the Laplace transform of the differential equation.   "
},
{
  "id": "main-6-5-5",
  "level": "1",
  "url": "main-6-5-5.html",
  "type": "Subsection",
  "number": "4.3.2",
  "title": "Summary &amp; Exercises",
  "body": "Summary & Exercises    Summary of the Key Ideas    Method                  Use Laplace transforms to find the solutio of the following initial value problem.    We begin by taking the Laplace transform and substituting in the initial conditions. Now we aim to solve fo so we use algebra to rearrange as follows. We need to do a partial fraction decomposition before we can take the inverse LT. Equating the coefficients of like terms yields, we can solve fo  , an . Hence we have Now we need only take the inverse LT to find the solution.            Use Laplace transforms to find the solutio of the following initial value problem.    We begin by taking the Laplace transform and substituting in the initial conditions. Now we aim to solve fo so we use algebra to rearrange as follows. We need to do a partial fraction decomposition before we can take the inverse LT. Equating the coefficients of like terms yields, we can solve fo  , an . Hence, we have \\begin{equation} Y(s) = \\frac{-1}{s+1} + \\frac{3s+5}{s^2 - 2s + 5}. \\label{Y_of_s} \\end{equation} We need to take the inverse Laplace Transform to fin We need to complete the square on the irreducible quadratic term as follows. We need to transform the second term, as follows, so we can use L8 and L7 on the Laplace transform table. We are now prepared to take the inverse LT of equation \\ref{Y_of_s} to get the solution to the IVP.     "
},
{
  "id": "main-6-5-5-2-1",
  "level": "2",
  "url": "main-6-5-5.html#main-6-5-5-2-1",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": " Method  "
},
{
  "id": "main-6-5-5-3-1-2",
  "level": "2",
  "url": "main-6-5-5.html#main-6-5-5-3-1-2",
  "type": "Exercise",
  "number": "4.3.2.1",
  "title": "",
  "body": "Use Laplace transforms to find the solutio of the following initial value problem.    We begin by taking the Laplace transform and substituting in the initial conditions. Now we aim to solve fo so we use algebra to rearrange as follows. We need to do a partial fraction decomposition before we can take the inverse LT. Equating the coefficients of like terms yields, we can solve fo  , an . Hence we have Now we need only take the inverse LT to find the solution.  "
},
{
  "id": "main-6-5-5-3-2-2",
  "level": "2",
  "url": "main-6-5-5.html#main-6-5-5-3-2-2",
  "type": "Exercise",
  "number": "4.3.2.2",
  "title": "",
  "body": "Use Laplace transforms to find the solutio of the following initial value problem.    We begin by taking the Laplace transform and substituting in the initial conditions. Now we aim to solve fo so we use algebra to rearrange as follows. We need to do a partial fraction decomposition before we can take the inverse LT. Equating the coefficients of like terms yields, we can solve fo  , an . Hence, we have \\begin{equation} Y(s) = \\frac{-1}{s+1} + \\frac{3s+5}{s^2 - 2s + 5}. \\label{Y_of_s} \\end{equation} We need to take the inverse Laplace Transform to fin We need to complete the square on the irreducible quadratic term as follows. We need to transform the second term, as follows, so we can use L8 and L7 on the Laplace transform table. We are now prepared to take the inverse LT of equation \\ref{Y_of_s} to get the solution to the IVP.  "
},
{
  "id": "main-6-5-6",
  "level": "1",
  "url": "main-6-5-6.html",
  "type": "Subsection",
  "number": "4.3.3",
  "title": "Orphaned Content",
  "body": "Orphaned Content   This is just a place to put content that was written and may or not be used.   Additional Examples   Additional Practice   "
},
{
  "id": "main-6-6",
  "level": "1",
  "url": "main-6-6.html",
  "type": "Section",
  "number": "4.4",
  "title": "Piecewise Forcing Functions",
  "body": "Piecewise Forcing Functions   "
},
{
  "id": "main-6-7",
  "level": "1",
  "url": "main-6-7.html",
  "type": "Section",
  "number": "4.5",
  "title": "Unit Step Functions",
  "body": "Unit Step Functions   "
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
  "id": "main-9",
  "level": "1",
  "url": "main-9.html",
  "type": "Appendix",
  "number": "A",
  "title": "Algebra Review",
  "body": "Algebra Review      "
},
{
  "id": "main-10-2",
  "level": "1",
  "url": "main-10-2.html",
  "type": "Section",
  "number": "B.1",
  "title": "Laplace Transforms",
  "body": "Laplace Transforms   Notice that when , the term in the integral becomes and we, instead, would get This shows that when , the integral does not converge ( does not exist ) as required by the definition of the Laplace Transform. Therefore, when working with Laplace transforms, it is common restrict some values of .   When , the the integral becomes Therefore, we must have for this integral to be finite.   If , then as , we would have and so This shows the Laplace transform would not exist if . Therefore, we must require .   Since the limit only controls , we treat as a constant, hence is also a constant that can be pulled out of the limit.   Since , then and therefore,    We've seen the second limit, but let's review it again. If , then and The first limit requires L'Hopital's rule. Remember, when using L'Hopital's rule here, we must take derivatives with respect to (where is constant). Here are the details:           Key Steps         Key Steps         Key Steps       Yes, good job!   No, that's incorrect. The dependent variable is always the variable with the derivative.                           Equating coefficients gives us four equations in four unknowns.      Partial fraction decomposition has the form, and we find , , and by           We also verify the initial conditions:    "
},
{
  "id": "s-zz-videos",
  "level": "1",
  "url": "s-zz-videos.html",
  "type": "Section",
  "number": "B.2",
  "title": "Videos",
  "body": "Videos                                                                        "
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
